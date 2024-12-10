let inp=document.getElementById("inp");
let s=0;
let count=0;
soqchi="";

function aniqla(param){
    soqchi=param;
    if(param=="+"||param=="-"||param=="*"||param=="/"){
        count++;
    
    }
    nuqtaM();
    ishoraM()
    nolM()
    inp.value += param; 
    ishoraBoshM();
    nuqta2M()
    if(s==1&&1<=param&&param<=9){
        inp.value=param;
        s=0
    }
   else if(s==1&&(param=="*"||param=="+"||param=="-"||param=="/"||param==".")){
    s=0;
}

}

function hisobla(){
   s++;
    inp.value=eval(inp.value);

}
function tozala(){
    inp.value="";
}



function backspace(){
  inp.value=inp.value.slice(0,-1);
}


function daraja(){
    if(!inp.value.includes('+')&&!inp.value.slice(1).includes('-')&&!inp.value.includes('*')&&!inp.value.includes('/')){
         inp.value = parseFloat(inp.value) * parseFloat(inp.value);
         s++;
    }
    
}

function ishora(){
    
  if (inp.value < 0) {
    inp.value = -parseInt(inp.value);
  } else if (                        // ishoralik son bolganda bu funksiyani ishlatmaslik
    inp.value.includes(".") ||
    inp.value.includes("*") ||
    inp.value.includes("+") ||
    inp.value.includes("-") ||
    inp.value.includes("/")
  ) {
    inp.value = inp.value;
  } else if (inp.value > 0) {
    inp.value = -parseInt(inp.value);
  }

}



function nuqtaM(){
    if(inp.value==""&&soqchi=="."){   // input birinchi yani bo`sh holatida nuqta yozilmasligi uchun 
       inp.value="0"
    }
    else if(inp.value.at(-1)=="+"||inp.value.at(-1)=="-"||inp.value.at(-1)=="*"||inp.value.at(-1)=="/"){
      inp.value=inp.value+"0";

    }
    // else if(inp.value.at(-1)=="."&&soqchi=="."){   //ikkita nuqta ketma-ket kelmasligi uchun
    //    inp.value=inp.value.slice(0,-1);   
    // }    
}

function ishoraM(){
    if (
      (inp.value.at(-1) == "+" &&
        (soqchi == "+" ||
          soqchi == "-" ||
          soqchi == "*" ||
          soqchi == "/" 
          )) ||
      (inp.value.at(-1) == "-" &&
        (soqchi == "+" ||
          soqchi == "-" ||
          soqchi == "*" ||
          soqchi == "/" 
          )) ||
      (inp.value.at(-1) == "*" &&
        (soqchi == "+" ||
          soqchi == "-" ||
          soqchi == "*" ||
          soqchi == "/" 
          )) ||
      (inp.value.at(-1) == "/" &&
        (soqchi == "+" ||
          soqchi == "-" ||
          soqchi == "*" ||
          soqchi == "/" 
          )) ||
      (inp.value.at(-1) == "." &&
        (soqchi == "+" || soqchi == "-" || soqchi == "*" || soqchi == "/"))
    ) {
      // ikkita ishora  ketma ket kelmasligi uchun
      inp.value = inp.value.slice(0, -1);
    }
}

function nolM(){


     if(inp.value=="0"&&soqchi=="0"){ // birinchi holatda ketma ket nol yozilmasligi uchun
        console.log(1)
        inp.value="";
    }
    else if((inp.value=="0")&&(soqchi==1||soqchi==2||soqchi==3||soqchi==4||soqchi==5||soqchi==6||soqchi==7||soqchi==8||soqchi==9)){  // noldan keyin son yozilsa osha son bilan boshlanib ketishi uchun
         console.log(1)
         inp.value=""
    }
     else if((inp.value.at(-2)=="+"||inp.value.at(-2)=="-"||inp.value.at(-2)=="*"||inp.value.at(-2)=="/")&&(inp.value.at(-1)==0)&&(soqchi==1||soqchi==2||soqchi==3||soqchi==4||soqchi==5||soqchi==6||soqchi==7||soqchi==8||soqchi==9||soqchi==0)){  // qanaqadir ishora boladi va undan keyin nol yozilsa va iundan keyin son yozilsa nolni ochiirb sonni yozadi
          inp.value=inp.value.slice(0,-1) ;   
     }
}


function ishoraBoshM(){
        if (
          (inp.value == "+"||inp.value=="-"||inp.value=="*"||inp.value=="/") &&  // birinchi martada ishora yozilmasligi uchun
          (soqchi == "+" || soqchi == "-" || soqchi == "*" || soqchi == "/")
        ) {
            inp.value=""
        } 
}



function nuqta2M(){
    if(count==0&&(inp.value.slice(0,-1).includes(".")&&soqchi==".")){
        console.log(1)
           inp.value=inp.value.slice(0,-1);
           console.log(inp.value)
           
    }
    else if(count!=0&&soqchi=="."){
       count=0;
    }
}



