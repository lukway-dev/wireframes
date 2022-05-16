import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Helmet from 'react-helmet'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Companies from '../components/Companies'
import Form from '../components/Form'
import styles from '../styles/pages/Home.module.sass'
import Planet from '../assets/images/planet.png'
import PlayIcon from '../assets/images/visor-button-icon.png'
import Service1 from '../assets/services/service-1.png'
import Service2 from '../assets/services/service-2.png'
import Service3 from '../assets/services/service-3.png'
import Service4 from '../assets/services/service-4.png'
import Sector1 from '../assets/sectors/sector-1.png'
import Sector2 from '../assets/sectors/sector-2.png'
import Sector3 from '../assets/sectors/sector-3.png'
import Sector4 from '../assets/sectors/sector-4.png'
import Sector5 from '../assets/sectors/sector-5.png'
import Sector6 from '../assets/sectors/sector-6.png'
import Lampara from '../assets/images/lampara.png'
import DetailWhite from '../assets/details/bottom-detail.svg'
import DetailDark from '../assets/details/bottom-detail-dark.svg'
import DetailCyan from '../assets/details/bottom-detail-cyan.svg'
import SwiperPrevButton from '../assets/details/swiper-left.svg'
import SwiperNextButton from '../assets/details/swiper-right.svg'

