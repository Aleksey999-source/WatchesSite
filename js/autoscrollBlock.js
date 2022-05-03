$(window).on('unload', function() 
{ 
   $(window).scrollTop(0); 
});
window.onunload = function()
{ 
   window.scrollTo(0,0); 
} 
if ('scrollRestoration' in history) 
{ 
   history.scrollRestoration = 'manual'; 
} 