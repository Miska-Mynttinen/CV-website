import { useRef } from 'react';
import Navigation from '../components/Navigation';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { profileData } from '../data/profileData';

export default function App() {
  // Refs used for scrolling to the specific section when a navigation link is clicked
  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionWrapperStyle = { scrollMarginTop: '44px' };

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
  );
}
