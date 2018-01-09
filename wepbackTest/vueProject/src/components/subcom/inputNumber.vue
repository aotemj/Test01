<template>
	<span>
		<!-- 商品数量组件 -->
		<span class="substrict" v-on:click="substrict">-</span>
		<span class="count" v-text="count"></span>
		<span class="add" v-on:click="add">+</span>
	</span>
</template>

<script>
	export default{
		data(){
			return {
				count:1,
			}
		},
		created(){

		},
		methods:{
			substrict(){//减少商品
				this.count--;
				if(this.count<1){
					this.count=1;
				}
				this.sendMessage();
			},
			add(){//增加商品
				this.count++;
				this.sendMessage();
			},
			sendMessage(){//子组件向父组件传值
				this.$emit("sendToParent",this.count);
			}
		}
	}
</script>
<style scoped>
	span{
		display:inline-block;
	}
.substrict,.count,.add{
	border:1px solid #000;
	width:30px;
	height:20px;
	text-align: center;
}
</style>
