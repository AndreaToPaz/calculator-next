import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import 'tailwindcss/tailwind.css';
import React from 'react'
import Navbar from '@/components/Navbar'
import Display from '@/components/Display';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   return (
      <div className='h-screen bg-base-300'>
         <Navbar></Navbar>
         <div className='grid gap-5'>
            <p className='mt-40 text-center text-4xl'>Calculadora de expresiones algebraicas</p>
            <p className='ml-60 mr-60 text-center'>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea saepe mollitia odit voluptatibus consectetur odio adipisci fugit commodi laborum. Necessitatibus, debitis nemo alias tempora dolores dolore eveniet tempore aut quasi?
            </p>
            <p className=' text-center text-6xl'>Foto</p>
            <div className='flex justify-center'>
               <button className="btn btn-outline btn-wide">Iniciar</button>
            </div>
         </div>
      </div>
   )
}
