<template>
	<div id="temp">
		<!-- 商品详情页 -->
		<div class="info">
			<!-- 商品详情轮播图 (mint-ui,子组件swipe)-->
			<swipe v-bind:imgs="goodsImgList"></swipe>

			<!-- 详情描述 -->
			<div class="desc">
					<h4 v-text="desc.title"></h4>
					<hr>
					<p>市场价:<span class="marketPrice">&yen;{{goodsInfo.market_price}}</span>销售价:<span class="salePrice">&yen;{{goodsInfo.sell_price}}</span></p>
					<p>购买数量: <inputNumber v-on:sendToParent="getNumber"></inputNumber></p>
					<!-- 购物车小球 -->
					<transition name="show"
						v-on:before-enter="beforeEnter"
						v-on:enter="enter"
						v-on:after-enter="afterEnter"
					>
						<div class="ball" v-show="isShow" v-text="number"></div>
					</transition>
					<router-link to="/shopCar/car"><mt-button type="primary" size="small" >立即购买</mt-button></router-link>
					<mt-button type="danger" size="small" v-on:click="addToShopCar" >加入购物车</mt-button>
			</div>
			<div class="params">
				<h5>商品参数</h5>
				<hr>
				<p>商品货号:{{goodsInfo.goods_no}}</p>
				<p>库存情况:剩余 {{goodsInfo.stock_quantity}}</p>
				<p>上架时间:{{goodsInfo.add_time|dateformat("YYYY-MM-DD HH:mm:ss")}}</p>

			</div>
			<div class="comment">
				<router-link v-bind="{to:'/goods/goodsDesc/'+id}"><mt-button  type="primary" size="large">图文详情</mt-button></router-link>
				<router-link v-bind="{to:'/goods/goodsComment/'+id}"><mt-button type="danger" size="large">商品评论</mt-button></router-link>
			</div>

		</div>
	</div>
</template>
<script>
	/*引入接口公共前缀*/
	import common from "../../kits/common.js";

	/*引入swipe子组件(轮播)*/
	import swipe from "../subcom/swipe.vue";

	/*引入商品数量组件*/
	import inputNumber from "../subcom/inputNumber.vue";

	/*引入空vue对象*/
	import {vm} from "../../kits/vm.js";

	/*按需引入localSg.js(本地存储)中的方法*/
	import {setItem,valueObj} from "../../kits/localSg.js";

	export default{
		data(){
			return {
				id:0,
				desc:[],
				goodsImgList:[],
				goodsInfo:[],
				number:1,//商品数量子组件传来的值
				isShow:false
			}
		},
		created(){
			this.id = this.$route.params.id;
			this.getGoodsDesc();//获取商品描述
			this.getGoodsImgs();//获取商品图片
			this.getGoodsInfo();//获取商品参数和价格
		},
		methods:{
			getGoodsDesc(){//获取商品描述
				var url = common.apidomain+"/api/goods/getdesc/"+this.id;
				this.$http.get(url).then(function(response){
					this.desc=response.body.message[0];
				});
			},
			getGoodsImgs(){//获取商品图片
				var url = common.apidomain+"/api/getthumimages/"+this.id;
				this.$http.get(url).then(function(response){
					// console.log(response.body);
					this.goodsImgList=response.body.message;
				});
			},
			//获取商品参数和价格
			getGoodsInfo(){
				var url = common.apidomain+"/api/goods/getinfo/"+this.id;
				this.$http.get(url).then(function(response){
					this.goodsInfo=response.body.message[0];
				});
			},
			//获取子组件传来的购物车商品数量
			getNumber(count){
				this.number=count;
			},
			addToShopCar(){
				vm.$emit("badgeNumber",this.number);//将当前购物车的数据传递给app.vue(非父子组件传值);
				valueObj.goodsId=this.id;
				valueObj.count = this.number;
				setItem(valueObj);//将当前购物车中商品的数量存储到localStorage
				this.isShow=!this.isShow;
			},
			// 小球动画函数:
			beforeEnter(el){
				el.style.transform="translate(00px,100px)";
			},
			enter(el,done){
				el.offsetWidth;
				el.style.transform="translate(000px,300px)";
				done();
			},
			afterEnter(el){
				this.isShow=!this.isShow;
			}
		},
		components:{
			swipe,
			inputNumber
		}
	}
</script>
<style scoped>
	.mint-swipe,.mint-swipe-items-wrap{
		height:300px;
	}
	/* 轮播图图片样式 */
.mint-swipe, .mint-swipe-items-wrap img{
	width:100%;
	height:300px;
}
/*详情页*/
.desc,.params,.comment{
	padding:5px;
	border:1px solid gray;
	margin-bottom:5px;
	border-radius:5px;
}
.desc p span {
	margin-right:20px;
}
/*市场价*/
.marketPrice{
	text-decoration: line-through;
}
/*销售价*/
.salePrice{
	color:red;
}
h4{
	color:#26a2ff;
}
.mint-button--large{
	margin-bottom:5px;
}
/*购物车小球*/
.desc{
	position:relative;
}
.ball{
	width:18px;
	height:18px;
	border-radius: 50%;
	background-color: red;
	position:fixed;
	z-index: 999;
	left:109px;
	top:79px;
	transition:all 1s ease;
	color:#fff;
	text-align: center;
}


</style>
