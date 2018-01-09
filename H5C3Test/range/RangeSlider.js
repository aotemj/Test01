$(function(){
    $.fn.RangeSlider = function(cfg){
        this.sliderCfg = {
            min: cfg && !isNaN(parseFloat(cfg.min)) ? Number(cfg.min) : null,
            max: cfg && !isNaN(parseFloat(cfg.max)) ? Number(cfg.max) : null,
            step: cfg && Number(cfg.step) ? cfg.step : 1,
            callback: cfg && cfg.callback ? cfg.callback : null
        };

        var $input = $(this);
        var min = this.sliderCfg.min;
        var max = this.sliderCfg.max;
        var step = this.sliderCfg.step;
        var callback = this.sliderCfg.callback;

        $input.attr('min', min)
            .attr('max', max)
            .attr('step', step);

        $input.bind("input", function(e){
            $input.attr('value', this.value);
            // $input.css( 'background', 'linear-gradient(to right, #FF5000, white ' + this.value + '%, white)' );
            $input.css( 'background', 'linear-gradient(to right, #FF5000 0%, #FF5000 '+this.value+'%,white '+this.value+'%, white 100%)' );

            if ($.isFunction(callback)) {
                callback(this);
            }
        });
    };


          var change = function($input) {
          /*内容可自行定义*/
          // clearInterval(timer);
          }
        $('input').RangeSlider({ min: 0,   max: 100,  step: 0.1,  callback: change});

        // 初始化页面时的值
        var val = $('#range').val()-0;
        console.log(val);
        $('input').css({'background':'linear-gradient(to right,#ff5000 0%,#ff5000 '+val+'%,#fff '+val+'%,#fff 100%)'});
        var num = 0;
        function play(){
          val = $('#range').val()-0;
          $('#range').css({'background':'linear-gradient(to right,#ff5000 0%,#ff5000 '+val+'%,#fff '+val+'%,#fff 100%)'});
        };
        var timer = setInterval(function(){

          val+=1;
          console.log(val);
          play();
        },1000);

});
