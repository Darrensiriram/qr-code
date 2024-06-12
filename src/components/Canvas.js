import React from 'react';
import './css/Canvas.css';
// import Image from '../images/image-qr-code.png'; 
import uncle_sam from '../images/uncle_sam.png';


export default function Canvas(){
  return(
  <div class='container'>
    <div class='square'> 
      <img class='qrcode' src={uncle_sam} alt='qrcode front-end'/> 
      <h1 class="wraptext">Empower Your Innovation: Automation in Action</h1>
      <p class="subtext"> Your Vision, Our Automation. Togethor, We Bring Ideas To Life!</p>
    </div>  
   </div> 
  ); 
}
