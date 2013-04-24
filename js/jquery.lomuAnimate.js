/**
 * @name        lomuAnimate
 * @author      Lomu
 * @version     1.0
 * @license     MIT License
 */
(function(a){a.fn.lomuAnimate=function(b){function k(b,k){var l=c.timeout*(k+1),m=g[k],n=i[k],o=j[k],p=j[k+1];setTimeout(function(){if(f[k+1]){var g=i[k+1];("left"==g||"right"==g)&&(h=-d/2),"left"==g?a(f[k+1]).animate({left:h,top:p}):"right"==g?a(f[k+1]).animate({right:h,top:p}):"bottom"==g?a(f[k+1]).animate({top:e,left:0}):"top"==g&&a(f[k+1]).animate({top:-e/2,left:0})}"left"==n?a(b).show().animate({left:0},c.speed,m):"right"==n?a(b).show().animate({right:0},c.speed,m):a(b).show().animate({top:o},c.speed,m)},l)}var c={dom:"#logo,#text1,#text2,#text3,#text4",affect:"easeOutBounce,easeOutQuint,easeOutQuint,easeOutBack,easeOutQuint",direction:"top,left,right,bottom,bottom",top:"140,230,280,320,400",speed:"2000",timeout:"1000"};c=a.extend(c,b);var d=a(this).width(),e=a(this).height(),f=a.trim(c.dom).split(","),g=a.trim(c.affect).split(","),i=a.trim(c.direction).split(","),j=a.trim(c.top).split(",");a.each(f,function(b,c){a(c).css({position:"absolute"}),(0==b&&"top"==i[b]||"bottom"==i[b])&&a(f[b]).animate({top:0}),k(c,b)})}})(jQuery);