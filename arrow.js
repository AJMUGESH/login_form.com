var email=document.forms['form']['email']
var pass=document.forms['form']['pass']
var emailerror=document.getElementById("eerror")
var passerror=document.getElementById("perror")

function validated()
{
    if(email.value.length<6)
    {
        email.style.border="2px solid blue";
        email.focus();
        emailerror.style.display="block";
        return false;

    }
    if(pass.value.length<6)
    {
        pass.style.border="2px solid blue";
        passs.focus();
        passerror.style.display="block";
        return false;

    }
}