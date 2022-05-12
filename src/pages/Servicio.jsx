import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Helmet from 'react-helmet'
import { useParams } from 'react-router-dom'
import Service1 from '../assets/services/service-1.png'
import Service1Item1 from '../assets/services/service-1-item-1.png'
import Service1Item2 from '../assets/services/service-1-item-2.png'
import Service1CaptionImage from '../assets/services/service-1-caption-image.png'
import Service2 from '../assets/services/service-2.png'
import Service2Item1 from '../assets/services/service-2-item-1.png'
import Service2CaptionImage from '../assets/services/service-2-caption-image.png'
import Service3 from '../assets/services/service-3.png'
import Service3Item1 from '../assets/services/service-3-item-1.png'
import Service3Item2 from '../assets/services/service-3-item-2.png'
import Service3CaptionImage from '../assets/services/service-3-caption-image.png'
import Service4 from '../assets/services/service-4.png'
import Service4Item1 from '../assets/services/service-4-item-1.png'
import Service4Item2 from '../assets/services/service-4-item-2.png'
import Service4CaptionImage from '../assets/services/service-4-caption-image.png'
import DetailWhite from '../assets/details/bottom-detail.svg'
import DetailCyan from '../assets/details/bottom-detail-cyan.svg'
import styles from '../styles/pages/Servicios.module.sass'
import Companies from '../components/Companies'

