import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";


const Services = () => {

    const servicesData = [
        {
            title: 'Bridging BPJS',
            desc: 'Interkoneksi cerdas antara sistem Rumah Sakit dan BPJS Kesehatan, mencakup fitur- fitur unggulan seperti Auto Update KTT, Jadwal Operasi Online, dan akses I-Care.',
            icon: assets.logo_bpjs
        },
        {
            title: 'Integrasi SATU SEHAT',
            desc: 'Integrasi SATUSEHAT Kemenkes untuk pengiriman data medis sesuai standar HL7 & FHIR, memastikan sistem klinik dan rumah sakit patuh terhadap regulasi terbaru.',
            icon: assets.logo_satu_sehat
        },
        // {
        //     title: 'Hello Word',
        //     desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        //     icon: assets.content_icon
        // },
        // {
        //     title: 'Hello Word',
        //     desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        //     icon: assets.social_icon
        // }
    ]

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    transition={{ staggerChildren: 0.2 }}
    viewport={{once: true}}

    id='layanan-integrasi' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 
    xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

        <Title title='Layanan Integrasi' desc='Layanan integrasi sistem yang memastikan berbagai platform dan aplikasi kesehatan terhubung secara aman, andal, dan sesuai standar, guna mendukung operasional klinik dan rumah sakit yang efisien.'/>


        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index) => (
                <ServicesCard key={index} service={service} index={index}/>
            ))}
        </div>
      
    </motion.div>
  )
}

export default Services