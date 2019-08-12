self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G,Y,R,K={Pe:function Pe(d){this.a=d},dnQ:function dnQ(){},dnR:function dnR(){},dnU:function dnU(){},dnW:function dnW(){},dnV:function dnV(){},dnS:function dnS(d){this.a=d},dnT:function dnT(){},c6Z:function c6Z(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},dp4:function dp4(d,e){this.a=d
this.b=e},dp2:function dp2(d,e){this.a=d
this.b=e},dp3:function dp3(){},dp1:function dp1(d){this.a=d}},X,A={dnP:function dnP(){}},S,N,E={
ae6:function(d,e,f){if($.kvO==null)d.e.ak(0,new E.jV0(e,f),null)
return $.kvO},
jV0:function jV0(d,e){this.a=d
this.b=e}},M,B,Q,D,L,Z,V={
mED:function(d){var y,x
y=new V.aCc()
x=J.ai(d)
y.a=H.a8(x.i(d,"commonSettings"),"$iy",[P.b,null],"$ay")
y.b=H.aE(x.i(d,"collapseOtherTasksColumn"))
y.c=H.aE(x.i(d,"hideTaskCovers"))
x=H.aB(x.i(d,"workflowSettings"))
x=x==null?null:J.ak(x,new V.iGY(),V.aOs)
y.d=x==null?null:x.as(0)
return y},
mGe:function(d){var y,x
y=new V.aOs()
x=J.ai(d)
y.a=H.ae(x.i(d,"workflowId"))
x=H.aB(x.i(d,"collapsedColumns"))
x=x==null?null:J.ak(x,new V.j02(),P.j)
y.b=x==null?null:x.as(0)
return y},
aCc:function aCc(){var _=this
_.d=_.c=_.b=_.a=null},
aOs:function aOs(){this.b=this.a=null},
iGY:function iGY(){},
iGZ:function iGZ(){},
iH_:function iH_(d){this.a=d},
j02:function j02(){},
j03:function j03(){},
cJ0:function cJ0(){},
cXI:function cXI(){}},U,T,F={do3:function do3(d,e,f){this.a=d
this.b=e
this.c=f},iGU:function iGU(){},cIZ:function cIZ(){}},O
a.setFunctionNamesIfNecessary([K,A,E,V,F])
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
A=a.updateHolder(c[10],A)
S=c[11]
N=c[12]
E=a.updateHolder(c[13],E)
M=c[14]
B=c[15]
Q=c[16]
D=c[17]
L=c[18]
Z=c[19]
V=a.updateHolder(c[20],V)
U=c[21]
T=c[22]
F=a.updateHolder(c[23],F)
O=c[24]
A.dnP.prototype={}
K.Pe.prototype={
c99:function(d){var y,x,w
y=P.b
x=new N.dK()
x.b=P.m(["accountId",d],y,y)
x.c=C.av
w=A.cj(x,C.B,C.W,null,null,C.R,C.B,null,"/ui/get_board_view_settings",!1)
return this.a.a.bX(0,w).at(0,new K.dnQ(),V.aCc).ca(new K.dnR())},
ckH:function(d){var y,x
y=new N.dK()
y.b=d.am()
y.c=C.av
x=A.cj(y,C.B,C.W,null,null,C.R,C.B,null,"/ui/collapse_board_view_column",!1)
return this.a.a.bX(0,x).ca(new K.dnU())},
ckJ:function(d,e){var y,x
y=new N.dK()
y.b=P.m(["accountId",d,"collapse",e],P.b,P.f)
y.c=C.av
x=A.cj(y,C.B,C.W,null,null,C.R,C.B,null,"/ui/collapse_board_view_othertasks_column",!1)
return this.a.a.bX(0,x).ca(new K.dnW())},
ckI:function(d,e){var y,x
y=new N.dK()
y.b=P.m(["accountId",d,"hideTaskCovers",!e],P.b,P.f)
y.c=C.av
x=A.cj(y,C.B,C.W,null,null,C.R,C.B,null,"/ui/hide_board_view_task_covers",!1)
return this.a.a.bX(0,x).ca(new K.dnV())},
c9a:function(d,e){var y,x
y=new N.dK()
y.b=P.m(["accountId",d,"taskId",e],P.b,P.f)
y.c=C.av
x=A.cj(y,C.B,C.W,null,null,C.lA,C.B,null,"/ui/get_board_task_cover",!1)
return this.a.a.bX(0,x).at(0,new K.dnS(d),V.Bk).ca(new K.dnT())}}
F.do3.prototype={
gf9:function(){return this.b}}
F.iGU.prototype={
am:function(){return P.m(["accountId",this.a,"stageId",this.b,"collapse",this.c],P.b,null)}}
F.cIZ.prototype={}
V.aCc.prototype={}
V.aOs.prototype={}
V.iGZ.prototype={
am:function(){var y=P.e(P.b,null)
new V.iH_(y).$2("commonSettings",this.a)
y.l(0,"collapseOtherTasksColumn",this.b)
y.l(0,"hideTaskCovers",this.c)
y.l(0,"workflowSettings",this.d)
return y}}
V.j03.prototype={
am:function(){return P.m(["workflowId",this.a,"collapsedColumns",this.b],P.b,null)}}
V.cJ0.prototype={}
V.cXI.prototype={}
K.c6Z.prototype={
tJ:function(d,e){return this.f.cg(0,e,new K.dp4(this,e))},
dwC:function(d){return this.a.c99(d.gH(d)).at(0,new K.dp2(this,d),P.t)},
dGK:function(d,e){var y,x
y=e.d
x=P.j
y.toString
this.dqP(d,P.cb(new H.k8(y,new K.dp3(),[H.i(y,0),x]),x),e.b)
this.e.l(0,d,!e.c)},
dqP:function(d,e,f){var y,x
y=this.b.bgB(d)
x=H.i(y,0)
this.c.l(0,d,P.cb(new H.aH(y,new K.dp1(e),[x]),x))
this.d.l(0,d,f)},
b_0:function(d){var y=this.e.i(0,d)
return y!==!1},
arE:function(d,e){return this.cmq(d,e)},
cmq:function(d,e){var y=0,x=P.W(null),w=this
var $async$arE=P.O(function(f,g){if(f===1)return P.T(g,x)
while(true)switch(y){case 0:w.d.l(0,d,e)
y=2
return P.X(w.a.ckJ(d.gH(d),e),$async$arE)
case 2:return P.U(null,x)}})
return P.V($async$arE,x)},
ar9:function(d,e){return this.ckU(d,e)},
ckU:function(d,e){var y=0,x=P.W(null),w=this
var $async$ar9=P.O(function(f,g){if(f===1)return P.T(g,x)
while(true)switch(y){case 0:w.e.l(0,d,e)
y=2
return P.X(w.a.ckI(d.b,e),$async$ar9)
case 2:w.r.m(0,null)
return P.U(null,x)}})
return P.V($async$ar9,x)}}
var z=a.updateTypes([{func:1,ret:V.aCc,args:[G.bU]},{func:1,ret:V.aOs,args:[,]},{func:1,ret:P.t,args:[V.aCc]},{func:1,ret:[P.A,P.j],args:[V.aOs]}])
K.dnQ.prototype={
$1:function(d){return V.mED(H.a8(d.c.am(),"$iy",[P.b,P.f],"$ay"))},
$S:z+0}
K.dnR.prototype={
$1:function(d){return $.c38().Cr(0,C.aH,"Error on getBoardViewSettings:",d)},
$S:4}
K.dnU.prototype={
$1:function(d){return $.c38().Cr(0,C.aH,"Error on setBoardColumnViewSettings:",d)},
$S:4}
K.dnW.prototype={
$1:function(d){return $.c38().Cr(0,C.aH,"Error on setBoardViewUncategorizedColumnCollapseState:",d)},
$S:4}
K.dnV.prototype={
$1:function(d){return $.c38().Cr(0,C.aH,"Error on setBoardViewTaskCoversVisibilityState:",d)},
$S:4}
K.dnS.prototype={
$1:function(d){var y=N.l5h(H.a8(d.c.am(),"$iy",[P.b,P.f],"$ay"))
y.a=H.dI(this.a,null)
return y.gdf(y)?V.kFJ(y):null},
$S:2152}
K.dnT.prototype={
$1:function(d){return $.c38().Cr(0,C.aH,"Error on getBoardViewTaskCoverInfo:",d)},
$S:4}
V.iGY.prototype={
$1:function(d){return d==null?null:V.mGe(H.a8(d,"$iy",[P.b,null],"$ay"))},
$S:z+1}
V.iH_.prototype={
$2:function(d,e){if(e!=null)this.a.l(0,d,e)},
$S:8}
V.j02.prototype={
$1:function(d){return H.ae(d)},
$S:29}
E.jV0.prototype={
$0:function(){var y,x
y=Y.db
x=P.p
$.kvO=new K.c6Z(this.a,this.b,P.e(y,[P.c2,M.cq]),P.e(y,x),P.e(y,x),P.e(y,[P.ag,,]),new P.q(null,null,0,[-1]))},
$C:"$0",
$R:0,
$S:0}
K.dp4.prototype={
$0:function(){return this.a.dwC(this.b)},
$S:40}
K.dp2.prototype={
$1:function(d){this.a.dGK(this.b,d)},
$S:z+2}
K.dp3.prototype={
$1:function(d){return d.b},
$S:z+3}
K.dp1.prototype={
$1:function(d){return this.a.a6(0,P.bc(d.gf9(),null,null))},
$S:49};(function inheritance(){var y=a.mixin,x=a.inheritMany,w=a.inherit
x(P.f,[A.dnP,K.Pe,F.iGU,V.iGZ,V.j03,K.c6Z])
x(H.bD,[K.dnQ,K.dnR,K.dnU,K.dnW,K.dnV,K.dnS,K.dnT,V.iGY,V.iH_,V.j02,E.jV0,K.dp4,K.dp2,K.dp3,K.dp1])
x(O.C8,[F.cIZ,V.cJ0,V.cXI])
w(F.do3,F.cIZ)
w(V.aCc,V.cJ0)
w(V.aOs,V.cXI)
y(F.cIZ,F.iGU)
y(V.cJ0,V.iGZ)
y(V.cXI,V.j03)})();(function constants(){C.mN=H.u(A.dnP)
C.lP=H.u(K.c6Z)})();(function staticFields(){$.kvO=null})();(function lazyInitializers(){var y=a.lazy
y($,"oPM","c38",function(){return N.aT("board.BoardApiImpl")})})()}
$__dart_deferred_initializers__["3pVaQGG7LpeNQc1ICfS8VksBYAY="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=wrike_ws.dart.js_235.part.js.map
