import React,{useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
 const form = useRef();

const [sentMessage, setSentMessage] = useState(false)

    const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm('service_pvetqze',
'template_csoq2sj',form.current,
'Yd0ftKDk064kWgEL8')
.then((result) => {
    console.log(result.text);
    setSentMessage(true)
}, (error) => {
    console.log(error.text);
});

    }

    return (
        <div className='contact-content'>
            <div className='contact-wrapper'>
                <h1>Contact</h1>
                
         <h2>Get In Touch</h2>
         <p className='contact-text'>Dropping a line to say g'day,ask for my resume or see 
            if we can build somehing amazing together?
            I'd love to here from you!
         </p>
         <p className='contact-text'>Please fill in your information below and
            i look foward to hearing from you!
         </p>
         <form onSubmit={sendEmail} ref={form}>
            <input type='text'
                 name='name'
            placeholder='name'/>
            <input type='text'
            placeholder='email'
            name='user_email' />
            <input type='text'
            placeholder='subject'/>
            <textarea cols='50' 
            rows='10' 
            name='message'
            placeholder='Message'>
         </textarea>
         <input type='submit'
            value='Send' 
            className='submit-btn'/>
            {sentMessage && <p className='sent-message'>Message Sent</p>}
         </form>
         
         {/*<a href='mailto:support@aishaagunbiade05.com'>Say Hello</a>*/}
        </div>

        </div>
    )
}

export default Contact
