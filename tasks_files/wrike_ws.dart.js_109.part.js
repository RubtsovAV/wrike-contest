self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G,Y={c53:function c53(d){this.a=d},iG5:function iG5(){}},R={c4S:function c4S(d){this.a=d},iFR:function iFR(){}},K={aqP:function aqP(d,e){this.a=d
this.b=e},aQ7:function aQ7(d){this.a=d},d81:function d81(){}},X,A={
mld:function(d){var y,x
if(d.a===400){d.c
y=!0}else y=!1
if(y){x=J.cp(H.n(d.c.am(),"$iy"),P.b,P.f)
if(!J.K(x.i(0,"messageKey"),"approvals_attachments_decision_required"))return
return new A.c5o(J.bO(H.aB(x.i(0,"attachmentIds")),P.j))}return},
c5o:function c5o(d){this.a=d}},S={c50:function c50(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},iFZ:function iFZ(){},iG_:function iG_(d){this.a=d}},N={esI:function esI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},iMW:function iMW(){}},E={
l5c:function(d){var y,x,w,v,u
y=H.ae(d.i(0,"approvalId"))
x=H.P(d.i(0,"approverUid"))
w=H.P(d.i(0,"comment"))
v=H.P(d.i(0,"groupUid"))
u=H.aB(d.i(0,"pendingAttachmentIds"))
u=u==null?null:J.ak(u,new E.iG9(),P.j)
u=u==null?null:u.as(0)
return new E.d8k(y,x,w,v,u,H.P(d.i(0,"status")),H.ae(d.i(0,"updateDate")))},
d8k:function d8k(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
iG9:function iG9(){}},M={
l5b:function(d){var y,x,w,v,u,t,s,r,q,p,o
y=J.ai(d)
x=H.ae(y.i(d,"id"))
w=H.ae(y.i(d,"taskId"))
v=H.P(y.i(d,"authorUid"))
u=H.P(y.i(d,"title"))
t=H.P(y.i(d,"description"))
s=y.i(d,"status")==null?null:D.bBZ(H.P(y.i(d,"status")))
r=V.lA(y.i(d,"createDate"))
q=V.lA(y.i(d,"updateDate"))
if(y.i(d,"dueDate")==null)p=null
else{p=H.ae(y.i(d,"dueDate"))
o=new P.a2(p,!0)
o.f5(p,!0)
p=o}y=H.aB(y.i(d,"attachmentIds"))
return new M.nB(x,w,v,u,t,s,q,r,p,y==null?null:J.ak(y,new M.iG0(),P.j))},
nB:function nB(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.y=l
_.z=m},
iG0:function iG0(){},
mHg:function(d){var y=d==null?null:J.bO(d,[P.y,,,])
return y==null?null:J.ak(y,new M.jRA(),L.tk)},
iG2:function(d){var y,x,w
y=J.ai(d)
x=H.aB(y.i(d,"approvals"))
x=x==null?null:J.ak(x,new M.iG3(),M.nB)
w=y.i(d,"approvers")==null?null:M.mHg(H.aB(y.i(d,"approvers")))
y=H.aB(y.i(d,"contacts"))
return new M.aQ5(x,w,y==null?null:J.ak(y,new M.iG4(),L.nU))},
aQ5:function aQ5(d,e,f){this.a=d
this.b=e
this.c=f},
jRA:function jRA(){},
iG3:function iG3(){},
iG4:function iG4(){}},B={dzJ:function dzJ(d){this.a=d},iHQ:function iHQ(){}},Q={
mpI:function(d){var y,x
if(d.a===400){d.c
y=!0}else y=!1
if(y){x=J.cp(H.n(d.c.am(),"$iy"),P.b,P.f)
if(!J.K(x.i(0,"messageKey"),"approvals_attachments_decision_mismatch"))return
J.bO(H.aB(x.i(0,"attachmentIds")),P.j)
return new Q.cbt()}return},
cbt:function cbt(){}},D,L={tk:function tk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h
_.r=i},
l5n:function(d){var y=J.ai(d)
return new L.nU(H.P(y.i(d,"uid")),H.P(y.i(d,"firstName")),H.P(y.i(d,"lastName")),H.P(y.i(d,"avatar")))},
nU:function nU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},Z,V={
mHh:function(d){var y=d==null?null:J.bO(d,[P.y,,,])
return y==null?null:J.ak(y,new V.jRB(),L.tk)},
mEx:function(d){var y,x,w
y=J.ai(d)
x=y.i(d,"approval")==null?null:M.l5b(H.a8(y.i(d,"approval"),"$iy",[P.b,P.f],"$ay"))
w=y.i(d,"approvers")==null?null:V.mHh(H.aB(y.i(d,"approvers")))
y=H.aB(y.i(d,"contacts"))
y=y==null?null:J.ak(y,new V.iFS(),L.nU)
return new V.aeI(x,w,y==null?H.a([],[L.nU]):y)},
aeI:function aeI(d,e,f){this.a=d
this.b=e
this.c=f},
jRB:function jRB(){},
iFS:function iFS(){},
mko:function(d){if(J.eX(J.bO(H.aB(J.cp(H.n(d.c.am(),"$iy"),P.b,P.f).i(0,"data")),[P.y,P.b,P.f]),new V.d5W("i18n.workspacemessages.there_is_an_active_approval")))return C.awU
return C.awT},
c4T:function c4T(d,e){this.a=d
this.b=e},
bBJ:function bBJ(d){this.a=d},
d5W:function d5W(d){this.a=d}},U,T,F={aQ8:function aQ8(d){this.a=d
this.b=null},d8j:function d8j(){},d8i:function d8i(){}},O={d5V:function d5V(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},iFU:function iFU(){},iFV:function iFV(d){this.a=d},
mrK:function(d){if(J.eX(J.bO(H.aB(J.cp(H.n(d.c.am(),"$iy"),P.b,P.f).i(0,"data")),[P.y,P.b,P.f]),new O.esh("standalone_file_review_is_active")))return C.aJH
return},
esg:function esg(d,e){this.a=d
this.b=e},
cfJ:function cfJ(d){this.a=d},
esh:function esh(d){this.a=d}}
a.setFunctionNamesIfNecessary([Y,R,K,A,S,N,E,M,B,Q,L,V,F,O])
C=c[0]
H=c[1]
J=c[2]
P=c[3]
W=c[4]
G=c[5]
Y=a.updateHolder(c[6],Y)
R=a.updateHolder(c[7],R)
K=a.updateHolder(c[8],K)
X=c[9]
A=a.updateHolder(c[10],A)
S=a.updateHolder(c[11],S)
N=a.updateHolder(c[12],N)
E=a.updateHolder(c[13],E)
M=a.updateHolder(c[14],M)
B=a.updateHolder(c[15],B)
Q=a.updateHolder(c[16],Q)
D=c[17]
L=a.updateHolder(c[18],L)
Z=c[19]
V=a.updateHolder(c[20],V)
U=c[21]
T=c[22]
F=a.updateHolder(c[23],F)
O=a.updateHolder(c[24],O)
M.nB.prototype={
gH:function(d){return this.a},
gaa:function(d){return this.d},
gco:function(d){return this.e},
gbU:function(d){return this.f}}
R.c4S.prototype={}
R.iFR.prototype={
am:function(){return P.m(["approvalId",this.a],P.b,null)}}
V.aeI.prototype={}
O.d5V.prototype={
gaa:function(d){return this.c},
gco:function(d){return this.d}}
O.iFU.prototype={
am:function(){var y,x
y=P.m(["taskId",this.a],P.b,null)
x=new O.iFV(y)
x.$2("approverUids",this.b)
x.$2("title",this.c)
x.$2("description",this.d)
x.$2("dueDate",this.e)
x.$2("attachmentIds",this.f)
return y}}
V.c4T.prototype={
F:function(d){return this.b},
gaY:function(d){return this.a}}
V.bBJ.prototype={$ijW:1}
S.c50.prototype={
gaa:function(d){return this.d},
gco:function(d){return this.e}}
S.iFZ.prototype={
am:function(){var y,x,w
y=P.m(["approvalId",this.a],P.b,null)
x=new S.iG_(y)
w=this.b
x.$2("addApproverUids",w==null?null:J.cV(w))
w=this.c
x.$2("removeApproverUids",w==null?null:J.cV(w))
x.$2("title",this.d)
x.$2("description",this.e)
x.$2("dueDate",this.f)
w=this.r
x.$2("attachmentIds",w==null?null:J.cV(w))
return y}}
M.aQ5.prototype={}
Y.c53.prototype={}
Y.iG5.prototype={
am:function(){return P.m(["approvalIds",this.a],P.b,null)}}
L.tk.prototype={
gbU:function(d){return this.f}}
E.d8k.prototype={
fc:function(){var y,x,w
y=D.bBZ(this.f)
x=this.r
w=new P.a2(x,!0)
w.f5(x,!0)
return new L.tk(this.a,this.b,this.c,this.e,y,w)},
gbU:function(d){return this.f}}
K.aqP.prototype={
gH:function(d){return this.a},
gaa:function(d){return this.b}}
B.dzJ.prototype={}
B.iHQ.prototype={
am:function(){return P.m(["taskId",this.a],P.b,null)}}
L.nU.prototype={
gem:function(){return this.b},
gey:function(){return this.c}}
Q.cbt.prototype={$ijW:1}
O.esg.prototype={
F:function(d){return this.b},
gaY:function(d){return this.a}}
O.cfJ.prototype={$ijW:1}
N.esI.prototype={}
N.iMW.prototype={
am:function(){var y=this.b
y=y==null?null:y.a
return P.m(["approvalId",this.a,"decision",y,"comment",this.c,"force",this.d],P.b,null)}}
K.aQ7.prototype={
agj:function(d){return this.eUK(d)},
eUK:function(d){var y=0,x=P.W(P.p),w,v=2,u,t=[],s=this,r,q,p,o
var $async$agj=P.O(function(e,f){if(e===1){u=f
y=v}while(true)switch(y){case 0:v=4
q=new N.dK()
q.b=P.m(["approvalId",d.a],P.b,null)
q.c=C.av
r=A.cj(q,C.B,C.W,null,null,C.R,C.B,null,"/ui/approval_cancel",!0)
y=7
return P.X(s.a.a.bX(0,r),$async$agj)
case 7:w=!0
y=1
break
v=2
y=6
break
case 4:v=3
o=u
if(H.al(o) instanceof N.ow){w=!1
y=1
break}else throw o
y=6
break
case 3:y=2
break
case 6:case 1:return P.U(w,x)
case 2:return P.T(u,x)}})
return P.V($async$agj,x)},
aB7:function(d){return this.eUL(d)},
eUL:function(d){var y=0,x=P.W(M.aQ5),w,v=2,u,t=[],s=this,r,q,p,o,n,m
var $async$aB7=P.O(function(e,f){if(e===1){u=f
y=v}while(true)switch(y){case 0:r=null
v=4
o=new N.dK()
o.b=d.am()
o.c=C.av
q=A.cj(o,C.B,C.W,null,null,C.R,C.B,null,"/ui/approval_create",!0)
y=7
return P.X(s.a.a.bX(0,q),$async$aB7)
case 7:r=f
v=2
y=6
break
case 4:v=3
m=u
o=H.al(m)
if(o instanceof N.ow){p=o
throw H.I(V.mko(p.a))}else throw m
y=6
break
case 3:y=2
break
case 6:w=M.iG2(H.a8(r.c.am(),"$iy",[P.b,P.f],"$ay"))
y=1
break
case 1:return P.U(w,x)
case 2:return P.T(u,x)}})
return P.V($async$aB7,x)},
J3:function(d){return this.eUM(d)},
eUM:function(d){var y=0,x=P.W(M.aQ5),w,v=2,u,t=[],s=this,r,q,p,o,n
var $async$J3=P.O(function(e,f){if(e===1){u=f
y=v}while(true)switch(y){case 0:r=null
v=4
p=new N.dK()
p.b=d.am()
p.c=C.av
q=A.cj(p,C.B,C.W,null,null,C.R,C.B,null,"/ui/approval_edit",!0)
y=7
return P.X(s.a.a.bX(0,q),$async$J3)
case 7:r=f
v=2
y=6
break
case 4:v=3
n=u
if(H.al(n) instanceof N.ow){y=1
break}else throw n
y=6
break
case 3:y=2
break
case 6:w=M.iG2(H.a8(r.c.am(),"$iy",[P.b,P.f],"$ay"))
y=1
break
case 1:return P.U(w,x)
case 2:return P.T(u,x)}})
return P.V($async$J3,x)},
agk:function(d){return this.eUN(d)},
eUN:function(d){var y=0,x=P.W(M.aQ5),w,v=2,u,t=[],s=this,r,q,p,o,n
var $async$agk=P.O(function(e,f){if(e===1){u=f
y=v}while(true)switch(y){case 0:r=null
v=4
p=new N.dK()
p.b=P.m(["approvalIds",d.a],P.b,null)
p.c=C.av
q=A.cj(p,C.B,C.W,null,null,C.R,C.B,null,"/ui/approval_list",!0)
y=7
return P.X(s.a.a.bX(0,q),$async$agk)
case 7:r=f
v=2
y=6
break
case 4:v=3
n=u
if(H.al(n) instanceof N.ow){y=1
break}else throw n
y=6
break
case 3:y=2
break
case 6:w=M.iG2(H.a8(r.c.am(),"$iy",[P.b,P.f],"$ay"))
y=1
break
case 1:return P.U(w,x)
case 2:return P.T(u,x)}})
return P.V($async$agk,x)},
a8w:function(d){return this.cib(d)},
cib:function(d){var y=0,x=P.W(M.aQ5),w,v=2,u,t=[],s=this,r,q,p,o,n,m,l,k
var $async$a8w=P.O(function(e,f){if(e===1){u=f
y=v}while(true)switch(y){case 0:r=null
v=4
n=new N.dK()
n.b=d.am()
n.c=C.av
q=A.cj(n,C.B,C.W,null,null,C.R,C.B,null,"/ui/approval_give_decision",!0)
y=7
return P.X(s.a.a.bX(0,q),$async$a8w)
case 7:r=f
v=2
y=6
break
case 4:v=3
k=u
n=H.al(k)
if(n instanceof N.ow){p=n
l=A.mld(p.a)
o=l==null?Q.mpI(p.a):l
if(o!=null)throw H.I(o)
y=1
break}else throw k
y=6
break
case 3:y=2
break
case 6:w=M.iG2(H.a8(r.c.am(),"$iy",[P.b,P.f],"$ay"))
y=1
break
case 1:return P.U(w,x)
case 2:return P.T(u,x)}})
return P.V($async$a8w,x)},
aoM:function(d){return this.c8V(d)},
c8V:function(d){var y=0,x=P.W([P.N,K.aqP]),w,v=2,u,t=[],s=this,r,q,p,o,n,m,l
var $async$aoM=P.O(function(e,f){if(e===1){u=f
y=v}while(true)switch(y){case 0:n=new N.dK()
n.b=P.m(["taskId",d],P.b,P.j)
n.c=C.av
r=A.cj(n,C.B,C.W,null,null,C.R,C.B,null,"/ui/get_attachments_for_approval",!0)
v=4
y=7
return P.X(s.a.a.bX(0,r),$async$aoM)
case 7:q=f
n=J.ak(J.bO(H.aB(J.M(H.n(q.c.am(),"$iy"),"attachments")),[P.y,P.b,P.f]),new K.d81(),K.aqP).bN(0,!1)
w=n
y=1
break
v=2
y=6
break
case 4:v=3
l=u
n=H.al(l)
if(n instanceof N.ow){p=n
o=O.mrK(p.a)
if(o!=null)throw H.I(o)
else throw l}else throw l
y=6
break
case 3:y=2
break
case 6:case 1:return P.U(w,x)
case 2:return P.T(u,x)}})
return P.V($async$aoM,x)},
aCe:function(d){return this.eYs(d)},
eYs:function(d){var y=0,x=P.W(P.p),w,v=2,u,t=[],s=this,r,q,p,o
var $async$aCe=P.O(function(e,f){if(e===1){u=f
y=v}while(true)switch(y){case 0:v=4
q=new N.dK()
q.b=P.m(["taskId",d.a],P.b,null)
q.c=C.av
r=A.cj(q,C.B,C.W,null,null,C.R,C.B,null,"/ui/proofing_review_close",!0)
y=7
return P.X(s.a.a.bX(0,r),$async$aCe)
case 7:w=!0
y=1
break
v=2
y=6
break
case 4:v=3
o=u
if(H.al(o) instanceof N.ow){w=!1
y=1
break}else throw o
y=6
break
case 3:y=2
break
case 6:case 1:return P.U(w,x)
case 2:return P.T(u,x)}})
return P.V($async$aCe,x)}}
F.aQ8.prototype={
bja:function(){var y,x
y=this.b
if(y==null){y=this.a.pn()
x=H.a1(y,"F",0)
x=new P.de(new F.d8i(),new P.bV(new F.d8j(),y,[x]),[x,V.aeI])
this.b=x
y=x}return y}}
A.c5o.prototype={$ijW:1}
var z=a.updateTypes([{func:1,ret:L.tk,args:[[P.y,,,]]},{func:1,ret:L.nU,args:[,]},{func:1,ret:M.nB,args:[,]},{func:1,ret:K.aqP,args:[[P.y,P.b,P.f]]},{func:1,ret:V.aeI,args:[A.jv]}])
M.iG0.prototype={
$1:function(d){return H.ae(d)},
$S:29}
V.jRB.prototype={
$1:function(d){return d==null?null:E.l5c(J.cp(d,P.b,P.f)).fc()},
$S:z+0}
V.iFS.prototype={
$1:function(d){return d==null?null:L.l5n(H.a8(d,"$iy",[P.b,P.f],"$ay"))},
$S:z+1}
O.iFV.prototype={
$2:function(d,e){if(e!=null)this.a.l(0,d,e)},
$S:8}
V.d5W.prototype={
$1:function(d){return J.c3P(d,this.a)},
$S:723}
S.iG_.prototype={
$2:function(d,e){if(e!=null)this.a.l(0,d,e)},
$S:8}
M.jRA.prototype={
$1:function(d){return d==null?null:E.l5c(J.cp(d,P.b,P.f)).fc()},
$S:z+0}
M.iG3.prototype={
$1:function(d){return d==null?null:M.l5b(H.a8(d,"$iy",[P.b,P.f],"$ay"))},
$S:z+2}
M.iG4.prototype={
$1:function(d){return d==null?null:L.l5n(H.a8(d,"$iy",[P.b,P.f],"$ay"))},
$S:z+1}
E.iG9.prototype={
$1:function(d){return H.ae(d)},
$S:29}
O.esh.prototype={
$1:function(d){return J.c3P(d,this.a)},
$S:723}
K.d81.prototype={
$1:function(d){var y=J.ai(d)
return new K.aqP(H.ae(y.i(d,"id")),H.P(y.i(d,"title")))},
$S:z+3}
F.d8j.prototype={
$1:function(d){return d.a==="ApprovalChangedPayload"},
$S:60}
F.d8i.prototype={
$1:function(d){return V.mEx(H.a8(C.G.es(0,d.b,null),"$iy",[P.b,P.f],"$ay"))},
$S:z+4};(function inheritance(){var y=a.inheritMany,x=a.inherit
y(P.f,[M.nB,R.iFR,V.aeI,O.iFU,V.c4T,V.bBJ,S.iFZ,M.aQ5,Y.iG5,L.tk,E.d8k,K.aqP,B.iHQ,L.nU,Q.cbt,O.esg,O.cfJ,N.iMW,K.aQ7,F.aQ8,A.c5o])
y(H.bD,[M.iG0,V.jRB,V.iFS,O.iFV,V.d5W,S.iG_,M.jRA,M.iG3,M.iG4,E.iG9,O.esh,K.d81,F.d8j,F.d8i])
x(R.c4S,R.iFR)
x(O.d5V,O.iFU)
x(S.c50,S.iFZ)
x(Y.c53,Y.iG5)
x(B.dzJ,B.iHQ)
x(N.esI,N.iMW)})();(function constants(){C.a4U=new V.c4T(0,"ApprovalCreationErrorType.general")
C.a4V=new V.c4T(1,"ApprovalCreationErrorType.approvalAlreadyExists")
C.awT=new V.bBJ(C.a4U)
C.awU=new V.bBJ(C.a4V)
C.abx=new O.esg(0,"GetAttachmentsExceptionType.fileReviewAlreadyExists")
C.aJH=new O.cfJ(C.abx)
C.Bk=H.u(K.aQ7)
C.Os=H.u(F.aQ8)})()}
$__dart_deferred_initializers__["EDwMTUWRI3xwyc0WeYevrqndAQ4="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=wrike_ws.dart.js_109.part.js.map
