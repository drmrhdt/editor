(this["webpackJsonppixel-editor"]=this["webpackJsonppixel-editor"]||[]).push([[0],[,,,,function(e,t,a){e.exports={toolbox:"Toolbox_toolbox__2ajAx","toolbox__tool-group_layout_row":"Toolbox_toolbox__tool-group_layout_row__2-khZ","toolbox__tool-group_layout_column":"Toolbox_toolbox__tool-group_layout_column__1ZJJX",toolbox__title:"Toolbox_toolbox__title__3Xowp"}},,function(e,t,a){e.exports={app:"App_app__2ziFi",app__box:"App_app__box__2-Nza",app__title:"App_app__title__1JQfQ","app__buttons-group":"App_app__buttons-group__2QpoU","app__button-save-to-galery":"App_app__button-save-to-galery__1Jlmb","app__button-download":"App_app__button-download__J8Oam",app__link:"App_app__link__3wXIj"}},function(e,t,a){e.exports={"tool-shadow":"ToolShadow_tool-shadow__1tYVy","tool-shadow__label":"ToolShadow_tool-shadow__label__PvMwJ","tool-shadow__input":"ToolShadow_tool-shadow__input__1CFkZ"}},,,,,function(e,t,a){e.exports={"color-picker__label":"ColorPicker_color-picker__label__OED93","color-picker__input":"ColorPicker_color-picker__input__8LNYb"}},,,,function(e,t,a){e.exports={"tool-size":"ToolSize_tool-size__3fusg","tool-size__input":"ToolSize_tool-size__input__1RJcn"}},function(e,t,a){e.exports={"tool-opacity":"ToolOpacity_tool-opacity__vHnLZ","tool-opacity__input_type_number":"ToolOpacity_tool-opacity__input_type_number__3lsmw"}},,,function(e,t,a){e.exports={canvas:"Canvas_canvas__1LL7p"}},function(e,t,a){e.exports={button:"Button_button__2Lf63"}},function(e,t,a){e.exports=a(34)},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(11),r=a.n(l),c=a(1),u=a(9),i=a(2),s={strokeStyle:"#000000",fillStyle:"#000000",shadowColor:"#292b2c"},_={toolSize:1},p={lineJoin:"round"},E={tool:"line"},b={figure:null},m={pattern:"bubbles"},d={shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0},f={opacity:1},y=Object(u.b)({colorSelect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_STROKE_STYLE":return Object(i.a)({},e,{strokeStyle:t.payload});case"SELECT_FILL_STYLE":return Object(i.a)({},e,{fillStyle:t.payload});case"SELECT_SHADOW_COLOR":return Object(i.a)({},e,{shadowColor:t.payload});default:return e}},selectSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_SIZE":return Object(i.a)({},e,{toolSize:t.payload});default:return e}},selectLineJoin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_LINE_JOIN":return Object(i.a)({},e,{lineJoin:t.payload});default:return e}},selectTool:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_TOOL_LINE":return Object(i.a)({},e,{tool:t.payload});default:return e}},selectFigure:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CIRCLE_TOOL":return Object(i.a)({},e,{figure:"circle"});case"SELECT_SQUARE_TOOL":return Object(i.a)({},e,{figure:"square"});case"SELECT_RECTANGLE_TOOL":return Object(i.a)({},e,{figure:"rectangle"});case"SELECT_LINE_TOOL":return Object(i.a)({},e,{figure:"line"});default:return e}},selectPattern:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_BUBBLES_PATTERN":return Object(i.a)({},e,{pattern:"bubbles"});case"SELECT_NESTED_PATTERN":return Object(i.a)({},e,{pattern:"nested"});default:return e}},selectShadowParameter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_SHADOW_PARAMETER_BLUR":return Object(i.a)({},e,{shadowBlur:t.payload});case"SELECT_SHADOW_PARAMETER_OFFSET_X":return Object(i.a)({},e,{shadowOffsetX:t.payload});case"SELECT_SHADOW_PARAMETER_OFFSET_Y":return Object(i.a)({},e,{shadowOffsetY:t.payload});default:return e}},selectOpacity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_OPACITY":return Object(i.a)({},e,{opacity:t.payload});default:return e}}}),v=Object(u.c)(y),h=(a(32),a(10)),O=a(20),g=a.n(O);var S=function(e){var t=e.setCanvasRef,a=Object(c.c)((function(e){return e.colorSelect})),l=a.strokeStyle,r=a.fillStyle,u=a.shadowColor,i=Object(c.c)((function(e){return e.selectShadowParameter})),s=i.shadowBlur,_=i.shadowOffsetX,p=i.shadowOffsetY,E=Object(c.c)((function(e){return e.selectSize.toolSize})),b=(Object(c.c)((function(e){return e.selectLineJoin.lineJoin})),Object(c.c)((function(e){return e.selectTool.tool})),Object(c.c)((function(e){return e.selectFigure.figure}))),m=Object(c.c)((function(e){return e.selectPattern.pattern})),d=Object(c.c)((function(e){return e.selectOpacity.opacity})),f=Object(o.useState)(!1),y=Object(h.a)(f,2),v=y[0],O=y[1],S=Object(o.useState)(void 0),T=Object(h.a)(S,2),w=T[0],L=T[1],C=Object(o.useRef)(null),N=Object(o.useCallback)((function(e){var t=x(e);t&&(O(!0),L(t))}),[]),x=function(e){if(C.current){var t=C.current;return{x:e.pageX-t.offsetLeft,y:e.pageY-t.offsetTop}}},j=Object(o.useCallback)((function(e,t){if(C.current){var a=C.current.getContext("2d");if(a.shadowColor=u,a.shadowBlur=s,a.shadowOffsetX=_,a.shadowOffsetY=p,a.fillStyle=r,a.lineWidth=E,a.strokeStyle=l,a.globalAlpha=d,a)switch(b){case"circle":!function(e,t,a,o){var n=a+Math.abs(e.y-t.y);o.beginPath(),o.arc(e.x,e.y,n,0,2*Math.PI,!1),o.fill(),o.stroke()}(e,t,E,a);break;case"rectangle":!function(e,t,a){a.beginPath(),a.rect(e.x,e.y,t.x,t.y),a.fill(),a.stroke()}(e,t,a);break;case"square":!function(e,t,a){a.beginPath(),a.rect(e.x,e.y,t.y,t.y),a.fill(),a.stroke()}(e,t,a);break;case"line":!function(e,t,a){a.beginPath(),a.moveTo(e.x,e.y),a.lineTo(t.x,t.y),a.closePath(),a.stroke()}(e,t,a);break;default:return}}}),[b,r,d,s,u,_,p,E,l]);Object(o.useEffect)((function(){if(C.current){t(C);var e=C.current;return e.addEventListener("mousedown",N),function(){e.removeEventListener("mousedown",N)}}}),[t,N]);var k=Object(o.useCallback)((function(e){if(v){var t=x(e);w&&t&&(j(w,t),"bubbles"===m&&L(t))}}),[v,w,j,m]);Object(o.useEffect)((function(){if(C.current){var e=C.current;return e.addEventListener("mousemove",k),function(){e.removeEventListener("mousemove",k)}}}),[k]);var A=Object(o.useCallback)((function(e){O(!1)}),[]);return Object(o.useEffect)((function(){if(C.current){var e=C.current;return e.addEventListener("mouseup",A),function(){e.removeEventListener("mouseup",A)}}}),[A]),n.a.createElement("canvas",{id:"canvas",className:g.a.canvas,ref:C,width:document.documentElement.clientWidth-300,height:document.documentElement.clientHeight})},T=a(3),w=a.n(T),L=a(12),C=a.n(L);var N=function(e){var t,a=e.colorParameter,o=Object(c.c)((function(e){return e.colorSelect[a]})),l=Object(c.b)();switch(a){case"strokeStyle":t=function(e){l({type:"SELECT_STROKE_STYLE",payload:e.target.value})};break;case"fillStyle":t=function(e){l({type:"SELECT_FILL_STYLE",payload:e.target.value})};break;case"shadowColor":t=function(e){l({type:"SELECT_SHADOW_COLOR",payload:e.target.value})};break;default:t=null}return n.a.createElement("div",{className:(w()(w.a),C.a["color-picker"])},n.a.createElement("label",{className:C.a["color-picker__label"],style:{backgroundColor:o},htmlFor:a}),n.a.createElement("input",{className:C.a["color-picker__input"],type:"color",value:{color:o},onChange:t,id:a}))},x=a(16),j=a.n(x);var k=function(){var e=Object(c.c)((function(e){return e.selectSize.toolSize})),t=Object(c.b)();return n.a.createElement("label",{className:j.a["tool-size"]},n.a.createElement("span",null,"size"),n.a.createElement("input",{className:j.a["tool-size__input"],type:"number",value:e,max:"15",onChange:function(e){t({type:"SELECT_SIZE",payload:parseInt(e.target.value)})}}))};a(33);var A=function(e){var t=e.className,a=Object(c.b)(),o=function(e){a(function(e){switch(e){case"square":return{type:"SELECT_SQUARE_TOOL",payload:e};case"rectangle":return{type:"SELECT_RECTANGLE_TOOL",payload:e};case"circle":return{type:"SELECT_CIRCLE_TOOL",payload:e};case"line":return{type:"SELECT_LINE_TOOL",payload:e};default:return{type:"SELECT_CIRCLE_TOOL",payload:e}}}(e.target.value))};return n.a.createElement("div",{className:w()(t)},n.a.createElement("label",{onChange:o},n.a.createElement("input",{type:"radio",name:"figure",value:"square"}),"sq"),n.a.createElement("label",{onChange:o},n.a.createElement("input",{type:"radio",name:"figure",value:"rectangle"}),"rect"),n.a.createElement("label",{onChange:o},n.a.createElement("input",{type:"radio",name:"figure",value:"circle"}),"circ"),n.a.createElement("label",{onChange:o},n.a.createElement("input",{type:"radio",name:"figure",value:"line"}),"line"))};var R=function(e){var t=e.className,a=Object(c.b)(),o=function(e){a(function(e){switch(e){case"bubbles":return{type:"SELECT_BUBBLES_PATTERN",payload:e};case"nested":return{type:"SELECT_NESTED_PATTERN",payload:e};default:return{type:"SELECT_BUBBLES_PATTERN",payload:e}}}(e.target.value))};return n.a.createElement("div",{className:w()(t)},n.a.createElement("label",{onChange:o},n.a.createElement("input",{type:"radio",name:"pattern",value:"bubbles"}),"bubbles"),n.a.createElement("label",{onChange:o},n.a.createElement("input",{type:"radio",name:"pattern",value:"nested"}),"nested"))},P=a(7),B=a.n(P);var z=function(e){var t=e.className,a=Object(c.c)((function(e){return e.selectShadowParameter})),o=a.shadowBlur,l=a.shadowOffsetX,r=a.shadowOffsetY,u=Object(c.b)();return n.a.createElement("div",{className:w()(B.a["tool-shadow"],t)},n.a.createElement(N,{colorParameter:"shadowColor"}),n.a.createElement("label",{className:B.a["tool-shadow__label"],"data-label":"blur"},n.a.createElement("input",{className:B.a["tool-shadow__input"],type:"number",min:"-15",max:"15",value:o,onChange:function(e){u({type:"SELECT_SHADOW_PARAMETER_BLUR",payload:e.target.value})}})),n.a.createElement("label",{className:B.a["tool-shadow__label"],"data-label":"offset x"},n.a.createElement("input",{className:B.a["tool-shadow__input"],type:"number",min:"-15",max:"15",value:l,onChange:function(e){u({type:"SELECT_SHADOW_PARAMETER_OFFSET_X",payload:e.target.value})}})),n.a.createElement("label",{className:B.a["tool-shadow__label"],"data-label":"offset y"},n.a.createElement("input",{className:B.a["tool-shadow__input"],type:"number",min:"-15",max:"15",value:r,onChange:function(e){u({type:"SELECT_SHADOW_PARAMETER_OFFSET_Y",payload:e.target.value})}})))},I=a(17),F=a.n(I);var Y=function(e){var t=e.className,a=Object(c.c)((function(e){return e.selectOpacity.opacity})),o=Object(c.b)(),l=function(e){o({type:"SELECT_OPACITY",payload:parseFloat(e.target.value)})};return n.a.createElement("label",{className:w()(F.a["tool-opacity"],t)},n.a.createElement("span",null,"opacity %"),n.a.createElement("input",{type:"range",value:a,step:"0.01",min:"0",max:"1",onChange:l}),n.a.createElement("input",{className:F.a["tool-opacity__input_type_number"],type:"number",value:a,step:"0.01",min:"0",max:"1",onChange:l}))},J=a(4),D=a.n(J);var W=function(e){var t=e.className;return n.a.createElement("div",{className:w()(D.a.toolbox,t)},n.a.createElement("h3",{className:D.a.toolbox__title},"Figure"),n.a.createElement(A,{className:D.a["toolbox__tool-group_layout_row"]}),n.a.createElement("h3",{className:D.a.toolbox__title},"Pattern"),n.a.createElement(R,{className:D.a["toolbox__tool-group_layout_row"]}),n.a.createElement("h3",{className:D.a.toolbox__title},"Border"),n.a.createElement("div",{className:D.a["toolbox__tool-group_layout_row"]},n.a.createElement(N,{colorParameter:"strokeStyle"}),n.a.createElement(k,null)),n.a.createElement("h3",{className:D.a.toolbox__title},"Background"),n.a.createElement(N,{colorParameter:"fillStyle"}),n.a.createElement("h3",{className:D.a.toolbox__title},"Shadow"),n.a.createElement(z,{className:D.a["toolbox__tool-group_layout_row"]}),n.a.createElement("h3",{className:D.a.toolbox__title},"Opacity"),n.a.createElement(Y,{className:D.a["toolbox__tool-group_layout_row"]}),n.a.createElement("h3",{className:D.a.toolbox__title},"Gradient"))},X=a(21),H=a.n(X);var M=function(e){var t=e.children,a=e.className,o=e.onClick;return n.a.createElement("button",{className:w()(a,H.a.button),onClick:o},t)},U=a(6),Z=a.n(U);var q=function(){var e=Object(o.useState)(null),t=Object(h.a)(e,2),a=t[0],l=t[1],r=Object(o.useState)("#"),c=Object(h.a)(r,2),u=c[0],i=c[1];return n.a.createElement("div",{className:Z.a.app},n.a.createElement("div",{className:Z.a.app__box},n.a.createElement("h1",{className:Z.a.app__title},"Zen Drawing App"),n.a.createElement(W,{className:Z.a.app__toolbox}),n.a.createElement("div",{className:Z.a["app__buttons-group"]},n.a.createElement(M,{className:Z.a["app__button-save-to-galery"]},"Save to gallery"),n.a.createElement(M,{className:Z.a["app__button-download"],onClick:function(){a&&i(a.current.toDataURL("image/png"))}},n.a.createElement("a",{className:Z.a.app__link,href:"#"!==u?u:"#",download:"zen_drawing.png"},"Download")))),n.a.createElement(S,{setCanvasRef:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(c.a,{store:v},n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[22,1,2]]]);
//# sourceMappingURL=main.254d40c2.chunk.js.map