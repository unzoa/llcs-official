<template>
	<div class="operate">
		<div class="operate_container">
			<div class="operate_title">
				<p>省时，低息，高效</p>
				<p>千元宝本身不提供贷款，而是着眼于帮助个人、筛选金融市场上的正规贷款渠道。<br>
					让需要贷款的人和提供贷款的业务人员直接沟通匹配，打造一个方便的信贷直销平台。<br>
					具体而言，用户只需注册千元宝APP。系统就会为您推荐综合评级高的贷款入口，<br>
					输出一份相应个人信息资质，等待放款即可，让您不出门就能借到钱！
					</p>
			</div>
			<div class="operate_item">
				
				<div 
				class="operate_item_container" 
				v-for="(i,j) in operateItemData" :key="j">
					<img :src="i.img" :alt="i.alt">
					<p>{{i.content}}</p>
					<button>{{i.btn}}</button>
				</div>

			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import downloadImg from "@/assets/img/download.png"
	import personInfo from "@/assets/img/personInfo.png"
	import loanImg from "@/assets/img/loanImg.png"
	import waitImg from "@/assets/img/waitImg.png"

	export default{
		name:'operate',
		data(){
			return{
				operateItemData:[
					{
						img:downloadImg,
						alt:'download',
						content:'下载安装千元宝APP，注册成为我们的用户',
						btn:'下载安装'
					},
					{
						img:loanImg,
						alt:'personInformation',
						content:'操作简单方便，无需面签，推荐优质贷款入口，一键申请贷款',
						btn:'立即申请'
					},
					{
						img:waitImg,
						alt:'loan',
						content:'完成信息审核，等待放款。',
						btn:'极速放款'
					},
				]
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
	.operate_container{
		max-width: 1000px;
		margin:0 auto;
		padding: 4rem 15px 5rem;
		text-align: center;
	}
	.operate_title>p:first-child{
		font-size: 2rem;
    	font-weight: bold;
	}
	.operate_title>p:nth-child(2){
		font-size: 0.8rem;
	    margin-top: 1rem;
	    margin-bottom: 3rem;
	}
	.operate_item{
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
	}
	.operate_item_container{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 23%;
		border:1px solid #e5e4e4;
		border-radius: 5px;
		box-shadow: 0 2px 0 0 #e5e6e6;
		background-color: #f8f8f8;
		box-sizing: border-box;
		padding: 0 15px;
	}
	
	.operate_item_container>img{
		margin:3rem 0;
		height: 2rem;
		align-self: center;
	}
	.operate_item_container>p{
		margin-bottom: 2rem;
		font-size: 0.9rem;
		color: #777;
	}
	.operate_item_container>button{
		position: relative;
		top: 20px;
		border:0;
		width: 70%;
		align-self: center;
		height: 40px;
		background-color: #98a3a3;
		color: #fff;
		font-size: 0.8rem;
		border-radius: 5px;
		box-shadow: 0 2px 0 0 #7f8c8c;
	}

	.operate_item_container:first-child{
		background-color: #fff;
	}
	.operate_item_container:first-child>button{
		background-color: #ff6500;
		box-shadow: 0 2px 0 0 #ff3f00;
	}
	@media (max-width: 768px){
		.operate_container{
			padding: 2rem 15px 2rem;
		}
		.operate_title>p:first-child{
			font-size: 1.2rem;
		}
		.operate_title>p:nth-child(2),
		.operate_title>p:nth-child(3){
			font-size: 0.6rem;
		}
		.operate_title>p:nth-child(2){
		    margin-top: 0.5rem;
		}
		.operate_title>p:nth-child(3){
			margin-bottom: 1rem;
		}

		.operate_item_container{
			width: 47%;
			margin-bottom: 2rem;
		}
		.operate_item_container>img{
			margin:1rem 0;
		}
		.operate_item_container>p{
			margin-bottom: 0rem;
			font-size: 0.6rem;
		}
		.operate_item_container>button{
			font-size: 0.6rem;
		}

	}
</style>