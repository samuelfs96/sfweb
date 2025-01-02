import phone from '../img/telefono.png'
import email from '../img/email.png'
// import pdf from '../img/pdf.png'
// import pdf_file from '../resources/Samuel_Figueroa_FrontendDev.pdf'

const Contact = () => {
  return (
    <section id="contacto" className='py-16 bg-gradient-to-tl from-black to-[#0f172a] max-xs:container'>
      <div className="flex items-center flex-col my-16">
      <div>
        <h1
          className=" text-white text-4xl font-bold m-2 uppercase"
        >
          Datos de Contacto
        </h1>
        <hr className="border-4 border-sf-blue w-[60%] -skew-x-12" />
      </div>
    </div>
      <div className="flex justify-center items-center">
        <div className='flex gap-16 items-start my-16 max-lg:flex-col max-lg:gap-4'>
        <div className="flex items-center gap-4 pb-4">
          <img src={phone} alt="phone" className='w-20 invert' />
          <div>
            <h2 className="text-xl font-bold text-white uppercase">Teléfono</h2>
            <p className="font-light text-white">+554199844-7540</p>
          </div>
        </div>
        <div className="flex items-center gap-4 pb-4">
          <img src={email} alt="email" className='w-20 invert' />
          <div>
            <h2 className="text-xl font-bold text-white uppercase">Email</h2>
            <p className="font-light text-white">sa.figuera1908@gmail.com</p>
          </div>
        </div>
        {/* <div className="flex items-center gap-4 px-4 max-lg:px-12 max-lg:py-3 max-lg:bg-sf-blue cursor-pointer hover:bg-sf-blue -skew-x-12 [&>*]:skew-x-12 transition-all" onClick={() => window.open(pdf_file)}>
          <img src={pdf} alt="pdf" className='w-20 invert' />
            <h2 className="text-xl font-bold text-white uppercase">Ver CV</h2>
        </div> */}
        </div>
      </div>
    </section>
  )
}

export default Contact