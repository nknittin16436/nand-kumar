import React, { Component } from 'react';
class About extends Component {
   render() {
      if (this.props.data) {
         var name = this.props.data.name;
         var image = this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var country = this.props.data.address.country;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
      }
      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  {/* <img className="profile-pic"  src='../images/profilepic' alt="" /> */}
                  <img className="profile-pic" src={image} alt="" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>{bio}
                  </p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>
                              {street}, <br />
                              {city},<br />
                              {state},<br />
                              {country}<br />
                           </span>
                           <span><a href="tel:9625391880">{phone}</a></span><br />
                           <span><a className="emailLink" href="mailto:nknittin16436@outlook.com">{email}</a></span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href="NAND_KUMAR_2YR_SOFTWARE_DEVELOPER.pdf" download className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default About;
