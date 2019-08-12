self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,H,J,P,W,G,Y,R,K,X,A,S,N={asu:function asu(d,e){this.a=d
this.b=e},IU:function IU(d){this.a=d},PW:function PW(){}},E,M,B,Q,D,L,Z,V,U,T,F,O
a.setFunctionNamesIfNecessary([N])
C=c[0]
H=c[1]
J=c[2]
P=c[3]
W=c[4]
G=c[5]
Y=c[6]
R=c[7]
K=c[8]
X=c[9]
A=c[10]
S=c[11]
N=a.updateHolder(c[12],N)
E=c[13]
M=c[14]
B=c[15]
Q=c[16]
D=c[17]
L=c[18]
Z=c[19]
V=c[20]
U=c[21]
T=c[22]
F=c[23]
O=c[24]
N.asu.prototype={
F:function(d){return this.b},
gaY:function(d){return this.a}}
N.IU.prototype={
l8:function(d,e,f){var y,x,w
if(e==null)return
switch(this.ei7(f)){case C.a9y:if(T.ij()==null)$.rL=$.uD
y=T.c4("jm",T.ij()).bt(0,e)
break
case C.TQ:x=this.a.$0()
x.toString
x=H.bd(x)===H.bd(e)?"MMMMd":"yMMMMd"
if(T.ij()==null)$.rL=$.uD
y=T.c4(x,T.ij()).bt(0,e)
break
case C.a9C:y=this.bEO(e,!0)
break
case C.a9E:y=this.bEO(e,!1)
break
case C.a9G:y=this.bEN(e,!1)
break
case C.a9A:y=this.bEN(e,!0)
break
case C.a9I:x=this.a.$0()
x.toString
w=H.bd(x)===H.bd(e)?"MMMd":"yMMMd"
if(T.ij()==null)$.rL=$.uD
y=T.c4(w,T.ij()).bt(0,e)
break
default:y=null}return y},
h5:function(d,e){return this.l8(d,e,"date")},
ei7:function(d){switch(d){case"time":return C.a9y
case"date":return C.TQ
case"shortDate":return C.a9A
case"pluralTimeShort":return C.a9C
case"pluralTime":return C.a9E
case"pluralDate":return C.a9G
case"abbreviatedDate":return C.a9I
default:return C.TQ}},
bEO:function(d,e){var y,x,w,v,u,t
y=this.a.$0()
x=P.bb(0,0,0,y.a-d.a,0,0).a
if(x<0){if(T.ij()==null)$.rL=$.uD
w=T.c4("jm",T.ij()).bt(0,d)}else{v=C.l.be(x,1e6)
if(v<3)w=T.h("Just now",H.a([],[P.f]),"Text JustNow for a Date Time Pipe",C.a,"DateTimePipeLocalization_JustNow")
else{u=C.l.be(x,6e7)
if(u<1){x=[P.f]
if(e){u=""+v+" s ago"
t=""+v+" s ago"
w=T.ct(v,H.a([v],x),"Text Short Seconds Ago for a Date Time Pipe","DateTimePipeLocalization_TimeShortLessThanAMinute",u,t,null,null)}else{u=""+v+" second ago"
t=""+v+" seconds ago"
w=T.ct(v,H.a([v],x),"Text Seconds Ago for a Date Time Pipe","DateTimePipeLocalization_TimeLessThanAMinute",u,t,null,null)}}else{x=C.l.be(x,36e8)
if(x<1){x=[P.f]
if(e){v=""+u+" m ago"
t=""+u+" m ago"
w=T.ct(u,H.a([u],x),"Text Short Minutes Ago for a Date Time Pipe","DateTimePipeLocalization_TimeShortLessThanAnHour",v,t,null,null)}else{v=""+u+" minute ago"
t=""+u+" minutes ago"
w=T.ct(u,H.a([u],x),"Text Minutes Ago for a Date Time Pipe","DateTimePipeLocalization_TimeLessThanAnHour",v,t,null,null)}}else if(this.aUA(y,d)){v=[P.f]
if(e){u=""+x+" h ago"
t=""+x+" h ago"
w=T.ct(x,H.a([x],v),"Text Short Hours Ago for a Date Time Pipe","DateTimePipeLocalization_TimeShortLessToday",u,t,null,null)}else{u=""+x+" hour ago"
t=""+x+" hours ago"
w=T.ct(x,H.a([x],v),"Text N Hours Ago for a Date Time Pipe","DateTimePipeLocalization_TimeLessToday",u,t,null,null)}}else{if(T.ij()==null)$.rL=$.uD
w=T.c4("jm",T.ij()).bt(0,d)}}}}return w},
bEN:function(d,e){var y,x,w
y=this.a.$0()
if(this.aUA(y,d))x=T.h("Today",H.a([],[P.f]),"Text Today for a Date Time Pipe",C.a,"DateTimePipeLocalization_Today")
else if(this.aUA(y.fB(0,C.bO),d))x=T.h("Yesterday",H.a([],[P.f]),"Text Yesterday for a Date Time Pipe",C.a,"DateTimePipeLocalization_Yesterday")
else if(e){if(T.ij()==null)$.rL=$.uD
x=T.c4("yMMMd",T.ij()).bt(0,d)}else{w=H.bd(y)===H.bd(d)?"MMMMd":"yMMMMd"
if(T.ij()==null)$.rL=$.uD
x=T.c4(w,T.ij()).bt(0,d)}return x},
aUA:function(d,e){d.toString
return H.bd(d)===H.bd(e)&&H.bz(d)===H.bz(e)&&H.bM(d)===H.bM(e)}}
var z=a.updateTypes([{func:1,ret:P.b,args:[P.a2],opt:[P.b]}])
N.PW.prototype={
$0:function(){return new P.a2(Date.now(),!1)},
$S:430};(function installTearOffs(){var y=a.installInstanceTearOff
y(N.IU.prototype,"gcf",1,1,null,["$2","$1"],["l8","h5"],0,0)})();(function inheritance(){var y=a.inheritMany,x=a.inherit
y(P.f,[N.asu,N.IU])
x(N.PW,H.bD)})();(function constants(){C.a9y=new N.asu(0,"DateTimePatternType.Time")
C.TQ=new N.asu(1,"DateTimePatternType.Date")
C.a9A=new N.asu(2,"DateTimePatternType.ShortDate")
C.a9C=new N.asu(3,"DateTimePatternType.PluralTimeShort")
C.a9E=new N.asu(4,"DateTimePatternType.PluralTime")
C.a9G=new N.asu(5,"DateTimePatternType.PluralDate")
C.a9I=new N.asu(6,"DateTimePatternType.AbbreviatedDate")})()}
$__dart_deferred_initializers__["AFNCYmcSDKZe2lWBJKEa91i9xUE="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=wrike_ws.dart.js_37.part.js.map
