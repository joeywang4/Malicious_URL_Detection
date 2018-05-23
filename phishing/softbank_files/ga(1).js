// BS対応
if(
	!( !!location.hostname.match(/my\.softbank\.jp$/) && !!location.pathname.match(/^\/msb\/d\/webLink\/doSend\/CFS01001[01234]/) )
){
	

// Google Tag Manager
try{
    if (navigator.appVersion.toLowerCase().indexOf("msie 6.")==-1) {
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-BMSW');
  } 
}catch(e){
}
// End Google Tag Manager

try{
	mysbUtil.eventTrack = function(_action, _label){

        console.log('action:' + _action + '|' + 'label:' + _label);

        dataLayer.push({
            'event' : 'SBM_MySB',
            'action': _action,
            'label' : _label
        });
        console.log("GA Eventtracking : Sent");
    }
}catch(e){}

} // End of BS対応
