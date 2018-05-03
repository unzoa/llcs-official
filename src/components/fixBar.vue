<template>
	<div class="fixBar">
		<!-- :style="{'bottom':'calc('+fixBarHeight+'px - 170px)'}" -->

		<div class="wechatQr" v-if="showWechatQr">
			<p>关注千元宝公众号</p>
			<img :src="wechatPublic">
		</div>

		<div class="fixBar_container" >
			<ul>
				<li >
					<!-- <span>
						<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2029279954&site=qq&menu=yes">
							<img border="0" :src="qqselect" />
						</a>
					</span> -->

					<img :src="qqselect" class="disableContact" />
				</li>
				<li>
					<!-- <a href="tel://13524739418"> -->
						<img :src="telSelect" class="disableContact">
					<!-- </a> -->
				</li>
				<li>
					<img 
					:src="wechatSelect" 
					@click="HereNavAct('footBar')"
					@mouseover='webWechatOn'
					@mouseout="webWechatOut">
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	import {mapActions} from "vuex"

	import qqselect from "@/assets/img/qqselect.png"
	import telSelect from "@/assets/img/telSelect.png"
	import wechatSelect from "@/assets/img/wechatSelect.png"

	import wechatPublic from "@/assets/img/wechatPublic.png"

	export default{
		name:"fixBar",
		data(){
			return{
				qqselect:qqselect,
				telSelect:telSelect,
				wechatSelect:wechatSelect,
				wechatPublic:wechatPublic,
				showWechatQr:false,
			}
		},
		props:['fixBarHeight','iSmobile'],
		methods:{
			...mapActions(['navActA']),
			HereNavAct(_id){
				if (this.iSmobile) {
					console.log(134)
				}else{
					this.navActA(_id)
					this.showWechatQr = false

				}
			},
			webWechatOn(){
				this.showWechatQr = true
			},
			webWechatOut(){
				this.showWechatQr = false
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
	.fixbar{
		position: fixed;
		bottom: 5rem;
		right: 0;
		z-index: 999;
	}
	.fixBar_container{
		background: rgba(0,0,0,.25);
	    text-align: center;
	    border:1px solid rgba(255,255,255,.3);
	    border-top-left-radius: 5px;
	    border-bottom-left-radius: 5px;
	    padding: 0rem 0;
	}
	.fixBar_container img{
		width: 2rem;
	}
	.fixBar_container>ul{
		padding: 0 10px;
	}
	.fixBar_container>ul>li{
		border-bottom: 1px solid rgba(255,255,255,.2);
		padding: 7px 0;
	}
	.fixBar_container>ul>li:last-child{
		border-bottom: none;
	}

	.disableContact{
		opacity: .5;
	}

	.wechatQr{
		position: absolute;
		bottom: 0;
		/*calc(5rem + 28px);*/
		right: calc(2rem + 25px);
		border-radius: 5px;
		background-color: rgba(0,0,0,.25);
		border:2px solid rgba(255,255,255,.3);
		padding: 1rem 1.2rem;
		color: #fff;
		text-align: center;
	}
	.wechatQr>p{
		font-size: 0.9rem;
		line-height: 0.9rem;
		margin-bottom: 1rem;
	}
</style>