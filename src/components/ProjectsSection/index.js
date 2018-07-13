import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import TagumaruLogo from '../../assets/images/projects/tagmaru_maeashi.png'
import littleNomadLogo from '../../assets/images/projects/cretink_web.png'
import liblogLogo from '../../assets/images/projects/liblog.png'
import PastaClassifierLogo from '../../assets/images/projects/pasta-classifier.jpg' 

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
            subtitle="The service for creating ideas of WebService(in progress)."
          />
          <ExperienceUnit
            logo={TagumaruLogo}
            colour="#fff"
            title="たぐまる"
            link=""
            timeperiod="2018 - ???"
            subtitle="Collecting information WebService for engineers(in progress). Rails + React."
          />
          <ExperienceUnit
            logo={PastaClassifierLogo}
            colour="#fff"
            title="パスタ分類Bot"
            link="https://twitter.com/pastaClassifier"
            timeperiod="2018 - ???"
            subtitle="The twitter bot which can classification of pasta, but It just can classify photos as a bolognese or a carbonara."
          />
          <ExperienceUnit
            logo={liblogLogo}
            colour="#fff"
            title="Lib-Log!"
            link="http://intense-waters-57765.herokuapp.com/"
            timeperiod="2017"
            subtitle="A WebService which records the books you read."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
