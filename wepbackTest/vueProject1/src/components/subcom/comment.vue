<!-- 评论组件 -->
<template>
	<div>
			<h4>提交评论</h4>
			<hr>
			<textarea placeholder="请输入评论内容" v-model="content"></textarea>
			<mt-button type="primary" size="large" v-on:click="sendComment" >发表</mt-button>

			<!-- 显示评论 -->
			<!-- 2.0实现获取评论数据列表 -->
			<div class="list">
			    <h4>评论列表</h4>
			    <p class="p"></p>
			    <div v-for="(item, index) in commentList" class="title">
			        <div class="title">
			            <span>第{{index + 1}}楼</span>
			            <span>用户:{{item.user_name}}</span>
			            <span>发表时间:{{item.add_time | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
			        </div>
			        <ul class="mui-table-view">
			            <li v-text="item.content" class="mui-table-view-cell"></li>
			        </ul>
			    </div>
			    <mt-button type="primary" size="large" v-on:click="getMore" v-text="more"></mt-button>
			</div>

	</div>
</template>
<script>
/*引入公共接口头*/
import common from "../../kits/common.js";
	export default{
		props:["id"],
		data(){
			return {
				content:"",
				commentList:[],
				pageIndex:1,
				more:"加载更多"
			}
		},
		created(){
			this.getComment();
		},
		methods:{
			sendComment(){
				var url = common.apidomain+'/api/postcomment/'+this.id;
				this.$http.post(url,{content:this.content},{emulateJSON:true}).then(function(response){
						alert(response.body.message);
						this.getComment(1);
				});
			},
			getComment(pageIndex){
				pageIndex=pageIndex||1;
				var url = common.apidomain+"/api/getcomments/"+this.id+"?pageindex="+pageIndex;
				this.$http.get(url).then(function(response){
					this.commentList =this.commentList.concat(response.body.message);
					if(response.body.message.length<10){
						this.more="无更多数据";
					}
				});
			},
			getMore(){//加载更多
				this.pageIndex++;
				this.getComment(this.pageIndex);
			}
		}
	}
</script>
<style scoped>
/*2.0 评论列表的样式*/
.list{
    padding: 5px;
}
.title{
    padding: 5px;
    color: #6d6d72;
    font-size: 15px;
    background-color: rgba(0,0,0,0.1);
}
</style>
