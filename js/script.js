$('#lang').on('click',function(){
    if($(this).html()=='en'){
        //handel arabic
        $(this).html('ar');
        $('html').attr('lang','en');
        $('html').attr('dir','ltr');
        $('link:nth(0)').attr('href','../css/bootstrap.min.css');
        $('a#scroller').css({'left':'50%'});
    }else{
        //handel english
        $(this).html('en');
        $('html').attr('lang','ar');
        $('html').attr('dir','rtl');
        $('link:nth(0)').attr('href','../css/bootstrap-a.css');
        $('a#scroller').css({'right':'50%'});
    }
});