<template>
	<div>
		<!-- 使用mint-ui 实现顶部固定导航 -->
		<mt-header fixed title="vue商城"></mt-header>
		<router-view></router-view>
		<!-- 使用m ui tabbar  实现底部导航 -->
		<nav class="mui-bar mui-bar-tab">
					<router-link class="mui-tab-item " to="/home/home">
						<span class="mui-icon mui-icon-home"></span>
						<span class="mui-tab-label">首页</span>
					</router-link>
					<router-link class="mui-tab-item" to="/tabbar-with-chat">
						<span class="mui-icon mui-icon-email"></span>
						<span class="mui-tab-label">会员</span>
					</router-link>
					<router-link class="mui-tab-item" to="/tabbar-with-contact">
						<span class="mui-icon mui-icon-contact"></span>
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
	export default{
		data: function(){
			return{
			}
		}
	}
</script>
<style scoped>

</style>
