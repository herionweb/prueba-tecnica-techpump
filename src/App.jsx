import React, { useRef } from "react"
import { useState } from "react"
import "./App.scss"
import watch from './assets/Vector.png'

function App() {
  const clock = useRef()
  const textCode = useRef()
	const [year, setYear] = useState("")
	const [formId, setFormId] = useState(1)
	const [secondOption, setSecondOption] = useState("")
	const [code, setCode] = useState("")
	const [expiredCode, setexpiredCode] = useState(false)
  const [step, setStep] = useState('PASO 1 de 2');
  const [title, setTitle] = useState('VAMOS, UNA MÁS');

  const resetCode = () => {
    setFormId(1) 
    setStep('PASO 1 de 2') 
    setTitle('VAMOS, UNA MÁS')
    setexpiredCode(false)
  }

  const  copyToClipboard = (e) => {
    navigator.clipboard.writeText(textCode.current.textContent)
  } 

	const getRemainingTime = (deadline) => {
		let now = new Date(),
			remainTime = (new Date(deadline) - now + 1000) / 1000,
			remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
			remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2)

		return {
			remainSeconds,
			remainMinutes,
		}
	}

	const countdown = (deadline) => {
		const timerUpdate = setInterval(() => {
			let t = getRemainingTime(deadline)
			clock.current.innerHTML = `${t.remainMinutes}:${t.remainSeconds}`

			if (clock.current.innerHTML == "00:00") {
        clock.current.innerHTML = ''
				clearInterval(timerUpdate)
				setexpiredCode(true)
			}
		}, 1000)
	}

	const showCode = () => {
    setStep('TU PREMIO ESTÁ LISTO')
    setTitle('¡ENHORABUENA!')
		let yearSplit = +year.split("")[2] + +year.split("")[3]
		let secondOptionSplit = secondOption.substr(-4, secondOption.length)
		let additionCode = (yearSplit + secondOptionSplit).toUpperCase()
		setCode(additionCode)
		countdown(new Date(new Date().getTime() + 20 * 60 * 1000))
		//countdown(new Date(new Date().getTime() + 3 * 1000)) /* Expirar tiempo */
		setFormId(3)
	}

	return (
		<div className="header">
			<div className="header__div">
				<span className="header__div__span span">{step}</span>
				<h1 className="header__div__h1 h1">{title}</h1>
				<p className="header__div__p p">
					Has llegado hasta el test de Siroko. Responde las siguientes preguntas
					y genera tu código premiado a medida.{" "}
				</p>
			</div>
			<form className={`header__form1 ${formId !== 1 ? "hidden-form" : ""}`}>
				<span className="header__form1__span">USO SIROKO DESDE...</span>
				<label className="header__form1__label" htmlFor="year1">
					2016
					<input
						onChange={(e) => setYear(e.target.value)}
						className="header__form1__label__input"
						type="radio"
						name="year"
						id="year1"
						value={2016}
					/>
				</label>
				<label className="header__form1__label" htmlFor="year2">
					2017
					<input
						onChange={(e) => setYear(e.target.value)}
						className="header__form1__label__input"
						type="radio"
						name="year"
						id="year2"
						value={2017}
					/>
				</label>
				<label className="header__form1__label" htmlFor="year3">
					2018
					<input
						onChange={(e) => setYear(e.target.value)}
						className="header__form1__label__input"
						type="radio"
						name="year"
						id="year3"
						value={2018}
					/>
				</label>
				<label className="header__form1__label" htmlFor="year4">
					2019
					<input
						onChange={(e) => setYear(e.target.value)}
						className="header__form1__label__input"
						type="radio"
						name="year"
						id="year4"
						value={2019}
					/>
				</label>
				<label className="header__form1__label" htmlFor="year5">
					2020
					<input
						onChange={(e) => setYear(e.target.value)}
						className="header__form1__label__input"
						type="radio"
						name="year"
						id="year5"
						value={2020}
					/>
				</label>
				<label className="header__form1__label" htmlFor="year6">
					2021
					<input
						onChange={(e) => setYear(e.target.value)}
						className="header__form1__label__input"
						type="radio"
						name="year"
						id="year6"
						value={2021}
					/>
				</label>
				<span onClick={() => {setFormId(2) ,setStep('PASO 2 de 2')}} className="header__form1__buttom">
					Siguiente {"-->"}
				</span>
			</form>
			<form className={`header__form1 ${formId !== 2 ? "hidden-form" : ""}`}>
				<span className="header__form1__span">
					POR UNAS GAFAS SIROKO, YO...
				</span>
				<label className="header__form1__label" htmlFor="glasess1">
					Segaría a navaja
					<input
						onChange={(e) => setSecondOption(e.target.value)}
						className="header__form1__label__input"
						type="radio"
						name="glasess"
						id="glasess1"
						value={"Segaría a navaja"}
					/>
				</label>
				<label className="header__form1__label" htmlFor="glasess2">
					Rechazaría un cachopo
					<input
						onChange={(e) => setSecondOption(e.target.value)}
						className="header__form1__label__input"
						type="radio"
						name="glasess"
						id="glasess2"
						value={"Rechazaría un cachopo"}
					/>
				</label>
				<label className="header__form1__label" htmlFor="glasess3">
					Renunciaría a mis tierras
					<input
						onChange={(e) => setSecondOption(e.target.value)}
						className="header__form1__label__input"
						type="radio"
						name="glasess"
						id="glasess3"
						value={"Renunciaría a mis tierras"}
					/>
				</label>
				<label className="header__form1__label" htmlFor="glasess4">
					Regalaría una ternera
					<input
						onChange={(e) => setSecondOption(e.target.value)}
						className="header__form1__label__input"
						type="radio"
						name="glasess"
						id="glasess4"
						value={"Regalaría una ternera"}
					/>
				</label>
				<span onClick={showCode} className="header__form1__buttom show-code">
					Siguiente {"-->"}
				</span>
			</form>
			<form className={`header__form1 ${formId !== 3 ? "hidden-form" : ""}`}>
				<span className="header__form3__span">LO PROMETIDO ES DEUDA</span>
				<div className="header__form3__div">
					<div className="header__form3__div__div">
						<div ref={textCode} className="header__form3__div__div__code" >
            {code}
						</div>
						<span className="header__form3__div__div__copy" onClick={copyToClipboard}>
							Copiar
						</span>
					</div>
					<p className="header__form3__div__p">
						Introduce este código en tu próxima compra para conseguir tu premio.
						¡Disponible durante 20 minutos!
					</p>

					{expiredCode ? (
						<div className="header__form3__div__expired">
							<span className="header__form3__div__expired__span">
								Código caducado.{" "}
								<span onClick={resetCode} className="header__form3__div__expired__span__reset">
									Reiniciar.
								</span>
							</span>
						</div>
					) : (
						<div className="header__form3__div__end-time">
              <img className="header__form3__div__end-time__img" src={watch} alt="Reloj" />
							<div
								ref={clock}
								className="header__form3__div__end-time__span"
							>20:00</div>
						</div>
					)}
				</div>
				<a href="https://www.siroko.com/es/"
					className="header__form1__buttom"
          target="_blank">
					Ir a siroko.com {"-->"}
				</a>
			</form>
		</div>
	)
}

export default App
