import icon1 from '../assets/Images/teorem1.png';
import icon2 from '../assets/Images/teorem2.png';
import teorem1 from '../assets/Images/teorem-background1.png';
import gadget1 from '../assets/Images/teorem-pic1.png';
import gadget2 from '../assets/Images/teorem-pic2.png';
import gadget3 from '../assets/Images/teorem-pic3.png';
import gadget4 from '../assets/Images/teorem-pic4.png';
import gadget5 from '../assets/Images/teorem-pic5.png';
import gadget6 from '../assets/Images/teorem-pic6.png';
import arrow from '../assets/Images/arrow.png';




const Teorem = () => {
  return (
    <>
        <div className="container">
            <div className='teorem'>
            <div className="teorem__title">
            <h1 className='teorem__title__main'>Start tutoring 
               <span> online
                </span></h1>
            <p>Give lessons whenever you want,<br />
                from the comfort of your home.</p>
            <img className='teorem__icona ' src={icon2} />    
            <img className='teorem__iconb ' src={icon1} />    
            <div className='teorem__iconc '> </div>    
            <div className='teorem__icond '> </div>    
            </div>
            <img className='teorem__solo' src={teorem1}  />

            <section className='teorem__section__first'>
                <div className='teorem__title'>
                    <h1>Teorem’s online tutoring makes 
                    your life easier</h1>
                    <p>We’ll provide you with everything you need <br /> to teach online.
                         We help you find students <br /> and manage lessons.</p>
                </div>
                <div className='teorem__card__container'>
                    <div className='teorem__card'>
                        <img src={gadget1} />
                        <div className='teorem__title'>
                            <h2>   Fully remote </h2>
                            <p>   All you need is a laptop and wifi.  </p>
                        </div>
                    </div>
                    <div className='teorem__card'>
                        <img src={gadget2} />
                        <div className='teorem__title'>
                            <h2> Tools you need   </h2>
                            <p>  Booking system, chat, video calls & more.   </p>
                        </div>
                    </div>
                    <div className='teorem__card'>
                        <img src={gadget3} />
                        <div className='teorem__title'>
                            <h2>  Secure Income  </h2>
                            <p>  We make sure you get paid.   </p>
                        </div>
                    </div>
                    <div className='teorem__card'>
                        <img src={gadget4} />
                        <div className='teorem__title'>
                            <h2>  Set Your Price  </h2>
                            <p>   No limitations on what you can earn.  </p>
                        </div>
                    </div>
                    <div className='teorem__card'>
                        <img src={gadget5} />
                        <div className='teorem__title'>
                            <h2>  24/7 Support  </h2>
                            <p>   We make sure all your issues are solved.  </p>
                        </div>
                    </div>
                    <div className='teorem__card'>
                        <img src={gadget6} />
                        <div className='teorem__title'>
                            <h2>  Improve Your Teaching  </h2>
                            <p>    We take care of administration, you just focus on the lessons. </p>
                        </div>
                    </div>
                </div>
                <div className='teorem__tutor'>
                    <div>
                        <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                             Vestibulum non vulputate leo. Lorem ipsum dolor sit amet, <br />
                              consectetur adipiscing elit. Vestibulum non vulputate leo.”</p>
                    </div>
                     <div className='teorem__tutor__profile'>
                        <img src={icon2}/>
                        <h2>John Doe</h2>
                        <h4>Tutor</h4>
                        </div>     
                </div>
            </section>
            
            <section className='teorem__section__second'>
                <div className='teorem__title'>
                    <h1>
                    Set your own price and availability!
                    </h1><p>
                    Use our tools to track how much you’re 
                   <br /> making and increase your client base!
                    </p>
                </div>
                <img className='teorem__solo'src={teorem1} />
                <div className="teorem__title">
                    <h1>We are here to help you grow!</h1>
                </div>
                <div className='teorem__tutor'>
                    <div>
                        <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                             Vestibulum non vulputate leo. Lorem ipsum dolor sit amet, <br />
                              consectetur adipiscing elit. Vestibulum non vulputate leo.”</p>
                    </div>
                     <div className='teorem__tutor__profile'>
                        <img src={icon1}/>
                        <h2>John Doe</h2>
                        <h4>Tutor</h4>
                        </div>     
                </div>
            </section>


                <div className="teorem__title">
                    <h1>How to become an online <br />
                         tutor on Teorem</h1>
                </div>
            <section className='teorem__section__third'>
                <div className='teorem__steps'>
                 <div>
                 <p><span>1</span> Create your account and fill in the information.</p>
                </div>   
                 <div>
                 <p><span>2</span> Upload a short video to prove your identity.</p>
                </div>   
                 <div>
                 <p><span>3</span> Complete your profile and start tutoring!</p>
                </div>   
                 </div>
            </section>
                <button className='teorem__steps__btn'>Get started</button>

                <div className="teorem__title">
                    <h1>Frequently asked questions</h1>
                </div>
            <section className='teorem__faq'>
                <div className='teorem__faq__container'>
                    <div className='teorem__faq__question'>
                        <div>
                            <p>    What are the requirements for tutors? </p>< img className='teorem__faq__arrow' src={arrow} />
                        </div>
                    </div>
                    <div className='teorem__faq__question'>
                        <div>
                            <p> How long does it take before I can start teaching?    </p>< img className='teorem__faq__arrow' src={arrow} />
                        </div>
                    </div>
                    <div className='teorem__faq__question'>
                        <div>
                            <p> How does the subscription work?    </p>< img className='teorem__faq__arrow' src={arrow} />
                        </div>
                    </div>
                    <div className='teorem__faq__question'>
                        <div>
                            <p>  What does the employment relationship look like?   </p>< img className='teorem__faq__arrow' src={arrow} />
                        </div>
                    </div>
                    <div className='teorem__faq__question'>
                        <div>
                            <p>  What makes Teorem different from other platforms?   </p>< img className='teorem__faq__arrow' src={arrow} />
                        </div>
                    </div>
                
                </div>
            </section>

            <section className='teorem__fotter'>
                <h2>Teorem</h2>
                <h3>If you have additional questions, 
                    feel free to contact us via email info@teorem.hr</h3>
                    <div className='teorem__fotter__about'>
                        <div>
                            <h3>  Teorem d.o.o.  </h3>
                            <p>    Address 69, Zagreb</p>
                            <p>   +385 1 3434 620  </p>
                            <p>   info@teorem.hr  </p>
                        </div>
                        <div>
                            <h3>  About Teorem  </h3>
                            <p>  Legal notice </p>
                            <p>   Privacy policy  </p>
                            <p>   Become a tutor   </p>
                        </div>
                        <div>
                            <h3>  Payment Methods  </h3>
                            <p>  Lorem ipsum dolor</p>
                            <p>    sit amet  </p>
                            <h3>stripe</h3>
                        </div>
                    </div>
                        <p>© Teorem 2021</p>
            </section>
        </div>    
    </div>
    </>
  )
}

export default Teorem