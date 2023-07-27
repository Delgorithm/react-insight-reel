import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import {faLaptopFile } from '@fortawesome/free-solid-svg-icons';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import './Work.css';

const Work = () => {
  return (
    <section className='work'>
        <div className="howitworks" id='how-it-works'>
                <p>How it works</p>
            <div className="wrapper">
                {getSteps().map((step, index) => (
                    <div className="grid-item" key={index}>
                        <p>{step.title}</p>
                        <p>{step.description}</p>
                        <p>{step.stepNumber}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="details">
            {getDetails().map((step, index) => (
                <div className="infoDetail" key={index}>
                    <p>{step.logo}</p>
                    <p>{step.title}</p>
                    <p>{step.description}</p>
                </div>
            ))}
         </div>
    </section>
  )
}

const getSteps = () => [
    {
    title: "Sign Up",
    description: 'Start your journey towards product betterment by simply signing up for our service.',
    stepNumber: '01'
    },
    {
    title: 'Setup Instructions',
    description: "Upon sign-up, you'll receive an email from us with detailed instructions on how to set up or provide us access to your session-recording tool.",
    stepNumber: '02',
    },
    {
    title: 'Expert Analysis',
    description: 'One of our experienced UX experts will delve into your product and session recordings. By observing every click, scroll, and interaction, we will gather a detailed understanding of user behaviors on your platform.',
    stepNumber: '03',
    },
    {
    title: 'Lorem Ipsum',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit hic ipsam sequi autem accusamus eos aspernatur, minus expedita id optio fugit sit atque? Neque facere aut ipsum, voluptatibus quisquam fugiat.',
    stepNumber: '04',
    },
    {
    title: 'Lorem Ipsum',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit hic ipsam sequi autem accusamus eos aspernatur, minus expedita id optio fugit sit atque? Neque facere aut ipsum, voluptatibus quisquam fugiat.',
    stepNumber: '05',
    },
    {
    title: 'Lorem Ipsum',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit hic ipsam sequi autem accusamus eos aspernatur, minus expedita id optio fugit sit atque? Neque facere aut ipsum, voluptatibus quisquam fugiat.',
    stepNumber: '06',
    },
];

const getDetails = () => [
    {
        logo:<FontAwesomeIcon icon={faNetworkWired} style={{color: "#000000",}} />,
        title:'Direct Window into User Behavior',
        description: 'Unlike many services that rely heavily on abstract data analysis. Insight Reel provides you a unique approeach with a direct window into your users interactions. By replaying and analyzing actual user sessions, we ensure an authentic perspective that truly represents your users experiences.'
    },
    {
        logo:<FontAwesomeIcon icon={faCertificate} style={{color: "#000000",}} />,
        title:'UX Expertise',
        description:'Our team is composed of UX experts with extensive experience. Their meticulosu approach to analyzing countless user session recordings ensures you get the most in-depth and comprehensive insights about your product.'
    },
    {
        logo:<FontAwesomeIcon icon={faSquarePollVertical} style={{color: "#000000",}} />,
        title:'Actionable Insights',
        description:`Our finding aren't ujst analytical reports: they are actionable insights. We give you concrete improvement points based on actual user behavior, enabling you to implement targeted strategies for product enhancement.`
    },
    {
        logo:<FontAwesomeIcon icon={faLaptopFile} style={{color: "#000000",}} />,
        title:'Flexible Services',
        description:`We understand the dynamic nature of businesses, and we offer flexible service options. Choose between ad-how reports or one of our subscription options to suit your needs.`
    },
    {
        logo:<FontAwesomeIcon icon={faScaleBalanced} style={{color: "#000000",}} />,
        title:'A Focus on Balance',
        description:`Data is critical, but so is human behavior. We champion a balance between data analysis and user behavior observation, eliminating 'paralysis by analysis.`
    },
    {
        logo:<FontAwesomeIcon icon={faChartLine} style={{color: "#000000",}} />,
        title:'Continuous Improvement',
        description:`With Insight Reel, the process of product enhancement is never-ending. We take pride in offering a consistent focus on user behavior analysis, ensuring continuous improvements for your offerings.`
    },
];

export default Work