<template>
	<div>
		<!-- <div>轮播图子组件</div> -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in imgs">
		  	<img v-bind:src="item.img" v-if="item.img">
		  	<img v-bind:src="item.src" v-else>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
/*引入接口公共前缀*/
import common from "../../kits/common.js";
	export default{
		props:["imgs"],
		data(){
			return {}
		},
		created(){
			// this.id=this.$route.params.id;
		},
		methods:{
			// getGoodsImgs(){//获取商品图片
			// 	var url = common.apidomain+"/api/getthumimages/"+this.id;
			// 	this.$http.get(url).then(function(response){
			// 		// console.log(response.body);
			// 		this.goodsImgList=response.body.message;
			// 	});
			// }
		}
	}
</script>
<style scoped>
	.mint-swipe, .mint-swipe-items-wrap{
		height:300px;
	}
	/* 轮播图图片样式 */
.mint-swipe, .mint-swipe-items-wrap img{
	width:100%;
	height:300px;
}
</style>
