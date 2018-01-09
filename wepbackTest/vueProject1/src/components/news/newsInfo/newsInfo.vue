<!-- 新闻详情页 -->
<template>
	<div id="temp">
		<!-- 新闻详情页 -->
		<!-- 标题 -->
		<h4 v-text="info.title"></h4>
		<!-- 添加时间 -->
		<span class="addTime">{{info.add_time|dateformat('YYYY-MM-DD')}}</span>
		<!-- 阅读次数 -->
		<span class="click">{{info.click}} 次阅读</span>
		<!-- 内容 -->
		<div v-html="info.content"></div>
		<!-- 评论组件 -->
			<comment v-bind:id="id"></comment>
		<!-- 获取评论id -->
		<div>

		</div>
	</div>
</template>
<script>
/*引入公共接口地址*/
import common from "../../../kits/common.js";

/*引入子组件*/
import comment from "../../subcom/comment.vue";

	export default{
		data(){
			return {
				id:0,
				info:{}
			}
		},
		created(){
			this.id=this.$route.params.id;
			this.getNew();

		},
		methods:{
			getNew(){
				var url = common.apidomain+"/api/getnew/"+this.id;
				this.$http.get(url).then(function(response){
						console.log(response.body);
						this.info =response.body.message[0];
				});
			}


	},
	components:{
		comment//注册评论组件
	}
}
</script>
<style scoped>
	#temp{
		padding:10px;
	}
	h4{
		margin-bottom:15px;
		color:skyblue;
	}
	.addTime,.click{
		display:inline-block;
		color:gray;
		margin-right:30px;
		margin-bottom:10px;
		font-size: 14px;
	}
</style>
