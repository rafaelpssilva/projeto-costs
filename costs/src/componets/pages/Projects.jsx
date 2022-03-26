import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import Message from "../layout/Message"
import ProjectCard from "../project/ProjectCard"

import './Projects.css'

function Projects() {

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {

        fetch("http://localhost:5000/projects", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
          .then(resp => resp.json())
          .then(data => {
              console.log(data)
              setProjects(data)
          })
          .catch(err => console.log(err))
    }, [])

    return (
        <div className="project-container">
            <div className="title-container">
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="sucess" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map(project => (
                        <ProjectCard 
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        key={project.id}
                        />
                    ))
                }
            </Container>
        </div>
    )
}

export default Projects