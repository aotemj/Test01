<template>
	<div id="temp">
		<!-- 购物车组件 -->
		<ul>
			<li v-for="(item,index) in goodsList" class="clearfix liBox">
				<div class="subGoods clearfix">
					<!-- 是否结算 -->
					<div class="fl chooseBox">
						<mt-switch v-model="value[index]" class="chooseBtn"></mt-switch>
					</div>
					<!-- 缩略图 -->
					<div class="img fl">
						<img v-bind:src="item.thumb_path" alt="">
					</div>
					<div class="desc fl">
						<h4>{{item.title}}</h4>
						<span class="sellPrice">&yen;{{item.sell_price}}</span>
						<div class="number"><carInputNumber :goodsId="item.id" :initCount="item.cou"  v-on:sendCarData="getInputNumber"></carInputNumber></div>
						<a href="javascript:;" class="del" v-on:click="del(item.id,index)">删除</a>
					</div>
				</div>
			</li>
			<li>
				<div class="total">
						<div class="count">
							<h5><strong>总计(不含运费)</strong></h5>
							<p>已勾选商品<span>{{totalCount}}</span>件,总计<span>&yen;{{totalPrice}}</span>元</p>
						</div>
						<div class="payBtn">
							<button  class="mint-button mint-button--danger ">去结算</button>
						</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
/*引入提示框样式*/
import { Toast } from 'mint-ui';

/*引入接口公共前缀*/
import common from "../../kits/common.js";
/*引入inputNubmer组件*/
import carInputNumber from "../subcom/carInputNumber.vue";
/*引入本地存储*/
import {getGoodsList,updateData,removeItem} from "../../kits/localSg.js";
	export default {
		data(){
			return {
				value:[],//当前要购买的商品是否结算
				goodsList:[],//存放要购买的商品
				// totalCount:0,//已勾选商品总数量
				totalPrice:0//已勾选商品总价格
		}
	},
		created(){
			this.getGoods();
		},
		computed:{
			totalCount(){
				var trueValue =this.value.filter(function(item){return item});
				var amount  = 0;
				this.value.forEach((item,index)=>{
					if(item){
						var price = this.goodsList[index].sell_price;//获取当前商品的单价
						var count = this.goodsList[index].cou;//获取当前商品的总数量
						var itemAmount=price*count;
						amount +=itemAmount;
					}

				});
				this.totalPrice = amount;
				return trueValue.length;
			}
		},
		methods:{
			getGoods(){
				var payObj = getGoodsList();//获取从localstorage中获取到的商品id和数量的对象
				var str="";
				for(var k in payObj){//遍历对象,把商品id拼接成字符串
					str= str+k+",";
				};
				str = str.substr(0,str.length-1);//去除最后一个逗号
				// console.log(str);
				// 请求ajax
				// console.log(str);
				// console.log("111");
				var url = common.apidomain+"/api/goods/getshopcarlist/"+str;
				this.$http.get(url).then(function(response){
					// console.log(response.body);
					if(response.body.status!=0){
						Toast(response.body.message);
						return;
					}
					response.body.message.forEach((item)=>{
						item.cou=payObj[item.id];//遍历请求的数据,并把本地存储的数量覆盖默认的数量
						this.value.push(false);
					});
					this.goodsList=response.body.message;
					// console.log(this.goodsList);
				});

			},
			del(id,index){//点击删除当前数据
				this.value.splice(index,1);
				this.goodsList.splice(index,1);
				removeItem(id);
			},
			getInputNumber(resObj){//通过carInputNumber组件传来的值更新当前localStorage中的数据
				updateData(resObj);//更新本地存储中的数据
				//更新当前页面中goodsList中的数据
				for(var i =0;i<this.goodsList.length;i++){
					if(this.goodsList[i].goodsId==resObj.goodsId){
						if(resObj.type=="add"){
							this.goodsList[i].cou++;
						}else{
							this.goodsList[i].cou--;
						}
						break;
					}
				}

			}
		},
		components:{
			carInputNumber
		}
	}
</script>
<style scoped>
	/*购物车子项*/
	.liBox{
		margin-bottom: 5px;
		background-color: #fff;
	}
	.subGoods{
		height:100px;
		border:1px solid gray;
		line-height: 60px;
		display:flex;
	}
	/*是否结算按钮*/
	.chooseBox{
		height:100px;
	}
	.chooseBtn{
		display:inline-block;
		height:100px;
		line-height: 120px;
		/*flex:0 0 ;*/
	}
	/*缩略图*/
	.img{
		width:80px;
		/*background-color: red;*/
		height: 99px;
		padding:5px;
		flex:0 0 75px;
	}
	.img img{
		width:100%;
		margin-top:10px;
	}
	/*商品描述*/
	.desc{
		flex:1;
		padding-top:5px;
		padding-left:5px;
	}
	.sellPrice{
		color:red;
		margin-right:10px;
	}
	/*商品名称*/
	h4{
		margin:0;
		padding:0;
		color:#26a2ff;
	}
	/*商品数量*/
	.number{
		line-height: 20px;
		display:inline-block;
		margin-right:10px;
	}
	/*去结算*/
	.total{
		height:100px;
		background-color: rgba(0,0,0,.2);
		display:flex;
		padding:5px;
		line-height: 50px;
	}
	h5{
		color:#000;
	}
	.count{
		flex:3;
		height:100%;
		/*background-color: yellow;*/
	}
	.payBtn{

		height:100px;
		padding-top:25px;
	}
</style>
