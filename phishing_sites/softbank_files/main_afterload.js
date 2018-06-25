// **************************************************
// **************************************************
// rev 2018-04-03 2100
// Custom JavaScript code
// main_afterload.js
// **************************************************
// **************************************************



// BS対応
if(
	!( !!location.hostname.match(/my\.softbank\.jp$/) && !!location.pathname.match(/^\/msb\/d\/webLink\/doSend\/CFS01001[01234]/) )
){
	

console.log("main_afterload");
if(typeof _dateserial == 'undefined') _dateserial = '';

// **************************************************
// **************************************************
// function mysbUtil
// rev 2015-09-02 
// Create: Kusuto
// **************************************************
// **************************************************

try{
	if( typeof mysbUtil == 'undefined'){ mysbUtil = {} };

    mysbUtil.setMysbInfo = mysbSetMysbinfo;
    mysbUtil.getMysbInfo = mysbGetMysbinfo;

}catch(e){};
// End of function mysbUtil **************************************************



// **************************************************
// **************************************************
//  MySBトップページへのRT導入
// rev 2016-06-08 
// Create: Kusuto
// **************************************************
// **************************************************
try{

    if(
	    ( !!location.hostname.match(/my\.softbank\.jp$/) && !!location.pathname.match(/^\/msb\/d\/top\/?$/) )
    ){
		$("head").append(
			'<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/base_async.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
			+ '<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/recommend.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
		);
	}

}catch(e){};// End of MySBトップページへのRT導入


// **************************************************
// **************************************************
//  MySB スマホトップ 追加枠設置
// rev 2017-03-22 
// Create: Kusuto
// **************************************************
// **************************************************
try{
	if(
		false
	){

		if( !!location.hostname.match(/my\.softbank\.jp$/) && !!location.pathname.match(/^\/msb\/d\/top\/?$/) && $("body#portal").length != 0 ){

			$("[data-sb-sem-contents=mysb_top_offer].sb-sem-contents").after('<div id="RT_SP_MYSB-TOP_dynamicWeb-default"></div>');
			$("body").append('<style> #RT_SP_MYSB-TOP_dynamicWeb-default{ text-align: center;margin-top: 10px;    border: initial !important;    /*border-bottom: 1px solid #e3e4e5 !important;*/    /* padding-bottom: 10px; */ }</style>');

			$("body").append('<style> [data-sb-sem-contents=mysb_top_offer].sb-sem-contents{ display:none;}</style>');	
		}

//		$("#purposes").before(
//			'<div id="RT_SP_MYSB-TOP_addition-01" style="margin-top:10px;border-bottom: 1px solid #e3e4e5;padding-bottom: 10px;"><a href="http://ckantan.jp/dm/mob/dm_comfirm.jsp?cmcd=4100050002"><img src="//cdn.softbank.jp/mysoftbank/set/common/s/img/rtoaster/top/bnr_sbmall_600x150_20160804.jpg"></a></div>'
//		);
	}
}catch(e){};// End of MySB スマホトップ 追加枠設置



// **************************************************
// **************************************************
// RT導入(MySBトップページ以外)
// rev 2016-06-02 
// Create: Kusuto
// **************************************************
// **************************************************
try{

    if(
	    ( !!location.hostname.match(/card\.my\.softbank\.jp$/) && !!location.pathname.match(/^\/(sp\/)?$/) )
    ){
		$("head").append(
			'<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/base_async.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
			+ '<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/recommend.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
		);
	}

}catch(e){};// End of MySBトップページへのRT導入


// **************************************************
// **************************************************
//  MySB CEP OFFER
// rev 2017-06-15 
// Create: Kusuto
// **************************************************
// **************************************************
try{

	//請求額（ご利用料金）
	if( !!location.hostname.match(/^bl11\.my\.softbank\.jp$/) && !!s.pageName.match(/WO.010/) ){

		$("body").append('<img src="https://my.softbank.jp/msb/d/CepApi/wco_wox010&wco_wox010=01" width="0" height="0" style="display:none;">');
	}

	//割賦契約
	if( !!location.hostname.match(/^bl11\.my\.softbank\.jp$/) && !!s.pageName.match(/WO.090/) ){

		$("body").append('<img src="https://my.softbank.jp/msb/d/CepApi/wco_wox090&wco_wox090=01" width="0" height="0" style="display:none;">');
	}

	//月月割
	if( !!location.hostname.match(/^bl11\.my\.softbank\.jp$/) && !!s.pageName.match(/WO.100/) ){

		$("body").append('<img src="https://my.softbank.jp/msb/d/CepApi/wco_wox100&wco_wox100=01" width="0" height="0" style="display:none;">');
	}

	//契約内容照会トップ
	if( !!location.hostname.match(/^ct11\.my\.softbank\.jp$/) && !!s.pageName.match(/WBC_._INF001/) ){

		$("body").append('<img src="https://my.softbank.jp/msb/d/CepApi/wbc_wbc_x_inf001&wbc_wbc_x_inf001=01" width="0" height="0" style="display:none;">');
	}

}catch(e){};// End of MySB CEP OFFER

// **************************************************
// **************************************************
// Chat trial
// rev 2017-12-19 
// Create: Kusuto
// **************************************************
// **************************************************
try{
	if(
		(!!document.URL.match(/https:\/\/ct11\.my\.softbank\.jp\/WBC\/icv/) && !!s.pageName.match(/^WBC_[AI]_(PLN.*|OPT.*)/)) 
		||
		(!!document.URL.match(/https:\/\/bl11\.my\.softbank\.jp\//) && !!s.pageName.match(/^(WOS040|WOS043)/)) 		
	){
		$('head').append('<script src="//cdn.softbank.jp/mysoftbank/set/common/p/js/chat/chat_main.js"></script>')
	}



	if(
		(!!document.URL.match(/https:\/\/[A-Za-z][A-Za-z]\.ct11\.my\.softbank\.jp\/WBC\/icv/) && !!s.pageName.match(/^WBC_[AI]_(PLN.*|OPT.*)/)) 
		||
		(!!document.URL.match(/https:\/\/bl11\.....\.my\.softbank\.jp\//) && !!s.pageName.match(/^(WOS040|WOS043)/))
	){
		$('head').append('<script src="https://it-coreliscare-com.mb.softbank.jp/cc/corelis-care-chat-mysb.js"></script>')
	}
}catch(e){};


// **************************************************
// **************************************************
// Patch
// rev 2018-03-01 
// Create: Kusuto
// **************************************************
// **************************************************
try{

    if( !!location.hostname.match(/^(..[0-9]+\.)?my\.softbank\.jp$/) ){
		$('#questionnaire_footer').css('display','none');
    }


	// 臨時対応　ポイントトップ 期間固定Tポイントテーブル追加
    if( !!location.hostname.match(/^ct11\.my\.softbank\.jp$/) && !!s.pageName.match(/WBZR_._PNT001/) && $('a[href*="points.yahoo.co.jp/book"]').length == 0 ){
    	$($('table.tbl.ft')[0]).after(
			'<table class="tbl ft m-top-10"><colgroup><col class="w-20"><col class="w-35"><col class="w-45"></colgroup><tbody><tr><th colspan="2">期間固定Tポイント<br>（長期継続特典など）</th><td class="right"><a href="https://points.yahoo.co.jp/book" target="_blank">確認する</a></td></tr></tbody></table>'
		);
    }


	// 臨時対応　ポイント履歴 期間固定Tポイント注釈追加
    if( !!location.hostname.match(/^ct11\.my\.softbank\.jp$/) && !!s.pageName.match(/WBZR_._PNT111/) ){
		$("#tabitem_2").after('<ul class="notice-list"><li><span>※</span><div><strong class="attention">期間固定Tポイントは記載されている付与日の翌日午後１時よりご利用いただけます。</strong></div></li></ul>');
    }


	//迷惑電話ブロック臨時対応
	if( !!location.pathname.match(/\/WBC\/icv/) && !!s.pageName.match(/WBC_._OPT.../) ){
		$($('img[src*="html/optionService/pc/images/031P2D_CAROUSEL.png"]')[0]).attr("src","//cdn.softbank.jp/mysoftbank/set/data/ct/option-service/p/img/carousel/031P2D_carousel.png");
		$($('img[src*="html/optionService/iPhone/images/031P2D_CAROUSEL.png"]')[0]).attr("src","//cdn.softbank.jp/mysoftbank/set/data/ct/option-service/s/img/carousel/031P2D_carousel.png");
	}

	// Chat 非表示
    if(
	    ( !!location.hostname.match(/my\.softbank\.jp$/) && !!location.pathname.match(/^\/msb\/d\/top\/?$/) )
    ){
		$(".chat").hide(); // for SP
		$("head").append('<style>.chat{display:none !important;}</style>'); // for SP

		$(".menu-chatconsult").hide(); // for PC
		$("head").append('<style>.menu-chatconsult{display:none !important;}</style>'); // for PC
	}

}catch(e){}


// **************************************************
// **************************************************
//  アニメ放題 RT
// rev 2015-10-15 
// Create: Kusuto
// **************************************************
// **************************************************
try{

$(function(){
    if( !!location.hostname.match(/mk11\.my\.softbank\.jp/) && !!s.pageName.match(/\/anime-hodai\/cancel\/s\//) ){

		$("head").append(
			'<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/base_async.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
			+'<scri'+'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/recommend.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
		);


        $($(".pr_arena_promotion")[0]).after(
  '<!--  Rtoaster 20150929 -->'
+ '<div id="rt-mysb_option_sp_cancel_animehodai_retention">'
+ '<!-- rt-mysb_option_sp_cancel_animehodai_retention -->'
+ '<div id="rt-mysb_option_sp_cancel_animehodai_retention_1"></div>'

+ '<ul id="rt-mysb_option_sp_cancel_animehodai_retention_2" class="thumbnails">'
+ '<li id="rt-mysb_option_sp_cancel_animehodai_retention_2_1"></li>'
+ '<li id="rt-mysb_option_sp_cancel_animehodai_retention_2_2"></li>'
+ '<li id="rt-mysb_option_sp_cancel_animehodai_retention_2_3"></li>'
+ '<li id="rt-mysb_option_sp_cancel_animehodai_retention_2_4"></li>'
+ '<li id="rt-mysb_option_sp_cancel_animehodai_retention_2_5"></li>'
+ '<li id="rt-mysb_option_sp_cancel_animehodai_retention_2_6"></li>'
+ '<li id="rt-mysb_option_sp_cancel_animehodai_retention_2_7"></li>'
+ '<li id="rt-mysb_option_sp_cancel_animehodai_retention_2_8"></li>'
+ '<li id="rt-mysb_option_sp_cancel_animehodai_retention_2_9"></li>'
+ '<li id="rt-mysb_option_sp_cancel_animehodai_retention_2_10"></li>'
+ '</ul>'

+ '<div id="rt-mysb_option_sp_cancel_animehodai_retention_3"></div>'
+ '</div>'
+ '<!-- /Rtoaster 20150929 -->'
        	);


		window.setTimeout(function(){
			console.log($("#rt-mysb_option_sp_cancel_animehodai_retention a[data-virtualpath]").length);
			$("#rt-mysb_option_sp_cancel_animehodai_retention a[data-virtualpath]").each(function(){
				//
				var _vpatch = $(this).attr("data-virtualpath");

				$(this).mousedown(function(){
					//
					console.log(_vpatch);
					//Rtoaster.init();
					//console.log("Rtoaster.init");
					Rtoaster.track("_" + _vpatch);
					console.log("Rtoaster.track");

				});
			});
		},2000);
    }//End of if


});


}catch(e){};
//  End of アニメ放題 RT


// **************************************************
// **************************************************
//  とく放題 RT
// rev 2015-11-09 
// Create: Kusuto
// **************************************************
// **************************************************
try{

$(function(){
    if( !!location.hostname.match(/mk11\.my\.softbank\.jp/) && !!s.pageName.match(/\/tokuhodai\/cancel\/s\//) ){

		$("head").append(
			'<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/base_async.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
			+'<scri'+'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/recommend.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
		);

        $($(".pr_arena_promotion")[0]).after(
  '<!--  Rtoaster 20151021 -->'
+ '<div id="rt-mysb_option_sp_cancel_tokuhodai_retention">'
+ '<!-- rt-mysb_option_sp_cancel_tokuhodai_retention -->'

+ '<ul id="rt-mysb_option_sp_cancel_tokuhodai_retention_1">'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_1_1"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_1_2"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_1_3"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_1_4"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_1_5"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_1_6"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_1_7"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_1_8"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_1_9"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_1_10"></li>'
+ '</ul>'

+ '<ul id="rt-mysb_option_sp_cancel_tokuhodai_retention_2">'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_2_1"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_2_2"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_2_3"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_2_4"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_2_5"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_2_6"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_2_7"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_2_8"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_2_9"></li>'
+ '<li id="rt-mysb_option_sp_cancel_tokuhodai_retention_2_10"></li>'
+ '</ul>'

+ '<ul class="annotation_fix fs_11" style="display:none;">'
+ '<li>※　掲載商品はあくまで一例であり、期間により異なります。</li>'
+ '<li>※　2015年5月1日時点の情報です。</li>'
+ '<li>※　写真はイメージです。</li>'
+ '<li>※　表示価格は税込です。単価は小数点以下切り捨てで表示しております。</li>'
+ '</ul>'

+ '</div>'
+ '<!-- /Rtoaster 20151021 -->'
    	);


		window.setTimeout(function(){

			console.log($("#rt-mysb_option_sp_cancel_tokuhodai_retention a").length);
			$("#rt-mysb_option_sp_cancel_tokuhodai_retention a").each(function(){
				//
				var _vpatch = $(this).attr("data-virtualpath");

				$(this).mousedown(function(){
					//
					console.log(_vpatch);
					//Rtoaster.init();
					//console.log("Rtoaster.init");
					Rtoaster.track("_" + _vpatch);
					console.log("Rtoaster.track");

				});
			});

		},2000);


		//月額料
		$('.fee').parents('table').each(function(){
			$(this).before('<div id="rt-mysb_option_sp_cancel_tokuhodai_retention_amt_1"></div>');
			$(this).remove();
		});

    }//End of if


});//End of $(function)

}catch(e){};
//  End of とく放題 RT


// **************************************************
// **************************************************
//  ブック放題 RT
// rev 2015-09-30 
// Create: Kusuto
// **************************************************
// **************************************************
try{

$(function(){
    if( !!location.hostname.match(/mk11\.my\.softbank\.jp/) && !!s.pageName.match(/\/book-hodai\/cancel\/s\//) ){

		$("head").append(
			'<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/base_async.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
			+'<scri'+'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/recommend.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
		);

        $($(".hdg-l3")[0]).before(
  '<!--  Rtoaster 20150929 -->'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention">'

+ '<!-- rt-mysb_option_sp_cancel_bookhodai_retention -->'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_1">'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_1_1"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_1_2"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_1_3"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_1_4"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_1_5"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_1_6"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_1_7"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_1_8"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_1_9"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_1_10"></div>'
+ '</div><!-- _1 -->'

+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_2">'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_2_1"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_2_2"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_2_3"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_2_4"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_2_5"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_2_6"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_2_7"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_2_8"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_2_9"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_2_10"></div>'
+ '</div><!-- _2 -->'

+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_3">'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_3_1"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_3_2"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_3_3"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_3_4"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_3_5"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_3_6"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_3_7"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_3_8"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_3_9"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_3_10"></div>'
+ '</div><!-- _3 -->'

+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_4">'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_4_1"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_4_2"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_4_3"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_4_4"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_4_5"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_4_6"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_4_7"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_4_8"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_4_9"></div>'
+ '<div id="rt-mysb_option_sp_cancel_bookhodai_retention_4_10"></div>'
+ '</div><!-- _4 -->'


+ '</div>'
+ '<!-- /Rtoaster 20150929 -->'
        	);
    }

});

}catch(e){};
//  End of ブック放題 RT

// ブック放題 臨時対応 20160627
try{
    if( !!location.hostname.match(/(qa\..+\.mb)|(mk11\.my)\.softbank\.jp/) && !!s.pageName.match(/\/book-hodai\/cancel\/.\//) ){

		$($("ol.list-order.note")[0]).html(
			'<li>当画面内の「退会する｣ボタンを押してください。</li>' +
			'<li>内容を確認の上、ページ最下部の「退会する」ボタンを押すと、手続きが完了いたします。</li>'
		);
		$('div.uni-box-01 > ul > li > a[href*="http://c.mb.softbank.jp/r?cmcd="]').html('退会する');

    }

    if( !!location.hostname.match(/(qa\..+\.mb)|(mk11\.my)\.softbank\.jp/) && !!s.pageName.match(/\/book-hodai\/cancel\/p\//) ){
		$('div.uni-box-01 > ul > li > a[href*="http://c.mb.softbank.jp/r?cmcd=4100038288"]').attr('href','http://c.mb.softbank.jp/r?cmcd=4100049176');

    }

}catch(e){};


// **************************************************
// **************************************************
//  NetFlix RT
// rev 2016-04-22 
// Create: Kusuto
// **************************************************
// **************************************************
try{

$(function(){
    if( !!location.hostname.match(/(qa\..+\.mb)|(mk11\.my)\.softbank\.jp/) && !!s.pageName.match(/\/netflix\/cancel\/s\//) ){

		$("head").append(
			'<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/base_async.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
			+'<scri'+'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/recommend.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
		);

        $($("h3.hdg-l3")[0]).before(
  '<!--  Rtoaster 20160422 -->'
+ '<div id="rt-mysb_option_sp_cancel_netflix_retention">'
+ '<!-- rt-mysb_option_sp_cancel_netflix_retention -->'

+ '<ul id="rt-mysb_option_sp_cancel_netflix_retention_1">'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_1_1"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_1_2"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_1_3"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_1_4"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_1_5"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_1_6"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_1_7"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_1_8"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_1_9"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_1_10"></li>'
+ '</ul>'

+ '<ul id="rt-mysb_option_sp_cancel_netflix_retention_2">'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_2_1"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_2_2"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_2_3"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_2_4"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_2_5"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_2_6"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_2_7"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_2_8"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_2_9"></li>'
+ '<li id="rt-mysb_option_sp_cancel_netflix_retention_2_10"></li>'
+ '</ul>'

+ '</div>'
+ '<!-- /Rtoaster 20160422 -->'
    	);


		$("table > tbody > tr > td.right > a.uni-btn-02").on('mousedown',function(){
			var _url = $(this).attr("href");
			if( !_url.match(/https?:\/\/www\.softbank\.jp\/mysoftbank\/_crossdomain-track\//) && $(this).attr("noredirect") != 'true' ){
				if( !!_url.match(/^\/[^\/].*/) ){
					_url = location.protocol + '//' + location.hostname + _url;
				}
				$(this).attr("href", "https://www.softbank.jp/mysoftbank/_crossdomain-track/r/?url=" + encodeURIComponent( _url ) + "&ac=main");
			}
		});

    }//End of if


});//End of $(function)

}catch(e){};
//  End of Netflix RT



// **************************************************
// **************************************************
// App Pass RT
// rev 2016-06-20 
// Create: Kusuto
// **************************************************
// **************************************************
try{

$(function(){
    if( !!location.hostname.match(/(qa\..+\.mb)|(mk11\.my)\.softbank\.jp/) && !!location.pathname.match(/\/apppass\/cancel\/s\//) ){

		$("head").append(
			'<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/base_async.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
			+'<scri'+'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/recommend.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
		);

        $($(".pr_description")[0]).html(
  '<!--  Rtoaster 20160620 -->'
+ '<div id="rt-mysb_option_sp_cancel_apppass_retention">'
+ '<!-- rt-mysb_option_sp_cancel_apppass_retention -->'

+ '<ul id="rt-mysb_option_sp_cancel_apppass_retention_1">'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_1_1">'
+ '<div class="pr_description">'
+ '<p class="mt_0">エンタメ・ゲーム・ツール・ライフスタイル・ビジネスなど、総額4万円相当の超人気アプリが取り放題のサービスです。追加アイテム購入の500円分のチケットも毎月もらえます。</p>'
+ '<p>【POINT1】 総額4万円以上のアプリが月額370円で使える！<br>'
+ '【POINT2】 アイテム購入に使える500円分のApp Passチケットが毎月もらえる！<br>'
+ '【POINT3】 海外で人気のアプリも利用できる！</p>'
+ '</div>'

+'</li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_1_2"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_1_3"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_1_4"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_1_5"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_1_6"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_1_7"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_1_8"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_1_9"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_1_10"></li>'
+ '</ul>'

+ '<ul id="rt-mysb_option_sp_cancel_apppass_retention_2">'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_2_1"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_2_2"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_2_3"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_2_4"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_2_5"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_2_6"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_2_7"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_2_8"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_2_9"></li>'
+ '<li id="rt-mysb_option_sp_cancel_apppass_retention_2_10"></li>'
+ '</ul>'

+ '</div>'
+ '<!-- /Rtoaster 20160620 -->'
    	);


    }//End of if


});//End of $(function)

}catch(e){};
//  End of App Pass RT

// **************************************************
// **************************************************
//  あんしん保証パック RT
// rev 2015-11-11 
// Create: Kusuto
// **************************************************
// **************************************************
try{

	$(function(){
	    if( !!location.hostname.match(/ct11\.my\.softbank\.jp/) && !!s.pageName.match(/WBC_[AI]_OPT032/) ){

	    	_productId_optionService_before = $('input[name="optionId"][id="remove"]').val();

	    	if( !!_productId_optionService_before.match(/301.../) ){
		        $($(".pr_description")[0]).after(
		        	'<div id="rt-mysb_option_sp_cancel_summary_301000_promotion"></div>'
	        	);

				$("head").append(
					'<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/base_async.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
					+'<scri'+'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/rtoaster/recommend.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
				);	    		
	    	}
		}
	});

}catch(e){};
//  End of あんしん保証パック RT


// **************************************************
// **************************************************
// Amazon Gift Code
// rev 2015-12-08 
// Create: Kusuto
// **************************************************
// **************************************************
try{
    if( !!location.hostname.match(/ct11\.my\.softbank\.jp$/) && !!s.pageName.match(/WBZR_._DGC003/) ){

		(function(){
			if( typeof ec_arry != undefined ){
				var transactionId = ec_arry["ec:setAction"].purchase.id;
				var ecProducts = [];

				var transactionTotal = 0;
				for(var i = 0 ; i < ec_arry["ec:addProduct"].length ; i++){
					var _price =  Number(ec_arry["ec:addProduct"][i]["price"].replace(/,/g,''));
					if( String(_price) == 'NaN' ){ _price = 0; }

					ecProducts[i] = {
					    'sku': ec_arry["ec:addProduct"][i]["id"],
					    'name': ec_arry["ec:addProduct"][i]["name"],
					    'category': 'デジタルコード',
					    'price': _price,
					    'quantity': ec_arry["ec:addProduct"][i]["quantity"]
					}

					transactionTotal = transactionTotal + _price;

				}

				var transactionProducts = ecProducts;

				if( typeof dataLayer != undefined ){
					dataLayer.push({
						'event' : 'normalEcTransact_19879910-8',
						'transactionId' : transactionId,
						'transactionTotal' : transactionTotal,
						'transactionProducts' : transactionProducts 
					});
				}else{ console.error("dataLayer is not undefined")}
			}// End of if ec_arry			
		})()

    }
}catch(e){} // End of Amazon Gift Code


/////////////////////////////////////
try{

 
	$(function(){
		if(typeof(_mysb_customlink) != 'undefined'){
		    console.log(_mysb_customlink);

			if(new Date(2015, 4 - 1, 1) - new Date() <= 0){
				mysbUtil.eventTrack("Click",_mysb_customlink);
			}else{
			   var s=s_gi(s_account); s.tl(true,'o',_mysb_customlink);
			}
	    }
	});


}catch(e){};

try{
    
    $(function(){
    
    
        if(document.domain.match(/my\.softbank\.jp/)){
      
            // Logoutボタンカウント
            $("#header a[href*=logout]").mousedown(function(){
                mysbUtil.eventTrack("Click","LogoutButton_#header");
            });

        }


        if(location.pathname.match(/sbid_auth/)){
            if(typeof(_mysb_capy_retry) != 'undefined'){
                _mysb_clicktrack('mysb_casis_capyRetry_' + _mysb_capy_retry);
            }
            
            //var _appendText = '<span style="display:block;text-align:right;font-size:13px;"></span>';
            //$('div#mysb_capy').append(_appendText);
        }

      
        function _mysb_clicktrack(trackId){
            
			if(new Date(2015, 4 - 1, 1) - new Date() <= 0){
				mysbUtil.eventTrack("Click",trackId);
			}else{
		        var s=s_gi(s_account); s.tl(this,'o',trackId);
			}


        }
    
    
    });
    
}catch(e){};

// **************************************************
// **************************************************
// setMysbinfo & getMysbinfo
// rev 2014-10-10 beta
// Filename: ----
// Create: Kusuto
// **************************************************
// **************************************************


try{

    //対象URL判定
    if(
    (document.domain.match(/^my\.softbank\.jp$/i) || document.domain.match(/^[a-z][a-z]\.my\.softbank\.jp$/i))
     &&
    (location.pathname.match(/^\/msb\/d\/top$/i) || location.pathname.match(/^\/msb\/d\/webLink\/doSend\//i))
    ){

        if(typeof s == 'undefined'){
            var _mysbuserno = 'undefined';
        }else if(typeof s.prop34 != 'undefined'){
            var _mysbuserno = s.prop34;
            var _model_code = s.prop38;
            var _date_contract = s.prop36;
            var _date_upgrade = s.prop35;
        }else if(typeof _s_prop34 != 'undefined'){
            //var _mysbuserno = _s_prop34;
            //var _model_code = _s_prop38;
            //var _date_contract = _s_prop36;
            //var _date_upgrade = _s_prop35;
            console.log("_s_prop34 != undefined");
        }else{
            var _mysbuserno = 'undefined';
        }

        if( _mysbuserno != 'undefined' && typeof _mysbuserno != 'undefined'){
            var _ret = mysbSetMysbinfo(_mysbuserno , _model_code , _date_contract , _date_upgrade);
            console.log("setMysbinfo:" + _ret);
        }
    }

}catch(e){};

function mysbSetMysbinfo( _mysbuserno , _model_code , _date_contract , _date_upgrade ){
   if(!_mysbuserno) return false;
    var d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "mysbuser" + "=" + _mysbuserno + "|" + _model_code  + "|" + _date_contract +"|" + _date_upgrade + "; " + expires + "; " + "domain=softbank.jp ; "+ "path=/ ; " ;

    return true;
}

function mysbGetMysbinfo( _keyname ){
    //console.log(typeof _keyname);
    if(typeof _keyname == 'undefined'){
        var keylist = [ "userno" , "model_code" , "date_contract" , "date_upgrade" ];
        var _name = "mysbuser" + "=";
        var _cookies = document.cookie.split(';');
        for(var i=0; i < _cookies.length; i++) {
            var _cookie = _cookies[i];
            if (_cookie.charAt(0)==' ') _cookie = _cookie.substring(1);
            if (_cookie.indexOf(_name) != -1) {
                var _mysbusers = _cookie.substring(_name.length, _cookie.length);
                
                var _mysbuser = _mysbusers.split('|');
                
                var _mysbinfo_obj = new Object;
                for(var j=0 ; j < _mysbuser.length ; j++ ){
                    _mysbinfo_obj[keylist[j]] = _mysbuser[j];
                }
                
                return _mysbinfo_obj;
            }
        }
        return false;
    }
    else if(typeof _keyname == 'string'){
        var keylist = { "userno":0 , "model_code":1 , "date_contract":2 , "date_upgrade":3 };
        var _name = "mysbuser" + "=";
        var _cookies = document.cookie.split(';');
        for(var i=0; i < _cookies.length; i++) {
            var _cookie = _cookies[i];
            if (_cookie.charAt(0)==' ') _cookie = _cookie.substring(1);
            if (_cookie.indexOf(_name) != -1) {
                var _mysbusers = _cookie.substring(_name.length, _cookie.length);
                
                var _mysbuser = _mysbusers.split('|');
                if(typeof keylist[_keyname] != 'undefined'){return _mysbuser[keylist[_keyname]]; }else{return false;};
            }
        }
        return false;
    }else{return false;}
}


// **************************************************
// **************************************************
// clearBugCookies
// rev 2015-04-27
// Filename: ----
// Create: Kusuto
// **************************************************
// **************************************************

clearBugCookies();

function clearBugCookies(){
    if(
    	(
		    (document.domain.match(/^id\.my\.softbank\.jp$/i) )
		     &&
		    (location.pathname.match(/^\/sbid_auth\//i))
	    )
	    ||
	    (
	    	(location.hostname + location.pathname).match(/my\.softbank\.jp\/msb\/d\/top$/i)
	    )

    ){

        var _delCookieList = [
            's_entprop','s_lp','s_lv','s_pnum','s_ppv','s_prop4','s_tm_nr365'
        ];

		if(_delCookieList.length==0) return false;
		
		var d = new Date();
		d.setTime(0);
		var expires = "expires="+d.toUTCString();
	
		for(i=0; i < _delCookieList.length ;i++){
			//console.log( _delCookieList[i] + "=" + "del" + "; " + expires + "; " + "domain=.softbank.jp ; "+ "path=/ ; ");
			document.cookie = _delCookieList[i] + "=" + "del" + "; " + expires + "; " + "domain=.softbank.jp ; "+ "path=/ ; " ;
	        console.log("clearBugCookies:" + _delCookieList[i]);
	    }
		return true;
    }
}


// **************************************************
// **************************************************
// SiteCatalyst 廃止対応
// rev 2015-04-14
// Filename: ----
// Create: Kusuto
// **************************************************
// **************************************************
try{
	$(function(){
		if(typeof s != 'undefined' && typeof s.tl != 'undefined'){

			if(s.tl.length == 0){
				if(new Date(2015, 4 - 1, 1) - new Date() <= 0){
					s.tl = function(_a, _b , _label){
						if(_b == 'o'){
							mysbUtil.eventTrack("Click", _label);
						}
					}
				}else{}				
			}

	    }
	});


}catch(e){};



// **************************************************
// **************************************************
// 災害用伝言板 Bugfix対応
// rev 2016-10-21
// Filename: ----
// Create: Kusuto
// **************************************************
// **************************************************

try{
	$(function(){

		if( !!document.domain.match(/my\.softbank\.jp$/i) && !!location.pathname.match(/^\/msb\/d\/top\/?$/i) && ( $('#satisfaction').length != 0 && $('.box-important3 .heading-voice-guide').length == 0 && $($('#body > li > a[href*="/scripts/japanese/information/dengon/index.jsp"]')[0]).length != 0 )  ){

			$($('#body > li')[0]).hide();

			$('#body').prepend(
			'<div class="row">'+
			'<aside class="box-important3 low-priority">'+
			'<div class="heading">'+
			'<a href="http://www.softbank.jp/mobile/service/dengon/">'+
			'<h1 class="hdg-important-l1">災害用伝言板のご案内</h1>'+
			'<p class="heading-voice-guide">災害用伝言板と災害用音声お届けサービスをご利用いただけます。</p>'+
			'<span class="heading-detail">詳細を見る</span>'+
			'</a>'+
			'</div>'+
			'</aside>'+
			'</div>'
			);

		}
	});
}catch(e){};

// **************************************************
// **************************************************
// Y10倍施策対応
// rev 2017-06-19
// Filename: ----
// Create: Kusuto
// **************************************************
// **************************************************

try{

	if(
		!!location.hostname.match(/my\.softbank\.jp$/) && !!location.pathname.match(/^(\/msb\/d\/webLink\/doSend\/(CAS010012|MWBAA0121))/)
	){
		(function(){
			//urlパラメータ取得
			var isSearch = location.search;
			var parameters = location.search.split('&');
			var isSearch_str = "adid=";

			var _setCookie = function( _val ){
				if(!_val) return false;
				var _maxage = 60*60*24*7 ;
				var _path = '/';
				var _domain = '.softbank.jp';
				var _key = 'cookie_adid';
				document.cookie = _key + "=" + _val + "; " + "max-age=" + _maxage + "; " + "domain=" + _domain + "; "+ "path=" + _path + "; " ;

                // age-10min
                document.cookie = _key + "_10min" + "=" + _val + "; " + "max-age=" + "600" + "; " + "domain=" + _domain + "; "+ "path=" + _path + "; " ;

				return true;		
			};

			if (isSearch) {
					if (isSearch.match(isSearch_str)) {
						if (parameters.length < 2) {
								_setCookie( isSearch.replace('?adid=','') );
						} else {
							var pair = location.search.substring(1).split('&');
							var arg = new Object;
							for(var i=0;pair[i];i++) {
								var kv = pair[i].split('=');
								arg[kv[0]]=kv[1];
								
								var isSearch_id = arg.adid;
							}
								_setCookie( isSearch_id );
						}
					}
			}
		})();
	}

}catch(e){};


// **************************************************
// **************************************************
// PC版 セルフケア枠、製品サムネイル Bugfix対応
// rev 2017-12-28
// Filename: ----
// Create: Kusuto
// **************************************************
// **************************************************

try{
	$(function(){

		if( !!document.domain.match(/my\.softbank\.jp$/i) && !!location.pathname.match(/^\/msb\/d\/top\/?$/i) && $('#satisfaction').length != 0  ){
			$('head').append(
				'<script src="//cdn.softbank.jp/mysoftbank/set/common/p/js/device_info/main.js"></script>'+
				'<script src="//cdn.softbank.jp/mysoftbank/set/data/top/js/p/selfcare.js"></script>'
			);
		}
	});
}catch(e){};


// **************************************************
// **************************************************
// ClickTale
// rev 2018-01-15
// Filename: ----
// Create: Kusuto
// **************************************************
// **************************************************
try{
	if( !!location.hostname.match(/[A-Za-z][A-Za-z]\.my\.softbank\.jp$/) && !!location.pathname.match(/^\/msb\/d\/top\/?$/) && $("body#portal").length != 0 ){

			$('head').append(
				'<script src="//cdn.softbank.jp/mysoftbank/set/data/top/js/s/clicktale.js"></script>'
			);


	}
}catch(e){};


} // End of BS対応


