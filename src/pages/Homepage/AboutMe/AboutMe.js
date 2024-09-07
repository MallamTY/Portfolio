import React from 'react'
import SectionTitle from '../../../components/Typography/SectionTitle'
import SectionHead from '../../../components/Typography/SectionHead'

const AboutMe = () => {
  const props = { img: "https://cdn.lordicon.com/bhfjfgqz.json", text: "About Me" }
  return (
    <section id='about' className='mb-16'>
      <SectionTitle props={props} />
      <SectionHead>
      Every great career begins with<span className='text-primary'> passion</span>; it's the fuel that turns curiosity into expertise and dreams into achievements
      </SectionHead>

      <p className="text-accent max-w-[800px]">My journey into software engineering began out of passion for a computer network and a cloud enthusiast trying to contribute his quota and apply his existing knowledge into the technology space. Upon having a close look into the areas of specializations in software engineering, I realised backend engineering is a good fit givenmy knowledge of networking and server administration. Over time, this passion has grown into a fulfilling career. With over three years of experience, I specialize in Node.js writing both REST and GraphQL APIs and have extensive knowledge of both NoSQL and SQL databases. My expertise also includes cloud engineering, supported by AWS certifications, and I am currently expanding my skills into DevOps. When I'm not tapping the keys on the keyboard, you'll find me watching netlix, playing games or just chilling to some cool music.
      </p>
      <div className='flex'>
        <a href='https://drive.google.com/file/d/1Ew89bUbzO2SCMpSGLZ7ZUvcywRtzAhEb/view?usp=sharing' target="_blank" rel="noreferrer">
          <button className='hover:text-primary transition duration-300 text-lg flex gap-2 items-center uppercase icon mt-10'>
            <lord-icon
              target="button"
              src="https://cdn.lordicon.com/egiwmiit.json"
              trigger="hover"
              class="current-color"
              style={{ width: "24px", height: "24px" }}>
            </lord-icon>
            Get my CV
          </button>
        </a>
      </div>
    </section>
  )
}

export default AboutMe