!function(r){var e=/\+/g,n=/([^&=]+)=+([^&]*)/g,t=/([^&=]+)=?([^&]*)/g,u=function(r){return decodeURIComponent(r.replace(e," "))
};r.parseQuery=function(r,e){var o,i={},a=e||{},s=a.tolerant?t:n;for("?"===r.substring(0,1)&&(r=r.substring(1));o=s.exec(r);)i[u(o[1])]=u(o[2]);
return i},r.getQuery=function(e){return r.parseQuery(window.location.search,e)},r.fn.parseQuery=function(e){return r.parseQuery(r(this).serialize(),e)
}}(jQuery);