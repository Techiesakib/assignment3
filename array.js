var friendsage = [12, 13, 14, 15];

var sakibage = friendsage[1];

friendsage[3] = 21;

var position = friendsage.indexOf(14);

friendsage.push(19);

friendsage.pop();


console.log(friendsage)

console.log(friendsage.length)

var tealine = ['kalam', 'jalam', 'malam','gala'];
//  tealine.shift();
tealine.unshift('nalam');

var part = tealine.slice(2, 3);
console.log(part);