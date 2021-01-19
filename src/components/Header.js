import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;


    class TypeWriter {
      constructor(txtElement, words, wait = 1500) {
          this.txtElement = txtElement;
          this.words = words;
          this.txt = '';
          this.wordIndex = 0;
          this.wait = parseInt(wait, 10);
          this.type();
          this.isDeleting = false;
      }
  
      type() {
          // Current index of word
          const current = this.wordIndex % this.words.length;
          // Get full text of current word
          const fullTxt = this.words[current];
  
          // Check if deleting
          if (this.isDeleting) {
              // Remove char
              this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
              // Add char
              this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
  
          // Insert txt into element
          this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
          // Initial Type Speed
          let typeSpeed = 125;
  
          if (this.isDeleting) {
              typeSpeed /= 2;
          }
  
          // If word is complete
          if (!this.isDeleting && this.txt === fullTxt) {
              // Make pause at end
              typeSpeed = this.wait;
              // Set delete to true
              this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
              this.isDeleting = false;
              // Move to next word
              this.wordIndex++;
              // Pause before start typing
              typeSpeed = 100;
          }
  
          setTimeout(() => this.type(), typeSpeed);
      }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
      const txtElement = document.querySelector('.txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
      // Init TypeWriter
      new TypeWriter(txtElement, words, wait);
  }
  


    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
              <div style={{position: "absolute", top: '25%', left:'0rem'}}>
                <h1
                  // className="responsive-headline"
                >{resumeData.name}</h1>
                <h3 style={{ color: '#fff', fontFamily: 'sans-serif',  }}>I am a {resumeData.role}.{resumeData.roleDescription}
                </h3>
                <div style={{position:"relative"}}>
              <h2>
                <span style={{color:'#fff', fontFamily:'sans-serif ',}} class="txt-type" data-wait="1500" data-words='["Developer", "Designer", "Creator"]'></span>

                  </h2>
                  
               
                </div>
                
              </div>
              
              <ul className="social">
              <hr/>

                {
                  
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return (
                              
                        
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
              </ul>
              
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}