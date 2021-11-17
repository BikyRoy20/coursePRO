import React from 'react'
function Contact(){
    return(
   
        <section className="contact" id="contact">
  <br/><br/>
        <h1 class="heading">Contact Us</h1>

        <div class="row">

            
            <form className="form">
                <div className="fms">
                <input type="text" className="sbox" placeholder="First name" />
                <input type="text" className="sbox" placeholder="Last name" />
                <input type="email" className="sbox" placeholder="Your email" />
                <input type="text" className="sbox" placeholder="Your phone number" />
                <textarea name="" id="" cols="30" rows="10" className="sbox message" placeholder="Message"></textarea>
                <input type="submit" value="Send message" className="btl" />
                </div>
            </form>

            <div className="content">
                <div className="icons">
                    <h3><i clasName="fas fa-map-marker-alt"></i> Contact inforrmation</h3>
                    <p>102 Street, India</p>
                </div>
                <div className="icons">
                    <h3><i className="fas fa-envelope"></i>  Email </h3>
                    <br/>
                    <p>coursePRO.com</p>
                </div>
                <div className="icons">
                    <h3><i className="fas fa-phone"></i> Phone </h3><br/>
                    <p>1800567890</p>
                </div>
            </div>

        </div>
   </section>
    );
}

export default Contact