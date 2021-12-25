import React from 'react'
import {Link} from 'react-router-dom'
import './button.styles.scss'

const CustomButton=({children , simpleBtn,to ,...otherprops})=> {
    return (
        
        <Link to={to} className={simpleBtn} {...otherprops}>{children}</Link>
       
    )
}

export default CustomButton;