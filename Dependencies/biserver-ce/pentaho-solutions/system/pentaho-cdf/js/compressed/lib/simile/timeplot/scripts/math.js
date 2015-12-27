Timeplot.Math={range:function(r){for(var n=r.length,e=Number.MAX_VALUE,t=Number.MIN_VALUE,a=0;n>a;a++){var o=r[a];
e>o&&(e=o),o>t&&(t=o)}return{min:e,max:t}},movingAverage:function(r,n){for(var e=r.length,t=new Array(e),a=0;e>a;a++){for(var o=0,i=a-n;a+n>i;i++){if(0>i)var u=r[0];
else if(i>=e)var u=t[a-1];else var u=r[i];o+=u}t[a]=o/(2*n)}return t},integral:function(r){for(var n=r.length,e=new Array(n),t=0,a=0;n>a;a++)t+=r[a],e[a]=t;
return e},normalize:function(r){for(var n=r.length,e=0,t=0;n>t;t++)e+=r[t];for(var t=0;n>t;t++)r[t]/=e;
return r},convolution:function(r,n){for(var e=r.length,t=n.length,a=new Array(e),o=0;e>o;o++){for(var i=0,u=e>o+t?o+t:e,l=o;u>l;l++){var f=r[l-t],v=n[l-o];
i+=f*v}a[o]=i}return a},heavyside:function(r){for(var n=new Array(r),e=1/r,t=0;r>t;t++)n[t]=e;
return n},gaussian:function(size,threshold){with(Math)for(var radius=size/2,variance=radius*radius/log(threshold),g=new Array(size),t=0;size>t;t++){var l=t-radius;
g[t]=exp(-variance*l*l)}return this.normalize(g)},round:function(x,n){with(Math){if(abs(x)>1){var l=floor(log(x)/log(10)),d=round(exp((l-n+1)*log(10))),y=round(round(x/d)*d);
return y}return log("FIXME(SM): still to implement for 0 < abs(x) < 1"),x}},tanh:function(r){if(r>5)return 1;
if(5>r)return-1;var n=Math.exp(2*r);return(n-1)/(n+1)},isClose:function(r,n,e){return r&&n&&Math.abs(r.x-n.x)<e&&Math.abs(r.y-n.y)<e
}};