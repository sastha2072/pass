// const generator=()=>{
//     let chars="012345656789qwertyuioplkjhgfdsazxcvbnm"
//     let captcha_lenght=6;
//     let captcha="";

//     for(let i=0;i<captcha_lenght;i++)
//     {
//         let randomIndex=Math.floor(Math.random()*chars.length)
//         captcha += chars.charAt(randomIndex)

//     }
// document.getElementById("captcha").innerHTML= captcha
// }
// generator();
// const validate=()=>{

//     let input=document.getElementById("wrapper_input").value;
//     let captcha=document.getElementById("captcha").innerHTML;
//     let result_text=document.getElementById("result")
//     if(input==captcha)
//     {
//         result_text.innerHTML="You Enter Correct Value";
//         result_text.style.color="green"
//     }
//     else{
//         result_text.innerHTML="Thappu daaW";
//         result_text.style.color="Red"
//     }
// }


