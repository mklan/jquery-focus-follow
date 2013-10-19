/*!
 * jquery.focus-follow v0.1;
 * A responsive container that follows your focus, while hovering over your elements (for example your image gallery).
 * 
 * contact: matthias.klan@gmail.com
 
 
 * The MIT License (MIT)

Copyright (c) 2013 Matthias Klan

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


(function ( $ ) {

    $.fn.extend({

     focusFollow : function(options) {

         //Default settings
         var settings = $.extend({
             color: "orange",
             speed: 400,
             opacity: 1,
             timeout: 200,
             margin: 2

         }, options );

         if(options.margin_horizontal == null){
             settings.margin_horizontal = settings.margin;
         }

         if(options.margin_vertical == null){
             settings.margin_vertical = settings.margin;
         }

         var follower = jQuery('<div/>', {
         }).appendTo('body');

         $(follower).css({
             "border-radius": "6px",
             "z-index": -1,
             "position": "absolute",
             "background-color": settings.color,
             "opacity": 0
         });

         return this.each(function() {
             $(this).on( "mouseenter", function() {

                 if(options.border_radius == null){
                     settings.border_radius = $(this).css("border-radius");
                 }

                 if($(follower).css('opacity') != 0){
                     $(follower).stop().animate({
                         'top' : $(this).offset().top-settings.margin_vertical,
                         'left' : $(this).offset().left-settings.margin_horizontal,
                         'opacity' : settings.opacity,
                         'border-radius' : settings.border_radius,
                         'height' : $(this).height()+settings.margin_vertical*2,
                         'width' : $(this).width()+settings.margin_horizontal*2

                     }, settings.speed);
                 }else{
                     $(follower).css({
                         'top' : $(this).offset().top-settings.margin_vertical,
                         'left' : $(this).offset().left-settings.margin_horizontal,
                         'opacity' : settings.opacity,
                         'border-radius' : settings.border_radius,
                         'height' : $(this).height()+settings.margin_vertical*2,
                         'width' : $(this).width()+settings.margin_horizontal*2
                     });
                 }

             });
			 
			 if( options.wrapper == null ){
			     console.log("no wrapper");
				 $(this).on( "mouseleave", function() {

					 $(follower).stop().animate({
						 'opacity' : 0
					 },settings.timeout);

				 });
			 }else{
				$(options.wrapper).on( "mouseleave", function() {

					 $(follower).stop().animate({
						 'opacity' : 0
					 },settings.timeout);

				 });
				
			 }
         });

     }


    });

}( jQuery ));