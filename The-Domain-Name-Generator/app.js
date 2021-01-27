let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

const excuse = document.getElementById("excuse");

let randtext1 = pronoun[Math.floor(Math.random() * pronoun.length)];
let randtext2 = adj[Math.floor(Math.random() * adj.length)];
let randtext3 = noun[Math.floor(Math.random() * noun.length)];

console.log(randtext1 + randtext2  + randtext3 + ".com");

document.getElementById("excuse").innerHTML = randtext1 + ' ' + randtext2 + ' ' + randtext3;