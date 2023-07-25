import React from 'react';
import './Section.css';

const Section = () => {
  return (
    <section className="section">
        <p>
            The core of our unique approach lies in <br></br>
            leveraging the capabilities of tools such <br></br>
            as Hotjar and Mouseflow to capture and <br></br>
            replay user sessions.
        </p>
        <div className="img-text">
            <picture>
                <img src="./img/img002.png" alt="" width={400} height={450} />
            </picture>
            <p>
                Our UX experts meticulously watch <br></br>
                countless recordings of these sessions, <br></br>
                observing every click, scroll, and <br></br>
                interaction. Unlike data analysis that often <br></br>
                leans towards abstract interpretation, our <br></br>
                approach affords a direct window into user <br></br>
                behavior, ensuring a more authentic <br></br>
                perspective
            </p>
        </div>
        <div className="howitworks">
            <p>How it works</p>
            <div className="wrapper">
                <div className="grid-item">
                    <p>Sign Up</p>
                    <p>
                        Start your jorney towards product <br></br>
                        betterment by simply signing up for <br></br>
                        our service.
                    </p>
                    <p>01</p>
                </div>
                <div className="grid-item">
                    <p>Setup Instructions</p>
                    <p>
                        Upon sign-up, you'll receive an email <br></br>
                        from us with detailed instructions on <br></br>
                        how to set up or provide us access to <br></br>
                        your session-recording tool.
                    </p>
                    <p>02</p>
                </div>
                <div className="grid-item">
                    <p>Expert Analysis</p>
                    <p>
                        One of our experienced UX experts <br></br>
                        will delve into your product and <br></br>
                        session recordings. By observing <br></br>
                        every click, scroll, and interaction, we <br></br>
                        will gather a detailed understanding of <br></br>
                        user behaviors on your platform.
                    </p>
                    <p>03</p>
                </div>
                <div className="grid-item">
                    <p>Lorem Ipsum</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur <br></br> 
                        adipisicing elit. Odit hic ipsam sequi autem <br></br>
                        accusamus eos aspernatur, minus expedita id optio <br></br>
                        fugit sit atque? Neque facere aut ipsum, <br></br>
                        voluptatibus quisquam fugiat.
                    </p>
                    <p>04</p>
                </div>
                <div className="grid-item">
                    <p>Lorem Ipsum</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur <br></br> 
                        adipisicing elit. Odit hic ipsam sequi autem <br></br>
                        accusamus eos aspernatur, minus expedita id optio <br></br>
                        fugit sit atque? Neque facere aut ipsum, <br></br>
                        voluptatibus quisquam fugiat.
                    </p>
                    <p>05</p>
                </div>
                <div className="grid-item">
                    <p>Lorem Ipsum</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur <br></br> 
                        adipisicing elit. Odit hic ipsam sequi autem <br></br>
                        accusamus eos aspernatur, minus expedita id optio <br></br>
                        fugit sit atque? Neque facere aut ipsum, <br></br>
                        voluptatibus quisquam fugiat.
                    </p>
                    <p>06</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section