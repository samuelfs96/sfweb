import phone from '../img/telefono.png'
import email from '../img/email.png'

const Contact = () => {
  return (
    <>
    <div className='h-[80vh] flex items-center justify-center'>
        <div className='bg-bg2 bg-cover h-full w-full' style={{filter: 'brightness(0.6)'}}></div>
        <div className='absolute text-center gap-4 flex flex-col items-center'>
          <h1 className=' text-white p-8 text-3xl text-center font-thin'>Datos de Contacto</h1>
        </div>
      </div>
      <div className="flex justify-center items-start max-sm:flex-col max-sm:items-center mt-12 mb-12 gap-12">
        <div className="flex items-center gap-4 pb-4">
          <img src={phone} alt="phone" className='w-20' />
          <div>
            <h2 className="text-2xl text-sgl-black font-bold">Teléfono</h2>
            <p className="text-sgl-gray font-lato">+584120962677</p>
          </div>
        </div>
        <div className="flex items-center gap-4 pb-4">
          <img src={email} alt="email" className='w-20' />
          <div>
            <h2 className="text-2xl text-sgl-black font-bold">Email</h2>
            <p className="text-sgl-gray font-lato">samuelfs96@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact