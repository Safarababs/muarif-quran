import React from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';
import swal from "sweetalert";



function ContactForm() {

    const [input, setInput] = useState({
        name: "",
        mail: "",
        phone: "",
        message: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
            const name= input.name;
            const mail = input.mail;
            const phone = input.phone;
            const message = input.message;
       
        if (name && mail && phone && message){
            emailjs.sendForm('service_2o5rq45', 'template_x1jgtg8', event.target, 'V8T-BnQcnCg_dNTxt')
          .then((result) => {
              console.log(result.text);
              swal("Message Sent successfully!", "we will reply you ASAP! keep calm!", "success")
          }, (error) => {
              console.log(error.text);
              swal("Some error","Eamil not sent check email address and all values", "warning")
          });
        } else {
            swal("Fileds are required", "", "error")
        }
        
          event.target.reset()
    }

    return (
        <form onSubmit={handleClick}>
            <h3>send us a message</h3>
            <input type="text" name="name" onChange={handleChange} value={input.name} placeholder="name" className="box" />
            <input type="email" name="mail" onChange={handleChange} value={input.mail} placeholder="email" className="box" />
            <input type="number" name="phone" onChange={handleChange} value={input.phone} placeholder="phone" className="box" />
            <textarea type="text" name="message" onChange={handleChange} value={input.message} className="box" placeholder="message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" className="btn" />
        </form>
    )
}

export default ContactForm;