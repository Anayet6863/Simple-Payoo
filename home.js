// EventListner For Cash IN
document.getElementById("btn-add-money").addEventListener('click',function(e){
    e.preventDefault();

    const pin = document.getElementById("pin-input").value;
    if(pin==33)
    {
        const AddMoney = document.getElementById("add-money-input").value;
        let Balacne = document.getElementById("balance").innerText;
        let newBalance = parseFloat(Balacne) + parseFloat(AddMoney);
        document.getElementById("balance").innerText = newBalance;

    }
    else{
        alert("Wrong PIN");
    }

})
// EventListner For CashOut
document.getElementById("btn-cash-out").addEventListener('click', function (e) {
    e.preventDefault();
    const pin = document.getElementById("pin-Input").value;
    if (pin == 33) {
        let availableMoney = document.getElementById("balance").innerText;
        let cutMoney = document.getElementById("cut-input").value;
        console.log(parseFloat(availableMoney));
        console.log(parseFloat(cutMoney));
       if(parseFloat(availableMoney)>parseFloat(cutMoney)) {
            const newBalance = parseFloat(availableMoney) - parseFloat(cutMoney);
            document.getElementById("balance").innerText = parseFloat(newBalance);
            console.log(newBalance);
        }
        else{
            alert("Insuffient Money!")
        }

    }
    else {
        alert("Wrong PIN");
    }

})
