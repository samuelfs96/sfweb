import React, { useEffect } from 'react'
import Intro from '../components/Proyects/intro';
import List from '../components/Proyects/list';

const Proyects = () => {
  useEffect(() =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])
  return (
    <>
      <Intro/>
      <List/>
    </>
  )
}

export default Proyects