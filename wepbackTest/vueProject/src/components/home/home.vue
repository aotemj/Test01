<template>
	<div id="temp">
		<!-- 轮播图实现(mint-ui) -->
		<!-- <mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in imgList">
		  	<img v-bind:src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe> -->
		<swipe v-bind:imgs="imgList"></swipe>

		<!-- 9宫格实现(mui) -->
		<div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          	<router-link to="/news/newsList">
              <span class="mui-icon iconfont icon-xinwenliebiao"></span>
              <div class="mui-media-body">新闻列表</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          	<router-link to="/photos/photosList">
	            <span class="mui-icon iconfont icon-tupian"></span>
	            <div class="mui-media-body">图片分享</div>
          	</router-link>
       	 	</li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          	<router-link to="/goods/goodsList">
	            <span class="mui-icon iconfont icon-goumai"></span>
	            <div class="mui-media-body">商品购买</div>
          	</router-link>
        	</li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          	<router-link to="/">
	            <span class="mui-icon iconfont icon-liuyanfankui"></span>
	            <div class="mui-media-body">留言反馈</div>
          	</router-link>
        	</li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          	<router-link to="/">
	            <span class="mui-icon iconfont icon-shipin"></span>
	            <div class="mui-media-body">视频专区</div>
          	</router-link>
        	</li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          	<router-link to="/">
	            <span class="mui-icon iconfont icon-lianxiwomen"></span>
	            <div class="mui-media-body">联系我们</div>
          	</router-link>
        	</li>
      </ul>
		</div>
	</div>
</template>
<script>
/*引入swipe子组件*/
import swipe from "../subcom/swipe.vue";
	export default{
		data(){
			return {
				imgList:[]//轮播图列表,
			}
		},
		methods:{
			getImgs(){
				var url = 'http://vue.studyit.io/api/getlunbo';
				this.$http.get(url).then(function(response){
					/*错误处理*/
					if(response.body.status!=0){
						Toast(response.body.message);
					}
					console.log(response.body);
					this.imgList = response.body.message;
				});
			}
		},
		created(){
			this.getImgs();
		},
		components:{
			swipe
		}
	}
</script>
<style scoped>
	.mint-swipe, .mint-swipe-items-wrap{
		height:300px;
	}
	/* 轮播图图片样式 */
.mint-swipe, .mint-swipe-items-wrap img{
	width:100%;
	height:300px;
}
/*覆盖9宫格样式*/
.mui-grid-view.mui-grid-9 .mui-media .mui-icon{
	color:#26a2ff;
}

/* .mui-icon-home:before{
	background-image: url(../../../statics/imgs/1.png);
}
.mui-icon-email:before{
	background-image: url(../../../statics/imgs/2.png);
}
.mui-icon-chatbubble:before{
	background-image: url(../../../statics/imgs/3.png);
}
.mui-icon-location:before{
	background-image: url(../../../statics/imgs/4.png);
}
.mui-icon-search:before{
	background-image: url(../../../statics/imgs/5.png);
}
.mui-icon-phone:before{
	background-image: url(../../../statics/imgs/6.png);
} */
</style>
