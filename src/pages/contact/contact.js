import React, {Component} from 'react';
import serializeForm from 'form-serialize';
import axios from 'axios'
import {Button, Message, Segment, Icon} from 'semantic-ui-react'

import './contact.scss'


class Contact extends Component{
    state={
        email:'',
        subject:'',
        message:'',
        loading:false,
        errors: [],
        success:null,
        activeButton:false

    }
    isInputValid=(values)=>{
   if(values.email && values.subject && values.message){
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validEmail = values.email.match(mailformat);
    if(validEmail){
        
        return true;
    }else{
        let error= {message: "You have entered an invalid email address!"}
        let errors = [];
        this.setState({
            errors : errors.concat(error)
        },()=>console.log(this.state));
     
        return false
    }

}else{
    let error= {message: 'Fill empty field'};
    let errors = [];
        this.setState({
            errors : errors.concat(error)
        },()=>console.log(this.state));
     
        return false
}
   
  
    }
    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
displayEmailNotification=(message,messageType)=>{
    const type = messageType === 'error' ? ['red','stop circle', '#ffebee']:['teal','telegram','#f3fae4'];
    return <Message icon   style={{ background:`${type[2]}`}}>
    <Icon name={type[1]}  color={type[0]} />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      {message}
    </Message.Content>
  </Message>
}
    handleActiveButton=()=>(
        this.setState({
            activeButton:true
        })
    ) ;  
      
    handleSubmit=(e)=>{
        e.preventDefault();
        const values = serializeForm(e.target, { hash:true});
            if(this.isInputValid(values)){
                this.setState({
                    errors : [],
                    email:values.email,
                    subject: values.subject,
                    message : values.message
                },()=>{
                    
                    this.setState({
                        loading:true
                    })
         const {email,subject,message} = this.state;
            axios
            .post(`http://localhost:8080/api/email`,{email,subject,message})
            .then(response => {
                setTimeout(()=>{
                    this.setState({
                        success: response.data.message,
                        loading:false
                    })
                },2000);
                setTimeout(()=>{
                    this.setState({
                        success: null,
                        email:'',
                        subject:'',
                        message:'',
                        errors:[]
                    })
                },4000);

           
            })
            .catch(err => {
              console.log("IN CATCH", err);
            });
            })
            
            }
    }
    render(){

        const {loading, success, errors, activeButton, email, subject, message} = this.state;
        return(
            <Segment>
          
            <form className='contact-form' onSubmit={this.handleSubmit}>
            <div className='create-contact-details'>
            {success && this.displayEmailNotification(success, 'sucess')}
            {errors.length !==0 && this.displayEmailNotification(errors[0].message, 'error')}
            <h2>Get In Touch :</h2>
                <input type='text'
                 name='email' 
                 value={email}
                 onChange={this.handleChange}
                 placeholder='Your Email'/>
                <input type='text'
                 name='subject'
                 value={subject}
                 onChange={this.handleChange}
                  placeholder='Subject'/>
                <textarea 
                placeholder='Your Message'
                name='message'
                onChange={this.handleChange}
                value={message}
                className='textarea'></textarea>
                <Button
                className="ui primary button"
                loading={loading}
                >submit</Button>
                 </div>
            </form>
            </Segment>
        )
    }
}


export default Contact;