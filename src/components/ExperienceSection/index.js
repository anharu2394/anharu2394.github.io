import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import ochiaiLogo from '../../assets/images/experience/ochiai.jpg'
import fitsoLogo from '../../assets/images/experience/onokatio.jpg'
import kayakoLogo from '../../assets/images/experience/eruto.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="The figures that I respect">
        <div className="row">
          <ExperienceUnit
            logo={ochiaiLogo}
            colour='black'    
            title='Yoichi Ochiai'
            link='https://twitter.com/ochyai'
            timeperiod=''
            subtitle='So Cool!'
          />
          <ExperienceUnit
            logo={fitsoLogo}
            colour='#FFFFFF'
            title='Onokatio'
            link='https://www.getfitso.com/'
            timeperiod=''
            subtitle='So Cool!'
          />
          <ExperienceUnit
            logo={kayakoLogo}
            colour='#fff'
            title='Eruto'
            link='https://www.kayako.com/'
            timeperiod=''
            subtitle='So Cool!'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
