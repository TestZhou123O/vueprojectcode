<template>
  <div class="movie_body">
	  <ul>
		  <li>
			  <div class="pic_show">
				 <img src="require('@/assets/images/001.png')" alt="" />
			  </div>
			  <div class="info_list">
				  <h2>机械师2：复活</h2>
				  <p>观众评<span class="grade">8.9</span></p>
				  <p>主演：杰森.斯坦森 杰西卡.阿尔巴 汤米.李.琼斯 杨紫琼 山姆.哈兹尔丁</p>
				  <p>今天50家影院放映800场</p>
			  </div>
			  <div class="btn_mall">购票</div>
		  </li>
		  <li>
		  			  <div class="pic_show">
		  				 <img src="require('@/assets/images/002.png')" alt="" />
		  			  </div>
		  			  <div class="info_list">
		  				  <h2>敢死队</h2>
		  				  <p>观众评<span class="grade">8.7</span></p>
		  				  <p>主演：西尔维斯特·史泰龙，杰森·斯坦森，李连杰，杜夫·龙格尔</p>
		  				  <p>今天50家影院放映750场</p>
		  			  </div>
		  			  <div class="btn_mall">购票</div>
		  </li>
		  <li>
		  			  <div class="pic_show">
		  				 <img src="require('@/assets/images/003.png')" alt="" />
		  			  </div>
		  			  <div class="info_list">
		  				  <h2>最后的巫师猎人</h2>
		  				  <p>观众评<span class="grade">8.4</span></p>
		  				  <p>主演：范·迪塞尔 伊利亚·伍德 露丝·莱斯利</p>
		  				  <p>今天50家影院放映600场</p>
		  			  </div>
		  			  <div class="btn_mall">购票</div>
		  </li>
		  <li>
		  			  <div class="pic_show">
		  				 <img src="require('@/assets/images/004.png')" alt="" />
		  			  </div>
		  			  <div class="info_list">
		  				  <h2>饥饿游戏3</h2>
		  				  <p>观众评<span class="grade">7.6</span></p>
		  				  <p>主演：詹妮弗·劳伦斯、乔什·哈切森、利亚姆·海姆斯沃斯</p>
		  				  <p>今天50家影院放映550场</p>
		  			  </div>
		  			  <div class="btn_mall">购票</div>
		  </li>
		  <li>
		  			  <div class="pic_show">
		  				 <img src="require('@/assets/images/005.png')" alt="" />
		  			  </div>
		  			  <div class="info_list">
		  				  <h2>钢铁骑士</h2>
		  				  <p>观众评<span class="grade">7.3</span></p>
		  				  <p>主演：本·温切尔、乔什·布雷纳、迈克·道尔</p>
		  				  <p>今天50家影院放映500场</p>
		  			  </div>
		  			  <div class="btn_mall">购票</div>
		  </li>
		  <li>
		  			  <div class="pic_show">
		  				 <img src="require('@/assets/images/006.png')" alt="" />
		  			  </div>
		  			  <div class="info_list">
		  				  <h2>奔跑者</h2>
		  				  <p>观众评<span class="grade">6.6</span></p>
		  				  <p>主演：尼古拉斯·凯奇，康妮·尼尔森，莎拉·保罗森，彼得·方达</p>
		  				  <p>今天50家影院放映500场</p>
		  			  </div>
		  			  <div class="btn_mall">购票</div>
		  </li>


	  </ul>
  </div>
</template>

<script>
export default {
     name:"NowPlaying",
}
</script>
<style scoped>
    #content .movie_body{
		flex: 1;overflow: auto;
	}
	.movie_body ul{
		margin: 0 12px;
		overflow: hidden;
	}
	.movie_body ul li{
		margin-top: 12px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #E6E6E6;
		padding-bottom: 10px;
	}
	.movie_body .pic_show{
		width: 64px;
		height: 90px;
	}
	.movie_body .pic_show img{
		width: 100%;
	}
	.movie_body .info_list{
		margin-left: 10px;flex: 1;position: relative;
	}
	.movie_body .info_list h2{
		font-size: 17px; line-height: 24px;
		width: 150px;overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.movie_body .info_list p{
		font-size: 13px;
		color: #666;
		line-height: 22px;
		width: 200px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.movie_body .info_list .grade{
		font-weight: 700;
		color: #faaf00;
		font-size: 15px;
	}
	.movie_body .info_list .img{
		width: 50px;
		position: absolute;
		right: 10px;
		top: 5px;
	}
	.movie_body .btn_mall, .movie_body .btn_pre{
		width: 47px;
		height: 27px;
		line-height: 28px;
		text-align: center;
		background-color: #f03d37;
		color: #fff;
		border-radius: 4px;
		font-size: 12px;
		cursor: pointer;
	}
	.movie_body .btn_pre{
		background-color: #3c9fe6;
	}
</style>
