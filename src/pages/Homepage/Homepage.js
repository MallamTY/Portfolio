import React from 'react'
import useTitle from '../../hooks/useTitle'
import AboutMe from './AboutMe/AboutMe'
import MySkills from './MySkills/MySkills'
import Projects from './Projects/Projects'
import MobileProjects from './Projects/MobileProjects'
import Services from './Services/Services'
import ContactMe from './ContactMe/ContactMe'
import TopBanner from './TopBanner/TopBanner'
import HomeProfile from './Profile/HomeProfile'

const Homepage = () => {
  useTitle('Portfolio')
  return (
    <div>
      <HomeProfile/>
      <TopBanner />
      <AboutMe />
      <Services />
      <MobileProjects />
      <Projects />
      <MySkills />
      <ContactMe />
    </div >
  )
}

export default Homepage