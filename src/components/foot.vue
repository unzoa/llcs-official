<template>
	<div class="foot">
		<div class="foot_container">
			<div>
				<ul>
					<li>商务合作：service@yibaba.com</li>
					<li>客服热线：021-69029633-815</li>
					<li>官方微信：qybcom1000</li>
				</ul>
			</div>

			<div>
				<figure 
				v-for="(i,j) in downloadData"
				:key="j">
					<img :src="i.img">
					<p>{{i.name}}</p>
				</figure>
			</div>

		</div>
		<p class="foot_licence">版权所归上海易巴巴信息科技有限公司</p>
	</div>
</template>

<script type="text/javascript">
	import wechatPublic from "@/assets/img/wechatPublic.png"
	import iosDownload from "@/assets/img/iosDownload.png"
	import andriodDownload from "@/assets/img/andriodDownload.png"
	export default{
		name:'foot',
		data(){
			return{
				downloadData:[
					{
						img:andriodDownload,
						name:'安卓下载'
					},
					{
						img:iosDownload,
						name:'苹果下载'
					},
					{
						img:wechatPublic,
						name:'关注微信公众号'
					}
				]
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
	.foot{
		background-color: #222;
		color: #fff;
	}
	.foot_container{
		max-width: 800px;
		margin:0 auto;
		padding: 4rem 15px;
		display: flex;
		flex-flow: row wrap;
	}
	.foot_container>div:nth-child(1){
		font-size: 0.9rem;
		width: 35%;
	}
	.foot_container>div:nth-child(1)>ul>li{
		margin-bottom: 1rem;
	}
	.foot_container>div:nth-child(2){
		width: 65%;
		display: flex;
		justify-content: space-between;
	}
	.foot_container>div:nth-child(2)>figure{
		text-align: center;
		width: 25%;
	}
	.foot_container>div:nth-child(2)>figure>img{
		width: 100%;
	}
	.foot_container>div:nth-child(2)>figure>p{
		font-size: 0.9rem;
		margin-top: 0.5rem;
	}
	.foot_licence{
		text-align: center;
		position: relative;
		bottom: 1rem;
		color: #999;
		font-size: 0.9rem;
	}

@media (max-width: 768px){
	.foot_container{
		padding: 2rem 15px;

	}
	.foot_container>div{
		width: 100%!important;
	}
	.foot_container>div:nth-child(1)>ul>li{
		font-size: 0.6rem;
		margin-bottom: 0.5rem;
	}
	.foot_container>div:nth-child(2)>figure>p{
		font-size: 0.6rem;
		margin-top: 0.5rem;
	}
	.foot_licence{
		bottom: 0.6rem;
		font-size: 0.6rem;
	}
}
</style>