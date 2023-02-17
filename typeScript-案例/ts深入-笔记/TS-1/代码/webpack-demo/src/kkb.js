import axios from 'axios';

export default async function kkb() {
    console.log('开课吧!!!~~~~!kkbkkbkkbbkbkbkb');


    // console.log(axios);


    let rs = await axios({
        url: '/api/users'
    });

    console.log('rs', rs);
}