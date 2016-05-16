require.config({
    paths: {
        "zepto": "http://apps.bdimg.com/libs/zepto/1.1.4/zepto.min",
        "signature_pad": "http://cdn.bootcss.com/signature_pad/1.5.3/signature_pad.min"
    }
})
require(["zepto","signature_pad"],function(){
    /*var canvas = document.querySelector("canvas");
    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = document.body.offsetWidth  ;
    canvas.height = document.body.offsetHeight ;
    var signaturePad = new SignaturePad(canvas,{
    });*/
    //signaturePad.penColor="rgb(255,255,0)";
    var height=$(".name-bor1").height();
    $(".name-p").css("line-height",height+'px');
    /*function orient() {
        if (window.orientation == 0 || window.orientation == 180) {
            $("body").addClass("orient-90");
            return false;
        }
        else if (window.orientation == 90 || window.orientation == -90) {
            $("body").addClass("orient-0");
            return false;
        }
    }
    $(function(){
        orient();
    });
    $(window).bind( 'orientationchange', function(e){
        orient();
    });*/

    signaturePad=initCanvas();


    $('#btn-clear').on('click', function () {
        signaturePad.clear();
    });


    /**
     * 初始化画签名的画布
     */
    function initCanvas() {
        var ratio = Math.max(window.devicePixelRatio || 1, 1);
        var offsetWidth = canvas.parentNode.offsetWidth * 0.9;
        canvas.width = offsetWidth  * ratio;
        canvas.height = offsetWidth * 0.6 * ratio;
        return  new SignaturePad(canvas, {
            minWidth: 0.7, maxWidth: 2
        });
        //signaturePad.penColor="rgb(255,255,0)";
    }

    
});
