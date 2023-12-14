
const button = document.getElementById('button');
button.addEventListener('click', displayPassword);

function generatePassword (length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
      }
    
    return password;
}

function displayPassword(){

    const input = document.getElementById('passLength');
    const passLength = parseInt(input.value, 10);

    const generatedPassword = generatePassword(passLength);
    const output = document.getElementById('output');
    output.innerText = generatedPassword;
}


