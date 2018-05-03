<template>
	<div id="mySwiper">
		<swiper :options="swiperOption" :style="{'height':swiperHeight+'px'}">
		    <swiper-slide>
		    	
		    	<div class="mySwiper_container">
					<h2>我们的分支机构遍布全国30个省市</h2>
					<p>合作创新、实现梦想、忠诚进取</p>
					<div class="item_container">
						<div 
						class="itemLi"
						v-for="(i,j) in itemsData"
						:key="j">
							<img :src="i.img">
							<p>{{i.name}}</p>
						</div>
					</div>
				</div>

		    </swiper-slide>

		    <div class="swiper-pagination" slot="pagination"></div>
		    <div 
		    class="swiper-button-prev" 
		    slot="button-prev" 
		    :style="{'display':iSmobile?'block':'none','backgroundImage':'url('+prevImg1+')'}"></div>

		    <div 
		    class="swiper-button-next" 
		    slot="button-next" 
		    :style="{'display':iSmobile?'block':'none','backgroundImage':'url('+nextImg1+')'}"></div>
		    <div class="swiper-scrollbar" slot="scrollbar"></div>
		</swiper>
	</div>
</template>

<script type="">
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import hangzhou from "@/assets/img/hangzhou.jpg"
	import shenzhen from "@/assets/img/shenzhen.jpg"
	import beijing from "@/assets/img/beijing.jpg"
	import guangzhou from "@/assets/img/guangzhou.jpg"
	import qingdao from "@/assets/img/qingdao.jpg"
	import chongqing from "@/assets/img/chongqing.jpg"

	import prevImg1 from "@/assets/img/left1.png"
	import prevImg2 from "@/assets/img/left2.png"
	import nextImg1 from "@/assets/img/right1.png"
	import nextImg2 from "@/assets/img/right2.png"

	export default{
		name:'mySwiper',
		data() {
	      return {
	      	prevImg1:prevImg1,
	        nextImg1:nextImg1,
	      	prevImg2:prevImg2,
	        nextImg2:nextImg2,
	        swiperOption: {
	          	pagination: {
		            // el: '.swiper-pagination'
		        },
				navigation: {
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
					disabledClass: 'my-button-disabled',
				},
				on: {
				    slideChange: function(){
				      if(this.isEnd){
				        this.navigation.$nextEl.css('background-image','url('+nextImg1+')');
				      }else{
				        this.navigation.$nextEl.css('background-image','url('+nextImg2+')');  
				      }
				      if(this.isBeginning){
				        this.navigation.$prevEl.css('background-image','url('+prevImg1+')');
				      }else{
				        this.navigation.$prevEl.css('background-image','url('+prevImg2+')');  
				      }
				    },
				},
				scrollbar: {
					el:'.swiper-scrollbar',
				},
	        },
	        itemsData:[
	        	{
	        		img:hangzhou,
	        		name:'2016年4月13日，千元宝杭州分部成立'
	        	},
	        	{
	        		img:shenzhen,
	        		name:'2016年7月15日，千元宝深圳分部成立'
	        	},
	        	{
	        		img:beijing,
	        		name:'2016年7月19日，千元宝北京分部成立'
	        	},
	        	{
	        		img:guangzhou,
	        		name:'2016年8月22日，千元宝广州分部成立'
	        	},
	        	{
	        		img:qingdao,
	        		name:'2017年3月15日，千元宝青岛分部成立'
	        	},
	        	{
	        		img:chongqing,
	        		name:'2017年7月11日，千元宝重庆分部成立'
	        	}
	        ]
	      }
	    },
	    props:['swiperData','swiperHeight','iSmobile'],
	    components: {
		    swiper,
		    swiperSlide
		},
	}
</script>

<style type="text/css">
	#mySwiper{
		background-color: #f6f6f6
	}
	.mySlide{
		background-size: cover;
		background-position: center;
	}
	.swiper-scrollbar-drag{
		background: rgba(0, 255, 0, 0.5);
	}
	.swiper-button-prev{
		left: 0!important
	}
	.swiper-button-next{
		right: 0!important
	}
	.mySwiper_container{
		max-width: 900px;
		margin:0 auto;
		text-align: center;
		padding: 4rem 0;
	}
	.mySwiper_container>h2{
		font-size: 2rem;
		font-weight: bold;
		color: #ff6500;
	}
	.mySwiper_container>p{
		font-size: 1.3rem;
		margin:1rem 0 2rem;
		color: #888;
	}
	.item_container{
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}
	.itemLi{
		width: 30%;
		margin-bottom: 2rem;
	}
	.itemLi>img{
		width: 100%;
	}
	.itemLi>p{
		background-color: #fff;
		padding:0.5rem 1rem;
		font-size: 0.9rem;
		text-align: left;
		color: #869196;
	}
	@media (max-width: 768px){
		.mySwiper_container{
			padding: 2rem 15px;
		}
		.mySwiper_container>h2{
			font-size: 1.2rem;
		}
		.mySwiper_container>p{
			font-size: 0.6rem;
			margin:0.5rem 0 1rem;
		}
		.itemLi{
			width: 48%;
			margin-bottom: 1rem;
		}
		.itemLi>p{
			font-size: 0.6rem;
		}
	}
</style>