/**
 * 
 * @authors suibichuanji (itclancode@163.com)
 * @date    2017-11-02 11:45:57
 * @version $Id$
 * @description
 */
var oSlide = document.querySelector(".slide");
var oUl = oSlide.querySelector("ul");
var aLi = oUl.querySelectorAll("li");
var oDot = document.querySelector(".dot");
var aSpan = oDot.querySelectorAll("span");

var startPoint = 0;  // 手指按下起始的坐标
var startX = 0;      // 图片距离x轴左边的坐标
// var disX = 0;
var translateX = 0;  // 开始的位置为0
aSpan[0].className = "on";
oSlide.addEventListener('touchstart',function(e){
    startPoint = e.changedTouches[0].pageX; // 手指按下距离屏幕左边的距离
    //startX = oUl.offsetLeft;   // 图片刚开始的位置距离左边的距离
    startX = translateX;
    // disX = startPoint-oUl.offsetLeft;
    oUl.style.transition = ""; // 去除过度效果
})
// 手指移动
oSlide.addEventListener('touchmove',function(e){
   var nowPoint = e.changedTouches[0].pageX; // 手指移动现在的坐标
   //var disX = nowPoint-startPoint+startX;
   translateX = nowPoint-startPoint+startX;
   // var L = nowPoint-disX;
   // 要做兼容性处理
   //oUl.style.WebkitTransform = oUl.style.transform = 'translateX('+disX+"px";
   oUl.style.WebkitTransform = oUl.style.transform = 'translateX('+translateX+"px";
   
})
// 手指抬起时
oSlide.addEventListener('touchend',function(){
	//var l = oUl.offsetLeft;
  var l = translateX;
	var num = Math.round(-l/oSlide.offsetWidth); // 四舍五入
	l = -num*oSlide.offsetWidth;
	oUl.style.transition = "1s";   // 添加过度效果
	oUl.style.WebkitTransform = oUl.style.transform = 'translateX('+l+'px';
	for(var i = 0;i<aSpan.length;i++){ //循环按钮
       aSpan[i].className = '';
	}
	aSpan[num].className = 'on';
})