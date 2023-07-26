import React from 'react';
import './Section.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import {faLaptopFile } from '@fortawesome/free-solid-svg-icons';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';


const Section = () => {
  return (
    <section className="section">
        <div className="section-content">
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
        <div className="howitworks">
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
        <div className="pricing">
            <p>Pricing</p>
            <div className="first-bundle">
                {getCarte().map((step, index) => (
                    <div className="bundle-left-right" key={index}>
                        <div className="bundle-left">
                            <p>{step.carte}</p>
                            <p>{step.report}</p>
                            <p>{step.info}</p>
                        </div>
                        <div className="bundle-right" key={index}>
                            <p>{step.price}</p>
                            <Button />
                        </div>
                    </div>
                ))}
            </div>
            <div className="three-bundle">
                {getPrices().map((step, index) => (
                    <div className="bundles" key={index}>
                        <p>{ step.frequency }</p>
                        <p>{ step.report }</p>
                        <div className="price-subscription">
                            <p>{ step.price }</p>
                            <p>{ step.subscription }</p>
                        </div>
                        <div className="save-cancel">
                            <p>{ step.save }</p>
                            <p>{ step.cancelation }</p>
                        </div>
                        <p>{ step.info }</p>
                        <Button />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};
  
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

const getCarte = () => [
    {
        carte:"À la carte",
        report:"Single Report",
        info:"Our most flexible option. Get a report on-demand, whenever you need an audit or peace of mind",
        price:"$999"
    }
]

const getPrices = () => [
    {
        frequency: "Monthly",
        report: "1 Report / Month",
        price: "$799",
        subscription: "per month",
        save: "save 20%",
        cancelation: "Cancel Any Time",
        info:"Get scheduled insights and issues in your inbox, every month."
    },
    {
        frequency: "Bi-Weekly",
        report: "2 Reports / Month",
        price: "$1399",
        subscription: "per month",
        save: "save 30%",
        cancelation: "Cancel Any Time",
        info:"Every two weeks, you get our top uncovered issues and insights in your inbox."
    },
    {
        frequency: "Weekly",
        report: "4 Reports / Month",
        price: "$1999",
        subscription: "per month",
        save: "save 50%",
        cancelation: "Cancel Any Time",
        info:"Stay on top of every issue as it surfaces, with an update report every week."
    },
];

export default Section;