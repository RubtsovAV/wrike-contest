self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G,Y,R,K={
jT:function(d,e,f){var y=f!=null?P.bc(f,null,null):0
return new K.bsm(d,e,new P.q(null,null,0,[K.nv]),y)},
bsm:function bsm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=!1
_.f=g
_.r="checkbox"},
nv:function nv(){this.b=this.a=null}},X,A,S,N,E,M,B,Q,D,L,Z={
jS:function(d,e){var y,x
y=new Z.ie7(P.e(P.b,null),d)
y.a=S.l(y,3,C.h,e,K.bsm)
x=document.createElement("wrike-checkbox")
y.e=x
x=$.l1T
if(x==null){x=$.G
x=x.P(null,C.i,$.lTq())
$.l1T=x}y.O(x)
return y},
ie7:function ie7(d,e){var _=this
_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=null
_.b=d
_.c=e
_.f=_.e=_.d=null}},V,U,T,F,O
a.setFunctionNamesIfNecessary([K,Z])
C=c[0]
H=c[1]
J=c[2]
P=c[3]
W=c[4]
G=c[5]
Y=c[6]
R=c[7]
K=a.updateHolder(c[8],K)
X=c[9]
A=c[10]
S=c[11]
N=c[12]
E=c[13]
M=c[14]
B=c[15]
Q=c[16]
D=c[17]
L=c[18]
Z=a.updateHolder(c[19],Z)
V=c[20]
U=c[21]
T=c[22]
F=c[23]
O=c[24]
K.bsm.prototype={
sC1:function(d,e){this.e=e},
b9O:function(d){if(d.keyCode===32){d.preventDefault()
this.xb(0,d)}},
xb:function(d,e){var y
if(this.e)J.fB(e)
else{y=!this.d
this.d=y
e=new K.nv()
e.a=y
e.b=this.a
this.c.m(0,e)}},
gGe:function(d){return this.d}}
K.nv.prototype={
gGe:function(d){return this.a}}
Z.ie7.prototype={
j:function(){var y,x,w,v,u,t
y=this.f
x=this.e
w=this.R(x)
v=document
u=S.bw(v,w)
this.r=u
u.className="wrike-checkbox-container"
this.M(u)
u=S.L(v,this.r)
this.x=u
u.className="wrike-checkbox"
this.k(u)
u=S.bw(v,this.r)
this.y=u
u.className="wrike-checkbox-label"
this.M(u)
this.cV(0,this.y,0)
u=this.r
t=W.Y;(u&&C.lG).a5(u,"click",this.L(J.mhA(this.f),t,t))
this.C(0,C.c,null)
J.aZ(x,"keydown",this.L(y.gb9N(),t,W.bn))
return},
I:function(d){var y,x,w,v,u
if(d){y=this.f.r
this.e.role=y}x=this.f.e
if(Q.c(this.z,x)){y=this.e
w=String(x)
this.cJ(y,"aria-disabled",w)
this.z=x}v=this.f.d
if(Q.c(this.Q,v)){y=this.e
this.cJ(y,"aria-checked",v==null?null:C.au.F(v))
this.Q=v}u=this.f.f
if(Q.c(this.ch,u)){this.e.tabIndex=u
this.ch=u}},
$ad:function(){return[K.bsm]}}
var z=a.updateTypes([{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[W.Y]}]);(function installTearOffs(){var y=a._instance_1u,x=a._instance_1i
var w
y(w=K.bsm.prototype,"gb9N","b9O",0)
x(w,"gF8","xb",1)})();(function inheritance(){var y=a.inheritMany,x=a.inherit
y(P.f,[K.bsm,K.nv])
x(Z.ie7,S.d)})();(function staticFields(){$.l1T=null})();(function lazyInitializers(){var y=a.lazy
y($,"pEA","m5R",function(){return['._nghost-%ID%{display:block;box-sizing:border-box;outline:none;user-select:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:"Open sans","lucida grande","Segoe UI",arial,verdana,tahoma,"Hiragino Kaku Gothic ProN","Osaka","Meiryo UI","Yu Gothic UI",sans-serif}._nghost-%ID% .wrike-checkbox-container{cursor:pointer}._nghost-%ID% .wrike-checkbox-label{padding-left:8px}._nghost-%ID% .wrike-checkbox{background:none #fff;border:1px solid #d1d1d3;box-sizing:border-box;display:inline-block;height:11px;min-width:11px;outline:none;padding:0;position:relative;vertical-align:middle;width:11px}._nghost-%ID% .wrike-checkbox:hover{border-color:#62A2E3}._nghost-%ID%[aria-checked="true"] .wrike-checkbox:after{position:absolute;width:7px;height:7px;background:#5590CC;top:1px;left:1px;content:\'\'}._nghost-%ID%[aria-disabled="true"]{opacity:0.5}._nghost-%ID%[aria-disabled="true"] .wrike-checkbox-container{cursor:default}._nghost-%ID%[aria-disabled="true"] .wrike-checkbox:hover{border-color:#d1d1d3}._nghost-%ID%[aria-disabled="true"][aria-checked="true"] .wrike-checkbox:after{position:absolute;width:7px;height:7px;background:rgba(0,0,0,0.5);top:1px;left:1px;content:\'\'}._nghost-%ID%.ui-kit-checkbox .wrike-checkbox{width:12px;height:12px;padding:0;margin-right:3px;vertical-align:baseline;background-color:transparent;border-color:rgba(0,0,0,0.4)}._nghost-%ID%.ui-kit-checkbox .wrike-checkbox:hover{border-color:#4094E1}._nghost-%ID%.ui-kit-checkbox .wrike-checkbox:active{border-color:rgba(54,115,195,0.8)}._nghost-%ID%.ui-kit-checkbox .wrike-checkbox-label{padding-left:6px;font-size:14px}._nghost-%ID%.ui-kit-checkbox[aria-checked="true"] .wrike-checkbox{border:none;vertical-align:baseline}._nghost-%ID%.ui-kit-checkbox[aria-checked="true"] .wrike-checkbox::after{height:12px;width:15px;left:0;top:0;background-color:transparent;background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTUgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+OEU1RDY5NzctM0E2RC00MkM4LUI4Q0EtRERENTYxNDYyNTg1PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJGdWxsLXNwZWMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IkNoZWNrYm94ZXMtYW5kLXJhZGlvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI4LjAwMDAwMCwgLTU0OS4wMDAwMDApIj4gICAgICAgICAgICA8ZyBpZD0iaWNvbnMtdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyOC4wMDAwMDAsIDU0OC4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGcgaWQ9ImNoZWNrYm94LWNoZWNrZWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxLjAwMDAwMCkiPiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLDguODgxNzg0MmUtMTYgTDAsOC44ODE3ODQyZS0xNiBMMCwxMiBMMTIsMTIgTDEyLDYgTDExLDcgTDExLDExIEwxLDExIEwxLDEgTDEwLDEgTDExLC04LjA0OTExNjkzZS0xNiBaIiBpZD0iYm94IiBmaWxsLW9wYWNpdHk9IjAuNCIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9ImNoZWNrbWFyayIgZmlsbD0iIzNCN0VENSIgcG9pbnRzPSIzLjUgNC41IDYgNyAxMyAwIDE0LjUgMS41IDYgMTAgMS45ODY0NTAyIDUuOTU1ODEwNTUiPjwvcG9seWdvbj4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==")}._nghost-%ID%.ui-kit-checkbox[aria-checked="true"] .wrike-checkbox:hover::after{background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTUgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgIDxnIGlkPSJGdWxsLXNwZWMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IkNoZWNrYm94ZXMtYW5kLXJhZGlvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzUyLjAwMDAwMCwgLTU0OS4wMDAwMDApIiBmaWxsPSIjNDA5NEZGIj4gICAgICAgICAgICA8ZyBpZD0iaWNvbnMtZGlzYWJsZWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1Mi4wMDAwMDAsIDU0OC4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGcgaWQ9ImNoZWNrYm94LWNoZWNrZWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxLjAwMDAwMCkiPiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjEwMDkxNzQsOC44ODE3ODQyZS0xNiBMMCw4Ljg4MTc4NDJlLTE2IEwwLDEyIEwxMi4xMTAwOTE3LDEyIEwxMi4xMTAwOTE3LDYgTDExLjEwMDkxNzQsNyBMMTEuMTAwOTE3NCwxMSBMMS4wMDkxNzQzMSwxMSBMMS4wMDkxNzQzMSwxIEwxMC4wOTE3NDMxLDEgTDExLjEwMDkxNzQsMS4zODc3Nzg3OGUtMTUgWiIgaWQ9ImJveCI+ICAgICAgICAgICAgICAgICAgICA8L3BhdGg+ICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iY2hlY2ttYXJrIiBwb2ludHM9IjMuNTMyMTEwMDkgNC41IDYuMDU1MDQ1ODcgNyAxMy4xMTkyNjYxIDAgMTQuNjMzMDI3NSAxLjUgNi4wNTUwNDU4NyAxMCAyLjAwNDY3NDUxIDUuOTU1ODEwNTUiPjwvcG9seWdvbj4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==")}._nghost-%ID%.ui-kit-checkbox[aria-checked="true"] .wrike-checkbox:active::after{background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTUgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgIDxnIGlkPSJGdWxsLXNwZWMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IkNoZWNrYm94ZXMtYW5kLXJhZGlvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzUyLjAwMDAwMCwgLTU0OS4wMDAwMDApIiBmaWxsPSIjMzY3NGM0Ij4gICAgICAgICAgICA8ZyBpZD0iaWNvbnMtZGlzYWJsZWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1Mi4wMDAwMDAsIDU0OC4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGcgaWQ9ImNoZWNrYm94LWNoZWNrZWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxLjAwMDAwMCkiPiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjEwMDkxNzQsOC44ODE3ODQyZS0xNiBMMCw4Ljg4MTc4NDJlLTE2IEwwLDEyIEwxMi4xMTAwOTE3LDEyIEwxMi4xMTAwOTE3LDYgTDExLjEwMDkxNzQsNyBMMTEuMTAwOTE3NCwxMSBMMS4wMDkxNzQzMSwxMSBMMS4wMDkxNzQzMSwxIEwxMC4wOTE3NDMxLDEgTDExLjEwMDkxNzQsMS4zODc3Nzg3OGUtMTUgWiIgaWQ9ImJveCI+ICAgICAgICAgICAgICAgICAgICA8L3BhdGg+ICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iY2hlY2ttYXJrIiBwb2ludHM9IjMuNTMyMTEwMDkgNC41IDYuMDU1MDQ1ODcgNyAxMy4xMTkyNjYxIDAgMTQuNjMzMDI3NSAxLjUgNi4wNTUwNDU4NyAxMCAyLjAwNDY3NDUxIDUuOTU1ODEwNTUiPjwvcG9seWdvbj4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==")}._nghost-%ID%.ui-kit-checkbox.touched.invalid .wrike-checkbox{border-color:#f15866}._nghost-%ID%.ui-kit-checkbox.touched.invalid .wrike-checkbox-label{color:#f15866}']})
y($,"pwU","lTq",function(){return[$.m5R()]})})()}
$__dart_deferred_initializers__["q6hjm92WHgvOhNZVG0sDKuHxAhk="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=wrike_ws.dart.js_202.part.js.map
