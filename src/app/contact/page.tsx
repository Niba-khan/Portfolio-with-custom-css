import { MdOutlineEmail, MdOutlineMessage } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import './contact.css'

export default function Contact() {
  return (
    <section id='container'>
        <div className="contact-Container">
        <p style={{color: 'whitesmoke',  width: 'auto', fontSize: '30px',font:'bold'}}> Get In Touch</p>
        <h1 style={{color: 'whitesmoke',  width: 'auto', fontSize: '60px',font:'bold', marginTop:'10px'}}>Contact Me</h1>

        <div className='contact'>
            <div className='contact-options'>
                <div className='contact-option'>
                    <MdOutlineEmail size={70}/>
                    <h4>Email</h4>
                    <h5>khan@gmail.com</h5>
                </div>
                <div className='contact-option'>
                <MdOutlineMessage size={70}/>
                    <h4>Mesengar</h4>
                    <h5>Niba khan</h5>
                </div>
                <div className='contact-option'>
                <BsWhatsapp size={70}/>
                    <h4>Whatsapp</h4>
                    <h5>+9234-1234-456</h5>
                </div>
            </div>

     <div className="form-Container">
            <form>
                <input type='text' name='name' placeholder="Enter your Full Name" required/>
                <input type='email' name='email' placeholder="Enter your Email" required/>
                <input type='number' name='phone-number' placeholder="Enter your Phone-Number" required/>
                <textarea name='message' placeholder="Enter Message" required></textarea>
                <button type="submit" className="btn-primary">Send Message</button>
            </form>
        </div>
        </div>
        </div>
    </section>
  )
}