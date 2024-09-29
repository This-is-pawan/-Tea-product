

var element;
element = document.querySelector(".solid-icon").addEventListener('click',function(){
  document.querySelector(".top-div").style. display=' block '; 
  document.querySelector(".top-div").style.animation = 'SLIDE 1s ease 1';
  document.querySelector(".top-div").style.position='fixed';
  document.querySelector(".top-div").style.zIndex='1';
  

});

var element;
element = document.querySelector(".X-mark").addEventListener('click',function(){
  document.querySelector(".top-div").style. display=' none';
  document.querySelector(".top-div").style.animation = 'slide 2s ease 1';
 
});
// first

 element= document.querySelector(".fa-brands").addEventListener('click',function(){
  window.location.href = 'https://www.facebook.com/';
 
 
  document.querySelector(".fa-brands").style.color='red'
 })
// 2nd
 element= document.querySelector(".fa-twitter").addEventListener('click',function(){
  
  window.location.href = 'https://twitter.com/i/flow/login';
  document.querySelector(".fa-twitter").style.color='red'
 })
// 3rd
element= document.querySelector(".fa-instagram").addEventListener('click',function(){
  
  window.location.href = 'https://www.instagram.com/';
  document.querySelector(".fa-instagram").style.color='red'
 })

//  4th

element= document.querySelector(".fa-node-js").addEventListener('click',function(){
  
  window.location.href = 'https://nodejs.org/en';
  document.querySelector(".fa-node-js").style.color='red'
 })
 
//  5th
element= document.querySelector(".fa-github").addEventListener('click',function(){
  
  window.location.href = ' https://github.com/';
  document.querySelector(".fa-github").style.color='red'
 })
 
//  https://github.com/

// .top-div2 /.fa-greater-than


  






function User() {
  
  var Username = document.querySelector('.input-Text').value;
  var Email = document.querySelector('.input-Email').value;
  var Textarea = document.querySelector('.textArea').value;

  
  if (Username == 'HAPPY','RAM' && Email == 'HS038@GMAIL.COM','RAM@GMAIL.COM' && Textarea =='hi') {
   
    document.write('<img src="./bomb gif.gif"/>');
    alert('Submit  SuccessFully !! ');
    
  } else {
  alert('Fill right input User name & Email');
  }
}













