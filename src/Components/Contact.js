import React, { Component } from 'react';

class Contact extends Component {
   render() {
      if (this.props.data) {
         var name = this.props.data.name;
         var contact = this.props.data.contact;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var country = this.props.data.address.country;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
      }

      return (
         <section id="contact">
            <div className="row section-head">
               <div className="two columns header-col">
                  <h1><span>Get In Touch.</span></h1>
               </div>

               <div className="ten columns">
                  <p className="lead">
                     {contact}
                  </p>

               </div>
            </div>
            <div className="row">

               <div className="eight columns">

                  <form id="contactForm" name="contactForm">

                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" size="35" id="contactName" name="contactName" />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" size="35" id="contactEmail" name="contactEmail" />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" size="35" id="contactSubject" name="contactSubject" />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                        </div>

                        <div>
                           <button onClick={() => console.log(this.props.data)}>Submit</button>
                        </div>

                     </fieldset>
                  </form>

                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>

               </div>


               <aside className="four columns footer-widgets">

                  <div className="widget widget_contact">

                     <h4>Address</h4>
                     <p className="address">
                        {name}<br />
                        {street}, <br />
                        {city},<br />
                        {state},<br />
                        {country}<br />
                        <span><a href="tel:9625391880">{phone}</a></span>
                        <br />
                        <span><a className="emailLink" href="mailto:nknittin16436@outlook.com">{email}</a></span>
                     </p>

                  </div>


               </aside>
            </div>

         </section>
      );
   }
}

export default Contact;
