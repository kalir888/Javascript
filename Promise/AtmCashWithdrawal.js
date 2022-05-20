{
    let cashAvailPromise = new Promise(function(resolve, reject) {
        let accountName = "Kalimuthu";
        let balanceBefore = 10000;
        let amountToWithdraw = 100000;
        if(amountToWithdraw < balanceBefore) {
            /* let balanceAfter = balanceBefore - amountToWithdraw; */
            resolve(accountName);
        }else {
            reject(accountName);
        }
    });

    cashAvailPromise.then(function(accountName,balance) {
        console.log("Hi " + accountName + "\nCollect your cash")})
        .catch((accountName) => console.log("Hi " + accountName + 
        "\nThe amount you have entered cannot be withdrwaled due to insufficient balance"));
    
}