import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.company}</p>
               <cite>{testimonials.description}</cite>
            </blockquote>
         </li>
      })

      var Achievements = this.props.data.Achievements.map(function(testimonials){
         return  <li key={testimonials.user}>
             <blockquote>
                <p>{testimonials.company}</p>
                <cite>{testimonials.description}</cite>
             </blockquote>
          </li>
       })
       var Honours = this.props.data.Honours.map(function(testimonials){
         return  <li key={testimonials.user}>
             <blockquote>
                <p>{testimonials.company}</p>
                <cite>{testimonials.description}</cite>
             </blockquote>
          </li>
       })
       var Interests = this.props.data.Interests.map(function(testimonials){
         return  <li key={testimonials.user}>
             <blockquote>
                <p>{testimonials.company}</p>
                <cite>{testimonials.description}</cite>
             </blockquote>
          </li>
       })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">
             <h1>Experience</h1>
            <div className="two columns header-col">

            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>

            <div className="row">
            <h1>Achievement</h1>
            <div className="two columns header-col">
               
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {Achievements}
                  </ul>
               </div>
            </div>

            <div className="row">
            <h1>Honours</h1>
            <div className="two columns header-col">
               
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {Honours}
                  </ul>
               </div>
            </div>

            <div className="row">
            <h1>Interests</h1>
            <div className="two columns header-col">
               
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {Interests}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
