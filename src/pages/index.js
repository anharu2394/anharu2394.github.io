import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Link from "gatsby-link"

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hello, I'm <span className="bold">Anharu</span>
        </h5>

        <h3 className="bold">
            An engineer & third grade junior high school student. I would like to be a great engineer that will not be replaced by AI.
        </h3>
        <ProjectsSection />
        <ExperienceSection />
        <Link to="/blog" ><h6 className="blog-link">Blog</h6></Link>
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
