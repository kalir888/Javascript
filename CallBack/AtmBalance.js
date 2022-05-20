{
    function printAccountBalance(name, currBalance) {
        console.log("Hi " + name + "\nYour Account Balance is : " + currBalance);
    }

    function calculateAccountBalance(name, prevBalance, withdrawalAmount, printAccountBalance) {
        let currBalance = prevBalance - withdrawalAmount;
        printAccountBalance(name, currBalance);
    }

    calculateAccountBalance("Kalimuthu", 20000, 10000, printAccountBalance);
}