import "./PreguntasFrecuentes.css"
import data from "./questions.js"
import AccordionQuestions from "../AccordionQuestions/AccordionQuestions"
import Vector from "./Assets/Vector.svg"
import React, { useState } from "react";

const PreguntasFrecuentes = () => {

    const questionsPreview = data.filter(data => data.position === "preview")
    const questionsComplete = data


    const [questions, setQuestions] = useState(false);

    const toggleQuestions = () => {
        setQuestions(!questions);
    };

    return (
        <section id="preguntas" className="preguntasFrecuentes">
            <h2 className="preguntasFrecuentes_title">Preguntas frecuentes</h2>
            <div className="preguntasFrecuentes_content">
                <div>
                    {(questions ? questionsComplete : questionsPreview).map(q => <AccordionQuestions key={q.id} question={q.question} answer={q.answer} />)}
                </div>
                <button onClick={toggleQuestions} className="preguntasFrecuentes_button">
                    <p className="preguntasFrecuentes_button-text"> {questions ? "ver menos" : "ver más"} </p>
                    <img className={questions ? "preguntasFrecuentes_button-img--nonactive" : "preguntasFrecuentes_button-img"} src={Vector} alt="vector" />
                </button>
            </div>
        </section>
    )
}
export default PreguntasFrecuentes