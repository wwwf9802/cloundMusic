<template>
	<div>
		<div v-if='pages<=9' class="pagination">
			<div class="leftIcon iconBtn" :class="{'dis':act<=0}"  @click="subAct"><i class="iconfont icon-left"></i></div>
				<span v-for='item in list' :class="{'active':item===act}" @click="changeAct($event)">{{item+1}}</span>
			<div class="rightIcon iconBtn" :class="{'dis':act>=pages-1}"  @click="addAct"><i class="iconfont icon-right"></i></div>
		</div>
		<div v-else-if='flag' class="pagination">
			<div class="leftIcon iconBtn" :class="{'dis':act<=0}"  @click="subAct"><i class="iconfont icon-left"></i></div>
				<span v-for='item in frontList' :class="{'active':item===act}" @click="changeAct($event)">{{item+1}}</span>
				<b>···</b>
				<span @click="changeAct($event)">{{pages}}</span>
			<div class="rightIcon iconBtn" :class="{'dis':act>=pages-1}"  @click="addAct"><i class="iconfont icon-right"></i></div>
		</div>
		<div v-else-if='act>pages-6' class="pagination">
			<div class="leftIcon iconBtn" :class="{'dis':act<=0}"  @click="subAct"><i class="iconfont icon-left"></i></div>
			<span @click="changeAct($event)">1</span>
			<b>···</b>
			<span v-for='item in behindList' :class="{'active':item===act}" @click="changeAct($event)">{{item+1}}</span>
			<div class="rightIcon iconBtn" :class="{'dis':act>=pages-1}"  @click="addAct"><i class="iconfont icon-right"></i></div>
		</div>
		<div v-else class="pagination">
			<div class="leftIcon iconBtn" :class="{'dis':act<=0}"  @click="subAct"><i class="iconfont icon-left"></i></div>
				<span @click="changeAct($event)">1</span>
				<b>···</b>
				<span v-for='item in midList' :class="{'active':item===act}" @click="changeAct($event)">{{item+1}}</span>
				<b>···</b>
				<span @click="changeAct($event)">{{pages}}</span>
			<div class="rightIcon iconBtn" :class="{'dis':act>=pages-1}"  @click="addAct"><i class="iconfont icon-right"></i></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'pagination',
		props:['pages'],
		data() {
			return {
				act:0,
				list:[],
				frontList:[],
				behindList:[],
				midList:[],
			}
		},
		computed:{
			flag(){
				if(this.act<=4&&this.pages>9){
					return true
				}
				return false
			}
		},
		methods: {
			changeAct(e){
				let value=e.currentTarget.innerHTML;
				this.act=Number(value-1);
			},
			reset(){
				this.act
			},
			subAct(){
				if(this.act>0){
					this.act--
				}
			},
			addAct(){
				if(this.act<this.pages-1){
					this.act++
				}
			}
			
		},
		watch:{
			act(newvalue){
				this.midList=[];
				for(let i=newvalue-3;i<newvalue+4;i++){
					this.midList.push(i);
				}
				this.$emit('update',newvalue);
			},
			pages(){
				this.list=[];
				for(let i=0;i<this.pages;i++){
					this.list.push(i);
				}
				
				
				if(this.pages.length<=9){
					this.frontList=this.list.slice(0)
				}else{
					this.frontList=[0,1,2,3,4,5,6,7];
				}
				this.behindList=this.list.slice(this.list.length-8,this.list.length+1);
			}
		},
		created() {
			this.list=[];
			for(let i=0;i<this.pages;i++){
				this.list.push(i);
			}
			
			
			if(this.pages.length<=9){
				this.frontList=this.list.slice(0)
			}else{
				this.frontList=[0,1,2,3,4,5,6,7];
			}
			this.behindList=this.list.slice(this.list.length-8,this.list.length+1);
		},
		mounted() {
			
		}
	}
</script>
<style lang="scss" scoped>
	.pagination {
		height: 50px;
		display:flex;
		 align-items: center;
    	justify-content:center;
		.iconBtn {
			cursor:pointer;
			.iconfont{
				font-size:10px;
			}
			@include flex-wh-center;
			width:22px;
			height:22px;
			border:1px solid #ddd;
			&.dis{
				.iconfont{
					color:#ccc;
				}
			}
			
			
			&:hover{
				background:#ecedf1;
			}
			&.dis:hover{
				background:transparent;
			}
		}
		span{
			cursor: pointer;
			display:block;
			padding:0 8px;
			&.active{
				color:#c62f2f;
				text-decoration:underline;
			}
		}
	}
</style>