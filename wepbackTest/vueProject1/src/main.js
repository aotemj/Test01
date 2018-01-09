import Vue from 'vue';
import App from "./App.vue"
import vueRouter from 'vue-router';
Vue.use(vueRouter);
import home from './components/Home.vue';
import shopcar from './components/shopcar/shopcar.vue';
import newsList from "./components/news/newsList.vue";
import newsInfo from "./components/news/newsInfo/newsInfo.vue";
import photosList from "./components/photos/photosList.vue";

/*引入mint-ui*/
import Mint from "mint-ui";
import "../node_modules/mint-ui/lib/style.min.css";
Vue.use(Mint);

// 引入vue-resource
import vueResource from "vue-resource";
Vue.use(vueResource);

/*使用mui*/
import "../statics/mui/css/mui.css";

/*引入common.sj*/
import common from "../src/kits/common.js";

/*引入时间改格式化模块moment*/
import moment from "moment";

Vue.filter("dateformat",function(input,formatStr){
	return moment(input).format(formatStr);
});
// 引入页面的根css文件:
import "../statics/css/site.css";

var router = new vueRouter({
	linkActiveClass:"mui-active",
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/shopCar',component:shopcar},
		{path:"/news/newsList",component:newsList},
		{path:"/news/newsInfo/:id",component:newsInfo},
		{path:"/photos/photosList",component:photosList}
	]
});
new Vue({
	el:'#app',
	router:router,
	render:c=>c(App)
})
