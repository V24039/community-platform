import{lightenColor,newStyled,require_react,require_react_dom,scope}from"./chunk-YDUB7CS6.js";import{__commonJS2 as __commonJS,__toESM,__toESM2,require_memoizerific}from"./chunk-ZEU7PDD3.js";var React3=__toESM(require_react(),1),import_react=__toESM(require_react(),1),ReactDOM=__toESM(require_react_dom(),1),import_react_dom=__toESM(require_react_dom(),1),import_memoizerific=__toESM(require_memoizerific(),1),require_react_fast_compare=__commonJS({"../../node_modules/react-fast-compare/index.js"(e,t){var r=typeof Element<"u",n="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var s,c,l,f;if(Array.isArray(e)){if((s=e.length)!=t.length)return!1;for(c=s;0!=c--;)if(!a(e[c],t[c]))return!1;return!0}if(n&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(f=e.entries();!(c=f.next()).done;)if(!t.has(c.value[0]))return!1;for(f=e.entries();!(c=f.next()).done;)if(!a(c.value[1],t.get(c.value[0])))return!1;return!0}if(o&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(f=e.entries();!(c=f.next()).done;)if(!t.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((s=e.length)!=t.length)return!1;for(c=s;0!=c--;)if(e[c]!==t[c])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof t.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof t.toString)return e.toString()===t.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(t,l[c]))return!1;if(r&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!a(e[l[c]],t[l[c]]))return!1;return!0}return e!=e&&t!=t}t.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}}});function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_extends.apply(this,arguments)}var fromEntries=function(e){return e.reduce((function(e,t){var r=t[0],n=t[1];return e[r]=n,e}),{})},useIsomorphicLayoutEffect=typeof window<"u"&&window.document&&window.document.createElement?React3.useLayoutEffect:React3.useEffect,top="top",bottom="bottom",right="right",left="left",auto="auto",basePlacements=[top,bottom,right,left],start="start",end="end",clippingParents="clippingParents",viewport="viewport",popper="popper",reference="reference",variationPlacements=basePlacements.reduce((function(e,t){return e.concat([t+"-"+start,t+"-"+end])}),[]),placements=[].concat(basePlacements,[auto]).reduce((function(e,t){return e.concat([t,t+"-"+start,t+"-"+end])}),[]),beforeRead="beforeRead",read="read",afterRead="afterRead",beforeMain="beforeMain",main="main",afterMain="afterMain",beforeWrite="beforeWrite",write="write",afterWrite="afterWrite",modifierPhases=[beforeRead,read,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];function getNodeName(e){return e?(e.nodeName||"").toLowerCase():null}function getWindow(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function isElement(e){return e instanceof getWindow(e).Element||e instanceof Element}function isHTMLElement(e){return e instanceof getWindow(e).HTMLElement||e instanceof HTMLElement}function isShadowRoot(e){return!(typeof ShadowRoot>"u")&&(e instanceof getWindow(e).ShadowRoot||e instanceof ShadowRoot)}function applyStyles(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];!isHTMLElement(o)||!getNodeName(o)||(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))}function effect(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});!isHTMLElement(n)||!getNodeName(n)||(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}}var applyStyles_default={name:"applyStyles",enabled:!0,phase:"write",fn:applyStyles,effect:effect,requires:["computeStyles"]};function getBasePlacement(e){return e.split("-")[0]}var max=Math.max,min=Math.min,round=Math.round;function getUAString(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function isLayoutViewport(){return!/^((?!chrome|android).)*safari/i.test(getUAString())}function getBoundingClientRect(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&isHTMLElement(e)&&(o=e.offsetWidth>0&&round(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&round(n.height)/e.offsetHeight||1);var a=(isElement(e)?getWindow(e):window).visualViewport,s=!isLayoutViewport()&&r,c=(n.left+(s&&a?a.offsetLeft:0))/o,l=(n.top+(s&&a?a.offsetTop:0))/i,f=n.width/o,u=n.height/i;return{width:f,height:u,top:l,right:c+f,bottom:l+u,left:c,x:c,y:l}}function getLayoutRect(e){var t=getBoundingClientRect(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function contains(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&isShadowRoot(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function getComputedStyle(e){return getWindow(e).getComputedStyle(e)}function isTableElement(e){return["table","td","th"].indexOf(getNodeName(e))>=0}function getDocumentElement(e){return((isElement(e)?e.ownerDocument:e.document)||window.document).documentElement}function getParentNode(e){return"html"===getNodeName(e)?e:e.assignedSlot||e.parentNode||(isShadowRoot(e)?e.host:null)||getDocumentElement(e)}function getTrueOffsetParent(e){return isHTMLElement(e)&&"fixed"!==getComputedStyle(e).position?e.offsetParent:null}function getContainingBlock(e){var t=/firefox/i.test(getUAString());if(/Trident/i.test(getUAString())&&isHTMLElement(e)&&"fixed"===getComputedStyle(e).position)return null;var r=getParentNode(e);for(isShadowRoot(r)&&(r=r.host);isHTMLElement(r)&&["html","body"].indexOf(getNodeName(r))<0;){var n=getComputedStyle(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}function getOffsetParent(e){for(var t=getWindow(e),r=getTrueOffsetParent(e);r&&isTableElement(r)&&"static"===getComputedStyle(r).position;)r=getTrueOffsetParent(r);return r&&("html"===getNodeName(r)||"body"===getNodeName(r)&&"static"===getComputedStyle(r).position)?t:r||getContainingBlock(e)||t}function getMainAxisFromPlacement(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function within(e,t,r){return max(e,min(t,r))}function withinMaxClamp(e,t,r){var n=within(e,t,r);return n>r?r:n}function getFreshSideObject(){return{top:0,right:0,bottom:0,left:0}}function mergePaddingObject(e){return Object.assign({},getFreshSideObject(),e)}function expandToHashMap(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}var toPaddingObject=function(e,t){return mergePaddingObject("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:expandToHashMap(e,basePlacements))};function arrow(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=getBasePlacement(r.placement),c=getMainAxisFromPlacement(s),l=[left,right].indexOf(s)>=0?"height":"width";if(i&&a){var f=toPaddingObject(o.padding,r),u=getLayoutRect(i),p="y"===c?top:left,d="y"===c?bottom:right,m=r.rects.reference[l]+r.rects.reference[c]-a[c]-r.rects.popper[l],g=a[c]-r.rects.reference[c],h=getOffsetParent(i),v=h?"y"===c?h.clientHeight||0:h.clientWidth||0:0,y=m/2-g/2,b=f[p],w=v-u[l]-f[d],O=v/2-u[l]/2+y,x=within(b,O,w),E=c;r.modifiersData[n]=((t={})[E]=x,t.centerOffset=x-O,t)}}function effect2(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"==typeof n&&!(n=t.elements.popper.querySelector(n))||contains(t.elements.popper,n)&&(t.elements.arrow=n))}var arrow_default={name:"arrow",enabled:!0,phase:"main",fn:arrow,effect:effect2,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function getVariation(e){return e.split("-")[1]}var unsetSides={top:"auto",right:"auto",bottom:"auto",left:"auto"};function roundOffsetsByDPR(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:round(r*o)/o||0,y:round(n*o)/o||0}}function mapToStyles(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,u=e.isFixed,p=a.x,d=void 0===p?0:p,m=a.y,g=void 0===m?0:m,h="function"==typeof f?f({x:d,y:g}):{x:d,y:g};d=h.x,g=h.y;var v=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),b=left,w=top,O=window;if(l){var x=getOffsetParent(r),E="clientHeight",S="clientWidth";if(x===getWindow(r)&&("static"!==getComputedStyle(x=getDocumentElement(r)).position&&"absolute"===s&&(E="scrollHeight",S="scrollWidth")),o===top||(o===left||o===right)&&i===end)w=bottom,g-=(u&&x===O&&O.visualViewport?O.visualViewport.height:x[E])-n.height,g*=c?1:-1;if(o===left||(o===top||o===bottom)&&i===end)b=right,d-=(u&&x===O&&O.visualViewport?O.visualViewport.width:x[S])-n.width,d*=c?1:-1}var P,R=Object.assign({position:s},l&&unsetSides),C=!0===f?roundOffsetsByDPR({x:d,y:g},getWindow(r)):{x:d,y:g};return d=C.x,g=C.y,c?Object.assign({},R,((P={})[w]=y?"0":"",P[b]=v?"0":"",P.transform=(O.devicePixelRatio||1)<=1?"translate("+d+"px, "+g+"px)":"translate3d("+d+"px, "+g+"px, 0)",P)):Object.assign({},R,((t={})[w]=y?g+"px":"",t[b]=v?d+"px":"",t.transform="",t))}function computeStyles(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,l={placement:getBasePlacement(t.placement),variation:getVariation(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,mapToStyles(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,mapToStyles(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var computeStyles_default={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:computeStyles,data:{}},passive={passive:!0};function effect3(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,c=getWindow(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",r.update,passive)})),s&&c.addEventListener("resize",r.update,passive),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",r.update,passive)})),s&&c.removeEventListener("resize",r.update,passive)}}var eventListeners_default={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:effect3,data:{}},hash={left:"right",right:"left",bottom:"top",top:"bottom"};function getOppositePlacement(e){return e.replace(/left|right|bottom|top/g,(function(e){return hash[e]}))}var hash2={start:"end",end:"start"};function getOppositeVariationPlacement(e){return e.replace(/start|end/g,(function(e){return hash2[e]}))}function getWindowScroll(e){var t=getWindow(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function getWindowScrollBarX(e){return getBoundingClientRect(getDocumentElement(e)).left+getWindowScroll(e).scrollLeft}function getViewportRect(e,t){var r=getWindow(e),n=getDocumentElement(e),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var l=isLayoutViewport();(l||!l&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+getWindowScrollBarX(e),y:c}}function getDocumentRect(e){var t,r=getDocumentElement(e),n=getWindowScroll(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=max(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=max(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+getWindowScrollBarX(e),c=-n.scrollTop;return"rtl"===getComputedStyle(o||r).direction&&(s+=max(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}function isScrollParent(e){var t=getComputedStyle(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function getScrollParent(e){return["html","body","#document"].indexOf(getNodeName(e))>=0?e.ownerDocument.body:isHTMLElement(e)&&isScrollParent(e)?e:getScrollParent(getParentNode(e))}function listScrollParents(e,t){var r;void 0===t&&(t=[]);var n=getScrollParent(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=getWindow(n),a=o?[i].concat(i.visualViewport||[],isScrollParent(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(listScrollParents(getParentNode(a)))}function rectToClientRect(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function getInnerBoundingClientRect(e,t){var r=getBoundingClientRect(e,!1,"fixed"===t);return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function getClientRectFromMixedType(e,t,r){return t===viewport?rectToClientRect(getViewportRect(e,r)):isElement(t)?getInnerBoundingClientRect(t,r):rectToClientRect(getDocumentRect(getDocumentElement(e)))}function getClippingParents(e){var t=listScrollParents(getParentNode(e)),r=["absolute","fixed"].indexOf(getComputedStyle(e).position)>=0&&isHTMLElement(e)?getOffsetParent(e):e;return isElement(r)?t.filter((function(e){return isElement(e)&&contains(e,r)&&"body"!==getNodeName(e)})):[]}function getClippingRect(e,t,r,n){var o="clippingParents"===t?getClippingParents(e):[].concat(t),i=[].concat(o,[r]),a=i[0],s=i.reduce((function(t,r){var o=getClientRectFromMixedType(e,r,n);return t.top=max(o.top,t.top),t.right=min(o.right,t.right),t.bottom=min(o.bottom,t.bottom),t.left=max(o.left,t.left),t}),getClientRectFromMixedType(e,a,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function computeOffsets(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?getBasePlacement(o):null,a=o?getVariation(o):null,s=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2;switch(i){case top:t={x:s,y:r.y-n.height};break;case bottom:t={x:s,y:r.y+r.height};break;case right:t={x:r.x+r.width,y:c};break;case left:t={x:r.x-n.width,y:c};break;default:t={x:r.x,y:r.y}}var l=i?getMainAxisFromPlacement(i):null;if(null!=l){var f="y"===l?"height":"width";switch(a){case start:t[l]=t[l]-(r[f]/2-n[f]/2);break;case end:t[l]=t[l]+(r[f]/2-n[f]/2)}}return t}function detectOverflow(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.strategy,a=void 0===i?e.strategy:i,s=r.boundary,c=void 0===s?clippingParents:s,l=r.rootBoundary,f=void 0===l?viewport:l,u=r.elementContext,p=void 0===u?popper:u,d=r.altBoundary,m=void 0!==d&&d,g=r.padding,h=void 0===g?0:g,v=mergePaddingObject("number"!=typeof h?h:expandToHashMap(h,basePlacements)),y=p===popper?reference:popper,b=e.rects.popper,w=e.elements[m?y:p],O=getClippingRect(isElement(w)?w:w.contextElement||getDocumentElement(e.elements.popper),c,f,a),x=getBoundingClientRect(e.elements.reference),E=computeOffsets({reference:x,element:b,strategy:"absolute",placement:o}),S=rectToClientRect(Object.assign({},b,E)),P=p===popper?S:x,R={top:O.top-P.top+v.top,bottom:P.bottom-O.bottom+v.bottom,left:O.left-P.left+v.left,right:P.right-O.right+v.right},C=e.modifiersData.offset;if(p===popper&&C){var _=C[o];Object.keys(R).forEach((function(e){var t=[right,bottom].indexOf(e)>=0?1:-1,r=[top,bottom].indexOf(e)>=0?"y":"x";R[e]+=_[r]*t}))}return R}function computeAutoPlacement(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,l=void 0===c?placements:c,f=getVariation(n),u=f?s?variationPlacements:variationPlacements.filter((function(e){return getVariation(e)===f})):basePlacements,p=u.filter((function(e){return l.indexOf(e)>=0}));0===p.length&&(p=u);var d=p.reduce((function(t,r){return t[r]=detectOverflow(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[getBasePlacement(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}function getExpandedFallbackPlacements(e){if(getBasePlacement(e)===auto)return[];var t=getOppositePlacement(e);return[getOppositeVariationPlacement(e),t,getOppositeVariationPlacement(t)]}function flip(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,c=r.fallbackPlacements,l=r.padding,f=r.boundary,u=r.rootBoundary,p=r.altBoundary,d=r.flipVariations,m=void 0===d||d,g=r.allowedAutoPlacements,h=t.options.placement,v=getBasePlacement(h),y=c||(v===h||!m?[getOppositePlacement(h)]:getExpandedFallbackPlacements(h)),b=[h].concat(y).reduce((function(e,r){return e.concat(getBasePlacement(r)===auto?computeAutoPlacement(t,{placement:r,boundary:f,rootBoundary:u,padding:l,flipVariations:m,allowedAutoPlacements:g}):r)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,E=!0,S=b[0],P=0;P<b.length;P++){var R=b[P],C=getBasePlacement(R),_=getVariation(R)===start,T=[top,bottom].indexOf(C)>=0,L=T?"width":"height",A=detectOverflow(t,{placement:R,boundary:f,rootBoundary:u,altBoundary:p,padding:l}),M=T?_?right:left:_?bottom:top;w[L]>O[L]&&(M=getOppositePlacement(M));var k=getOppositePlacement(M),W=[];if(i&&W.push(A[C]<=0),s&&W.push(A[M]<=0,A[k]<=0),W.every((function(e){return e}))){S=R,E=!1;break}x.set(R,W)}if(E)for(var j=function(e){var t=b.find((function(t){var r=x.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return S=t,"break"},B=m?3:1;B>0;B--){if("break"===j(B))break}t.placement!==S&&(t.modifiersData[n]._skip=!0,t.placement=S,t.reset=!0)}}var flip_default={name:"flip",enabled:!0,phase:"main",fn:flip,requiresIfExists:["offset"],data:{_skip:!1}};function getSideOffsets(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function isAnySideFullyClipped(e){return[top,right,bottom,left].some((function(t){return e[t]>=0}))}function hide(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=detectOverflow(t,{elementContext:"reference"}),s=detectOverflow(t,{altBoundary:!0}),c=getSideOffsets(a,n),l=getSideOffsets(s,o,i),f=isAnySideFullyClipped(c),u=isAnySideFullyClipped(l);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":u})}var hide_default={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:hide};function distanceAndSkiddingToXY(e,t,r){var n=getBasePlacement(e),o=[left,top].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[left,right].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}function offset(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=placements.reduce((function(e,r){return e[r]=distanceAndSkiddingToXY(r,t.rects,i),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=a}var offset_default={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:offset};function popperOffsets(e){var t=e.state,r=e.name;t.modifiersData[r]=computeOffsets({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var popperOffsets_default={name:"popperOffsets",enabled:!0,phase:"read",fn:popperOffsets,data:{}};function getAltAxis(e){return"x"===e?"y":"x"}function preventOverflow(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,l=r.rootBoundary,f=r.altBoundary,u=r.padding,p=r.tether,d=void 0===p||p,m=r.tetherOffset,g=void 0===m?0:m,h=detectOverflow(t,{boundary:c,rootBoundary:l,padding:u,altBoundary:f}),v=getBasePlacement(t.placement),y=getVariation(t.placement),b=!y,w=getMainAxisFromPlacement(v),O=getAltAxis(w),x=t.modifiersData.popperOffsets,E=t.rects.reference,S=t.rects.popper,P="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,R="number"==typeof P?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,_={x:0,y:0};if(x){if(i){var T,L="y"===w?top:left,A="y"===w?bottom:right,M="y"===w?"height":"width",k=x[w],W=k+h[L],j=k-h[A],B=d?-S[M]/2:0,D=y===start?E[M]:S[M],H=y===start?-S[M]:-E[M],N=t.elements.arrow,V=d&&N?getLayoutRect(N):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:getFreshSideObject(),q=F[L],U=F[A],I=within(0,E[M],V[M]),z=b?E[M]/2-B-I-q-R.mainAxis:D-I-q-R.mainAxis,$=b?-E[M]/2+B+I+U+R.mainAxis:H+I+U+R.mainAxis,X=t.elements.arrow&&getOffsetParent(t.elements.arrow),Y=X?"y"===w?X.clientTop||0:X.clientLeft||0:0,G=null!=(T=C?.[w])?T:0,J=k+$-G,Z=within(d?min(W,k+z-G-Y):W,k,d?max(j,J):j);x[w]=Z,_[w]=Z-k}if(s){var K,Q="x"===w?top:left,ee="x"===w?bottom:right,te=x[O],re="y"===O?"height":"width",ne=te+h[Q],oe=te-h[ee],ie=-1!==[top,left].indexOf(v),ae=null!=(K=C?.[O])?K:0,se=ie?ne:te-E[re]-S[re]-ae+R.altAxis,ce=ie?te+E[re]+S[re]-ae-R.altAxis:oe,le=d&&ie?withinMaxClamp(se,te,ce):within(d?se:ne,te,d?ce:oe);x[O]=le,_[O]=le-te}t.modifiersData[n]=_}}var preventOverflow_default={name:"preventOverflow",enabled:!0,phase:"main",fn:preventOverflow,requiresIfExists:["offset"]};function getHTMLElementScroll(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function getNodeScroll(e){return e!==getWindow(e)&&isHTMLElement(e)?getHTMLElementScroll(e):getWindowScroll(e)}function isElementScaled(e){var t=e.getBoundingClientRect(),r=round(t.width)/e.offsetWidth||1,n=round(t.height)/e.offsetHeight||1;return 1!==r||1!==n}function getCompositeRect(e,t,r){void 0===r&&(r=!1);var n=isHTMLElement(t),o=isHTMLElement(t)&&isElementScaled(t),i=getDocumentElement(t),a=getBoundingClientRect(e,o,r),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!r)&&(("body"!==getNodeName(t)||isScrollParent(i))&&(s=getNodeScroll(t)),isHTMLElement(t)?((c=getBoundingClientRect(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=getWindowScrollBarX(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function order(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}function orderModifiers(e){var t=order(e);return modifierPhases.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}function debounce(e){var t;return function(){return t||(t=new Promise((function(r){Promise.resolve().then((function(){t=void 0,r(e())}))}))),t}}function mergeByName(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var DEFAULT_OPTIONS={placement:"bottom",modifiers:[],strategy:"absolute"};function areValidElements(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function popperGenerator(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?DEFAULT_OPTIONS:o;return function(e,t,r){void 0===r&&(r=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(r){var s="function"==typeof r?r(o.options):r;l(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:isElement(e)?listScrollParents(e):e.contextElement?listScrollParents(e.contextElement):[],popper:listScrollParents(t)};var f=orderModifiers(mergeByName([].concat(n,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,i=e.effect;if("function"==typeof i){var s=i({state:o,name:t,instance:c,options:n}),l=function(){};a.push(s||l)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,r=e.popper;if(areValidElements(t,r)){o.rects={reference:getCompositeRect(t,getOffsetParent(r),"fixed"===o.options.strategy),popper:getLayoutRect(r)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<o.orderedModifiers.length;n++)if(!0!==o.reset){var i=o.orderedModifiers[n],a=i.fn,l=i.options,f=void 0===l?{}:l,u=i.name;"function"==typeof a&&(o=a({state:o,options:f,name:u,instance:c})||o)}else o.reset=!1,n=-1}}},update:debounce((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){l(),s=!0}};if(!areValidElements(e,t))return c;function l(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(r).then((function(e){!s&&r.onFirstUpdate&&r.onFirstUpdate(e)})),c}}var defaultModifiers=[eventListeners_default,popperOffsets_default,computeStyles_default,applyStyles_default,offset_default,flip_default,preventOverflow_default,arrow_default,hide_default],createPopper=popperGenerator({defaultModifiers:defaultModifiers}),import_react_fast_compare=__toESM2(require_react_fast_compare()),EMPTY_MODIFIERS=[],usePopper=function(e,t,r){void 0===r&&(r={});var n=React3.useRef(null),o={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||EMPTY_MODIFIERS},i=React3.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=i[0],s=i[1],c=React3.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);ReactDOM.flushSync((function(){s({styles:fromEntries(r.map((function(e){return[e,t.styles[e]||{}]}))),attributes:fromEntries(r.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),l=React3.useMemo((function(){var e={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[c,{name:"applyStyles",enabled:!1}])};return(0,import_react_fast_compare.default)(n.current,e)?n.current||e:(n.current=e,e)}),[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,c]),f=React3.useRef();return useIsomorphicLayoutEffect((function(){f.current&&f.current.setOptions(l)}),[l]),useIsomorphicLayoutEffect((function(){if(null!=e&&null!=t){var n=(r.createPopper||createPopper)(e,t,l);return f.current=n,function(){n.destroy(),f.current=null}}}),[e,t,r.createPopper]),{state:f.current?f.current.state:null,styles:a.styles,attributes:a.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}};function useGetLatest(e){var t=React3.useRef(e);return t.current=e,React3.useCallback((function(){return t.current}),[])}var noop=function(){};function useControlledState(e){var t=e.initial,r=e.value,n=e.onChange,o=void 0===n?noop:n;if(void 0===t&&void 0===r)throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');var i=React3.useState(t),a=i[0],s=i[1],c=useGetLatest(a),l=React3.useCallback((function(e){var t=c(),r="function"==typeof e?e(t):e;"function"==typeof r.persist&&r.persist(),s(r),"function"==typeof o&&o(r)}),[c,o]),f=void 0!==r;return[f?r:a,f?o:l]}function generateBoundingClientRect(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e,x:0,y:0,toJSON:function(){return null}}}}var _excluded=["styles","attributes"],virtualElement={getBoundingClientRect:generateBoundingClientRect()},defaultConfig={closeOnOutsideClick:!0,closeOnTriggerHidden:!1,defaultVisible:!1,delayHide:0,delayShow:0,followCursor:!1,interactive:!1,mutationObserverOptions:{attributes:!0,childList:!0,subtree:!0},offset:[0,6],trigger:"hover"};function usePopperTooltip(e,t){var r,n,o;void 0===e&&(e={}),void 0===t&&(t={});var i=Object.keys(defaultConfig).reduce((function(e,t){var r;return _extends({},e,((r={})[t]=void 0!==e[t]?e[t]:defaultConfig[t],r))}),e),a=React3.useMemo((function(){return[{name:"offset",options:{offset:i.offset}}]}),Array.isArray(i.offset)?i.offset:[]),s=_extends({},t,{placement:t.placement||i.placement,modifiers:t.modifiers||a}),c=React3.useState(null),l=c[0],f=c[1],u=React3.useState(null),p=u[0],d=u[1],m=useControlledState({initial:i.defaultVisible,value:i.visible,onChange:i.onVisibleChange}),g=m[0],h=m[1],v=React3.useRef();React3.useEffect((function(){return function(){return clearTimeout(v.current)}}),[]);var y=usePopper(i.followCursor?virtualElement:l,p,s),b=y.styles,w=y.attributes,O=_objectWithoutPropertiesLoose(y,_excluded),x=O.update,E=useGetLatest({visible:g,triggerRef:l,tooltipRef:p,finalConfig:i}),S=React3.useCallback((function(e){return Array.isArray(i.trigger)?i.trigger.includes(e):i.trigger===e}),Array.isArray(i.trigger)?i.trigger:[i.trigger]),P=React3.useCallback((function(){clearTimeout(v.current),v.current=window.setTimeout((function(){return h(!1)}),i.delayHide)}),[i.delayHide,h]),R=React3.useCallback((function(){clearTimeout(v.current),v.current=window.setTimeout((function(){return h(!0)}),i.delayShow)}),[i.delayShow,h]),C=React3.useCallback((function(){E().visible?P():R()}),[E,P,R]);React3.useEffect((function(){if(E().finalConfig.closeOnOutsideClick){var e=function(e){var t,r=E(),n=r.tooltipRef,o=r.triggerRef,i=(null==e.composedPath||null==(t=e.composedPath())?void 0:t[0])||e.target;i instanceof Node&&null!=n&&null!=o&&!n.contains(i)&&!o.contains(i)&&P()};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}}),[E,P]),React3.useEffect((function(){if(null!=l&&S("click"))return l.addEventListener("click",C),function(){return l.removeEventListener("click",C)}}),[l,S,C]),React3.useEffect((function(){if(null!=l&&S("double-click"))return l.addEventListener("dblclick",C),function(){return l.removeEventListener("dblclick",C)}}),[l,S,C]),React3.useEffect((function(){if(null!=l&&S("right-click")){var e=function(e){e.preventDefault(),C()};return l.addEventListener("contextmenu",e),function(){return l.removeEventListener("contextmenu",e)}}}),[l,S,C]),React3.useEffect((function(){if(null!=l&&S("focus"))return l.addEventListener("focus",R),l.addEventListener("blur",P),function(){l.removeEventListener("focus",R),l.removeEventListener("blur",P)}}),[l,S,R,P]),React3.useEffect((function(){if(null!=l&&S("hover"))return l.addEventListener("mouseenter",R),l.addEventListener("mouseleave",P),function(){l.removeEventListener("mouseenter",R),l.removeEventListener("mouseleave",P)}}),[l,S,R,P]),React3.useEffect((function(){if(null!=p&&S("hover")&&E().finalConfig.interactive)return p.addEventListener("mouseenter",R),p.addEventListener("mouseleave",P),function(){p.removeEventListener("mouseenter",R),p.removeEventListener("mouseleave",P)}}),[p,S,R,P,E]);var _=null==O||null==(r=O.state)||null==(n=r.modifiersData)||null==(o=n.hide)?void 0:o.isReferenceHidden;React3.useEffect((function(){i.closeOnTriggerHidden&&_&&P()}),[i.closeOnTriggerHidden,P,_]),React3.useEffect((function(){if(i.followCursor&&null!=l)return l.addEventListener("mousemove",e),function(){return l.removeEventListener("mousemove",e)};function e(e){var t=e.clientX,r=e.clientY;virtualElement.getBoundingClientRect=generateBoundingClientRect(t,r),x?.()}}),[i.followCursor,l,x]),React3.useEffect((function(){if(null!=p&&null!=x&&null!=i.mutationObserverOptions){var e=new MutationObserver(x);return e.observe(p,i.mutationObserverOptions),function(){return e.disconnect()}}}),[i.mutationObserverOptions,p,x]);return _extends({getArrowProps:function(e){return void 0===e&&(e={}),_extends({},e,w.arrow,{style:_extends({},e.style,b.arrow),"data-popper-arrow":!0})},getTooltipProps:function(e){return void 0===e&&(e={}),_extends({},e,{style:_extends({},e.style,b.popper)},w.popper,{"data-popper-interactive":i.interactive})},setTooltipRef:d,setTriggerRef:f,tooltipRef:p,triggerRef:l,visible:g},O)}var match=(0,import_memoizerific.default)(1e3)(((e,t,r,n=0)=>t.split("-")[0]===e?r:n)),ArrowSpacing=8,Arrow=newStyled.div({position:"absolute",borderStyle:"solid"},(({placement:e})=>{let t=0,r=0;switch(!0){case e.startsWith("left")||e.startsWith("right"):r=8;break;case e.startsWith("top")||e.startsWith("bottom"):t=8}return{transform:`translate3d(${t}px, ${r}px, 0px)`}}),(({theme:e,color:t,placement:r})=>({bottom:`${match("top",r,-1*ArrowSpacing+"px","auto")}`,top:`${match("bottom",r,-1*ArrowSpacing+"px","auto")}`,right:`${match("left",r,-1*ArrowSpacing+"px","auto")}`,left:`${match("right",r,-1*ArrowSpacing+"px","auto")}`,borderBottomWidth:`${match("top",r,"0",ArrowSpacing)}px`,borderTopWidth:`${match("bottom",r,"0",ArrowSpacing)}px`,borderRightWidth:`${match("left",r,"0",ArrowSpacing)}px`,borderLeftWidth:`${match("right",r,"0",ArrowSpacing)}px`,borderTopColor:match("top",r,e.color[t]||t||"light"===e.base?lightenColor(e.background.app):e.background.app,"transparent"),borderBottomColor:match("bottom",r,e.color[t]||t||"light"===e.base?lightenColor(e.background.app):e.background.app,"transparent"),borderLeftColor:match("left",r,e.color[t]||t||"light"===e.base?lightenColor(e.background.app):e.background.app,"transparent"),borderRightColor:match("right",r,e.color[t]||t||"light"===e.base?lightenColor(e.background.app):e.background.app,"transparent")}))),Wrapper=newStyled.div((({hidden:e})=>({display:e?"none":"inline-block",zIndex:2147483647})),(({theme:e,color:t,hasChrome:r})=>r?{background:e.color[t]||t||"light"===e.base?lightenColor(e.background.app):e.background.app,filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:e.appBorderRadius,fontSize:e.typography.size.s1}:{})),Tooltip=import_react.default.forwardRef((({placement:e,hasChrome:t,children:r,arrowProps:n,tooltipRef:o,color:i,withArrows:a,...s},c)=>import_react.default.createElement(Wrapper,{"data-testid":"tooltip",hasChrome:t,ref:c,...s,color:i},t&&a&&import_react.default.createElement(Arrow,{placement:e,...n,color:i}),r)));Tooltip.displayName="Tooltip",Tooltip.defaultProps={color:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var{document:document2}=scope,TargetContainer=newStyled.div`
  display: inline-block;
  cursor: ${e=>"hover"===e.trigger||e.trigger.includes("hover")?"default":"pointer"};
