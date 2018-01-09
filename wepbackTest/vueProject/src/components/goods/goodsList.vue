<template>
	<div id="temp">
		<!-- 商品列表 -->
		<div class="goodsList">
			<div class="mui-content" style="background-color:#fff">
		    <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in goodsList">
	            <div class="goodsBox">
		            <router-link v-bind="{to:'/goods/goodsInfo/'+item.id}">
	                <img class="mui-media-object" v-bind:src="item.img_url" height="119" width="120">
	                <!-- 商品详情 -->
	                <div class="details">
	                	<p class="desc" v-text="item.title">商品描述</p>
										<!-- 现价 原价-->
	                	<span class="">现价:&yen;{{item.sell_price}}</span><span class="">原价:&yen;{{item.market_price}}</span><br>
										<!-- 商品状态 -->
										<span class="hot">热卖中</span><span class="stock">剩{{item.stock_quantity}}件</span>
	                </div>
	              </router-link>
	            </div>
            </li>
		    </ul>
			</div>
		</div>
	</div>
</template>
<script>
/*引入接口公共前缀*/
import common from "../../kits/common.js";
	export default{
		data(){
			return {
				goodsList:[]
			}
		},
		created(){
			this.getGoods(1);
		},
		methods:{
			getGoods(pageIndex){
				pageIndex=pageIndex||1;
				var url =common.apidomain+"/api/getgoods?pageindex="+pageIndex;
				this.$http.get(url).then(function(response){
					// console.log(response.body);
					this.goodsList=response.body.message;
				});
			}
		}
	}
</script>
<style scoped>
	/*单个商品容器*/
	.goodsBox{
		padding:5px;
	}
	.goodsBox a{
		display:block;

	}
	/*商品描述*/
	.desc{
		white-space: nowrap;

		text-align: left;
		margin:10px 0;
		font-size: 16px;
	}
	.details{
		padding-bottom:25px;
		line-height: 30px;
		text-overflow: ellipsis;
	}
	.details span{
		color:gray;
		font-size: 14px;
	}
	/*现价*/
	.details span:first-of-type{
		color:red;
	}
	/*原价*/
	.details span:nth-of-type(2){
		text-decoration:line-through;
	}
	.details span:nth-of-type(2n){
		float: right;
		margin-right:5px;
	}
	.details span:nth-of-type(2n+1){
		float: left;
		margin-left:5px;
	}
	/* 重置ul样式 */
	.mui-table-view.mui-grid-view{
		padding:0;
	}
	/* 重置ul 中li的样式 */
	.mui-table-view.mui-grid-view li{
		border-bottom:1px solid gray;
		border-right:1px solid gray;
	}
	.mui-table-view.mui-grid-view li:nth-of-type(2n){
		border-right:none;
	}
	.mui-table-view.mui-grid-view .mui-table-view-cell{
		padding:0;
		margin:0;
	}
</style>
