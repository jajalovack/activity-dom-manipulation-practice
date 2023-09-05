let toggleSidebar=document.getElementById("toggleSidebar");
let sidebar=document.getElementsByClassName("headerNav")[0];
toggleSidebar.addEventListener("click",function (){
    sidebar.classList.toggle("headerNavClose");
    sidebar.classList.toggle("headerNavOpen");
});

let submitForm=document.getElementById("register");
let errorMessage=document.getElementById("passwordError");
submitForm.addEventListener("submit",function (event){
    if (submitForm.password.value.length>=8)
    {
        alert("Registration Successful!");
    }
    else
    {
        event.preventDefault();
        errorMessage.innerHTML="*Password must be at least 8 characters long.";
    }
});
