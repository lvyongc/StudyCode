function _id(idName){ //通过 id 来获取元素
    return document.getElementById(idName);
}
function _css(parent,selector){ //通过 css选择器获取 来获取元素
    return parent.querySelector(selector);
}
function _cssAll(parent,selector){ //通过 css选择器获取 来获取一组元素
    return parent.querySelectorAll(selector);
}
function getStyle(el,attr){
    return el.currentStyle?el.currentStyle[attr]:getComputedStyle(el)[attr];
}