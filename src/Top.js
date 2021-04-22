import React from 'react'
import { useState, useEffect } from 'react'
import me from './me.png'
const Top = () => {
    const [spanColor, setColor] = useState('inherit')
    const outerStyle={
        height:'75vh',
        width:'80%',
        background:'#FFEDFB',
        float:'right',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:96,
        paddingRight:96
    }
    const coloredSpan={
        color:spanColor,
        transition:'.15s ease-in'
    }
    const imgStyle={
        position:'absolute',
        borderRadius:'50%',
      
    }
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            setColor('#FF65DE')
        })
    }, [])
    return (
        <div className='top-outer' style={outerStyle}>
            <img style={imgStyle} alt="me" src={me}/>
            <div>
                <span style={{fontSize:22}}>Hi, I’m <span style={coloredSpan}>Emma Lynn</span>
                </span>
                <h1>I use <span style={coloredSpan}>development</span> and <span style={coloredSpan}>design</span> to convert <span style={coloredSpan}>ideas</span> into <span style={coloredSpan}>digital experiences</span></h1>
                <p style={{
                    marginBottom:15,
                    }}>
                  I am an Arizona based Software Engineer and UI/UX Designer who specializes in the development of beautiful user interfaces and websites
                </p>
                <div>
                    <button style={{
                        fontSize:24,
                        marginRight:20,
                        padding:'.25em 1em',
                        background:'#FF65DE',
                        color:'white',
                        outline:'none',
                        border:'none',
                        cursor:'pointer',
                        fontWeight:700
                        }}>Contact</button>
                    <button style={{
                        fontSize:24,
                        marginRight:20,
                        padding:'.25em 1em',
                        background:'white',
                        color:'#FF65DE',
                        outline:'none',
                        border:'none',
                        cursor:'pointer',
                        fontWeight:700
                        }}>Portfolio</button>
                </div>
            </div>
        </div>
    )
}
export default Top
