(function(jQuery,window,document){
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