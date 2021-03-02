import React from 'react'
import Title from '../components/Title'
import ImageSection from '../components/ImageSection'
import SkillsSection from '../components/SkillsSection'
import ServicesSection from '../components/ServicesSection'
import WorksSection from '../components/WorksSection'
import android from '../images/android.png'
import deeplearn from '../images/deep-learning.png'
import webdev from '../images/website.png'
import projectlist from '../data/projectlist'
import NTTlogo from '../images/NTT_company_logo.png'

const AboutPage = () => {
   return (
      <div className="AboutPage">
         <Title title={'About Me'} span={'About Me'} />
         <ImageSection />
         <Title title={'Skills'} span={'Skills'} />
         <div className="skills-container">
            <SkillsSection skill={'Python'} progress={'70%'} widthParam={'70%'} />
            <SkillsSection skill={'Java'} progress={'65%'} widthParam={'65%'} />
            <SkillsSection skill={'JavaScript'} progress={'57%'} widthParam={'57%'} />
            <SkillsSection skill={'React.js'} progress={'18%'} widthParam={'18%'} />
            <SkillsSection skill={'C++'} progress={'22%'} widthParam={'22%'} />
            <SkillsSection skill={'Android Development'} progress={'45%'} widthParam={'68%'} />
            <SkillsSection skill={'Machine Learning'} progress={'32%'} widthParam={'56%'} />
            <SkillsSection skill={'Web Design'} progress={'26%'} widthParam={'56%'} />
         </div>
         <Title title={'Projects'} span={'Projects'} />
         <div className="services-container">
            <ServicesSection
               image={android}
               title={'Android Development'}
               projects={projectlist[0]}
            />
            <ServicesSection
               image={deeplearn}
               title={'Deep Learning'}
               projects={projectlist[1]}
            />
            <ServicesSection
               image={webdev}
               title={'Web Design'}
               projects={projectlist[2]}
            />
         </div>
         <Title title={'Work Experience'} span={'Work Experience'} />
         <div className="works-container">
            <WorksSection
               image={NTTlogo}
               title={'Network Function Virtualization Intern'}
               works={'Implement P4 programs into switched fabric and in-band-network telemetry projects'}
            />
         </div>
      </div>
   )
}

export default AboutPage
