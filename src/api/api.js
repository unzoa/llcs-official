import Vue from 'vue'//将用于调用接口

// 命名接口
const apiArr = {}
const api={}


api.apiPath = '/api'

api.post = (Interface,requestData)=>{
	return new Promise((reslove,reject)=>{
		Vue.http.post(api.apiPath+apiArr[Interface],requestData)
        .then(function(res){
            reslove(res)
    	})
    })
}

api.get = (Interface,requestData)=>{
    return new Promise((reslove,reject)=>{
        Vue.http.get(api.apiPath+apiArr[Interface]+'?'+requestData)
        .then(function(res){
                reslove(res);
            })
        })
}

//图片上传
api.upload = (Interface,file,_obj) => {

    let formData = new FormData()
    formData.append('attach', file)
    for (var k in _obj) {
      formData.append(k, _obj[k])
    }

    return new Promise((resolve, reject) => {
      Vue.http.post(api.apiPath+apiArr[Interface], formData)
      .then(function (response) {
        resolve(response.body)
      })
    })
}

api.getCookie = (cookie_name)=>{
	var strCookie = document.cookie;
    //将多cookie切割为多个名/值对
    var arrCookie = strCookie.split("; ");
    var userId;
    //遍历cookie数组，处理每个cookie对
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        //找到名称为userId的cookie，并返回它的值
        if (cookie_name == arr[0]) {
            userId = arr[1];
            break;
        }
    }
    return unescape(userId);
}

api.setCookie = (name, value)=>{
	//定义一天
	var days = 1;
	var exp = new Date();
	//定义的失效时间，
	exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
	//写入Cookie  ，toGMTstring将时间转换成字符串。
	document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString;
}

api.getUrlByName = (name)=>{
    var index=api.menuIndex.indexOf(name)
    return api.menus[index];
}

api.clientType = ()=>{
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        return 'android'
    } else if (isIOS) {
        return 'iOS'
    }
}

export default api;
