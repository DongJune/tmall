function getclass(b,a){
	if (document.getElementsByClassName) {
		return a.getElementsByClassName(b);
	}else{
        var f=a.getElementsByTagName("*")
        var k=[]
        for (var i = 0; i < f.length; i++) {
        	if (checkclass(f[i].className,b)) {

             	k.push(f[i])
        	};
        };
           return k;
	}
}

// 判断类名中是否有相同元素

function checkclass(tagclass,aclass)
{
       var dd=tagclass.split(" ")  
       //将class名拆分成数组的形式    
      for (var i = 0; i < dd.length; i++) 
      // 对拆分成数组的类名进行遍历
    {
      // 判断所输入的名字是否有和数组类名相同的一组
        if (dd[i]==aclass) {
          // 有就返回ture，终止循环
          return true;
        };
       
      };
      // 循环一遍如果没有直接走false
       return false;
}

// 获取标签。。
function $(select,range){
    range=range||document;
    // 设置range的默认值
    // 判断字符的类型是字符串还是函数
    // 字符串
	if (typeof  select=="string"){
// 判断字符串的第0个值#是ID 
		if (select.charAt(0)=="#") {
	 	return document.getElementById(select.substr(1))
	 }
// .是类 
	  if (select.charAt(0)==".") {
             return  getclass(select.substr(1),range)
	 }
// 标签
	  if (/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(select)) {
          return range.getElementsByTagName(select)
	 }
   //<div>
    if(/^<[a-z][a-zA-Z1-6]{0,9}>$/.test(select)){
           return document.createElement(select.slice(1,-1))
   }
	 }
   // 函数加载
		else if (typeof  select=="function")
		 {window.onload=select;
		 };
}

// 获取文本类型
function getstyle(obj,sttr){  
  if (obj.currentStyle) {
    return obj.currentStyle[sttr]
    
  }else{
       return getComputedStyle(obj,null)[sttr]
    
  }
}

//获取节点元素
var newarr=[];  
     function getchild(pre) {
      var child=pre.childNodes; 
    for (var i = 0; i <child.length; i++) {
  if (!(child[i].nodeType==8||(child[i].nodeType==3&&check(child[i].nodeValue)==''))) {
    newarr.push(child[i])   }
   };
   return newarr;
 }
 // 将空的text文本替换为‘’
 function check(pre){
      return pre.replace(/^\s+|\s+$/g,'')
  };
  // console.log(getchild(parent))    
//  // 获取第一个节点
 function getfirst(pre){
     return getchild(pre)[0]

 }
// // 获取最后一个节点
  function getlest(pre){
     return getchild(pre)[getchild(pre).length-1]

 }
 // 获取任意一个节点
 function getindex(pre,i){
   return getchild(pre)[i]
 }
 // 获取下一个兄弟节点
 function brothernext(pre){
  var next=pre.nextSibling;
 if (!next) {return false;};
  while(next.nodeType==8||(next.nodeType==3&&check(next.nodeValue)=='')){

    next=next.nextSibling;

    if (!next) {return false;};
  }
  return next;
 }
  // 获取下一个兄弟节点
 function brotherlast(pre){
  var last=pre.previousSibling;
 if (!last) {return false;};
  while(last.nodeType==8||(last.nodeType==3&&check(last.nodeValue)=='')){
    last=last.previousSibling;

    if (!last) {return false;};
  }
  return last;
 }

// 文本兼容
 function text(obj,val){  
  if (val==undefined) {
if (obj.textContent!=undefined) {
  

  return obj.textContent;
}else{
  return obj.innerText;
}

}
else{
 
 if (obj.textContent!=undefined) {
  obj.textContent=val;
 }else{
  obj.innerText=val;
    }
}

}
function on(obj,ev,callback){
    if (obj.addEventListener) {
        obj.addEventListener(ev,callback)
    }else{
      obj.aassssaa=function(){
        callback.call(obj)
      }
      obj.attachEvent('on'+ev,aassssaa)
    }
}
//删除事件 
function off(obj,ev,callback){
    if (obj.removeEventListener) {
        obj.removeEventListener(ev,callback)
    }else{

      obj.detachEvent('on'+ev,obj.aassssaa)
    }
}