import React from 'react'
import { Link } from 'react-router-dom'
import Timer from './Timer'

const Nav = () => {
  return (
    <div className='bg-sky-950	p-3 fixed-top ' >
<ul class="nav nav-underline">
  <li class="nav-item">
    <Link class="nav-link active text-light text-xl" aria-current="page" to='/'>HomePage</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link text-light text-xl" to='/schedule'>Schedule</Link>
  </li>
 
</ul>

    </div>
  )
}

export default Nav