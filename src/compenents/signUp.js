import React from 'react';


const signUp = React.forwardRef((props,ref) => {
    return (
        <div>
            <div className="container">

<div className="FullName">
    <div className="block">
        <label className="txt" >FirstName</label>
<input  className="" type="text" placeholder="Enter Firstname"  ref={ref.firstname} required/>
    </div>
    <div className="block">
<label className="txt" >LastName</label>
<input className="" type="text" placeholder="Enter LastName"  ref={ref.lastname} required/>
    </div>

</div>

<label className="txt" htmlFor="uname">Email</label>
<input type="text" placeholder="Enter Email" name="uname" ref={ref.Email} required/>

<label className="txt" htmlFor="psw">Password</label>
<input type="password" placeholder="Enter Password" name="psw" ref={ref.Password} required/>

   <input type="radio" id="male" name="gender" value="male" ref={ref.gender} />
  <label className="txt"  htmlFor="male">Male</label>
  <input type="radio" id="female" name="gender" value="female" />
  <label className="txt" htmlFor="female">Female</label> 
  <br></br>

  <label className="txt" htmlFor="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday" ref={ref.birthday}/>





<div className="auth">


<button type="submit">Register</button>
</div>
</div>
        </div>
    );
    });


export default signUp;