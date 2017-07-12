$(document).ready(function(){
	var $banner_smallImg_ul=$('.banner_smallImg_ul');
	if($banner_smallImg_ul.find('li').length>5){
	var $clone_lis=$banner_smallImg_ul.find('li').eq($banner_smallImg_ul.find('li').length-1).clone();
	$banner_smallImg_ul.append($clone_lis);
	}
	var $banner_smallImg_lis=$banner_smallImg_ul.find('li');
	var $lis_w=$banner_smallImg_ul.find('li').eq(0).outerWidth(true);
	var num=parseInt($banner_smallImg_lis.length-5);
	var $prev=$('.spot_prev');
	var $next=$('.spot_next');
	var l=0;
	var index=0;
	var small_num=0;
	$banner_smallImg_ul.width(parseInt($lis_w*($banner_smallImg_lis.length)));
	$banner_smallImg_lis.eq(0).css('border','2px solid #ff9600');
	var $changImg=$banner_smallImg_lis.eq(0).find('img').attr('src');

	if($banner_smallImg_lis.length>5){
		$banner_smallImg_lis.click(function(){
		if($(this).index()>0){
			index=$(this).index();
			l=parseInt($lis_w*$(this).index()-$lis_w);
			if($(this).index()<$banner_smallImg_lis.length){
			if($(this).index()>num){
				l=parseInt($lis_w*num-$lis_w);
			}
			$('.banner_bigImg').attr('src',$changImg);
				$banner_smallImg_ul.stop().animate({
					'left':-l+'px'
				});
			}
		}
		$changImg=$(this).find('img').attr('src');
		$(this).css('border','2px solid #ff9600').siblings('li').css('border','none');
		$('.banner_bigImg').attr('src',$changImg);
		
		// }else if($(this).index()<$banner_smallImg_lis.length){
		// 	l=parseInt($lis_w*$(this).index()-$lis_w);
		// 	$('.banner_bigImg').attr('src',$changImg);
		// 		$banner_smallImg_ul.animate({
		// 			'left':-l+'px'
		// 		});
		// }
		})
		$next.click(function(){
		if(index<$banner_smallImg_lis.length-2){
			index++;
			l=parseInt($lis_w*index-$lis_w);
				if(index<$banner_smallImg_lis.length-1){
					$changImg=$banner_smallImg_lis.eq(index).find('img').attr('src');
					$banner_smallImg_lis.eq(index).css('border','2px solid #ff9600').siblings('li').css('border','none');
					$('.banner_bigImg').attr('src',$changImg);
					if(index<=num){
						$('.banner_bigImg').attr('src',$changImg);
							$banner_smallImg_ul.stop().animate({
								'left':-l+'px'
							});
					}
				}
		} 	
		})
		$prev.click(function(){
		if(index>0){
			index--;
			// if(index>0){
			// 	l=-parseInt($lis_w*index-$lis_w);
			// }else{
			// 	l=-parseInt($lis_w*index);
			// }
			l= index>0 ? -parseInt($lis_w*index-$lis_w): -parseInt($lis_w*index);
			$changImg=$banner_smallImg_lis.eq(index).find('img').attr('src');
			$banner_smallImg_lis.eq(index).css('border','2px solid #ff9600').siblings('li').css('border','none');
			$('.banner_bigImg').attr('src',$changImg);
			if(index<num){
				$('.banner_bigImg').attr('src',$changImg);
				$banner_smallImg_ul.stop().animate({
					'left':l+'px',
				});
			}
			
		}		
		})
	}else{
		$banner_smallImg_lis.click(function(){
			small_num=$(this).index();
			$changImg=$(this).find('img').attr('src');
			$(this).css('border','2px solid #ff9600').siblings('li').css('border','none');
			$('.banner_bigImg').attr('src',$changImg);
			
		});
		$next.click(function(){
			if(small_num>=$banner_smallImg_lis.length-1){
				small_num=-1;
			}
			small_num++;
			$changImg=$banner_smallImg_lis.eq(small_num).find('img').attr('src');
			$banner_smallImg_lis.eq(small_num).css('border','2px solid #ff9600').siblings('li').css('border','none');
			$('.banner_bigImg').attr('src',$changImg);
		});
		$prev.click(function(){
			small_num--;
			$changImg=$banner_smallImg_lis.eq(small_num).find('img').attr('src');
			$banner_smallImg_lis.eq(small_num).css('border','2px solid #ff9600').siblings('li').css('border','none');
			$('.banner_bigImg').attr('src',$changImg);
			if(small_num<0){
				small_num=$banner_smallImg_lis.length-1;
			}
		})	
	}	
})

