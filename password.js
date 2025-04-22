const calculatePasswordStr = (inputPassword, pwdStr, message) => {
    if(inputPassword.length >= 8) {
        pwdStr++;
    } else {
        message += "Password Length is less than 8<br>";
    }
    
    if((/[A-Z]/).test(inputPassword)) {
        pwdStr++;
    } else {
        message += "Password does not contain uppercase letter<br>";
    }
    
    if((/[a-z]/).test(inputPassword)) {
        pwdStr++;
    } else {
        message += "Password does not contain lowercase letter<br>";
    }
    
    if((/[0-9]/).test(inputPassword)) {
        pwdStr++;
    } else {
        message += "Password does not contain number<br>";
    }
    
    if((/[^A-Za-z0-9]/).test(inputPassword)) {
        pwdStr++;
    } else {
        message += "Password does not contain special letter<br>";
    }

    return {pwdStr, message};
}

const createMessageHead = (pwdStr, color, msgHead) => {
    if(pwdStr < 2) {
        color = "red";
        msgHead = "<h2>Weak Password<br></h2>";
    }
    else if (pwdStr >= 2 && pwdStr < 4) {
        color = "orange";
        msgHead = "<h2>Moderate Password<br></h2>";
    }
    else {
        color = "green";
        msgHead = "<h2>Strong Password<br></h2>";
    }

    return {color, msgHead};
}

const handleInput = () => {
    const inputPassword = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");

    if(inputPassword == "") {
        feedback.innerHTML = "";
    } else {
        let pwdStr = 0;
        let msgHead = "";
        let message = "";
        let color = "";
        
        ({pwdStr, message} = calculatePasswordStr(inputPassword, pwdStr, message));
        ({color, msgHead} = createMessageHead(pwdStr, color, msgHead));
        
        feedback.innerHTML = (msgHead + message);
        feedback.querySelector("h2").style.color = color;
    }

}

document.getElementById("submit").addEventListener("click", handleInput);
document.getElementById("password").addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        handleInput();
    }
})

    