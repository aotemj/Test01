//导出常量
export const key ="goodsdata";//用于数据存取时的键名
//导出数据存储的格式:
export var valueObj = {goodsId:0,count:0};
//导出设置数据方法:
export function setItem(value){
	var jsonStr = localStorage.getItem(key)||"[]";//获取当前本地存储的数据
	var arr = JSON.parse(jsonStr);
	arr.push(value);//添加新数据
	localStorage.setItem(key,JSON.stringify(arr));//将更新过的数据重新添加到本地存储
};

//导出获取当前数据的方法:
export function getItem(){
	var jsonStr = localStorage.getItem(key)||"[]";
	return JSON.parse(jsonStr);
};

//导出获取购物车中商品数据的方法:
export function getGoodsList(){
	// 获取当前本地存储中的数据
	var arr =	getItem();
	var goodsObj ={};//用于接收获取的数据

	for(var i =0;i<arr.length;i++){
		var item = arr[i];
		// console.log(item)

		if(!goodsObj[item.goodsId]){

			goodsObj[item.goodsId]=item.count;//如果没有就新建一个

		}else{
			var count = goodsObj[item.goodsId];
			goodsObj[item.goodsId]= count + item.count;//如果存在,就追加
		}
	}
	// console.log(goodsObj);
	return goodsObj;
}
// 导出更新购物车中商品数量的方法:
export function updateData(obj){
	var  arr = getItem(); //获取当前本地存储中的数据
	var count =1; //每次操作的数量;
	if(obj.type=="add"){
		arr.push({"goodsId":obj.goodsId,"count":count});//商品数据+1
	}else{//商品数量-1
		for(var i =0 ;i<arr.length;i++){//遍历当前数组
			if(arr[i].goodsId==obj.goodsId){//找到要修改的值
				if(arr[i].count>1){//如果当前数组中要找的商品的数量大于1,则直接将当前商品数量-1,否则移除该对象
					arr[i].count--;
				}else{
					arr.splice(i,1);
					break;
				}
			}
		}
	}
	//将最新修改过arr保存到本地存储
	localStorage.setItem(key,JSON.stringify(arr));
}

// 导出删除本地存储数据的方法
export function removeItem(id){
	var arr = getItem();
	for(var i =arr.length-1;i>0;i--){
		if(arr[i].goodsId==id){
			arr.splice(i,1);
		}
	}
	localStorage.setItem(key,JSON.stringify(arr));
}
