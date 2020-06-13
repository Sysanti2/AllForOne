import React from 'react';


const signIn = React.forwardRef((props,ref) => {
    console.log(props);
    return (
        <div>
            <div className="container">



<label className="txt" htmlFor="uname">Username</label>
<input type="text" placeholder="Enter Username" name="uname" ref={ref.Email} required/>

<label className="txt" htmlFor="psw">Password</label>
<input type="password" placeholder="Enter Password" name="psw" ref={ref.Password} required/>

<div className="auth">

{/*bel className="txt">
<input type="checkbox" checked="checked" name="remember"  /> Remember me
        </label>*/}
<button type="submit">Login</button>
</div>
</div>
        </div>
    );
    });


export default signIn;