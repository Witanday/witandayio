import React , {Component}from 'react'
import {Link} from 'react-router-dom';
import { Icon} from 'semantic-ui-react'
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
            <li><Link to='/about' className='navLink'>About</Link></li>
            <li> <Link to='/contact' className='navLink'>Contact</Link></li>
            </ul>
  )
      render(){

        const {tglBtn} = this.state
        return (
            <div className='main-menu'>
            <div className='menu-left'>
              <ul className='logo'>{/*}
              <li><Link to='/' className='menu-logo'>
              <img className='image' alt="logoWitandayDev" src='https://lh3.googleusercontent.com/kGi44j8qf8Yh2xK8V1QDlHtLk4E-kVoIUVT3LZBHAVvUiuK_H5dpAdaFCE34UdbT_yOZ5VbOh6kuuHlP2ORbSfNsMEdyYcNaS_HyB-vG037nlMObQJbmjKcF5EINbSxq81kkzv0Xp6Bi2ubE2mHah6TKjmLc71w8x0QeWhmldHSAQZrNP9XR4KIVHLtiC-w15LQPdeszrLwKcNB86cWZfvg04OystUZWZUBBfN24BGR2m3_QXI-b7uq8mII_ZWRDwRgotl7D4VQndfPE4FDZqjdzCcrnDznrsxcDsBHAlPRXNMmCC8JvdHHU0ulC1e8gBBrI_kmSqYEy4zetg8YEic5IFQXCPOxbAZ_S7GL4WHrjIGfCE5Z_KJplxiojS6AwCTF3bpP9RIkumg2AkaolyYnjFoMXq6f7bLb6klQNPY-WB8B2qiRGS8WsE4IwFY6bjWmhik-u9JCDlGq_2p__EK4UrgVmhuOvLGgxrf9ACxiEZXZg2MVcc-yEk_hORCTO84uOIxFx1WuHFoyQmgDpw4ivKkYySCM7vvcTCpRKhUT5tOzEhaeOi-R0kdua2Njdkzi1v7f-QGFZ62WcpxfZEebDTdo_LJvwcTl5VyXf3o6Pw7HGrhkea6vSyEyU8cZkKyzYWrE5gTXCFyh-PPkkVryqXK7gYhA=s600-no'/>
        </Link></li>*/}
              <li><Link to='/' className='navLink'>Witanday.Io</Link></li>
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


