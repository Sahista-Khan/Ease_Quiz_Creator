import React from 'react'

function CreateRadio({name}) {
    return (
                   
                <div className="radio">
                    <input type="radio" name={name} /><label>Radio1</label>
                </div>
                        
    )
}

export default CreateRadio