const Home = () => {
	const { pathname } = useLocation()

	const sectors = [
		{
			title: 'Industria Automotriz',
			description: 'Muestra a tu cliente cómo es o será su vehículo sin la necesidad de que estén físicamente en el sitio.',
			image: Sector1,
			width: 124,
			height: 100,
			animationDelay: 150
		}, {
			title: 'Salud',
			description: 'Los profesionales de la salud pueden usar modelos virtuales como parte del entrenamiento. Existen tratamientos efectivos para tratar la ansiedad o algunos desórdenes post-traumáticos.',
			image: Sector2,
			width: 126,
			height: 126,
			animationDelay: 300
		}, {
			title: 'Turismo',
			description: 'Con las tecnologías de Realidad Virtual, puedes conocer lugares turísticos recreados en 3D y tener acceso completo a vistas 360.',
			image: Sector3,
			width: 127,
			height: 127,
			animationDelay: 450
		}, {
			title: 'Bienes Raíces',
			description: 'Presenta la propiedad que deseas sin salir de casa, mantén a tus clientes seguros. Hazles saber que te preocupas por su seguridad y comodidad.',
			image: Sector4,
			width: 130,
			height: 120,
			animationDelay: 150
		}, {
			title: 'Arquitectura',
			description: 'Experimenta y siente el diseño antes de construirlo físicamente. La realidad virtual te permite experimentar el sitio como si ya estuviera hecho.',
			image: Sector5,
			width: 115,
			height: 118,
			animationDelay: 300
		}, {
			title: 'Educación',
			description: 'El clima o las distancias ya no son un problema, explora tus laboratorios y haz tus experimentos sin estar presente en la escuela.',
			image: Sector6,
			width: 130,
			height: 128,
			animationDelay: 450
		},
	]

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<main>
			<Helmet>
				<title>Wireframe Reality</title>
			</Helmet>

			{/* Hero */}
			<section className={`${styles.Hero_Container_Fluid} container-fluid`}>
				<div className={`${styles.Hero} container p-0`}>
					<div className={styles.Hero_Banner}>
						<div className={styles.Hero_Title_Container}>
							<h1 className={styles.Hero_Title} data-aos="fade-up">
								Realidad Virtual y Realidad Aumentada
							</h1>
							<h3 className={styles.Hero_Caption} data-aos="fade-up" data-aos-delay="250">
								Un nuevo mundo de <span className={styles.Hero_Caption_Highlight}>soluciones digitales</span>
							</h3>
							<Link to="/contacto" className={styles.Hero_Link} data-aos="fade-up" data-aos-delay="500">
								Contáctanos
							</Link>
						</div>
						<img
							src={Planet}
							className={styles.Hero_Image}
							alt="Wireframes Planet"
							data-aos="zoom-in"
						/>
					</div>
				</div>

				<div className='container'>
					<div className={`${styles.Visor_Container} row`}>
						<div className={`${styles.Visor} col-12 col-lg-6`} data-aos="fade-up">
							<span className={styles.Visor_Text}>
								¡Conoce <span className={styles.Visor_Text_Highlight}>nuestro trabajo!</span>
							</span>
							<Link to="/portafolio" className={styles.Visor_Button}>
								<img
									src={PlayIcon}
									className={styles.Visor_Button_Icon}
									alt="Wireframes Visor"
								/>
							</Link>
						</div>
						<div className={`${styles.Visor_Data} col-12 col-lg-6 py-2`}>
							<div className={styles.Visor_Data_Item} data-aos="fade-up" data-aos-delay="150">
								<h4 className={styles.Visor_Data_Title}>
									Tecnología
								</h4>
								<p className={styles.Visor_Data_Text}>
									Soluciones innovadoras con tecnología WebXR
								</p>
							</div>
							<div className={styles.Visor_Data_Item} data-aos="fade-up" data-aos-delay="300">
								<h4 className={styles.Visor_Data_Title}>
									Posicionamiento
								</h4>
								<p className={styles.Visor_Data_Text}>
									Proveemos nuevas experiencias para que sus productos o servicios tengan mejor visibilidad en el mercado.
								</p>
							</div>
							<div className={styles.Visor_Data_Item} data-aos="fade-up" data-aos-delay="450">
								<h4 className={styles.Visor_Data_Title}>
									Sociedad Internacional
								</h4>
								<p className={styles.Visor_Data_Text}>
									Trabajamos junto a empsas de Estados Unidos, Canadá, Dubái, U.K. entre otros.
								</p>
							</div>
							<div className={styles.Visor_Data_Item} data-aos="fade-up" data-aos-delay="600">
								<h4 className={styles.Visor_Data_Title}>
									Versatilidad
								</h4>
								<p className={styles.Visor_Data_Text}>
									Empleamos la realidad virtual en beneficio de la medicina, educación, arquitectura, etc.
								</p>
							</div>
						</div>
					</div>
				</div>

				<img
					src={DetailWhite}
					className={styles.Hero_Bottom_Detail}
					alt="Wireframes Planet"
				/>
			</section>

			{/* Services */}
			<section className={`${styles.Services_Container_Fluid} container-fluid`}>
				<div className={`${styles.Services} container`}>
					<h2 className={styles.Services_Title} data-aos="fade-up">
						Nuestros Servicios
					</h2>
					<h3 className={styles.Services_Caption} data-aos="fade-up" data-aos-delay="500">
						Brindamos la mejor experiencia interactiva por medio de Realidad Aumentada (AR), Realidad Virtual (VR) Y Realidad Mixta (MR).
					</h3>

					<div className={`${styles.ServicesCards} row pt-4 pt-md-5 pb-0 pb-md-4`}>
						<div className="col-12 col-lg-6 px-0 pe-lg-4 d-flex flex-column justify-content-center">
							<div className={styles.ServiceCard} data-aos="fade-up">
								<div className={styles.ServiceCard_Image_Container_1}>
									<img
										src={Service1}
										className={styles.ServiceCard_Image}
										alt="Wireframes Planet"
									/>
								</div>
								<div className={styles.ServiceCard_Text_Container}>
									<div>
										<h4 className={styles.ServiceCard_Title}>Realidad Virtual</h4>
										<p className={styles.ServiceCard_Text}>
											Rehacemos ambientes
											tridimensionales, donde el
											usuario podrá experimentar
											a través del uso de gafas VR.
										</p>
									</div>
									<Link to="/servicio/realidad-virtual" className={styles.ServiceCard_Link}>
										Ver más
									</Link>
								</div>
								<img
									src={DetailWhite}
									className={styles.ServiceCard_Detail_White}
								/>
							</div>

							<div className={`${styles.ServiceCard} d-flex d-lg-none`} data-aos="fade-up">
								<div className={styles.ServiceCard_Image_Container_3}>
									<img
										src={Service2}
										className={styles.ServiceCard_Image}
										alt="Wireframes Planet"
									/>
								</div>
								<div className={styles.ServiceCard_Text_Container}>
									<div>
										<h4 className={styles.ServiceCard_Title}>Realidad Aumentada</h4>
										<p className={styles.ServiceCard_Text}>
											Hacemos posible que un
											elemento virtual se pueda
											proyectar en la realidad a
											través de un dispositivo
											tecnológico.
										</p>
									</div>
									<Link to="/servicio/realidad-aumentada" className={styles.ServiceCard_Link}>
										Ver más
									</Link>
								</div>
								<img
									src={DetailDark}
									className={styles.ServiceCard_Detail_Dark}
								/>
							</div>

							<div className={styles.ServiceCard} data-aos="fade-up" data-aos-delay="250">
								<div className={styles.ServiceCard_Image_Container_2}>
									<img
										src={Service3}
										className={styles.ServiceCard_Image}
										alt="Wireframes Planet"
									/>
								</div>
								<div className={styles.ServiceCard_Text_Container}>
									<div>
										<h4 className={styles.ServiceCard_Title}>Experiencias 3D en la Web</h4>
										<p className={styles.ServiceCard_Text}>
											Con nosotros vivirás la
											experiencia de poder visualizar
											tus productos estrella en 3d
											a través de una página web.
										</p>
									</div>
									<Link to="/servicio/experiencias-3D" className={styles.ServiceCard_Link}>
										Ver más
									</Link>
								</div>
								<img
									src={DetailWhite}
									className={styles.ServiceCard_Detail_White}
								/>
							</div>
						</div>

						<div className="col-12 col-lg-6 px-0 ps-lg-4 d-flex flex-column justify-content-center">
							<div className={`${styles.ServiceCard} d-none d-lg-flex`} data-aos="fade-up">
								<div className={styles.ServiceCard_Image_Container_3}>
									<img
										src={Service2}
										className={styles.ServiceCard_Image}
										alt="Wireframes Planet"
									/>
								</div>
								<div className={styles.ServiceCard_Text_Container}>
									<div>
										<h4 className={styles.ServiceCard_Title}>Realidad Aumentada</h4>
										<p className={styles.ServiceCard_Text}>
											Hacemos posible que un
											elemento virtual se pueda
											proyectar en la realidad a
											través de un dispositivo
											tecnológico.
										</p>
									</div>
									<Link to="/servicio/realidad-aumentada" className={styles.ServiceCard_Link}>
										Ver más
									</Link>
								</div>
								<img
									src={DetailDark}
									className={styles.ServiceCard_Detail_Dark}
								/>
							</div>
							<div className={styles.ServiceCard} data-aos="fade-up" data-aos-delay="250">
								<div className={styles.ServiceCard_Image_Container_4}>
									<img
										src={Service4}
										className={styles.ServiceCard_Image}
										alt="Wireframes Planet"
									/>
								</div>
								<div className={styles.ServiceCard_Text_Container}>
									<div>
										<h4 className={styles.ServiceCard_Title}>Servicios de Metaverso</h4>
										<p className={styles.ServiceCard_Text}>
											Recreamos tu negocio, tu
											propio universo en un
											ambiente virtual, donde
											podrás interactuar con
											otros usuarios en línea.
										</p>
									</div>
									<Link to="/servicio/metaverso" className={styles.ServiceCard_Link}>
										Ver más
									</Link>
								</div>
								<img
									src={DetailDark}
									className={styles.ServiceCard_Detail_Dark}
								/>
							</div>
						</div>
					</div>
				</div>
				<img
					src={DetailCyan}
					className={styles.Hero_Bottom_Detail}
					alt="Wireframes Planet"
				/>
			</section>

			{/* Sectors */}
			<section className={`${styles.Sectors_Container_Fluid} container-fluid`}>
				<div className={`${styles.Sectors} container`}>
					<h2 className={styles.Sectors_Title} data-aos="fade-up">
						Sectores
					</h2>
					<h3 className={styles.Sectors_Caption} data-aos="fade-up" data-aos-delay="250">
						Lo que abarcamos en el mercado nacional / internacional.
					</h3>

					<div className={`${styles.Sector_Card_Container} d-none d-sm-grid`}>
						{sectors.map((sector, index) => (
							<div className={styles.SectorCard} key={`Sector-Card-${index}`} data-aos="fade-up" data-aos-delay={sector.animationDelay}>
								<img
									src={sector.image}
									className={styles.SectorCard_Image}
									alt={sector.title}
								/>
								<h4 className={styles.SectorCard_Title}>{sector.title}</h4>
								<p className={styles.SectorCard_Description}>{sector.description}</p>
							</div>
						))}
					</div>

					<Swiper
						modules={[ Navigation ]}
						className={styles.Sector_Swiper}
						slidesPerView={1}
						spaceBetween={80}
						// autoplay={{ delay: 4000, disableOnInteraction: false }}
						navigation={{ prevEl: '.Sector_Swiper_Prev', nextEl: '.Sector_Swiper_Next' }}
						loop={true}
						speed={1000}
					>
						<div className={`${styles.Sector_Swiper_Prev} Sector_Swiper_Prev`}>
							<img src={SwiperPrevButton}/>
						</div>
						<div className={`${styles.Sector_Swiper_Next} Sector_Swiper_Next`}>
							<img src={SwiperNextButton}/>
						</div>
						{sectors.map((sector, index) => (
							<SwiperSlide key={`Sector-Card-${index}`} className={styles.Sector_Slide}>
								<div className={styles.SectorCard}>
									<img
										src={sector.image}
										className={styles.SectorCard_Image}
										alt={sector.title}
									/>
									<h4 className={styles.SectorCard_Title}>{sector.title}</h4>
									<p className={styles.SectorCard_Description}>{sector.description}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					<Companies/>
				</div>
			</section>

			{/* Idea */}
			<section className={styles.Idea}>
				<img
					src={Lampara}
					className={styles.Idea_Image}
					width={250}
				/>
				<div className={styles.Idea_Text_Container}>
					<h2 className={styles.Idea_Title} data-aos="fade-up">
						¿Tienes una idea brillante
					</h2>
					<p className={styles.Idea_Text} data-aos="fade-up">
						y no sabes cómo desarrollarla?
					</p>

					<Link to="/contacto" className={styles.Idea_Button} data-aos="fade-up" data-aos-delay="250">
						Conversemos
					</Link>
				</div>
				<img
					src={DetailWhite}
					className={styles.Hero_Bottom_Detail}
					alt="Wireframes Planet"
				/>
			</section>

			{/* Contact */}
			<section className={`${styles.Contact_Fluid_Container} container-fluid py-5`}>
				<div className={`${styles.Contact} container p-0`}>
					<Form/>
				</div>
			</section>
		</main>
	)
}

export default Home