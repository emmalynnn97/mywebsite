import React from 'react'

const Top = () => {
    const outerStyle={
        height:'75vh',
        width:'80%',
        background:'#FFEDFB',
        float:'right'
    }
    return (
        <div style={outerStyle}>
            <div>
                <span>Hi, I’m Emma Lynn</span>
                <h1>I use development and design to convert ideas into digital experiences</h1>
                <p>
                  I am an Arizona based Software Engineer and UI/UX Designer who specializes in the development of beautiful user interfaces and websites
                </p>
                <div>
                    <button>Contact</button>
                    <button>Portfolio</button>
                </div>
            </div>
        </div>
    )
}
export default Top
