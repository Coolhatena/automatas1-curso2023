'use client'
import React, { useState } from 'react';


const Ejercicio1 = () => {
	const [palabra, setPalabra] = useState('');
	const [resultado, setResultado] = useState('');

	const handleChange = (e) => {
		setPalabra(e.target.value);
	};

	const matriz = [
		[1, 200, 200],
		[1, 0, 200]
	]
	
	const analizar = () => {
		console.log(palabra);
		let i = 0;
		let estado = 0
		let caracter = 0

		let regexLetra = /[a-z_]/i
		let regexNumero = /[0-9]/

		while (i < palabra.length){
			if(regexLetra.test(palabra[i])){
				console.log(0)
				caracter = 0
			}
			else if(regexNumero.test(palabra[i])){
				console.log(1)
				caracter = 1
			}
			else{
				console.log(2)
				caracter = 2
			}
			
			estado = matriz[estado][caracter]
			if (estado === 200){
				setResultado('invalido')
				console.log('Invalido');
				return;
			}
			i++;
		}
		
		setResultado('valido')
		console.log('Valido')
	}

	return (
		<div className='flex flex-col items-center'>
			<p className='mt-2'>Ejercicio 1 - Reconocer Identificadores validos</p>
			<input className="p-2 border-2 border-[#49585f] rounded-md w-56 mt-4" type="text" placeholder='Coloca la entrada' onChange={handleChange} />
			<button className='p-2 bg-slate-400 rounded-md mt-2' onClick={analizar}>Analiza la entrada</button>
			{resultado != ''? <p className='mt-2'>Identificador {resultado}</p> : null}
		</div>
	)
}

export default Ejercicio1;