`,TargetSvgContainer=newStyled.g`
  cursor: ${e=>"hover"===e.trigger||e.trigger.includes("hover")?"default":"pointer"};
`,WithTooltipPure=({svg:e,trigger:t,closeOnOutsideClick:r,placement:n,hasChrome:o,withArrows:i,offset:a,tooltip:s,children:c,closeOnTriggerHidden:l,mutationObserverOptions:f,closeOnClick:u,tooltipShown:p,onVisibilityChange:d,defaultVisible:m,delayHide:g,visible:h,interactive:v,delayShow:y,modifiers:b,strategy:w,followCursor:O,onVisibleChange:x,...E})=>{let S=e?TargetSvgContainer:TargetContainer,{getArrowProps:P,getTooltipProps:R,setTooltipRef:C,setTriggerRef:_,visible:T,state:L}=usePopperTooltip({trigger:t,placement:n,defaultVisible:m??p,delayHide:g,interactive:v,closeOnOutsideClick:r??u,closeOnTriggerHidden:l,onVisibleChange:e=>{d?.(e),x?.(e)},delayShow:y,followCursor:O,mutationObserverOptions:f,visible:h,offset:a},{modifiers:b,strategy:w}),A=import_react.default.createElement(Tooltip,{placement:L?.placement,ref:C,hasChrome:o,arrowProps:P(),withArrows:i,...R()},"function"==typeof s?s({onHide:()=>x(!1)}):s);return import_react.default.createElement(import_react.default.Fragment,null,import_react.default.createElement(S,{trigger:t,ref:_,...E},c),T&&import_react_dom.default.createPortal(A,document2.body))};WithTooltipPure.defaultProps={svg:!1,trigger:"click",closeOnOutsideClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,defaultVisible:!1};var WithToolTipState=({startOpen:e=!1,onVisibleChange:t,...r})=>{let[n,o]=(0,import_react.useState)(e),i=(0,import_react.useCallback)((e=>{t&&!1===t(e)||o(e)}),[t]);return(0,import_react.useEffect)((()=>{let e=()=>i(!1);document2.addEventListener("keydown",e,!1);let t=Array.from(document2.getElementsByTagName("iframe")),r=[];return t.forEach((t=>{let n=()=>{try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",e),r.push((()=>{try{t.contentWindow.document.removeEventListener("click",e)}catch{}})))}catch{}};n(),t.addEventListener("load",n),r.push((()=>{t.removeEventListener("load",n)}))})),()=>{document2.removeEventListener("keydown",e),r.forEach((e=>{e()}))}})),import_react.default.createElement(WithTooltipPure,{...r,visible:n,onVisibleChange:i})};export{auto,WithTooltipPure,WithToolTipState};