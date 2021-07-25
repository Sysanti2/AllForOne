import React, {Component } from 'react';
import AuthContext from '../context/AuthContext';
import SignIn from '../compenents/signIn';
import SignUp from '../compenents/signUp';

import '../style/reset.css';
import '../style/login.css';
import '../style/helper.css';




class  auth extends Component {
    state ={
        isLogin: false,
        loginError: ''
    }

    static contextType = AuthContext; 

    constructor(props){
        super(props);
        this.emailEl =  React.createRef();
        this.passwordEl = React.createRef();

        this.FnameEl = React.createRef();
        this.LnameEl = React.createRef();
        this.genderEl = React.createRef();
        this.birthdayEl = React.createRef();
    };
    CreatAcount = (event)=>{
        event.preventDefault()
        this.setState({isLogin:!this.state.isLogin});
        
    };

    submitHandler = (event)=> {
     event.preventDefault();   
            const email =  this.emailEl.current.value;
            const password =  this.passwordEl.current.value;
            let  firstname,lastname,gender,birthday;
if ( this.state.isLogin)
{
             firstname = this.FnameEl.current.value;
             lastname = this.LnameEl.current.value;
             gender =  this.genderEl.current.value;
             birthday = new Date(this.birthdayEl.current.value) ;
}
            let requestBody = {
                query: `
                query{
                    login(email:"${email}",password:"${password}")
                    {
                      userId
                      token
                      tokenExpiration
                    
                    }
                    
                  }
                `
            };
            if (this.state.isLogin)
            {
                requestBody = {
                    query: `
                    mutation{
                        creatUser(userInput:{firstname:"${firstname}",lastname:"${lastname}",sexe:"${gender}",birthday:"${birthday}",email:"${email}",password:"${password}",token:"123123",role:"user",profilePic:"jj"})
                        {
                          firstname
                          lastname
                          email
                          _id
                          token
                          tokenExpiration
                        }
                      }
                    `
                } 
            }
            fetch('http://localhost:4000/graphql', { 
                method: 'POST',
                body : JSON.stringify(requestBody) ,
                headers: {
                
                    'Content-Type': 'application/json',
                }
             } )
             .then(res => {
        
                if (res.status !== 200 && res.status !== 201 )
                {

                    this.setState({loginError:'User or Password Incorrect !'})
                    throw new Error ('User or Password Incorrect !')
                }
                return res.json();

            })
            .then(resData => {
               
                let token,userId,tokenExpiration ;
                if (this.state.isLogin)
                {
                   token =  resData.data.creatUser.token;
                   userId = resData.data.creatUser.userId;
                   tokenExpiration = resData.data.creatUser.tokenExpiration;
                }
                else 
                {
               token = resData.data.login.token ;
               userId = resData.data.login._id;
               tokenExpiration = resData.data.login.tokenExpiration;
            }
              //  <AuthContext.Provider value={{ token : token ,userId:userId  }} > </AuthContext.Provider>
           
            if(token)
            {
                this.setState({isLogin:true});
                    this.context.login(token,userId,tokenExpiration);
            }
            })
            .catch( err=>{
                    console.log( err) ;
                });
    };
    render() {
        
        return (
            <div>
           <div className="flex-container">

<div className="center" style={{'flexGrow': '9'}}>
<img class="center" src={require('../img/_Group.png')} alt="" sizes="" style={{'width':'75%'}}/>
<h4 className="wordCarousel">    
        <span>Help people and give them </span>  
        <div> 
            <ul className="flip4"> 
                <li>Hope</li>
                <li>love</li>
                <li>feeling</li> 
                <li>hapiness</li>  
            </ul>
        </div>  
    </h4>
</div>

<div className="authform" style={{'flexGrow': '3'}}>
<form onSubmit={this.submitHandler}>


<div className="signIn">
<img  className="signInLogo" src={require('../img/sign-in.png')} alt="" sizes="" /> 
   <span className="grey fs23">{!this.state.isLogin? 'Sign In' :'Sign Up' }</span>

</div>

{!!this.state.loginError && !this.state.isLogin ? <label className="txt incorrect">{this.state.loginError}</label> : null }
{!this.state.isLogin?<SignIn ref={{Email:this.emailEl,Password:this.passwordEl}}/> :<SignUp ref={{Email:this.emailEl,Password:this.passwordEl,firstname:this.FnameEl,lastname:this.LnameEl,gender:this.genderEl,birthday:this.birthdayEl}}/> }


<div className="signInSignUp">

<button onClick={this.CreatAcount} className="creatAccount creataccountLink">{!this.state.isLogin? 'create an account' :'I already have an account' } </button>
</div>
<div  hidden={this.state.isLogin} className="forgotpassword">
<a  href="/" className="grey txt" >Forgot password?</a>
</div>
</form>
</div>

</div>

            </div>
        );
    }
}

export default auth;