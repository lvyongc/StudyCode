var qqone = document.querySelectorAll('.share span:last-of-type a:nth-of-type(2)');
console.log(qqone);
for(var i=0;i<qqone.length;i++){
    qqone[i].onclick = function () {
        shareToQq('图片轮播');
    }
}
function shareToQq(title,url,picurl){
    var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+title+'&url='+url+'&pics='+picurl;
    window.open(shareqqzonestring,'newwindow','height=400,width=400,top=100,left=100');
}