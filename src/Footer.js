import React from 'react'

const Footer = () => {
  return (
    <div className='bg-violet-950	 pb-3 text-center'>
        <div className='text-center'>
            <h1 className='text-3xl text-slate-100	'>Follow us on social media</h1>
            <div>
            <i class="fa-brands fa-facebook text-4xl text-slate-100"></i> <i class="fa-brands fa-square-twitter text-4xl text-slate-100"></i> <i class="fa-brands fa-square-instagram text-4xl text-slate-100"></i><i class="fa-brands fa-youtube text-4xl text-slate-100"></i>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-md-4'>
                <h1 className='text-xl text-slate-100'>CRICKET WORLD CUP</h1>
                <p className='text-slate-100'>Homepage</p>
                <p className='text-slate-100'>schedule</p>
            </div>
            <div className='col-md-4'>
                <h1 className='text-xl text-slate-100'>NEWS & VIDEOS</h1>
                <p className='text-slate-100'>All News</p>
                <p className='text-slate-100'>Video Hub</p>
            </div>
            <div className='col-md-4'>
                <h1 className='text-xl text-slate-100'>MORE</h1>
                <p className='text-slate-100'>Shop</p>
                <p className='text-slate-100'>Crictos</p>
            </div>
           
        </div>
    </div>
  )
}

export default Footer