yj_apn_segid_h=(function(){
try{

//--Switch debug mode--
//var mode="debug";
var mode="non_debug";
var test_sec_fq=60*1;
var test_device="PC";

//---Array for sending APN segment ID--
var array_segment=[
[".*www.softbank.jp/ybb/.*","","PC","5885516",1],
[".*www.softbank.jp/ybb/.*","","SP","5885936",1],
[".*www.softbank.jp/ybb/special/sbhikari-01/[^/]*goli.*|.*www.softbank.jp/ybb/special/sbhikari-01/.*","","PC","5885489",3],
[".*www.softbank.jp/ybb/special/sbhikari-01/[^/]*yprd.*|.*www.softbank.jp/ybb/special/sbhikari-01/.*","","PC","5885495",3],
[".*www.softbank.jp/ybb/special/sbhikari-01/[^/]*goli.*|.*www.softbank.jp/ybb/special/sbhikari-01/.*","","SP","5885917",3],
[".*www.softbank.jp/ybb/special/sbhikari-01/[^/]*yprd.*|.*www.softbank.jp/ybb/special/sbhikari-01/.*","","SP","5885930",3],
[".*www.softbank.jp/ybb/sbhikari/price/.*","","PC","5885347",7],
[".*www.softbank.jp/ybb/sbhikari/options/.*","","PC","5885340",7],
[".*www.softbank.jp/ybb/sbhikari/order-flow/.*","","PC","5885328",7],
[".*www.softbank.jp/ybb/sbhikari/billing/.*","","PC","5885304",7],
[".*www.softbank.jp/ybb/sbhikari/price/.*","","SP","5885688",7],
[".*www.softbank.jp/ybb/sbhikari/options/.*","","SP","5885676",7],
[".*www.softbank.jp/ybb/sbhikari/order-flow/.*","","SP","5885662",7],
[".*www.softbank.jp/ybb/sbhikari/billing/.*","","SP","5885656",7],
[".*www.softbank.jp/ybb/adsl/bbadsl/.*","","PC","5885163",14],
[".*www.softbank.jp/ybb/adsl/value/.*","","PC","5885168",14],
[".*www.softbank.jp/ybb/adsl/whiteplan/.*","","PC","5885170",14],
[".*www.softbank.jp/ybb/adsl/bbadsl/.*","","SP","5885528",14],
[".*www.softbank.jp/ybb/adsl/value/.*","","SP","5885542",14],
[".*www.softbank.jp/ybb/adsl/whiteplan/.*","","SP","5885546",14],
[".*www.softbank.jp/ybb/air/price/.*","","PC","5885223",14],
[".*www.softbank.jp/ybb/air/option/.*","","PC","5885195",14],
[".*www.softbank.jp/ybb/air/orderflow/.*","","PC","5885186",14],
[".*www.softbank.jp/ybb/air/payment/.*","","PC","5885228",14],
[".*www.softbank.jp/ybb/air/price/.*","","SP","5885576",14],
[".*www.softbank.jp/ybb/air/option/.*","","SP","5885568",14],
[".*www.softbank.jp/ybb/air/orderflow/.*","","SP","5885553",14],
[".*www.softbank.jp/ybb/air/payment/.*","","SP","5885580",14],
[".*www.softbank.jp/ybb/campaigns/list/entry-sbhikari/.*","","PC","5885284",14],
[".*www.softbank.jp/ybb/campaigns/list/entry-air/.*","","PC","5885261",14],
[".*www.softbank.jp/ybb/campaigns/list/entry-sbhikari/.*","","SP","5885612",14],
[".*www.softbank.jp/ybb/campaigns/list/entry-air/.*","","SP","5885605",14],
[".*www.softbank.jp/ybb/order/hikari/.*","","PC","5885457",30],
[".*www.softbank.jp/ybb/order/isp/.*","","PC","5885468",30],
[".*www.softbank.jp/ybb/order/air/.*","","PC","5885450",30],
[".*www.softbank.jp/ybb/order/adsl/.*","","PC","5885435",30],
[".*www.softbank.jp/ybb/order/value/.*","","PC","5885484",30],
[".*www.softbank.jp/ybb/moving/hikari_course/.*","","PC","5885387",14],
[".*www.softbank.jp/ybb/moving/course/.*","","PC","5885373",14],
[".*www.softbank.jp/ybb/campaigns/list/.*","","PC","5885291",14],
[".*www.softbank.jp/ybb/campaigns/closed/.*","","PC","5885252",14],
[".*www.softbank.jp/ybb/order/hikari/.*","","SP","5885735",14],
[".*www.softbank.jp/ybb/order/isp/.*","","SP","5885839",14],
[".*www.softbank.jp/ybb/order/air/.*","","SP","5885718",14],
[".*www.softbank.jp/ybb/order/adsl/.*","","SP","5885717",14],
[".*www.softbank.jp/ybb/order/value/.*","","SP","5885844",14],
[".*www.softbank.jp/ybb/moving/hikari_course/.*","","SP","5885704",14],
[".*www.softbank.jp/ybb/moving/course/.*","","SP","5885695",14],
[".*www.softbank.jp/ybb/campaigns/list/.*","","SP","5885625",14],
[".*www.softbank.jp/ybb/campaigns/closed/.*","","SP","5885601",14],
[".*www.softbank.jp/ybb/special/sbhikari-01/application.*","","PC","5885423",30],
[".*www.softbank.jp/ybb/special/sbhikari-01/application.*","","SP","5885902",30],
[".*phoenix.sbb-sys.info/SYAE/SimpleYahooAir.*","","PC","5885404",30],
[".*phoenix.sbb-sys.info/SYAE/SimpleYahooAir.*","","SP","5885893",30],
[".*phoenix.sbb-sys.info/SAE/SimpleAdslEntry.*","","PC","5885402",30],
[".*phoenix.sbb-sys.info/SAE/SimpleAdslEntry.*","","SP","5885878",30]
];

//---Setting for device type--
var str_device="";
if(typeof(BrightTag.device)=="function"){
if(BrightTag.device()=="mobile"){
str_device="SP";
}else if(BrightTag.device()=="desktop"){
str_device="PC";
}else if(BrightTag.device()=="tablet"){
str_device="PC";
}else{
str_device="PC";
}
}else if(mode!="debug"){throw new Error("non_BrightTag_device");}

//---Setting for Frequency cap--
var sec_fq=60*60*24;

//---Do not modify from here---
var i,j;

//get URL
var str_URL=document.URL;

//get "yjcd" Cookie
var array_yjcd=bt_cookie("bt3.yjcd").split(",");

//set array_recency from array_segment
var array_recency=[];
for(i=0;i<array_segment.length;i++){
array_recency[i]=array_segment[i][4];
}
array_recency=Array.from(new Set(array_recency));
for(i=0;i<array_recency.length;i++){
eval("var array_apn_segment_id"+array_recency[i]+"=[];");
eval("var apn_segment_id"+array_recency[i]+";");
eval("var apn_recency"+array_recency[i]+";");
}

//verify array_segment one by one
for(i=0;i<array_segment.length;i++){

var seg_URL=array_segment[i][0];
var str_regURL=new RegExp(seg_URL);
var seg_URLx=array_segment[i][1];
var str_regURLx=new RegExp(seg_URLx);
var seg_device=array_segment[i][2];
var seg_segment_id=array_segment[i][3];
var seg_recency=array_segment[i][4];

//work only on debug mode
if(mode=="debug"){
if(str_device.length==0){str_device=test_device;}
console.log("------------------");
console.log("array_segment:"+i+" : "+seg_URL+" "+seg_URLx+" "+seg_device+" "+seg_segment_id+" "+seg_recency);
console.log("URL match : "+(str_URL.match(str_regURL)));
console.log("Device match : "+(seg_device==str_device));
console.log("Fire status : "+(array_yjcd.indexOf(seg_segment_id)));
console.log("------------------");
}

//Fire conditions
if(array_segment[i][2]=="ALL"){
//-URL and Cookie
if(seg_URLx.length>0){
var boolean_if=str_URL.match(str_regURL)&&!str_URL.match(str_regURLx)&&array_yjcd.indexOf(seg_segment_id)==-1;
}else{
var boolean_if=str_URL.match(str_regURL)&&array_yjcd.indexOf(seg_segment_id)==-1;
}
}else{
//-URL and Device and Cookie
if(seg_URLx.length>0){
var boolean_if=str_URL.match(str_regURL)&&!str_URL.match(str_regURLx)&&seg_device==str_device&&array_yjcd.indexOf(seg_segment_id)==-1;
}else{
var boolean_if=str_URL.match(str_regURL)&&seg_device==str_device&&array_yjcd.indexOf(seg_segment_id)==-1;
}
}

//Store APN segment ID to tmp array and cookie array if fire conditions matched
if(boolean_if){
for(j=0;j<array_recency.length;j++){
if(seg_recency==array_recency[j]){
eval("array_apn_segment_id"+array_recency[j]+".push(seg_segment_id);");
array_yjcd.push(seg_segment_id);
}}}
}


var yj_apn_segid=[];
for(j=0;j<array_recency.length;j++){

//Store APN segment ID to recency position of return value array
eval("var str_apn_segment_id=array_apn_segment_id"+array_recency[j]+".join(',');");
yj_apn_segid[array_recency[j]]=str_apn_segment_id;

//Write APN segment ID to cookie
if(mode=="debug"){
document.cookie="bt3.yjcd="+array_yjcd.join(",")+";max-age="+test_sec_fq+";path=/";
}else{
document.cookie="bt3.yjcd="+array_yjcd.join(",")+";max-age="+sec_fq+";path=/";
}

}

} catch(e){return "";}

return yj_apn_segid;

})();