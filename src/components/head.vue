<template>
	<div id="Head">
		<NavBar 
		class="navBar"
		:style="{'height':navBarHeight}"
		:menuItemData='menuItemData'
		:iSmobile="iSmobile"></NavBar>
		<!-- <Swiper 
		class="mySwiper"
		:swiperHeight='swiperHeight'
		:swiperData='swiperData'
		:iSmobile='iSmobile'></Swiper> -->
	</div>
</template>

<script type="">
	import api from '@/api/api.js'
	import Swiper from "@/components/mySwiper"
	import NavBar from "@/components/navBar"
	import Banner from "@/components/banner"

	import img1 from '@/assets/img/1.jpg'
	import img2 from '@/assets/img/2.jpg'
	import img3 from '@/assets/img/3.jpeg'

	export default{
		name:'Head',
		data() {
	      return {
	      	swiperHeight:window.innerHeight*2/3,
	      	swiperData:[img1, img2, img3],
	      	menuItemData:[
		      	{
		      		name:'首页',
		      		href:''
		      	},
		      	{
		      		name:'关于我们',
		      		href:''
		      	},
		      	{
		      		name:'业务模块',
		      		href:''
		      	},
		      	{
		      		name:'新闻公告',
		      		href:''
		      	},
		      	{
		      		name:'招商合作',
		      		href:''
		      	},
		      	{
		      		name:'人才招聘',
		      		href:''
		      	},
		      	{
		      		name:'联系我们',
		      		href:''
		      	},
	      	], 
	      	navBarHeight:'90px',
	      	iSmobile:true
	      }
	    },
	    components: {
		    Swiper,NavBar,Banner
		},
		mounted(){
			window.onresize = () =>{
				this.swiperHeight = document.documentElement.clientHeight*2/3
			}

			if (api.clientType()) {
				this.navBarHeight = '50px';
				this.iSmobile = false
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
	#Head{
		position: relative;
	}
	.navBar{
		/*position: absolute;
		width: 100%;*/
		height: 90px;
		background-color: rgba(255,255,255,.5);
		z-index: 2;
	}
</style>