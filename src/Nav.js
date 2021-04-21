import React from 'react'

const Nav = () => {
    const outerStyle={
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        height:78,
        listStyleType:'none'
    }
    const itemStyle={
        marginTop:0,
        marginBottom:0,
        marginLeft:8,
        marginRight:8
    }
    return (
        <ul style={outerStyle}>
            <li style={itemStyle}>
                <a>
                    Home
                </a>
            </li>
            <li style={itemStyle}>
                <a>
                    Contact
                </a>
            </li>
            <li style={itemStyle}>
                <a>
                    Portfolio
                </a>
            </li>
        </ul>
    )
}
export default Nav
