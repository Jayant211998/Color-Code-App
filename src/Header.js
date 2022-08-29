import React from 'react'

export default function Header(){
    const styleObj = {
        color:'white',
        backgroundColor:'black',
        minHeight: '3rem',
        display: 'fixed',
    }

    return (
    <header style={styleObj}> 
        <h1>Color Code App</h1>
    </header>
    )
}