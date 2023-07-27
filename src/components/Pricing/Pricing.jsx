import React from 'react'
import Button from '../Button/Button';
import './Pricing.css'

const Pricing = () => {
  return (
    <section className="price-section">
        <div className="pricing" id='pricing'>
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
        </div>
        <div className="three-bundle">
            {getPrices().map((step, index) => (
                <div className="bundles" key={index}>
                    <p>{step.frequency}</p>
                    <p>{step.report}</p>
                    <div className="price-subscription">
                        <p>{step.price}</p>
                        <p>{step.subscription}</p>
                    </div>
                    <div className="save-cancel">
                        <p>{step.save}</p>
                        <p>{step.cancelation}</p>
                    </div>
                    <p>{step.info}</p>
                    <Button />
                </div>
            ))}
        </div>
    </section>
  )
}

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

const getCarte = () => [
    {
        carte:"À la carte",
        report:"Single Report",
        info:"Our most flexible option. Get a report on-demand, whenever you need an audit or peace of mind",
        price:"$999"
    }
]

export default Pricing
 
