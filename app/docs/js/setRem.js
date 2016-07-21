
(function(document,window){
    "use strict";
    // rem响应式兼容设备，必须放顶部，不然页面抖动厉害

    var dpr, scale;
    var fontEl = document.createElement('style');	//创建一个style标签，用于设置 font-size 值
    var metaEl = document.querySelector('meta[name="viewport"]');	//获取 name 属性是 viewport的标签对象
	var docEl = document.documentElement;	//获取文档结构
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';		//定义旋转事件

	dpr = window.devicePixelRatio || 1;
	scale = 1 / dpr;

	var recalc = function () {
          
		var clientWidth = docEl.clientWidth;
		var clientHeight = docEl.clientHeight;

		// 判断视口的宽高，选择小的作为设置的
		if(clientWidth > clientHeight){
			clientWidth = clientHeight;
		}

		var rem = clientWidth * dpr / 10;

		
		docEl.style.fontSize = rem + 'px';

	};

    if (!document.addEventListener) return;

    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);

    // recalc();

  }(document,window));