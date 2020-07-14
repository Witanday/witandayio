import React from 'react';
import './layout.style.scss'
import {  FaProjectDiagram, FaShoppingBasket, FaComments} from 'react-icons/fa';
import Header from '../header/header-component'

const Layout=({children})=>(
    <div className='layout'>
    <div className="header">
    <Header />
    <di> {children}</di>
   
    </div>
    </div>)


export default Layout;