import React, { useState } from 'react'
import SectionTitle from '../../components/Typography/SectionTitle'
import SectionHead from '../../components/Typography/SectionHead'
import ProjectCard from '../../components/Cards/ProjectCard'
import { useParams } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'
import ProjectModal from '../../components/Modals/ProjectModal'
import { projectData, mobileProjectData } from './data'

const ProjectPage = () => {
    useTitle('Projects')
    const [modal, setModal] = useState([])
    const projects = projectData;
    const mobileProjects = mobileProjectData;
    const props = { img: "https://cdn.lordicon.com/fpmskzsv.json", text: "Projects" }

    const { id } = useParams();

    return (
        <section>
            <SectionTitle props={props} />
            <SectionHead>My <span className='text-primary'>Projects</span></SectionHead>

            <div className='projects'>
                {id === 'web' ? (
                    projects?.map((project, index) => <ProjectCard key={index} project={project} index={index} setModal={setModal} />)
                ): (
                    mobileProjects?.map((project, index) => <ProjectCard key={index} project={project} index={index} setModal={setModal} />)
                )}
            </div>
            <ProjectModal data={modal} setModal={setModal} />
        </section>
    )
}

export default ProjectPage