import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
	<header className='bg-purple-600 p-9 space-y-5 text-white'>
			<div>
				<h1 className='text-3xl text-center'>DFA - AUTOMATAS FINITOS DETERMINISTAS</h1>
			</div>

			<nav>
				<ul className='flex justify-evenly uppercase'>
					<li className='text-center'>
						<Link href='/'>Inicio</Link>
					</li>
					<li className='text-center'>
						<Link href='/ejercicio1'>Ejercicio 01</Link>
					</li>
					<li className='text-center'>
						<Link href='/ejercicio2'>Ejercicio 02</Link>
					</li>
					<li className='text-center'>
						<Link href='/ejercicio3'>Ejercicio 03</Link>
					</li>
					<li className='text-center'>
						<Link href='/ejercicio4'>Ejercicio 04</Link>
					</li>
				</ul>
			</nav>

	</header>
  )
}

export default Header