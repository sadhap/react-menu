import React from 'react'

const Courses = ({courses}) => 
{
  return (
   <div className='section-center'>
    {courses.map((course)=>{
        const {id,title,price,img,desc} =  course;
        return(
            <>
            <article key={id}
            className='menu-item'>
            <img src={img}
            alt={title}
            className='photo'></img>            
            <div className='item-info'>
                <headers>
                <h4 className='title-ifo'>
                    {title}
                </h4>
                <h4 className='price'>₹{price}</h4>
                </headers>
             <p className='item-text'>{desc}</p>
            </div>
            
            </article>
            
            </>
        )
    })}
   </div>
  )
}

export default Courses