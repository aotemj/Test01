<template>
	<div id="temp">
		<!-- 新闻列表组件 (mui)-->
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newsList">
				<router-link v-bind="{to:'/news/newsInfo/'+item.id}">
					<img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis'>{{item.zhaiyao}}</p>
						<!-- 添加时间 点击次数-->
						<span class="addTime">添加时间:{{item.add_time|dateformat("YYYY-MM-DD HH:mm:ss")}}</span><span class="clickCount">阅读次数:{{item.click}}</span>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
/*引入公共接口前缀*/
import common from "../../kits/common.js";

	export default{
		data(){
			return {
				newsList:[]
			}
		},
		created(){
			this.getNews();
		},
		methods:{
			getNews(){
				var url = common.apidomain+"/api/getnewslist";
				this.$http.get(url).then(function(response){
					console.log(response.body);
					this.newsList = response.body.message;
				});
			},
		}
	}
</script>
<style scoped>
/* 覆盖图片样式 */
.mui-table-view .mui-media-object{
	width:80px;
	height:80px;
	max-width: 80px;
}
/* 覆盖摘要样式 */
.mui-ellipsis{
	line-height: 40px;
}
	/*添加时间,点击次数样式*/
.addTime,.clickCount{
	color:skyblue;
	font-size: 14px;
	margin-right:40px;
}
</style>
