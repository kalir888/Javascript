{
    function printElectionResult(winPartyName,winDifference) {
        console.log(winPartyName + " WON the Election by " + winDifference + " votes.");
    }

    function calculateVoteDiffernce(winPartyName, winPartyVotes, loosePartyVotes, printElectionResult) {
        winDifference = winPartyVotes - loosePartyVotes;
        printElectionResult(winPartyName,winDifference);
    } 

    calculateVoteDiffernce("BJP",10255,255,printElectionResult);
}
