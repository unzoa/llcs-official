<template>
	<div id="banner" :style="{'backgroundImage':'url('+bannerImg+')'}">
		<div class="banner_container">
			<h2 class="bannerTitle">找贷款用千元宝就够了</h2>
			<span class="bannerntro">“千元宝“是一款面向应急用钱人群的科技金融APP，由上海易巴巴信息科技有限公司开发，一站式搜索全国正规贷款平台，主要提供纯线上小额信贷信息撮合服务，解决都市年轻白领与蓝领在日常生活中的小额借款需求。</span>	
			<div class="bannerButton" @click="downloadApp(1)">
				<div>
					<img :src="iosicon" alt="apple">
				</div>
				<div>
					<p>Download on the</p>
					<p>App Store</p>
				</div>
			</div>
			<div class="bannerButton" @click="downloadApp(2)">
				<div>
					<img :src="androidicon" alt="andriod">
				</div>
				<div>
					<p>Download on the</p>
					<p>Google Play</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {mapActions} from "vuex"

	import bannerImg from "@/assets/img/banner.png"
	import iosicon from "@/assets/img/iosicon2.png"
	import androidicon from "@/assets/img/androidicon2.png"

	export default{
		name:'banner',
		data(){
			return{
				bannerImg:bannerImg,
				iosicon:iosicon,
				androidicon:androidicon,
			}
		},
		methods:{
			...mapActions(['navActA']),
			HereNavAct(_id){
				this.navActA(_id)
			},
			downloadApp(val){
				if (val==2) {
					window.location.href = 'http://www.apk.anzhi.com/Anzhi_2928913_2931637_2.apk?src=/data1/apk/201802/12/8719ceef5de32626c098ba66c2b9cfa0_86207900.apk'
				}else if(val == 1){
					window.location.href = 'https://itunes.apple.com/cn/app/千元宝/id1342083417?mt=8'
				}
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
	#banner{
		background-size: cover;
		background-position: center;
		background-color: #333;
		padding: 4rem 0;
	}
	.banner_container{
		max-width: 1000px;
		margin:0 auto;
		padding: 0 15px;
		color: #fff;
	}
	.bannerTitle{
		font-size: 2rem;
		font-weight: bold;
	}
	.bannerntro{
		font-size: 0.8rem;
		display: block;
		margin: 1rem 0 2rem; 
		max-width: 50%;
	}
	.bannerButton{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		border:1.5px solid #fff;
		margin-bottom: 1rem;
		border-radius: 5rem;
		width: 8.1rem;
		padding: 0.2rem 0 0.5rem 1rem;
		cursor:pointer;
	}
	.bannerButton>div>img{
		width: 1rem;
		height: 1rem;
		align-self: flex-start;
		position: relative;
		margin-right: 0.8rem;
	}
	.bannerButton>div>p:first-child{
		font-size: 0.5rem;
		font-weight: bold;
	}
	.bannerButton>div>p:last-child{
		line-height: 0.6rem;
		font-size: 0.9rem;
		font-weight: bold;
	}
</style>