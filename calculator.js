let a=document.getElementById('field-1');
let btn=document.querySelectorAll('button');
let c=document.getElementsByClassName('calculator')[0]
for(item of btn){
  item.addEventListener('click',(e)=>{
    buttonText=e.target.innerText;
    console.log(buttonText)
   
    if(buttonText==='X'){
      multiply='*';
      a.value+=multiply;
      
    }
    
    else if(buttonText=='Ac'){
      a.value=''
    }
    else if(buttonText=='='){
       a.value=eval(a.value);
    }
    else{
      a.value+=buttonText;
    }
  })
}

let theme=document.getElementById('btn-theme');
theme.addEventListener('click',function(){
     let r=Math.floor(Math.random()*256);
     let g=Math.floor(Math.random()*256);
     let b=Math.floor(Math.random()*256);
     a.value='';
     c.style.backgroundColor=`rgb(${r},${g},${b})`
})

