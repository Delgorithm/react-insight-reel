import React from 'react';
import Button from '../Button/Button';
import './Header.css'



const Header = () => {
    const handleLinkClick = ((event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if(targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth'});
        }
    });

  return (
    <div>
        <section className="head">
            <div className="logo">
                <a href="#">InsightReel</a>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
                        <a href="#how-it-works" onClick={(e) => handleLinkClick(e, 'how-it-works')}>How it works</a>
                        <a href="#pricing" onClick={(e) => handleLinkClick(e, 'pricing')}>Pricing</a>
                        <a href="#faqs" onClick={(e) => handleLinkClick(e, 'faqs')}>FAQs</a>
                    </li>
                </ul>
            </div>
            <Button />
        </section>
    </div>
  )
}

export default Header