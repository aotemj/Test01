<template>
	<div id="temp">
		<!-- 新闻详情页 -->
		<!-- 标题 -->
		<h3>{{info.title}}</h3>
		<!-- 添加时间 -->
		<span class="addTime">发布时间:{{info.add_time|dateformat("YYYY-MM-DD HH:mm:ss")}}</span>
		<!-- 点击次数 -->
		<span class="clickCount">点击次数:{{info.click}}</span>
		<div v-html="info.content"></div>


		<!-- 评论子组件 -->
		<comment v-bind:id="id">{{id}}</comment>
	</div>
</template>
<script>
/*引入公共接口前缀*/
import common from "../../kits/common.js";
/*引入评论子组件*/
import comment from "../subcom/comment.vue";
	export default{
		data(){
			return {
				id:0,
				info:[]
			}
		},
		created(){
			this.id = this.$route.params.id;
			this.getInfo();
		},
		methods:{
			getInfo(){
				var url =common.apidomain+"/api/getnew/"+this.id;
				this.$http.get(url).then(function(response){
					this.info = response.body.message[0];
				});
			}
		},
		components:{
			comment//注册子组件
		}
	}
</script>
<style scoped>
	#temp{
		padding:10px;
	}
	h3{
		color:#26a2ff;
		line-height: 30px;
	}
	/* 覆盖点击次数 添加时间样式 */
	.addTime,.clickCount{
		color:gray;
		font-size: 14px;
		margin-right:40px;
		margin-bottom:20px;
		display:inline-block;
	}
</style>
