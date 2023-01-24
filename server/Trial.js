const { json } = require('body-parser');
const obj=require( './Voting_block.js');

obj.set_User("0x4EA2d8e4c86C24441A153354C0502f757C5ADe5B","0d1a34d941f4d5e8169944aa7638443a6f9b64b479fcf2af6bb5e9298abaf2cf").then(()=>{


  console.log("end");
  obj.addCandidates('nota').then(data=>console.log(JSON.parse(data)));
  setTimeout((function() { 
    return process.exit(0);
    }), 1000);
});


// obj.addCandidates("Raj").then(()=>{
//     console.log("end");
//     setTimeout((function() { 
//       return process.exit(0);
//       }), 1000);
//   });