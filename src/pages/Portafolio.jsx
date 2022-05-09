import Helmet from 'react-helmet'
import Companies from '../components/Companies'
import styles from '../styles/pages/Portafolio.module.sass'

const Portafolio = () => {

	const projects = [
		{
			title: 'Luxury Apartment',
			topic: 'Realidad Virtual',
			image: '/assets/project-1.png'
		}, {
			title: 'Streaming Room',
			topic: 'Servicios de Metaverso',
			image: '/assets/project-2.png'
		}, {
			title: 'Green Filters',
			topic: 'Experiencias 3D en la Web',
			image: '/assets/project-3.png'
		}, {
			title: 'Blue Moon',
			topic: 'Servicios de Metaverso',
			image: '/assets/project-4.png'
		}, {
			title: 'Bill & Melinda Gates Foundation',
			topic: 'Servicios de Metaverso',
			image: '/assets/project-5.png'
		}, {
			title: 'One Laptop Per Kid',
			topic: 'Experiencias 3D en la Web',
			image: '/assets/project-6.png'
		}, {
			title: 'Furniture A/R',
			topic: 'Realidad Aumentada',
			image: '/assets/project-7.png'
		}, {
			title: 'Furniture Configurator',
			topic: 'Experiencias 3D en la Web',
			image: '/assets/project-8.png'
		}, {
			title: 'Syringe Assenbly Simulation',
			topic: 'Experiencias 3D en la Web',
			image: '/assets/project-9.png'
		}
	]

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