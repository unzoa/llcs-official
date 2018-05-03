<template>
	<div id="home">

		<FixBar 
		class="fixbar"
		:fixBarHeight="fixBarHeight"
		:iSmobile='iSmobile'></FixBar>

		<Head style="position:relative"></Head>
		<Banner></Banner>
		<Operate></Operate>
		<ChooseUs></ChooseUs>
		<Service></Service>
		<MySwiper
		class="mySwiper"
		:swiperData='swiperData'
		:iSmobile='iSmobile'></MySwiper>
		<ContactUs></ContactUs>
		<Foot id="footBar"></Foot>

	</div>
</template>

<script type="">
	import { mapGetters, mapActions} from 'vuex'
	import api from "@/api/api"

	import Head from "@/components/head"
	import Banner from "@/components/banner"
	import Operate from "@/components/operate"
	import ChooseUs from "@/components/chooseUs"
	import Service from "@/components/service"
	import MySwiper from "@/components/mySwiper"
	import ContactUs from "@/components/contact"
	import Foot from "@/components/foot"

	import FixBar from "@/components/fixbar"

	import img1 from '@/assets/img/1.jpg'
	import img2 from '@/assets/img/2.jpg'
	import img3 from '@/assets/img/3.jpeg'

	export default{
		name:'home',
		data(){
			return {
				swiperData:[img1, img2, img3],
				iSmobile:true,
				fixBarHeight:document.documentElement.clientHeight/2
			}
		},
		components:{
			Head,Banner,Operate,ChooseUs,Service,MySwiper,ContactUs,Foot,FixBar
		},
		computed:{
			...mapGetters(['count','navAct']),
		},
		watch:{
			navAct(val){
				if (val!='haha') {
					let anchor = this.$el.querySelector("#"+val)
	        let linshi = 0;
	        let bei = anchor.offsetTop/20;

	        let huaDong = setInterval(()=>{
	        	if (linshi<=20) {
	        		linshi++
	        		document.body.scrollTop =(linshi-1)*bei // chrome
		        	document.documentElement.scrollTop=(linshi-1)*bei// firefox
	        	}else{
	        		clearInterval(huaDong)
	        		this.navActA('haha')
	        	}
	        },10)
        }
			}
		},
		methods:{
			...mapActions(['navActA']),
		},
		mounted(){
			window.onresize = () =>{
				this.fixBarHeight = document.documentElement.clientHeight*2/3
			}

			if (api.clientType()) {
				this.iSmobile = false
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
</style>