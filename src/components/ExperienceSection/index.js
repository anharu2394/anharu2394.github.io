import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import ochiaiLogo from '../../assets/images/experience/ochiai.jpg'
import fitsoLogo from '../../assets/images/experience/onokatio.jpg'
import Coord_eLogo from '../../assets/images/experience/coord_e.png'
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
            logo={Coord_eLogo}
            colour='#fff'    
            title='Coord.e'
            link='https://twitter.com/coord_e'
            timeperiod=''
            subtitle='So Cool!'
          />

          <ExperienceUnit
            logo={fitsoLogo}
            colour='#FFFFFF'
            title='Onokatio'
            link='https://www.twitter.com/onokatio_'
            timeperiod=''
            subtitle='So Cool!'
          />
          <ExperienceUnit
            logo={kayakoLogo}
            colour='#fff'
            title='Eruto'
            link='https://www.twitter.com/proelbtn'
            timeperiod=''
            subtitle='So Cool!'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
