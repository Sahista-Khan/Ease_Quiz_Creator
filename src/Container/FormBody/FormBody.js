import React  from 'react'
import QuestionCreator from '../../Component/QuestionCreator/QuestionCreator'
import QuestionDisplay from '../../Component/QuestionDisplay/QuestionDisplay'
import './FormBody.css'
import { useState } from 'react'

function FormBody() {
     const [isDoneButton, setisDoneButton] = useState(true)
    const [questiondetails, setquestiondetails] = useState([
        {
            quid:1,    
            question:"",
            answertype:"short_answer",
            short_answer:true,
            checkboxes:null,
            multiple_choice:null
        }
    ])


    let addNewQuestion=()=>{
        //setnumberofquestion(numberofquestion+1)
        let defaultState={   
            quid:questiondetails.length+1,        
            question:"",
            answertype:"short_answer",
            short_answer:true,
            checkboxes:null,
            multiple_choice:null
        }

        setquestiondetails([...questiondetails, defaultState])
    }

    let onDoneorEditClicked =(event)=>{
        event.preventDefault()
        setisDoneButton(!isDoneButton)
    }
    return (
        <div className="formall">

            <form className="formqabody">

                <div className="addquestion">
                    <div className="formheader">
                    <input type="text" className="forminput1" placeholder="Form title"/>
                    <input type="text" className="forminput2" placeholder="Form description"/>
                    </div>
                   
                </div>
               {/* {questionComponent} */}
                {/* <QuestionCreator clickToAdd={addNewQuestion}/> */}
                { isDoneButton ?
                    questiondetails.map((value)=>{
                        return <QuestionCreator quesDetail={value} clickToAdd={addNewQuestion}/>
                    })
                    :
                    questiondetails.map((value)=>{
                        return <QuestionDisplay quesDetail={value}/>
                    })

                }

            <button onClick={onDoneorEditClicked} className="done_edit_button">{isDoneButton ? "DONE" : "EDIT"}</button>

            </form>

        </div>


    )
}

export default FormBody
