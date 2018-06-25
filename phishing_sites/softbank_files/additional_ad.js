// **************************************************
// **************************************************
// rev 2017-06-29 1600
// Custom JavaScript code
// additional_ad.js
// **************************************************
// **************************************************

// BS対応
if(
	!( !!location.hostname.match(/my\.softbank\.jp$/) && !!location.pathname.match(/^\/msb\/d\/webLink\/doSend\/CFS01001[01234]/) )
){
	

try{
	console.log("additional_ad.js: loaded");
}catch(e){};


// **************************************************
// **************************************************
// 中面広告
// rev 2016-04-28 XXXX 
// Create: Kusuto
// **************************************************
// **************************************************
try{

	//確定前料金
    if( !!location.hostname.match(/bl11(\.....)?\.my\.softbank\.jp/) && !!s.pageName.match(/WO[S]020/) ){
        //$('#content-footer').before('<div id="additional_ad" style="padding-top: 20px; text-align: center; /* border-top: 1px solid #e3e4e5;*/"></div>');
        //$('#additional_ad').html(
            //'<a href="http://online-shop.mb.softbank.jp/ols/html/smp/service/itunes_code/first_campaign.html?oid=mysbSTs131107M1" ><img src="//cdn.softbank.jp/mysoftbank/set/common/s/img/spportal/additional_ad/bnr_itunes_10off_640x200.jpg" alt="初めてのご購入限定！iTunesコード10%OFF オンラインショップ限定" width="300" height="100"></a>'
        //);

		// テスマ 得するモール 2016.04.28
		$($(".payment")[0]).after(
		'<p style="padding: 10px;margin: 20px 10px;border: 3px solid #ccc;font-size: 14px;text-align: center;"><a href="http://ckantan.jp/dm/mob/dm_comfirm.jsp?cmcd=4100047793">携帯料金値引きサービスを利用する</a></p>'
		);

    }

   	//確定後料金
    if( !!location.hostname.match(/bl11\.my\.softbank\.jp/) && !!s.pageName.match(/WO[S]040/) ){
        //$('#content-footer').before('<div id="additional_ad" style="padding-top: 20px; text-align: center; /* border-top: 1px solid #e3e4e5;*/"></div>');
        //$('#additional_ad').html(
            //'<a href="http://online-shop.mb.softbank.jp/ols/html/smp/service/itunes_code/first_campaign.html?oid=mysbSTs131107M1" ><img src="//cdn.softbank.jp/mysoftbank/set/common/s/img/spportal/additional_ad/bnr_itunes_10off_640x200.jpg" alt="初めてのご購入限定！iTunesコード10%OFF オンラインショップ限定" width="300" height="100"></a>'
        //);
    }

	//料金トップ
    if( !!location.hostname.match(/bl11(\.....)?\.my\.softbank\.jp/) && !!s.pageName.match(/WO[S]010/) ){
        //$('#faq').before('<div id="additional_ad" style="padding-top: 20px; text-align: center; /* border-top: 1px solid #e3e4e5;*/"></div>');
        //$('#additional_ad').html(
            //'<a href="http://online-shop.mb.softbank.jp/ols/html/smp/service/itunes_code/first_campaign.html?oid=mysbSTs131107M1" ><img src="//cdn.softbank.jp/mysoftbank/set/common/s/img/spportal/additional_ad/bnr_itunes_10off_640x200.jpg" alt="初めてのご購入限定！iTunesコード10%OFF オンラインショップ限定" width="300" height="100"></a>'
        //);
    }

	//契約確認トップ
    if( !!location.hostname.match(/ct11\.my\.softbank\.jp/) && !!s.pageName.match(/WBC_[IA]_INF001/) ){
        //$('#faq').before('<div id="additional_ad" style="padding-top: 20px; text-align: center; /* border-top: 1px solid #e3e4e5;*/"></div>');
        //$('#additional_ad').html(
            //'<a href="http://www.softbank.jp/ybb/special/sbhikari-01/?cid=sbhr_150507_msb/d/top_003" ><img src="//cdn.softbank.jp/mysoftbank/set/common/s/img/spportal/additional_ad/bnr_sbhikari02_640x200.gif" alt="自宅のネットをSoftBank 光にすると セットで携帯代が2年間毎月最大2,000円割引" width="300" height="100"></a>'
        //);
    }

	//住所変更完了画面
    if( !!location.hostname.match(/ct11\.my\.softbank\.jp/) && !!s.pageName.match(/WBC_[IA]_ADR006/) ){
        //$($(".sec")[1]).children(".btn-area.single").before('<div id="additional_ad" style="padding-top: 20px; text-align: center; /* border-top: 1px solid #e3e4e5;*/"></div>');
        //$('#additional_ad').html(
        //    '<a href="http://v6.advg.jp/adpv6/r/80o_2k0" ><img src="//cdn.softbank.jp/mysoftbank/set/common/s/img/spportal/additional_ad/bnr_hikkoshi_promo_300x250.png" alt="" width="290"></a>'
        //);
    }


    // メールの設定
    if( !!location.hostname.match(/^my\.softbank\.jp$/) && !!s.pageName.match(/\/menu\/mailConfig/) && ($('#header .btn-menu').length != 0) ){
        //$('#content').append('<div id="additional_ad" style="padding-top: 20px; margin:10px -10px 20px -10px;text-align: center; border-top: 1px solid #e3e4e5;"></div>');
        //$('#additional_ad').html(
            //'<a href="http://www.softbank.jp/ybb/special/sbhikari-01/?cid=sbhr_150507_msb/d/top_004" ><img src="//cdn.softbank.jp/mysoftbank/set/common/s/img/spportal/additional_ad/bnr_sbhikari01_640x200.gif" alt="超高速おうちインターネット、はじまる。SoftBank 光 高速インターネットが月額3,800円〜" width="300" height="100"></a>'
        //);
    }

	//データ通信量の管理
    if( !!location.hostname.match(/re11(\.....)?\.my\.softbank\.jp/) && !!s.pageName.match(/RES0100/) && ($("#side-bar").length == 0) ){
        //$($('.notes')[0]).before('<div id="additional_ad" style="padding-top: 20px; text-align: center; /* border-top: 1px solid #e3e4e5;*/"></div>');
        //$('#additional_ad').html(
            //'<a href="http://online-shop.mb.softbank.jp/ols/html/smp/service/itunes_code/first_campaign.html?oid=mysbSTs131107M1" ><img src="//cdn.softbank.jp/mysoftbank/set/common/s/img/spportal/additional_ad/bnr_itunes_10off_640x200.jpg" alt="初めてのご購入限定！iTunesコード10%OFF オンラインショップ限定" width="300" height="100"></a>'
        //);
    }

	//過去3日間の通信料
    if( !!location.hostname.match(/re11(\.....)?\.my\.softbank\.jp/) && !!s.pageName.match(/RES0300/) && ($("#side-bar").length == 0) ){
        //$($('.notes')[0]).before('<div id="additional_ad" style="padding-top: 20px; text-align: center; /* border-top: 1px solid #e3e4e5;*/"></div>');
        //$('#additional_ad').html(
            //'<a href="http://online-shop.mb.softbank.jp/ols/html/smp/service/itunes_code/first_campaign.html?oid=mysbSTs131107M1" ><img src="//cdn.softbank.jp/mysoftbank/set/common/s/img/spportal/additional_ad/bnr_itunes_10off_640x200.jpg" alt="初めてのご購入限定！iTunesコード10%OFF オンラインショップ限定" width="300" height="100"></a>'
        //);
    }

}catch(e){};

} // End of BS対応


