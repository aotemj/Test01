<template>
	<div id="temp">
		<!-- 图片详情 -->
		<div class="info">
			<h4 v-text="info.title"></h4>
			<!-- 发表时间  点击次数 -->
			<span class="addTime" >发表时间:{{info.add_time|dateformat("YYYY-MM-DD HH:mm:ss")}}</span><span class="clickCount" >阅读次数:{{info.click}}</span>

			<!-- 图片(mui9宫格) -->
			<div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in thumbnail">
            	<!-- <a href="#"> -->
               <img class="preview-img" v-bind:src="item.src" v-on:click="$preview.open(index, thumbnail)">
              <!-- </a> -->
            </li>
        </ul>
			</div>

			<!-- 介绍内容 -->
			<div class="content" v-html="info.content"></div>
		</div>

		<!-- 评论组件 -->
		<comment v-bind:id="id"></comment>
	</div>
</template>
<script>
/*引入接口公共前缀*/
import common from "../../kits/common.js";

/*引入评论组件*/
import comment from "../subcom/comment.vue";

	export default{
		data(){
			return {
				id:0,
				info:[],
				thumbnail:[]
			}
		},
		created(){
			this.id = this.$route.params.id;
			this.getImgInfo();
			this.getThumbnail();
		},
		methods:{
			getImgInfo(){
				var url=common.apidomain+"/api/getimageInfo/"+this.id;
				this.$http.get(url).then(function(response){
					console.log(response.body.message[0]);
					this.info=response.body.message[0];
				});
			},
			// 获取缩略图
			getThumbnail(){
				var url=common.apidomain+"/api/getthumimages/"+this.id;
				this.$http.get(url).then(function(response){
					console.log(response.body.message);
					response.body.message.forEach(function(v,i){
						var img = new Image();
						img.src = v.src;
						img.onload=function(){//此处必须等待图片加载出来后进行宽高的赋值
							v.w=img.width;
							v.h=img.height;
						}
					})
					this.thumbnail=response.body.message;
				});
			}
		},
		components:{
			comment
		}
	}
</script>
<style scoped>
	.info {
		padding:5px;
	}
	.info h4{
		line-height: 25px;
		color:#26a2ff;
	}
	.info span{
		margin-right:40px;
		font-size: 14px;
		color:gray;
	}
	/* 缩约图 */
	.mui-content img{
		width:100px;
		height:100px;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		padding-top:0;
		padding-bottom:0;
	}
	.content{
		font-size: 16px;
		text-indent: 2rem;
		line-height: 25px;
	}
</style>
