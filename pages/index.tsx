import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import 'tailwindcss/tailwind.css';
import React from 'react'
import Navbar from 'components/Navbar'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}
