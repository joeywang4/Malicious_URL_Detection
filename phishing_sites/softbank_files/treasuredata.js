// **************************************************
// **************************************************
// rev 2017-06-29 1600 
// Treasure Data
// treasuredata.js
// **************************************************
// **************************************************


// BS対応
if(
	!( !!location.hostname.match(/my\.softbank\.jp$/) && !!location.pathname.match(/^\/msb\/d\/webLink\/doSend\/CFS01001[01234]/) )
){
	

if(
	!(location.hostname).match(/(.+\.)?card\.my\.softbank\.jp$/i)
){

	try{

		if(
			!( !!location.hostname.match(/my\.softbank\.jp$/) && !!location.pathname.match(/^(\/msb\/d\/webLink\/doSend\/(MRERE|MWBAA001[15]|MSB020043))|(\/msb\/d\/menu\/speedRelease)/) )
			&&
			!( !!location.hostname.match(/re..\.my\.softbank\.jp$/) )
		){


			//////// Start of td2.js
			// sending data to TD. no other functions are required.
			!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["addRecord","set","trackEvent","trackPageview","ready"],n=0;n<s.length;n++){var i=s[n];e[t].prototype[i]=r(i)}var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.treasuredata.com/sdk/td-1.3.0.legacy.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)}}("Treasure",this);
			function jk_send2td(x,y){
			  var td = new Treasure({
			    host: 'in.treasuredata.com',
			    writeKey: '5663/f65459987456aca041d4a9500fb1f82c02809fc3',
			    database: 'sbm_db'
			  });
			  var table='web_log';
			  for (var attrname in x) { y[attrname] = x[attrname]; };

			  td.set(table, y);
			  td.trackPageview(table);
			};
			//jk_send2td({},{a: document.cookie});

			//////// End of td2.js


			if( typeof mysbGetMysbinfo != 'function'){

				mysbGetMysbinfo = function( _keyname ){
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
				}// End of function mysbGetMysbinfo


			}// End of if

			// main
		    var userno = mysbGetMysbinfo("userno");
		    if(!userno){ userno = "";}

			if(typeof(s) != 'undefined' && typeof(s.pageName) != 'undefined'){
				var _td_s_pagename = s.pageName;
			}else{
				// document.URL or pathname
				var _td_s_pagename =  '' ;//document.URL;
			}


			jk_send2td({},{a: document.cookie, b: userno, c: _td_s_pagename });
		  
		    console.log("TreasureData" + ",time:" + (new Date())/1000 );
	    }
	}catch(e){};

} // End of if



// **************************************************
// **************************************************
// SB DMP TAG
// rev 2016-07-13
// Create: Kusuto
// **************************************************
// **************************************************
try{

    if(
	    ( !!location.hostname.match(/my\.softbank\.jp$/) && !!location.pathname.match(/^\/msb\/d\/top/) )
    ){
		$("head").append(
			'<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/analytics/td_im_tag.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
			+ '<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/analytics/td_microad_tag.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'
			+ '<scri' + 'pt src="//cdn.softbank.jp/mysoftbank/set/common/p/js/analytics/td_geniee_tag.js" type="text/javascript" charset="UTF-8"></scri'+'pt>'

		);
	}

}catch(e){};


} // End of BS対応

