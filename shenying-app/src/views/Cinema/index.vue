<template>
	<div id="main">
		<Header title="神影电影"></Header>
		<div id="content">
			<div class="movie_menu">
				<div class="city_switch">
					全城<i class="fa fa-caret-down"></i>
				</div>
				<div class="city_switch">
					品牌<i class="fa fa-caret-down"></i>
				</div>
				<div class="city_switch">
					特色<i class="fa fa-caret-down"></i>
				</div>
			</div>
			<CiList></CiList>
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
import Header from '../../components/Header';
import TabBar from '../../components/TabBar';
import CiList from '../../components/CiList';
export default {
     name:"Cinema",
	 components:{
		 Header,
		 TabBar,
		 CiList
	 }
}
</script>
<style scoped>
    #content .cinema_menu{
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #E6E6E6;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: white;
	}
</style>