import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import TagumaruLogo from '../../assets/images/projects/tagumaru.jpg'
import littleNomadLogo from '../../assets/images/projects/cretink_web.png'
import walkthroughViewGif from '../../assets/images/projects/liblog.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={littleNomadLogo}
            colour="#FFFFFF"
            title="Cretink of WebService"
            link="https://cretink.tk/"
            timeperiod="2018 - ???"
            subtitle="the service for creating ideas of WebService(developing)."
          />
          <ExperienceUnit
            logo={TagumaruLogo}
            colour="#fff"
            title="たぐまる(仮)"
            link=""
            timeperiod="2018 - ???"
            subtitle="collecting information WebService for engineers(developing). Rails + React."
          />
          <ExperienceUnit
            logo={walkthroughViewGif}
            colour="#fff"
            title="Lib-Log!"
            link="http://intense-waters-57765.herokuapp.com/"
            timeperiod="2017"
            subtitle="recoding the books you read WebService."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
