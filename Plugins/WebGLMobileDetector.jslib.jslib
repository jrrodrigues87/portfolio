mergeInto(LibraryManager.library, {
  // Detecta dispositivo móvel por User Agent
  IsMobileUserAgent: function () {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Lista de dispositivos móveis
    var mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
    
    return mobileRegex.test(userAgent.toLowerCase()) ? 1 : 0;
  },
  
  // Detecta por tamanho de tela
  IsMobileScreenSize: function () {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    // Considera mobile se largura <= 768px (comum em dispositivos móveis)
    return (width <= 768 || height <= 768) ? 1 : 0;
  },
  
  // Detecta se tem touch
  HasTouchScreen: function () {
    return ('ontouchstart' in window) || 
           (navigator.maxTouchPoints > 0) || 
           (navigator.msMaxTouchPoints > 0) ? 1 : 0;
  },
  
  // Obtém informações da tela
  GetScreenInfo: function () {
    var info = {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: window.devicePixelRatio,
      orientation: window.screen.orientation ? window.screen.orientation.type : 'unknown'
    };
    
    // Retorna como string JSON
    var jsonStr = JSON.stringify(info);
    var buffer = _malloc(jsonStr.length + 1);
    stringToUTF8(jsonStr, buffer, jsonStr.length + 1);
    return buffer;
  }
});