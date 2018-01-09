/*引入vue*/
import Vue from "vue";

/*引入根组件*/
import App from "./App.vue";

/*引入vue-router*/
import VueRouter from "vue-router";
Vue.use(VueRouter);

/*引入vue-resource*/
import VueResource from "vue-resource";
Vue.use(VueResource);

/*引入momentjs时间格式化*/
import moment from "moment";

/*定义全局时间格式化过滤器*/
Vue.filter("dateformat",function(input,dateformatStr){
	return moment(input).format(dateformatStr);
});

/*引入vue-preview(图片预览)*/
import VuePreview from "vue-preview";
Vue.use(VuePreview);

/*导入路由*/
import home from "./components/home/home.vue";
import newsList from "./components/news/newsList.vue";
import newsInfo from "./components/news/newsInfo.vue";
import photosList from "./components/photos/photosList.vue";
import photosInfo from "./components/photos/photosInfo.vue";
import goodsList from "./components/goods/goodsList.vue";
import goodsInfo from "./components/goods/goodsInfo.vue";
import goodsDesc from "./components/goods/goodsDesc.vue";
import goodsComment from "./components/goods/goodsComment.vue";
import shopCar from "./components/shopCar/car.vue";

/*实例化vue-router*/
var router = new VueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{path:'/',redirect:"/home/home"},
		{path:'/home/home',component:home},
		{path:'/news/newsList',component:newsList},
		{path:'/news/newsInfo/:id',component:newsInfo},
		{path:'/photos/photosList',component:photosList},
		{path:'/photos/photosInfo/:id',component:photosInfo},
		{path:'/goods/goodsList',component:goodsList},
		{path:'/goods/goodsInfo/:id',component:goodsInfo},
		{path:'/goods/goodsDesc/:id',component:goodsDesc},
		{path:'/goods/goodsComment/:id',component:goodsComment},
		{path:"/shopCar/car",component:shopCar}
	]
});

/*引入mint-ui*/
import MintUi from "mint-ui";
/*引入mint-ui样式*/
import "../node_modules/mint-ui/lib/style.min.css";
Vue.use(MintUi);

/*引入mui样式*/
import "../statics/mui/css/mui.css";

/*引入全局css样式*/
import "../statics/css/site.css";

/*创建vue实例对象*/
var vm = new Vue({
	el:"#app",
	data:{},
	methods:{},
	router:router,
	render:c=>c(App)//es6语法
	/*render:function(createElement){//es5语法
		return createElement(App);
	}*/
});

