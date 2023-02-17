// 接口
interface IAjaxOptions {
    baseURL: string;
}

class Ajax {

    // 类的属性必须单独进行声明，而不是在构造函数中进行声明
    // public options: IAjaxOptions;

    constructor(
        public options: IAjaxOptions
    ) {
        // this.options = options;
    }

    get<Q, R>(
        url: string,
        query?: Q
    )
    // 返回值是Promise
    : Promise<R> {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            // 这里的逻辑我省略掉
            // xhr.open();

            // resolve(xhr.responseText);

        });
    }

}

export default Ajax;