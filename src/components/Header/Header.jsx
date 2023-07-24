import React from 'react';
import Button from '../Button/Button';
import './Header.css'

const Header = () => {
  return (
    <div>
        <section className="head">
            <div className="logo">
                <a href="#">InsightReel</a>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <a href="#">About</a>
                        <a href="#">How it works</a>
                        <a href="#">Pricing</a>
                        <a href="#">FAQs</a>
                    </li>
                </ul>
            </div>
            <Button />
        </section>
    </div>
  )
}

export default Header