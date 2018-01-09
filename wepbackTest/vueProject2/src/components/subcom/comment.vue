<template>
	<div>
		<!-- 评论组件 -->
		<div class="addComment">
			<h4>发表评论</h4>
			<hr>
			<textarea v-model.trim="content"></textarea>
			<mt-button type="primary" size="large" v-on:click="sendComment">发表评论</mt-button>
		</div>

	<!-- 评论列表 -->
	<div class="commentList">
		<h4>评论列表</h4>
		<ul>
			<li v-for="item in commentList">
					<div>
						{{item.content}}
					</div>
			</li>
		</ul>
	</div>
	</div>
</template>
<script>
/*引入接口公共前缀*/
import common from "../../kits/commen.js";

/*引入mui控件*/
import { Toast } from 'mint-ui';

	export default{
		props:["id"],
		data(){
			return {
				content:"",
				commentList:[],
				pageIndex:1,
			}
		},
		created(){
			this.getComment(1);
		},
		methods:{
			sendComment(){
				if(this.content==""){
					Toast("请输入评论信息");
					return;
				}
				var url =common.apidomain+"/api/postcomment/"+this.id;
				this.$http.post(url,{content:this.content},{emulateJSON:true}).then(function(response){
					Toast(response.body.message);
					this.content="";
				});
			},
			getComment(pageIndex){
				pageIndex = pageIndex||1;
				var url = common.apidomain+"/api/getcomments/"+this.id+"?pageindex="+pageIndex;
				this.$http.get(url).then(function(response){
					console.log(response.body.message);
					this.commentList=this.commentList.concat(response.body.message);
				});
			}
		}
	}
</script>
<style scoped>
	ul{
		padding:0;
		margin:0;
		list-style:none;
	}
</style>
