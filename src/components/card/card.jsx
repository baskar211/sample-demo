import React from 'react'
import p1 from '../../assets/images/p1.png'
import p2 from '../../assets/images/p2.png'
import p3 from '../../assets/images/p3.png'
import p4 from '../../assets/images/p4.png'
import p5 from '../../assets/images/p5.png'
import p6 from '../../assets/images/p6.png'
import p7 from '../../assets/images/p7.png'
import p8 from '../../assets/images/p8.png'
import './card.css'

let Necklace = "Necklace"
let Ring = "Ring"
let Earrings = 'Earrrings' 



export default function Card(props) {
 
 
    return (
   <>
   <section className='w-full h-auto mt-3 overflow-x-hidden'>

<div>
    <h3 className='text-3xl uppercase  p-3'>latest products</h3>
    <div className='conatiner__card'>
        <div className='card bg-gray-400 mx-auto p-4'>
            <div className=" grid-1  bg-slate-300 rounded-full capitalize text-center font-normal w-12 px-1 py-2 "> <span className='text-left'>new</span> </div>
            <div className='grid-2'> <img src={p1} alt="necklace" className='w-44  h-40 mx-auto  img__fiter sepia-0' /></div>
            <div className='flex grid-3 justify-between px-2 py-2 text-black'> {Necklace}  <h3 > price <span className='text-orange-500'>$200</span></h3> </div>
        </div>
    </div>

    <div className='conatiner__card'>
        <div className='card bg-gray-400 mx-auto p-3'>
            <div className=" grid-1  bg-slate-300 rounded-full capitalize text-center font-normal w-12 px-1 py-2 "> <span className='text-left'>new</span> </div>
            <div className='grid-2'> <img src={p2} alt="necklace" className='w-32 h-44 mx-auto  img__fiter sepia-0' /></div>
            <div className='flex grid-3 justify-between px-2 py-2 text-black'> {Necklace}  <h3 > price <span className='text-orange-500'>$200</span></h3> </div>
        </div>
    </div>

    <div className='conatiner__card'>
        <div className='card bg-gray-400 mx-auto p-3'>
            <div className=" grid-1  bg-slate-300 rounded-full capitalize text-center font-normal w-12 px-1 py-2 "> <span className='text-left'>new</span> </div>
            <div className='grid-2'> <img src={p3} alt="necklace" className='w-32 h-38 mx-auto  img__fiter sepia-0' /></div>
            <div className='flex grid-3 justify-between px-2 py-2 text-black'> {Necklace}  <h3 > price <span className='text-orange-500'>$200</span></h3> </div>
        </div>
    </div>
    <div className='conatiner__card'>
        <div className='card bg-gray-400 mx-auto p-3'>
            <div className=" grid-1  bg-slate-300 rounded-full capitalize text-center font-normal w-12 px-1 py-2 "> <span className='text-left'>new</span> </div>
            <div className='grid-2'> <img src={p4} alt="necklace" className='w-32  h-32 mx-auto  img__fiter sepia-0' /></div>
            <div className='flex grid-3 justify-between px-2 py-2 text-black'> {Necklace}  <h3 > price <span className='text-orange-500'>$200</span></h3> </div>
        </div>
    </div>
    <div className='conatiner__card'>
        <div className='card bg-gray-400 mx-auto p-3'>
            <div className=" grid-1  bg-slate-300 rounded-full capitalize text-center font-normal w-12 px-1 py-2 "> <span className='text-left'>new</span> </div>
            <div className='grid-2'> <img src={p5} alt="necklace" className='w-32 h-32 mx-auto m-10 img__fiter sepia-0' /></div>
            <div className='flex grid-3 justify-between px-2 py-2 text-black'> {Necklace}  <h3 > price <span className='text-orange-500'>$200</span></h3> </div>
        </div>
    </div>
    <div className='conatiner__card'>
        <div className='card bg-gray-400 mx-auto p-3'>
            <div className=" grid-1  bg-slate-300 rounded-full capitalize text-center font-normal w-12 px-1 py-2 "> <span className='text-left'>new</span> </div>
            <div className='grid-2'> <img src={p6} alt="necklace" className='w-32 h-26 m-10 mx-auto   img__fiter sepia-0' /></div>
            <div className='flex grid-3 justify-between px-2 py-2 text-black'> {Necklace}  <h3 > price <span className='text-orange-500'>$200</span></h3> </div>
        </div>
    </div>
    <div className='conatiner__card'>
        <div className='card bg-gray-400 mx-auto p-3'>
            <div className=" grid-1  bg-slate-300 rounded-full capitalize text-center font-normal w-12 px-1 py-2 "> <span className='text-left'>new</span> </div>
            <div className='grid-2'> <img src={p7} alt="necklace" className='w-20 h-28 m-10 mx-auto  img__fiter sepia-0' /></div>
            <div className='flex grid-3 justify-between px-2 py-2 text-black'> {Necklace}  <h3 > price <span className='text-orange-500'>$200</span></h3> </div>
        </div>
    </div>
    <div className='conatiner__card'>
        <div className='card bg-gray-400 mx-auto p-3'>
            <div className=" grid-1  bg-slate-300 rounded-full capitalize text-center font-normal w-12 px-1 py-2 "> <span className='text-left'>new</span> </div>
            <div className='grid-2'> <img src={p8} alt="necklace" className='w-32 h-32 mx-auto  m-10 img__fiter sepia-0' /></div>
            <div className='flex grid-3 justify-between px-2 py-2 text-black'> {Necklace}  <h3 > price <span className='text-orange-500'>$200</span></h3> </div>
        </div>
    </div>
</div>
<button className='mx-10 py-3 px-3 rounded-lg text-slate-300 my-10 bg-orange-500' >view all products </button>

   </section>
   
   
   </>
   
   
    )
}
