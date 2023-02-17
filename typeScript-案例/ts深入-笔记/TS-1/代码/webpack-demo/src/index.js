import kkb from './kkb.js';
import txt from './data/a.txt';
import logo from './data/logo.png';
import css from './css/css.css';

// kkb();

document.body.onclick = kkb;

console.log('txt', txt);

console.log('logo', logo);

let img = new Image();
img.src = logo;
document.body.appendChild(img);


console.log('css', css);


// module.hot 是否开启了模块热替换
console.log(module.hot);


// module.hot.accept => 事件监听，监听模块的变化
if (module.hot) {
    module.hot.accept('./kkb.js', function() {
        console.log('kkb模块更新了');
        // 具体的更新逻辑根据不同库，不同框架，自己去实现
        document.body.onclick = kkb;
    });

    
}