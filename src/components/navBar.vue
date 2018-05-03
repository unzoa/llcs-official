<template>
	<div id="navBar">
		<div class="_navContainer">
			<div class="_logo">
				<img :src="Logo">
			</div>
			<div class="_menuContainer">

				<ul class="_menu" :style="{'display':iSmobile?'flex':'none'}">
					<li 
					class="_menuItem webMenuLi" 
					v-for="(i,j) in menuItemData" 
					:key='j' 
					@click="HereNavAct(i.href)"> {{i.name}} </li>
				</ul>

				<div 
				:style="{'display':iSmobile?'none':'block','paddingTop':'calc(2.3rem - 24px)'}" 
				@click="mobileMenuShow=!mobileMenuShow">
					<svg class="Zi Zi--More" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M3.5 5h16a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3zm0 6h16a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3zm0 6h16a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3z" fill-rule="evenodd"></path></svg>
				</div>
			</div>
		</div>

		<transition	name="mobileMenuAct">
			<div 
			class="mobileMenu"  
			v-if="mobileMenuShow">
				<ul class="_menu mobile_menu">
					<li 
					class="_menuItem mobileMenuItem" 
					:style="{'margin-left':iSmobile?'2.5rem':'15px'}"
					v-for="(i,j) in menuItemData" 
					:key='j' 
					@click="HereNavAct(i.href)">{{i.name}}</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script type="text/javascript">
	import logo from "@/assets/img/logo.png"
	import {mapActions} from "vuex"
	export default{
		name:'navBar',
		data(){
			return{
				Logo:logo,
				_menuDisplay:this.iSmobile?'block':'flex',
				mobileMenuShow:false
			}
		},
		props:['menuItemData','iSmobile'],
		methods:{
			...mapActions(['navActA']),
			HereNavAct(_id){
				if (_id!='') {
					this.navActA(_id)
				}
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
	._navContainer{
		height: inherit;
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 15px;
	}
	._navContainer{
		display: flex;
		flex-flow: row nowrap;
		align-items:center;
	}
	._menu{
		padding: 0;
		margin:0;
		list-style-type: none;
	}
	._menu>li{
		margin-left: 2.5rem;
	}
	._menu>.webMenuLi{
		position: relative;
	    height: 90px;
	    line-height: 90px;
	    font-size: 0.9rem;
	}
	._menu>.webMenuLi:hover{
		color: #ff6500;
		box-sizing: border-box;
		border-bottom: 3px solid #ff6500;
	}
	._logo{
		width: 30%
	}
	._logo>img{
		display: block;
		height: 2.3rem;
	}
	._menuContainer{
		width: 70%;
	}
	._menuContainer{
		display: flex;
		justify-content: flex-end;
	}

	.mobileMenu{
		width: 100%;
		position: relative;
		z-index: 9999;
		background-color: #fff;
	}
	.mobile_menu{
		max-width: 1000px;
		margin:0 auto;
	}
	.mobileMenuAct-enter-active {
	  transition: all .1s ease;
	}
	.mobileMenuAct-leave-active {
	  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.mobileMenuAct-enter, .mobileMenuAct-leave-to {
	  transform: translateY(100%);
	  opacity: 0;
	}
	.mobileMenuItem{
		line-height: 3rem;
		font-weight: bold;
	}

	@media (max-width: 768px){
		._menu>li{
			margin-left: 15px;
		}
	}
</style>