import { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { profileData } from '../data/profileData';

const TILE_SIZE = 28;
const ROW_STEP_MS = 420;
const COLUMN_STEP_MS = 80;
const VISIBLE_DURATION_MS = 500;
const HIDDEN_PAUSE_MS = 5000;

export default function App() {
  // Refs used for scrolling to the specific section when a navigation link is clicked
  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const backgroundGridRef = useRef<HTMLDivElement>(null);

  const sectionWrapperStyle = { scrollMarginTop: '38px' };

  useEffect(() => {
    const grid = backgroundGridRef.current;

    if (!grid) {
      return;
    }

    const gridState = { columns: 0, rows: 0 };
    let cycleTimers: number[] = [];

    const clearCycleTimers = () => {
      cycleTimers.forEach((timerId) => {
        window.clearTimeout(timerId);
      });
      cycleTimers = [];
    };

    const buildBackgroundGrid = () => {
      const columns = Math.ceil(window.innerWidth / TILE_SIZE) + 2;
      const rows = Math.ceil(window.innerHeight / TILE_SIZE) + 2;

      gridState.columns = columns;
      gridState.rows = rows;

      grid.style.setProperty('--columns', String(columns));
      grid.style.setProperty('--rows', String(rows));
      grid.style.setProperty('--tile-size', `${TILE_SIZE}px`);

      grid.innerHTML = '';
      const fragment = document.createDocumentFragment();

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const tile = document.createElement('span');
          tile.className = 'background-tile';
          fragment.appendChild(tile);
        }
      }

      grid.appendChild(fragment);
    };

    const scheduleBackgroundCycle = () => {
      clearCycleTimers();

      const tiles = Array.from(grid.querySelectorAll<HTMLSpanElement>('.background-tile'));

      tiles.forEach((tile, index) => {
        const row = Math.floor(index / gridState.columns);
        const column = index % gridState.columns;
        const revealDelay = row * ROW_STEP_MS + column * COLUMN_STEP_MS;

        cycleTimers.push(
          window.setTimeout(() => {
            tile.classList.add('visible');
          }, revealDelay)
        );

        cycleTimers.push(
          window.setTimeout(() => {
            tile.classList.remove('visible');
          }, revealDelay + VISIBLE_DURATION_MS)
        );
      });

      const totalCycleDuration =
        (gridState.rows - 1) * ROW_STEP_MS +
        (gridState.columns - 1) * COLUMN_STEP_MS +
        VISIBLE_DURATION_MS +
        HIDDEN_PAUSE_MS;

      cycleTimers.push(
        window.setTimeout(() => {
          scheduleBackgroundCycle();
        }, totalCycleDuration)
      );
    };

    const handleResize = () => {
      buildBackgroundGrid();
      scheduleBackgroundCycle();
    };

    buildBackgroundGrid();
    scheduleBackgroundCycle();
    window.addEventListener('resize', handleResize);

    return () => {
      clearCycleTimers();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      introduction: introRef,
      skills: skillsRef,
      experience: experienceRef,
      projects: projectsRef,
      contact: contactRef,
    };

    const ref = refs[section];
    ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div ref={backgroundGridRef} className="background-grid" aria-hidden="true" />

      <main>
        <Navigation scrollToSection={scrollToSection} />

        <div ref={introRef} style={sectionWrapperStyle}>
          <Introduction data={profileData} />
        </div>

        <div ref={skillsRef} style={sectionWrapperStyle}>
          <Skills skills={profileData.skills} />
        </div>

        <div ref={experienceRef} style={sectionWrapperStyle}>
          <WorkExperience experiences={profileData.workExperience} />
        </div>

        <div ref={projectsRef} style={sectionWrapperStyle}>
          <Projects projects={profileData.projects} />
        </div>

        <div ref={contactRef} style={sectionWrapperStyle}>
          <Footer data={profileData} />
        </div>
      </main>
    </>
  );
}
