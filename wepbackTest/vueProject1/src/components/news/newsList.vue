<!-- 新闻列表 -->
<template >
	<div id="temp">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in list">
				<router-link v-bind="{to:'/news/newsInfo/'+item.id}">
					<img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis'>{{item.zhaiyao}}</p>
						<!-- 发表时间 -->
						<div class="createdTime"><span>发表时间:{{item.add_time|dateformat("YYYY-MM-DD HH:mm:ss") }}</span> <span>阅读次数:{{item.click}}</span></div>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
/*引入公用接口地址*/
import common from "../../kits/common.js";

export default {
	data(){
		return {
			list:[

			]
		}
	},
	created(){
		this.getNews();
	},
	methods:{
		getNews(){
			var url =common.apidomain+"/api/getnewslist";
			this.$http.get(url).then(function(response){
				this.list = response.body.message;
			});
		},

	}
}
</script>

<style lang="css">
/*覆盖图片样式*/
.mui-table-view .mui-media-object{
	width:80px;
	height:80px;
	min-width:80px;
}
/*覆盖发表文字样式*/
.createdTime{
	font-size: 14px;
	color:skyblue;
	line-height: 1.5em;
	margin-top:1.5em;
}
</style>
