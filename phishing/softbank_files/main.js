// **************************************************
// **************************************************
// rev 2015-12-28 1500
// Script order
// [Custom JavaScript - main_preload.js] > [SiteCatalyst signal] > [Y tag] > [Google Analytics] > [Treasure Data] > [Custom JavaScript - main_afterload.js]
// **************************************************
// **************************************************

try{
    //for IE8
    if(typeof(console) == 'undefined' || typeof(console.log) == 'undefined'){
        console = {};console.log = function(){};
    }

    _dateserial = Date.parse(Date()).toString().substring(0,10);
}catch(e){};


if(typeof _dateserial == 'undefined') _dateserial = '';

// **************************************************
// Custom code 1
// **************************************************
    document.write('<script type="text/javascript" charset="UTF-8" src="https://cdn.softbank.jp/mysoftbank/set/common/p/js/analytics/main_preload.js?' + _dateserial +'"></script>');
    //document.write('<script type="text/javascript" charset="UTF-8" src="./main_preload.js"></script>');

// **************************************************
// SiteCatalyst Signal
// **************************************************
    //console.log(s_account);
    document.write('<script type="text/javascript" charset="UTF-8" src="https://cdn.softbank.jp/mysoftbank/set/common/p/js/analytics/siteCatalyst_code_signal.js?' + _dateserial +'"></script>');


// **************************************************
// Y tag
// **************************************************
    document.write('<script type="text/javascript" src="https://cdn.softbank.jp/mysoftbank/set/common/p/js/yjtag/yjtag.js?' + _dateserial +'" async></script>');

// **************************************************
// Google Analytics
// **************************************************
    document.write('<script type="text/javascript" src="https://cdn.softbank.jp/mysoftbank/set/common/p/js/analytics/ga.js?' + _dateserial +'"></script>');

// **************************************************
// Treasure Data
// **************************************************
    document.write('<script type="text/javascript" src="https://cdn.softbank.jp/mysoftbank/set/common/p/js/analytics/treasuredata.js?' + _dateserial +'" async></script>');
    
    
// **************************************************
// Custom code 2
// **************************************************
    document.write('<script type="text/javascript" charset="UTF-8" src="https://cdn.softbank.jp/mysoftbank/set/common/p/js/analytics/main_afterload.js?' + _dateserial +'" async></script>');


// **************************************************
// Custom code 3
// **************************************************
    document.write('<script type="text/javascript" charset="UTF-8" src="https://cdn.softbank.jp/mysoftbank/set/common/p/js/analytics/sub/additional_ad.js?' + _dateserial +'" async></script>');
