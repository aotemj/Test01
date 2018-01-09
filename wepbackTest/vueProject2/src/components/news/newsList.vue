<template>
	<div id="temp">
		<!-- 使用mui图文列表完成新闻列表 -->
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList">
					<router-link v-bind="{to:'/news/newsInfo/'+item.id}">
						<img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
						<div class="mui-media-body">
							<span class="abstract" v-text="item.zhaiyao"></span>
							<p class='mui-ellipsis' v-text="item.zhaiyao"></p>
							<div>
								<span class="addTime">添加时间 : {{item.add_time|dateformat('YYYY-MM-DD HH:mm:ss')}}</span><span class="clickCount" v-text="'阅读次数 : '+item.click"></span>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				newsList:[
				]
			}
		},
		created(){
			this.getNews();
		},
		methods:{
			/*获取新闻方法*/
			getNews(){
				var url ="http://vue.studyit.io/api/getnewslist";
				this.$http.get(url).then(function(response){
					/*错误处理*/
					if(response.body.status!=0){
						alert(response.body.message);
						return;
					}
					this.newsList=response.body.message;
				});
			}
		}
	}
</script>
<style scoped>
/*重写样式*/
.mui-table-view .mui-media-object{
	max-width: 80px;
	width:80px;
	height:80px;
}
/* 摘要 */
.abstract{
	line-height: 30px;
}
/* 添加时间 */
.addTime,.clickCount{
	line-height: 40px;
	font-size: 14px;
	color:skyblue;
	margin-right:50px;
}
</style>
