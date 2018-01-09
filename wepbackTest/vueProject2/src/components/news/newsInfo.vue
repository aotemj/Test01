<template>
	<div id="temp">
		<!-- 新闻详情页 -->
		<div>
			<!-- 标题 -->
			<h4>{{info.title}}</h4>
			<!-- 添加时间 阅读此时 -->
			<span class="addTime">添加时间:{{info.add_time}}</span><span class="clickCount">阅读次数:{{info.click}}</span>
			<div class="content" v-html="info.content"></div>
		</div>

		<!-- 评论组件 -->
		<comment v-bind:id="id"></comment>
	</div>
</template>
<script>
/*引入公共接口前缀*/
import common from "../../kits/commen.js";

/*引入评论组件*/
import comment from "../subcom/comment.vue";

/*引入mui样式*/
import { Toast } from 'mint-ui';
	export default{
		data(){
			return {
				id:0,
				info:[]
			}
		},
		created(){
			this.id = this.$route.params.id;
			this.getNews();
		},
		methods:{
			getNews(){
				var url =common.apidomain+"/api/getnew/"+this.id;
				this.$http.get(url).then(function(response){
					console.log(response.body);
					if(response.body.status!=0){
						Toast(response.body.message);
					}
					this.info=response.body.message[0];
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
	color:#26a2ff;
}
.addTime,.clickCount{
	font-size: 14px;
	margin-right:30px;
	color:gray;
}
.content{
	margin-top:10px;
}
</style>
