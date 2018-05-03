<template>
	<div class="service">
		<div class="service_container">
			<h2>移动金融智选平台</h2>
			<p>千元宝(上海易巴巴信息科技有限公司)“互联网+金融”典型业态，是新型的网络金融服务公司，</p>
			<p>利用大数据、搜索等技术，让百款金融产品可以直观地呈现在用户面前。</p>
			<img :src="serviceImg">
		</div>
	</div>
</template>

<script type="text/javascript">
	import serviceImg from "@/assets/img/serviceImg3.jpg"
	export default{
		name:'service',
		data(){
			return{
				serviceImg:serviceImg,
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
	.service_container{
		max-width: 1000px;
		margin:0 auto;
		padding: 4rem 15px 5rem;
		text-align: center;
	}
	.service_container>h2{
		font-size: 2rem;
		font-weight: bold;
	}
	.service_container>p{
		font-size: 0.8rem;
		color: #888888;
	}
	.service_container>p:nth-child(2){
		margin-top: 1rem;
	}
	.service_container>p:nth-child(3){
		margin-bottom: 2rem;
	}
	.service_container>img{
		width: 90%;
	}
	@media (max-width: 768px){
		.service_container{
			padding: 2rem 15px;
		}
		.service_container>h2{
			font-size: 1.2rem;
		}
		.service_container>p{
			font-size: 0.6rem;
		}
		.service_container>p:nth-child(2){
			margin-top: 0.5rem;
		}
		.service_container>p:nth-child(3){
			margin-bottom: 1rem;
		}
	}	
</style>