import phone from '../img/telefono.png'
import email from '../img/email.png'
import pdf from '../img/pdf.png'
import pdf_file from '../resources/CV_Samuel_Figueroa_frontendDev.pdf'

const Contact = () => {
  return (
    <section id="contacto" className='py-16 bg-gradient-to-tl from-black to-[#0f172a]'>
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
        <div>
        <div className="flex items-center gap-4 pb-4">
          <img src={phone} alt="phone" className='w-20 invert' />
          <div>
            <h2 className="text-2xl font-bold text-white">Teléfono</h2>
            <p className="font-light text-white">+584120962677</p>
          </div>
        </div>
        <div className="flex items-center gap-4 pb-4">
          <img src={email} alt="email" className='w-20 invert' />
          <div>
            <h2 className="text-2xl font-bold text-white">Email</h2>
            <p className="font-light text-white">samuelfs96@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4 pb-4 cursor-pointer" onClick={() => window.open(pdf_file)}>
          <img src={pdf} alt="pdf" className='w-20 invert' />
            <h2 className="text-2xl font-bold text-white">Ver CV</h2>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact