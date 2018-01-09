<template>
  <div id="temp">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list">
        <img v-bind:src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/news/newsList">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻列表</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/photos/photosList">
              <span class="mui-icon mui-icon-email"></span>
              <div class="mui-media-body">图片分享</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/goods/goodsList">
                  <span class="mui-icon mui-icon-chatbubble"></span>
                  <div class="mui-media-body">商品购买</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/message">
              <span class="mui-icon mui-icon-location"></span>
              <div class="mui-media-body">留言反馈</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/video">
              <span class="mui-icon mui-icon-search"></span>
              <div class="mui-media-body">视频专区</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/">
              <span class="mui-icon mui-icon-phone"></span>
              <div class="mui-media-body">联系我们</div>
            </router-link>
          </li>
      </ul>
		</div>
  </div>
</template>
<script>
import common from "../kits/common.js";
  export default {
    data(){
      return {
        list:[]
      }
    },
    created(){
      this.getImg();
    },
    methods:{
      getImg(){
        var url = common.apidomain+"/api/getlunbo";
        this.$http.get(url).then(function(response){
          this.list = response.body.message;
        })
      }
    }
  }
</script>

<style scoped>
  .mint-swipe{
    width:100%;
    height:300px;
  }
  .mint-swipe img{
    width:100%;
    height:100%;
  }
  /*9宫格部分*/
  /*修改每个按钮的图标*/
  .mui-icon-home:before,
  .mui-icon-email:before,
  .mui-icon-chatbubble:before,
  .mui-icon-location:before,
  .mui-icon-search:before,
  .mui-icon-phone:before{
    background-repeat:round;
    display:inline-block;
    width:50px;
    height:50px;
    content:"";

  }
  .mui-icon-home:before{
    background-image:url("../../statics/imgs/1.png");
  }
  .mui-icon-email:before{
    background-image:url("../../statics/imgs/2.png");
  }
  .mui-icon-chatbubble:before{
      background-image:url("../../statics/imgs/3.png");
  }
  .mui-icon-location:before{
      background-image:url("../../statics/imgs/4.png");
  }
  .mui-icon-search:before{
      background-image:url("../../statics/imgs/5.png");
  }
  .mui-icon-phone:before{
    background-image:url("../../statics/imgs/6.png");
  }
</style>