const Servicio = () => {
	const [data, setData] = useState('')
	const { service } = useParams()
	const { pathname } = useLocation()


	// const serviceIds = ['realidad-virtual', 'realidad-aumentada', 'experiencias-3d', 'metaverso']
	const services = [
		{
			title: 'Realidad Virtual',
			description: 'Rehacemos ambientes tridimensionales, dondel el usuario podrá experimentar a través del uso de gafas VR',
			title_image: Service1,
			title_image_width: 245,
			title_image_height: 266,
			items: [
				{
					title: 'VR para arquitectura y contrucción',
					description: 'Diseñamos un showroom virtual,  el cual permitirá que muestres a tus clientes los espacios arquitectónicos antes de su adquisición, e inclusive antes de ser construídos.',
					image: Service1Item1,
				}, {
					title: 'VR para capacitaciones',
					description: 'Capacita a tu personal con experiencias inmersivas que les permitirán aprender y comprender algunos procesos de forma interactiva sin necesidad de estar presentes físicamente.',
					image: Service1Item2,
				}
			],
			caption: '¿Por que implementar la',
			caption_highlight: 'Realidad Virtual?',
			caption_image: Service1CaptionImage,
			caption_items: [
				{
					text: 'Nos permite recrear espacios en un entorno digital, generando interacción y actividades que el usuario experimentá como en la vida real.'
				}, {
					text: 'Se generará un impacto directo  en el usuario, gracias a la experiencia única e inmersiva que quedará grabada en su memoria.'
				}, {
					text: 'Es una experiencia virtual que da la libertad de crear los espacios más utópicos que puedas imaginar, no hay límite para la creatividad.'
				}
			]
		}, {
			title: 'Realidad Aumentada',
			description: 'Agregamos a nuestra realidad elementos virtuales que se pueden visualizar a través de la cámara de dispositivos móviles.',
			title_image: Service2,
			title_image_width: 250,
			title_image_height: 265,
			items: [
				{
					title: 'AR para retail',
					description: 'Permite que el usuario conozca tus productos como un modelado 3D a tamaño real dentro del entorno antes de que sean adquiridos.',
					image: Service2Item1,
				}
			],
			caption: '¿Por que implementar la',
			caption_highlight: 'Realidad Aumentada?',
			caption_image: Service2CaptionImage,
			caption_items: [
				{
					text: 'Permite a los usuarios acceder a la visualización del producto de forma interactiva sin necesidad de desplazarse al punto de venta.'
				}, {
					text: 'Permite a los usuarios verificar información complementaria sobre el producto de manera dinámica.'
				}, {
					text: 'Permite agregar objetos a nuestra realidad para transmitir el mensaje que desees. '
				}
			]
		}, {
			title: 'Experiencias 3D en la Web',
			description: 'Creamos contenido interactivo 3D para visualizarse desde una página web.',
			title_image: Service3,
			title_image_width: 250,
			title_image_height: 195,
			items: [
				{
					title: 'Experiencia Web 3D de productos',
					description: 'Diseños 3D que permiten a los usuarios ver cuál es el aspecto de su próxima adquisición desde una página web, mostrando detalles como sus medidas, características, y modo de uso.',
					image: Service3Item1,
				}, {
					title: 'Experiencia Web 3D para espacios',
					description: 'Espacios 3D creados con el objetivo de que el usuario pueda recorrer, experimentar y personalizar el espacio acorde a sus necesidades.',
					image: Service3Item2,
				}
			],
			caption: '¿Por que implementar las',
			caption_highlight: 'Experiencias 3D en la Web?',
			caption_image: Service3CaptionImage,
			caption_items: [
				{
					text: 'Permite dar a conocer tus productos, sin la necesidad de desplazarse a un espacio físico.'
				}, {
					text: 'Permite a los usuarios conocer e interactuar con el producto de una forma más cercana a la realidad.'
				}, {
					text: 'Brinda una experiencia 3D sin la necesidad de descargar una aplicación.'
				}
			]
		}, {
			title: 'Servicios de Metaverso',
			description: 'Creamos contenido interactivo 3D para visualizarse desde una página web.',
			title_image: Service4,
			title_image_width: 280,
			title_image_height: 175,
			items: [
				{
					title: 'Experiencia Web 3D de productos',
					description: 'Diseños 3D que permiten a los usuarios ver cuál es el aspecto de su próxima adquisición desde una página web, mostrando detalles como sus medidas, características, y modo de uso.',
					image: Service4Item1,
				}, {
					title: 'Experiencia Web 3D para espacios',
					description: 'Espacios 3D creados con el objetivo de que el usuario pueda recorrer, experimentar y personalizar el espacio acorde a sus necesidades.',
					image: Service4Item2,
				}
			],
			caption: '¿Por que implementar las',
			caption_highlight: 'El Metaverso?',
			caption_image: Service4CaptionImage,
			caption_items: [
				{
					text: 'Permite dar a conocer tus productos, sin la necesidad de desplazarse a un espacio físico.'
				}, {
					text: 'Permite a los usuarios conocer e interactuar con el producto de una forma más cercana a la realidad.'
				}, {
					text: 'Brinda una experiencia 3D sin la necesidad de descargar una aplicación.'
				}
			]
		}
	]

	useEffect(() => {
		let index = 0

		switch (service) {
		case 'realidad-virtual':
			index = 0
			break
		case 'realidad-aumentada':
			index = 1
			break
		case 'experiencias-3D':
			index = 2
			break
		case 'metaverso':
			index = 3
			break

		default:
			break
		}

		setData(services[index])
	}, [service])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	if(!data) return null

	return (
		<main>
			<Helmet>
				<title>Servicios | Wireframe Reality</title>
			</Helmet>

			<section className={`${styles.Hero_Container_Fluid} container-fluid`}>
				<div className={`${styles.Hero} container`}>
					<div className={`${styles.Hero_Row} row`} data-aos="fade-up">
						<div className="col-12 col-md-6">
							<h1 className={styles.Hero_Title}>{data.title}</h1>
							<p className={styles.Hero_Text}>{data.description}</p>
						</div>
						<div className={`${styles.Hero_Image_Container} col-12 col-md-6`}>
							<img
								src={data.title_image}
								alt={data.title}
								className={styles.Hero_Image}
							/>
						</div>
					</div>
				</div>
				<img
					src={DetailCyan}
					className={styles.Hero_Bottom_Detail}
					alt="Wireframes Planet"
				/>
			</section>

			<section className={`${styles.Item_Container} container py-4`}>
				<div className="row">
					{data.items[1]
						? (
							<>
								<div className={`${styles.Item_Card_Left} col-12 py-5`}>
									<img
										src={data.items[0].image}
										alt={data.items[0].title}
										className={styles.Item_Image}
										data-aos="fade-right"
									/>

									<div className={styles.Item_Text_Container} data-aos="fade-up">
										<h3 className={styles.Item_Title}>{data.items[0].title}</h3>
										<p className={styles.Item_Text}>{data.items[0].description}</p>
									</div>
								</div>
								<div className={`${styles.Item_Card_Right} col-12 py-5`}>
									<div className={styles.Item_Text_Container} data-aos="fade-up">
										<h3 className={styles.Item_Title}>{data.items[1].title}</h3>
										<p className={styles.Item_Text}>{data.items[1].description}</p>
									</div>

									<img
										src={data.items[1].image}
										alt={data.items[1].title}
										className={styles.Item_Image}
										data-aos="fade-left"
									/>
								</div>
							</>)
						: <div className={`${styles.Item_Card_Unique} col-12 py-5`}>
							<img
								src={data.items[0].image}
								alt={data.items[0].title}
								className={styles.Item_Image}
								data-aos="fade-right"
							/>

							<div className={styles.Item_Text_Container} data-aos="fade-up">
								<h3 className={styles.Item_Title}>{data.items[0].title}</h3>
								<p className={styles.Item_Text}>{data.items[0].description}</p>
							</div>
						</div>
					}
				</div>
				<img
					src={DetailWhite}
					className={styles.Hero_Bottom_Detail}
					alt="Wireframes Planet"
				/>
			</section>

			<section className={`${styles.Extra_Container_Fluid} container-fluid`}>
				<div className={`${styles.Extra} container py-5`}>
					<h2 className={styles.Extra_Caption} data-aos="fade-up">
						{data.caption} <span className={styles.Extra_Caption_Highlight}>{data.caption_highlight}</span>
					</h2>
					<div className={`${styles.Extra_Row} row py-5 justify-content-center justify-content-lg-start`}>
						<div className={`${styles.Extra_Image_Container} col-12 col-md-6`} data-aos="zoom-in">
							<img
								src={data.caption_image}
								alt={data.caption + ' ' + data.caption_highlight}
								title={data.caption + ' ' + data.caption_highlight}
								className={styles.Extra_Image}
							/>
							<img
								src={data.caption_image}
								alt={data.caption + ' ' + data.caption_highlight}
								title={data.caption + ' ' + data.caption_highlight}
								className={styles.Extra_Image_Back}
							/>

						</div>
						<div className={`${styles.Extra_Text_Container} col-12 col-md-6 pt-5 pt-lg-0`}>
							{data.caption_items.map((item, index) => (
								<div key={`${data.title}-${index}`} className={styles.Extra_Item} data-aos="fade-up" data-aos-delay={index * 250}>
									<div className={styles.Extra_Number}>
										{index + 1}
									</div>
									<p className={styles.Extra_Text}>
										{item.text}
									</p>
								</div>
							))}
						</div>
					</div>
					<Companies/>
				</div>
			</section>
		</main>
	)
}

export default Servicio