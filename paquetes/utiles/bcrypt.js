const bcrypt = require('bcrypt');

const password = '12345MuySegura*';

//usando callbacks
// bcrypt.hash(password,5,function (error,hash) {
//     console.log(hash);

//     bcrypt.compare(password,hash, function(err, res){
//         //console.log(err);
//         console.log(res);
//     });
// });

//usando promesas

bcrypt.hash(password,6)
    .then(hash => {
        console.log(hash);

        return bcrypt.compare(password,hash);
    })
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.error('Error: ', e);
    })


//otra manera de usar las promesas
// let promise = new Promise(function (resolve, reject) {
//     bcrypt.hash(password, 5, function (err, hash) {
//         if (err != null) {
//             reject(err);
//         }
//         resolve(hash);
//     });
// });

// promise
//     .then((result) => {
//         passwordHash = result;
//         console.log(result);
//         saveToDatabase();
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// function saveToDatabase() {
//     console.log('password saved...');
//     console.log(passwordHash);
// }    