import styles from '../styles/components/Form.module.sass'

const Form = () => {
	return (
		<form method="post" id="form" className={styles.Form} data-aos="fade-up">
			<div className={styles.Input_Double}>
				<input
					className={styles.Input}
					type="text"
					name="first-name"
					placeholder='Nombre'
					required/>
				<input
					className={styles.Input}
					type="text"
					name="last-name"
					placeholder='Apellido'
					required/>
			</div>
			<div className={styles.Input_Double}>
				<input
					className={styles.Input}
					type="email"
					name="email"
					placeholder='Correo'
					required/>
				<input
					className={styles.Input}
					type="tel"
					name="phone"
					placeholder='Teléfono'/>
			</div>
			<div className={styles.Input_Double}>
				<input
					className={styles.Input}
					type="text"
					name="job"
					placeholder='Profesión/área de trabajo'/>
				<input
					className={styles.Input}
					type="text"
					name="ciudad"
					placeholder='Ciudad/región'/>
			</div>
			<div className={styles.Input_Single}>
				<input
					className={styles.Input}
					type="text"
					name="question"
					placeholder='¿Cómo podríamos ayudarte?'/>
			</div>
			<div className={styles.Input_Single}>
				<textarea
					className={styles.Textarea}
					type="text"
					name="idea"
					placeholder='Escribe brevemente acerca de tu proyecto o idea'
					rows={4}
					maxLength={500}
				>
				</textarea>
			</div>

			<button type="submit" className={styles.Button}>Enviar</button>
		</form>
	)
}

export default Form