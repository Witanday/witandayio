import React , {Component}from 'react'
import {Link} from 'react-router-dom';
import {Menu, Image, Icon} from 'semantic-ui-react'
import './header.styles.scss';


class NavBar extends Component{
state={
  tglBtn:false,

}

handleTogglemenu=()=>{
  return this.setState({
    tglBtn: !this.state.tglBtn
   
  })
}
  displayNav=(cName)=>(
    <ul className={cName}>
            <li><Link to='/' className='navLink'>Home</Link></li>
            <li><Link to='/projects' className='navLink'>Projects</Link></li>
            <li><Link to='/about' className='navLink'>Abouts</Link></li>
            <li> <Link to='/contact' className='navLink'>Contact</Link></li>
            </ul>
  )
      render(){

        const {tglBtn} = this.state
        return (
            <div className='main-menu'>
            <div className='menu-left'>
              <ul className='logo'>
              <li><Link to='/' className='menu-logo'>dd</Link></li>
              <li><Link to='/' className='navLink'>WitandayDev</Link></li>
              </ul>
            </div>
            <div className='menu-right'>
            {this.displayNav('links')}
            <div className='toggleBtn'>
              <Icon 
              onClick={this.handleTogglemenu}
              name='bars' 
               color='black' 
               className='iconBtn'/>
            {tglBtn && this.displayNav('linksDropDown')}
            </div>
            </div>

            
            </div>
        )
    }
  }

    export default NavBar;
