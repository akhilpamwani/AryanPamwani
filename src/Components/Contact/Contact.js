import React from 'react'
import send from'../assets/img/Send.png'
import '../assets/css/Contact.css'

export const Contact = () => {
    

    return (
        <>
          <div className="Project-intro">
                <h3 className="Project-h3">
                   Get in touch
                </h3>
                <p className="Project-p">
                    Contact Me
                </p>
                <div className="Form-Control" id='Contact'>
                    <form  className="Form" name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="name_of_my_form"/>
                        <p  className="Form-para">    Name</p>
                        <input type="text" id="name" name='name'

                        

     className="Form-Input  Form-Dark-Input" placeholder=' Enter Your Name' />
                        
                        
<p  className="Form-para">   E-mail</p>

 <input type="email" id="email" className="Form-Input Form-Dark-Input" name='email'



 placeholder=' Enter Your E-mail'/>
 <p className="Form-para">   Phone Number</p>
  <input type="tel" id="phone" className="Form-Input Form-Dark-Input" name='phone'

   

  placeholder='Enter Your Phone Number' />    
  <p className="Form-para">Subject</p>
<input type="text"  id="subject" className="Form-Input Form-Dark-Input" name='subject'



placeholder='Enter Your Subject'/>
 <label htmlFor="detail" className="Form-para"> Express Your Subject in Details</label>
 <textarea id="detail" cols="30" rows="10" 
name='detail'
 
  className="Form-Input Form-Dark-Input " placeholder='Explain Your Subject in Details'></textarea>
  
 <button className="Form-Submit"type="submit" ><img src={send} alt="img"className='Form-Img'/> Submit</button>
                    </form>
                </div>

            </div>   
        </>
    )
}
