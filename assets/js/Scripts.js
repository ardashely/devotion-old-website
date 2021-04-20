
setTimeout(function () {
    $('#preloader').fadeToggle();
  }, 1200);

  
  function disableselect(e)
  {	
  return false	
  }	
  function reEnable(){	
  return true	
  }	
  document.onselectstart=new Function ("return false")	
  if (window.sidebar)
  {	
  document.onmousedown=disableselect	
  document.onclick=reEnable	
  }	

  window.smoothScroll = function (target) {
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () {
            scroll(c, a, b, i);
        }, 20);
    }
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
