document.querySelector("#submit-button").addEventListener('click', async () => {
    const email = document.querySelector("#email").value;
    // console.log(email);
    const password = document.querySelector('#password').value;
    // console.log(password);
    const confirmPassword = document.querySelector('#confirm-password').value;
    // console.log(confirmPassword);
    const fname = document.querySelector("#fname").value;
    // console.log(fname);
    const lname = document.querySelector("#lname").value;
    // console.log(lname);
    
    if(password == "" || email == "" || confirmPassword == "" || fname == "" || lname == "") {
        return window.alert("Please Enter All Details");
    }

    if(password != document.querySelector("#confirm-password").value ){
        document.querySelector("#confirm-password").value ="";
        document.querySelector("#password").value ="";
        return window.alert("Passwords do not match");
    }

    // const check = document.querySelector('#submit-button').checked;
    // console.log(check);
    // if(check != true) {
    //     return window.alert("Please accept all the term and conditions");
    // }

    const data = {
        email : email,
        password:password,
        fname : fname,
        lname : lname,
    }

    // const res = await axios({
    //     method: "POST",
    //     url: `http://localhost:5000/SignUp`,
    //     data : data,
    //     validateStatus: () => true,
    // })
    const res = 200;
    console.log(data);
    if(res == 200){
        console.log('hello');
        console.log(window.location.href);
        window.location.href = "http://localhost:5000/SignUp-2";
        window.alert("Registration Succesful");
    }
    else if (res.status == 409){
        return window.alert("Email already exists")
    }
    else{
        window.alert("Registration Failed");
        window.location.reload();
    }
})  