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
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
      introduction: introRef,
      experience: experienceRef,
      projects: projectsRef,
      contact: contactRef,
    };

    const ref = refs[section];
    if (ref?.current) {
      const targetPosition = ref.current.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Navigation scrollToSection={scrollToSection} />
      
      <div ref={introRef}>
        <Introduction data={profileData} />
      </div>

      <Skills skills={profileData.skills} />

      <div ref={experienceRef}>
        <WorkExperience experiences={profileData.workExperience} />
      </div>

      <div ref={projectsRef}>
        <Projects projects={profileData.projects} />
      </div>

      <div ref={contactRef}>
        <Footer data={profileData} />
      </div>
    </main>
  );
}
