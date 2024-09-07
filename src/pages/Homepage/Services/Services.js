import React from 'react'
import SectionTitle from '../../../components/Typography/SectionTitle'
import { HiOutlineDatabase } from 'react-icons/hi'
import { FiCode, FiUploadCloud } from 'react-icons/fi'
import SectionHead from '../../../components/Typography/SectionHead'

const Services = () => {
    const services = [
        {
            "id": 1,
            "service": "Bankend Web Development",
            "details": "I can write both REST and GraphQL APIs using the Nodejs runtime environment, Express, and Apollo servers. I'm capable of writing clean and efficient codes with my knowledge of data structure and algorithms, and system design."
        },
        {
            "id": 2,
            "service": "Database Management",
            "details": "Having worked on over 7 projects using both NoSQL and SQL databases and coupled with my knowledge of database management, I'm confident about my capacity to manage databases efficiently and work with ORM and ODM for databases."
        },
        {
            "id": 3,
            "service": "Cloud Computing",
            "details": "With my knowledge of cloud computing over the years backed with certifications from Amazon Web Services (AWS) and Oracle Cloud Infrastructure, I'm capable of working with cloud services and currently exploring DevOps, having learned containerization with Docker and container orchestration using Kubernetes."
        },
    ]
    const props = { img: "https://cdn.lordicon.com/ofwpzftr.json", text: "Services" }
    return (
        <section id="services" className='mb-32'>
            <SectionTitle props={props} />
            <SectionHead>
                My <span className='text-primary'>Specializations</span>
            </SectionHead>
            <div className='services'>
                {
                    services.map(({ service, details }, index) => <div key={index}
                        className='hover:text-primary hover:border-primary border-[1px] border-accent p-6 rounded-2xl'
                        data-aos="fade-up"
                        data-aos-delay={`${((index) % 6) * 100 + 100}`}
                    >
                        {index === 0 && <FiCode className='text-[40px]' />
                        }

                        {index === 1 && <HiOutlineDatabase className='text-[40px]' />}
                        {index === 2 && <FiUploadCloud className='text-[40px]' />}
                        <div>
                            <h2 className='lg:text-2xl md:text-2xl text-xl mt-3 lg:font-normal md:font-normal font-bold'>{service}</h2>
                            <p className='text-accent mt-3 text-sm'>{details}</p>
                        </div>
                    </div>
                    )
                }
            </div>
        </section>
    )
}

export default Services