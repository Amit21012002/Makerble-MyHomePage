import { Button } from "react-bootstrap";
import "./../Style/Boards.css"
import { useState } from "react";

function Boards () {
  const[expand, setExpand] = useState(true);

  const showall=(e)=>{
  const element = document.getElementsByClassName("Boards-cards-sections")[0];
  
  
  if(expand == true){
    element.style.height = "500px"
  }
  else{
    element.style.height = "auto";
  
  }
  
  setExpand(!expand);
  
  
  }
  
    return(
<div className="Boards-sections">
<div className="Boards-section1">
    <h5>Boards</h5>
    
<Button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg> New Boards</Button>
</div>
<div className="Boards-cards-sections">
  <div className="Boards-cards"><img src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/><p>Herry</p></div>
  <div className="Boards-cards"><img src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/><p>SiyaMadit</p></div>
  <div className="Boards-cards"><img src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/><p>Claire</p></div>
</div>
<button onClick={showall}>ShowAll</button>
</div>

    )

}

export default Boards;