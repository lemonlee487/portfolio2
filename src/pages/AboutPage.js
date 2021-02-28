import React from 'react'
import Title from '../components/Title'
import ImageSection from '../components/ImageSection'
import SkillsSection from '../components/SkillsSection'
import ServicesSection from '../components/ServicesSection'
import avatar from '../images/avatar.png'
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
        <SkillsSection skill={'Android Development'} progress={'68%'} widthParam={'68%'} />
        <SkillsSection skill={'Machine Learning'} progress={'56%'} widthParam={'56%'} />
      </div>
      <Title title={'Favourite Novels'} span={'Favourite Novels'} />
      <div className="services-container">
        <ServicesSection
          image={avatar}
          title={'転生したらスライムだった件'}
          text={'Text'}
        />
        <ServicesSection
          image={avatar}
          title={'この素晴らしい世界に祝福を!'}
          text={'Text'}
        />
        <ServicesSection
          image={avatar}
          title={'ようこそ実力至上主義の教室へ'}
          text={'Text'}
        />
      </div>
    </div>
  )
}

export default AboutPage
