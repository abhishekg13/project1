import React from 'react'

export default function Time() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    const styles = {
        color: "#FF8C00",
        backgroundColor: "beige",
        position: "absolute",
        top: "20px",
        left: "20px"
    }
    if(hours < 12){
        timeOfDay = 'Morning'
    } else if(hours >=12 && hours <= 17){
        timeOfDay = 'Aftenoon'
    } else
        timeOfDay = 'Night'
        styles.color = "Red"
    
    return (
    <h3 style={styles}>{`Good ${timeOfDay}!`}</h3>
    )
}

