{
    let resultAnouncer = new Promise(function(resolve, reject) {
        let party1Name = "BJP";
        let party2Name = "DMK";
        let party1Votes = Math.floor(Math.random() * 10000);
        let party2Votes = Math.floor(Math.random() * 10000);
        if(party2Votes > party1Votes) {
            resolve(party2Name);
        }else {
            reject(party1Name);
        }
    });

    resultAnouncer.then(partyName => console.log(partyName + " Won the Election"))
                  .catch(partyName => console.log(partyName + " Won the Election"));
}