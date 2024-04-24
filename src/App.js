import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import TopContainer from './components/Header/TopContainer/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';
// import TopContent from './components/Header/TopContent/topContent';

function App() {
  return (
    <div >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header></Header>
      <TopContainer></TopContainer>
      <SkillContainer></SkillContainer>
      <ProjectContainer></ProjectContainer>
      <ExperienceContainer></ExperienceContainer>
      <Contact></Contact>
    </div>
  );
}

export default App;
 