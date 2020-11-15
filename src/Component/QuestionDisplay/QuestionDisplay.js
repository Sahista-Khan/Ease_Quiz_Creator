import React from 'react'

import CreateCheckbox from '../CreateCheckbox/CreateCheckbox'
import CreateRadio from '../CreateRadio/CreateRadio'


function QuestionDisplay({quesDetail }) {
    
    
    let selectionComponent = null
    if (quesDetail.answertype === "short_answer") {
        selectionComponent = (
            <div className="shortanswer">
                <input type="text" placeholder="Short answer text" />
            </div>
        )

    }
    if (quesDetail.answertype === "multiple_choice") {
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

    if (quesDetail.answertype === "checkboxes") {
        selectionComponent = (
            <div className="allcreatedcheckbox">
                {quesDetail.checkboxes.map(() =>
                    <CreateCheckbox />
                )}

            </div>
        )
    }




    return (

        <div className="QuestionCreator">
            
            <div className="allquestion" style={{justifyContent:"flex-start", marginLeft: 20}}>
                <label>{ `${quesDetail.quid}. ${quesDetail.question ?quesDetail.question : "No Question mentioned"}`}</label>
            </div>          
            {selectionComponent}

        </div>

    )
}

export default QuestionDisplay
