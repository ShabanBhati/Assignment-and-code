const accountId = 916654
let accountEmail = "shaban@gmail.com"
var accountPassword = "12345"
accountCity = "Sikar"
let accountState;
//agar javascript me value assign nhi krte jesa ki accountState me nhi di gyi
//to output me vo undefined value aati hai


// accountId  const me hai mtlb constant ab usko change nhi kr sakte 
//variables ko declare krne ke do tarike hai - Let aur Var jesa ke upar hai
//but mostly let hi use krte hai

// {} is curly braces ko javascript me SCOPE bolte hai

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "bhati@secs.com"
accountPassword = "000000"
accountCity = "Jaipur"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])