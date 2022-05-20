{
    function printBill(amount) {
        console.log("Your Bill Amount is : " + amount);
    }

    function calculateTicketBill(lowSeatCount,midSeatCount,highSeatCount,printBill) {
        const LOW_SEAT_PRICE = 40;
        const MID_SEAT_PRICE = 80;
        const HIGH_SEAT_PRICE = 120;

        let billAmount = (lowSeatCount*LOW_SEAT_PRICE) + (midSeatCount*MID_SEAT_PRICE) + (highSeatCount*HIGH_SEAT_PRICE);
        printBill(billAmount);
    }

    calculateTicketBill(2,3,4,printBill);
}