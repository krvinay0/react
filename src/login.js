import React from "react";
// import visibility from "./visibility.svg";
function LogIn(){
    return(
    <>
	<div className="logo_bg">
        <div class="mt-4 text-white">
             <img src={process.env.PUBLIC_URL+"/logo.png"}/>
        </div>
    </div>



<div class="row m-0">

    {/* <!-- image col --> */}
    <div className="col-sm-8 m-0">
        <div className="yn_object">
            <img src={process.env.PUBLIC_URL+"/OBJECTS.svg"}/>
        </div>
    </div>

    {/* <!-- login col --> */}
    <div className="col-sm-4 m-0 p-5">
        <div className="yn_login">
            <h3 className="font-weight-bold">Login</h3>
            <form>
                <label className="pt-4 ">Email ID</label>
                <br/>
                <input type="email" name="email" placeholder="vinaykumar@gmail.com"/>
                <br/>
                <label className="pt-4">Password</label>
                <br/>
                <input type="password" name="password" placeholder="*************"/>
                <div className="passhiimg">						
                    <img src={process.env.PUBLIC_URL+"/visibility.svg"}/>
                </div>
                <label>Forget password</label>
                <br/>
                <br/>
                <input type="submit" className="buttom_sb" name="submit" value="LOGIN"/>
                <div className="linksignup">						
                     <span className="text-primary">Sign Up</span>
                </div>
                <div className="row">
                    <div className="yn_social">
                        <img src={process.env.PUBLIC_URL+"/social.svg"}/>
                    </div>
                </div>
            </form>
        </div>
    </div>

</div>
</>
)
}
export default LogIn;