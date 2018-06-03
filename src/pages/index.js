import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hello, I'm <span className="bold">Anharu</span>
        </h5>

        <h3 className="bold">
            A engineer who is a third grade junior high school student. I want to become a Cool and Genious engineer not substituted for AI. 
        </h3>
        <ProjectsSection />
        <ExperienceSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
