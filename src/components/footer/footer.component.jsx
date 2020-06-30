import React from 'react';
import './footer.style.scss';

const Footer = ()=>{


    const getYear = ()=>{
        const year = new Date().getFullYear()
        return year
    }
    return(
        <div class="footer">
        <div class="container">
          <div class="small text-center text-muted">`Copyright &copy;  {getYear()}- Witanday.io`</div>
        </div>
      </div>
    )
}
           

export default Footer