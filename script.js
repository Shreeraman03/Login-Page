function validation(){
    if (document.formfill.Username.value == "") {
        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    }
    else if(document.formfill.Username.value.length<6){
        document.getElementById("result").innerHTML= "Atleast 6 letters*";
        return false;
    }
    else if (document.formfill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter your Email*";
        return false;
    }
    else if (document.formfill.Password.value == "") {
        document.getElementById("result").innerHTML = "Enter your Password*";
        return false;
    }
    else if (document.formfill.Password.value.length<6) {
        document.getElementById("result").innerHTML = "Password must be 6-digits*";
        return false;
    }
    else if (document.formfill.CPassword.value=="") {
        document.getElementById("result").innerHTML = "Enter Confirm Password*";
        return false;
    }
    else if (document.formfill.CPassword.value !== document.formfill.Password.value) {
        document.getElementById("result").innerHTML = "Password does'nt matched*";
        return false;
    }
}