const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", function() {
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")

    const emailValue = emailInput.value
    const passwordValue = passwordInput.value

    if (emailValue && passwordValue) {
        const loginArea = document.getElementById("loginarea")
        loginArea.style.display = "none"

        const transactionArea = document.getElementById("transaction-area")
        transactionArea.style.display = "block"
    } else {
        alert("Enter Your Login Information")
    }

    //Add event listener for Deposit
    const depositButton = document.getElementById("depositBtn")

    depositButton.addEventListener("click", function() {

        const depositNumber = document.getElementById("depositAmount")
        const depositValue = depositNumber.value
        if (depositValue < 0) {
            alert("You cannot deposit that!")
        }
        if (depositValue != 0) {
            const current = document.getElementById("newBalance").innerText
            const currentNumber = parseFloat(current)
            const depositNum = parseFloat(depositValue)
            
            const total = currentNumber + depositNum

            //this rounds the balance number to the nearest hundredth value for money
            const round = Math.round(total * 100) / 100
            //balance value update
            document.getElementById("newBalance").innerText = round

            //deposit value update
            document.getElementById("depositAdd").innerText = depositValue

            //deposit input reset
            depositNumber.value = '';

        }
   
    })

    //Add event listener for Withdraw
    const withdrawButton = document.getElementById("withdrawBtn")

    withdrawButton.addEventListener("click", function() {
            const withdrawNumber = document.getElementById("withdrawAmount")
            const withdrawValue = withdrawNumber.value

            if (withdrawValue < 0) {
                alert("You cannot withdraw that!")
            }
            if (withdrawValue >= 0) {
                const current = document.getElementById("newBalance").innerText
                const currentNumber = parseFloat(current)
                const withdrawNum = parseFloat(withdrawValue)

                const total = currentNumber - withdrawNum

                //this rounds the balance number to the nearest hundredth value for money
                const round = Math.round(total * 100) / 100
                if (total >= 0) {
                    //balance value update
                    document.getElementById("newBalance").innerText = round

                    //withdraw value update
                    document.getElementById("currentWithdraw").innerText = withdrawValue

                    //widthdraw input reset
                    withdrawNumber.value = '';
                } else if (total < 0) {
                    alert("You cannot withdraw that!")
                }
                
                
               
            }
            
})
    
})
    
    
         
        

