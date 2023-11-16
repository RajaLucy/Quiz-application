const array=[

 {
    question:" What is the use of HTML?",
    options:["Page structure of web page","Styling the web page","function of the web page","none of the above"],
    correct:"Page structure of web page"
 }
,{
    question:" What is the use of CSS ?",
    options:["Page structure of web page","Styling the web page","function of the web page","none of the above"],
    correct:"Styling the web page"
},
{
    question:" What is the use of JavaScript ?",
    options:["Page structure of web page","Styling the web page","function of the web page","none of the above"],
    correct:"function of the web page"
},
{
    question:"Block level element ?",
    options:["Div","P","a","li"],
    correct:"Div"
}
,{
    question:" Java and JavaScript are similar?  ",
    options:["true","false"],
    correct:"false"
}
]



let index=0;
let score=0;

const Question=document.getElementById("question-cont");
const Opt=document.getElementById("options-cont");

function loadQuestion(){

    document.getElementById("co").innerHTML=index+1+"/"+array.length;
    currentQues=array[index];
    Question.innerHTML=(index+1)+". "+currentQues.question;
    Opt.innerHTML="";
    currentQues.options.forEach((i,index)=>{
    
      
        
        const Li=document.createElement("li");
       
        Li.innerHTML=i;
        
        Li.onclick = ()=>{
            let p=checkans(Li.innerHTML);
            // Li.style.backgroundColor=" rgb(115, 193, 115)";
            if(p)
            {
                Li.style.backgroundColor=" rgb(115, 193, 115)";
            }
            else{
                Li.style.backgroundColor="rgb(232, 119, 119)";
            }
            

        }
        Opt.appendChild(Li);

       
       

    });
    
    

}

function checkans(ans)
{
    if(ans === array[index].correct)
    {
          score++;
          return true;
    }
    return false;

}


function Next()
{
    index++;
    if(index <array.length)
    {
        loadQuestion();
    }
   
   
    
}

function prev()
{

    if(index > 0)
    {

        index--;
        loadQuestion();
    }
}

function sub()
{
    document.getElementById("ans").innerHTML=" Total Score is: "+score +" out of "+array.length;
}
loadQuestion();