// 开发封闭原则
function loadImg(src) {
    let promise = new Promise(function (resolve, reject) {
        let img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject('图片加载失败')
        }
        img.src = src
    })
    return promise
}
let src = 'http://www.w3school.com.cn/i/eg_tulip.jpg'
let result = loadImg(src)

result.then(function (img) {
    alert(`width:${img.width}`)
    return img
}).then(function (img) {
    alert(`width:${img.height}`)
}).catch(function (ex) {
    alert(ex)
})