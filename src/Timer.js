import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time,setTime]=useState('')
 
    useEffect(()=>{
        var countDownDate = new Date("Oct 5, 2023 15:37:25").getTime();
        var x = setInterval(function() {
              var now = new Date().getTime();
          var distance = countDownDate - now;
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTime( days + "d " + hours + "h "+ minutes + "m " + seconds + "s ")
          if (distance < 0) {
            clearInterval(x);
           setTime('EXPIRED')
          }
        }, 1000);
    })
  return (
    <div className='row'>
           <div className='d-flex justify-content-end col-12 '>
   <p className='text-5xl text-rose-600 font-bold	font-mono		 '>CountDown:</p>  <h1 className='text-5xl '>{time}</h1>
   </div>
    </div>
  )
}

export default Timer