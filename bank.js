/* btnid  login  part to bank html transfer js*/ 
    document.getElementById('btnId').addEventListener('click' , function(){
        let userEmail = document.getElementById('login-email');
         let emailField = userEmail.value ; 
      
        let userPass = document.getElementById("login-password");
            let passF = userPass.value;

        if ( emailField == 'mehedy.adi7@gmail.com' && passF == '001122qwe'){
            window.location.href = 'bank.html';
        }
    });

