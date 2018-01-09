<template>
	<div class="comment">
		<div>
			<!-- 评论组件 -->
			<h4>提交评论</h4>
			<hr>
			<textarea placeholder="请输入评论内容" v-model.trim="content"></textarea>
			<mt-button type="primary" size="large" v-on:click="sendComment">发表评论</mt-button>
		</div>
		<!-- 评论列表 -->
		<div class="commentList">
			<h4>评论列表</h4>
			<ul>
				<li v-for="(item,index) in commentList">
						<div class="content">
							{{item.content}}
						</div>
						<div class="info">
							<span>第{{index+1}}楼</span> <span>{{item.user_name}}</span><span>{{item.add_time|dateformat("YYYY-MM-DD HH:mm:ss")}}</span>
						</div>

				</li>
				<!-- 查看更多 -->
				<mt-button type="primary" size="large" v-on:click="getMore" v-text="more"></mt-button>
			</ul>
		</div>
	</div>
</template>
<script>
/*引入公共接口前缀*/
import common from "../../kits/common.js";

import { Toast } from 'mint-ui';
	export default{
		props:["id"],//父组件向子组件传值
		data(){
			return {
				content:'',
				commentList:[],
				pageIndex:1,
				more:"查看更多"
			}
		},
		created(){
			this.getComment();
		},
		methods:{
			/*发表评论*/
			sendComment(){
				if(this.content==""){
					Toast("请输入内容后提交");
					return;
				}
				var url = common.apidomain+"/api/postcomment/"+this.id;
				this.$http.post(url,{content:this.content},{emulateJSON:true}).then(function(response){
						Toast(response.body.message);
					this.commentList=	[{
							user_name:"匿名用户",
							add_time:new Date(),
							content:this.content
						}].concat(this.commentList);
						this.content='';
						this.getComment(1);
				});
			},
			/*获取评论*/
			getComment(pageIndex){
				pageIndex=pageIndex||1;
				var url =common.apidomain+"/api/getcomments/"+this.id+"?pageindex="+pageIndex;
				this.$http.get(url).then(function(response){
					this.commentList=this.commentList.concat(response.body.message);
					if(response.body.message.length<10){
						this.more="没有新数据可以加载"
					}
				});
			},
			/*加载更多*/
			getMore(){
				this.pageIndex++;
				this.getComment();
			}
		}
	}
</script>
<style scoped>
ul{
	list-style:none;
	padding:0;
}
li{
	/*border:1px solid red;*/
	margin-bottom:10px;
}
	.comment{
	}
	h4{
		color:#26a2ff;
		margin-top:20px;
	}
	/*评论信息*/
	.info{
		font-size: 14px;
		color:gray;
	}
	.info span{
		margin-right:20px;
	}
	.content{
		padding:10px;
		background-color: gray;
		color:#fff;
	}
</style>
