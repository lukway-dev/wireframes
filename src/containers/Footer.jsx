import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faTiktok, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/containers/Footer.module.sass'

const Footer = () => {
	return (
		<footer className={`${styles.Container_Fluid} container-fluid`}>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-4 mb-5">
						<h5 className={styles.Title}>
              ¿Cuál es tu idea?<br/>
              Cuéntanos
						</h5>
						<div className={styles.Data_Container}>
							<FontAwesomeIcon icon={faEnvelope}/>
							<a className={styles.Data_Item} href="mailto:info@wireframereality.com">info@wireframereality.com</a>
							<FontAwesomeIcon icon={faPhone}/>
							<a className={styles.Data_Item} href="tel:+0984886441">0984886441</a>
							<FontAwesomeIcon icon={faLocationDot}/>
							<span className={styles.Data_Item}>Oficina 703 Piso 7 - City Office</span>
						</div>
						<div className={styles.Data_Networks}>
							<a
								className={styles.Data_Network_Item}
								href="https://www.facebook.com/Wireframe-Reality-111678261391750"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faFacebookF}/>
							</a>
							<a
								className={styles.Data_Network_Item}
								href="https://twitter.com/wireframe_ec"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faTwitter}/>
							</a>
							<a
								className={styles.Data_Network_Item}
								href=" https://www.instagram.com/wireframereality/reels/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faInstagram}/>
							</a>
							<a
								className={styles.Data_Network_Item}
								href="https://www.tiktok.com/@wireframerealitysas"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faTiktok}/>
							</a>
							<a
								className={styles.Data_Network_Item}
								href="https://www.linkedin.com/company/wireframe-reality/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faLinkedinIn}/>
							</a>
							<a
								className={styles.Data_Network_Item}
								href="https://www.youtube.com/channel/UCSbZ_vjG7798mOxECk_-orQ/featured"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faYoutube}/>
							</a>
						</div>
					</div>
					<div className="col-12 col-md-4 mb-5">
						<h5 className={styles.Caption}>Wireframe Reality</h5>
						<div className={styles.Links_Container}>
							<Link to={'/portafolio'} className={styles.Link}>
								Portafolio
							</Link>
							<Link to={'/nosotros'} className={styles.Link}>
								Nosotros
							</Link>
							<Link to={'/contacto'} className={styles.Link}>
								Contacto
							</Link>
						</div>
					</div>
					<div className="col-12 col-md-4 mb-5">
						<h5 className={styles.Caption}>Servicios</h5>
						<div className={styles.Links_Container}>
							<Link to={'/servicio/realidad-virtual'} className={styles.Link}>
								Realidad Virtual
							</Link>
							<Link to={'/servicio/realidad-aumentada'} className={styles.Link}>
								Realidad Aumentada
							</Link>
							<Link to={'/servicio/experiencias-3D'} className={styles.Link}>
								Experiencias 3D en la Web
							</Link>
							<Link to={'/servicio/metaverso'} className={styles.Link}>
								Servicios de Metaverso
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer