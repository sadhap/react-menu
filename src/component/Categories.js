import React from 'react'

const Categories = ({courses,filterCourses}) => {
  // console.log(courses);
  let categories = courses.map((course)=> course.category);
  categories = ['All',...new Set(categories)];
  return (
     <div className='btn-container'>
       {categories.map((category,index)=>{
      return (
        <>
        <button className='filter-btn' key={index} onClick={()=>filterCourses(category)}>
          {category}
        </button>
        </>
      );}
      )}
     </div>
  )
}

export default Categories;