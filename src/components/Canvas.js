import React from 'react';
import './css/Canvas.css';
import Image from '../images/image-qr-code.png'; 


export default function Canvas(){
  return(
  <div class='container'>
    <div class='square'> 
      <img class='qrcode' src={Image} alt='qrcode front-end'/> 
      <h1 class="wraptext">Improve your front-end skills by building projects</h1>
      <p class="subtext"> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>  
   </div> 
  ); 
}
