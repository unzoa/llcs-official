<template>
	<div class="chooseUs">
		<div class="chooseUs_container">
			<div>
				<h2>为什么选择千元宝？</h2>
				<p class="chooseUs_line"></p>
				<h3>千元宝汇集大量贷款产品，涵盖各种类型，满足借款用户多样化的需求</h3>
				<p>
					全面、详细的贷款攻略，通过深度的解析为借款用户提供贷款指导，一切为了用户，提供优质高效的放款通道。<br>
					与各个贷款产品建立起良好的合作关系，通过精准匹配，确保贷款通过率在行业中处于领先地位。
				</p>
				<button @click="HereNavAct('footBar')">更多贷款攻略关注微信公众号</button>
			</div>
			<div>
				<img :src="chooseImg">
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {mapActions} from "vuex"

	import chooseImg from "@/assets/img/choosePhone.png"
	export default{
		name:'chooseUs',
		data(){
			return{
				chooseImg:chooseImg
			}
		},
		methods:{
			...mapActions(['navActA']),
			HereNavAct(_id){
				this.navActA(_id)
			},
		}
	}
</script>

<style type="text/css" scoped="scoped">
	.chooseUs{
		background-color: #f6f6f6;
	}
	.chooseUs_container{
		max-width: 1000px;
		padding:4rem 15px;
		margin:0 auto;
		display: flex;
	}
	.chooseUs_container>div:first-child{
		width:30%;
		padding-top: 3rem;
	}
	.chooseUs_container>div:last-child{
		width:70%;
	}
	.chooseUs_container>div:first-child>h2{
		font-size: 2rem;
		line-height: 2rem;
		font-weight: bold;
		color: #ff6500;
	}
	.chooseUs_container>div:first-child>.chooseUs_line{
		width: 6rem;
		height: 2px;
		margin:1rem 0 0;
		background-color: #949c9c;
	}
	.chooseUs_container>div:first-child>h3{
		font-size: 1.3rem;
		line-height: 1.5rem;
		margin:2rem 0;
		color: #8c9494;
		font-weight: bold;
	}
	.chooseUs_container>div:first-child>p{
		font-size: 0.8rem;
		color: #8c9494;
	}
	.chooseUs_container>div:first-child>button{
		border:1.5px solid #acb1b1;
		color: #636c6c;
		text-align: center;
		background-color: transparent;
		height: 40px;
		border-radius: 40px;
		padding: 0 3rem;
		font-size: 0.9rem;
		margin-top: 4rem;
	}

	.chooseUs_container>div:last-child{
		text-align: right;
	}
	.chooseUs_container>div>img{
		width: 50%
	}

	@media (max-width: 768px){
		.chooseUs_container{
			padding:3rem 15px;
		}
		.chooseUs_container>div:first-child{
			width:70%;
			padding-top: 0rem;
		}
		.chooseUs_container>div:last-child{
			width:30%;
		}
		.chooseUs_container>div>img{
			width: 100%
		}

		.chooseUs_container>div:first-child>h2{
			font-size: 1.2rem;
			line-height: 1.2rem;
		}
		.chooseUs_container>div:first-child>.chooseUs_line{
			margin:0.5rem 0 0;
		}
		.chooseUs_container>div:first-child>h3{
			font-size: 0.9rem;
			line-height: 1.2rem;
			margin:1rem 0;
		}
		.chooseUs_container>div:first-child>p{
			font-size: 0.6rem;
		}
		.chooseUs_container>div:first-child>button{
			margin-top: 1rem;
			font-size: 0.6rem;
		}
	}
</style>