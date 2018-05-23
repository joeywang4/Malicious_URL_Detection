// **************************************************
// **************************************************
// Y tag
// rev 2017-06-29 1600
// **************************************************
// **************************************************

try{

// BS対応
if(
	!( !!location.hostname.match(/my\.softbank\.jp$/) && !!location.pathname.match(/^\/msb\/d\/webLink\/doSend\/CFS01001[01234]/) )
){
	

    if( !( typeof s != 'undefined' && typeof s.pageName != 'undefined' && !!s.pageName.match(/WBZR_._WBB108/) ) ){

		if(
			!( !!location.hostname.match(/my\.softbank\.jp$/) && !!location.pathname.match(/^(\/msb\/d\/webLink\/doSend\/(MRERE|MWBAA001[15]|MSB020043))|(\/msb\/d\/menu\/speedRelease)/) )
			&&
			!( !!location.hostname.match(/re..\.my\.softbank\.jp$/) )
		){
	      (function () {
	        var tagjs = document.createElement("script");
	        var s = document.getElementsByTagName("script")[0];
	        tagjs.async = true;
	        tagjs.src = "//s.yjtag.jp/tag.js#site=pqAkEhi";
	        s.parentNode.insertBefore(tagjs, s);
	      }());
	        console.log("Ytag: loaded");
		}

    }
    else{
        console.log("Ytag: not loaded");
    }

} // End of BS対応

}catch(e){};