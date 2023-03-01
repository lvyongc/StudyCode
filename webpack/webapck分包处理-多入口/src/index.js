// import hah from './hah'
console.log('index')
import axios from 'axios'
axios.get('http://123.207.32.32:8080/home/multidata').then(res =>{
    console.log(res)
})