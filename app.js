!function(a){"use strict";a("#side-menu").metisMenu(),a("#vertical-menu-btn").on("click",function(t){t.preventDefault(),a("body").toggleClass("sidebar-enable"),992<=a(window).width()?a("body").toggleClass("vertical-collpsed"):a("body").removeClass("vertical-collpsed")}),a("#sidebar-menu a").each(function(){var t=window.location.href.split(/[?#]/)[0];this.href==t&&(a(this).addClass("active"),a(this).parent().addClass("mm-active"),a(this).parent().parent().addClass("mm-show"),a(this).parent().parent().prev().addClass("mm-active"),a(this).parent().parent().parent().addClass("mm-active"),a(this).parent().parent().parent().parent().addClass("mm-show"),a(this).parent().parent().parent().parent().parent().addClass("mm-active"))}),a(".navbar-nav a").each(function(){var t=window.location.href.split(/[?#]/)[0];this.href==t&&(a(this).addClass("active"),a(this).parent().addClass("active"),a(this).parent().parent().addClass("active"),a(this).parent().parent().parent().parent().addClass("active"),a(this).parent().parent().parent().parent().parent().addClass("active"),a(this).parent().parent().parent().parent().parent().parent().addClass("active"),a(this).parent().parent().parent().parent().parent().parent().parent().addClass("active"))}),a(".right-bar-toggle").on("click",function(t){a("body").toggleClass("right-bar-enabled")}),a(document).on("click","body",function(t){0<a(t.target).closest(".right-bar-toggle, .right-bar").length||a("body").removeClass("right-bar-enabled")}),a(".dropdown-menu a.dropdown-toggle").on("click",function(t){return a(this).next().hasClass("show")||a(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),a(this).next(".dropdown-menu").toggleClass("show"),!1}),a(function(){a('[data-toggle="tooltip"]').tooltip()}),a(function(){a('[data-toggle="popover"]').popover()}),Waves.init()}(jQuery);function jah(url,id)
{if(id&&$(id))
{$(id).innerHTML='working...';}
var req;if(window.XMLHttpRequest)
{req=new XMLHttpRequest();}
else if(window.ActiveXObject)
{try{req=new ActiveXObject("Msxml2.XMLHTTP");}catch(e)
{try{req=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){return 0;}}}
else{return 0;}
req.open("GET",url+'&rnd='+Math.random(),1);req.onreadystatechange=function()
{if(req.readyState==4)
{if(req.status==200)
{if(id&&$(id))
{alertify.message(req.responseText);}
else
{alertify.message(req.responseText);};}}};req.send("");return false;};function submitCommentsForm(f1)
{if(f1.cmt_name&&f1.cmt_name.value==''){alertify.error('<i class="fas fa-exclamation-triangle"></i> Name required');return false;}
if(f1.cmt_text.value.length<4){alertify.error('<i class="fas fa-exclamation-triangle"></i> Too short comment');return false;}
var url=f1.action+'?op=comment_add';for(i=0;i<f1.elements.length;i++)
{url=url+'&'+f1.elements[i].name+'='+f1.elements[i].value;}
url=encodeURI(url);jah_cmnt(url);return false;}
(function($){$.fn.createRequest=function(options){var $output=this;var $url=options.url;var $element=options.element;$output.html('<div class="text-center"><div class="fad fa-spinner-third my-4 text-primary fa-spin fa-3x" role="status"><span class="sr-only">Loading...</span></div></div>')
$.ajax({url:$url,success:function(result)
{var $modalRequire=$(result).find($element);var $export='<div class="animated fadeIn faster">'+$modalRequire.html()+'</div>';$output.empty();$output.html($export);}});}})(jQuery);$(document).on('click',".my-files-modal",function(event){var dataHref=this.dataset.href;$('.modal-body','#my-files-modal').createRequest({url:dataHref,element:'#modal-require'});});function jah_cmnt(url,id)
{if(id&&$(id))
{$(id).innerHTML='working...';}
var req;if(window.XMLHttpRequest)
{req=new XMLHttpRequest();}
else if(window.ActiveXObject)
{try{req=new ActiveXObject("Msxml2.XMLHTTP");}catch(e)
{try{req=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){return 0;}}}
else{return 0;}
req.open("GET",url+'&rnd='+Math.random(),1);req.onreadystatechange=function()
{if(req.readyState==4)
{if(req.status==200)
{if(id&&$(id))
{alertify.message(req.responseText);}
else
{eval(req.responseText);};}}};req.send("");return false;};

