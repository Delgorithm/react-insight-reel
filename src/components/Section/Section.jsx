import React from 'react';
import './Section.css';

const Section = () => {
  return (
    <section className="section">
        <div className="section-content" id='about'>
            <p>
                The core of our unique approach lies in <br></br>
                leveraging the capabilities of tools such <br></br>
                as Hotjar and Mouseflow to capture <br></br>
                and replay user sessions.
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
                    behavior, ensuring a more authentic <br></br>perspective.
                </p>
            </div>
        </div>
    </section>
  );
};

export default Section;