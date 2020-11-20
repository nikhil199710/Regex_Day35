let emailRegex=RegExp("^[A-Za-z]{3,}([.+_-][A-Za-z0-9]+)*[@][A-Za-z0-9]{1,}[.][a-zA-Z0-9]{2,3}([.][0-9a-zA-Z]{2})?$")
//email format- abc.xyz@bridgelabz.co.in .xyz & .in optional & rest all mandatory
//uc1 validating first part of the email i.e. abc
//uc2 changing email pattern for validating second part i.e. @bridgelabs
//uc3 validating third part .co in email pattern
//uc4 validating first optional part .xyz
//uc5 validating second optional part .in
function EmailValidation(email)
{
    if(emailRegex.test(email))
    {
        console.log(email +"  is in valid format");
    }
    else throw "Incorect Email Format";
}
try
{
//readline-sync waits for users response and make it synchronised
const prompt = require('readline-sync');
let email = prompt.question(" Please Enter the email for validation");
EmailValidation(email);
}
catch(e)
{
    console.log(e);
}