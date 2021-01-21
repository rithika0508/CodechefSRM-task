
let questions = [
    {

        question: "How do we install express?",
        options: ["npm install express",
            "npm download express",
            "npm express install",
            "npm express download"],
        answer: 0,
    },

    {
        numb: 2,
        question: "which of the following does not belong to express?",
        answer: 3,
        options: ["app.get()",
            "app.delete()",
            "app.put()",
            "app.any()"],
    },

    {
        numb: 3,
        question: "In html, which of the tags are used to create a table?",
        answer: 0,
        options: ["table,th,td,tr",
            "table,td,tf",
            "table,th,tr,tp",
            "th,td,tf,tp"],
    },

    {
        numb: 4,
        question: "There are how many types of heading tags?",
        answer: 1,
        options: ["4",
            "6",
            "7",
            "5"],
    },

    {
        numb: 5,
        question: "Which of the following is the incorrect way of getting html values to javascript?",
        answer: 3,
        options: ["document.querySelector()",
            "document.getElementByIdName()",
            "document.getElementByClassName()",
            "console.querySelector()"],
    },

    {
        numb: 6,
        question: "Full form of CSS?",
        answer: 2,
        options: ["Cascade sheet style",
            "Computer style sheet",
            "Cascading style sheet",
            "Computer sheet style"],
    },

    {
        numb: 7,
        question: "which of the following tag is not an example of block element?",
        answer: 3,
        options: ["div",
            "form",
            "img",
            "b"],
    },

    {
        numb: 8,
        question: "What is the order of server applications?",
        answer: 1,
        options: ["Request,Response,Processing",
            "Request,Processing,Response",
            "Processing,Request,Response",
            "Response,Processing,Request"],
    },

    {
        numb: 9,
        question: "The attribute inside the image tag is",
        answer: 1,
        options: ["source",
            "src",
            "place",
            "location"],
    },

    {
        numb: 10,
        question: "which of the following tag is not used for making lists in html?",
        answer: 2,
        options: ["ol",
            "ul",
            "el",
            "li"],
    },

    {
        numb: 11,
        question: "which of the follwing position property is used in css to keep a text fixed?",
        answer: 0,
        options: ["fixed",
            "sticky",
            "absolute",
            "relative"],
    },

    {
        numb: 12,
        question: "In node js, What syntax is used to import file system?",
        answer: 1,
        options: ["const fs=require('filesystem');",
            "const fs=require('fs');",
            "const filesystem=require('files');",
            "const fs=('files');"],
    },

    {
        numb: 13,
        question: "Full form of HTML?",
        answer: 0,
        options: ["Hypertext Markup Language",
            "HyperTag Markup Lnaguage",
            "Hypertext Mark Language",
            "HyperTag Mark Lnaguage"],
    },

    {
        numb: 14,
        question: "In html,Which of the following is not a attribute in input tag?",
        answer: 3,
        options: ["input type='password'",
            "input type='radio'",
            "input type='checkbox'>",
            "input type='box'"],
    },

    {
        numb: 15,
        question: "In which decade was the Internet first implemented?",
        answer: 3,
        options: ["1940s",
            "1950s",
            "1960s",
            "1980s"],
    }
];
var ques=document.querySelector(".ques_txt");
var choice1=document.querySelector(".choice1");
var choice2=document.querySelector(".choice2");
var choice3=document.querySelector(".choice3");
var choice4=document.querySelector(".choice4");
var ques_no=document.querySelector(".q_no");
var ques_arr=[];
var any;
var opt_arr=[];
let count=0;
window.onload=function(){
    send_ques();
    ques_rep();
    
}
function next(){
    choice1.removeAttribute("onclick");
    choice2.removeAttribute("onclick");
    choice3.removeAttribute("onclick");
    choice4.removeAttribute("onclick");
    if(count===questions.length){
        console.log("quiz done");
    }
    else{
        
        ques_rep();
    }
}
function send_ques(){
    for(var i=0;i<questions.length;i++){
        ques_arr.push(questions[i]);
    }
}

function ques_rep(){
    ques_no.innerHTML= "Question "+(count+1)+"of 15";
    var num=Math.floor(Math.random() * ques_arr.length)
    var index=ques_arr[num];
    any=index;
    ques.innerHTML=any.question;
    var index2=ques_arr.indexOf(any);
    ques_arr.splice(index2,1);
    console.log(any);
    choice1.innerHTML=any.options[0];
    choice2.innerHTML=any.options[1];
    choice3.innerHTML=any.options[2];
    choice4.innerHTML=any.options[3];
    count++;
    console.log(choice1);
    choice1.setAttribute("onclick","ans()");
    choice2.setAttribute("onclick","ans1()");
    choice3.setAttribute("onclick","ans2()");
    choice4.setAttribute("onclick","ans3()");
}
function ans(){
    var variable=any.answer;
    var ans_num=parseInt(variable);
    if(any.options[0]==any.options[ans_num]){
        console.log(any.options[ans_num]);
        choice1.style.color="green";
        choice1.style.backgroundColor="lightgreen";
        console.log("right1");
    }
    else{
        console.log(any.options[ans_num]);
        choice1.style.color="red";
        choice1.style.backgroundColor="pink";
        console.log("wrong1");
    }
}
function ans1(){
    var variable2=any.answer;
    var ans_num2=parseInt(variable2);
    if(any.options[1]==any.options[ans_num2]){
        console.log(any.options[ans_num2]);
        choice2.style.color="green";
        choice2.style.backgroundColor="lightgreen";
        console.log("right2");
    }
    else{
        console.log(any.options[ans_num2]);
        choice2.style.color="red";
        choice2.style.backgroundColor="pink";
        console.log("wrong2");
    }
}
function ans2(){
    var variable3=any.answer;
    var ans_num3=parseInt(variable3);
    if(any.options[2]==any.options[ans_num3]){
        choice3.style.color="green";
        choice3.style.backgroundColor="lightgreen";
        console.log("right3");
    }
    else{
        choice3.style.color="red";
        choice3.style.backgroundColor="pink";
        console.log("wrong3");
    } 
}
function ans3(){
    var variable4=any.answer;
    var ans_num4=parseInt(variable4);
    if(any.options[3]==any.options[ans_num4]){
        choice4.style.color="green";
        choice4.style.backgroundColor="lightgreen";
        console.log("right4");
    }
    else{
        choice4.style.color="red";
        choice4.style.backgroundColor="pink";
        console.log("wrong4");
    }
}