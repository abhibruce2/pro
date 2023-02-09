import React from "react";

const Button = (props) => {
    return(
        <div className="p-2 w-100">
<button style={{border: "none", width: "140px", height: "140px", borderRadius: "70px"}} onClick={props.onClick}><img src={props.thumbnailUrl} style ={{width: "150px", height: "150px", borderRadius: "100px"}} alt="Video Thumbnail" /></button>
        </div>

    )
}
export default Button