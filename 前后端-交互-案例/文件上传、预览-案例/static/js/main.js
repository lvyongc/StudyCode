import PreviewImg from "./PreviewImg.js";
import upload from "./upload.js";
//上传图片按钮
const imgFileElement = document.querySelector(".imgFile");
const loadContainer = document.querySelector(".loadContainer");
const showContainer = document.querySelector(".showContainer");
// 上传按钮
const uploadBtn = document.querySelector(".uploadBtn");
const wantUpload = document.querySelector(".wantUpload");


// 上传
uploadBtn.addEventListener("click", async () => {
  console.log("upload");
  await uploadImg();
  // 等待完成后再清空
  reset();
});

// 清空
function reset() {
  wantUpload.innerHTML = ``;
  previewImgs = [];
  hidePreviewContainer();
}

// 上传
async function uploadImg() {
  // 依次上传，这里用了 async await ，相关的都要用
  for (const previewImg of previewImgs) {
    const result = await upload(previewImg);
    // 这里可以写关闭上传页面，自定义开始上传，关是关闭，关就不让它执行 upload
    console.log(result);
  }
}

// 拿到图片的信息 files 
imgFileElement.addEventListener("change", (e) => {
  console.log(e.target.files);

  showPreviewContainer();
  // 转数组
  renderPreviewImg(Array.from(e.target.files));
});

// 上传完成的图片
let previewImgs = [];

// 收集预览图
function renderPreviewImg(files) {
  files.forEach((file) => {
    const previewImg = new PreviewImg(file);
    // 预览图加到上传完成的图片
    previewImgs.push(previewImg);
  });
}

// 图片上传页面显示
function showPreviewContainer() {
  loadContainer.style.display = "block";
  showContainer.style.display = "none";
}
// 回到初始页面
function hidePreviewContainer() {
  loadContainer.style.display = "none";
  showContainer.style.display = "block";
}
