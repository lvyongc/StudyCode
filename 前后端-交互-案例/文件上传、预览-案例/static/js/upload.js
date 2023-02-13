
import axios from "./axios.js"

// 上传
export default function upload(previewImg) {
  // // xml实现的上传：
  // // Promise 才能用 async await 完成依次上传功能
  // return new Promise((resolve, reject) => {
  //   // 创建 XMLHttpRequest  
  //   // XMLHttpRequest（XHR）对象用于与服务器交互。通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据。这允许网页在不影响用户操作的情况下，更新页面的局部内容。XMLHttpRequest 在 AJAX 编程中被大量使用。
  //   const xhr = new XMLHttpRequest();
  //   xhr.open("post", "/upload");
  //   // 利用 FormData 上传文件
  //   // FormData 接口提供了一种表示表单数据的键值对的构造方式，经过它的数据可以使用 XMLHttpRequest.send() 方法送出，本接口和此方法都相当简单直接。如果送出时的编码类型被设为 "multipart/form-data"，它会使用和表单一样的格式。

  //   // 如果你想构建一个简单的GET请求，并且通过<form>的形式带有查询参数，可以将它直接传递给URLSearchParams。

  //   // 实现了 FormData 接口的对象可以直接在for...of结构中使用，而不需要调用entries() : for (var p of myFormData) 的作用和 for (var p of myFormData.entries()) 是相同的。
  //   const formData = new FormData();
  //   // key value 
  //   // FormData 接口的append() 方法 会添加一个新值到 FormData 对象内的一个已存在的键中
  //   formData.append("img", previewImg.getFile());
  //   xhr.onload = (e) => {
  //     // Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象
  //     resolve(e.target.response);
  //   };

  //   // ajax上传文件监听进度
  //   xhr.upload.onprogress = (e) => {
  //     // 当前大小、总大小
  //     // UpdateProgress是一个进度显示条，加在AJAX里
  //     previewImg.updateProgress(e.loaded, e.total);
  //   };

  //   xhr.send(formData);
  // });

  // axios 实现上传:
  const formData = new FormData();
  formData.append("img",previewImg.getFile());
  return axios.post("/upload",formData);
}
