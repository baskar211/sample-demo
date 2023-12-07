import React from 'react'

export default function Header () {
  return (
<>
<div className='w-full text-slate-300 uppercase'>
  <nav className='flex justify-between items-center  w-full bg-transparent px-3 py-3  '>
    <a href="#" className='text-2xl fon-bold uppercase px-3 '>Healet</a>  
    <div className='hidden md:flex'>
      <ul>
        <li><a href="#">home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">shop</a></li>
        <li><a href="#">blog</a></li>
      </ul>
    </div>
    <button className='md:hidden border px-3 mr-3 py-2 hover:shadow-xl bg-slate-800 hover:bg-slate-300 hover:text-black uppercase'><span>toggler</span></button>

  </nav>
</div>

<Content/>

</>


    )
}


function Content(){
  return(
    <>
    <div className=' overflow-x-hidden w-full'>
      <div className='px-4 py-10  text-slate-300 text-left  '>
<h1 className='text-2xl font-bold uppercase -tracking-tighter w-68'>Best JEWELLERY <br/>collection</h1>
 <br />
<p className=' leading-6 w-52 font-light text-wrap'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur expedita quibusdam reiciendis tenetur! Ut fuga ullam reprehenderit earum accusamus, necessitatibus sunt esse sequi eaque maxime, expedita iusto obcaecati sapiente? Eaque.</p>
<br />
<div className='mt-6'>
<a href="#" className=' text-center text-orange-400  border border-orange-400 px-10 py-3 rounded-lg' >shop now</a>

</div>
      </div>
    </div>
    
    
    </>
  )
}