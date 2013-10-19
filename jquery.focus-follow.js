/*!
 * jquery.focus-follow v0.1;
 * A responsive indicatr that follows your focus, while hovering over your elements (for example your image gallery).
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
             margin: 2,
			 z_index: -1

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
             "z-index": settings.z_index,
             "position": "absolute",
             "background-color": settings.color,
             "opacity": 0
         });

         return this.each(function() {
             $(this).on( "mouseenter", function() {

                 if(options.border_radius == null){
					 if( parseInt($(this).css("border-radius")) != 0){
					 settings.border_radius = parseInt($(this).css("border-radius"))+settings.margin_vertical;
					 }else{
					 settings.border_radius = 0;
					 }
                 }

                 if($(follower).css('opacity') != 0){
                     $(follower).stop().animate({
                         'top' : $(this).offset().top-settings.margin_vertical,
                         'left' : $(this).offset().left-settings.margin_horizontal,
                         'opacity' : settings.opacity,
                         'height' : $(this).height()+settings.margin_vertical*2,
                         'width' : $(this).width()+settings.margin_horizontal*2,
						  borderTopLeftRadius: settings.border_radius, 
						  borderTopRightRadius: settings.border_radius, 
						  borderBottomLeftRadius: settings.border_radius, 
						  borderBottomRightRadius: settings.border_radius,
						  WebkitBorderTopLeftRadius:  settings.border_radius, 
						  WebkitBorderTopRightRadius: settings.border_radius, 
						  WebkitBorderBottomLeftRadius: settings.border_radius, 
						  WebkitBorderBottomRightRadius: settings.border_radius, 
						  MozBorderRadius: settings.border_radius
                     }, settings.speed);
                 }else{
                     $(follower).css({
                         'top' : $(this).offset().top-settings.margin_vertical,
                         'left' : $(this).offset().left-settings.margin_horizontal,
                         'opacity' : settings.opacity,
                         'height' : $(this).height()+settings.margin_vertical*2,
                         'width' : $(this).width()+settings.margin_horizontal*2,
						  borderTopLeftRadius: settings.border_radius, 
						  borderTopRightRadius: settings.border_radius, 
						  borderBottomLeftRadius: settings.border_radius, 
						  borderBottomRightRadius: settings.border_radius,
						  WebkitBorderTopLeftRadius:  settings.border_radius, 
						  WebkitBorderTopRightRadius: settings.border_radius, 
						  WebkitBorderBottomLeftRadius: settings.border_radius, 
						  WebkitBorderBottomRightRadius: settings.border_radius, 
						  MozBorderRadius: settings.border_radius
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