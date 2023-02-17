import {getUser, getUsers} from './api';

console.log('typescript');



(async function() {

    let user = await getUser({id: 1});
    // user.id

    let users = await getUsers({order: 'desc'});
    users.forEach( u => {
        u.id
    } );

    // users.id;

})()






// let box1 = document.querySelector('div');

// let a:number = 1;

// console.log(Ajax);

// ajax.post();
