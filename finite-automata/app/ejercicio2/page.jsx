'use client'
import React, { useState } from 'react';


const Ejercicio2 = () => {
	const [palabra, setPalabra] = useState('');
	const [resultado, setResultado] = useState('');

	const handleChange = (e) => {
		setPalabra(e.target.value);
	};

	const matriz = [
		[1, 0, 200],
		[2, 0, 200],
		[2, 3, 200],
		[1, 4, 200],
		[4, 4, 200]
	]
	
	const analizar = () => {
		console.log(palabra);
		let i = 0;
		let estado = 0
		let caracter = 0

		let regexA = /[a]/
		let regexB = /[b]/

		while (i < palabra.length){
			if(regexA.test(palabra[i])){
				console.log(0)
				caracter = 0
			}
			else if(regexB.test(palabra[i])){
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
		
		if (estado == 4){
			setResultado('valida')
			console.log('Valida')
		} else {
			setResultado('invalida')
			console.log('Invalida');
		}
	}

	return (
		<div className='flex flex-col items-center'>
			<p className='mt-2'>Ejercicio 2 - Reconocer palabras que contengan "aabb"</p>
			<input className="p-2 border-2 border-[#49585f] rounded-md w-56 mt-4" type="text" placeholder='Coloca la entrada' onChange={handleChange} />
			<button className='p-2 bg-slate-400 rounded-md mt-2' onClick={analizar}>Analiza la entrada</button>
			{resultado != ''? <p className='mt-2'>Palabra {resultado}</p> : null}
		</div>
	)
}

export default Ejercicio2;