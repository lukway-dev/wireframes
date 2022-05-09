import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../styles/components/Companies.module.sass'

const Companies = () => {

	const items = [
		{
			name: 'Legion Network',
			image: '/assets/companies/company-1.png',
			width: 288,
			height: 60,
		}, {
			name: 'Motive.io',
			image: '/assets/companies/company-2.png',
			width: 222,
			height: 60,
		}, {
			name: 'Quantified Design Solutions',
			image: '/assets/companies/company-3.png',
			width: 240,
			height: 72,
		}, {
			name: 'Tech Change',
			image: '/assets/companies/company-4.png',
			width: 252,
			height: 60,
		}, {
			name: 'Foresight Sports',
			image: '/assets/companies/company-5.png',
			width: 258,
			height: 38,
		},
	]
	return (
		<div className={styles.Container} data-aos="fade-up">
			<div className={styles.Title_Container}>
				<p className={styles.Title}>
          Empresas que<br/>han confiado<br/>en nosotros
				</p>
			</div>
			<Swiper
				className={styles.Images_Container}
				modules={[ Autoplay, Navigation ]}
				slidesPerView={1}
				breakpoints={{
					425: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 40
					},
					1200: {
						slidesPerView: 4,
						spaceBetween: 50
					}
				}}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				// navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
				loop
				speed={1500}
			>
				{items.map((item, index) => (
					<SwiperSlide key={`Company-${index}`} className={styles.Item}>
						<img
							className={styles.Image}
							src={item.image}
							alt={item.name}
							title={item.name}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Companies