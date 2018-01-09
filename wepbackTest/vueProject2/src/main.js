/*引入核心包*/
import Vue from 'vue';

/*引入根组件*/
import App from "./App.vue"

/*引入路由组件*/
import vueRouter from 'vue-router';
Vue.use(vueRouter);

/*引入vue-resource*/
import vueResource from 'vue-resource';
Vue.use(vueResource);

/*导入组件*/
import home from "./components/home/home.vue";
import newsList from "./components/news/newsList.vue";
import newsInfo from "./components/news/newsInfo.vue";

/*引入mint-ui*/
import Mint from "mint-ui";
import "../node_modules/mint-ui/lib/style.min.css";
Vue.use(Mint);

/*使用mui*/
import "../statics/mui/css/mui.css";

/*使用momentjs时间格式化*/
import moment from "moment";

/*通过moment定义全局时间格式化过滤器*/
Vue.filter("dateformat",function(input,dateformatStr){
	return moment(input).format(dateformatStr);
});

/*引入全局css样式*/
import "../statics/css/site.css";

var router = new vueRouter({
	linkActiveClass:"mui-active",/*改变路由激活样式*/
	routes:[
		{path:"/",redirect:"/home/home"},
		{path:'/home/home',component:home},
		{path:'/news/newsList',component:newsList},
		{path:'/news/newsInfo/:id',component:newsInfo}
	]
});
new Vue({
	el:'#app',
	router:router,
	render:c=>c(App)
})


