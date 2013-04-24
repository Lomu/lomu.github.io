$(function(){
	$('body').lomuAnimate(
        {
            dom:'#logo,#text1,#text2,#text3,#text4,#text5',
            affect: 'easeOutBounce,easeOutQuint,easeOutQuint,easeOutBack,easeOutQuint,easeOutQuint',
            direction: 'top,left,right,bottom,bottom,top',
            top:'18%,31%,37%,46%,60%,70%',
            speed: '2000',
            timeout: '1000'
        }
    );
    //Edit this date
    $("#countdown").countdown({until: new Date(2013, 12-1, 25)}); 
    
    function showtip(content,color){
        $('#email').poshytip({
            content: content,
            className: 'tip-'+ color,
            showOn: 'none',
            alignTo: 'target',
            alignX: 'center',
            alignY: 'bottom',
            offsetX: 0,
            offsetY: 10
        });  
    }

    $("#subscribe").submit(function(e){
        e.preventDefault();
        $("#email").poshytip('hide');
        var value = $.trim($('#email').val());
        if(value==""){
            $('#email').addClass('error');
            $("#email").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
            showtip('Email address is required!','yellow');
            $("#email").poshytip('show');
            setTimeout(function(){$("#email").poshytip('hide');},3000);
        }else if(!(/^[0-9a-zA-Z\-_](\.?[0-9a-zA-Z\-_]+)*@[0-9a-zA-z](-?[0-9a-zA-z]+)*\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/.exec(value))){
            $('#email').addClass('error');
            $("#email").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
            showtip('Email address is invalid!','yellow');
            $("#email").poshytip('show');
            setTimeout(function(){$("#email").poshytip('hide');},3000);
        }else{
            $.post("send_mail.php",{mail:value},function(result){
                if(result==1){
                    showtip('Subscribe success!','green');
                    $("#email").poshytip('show');
                    setTimeout(function(){$("#email").poshytip('hide');},3000);
                }else if(result==0){
                    showtip('You have already subscribed!','yellow');
                    $("#email").poshytip('show');
                    setTimeout(function(){$("#email").poshytip('hide');},3000);
                }
            });
        }
    });
    $("#email").click(function(){
        $(this).removeClass('error');
        $(this).removeClass('ok');
        $(this).poshytip('hide');
    })
    spaceParallax();
    // Function to create subtle parallax space effect
    function spaceParallax() {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.bg-1',
                    'properties': {
                        'x': {
                            'background-position-x': {
                                'initial': 0,
                                'multiplier': 0.02,
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.bg-2',
                    'properties': {
                        'x': {
                            'background-position-x': {
                                'initial': 0,
                                'multiplier': 0.1,
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.bg-3',
                    'properties': {
                        'x': {
                            'background-position-x': {
                                'initial': 0,
                                'multiplier': 0.05,
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });
    }
	
});
