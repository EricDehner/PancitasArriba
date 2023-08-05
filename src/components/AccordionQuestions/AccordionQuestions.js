import "./AccordionQuestions.css"
import Vector from "./Assets/Vector.svg"
import React, { useState } from "react";

const Accordion = ({ id, question, answer }) => {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className="accordion" id={id}>
            <button onClick={toggleMenu} className="accordion_question">
                <p className="accordion_question--question">{question} </p>
                <img className={menu ? `accordion_question--vector---nonactive` : `accordion_question--vector---active`} src={Vector} alt="Vector" />
                <p className={menu ? `accordion_answer-active` : `accordion_answer-nonactive`}>{answer} </p>
            </button>
            <div className="accordion_stick"></div>
        </div>
    )
}
export default Accordion