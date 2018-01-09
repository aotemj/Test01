<!-- 首页模板 -->
<template >
	<div id="temp">
		<div>
			<!-- 通过mint-ui 构建主页轮播图 -->
			<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="item in imgList">
					<img v-bind:src="item.img" alt="">
			  </mt-swipe-item>
			</mt-swipe>
			<!-- 通过mui 9宫格实现首页布局 -->
			<div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<router-link to="/news/newsList">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻列表</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<router-link to="/news/newsList">
                <span class="mui-icon mui-icon-email"></span>
                <div class="mui-media-body">图片分享</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<router-link to="/news/newsList">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">商品购买</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<router-link to="/news/newsList">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">留言反馈</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<router-link to="/news/newsList">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">视频专区</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<router-link to="/news/newsList">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div>
              </router-link>
            </li>
        </ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {

				imgList:[
				// 假轮播数据, 真数据需要从轮播接口获取
					/*{
					"url": "http://www.itcast.cn/subject/phoneweb/index.html",
					"img": "http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg"
					},
					{
					"url": "http://www.itcast.cn/subject/phoneweb/index.html",
					"img": "http://ofv795nmp.bkt.clouddn.com/vuelogobanner2-1.jpg"
					}*/
				]
			}
		},
		created(){
			/*在created 声明周期时重新执行getImg方法*/
			this.getImgs();
		},
		methods:{
			getImgs(){
				var url ="http://vue.studyit.io/api/getlunbo";
				this.$http.get(url).then(function(response){
					/*错误处理*/
					if(response.body.status!=0){
						alert(response.body.message);
						return;
					}
					/*如果状态正常,将数据赋值给imgList*/
					this.imgList = response.body.message;
				});
			}
		}
	}
</script>
<style scoped>
/* 覆盖轮播图样式 */
	.mint-swipe-items-wrap{
		height:300px;
	}
	.mint-swipe{
		height:300px;
	}
	.mint-swipe-item img{
		height:300px;
		width:100%;
	}

	/* 覆盖9宫格图片样式 */
	/*设置边框底色*/
	.mui-grid-view.mui-grid-9{
		background-color: #fff;
	}
	/* 清除li标签边框 */
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border:none;
	}
	.mui-icon-home:before,
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before{
			content:"";
			display:inline-block;
			width:50px;
			height:50px;
			background-repeat:round;
	}
	.mui-icon-home:before{
		background-image: url("../../../statics/imgs/1.png");
	}
	.mui-icon-email:before{
		background-image: url("../../../statics/imgs/2.png");
	}
	.mui-icon-chatbubble:before{
		background-image: url("../../../statics/imgs/3.png");
	}
	.mui-icon-location:before{
		background-image: url("../../../statics/imgs/4.png");
	}
	.mui-icon-search:before{
		background-image: url("../../../statics/imgs/5.png");
	}
	.mui-icon-phone:before{
		background-image: url("../../../statics/imgs/6.png");
	}

</style>
