import React, { useState } from 'react'

import CreateCheckbox from '../CreateCheckbox/CreateCheckbox'
import CreateRadio from '../CreateRadio/CreateRadio'
import './QuestionCreator.css'

function QuestionCreator({ clickToAdd, quesDetail }) {
    const [alldropdownvalues, setalldropdownvalues] = useState("short_answer");
    const [count, setcount] = useState(0)
    let addallOption = null;
    let onDropdownSelection = (event) => {
        setalldropdownvalues(event.target.value)
        quesDetail.answertype = event.target.value
        if (event.target.value === "short_answer") {
            quesDetail.short_answer = true
            quesDetail.checkboxes = null
            quesDetail.multiple_choice = null
        }
        if (event.target.value === "multiple_choice") {
            quesDetail.short_answer = false
            quesDetail.checkboxes = null
            quesDetail.multiple_choice = [{ option: "Radio" }]
        }
        if (event.target.value === "checkboxes") {
            quesDetail.short_answer = false
            quesDetail.checkboxes = [{ option: "Checkbox" }]
            quesDetail.multiple_choice = null
        }


    }

    let selectionComponent = null
    if (alldropdownvalues === "short_answer") {
        selectionComponent = (
            <div className="shortanswer">
                <input type="text" placeholder="Short answer text" />
            </div>
        )

    }
    if (alldropdownvalues === "multiple_choice") {
        selectionComponent = (
            <div className="allcreatedradio">
                {
                    quesDetail.multiple_choice.map(() => {
                        return <CreateRadio name={quesDetail.quid} />
                    })
                }
            </div>
        )

    }

    if (alldropdownvalues === "checkboxes") {
        selectionComponent = (
            <div className="allcreatedcheckbox">
                {quesDetail.checkboxes.map(() =>
                    <CreateCheckbox />
                )}

            </div>
        )
    }
    const onchangeInputQuestion = (event) => {

        quesDetail.question = event.target.value
        console.log(quesDetail)
    }

    const addOptions = () => {
        if (alldropdownvalues === "multiple_choice") {
            if (quesDetail.multiple_choice.length < 5) {
                quesDetail.multiple_choice.push({ option: "Radio" })
            }


        }
        if (alldropdownvalues === "checkboxes") {
            if (quesDetail.checkboxes.length<5) {
                quesDetail.checkboxes.push({ option: "Checkbox" })
            }


        }

        setalldropdownvalues(alldropdownvalues);
        setcount(count + 1)
    }


    return (

        <div className="QuestionCreator">
            
            <div className="allquestion">
                <input type="text" placeholder="Question entered" onChange={onchangeInputQuestion} />
                <select onChange={onDropdownSelection}>
                    <option value="short_answer"> Short Answer</option>
                   <option value="multiple_choice" > Multiple Choice</option>
                    <option value="checkboxes">Checkboxes</option>
                </select>
            </div>

            {/* <div className="shortanswer">
                <input type="text" placeholder="Short answer text" />
            </div> */}
            {/* <div className="allcreatedcheckbox">
                <CreateCheckbox />
                
            </div> */}

            {/* <div className="allcreatedradio">
                <CreateRadio />


            </div> */}
            {selectionComponent}

            {addallOption}

            <div className="addmore">
                {
                    alldropdownvalues === "multiple_choice" ?
                        <input type="radio" disabled /> :
                        alldropdownvalues === "checkboxes" ?
                            <input type="checkbox" disabled /> :
                            null

                }
                {alldropdownvalues !== "short_answer" ?
                    <label style={{ color: "gray" }} onClick={addOptions}>Add option or</label> : null

                }
                <label style={{ color: "#0e7fe0" }} onClick={clickToAdd}> add "others"</label>
            </div>


        </div>

    )
}

export default QuestionCreator
