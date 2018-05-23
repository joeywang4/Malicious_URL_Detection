// **************************************************
// **************************************************
// rev 2018-01-30 1700
// Custom JavaScript code
// main_preload.js
// **************************************************
// **************************************************

console.log("main_preload");


try{
    // **************************************************
    // **************************************************
    // rev 2015-01-30 1630
    // SBH不具合対応
    // 
    // **************************************************
    // **************************************************
    if( typeof pageName != 'undefined' && pageName.match(/WBC_SBH_P_9.00.1/i) ){
        if( typeof s != 'undefined' && typeof s.pageName == 'undefined' ) s.pageName = pageName;

    }
}catch(e){};


try{

	if( !!location.hostname.match(/ct11\.my\.softbank\.jp$/) ){    
    
        if(s.pageName.match(/WBC_._OPT(03[23])|(04[12])/i)){
            
            if(typeof(mysb)=='undefined'){var mysb = new Object;}
            
            if(s.pageName.match(/WBC_._OPT(032)|(041)/i)){
                mysb.pageStatus = 'summary';
				
                //origin			if($('table.tbase td input[name=optionId]').length == 1){
                if($('input[name=optionId]').length == 1){
                    // Single
                    console.log("Single");
                    if(s.pageName.match(/WBC_._OPT032/i)){
                        if($('div#content table.tbase tbody tr td.fs_16 input').parent().parent().children('th.w_130').text().match(/加入/)){
                            mysb.appliType   = 'entry_';
                            mysb.productName = $('div#content table.tbase tbody tr td.fs_16 input').parent().text().replace(/^\s+/,"").replace(/\s+$/,"");
                        }
                        else if($('div#content table.tbase tbody tr td.fs_16 input').parent().text().match(/解除/)){	//fix
                            mysb.appliType   = 'cancel_';
                            mysb.productName = $('div#content table.tbase tbody tr td.fs_16 input').parent().text().replace("の解除","").replace(/^\s+/,"").replace(/\s+$/,"");
                        }
                    }
                    else if(s.pageName.match(/WBC_._OPT041/i)){
                        if($('div#content div.h3_wrap h3').text().match(/加入/)){
                            mysb.appliType   = 'entry_';
                            mysb.productName = $('div#content table.tbase tbody tr td.fs_16')[0].innerText.replace(/^\s+/,"").replace(/\s+$/,"").replace(/？$/,"");
                        }
                        else if($('div#content table.tbase tbody tr td.fs_16 input').parent().text().match(/解除/)){
                            mysb.appliType   = 'cancel_';
                            mysb.productName = $('div#content table.tbase tbody tr td.fs_16 input').parent().text().replace("の解除","").replace(/^\s+/,"").replace(/\s+$/,"");
                        }
                        else{
                            
                            // entry 子育てサポート
                            for(i=0; i < $('h2').length ; i++){
                                if($('h2')[i].innerHTML.match(/購入申し込み/)){
                                    mysb.appliType   = 'entry_';
                                    break;
                                }
                            }
                            
                            if(mysb.appliType.match(/(entry)|(modify)|(cancel)/) == null){
                                mysb.appliType   = 'common_';
                            }
                            
                        }
                    }
                    //mysb.p = $('div#content table.tbase tbody tr td.fs_16 input').attr('value');
                    mysb.p = $('input[name=optionId]').attr('value');
                    
                    //origin			}else if($('table.tbase td input[name=optionId]').length > 1){
                }
                else if($('input[name=optionId]').length > 1){
                    // Multiple
                    console.log("Multiple");
                    //entry
                    if($('input[name=optionId]').parent().parent().children('th').text().match(/(加入)|(追加)/)){
						mysb.appliType   = 'entry_';
						mysb.productName = $('div#content div.h2_wrap h2')[0].innerHTML.replace("概要","").replace(/^\s+/,"").replace(/\s+$/,"");
						mysb.p = undefined;
                    }
                    //modify
                    else if($('input[name=optionId]').parent().parent().children('th').text().match(/変更/)){
                        mysb.appliType   = 'modify_';
                        mysb.productName = $('div#content div.h2_wrap h2')[0].innerHTML.replace("概要","").replace(/^\s+/,"").replace(/\s+$/,"");
                        mysb.p = $('td input[id=remove]').attr('value');
                    }
                    
                    if($('input[id=remove]').parent().parent().text().match(/の解除/)){
                        mysb.productName = $('input[id=remove]').parent().parent().text().replace("の解除","").replace(/^\s+/,"").replace(/\s+$/,"");
                    }
                    
                    // A or I
                    if($('td input[id=remove]').attr('value') != 'undefined' && mysb.p == undefined){
                        mysb.p = $('td input[id=remove]').attr('value');
                        //mysb.appliType   = 'modify_';
                    }

                    // A or I SmartTV 変更
                    if(typeof(mysb.appliType) == 'undefined'){
                        console.log("Point");
                        for(i=0; i < $('h3').length ; i++){
                            if($('h3')[i].innerHTML.match(/サービス変更/)){
                                mysb.appliType = 'modify_';
                                break;
                            }
                        }
                    }

                    
                }
                else{
                    console.log("Point");
                }
                
                if(typeof(mysb.productName) == 'undefined'){
                    for(i=0; i < $('h2').length ;i++){
                        if($('h2')[i].innerHTML.match(/概要/)){
                            mysb.productName = $('h2')[i].innerHTML.replace("概要","").replace(/^\s+/,"").replace(/\s+$/,"");
                        }
                    }
                }
                
                
                if(typeof(mysb.appliType) == 'undefined'){
                    _tmp_h3 =$('h3').text();
                    
                    if( _tmp_h3.indexOf("加入") != -1 && _tmp_h3.indexOf("解除") != -1 ){
                        mysb.appliType = 'modify_';
                    }
                    else if( _tmp_h3.match(/加入/) ){
                        mysb.appliType = 'entry_';
                    }
                    else if( _tmp_h3.match(/解除/)){
                        mysb.appliType = 'cancel_';
                    }
                    
                }
                
                
            }// endOf if(s.pageName.match(/WBC_._OPT(032)|(041)/i))
            else if(s.pageName.match(/WBC_._OPT(033)|(042)/i)){
                mysb.pageStatus = 'confirm';
                
                if(s.pageName.match(/WBC_._OPT033/i)){
                    _obj_mysb_productName = $('div#content table.tbase tbody tr td.ta_c.fs_16');
                    _mysb_productName = _obj_mysb_productName.text();
                    if(_mysb_productName.match(/加入/)){	//fix
                        mysb.appliType   = 'entry_';
                        mysb.productName = _mysb_productName.replace("に加入","");
                        
                        //基本パック
                        if( _mysb_productName.indexOf("加入") != -1 && _mysb_productName.indexOf("解除") != -1 ){
                            _tmp = "";
                            for(i=0 ; i< _obj_mysb_productName.length ; i++){
                                
                                _t1 = _obj_mysb_productName[i].innerHTML.replace(/(に加入)|(の解除)/,"");
                                if(_t1){
                                    _tmp = _tmp + ">" + _t1;
                                }
                            }
                            _tmp = _tmp.replace(/^>/,"");
                            mysb.appliType   = mysb.appliType.replace("entry","modify");
                            //mysb.p = _obj_mysb_productName[0].innerHTML.replace(/(に加入)|(の解除)/,""); 逆引き完成後に編集
                        }
                        if(typeof(_tmp) != 'undefined'){
                            mysb.productName = _tmp;
                        }
                        //console.log("POINT!");
                    }
                    else if(_mysb_productName.match(/解除/)){
                        mysb.appliType   = 'cancel_';
                        mysb.productName = _mysb_productName.replace("の解除","");
                    }
                    //mysb.p = undefined;
                }
                else if(s.pageName.match(/WBC_._OPT042/i)){
                    
                    //entry
                    if($('div#content div.h2_wrap h2').text().match(/加入/)){
                        mysb.appliType   = 'entry_';
                        mysb.productName = $('div#content table.tbase tbody tr td.ta_c.fs_16').text();
                    }
                    else if(0){	//解除検出
                        //mysb.pageStatus = 'cancel_' + mysb.pageStatus;
                        //mysb.productName = _mysb_productName.replace("の解除","");
                    }
                    mysb.p = undefined;
                }
                
                //Temporary 1
                if(typeof(mysb.productName) == 'undefined' || mysb.productName == ''){
                    mysb.productName = $('table tbody tr td.ta_c')[0].innerHTML;
                    //サービス名称ループ後 $('th')[0].parentElement.parentElement.children[1].firstChild.innerHTML
                    console.log("Point");
                }
                
                
            }// endOf if(s.pageName.match(/WBC_._OPT(033)|(042)/i))
            else{
                mysb.appliType   = 'other_';
            }
            
            if(typeof(mysb.productId) != 'undefined'){
				mysb.p = mysb.productId;
            }
            
            //change pageName
            _s_pageName = s.pageName + ':' + mysb.appliType + mysb.pageStatus + ':' + mysb.productName;
            s.pageName = _s_pageName;
            
            //CustomLink
            _mysb_customlink = 'mysb_optionservice_' + mysb.appliType + mysb.pageStatus + '_' + mysb.p + '_' + mysb.productName;
            
        }// endOf if(s.pageName.match(/WBC_._OPT(03[23])|(04[12])/i))
        //console.log(mysb.appliType);
        //console.log(mysb.pageStatus);
        //console.log(mysb.productName);
        //console.log(_s_pageName);
        //console.log(_mysb_customlink);

        // **************************************************
        // **************************************************
        // rev 2015-01-20 2300
        // あんしん保証パック RT対応
        // 
        // **************************************************
        // **************************************************
        // setCookieProductId
        if(s.pageName.match(/WBC_._OPT(032)|(041)/i)){

            setCookieProductId = function(productId){
                if(!productId) return false;
                var d = new Date();
                d.setTime(d.getTime() + (20*60*1000));
                var expires = "expires="+d.toUTCString();
                document.cookie = "productId_optionservice" + "=" + productId + "; " + expires + "; " ;

                return true;

                //console.log(productId);
            }

            setCookieProductId(mysb.p);
        }

        if(s.pageName.match(/WBC_._OPT(033)|(042)/i)){

            getCookieProductId = function(productId){
                var _name = "productId_optionservice" + "=";
                var _cookies = document.cookie.split(';');
                for(var i=0; i < _cookies.length; i++) {
                    var _cookie = _cookies[i];
                    if (_cookie.charAt(0)==' ') _cookie = _cookie.substring(1);
                    if (_cookie.indexOf(_name) != -1) {
                        var productId = _cookie.substring(_name.length, _cookie.length);

                        if(productId.length != 0){
                            return productId;
                        }else{ return false;}
                        
                    }
                }
                return false;
            }

            _productId_optionService_before = getCookieProductId();
        }

	}

}catch(e){};

