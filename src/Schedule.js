import React, { useEffect, useState } from 'react';
import Api from './Api.json';
import Nav from './Nav';
import Timer from './Timer';
import Footer from './Footer';

const Schedule = () => {
  const [data, setData] = useState(Api);
  const [search, setSearch] = useState('');
  const [option,setOption]=useState('')

  const handleChange = (e) => {
    setSearch(e.target.value);
    // setOption(e.target.value);
  };
  const handleChange1 = (e) => {
    setOption(e.target.value);
   
  };
  const filteredMatches = data.filter((val) => {
    const homeTeamMatches = val.home_team.toLowerCase().includes(search.toLowerCase());
    const awayTeamMatches = val.away_team.toLowerCase().includes(search.toLowerCase());
    const homeTeamMatches1 = val.home_team.includes(option);
    const awayTeamMatches1 = val.away_team.includes(option);
    return (homeTeamMatches || awayTeamMatches) && (homeTeamMatches1 || awayTeamMatches1);
  })
const clear=()=>{
    window.location.reload()
    setSearch('')
    setOption('')
}


  return (
    <div style={{marginTop:'80px'}} className='container'>
   {/* clock */}
   <Nav/>
  
   <Timer/>
   
  


{/* </select> */}
      
      {/* start of navigation div */}
      <div className='d-flex'><input type="text" name="" className='form-control text-center' placeholder='enter a country name to search' value={search} onChange={handleChange} />
      <select onChange={handleChange1} className='form-control'>

  <option value="" selected disabled>select country</option>
  <option value="India">India</option>
  <option value="Pakistan">Pakistan</option>
  <option value="England">England</option>
  <option value="Australia">Australia</option>
  <option value="South Africa">South Africa</option>
  <option value="Netherlands">Netherlands</option>
  <option value="Afghanistan">Afghanistan</option>
  <option value="Bangladesh">Bangladesh</option>
  <option value="Sri Lanka">Sri Lanka</option>
  <option value="New Zealand">New Zealand</option>
</select>
      <button className=' rounded-full btn btn-info' onClick={clear}><i class="fa-solid fa-x"></i></button></div>
      {/* end of navigation div */}
      {/* body */}
      {/* select */}
      <div>
        {filteredMatches.map((val) => (
          <div className="card text-center bg-cyan-600	 mt-1 min" key={val.match_no}>
            <h1 className="card-header "><i class="fa-solid fa-bullhorn"></i>match-no:{val.match_no}</h1>
            <div className="card-body bg-white  to-indigo-500 ">
              <h4 className="card-title">{val.date}</h4>
              <div>
                {val.match_no}: this is match number
              </div>
              <div className='d-flex justify-content-around'>
                <div>
                  <i className="fa-solid fa-house"></i>{val.home_team}
                </div>
                <div>
                  <i className="fa-solid fa-plane-circle-check"></i>{val.away_team}
                </div>
              </div>
            </div>
            <div className="card-footer text-body-secondary bg-yellow-400">
              <i className="fa-solid fa-location-dot "></i>{val.location}
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Schedule;
