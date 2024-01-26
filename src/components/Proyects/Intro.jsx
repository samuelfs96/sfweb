const Intro = () => {
  return (
    <div className='h-[80vh] flex items-center justify-center'>
        <div className='bg-bg3 bg-cover max-lg:bg-center h-full w-full' style={{filter: 'brightness(0.3)'}}></div>
        <div className='absolute text-center gap-4 flex flex-col items-center'>
          <h1 className=' text-white p-8 text-3xl text-center font-bold uppercase'>Mis Proyectos</h1>
        </div>
      </div>
  )
}

export default Intro
