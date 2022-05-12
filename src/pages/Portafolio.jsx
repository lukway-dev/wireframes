import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Helmet from 'react-helmet'
import Companies from '../components/Companies'
import Project1 from '../assets/portfolio/project-1.png'
import Project2 from '../assets/portfolio/project-2.png'
import Project3 from '../assets/portfolio/project-3.png'
import Project4 from '../assets/portfolio/project-4.png'
import Project5 from '../assets/portfolio/project-5.png'
import Project6 from '../assets/portfolio/project-6.png'
import Project7 from '../assets/portfolio/project-7.png'
import Project8 from '../assets/portfolio/project-8.png'
import Project9 from '../assets/portfolio/project-9.png'
import styles from '../styles/pages/Portafolio.module.sass'

const Portafolio = () => {
	const { pathname } = useLocation()

	const projects = [
		{
			title: 'Luxury Apartment',
			topic: 'Realidad Virtual',
			image: Project1
		}, {
			title: 'Streaming Room',
			topic: 'Servicios de Metaverso',
			image: Project2
		}, {
			title: 'Green Filters',
			topic: 'Experiencias 3D en la Web',
			image: Project3
		}, {
			title: 'Blue Moon',
			topic: 'Servicios de Metaverso',
			image: Project4
		}, {
			title: 'Bill & Melinda Gates Foundation',
			topic: 'Servicios de Metaverso',
			image: Project5
		}, {
			title: 'One Laptop Per Kid',
			topic: 'Experiencias 3D en la Web',
			image: Project6
		}, {
			title: 'Furniture A/R',
			topic: 'Realidad Aumentada',
			image: Project7
		}, {
			title: 'Furniture Configurator',
			topic: 'Experiencias 3D en la Web',
			image: Project8
		}, {
			title: 'Syringe Assenbly Simulation',
			topic: 'Experiencias 3D en la Web',
			image: Project9
		}
	]

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<main className={styles.main}>
			<Helmet>
				<title>Portafolio | Wireframe Reality</title>
			</Helmet>

			{/* Hero */}
			<section className={`${styles.Hero_Container_Fluid} container-fluid`}>
				<div className={`${styles.Hero} container`}>
					<h1 className={styles.Hero_Title} data-aos="fade-up">Nuestros Proyectos</h1>
					<p className={styles.Hero_Text} data-aos="fade-up" data-aos-delay="150">
						Conoce un poco sobre nuestro desempeño, y cómo hemos implementado
						la realidad virtual y la realidad aumentada.
					</p>
				</div>
			</section>

			{/* Projects */}
			<section className={`${styles.Project_Container_Fluid} container-fluid`}>
				<div className={`${styles.Project_Cards_Container} row`}>
					{projects.map((project, index) => (
						<div key={`Project-Card-${index}`} className="col-12 col-sm-6 col-md-4 p-0">
							<div className={styles.Project_Card} data-aos="zoom-in">
								<img
									className={styles.Project_Image}
									src={project.image}
									alt={project.title}
									title={project.title}
								/>
								<div className={styles.Project_Topic_Container}>
									<span className={styles.Project_Topic}>{project.topic}</span>
								</div>
								<div className={styles.Project_Title_Container}>
									<h4 className={styles.Project_Title}>{project.title}</h4>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className={`${styles.Companies} container-fluid`}>
				<div className='container py-5'>
					<Companies/>
				</div>
			</section>
		</main>
	)
}

export default Portafolio