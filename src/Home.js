import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Timer from './Timer'

 const Home = () => {
  return (
  <>
    <div style={{marginTop:'80px'}} className='container bg-sky-100 mt-12'>
      <Nav/>
      <Timer/>
    <div className='row'>
    <div className='d-flex w-75 col-12'>
     <h1 className='font-extrabold text-9xl	italic hover:not-italic text-indigo-600'>H</h1><h1 className='font-extrabold text-9xl	italic hover:not-italic	'>ighlights</h1>
     </div>
    </div>
      <div id="carouselExampleCaptions" class="carousel slide mt-3">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="d-flex justify-content-center">
      <img  class="d-block w-25 m-1" src="https://resources.pulse.icc-cricket.com/ICC/photo/2021/11/07/44680b7c-db63-4e53-9f56-8a320488d3d6/B6Nr5kjy.jpg" ></img>
      <img  class="d-block w-25 m-1" src="https://img.cricketnmore.com/uploads/2021/11/new-zealand-vs-afghanistan,-t20-world-cup-%E2%80%93-cricket-match-prediction,-fantasy-xi-tips--probable-xi.jpg" ></img>
      <img  class="d-block w-25 m-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzUR91zfo-mhmfg-yxEfkkaWQb_iLK-gFkUT-1l_zt8CPX7F2qZbA48No1Qx-dAUpnog&usqp=CAU" ></img>
      <img  class="d-block w-25 m-1" src="https://resources.pulse.icc-cricket.com/ICC/photo/2021/11/07/44680b7c-db63-4e53-9f56-8a320488d3d6/B6Nr5kjy.jpg" ></img>
      </div>
      {/* <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
    </div>
    <div class="carousel-item">
    <div class="d-flex justify-content-center">
      <img  class="d-block w-25 m-1" src="https://resources.pulse.icc-cricket.com/ICC/photo/2021/11/07/44680b7c-db63-4e53-9f56-8a320488d3d6/B6Nr5kjy.jpg" ></img>
      <img  class="d-block w-25 m-1" src="https://img.cricketnmore.com/uploads/2021/11/new-zealand-vs-afghanistan,-t20-world-cup-%E2%80%93-cricket-match-prediction,-fantasy-xi-tips--probable-xi.jpg" ></img>
      <img  class="d-block w-25 m-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzUR91zfo-mhmfg-yxEfkkaWQb_iLK-gFkUT-1l_zt8CPX7F2qZbA48No1Qx-dAUpnog&usqp=CAU" ></img>
      <img  class="d-block w-25 m-1" src="https://resources.pulse.icc-cricket.com/ICC/photo/2021/11/07/44680b7c-db63-4e53-9f56-8a320488d3d6/B6Nr5kjy.jpg" ></img>
      </div>
    </div>
    <div class="carousel-item">
    <div class="d-flex justify-content-center">
      <img  class="d-block w-25 m-1" src="https://resources.pulse.icc-cricket.com/ICC/photo/2021/11/07/44680b7c-db63-4e53-9f56-8a320488d3d6/B6Nr5kjy.jpg" ></img>
      <img  class="d-block w-25 m-1" src="https://img.cricketnmore.com/uploads/2021/11/new-zealand-vs-afghanistan,-t20-world-cup-%E2%80%93-cricket-match-prediction,-fantasy-xi-tips--probable-xi.jpg" ></img>
      <img  class="d-block w-25 m-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzUR91zfo-mhmfg-yxEfkkaWQb_iLK-gFkUT-1l_zt8CPX7F2qZbA48No1Qx-dAUpnog&usqp=CAU" ></img>
      <img  class="d-block w-25 m-1" src="https://resources.pulse.icc-cricket.com/ICC/photo/2021/11/07/44680b7c-db63-4e53-9f56-8a320488d3d6/B6Nr5kjy.jpg" ></img>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden ">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<h1 className='text-9xl'>News</h1>
        <img
          className='mt-0'
          src='https://resources.pulse.icc-cricket.com/photo-resources/2023/07/28/4ce76171-b170-48e9-ac01-9f06fd52d2cb/1973.jpg?width=1380&height=960'
          alt=''
        />
        <p className='text-4xl text-sky-800	'>50 years of glory:</p><p className='text-2xl underline	'> Golden jubilee celebration of the first-ever Cricket World Cup
CRICKET WORLD CUP FRIDAY 28 JULY</p>
<div className='d-flex'>
  <div>
    <p className='text-8xl text-rose-700'>T</p>
  </div>
  <div>
    <p className='mt-3 text-3xl'>o mark the 50th anniversary of the inaugural Cricket World Cup, the ICC took a walk down memory lane in recent weeks to celebrate the pioneers of women's cricket.</p>
  </div>
</div>
<div className='row mt-5'>
<div className='wrapper col-md-6'>
     <div className=' parent'>
      <div className='child pic'>
      </div>
      </div>
</div>
<div className='col-md-6 m-0'>
            <h1 className='text-2xl font-serif	 mt-0'> {/* Remove top margin for h1 element */}
              His batting skills, temperament, hunger to score runs, and fitness levels set him apart,” former India cricketer Pravin Amre told Scroll.in. “You need all these qualities to become a legend and he has them in abundance Despite not winning any ICC trophy, Virat Kohli is the most successful captain in India, with an overall win percentage of 63.38. Under the aggressive skipper, India won 65 of 95 ODIs, 30 of 50 T20Is and 39 of 66 .”
            </h1>
            <h1 className='text-5xl font-serif text-gray-900 text'>VIRAT KOHLI</h1>
          </div>
        </div>
        <div className='row'>
       <div className=' col-md-6'>
       <p className='text-8xl'> Netherlands and West Indies serve up ODI classic | CWC23 Qualifier</p>
       </div>
       <div className='col-md-6'>
       <iframe style={{scrollBehavior:'smooth'}}  src="https://www.cricketworldcup.com/video/3554436" width='500px' height='600px'></iframe>
       </div>
        </div>
       {/* cards */}
        <div className='row mt-2'>
          <div className='col-md-3'>
            {/*  */}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/07/27/4dfa1854-306e-4d87-98b6-1d5e02b4dfa3/Jofra-Archer.jpg?width=630&height=356" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    {/* <div class="font-bold text-xl mb-2">The Coldest Sunset</div> */}
    <p class="text-gray-700 text-base">
    England receive World Cup boost with good news on star
    England receive World Cup boost with good news on star
    </p>
  </div>
</div>
            {/*  */}
          </div>
          <div className='col-md-3'>
            {/*  */}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/07/27/8e99331e-f76b-4442-86fc-6ecbbd67dc6b/Ben-Stokes-knee.jpg?width=630&height=356" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    {/* <div class="font-bold text-xl mb-2">The Coldest Sunset</div> */}
    <p class="text-gray-700 text-base">
    No World Cup for Stokes as England captain ponders next step for knee captain ponders next step for knee
    </p>
  </div>
</div>
            {/*  */}
          </div>
        
          {/* ddddddddd */}
         
          <div className='col-md-3'>
            {/*  */}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/07/20/c11d777c-05b9-45d0-b61c-3d93c5dcd8cd/GettyImages-1243883034.jpg?width=630&height=356" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    {/* <div class="font-bold text-xl mb-2">The Coldest Sunset</div> */}
    <p class="text-gray-700 text-base">
    New learnings: Shikhar Dhawan draws inspiration from youngsters draws inspiration from youngsters from youngsters
    </p>
  </div>
</div>
            {/*  */}
          </div>
          <div className='col-md-3'>
            {/*  */}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/07/20/4a24d1bc-f983-4d75-863b-248c03c13247/shub.png?width=630&height=356" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    {/* <div class="font-bold text-xl mb-2">The Coldest Sunset</div> */}
    <p class="text-gray-700 text-base">
    Bollywood star and cricket greats combine to launch World Cup campaign World Cup campaign World Cup
    </p>
  </div>
</div>
            {/*  */}
          </div>
          
        </div>
        <div className='mb-2 mt-2'>
        <Footer/>
        </div>
      </div>

  </>
  )
}
export default Home
