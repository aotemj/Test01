<template>
	<div>
		<!-- 使用mint-ui完成固定导航头部头部 -->
	<mt-header fixed title="vue商城"></mt-header>

	<router-view></router-view>

		<!-- 使用mui完成底部tabBar -->
		<nav class="mui-bar mui-bar-tab">
					<router-link class="mui-tab-item" to="/home">
						<span class="mui-icon mui-icon-home"></span>
						<span class="mui-tab-label">首页</span>
					</router-link>
					<router-link class="mui-tab-item" to="/tabbar-with-chat">
						<span class="mui-icon iconfont icon-a536"></span>
						<span class="mui-tab-label">会员</span>
					</router-link>
					<router-link class="mui-tab-item" to="/shopCar">
						<span class="mui-icon iconfont icon-gouwuche"><span class="mui-badge">0</span></span>
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
			return {
			}
		}
	}
</script>
<style scoped>
.iconfont{

}
</style>
