(function(){var t,e;t=function(){function t(){var e,i,s,a;if(this.$=window.jQuery){for(this.features={},this.activeFeatures=[],this.target=this.$("body"),this.target.addClass("opentype-target"),this.panel=this.$("<div></div>").attr({id:"opentype-panel"}),a=t.features,i=0,s=a.length;s>i;i++)e=a[i],this.features[e.slug]=e,this.$("<a><span>"+e.title+"</span></a>").attr({href:"#",title:e.title,"data-feature":e.slug}).addClass("toggle").appendTo(this.panel);this.$(".toggle",this.panel).click(function(t){return function(e){var i;return i=t.$(e.target),t.toggle(i.data("feature")),i.toggleClass("active"),!1}}(this)),this.panel.appendTo(document.body),this.style=this.$("<style></style>"),this.style.appendTo(document.head),this.update()}}return t.features=[{slug:"kern",title:"Kerning"},{slug:"liga",title:"Standard ligatures"},{slug:"dlig",title:"Discretionary ligatures"},{slug:"hlig",title:"Historical ligatures"},{slug:"clig",title:"Contextual ligatures"},{slug:"smcp",title:"Small capitals"},{slug:"c2sc",title:"Small capitals from capitals"},{slug:"lnum",title:"Lining figures",exclude:["onum"]},{slug:"onum",title:"Old-style figures",exclude:["lnum"]},{slug:"pnum",title:"Proportional figures",exclude:["tnum"]},{slug:"tnum",title:"Tabular figures",exclude:["pnum"]},{slug:"frac",title:"Fractions",exclude:["afrc"]},{slug:"afrc",title:"Alternative fractions",exclude:["frac"]},{slug:"zero",title:"Slashed zero"},{slug:"nalt",title:"Alternate annotation forms"},{slug:"swsh",title:"Swash"},{slug:"calt",title:"Contextual alternates"},{slug:"hist",title:"Historical forms"},{slug:"salt",title:"Stylistic alternates"},{slug:"ss01",title:"Stylistic set 1"},{slug:"ss02",title:"Stylistic set 2"},{slug:"ss03",title:"Stylistic set 3"},{slug:"ss04",title:"Stylistic set 4"}],t.prototype.destroy=function(){this.target.removeClass("opentype-target"),this.panel.remove(),this.style.remove()},t.prototype.toggle=function(t){var e;e=this.activeFeatures.indexOf(t),e>-1?this.activeFeatures.splice(e,1):this.activate(t),this.update()},t.prototype.activate=function(t){var e,i,s,a,l;if(this.activeFeatures.push(t),this.features[t].exclude)for(l=this.features[t].exclude,i=0,a=l.length;a>i;i++)e=l[i],s=this.activeFeatures.indexOf(e),s>-1&&(this.activeFeatures.splice(s,1),this.$(".toggle[data-feature="+e+"]",this.panel).removeClass("active"))},t.prototype.update=function(){var t;t=this.combine()+" !important",this.style.text("* {\n  -moz-font-feature-settings: "+t+";\n  -ms-font-feature-settings: "+t+";\n  -o-font-feature-settings: "+t+";\n  -webkit-font-feature-settings: "+t+";\n  font-feature-settings: "+t+";\n}")},t.prototype.combine=function(){var t,e,i,s,a;for(s="",a=this.activeFeatures,e=0,i=a.length;i>e;e++)t=a[e],s.length&&(s+=","),s+='"'+t+'" 1';return s.length?s:"normal"},t}(),window.initializeOpenType=function(){window.openType=new t},window.deinitializeOpenType=function(){window.openType.destroy(),delete window.openType},window.toggleOpenType=function(){window.openType?window.deinitializeOpenType():window.initializeOpenType()},window.jQuery?window.initializeOpenType():(e=document.createElement("script"),e.readyState?e.onreadystatechange=function(){"complete"!==this.readyState&&"loaded"!==this.readyState||window.initializeOpenType()}:e.onload=function(){window.initializeOpenType()},e.setAttribute("src","//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"),document.body.appendChild(e))}).call(this);