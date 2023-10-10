const star1=document.querySelector(".star1");
const star2=document.querySelector(".star2");
const star3=document.querySelector(".star3");
const star4=document.querySelector(".star4");
const star5=document.querySelector(".star5");
const SubmitBtn=document.querySelector(".submitBtn");
const success=document.querySelector(".success");
const background=document.querySelector(".background");
const container=document.querySelector(".container")
//paragraphs
const p1=document.querySelector(".p1");
const p2=document.querySelector(".p2");
const p3=document.querySelector(".p3");
const p4=document.querySelector(".p4");
const p5=document.querySelector(".p5");

function stars1()
{
    star1.style.color="yellow";
    star2.style.color="#b6b6b6";
    star3.style.color="#b6b6b6";
    star4.style.color="#b6b6b6";
    star5.style.color="#b6b6b6";
    p1.style.display="block";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="none";
    p5.style.display="none";
    p1.style.color="yellow";
    SubmitBtn.style.display="block";
    

} 
function stars2()
{
    star1.style.color="yellow";
    star2.style.color="yellow";
    star3.style.color="#b6b6b6";
    star4.style.color="#b6b6b6";
    star5.style.color="#b6b6b6";
    p1.style.display="none";
    p2.style.display="block";
    p3.style.display="none";
    p4.style.display="none";
    p5.style.display="none";
    p2.style.color="yellow";
    SubmitBtn.style.display="block";
  
}
function stars3()
{
    star1.style.color="yellow";
    star2.style.color="yellow";
    star3.style.color="yellow";
    star4.style.color="#b6b6b6";
    star5.style.color="#b6b6b6";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="block";
    p4.style.display="none";
    p5.style.display="none";
    p3.style.color="yellow";
    SubmitBtn.style.display="block";
   
}
function stars4()
{
    star1.style.color="yellow";
    star2.style.color="yellow";
    star3.style.color="yellow";
    star4.style.color="yellow";
    star5.style.color="#b6b6b6";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="block";
    p5.style.display="none";
    p4.style.color="yellow";
    SubmitBtn.style.display="block";
    
}
function stars5()
{
    star1.style.color="yellow";
    star2.style.color="yellow";
    star3.style.color="yellow";
    star4.style.color="yellow";
    star5.style.color="yellow";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="none";
    p5.style.display="block";
    p5.style.color="yellow";
    SubmitBtn.style.display="block";
   
}
function submit()
{
success.style.display="block";
container.style.display="none";
SubmitBtn.style.display="none";
}