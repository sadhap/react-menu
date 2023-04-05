import './App.css';
import React, { useState } from 'react';
import Courses from './component/Courses';
import data from './data';
import Categories from './component/Categories';
function App() {
  const [courses,SetCourses] = useState(data);
  // const categories = ['All','Web Development','Analytics','Programming'];
  const filterCourses = (category)=>{
    if(category === 'All')
    {
       SetCourses(data)
    }else{
      const newCourses = courses.filter((courses)=> courses.category === category);
      SetCourses(newCourses);
    }
    
  };
  
  return (
    <>
    <main>
      <section className='menu-section'>
      <div className='title'>
        <h2>Our courses</h2>
        <div className='underline'></div>
      </div>
      <Categories courses={courses} filterCourses={filterCourses}/>
      <Courses courses={courses}/>
      </section>
    </main>
    </>

  );
}

export default App;
 