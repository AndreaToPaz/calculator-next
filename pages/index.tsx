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
    <div>
      <Navbar></Navbar>

      <div className='bg-base-300'>
        <p className='text-center text-xl'>Calculadora de expresiones algebraicas</p>
      </div>

    </div>
  )
}
