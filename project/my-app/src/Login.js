import React , {useRef} from "react"
import forests from "./forests.jpg"
import amazon from "./amazon.png"
import fb from "./images/fb.png"
import google from "./images/google.png"
import tree from "./tree.png"

const onEscape = function (action) {
    window && window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            action();
        };
    });
};
function Login() {
  const descRef = useRef();
  onEscape(() => {
    descRef.current.blur();
 });
  return (
    <div className="Login">
      <div className="w-100" style={{position:"relative"}}>
      <img src={forests} className= "w-100" alt="Avatar"/>
      <div className="d-flex justify-content-center w-100" styles= {{backgroundColor: "white", color: "white", position: 'static', opacity: "1", top: "81px",
left: "395px", zIndex:1
}}>
  <div style ={{  height : "58px" , width: "577px", boxShadow:" 0px 3px 7px #00000029", zIndex: "5"}}>
  <div className="justify-content-center" style ={{  height : "58px" , width: "577px", boxShadow:" 0px 3px 7px #00000029"}}>
  <div className="d-flex align-items-center justify-content-center " style ={{  height : "58px" , width: "577px", boxShadow:" 0px 3px 7px #00000029"}}>
    <div className="pt-3">
    <img src={amazon} height = "32px"/>
    </div>

  </div>
</div>
<div className="d-flex justify-content-center">
<h5 style={{fontSize : "29px", color:"#20B716"}}>Login</h5>
</div>
<div className="d-flex justify-content-center">
<img src={tree}/>
</div>
<div><br/></div>
<form>
<div >
<div className="w-100">
    <div className="d-flex w-100">
    <h5 style={{fontSize : "29px", color:"#20B716",position: "relative"}}>Email</h5>
    </div>
    <div className="w-100">
    <input className="w-100" style={{
    margin: "20px",
  borderLeft: "none",
  borderRight: "none",
  borderTop: "none",
  borderBottom:"2px solid #E2E8F0",

  }}
  type = "email"
  ref = {descRef}
  required/>
    </div>


  </div>
  <div className="w-100">
    <div className="d-flex w-100">
    <h5  style={{fontSize : "29px", color:"#20B716",position: "relative"}}>Password</h5>
    </div>
    <div className="d-flex w-100">
    <input className="w-100" style={{
    margin: "20px",
  borderLeft: "none",
  borderRight: "none",
  borderTop: "none",
  borderBottom:"2px solid #E2E8F0",
  // width: "385px"
  }}
  type = "password"
  ref = {descRef}
  required
  />
    </div>


  </div>
  <div>
  <button className="btn w-100 h-50" type = "submit"  style ={{backgroundColor: "#20B716", color: "#FFF", borderRadius: "40px", opacity: "1"}}>Sign In</button>
  </div>
</div>
</form>

<div className="">
  <div className="h-50 d-flex justify-content-between pt-3">
  <p style={{fontSize: 14, color: "#000000"}}>Forgot Password</p>
  <p style={{fontSize: 14, color: "#D9185F"}}>New User? Sign Up</p>
  </div>
 
</div>
<div className="d-flex justify-content-center">
  <p>or</p>
</div>
{/* <div className="w-100 "> */}
<div className="d-flex w-100" >
<button className="btn btn-primary w-100 d-flex" style={{padding: "5px"}}>
  <div style = {{width : "40px"}}>
  <img src = {google} height = "40px"/>
  </div>
<div className="w-75 d-flex justify-content-center align-items-center pt-2 pl-5">
CONTINUE WITH GOOGLE  

</div>

  </button>
  </div>
  <div className="d-flex w-100 pt-2" >
<button className="btn btn-primary w-100 d-flex" style={{padding: "5px"}}>
  <div style = {{width : "40px"}}>
  <img src = {fb} height = "40px"/>
  </div>
<div className="w-75 d-flex justify-content-center align-items-center pt-2 pl-5">
CONTINUE WITH FACEBOOK  

</div>

  </button>
  </div>

</div>

  </div>

{/* </div> */}

      </div>

    </div>
  );
}

export default Login;
