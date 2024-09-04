let loginContainer=document.querySelector('.login_container');
let signupContainer=document.querySelector('.signup_container');
let swapLog2sig = document.querySelectorAll('.swapLS'); 



// toggling between the login option and sign up option
Array.from(swapLog2sig).forEach((item)=>{
    item.addEventListener('click',()=>
    {
        
       
        if(item.innerHTML=='Sign up ?')
            {
            
                loginContainer.style.left="-300px";
                loginContainer.style.display="none";
                signupContainer.style.display="flex";
                signupContainer.style.right="auto";
              
            }

        else {
        
            loginContainer.style.display="flex";
            loginContainer.style.left="auto";
            signupContainer.style.right="-300px";
            signupContainer.style.display="none";

        }
        

    })
   
})
