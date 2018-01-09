<template>
	<span>
		<!-- 购物车商品数量组件 -->
		<span class="substrict" v-on:click="substrict">-</span>
		<span class="count" v-text="count"></span>
		<span class="add" v-on:click="add">+</span>
	</span>
</template>

<script>
//导入vm 空对象
import {vm} from "../../kits/vm.js";
	export default{
		props:["initCount","goodsId"],
		data(){
			return {
				count:1,
				resObj:{goodsId:0,type:"add"}//商品id - 状态值
			}
		},
		created(){
			this.count=this.initCount;
		},
		methods:{
			substrict(){//减少商品
				this.count--;

				console.log(this.count)

				if(this.count<1){
					this.count=1;

					return;
				}

				vm.$emit("badgeNumber",-1);
				this.sendMessage("substrict");
			},
			add(){//增加商品
				this.count++;
				vm.$emit("badgeNumber",1);
				this.sendMessage("add");
			},
			sendMessage(type){//子组件向父组件传值
				this.resObj.type=type;
				this.resObj.goodsId = this.goodsId;
				this.$emit("sendCarData",this.resObj);
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
