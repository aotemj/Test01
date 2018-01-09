<!-- 根组件 -->
<template id="app">
	<div>
		<!-- 顶部导航(mint-ui) -->
		<mt-header fixed title="vue商城"></mt-header>

		<!-- 路由站位 -->
		<router-view></router-view>

		<!-- 底部菜单(mui tab-bar) -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon iconfont icon-huiyuan1"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopCar/car">
				<span class="mui-icon iconfont icon-icon"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
	</div>
</template>
<script>
	/*引入空vue对象(非父子组件传值)*/
	import {vm} from "./kits/vm.js";
	vm.$on("badgeNumber",function(count){ //获取在goodsinfo页面中获取到的购物车中的商品个数
		var badge = document.querySelector(".mui-badge");
		badge.innerText=badge.innerText-0+count;//更新当前徽章值
	});

	export default{
		data(){
			return {

			}
		},
		created(){},
		methods:{}
	}
</script>
<style scoped>

</style>
