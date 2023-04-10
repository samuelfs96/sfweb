import React, { useEffect } from 'react'
import Intro from '../components/Proyects/Intro';
import List from '../components/Proyects/List';

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