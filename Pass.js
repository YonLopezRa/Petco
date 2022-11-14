function getPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ|~$()=^*+[]{}-_,";
    const passwordLength = 12;
    let password = "";

    for (let i=0; i<passwordLength; i++){
        const randoNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randoNumber, randoNumber+1);
    }
    document.getElementById("password").value = password
}

