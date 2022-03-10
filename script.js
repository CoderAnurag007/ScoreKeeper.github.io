//  Declaring variables
const input = document.querySelector('#win');
const p1=document.querySelector('#p1');
const p2=document.querySelector('#p2');
const bt1=document.querySelector('#p1score');
const bt2=document.querySelector('#p2score');
const reset=document.querySelector('#reset');
const h2=document.getElementById('scorep');
const celeb=document.querySelector('.celeb');
// logics
        const form = document.querySelector('#scoreform');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(input.value);
            // form.classList.add('form');
            // form.innerHTML="You Are Set To Go";
            input.disabled=true;
            

            // p1.innerHTML=(input.value)
         });

         bt1.addEventListener('click',()=>{
            let val1=parseInt( p1.innerHTML)+1;
            p1.innerHTML=val1;
            if(val1=== parseInt( input.value)){
                celeb.innerHTML="Player 1 Wins The Match";
                // celeb.classList.add('celeb');
                p1.innerHTML=0;
                p2.innerHTML=0;
                input.value=0;
                celeb.classList.remove('celeb');
                celeb.classList.add('celebs');
                input.disabled=false;

                
            }
         })
         bt2.addEventListener('click',()=>{
            let val2=parseInt( p2.innerHTML)+1;
            p2.innerHTML=val2;
            if(val2===parseInt( input.value)){
                celeb.innerHTML="Player 2 Wins The Match";
                celeb.classList.remove('celeb');
                celeb.classList.add('celebs');
                p1.innerHTML=0;
                p2.innerHTML=0;
                input.value=0;
                input.disabled=false;

                
            }

                 })

        reset.addEventListener('click', ()=>{
            input.value=0;

         p1.innerHTML=0;
         p2.innerHTML=0;
         input.disabled=false;
         celeb.classList.remove('celebs');
         celeb.classList.add('celeb');
         celeb.innerHTML=''; 

        // celeb.innerHTML=" ";

        })



 //  


