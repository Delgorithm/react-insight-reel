import { useState } from 'react';
import './Faq.css'

const Faq = () => {
    const [selected, setSelected] = useState(null)

    const toggle = index => {
        setSelected(selected === index ? null : index);
    }
    
  return (
    <div className="wrapper-faq">
        <p>Got a question?</p>
        <div className="accordion">
            {getFaq().map((item, index) => (
                <div className="item">
                    <div className="question" onClick={() => toggle(index)}>
                        <p>{item.question}</p>
                        <span>{selected === index ? "-" : "+"}</span>
                    </div>
                    <div className={selected === index ? "answer.show" : "answer"}>
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};


const getFaq = () => [
    {
        question: 'Q: What tools do you use for recording and analyzing user sessions ?',
        answer:'lorem ipsum'
    },
    {
        question: 'Q: How long does it take to receive the report after signing up ?',
        answer:'lorem ipsum'
    },
    {
        question: 'Q: What information will be included in the report ?',
        answer:'lorem ipsum'
    },
    {
        question: 'Q: Can you analyze user sessions or have specify areas of concern ?',
        answer:'lorem ipsum'
    },
    {
        question: 'Q: How often can I receive reports if I subscribe to a continuous monitoring option ?',
        answer:'lorem ipsum'
    }
];

export default Faq