import { Button } from "react-bootstrap";
import "./../Style/Contact.css"
import { useState } from "react";


function Contact () {
  const[expand, setExpand] = useState(true);

const showall=(e)=>{
const element = document.getElementsByClassName("contact-cards-sections")[0];


if(expand == true){
  element.style.height = "500px"
}
else{
  element.style.height = "auto";

}

setExpand(!expand);


}

    return(
<div className="Contact-sections">
<div className="Contact-section1">
    <h5>15 Contacts</h5>
    <svg className="contact-section-filter" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
</svg>
<svg className="contact-section-info" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentcolor" class="bi bi-question-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
</svg>
<Button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg> New Contact</Button>
</div>
<div className="contact-cards-sections">
  <div className="contact-cards"><img src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/><p>Herry</p></div>
  <div className="contact-cards"><img src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/><p>SiyaMadit</p></div>
  <div className="contact-cards"><img src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/><p>Claire</p></div>
</div>
<button onClick={showall}>ShowAll</button>
</div>

    )


}

export default Contact;