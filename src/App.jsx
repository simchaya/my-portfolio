import './App.css'
import Hero from './Hero'
import ProjectsSection from './ProjectsSection'
import portfolioData from './models/info.js'

function App() {
  return (
    <div className="App">
      <Hero 
        name={portfolioData.personalInfo.name}
        title={portfolioData.personalInfo.title}
        bio={portfolioData.personalInfo.bio}
      />
      
      <ProjectsSection 
        projects={portfolioData.projects}
      />
    </div>
  )
}

export default App