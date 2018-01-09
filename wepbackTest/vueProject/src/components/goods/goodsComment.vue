<template>
	<div id="temp">
		<!-- 评论页面 -->
		<comment v-bind:id="id"></comment>
	</div>
</template>
<script>
/*引入评论子组件*/
import comment from "../subcom/comment.vue";
	export default {
		components:{
			comment
		},
		data(){
			return {
				id:0,
			}
		},
		created(){
			// this.id = this.$route.params.id;
		},
		methods:{}
	}
</script>
<style scoped>

</style>
