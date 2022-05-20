{
    let promise = new Promise(function(resolve, reject) {
        const PRESENT = 1;
        let stundent1 = "Kamal";
        let attendanceCheck = Math.floor(Math.random() * 10) % 2;
        if(attendanceCheck == PRESENT) {
            resolve(stundent1);
        }else {
            reject(stundent1);
        }
    });

    promise.then(function(stundent1) {
        console.log(stundent1 + " is present")
    }).catch(function(stundent1) {
        console.log(stundent1 + " is absent")
    });
}