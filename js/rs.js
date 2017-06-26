(function(jQuery,window,document){

    var $window = $(window),
        $document = $(document);
    
    
    $.fn.hdMenu = function(options){
        options = $.extend({},$.fn.hdMenu.defaults,options);
        var $menubar = $(options.menu);
        var $menu = $menubar.find(".menu");
        var $menuBut = $menubar.find(".menuBut");
        var $menuOpend = false;
        var $body = $('body');
        var $canvas = $(options.canvas);
        
        
        $menuBut.on("click",function(){
            var isResponsive = $body.hasClass("RESPONSIVE");
            var $leftPos = $menu.width();
            var $parent = $(this).parent();
            var translate3d;
            if(isResponsive){
                if(!$menuOpend){
                    translate3d = 'translateX(' + $leftPos + 'px)';
                    $parent.css({
                        'transform': translate3d
                    });
                    $canvas.css({
                        'transform': translate3d
                    });
                    $menuOpend = true;
                }else{
                    translate3d = 'translate3d(0, 0px, 0px)';
                    $parent.css({
                       'transform': translate3d
                    });
                    $canvas.css({
                        'transform': translate3d
                    });
                    $menuOpend = false;
                }
                
            }
        });
        
        init();
        bindEvents();
        
        function init(){
            $menuOpend = false;
            chkBreakPoint();
            facePro();
            setClipMask(2);
            $('.cSection').hover(function(){
                setClipMask(2.8);
            });
            $('.cSection').mouseleave(function(){
                setClipMask(2);
            });
            $('.gSection').hover(function(){
                setClipMask(1.6);
            });
            $('.gSection').mouseleave(function(){
                setClipMask(2);
            });
        };
        
        function bindEvents(){
            $window
                .resize(resizeHandler);
        };
        
        function resizeHandler(){
           // setInterval(function(){
                init();
                setClipMask(2);
           // },1000);
        };
        
        function callFullage(){
            $('#fullpage').fullpage({
                    'verticalCentered': false,
                    'css3': true,
                    'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
                    'navigation': true,
                    'navigationPosition': 'right',
                    'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

                    'afterLoad': function(anchorLink, index){
                        if(index == 2){
                            $('#iphone3, #iphone2, #iphone4').addClass('active');
                        }
                    },

                    'onLeave': function(index, nextIndex, direction){
                        if (index % 2){
                            $("#fp-nav").find(".fp-tooltip").css('color', 'black');
                            console.log($("#fp-nav"));
                        }else{
                            $("#fp-nav").find(".fp-tooltip").css('color', 'white');
                        }
                        if (index == 3 && direction == 'down'){
                            $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
                        }
                        else if(index == 3 && direction == 'up'){
                            $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
                        }

                        $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
                        $('#staticImg').toggleClass('moveDown', nextIndex == 4);
                        $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
                    }
                });
        }
        
        function setClipMask(num){
            var $rectClip = 'rect(0px '+$window.width()+'px '+$window.height()+'px '+$window.width()/num+'px)';
            $('.cSection').css({'clip':$rectClip});
        }
        
        function facePro(){
            var $winWidth = $window.width();
            var $winHeight = $window.height();
            if($winWidth > $winHeight){
                $(".face").css('height','50%');
            }else{
                $(".face").css('width','30%');
            }
            console.log($winWidth/2);
            $facewidth = $(".face").width();
            $(".face").css('left',$winWidth/2 - $facewidth/2);
        }

        function chkBreakPoint(){
            
            var $winWidth = $window.width();
            var $winHeight = $window.height();
            var translate3d;
            
            if($winWidth < options.breakpoint){
                var $leftPos = $menu.width();
                if($menuOpend){
                    translate3d = 'translate3d(0, 0px, 0px)';
                    $menubar.css({'left':-$leftPos,'transform': translate3d});
                    $canvas.css({'left':0,'transform':translate3d});
                    $menuOpend = false;
                }else{
                    translate3d = 'translate3d('+$leftPos+', 0px, 0px)';
                    $menubar.css({'left':-$leftPos,'transform':translate3d});   
                }
                $body.addClass("RESPONSIVE");
                $('#section0').css({'height':$window.height()-50});
                $('#section0 .gSection').css({'height':$window.height()});
                $('#section0 .cSection').css({'height':$window.height()});
                
            }else{
                translate3d = 'translate3d(0, 0px, 0px)';
                $canvas.css({'left':0,'transform':translate3d});
                $menubar.css({'left':0,'transform':translate3d});   
                $body.removeClass("RESPONSIVE");
                callFullage();
            }
        }
    };
    
    $.fn.hdMenu.defaults = {
        
    };
  
  $(document).ready(function(){
        var $window = $(window),
            $document = $(document),
            $currentSlide = 0;
        
        $(".services span a").each(function(index){
            $this = $(this);
            $this.on("click", function(){
                //$(this).parent.siblings.find('a').removeClass('clicked-link');
                //if($(this).parent().siblings().find('a').hasClass('clicked-link')){
                    $(this).parent().siblings().find('a').removeClass('clicked-link')
                //}else{
                    $(this).addClass('clicked-link');
                //};
                $leftPos = 25 * index;
                var translateX = 'translateX(-' + $leftPos + '%)';
                $(".sliderContainer").css({'transform': translateX});
            });
        });
        
    });
    
})(jQuery,window,document);