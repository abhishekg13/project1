import React from 'react'

export default function Todo(props) {
    console.log(props)
    const style = {
        "fontSize": '15px'
    }
    return (
        <div className="todo-items">
            {/* <input type="checkbox" /> */}
    <p style={style}>{props.question}</p>
        </div>
    )
}

