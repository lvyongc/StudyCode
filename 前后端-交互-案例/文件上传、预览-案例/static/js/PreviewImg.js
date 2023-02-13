// 预览图

// div父级
const parentElement = document.querySelector(".wantUpload");

export default class PreviewImg {
  constructor(file) {
    this.file = file;
    this.element = this.createElement();
    this.setImgUrl(this.getImgElement());
  }

  // 进度条
  updateProgress(loaded, total) {
    // 获得百分比
    const percent = this.getPercent(loaded, total);
    // 显示进度
    this.showProgressView();
    // 更新视图进度
    this.updateProgressView(percent);

    // 完成进度消失
    if (this.isLoaded(percent)) {
      this.hideProgressView();
    }
  }

  // 百分比
  getPercent(loaded, total) {
    return Math.ceil((loaded / total) * 100);
  }

  // 进度
  updateProgressView(percent) {
    // 进度条
    this.element.querySelector(".plan").style.width = percent + "%";
    // 数值
    this.element.querySelector(".val").textContent = percent + "%";
  }

  // 完成
  isLoaded(percent) {
    return percent >= 100;
  }

  // 进度条消失
  hideProgressView() {
    this.element.querySelector(".myProgress").style.display = "none";
  }

  // 显示进度条
  showProgressView() {
    this.element.querySelector(".myProgress").style.display = "block";
  }

  getFile() {
    return this.file;
  }

  // 图片名字
  getImgName() {
    return this.file.name;
  }

  // 拿到img
  getImgElement() {
    return this.element.querySelector("img");
  }

  // 图片先转成 base64，给到img的url，再用url，得到图片预览图
  setImgUrl(img) {
    // FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。
    const fileReader = new FileReader();
    fileReader.onload = () => {
      // img.setAttribute 设置img 的 src
      // fileReader.result 设置的值
      img.setAttribute("src", fileReader.result);
    };

    // readAsDataURL 方法会读取指定的 Blob 或 File 对象。读取操作完成的时候，readyState 会变成已完成DONE，并触发 loadend 事件，同时 result 属性将包含一个data:URL格式的字符串（base64编码）以表示所读取文件的内容。
    fileReader.readAsDataURL(this.file);
  }

  // 创建 div 预览图
  createElement() {
    const div = document.createElement("div");
    div.classList.add("uploadPhotoItem");
    div.innerHTML = `
            <div class="uploadPhotoItem">
                <span class="myProgress">
                    <span class="plan"></span>
                    <span class="val">30%</span>
                </span>
                <img src="img/1.jpg" />
                <span class="pictureName">
                    ${this.getImgName()}
                </span>
        </div>
    `;
    // 添加到父级
    parentElement.appendChild(div);
    return div;
  }
}
