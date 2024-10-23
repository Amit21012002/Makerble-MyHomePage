import { Button } from "react-bootstrap";
import "./../Style/Progress.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from "react";


function Progress () {
  const[expand, setExpand] = useState(true);

  const showall=(e)=>{
  const element = document.getElementsByClassName("Progress-cards-sections")[0];
  
  
  if(expand === true){
    element.style.height = "500px"
  }
  else{
    element.style.height = "auto";
  
  }
  
  setExpand(!expand);
  
  
  }
    return(
<div className="Progress-sections">
<div className="Progress-section1">
    <h5>Progress</h5>
    
<Button>Go to Progress</Button>
</div>
<div className="Progress-cards-sections">
  <div className="Progress-cards"><h1></h1><div className="progress-details"><p>Are either of your parent living?</p><ProgressBar now={70} label={'7'} variant="success" />
  </div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></div>
  <div className="Progress-cards"><h1></h1><div className="progress-details"><p>Do you belong to any groups in whi...</p><ProgressBar now={60} label={`6`} variant="info" /></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></div>
  <div className="Progress-cards"><h1></h1><div className="progress-details"><p>1-2-1 events</p><ProgressBar now={26} label={`26`} variant="danger"/></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></div>
</div>
<button onClick={showall}>ShowAll</button>
</div>

    )

}

export default Progress;