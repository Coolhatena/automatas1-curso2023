'use client'
import React, { useState } from 'react';


const Ejercicio3 = () => {
	const [palabra, setPalabra] = useState('');
	const [resultado, setResultado] = useState('');

	const handleChange = (e) => {
		setPalabra(e.target.value);
	};

	const matriz = [
		[2, 1, 200],
		[1, 1, 200],
		[2, 2, 200]
	]
	
	const analizar = () => {
		console.log(palabra);
		let i = 0;
		let estado = 0
		let caracter = 0

		let regex0 = /[0]/
		let regex1 = /[1]/

		while (i < palabra.length){
			if(regex1.test(palabra[i])){
				console.log(0)
				caracter = 0
			}
			else if(regex0.test(palabra[i])){
				console.log(1)
				caracter = 1
			}
			else{
				console.log(2)
				caracter = 2
			}
			
			estado = matriz[estado][caracter]
			if (estado === 200){
				setResultado('invalida')
				console.log('Invalida');
				return;
			}
			i++;
		}
		
		if (estado == 1){
			setResultado('valida')
			console.log('Valida')
		} else {
			setResultado('invalida')
			console.log('Invalida');
		}
	}

	return (
		<div className='flex flex-col items-center'>
			<p className='mt-2'>Ejercicio 3 - Cadenas de {"{"}1, 0{"}"} que inician con 0</p>
			<input className="p-2 border-2 border-[#49585f] rounded-md w-56 mt-4" type="text" placeholder='Coloca la entrada' onChange={handleChange} />
			<button className='p-2 bg-slate-400 rounded-md mt-2' onClick={analizar}>Analiza la entrada</button>
			{resultado != ''? <p className='mt-2'>Cadena {resultado}</p> : null}
		</div>
	)
}

export default Ejercicio3;