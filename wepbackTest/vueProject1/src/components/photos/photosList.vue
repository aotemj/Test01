<template>
	<div id="temp">
		<!-- 图片分类 -->
			<div class="categray">
				<ul class="content" v-bind:style="{width:ulWidth+'px'}">
					<li><a href="#" >全部	 </a></li>
					<li></li>
				</ul>
			</div>
			<!-- 图片列表: -->
			<div class="photosList">
					<ul>
						<li>
							<router-link to="/">
								<img >
								<div class="desc">
									<!-- <h4 v-text="item.title"></h4> -->
									<!-- <p v-text="item.zhaiyao"></p> -->
								</div>
							</router-link>
						</li>
					</ul>
			</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				ulWidth:320
			}
		},
		created(){},
		methods:{}
	}
</script>
<style scoped>
	/*分类列表*/
	.categray{
		width:100%;
		height:50px;
		background-color: #B3A28D;
		overflow-x:auto;
   	overflow-y: hidden;
	 	position: fixed;
  	z-index: 999;
	}
	ul{
		height:50px;
	}
	ul li{
	float: left;
	margin-right: 20px;
	line-height: 50px;
	position: relative;
	}
	/*分割线*/
	.categray ul li::before{
		content:"";
		width:1px;
		height:15px;
		display:block;
		background-color: gray;
		position: absolute;
		top:50%;
		right:-10px;
		transform: translateY(-50%);
	}
	ul li {
		color:#007aff;
	}
	ul li a{
		color:#007aff;
		font-size: 14px;
		display:inline-block;
	}
	/* photosList */

	.photosList ul li{
		margin:0;
		position: relative;
		width: 100%;
	}
	.photosList .desc{
		position: absolute;
		padding:10px;
		bottom:20px;
		background-color: rgba(0,0,0,.4);
	}
	.photosList .desc h4,.photosList .desc p{
		/*font-size: 14px;*/
		color:#fff;
		line-height: 25px;
	}
	.photosList ul li a{
		display:inline-block;
		width:100%;
	}
	.photosList ul li a img{
		width:100%;
		height:300px;
	}
	image[lazy=loading] {
	  width: 40px;
	  height: 30px;
	  margin: auto;
	}
</style>
