document.getElementById("btn-login").addEventListener('click', function (event) {
    event.preventDefault();

    // Taking phone in a variable
    const phoneNumber = document.getElementById("phone-number").value;

    // Takling variabel in a variabe
    const pinNumber = document.getElementById("pin-number").value;
    console.log(pinNumber);
    if (phoneNumber == '33' && pinNumber == '66') {
        window.location.href = "/home.html";
    }
    else {
        alert("Wrong Phone Number Or Phone Number.")
    }

})
