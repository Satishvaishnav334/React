import React from 'react'

export default function TextForm(props) {
    return (
        <>
        <h1>Enter Text to Analyze</h1>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">{props.title}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
            </div>
        </>
        
    )
}
