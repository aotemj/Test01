<template>
	<div id="temp">
		<!-- 商品详情 -->
		<div>
			<h4 v-text="goodsDesc.title"></h4>
			<hr>
			<div class="content" v-html="goodsDesc.content"></div>
		</div>
	</div>
</template>
<script>
/*引入接口公共前缀*/
import common from "../../kits/common.js";
	export default {
		data(){
			return {
				id:0,
				goodsDesc:[]
			}
		},
		created(){
			this.id = this.$route.params.id;
			this.getGoodsDesc();
		},
		methods:{
			getGoodsDesc(){
				var url =common.apidomain+"/api/goods/getdesc/"+this.id;
				this.$http.get(url).then(function(response){
					console.log(response.body);
					this.goodsDesc=response.body.message[0];
				});
			}
		}
	}
</script>
<style scoped>
h4{
	color:#26a2ff;
}
	.content{
		padding:10px;
	}
</style>
