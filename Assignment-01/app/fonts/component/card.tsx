import Image from 'next/image'
import Line from "@/app/assets/line.png"
import Person from "@/app/assets/person.png"
import Barcode from "@/app/assets/barcode.png"
import React from 'react'

function Card(students: { id: number, name: string, timming: string, day: string }) {
  return (
    <div className='min-h-screen my-6 w-full grid justify-center items-center'>
      <div className=" flex flex-wrap justify-center items-center gap-10">
        <div className="front rounded-md  bg-slate-200">
          <div className="front-img">
            <h1 className='text-center text-white uppercase font-semibold pt-3' >Governor Initiative for Artificial Intelligence, Web 3.0 and Metaverse.</h1>
          </div>
          <div className="front-text">
            <Image src={Line} alt='' className='line'></Image>
            <Image src={Person} alt='person' className='person'></Image>
            <h1 className='uppercase font-semibold text-center text-xl py-3  text-[#010A11]'>Student Card</h1>
            <h6></h6>
            <div className="flex justify-evenly ">
              <div className="grid ask">
                <ul className='list-none'>
                  <li className='uppercase font-semibold text-[#010A11]'>name :</li>
                  <li className='uppercase font-semibold text-[#010A11]'>id no :</li>
                  <li className='uppercase font-semibold text-[#010A11]'>timming  :</li>
                  <li className='uppercase font-semibold text-[#010A11]'>day  :</li>
                </ul>
              </div>
              <div className="grid info">
                <ul className='list-none'>
                  <li className='uppercase font-semibold text-[#010A11]'>{students.name}</li>
                  <li className='uppercase font-semibold text-[#010A11]'>{students.id}</li>
                  <li className='uppercase font-semibold text-[#010A11]'>{students.timming}</li>
                  <li className='uppercase font-semibold text-[#010A11]'>{students.day}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="back rounded-md w-[250px] min-h-[400px] bg-green-900">
          <ul className='grid justify-center items-center px-8 py-5'>
            <li className=' text-white list-disc text-sm  py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, adipisci.</li>
            <li className=' text-white list-disc text-sm  py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, adipisci.</li>
            <li className=' text-white list-disc text-sm  py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, adipisci.</li>
          </ul>

          <h1 className='text-center text-white uppercase font-semibold' >GIAIC</h1>
          <Image src={Barcode} alt='barcode' className='barcode'></Image>
          <p className='text-center text-white text-sm'><small>Certified Cloud Applied Generative AI Engineer (GenEng)</small></p>
        </div>
      </div>
    </div>
  )
}

export default Card
