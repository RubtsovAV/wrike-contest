self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G,Y,R={
oFV:function(d,e){var y=new R.jOw(P.e(P.b,null),d)
y.a=S.l(y,3,C.e,e,E.Lg)
y.d=$.c_h
return y},
oFW:function(d,e){var y=new R.jOx(P.e(P.b,null),d)
y.a=S.l(y,3,C.e,e,E.Lg)
y.d=$.c_h
return y},
oFX:function(d,e){var y=new R.jOy(P.e(P.b,null),d)
y.a=S.l(y,3,C.e,e,E.Lg)
y.d=$.c_h
return y},
oFY:function(d,e){var y=new R.jOz(P.e(P.b,null),d)
y.a=S.l(y,3,C.e,e,E.Lg)
y.d=$.c_h
return y},
ihD:function ihD(d,e){var _=this
_.a=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=null
_.b=d
_.c=e
_.f=_.e=_.d=null},
jOw:function jOw(d,e){var _=this
_.a=_.r=null
_.b=d
_.c=e
_.f=_.e=_.d=null},
jOx:function jOx(d,e){var _=this
_.a=_.Q=_.z=_.y=_.x=_.r=null
_.b=d
_.c=e
_.f=_.e=_.d=null},
jOy:function jOy(d,e){var _=this
_.a=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=null
_.b=d
_.c=e
_.f=_.e=_.d=null},
jOz:function jOz(d,e){var _=this
_.a=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=null
_.b=d
_.c=e
_.f=_.e=_.d=null}},K,X,A,S,N,E={Lg:function Lg(d){var _=this
_.a=d
_.b=!0
_.d=_.c=null
_.e=!0
_.f=!1
_.r=null}},M={a3v:function a3v(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=!1
_.f=_.e=null},iAV:function iAV(d,e,f){this.a=d
this.b=e
this.c=f},
kLf:function(d){var y,x
for(y=0;y<4;++y){x=C.aPB[y]
if(x.a===d)return x}return},
aWJ:function aWJ(d){this.a=d}},B={kuB:function kuB(d){this.a=d}},Q,D,L,Z,V={
oFZ:function(d,e){var y=new V.jOA(P.m(["$implicit",null],P.b,null),d)
y.a=S.l(y,3,C.e,e,M.a3v)
y.d=$.ku2
return y},
oG_:function(d,e){var y=new V.jOB(P.e(P.b,null),d)
y.a=S.l(y,3,C.x,e,M.a3v)
return y},
mDr:function(){return C.aDp},
ihE:function ihE(d,e){var _=this
_.a=_.y=_.x=_.r=null
_.b=d
_.c=e
_.f=_.e=_.d=null},
jOA:function jOA(d,e){var _=this
_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=null
_.b=d
_.c=e
_.f=_.e=_.d=null},
jOB:function jOB(d,e){var _=this
_.a=_.x=_.r=null
_.b=d
_.c=e
_.f=_.e=_.d=null}},U,T,F,O
a.setFunctionNamesIfNecessary([R,E,M,B,V])
C=c[0]
H=c[1]
J=c[2]
P=c[3]
W=c[4]
G=c[5]
Y=c[6]
R=a.updateHolder(c[7],R)
K=c[8]
X=c[9]
A=c[10]
S=c[11]
N=c[12]
E=a.updateHolder(c[13],E)
M=a.updateHolder(c[14],M)
B=a.updateHolder(c[15],B)
Q=c[16]
D=c[17]
L=c[18]
Z=c[19]
V=a.updateHolder(c[20],V)
U=c[21]
T=c[22]
F=c[23]
O=c[24]
E.Lg.prototype={
bb5:function(){var y,x,w,v,u,t
y=P.b
x=P.f
w=B.l4U(P.e(y,x))
v=this.r.a
u=this.d
t=w.a
t.aH("setConfig",H.a([P.bi(P.m(["record",v,"fields",u.x,"skipField",u.a],y,x))],[x]))
t.aH("showBy",H.a([this.c],[W.c9]))},
YT:function(d){var y,x,w,v,u,t,s,r
y=d!=null?J.ec(J.a0(d)):d
x=this.d
w=J.a0(y)
v=this.d
u=v.d
v=v.f
t=[P.f]
u=H.n(this.a.a.aH("getByServerType",H.a([u],t)),"$iaN")
v=v.aIR()
x.e=J.a0(J.a0(new B.bsx(u).l6(0,w,v)))
x=this.d
d=x.e
s=M.kLf(x.a)
x=this.d.b
x=H.n(B.iY("$w.folders").aH("getById",H.a([x],t)),"$iaN")
switch(s){case C.Yh:r=(d==null?null:d.length!==0)===!0?H.a(d.split(","),[P.b]):H.a([],t)
w=[]
C.d.a4(w,new H.aj(r,P.k98(),[H.i(r,0),null]))
x.aH("updateProjectOwners",H.a([new P.fg(w,[null])],t))
break
case C.Yj:x.aH("updateProjectStatus",H.a([d],t))
break
case C.Yi:x.aH("updateProjectStartDate",H.a([d],t))
break
case C.Yg:x.aH("updateProjectFinishDate",H.a([d],t))
break}},
gcA:function(d){return this.f}}
R.ihD.prototype={
j:function(){var y,x,w,v
y=this.R(this.e)
x=document
w=S.L(x,y)
this.r=w
w.setAttribute("id","title")
this.k(this.r)
w=x.createTextNode("")
this.x=w
this.r.appendChild(w)
w=$.Q()
v=w.cloneNode(!1)
y.appendChild(v)
v=new V.o(2,null,this,v)
this.y=v
this.z=new K.x(new D.r(v,R.nsG()),v)
v=S.L(x,y)
this.Q=v
v.setAttribute("id","editor")
this.k(this.Q)
v=w.cloneNode(!1)
this.Q.appendChild(v)
v=new V.o(4,3,this,v)
this.ch=v
this.cx=new K.x(new D.r(v,R.nsH()),v)
v=w.cloneNode(!1)
this.Q.appendChild(v)
v=new V.o(5,3,this,v)
this.cy=v
this.db=new K.x(new D.r(v,R.nsI()),v)
w=w.cloneNode(!1)
this.Q.appendChild(w)
w=new V.o(6,3,this,w)
this.dx=w
this.dy=new K.x(new D.r(w,R.nsJ()),w)
this.fx=new Z.bEY()
this.f.c=this.Q
this.C(0,C.c,null)
return},
n:function(){var y,x,w,v
y=this.f
this.z.sE(y.d.y.length>0)
x=this.cx
w=y.d
y.toString
x.sE(J.a0(w.d)==="DateValue")
this.db.sE(J.a0(y.d.d)==="DropDownValue")
this.dy.sE(J.a0(y.d.d)==="UserValue")
this.y.A()
this.ch.A()
this.cy.A()
this.dx.A()
v=Q.a_(y.d.c)
if(Q.c(this.fr,v)){this.x.textContent=v
this.fr=v}},
u:function(){var y=this.y
if(y!=null)y.w()
y=this.ch
if(y!=null)y.w()
y=this.cy
if(y!=null)y.w()
y=this.dx
if(y!=null)y.w()},
$ad:function(){return[E.Lg]}}
R.jOw.prototype={
j:function(){var y=document.createElement("div")
this.r=y
y.className="warning-icon"
this.k(y)
y=this.r;(y&&C.Y).a5(y,"click",this.Y(this.f.gbb4(),W.Y))
this.G(this.r)
return},
$ad:function(){return[E.Lg]}}
R.jOx.prototype={
j:function(){var y,x,w,v,u,t,s,r
y=A.l2L(this,0)
this.x=y
y=y.e
this.r=y
y.className="form-element"
this.k(y)
y=this.c
x=y.c
w=x.h(C.b,y.a.Q)
v=this.x.a.b
y=x.h(C.m,y.a.Q)
x=T.h("dd/mm/yy",null,"Datefield placeholder DDMMYY",C.a,"WsDateFieldLocalization_dateFormatPlaceholderDDMMYY")
u=T.h("mm/dd/yy",null,"Datefield placeholder MMDDYY",C.a,"WsDateFieldLocalization_dateFormatPlaceholderMMDDYY")
t=T.h("yy/mm/dd",null,"Datefield placeholder YYMMDD",C.a,"WsDateFieldLocalization_dateFormatPlaceholderYYMMDD")
s=H.a([],[[P.H,,]])
v=new A.bsG(new P.q(null,null,0,[P.b]),x,u,t,D.GR(y.f),s,w,v)
this.y=v
this.x.t(0,v,[])
v=this.y.b
r=new P.w(v,[H.i(v,0)]).v(0,this.L(this.f.gKf(),null,P.f))
this.C(0,[this.r],[r])
return},
n:function(){var y,x,w,v,u,t
y=this.f
x=this.a.cy
w=y.d.e
if(Q.c(this.z,w)){this.y.d=w
v=P.e(P.b,A.k)
v.l(0,"value",new A.k(this.z,w))
this.z=w
u=!0}else{u=!1
v=null}t=y.e
if(Q.c(this.Q,t)){this.y.e=t
if(v==null)v=P.e(P.b,A.k)
v.l(0,"isEditable",new A.k(this.Q,t))
this.Q=t
u=!0}if(u)this.x.a.sB(1)
if(v!=null)this.y.aD(v)
this.x.p()
if(x===0)this.y.anu()},
u:function(){var y=this.x
if(y!=null)y.q(0)
this.y.aj()},
$ad:function(){return[E.Lg]}}
R.jOy.prototype={
j:function(){var y,x
y=N.l2z(this,0)
this.x=y
y=y.e
this.r=y
y.className="form-element"
this.k(y)
y=new L.bsF(new P.q(null,null,0,[P.b]),H.a([],[[P.H,,]]))
this.y=y
this.x.t(0,y,[])
y=this.y.b
x=new P.w(y,[H.i(y,0)]).v(0,this.L(this.f.gKf(),null,P.f))
this.C(0,[this.r],[x])
return},
n:function(){var y,x,w,v,u,t,s,r
y=this.f
x=this.a.cy===0
if(x){w=P.e(P.b,A.k)
w.l(0,"autosize",new A.k(null,!0))}else w=null
y.toString
v=T.h("Select",null,"Dropdown customfield placeholder",C.a,"WsProjectFieldLocalization_dropDownPlaceholder")
if(Q.c(this.z,v)){this.y.c=v
if(w==null)w=P.e(P.b,A.k)
w.l(0,"placeholder",new A.k(this.z,v))
this.z=v}u=y.d.e
if(Q.c(this.Q,u)){this.y.d=u
if(w==null)w=P.e(P.b,A.k)
w.l(0,"value",new A.k(this.Q,u))
this.Q=u}t=y.d.f.d
if(Q.c(this.ch,t)){this.y.e=t
if(w==null)w=P.e(P.b,A.k)
w.l(0,"items",new A.k(this.ch,t))
this.ch=t}s=y.e
if(Q.c(this.cx,s)){this.y.x=s
if(w==null)w=P.e(P.b,A.k)
w.l(0,"isEditable",new A.k(this.cx,s))
this.cx=s}if(w!=null){r=this.y
r.toString
if(w.ag(0,"value"))r.a7g()}this.x.p()
if(x)this.y.anu()},
u:function(){var y=this.x
if(y!=null)y.q(0)
this.y.aj()},
$ad:function(){return[E.Lg]}}
R.jOz.prototype={
j:function(){var y,x,w
y=X.l48(this,0)
this.x=y
y=y.e
this.r=y
y.className="form-element"
this.k(y)
y=P.b
x=[y]
x=new B.Op(new P.q(null,null,0,[y]),H.a([],x),H.a([],x),T.h("Add user",null,"Add user",C.a,"UserListIntl_addUserTextIntl"))
this.y=x
this.x.t(0,x,[])
x=this.y.a
w=new P.w(x,[H.i(x,0)]).v(0,this.L(this.f.gKf(),y,y))
y=this.c.fx
this.db=Q.ce(y.gcf(y),[P.A,,],P.f)
this.C(0,[this.r],[w])
return},
n:function(){var y,x,w,v,u,t,s
y=this.f
if(this.a.cy===0)this.y.f=!1
x=y.d.e
w=this.db.$1(x)
if(Q.c(this.z,w)){this.y.b=w
this.z=w}x=y.d
v=x.a==="projectOwners"?x.z:x.f.y
if(Q.c(this.Q,v)){this.y.c=v
this.Q=v}x=y.d
u=x.a==="projectOwners"?x.Q:x.f.x
if(Q.c(this.ch,u)){this.y.d=u
this.ch=u}t=y.e
if(Q.c(this.cx,t)){this.y.r=t
this.cx=t}s=!y.f
if(Q.c(this.cy,s)){this.y.x=s
this.cy=s}this.x.p()},
u:function(){var y=this.x
if(y!=null)y.q(0)},
$ad:function(){return[E.Lg]}}
M.a3v.prototype={
fi:function(d){this.f=d},
eG:function(d){this.bLA(d)},
bLA:function(d){var y,x,w,v,u
y=J.ai(d)
x=B.hJ(y.i(d,"taskId"))
w=[P.f]
v=H.a8(y.i(d,"fields"),"$iA",w,"$aA")
if(v==null)v=H.a([],w)
this.c=H.aE(y.i(d,"isEditable"))
this.d=H.aE(y.i(d,"isTemplate"))
if(x==null)return
C.d.sah(this.b,0)
u=H.a([],[B.PO])
J.bF(v,new M.iAV(this,x,u))
this.b=u},
dsZ:function(d,e){var y,x,w,v,u,t
y=P.bc(d,null,null)
if(y!=null){x=this.e
if(!J.K(x==null?null:x.gH(x),y)){x=this.a.a
this.e=H.an(x.i(0,y),H.a1(x,"aU",1))}w=this.e}else w=null
if(w==null)return!1
v=M.kLf(e)
x=this.a
u=x.b$.cS(w,C.cl)
if(!u){t=H.a([C.cl],[P.bE])
x.b$.ft(0,w,t,!0,C.S)}switch(v){case C.Yh:return u&&w.bY(C.Ax)
case C.Yj:return u&&w.bY(C.oK)
case C.Yi:case C.Yg:return u&&w.bY(C.Aw)&&!w.gRK()}return this.c},
$ifE:1,
$ifk:1,
gcA:function(d){return this.d}}
V.ihE.prototype={
j:function(){var y,x
y=this.R(this.e)
x=$.Q().cloneNode(!1)
y.appendChild(x)
x=new V.o(0,null,this,x)
this.r=x
this.x=new R.bk(x,new D.r(x,V.nsE()))
this.C(0,C.c,null)
return},
n:function(){var y=this.f.b
if(Q.c(this.y,y)){this.x.sbn(y)
this.y=y}this.x.b9()
this.r.A()},
u:function(){var y=this.r
if(y!=null)y.w()},
$ad:function(){return[M.a3v]}}
V.jOA.prototype={
j:function(){var y,x
y=new R.ihD(P.e(P.b,null),this)
y.a=S.l(y,3,C.h,0,E.Lg)
x=document.createElement("ws-task-projectfield")
y.e=x
x=$.c_h
if(x==null){x=$.G
x=x.P(null,C.i,$.lVo())
$.c_h=x}y.O(x)
this.x=y
y=y.e
this.r=y
this.k(y)
y=new E.Lg(this.c.h(C.Dj,this.a.Q))
this.y=y
this.x.t(0,y,[])
this.G(this.r)
return},
n:function(){var y,x,w,v,u,t,s
y=this.f
x=this.a.cy===0
w=this.b.i(0,"$implicit")
if(Q.c(this.z,w)){this.y.d=w
this.z=w}y.toString
v=w.r===!0
if(Q.c(this.Q,v)){this.y.e=v
this.Q=v}u=y.d
if(Q.c(this.ch,u)){this.y.f=u
this.ch=u}if(x){t=this.y
s=t.d.b
t.r=new B.bMq(H.n(B.iY("$wrike").aH("task",H.a([s],[P.f])),"$iaN"))}t=this.x
t.toString
if(x){t.f.b
t.a3(t.e,"workspace-view-task-fieldlist",!0)}this.x.p()},
u:function(){var y=this.x
if(y!=null)y.q(0)},
$ad:function(){return[M.a3v]}}
V.jOB.prototype={
j:function(){var y,x,w
y=new V.ihE(P.e(P.b,null),this)
x=M.a3v
y.a=S.l(y,3,C.h,0,x)
w=document.createElement("ws-task-projectfield-list")
y.e=w
w=$.ku2
if(w==null){w=$.G
w=w.P(null,C.i,$.lVp())
$.ku2=w}y.O(w)
this.r=y
this.e=y.e
y=new M.a3v(this.h(C.A,this.a.Q),H.a([],[B.PO]))
this.x=y
this.r.t(0,y,this.a.e)
this.G(this.e)
return new D.aI(this,0,this.e,this.x,[x])},
n:function(){var y,x
y=this.a.cy
if(y===0){y=this.x
x=y.f
if(x!=null)y.bLA(x)}this.r.p()},
u:function(){var y=this.r
if(y!=null)y.q(0)},
$ad:function(){return[M.a3v]}}
M.aWJ.prototype={
F:function(d){return this.a},
gaQ:function(d){return this.a}}
B.kuB.prototype={}
var z=a.updateTypes([{func:1,ret:[S.d,E.Lg],args:[[S.d,,],P.j]},{func:1,ret:[S.d,M.a3v],args:[[S.d,,],P.j]},{func:1,ret:-1},{func:1,ret:-1,args:[P.f]}])
M.iAV.prototype={
$1:function(d){var y,x
y=B.kGu(H.a8(d,"$iy",[P.b,P.f],"$ay"))
x=this.b
y.b=x
y.r=this.a.dsZ(x,y.a)
this.c.push(y)},
$S:3};(function installTearOffs(){var y=a._instance_0u,x=a._instance_1u,w=a._static_2
var v
y(v=E.Lg.prototype,"gbb4","bb5",2)
x(v,"gKf","YT",3)
w(R,"nsG","oFV",0)
w(R,"nsH","oFW",0)
w(R,"nsI","oFX",0)
w(R,"nsJ","oFY",0)
w(V,"nsE","oFZ",1)
w(V,"nsF","oG_",1)})();(function inheritance(){var y=a.inheritMany,x=a.inherit
y(P.f,[E.Lg,M.a3v,M.aWJ])
y(S.d,[R.ihD,R.jOw,R.jOx,R.jOy,R.jOz,V.ihE,V.jOA,V.jOB])
x(M.iAV,H.bD)
x(B.kuB,B.bfn)})();(function constants(){var y=a.makeConstList
C.aDp=new D.aG("ws-task-projectfield-list",V.nsF(),[M.a3v])
C.Yh=new M.aWJ("projectOwners")
C.Yj=new M.aWJ("projectStatus")
C.Yi=new M.aWJ("projectStartDate")
C.Yg=new M.aWJ("projectFinishDate")
C.aPB=H.a(y([C.Yh,C.Yj,C.Yi,C.Yg]),[M.aWJ])})();(function staticFields(){$.c_h=null
$.ku2=null})();(function lazyInitializers(){var y=a.lazy
y($,"pyS","lVo",function(){return[$.kCW()]})
y($,"pyT","lVp",function(){return[$.kCX()]})})()}
$__dart_deferred_initializers__["nfjT6L+lD9fpmHodyPbnQ83O/lk="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=wrike_ws.dart.js_280.part.js.map
