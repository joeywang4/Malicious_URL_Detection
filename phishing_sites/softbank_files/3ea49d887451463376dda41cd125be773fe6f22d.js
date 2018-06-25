yj_apn_segid_d=(function(){
try{

//--Switch debug mode--
//var mode="debug";
var mode="non_debug";
var test_sec_fq=60*1;
var test_device="PC";

//---Array for sending APN segment ID--
var array_segment=[
[".*www.softbank.jp/mobile/special/disney-01/$","","PC","5884990",1],
[".*www.softbank.jp/mobile/special/disney-01/$","","PC","5884991",7],
[".*www.softbank.jp/mobile/special/disney-01/$","","PC","5884993",14],
[".*www.softbank.jp/mobile/campaigns/.*","","PC","5884897",1],
[".*www.softbank.jp/mobile/campaigns/.*","","PC","5884901",7],
[".*www.softbank.jp/mobile/campaigns/.*","","PC","5884908",14],
[".*www.softbank.jp/mobile/service/.*","","PC","5884900",1],
[".*www.softbank.jp/mobile/service/.*","","PC","5884904",7],
[".*www.softbank.jp/mobile/service/.*","","PC","5884911",14],
[".*my.softbank.jp/msb/d/webLink/doSend/WBO010047/$","","PC","5884974",1],
[".*my.softbank.jp/msb/d/webLink/doSend/WBO010047/$","","PC","5884976",7],
[".*my.softbank.jp/msb/d/webLink/doSend/WBO010047/$","","PC","5884979",14],
[".*my.softbank.jp/msb/d/webLink/doSend/WBO010047/$","","PC","5884981",30],
[".*www.softbank.jp/mobile/service/disney-style/apply/$","","PC","5884985",1],
[".*www.softbank.jp/mobile/service/disney-style/apply/$","","PC","5884986",7],
[".*www.softbank.jp/mobile/service/disney-style/apply/$","","PC","5884987",14],
[".*www.softbank.jp/mobile/service/disney-style/apply/$","","PC","5884988",30],
[".*www.softbank.jp/mobile/special/2015winter-2016spring/$","","PC","5884913",1],
[".*www.softbank.jp/mobile/special/2015winter-2016spring/$","","PC","5884914",7],
[".*www.softbank.jp/mobile/special/2015winter-2016spring/$","","PC","5884917",14],
[".*www.softbank.jp/mobile/special/2015winter-2016spring/$","","PC","5884918",30],
[".*www.softbank.jp/mobile/special/xperia-z5/$","","PC","5884919",1],
[".*www.softbank.jp/mobile/special/xperia-z5/$","","PC","5884921",7],
[".*www.softbank.jp/mobile/special/xperia-z5/$","","PC","5884922",14],
[".*www.softbank.jp/mobile/special/xperia-z5/$","","PC","5884923",30],
[".*www.softbank.jp/mobile/special/nexus-6p/$","","PC","5884924",1],
[".*www.softbank.jp/mobile/special/nexus-6p/$","","PC","5884926",7],
[".*www.softbank.jp/mobile/special/nexus-6p/$","","PC","5884927",14],
[".*www.softbank.jp/mobile/special/nexus-6p/$","","PC","5884928",30],
[".*www.softbank.jp/mobile/products/list/xperia-z5/$","","PC","5884929",1],
[".*www.softbank.jp/mobile/products/list/xperia-z5/$","","PC","5884934",7],
[".*www.softbank.jp/mobile/products/list/xperia-z5/$","","PC","5884938",14],
[".*www.softbank.jp/mobile/products/list/xperia-z5/$","","PC","5884939",30],
[".*www.softbank.jp/mobile/products/list/nexus-6p/$","","PC","5884949",1],
[".*www.softbank.jp/mobile/products/list/nexus-6p/$","","PC","5884951",7],
[".*www.softbank.jp/mobile/products/list/nexus-6p/$","","PC","5884953",14],
[".*www.softbank.jp/mobile/products/list/nexus-6p/$","","PC","5884955",30],
[".*www.softbank.jp/mobile/products/list/aquos-xx2/$","","PC","5884956",1],
[".*www.softbank.jp/mobile/products/list/aquos-xx2/$","","PC","5884957",7],
[".*www.softbank.jp/mobile/products/list/aquos-xx2/$","","PC","5884958",14],
[".*www.softbank.jp/mobile/products/list/aquos-xx2/$","","PC","5884960",30],
[".*www.softbank.jp/mobile/products/list/aquos-xx2-mini/$","","PC","5884961",1],
[".*www.softbank.jp/mobile/products/list/aquos-xx2-mini/$","","PC","5884964",7],
[".*www.softbank.jp/mobile/products/list/aquos-xx2-mini/$","","PC","5884965",14],
[".*www.softbank.jp/mobile/products/list/aquos-xx2-mini/$","","PC","5884967",30],
[".*www.softbank.jp/mobile/shop/$","","PC","5884972",30],
[".*www.softbank.jp/online-shop/service/disney-style/$","","PC","5884975",1],
[".*www.softbank.jp/mobile/shop/$","","PC","5884968",1],
[".*www.softbank.jp/mobile/shop/$","","PC","5884969",7],
[".*www.softbank.jp/mobile/shop/$","","PC","5884970",14],
[".*www.softbank.jp/online-shop/service/disney-style/$","","PC","5884977",7],
[".*www.softbank.jp/online-shop/service/disney-style/$","","PC","5884980",14],
[".*www.softbank.jp/online-shop/service/disney-style/$","","PC","5884982",30]
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