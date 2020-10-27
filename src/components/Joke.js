import React from 'react'

export default function Joke(props) {
    return (
        <div >
            <h3>{props.question !== ''? `Question: ${props.question}` : ''}</h3>
            <h3>Answer: {props.punchLine}</h3>
            <hr style={{backgroundColor : "blue"}}/>
        </div>
    )
}

 
