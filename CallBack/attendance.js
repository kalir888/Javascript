{
    function printAttendance() {
        for(let i = 0; i < arguments.length; i++) {
            console.log(arguments[i] + " is present");
        }
    }

    function takeAttendance(printAttendance) {
        let stundent1 = "Kamal";
        let stundent2 = "Vimal";
        let stundent3 = "Nirmal";
        let stundent4 = "Sumal";
        let stundent5 = "Amol";
        printAttendance(stundent1,stundent2,stundent3,stundent4,stundent5);
    }

    takeAttendance(printAttendance);
}