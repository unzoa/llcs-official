<template>
	<div class="contactUs">
		<div class="contactUs_container">
			<h2>期待听到你的声音</h2>
			<p>
				填写表格发送至：service@yibaba.com，<br> 您也可以直接拨打咨询热线：021-69029633-815。
			</p>
			<div class="form_container">
				<input type="email" name="email" placeholder="你的邮箱">
				<input type="text" name="userName" placeholder="你的名字"><input type="number" name="tel" placeholder="你的电话">
				<textarea placeholder="我们将能够更快速准确的予以回复。我们将在72小时内通过你留下的联系方式与你取得联系，谢谢！"></textarea>
				<input type="text" name="remarks" placeholder="备注">
				<button>完成并发送</button>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'contactUs'
	}
</script>

<style type="text/css" scoped="scoped">
	.contactUs_container{
		max-width: 700px;
		margin:0 auto;
		text-align: center;
		padding:4rem 15px;
	}
	.contactUs_container>h2{
		font-size: 2rem;
		font-weight: bold;
	}
	.contactUs_container>p{
		font-size: 0.9rem;
		margin:1rem 0 2rem;
		color: #888;
	}

	.form_container>input,
	.form_container>textarea{
		border:1px solid #ddd;
		height: 35px;
		line-height: 35px;
		font-size: 0.9rem;
		padding:0 15px; 
		box-sizing: border-box;
		-webkit-appearance:none;
	}
	.form_container>textarea{
		height: 150px;
		resize: none;
	}
	.form_container>input:nth-child(1),
	.form_container>input:nth-child(5),
	.form_container>textarea{
		width: 100%;
	}
	.form_container>input:nth-child(5){
		margin-top: calc(1rem - 10px);
	}
	.form_container>input:nth-child(2){
		margin: 1rem 2% 1rem 0;
	}
	.form_container>input:nth-child(2),
	.form_container>input:nth-child(3){
		width: 49%;
	}
	.form_container>button{
		margin-top: 2rem;
		color: #fff;
		border:none;
		height: 35px;
		line-height: 35px;
		border-radius: 35px;
		padding: 0 3rem;
		font-size: 0.8rem;
		background-color: #ff6500;
	}

@media (max-width: 768px){
		.contactUs_container{
			padding:2rem 15px;
		}
	.contactUs_container>h2{
		font-size: 1.2rem;
	}
	.contactUs_container>p{
		font-size: 0.6rem;
		margin:0.5rem 0 1rem;
	}
	.form_container>input:nth-child(5){
		margin-top: 5px;
	}
	.form_container>input:nth-child(2){
		margin: 10px 2% 10px 0;
	}
}
</style>