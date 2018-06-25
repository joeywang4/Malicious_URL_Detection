/* SIGNAL code version 2.1 for SoftBank : 20120319 */
/* SIGNAL code version 2.2 for SoftBank : 20120401 */
/* SIGNAL code version 2.2.1 for SoftBank : 20120409 */
function s_codeSetting(){
	s.visitorID=s.trackFirstPartyCookie('fst_vi',1825,20);
	s.campaign=s.getQueryParam('adid');			//Modify:20120319
	s.eVar5=s.getQueryParam('cid');				//Add:20111221
	if(s.pageName){gs_pageName=s.pageName;}
	pcd=(s.pathConcatDelim=="")?"":s.pathConcatDelim;
	if (typeof(gs_pageType)!='undefined'&& gs_pageType!=""){
		s.pageType=gs_pageType;
	}else{
		if(typeof(gs_pageName)!='undefined' && gs_pageName!=""){
			s.pageName=gs_pageName;		//Modify:20150520
			s.hier1=location.hostname+location.pathname+'['+gs_pageName+']';		//Modify:20120409:forMySB
			//s.pageName=gs_pageName;
			//s.hier1=gs_pageName;
		}else{
			gs_pageName=s.getPageName();
			s.pageName=(gs_siteIDAlign=="right")?gs_pageName:gs_siteID+gs_pageName; //Modify:20150520
			gs_pageName=(s.defaultPage=="")?gs_pageName.replace(pcd+pcd,pcd+gs_hierDefault+pcd):gs_pageName;
			s.hier1=(gs_pageName.lastIndexOf(pcd)==(gs_pageName.length-1))?gs_siteID+gs_pageName+gs_hierDefault:gs_siteID+gs_pageName;
		}
	}
	s.server=(typeof(gs_server)!='undefined'&& gs_server!="")?gs_server:document.domain;

	/* [2010.09.02] add start */
	if ( (typeof(gs_channel)!='undefined') && (gs_channel!="") ) {
		s.channel=gs_channel;
	}
	else {
		var memberName = "";
		var uriRegExp;
		var ObjUriList = new Object();
		// Setting default value to s.channel
		s.channel = 'etc';

		try {
			if ( typeof(getObjectListForSS) == 'function' ) {
				// Getting the table of uri string & site section string
				ObjUriList = getObjectListForSS();
				// Checking if the uri string in the table matches with the current URI string.
				// if matched, corresponding value in the table is set to s.channel.
				for ( memberName in ObjUriList ) {
					uriRegExp = new RegExp( memberName , "i" );
					if ( document.URL.match( uriRegExp ) ) {
						s.channel = ObjUriList[ memberName ];
						break;
					}
				}
			} else {
				s.channel = 'etc';
			}
		}
		catch (e) {
			s.channel = 'etc';
		}
	}
/* [2010.09.02] add end */

	s.prop1="D=g";
	s.prop2=(typeof(gs_title)!='undefined'&& gs_title!="")?gs_title:document.title;
	s.prop3=document.domain;
	if(sc_ref && sc_ref!="" && sc_ref.match(/(mb|search\.mb|live\.mb|smap)\.softbank\.jp/)==null){
		sc_refdomain=sc_ref.replace(/https?:\/\//,"");
		s.prop4=sc_refdomain.split("/")[0];
	}
	s.prop5=s.getNewRepeat(90);
	if(navigator.userAgent.indexOf("iPhone") != -1 && navigator.userAgent.indexOf("Safari") != -1) {
		s.prop6="iPhone_Safari";
	} else if(navigator.userAgent.indexOf("iPad") != -1 && navigator.userAgent.indexOf("Safari") != -1) {
		s.prop6="iPad_Safari";
	}else if(navigator.userAgent.indexOf("Chrome") != -1) {
		s.prop6="Chrome";
	} else if(navigator.userAgent.indexOf("Firefox") != -1) {
		s.prop6="Firefox";
	} else if(navigator.userAgent.indexOf("Opera") != -1) {
		s.prop6="Opera";
	} else if(navigator.userAgent.indexOf("MSIE") != -1) {
		s.prop6="MSIE";
	} else if(navigator.userAgent.indexOf("Safari") != -1) {
		s.prop6="Safari";
	} else {
		s.prop6="Other_Browser";
	}
	s.prop8=s.getTimeParting('p','9');

	//Modify Start:20120401
	var sc_campaignCheck=s.getAndPersistValue(s.campaign,'s_campaign',0);
	var sc_prop4Check=s.getAndPersistValue(s.prop4,'s_prop4',0);
	if(sc_campaignCheck&&sc_campaignCheck!=""){
		s.prop7=sc_campaignCheck;
		s.prop11='D=c7+":"+pageName';
	}
	if(sc_prop4Check&&sc_prop4Check!=""){
		s.prop12=sc_prop4Check+":"+s.pageName;
	}
	//Modify End:20120401
	s.prop13='D=c5+":"+pageName';
	s.prop14='D=c6+":"+pageName';

	//Modify Start:20120401
	//s.prop17=s.getPreviousValue(document.URL,'gpv_pn');
	//if(s.prop17)s.prop16=s.getPercentPageViewed();
	var sc_ref1=s.getPreviousValue(sc_uri,'gpv_pn');
	var sc_ref2="";
	if(sc_ref){
		sc_ref2=sc_ref;
	}else if(sc_ref=="" && sc_ref1!=""){
		sc_ref2=sc_ref1;
	}
	if(sc_ref2 && sc_ref2.match(/(mb|my)\.softbank\.jp/)==null){sc_landing=true;}
	else if(s.c_r("s_lp")){s.c_w("s_lp","");}

	/* Set Internal Search Keyword */
	if(sc_url.indexOf("search.mb.softbank.jp")>-1 && sr_kw!=''){
		s.eVar33=sr_kw;
		s.events=s.apl(s.events,"event23",",",1);	//Add:20120401
		if(sr_kw_num=="Not Found")s.events=s.apl(s.events,"event24",",",1);	//Add:20120401
		if(sc_url.indexOf("temp=help&cat=help")>-1){
			if(s.pageName)s.pageName+='_HELP'
			s.prop23="D=v33";
			s.prop24=sr_kw_num;
		}else{
			s.prop21="D=v33";
			s.prop22=sr_kw_num;
		}
		/* Internal Search on LP */
		var sc_ref_lp=s.c_r("s_lp");
		if(sc_ref_lp=="2nd_page"){
			s.prop25="D=v33";
			s.prop26=sc_ref;
			//s.events=s.apl(s.events,"event6",",",1);	//Comment Out:20120401
		}
		if(specific_page){
			var sp_page_list=new Array();
			sp_page_list=specific_page.split(",");
			if(sc_ref2 && sc_ref2.indexOf("?")>-1)sc_ref2=sc_ref2.split("?")[0];
			for(var i=0;i<sp_page_list.length;i++){
				if(sc_ref2==sp_page_list[i]){
					specified=true;
					break;
				}
			}
		}
		//Move End:20110404
		/*Internal Search on Main Page*/
		if(specified){
			s.prop27="D=v33";
			s.prop28=sc_ref;
		}
	}
	if(sc_ref=="" || sc_landing)s.c_w("s_lp","2nd_page");

	/* [2011.08.15] add start */
	s.channelManager('adid','','sc_sbvis','0','sc_sbhalf','1');		//Modify:20120301
	var exKeyWord=sc_refSubDomain=entprop="";
	var landingFlg=false;
	var s_prop31=s_prop32="";
	if(s._referringDomain){
		try{
			if(s._keywords && s._keywords!="n/a"){exKeyWord=s._keywords;}
			else{exKeyWord="NoKeyWord";}
		}catch(e){exKeyWord="NoKeyWord";}
		s_prop31=exKeyWord;
		s.eVar32=s_prop32=s._referringDomain;	//Modify:20120401
		entprop=s_prop31+"___"+s_prop32;
		landingFlg=true;	//Modify:20120401
	}
	entprop=s.getAndPersistValue(entprop,'s_entprop',0);
	if(entprop){
		var prop31_32=new Array();
		prop31_32=entprop.split("___");
		s.prop31=prop31_32[0];
		s.prop32=prop31_32[1];
	}
	if(landingFlg)s.prop32='D=v32+" (LP)"';	//Modify:20120401
	/* [2011.10.20] add start */
	//s.eVar3=document.title;
	//s.prop2="D=v3";
	s.eVar3=location.hostname+location.pathname;
	/* [2011.11.2] add start for Analyse Special Site */
	if(s.prop5=="New"){
		s.events=s.apl(s.events,"event3",",",1);			//"event3" is serialized (once per visit)
	}
	var s_ct=new Date();
	s_ct.setTime(s_ct.getTime()+365*24*60*60*1000);
	var sc_erasePTFlg=false;
	var spCodeList="";
	var spCodeListArr=new Array();
	if(sc_pageType){
		if(sc_pageType.indexOf('_erase')==-1){					//Add:20111221
			/* Get sc_pageType Area*/
			var pageTypeFlg=false;
			var spPageTypeVisit=s.c_r('spPageType');
			if(spPageTypeVisit){
				var spPTVArr=spPageTypeVisit.split(";");
				for(var i=0;i<spPTVArr.length;i++){
					if(spPTVArr[i]==sc_pageType){
						pageTypeFlg=true;
						break;
					}
				}
			}else if(s.events && s.events.indexOf("event3")>-1){
				s.events=s.apl(s.events,"event4",",",1);
			}
			if(!pageTypeFlg){
				s.eVar4=sc_pageType;
				s.c_w('spPageType',sc_pageType+";"+spPageTypeVisit,0);
			}
			/* Get Repeat Visit Area */
			if(s.eVar4){
				var spCountFlg=false;
				spCodeList=s.c_r('spCodeList');
				spCodeListArr=spCodeList.split(';');
				if(spCodeList){
					/* set a limit to Cookie's length */				//Add Start:20111221
					var sc_CLLeng=spCodeList.length;
					if(sc_CLLeng>2000){
						spCodeListArr.pop();
						spCodeList=spCodeListArr.join(';');
					}													//Add End:20111221
					for(var j=0;j<spCodeListArr.length;j++){
						if(spCodeListArr[j]==sc_pageType){
							spCountFlg=true;
							s.events=s.apl(s.events,'event5',',',1);
							break;
						}
					}
					if(!spCountFlg){
						s.c_w('spCodeList',sc_pageType+';'+spCodeList,s_ct);
					}
				}else{
					s.c_w('spCodeList',sc_pageType,s_ct);
				}
			}
		}else{															//Add Start:20111221
			var sc_erasePT=sc_pageType.replace('_erase','');
			var sc_erasePTNum=-1;
			spCodeList=s.c_r('spCodeList');
			spCodeListArr=spCodeList.split(';');
			for(var j2=0;j2<spCodeListArr.length;j2++){
				if(spCodeListArr[j2]==sc_erasePT){
					sc_erasePTNum=j2;
					break;
				}
			}
			var sc_combArr1=sc_combArr2=new Array();
			if(sc_erasePTNum==0){
				spCodeListArr.shift();
				spCodeList=spCodeListArr.join(';');
			}else if(sc_erasePTNum>0){
				sc_combArr1=spCodeListArr.slice(0,sc_erasePTNum);
				sc_combArr2=spCodeListArr.slice(sc_erasePTNum+1);
				spCodeListArr=sc_combArr1.concat(sc_combArr2);
				spCodeList=spCodeListArr.join(';');
			}
			s.c_w('spCodeList',spCodeList,s_ct);
		}																//Add End:20111221
	}
	/* [2011.11.2] add end for Analyse Special Site */

	//Add Start:20120319
	var sc_pageNum=s.getPageNum();
	if(sc_pageNum==1){
		s.events=s.apl(s.events,"event21",",",1);
		if(s.prop5)s.eVar6="D=c5";
		if(s.prop8)s.eVar8="D=c8";
		if(s.prop31)s.eVar31="D=c31";
	}else if(sc_pageNum==2){
		s.events=s.apl(s.events,"event22",",",1);
	}
	if(sc_ua.match(/iphone|android/i)){
		s.prop45="sp";
		s.prop46='D="sp:"+c2';
	}else{
		s.prop45="pc";
		s.prop46='D="pc:"+c2';
	}
	s.eVar49="D=User-Agent";
	var sc_pathCut=location.pathname;
	if(sc_pathCut.match(/\/index\.html$/))sc_pathCut=sc_pathCut.replace(/index\.html/,"index");
	else if(sc_pathCut.match(/\/$/))sc_pathCut+="index";
	sc_dirAll=sc_setDirName(sc_pathCut);
	sc_dir1=sc_dirAll[0];
	sc_dir2=sc_dirAll[1];
	sc_dir3=sc_dirAll[2];
	s.prop51=sc_domainID_List[location.hostname];
	if(!s.prop51||typeof(s.prop51)=='undefined')s.prop51="dev";
	s.prop52=sc_dir1?(s.prop51+":"+sc_dir1):s.prop51;
	s.prop53=sc_dir2?(s.prop52+":"+sc_dir2):s.prop52;
	s.prop54=sc_dir3?(s.prop53+":"+sc_dir3):s.prop53;
	if(location.pathname.match(/^\/mb\/shop\/pc\/(index\.html)?$/))s.events=s.apl(s.events,'event8',',',1);
	//Add End:20120319

}


/**************************** Custom Functions Definition start *************************/
/* [2010.09.02] add 																	*/
/* Getting pair values of uri string and string for site section						*/
/* Pairs are sequenced by alphabetical order.											*/
/*																						*/
/* Attention about regular expression													*/
/*   ● You DON'T need to escape '/' to express letter '/'.								*/
/*   ● '$' means the end of the string. Common usage of regular expression.			*/
/****************************************************************************************/
function getObjectListForSS() {
	var obj = new Object();

	obj[ "_i.html$" ]										= 'Optimized Pages';
	obj[ "_a.html$" ]										= 'Optimized Pages';
	obj[ "/en/" ]											= 'English';
	obj[ "/mb/aboutwebsite/" ]									= 'etc';
	obj[ "/mb/biz/" ]										= 'etc';
	obj[ "/mb/campaign/" ]										= 'campaign';
	obj[ "/mb/customer.html" ]									= 'top';
	obj[ "/mb/data_card/" ]										= 'etc';
	obj[ "/mb/entrance.html" ]									= 'top';
	obj[ "/mb/global_model/" ]									= 'etc';
	obj[ "/mb/hawks/" ]										= 'etc';
	obj[ "/mb/information/" ]									= 'etc';
	obj[ "/mb/international/" ]									= '3G';
	obj[ "/mb/ipad_en/" ]	 									= 'English';
	obj[ "/mb/iphone_en/" ]										= 'English';
	obj[ "mb.softbank.jp/scripts/english/" ]							= 'English';
	obj[ "/mb/ipad/" ]	 									= 'iPad';
	obj[ "/mb/iphone/" ]	 									= 'iPhone';
	obj[ "/mb/japanese/" ]										= 'etc';
	obj[ "/mb/legal/" ]										= 'etc';
	obj[ "/mb/mysoftbank/" ]									= 'My Softbank';
	obj[ "/mb/norikae/" ]										= 'welcome';
	obj[ "/mb/mimamori/" ]										= 'mimamori';
	obj[ "/mb/mimamoricamera/" ]									= 'mimamori';
	obj[ "/mb/mimamorimobile/" ]									= 'mimamori';
	obj[ "/mb/PhotoVision/" ]									= 'PhotoVision';
	obj[ "/mb/premobile/" ]										= 'premobile';
	obj[ "/mb/data_com/" ]										= 'data com';
	obj[ "/mb/price_plan/3G/" ]									= '3G';
	obj[ "/mb/price_plan/tool/" ]									= '3G';
	obj[ "/mb/price_plan/" ]									= 'etc';
	obj[ "/mb/product/3G/" ]									= '3G';
	obj[ "/mb/product/" ]										= 'etc';
	obj[ "/mb/r/" ]											= 'etc';
	obj[ "/mb/service_area/iphone/area.html" ]							= 'Optimized Pages';
	obj[ "/mb/service_area/" ]									= 'area';
	obj[ "/mb/service/home_antenna_ft/" ]								= 'area';
	obj[ "/mb/shop/iphone/" ]									= 'Optimized Pages';
	obj[ "/mb/shop/" ]										= 'shop';
	obj[ "/mb/sitemap/" ]										= 'etc';
	obj[ "/mb/smap/" ]										= 'SMAP';
	obj[ "/mb/smartphone/" ]									= 'Smartphone';
	obj[ "/mb/special/08spring/" ]									= 'etc';
	obj[ "/mb/special/08winter/" ]									= 'etc';
	obj[ "/mb/special/09spring/" ]									= 'etc';
	obj[ "/mb/special/09winter/" ]									= 'etc';
	obj[ "/mb/special/10summer/" ]									= 'etc';
	obj[ "/mb/special/10winter/" ]									= 'etc';
	obj[ "/mb/special/11winter/" ]									= 'syousenki';
	obj[ "/mb/special/network/" ]									= 'area';
	obj[ "/mb/special/" ]										= 'special';
	obj[ "/mb/support/3G/" ]									= '3G';
	obj[ "/mb/support/data_com/" ]									= 'data com';
	obj[ "/mb/tadatomo/" ]										= 'welcome';
	obj[ "/mb/welcome/" ]										= 'welcome';
	obj[ "/mb/3G/" ]										= '3G';
	obj[ "my.softbank.jp" ]										= 'My Softbank';
	obj[ "/msb/d/" ]										= 'My Softbank';
	obj[ "smap.softbank.jp" ]									= 'SMAP';
	obj[ "help.mb.softbank.jp" ]									= 'Instruction';
	obj[ "mb.softbank.jp/iphone/index.html$" ]							= 'Optimized Pages';
	obj[ "mb.softbank.jp/index.html$" ]	 							= 'Redirect';
	obj[ "www.softbank.jp" ]	 								= 'Redirect';
	obj[ "/ols/mobile/" ]	 									= 'onlineshop';
	obj[ "/mb/$" ]	 										= 'top';
	obj[ "/mb/index.html$" ]									= 'top';
	obj[ "/mb/service/3G/" ]									= '3G';
	obj[ "/mb/service/point/" ]									= 'service';
	obj[ "/mb/support/change/" ]									= 'service';
	obj[ "/mb/service/EEW/" ]									= 'service';
	obj[ "/mb/service/wi-fi/" ]									= 'service';
	obj[ "/mb/service/dengon/" ]									= 'service';
	obj[ "/mb/service/insurance/" ]									= 'service';
	obj[ "/mb/service/smasele/" ]									= 'service';
	obj[ "/mb/service/town_navi/" ]									= 'service';
	obj[ "/mb/service/white_market/" ]								= 'service';
	obj[ "/mb/service/sagiwall/" ]									= 'service';
	obj[ "/mb/service/rakudeco/" ]									= 'service';
	obj[ "/mb/service/photo_edit/" ]								= 'service';
	obj[ "/mb/service/music_box/" ]									= 'service';
	obj[ "/mb/service/gilt/" ]									= 'service';
	obj[ "/mb/service/index.html$" ]								= 'service';
	obj[ "/mb/service/$" ]                         							= 'service';
	obj[ "/mb/support/" ]                          							= 'etc';
	obj[ "/mb/service/" ]                           						= 'etc';

	return obj;
}

//Add Start:20110318
if(sc_ref&&sc_ref.indexOf("#")>-1)sc_ref=sc_ref.split("#")[0];
var dom_list=new Array();
dom_list=s.linkInternalFilters.split(",");
var sc_landing=false;
/*Specify The Page Used Internal Search Keyword (separate camma)*/
var specific_page="http://mb.softbank.jp/mb/customer.html,http://mb.softbank.jp/mb/,http://mb.softbank.jp/mb/product/,http://mb.softbank.jp/mb/iphone/,http://mb.softbank.jp/mb/smartphone/product/,http://mb.softbank.jp/mb/product/3G/,http://mb.softbank.jp/mb/ipad/,http://mb.softbank.jp/mb/special/10winter/,http://mb.softbank.jp/mb/norikae/,http://mb.softbank.jp/mb/welcome/,http://mb.softbank.jp/mb/service/,http://mb.softbank.jp/mb/service/3G/,http://mb.softbank.jp/mb/price_plan/,http://mb.softbank.jp/mb/price_plan/3G/,http://mb.softbank.jp/mb/support/,http://mb.softbank.jp/mb/service_area/,http://mb.softbank.jp/mb/campaign/3G/";
var specified=false;
//Add End:20110318

/* Get Internal Search Keyword */
var sr_kw='';	//Move:20110318
var sr_kw_num='0';	//Move:20110318
if(sc_url&&sc_url.indexOf("/search.mb.softbank.jp/")>-1){
	var sr_elm = document.getElementById('main-area');
	if(!sr_elm) sr_elm = document.getElementById('search-result');
	if(sr_elm != null) {
		int_kw_ar=sr_elm.getElementsByTagName("h2");
		for(var i=0;i<int_kw_ar.length;i++){
			var int_kw=int_kw_ar[i].innerHTML;
			if(int_kw.match(/“(.+)”の検索結果　(.+)件中(.+)件目/)){
				sr_kw=RegExp.$1;
				sr_kw_num=RegExp.$2+"("+RegExp.$3+")";
				break;
			}else if(int_kw.match(/“(.+)”の検索結果　0件/)){
				sr_kw=RegExp.$1;
				sr_kw_num="Not Found";
				break;
			}
		}
		//if(sr_kw)sr_kw=sr_kw.toLowerCase();		//Add:20120401
	}
}


/**************************** Custom Functions Definition end   ****************************/

/******* Plug-in Setting *******/
/* SIGNAL Setting */
gs_siteIDAlign="right";
gs_siteID=document.domain;
gs_hierDefault="defaultPage"

/* getPageName Setting*/
s.defaultPage="index.html";
s.pathExcludeList="";
s.queryVarsList="shopId";
s.pathConcatDelim="/";

/******* SiteCatalyst Plug-in code *******/

function setCountFlg(ar,pagetype,del){				//spCodeListArr,sc_pageType,sc_erasePTFlg
	var spCF=false;
	var delNum=0;
	var reAr;
	ar=ar.split(";");
	if(del)pagetype=pagetype.replace("_erase","");
	for(var j=0;j<ar.length;j++){
		if(ar[j]==pagetype){
			if(del)delNum=parseInt(j)+1;
			spCF=true;
			break;
		}
	}
	if(del && delNum!=0){
		if(delNum==1){
			reAr=ar.slice(1);
		}else{
			var ar1=ar.slice(0,delNum-1);
			var ar2=ar.slice(delNum+1);
			reAr=ar1.concat(ar2);
		}
		return reAr;
	}else{
		return spCF;
	}
}

function sc_setDirName(url){
	var dirList=new Array();
	var pas=url?url:window.location.pathname;
	if(pas.indexOf("/")==0){
		pas=pas.substring(1);
	}
	if(pas!=""){
		pasArr=pas.split("/");
		if(pasArr.length==1){
			dirList[0]=pasArr[0];
		}else{
			for(var i=0;pasArr.length>i;i++){
				if(pasArr[i]){
					dirList[i]=pasArr[i];
				}
			}
		}
	}
	return dirList;
}

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
s_codeSetting();
if(s.c_r("s_pers") && s.c_r("s_pers").match(/scd\_vid\=([0-9a-z]+)/)) s.eVar53=RegExp.$1;
var s_code=s.t();if(s_code)document.write(s_code);
