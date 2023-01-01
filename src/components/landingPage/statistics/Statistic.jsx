import React from 'react'

function Statistic() {
  return (
    <div>
    <div className="second-details-title">
           <div className="second-details-title-img"> <img src="" alt="" /></div>
           <div className="second-details-title-text"> Statistics  </div>
         </div>
   <div className='top-statistics'>
   <div>
       <img  src="" alt =""/>
       <div className='no-statistics'>17</div>
       <p className='name-sta'>Teachers</p>
   </div>
   <div>
       <img  src="" alt ="" className='grad-static'/>
       <div className='no-statistics'>158</div>
       <p className='name-sta'>Graduates</p>
   </div>
   <div>
       <img  src="" alt =""/>
       <div className='no-statistics'>15</div>
       <p className='name-sta'>Buildings</p>
   </div>

   </div>
   
   <div className='bottom-statistics'>
    <div >
       <img  src="" alt ="" className='office-static'/>
       <div className='no-statistics'>1</div>
       <p className='name-sta'>Office location</p>
    </div>
    <div>
       <img  src="" alt =""/>
       <div className='no-statistics'>183</div>
       <p className='name-sta'>Students</p>
    </div>
   

   </div>
   
</div>
  )
}

export default Statistic