let pincodeRegex=RegExp("^[0-9]{3}[ ]*[0-9]{3}$");

//uc1 pincode validation for  6 digit number
//uc2 it wont allow special character at the beigining 
//uc3 it wont allow spl chaarcter at the end

function PincodeValidation(pincode)
{
    if(pincodeRegex.test(pincode))
    {
        console.log(pincode +"  is in valid format");
    }
    else throw "Incorect Pincode Format";
}
try
{
//readline-sync waits for users response and make it synchronised
const prompt = require('readline-sync');
let pincode = prompt.question(" Please Enter the pincode for validation");
PincodeValidation(pincode);
}
catch(e)
{
    console.log(e);
}