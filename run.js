(function(){var t,e;t=function(){function t(){var e,i,s,l;if(this.$=window.jQuery){for(this.panel=this.$("<div></div>").attr({id:"type-works"}),this.features={},l=t.features,i=0,s=l.length;s>i;i++)e=l[i],this.features[e.slug]=e,this.$("<a><span>"+e.title+"</span></a>").attr({href:"#",title:e.title,"data-feature":e.slug}).addClass("toggle").appendTo(this.panel);this.$(".toggle",this.panel).click(function(t){return function(e){var i;return i=t.$(e.target),t.toggle(i.data("feature")),i.toggleClass("active"),!1}}(this)),this.panel.appendTo(document.body),this.activeFeatures=[]}}return t.features=[{slug:"kern",title:"Kerning"},{slug:"liga",title:"Standard ligatures"},{slug:"dlig",title:"Discretionary ligatures"},{slug:"hlig",title:"Historical ligatures"},{slug:"clig",title:"Contextual ligatures"},{slug:"smcp",title:"Small capitals"},{slug:"c2sc",title:"Small capitals from capitals"},{slug:"lnum",title:"Lining figures",exclude:["onum"]},{slug:"onum",title:"Old-style figures",exclude:["lnum"]},{slug:"pnum",title:"Proportional figures",exclude:["tnum"]},{slug:"tnum",title:"Tabular figures",exclude:["pnum"]},{slug:"frac",title:"Fractions",exclude:["afrc"]},{slug:"afrc",title:"Alternative fractions",exclude:["frac"]},{slug:"zero",title:"Slashed zero"},{slug:"nalt",title:"Alternate annotation forms"},{slug:"swsh",title:"Swash"},{slug:"calt",title:"Contextual alternates"},{slug:"hist",title:"Historical forms"},{slug:"salt",title:"Stylistic alternates"},{slug:"ss01",title:"Stylistic set 1"},{slug:"ss02",title:"Stylistic set 2"},{slug:"ss03",title:"Stylistic set 3"},{slug:"ss04",title:"Stylistic set 4"}],t.prototype.destroy=function(){this.activeFeatures=[],this.update(),this.panel.remove(),delete this.panel},t.prototype.toggle=function(t){var e;e=this.activeFeatures.indexOf(t),e>-1?this.activeFeatures.splice(e,1):this.activate(t),this.update()},t.prototype.activate=function(t){var e,i,s,l,a;if(this.activeFeatures.push(t),this.features[t].exclude)for(a=this.features[t].exclude,s=0,l=a.length;l>s;s++)e=a[s],i=this.activeFeatures.indexOf(e),i>-1&&(this.activeFeatures.splice(i,1),this.$(".toggle[data-feature="+e+"]",this.panel).removeClass("active"))},t.prototype.update=function(t){var e,i;null==t&&(t="body"),e=this.$(t),i=this.combine(),e.css({"-moz-font-feature-settings":i,"-ms-font-feature-settings":i,"-o-font-feature-settings":i,"-webkit-font-feature-settings":i,"font-feature-settings":i})},t.prototype.combine=function(){var t,e,i,s,l;for(e="",l=this.activeFeatures,i=0,s=l.length;s>i;i++)t=l[i],e.length&&(e+=","),e+='"'+t+'" 1';return e},t}(),window.initializeTypeWorks=function(){window.typeWorks=new t},window.deinitializeTypeWorks=function(){window.typeWorks.destroy(),delete window.typeWorks},window.toggleTypeWorks=function(){window.typeWorks?window.deinitializeTypeWorks():window.initializeTypeWorks()},window.jQuery?window.initializeTypeWorks():(e=document.createElement("script"),e.readyState?e.onreadystatechange=function(){("complete"===this.readyState||"loaded"===this.readyState)&&window.initializeTypeWorks()}:e.onload=function(){window.initializeTypeWorks()},e.setAttribute("src","//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"),document.body.appendChild(e))}).call(this);