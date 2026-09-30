import Navigation from '../components/Navigation';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import ForestScene from '../components/scenery/ForestScene';
import SceneLayer from '../components/scenery/SceneLayer';
import { BEHIND_PANEL_ITEMS, MOBILE_EXTRA_ITEMS } from '../components/scenery/sceneryItems';
import { profileData } from '../data/profileData';

export default function App() {
  return (
    <div className="page">
      <ForestScene side="left" />

      <main className="panel">
        <SceneLayer items={BEHIND_PANEL_ITEMS} />
        <SceneLayer items={MOBILE_EXTRA_ITEMS} className="mobileOnly" />

        <div className="panelContent">
          <Navigation />

          <div className="panelSections">
            <Introduction data={profileData} />
            <Skills skills={profileData.skills} />
            <WorkExperience experiences={profileData.workExperience} />
            <Projects projects={profileData.projects} />
            <Footer data={profileData} />
          </div>
        </div>
      </main>

      <ForestScene side="right" />
    </div>
  );
}
