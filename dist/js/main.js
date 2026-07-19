(function(){
'use strict';
var $p;
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $Long(lo, hi) {
  this.l = lo;
  this.h = hi;
}
$p = $Long.prototype;
$p.toString = (function() {
  return $s_RTLong__toString__I__I__T(this.l, this.h);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.e() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.tO();
      }
    }
  }
}
function $dp_charAt__I__C(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__charAt__I__C(instance, x0);
  } else {
    return instance.fj(x0);
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.tL(x0);
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.g(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.g.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.i();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.i.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.tQ(x0);
  }
}
function $dp_indexOf__I__I__I(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I__I(instance, x0, x1);
  } else {
    return instance.tP(x0, x1);
  }
}
function $dp_lastIndexOf__I__I__I(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__lastIndexOf__I__I__I(instance, x0, x1);
  } else {
    return instance.tR(x0, x1);
  }
}
function $dp_length__I(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__length__I(instance);
  } else {
    return instance.q();
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.tV(x0);
  }
}
function $dp_split__T__I__AT(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__split__T__I__AT(instance, x0, x1);
  } else {
    return instance.tW(x0, x1);
  }
}
function $dp_subSequence__I__I__jl_CharSequence(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__subSequence__I__I__jl_CharSequence(instance, x0, x1);
  } else {
    return instance.kC(x0, x1);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $dp_trim__T(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__trim__T(instance);
  } else {
    return instance.tY();
  }
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__J(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__I__I__O__D(arg0.l, arg0.h, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (((arg0 !== arg2) || (((arg3 - arg1) >>> 0) > (arg4 >>> 0)))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $bL(arg0, arg1) {
  return new $Long(arg0, arg1);
}
var $bL0 = $bL(0, 0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $bL0 : arg0);
}
function $ct_O__($thiz) {
  return $thiz;
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.g = (function(that) {
  return (this === that);
});
$p.h = (function() {
  var i = this.i();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.h();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.t = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.e = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.t = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.e = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.e = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.e = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.e = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.e = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.e = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.e = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.e = (function() {
  return new $ac_D(this.a.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass, (arrayEncodedName === "J"));
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isLongArray, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    G: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (isLongArray ? ((array) => {
    var len = (array.length | 0);
    var result = new arrayClass(len);
    var u = result.a;
    for (var i = 0; (i < len); i = ((i + 1) | 0)) {
      var srcElem = array[i];
      u[(i << 1)] = srcElem.l;
      u[(((i << 1) + 1) | 0)] = srcElem.h;
    }
    return result;
  }) : (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array))));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.t = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.e = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    G: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), false, ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p($bL0, "J", "long", $ac_J, Int32Array);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_AppBus$() {
  this.aP = null;
  this.h8 = null;
  this.ib = null;
  $n_Lcom_github_pwharned_clausula_extension_AppBus$ = this;
  new $c_Lcom_raquo_airstream_eventbus_EventBus();
  $m_Lcom_raquo_laminar_api_package$().o.hl.jN($s_Lcom_github_pwharned_clausula_extension_ExtensionStatus$__Idle__Lcom_github_pwharned_clausula_extension_ExtensionStatus());
  this.aP = $m_Lcom_raquo_laminar_api_package$().o.hl.jN($s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  this.h8 = $m_Lcom_raquo_laminar_api_package$().o.hl.jN(new $c_T2$mcDD$sp(0.0, 0.0));
  this.ib = $m_s_None$();
}
$p = $c_Lcom_github_pwharned_clausula_extension_AppBus$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_AppBus$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_AppBus$() {
}
$h_Lcom_github_pwharned_clausula_extension_AppBus$.prototype = $p;
var $d_Lcom_github_pwharned_clausula_extension_AppBus$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_AppBus$, "com.github.pwharned.clausula.extension.AppBus$", ({
  dg: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_AppBus$;
function $m_Lcom_github_pwharned_clausula_extension_AppBus$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_AppBus$)) {
    $n_Lcom_github_pwharned_clausula_extension_AppBus$ = new $c_Lcom_github_pwharned_clausula_extension_AppBus$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_AppBus$;
}
function $s_Lcom_github_pwharned_clausula_extension_Main__main__AT__V(args) {
  $m_Lcom_github_pwharned_clausula_extension_Main$().sm(args);
}
function $p_Lcom_github_pwharned_clausula_extension_Main$__createCard__Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient__T__s_Option__s_Option__Lcom_github_pwharned_clausula_extension_domain_Language__V($thiz, ankiClient, clozeText, translation, audio, lang) {
  var note = new $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote(clozeText, translation, audio, "Default", lang, new $c_sci_$colon$colon("clausula", new $c_sci_$colon$colon(lang.es(), $m_sci_Nil$())));
  ankiClient.qC(note).k5(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3) => {
    matchResult1: {
      if ((x$1$3 instanceof $c_s_util_Right)) {
        var $x_1 = $uJ(x$1$3.bI);
        var noteId_$_lo = $x_1.l;
        var noteId_$_hi = $x_1.h;
        console.log(("Card created: " + $s_RTLong__toString__I__I__T(noteId_$_lo, noteId_$_hi)));
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Created(noteId_$_lo, noteId_$_hi));
        break matchResult1;
      }
      if ((x$1$3 instanceof $c_s_util_Left)) {
        var err = x$1$3.ck;
        console.error(("Failed to create card: " + err));
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(err));
        break matchResult1;
      }
      throw new $c_s_MatchError(x$1$3);
    }
  })), $m_s_concurrent_ExecutionContext$().cH());
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_Main$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_Main$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_Main$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_Main$() {
}
$h_Lcom_github_pwharned_clausula_extension_Main$.prototype = $p;
$p.sm = (function(args) {
  var container = document.createElement("div");
  container.id = "clausula-root";
  document.body.appendChild(container);
  $m_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$().sq(container);
  var extractor = new $c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction();
  var ankiClient = new $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient();
  var translator = new $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchTranslation();
  var audio = new $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration();
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream(new $c_Lcom_raquo_airstream_misc_StreamFromSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP.dh, true), new $c_s_PartialFunction$Lifted(new $c_Lcom_github_pwharned_clausula_extension_Main$$anon$1())), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$3) => {
    matchResult7: {
      var x19 = $m_Lcom_github_pwharned_clausula_extension_AppBus$().ib;
      if (($m_s_None$() === x19)) {
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed($m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$()));
        break matchResult7;
      }
      if ((x19 instanceof $c_s_Some)) {
        var x21 = x19.eh;
        if ((x21 !== null)) {
          var x23 = x21.eJ;
          var x24 = x21.eI;
          var x25 = x21.eH;
          var x14 = $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$().tr(x24, x23);
          if ((x14 instanceof $c_s_util_Left)) {
            var err = x14.ck;
            $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(err));
            break matchResult7;
          }
          if ((x14 instanceof $c_s_util_Right)) {
            var clozeText = x14.bI;
            translator.pL(x24, x25, $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$()).p0(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((translationSentence$2) => {
              var this$9 = translationSentence$2.pJ();
              var this$10 = (this$9.d() ? $m_s_None$() : this$9.x().eL);
              var detectedLang = (this$10.d() ? $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() : this$10.x());
              return translator.pL(x23, detectedLang, $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$()).p0(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((translationSentence$1) => ((translationWord$2) => {
                var x$1 = $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
                if (((x$1 === null) ? (detectedLang === null) : (x$1 === detectedLang))) {
                  var this$11 = translationWord$2.pJ();
                  var this$12 = (this$11.d() ? $m_s_None$() : this$11.x().eL);
                  var $x_1 = (this$12.d() ? $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() : this$12.x());
                } else {
                  var $x_1 = detectedLang;
                }
                return audio.rP(x23, x24, $x_1).i6(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((translationWord$1) => ((audioTag$2) => {
                  if ((translationSentence$1 instanceof $c_s_util_Right)) {
                    var b = translationSentence$1.bI;
                    if ((audioTag$2 instanceof $c_s_util_Right)) {
                      var b$1 = audioTag$2.bI;
                      return ((translationWord$1 instanceof $c_s_util_Right) ? new $c_s_util_Right(($p_Lcom_github_pwharned_clausula_extension_Main$__createCard__Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient__T__s_Option__s_Option__Lcom_github_pwharned_clausula_extension_domain_Language__V(this, ankiClient, clozeText, new $c_s_Some(((translationWord$1.bI.eM + " : ") + b.eM)), new $c_s_Some(b$1), x25), (void 0))) : translationWord$1);
                    } else {
                      return audioTag$2;
                    }
                  } else {
                    return translationSentence$1;
                  }
                }))(translationWord$2)), $m_s_concurrent_ExecutionContext$().cH());
              }))(translationSentence$2)), $m_s_concurrent_ExecutionContext$().cH());
            })), $m_s_concurrent_ExecutionContext$().cH()).i6(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3) => {
              matchResult5: {
                if ((x$1$3 instanceof $c_s_util_Left)) {
                  var value$4 = x$1$3.ck;
                  $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(value$4));
                  break matchResult5;
                }
                if ((x$1$3 instanceof $c_s_util_Right)) {
                  break matchResult5;
                }
                throw new $c_s_MatchError(x$1$3);
              }
            })), $m_s_concurrent_ExecutionContext$().cH());
            break matchResult7;
          }
          throw new $c_s_MatchError(x14);
        }
      }
      if ((x19 === null)) {
        break matchResult7;
      }
      throw new $c_s_MatchError(x19);
    }
  })), $m_Lcom_raquo_laminar_api_package$().o.tz());
  document.addEventListener("mouseup", ((event$2) => {
    try {
      var target = event$2.target;
      console.log(("mouseup fired, target: " + target.nodeName));
      if ((target.closest("#clausula-root") !== null)) {
        console.log("Clicked inside popup, ignoring");
        return (void 0);
      } else {
        matchResult11$2: {
          var x42 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP.dh).x();
          var x$2 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
          if (((x$2 === null) ? (x42 === null) : x$2.g(x42))) {
            console.log("Creating, ignoring");
            break matchResult11$2;
          }
          if ((x42 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Created)) {
            console.log("Created, ignoring");
            break matchResult11$2;
          }
          var selection = window.getSelection();
          console.log(("Selection: " + ((selection === null) ? "null" : $dp_toString__T(selection))));
          if (((selection === null) || ($f_T__trim__T($dp_toString__T(selection)) === ""))) {
            $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
          } else {
            var selectedText = $f_T__trim__T($dp_toString__T(selection));
            var node = selection.anchorNode;
            var offset = (selection.anchorOffset | 0);
            console.log(((((("Selected text: " + selectedText) + ", node: ") + node.nodeName) + ", offset: ") + offset));
            var x37 = $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$().hU(selectedText);
            if ((x37 instanceof $c_s_util_Left)) {
              var err$1 = x37.ck;
              console.log(("Word validation failed: " + err$1));
              $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
              break matchResult11$2;
            }
            if ((x37 instanceof $c_s_util_Right)) {
              var word = x37.bI;
              console.log((("Word ok: " + word) + ", calling extractSentence"));
              extractor.ry(word, node, offset).k5(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3$1) => {
                matchResult9: {
                  if ((x$1$3$1 instanceof $c_s_util_Left)) {
                    var err$2 = x$1$3$1.ck;
                    console.log(("extractSentence failed: " + err$2));
                    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
                    break matchResult9;
                  }
                  if ((x$1$3$1 instanceof $c_s_util_Right)) {
                    var sentence = x$1$3$1.bI;
                    console.log(("Sentence: " + sentence));
                    extractor.ri(sentence).k5(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3$2) => {
                      matchResult8: {
                        if ((x$1$3$2 instanceof $c_s_util_Left)) {
                          var err$3 = x$1$3$2.ck;
                          console.log(("detectLanguage failed: " + err$3));
                          $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
                          break matchResult8;
                        }
                        if ((x$1$3$2 instanceof $c_s_util_Right)) {
                          var lang = x$1$3$2.bI;
                          console.log(("Language: " + lang.fl()));
                          var preview = new $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview(word, sentence, lang, $ct_T2__O__O__(new $c_T2(), (+event$2.clientX), (+event$2.clientY)));
                          $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().h8, $ct_T2__O__O__(new $c_T2(), (+event$2.clientX), (+event$2.clientY)));
                          $m_Lcom_github_pwharned_clausula_extension_AppBus$().ib = new $c_s_Some(preview);
                          $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, preview);
                          break matchResult8;
                        }
                        throw new $c_s_MatchError(x$1$3$2);
                      }
                    })), $m_s_concurrent_ExecutionContext$().cH());
                    break matchResult9;
                  }
                  throw new $c_s_MatchError(x$1$3$1);
                }
              })), $m_s_concurrent_ExecutionContext$().cH());
              break matchResult11$2;
            }
            throw new $c_s_MatchError(x37);
          }
        }
        return (void 0);
      }
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error(("Exception in mouseup handler: " + e$2.eu()));
      return (void 0);
    }
  }));
});
var $d_Lcom_github_pwharned_clausula_extension_Main$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_Main$, "com.github.pwharned.clausula.extension.Main$", ({
  dk: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_Main$;
function $m_Lcom_github_pwharned_clausula_extension_Main$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_Main$)) {
    $n_Lcom_github_pwharned_clausula_extension_Main$ = new $c_Lcom_github_pwharned_clausula_extension_Main$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_Main$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$.prototype = $p;
$p.hU = (function(s) {
  $m_sc_StringOps$();
  return (($f_T__trim__T(s) !== "") ? new $c_s_util_Right($f_T__trim__T(s)) : new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$()));
});
$p.tr = (function(s, w) {
  if (((s.indexOf(w) | 0) !== (-1))) {
    var replacement = (("{{c1::" + w) + "}}");
    return new $c_s_util_Right(s.split(w).join(replacement));
  } else {
    return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$());
  }
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$, "com.github.pwharned.clausula.extension.domain.Sentence$package$Sentence$", ({
  dP: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$;
function $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$ = new $c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$.prototype = $p;
$p.hU = (function(s) {
  $m_sc_StringOps$();
  return (($f_T__trim__T(s) !== "") ? new $c_s_util_Right($f_T__trim__T(s)) : new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$()));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$, "com.github.pwharned.clausula.extension.domain.Word$package$Word$", ({
  dT: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$;
function $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$ = new $c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$;
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__loadingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz) {
  return $m_Lcom_raquo_laminar_api_package$().o.cF().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-popup"), $m_Lcom_raquo_laminar_api_package$().o.gW().am(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Extracting...", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__previewView__T__T__Lcom_github_pwharned_clausula_extension_domain_Language__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, word, sentence, lang) {
  return $m_Lcom_raquo_laminar_api_package$().o.cF().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-popup"), $m_Lcom_raquo_laminar_api_package$().o.cF().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-word"), $m_Lcom_raquo_laminar_api_package$().o.th().am(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, word, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)]))])), $m_Lcom_raquo_laminar_api_package$().o.cF().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-sentence"), $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__renderHighlightedSentence__T__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, sentence, word)])), $m_Lcom_raquo_laminar_api_package$().o.cF().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-lang"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, ("Language: " + lang.fl()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)])), $m_Lcom_raquo_laminar_api_package$().o.cF().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-actions"), $m_Lcom_raquo_laminar_api_package$().o.hY().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-btn-create"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Create Card", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().i1($m_Lcom_raquo_laminar_api_package$().o.gR(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState());
  })))])), $m_Lcom_raquo_laminar_api_package$().o.hY().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-btn-dismiss"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Dismiss", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().i1($m_Lcom_raquo_laminar_api_package$().o.gR(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$4$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  })))]))]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__renderHighlightedSentence__T__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, sentence, word) {
  var escapedWord = $m_ju_regex_Pattern$().sI(word);
  var parts = $f_T__split__T__I__AT(sentence, escapedWord, 0);
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().o.gW();
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-sentence-text");
  var $x_1 = $m_Lcom_raquo_laminar_api_package$().o;
  var xs = $m_sc_ArrayOps$().tH(parts);
  var evidence$8__runtimeClass;
  var evidence$8__runtimeClass = $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.l();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$8__runtimeClass;
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  var i = 0;
  while ((i < xs.a.length)) {
    var x1 = i;
    var x0 = xs.a[x1];
    var part = x0.aY();
    var i$1 = (x0.aL() | 0);
    var elems = ((i$1 < ((parts.a.length - 1) | 0)) ? new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().o.pC().am(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, part, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)])), new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().o.so().am(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, word, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)])), $m_sci_Nil$())) : new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().o.pC().am(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, part, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)])), $m_sci_Nil$()));
    var it = new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(elems);
    while (it.p()) {
      var elem = it.l();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h1(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    i = ((1 + i) | 0);
  }
  return $x_3.am(new $c_sjsr_WrappedVarArgs([$x_2, $f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_1, $m_scm_ArrayBuilder$().h0(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((component$2) => {
    $m_Lcom_raquo_laminar_api_package$();
    return component$2;
  })), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$())]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__creatingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz) {
  return $m_Lcom_raquo_laminar_api_package$().o.cF().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-popup"), $m_Lcom_raquo_laminar_api_package$().o.gW().am(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Creating card...", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__createdView__J__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, noteId_$_lo, noteId_$_hi) {
  return $m_Lcom_raquo_laminar_api_package$().o.cF().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-popup clausula-success"), $m_Lcom_raquo_laminar_api_package$().o.gW().am(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "\u2713 Card created!", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)])), $m_Lcom_raquo_laminar_api_package$().o.hY().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-btn-dismiss"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Close", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().i1($m_Lcom_raquo_laminar_api_package$().o.gR(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$5$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  })))]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorView__Lcom_github_pwharned_clausula_extension_domain_AppError__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, error) {
  return $m_Lcom_raquo_laminar_api_package$().o.cF().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-popup clausula-error"), $m_Lcom_raquo_laminar_api_package$().o.gW().am(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, ("Error: " + $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorMessage__Lcom_github_pwharned_clausula_extension_domain_AppError__T($thiz, error)), $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)])), $m_Lcom_raquo_laminar_api_package$().o.hY().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bl.bJ("clausula-btn-dismiss"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Close", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().i1($m_Lcom_raquo_laminar_api_package$().o.gR(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$6$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  })))]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorMessage__Lcom_github_pwharned_clausula_extension_domain_AppError__T($thiz, error) {
  return (($m_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$() === error) ? "Anki is not running" : (($m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$() === error) ? "No word found" : (($m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$() === error) ? "Could not extract sentence" : (($m_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$() === error) ? "Unsupported language" : (($m_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$() === error) ? "Card already exists" : ((error instanceof $c_Lcom_github_pwharned_clausula_extension_domain_ApiError) ? error.eK : error.h()))))));
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$() {
}
$h_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$.prototype = $p;
$p.sq = (function(container) {
  var island = $m_Lcom_raquo_laminar_api_package$().o.cF().am(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.sD().or("fixed"), $m_Lcom_raquo_laminar_api_package$().o.tG().or("999999"), $m_Lcom_raquo_laminar_api_package$().o.sj().jG(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().h8.dh, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => (x$1$2.os() + "px"))), $m_s_None$()), $m_s_$less$colon$less$().hy), $m_Lcom_raquo_laminar_api_package$().o.ts().jG(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().h8.dh, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$1) => ((x$1$2$1.ot() + 20.0) + "px"))), $m_s_None$()), $m_s_$less$colon$less$().hy), $m_Lcom_raquo_laminar_api_package$().o.rk().jG(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP.dh, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => {
    var x$1 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState();
    if (((x$1 === null) ? (x$1$2$2 === null) : x$1.g(x$1$2$2))) {
      return "none";
    } else {
      return "block";
    }
  })), $m_s_None$()), $m_s_$less$colon$less$().hy), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().qO(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().aP.dh, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$3) => {
    var x$2 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState();
    if (((x$2 === null) ? (x$1$2$3 === null) : x$2.g(x$1$2$3))) {
      $m_Lcom_raquo_laminar_api_package$();
      return new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
    var x$3 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Loading__Lcom_github_pwharned_clausula_extension_PopupState();
    if (((x$3 === null) ? (x$1$2$3 === null) : x$3.g(x$1$2$3))) {
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__loadingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this);
    }
    if ((x$1$2$3 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview)) {
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__previewView__T__T__Lcom_github_pwharned_clausula_extension_domain_Language__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, x$1$2$3.eJ, x$1$2$3.eI, x$1$2$3.eH);
    }
    var x$5 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
    if (((x$5 === null) ? (x$1$2$3 === null) : x$5.g(x$1$2$3))) {
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__creatingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this);
    }
    if ((x$1$2$3 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Created)) {
      var $x_1 = x$1$2$3;
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__createdView__J__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $x_1.gt, $x_1.gu);
    }
    if ((x$1$2$3 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed)) {
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorView__Lcom_github_pwharned_clausula_extension_domain_AppError__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, x$1$2$3.fD);
    }
    throw new $c_s_MatchError(x$1$2$3);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().mN, (void 0)))]));
  $m_Lcom_raquo_laminar_api_package$();
  new $c_Lcom_raquo_laminar_nodes_RootNode(container, island);
});
var $d_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$, "com.github.pwharned.clausula.extension.islands.HoverPopupIsland$", ({
  dZ: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$;
function $m_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$)) {
    $n_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$ = new $c_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$;
}
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().i(1, "com.raquo.airstream.core.InternalObserver", ({
  aw: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).kg() + "@") + $thiz.i());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.cL();
  return ((x === (void 0)) ? $thiz.cD() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().pT(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))), $m_s_PartialFunction$().hA, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.pT = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.rO = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  e2: 1
}));
var $n_Lcom_raquo_airstream_core_Observer$;
function $m_Lcom_raquo_airstream_core_Observer$() {
  if ((!$n_Lcom_raquo_airstream_core_Observer$)) {
    $n_Lcom_raquo_airstream_core_Observer$ = new $c_Lcom_raquo_airstream_core_Observer$();
  }
  return $n_Lcom_raquo_airstream_core_Observer$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_ObserverList$() {
}
$p = $c_Lcom_raquo_airstream_core_ObserverList$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_ObserverList$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_ObserverList$() {
}
$h_Lcom_raquo_airstream_core_ObserverList$.prototype = $p;
$p.pv = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  e5: 1
}));
var $n_Lcom_raquo_airstream_core_ObserverList$;
function $m_Lcom_raquo_airstream_core_ObserverList$() {
  if ((!$n_Lcom_raquo_airstream_core_ObserverList$)) {
    $n_Lcom_raquo_airstream_core_ObserverList$ = new $c_Lcom_raquo_airstream_core_ObserverList$();
  }
  return $n_Lcom_raquo_airstream_core_ObserverList$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Signal$() {
  this.eP = 0;
  this.eP = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.pn = (function() {
  if ((this.eP === 2147483647)) {
    this.eP = 1;
  } else {
    this.eP = ((1 + this.eP) | 0);
  }
  return this.eP;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  e6: 1
}));
var $n_Lcom_raquo_airstream_core_Signal$;
function $m_Lcom_raquo_airstream_core_Signal$() {
  if ((!$n_Lcom_raquo_airstream_core_Signal$)) {
    $n_Lcom_raquo_airstream_core_Signal$ = new $c_Lcom_raquo_airstream_core_Signal$();
  }
  return $n_Lcom_raquo_airstream_core_Signal$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction(code) {
  this.ig = null;
  this.kP = null;
  this.ih = 0;
  this.ig = code;
  this.kP = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().gY();
  this.ih = ((x === (void 0)) ? 1 : ((1 + x.ih) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().hd === (-1)) || (this.ih > $m_Lcom_raquo_airstream_core_Transaction$().hd))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().cq(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().hd));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().b8) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().e6.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jI(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  e7: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.hd = 0;
  this.kQ = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.hd = 1000;
  this.kQ = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.oK = (function(transaction) {
  try {
    transaction.ig.c(transaction);
    var x = transaction.kP;
    if ((x !== (void 0))) {
      while (x.tT()) {
        x.tM().tX(transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cq(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  e8: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.fQ.length | 0) === 0)) {
    if ((($thiz.e6.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
        while ((($thiz.e6.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jI($thiz.e6.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
      while ((($thiz.fQ.length | 0) > 0)) {
        var callback = $thiz.fQ.shift();
        try {
          callback.c(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().cq(e$2);
        }
      }
      while ((($thiz.e6.length | 0) > 0)) {
        var _trx = $thiz.e6.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jI(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.b8 = false;
  this.fQ = null;
  this.e6 = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.b8 = false;
  this.fQ = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_F1.r().C)([])));
  this.e6 = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
$p.qs = (function(callback) {
  this.fQ.push(callback);
});
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  e9: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.e7.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.he.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.he.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.e7.set(parent, newChildren);
  }
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O($thiz, parent) {
  var maybeParentChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var x = (((maybeParentChildren === (void 0)) || ((maybeParentChildren.length | 0) > 0)) ? maybeParentChildren : (void 0));
  if ((x === (void 0))) {
    return (void 0);
  } else {
    var nextChild = x.shift();
    if (((x.length | 0) === 0)) {
      (!(!$thiz.e7.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.he = null;
  this.e7 = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.he = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.e7 = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.jI = (function(newTransaction) {
  var x = this.gY();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().oK(newTransaction);
    this.rn(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.rn = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.gY();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().n(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.sH(transaction$tailLocal1);
    transaction$tailLocal1.ig = $m_Lcom_raquo_airstream_core_Transaction$().kQ;
    var maybeNextTransaction = this.gY();
    if ($m_sr_BoxesRunTime$().n(maybeNextTransaction, (void 0))) {
      if (((this.e7.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.e7.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.eq + (transactions.length | 0)) | 0);
          numChildren.eq = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.eq) + " children for ") + (this.e7.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().oK(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.sH = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().n(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.gY();
      if ((!$m_sr_BoxesRunTime$().n(maybeParentTransaction, (void 0)))) {
        doneTransaction$tailLocal1 = maybeParentTransaction;
      } else {
        return (void 0);
      }
    } else {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, maybeNextChildTrx);
      return (void 0);
    }
  }
});
$p.gY = (function() {
  return this.he[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  ea: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
function $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$)) {
    $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.df.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.df.splice(index, 1);
    if ((!$thiz.bL.d())) {
      subscription.pq();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.hi.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.hi.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.ls = null;
  this.df = null;
  this.eR = false;
  this.hi = null;
  this.bL = null;
  this.eS = 0;
  this.ls = onAccessAfterKilled;
  this.df = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.eR = true;
  this.hi = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.bL = $m_s_None$();
  this.eS = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.ou = (function() {
  if ((!(!this.bL.d()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.ls);
      this.bL = new $c_s_Some(newOwner);
      this.eR = false;
      this.eS = 0;
      var i = 0;
      var originalNumSubs = (this.df.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.eS) | 0);
        this.df[ix].pp(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.eR = true;
      this.eS = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.b8 || (!when))) {
      f();
    } else {
      this$4.b8 = true;
      try {
        f();
      } finally {
        this$4.b8 = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.rf = (function() {
  if ((!this.bL.d())) {
    this.eR = false;
    var arr = this.df;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].pq();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.bL;
    if ((!this$4.d())) {
      this$4.x().pk();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.eR = true;
    this.bL = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.qM = (function(subscription, prepend) {
  if (prepend) {
    this.eS = ((1 + this.eS) | 0);
    this.df.unshift(subscription);
  } else {
    this.df.push(subscription);
  }
  var this$1 = this.bL;
  if ((!this$1.d())) {
    var x0 = this$1.x();
    subscription.pp(x0);
  }
});
$p.sS = (function(subscription) {
  if (this.eR) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.hi.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  eh: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.hj = null;
  this.lt = null;
  this.hk = null;
  this.hj = dynamicOwner;
  this.lt = activate;
  this.hk = $m_s_None$();
  dynamicOwner.qM(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.i5 = (function() {
  this.hj.sS(this);
});
$p.pp = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.hk = this.lt.c(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.b8 || (!when))) {
    f();
  } else {
    this$2.b8 = true;
    try {
      f();
    } finally {
      this$2.b8 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.pq = (function() {
  var this$1 = this.hk;
  if ((!this$1.d())) {
    this$1.x().i5();
    this.hk = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  ei: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = $p;
$p.h6 = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => new $c_s_Some(activate.c(owner)))), prepend);
});
$p.pF = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => {
    activate.c(owner);
    return $m_s_None$();
  })), prepend);
});
$p.tj = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h6(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  ej: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.oL($m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.fz();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.fz().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.fz().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.fz().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.fz().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.iq)) {
    $thiz.lw.M();
    $thiz.iq = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.lx = null;
  this.lw = null;
  this.iq = false;
  this.lx = owner;
  this.lw = cleanup;
  this.iq = false;
  owner.ps(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.i5 = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.lx, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  el: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.ly = null;
  this.lz = null;
  this.dg = null;
  this.e9 = false;
  this.ly = activate;
  this.lz = deactivate;
  this.dg = $m_s_None$();
  this.e9 = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.sb = (function() {
  var this$1 = this.dg;
  return ((!this$1.d()) && (!this$1.x().hj.bL.d()));
});
$p.tb = (function(nextOwner) {
  if (this.e9) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.dg;
  if ((!this$1.d())) {
    var x0 = this$1.x();
    var x$2 = x0.hj;
    var $x_1 = ((nextOwner === null) ? (x$2 === null) : (nextOwner === x$2));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.sb() && (!nextOwner.bL.d()))) {
      this.e9 = true;
    }
    var this$3 = this.dg;
    if ((!this$3.d())) {
      this$3.x().i5();
      this.dg = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h6(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((parentOwner) => {
      if ((!this.e9)) {
        this.ly.M();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        if ((!this.e9)) {
          this.lz.M();
        }
      })));
    })), false);
    this.dg = new $c_s_Some(newPilotSubscription);
    this.e9 = false;
  }
});
$p.r1 = (function() {
  if (this.e9) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.dg;
  if ((!this$1.d())) {
    this$1.x().i5();
  }
  this.dg = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  em: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$() {
}
$p = $c_Lcom_raquo_airstream_state_Var$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$() {
}
$h_Lcom_raquo_airstream_state_Var$.prototype = $p;
$p.jN = (function(initial) {
  return new $c_Lcom_raquo_airstream_state_SourceVar(new $c_s_util_Success(initial));
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$, "com.raquo.airstream.state.Var$", ({
  eq: 1
}));
var $n_Lcom_raquo_airstream_state_Var$;
function $m_Lcom_raquo_airstream_state_Var$() {
  if ((!$n_Lcom_raquo_airstream_state_Var$)) {
    $n_Lcom_raquo_airstream_state_Var$ = new $c_Lcom_raquo_airstream_state_Var$();
  }
  return $n_Lcom_raquo_airstream_state_Var$;
}
/** @constructor */
function $c_Lcom_raquo_ew_JsArray$() {
}
$p = $c_Lcom_raquo_ew_JsArray$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_ew_JsArray$;
/** @constructor */
function $h_Lcom_raquo_ew_JsArray$() {
}
$h_Lcom_raquo_ew_JsArray$.prototype = $p;
$p.bb = (function(items) {
  return [...$m_sjsr_Compat$().pH(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  et: 1
}));
var $n_Lcom_raquo_ew_JsArray$;
function $m_Lcom_raquo_ew_JsArray$() {
  if ((!$n_Lcom_raquo_ew_JsArray$)) {
    $n_Lcom_raquo_ew_JsArray$ = new $c_Lcom_raquo_ew_JsArray$();
  }
  return $n_Lcom_raquo_ew_JsArray$;
}
/** @constructor */
function $c_Lcom_raquo_ew_JsArray$RichJsArray$() {
}
$p = $c_Lcom_raquo_ew_JsArray$RichJsArray$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_ew_JsArray$RichJsArray$;
/** @constructor */
function $h_Lcom_raquo_ew_JsArray$RichJsArray$() {
}
$h_Lcom_raquo_ew_JsArray$RichJsArray$.prototype = $p;
$p.s1 = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.rE = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  eu: 1
}));
var $n_Lcom_raquo_ew_JsArray$RichJsArray$;
function $m_Lcom_raquo_ew_JsArray$RichJsArray$() {
  if ((!$n_Lcom_raquo_ew_JsArray$RichJsArray$)) {
    $n_Lcom_raquo_ew_JsArray$RichJsArray$ = new $c_Lcom_raquo_ew_JsArray$RichJsArray$();
  }
  return $n_Lcom_raquo_ew_JsArray$RichJsArray$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_DomApi$() {
  this.lL = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.rd($m_Lcom_raquo_laminar_api_package$().o.tl().tm());
  this.lL = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.qN = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.R instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
  }
});
$p.sO = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.R instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
  }
});
$p.s6 = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.R instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
  }
});
$p.s5 = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.R instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
  }
});
$p.sV = (function(parent, newChild, oldChild) {
  try {
    parent.replaceChild(newChild, oldChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.R instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
  }
});
$p.sf = (function(node, ancestor) {
  var node$tailLocal1 = node;
  while (true) {
    if ((node$tailLocal1.parentNode !== null)) {
      var effectiveParentNode = node$tailLocal1.parentNode;
    } else {
      var maybeShadowHost = node$tailLocal1.host;
      var effectiveParentNode = ((maybeShadowHost === (void 0)) ? null : maybeShadowHost);
    }
    if ((effectiveParentNode === null)) {
      return false;
    }
    if ($m_sr_BoxesRunTime$().n(ancestor, effectiveParentNode)) {
      return true;
    }
    node$tailLocal1 = effectiveParentNode;
  }
});
$p.qB = (function(element, listener) {
  element.addEventListener(listener.eX.hn.ho, listener.iF, listener.iG);
});
$p.sP = (function(element, listener) {
  element.removeEventListener(listener.eX.hn.ho, listener.iF, listener.iG);
});
$p.rc = (function(tag) {
  return document.createElement(tag.iP);
});
$p.rT = (function(element, attr) {
  var x = this.rU(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.iA.jX(x));
});
$p.rU = (function(element, attr) {
  var domValue = element.be.getAttributeNS(null, attr.fT);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.t8 = (function(element, attr, value) {
  this.t9(element, attr, attr.iA.jY(value));
});
$p.t9 = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.sQ(element, attr);
  } else {
    element.be.setAttribute(attr.fT, domValue);
  }
});
$p.sQ = (function(element, attr) {
  element.be.removeAttribute(attr.fT);
});
$p.ta = (function(element, styleProp, value) {
  var ref = element.be;
  var styleCssName = styleProp.eb;
  var prefixes = styleProp.ec;
  var styleValue = ((value === null) ? null : value);
  if ((styleValue === null)) {
    prefixes.bc(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.bc(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.t7 = (function(element, style, value) {
  var ref = element.be;
  var styleCssName = style.eb;
  var prefixes = style.ec;
  var styleValue = ((value === null) ? null : $dp_toString__T(value));
  if ((styleValue === null)) {
    prefixes.bc(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.bc(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.rd = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.mS);
});
$p.rW = (function(element, attr) {
  var x = this.rX(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.iB.jX(x));
});
$p.rX = (function(element, attr) {
  var $x_2 = element.kz();
  var this$1 = attr.hq;
  var $x_1 = $x_2.getAttributeNS((this$1.d() ? null : this$1.x()), attr.iC);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.tc = (function(element, attr, value) {
  this.td(element, attr, attr.iB.jY(value));
});
$p.td = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.sT(element, attr);
  } else {
    var this$1 = attr.hq;
    if (this$1.d()) {
      element.kz().setAttribute(attr.hp, domValue);
    } else {
      var x0 = this$1.x();
      element.kz().setAttributeNS(x0, attr.hp, domValue);
    }
  }
});
$p.sT = (function(element, attr) {
  var $x_1 = element.kz();
  var this$1 = attr.hq;
  $x_1.removeAttributeNS((this$1.d() ? null : this$1.x()), attr.iC);
});
$p.rb = (function(text) {
  return document.createComment(text);
});
$p.re = (function(text) {
  return document.createTextNode(text);
});
$p.sc = (function(element) {
  return $m_sc_StringOps$().jU(element.tagName, 45);
});
$p.rh = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.oP(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.oP = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if (($m_sc_StringOps$(), (id !== ""))) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = (($m_sc_StringOps$(), (classes !== "")) ? ("." + classes.replace(this.lL, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.rg = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  ev: 1
}));
var $n_Lcom_raquo_laminar_DomApi$;
function $m_Lcom_raquo_laminar_DomApi$() {
  if ((!$n_Lcom_raquo_laminar_DomApi$)) {
    $n_Lcom_raquo_laminar_DomApi$ = new $c_Lcom_raquo_laminar_DomApi$();
  }
  return $n_Lcom_raquo_laminar_DomApi$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_Seq(seq, scalaArray, jsArray) {
  this.iw = null;
  this.lM = null;
  this.iv = null;
  this.iw = seq;
  this.lM = scalaArray;
  this.iv = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.bc = (function(f) {
  if ((this.iw !== null)) {
    this.iw.bc(f);
  } else if ((this.iv !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().rE(this.iv, $m_sjs_js_Any$().gK(f));
  } else {
    $m_sc_ArrayOps$().rH(this.lM, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  ew: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_Seq$() {
  $n_Lcom_raquo_laminar_Seq$ = this;
  $m_sci_Nil$();
}
$p = $c_Lcom_raquo_laminar_Seq$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq$;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq$() {
}
$h_Lcom_raquo_laminar_Seq$.prototype = $p;
var $d_Lcom_raquo_laminar_Seq$ = new $TypeData().i($c_Lcom_raquo_laminar_Seq$, "com.raquo.laminar.Seq$", ({
  ex: 1
}));
var $n_Lcom_raquo_laminar_Seq$;
function $m_Lcom_raquo_laminar_Seq$() {
  if ((!$n_Lcom_raquo_laminar_Seq$)) {
    $n_Lcom_raquo_laminar_Seq$ = new $c_Lcom_raquo_laminar_Seq$();
  }
  return $n_Lcom_raquo_laminar_Seq$;
}
function $f_Lcom_raquo_laminar_api_AirstreamAliases__$init$__V($thiz) {
  $m_Lcom_raquo_airstream_core_Observer$();
  $m_Lcom_raquo_airstream_core_AirstreamError$();
  $thiz.hl = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.pV = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    _$1.mE.be.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cc.bL.d()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((c) => {
      if (ignoreNextActivation.hM) {
        var ev$5 = false;
        ignoreNextActivation.hM = ev$5;
      } else {
        fn.c(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().pF(element.cc, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element$2) => ((owner) => {
      activate.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.hm = null;
  this.mt = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.hm = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.mt = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  eG: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.lW = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.bl = $thiz.lW;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().hm);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.fT, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().rT(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().t8(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.pU = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().hm, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.hp, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().rW(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().tc(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.mu = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().o.pR();
  $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().o.kv()])));
  $m_Lcom_raquo_laminar_api_package$().o.pR();
  $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().o.kv(), $m_Lcom_raquo_laminar_api_package$().o.sz()])));
  $m_Lcom_raquo_laminar_api_package$().o.qZ();
  $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().o.kv(), $m_Lcom_raquo_laminar_api_package$().o.gR()])));
  this.mu = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  f0: 1
}));
var $n_Lcom_raquo_laminar_inputs_InputController$;
function $m_Lcom_raquo_laminar_inputs_InputController$() {
  if ((!$n_Lcom_raquo_laminar_inputs_InputController$)) {
    $n_Lcom_raquo_laminar_inputs_InputController$ = new $c_Lcom_raquo_laminar_inputs_InputController$();
  }
  return $n_Lcom_raquo_laminar_inputs_InputController$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_ChildInserter$() {
}
$p = $c_Lcom_raquo_laminar_inserters_ChildInserter$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_ChildInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_ChildInserter$() {
}
$h_Lcom_raquo_laminar_inserters_ChildInserter$.prototype = $p;
$p.qO = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((ctx, owner, hooks) => {
    if ((!ctx.fS)) {
      ctx.p1();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.tn(maybeLastSeenChild.fg, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.fg = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.tn = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.fS)) {
    ctx.p1();
  }
  var elem = ctx.eT;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().n(maybeLastSeenChild.an(), ctx.eV.an().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().s7(ctx.eU, newChildNode, ctx.eV, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().sU(ctx.eU, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = ((elem$1 - 1) | 0);
    elem$1 = ev$4;
  }
  ctx.sR(newChildNode);
  ctx.ea.clear();
  ctx.ea.set(newChildNode.an(), newChildNode);
  ctx.eT = 1;
});
var $d_Lcom_raquo_laminar_inserters_ChildInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildInserter$, "com.raquo.laminar.inserters.ChildInserter$", ({
  f1: 1
}));
var $n_Lcom_raquo_laminar_inserters_ChildInserter$;
function $m_Lcom_raquo_laminar_inserters_ChildInserter$() {
  if ((!$n_Lcom_raquo_laminar_inserters_ChildInserter$)) {
    $n_Lcom_raquo_laminar_inserters_ChildInserter$ = new $c_Lcom_raquo_laminar_inserters_ChildInserter$();
  }
  return $n_Lcom_raquo_laminar_inserters_ChildInserter$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, extraNodeCount, extraNodesMap) {
  this.eU = null;
  this.eV = null;
  this.fS = false;
  this.eT = 0;
  this.ea = null;
  this.eU = parentNode;
  this.eV = sentinelNode;
  this.fS = strictMode;
  this.eT = extraNodeCount;
  this.ea = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.p1 = (function() {
  if ((this.fS || (this.eT !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().rg(this.eU.be)));
  }
  if ((this.ea === null)) {
    this.ea = new Map();
  }
  if ((!(!(!(this.eV.an() instanceof Comment))))) {
    var contentNode = this.eV;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().s6(this.eU.be, newSentinelNode.iI, contentNode.an());
    this.eV = newSentinelNode;
    this.eT = 1;
    this.ea.set(contentNode.an(), contentNode);
  }
  this.fS = true;
});
$p.sR = (function(after) {
  var elem = this.eT;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = after.an().nextSibling;
    if ((prevChildRef === null)) {
      var ev$3 = 0;
      elem$1 = ev$3;
    } else {
      var maybePrevChild = this.ea.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        var ev$4 = 0;
        elem$1 = ev$4;
      } else if ((maybePrevChild !== (void 0))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().sN(this.eU, maybePrevChild);
        var ev$5 = ((elem$1 - 1) | 0);
        elem$1 = ev$5;
      }
    }
  }
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  f4: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_InsertContext$() {
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext$() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext$.prototype = $p;
$p.sX = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gv(parentNode, sentinelNode, hooks);
  return this.ty(parentNode, sentinelNode, strictMode);
});
$p.ty = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  f5: 1
}));
var $n_Lcom_raquo_laminar_inserters_InsertContext$;
function $m_Lcom_raquo_laminar_inserters_InsertContext$() {
  if ((!$n_Lcom_raquo_laminar_inserters_InsertContext$)) {
    $n_Lcom_raquo_laminar_inserters_InsertContext$ = new $c_Lcom_raquo_laminar_inserters_InsertContext$();
  }
  return $n_Lcom_raquo_laminar_inserters_InsertContext$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$() {
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$.prototype = $p;
$p.po = (function(items, separator) {
  if ((items === "")) {
    return $m_sci_Nil$();
  } else {
    var this$10 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => {
      $m_sc_StringOps$();
      return (_$1 !== "");
    })));
    $m_sci_List$();
    return $m_sci_Nil$().ky(this$10);
  }
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  f8: 1
}));
var $n_Lcom_raquo_laminar_keys_CompositeKey$;
function $m_Lcom_raquo_laminar_keys_CompositeKey$() {
  if ((!$n_Lcom_raquo_laminar_keys_CompositeKey$)) {
    $n_Lcom_raquo_laminar_keys_CompositeKey$ = new $c_Lcom_raquo_laminar_keys_CompositeKey$();
  }
  return $n_Lcom_raquo_laminar_keys_CompositeKey$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, processor) {
  this.hn = null;
  this.mD = false;
  this.mC = false;
  this.mB = null;
  this.hn = eventProp;
  this.mD = shouldUseCapture;
  this.mC = shouldBePassive;
  this.mB = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  fc: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor$() {
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor$() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor$.prototype = $p;
$p.i1 = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  fd: 1
}));
var $n_Lcom_raquo_laminar_keys_EventProcessor$;
function $m_Lcom_raquo_laminar_keys_EventProcessor$() {
  if ((!$n_Lcom_raquo_laminar_keys_EventProcessor$)) {
    $n_Lcom_raquo_laminar_keys_EventProcessor$ = new $c_Lcom_raquo_laminar_keys_EventProcessor$();
  }
  return $n_Lcom_raquo_laminar_keys_EventProcessor$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_Key() {
}
$p = $c_Lcom_raquo_laminar_keys_Key.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_Key;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_Key() {
}
$h_Lcom_raquo_laminar_keys_Key.prototype = $p;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr$() {
  this.pX = null;
  this.pY = null;
  this.pZ = null;
  this.q0 = null;
  this.pX = "http://www.w3.org/2000/svg";
  this.pY = "http://www.w3.org/1999/xlink";
  this.pZ = "http://www.w3.org/XML/1998/namespace";
  this.q0 = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.ss = (function(namespace) {
  switch (namespace) {
    case "svg": {
      return "http://www.w3.org/2000/svg";
      break;
    }
    case "xlink": {
      return "http://www.w3.org/1999/xlink";
      break;
    }
    case "xml": {
      return "http://www.w3.org/XML/1998/namespace";
      break;
    }
    case "xmlns": {
      return "http://www.w3.org/2000/xmlns/";
      break;
    }
    default: {
      throw new $c_s_MatchError(namespace);
    }
  }
});
var $d_Lcom_raquo_laminar_keys_SvgAttr$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr$, "com.raquo.laminar.keys.SvgAttr$", ({
  fh: 1
}));
var $n_Lcom_raquo_laminar_keys_SvgAttr$;
function $m_Lcom_raquo_laminar_keys_SvgAttr$() {
  if ((!$n_Lcom_raquo_laminar_keys_SvgAttr$)) {
    $n_Lcom_raquo_laminar_keys_SvgAttr$ = new $c_Lcom_raquo_laminar_keys_SvgAttr$();
  }
  return $n_Lcom_raquo_laminar_keys_SvgAttr$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_MountContext(thisNode, owner) {
  this.mE = null;
  this.iD = null;
  this.mE = thisNode;
  this.iD = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  fi: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.q1 = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.q1 = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  fn: 1
}));
var $n_Lcom_raquo_laminar_modifiers_Modifier$;
function $m_Lcom_raquo_laminar_modifiers_Modifier$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_Modifier$)) {
    $n_Lcom_raquo_laminar_modifiers_Modifier$ = new $c_Lcom_raquo_laminar_modifiers_Modifier$();
  }
  return $n_Lcom_raquo_laminar_modifiers_Modifier$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  this.mN = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.mN = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  fr: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
function $m_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableNode$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$() {
  this.bx = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.bx = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => _$4.tq())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  fw: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableText$;
function $m_Lcom_raquo_laminar_modifiers_RenderableText$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableText$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableText$ = new $c_Lcom_raquo_laminar_modifiers_RenderableText$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableText$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ParentNode$() {
}
$p = $c_Lcom_raquo_laminar_nodes_ParentNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ParentNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ParentNode$() {
}
$h_Lcom_raquo_laminar_nodes_ParentNode$.prototype = $p;
$p.gv = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.eF(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pr(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().qN(parent.an(), child.an());
  if (appended) {
    child.eA(nextParent);
  }
  return appended;
});
$p.sN = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().n(child.an().parentNode, parent.an())) {
    child.eF($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().sO(parent.an(), child.an());
    child.eA($m_s_None$());
  }
  return removed;
});
$p.s7 = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.eF(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pr(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().s5(parent.an(), newChild.an(), referenceChild.an());
  newChild.eA(nextParent);
  return inserted;
});
$p.sU = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.jR().br(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.eF($m_s_None$());
      newChild.eF(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.pr(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().sV(parent.an(), newChild.an(), oldChild.an());
      if (replaced) {
        oldChild.eA($m_s_None$());
        newChild.eA(newChildNextParent);
      }
    }
  }
  return replaced;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  fz: 1
}));
var $n_Lcom_raquo_laminar_nodes_ParentNode$;
function $m_Lcom_raquo_laminar_nodes_ParentNode$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ParentNode$)) {
    $n_Lcom_raquo_laminar_nodes_ParentNode$ = new $c_Lcom_raquo_laminar_nodes_ParentNode$();
  }
  return $n_Lcom_raquo_laminar_nodes_ParentNode$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$() {
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = $p;
$p.tx = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h6(element.cc, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  fB: 1
}));
var $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
function $m_Lcom_raquo_laminar_nodes_ReactiveElement$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ReactiveElement$)) {
    $n_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $c_Lcom_raquo_laminar_nodes_ReactiveElement$();
  }
  return $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildReceiver$() {
}
$p = $c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = $p;
var $d_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildReceiver$, "com.raquo.laminar.receivers.ChildReceiver$", ({
  fF: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
}
var $d_jl_Runnable = new $TypeData().i(1, "java.lang.Runnable", ({
  aZ: 1
}));
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().cp("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
  var trace = [];
  var i = 0;
  while ((i < (lines.length | 0))) {
    var line = lines[i];
    if ((line !== "")) {
      var mtch = NormalizedFrameLine.exec(line);
      if ((mtch !== null)) {
        var classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, mtch[1]);
        var $x_5 = classAndMethodName[0];
        var $x_4 = classAndMethodName[1];
        var $x_3 = mtch[2];
        var x$2 = mtch[3];
        var $x_2 = parseInt(x$2);
        var x$3 = mtch[4];
        var $x_1 = trace.push(new $c_jl_StackTraceElement($x_5, $x_4, $x_3, ($x_2 | 0), ((x$3 !== (void 0)) ? (parseInt(x$3) | 0) : (-1))));
      } else {
        (trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1), (-1))) | 0);
      }
    }
    i = ((1 + i) | 0);
  }
  var len = (trace.length | 0);
  var result = new ($d_jl_StackTraceElement.r().C)(len);
  i = 0;
  while ((i < len)) {
    result.a[i] = trace[i];
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractClassMethod__T__O($thiz, functionName) {
  var PatBC = $m_jl_StackTrace$StringRE$().cp("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().cp("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().cp("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().cp("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().cp("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
  var matchBC = PatBC.exec(functionName);
  var matchBCOrS = ((matchBC !== null) ? matchBC : PatS.exec(functionName));
  if ((matchBCOrS !== null)) {
    return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchBCOrS[1]), $p_jl_StackTrace$__decodeMethodName__T__T($thiz, matchBCOrS[2])];
  } else {
    var matchCT = PatCT.exec(functionName);
    var matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchCTOrN[1]), "<init>"];
    } else {
      var matchM = PatM.exec(functionName);
      return ((matchM !== null) ? [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchM[1]), "<clinit>"] : ["<jscode>", functionName]);
    }
  }
}
function $p_jl_StackTrace$__decodeClassName__T__T($thiz, encodedName) {
  var dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  if ((!(!$m_jl_Utils$Cache$().di.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.bX) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    var index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        var key = ("T" + index);
        var value = ("scala_Tuple" + index);
        dict[key] = value;
      }
      var key$1 = ("F" + index);
      var value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0);
    }
    $thiz.iT = dict;
    $thiz.bX = (((1 | $thiz.bX) << 24) >> 24);
  }
  return $thiz.iT;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.bX) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.iT);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.bX) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.iU = dict;
    $thiz.bX = (((2 | $thiz.bX) << 24) >> 24);
  }
  return $thiz.iU;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.bX) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.iU);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.bX) << 24) >> 24) === 0)) {
    $thiz.iS = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.bX = (((4 | $thiz.bX) << 24) >> 24);
  }
  return $thiz.iS;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.bX) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.iS);
}
function $p_jl_StackTrace$__decodeMethodName__T__T($thiz, encodedName) {
  if ((!(!encodedName.startsWith("init___")))) {
    return "<init>";
  } else {
    var methodNameLen = (encodedName.indexOf("__") | 0);
    return ((methodNameLen < 0) ? encodedName : encodedName.substring(0, methodNameLen));
  }
}
function $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, e) {
  return ((!(!(!(!(!e))))) ? [] : ((!(!(!(!(e.arguments && e.stack))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : ((!(!(!(!(e.stack && e.sourceURL))))) ? $p_jl_StackTrace$__extractSafari__O__O($thiz, e) : ((!(!(!(!(e.stack && e.number))))) ? $p_jl_StackTrace$__extractIE__O__O($thiz, e) : ((!(!(!(!(e.stack && e.fileName))))) ? $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) : ((!(!(!(!(e.message && e["opera#sourceloc"]))))) ? ((!(!(!(!(!e.stacktrace))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : ((!(!(!(!((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length)))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e))) : ((!(!(!(!((e.message && e.stack) && e.stacktrace))))) ? ((!(!(!(!(e.stacktrace.indexOf("called from line") < 0.0))))) ? $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)) : ((!(!(!(!(e.stack && (!e.fileName)))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : $p_jl_StackTrace$__extractOther__O__O($thiz, e)))))))));
}
function $p_jl_StackTrace$__extractChrome__O__O($thiz, e) {
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().cp("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().bK("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().bK("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().bK("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().bK("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bK("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().bK("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().bK("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().bK("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().bK("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bK("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bK("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bK("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bK("Line (\\d+).*script (?:in )?(\\S+)", "i");
  var lines = e.message.split("\n");
  var result = [];
  var i = 2;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      (result.push(((("{anonymous}()@" + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bK("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[3];
      var fnName = ((x !== (void 0)) ? x : "{anonymous}");
      (result.push(((((fnName + "()@") + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cp("^(.*)@(.+):(\\d+)$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[1];
      var fnName = ((x !== (void 0)) ? (x + "()") : "global code");
      (result.push(((((fnName + "@") + mtch[2]) + ":") + mtch[3])) | 0);
    }
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera11__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cp("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var location = ((((mtch[4] + ":") + mtch[1]) + ":") + mtch[2]);
      var x$3 = mtch[2];
      var fnName0 = ((x$3 !== (void 0)) ? x$3 : "global code");
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().cp("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().cp("<anonymous function>"), "{anonymous}");
      (result.push(((fnName + "@") + location)) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOther__O__O($thiz, e) {
  return [];
}
function $p_jl_StackTrace$__loop$1__I__T__T($thiz, i, encodedName$1) {
  while (true) {
    if ((i < ($p_jl_StackTrace$__compressedPrefixes__O($thiz).length | 0))) {
      var prefix = $p_jl_StackTrace$__compressedPrefixes__O($thiz)[i];
      if ((!(!encodedName$1.startsWith(prefix)))) {
        var dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        return (("" + dict[prefix]) + encodedName$1.substring(prefix.length));
      } else {
        i = ((1 + i) | 0);
      }
    } else {
      return ((!(!encodedName$1.startsWith("L"))) ? encodedName$1.substring(1) : encodedName$1);
    }
  }
}
/** @constructor */
function $c_jl_StackTrace$() {
  this.iT = null;
  this.iU = null;
  this.iS = null;
  this.bX = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.rx = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  g9: 1
}));
var $n_jl_StackTrace$;
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$();
  }
  return $n_jl_StackTrace$;
}
/** @constructor */
function $c_jl_StackTrace$StringRE$() {
}
$p = $c_jl_StackTrace$StringRE$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$StringRE$;
/** @constructor */
function $h_jl_StackTrace$StringRE$() {
}
$h_jl_StackTrace$StringRE$.prototype = $p;
$p.cp = (function(this$) {
  return new RegExp(this$);
});
$p.bK = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  ga: 1
}));
var $n_jl_StackTrace$StringRE$;
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$();
  }
  return $n_jl_StackTrace$StringRE$;
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.f2 = null;
  $n_jl_System$Streams$ = this;
  this.f2 = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  ge: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.21.0";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.iV = null;
  this.mU = null;
  $n_jl_System$SystemProperties$ = this;
  this.iV = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.mU = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.kf = (function(key, default$1) {
  if ((this.iV !== null)) {
    var dict = this.iV;
    return ((!(!$m_jl_Utils$Cache$().di.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.mU.kf(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  gf: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_ThreadLocal() {
  this.iW = false;
  this.mV = null;
  this.iW = false;
}
$p = $c_jl_ThreadLocal.prototype = new $h_O();
$p.constructor = $c_jl_ThreadLocal;
/** @constructor */
function $h_jl_ThreadLocal() {
}
$h_jl_ThreadLocal.prototype = $p;
$p.x = (function() {
  if ((!this.iW)) {
    this.h4(null);
  }
  return this.mV;
});
$p.h4 = (function(o) {
  this.mV = o;
  this.iW = true;
});
var $d_jl_ThreadLocal = new $TypeData().i($c_jl_ThreadLocal, "java.lang.ThreadLocal", ({
  gh: 1
}));
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.di = null;
  $n_jl_Utils$Cache$ = this;
  this.di = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  gi: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c6)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  c6: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.bs = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? ((array.a.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  gj: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_Ljava_net_URLEncoder$() {
  this.mZ = null;
  this.n0 = null;
  $n_Ljava_net_URLEncoder$ = this;
  var r = new $ac_Z(128);
  r.a[46] = true;
  r.a[45] = true;
  r.a[42] = true;
  r.a[95] = true;
  var i = 48;
  while ((i <= 57)) {
    var value = i;
    r.a[value] = true;
    i = ((1 + i) | 0);
  }
  var i$1 = 65;
  while ((i$1 <= 90)) {
    var value$1 = i$1;
    r.a[value$1] = true;
    i$1 = ((1 + i$1) | 0);
  }
  var i$2 = 97;
  while ((i$2 <= 122)) {
    var value$2 = i$2;
    r.a[value$2] = true;
    i$2 = ((1 + i$2) | 0);
  }
  this.mZ = r;
  var r$2 = new ($d_T.r().C)(256);
  var i$3 = 0;
  while ((i$3 < 256)) {
    var value$3 = i$3;
    r$2.a[value$3] = (("%" + $cToS("0123456789ABCDEF".charCodeAt(((value$3 >>> 4) | 0)))) + $cToS("0123456789ABCDEF".charCodeAt((15 & value$3))));
    i$3 = ((1 + i$3) | 0);
  }
  this.n0 = r$2;
}
$p = $c_Ljava_net_URLEncoder$.prototype = new $h_O();
$p.constructor = $c_Ljava_net_URLEncoder$;
/** @constructor */
function $h_Ljava_net_URLEncoder$() {
}
$h_Ljava_net_URLEncoder$.prototype = $p;
$p.rq = (function(s, enc) {
  var this$1 = $m_Ljava_nio_charset_Charset$();
  var dict = $p_Ljava_nio_charset_Charset$__CharsetMap__O(this$1);
  var key = enc.toLowerCase();
  if ((!(!(!$m_jl_Utils$Cache$().di.call(dict, key))))) {
    throw new $c_Ljava_io_UnsupportedEncodingException(enc);
  }
  return this.rr(s, $m_Ljava_nio_charset_Charset$().rF(enc));
});
$p.rr = (function(s, charset) {
  var EncodedAsIs = this.mZ;
  var len = s.length;
  var i = 0;
  while (true) {
    if ((i !== len)) {
      var index = i;
      var c = s.charCodeAt(index);
      var $x_1 = ((c < 128) && EncodedAsIs.a[c]);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      i = ((1 + i) | 0);
    } else {
      break;
    }
  }
  if ((i === len)) {
    return s;
  } else {
    var PercentEncoded = this.n0;
    var charBuffer = $m_Ljava_nio_CharBuffer$().tD(s, 0, s.length);
    var encoder = charset.ks().sB($m_Ljava_nio_charset_CodingErrorAction$().j1);
    var bufferArray = new $ac_B($doubleToInt(Math.fround((Math.fround(((1 + ((len - i) | 0)) | 0)) * encoder.g0))));
    var buffer = $m_Ljava_nio_HeapByteBuffer$().tE(bufferArray, 0, bufferArray.a.length, 0, bufferArray.a.length, false);
    var endIndex = i;
    var elem = s.substring(0, endIndex);
    var elem$1 = null;
    elem$1 = elem;
    while ((i !== len)) {
      var startOfChunk = i;
      var firstChar = s.charCodeAt(startOfChunk);
      i = ((1 + i) | 0);
      if (((firstChar < 128) && EncodedAsIs.a[firstChar])) {
        while (true) {
          if ((i !== len)) {
            var index$1 = i;
            var c$1 = s.charCodeAt(index$1);
            var $x_2 = ((c$1 < 128) && EncodedAsIs.a[c$1]);
          } else {
            var $x_2 = false;
          }
          if ($x_2) {
            i = ((1 + i) | 0);
          } else {
            break;
          }
        }
        var $x_3 = elem$1;
        var endIndex$1 = i;
        elem$1 = (("" + $x_3) + s.substring(startOfChunk, endIndex$1));
      } else if ((firstChar === 32)) {
        elem$1 = (elem$1 + "+");
      } else {
        while (true) {
          if ((i !== len)) {
            var index$2 = i;
            var c$2 = s.charCodeAt(index$2);
            var $x_4 = ((c$2 !== 32) && (!((c$2 < 128) && EncodedAsIs.a[c$2])));
          } else {
            var $x_4 = false;
          }
          if ($x_4) {
            i = ((1 + i) | 0);
          } else {
            break;
          }
        }
        $c_Ljava_nio_Buffer.prototype.km.call(charBuffer, i);
        $c_Ljava_nio_Buffer.prototype.aH.call(charBuffer, startOfChunk);
        $c_Ljava_nio_Buffer.prototype.t2.call(buffer);
        encoder.sY().rs(charBuffer, buffer, true);
        var end = buffer.s;
        var i$1 = 0;
        while ((i$1 < end)) {
          var value = i$1;
          elem$1 = (("" + elem$1) + PercentEncoded.a[(255 & bufferArray.a[value])]);
          i$1 = ((1 + i$1) | 0);
        }
      }
    }
    return elem$1;
  }
});
var $d_Ljava_net_URLEncoder$ = new $TypeData().i($c_Ljava_net_URLEncoder$, "java.net.URLEncoder$", ({
  gk: 1
}));
var $n_Ljava_net_URLEncoder$;
function $m_Ljava_net_URLEncoder$() {
  if ((!$n_Ljava_net_URLEncoder$)) {
    $n_Ljava_net_URLEncoder$ = new $c_Ljava_net_URLEncoder$();
  }
  return $n_Ljava_net_URLEncoder$;
}
function $ct_Ljava_nio_Buffer__I__($thiz, _capacity) {
  $thiz.cP = _capacity;
  $thiz.G = $thiz.cP;
  $thiz.s = 0;
  $thiz.cs = (-1);
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_Buffer() {
  this.cP = 0;
  this.G = 0;
  this.s = 0;
  this.cs = 0;
}
$p = $c_Ljava_nio_Buffer.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_Buffer;
/** @constructor */
function $h_Ljava_nio_Buffer() {
}
$h_Ljava_nio_Buffer.prototype = $p;
$p.aH = (function(newPosition) {
  if (((newPosition < 0) || (newPosition > this.G))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  this.s = newPosition;
  if ((this.cs > newPosition)) {
    this.cs = (-1);
  }
  return this;
});
$p.km = (function(newLimit) {
  if (((newLimit < 0) || (newLimit > this.cP))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  this.G = newLimit;
  if ((this.s > newLimit)) {
    this.s = newLimit;
    if ((this.cs > newLimit)) {
      this.cs = (-1);
    }
  }
  return this;
});
$p.t2 = (function() {
  this.cs = (-1);
  this.s = 0;
  return this;
});
$p.h = (function() {
  return ((((((($objectClassName(this) + "[pos=") + this.s) + " lim=") + this.G) + " cap=") + this.cP) + "]");
});
/** @constructor */
function $c_Ljava_nio_CharBuffer$() {
}
$p = $c_Ljava_nio_CharBuffer$.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_CharBuffer$;
/** @constructor */
function $h_Ljava_nio_CharBuffer$() {
}
$h_Ljava_nio_CharBuffer$.prototype = $p;
$p.tD = (function(csq, start, end) {
  return $m_Ljava_nio_StringCharBuffer$().tC(csq, 0, $dp_length__I(csq), start, ((end - start) | 0));
});
var $d_Ljava_nio_CharBuffer$ = new $TypeData().i($c_Ljava_nio_CharBuffer$, "java.nio.CharBuffer$", ({
  gl: 1
}));
var $n_Ljava_nio_CharBuffer$;
function $m_Ljava_nio_CharBuffer$() {
  if ((!$n_Ljava_nio_CharBuffer$)) {
    $n_Ljava_nio_CharBuffer$ = new $c_Ljava_nio_CharBuffer$();
  }
  return $n_Ljava_nio_CharBuffer$;
}
/** @constructor */
function $c_Ljava_nio_HeapByteBuffer$() {
}
$p = $c_Ljava_nio_HeapByteBuffer$.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_HeapByteBuffer$;
/** @constructor */
function $h_Ljava_nio_HeapByteBuffer$() {
}
$h_Ljava_nio_HeapByteBuffer$.prototype = $p;
$p.tE = (function(array, arrayOffset, capacity, initialPosition, initialLength, isReadOnly) {
  if ((((arrayOffset < 0) || (capacity < 0)) || (((arrayOffset + capacity) | 0) > array.a.length))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  var initialLimit = ((initialPosition + initialLength) | 0);
  if ((((initialPosition < 0) || (initialLength < 0)) || (initialLimit > capacity))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  return new $c_Ljava_nio_HeapByteBuffer(capacity, array, arrayOffset, initialPosition, initialLimit, isReadOnly, false);
});
var $d_Ljava_nio_HeapByteBuffer$ = new $TypeData().i($c_Ljava_nio_HeapByteBuffer$, "java.nio.HeapByteBuffer$", ({
  gn: 1
}));
var $n_Ljava_nio_HeapByteBuffer$;
function $m_Ljava_nio_HeapByteBuffer$() {
  if ((!$n_Ljava_nio_HeapByteBuffer$)) {
    $n_Ljava_nio_HeapByteBuffer$ = new $c_Ljava_nio_HeapByteBuffer$();
  }
  return $n_Ljava_nio_HeapByteBuffer$;
}
/** @constructor */
function $c_Ljava_nio_StringCharBuffer$() {
}
$p = $c_Ljava_nio_StringCharBuffer$.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_StringCharBuffer$;
/** @constructor */
function $h_Ljava_nio_StringCharBuffer$() {
}
$h_Ljava_nio_StringCharBuffer$.prototype = $p;
$p.tC = (function(csq, csqOffset, capacity, initialPosition, initialLength) {
  if ((((csqOffset < 0) || (capacity < 0)) || (((csqOffset + capacity) | 0) > $dp_length__I(csq)))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  var initialLimit = ((initialPosition + initialLength) | 0);
  if ((((initialPosition < 0) || (initialLength < 0)) || (initialLimit > capacity))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  return new $c_Ljava_nio_StringCharBuffer(capacity, csq, csqOffset, initialPosition, initialLimit);
});
var $d_Ljava_nio_StringCharBuffer$ = new $TypeData().i($c_Ljava_nio_StringCharBuffer$, "java.nio.StringCharBuffer$", ({
  gq: 1
}));
var $n_Ljava_nio_StringCharBuffer$;
function $m_Ljava_nio_StringCharBuffer$() {
  if ((!$n_Ljava_nio_StringCharBuffer$)) {
    $n_Ljava_nio_StringCharBuffer$ = new $c_Ljava_nio_StringCharBuffer$();
  }
  return $n_Ljava_nio_StringCharBuffer$;
}
function $p_Ljava_nio_charset_Charset$__CharsetMap$lzycompute__O($thiz) {
  if (((((2 & $thiz.hr) << 24) >> 24) === 0)) {
    var m = ({});
    var array = $p_Ljava_nio_charset_Charset$__allSJSCharsets__O($thiz);
    var len = (array.length | 0);
    var i = 0;
    while ((i !== len)) {
      var t = array[i];
      var this$3 = t.by;
      var key = this$3.toLowerCase();
      m[key] = t;
      var aliases = t.ct;
      var end = aliases.a.length;
      var i$1 = 0;
      while ((i$1 < end)) {
        var value = i$1;
        var this$7 = aliases.a[value];
        var key$1 = this$7.toLowerCase();
        m[key$1] = t;
        i$1 = ((1 + i$1) | 0);
      }
      i = ((1 + i) | 0);
    }
    $thiz.iY = m;
    $thiz.hr = (((2 | $thiz.hr) << 24) >> 24);
  }
  return $thiz.iY;
}
function $p_Ljava_nio_charset_Charset$__CharsetMap__O($thiz) {
  return (((((2 & $thiz.hr) << 24) >> 24) === 0) ? $p_Ljava_nio_charset_Charset$__CharsetMap$lzycompute__O($thiz) : $thiz.iY);
}
function $p_Ljava_nio_charset_Charset$__allSJSCharsets__O($thiz) {
  return [$m_Ljava_nio_charset_US\uff3fASCII$(), $m_Ljava_nio_charset_ISO\uff3f8859\uff3f1$(), $m_Ljava_nio_charset_UTF\uff3f8$(), $m_Ljava_nio_charset_UTF\uff3f16BE$(), $m_Ljava_nio_charset_UTF\uff3f16LE$(), $m_Ljava_nio_charset_UTF\uff3f16$()];
}
/** @constructor */
function $c_Ljava_nio_charset_Charset$() {
  this.iY = null;
  this.hr = 0;
}
$p = $c_Ljava_nio_charset_Charset$.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_charset_Charset$;
/** @constructor */
function $h_Ljava_nio_charset_Charset$() {
}
$h_Ljava_nio_charset_Charset$.prototype = $p;
$p.rF = (function(charsetName) {
  var dict = $p_Ljava_nio_charset_Charset$__CharsetMap__O(this);
  var key = charsetName.toLowerCase();
  if ((!(!(!$m_jl_Utils$Cache$().di.call(dict, key))))) {
    throw new $c_Ljava_nio_charset_UnsupportedCharsetException(charsetName);
  }
  return dict[key];
});
var $d_Ljava_nio_charset_Charset$ = new $TypeData().i($c_Ljava_nio_charset_Charset$, "java.nio.charset.Charset$", ({
  gr: 1
}));
var $n_Ljava_nio_charset_Charset$;
function $m_Ljava_nio_charset_Charset$() {
  if ((!$n_Ljava_nio_charset_Charset$)) {
    $n_Ljava_nio_charset_Charset$ = new $c_Ljava_nio_charset_Charset$();
  }
  return $n_Ljava_nio_charset_Charset$;
}
function $ct_Ljava_nio_charset_CharsetEncoder__Ljava_nio_charset_Charset__F__F__AB__($thiz, cs, _averageBytesPerChar, _maxBytesPerChar, _replacement) {
  $thiz.g0 = _maxBytesPerChar;
  $thiz.f3 = _replacement;
  $thiz.fZ = $m_Ljava_nio_charset_CodingErrorAction$().hs;
  $thiz.f4 = $m_Ljava_nio_charset_CodingErrorAction$().hs;
  $thiz.dl = 0;
  return $thiz;
}
function $ct_Ljava_nio_charset_CharsetEncoder__Ljava_nio_charset_Charset__F__F__($thiz, cs, _averageBytesPerChar, _maxBytesPerChar) {
  $ct_Ljava_nio_charset_CharsetEncoder__Ljava_nio_charset_Charset__F__F__AB__($thiz, cs, _averageBytesPerChar, _maxBytesPerChar, new $ac_B(new Int8Array([63])));
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_charset_CharsetEncoder() {
  this.g0 = 0.0;
  this.f3 = null;
  this.fZ = null;
  this.f4 = null;
  this.dl = 0;
}
$p = $c_Ljava_nio_charset_CharsetEncoder.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_charset_CharsetEncoder;
/** @constructor */
function $h_Ljava_nio_charset_CharsetEncoder() {
}
$h_Ljava_nio_charset_CharsetEncoder.prototype = $p;
$p.sB = (function(newAction) {
  if ((newAction === null)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "null CodingErrorAction");
  }
  this.f4 = newAction;
  return this;
});
$p.rs = (function(in$1, out, endOfInput) {
  if (((this.dl === 3) || ((!endOfInput) && (this.dl === 2)))) {
    throw $ct_jl_IllegalStateException__(new $c_jl_IllegalStateException());
  }
  this.dl = (endOfInput ? 2 : 1);
  while (true) {
    try {
      var result1 = this.jZ(in$1, out);
    } catch (e) {
      var result1;
      if ((e instanceof $c_Ljava_nio_BufferOverflowException)) {
        throw new $c_Ljava_nio_charset_CoderMalfunctionError(e);
      } else if ((e instanceof $c_Ljava_nio_BufferUnderflowException)) {
        throw new $c_Ljava_nio_charset_CoderMalfunctionError(e);
      } else {
        throw e;
      }
    }
    if ((result1.g1 === 0)) {
      var remaining = ((in$1.G - in$1.s) | 0);
      if ((endOfInput && (remaining > 0))) {
        var this$1 = $m_Ljava_nio_charset_CoderResult$();
        switch (remaining) {
          case 1: {
            var result2 = this$1.dn;
            break;
          }
          case 2: {
            var result2 = this$1.n3;
            break;
          }
          case 3: {
            var result2 = this$1.n4;
            break;
          }
          case 4: {
            var result2 = this$1.n5;
            break;
          }
          default: {
            var result2 = this$1.sg(remaining);
          }
        }
      } else {
        var result2 = result1;
      }
    } else {
      var result2 = result1;
    }
    if (((result2.g1 === 0) || (result2.g1 === 1))) {
      return result2;
    } else {
      var action = ((result2.g1 === 3) ? this.f4 : this.fZ);
      var x = $m_Ljava_nio_charset_CodingErrorAction$().j1;
      if (((x === null) ? (action === null) : (x === action))) {
        if ((((out.G - out.s) | 0) < this.f3.a.length)) {
          return $m_Ljava_nio_charset_CoderResult$().cu;
        } else {
          var src = this.f3;
          out.sG(src, 0, src.a.length);
          var $x_1 = in$1.s;
          var l = result2.iZ;
          if ((l < 0)) {
            throw $ct_jl_UnsupportedOperationException__(new $c_jl_UnsupportedOperationException());
          }
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, (($x_1 + l) | 0));
        }
      } else {
        var x$3 = $m_Ljava_nio_charset_CodingErrorAction$().hs;
        if (((x$3 === null) ? (action === null) : (x$3 === action))) {
          return result2;
        } else {
          var x$5 = $m_Ljava_nio_charset_CodingErrorAction$().n9;
          if (((x$5 === null) ? (action === null) : (x$5 === action))) {
            var $x_2 = in$1.s;
            var l$1 = result2.iZ;
            if ((l$1 < 0)) {
              throw $ct_jl_UnsupportedOperationException__(new $c_jl_UnsupportedOperationException());
            }
            $c_Ljava_nio_Buffer.prototype.aH.call(in$1, (($x_2 + l$1) | 0));
          } else {
            throw new $c_jl_AssertionError(action);
          }
        }
      }
    }
  }
});
$p.sY = (function() {
  this.dl = 0;
  this.pc();
  return this;
});
$p.pc = (function() {
});
/** @constructor */
function $c_Ljava_nio_charset_CoderResult(kind, _length) {
  this.g1 = 0;
  this.iZ = 0;
  this.g1 = kind;
  this.iZ = _length;
}
$p = $c_Ljava_nio_charset_CoderResult.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_charset_CoderResult;
/** @constructor */
function $h_Ljava_nio_charset_CoderResult() {
}
$h_Ljava_nio_charset_CoderResult.prototype = $p;
var $d_Ljava_nio_charset_CoderResult = new $TypeData().i($c_Ljava_nio_charset_CoderResult, "java.nio.charset.CoderResult", ({
  gt: 1
}));
/** @constructor */
function $c_Ljava_nio_charset_CoderResult$() {
  this.cu = null;
  this.dm = null;
  this.dn = null;
  this.n3 = null;
  this.n4 = null;
  this.n5 = null;
  this.j0 = null;
  this.n6 = null;
  this.n7 = null;
  this.q2 = null;
  this.q3 = null;
  this.q4 = null;
  $n_Ljava_nio_charset_CoderResult$ = this;
  this.cu = new $c_Ljava_nio_charset_CoderResult(1, (-1));
  this.dm = new $c_Ljava_nio_charset_CoderResult(0, (-1));
  this.dn = new $c_Ljava_nio_charset_CoderResult(2, 1);
  this.n3 = new $c_Ljava_nio_charset_CoderResult(2, 2);
  this.n4 = new $c_Ljava_nio_charset_CoderResult(2, 3);
  this.n5 = new $c_Ljava_nio_charset_CoderResult(2, 4);
  this.j0 = [];
  this.n6 = new $c_Ljava_nio_charset_CoderResult(3, 1);
  this.n7 = new $c_Ljava_nio_charset_CoderResult(3, 2);
  this.q2 = new $c_Ljava_nio_charset_CoderResult(3, 3);
  this.q3 = new $c_Ljava_nio_charset_CoderResult(3, 4);
  this.q4 = [];
}
$p = $c_Ljava_nio_charset_CoderResult$.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_charset_CoderResult$;
/** @constructor */
function $h_Ljava_nio_charset_CoderResult$() {
}
$h_Ljava_nio_charset_CoderResult$.prototype = $p;
$p.sg = (function(length) {
  var x = this.j0[length];
  if ((x !== (void 0))) {
    return x;
  } else {
    var result = new $c_Ljava_nio_charset_CoderResult(2, length);
    $m_Ljava_nio_charset_CoderResult$().j0[length] = result;
    return result;
  }
});
var $d_Ljava_nio_charset_CoderResult$ = new $TypeData().i($c_Ljava_nio_charset_CoderResult$, "java.nio.charset.CoderResult$", ({
  gu: 1
}));
var $n_Ljava_nio_charset_CoderResult$;
function $m_Ljava_nio_charset_CoderResult$() {
  if ((!$n_Ljava_nio_charset_CoderResult$)) {
    $n_Ljava_nio_charset_CoderResult$ = new $c_Ljava_nio_charset_CoderResult$();
  }
  return $n_Ljava_nio_charset_CoderResult$;
}
/** @constructor */
function $c_Ljava_nio_charset_CodingErrorAction(name) {
  this.n8 = null;
  this.n8 = name;
}
$p = $c_Ljava_nio_charset_CodingErrorAction.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_charset_CodingErrorAction;
/** @constructor */
function $h_Ljava_nio_charset_CodingErrorAction() {
}
$h_Ljava_nio_charset_CodingErrorAction.prototype = $p;
$p.h = (function() {
  return this.n8;
});
var $d_Ljava_nio_charset_CodingErrorAction = new $TypeData().i($c_Ljava_nio_charset_CodingErrorAction, "java.nio.charset.CodingErrorAction", ({
  gv: 1
}));
/** @constructor */
function $c_Ljava_nio_charset_CodingErrorAction$() {
  this.n9 = null;
  this.j1 = null;
  this.hs = null;
  $n_Ljava_nio_charset_CodingErrorAction$ = this;
  this.n9 = new $c_Ljava_nio_charset_CodingErrorAction("IGNORE");
  this.j1 = new $c_Ljava_nio_charset_CodingErrorAction("REPLACE");
  this.hs = new $c_Ljava_nio_charset_CodingErrorAction("REPORT");
}
$p = $c_Ljava_nio_charset_CodingErrorAction$.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_charset_CodingErrorAction$;
/** @constructor */
function $h_Ljava_nio_charset_CodingErrorAction$() {
}
$h_Ljava_nio_charset_CodingErrorAction$.prototype = $p;
var $d_Ljava_nio_charset_CodingErrorAction$ = new $TypeData().i($c_Ljava_nio_charset_CodingErrorAction$, "java.nio.charset.CodingErrorAction$", ({
  gw: 1
}));
var $n_Ljava_nio_charset_CodingErrorAction$;
function $m_Ljava_nio_charset_CodingErrorAction$() {
  if ((!$n_Ljava_nio_charset_CodingErrorAction$)) {
    $n_Ljava_nio_charset_CodingErrorAction$ = new $c_Ljava_nio_charset_CodingErrorAction$();
  }
  return $n_Ljava_nio_charset_CodingErrorAction$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.qV = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.a.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.a[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
$p.oW = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = ((a.a.length >>> 1) | 0);
  if ((((b.a.length >>> 1) | 0) !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a;
    var $x_2 = (i$1 << 1);
    var a$1_$_lo = $x_1[$x_2];
    var a$1_$_hi = $x_1[(($x_2 + 1) | 0)];
    var i$2 = i;
    var $x_3 = b.a;
    var $x_4 = (i$2 << 1);
    var b$1_$_lo = $x_3[$x_4];
    var b$1_$_hi = $x_3[(($x_4 + 1) | 0)];
    if ((!(((a$1_$_lo ^ b$1_$_lo) | (a$1_$_hi ^ b$1_$_hi)) === 0))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.k1 = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.oX = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.oV = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.oU = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.oY = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.V = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).ao.Q().ao.U(newLength);
  original.t(0, ret, 0, copyLength);
  return ret;
});
$p.a4 = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).ao.Q().ao.U(retLength);
  original.t(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  gH: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
/** @constructor */
function $c_ju_internal_MurmurHash3$() {
}
$p = $c_ju_internal_MurmurHash3$.prototype = new $h_O();
$p.constructor = $c_ju_internal_MurmurHash3$;
/** @constructor */
function $h_ju_internal_MurmurHash3$() {
}
$h_ju_internal_MurmurHash3$.prototype = $p;
$p.w = (function(hash, data) {
  var h = this.co(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.co = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a6 = (function(hash, length) {
  var hash$1 = (hash ^ length);
  var h = hash$1;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
var $d_ju_internal_MurmurHash3$ = new $TypeData().i($c_ju_internal_MurmurHash3$, "java.util.internal.MurmurHash3$", ({
  gK: 1
}));
var $n_ju_internal_MurmurHash3$;
function $m_ju_internal_MurmurHash3$() {
  if ((!$n_ju_internal_MurmurHash3$)) {
    $n_ju_internal_MurmurHash3$ = new $c_ju_internal_MurmurHash3$();
  }
  return $n_ju_internal_MurmurHash3$;
}
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.az, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().nm.exec($thiz.az);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var end = x.length;
      var i = 0;
      while ((i < end)) {
        var value = i;
        $thiz.P = ($thiz.P | $m_ju_regex_PatternCompiler$().pi(x.charCodeAt(value)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.P) !== 0)) {
      $thiz.P = (64 | $thiz.P);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var end$1 = x$1.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var value$1 = i$1;
        $thiz.P = ($thiz.P & (~$m_ju_regex_PatternCompiler$().pi(x$1.charCodeAt(value$1))));
        i$1 = ((1 + i$1) | 0);
      }
    }
    $thiz.b = (($thiz.b + m[0].length) | 0);
  }
}
function $p_ju_regex_PatternCompiler__literal__T__T($thiz, s) {
  var result = "";
  var len = s.length;
  var i = 0;
  while ((i !== len)) {
    var cp = $f_T__codePointAt__I__I(s, i);
    result = (("" + result) + $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp));
    i = ((i + ((cp >= 65536) ? 2 : 1)) | 0);
  }
  return result;
}
function $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp) {
  var s = $m_ju_regex_PatternCompiler$().ev(cp);
  if ((cp < 128)) {
    switch (cp) {
      case 94:
      case 36:
      case 92:
      case 46:
      case 42:
      case 43:
      case 63:
      case 40:
      case 41:
      case 91:
      case 93:
      case 123:
      case 125:
      case 124: {
        return ("\\" + s);
        break;
      }
      default: {
        return (((66 & $thiz.P) !== 2) ? s : (((((cp - 65) | 0) >>> 0) <= 25) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().ev(((32 + cp) | 0))) + "]") : (((((cp - 97) | 0) >>> 0) <= 25) ? ((("[" + $m_ju_regex_PatternCompiler$().ev(((cp - 32) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.az;
  var len = pattern.length;
  while (true) {
    if (($thiz.b !== len)) {
      switch (pattern.charCodeAt($thiz.b)) {
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          $thiz.b = ((1 + $thiz.b) | 0);
          continue;
          break;
        }
        case 35: {
          $thiz.kl();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.az;
  var len = pattern.length;
  var startOfRepeater = $thiz.b;
  var repeaterDispatchChar = ((startOfRepeater === len) ? 46 : pattern.charCodeAt(startOfRepeater));
  if (((((repeaterDispatchChar === 42) || (repeaterDispatchChar === 63)) || (repeaterDispatchChar === 43)) || (repeaterDispatchChar === 123))) {
    switch (compiledToken.charCodeAt(0)) {
      case 94:
      case 36: {
        var isTokenAnAssertion = true;
        break;
      }
      case 40: {
        var isTokenAnAssertion = ((compiledToken.charCodeAt(1) === 63) && (compiledToken.charCodeAt(2) !== 58));
        break;
      }
      case 92: {
        var c = compiledToken.charCodeAt(1);
        var isTokenAnAssertion = ((c === 66) || (c === 98));
        break;
      }
      default: {
        var isTokenAnAssertion = false;
      }
    }
    var wrappedToken = (isTokenAnAssertion ? (("(?:" + compiledToken) + ")") : compiledToken);
    var baseRepeater = $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar);
    if (($thiz.b !== len)) {
      switch (pattern.charCodeAt($thiz.b)) {
        case 43: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, wrappedToken, baseRepeater);
          break;
        }
        case 63: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return ((("" + wrappedToken) + baseRepeater) + "?");
          break;
        }
        default: {
          return (("" + wrappedToken) + baseRepeater);
        }
      }
    } else {
      return (("" + wrappedToken) + baseRepeater);
    }
  } else {
    return compiledToken;
  }
}
function $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar) {
  var pattern = $thiz.az;
  var startOfRepeater = $thiz.b;
  $thiz.b = ((1 + $thiz.b) | 0);
  if ((repeaterDispatchChar === 123)) {
    var len = pattern.length;
    if ((($thiz.b === len) || (!((((pattern.charCodeAt($thiz.b) - 48) | 0) >>> 0) <= 9)))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    while ((($thiz.b !== len) && ((((pattern.charCodeAt($thiz.b) - 48) | 0) >>> 0) <= 9))) {
      $thiz.b = ((1 + $thiz.b) | 0);
    }
    if (($thiz.b === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    if ((pattern.charCodeAt($thiz.b) === 44)) {
      $thiz.b = ((1 + $thiz.b) | 0);
      while ((($thiz.b !== len) && ((((pattern.charCodeAt($thiz.b) - 48) | 0) >>> 0) <= 9))) {
        $thiz.b = ((1 + $thiz.b) | 0);
      }
    }
    if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 125))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  return pattern.substring(startOfRepeater, $thiz.b);
}
function $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken, baseRepeater) {
  var end = ($thiz.bN.length | 0);
  var i = 0;
  while ((i < end)) {
    var value = i;
    var mapped = ($thiz.bN[value] | 0);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.bN[value] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = compiledToken.replace($m_ju_regex_PatternCompiler$().nn, ((arg1$2, arg2$2, arg3$2) => {
    var num = arg2$2.length;
    var t = ((num >>> 31) | 0);
    if (((((1 & ((num + t) | 0)) - t) | 0) === 0)) {
      return arg1$2;
    } else {
      var groupNumber = (parseInt(arg3$2, 10) | 0);
      return ((groupNumber > compiledGroupCountBeforeThisToken) ? (("" + arg2$2) + ((1 + groupNumber) | 0)) : arg1$2);
    }
  }));
  $thiz.bM = ((1 + $thiz.bM) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.az;
  var len = pattern.length;
  if ((((1 + $thiz.b) | 0) === len)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\ at end of pattern");
  }
  $thiz.b = ((1 + $thiz.b) | 0);
  var index = $thiz.b;
  var dispatchChar = pattern.charCodeAt(index);
  switch (dispatchChar) {
    case 100:
    case 68:
    case 104:
    case 72:
    case 115:
    case 83:
    case 118:
    case 86:
    case 119:
    case 87:
    case 112:
    case 80: {
      var cls = $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar);
      var x1$2 = cls.hx;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + cls.cv) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + cls.cv) + "}");
          break;
        }
        case 2: {
          return (("[" + cls.cv) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().i4(cls.cv);
          break;
        }
        default: {
          throw new $c_jl_AssertionError(x1$2);
        }
      }
      break;
    }
    case 98: {
      if ((pattern.substring($thiz.b, ((4 + $thiz.b) | 0)) === "b{g}")) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\b{g} is not supported");
      } else if (((320 & $thiz.P) !== 0)) {
        $thiz.fs("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.P) !== 0)) {
        $thiz.fs("\\B with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\B";
      }
      break;
    }
    case 65: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "^";
      break;
    }
    case 71: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\G in the middle of a pattern is not supported");
      break;
    }
    case 90: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return (("(?=" + (((1 & $thiz.P) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])")) + "?$)");
      break;
    }
    case 122: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "$";
      break;
    }
    case 82: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "(?:\r\n|[\n-\r\u0085\u2028\u2029])";
      break;
    }
    case 88: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\X is not supported");
      break;
    }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57: {
      var start = $thiz.b;
      var end = ((1 + start) | 0);
      while (true) {
        if (((end !== len) && ((((pattern.charCodeAt(end) - 48) | 0) >>> 0) <= 9))) {
          var s = pattern.substring(start, ((1 + end) | 0));
          var $x_1 = ((parseInt(s, 10) | 0) <= ((($thiz.bN.length | 0) - 1) | 0));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          end = ((1 + end) | 0);
        } else {
          break;
        }
      }
      var groupString = pattern.substring(start, end);
      var groupNumber = (parseInt(groupString, 10) | 0);
      if ((groupNumber > ((($thiz.bN.length | 0) - 1) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = ($thiz.bN[groupNumber] | 0);
      $thiz.b = end;
      return (("(?:\\" + compiledGroupNumber) + ")");
      break;
    }
    case 107: {
      $thiz.b = ((1 + $thiz.b) | 0);
      if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 60))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\k is not followed by '<' for named capturing group");
      }
      $thiz.b = ((1 + $thiz.b) | 0);
      var groupName = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
      var dict = $thiz.g2;
      if ((!(!(!$m_jl_Utils$Cache$().di.call(dict, groupName))))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = (dict[groupName] | 0);
      var compiledGroupNumber$2 = ($thiz.bN[groupNumber$2] | 0);
      $thiz.b = ((1 + $thiz.b) | 0);
      return (("(?:\\" + compiledGroupNumber$2) + ")");
      break;
    }
    case 81: {
      var start$2 = ((1 + $thiz.b) | 0);
      var end$2 = (pattern.indexOf("\\E", start$2) | 0);
      if ((end$2 < 0)) {
        $thiz.b = pattern.length;
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, pattern.substring(start$2));
      } else {
        $thiz.b = ((2 + end$2) | 0);
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, pattern.substring(start$2, end$2));
      }
      break;
    }
    default: {
      return $p_ju_regex_PatternCompiler__literal__I__T($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz));
    }
  }
}
function $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) {
  var pattern = $thiz.az;
  var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
  switch (x1) {
    case 48: {
      return $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz);
      break;
    }
    case 120: {
      return $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz);
      break;
    }
    case 117: {
      return $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz);
      break;
    }
    case 78: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\N is not supported");
      break;
    }
    case 97: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 7;
      break;
    }
    case 116: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 9;
      break;
    }
    case 110: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 10;
      break;
    }
    case 102: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 12;
      break;
    }
    case 114: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 13;
      break;
    }
    case 101: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 27;
      break;
    }
    case 99: {
      $thiz.b = ((1 + $thiz.b) | 0);
      if (($thiz.b === pattern.length)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal control escape sequence");
      }
      var cp = $f_T__codePointAt__I__I(pattern, $thiz.b);
      $thiz.b = (($thiz.b + ((cp >= 65536) ? 2 : 1)) | 0);
      return (64 ^ cp);
      break;
    }
    default: {
      if ((((((x1 - 65) | 0) >>> 0) <= 25) || ((((x1 - 97) | 0) >>> 0) <= 25))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal/unsupported escape sequence");
      }
      $thiz.b = (($thiz.b + ((x1 >= 65536) ? 2 : 1)) | 0);
      return x1;
    }
  }
}
function $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz) {
  var pattern = $thiz.az;
  var len = pattern.length;
  var start = $thiz.b;
  var d1 = ((((1 + start) | 0) < len) ? ((pattern.charCodeAt(((1 + start) | 0)) - 48) | 0) : (-1));
  if (((d1 >>> 0) > 7)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal octal escape sequence");
  }
  var d2 = ((((2 + start) | 0) < len) ? ((pattern.charCodeAt(((2 + start) | 0)) - 48) | 0) : (-1));
  if (((d2 >>> 0) > 7)) {
    $thiz.b = ((2 + $thiz.b) | 0);
    return d1;
  } else if ((d1 > 3)) {
    $thiz.b = ((3 + $thiz.b) | 0);
    return (((d1 << 3) + d2) | 0);
  } else {
    var d3 = ((((3 + start) | 0) < len) ? ((pattern.charCodeAt(((3 + start) | 0)) - 48) | 0) : (-1));
    if (((d3 >>> 0) > 7)) {
      $thiz.b = ((3 + $thiz.b) | 0);
      return (((d1 << 3) + d2) | 0);
    } else {
      $thiz.b = ((4 + $thiz.b) | 0);
      return (((((d1 << 6) + (d2 << 3)) | 0) + d3) | 0);
    }
  }
}
function $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz) {
  var pattern = $thiz.az;
  var len = pattern.length;
  var start = ((1 + $thiz.b) | 0);
  if (((start !== len) && (pattern.charCodeAt(start) === 123))) {
    var innerStart = ((1 + start) | 0);
    var innerEnd = (pattern.indexOf("}", innerStart) | 0);
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed hexadecimal escape sequence");
    }
    var cp = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, innerStart, innerEnd, "hexadecimal");
    $thiz.b = ((1 + innerEnd) | 0);
    return cp;
  } else {
    var cp$2 = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, ((2 + start) | 0), "hexadecimal");
    $thiz.b = ((2 + start) | 0);
    return cp$2;
  }
}
function $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz) {
  var pattern = $thiz.az;
  var start = ((1 + $thiz.b) | 0);
  var end = ((4 + start) | 0);
  var codeUnit = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, "Unicode");
  $thiz.b = end;
  var lowStart = ((2 + end) | 0);
  var lowEnd = ((4 + lowStart) | 0);
  if (((((-1024) & codeUnit) === 55296) && (pattern.substring(end, lowStart) === "\\u"))) {
    var low = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, lowStart, lowEnd, "Unicode");
    if ((((-1024) & low) === 56320)) {
      $thiz.b = lowEnd;
      return ((((64 + (1023 & codeUnit)) | 0) << 10) | (1023 & low));
    } else {
      return codeUnit;
    }
  } else {
    return codeUnit;
  }
}
function $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, nameForError) {
  var pattern = $thiz.az;
  var len = pattern.length;
  if (((end === start) || (end > len))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
  }
  var i = start;
  while ((i < end)) {
    var value = i;
    var c = pattern.charCodeAt(value);
    if ((!((((((c - 48) | 0) >>> 0) <= 9) || ((((c - 65) | 0) >>> 0) <= 5)) || ((((c - 97) | 0) >>> 0) <= 5)))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
    }
    i = ((1 + i) | 0);
  }
  if ((((end - start) | 0) > 6)) {
    var cp = 1114112;
  } else {
    var s = pattern.substring(start, end);
    var cp = (parseInt(s, 16) | 0);
  }
  if ((cp > 1114111)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Hexadecimal codepoint is too big");
  }
  return cp;
}
function $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar) {
  $thiz.b = ((1 + $thiz.b) | 0);
  switch (dispatchChar) {
    case 100:
    case 68: {
      var positive = $m_ju_regex_PatternCompiler$().nh;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().nk;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().ni;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().nl;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().nj;
      break;
    }
    case 112:
    case 80: {
      var positive = $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz);
      break;
    }
    default: {
      var positive;
      throw new $c_jl_AssertionError($bC(dispatchChar));
    }
  }
  return ((dispatchChar >= 97) ? positive : positive.st());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.az;
  var len = pattern.length;
  var start = $thiz.b;
  if ((start === len)) {
    var property = "?";
  } else if ((pattern.charCodeAt(start) === 123)) {
    var innerStart = ((1 + start) | 0);
    var innerEnd = (pattern.indexOf("}", innerStart) | 0);
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character family");
    }
    $thiz.b = innerEnd;
    var property = pattern.substring(innerStart, innerEnd);
  } else {
    var property = pattern.substring(start, ((1 + start) | 0));
  }
  var dict = $m_ju_regex_PatternCompiler$().j7;
  if ((!(!(!$m_jl_Utils$Cache$().di.call(dict, property))))) {
    $thiz.fs("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.P) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().j7;
  var result = dict$1[property2];
  $thiz.b = ((1 + $thiz.b) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.az;
  var len = pattern.length;
  $thiz.b = ((1 + $thiz.b) | 0);
  var isNegated = (($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 94));
  if (isNegated) {
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.P) === 2), isNegated);
  while (($thiz.b !== len)) {
    var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return builder.rD();
          break;
        }
        case 38: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if ((($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 38))) {
            $thiz.b = ((1 + $thiz.b) | 0);
            builder.tg();
            break matchResult;
          } else {
            $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, 38, len, pattern, builder);
            break matchResult;
          }
          break;
        }
        case 91: {
          $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(builder, $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz));
          break matchResult;
          break;
        }
        case 92: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if (($thiz.b === len)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal escape sequence");
          }
          var index$2 = $thiz.b;
          var c2 = pattern.charCodeAt(index$2);
          switch (c2) {
            case 100:
            case 68:
            case 104:
            case 72:
            case 115:
            case 83:
            case 118:
            case 86:
            case 119:
            case 87:
            case 112:
            case 80: {
              builder.qy($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
              break matchResult;
              break;
            }
            case 81: {
              $thiz.b = ((1 + $thiz.b) | 0);
              var fromIndex = $thiz.b;
              var end = (pattern.indexOf("\\E", fromIndex) | 0);
              if ((end < 0)) {
                $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
              }
              builder.qA(pattern, $thiz.b, end);
              $thiz.b = ((2 + end) | 0);
              break matchResult;
              break;
            }
            default: {
              $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz), len, pattern, builder);
              break matchResult;
            }
          }
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & $thiz.P) !== 0)) {
            $thiz.b = ((1 + $thiz.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & $thiz.P) !== 0)) {
            $thiz.kl();
            break matchResult;
          }
          break;
        }
      }
      $thiz.b = (($thiz.b + ((x1 >= 65536) ? 2 : 1)) | 0);
      $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, x1, len, pattern, builder);
    }
  }
  $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
}
function $p_ju_regex_PatternCompiler__compileGroup__T($thiz) {
  var pattern = $thiz.az;
  var len = pattern.length;
  var start = $thiz.b;
  if (((((1 + start) | 0) === len) || (pattern.charCodeAt(((1 + start) | 0)) !== 63))) {
    $thiz.b = ((1 + start) | 0);
    $thiz.bM = ((1 + $thiz.bM) | 0);
    $thiz.bN.push($thiz.bM);
    return (("(" + $thiz.gO(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var index$1 = ((2 + start) | 0);
    var c1 = pattern.charCodeAt(index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.b = ((3 + start) | 0);
      return ((("" + pattern.substring(start, ((3 + start) | 0))) + $thiz.gO(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var index$2 = ((3 + start) | 0);
      var c2 = pattern.charCodeAt(index$2);
      if ((((((c2 - 65) | 0) >>> 0) <= 25) || ((((c2 - 97) | 0) >>> 0) <= 25))) {
        $thiz.b = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.g2;
        if ((!(!$m_jl_Utils$Cache$().di.call(dict, name)))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.bM = ((1 + $thiz.bM) | 0);
        $thiz.bN.push($thiz.bM);
        var dict$1 = $thiz.g2;
        var value = ((($thiz.bN.length | 0) - 1) | 0);
        dict$1[name] = value;
        $thiz.b = ((1 + $thiz.b) | 0);
        return (("(" + $thiz.gO(true)) + ")");
      } else {
        if (((c2 !== 33) && (c2 !== 61))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.fs("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.b = ((3 + start) | 0);
      $thiz.bM = ((1 + $thiz.bM) | 0);
      var groupNumber = $thiz.bM;
      return (((("(?:(?=(" + $thiz.gO(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.az;
  var len = pattern.length;
  var start = $thiz.b;
  while (true) {
    if (($thiz.b !== len)) {
      var index = $thiz.b;
      var c = pattern.charCodeAt(index);
      var $x_1 = ((((((c - 65) | 0) >>> 0) <= 25) || ((((c - 97) | 0) >>> 0) <= 25)) || ((((c - 48) | 0) >>> 0) <= 9));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.b = ((1 + $thiz.b) | 0);
    } else {
      break;
    }
  }
  if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 62))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "named capturing group is missing trailing '>'");
  }
  return pattern.substring(start, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, startCodePoint, len$2, pattern$3, builder$1) {
  if (((4 & $thiz.P) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if ((($thiz.b !== len$2) && (pattern$3.charCodeAt($thiz.b) === 45))) {
    $thiz.b = ((1 + $thiz.b) | 0);
    if (((4 & $thiz.P) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.b === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I(pattern$3, $thiz.b);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      builder$1.hT(startCodePoint);
      builder$1.hT(45);
    } else {
      $thiz.b = (($thiz.b + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      builder$1.qz(startCodePoint, endCodePoint);
    }
  } else {
    builder$1.hT(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.az = null;
  this.P = 0;
  this.hw = false;
  this.b = 0;
  this.bM = 0;
  this.bN = null;
  this.g2 = null;
  this.az = pattern;
  this.P = flags;
  this.hw = false;
  this.b = 0;
  this.bM = 0;
  this.bN = [0];
  this.g2 = ({});
}
$p = $c_ju_regex_PatternCompiler.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $p;
$p.r5 = (function() {
  if (((256 & this.P) !== 0)) {
    this.P = (64 | this.P);
  }
  var isLiteral = ((16 & this.P) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.P) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.P) !== 0)) {
    this.fs("MULTILINE", "2018");
  }
  if (((256 & this.P) !== 0)) {
    this.fs("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.az);
  } else {
    if ((this.az.substring(this.b, ((2 + this.b) | 0)) === "\\G")) {
      this.hw = true;
      this.b = ((2 + this.b) | 0);
    }
    var jsPattern = this.gO(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().j6 ? "us" : "u");
  var jsFlags = (((66 & this.P) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.az, this.P, jsPattern, jsFlags, this.hw, (((this.bN.length | 0) - 1) | 0), this.bN, this.g2);
});
$p.fs = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$p.gO = (function(insideGroup) {
  var pattern = this.az;
  var len = pattern.length;
  var result = "";
  while ((this.b !== len)) {
    var dispatchCP = $f_T__codePointAt__I__I(pattern, this.b);
    matchResult: {
      switch (dispatchCP) {
        case 41: {
          if ((!insideGroup)) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unmatched closing ')'");
          }
          this.b = ((1 + this.b) | 0);
          return result;
          break;
        }
        case 124: {
          if ((this.hw && (!insideGroup))) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "\\G is not supported when there is an alternative at the top level");
          }
          this.b = ((1 + this.b) | 0);
          result = (result + "|");
          break matchResult;
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & this.P) !== 0)) {
            this.b = ((1 + this.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & this.P) !== 0)) {
            this.kl();
            break matchResult;
          }
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().ev(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.bM;
      switch (dispatchCP) {
        case 92: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileEscape__T(this);
          break;
        }
        case 91: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileCharacterClass__T(this);
          break;
        }
        case 40: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileGroup__T(this);
          break;
        }
        case 94: {
          this.b = ((1 + this.b) | 0);
          var compiledToken = "^";
          break;
        }
        case 36: {
          this.b = ((1 + this.b) | 0);
          var compiledToken = "$";
          break;
        }
        case 46: {
          this.b = ((1 + this.b) | 0);
          var rejected = (((32 & this.P) !== 0) ? "" : (((1 & this.P) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().i4(rejected);
          break;
        }
        default: {
          this.b = ((this.b + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
          var compiledToken = $p_ju_regex_PatternCompiler__literal__I__T(this, dispatchCP);
        }
      }
      result = (("" + result) + $p_ju_regex_PatternCompiler__compileRepeater__I__T__T(this, compiledGroupCountBeforeThisToken, compiledToken));
    }
  }
  if (insideGroup) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unclosed group");
  }
  return result;
});
$p.kl = (function() {
  var pattern = this.az;
  var len = pattern.length;
  while (true) {
    if ((this.b !== len)) {
      var index = this.b;
      var c = pattern.charCodeAt(index);
      var $x_1 = (!(((((c === 10) || (c === 13)) || (c === 133)) || (c === 8232)) || (c === 8233)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      this.b = ((1 + this.b) | 0);
    } else {
      break;
    }
  }
});
var $d_ju_regex_PatternCompiler = new $TypeData().i($c_ju_regex_PatternCompiler, "java.util.regex.PatternCompiler", ({
  gP: 1
}));
function $p_ju_regex_PatternCompiler$__featureTest__T__Z($thiz, flags) {
  try {
    new RegExp("", flags);
    return true;
  } catch (e) {
    return false;
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler$() {
  this.nm = null;
  this.nn = null;
  this.q9 = false;
  this.q8 = false;
  this.j6 = false;
  this.nh = null;
  this.q5 = null;
  this.nk = null;
  this.ni = null;
  this.q6 = null;
  this.nl = null;
  this.nj = null;
  this.q7 = null;
  this.j7 = null;
  this.qa = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.nm = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.nn = new RegExp("(\\\\+)(\\d+)", "g");
  this.q9 = true;
  this.q8 = true;
  this.j6 = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.nh = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.q5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.nk = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.ni = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.q6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.nl = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.nj = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.q7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
  var r = ({});
  var value = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-z");
  r.Lower = value;
  var value$1 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Z");
  r.Upper = value$1;
  var value$2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u007f");
  r.ASCII = value$2;
  var value$3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Za-z");
  r.Alpha = value$3;
  var value$4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  r.Digit = value$4;
  var value$5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Za-z");
  r.Alnum = value$5;
  var value$6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-/:-@[-`{-~");
  r.Punct = value$6;
  var value$7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-~");
  r.Graph = value$7;
  var value$8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, " -~");
  r.Print = value$8;
  var value$9 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t ");
  r.Blank = value$9;
  var value$10 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u001f\u007f");
  r.Cntrl = value$10;
  var value$11 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Fa-f");
  r.XDigit = value$11;
  var value$12 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  r.Space = value$12;
  this.j7 = r;
  this.qa = new RegExp("(?:^|_)[a-z]", "g");
}
$p = $c_ju_regex_PatternCompiler$.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $p;
$p.r4 = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).r5();
});
$p.pi = (function(c) {
  switch (c) {
    case 105: {
      return 2;
      break;
    }
    case 100: {
      return 1;
      break;
    }
    case 109: {
      return 8;
      break;
    }
    case 115: {
      return 32;
      break;
    }
    case 117: {
      return 64;
      break;
    }
    case 120: {
      return 4;
      break;
    }
    case 85: {
      return 256;
      break;
    }
    default: {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag");
    }
  }
});
$p.i4 = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().j6 ? "." : "[\\d\\D]"));
});
$p.ev = (function(codePoint) {
  return String.fromCodePoint(codePoint);
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().i($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  gQ: 1
}));
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
  }
  return $n_ju_regex_PatternCompiler$;
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.bY === "")) {
    $thiz.bY = alt;
  } else {
    $thiz.bY = (($thiz.bY + "|") + alt);
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.j9) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().i4($thiz.S);
    return (($thiz.bY === "") ? negThisSegment : (((("(?:(?!" + $thiz.bY) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.S === "") ? (($thiz.bY === "") ? "[^\\d\\D]" : (("(?:" + $thiz.bY) + ")")) : (($thiz.bY === "") ? (("[" + $thiz.S) + "]") : (((("(?:" + $thiz.bY) + "|[") + $thiz.S) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().ev(codePoint);
  return (((((((codePoint - 92) | 0) >>> 0) <= 1) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.j8 = false;
  this.j9 = false;
  this.g3 = null;
  this.bY = null;
  this.S = null;
  this.j8 = asciiCaseInsensitive;
  this.j9 = isNegated;
  this.g3 = "";
  this.bY = "";
  this.S = "";
}
$p = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $p;
$p.rD = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.g3 === "") ? conjunct : ((("(?:" + this.g3) + conjunct) + ")"));
});
$p.tg = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.g3 = (this.g3 + (this.j9 ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.bY = "";
  this.S = "";
});
$p.qy = (function(cls) {
  var x1 = cls.hx;
  switch (x1) {
    case 0: {
      this.S = ((this.S + ("\\p{" + cls.cv)) + "}");
      break;
    }
    case 1: {
      this.S = ((this.S + ("\\P{" + cls.cv)) + "}");
      break;
    }
    case 2: {
      this.S = (("" + this.S) + cls.cv);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().i4(cls.cv));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$p.qA = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I(str, i);
    this.hT(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$p.hT = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.S = (("" + s) + this.S);
  } else {
    this.S = (("" + this.S) + s);
  }
  if (this.j8) {
    if (((((codePoint - 65) | 0) >>> 0) <= 25)) {
      this.S = (("" + this.S) + $m_ju_regex_PatternCompiler$().ev(((32 + codePoint) | 0)));
    } else if (((((codePoint - 97) | 0) >>> 0) <= 25)) {
      this.S = (("" + this.S) + $m_ju_regex_PatternCompiler$().ev(((codePoint - 32) | 0)));
    }
  }
});
$p.qz = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.S = (s + this.S);
  } else {
    this.S = (this.S + s);
  }
  if (this.j8) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.S;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.S = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
    }
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.S;
      var start$3 = ((start$2 - 32) | 0);
      var end$3 = ((end$2 - 32) | 0);
      this.S = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().i($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
  gR: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.ja)) {
    $thiz.jb = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.hx), $thiz.cv);
    $thiz.ja = true;
  }
  return $thiz.jb;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.jb = null;
  this.hx = 0;
  this.cv = null;
  this.ja = false;
  this.hx = kind;
  this.cv = data;
}
$p = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $p;
$p.st = (function() {
  return ((!this.ja) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.jb);
});
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().i($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  gS: 1
}));
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sM(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sL(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rm(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rl(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().kc(value);
}
function $s_RTLong__fromUnsignedInt__I__J(value) {
  return $bL(value, 0);
}
function $s_RTLong__fromInt__I__J(value) {
  var hi = (value >> 31);
  return $bL(value, hi);
}
function $s_RTLong__clz__I__I__I(lo, hi) {
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(lo)) | 0));
}
function $s_RTLong__toFloat__I__I__F(lo, hi) {
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__I__I__D(lo, hi) {
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__I__I__I(lo, hi) {
  return lo;
}
function $s_RTLong__toString__I__I__T(lo, hi) {
  return $m_RTLong$().pK(lo, hi);
}
function $s_RTLong__bitsToDouble__I__I__O__D(lo, hi, fpBitsDataView) {
  fpBitsDataView.setInt32(0, lo, true);
  fpBitsDataView.setInt32(4, hi, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__I__I__I__I__J(alo, ahi, blo, bhi) {
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, bhi) + Math.imul(ahi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sub__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo - blo) | 0);
  var hi = ((((ahi - bhi) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sar__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : (hi >> n));
  var hi$1 = (((32 & n) === 0) ? (hi >> n) : (hi >> 31));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shr__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : ((hi >>> n) | 0));
  var hi$1 = (((32 & n) === 0) ? ((hi >>> n) | 0) : 0);
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shl__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (lo << n) : 0);
  var hi$1 = (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> (~n)) | 0) | (hi << n)) : (lo << n));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__xor__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo ^ blo);
  var hi = (ahi ^ bhi);
  return $bL(lo, hi);
}
function $s_RTLong__and__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo & blo);
  var hi = (ahi & bhi);
  return $bL(lo, hi);
}
function $s_RTLong__or__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo | blo);
  var hi = (ahi | bhi);
  return $bL(lo, hi);
}
function $s_RTLong__geu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__gtu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ltu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) !== 0);
}
function $s_RTLong__equals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) === 0);
}
/** @constructor */
function $c_RTLong$() {
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.pK = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = (+Math.floor((1.0E-9 * approxNum)));
    var approxRem = ((rlo - Math.imul(1000000000, (approxQuot | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = ((approxRem - 1000000000) | 0);
    }
    var this$7 = approxRem;
    var remStr = ("" + this$7);
    var $x_1 = approxQuot;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.kc = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    return $bL(0, (-2147483648));
  } else if ((value >= 9.223372036854776E18)) {
    return $bL((-1), 2147483647);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((2.3283064365386963E-10 * value) | 0.0);
    var hi = (((value < 0.0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return $bL(rawLo, hi);
  }
});
$p.rl = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  } else {
    var $x_1 = this.i8(rlo, rhi, rlo$1, rhi$1, true);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  }
});
$p.rm = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo, hi);
    }
  } else {
    return this.i8(alo, ahi, blo, bhi, true);
  }
});
$p.sL = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + ((((lo$2 & rlo$1) | ((lo$2 | rlo$1) & (~lo$3))) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((lo$2 - rlo$1) | 0);
      var hi$4 = ((((hi$2 - rhi$1) | 0) + ((((~lo$2) & rlo$1) | ((~(lo$2 ^ rlo$1)) & lo$4)) >> 31)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  } else {
    var $x_1 = this.i8(rlo, rhi, rlo$1, rhi$1, false);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if ((ahi < 0)) {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.sM = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + ((((lo$2 & blo) | ((lo$2 | blo) & (~lo$3))) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((lo$2 - blo) | 0);
      var hi$4 = ((((hi$2 - bhi) | 0) + ((((~lo$2) & blo) | ((~(lo$2 ^ blo)) & lo$4)) >> 31)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else {
    return this.i8(alo, ahi, blo, bhi, false);
  }
});
$p.i8 = (function(alo, ahi, blo, bhi, askQuotient) {
  var quot1 = 0;
  if ((bhi >= 0)) {
    var lo = (blo << 1);
    var hi = (((blo >>> 31) | 0) | (bhi << 1));
    if (((ahi === hi) ? ((alo >>> 0) >= (lo >>> 0)) : ((ahi >>> 0) > (hi >>> 0)))) {
      quot1 = 2;
      var lo$1 = ((alo - lo) | 0);
      var hi$1 = ((((ahi - hi) | 0) + ((((~alo) & lo) | ((~(alo ^ lo)) & lo$1)) >> 31)) | 0);
      var rem1_$_lo = lo$1;
      var rem1_$_hi = hi$1;
    } else {
      var rem1_$_lo = alo;
      var rem1_$_hi = ahi;
    }
  } else {
    var rem1_$_lo = alo;
    var rem1_$_hi = ahi;
  }
  var rem1LTUb = ((rem1_$_hi === bhi) ? ((rem1_$_lo >>> 0) < (blo >>> 0)) : ((rem1_$_hi >>> 0) < (bhi >>> 0)));
  if (askQuotient) {
    if (rem1LTUb) {
      var lo$2 = quot1;
      return $bL(lo$2, 0);
    } else {
      var lo$3 = ((1 + quot1) | 0);
      return $bL(lo$3, 0);
    }
  } else if (rem1LTUb) {
    return $bL(rem1_$_lo, rem1_$_hi);
  } else {
    var lo$4 = ((rem1_$_lo - blo) | 0);
    var hi$2 = ((((rem1_$_hi - bhi) | 0) + ((((~rem1_$_lo) & blo) | ((~(rem1_$_lo ^ blo)) & lo$4)) >> 31)) | 0);
    return $bL(lo$4, hi$2);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  gU: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_s_$less$colon$less$() {
  this.hy = null;
  $n_s_$less$colon$less$ = this;
  this.hy = new $c_s_$less$colon$less$$anon$1();
}
$p = $c_s_$less$colon$less$.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $p;
var $d_s_$less$colon$less$ = new $TypeData().i($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  gX: 1
}));
var $n_s_$less$colon$less$;
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$();
  }
  return $n_s_$less$colon$less$;
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().hX(dest, j, $m_sr_ScalaRunTime$().dW(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.p2 = (function(it, evidence$1) {
  var n = it.y();
  if ((n > (-1))) {
    var elements = evidence$1.bt(n);
    var iterator = it.m();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().hX(elements, i, iterator.l());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.aN();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.m();
    while (iterator$2.p()) {
      var elem = iterator$2.l();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h1(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().h0(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
});
$p.gI = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.ao.Z && $objectGetClass(dest).ao.R(srcClass.ao))) {
    src.t(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.oZ = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().n(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  gZ: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_Array$EmptyArrays$() {
  this.jc = null;
  this.nr = null;
  $n_s_Array$EmptyArrays$ = this;
  this.jc = new $ac_I(0);
  this.nr = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  h0: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  b4: 1
}));
var $d_F1 = new $TypeData().i(1, "scala.Function1", ({
  e: 1
}));
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
/** @constructor */
function $c_s_Option$() {
}
$p = $c_s_Option$.prototype = new $h_O();
$p.constructor = $c_s_Option$;
/** @constructor */
function $h_s_Option$() {
}
$h_s_Option$.prototype = $p;
$p.jO = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  h6: 1
}));
var $n_s_Option$;
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$();
  }
  return $n_s_Option$;
}
/** @constructor */
function $c_s_PartialFunction$() {
  this.hB = null;
  this.hA = null;
  $n_s_PartialFunction$ = this;
  this.hB = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => this.hB));
  this.hA = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
$p.t4 = (function(x) {
  return (this.hB === x);
});
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  h7: 1
}));
var $n_s_PartialFunction$;
function $m_s_PartialFunction$() {
  if ((!$n_s_PartialFunction$)) {
    $n_s_PartialFunction$ = new $c_s_PartialFunction$();
  }
  return $n_s_PartialFunction$;
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.nx = null;
  $n_sc_ArrayOps$ = this;
  this.nx = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $m_sc_ArrayOps$().nx));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.tH = (function(this$) {
  var b = new ($d_T2.r().C)($m_jl_reflect_Array$().bs(this$));
  var i = 0;
  while ((i < $m_jl_reflect_Array$().bs(this$))) {
    b.a[i] = $ct_T2__O__O__(new $c_T2(), $m_sr_ScalaRunTime$().dW(this$, i), i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.rH = (function(this$, f) {
  var len = $m_jl_reflect_Array$().bs(this$);
  var i = 0;
  if ((this$ instanceof $ac_O)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_I)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_D)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_J)) {
    while ((i < len)) {
      var $x_2 = this$.a;
      var $x_3 = (i << 1);
      var $x_1_$_lo = $x_2[$x_3];
      var $x_1_$_hi = $x_2[(($x_3 + 1) | 0)];
      f.c($bL($x_1_$_lo, $x_1_$_hi));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_F)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_C)) {
    while ((i < len)) {
      f.c($bC(this$.a[i]));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_B)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_S)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_Z)) {
    while ((i < len)) {
      f.c(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $c_s_MatchError(this$);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  hg: 1
}));
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$();
  }
  return $n_sc_ArrayOps$;
}
/** @constructor */
function $c_sc_Hashing$() {
}
$p = $c_sc_Hashing$.prototype = new $h_O();
$p.constructor = $c_sc_Hashing$;
/** @constructor */
function $h_sc_Hashing$() {
}
$h_sc_Hashing$.prototype = $p;
$p.cm = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  hk: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.m();
  while (it.p()) {
    f.c(it.l());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.m();
  while ((res && it.p())) {
    res = (!(!p.c(it.l())));
  }
  return res;
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  var x30 = $thiz.y();
  if ((x30 === (-1))) {
    return (!$thiz.m().p());
  }
  if ((x30 === 0)) {
    return true;
  }
  return false;
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.m();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.y();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().bs(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().bs(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.p())) {
    $m_sr_ScalaRunTime$().hX(dest, i, it.l());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.y() === 0) ? (("" + start) + end) : $thiz.dU($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).aF.r);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.aF;
  if ((start.length !== 0)) {
    jsb.r = (("" + jsb.r) + start);
  }
  var it = $thiz.m();
  if (it.p()) {
    var obj = it.l();
    jsb.r = (("" + jsb.r) + obj);
    while (it.p()) {
      if ((sep.length !== 0)) {
        jsb.r = (("" + jsb.r) + sep);
      }
      var obj$1 = it.l();
      jsb.r = (("" + jsb.r) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.r = (("" + jsb.r) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$1) {
  if (($thiz.y() >= 0)) {
    var length = $thiz.y();
    var destination = evidence$1.bt(length);
    $thiz.bT(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.aN();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.m();
    while (it.p()) {
      var elem = it.l();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h1(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().h0(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.nD = null;
  this.g8 = null;
  this.nD = head;
  this.g8 = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.s0 = (function() {
  return this.nD.M().m();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  ht: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.nG = null;
  $n_sc_StringOps$ = this;
  this.nG = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.nG));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.jU = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.tf = (function(this$, from, until) {
  var start = ((from > 0) ? from : 0);
  var that = this$.length;
  var end = ((until < that) ? until : that);
  return ((start >= end) ? "" : this$.substring(start, end));
});
$p.tp = (function(this$, n) {
  var y = this$.length;
  return this.tf(this$, 0, ((n < y) ? n : y));
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  hA: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_scg_CommonErrors$() {
}
$p = $c_scg_CommonErrors$.prototype = new $h_O();
$p.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $p;
$p.ki = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  hE: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.nL = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().pg($m_jl_System$SystemProperties$().kf("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.nL = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  hM: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sci_LazyList$EmptyMarker$() {
}
$p = $c_sci_LazyList$EmptyMarker$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$EmptyMarker$;
/** @constructor */
function $h_sci_LazyList$EmptyMarker$() {
}
$h_sci_LazyList$EmptyMarker$.prototype = $p;
var $d_sci_LazyList$EmptyMarker$ = new $TypeData().i($c_sci_LazyList$EmptyMarker$, "scala.collection.immutable.LazyList$EmptyMarker$", ({
  hP: 1
}));
var $n_sci_LazyList$EmptyMarker$;
function $m_sci_LazyList$EmptyMarker$() {
  if ((!$n_sci_LazyList$EmptyMarker$)) {
    $n_sci_LazyList$EmptyMarker$ = new $c_sci_LazyList$EmptyMarker$();
  }
  return $n_sci_LazyList$EmptyMarker$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.jo = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.k2 = (function() {
  var state = this.jo;
  if ((state === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "uninitialized");
  }
  return state.M();
});
$p.kj = (function(state) {
  if ((this.jo !== null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "already initialized");
  }
  this.jo = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  hR: 1
}));
/** @constructor */
function $c_sci_LazyList$MidEvaluation$() {
}
$p = $c_sci_LazyList$MidEvaluation$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$MidEvaluation$;
/** @constructor */
function $h_sci_LazyList$MidEvaluation$() {
}
$h_sci_LazyList$MidEvaluation$.prototype = $p;
var $d_sci_LazyList$MidEvaluation$ = new $TypeData().i($c_sci_LazyList$MidEvaluation$, "scala.collection.immutable.LazyList$MidEvaluation$", ({
  hT: 1
}));
var $n_sci_LazyList$MidEvaluation$;
function $m_sci_LazyList$MidEvaluation$() {
  if ((!$n_sci_LazyList$MidEvaluation$)) {
    $n_sci_LazyList$MidEvaluation$ = new $c_sci_LazyList$MidEvaluation$();
  }
  return $n_sci_LazyList$MidEvaluation$;
}
/** @constructor */
function $c_sci_MapNode$() {
  this.nO = null;
  $n_sci_MapNode$ = this;
  $m_s_reflect_ManifestFactory$IntManifest$();
  this.nO = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  i8: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (($m_jl_reflect_Array$().bs(as) - 1) | 0)));
}
/** @constructor */
function $c_sci_Node() {
}
$p = $c_sci_Node.prototype = new $h_O();
$p.constructor = $c_sci_Node;
/** @constructor */
function $h_sci_Node() {
}
$h_sci_Node.prototype = $p;
$p.pu = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > ((as.a.length - 1) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((as.a.length - 1) | 0));
  as.t(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = ((((as.a.length - ix) | 0) - 1) | 0);
  as.t(srcPos, result, ix, length);
  return result;
});
$p.s8 = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.t(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.t(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  bf: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.gg = 0;
  $n_sci_Node$ = this;
  this.gg = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.ew = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.dY = (function(mask) {
  return (1 << mask);
});
$p.s2 = (function(bitmap, bitpos) {
  return $m_jl_Integer$().dX((bitmap & ((bitpos - 1) | 0)));
});
$p.cI = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.s2(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  ib: 1
}));
var $n_sci_Node$;
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$();
  }
  return $n_sci_Node$;
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.js = null;
  this.bq = null;
  this.cB = null;
  this.fb = null;
  this.jt = null;
  this.nS = null;
  $n_sci_VectorStatics$ = this;
  this.js = new $ac_O(0);
  this.bq = new ($d_O.r().r().C)(0);
  this.cB = new ($d_O.r().r().r().C)(0);
  this.fb = new ($d_O.r().r().r().r().C)(0);
  this.jt = new ($d_O.r().r().r().r().r().C)(0);
  this.nS = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.fk = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.t(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.E = (function(a, elem) {
  var ac = $m_ju_Arrays$().V(a, ((1 + a.a.length) | 0));
  ac.a[((ac.a.length - 1) | 0)] = elem;
  return ac;
});
$p.cC = (function(elem, a) {
  var ac = $objectGetClass(a).ao.Q().ao.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.t(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.k6 = (function(level, a, f) {
  var i = 0;
  var len = a.a.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.c(a.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = ((level - 1) | 0);
    while ((i < len)) {
      this.k6(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  iu: 1
}));
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
  }
  return $n_sci_VectorStatics$;
}
/** @constructor */
function $c_scm_ArrayBuilder$() {
}
$p = $c_scm_ArrayBuilder$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder$;
/** @constructor */
function $h_scm_ArrayBuilder$() {
}
$h_scm_ArrayBuilder$.prototype = $p;
$p.h1 = (function(runtimeClass) {
  return ((runtimeClass === $d_B.l()) ? 0 : ((runtimeClass === $d_S.l()) ? 0 : ((runtimeClass === $d_C.l()) ? 0 : ((runtimeClass === $d_I.l()) ? 0 : ((runtimeClass === $d_J.l()) ? $bL(0, 0) : ((runtimeClass === $d_F.l()) ? 0.0 : ((runtimeClass === $d_D.l()) ? 0.0 : ((runtimeClass === $d_Z.l()) ? false : ((runtimeClass === $d_V.l()) ? (void 0) : null)))))))));
});
$p.h0 = (function(runtimeClass, a) {
  var len = (a.length | 0);
  if ((runtimeClass === $d_C.l())) {
    var result = new $ac_C(len);
    var i = 0;
    while ((i !== len)) {
      result.a[i] = (65535 & (a[i] | 0));
      i = ((1 + i) | 0);
    }
    return result;
  } else {
    var result$2 = runtimeClass.ao.U(len);
    var i$2 = 0;
    while ((i$2 !== len)) {
      $m_sr_ScalaRunTime$().hX(result$2, i$2, a[i$2]);
      i$2 = ((1 + i$2) | 0);
    }
    return result$2;
  }
});
var $d_scm_ArrayBuilder$ = new $TypeData().i($c_scm_ArrayBuilder$, "scala.collection.mutable.ArrayBuilder$", ({
  iB: 1
}));
var $n_scm_ArrayBuilder$;
function $m_scm_ArrayBuilder$() {
  if ((!$n_scm_ArrayBuilder$)) {
    $n_scm_ArrayBuilder$ = new $c_scm_ArrayBuilder$();
  }
  return $n_scm_ArrayBuilder$;
}
/** @constructor */
function $c_scm_HashSet$Node(_key, _hash, _next) {
  this.fe = null;
  this.d5 = 0;
  this.aX = null;
  this.fe = _key;
  this.d5 = _hash;
  this.aX = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.rC = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.d5) && $m_sr_BoxesRunTime$().n(k, \u03b4this$tailLocal1.fe))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.aX === null) || (\u03b4this$tailLocal1.d5 > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.aX;
    }
  }
});
$p.h = (function() {
  return ((((("Node(" + this.fe) + ", ") + this.d5) + ") -> ") + this.aX);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  iN: 1
}));
/** @constructor */
function $c_scm_MutationTracker$() {
}
$p = $c_scm_MutationTracker$.prototype = new $h_O();
$p.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $p;
$p.oJ = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  iT: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
function $ct_s_concurrent_BatchingExecutor$AbstractBatch__jl_Runnable__Ajl_Runnable__I__($thiz, first, other, size) {
  $thiz.gl = first;
  $thiz.gm = other;
  $thiz.dQ = size;
  return $thiz;
}
function $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable($thiz, curSize) {
  var curOther = $thiz.gm;
  var curLen = curOther.a.length;
  if ((curSize <= curLen)) {
    return curOther;
  } else {
    var newLen = ((curLen === 0) ? 4 : (curLen << 1));
    if ((newLen <= curLen)) {
      throw new $c_jl_StackOverflowError(("Space limit of asynchronous stack reached: " + curLen));
    }
    var newOther = new ($d_jl_Runnable.r().C)(newLen);
    curOther.t(0, newOther, 0, curLen);
    $thiz.gm = newOther;
    return newOther;
  }
}
/** @constructor */
function $c_s_concurrent_BatchingExecutor$AbstractBatch() {
  this.gl = null;
  this.gm = null;
  this.dQ = 0;
}
$p = $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutor$AbstractBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$AbstractBatch() {
}
$h_s_concurrent_BatchingExecutor$AbstractBatch.prototype = $p;
$p.sF = (function(r) {
  var sz = this.dQ;
  if ((sz === 0)) {
    this.gl = r;
  } else {
    $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable(this, sz).a[((sz - 1) | 0)] = r;
  }
  this.dQ = ((1 + sz) | 0);
});
$p.t3 = (function(n) {
  var n$tailLocal1 = n;
  while (true) {
    if ((n$tailLocal1 > 0)) {
      var x1 = this.dQ;
      if ((x1 === 0)) {
        return (void 0);
      }
      if ((x1 === 1)) {
        var x$proxy1 = this.gl;
        if ((x$proxy1 === null)) {
          $m_sr_Scala3RunTime$().bu();
        }
        this.gl = null;
        this.dQ = 0;
        x$proxy1.ez();
        n$tailLocal1 = ((n$tailLocal1 - 1) | 0);
        continue;
      }
      var o = this.gm;
      var x$proxy2 = o.a[((x1 - 2) | 0)];
      if ((x$proxy2 === null)) {
        $m_sr_Scala3RunTime$().bu();
      }
      o.a[((x1 - 2) | 0)] = null;
      this.dQ = ((x1 - 1) | 0);
      x$proxy2.ez();
      n$tailLocal1 = ((n$tailLocal1 - 1) | 0);
    } else {
      return (void 0);
    }
  }
});
/** @constructor */
function $c_s_concurrent_BatchingExecutorStatics$() {
  this.o4 = null;
  $n_s_concurrent_BatchingExecutorStatics$ = this;
  this.o4 = new ($d_jl_Runnable.r().C)(0);
}
$p = $c_s_concurrent_BatchingExecutorStatics$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutorStatics$;
/** @constructor */
function $h_s_concurrent_BatchingExecutorStatics$() {
}
$h_s_concurrent_BatchingExecutorStatics$.prototype = $p;
var $d_s_concurrent_BatchingExecutorStatics$ = new $TypeData().i($c_s_concurrent_BatchingExecutorStatics$, "scala.concurrent.BatchingExecutorStatics$", ({
  j0: 1
}));
var $n_s_concurrent_BatchingExecutorStatics$;
function $m_s_concurrent_BatchingExecutorStatics$() {
  if ((!$n_s_concurrent_BatchingExecutorStatics$)) {
    $n_s_concurrent_BatchingExecutorStatics$ = new $c_s_concurrent_BatchingExecutorStatics$();
  }
  return $n_s_concurrent_BatchingExecutorStatics$;
}
/** @constructor */
function $c_s_concurrent_ExecutionContext$() {
  this.o5 = null;
  this.o6 = false;
  this.ff = null;
  $n_s_concurrent_ExecutionContext$ = this;
  this.ff = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$3) => {
    _$1$3.gZ($m_jl_System$Streams$().f2);
  }));
}
$p = $c_s_concurrent_ExecutionContext$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$() {
}
$h_s_concurrent_ExecutionContext$.prototype = $p;
$p.cH = (function() {
  if ((!this.o6)) {
    this.o5 = $m_sjs_concurrent_JSExecutionContext$().oi;
    this.o6 = true;
  }
  return this.o5;
});
var $d_s_concurrent_ExecutionContext$ = new $TypeData().i($c_s_concurrent_ExecutionContext$, "scala.concurrent.ExecutionContext$", ({
  j1: 1
}));
var $n_s_concurrent_ExecutionContext$;
function $m_s_concurrent_ExecutionContext$() {
  if ((!$n_s_concurrent_ExecutionContext$)) {
    $n_s_concurrent_ExecutionContext$ = new $c_s_concurrent_ExecutionContext$();
  }
  return $n_s_concurrent_ExecutionContext$;
}
/** @constructor */
function $c_s_concurrent_Future$() {
  this.o8 = null;
  this.oa = null;
  this.o9 = null;
  this.jC = null;
  this.ob = null;
  this.oc = null;
  $n_s_concurrent_Future$ = this;
  $m_sci_Map$().p5(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $d_Z.l(), $d_jl_Boolean.l()), $ct_T2__O__O__(new $c_T2(), $d_B.l(), $d_jl_Byte.l()), $ct_T2__O__O__(new $c_T2(), $d_C.l(), $d_jl_Character.l()), $ct_T2__O__O__(new $c_T2(), $d_S.l(), $d_jl_Short.l()), $ct_T2__O__O__(new $c_T2(), $d_I.l(), $d_jl_Integer.l()), $ct_T2__O__O__(new $c_T2(), $d_J.l(), $d_jl_Long.l()), $ct_T2__O__O__(new $c_T2(), $d_F.l(), $d_jl_Float.l()), $ct_T2__O__O__(new $c_T2(), $d_D.l(), $d_jl_Double.l()), $ct_T2__O__O__(new $c_T2(), $d_V.l(), $d_jl_Void.l())]));
  this.o8 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2) => {
    throw new $c_s_concurrent_Future$$anon$1(t$2);
  }));
  this.oa = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$2());
  this.o9 = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$3());
  $m_s_concurrent_Future$().p9(this.o9);
  this.jC = $m_s_concurrent_Future$().rz(new $c_s_concurrent_Future$$anon$4());
  this.ob = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2$1) => this.jC));
  this.oc = this.p9(new $c_s_util_Success((void 0)));
}
$p = $c_s_concurrent_Future$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Future$;
/** @constructor */
function $h_s_concurrent_Future$() {
}
$h_s_concurrent_Future$.prototype = $p;
$p.rz = (function(exception) {
  return $m_s_concurrent_Promise$().rA(exception);
});
$p.p9 = (function(result) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result);
});
$p.oH = (function(body, executor) {
  return this.oc.i6(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$4$2) => body.M())), executor);
});
var $d_s_concurrent_Future$ = new $TypeData().i($c_s_concurrent_Future$, "scala.concurrent.Future$", ({
  j3: 1
}));
var $n_s_concurrent_Future$;
function $m_s_concurrent_Future$() {
  if ((!$n_s_concurrent_Future$)) {
    $n_s_concurrent_Future$ = new $c_s_concurrent_Future$();
  }
  return $n_s_concurrent_Future$;
}
function $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result) {
  if ($thiz.tu(result)) {
    return $thiz;
  } else {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "Promise already completed.");
  }
}
function $f_s_concurrent_Promise__success__O__s_concurrent_Promise($thiz, value) {
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, new $c_s_util_Success(value));
}
function $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise($thiz, cause) {
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, new $c_s_util_Failure(cause));
}
/** @constructor */
function $c_s_concurrent_Promise$() {
}
$p = $c_s_concurrent_Promise$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Promise$;
/** @constructor */
function $h_s_concurrent_Promise$() {
}
$h_s_concurrent_Promise$.prototype = $p;
$p.rA = (function(exception) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), new $c_s_util_Failure(exception));
});
var $d_s_concurrent_Promise$ = new $TypeData().i($c_s_concurrent_Promise$, "scala.concurrent.Promise$", ({
  j8: 1
}));
var $n_s_concurrent_Promise$;
function $m_s_concurrent_Promise$() {
  if ((!$n_s_concurrent_Promise$)) {
    $n_s_concurrent_Promise$ = new $c_s_concurrent_Promise$();
  }
  return $n_s_concurrent_Promise$;
}
/** @constructor */
function $c_s_concurrent_impl_Promise$() {
  this.gn = null;
  $n_s_concurrent_impl_Promise$ = this;
  this.gn = $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 0, null, $m_s_concurrent_ExecutionContext$parasitic$());
}
$p = $c_s_concurrent_impl_Promise$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_impl_Promise$;
/** @constructor */
function $h_s_concurrent_impl_Promise$() {
}
$h_s_concurrent_impl_Promise$.prototype = $p;
$p.h2 = (function(value) {
  if ((value instanceof $c_s_util_Success)) {
    return value;
  } else {
    var t = value.d8;
    return (((false || false) || (t instanceof $c_jl_Error)) ? (false ? new $c_s_util_Success(t.pS()) : new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Exception", t))) : value);
  }
});
var $d_s_concurrent_impl_Promise$ = new $TypeData().i($c_s_concurrent_impl_Promise$, "scala.concurrent.impl.Promise$", ({
  j9: 1
}));
var $n_s_concurrent_impl_Promise$;
function $m_s_concurrent_impl_Promise$() {
  if ((!$n_s_concurrent_impl_Promise$)) {
    $n_s_concurrent_impl_Promise$ = new $c_s_concurrent_impl_Promise$();
  }
  return $n_s_concurrent_impl_Promise$;
}
function $is_s_concurrent_impl_Promise$Callbacks(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aQ)));
}
function $isArrayOf_s_concurrent_impl_Promise$Callbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.qg = null;
  this.qp = null;
  this.qh = null;
  this.qk = null;
  this.ql = null;
  this.qj = null;
  this.qi = null;
  this.qf = null;
  this.qq = null;
  this.qe = null;
  this.qo = null;
  this.qm = null;
  this.qn = null;
  $n_s_reflect_ClassTag$ = this;
  this.qg = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.qp = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.qh = $m_s_reflect_ManifestFactory$CharManifest$();
  this.qk = $m_s_reflect_ManifestFactory$IntManifest$();
  this.ql = $m_s_reflect_ManifestFactory$LongManifest$();
  this.qj = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.qi = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.qf = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.qq = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.qe = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.qo = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qm = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.qn = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.oF = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  jb: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.n = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.rw(x, y) : ((x instanceof $Char) ? this.ru(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.rw = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.rv(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $Long)) {
      var $x_1 = $uJ(xn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = y.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.rv = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $Long)) {
      var $x_1 = $uJ(yn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      return (x2 === ((4.294967296E9 * x3_$_hi) + (x3_$_lo >>> 0.0)));
    } else {
      return (false && yn.g(x2));
    }
  } else if ((xn instanceof $Long)) {
    var $x_2 = $uJ(xn);
    var x3$2_$_lo = $x_2.l;
    var x3$2_$_hi = $x_2.h;
    if ((yn instanceof $Long)) {
      var $x_3 = $uJ(yn);
      var x2$3_$_lo = $x_3.l;
      var x2$3_$_hi = $x_3.h;
      return (((x3$2_$_lo ^ x2$3_$_lo) | (x3$2_$_hi ^ x2$3_$_hi)) === 0);
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * x3$2_$_hi) + (x3$2_$_lo >>> 0.0)) === x3$3);
    } else {
      return (false && yn.g($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.ru = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $Long)) {
      var $x_1 = $uJ(y);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = xc.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  jE: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  jI: 1
}));
/** @constructor */
function $c_sr_Scala3RunTime$() {
}
$p = $c_sr_Scala3RunTime$.prototype = new $h_O();
$p.constructor = $c_sr_Scala3RunTime$;
/** @constructor */
function $h_sr_Scala3RunTime$() {
}
$h_sr_Scala3RunTime$.prototype = $p;
$p.bu = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  jK: 1
}));
var $n_sr_Scala3RunTime$;
function $m_sr_Scala3RunTime$() {
  if ((!$n_sr_Scala3RunTime$)) {
    $n_sr_Scala3RunTime$ = new $c_sr_Scala3RunTime$();
  }
  return $n_sr_Scala3RunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.dW = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.a;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.hX = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.a;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.c8 = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.W(), (x.B() + "("), ",", ")");
});
$p.b7 = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  jL: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.w = (function(hash, data) {
  var h = this.co(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.co = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a6 = (function(hash, length) {
  return this.qU((hash ^ length));
});
$p.qU = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.sl = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.ro = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().kc(dv);
    var lv_$_lo = $x_1.l;
    var lv_$_hi = $x_1.h;
    if ((((4.294967296E9 * lv_$_hi) + (lv_$_lo >>> 0.0)) === dv)) {
      return (lv_$_lo ^ lv_$_hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.L = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.ro((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.sl($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.s9 = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  jN: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
}
$p = $c_sr_Statics$PFMarker$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
}
$h_sr_Statics$PFMarker$.prototype = $p;
var $d_sr_Statics$PFMarker$ = new $TypeData().i($c_sr_Statics$PFMarker$, "scala.runtime.Statics$PFMarker$", ({
  jO: 1
}));
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$();
  }
  return $n_sr_Statics$PFMarker$;
}
/** @constructor */
function $c_sjs_concurrent_JSExecutionContext$() {
  this.oi = null;
  $n_sjs_concurrent_JSExecutionContext$ = this;
  this.oi = $m_sjs_concurrent_QueueExecutionContext$().qQ();
}
$p = $c_sjs_concurrent_JSExecutionContext$.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_JSExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_JSExecutionContext$() {
}
$h_sjs_concurrent_JSExecutionContext$.prototype = $p;
var $d_sjs_concurrent_JSExecutionContext$ = new $TypeData().i($c_sjs_concurrent_JSExecutionContext$, "scala.scalajs.concurrent.JSExecutionContext$", ({
  jP: 1
}));
var $n_sjs_concurrent_JSExecutionContext$;
function $m_sjs_concurrent_JSExecutionContext$() {
  if ((!$n_sjs_concurrent_JSExecutionContext$)) {
    $n_sjs_concurrent_JSExecutionContext$ = new $c_sjs_concurrent_JSExecutionContext$();
  }
  return $n_sjs_concurrent_JSExecutionContext$;
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$() {
}
$p = $c_sjs_concurrent_QueueExecutionContext$.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$() {
}
$h_sjs_concurrent_QueueExecutionContext$.prototype = $p;
$p.qQ = (function() {
  return (((typeof Promise) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext());
});
var $d_sjs_concurrent_QueueExecutionContext$ = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$, "scala.scalajs.concurrent.QueueExecutionContext$", ({
  jQ: 1
}));
var $n_sjs_concurrent_QueueExecutionContext$;
function $m_sjs_concurrent_QueueExecutionContext$() {
  if ((!$n_sjs_concurrent_QueueExecutionContext$)) {
    $n_sjs_concurrent_QueueExecutionContext$ = new $c_sjs_concurrent_QueueExecutionContext$();
  }
  return $n_sjs_concurrent_QueueExecutionContext$;
}
/** @constructor */
function $c_sjs_js_Thenable$ThenableOps$() {
}
$p = $c_sjs_js_Thenable$ThenableOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Thenable$ThenableOps$;
/** @constructor */
function $h_sjs_js_Thenable$ThenableOps$() {
}
$h_sjs_js_Thenable$ThenableOps$.prototype = $p;
$p.kD = (function(this$) {
  var p2 = $ct_s_concurrent_impl_Promise$DefaultPromise__(new $c_s_concurrent_impl_Promise$DefaultPromise());
  this$.then(((arg1$2) => {
    $f_s_concurrent_Promise__success__O__s_concurrent_Promise(p2, arg1$2);
  }), $m_sjs_js_defined$().oG(((arg1$2$1) => {
    $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(p2, ((arg1$2$1 instanceof $c_jl_Throwable) ? arg1$2$1 : new $c_sjs_js_JavaScriptException(arg1$2$1)));
  })));
  return p2;
});
var $d_sjs_js_Thenable$ThenableOps$ = new $TypeData().i($c_sjs_js_Thenable$ThenableOps$, "scala.scalajs.js.Thenable$ThenableOps$", ({
  jW: 1
}));
var $n_sjs_js_Thenable$ThenableOps$;
function $m_sjs_js_Thenable$ThenableOps$() {
  if ((!$n_sjs_js_Thenable$ThenableOps$)) {
    $n_sjs_js_Thenable$ThenableOps$ = new $c_sjs_js_Thenable$ThenableOps$();
  }
  return $n_sjs_js_Thenable$ThenableOps$;
}
/** @constructor */
function $c_sjs_js_defined$() {
}
$p = $c_sjs_js_defined$.prototype = new $h_O();
$p.constructor = $c_sjs_js_defined$;
/** @constructor */
function $h_sjs_js_defined$() {
}
$h_sjs_js_defined$.prototype = $p;
$p.oG = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  jZ: 1
}));
var $n_sjs_js_defined$;
function $m_sjs_js_defined$() {
  if ((!$n_sjs_js_defined$)) {
    $n_sjs_js_defined$ = new $c_sjs_js_defined$();
  }
  return $n_sjs_js_defined$;
}
/** @constructor */
function $c_sjs_js_timers_package$() {
}
$p = $c_sjs_js_timers_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
}
$h_sjs_js_timers_package$.prototype = $p;
$p.te = (function(interval, body) {
  return setTimeout((() => {
    body.M();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  k0: 1
}));
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$();
  }
  return $n_sjs_js_timers_package$;
}
/** @constructor */
function $c_sjsr_Compat$() {
}
$p = $c_sjsr_Compat$.prototype = new $h_O();
$p.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
$h_sjsr_Compat$.prototype = $p;
$p.pH = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.hN;
  } else {
    var result = [];
    seq.bc(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  k9: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
function $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable($thiz) {
  return ($m_s_util_control_NoStackTrace$().oo ? $c_jl_Throwable.prototype.fm.call($thiz) : $thiz);
}
/** @constructor */
function $c_s_util_control_NoStackTrace$() {
  this.oo = false;
  this.oo = false;
}
$p = $c_s_util_control_NoStackTrace$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NoStackTrace$;
/** @constructor */
function $h_s_util_control_NoStackTrace$() {
}
$h_s_util_control_NoStackTrace$.prototype = $p;
var $d_s_util_control_NoStackTrace$ = new $TypeData().i($c_s_util_control_NoStackTrace$, "scala.util.control.NoStackTrace$", ({
  kc: 1
}));
var $n_s_util_control_NoStackTrace$;
function $m_s_util_control_NoStackTrace$() {
  if ((!$n_s_util_control_NoStackTrace$)) {
    $n_s_util_control_NoStackTrace$ = new $c_s_util_control_NoStackTrace$();
  }
  return $n_s_util_control_NoStackTrace$;
}
/** @constructor */
function $c_s_util_control_NonFatal$() {
}
$p = $c_s_util_control_NonFatal$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NonFatal$;
/** @constructor */
function $h_s_util_control_NonFatal$() {
}
$h_s_util_control_NonFatal$.prototype = $p;
$p.hV = (function(t) {
  matchAlts1: {
    matchAlts2: {
      if ((t instanceof $c_jl_VirtualMachineError)) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      break matchAlts1;
    }
    return false;
  }
  return true;
});
$p.fA = (function(t) {
  return (this.hV(t) ? new $c_s_Some(t) : $m_s_None$());
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  kd: 1
}));
var $n_s_util_control_NonFatal$;
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$();
  }
  return $n_s_util_control_NonFatal$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.w = (function(hash, data) {
  var h = this.co(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.co = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a6 = (function(hash, length) {
  return this.h3((hash ^ length));
});
$p.h3 = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.pM = (function(x, y, seed) {
  var h = seed;
  h = this.w(h, $f_T__hashCode__I("Tuple2"));
  h = this.w(h, x);
  h = this.w(h, y);
  return this.a6(h, 2);
});
$p.bW = (function(x, seed, ignorePrefix) {
  var arr = x.z();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.B()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.w(h, $f_T__hashCode__I(x.B()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.w(h, $m_sr_Statics$().L(x.A(i)));
      i = ((1 + i) | 0);
    }
    return this.a6(h, arr);
  }
});
$p.jQ = (function(x, seed, caseClassName) {
  var arr = x.z();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.B()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.w(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.w(h, $m_sr_Statics$().L(x.A(i)));
      i = ((1 + i) | 0);
    }
    return this.a6(h, arr);
  }
});
$p.kF = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.m();
  while (iterator.p()) {
    var x = iterator.l();
    var h = $m_sr_Statics$().L(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.w(h$2, a);
  h$2 = this.w(h$2, b);
  h$2 = this.co(h$2, c);
  return this.a6(h$2, n);
});
$p.sC = (function(xs, seed) {
  var it = xs.m();
  var h = seed;
  if ((!it.p())) {
    return this.a6(h, 0);
  }
  var x0 = it.l();
  if ((!it.p())) {
    return this.a6(this.w(h, $m_sr_Statics$().L(x0)), 1);
  }
  var x1 = it.l();
  var initial = $m_sr_Statics$().L(x0);
  h = this.w(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().L(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.p()) {
    h = this.w(h, prev);
    var hash = $m_sr_Statics$().L(it.l());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.w(h, hash);
      i = ((1 + i) | 0);
      while (it.p()) {
        h = this.w(h, $m_sr_Statics$().L(it.l()));
        i = ((1 + i) | 0);
      }
      return this.a6(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.h3(this.w(this.w(h0, rangeDiff), prev));
});
$p.aM = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().bs(a);
  switch (l) {
    case 0: {
      return this.a6(h, 0);
      break;
    }
    case 1: {
      return this.a6(this.w(h, $m_sr_Statics$().L($m_sr_ScalaRunTime$().dW(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().L($m_sr_ScalaRunTime$().dW(a, 0));
      h = this.w(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().L($m_sr_ScalaRunTime$().dW(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.w(h, prev);
        var hash = $m_sr_Statics$().L($m_sr_ScalaRunTime$().dW(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.w(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.w(h, $m_sr_Statics$().L($m_sr_ScalaRunTime$().dW(a, i)));
            i = ((1 + i) | 0);
          }
          return this.a6(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.h3(this.w(this.w(h0, rangeDiff), prev));
    }
  }
});
$p.sJ = (function(start, step, last, seed) {
  return this.h3(this.w(this.w(this.w(seed, start), step), last));
});
$p.s3 = (function(a, seed) {
  var h = seed;
  var l = a.q();
  switch (l) {
    case 0: {
      return this.a6(h, 0);
      break;
    }
    case 1: {
      return this.a6(this.w(h, $m_sr_Statics$().L(a.u(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().L(a.u(0));
      h = this.w(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().L(a.u(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.w(h, prev);
        var hash = $m_sr_Statics$().L(a.u(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.w(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.w(h, $m_sr_Statics$().L(a.u(i)));
            i = ((1 + i) | 0);
          }
          return this.a6(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.h3(this.w(this.w(h0, rangeDiff), prev));
    }
  }
});
$p.sk = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.d())) {
    var head = elems.D();
    var tail = elems.v();
    var hash = $m_sr_Statics$().L(head);
    h = this.w(h, hash);
    switch (rangeState) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.sJ(initial, rangeDiff, prev, seed) : this.a6(h, n));
});
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$.prototype = $p;
$p.pQ = (function(s) {
  return s;
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$, "com.github.pwharned.clausula.extension.domain.Sentence$package$Sentence$s$", ({
  dQ: 1,
  bx: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$;
function $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$ = new $c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$.prototype = $p;
$p.pQ = (function(a) {
  return a;
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$, "com.github.pwharned.clausula.extension.domain.Word$package$Word$given_ToText_Word$", ({
  dU: 1,
  bx: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$;
function $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$ = new $c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$;
}
function $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__collectSurroundingText__Lorg_scalajs_dom_Node__I__I__T($thiz, startNode, startOffset, maxChars) {
  var _2 = $m_sjs_js_Any$().gK(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((n$2) => {
    var parent = n$2.parentNode;
    if ((parent === null)) {
      return (NodeFilter.FILTER_ACCEPT | 0);
    } else {
      var this$2 = parent.nodeName;
      var tag = this$2.toLowerCase();
      return ((((((tag === "rt") || (tag === "rp")) || (tag === "script")) || (tag === "style")) || (tag === "noscript")) ? (NodeFilter.FILTER_REJECT | 0) : (NodeFilter.FILTER_ACCEPT | 0));
    }
  })));
  var filter = ({
    "acceptNode": _2
  });
  var walker = document.createTreeWalker(document.body, (NodeFilter.SHOW_TEXT | 0), filter, false);
  walker.currentNode = startNode;
  $m_sci_List$();
  var leftParts = $m_sci_Nil$();
  var leftLen = 0;
  var leftNode = walker.previousNode();
  while (((leftNode !== null) && (leftLen < maxChars))) {
    var txt = leftNode.textContent;
    leftParts = new $c_sci_$colon$colon(txt, leftParts);
    leftLen = ((leftLen + txt.length) | 0);
    leftNode = walker.previousNode();
  }
  walker.currentNode = startNode;
  $m_sci_List$();
  var rightParts = $m_sci_Nil$();
  var rightLen = 0;
  var rightNode = walker.nextNode();
  while (((rightNode !== null) && (rightLen < maxChars))) {
    var txt$2 = rightNode.textContent;
    rightParts = $f_sc_StrictOptimizedSeqOps__appended__O__O(rightParts, txt$2);
    rightLen = ((rightLen + txt$2.length) | 0);
    rightNode = walker.nextNode();
  }
  var ownText = startNode.textContent;
  var leftOwn = ownText.substring(0, startOffset);
  var rightOwn = ownText.substring(startOffset);
  return (((("" + $f_sc_IterableOnceOps__mkString__T__T__T__T(leftParts, "", "", "")) + leftOwn) + rightOwn) + $f_sc_IterableOnceOps__mkString__T__T__T__T(rightParts, "", "", ""));
}
function $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__findSentenceContaining__T__T__s_Option($thiz, text, word) {
  var wordIndex = (text.indexOf(word) | 0);
  if ((wordIndex === (-1))) {
    return $m_s_None$();
  } else {
    var start = wordIndex;
    while (((start > 0) && (!$p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__isSentenceBoundary__C__Z($thiz, text.charCodeAt(((start - 1) | 0)))))) {
      start = ((start - 1) | 0);
    }
    var end = ((wordIndex + word.length) | 0);
    while (((end < text.length) && (!$p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__isSentenceBoundary__C__Z($thiz, text.charCodeAt(end))))) {
      end = ((1 + end) | 0);
    }
    var beginIndex = start;
    var endIndex = end;
    var sentence = $f_T__trim__T(text.substring(beginIndex, endIndex));
    return ((sentence === "") ? $m_s_None$() : new $c_s_Some(sentence));
  }
}
function $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__isSentenceBoundary__C__Z($thiz, c) {
  return ((((((c === 33) || (c === 46)) || (c === 63)) || (c === 12290)) || (c === 65281)) || (c === 65311));
}
function $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__detectByScript__T__Lcom_github_pwharned_clausula_extension_domain_Language($thiz, text) {
  var chars = $m_sc_StringOps$().tp(text, 200);
  $m_sc_StringOps$();
  _return: {
    var len = chars.length;
    var i = 0;
    while ((i < len)) {
      if (((((chars.charCodeAt(i) - 1024) | 0) >>> 0) <= 255)) {
        var $x_1 = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = (-1);
  }
  if (($x_1 !== (-1))) {
    return $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Russian__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
  } else {
    $m_sc_StringOps$();
    _return$1: {
      var len$1 = chars.length;
      var i$1 = 0;
      while ((i$1 < len$1)) {
        if (((((chars.charCodeAt(i$1) - 12352) | 0) >>> 0) <= 191)) {
          var $x_2 = i$1;
          break _return$1;
        }
        i$1 = ((1 + i$1) | 0);
      }
      var $x_2 = (-1);
    }
    if (($x_2 !== (-1))) {
      return $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Japanese__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
    } else {
      $m_sc_StringOps$();
      _return$2: {
        var len$2 = chars.length;
        var i$2 = 0;
        while ((i$2 < len$2)) {
          if (((((chars.charCodeAt(i$2) - 19968) | 0) >>> 0) <= 20991)) {
            var $x_3 = i$2;
            break _return$2;
          }
          i$2 = ((1 + i$2) | 0);
        }
        var $x_3 = (-1);
      }
      if (($x_3 !== (-1))) {
        return $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Chinese__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
      } else {
        $m_sc_StringOps$();
        _return$3: {
          var len$3 = chars.length;
          var i$3 = 0;
          while ((i$3 < len$3)) {
            var index$3 = i$3;
            var x0$3 = chars.charCodeAt(index$3);
            if (new $c_sci_$colon$colon($bC(1711), new $c_sci_$colon$colon($bC(1670), new $c_sci_$colon$colon($bC(1662), new $c_sci_$colon$colon($bC(1688), new $c_sci_$colon$colon($bC(1740), new $c_sci_$colon$colon($bC(1705), $m_sci_Nil$())))))).br($bC(x0$3))) {
              var $x_4 = i$3;
              break _return$3;
            }
            i$3 = ((1 + i$3) | 0);
          }
          var $x_4 = (-1);
        }
        if (($x_4 !== (-1))) {
          return $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Farsi__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
        } else {
          $m_sc_StringOps$();
          _return$4: {
            var len$4 = chars.length;
            var i$4 = 0;
            while ((i$4 < len$4)) {
              if (((((chars.charCodeAt(i$4) - 1536) | 0) >>> 0) <= 255)) {
                var $x_5 = i$4;
                break _return$4;
              }
              i$4 = ((1 + i$4) | 0);
            }
            var $x_5 = (-1);
          }
          if (($x_5 !== (-1))) {
            return $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Arabic__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
          } else {
            return $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
          }
        }
      }
    }
  }
}
function $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__encodedLength$1__T__I($thiz, s) {
  return $m_Ljava_net_URLEncoder$().rq(s, "UTF-8").length;
}
function $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__moveLeft$1__I__T__I__I($thiz, targetStart$1, sentence$1, currentStart) {
  if ((currentStart >= targetStart$1)) {
    return targetStart$1;
  } else if ($m_sc_StringOps$().jU(sentence$1, 32)) {
    var nextSpace = $f_T__indexOf__I__I__I(sentence$1, 32, currentStart);
    return (((nextSpace !== (-1)) && (nextSpace < targetStart$1)) ? ((1 + nextSpace) | 0) : ((1 + currentStart) | 0));
  } else {
    return ((1 + currentStart) | 0);
  }
}
function $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__moveRight$1__I__T__I__I($thiz, targetEnd$1, sentence$2, currentEnd) {
  if ((currentEnd <= targetEnd$1)) {
    return targetEnd$1;
  } else if ($m_sc_StringOps$().jU(sentence$2, 32)) {
    var prevSpace = $f_T__lastIndexOf__I__I__I(sentence$2, 32, ((currentEnd - 1) | 0));
    return (((prevSpace !== (-1)) && (prevSpace > targetEnd$1)) ? prevSpace : ((currentEnd - 1) | 0));
  } else {
    return ((currentEnd - 1) | 0);
  }
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction() {
}
$h_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction.prototype = $p;
$p.tt = (function(word, sentence) {
  if (((sentence.indexOf(word) | 0) === (-1))) {
    return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$());
  } else if (($p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__encodedLength$1__T__I(this, sentence) <= 200)) {
    return $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$().hU(sentence);
  } else {
    var start = 0;
    var end = sentence.length;
    var targetStart = (sentence.indexOf(word) | 0);
    var targetEnd = ((targetStart + word.length) | 0);
    while (true) {
      var beginIndex = start;
      var endIndex = end;
      if ((($p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__encodedLength$1__T__I(this, sentence.substring(beginIndex, endIndex)) > 200) && ((start < targetStart) || (end > targetEnd)))) {
        if ((((targetStart - start) | 0) >= ((end - targetEnd) | 0))) {
          start = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__moveLeft$1__I__T__I__I(this, targetStart, sentence, start);
        } else {
          end = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__moveRight$1__I__T__I__I(this, targetEnd, sentence, end);
        }
        if ((start > targetStart)) {
          start = targetStart;
        }
        if ((end < targetEnd)) {
          end = targetEnd;
        }
      } else {
        break;
      }
    }
    var beginIndex$1 = start;
    var endIndex$1 = end;
    var result = sentence.substring(beginIndex$1, endIndex$1);
    return ((result === "") ? new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$()) : $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$().hU(result));
  }
});
$p.ry = (function(word, node, offset) {
  return $m_s_concurrent_Future$().oH(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    if (((node.nodeType | 0) !== (Node.TEXT_NODE | 0))) {
      return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$());
    } else {
      var fullText = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__collectSurroundingText__Lorg_scalajs_dom_Node__I__I__T(this, node, offset, 400);
      if ((fullText === "")) {
        return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$());
      } else {
        var x10 = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__findSentenceContaining__T__T__s_Option(this, fullText, word);
        if ((x10 instanceof $c_s_Some)) {
          return this.tt(word, x10.eh);
        }
        if (($m_s_None$() === x10)) {
          return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$());
        }
        throw new $c_s_MatchError(x10);
      }
    }
  })), $m_s_concurrent_ExecutionContext$().cH());
});
$p.ri = (function(sentence) {
  return $m_s_concurrent_Future$().oH(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_s_util_Right($p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__detectByScript__T__Lcom_github_pwharned_clausula_extension_domain_Language(this, sentence)))), $m_s_concurrent_ExecutionContext$().cH());
});
var $d_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction, "com.github.pwharned.clausula.extension.interpreters.DomTextExtraction", ({
  dV: 1,
  dr: 1
}));
function $p_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient__post__sjs_js_Object__s_concurrent_Future($thiz, body) {
  return $m_sjs_js_Thenable$ThenableOps$().kD(new Promise(((resolve$2, _$1$2) => {
    var message = ({
      "type": "ANKI_REQUEST",
      "payload": body
    });
    return chrome.runtime.sendMessage(message, $m_sjs_js_Any$().gK(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((response$2) => {
      var lastError = chrome.runtime.lastError;
      return (((lastError !== null) && (!$m_sr_BoxesRunTime$().n(lastError, (void 0)))) ? (console.error(("Chrome runtime error: " + lastError.message)), resolve$2(new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$()))) : (((response$2 === null) || $m_sr_BoxesRunTime$().n(response$2, (void 0))) ? resolve$2(new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$())) : ((!(!response$2.success)) ? (console.log(("AnkiConnect response: " + JSON.stringify(response$2.data))), resolve$2(new $c_s_util_Right(response$2.data))) : (console.error(("AnkiConnect failed: " + response$2.error)), resolve$2(new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$()))))));
    }))));
  })));
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient() {
}
$h_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient.prototype = $p;
$p.qC = (function(note) {
  var $x_1 = note.fI;
  var this$2 = note.fF;
  var s = (("" + $x_1) + (this$2.d() ? "" : this$2.x()));
  var this$5 = note.fJ;
  var s$1 = (this$5.d() ? "" : this$5.x());
  var fields = ({
    "Text": s,
    "Translation": s$1
  });
  var d = note.fG;
  var _2 = [...$m_sjsr_Compat$().pH(note.fH)];
  var noteObj = ({
    "deckName": d,
    "modelName": "Cloze",
    "fields": fields,
    "tags": _2
  });
  var _2$1 = ({
    "note": noteObj
  });
  return $p_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient__post__sjs_js_Object__s_concurrent_Future(this, ({
    "action": "addNote",
    "version": 6,
    "params": _2$1
  })).i6(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    if ((x$1$2 instanceof $c_s_util_Left)) {
      return new $c_s_util_Left(x$1$2.ck);
    }
    if ((x$1$2 instanceof $c_s_util_Right)) {
      var response = x$1$2.bI;
      var error = response.error;
      if (((error === null) || $m_sr_BoxesRunTime$().n(error, (void 0)))) {
        var $x_2 = $m_RTLong$().kc((+response.result));
        return new $c_s_util_Right($x_2);
      } else {
        console.error(("AnkiConnect error: " + error));
        return new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, error));
      }
    }
    throw new $c_s_MatchError(x$1$2);
  })), $m_s_concurrent_ExecutionContext$().cH());
});
var $d_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient, "com.github.pwharned.clausula.extension.interpreters.FetchAnkiClient", ({
  dW: 1,
  dp: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration() {
}
$h_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration.prototype = $p;
$p.rP = (function(word, sentence, language) {
  return $m_sjs_js_Thenable$ThenableOps$().kD(new Promise(((resolve$2, _$1$2) => {
    var s = language.es();
    var message = ({
      "type": "AUDIO_REQUEST",
      "word": word,
      "sentence": sentence,
      "lang": s
    });
    return chrome.runtime.sendMessage(message, $m_sjs_js_Any$().gK(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((response$2) => {
      var lastError = chrome.runtime.lastError;
      if (((lastError !== null) && (!$m_sr_BoxesRunTime$().n(lastError, (void 0))))) {
        var message$1 = (((((((("Audio runtime error: " + lastError.message) + " for {") + word) + ", ") + sentence) + " ") + language.fl()) + " ");
        console.error(message$1);
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, message$1)));
      } else if (((response$2 === null) || $m_sr_BoxesRunTime$().n(response$2, (void 0)))) {
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, (((((("No response from background worker  for {" + word) + ", ") + sentence) + " ") + language.fl()) + " "))));
      } else if ((!(!response$2.success))) {
        var filename = response$2.filename;
        console.log(("Audio stored: " + filename));
        return resolve$2(new $c_s_util_Right((("[sound:" + filename) + "]")));
      } else {
        var error = response$2.error;
        console.error((((((((("Audio error: for {" + word) + ", ") + sentence) + ": ") + language.fl()) + " : ") + error) + " "));
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, error)));
      }
    }))));
  })));
});
var $d_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration, "com.github.pwharned.clausula.extension.interpreters.FetchAudioGeneration", ({
  dX: 1,
  dq: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchTranslation() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchTranslation.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchTranslation;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_interpreters_FetchTranslation() {
}
$h_Lcom_github_pwharned_clausula_extension_interpreters_FetchTranslation.prototype = $p;
$p.pL = (function(text, source, target, t) {
  return $m_sjs_js_Thenable$ThenableOps$().kD(new Promise(((resolve$2, _$1$2) => {
    var s = t.pQ(text);
    var s$1 = source.es();
    var s$2 = target.es();
    var message = ({
      "type": "TRANSLATE_REQUEST",
      "text": s,
      "langSrc": s$1,
      "langTgt": s$2
    });
    return chrome.runtime.sendMessage(message, $m_sjs_js_Any$().gK(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((response$2) => {
      var lastError = chrome.runtime.lastError;
      if (((lastError !== null) && (!$m_sr_BoxesRunTime$().n(lastError, (void 0))))) {
        console.error(("Translation runtime error: " + lastError.message));
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, lastError.message)));
      } else if (((response$2 === null) || $m_sr_BoxesRunTime$().n(response$2, (void 0)))) {
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, "No response from background worker")));
      } else if ((!(!response$2.success))) {
        var translatedText = response$2.result;
        matchResult1: {
          var detectedLang;
          var x1 = response$2.detectedLang;
          if (((x1 === null) || $m_sr_BoxesRunTime$().n(x1, (void 0)))) {
            var detectedLang = $m_s_None$();
            break matchResult1;
          }
          var detectedLang = new $c_s_Some($m_Lcom_github_pwharned_clausula_extension_domain_Language$().rM(x1));
        }
        console.log(((((((("Translation result: " + source.es()) + " to ") + target.es()) + " ") + translatedText) + ", detected: ") + detectedLang));
        return resolve$2(new $c_s_util_Right(new $c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult(translatedText, detectedLang)));
      } else {
        var error = response$2.error;
        console.error(("Translation error: " + error));
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, error)));
      }
    }))));
  })));
});
var $d_Lcom_github_pwharned_clausula_extension_interpreters_FetchTranslation = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_interpreters_FetchTranslation, "com.github.pwharned.clausula.extension.interpreters.FetchTranslation", ({
  dY: 1,
  ds: 1
}));
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $thiz.fu(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $thiz.fv(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.fw(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.fw(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.lv = null;
  this.lu = null;
  this.ip = false;
  this.lu = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.ip = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.fz = (function() {
  return this.lv;
});
$p.oL = (function(x$0) {
  this.lv = x$0;
});
$p.ps = (function(subscription) {
  if (this.ip) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.lu.M();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.pk = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.ip = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  ek: 1,
  bK: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.lP = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$() {
}
$h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = $p;
$p.fz = (function() {
  return this.lP;
});
$p.oL = (function(x$0) {
  this.lP = x$0;
});
$p.pk = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.ps = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  eB: 1,
  bK: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$$anon$2(outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$$anon$2() {
}
$h_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = $p;
$p.jY = (function(scalaValue) {
  return scalaValue;
});
$p.jX = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  eH: 1,
  bN: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.my = null;
  this.mA = null;
  this.mz = null;
  this.iy = null;
  this.my = getRawDomValue;
  this.mA = setRawDomValue;
  this.mz = separator;
  this.iy = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.bJ = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().o.qr(), $m_Lcom_raquo_laminar_keys_CompositeKey$().po(items, this.mz)));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  f7: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.iz = null;
  this.iz = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.oQ = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().po(domValue, this.iz);
});
$p.oS = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.iz, "");
});
$p.jX = (function(domValue) {
  return this.oQ(domValue);
});
$p.jY = (function(scalaValue) {
  return this.oS(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  f9: 1,
  bN: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$.prototype = $p;
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$, "com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$", ({
  fb: 1,
  fa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.ho = null;
  this.ho = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  fe: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.fT = null;
  this.iA = null;
  this.fT = name;
  this.iA = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  ff: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.eW = null;
  this.eW = name;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bQ)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  bQ: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.iC = null;
  this.iB = null;
  this.hp = null;
  this.hq = null;
  this.iC = localName;
  this.iB = codec;
  var this$2 = (namespacePrefix.d() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.x() + ":") + localName)));
  this.hp = (this$2.d() ? localName : this$2.x());
  this.hq = (namespacePrefix.d() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().ss(namespacePrefix.x())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  fg: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = $p;
$p.cl = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  fo: 1,
  a6: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.mM = null;
  this.mM = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = $p;
$p.cl = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.mM.c(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.b8 || (!when))) {
    f();
  } else {
    this$2.b8 = true;
    try {
      f();
    } finally {
      this$2.b8 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  fp: 1,
  a6: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1() {
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1, "com.raquo.laminar.modifiers.RenderableNode$$anon$1", ({
  fs: 1,
  fq: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$() {
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$, "com.raquo.laminar.modifiers.RenderableSeq$scalaArrayRenderable$", ({
  fu: 1,
  ft: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$;
function $m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$ = new $c_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render$2, outer) {
  this.mO = null;
  this.mO = render$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = $p;
$p.qT = (function(value) {
  return this.mO.c(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  fx: 1,
  fv: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.oM(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().rh($thiz.an(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.iP = null;
  this.iP = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.am = (function(modifiers) {
  var element = this.qX();
  modifiers.bc(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((modifier) => {
    modifier.cl(element);
  })));
  return element;
});
$p.qX = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().rc(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  fH: 1,
  bU: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.mS = null;
  this.mS = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  fI: 1,
  bU: 1
}));
/** @constructor */
function $c_jl_Character$() {
  this.iQ = null;
  $n_jl_Character$ = this;
  this.iQ = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.kE = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.rj = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().qV(this.iQ, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.iQ.a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  fS: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.gX = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.pg = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().gX(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().gX(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().gX(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.rj(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().gX(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().gX(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
$p.dX = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  fY: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.eZ = null;
  this.fX = null;
  this.f0 = null;
  this.f1 = 0;
  this.eY = 0;
  this.eZ = declaringClass;
  this.fX = methodName;
  this.f0 = fileName;
  this.f1 = lineNumber;
  this.eY = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.g = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.f0 === that.f0) && (this.f1 === that.f1)) && (this.eY === that.eY)) && (this.eZ === that.eZ)) && (this.fX === that.fX)));
});
$p.h = (function() {
  var result = "";
  if ((this.eZ !== "<jscode>")) {
    result = ((("" + result) + this.eZ) + ".");
  }
  result = (("" + result) + this.fX);
  if ((this.f0 === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.f0);
    if ((this.f1 >= 0)) {
      result = ((result + ":") + this.f1);
      if ((this.eY >= 0)) {
        result = ((result + ":") + this.eY);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.i = (function() {
  return (((($f_T__hashCode__I(this.eZ) ^ $f_T__hashCode__I(this.fX)) ^ $f_T__hashCode__I(this.f0)) ^ this.f1) ^ this.eY);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c3)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  c3: 1,
  a: 1
}));
/** @constructor */
function $c_jl_String$() {
}
$p = $c_jl_String$.prototype = new $h_O();
$p.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
}
$h_jl_String$.prototype = $p;
$p.su = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  var result = "";
  var i = offset;
  while ((i !== end)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  gc: 1,
  a: 1
}));
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$();
  }
  return $n_jl_String$;
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.mX = s;
  $thiz.fY = e;
  $thiz.mY = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fm();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.mX = null;
    this.fY = null;
    this.mY = false;
    this.mW = null;
    this.ee = null;
  }
  pd(cause) {
    this.fY = cause;
    return this;
  }
  eu() {
    return this.mX;
  }
  fm() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.R : this);
    this.mW = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  i2() {
    if ((this.ee === null)) {
      if (this.mY) {
        this.ee = $m_jl_StackTrace$().rx(this.mW);
      } else {
        this.ee = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.ee;
  }
  gZ(s) {
    this.i2();
    var t = this.h();
    s.ey(t);
    if ((this.ee.a.length !== 0)) {
      var i = 0;
      while ((i < this.ee.a.length)) {
        var t$1 = ("  at " + this.ee.a[i]);
        s.ey(t$1);
        i = ((1 + i) | 0);
      }
    } else {
      s.ey("  <no stack trace available>");
    }
    var wCause = this;
    while (((wCause !== wCause.fY) && (wCause.fY !== null))) {
      var parentTrace = wCause.i2();
      wCause = wCause.fY;
      var thisTrace = wCause.i2();
      var thisLength = thisTrace.a.length;
      var parentLength = parentTrace.a.length;
      var t$2 = ("Caused by: " + wCause);
      s.ey(t$2);
      if ((thisLength !== 0)) {
        var sameFrameCount = 0;
        while (true) {
          if (((sameFrameCount < thisLength) && (sameFrameCount < parentLength))) {
            var x = thisTrace.a[((((thisLength - sameFrameCount) | 0) - 1) | 0)];
            var x$2 = parentTrace.a[((((parentLength - sameFrameCount) | 0) - 1) | 0)];
            var $x_1 = ((x === null) ? (x$2 === null) : x.g(x$2));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            sameFrameCount = ((1 + sameFrameCount) | 0);
          } else {
            break;
          }
        }
        if ((sameFrameCount > 0)) {
          sameFrameCount = ((sameFrameCount - 1) | 0);
        }
        var lengthToPrint = ((thisLength - sameFrameCount) | 0);
        var i$2 = 0;
        while ((i$2 < lengthToPrint)) {
          var t$3 = ("  at " + thisTrace.a[i$2]);
          s.ey(t$3);
          i$2 = ((1 + i$2) | 0);
        }
        if ((sameFrameCount > 0)) {
          var t$4 = (("  ... " + sameFrameCount) + " more");
          s.ey(t$4);
        }
      } else {
        s.ey("  <no stack trace available>");
      }
    }
  }
  h() {
    var className = $objectClassName(this);
    var message = this.eu();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  i() {
    return $c_O.prototype.i.call(this);
  }
  g(that) {
    return $c_O.prototype.g.call(this, that);
  }
  get "message"() {
    var m = this.eu();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.h();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
}
function $ct_Ljava_nio_charset_Charset__T__AT__($thiz, canonicalName, _aliases) {
  $thiz.by = canonicalName;
  $thiz.ct = _aliases;
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_charset_Charset() {
  this.by = null;
  this.ct = null;
}
$p = $c_Ljava_nio_charset_Charset.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_charset_Charset;
/** @constructor */
function $h_Ljava_nio_charset_Charset() {
}
$h_Ljava_nio_charset_Charset.prototype = $p;
$p.g = (function(that) {
  return ((that instanceof $c_Ljava_nio_charset_Charset) && (this.by === that.by));
});
$p.h = (function() {
  return this.by;
});
$p.i = (function() {
  return $f_T__hashCode__I(this.by);
});
function $isArrayOf_Ljava_nio_charset_Charset(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
/** @constructor */
function $c_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon$Encoder(outer) {
  this.g0 = 0.0;
  this.f3 = null;
  this.fZ = null;
  this.f4 = null;
  this.dl = 0;
  this.na = null;
  this.na = outer;
  $ct_Ljava_nio_charset_CharsetEncoder__Ljava_nio_charset_Charset__F__F__(this, outer, 1.0, 1.0);
}
$p = $c_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon$Encoder.prototype = new $h_Ljava_nio_charset_CharsetEncoder();
$p.constructor = $c_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon$Encoder;
/** @constructor */
function $h_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon$Encoder() {
}
$h_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon$Encoder.prototype = $p;
$p.jZ = (function(in$1, out) {
  var maxValue = this.na.ht;
  if ((((in$1.G - in$1.s) | 0) === 0)) {
    return $m_Ljava_nio_charset_CoderResult$().dm;
  } else {
    while (true) {
      if ((in$1.s === in$1.G)) {
        return $m_Ljava_nio_charset_CoderResult$().dm;
      } else if ((out.s === out.G)) {
        return $m_Ljava_nio_charset_CoderResult$().cu;
      } else {
        var c = in$1.fo();
        if ((c <= maxValue)) {
          out.a7(((c << 24) >> 24));
        } else if (((64512 & c) === 56320)) {
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 1) | 0));
          return $m_Ljava_nio_charset_CoderResult$().dn;
        } else if (((64512 & c) === 55296)) {
          if ((in$1.s !== in$1.G)) {
            var c2 = in$1.fo();
            $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 2) | 0));
            return (((64512 & c2) === 56320) ? $m_Ljava_nio_charset_CoderResult$().n7 : $m_Ljava_nio_charset_CoderResult$().dn);
          } else {
            $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 1) | 0));
            return $m_Ljava_nio_charset_CoderResult$().dm;
          }
        } else {
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 1) | 0));
          return $m_Ljava_nio_charset_CoderResult$().n6;
        }
      }
    }
  }
});
var $d_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon$Encoder = new $TypeData().i($c_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon$Encoder, "java.nio.charset.ISO_8859_1_And_US_ASCII_Common$Encoder", ({
  gy: 1,
  b0: 1
}));
/** @constructor */
function $c_Ljava_nio_charset_UTF\uff3f16\uff3fCommon$Encoder(outer) {
  this.g0 = 0.0;
  this.f3 = null;
  this.fZ = null;
  this.f4 = null;
  this.dl = 0;
  this.hu = false;
  this.j2 = null;
  this.j2 = outer;
  $ct_Ljava_nio_charset_CharsetEncoder__Ljava_nio_charset_Charset__F__F__AB__(this, outer, 2.0, ((outer.cQ === 0) ? 4.0 : 2.0), ((outer.cQ === 2) ? new $ac_B(new Int8Array([(-3), (-1)])) : new $ac_B(new Int8Array([(-1), (-3)]))));
  this.hu = (outer.cQ === 0);
}
$p = $c_Ljava_nio_charset_UTF\uff3f16\uff3fCommon$Encoder.prototype = new $h_Ljava_nio_charset_CharsetEncoder();
$p.constructor = $c_Ljava_nio_charset_UTF\uff3f16\uff3fCommon$Encoder;
/** @constructor */
function $h_Ljava_nio_charset_UTF\uff3f16\uff3fCommon$Encoder() {
}
$h_Ljava_nio_charset_UTF\uff3f16\uff3fCommon$Encoder.prototype = $p;
$p.pc = (function() {
  this.hu = (this.j2.cQ === 0);
});
$p.jZ = (function(in$1, out) {
  if (this.hu) {
    if ((((out.G - out.s) | 0) < 2)) {
      return $m_Ljava_nio_charset_CoderResult$().cu;
    } else {
      out.a7((-2));
      out.a7((-1));
      this.hu = false;
    }
  }
  var bigEndian = (this.j2.cQ !== 2);
  while (true) {
    if ((((in$1.G - in$1.s) | 0) === 0)) {
      return $m_Ljava_nio_charset_CoderResult$().dm;
    } else {
      var c1 = in$1.fo();
      if (((64512 & c1) === 56320)) {
        $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 1) | 0));
        return $m_Ljava_nio_charset_CoderResult$().dn;
      } else if (((64512 & c1) !== 55296)) {
        if ((((out.G - out.s) | 0) < 2)) {
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 1) | 0));
          return $m_Ljava_nio_charset_CoderResult$().cu;
        } else if (bigEndian) {
          out.a7((((c1 >> 8) << 24) >> 24));
          out.a7(((c1 << 24) >> 24));
        } else {
          out.a7(((c1 << 24) >> 24));
          out.a7((((c1 >> 8) << 24) >> 24));
        }
      } else if ((((in$1.G - in$1.s) | 0) < 1)) {
        $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 1) | 0));
        return $m_Ljava_nio_charset_CoderResult$().dm;
      } else {
        var c2 = in$1.fo();
        if (((64512 & c2) !== 56320)) {
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 2) | 0));
          return $m_Ljava_nio_charset_CoderResult$().dn;
        } else if ((((out.G - out.s) | 0) < 4)) {
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 2) | 0));
          return $m_Ljava_nio_charset_CoderResult$().cu;
        } else {
          if (bigEndian) {
            out.a7((((c1 >> 8) << 24) >> 24));
            out.a7(((c1 << 24) >> 24));
          } else {
            out.a7(((c1 << 24) >> 24));
            out.a7((((c1 >> 8) << 24) >> 24));
          }
          if (bigEndian) {
            out.a7((((c2 >> 8) << 24) >> 24));
            out.a7(((c2 << 24) >> 24));
          } else {
            out.a7(((c2 << 24) >> 24));
            out.a7((((c2 >> 8) << 24) >> 24));
          }
        }
      }
    }
  }
});
var $d_Ljava_nio_charset_UTF\uff3f16\uff3fCommon$Encoder = new $TypeData().i($c_Ljava_nio_charset_UTF\uff3f16\uff3fCommon$Encoder, "java.nio.charset.UTF_16_Common$Encoder", ({
  gD: 1,
  b0: 1
}));
/** @constructor */
function $c_Ljava_nio_charset_UTF\uff3f8$Encoder() {
  this.g0 = 0.0;
  this.f3 = null;
  this.fZ = null;
  this.f4 = null;
  this.dl = 0;
  $ct_Ljava_nio_charset_CharsetEncoder__Ljava_nio_charset_Charset__F__F__(this, $m_Ljava_nio_charset_UTF\uff3f8$(), 1.100000023841858, 3.0);
}
$p = $c_Ljava_nio_charset_UTF\uff3f8$Encoder.prototype = new $h_Ljava_nio_charset_CharsetEncoder();
$p.constructor = $c_Ljava_nio_charset_UTF\uff3f8$Encoder;
/** @constructor */
function $h_Ljava_nio_charset_UTF\uff3f8$Encoder() {
}
$h_Ljava_nio_charset_UTF\uff3f8$Encoder.prototype = $p;
$p.jZ = (function(in$1, out) {
  while (true) {
    if ((in$1.s === in$1.G)) {
      return $m_Ljava_nio_charset_CoderResult$().dm;
    } else {
      var c1 = in$1.fo();
      if ((c1 < 128)) {
        if ((out.s === out.G)) {
          var result = $m_Ljava_nio_charset_CoderResult$().cu;
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 1) | 0));
          return result;
        } else {
          out.a7(((c1 << 24) >> 24));
        }
      } else if ((c1 < 2048)) {
        if ((((out.G - out.s) | 0) < 2)) {
          var result$1 = $m_Ljava_nio_charset_CoderResult$().cu;
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 1) | 0));
          return result$1;
        } else {
          out.a7((((192 | (c1 >> 6)) << 24) >> 24));
          out.a7((((128 | (63 & c1)) << 24) >> 24));
        }
      } else if ((!($m_Ljava_nio_charset_UTF\uff3f8$(), ((63488 & c1) === 55296)))) {
        if ((((out.G - out.s) | 0) < 3)) {
          var result$2 = $m_Ljava_nio_charset_CoderResult$().cu;
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 1) | 0));
          return result$2;
        } else {
          out.a7((((224 | (c1 >> 12)) << 24) >> 24));
          out.a7((((128 | (63 & (c1 >> 6))) << 24) >> 24));
          out.a7((((128 | (63 & c1)) << 24) >> 24));
        }
      } else if (((64512 & c1) === 55296)) {
        if ((in$1.s === in$1.G)) {
          var result$3 = $m_Ljava_nio_charset_CoderResult$().dm;
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 1) | 0));
          return result$3;
        } else {
          var c2 = in$1.fo();
          if (((64512 & c2) !== 56320)) {
            var result$4 = $m_Ljava_nio_charset_CoderResult$().dn;
            $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 2) | 0));
            return result$4;
          } else if ((((out.G - out.s) | 0) < 4)) {
            var result$5 = $m_Ljava_nio_charset_CoderResult$().cu;
            $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 2) | 0));
            return result$5;
          } else {
            var cp = ((((64 + (1023 & c1)) | 0) << 10) | (1023 & c2));
            out.a7((((240 | (cp >> 18)) << 24) >> 24));
            out.a7((((128 | (63 & (cp >> 12))) << 24) >> 24));
            out.a7((((128 | (63 & (cp >> 6))) << 24) >> 24));
            out.a7((((128 | (63 & cp)) << 24) >> 24));
          }
        }
      } else {
        var result$6 = $m_Ljava_nio_charset_CoderResult$().dn;
        $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.s - 1) | 0));
        return result$6;
      }
    }
  }
});
var $d_Ljava_nio_charset_UTF\uff3f8$Encoder = new $TypeData().i($c_Ljava_nio_charset_UTF\uff3f8$Encoder, "java.nio.charset.UTF_8$Encoder", ({
  gF: 1,
  b0: 1
}));
function $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, value) {
  $thiz.O = value;
  return $thiz;
}
/** @constructor */
function $c_ju_concurrent_atomic_AtomicReference() {
  this.O = null;
}
$p = $c_ju_concurrent_atomic_AtomicReference.prototype = new $h_O();
$p.constructor = $c_ju_concurrent_atomic_AtomicReference;
/** @constructor */
function $h_ju_concurrent_atomic_AtomicReference() {
}
$h_ju_concurrent_atomic_AtomicReference.prototype = $p;
$p.gH = (function(expect, update) {
  if (Object.is(expect, this.O)) {
    this.O = update;
    return true;
  } else {
    return false;
  }
});
$p.h = (function() {
  return ("" + this.O);
});
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.hv === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "No match available");
  }
  return $thiz.hv;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.nc = null;
  this.nb = null;
  this.nd = 0;
  this.j3 = null;
  this.j4 = 0;
  this.hv = null;
  this.nc = pattern0;
  this.nb = input0;
  this.nd = 0;
  this.j3 = this.nb;
  this.j4 = 0;
  this.hv = null;
}
$p = $c_ju_regex_Matcher.prototype = new $h_O();
$p.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $p;
$p.rB = (function() {
  var this$1 = this.nc;
  var input = this.j3;
  var start = this.j4;
  var mtch = this$1.sh(input, start);
  var end = (this$1.j5.lastIndex | 0);
  this.j4 = ((mtch !== null) ? ((end === (mtch.index | 0)) ? ((1 + end) | 0) : end) : ((1 + this.j3.length) | 0));
  this.hv = mtch;
  return (mtch !== null);
});
$p.pD = (function() {
  return ((($p_ju_regex_Matcher__ensureLastMatch__O(this).index | 0) + this.nd) | 0);
});
$p.oT = (function() {
  return ((this.pD() + this.rY().length) | 0);
});
$p.rY = (function() {
  return $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
});
var $d_ju_regex_Matcher = new $TypeData().i($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  gM: 1,
  gL: 1
}));
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.ne = null;
  this.nf = null;
  this.ng = false;
  this.j5 = null;
  this.ne = _pattern;
  this.nf = jsFlags;
  this.ng = sticky;
  this.j5 = new RegExp(jsPattern, (this.nf + (this.ng ? "gy" : "g")));
  new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$p = $c_ju_regex_Pattern.prototype = new $h_O();
$p.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $p;
$p.sh = (function(input, start) {
  var regexp = this.j5;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$p.h = (function() {
  return this.ne;
});
$p.si = (function(inputStr, limit) {
  if ((inputStr === "")) {
    return new ($d_T.r().C)([""]);
  } else {
    var lim = ((limit > 0) ? limit : 2147483647);
    var matcher = new $c_ju_regex_Matcher(this, inputStr);
    var result = [];
    var prevEnd = 0;
    while ((((result.length | 0) < ((lim - 1) | 0)) && matcher.rB())) {
      if ((matcher.oT() !== 0)) {
        var beginIndex = prevEnd;
        var endIndex = matcher.pD();
        var $x_1 = result.push(inputStr.substring(beginIndex, endIndex));
      }
      prevEnd = matcher.oT();
    }
    var beginIndex$1 = prevEnd;
    result.push(inputStr.substring(beginIndex$1));
    var actualLength = (result.length | 0);
    if ((limit === 0)) {
      while (true) {
        if ((actualLength !== 0)) {
          var x = result[((actualLength - 1) | 0)];
          var $x_2 = ((x !== null) && $dp_equals__O__Z(x, ""));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          actualLength = ((actualLength - 1) | 0);
        } else {
          break;
        }
      }
    }
    var r = new ($d_T.r().C)(actualLength);
    var end = actualLength;
    var i = 0;
    while ((i < end)) {
      var value = i;
      r.a[value] = result[value];
      i = ((1 + i) | 0);
    }
    return r;
  }
});
var $d_ju_regex_Pattern = new $TypeData().i($c_ju_regex_Pattern, "java.util.regex.Pattern", ({
  gN: 1,
  a: 1
}));
/** @constructor */
function $c_ju_regex_Pattern$() {
}
$p = $c_ju_regex_Pattern$.prototype = new $h_O();
$p.constructor = $c_ju_regex_Pattern$;
/** @constructor */
function $h_ju_regex_Pattern$() {
}
$h_ju_regex_Pattern$.prototype = $p;
$p.sI = (function(s) {
  var result = "\\Q";
  var start = 0;
  var fromIndex = start;
  var end = (s.indexOf("\\E", fromIndex) | 0);
  while ((end >= 0)) {
    var $x_1 = result;
    var beginIndex = start;
    var endIndex = end;
    result = ((("" + $x_1) + s.substring(beginIndex, endIndex)) + "\\E\\\\E\\Q");
    start = ((2 + end) | 0);
    var fromIndex$1 = start;
    end = (s.indexOf("\\E", fromIndex$1) | 0);
  }
  var $x_2 = result;
  var beginIndex$1 = start;
  return ((("" + $x_2) + s.substring(beginIndex$1)) + "\\E");
});
var $d_ju_regex_Pattern$ = new $TypeData().i($c_ju_regex_Pattern$, "java.util.regex.Pattern$", ({
  gO: 1,
  a: 1
}));
var $n_ju_regex_Pattern$;
function $m_ju_regex_Pattern$() {
  if ((!$n_ju_regex_Pattern$)) {
    $n_ju_regex_Pattern$ = new $c_ju_regex_Pattern$();
  }
  return $n_ju_regex_Pattern$;
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
$p.tF = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.nX;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.cK(x) ? $thiz.c(x) : default$1.c(x));
}
/** @constructor */
function $c_sci_LazyList$Uninitialized$() {
}
$p = $c_sci_LazyList$Uninitialized$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$Uninitialized$;
/** @constructor */
function $h_sci_LazyList$Uninitialized$() {
}
$h_sci_LazyList$Uninitialized$.prototype = $p;
var $d_sci_LazyList$Uninitialized$ = new $TypeData().i($c_sci_LazyList$Uninitialized$, "scala.collection.immutable.LazyList$Uninitialized$", ({
  hU: 1,
  a: 1
}));
var $n_sci_LazyList$Uninitialized$;
function $m_sci_LazyList$Uninitialized$() {
  if ((!$n_sci_LazyList$Uninitialized$)) {
    $n_sci_LazyList$Uninitialized$ = new $c_sci_LazyList$Uninitialized$();
  }
  return $n_sci_LazyList$Uninitialized$;
}
/** @constructor */
function $c_sci_MapNode() {
}
$p = $c_sci_MapNode.prototype = new $h_sci_Node();
$p.constructor = $c_sci_MapNode;
/** @constructor */
function $h_sci_MapNode() {
}
$h_sci_MapNode.prototype = $p;
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.aZ($m_scm_Buffer$().p3(elems));
  } else {
    var it = elems.m();
    while (it.p()) {
      $thiz.b0(it.l());
    }
  }
  return $thiz;
}
function $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V($thiz, runnable) {
  var tl = $thiz.o7;
  var b = tl.x();
  if ((b instanceof $c_s_concurrent_BatchingExecutor$SyncBatch)) {
    b.sF(runnable);
  } else {
    var i = ((b !== null) ? b : 0);
    if ((i < 16)) {
      tl.h4(((1 + i) | 0));
      try {
        runnable.ez();
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        if (false) {
          $m_s_concurrent_ExecutionContext$().ff.c(e$2);
        } else {
          matchResult3: {
            if ($m_s_util_control_NonFatal$().hV(e$2)) {
              $m_s_concurrent_ExecutionContext$().ff.c(e$2);
              break matchResult3;
            }
            throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
          }
        }
      } finally {
        tl.h4(b);
      }
    } else {
      var batch = new $c_s_concurrent_BatchingExecutor$SyncBatch($thiz, runnable);
      tl.h4(batch);
      batch.ez();
      tl.h4(b);
    }
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$ManyCallbacks(first, rest) {
  this.jD = null;
  this.jE = null;
  this.jD = first;
  this.jE = rest;
}
$p = $c_s_concurrent_impl_Promise$ManyCallbacks.prototype = new $h_O();
$p.constructor = $c_s_concurrent_impl_Promise$ManyCallbacks;
/** @constructor */
function $h_s_concurrent_impl_Promise$ManyCallbacks() {
}
$h_s_concurrent_impl_Promise$ManyCallbacks.prototype = $p;
$p.h = (function() {
  return "ManyCallbacks";
});
function $isArrayOf_s_concurrent_impl_Promise$ManyCallbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d4)));
}
var $d_s_concurrent_impl_Promise$ManyCallbacks = new $TypeData().i($c_s_concurrent_impl_Promise$ManyCallbacks, "scala.concurrent.impl.Promise$ManyCallbacks", ({
  d4: 1,
  aQ: 1
}));
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.h = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.h = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.h = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.h = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.hM = false;
  this.hM = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.h = (function() {
  return ("" + this.hM);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  jD: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.eq = 0;
  this.eq = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.h = (function() {
  return ("" + this.eq);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  jF: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.fg = null;
  this.fg = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.h = (function() {
  return ("" + this.fg);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  jJ: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.aj = 0;
  this.dT = 0;
  this.op = 0;
  this.jF = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.aj = $f_T__hashCode__I("Seq");
  this.dT = $f_T__hashCode__I("Map");
  this.op = $f_T__hashCode__I("Set");
  this.jF = this.kF($m_sci_Nil$(), this.dT);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cr = (function(x, y) {
  return this.pM($m_sr_Statics$().L(x), $m_sr_Statics$().L(y), (-889275714));
});
$p.pB = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.s3(xs, this.aj) : ((xs instanceof $c_sci_List) ? this.sk(xs, this.aj) : this.sC(xs, this.aj)));
});
$p.sn = (function(xs) {
  if (xs.d()) {
    return this.jF;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.dT;
    xs.et(accum);
    h = this.w(h, accum.hO);
    h = this.w(h, accum.hP);
    h = this.co(h, accum.hQ);
    return this.a6(h, accum.hR);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  kf: 1,
  ke: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$accum$1() {
  this.hO = 0;
  this.hP = 0;
  this.hR = 0;
  this.hQ = 0;
  this.hO = 0;
  this.hP = 0;
  this.hR = 0;
  this.hQ = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.h = (function() {
  return "<function2>";
});
$p.qP = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cr(k, v);
  this.hO = ((this.hO + h) | 0);
  this.hP = (this.hP ^ h);
  this.hQ = Math.imul(this.hQ, (1 | h));
  this.hR = ((1 + this.hR) | 0);
});
$p.fi = (function(v1, v2) {
  this.qP(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  kg: 1,
  b5: 1
}));
function $s_Lcom_github_pwharned_clausula_extension_ExtensionStatus$__Idle__Lcom_github_pwharned_clausula_extension_ExtensionStatus() {
  $m_Lcom_github_pwharned_clausula_extension_ExtensionStatus$();
  return $t_Lcom_github_pwharned_clausula_extension_ExtensionStatus$__Idle;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$() {
  $n_Lcom_github_pwharned_clausula_extension_ExtensionStatus$ = this;
  $t_Lcom_github_pwharned_clausula_extension_ExtensionStatus$__Idle = new $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1("Idle", 0);
}
$p = $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_ExtensionStatus$() {
}
$h_Lcom_github_pwharned_clausula_extension_ExtensionStatus$.prototype = $p;
var $d_Lcom_github_pwharned_clausula_extension_ExtensionStatus$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$, "com.github.pwharned.clausula.extension.ExtensionStatus$", ({
  di: 1,
  u: 1,
  aC: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_ExtensionStatus$;
function $m_Lcom_github_pwharned_clausula_extension_ExtensionStatus$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_ExtensionStatus$)) {
    $n_Lcom_github_pwharned_clausula_extension_ExtensionStatus$ = new $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_ExtensionStatus$;
}
function $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState() {
  $m_Lcom_github_pwharned_clausula_extension_PopupState$();
  return $t_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden;
}
function $s_Lcom_github_pwharned_clausula_extension_PopupState$__Loading__Lcom_github_pwharned_clausula_extension_PopupState() {
  $m_Lcom_github_pwharned_clausula_extension_PopupState$();
  return $t_Lcom_github_pwharned_clausula_extension_PopupState$__Loading;
}
function $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState() {
  $m_Lcom_github_pwharned_clausula_extension_PopupState$();
  return $t_Lcom_github_pwharned_clausula_extension_PopupState$__Creating;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$() {
  $n_Lcom_github_pwharned_clausula_extension_PopupState$ = this;
  $t_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden = new $c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1("Hidden", 0);
  $t_Lcom_github_pwharned_clausula_extension_PopupState$__Loading = new $c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1("Loading", 1);
  $t_Lcom_github_pwharned_clausula_extension_PopupState$__Creating = new $c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1("Creating", 3);
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$.prototype = $p;
var $d_Lcom_github_pwharned_clausula_extension_PopupState$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$, "com.github.pwharned.clausula.extension.PopupState$", ({
  dm: 1,
  u: 1,
  aC: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_PopupState$;
function $m_Lcom_github_pwharned_clausula_extension_PopupState$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_PopupState$)) {
    $n_Lcom_github_pwharned_clausula_extension_PopupState$ = new $c_Lcom_github_pwharned_clausula_extension_PopupState$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_PopupState$;
}
function $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  return $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English;
}
function $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Russian__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  return $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Russian;
}
function $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__French__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  return $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__French;
}
function $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__German__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  return $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__German;
}
function $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Spanish__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  return $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Spanish;
}
function $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Japanese__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  return $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Japanese;
}
function $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Chinese__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  return $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Chinese;
}
function $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Arabic__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  return $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Arabic;
}
function $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Farsi__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  return $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Farsi;
}
function $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Latin__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  return $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Latin;
}
function $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Hebrew__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  return $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Hebrew;
}
function $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  return $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$() {
  this.kH = null;
  $n_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$ = this;
  $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1();
  $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Russian = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2();
  $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__French = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3();
  $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__German = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4();
  $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Spanish = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5();
  $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Japanese = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6();
  $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Chinese = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7();
  $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Arabic = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8();
  $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Farsi = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9();
  $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Latin = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10();
  $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Hebrew = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11();
  $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12();
  this.kH = new ($d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage.r().C)([$s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Russian__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__French__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__German__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Spanish__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Japanese__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Chinese__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Arabic__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Farsi__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Latin__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Hebrew__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage()]);
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$.prototype = $p;
$p.tA = (function() {
  return this.kH.e();
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$, "com.github.pwharned.clausula.extension.domain.KnownLanguage$", ({
  dy: 1,
  u: 1,
  aC: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$;
function $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$ = new $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_Language$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_Language$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_Language$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_Language$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_Language$.prototype = $p;
$p.rM = (function(code) {
  var xs = $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$().tA();
  _return: {
    var i = 0;
    while ((i < xs.a.length)) {
      var x1 = i;
      if ((xs.a[x1].bk === code)) {
        var idx = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var idx = (-1);
  }
  var this$4 = ((idx === (-1)) ? $m_s_None$() : new $c_s_Some(xs.a[idx]));
  return (this$4.d() ? new $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage(code) : this$4.x());
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Language$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Language$, "com.github.pwharned.clausula.extension.domain.Language$", ({
  dL: 1,
  u: 1,
  aC: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_Language$;
function $m_Lcom_github_pwharned_clausula_extension_domain_Language$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_Language$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_Language$ = new $c_Lcom_github_pwharned_clausula_extension_domain_Language$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_Language$;
}
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.ic = null;
  this.kI = null;
  this.kJ = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.ic = $m_scm_Buffer$().oI($m_sr_ScalaRunTime$().b7(new ($d_F1.r().C)([])));
  this.kI = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
    try {
      console.error(((this.fp(err) + "\n") + this.rV(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.kJ = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.R : $x_1);
  }));
  this.sK(this.kI);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.fp = (function(e) {
  try {
    var errorMessage = e.eu();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).kg() + ": ") + errorMessage);
});
$p.rV = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().tF(err.i2()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.sK = (function(fn) {
  this.ic.b0(fn);
});
$p.cq = (function(err) {
  var this$1 = this.ic;
  var it = this$1.m();
  while (it.p()) {
    var x0 = it.l();
    try {
      x0.c(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.kJ;
      if (((x0 === null) ? (x$2 === null) : x0.g(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().te(0.0, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  e1: 1,
  u: 1,
  aC: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.cn(true);
  $thiz.ft((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().pT(onNext, $m_s_PartialFunction$().hA, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.fr()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.fr()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz) {
  return ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) > 0);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz) {
  var x = $thiz.e2();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_F0.r().C)([])));
    $thiz.ft(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aG: 1,
  ap: 1,
  a2: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.qT(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, modifiers, asModifier, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(null, modifiers, null)).bc(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element$2) => ((_$6) => {
      asModifier.c(_$6).cl(element$2);
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.mF = null;
  this.iE = null;
  this.mF = key;
  this.iE = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.cl = (function(element) {
  if ((!this.iE.d())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.mF, null, this.iE, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  fj: 1,
  a6: 1,
  bS: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.eX = null;
  this.iF = null;
  this.iG = null;
  this.eX = eventProcessor;
  this.iF = ((ev) => {
    var processor = eventProcessor.mB;
    var this$2 = processor.c(ev);
    if ((!this$2.d())) {
      callback.c(this$2.x());
    }
  });
  this.iG = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
    }
    this$3.capture = outer.eX.mD;
    this$3.passive = outer.eX.mC;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.cl = (function(element) {
  this.qW(element, false);
});
$p.qW = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().qB(element.be, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.iD, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().sP(element.be, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().tx(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h6(element.cc, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().pF(element.cc, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner$1) => {
      activate.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.h = (function() {
  return (("EventListener(" + this.eX.hn.ho) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  fk: 1,
  a6: 1,
  bR: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.mH = null;
  this.mI = null;
  this.mG = null;
  this.mH = key;
  this.mI = value;
  this.mG = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.cl = (function(element) {
  this.mG.jL(element, this.mH, this.mI);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  fl: 1,
  a6: 1,
  bS: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.mJ = null;
  this.mL = null;
  this.mK = null;
  this.mJ = key;
  this.mL = values;
  this.mK = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.cl = (function(element) {
  this.jP(element);
});
$p.jP = (function(element) {
  element.sy(this.mJ);
  var observable = this.mL;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((value) => {
    this.mK.jL(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().tj(element.cc, observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  fm: 1,
  a6: 1,
  bR: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.iM = null;
  this.mQ = null;
  this.mR = null;
  this.mQ = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().sf(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.mR = container;
  this.sr();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.i0 = (function() {
  return this.iM;
});
$p.oM = (function(x$0) {
  this.iM = x$0;
});
$p.sr = (function() {
  this.iM.ou();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().gv(this, this.mQ, (void 0));
});
$p.an = (function() {
  return this.mR;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  fD: 1,
  aK: 1,
  bT: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fG)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.ao.Z) {
    return ($thiz.ao.Q().kg() + "[]");
  } else {
    var name = $thiz.ao.N;
    var idx = ((name.length - 1) | 0);
    while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
      idx = ((idx - 1) | 0);
    }
    if (((idx >= 0) && ((((name.charCodeAt(idx) - 48) | 0) >>> 0) <= 9))) {
      idx = ((idx - 1) | 0);
      while (((idx >= 0) && ((((name.charCodeAt(idx) - 48) | 0) >>> 0) <= 9))) {
        idx = ((idx - 1) | 0);
      }
      while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
        idx = ((idx - 1) | 0);
      }
    }
    while (true) {
      if ((idx >= 0)) {
        var index$4 = idx;
        var currChar = name.charCodeAt(index$4);
        var $x_1 = ((currChar !== 36) && (currChar !== 46));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        idx = ((idx - 1) | 0);
      } else {
        break;
      }
    }
    var beginIndex = ((1 + idx) | 0);
    return name.substring(beginIndex);
  }
}
/** @constructor */
function $c_jl_Class($data) {
  this.iR = null;
  this.ao = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.h = (function() {
  return ((this.ao.Y ? "interface " : (this.ao.X ? "" : "class ")) + this.ao.N);
});
$p.kg = (function() {
  if ((this.iR === null)) {
    this.iR = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.iR;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  fT: 1,
  a: 1,
  a7: 1
}));
function $ct_jl_Error__jl_Throwable__($thiz, e) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, ((e === null) ? null : e.h()), e, true, true);
  return $thiz;
}
class $c_jl_Error extends $c_jl_Throwable {
}
function $isArrayOf_jl_Error(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aM)));
}
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().i($c_jl_Exception, "java.lang.Exception", ({
  v: 1,
  o: 1,
  a: 1
}));
function $ct_Ljava_nio_ByteBuffer__I__AB__I__($thiz, _capacity, _array, _arrayOffset) {
  $thiz.ef = _array;
  $thiz.eg = _arrayOffset;
  $ct_Ljava_nio_Buffer__I__($thiz, _capacity);
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_ByteBuffer() {
  this.cP = 0;
  this.G = 0;
  this.s = 0;
  this.cs = 0;
  this.ef = null;
  this.eg = 0;
}
$p = $c_Ljava_nio_ByteBuffer.prototype = new $h_Ljava_nio_Buffer();
$p.constructor = $c_Ljava_nio_ByteBuffer;
/** @constructor */
function $h_Ljava_nio_ByteBuffer() {
}
$h_Ljava_nio_ByteBuffer.prototype = $p;
$p.i = (function() {
  var start = this.s;
  var end = this.G;
  var h = (-547316498);
  var i = start;
  while ((i !== end)) {
    var $x_2 = $m_ju_internal_MurmurHash3$();
    var $x_1 = h;
    var index = i;
    var a = this.ef;
    var i$1 = ((this.eg + index) | 0);
    h = $x_2.w($x_1, a.a[i$1]);
    i = ((1 + i) | 0);
  }
  return $m_ju_internal_MurmurHash3$().a6(h, ((end - start) | 0));
});
$p.g = (function(that) {
  return ((that instanceof $c_Ljava_nio_ByteBuffer) && (this.r2(that) === 0));
});
$p.r2 = (function(that) {
  if ((this === that)) {
    return 0;
  } else {
    var thisStart = this.s;
    var thisRemaining = ((this.G - thisStart) | 0);
    var thatStart = that.s;
    var thatRemaining = ((that.G - thatStart) | 0);
    var shortestLength = ((thisRemaining < thatRemaining) ? thisRemaining : thatRemaining);
    var i = 0;
    while ((i !== shortestLength)) {
      var index = ((thisStart + i) | 0);
      var a = this.ef;
      var i$1 = ((this.eg + index) | 0);
      var t = a.a[i$1];
      var index$1 = ((thatStart + i) | 0);
      var a$1 = that.ef;
      var i$2 = ((that.eg + index$1) | 0);
      var u = a$1.a[i$2];
      var cmp = ((t - u) | 0);
      if ((cmp !== 0)) {
        return cmp;
      }
      i = ((1 + i) | 0);
    }
    return ((thisRemaining === thatRemaining) ? 0 : ((thisRemaining < thatRemaining) ? (-1) : 1));
  }
});
function $isArrayOf_Ljava_nio_ByteBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ca)));
}
function $ct_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon__T__AT__I__($thiz, name, aliases, maxValue) {
  $thiz.ht = maxValue;
  $ct_Ljava_nio_charset_Charset__T__AT__($thiz, name, aliases);
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon() {
  this.by = null;
  this.ct = null;
  this.ht = 0;
}
$p = $c_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon.prototype = new $h_Ljava_nio_charset_Charset();
$p.constructor = $c_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon;
/** @constructor */
function $h_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon() {
}
$h_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon.prototype = $p;
$p.ks = (function() {
  return new $c_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon$Encoder(this);
});
function $ct_Ljava_nio_charset_UTF\uff3f16\uff3fCommon__T__AT__I__($thiz, name, aliases, endianness) {
  $thiz.cQ = endianness;
  $ct_Ljava_nio_charset_Charset__T__AT__($thiz, name, aliases);
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_charset_UTF\uff3f16\uff3fCommon() {
  this.by = null;
  this.ct = null;
  this.cQ = 0;
}
$p = $c_Ljava_nio_charset_UTF\uff3f16\uff3fCommon.prototype = new $h_Ljava_nio_charset_Charset();
$p.constructor = $c_Ljava_nio_charset_UTF\uff3f16\uff3fCommon;
/** @constructor */
function $h_Ljava_nio_charset_UTF\uff3f16\uff3fCommon() {
}
$h_Ljava_nio_charset_UTF\uff3f16\uff3fCommon.prototype = $p;
$p.ks = (function() {
  return new $c_Ljava_nio_charset_UTF\uff3f16\uff3fCommon$Encoder(this);
});
/** @constructor */
function $c_Ljava_nio_charset_UTF\uff3f8$() {
  this.by = null;
  this.ct = null;
  $ct_Ljava_nio_charset_Charset__T__AT__(this, "UTF-8", new ($d_T.r().C)(["UTF8", "unicode-1-1-utf-8"]));
}
$p = $c_Ljava_nio_charset_UTF\uff3f8$.prototype = new $h_Ljava_nio_charset_Charset();
$p.constructor = $c_Ljava_nio_charset_UTF\uff3f8$;
/** @constructor */
function $h_Ljava_nio_charset_UTF\uff3f8$() {
}
$h_Ljava_nio_charset_UTF\uff3f8$.prototype = $p;
$p.ks = (function() {
  return new $c_Ljava_nio_charset_UTF\uff3f8$Encoder();
});
var $d_Ljava_nio_charset_UTF\uff3f8$ = new $TypeData().i($c_Ljava_nio_charset_UTF\uff3f8$, "java.nio.charset.UTF_8$", ({
  gE: 1,
  aj: 1,
  J: 1
}));
var $n_Ljava_nio_charset_UTF\uff3f8$;
function $m_Ljava_nio_charset_UTF\uff3f8$() {
  if ((!$n_Ljava_nio_charset_UTF\uff3f8$)) {
    $n_Ljava_nio_charset_UTF\uff3f8$ = new $c_Ljava_nio_charset_UTF\uff3f8$();
  }
  return $n_Ljava_nio_charset_UTF\uff3f8$;
}
/** @constructor */
function $c_s_$less$colon$less() {
}
$p = $c_s_$less$colon$less.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less;
/** @constructor */
function $h_s_$less$colon$less() {
}
$h_s_$less$colon$less.prototype = $p;
/** @constructor */
function $c_s_Predef$() {
  this.qc = null;
  $n_s_Predef$ = this;
  $m_sci_List$();
  this.qc = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.sW = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  ha: 1,
  h2: 1,
  h3: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.aY();
      break;
    }
    case 1: {
      return $thiz.aL();
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.g6 = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.g6 = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.ay = (function(it) {
  return this.g6.k7(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.b1 = (function() {
  return this.g6.i7($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.d9 = (function(elems) {
  return this.g6.k7(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.hD = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.hD = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.ay = (function(it) {
  return this.hD.ay(it);
});
$p.b1 = (function() {
  return this.hD.b1();
});
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.y();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.m();
      while (it.p()) {
        if ((i === otherSize)) {
          return 1;
        }
        it.l();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).jT(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().X : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.m();
  while ($thiz.p()) {
    if ((!those.p())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().n($thiz.l(), those.l()))) {
      return false;
    }
  }
  return (!those.p());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.X = null;
  $n_sc_Iterator$ = this;
  this.X = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.b1 = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.ay = (function(source) {
  return source.m();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  hn: 1,
  a: 1,
  Q: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.jj = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.jj = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.ay = (function(it) {
  return this.jj.ay(it);
});
/** @constructor */
function $c_sc_View$() {
}
$p = $c_sc_View$.prototype = new $h_O();
$p.constructor = $c_sc_View$;
/** @constructor */
function $h_sc_View$() {
}
$h_sc_View$.prototype = $p;
$p.p4 = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((it$2) => (() => it$2.m()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().k9(it))));
});
$p.b1 = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((it$2) => this.p4(it$2))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.ay = (function(source) {
  return this.p4(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  hB: 1,
  a: 1,
  Q: 1
}));
var $n_sc_View$;
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$();
  }
  return $n_sc_View$;
}
/** @constructor */
function $c_sci_BitmapIndexedMapNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.Y = 0;
  this.a8 = 0;
  this.ak = null;
  this.bA = null;
  this.aQ = 0;
  this.bm = 0;
  this.Y = dataMap;
  this.a8 = nodeMap;
  this.ak = content;
  this.bA = originalHashes;
  this.aQ = size;
  this.bm = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.aO = (function() {
  return this.aQ;
});
$p.dZ = (function() {
  return this.bm;
});
$p.e1 = (function(index) {
  return this.ak.a[(index << 1)];
});
$p.dc = (function(index) {
  return this.ak.a[((1 + (index << 1)) | 0)];
});
$p.pa = (function(index) {
  return $ct_T2__O__O__(new $c_T2(), this.ak.a[(index << 1)], this.ak.a[((1 + (index << 1)) | 0)]);
});
$p.gN = (function(index) {
  return this.bA.a[index];
});
$p.da = (function(index) {
  return this.ak.a[((((this.ak.a.length - 1) | 0) - index) | 0)];
});
$p.jK = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ew(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.Y & bitpos) !== 0)) {
    var index = $m_sci_Node$().cI(this.Y, mask, bitpos);
    if ($m_sr_BoxesRunTime$().n(key, this.e1(index))) {
      return this.dc(index);
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
    }
  } else if (((this.a8 & bitpos) !== 0)) {
    return this.da($m_sci_Node$().cI(this.a8, mask, bitpos)).jK(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.ke = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().ew(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.Y & bitpos) !== 0)) {
    var index = $m_sci_Node$().cI(this.Y, mask, bitpos);
    return ($m_sr_BoxesRunTime$().n(key, this.e1(index)) ? this.dc(index) : f.M());
  } else {
    return (((this.a8 & bitpos) !== 0) ? this.da($m_sci_Node$().cI(this.a8, mask, bitpos)).ke(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.M());
  }
});
$p.jV = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ew(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.Y & bitpos) !== 0)) {
    var index = $m_sci_Node$().cI(this.Y, mask, bitpos);
    return ((this.bA.a[index] === originalHash) && $m_sr_BoxesRunTime$().n(key, this.e1(index)));
  } else {
    return (((this.a8 & bitpos) !== 0) && this.da($m_sci_Node$().cI(this.a8, mask, bitpos)).jV(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.pO = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().ew(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.Y & bitpos) !== 0)) {
    var index = $m_sci_Node$().cI(this.Y, mask, bitpos);
    var key0 = this.e1(index);
    var key0UnimprovedHash = this.gN(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().n(key0, key))) {
      if (replaceValue) {
        var value0 = this.dc(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.ra(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.dc(index);
      var key0Hash = $m_sc_Hashing$().cm(key0UnimprovedHash);
      return this.r8(bitpos, key0Hash, this.kr(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.a8 & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cI(this.a8, mask, bitpos);
    var subNode = this.da(index$2);
    var subNodeNew$2 = subNode.pP(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.r9(bitpos, subNode, subNodeNew$2));
  } else {
    return this.r7(bitpos, key, originalHash, keyHash, value);
  }
});
$p.kr = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().ka(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), key0, value0), $ct_T2__O__O__(new $c_T2(), key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().ew(keyHash0, shift);
    var mask1 = $m_sci_Node$().ew(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().dY(mask0) | $m_sci_Node$().dY(mask1));
      if ((mask0 < mask1)) {
        var xs = new $c_sjsr_WrappedVarArgs([key0, value0, key1, value1]);
        var array$2 = new $ac_O(xs.q());
        var iterator = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs));
        var i = 0;
        while ((iterator.bf > 0)) {
          array$2.a[i] = iterator.l();
          i = ((1 + i) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$2, new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash);
      } else {
        var xs$1 = new $c_sjsr_WrappedVarArgs([key1, value1, key0, value0]);
        var array$4 = new $ac_O(xs$1.q());
        var iterator$1 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$1));
        var i$1 = 0;
        while ((iterator$1.bf > 0)) {
          array$4.a[i$1] = iterator$1.l();
          i$1 = ((1 + i$1) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$4, new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash);
      }
    } else {
      var nodeMap = $m_sci_Node$().dY(mask0);
      var node = this.kr(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      var xs$2 = new $c_sjsr_WrappedVarArgs([node]);
      var array$6 = new $ac_O(xs$2.q());
      var iterator$2 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$2));
      var i$2 = 0;
      while ((iterator$2.bf > 0)) {
        array$6.a[i$2] = iterator$2.l();
        i$2 = ((1 + i$2) | 0);
      }
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().jc, node.aO(), node.dZ());
    }
  }
});
$p.kh = (function() {
  return (this.a8 !== 0);
});
$p.kt = (function() {
  return $m_jl_Integer$().dX(this.a8);
});
$p.i3 = (function() {
  return (this.Y !== 0);
});
$p.kx = (function() {
  return $m_jl_Integer$().dX(this.Y);
});
$p.gJ = (function(bitpos) {
  return $m_jl_Integer$().dX((this.Y & ((bitpos - 1) | 0)));
});
$p.ku = (function(bitpos) {
  return $m_jl_Integer$().dX((this.a8 & ((bitpos - 1) | 0)));
});
$p.ra = (function(bitpos, newKey, newValue) {
  var dataIx = this.gJ(bitpos);
  var idx = (dataIx << 1);
  var src = this.ak;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.t(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.Y, this.a8, dst, this.bA, this.aQ, this.bm);
});
$p.r9 = (function(bitpos, oldNode, newNode) {
  var idx = ((((this.ak.a.length - 1) | 0) - this.ku(bitpos)) | 0);
  var src = this.ak;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.t(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.Y, this.a8, dst, this.bA, ((((this.aQ - oldNode.aO()) | 0) + newNode.aO()) | 0), ((((this.bm - oldNode.dZ()) | 0) + newNode.dZ()) | 0));
});
$p.r7 = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.gJ(bitpos);
  var idx = (dataIx << 1);
  var src = this.ak;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.t(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.t(idx, dst, destPos, length);
  var dstHashes = this.s8(this.bA, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.Y | bitpos), this.a8, dst, dstHashes, ((1 + this.aQ) | 0), ((this.bm + keyHash) | 0));
});
$p.sp = (function(bitpos, keyHash, node) {
  var dataIx = this.gJ(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.ak.a.length - 2) | 0) - this.ku(bitpos)) | 0);
  var src = this.ak;
  var dst = new $ac_O(((src.a.length - 1) | 0));
  src.t(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.t(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 2) | 0);
  src.t(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.pu(this.bA, dataIx);
  this.Y = (this.Y ^ bitpos);
  this.a8 = (this.a8 | bitpos);
  this.ak = dst;
  this.bA = dstHashes;
  this.aQ = ((((this.aQ - 1) | 0) + node.aO()) | 0);
  this.bm = ((((this.bm - keyHash) | 0) + node.dZ()) | 0);
  return this;
});
$p.r8 = (function(bitpos, keyHash, node) {
  var dataIx = this.gJ(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.ak.a.length - 2) | 0) - this.ku(bitpos)) | 0);
  var src = this.ak;
  var dst = new $ac_O(((src.a.length - 1) | 0));
  src.t(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.t(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 2) | 0);
  src.t(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.pu(this.bA, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.Y ^ bitpos), (this.a8 | bitpos), dst, dstHashes, ((((this.aQ - 1) | 0) + node.aO()) | 0), ((((this.bm - keyHash) | 0) + node.dZ()) | 0));
});
$p.et = (function(f) {
  var iN = $m_jl_Integer$().dX(this.Y);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.fi(this.e1(i$1), this.dc(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().dX(this.a8);
  var j = 0;
  while ((j < jN)) {
    this.da(j).et(f);
    j = ((1 + j) | 0);
  }
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bm === that.bm) && (this.a8 === that.a8)) && (this.Y === that.Y)) && (this.aQ === that.aQ)) && $m_ju_Arrays$().k1(this.bA, that.bA))) {
      var a1 = this.ak;
      var a2 = that.ak;
      var length = this.ak.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().n(a1.a[i], a2.a[i]);
          i = ((1 + i) | 0);
        }
        return isEqual;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.i = (function() {
  throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.");
});
$p.h = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.oN = (function() {
  var this$1 = this.ak;
  var contentClone = this$1.e();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().dX(this.Y) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].oO();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.Y, this.a8, contentClone, this.bA.e(), this.aQ, this.bm);
});
$p.kd = (function(index) {
  return this.da(index);
});
$p.pP = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.pO(key, value, originalHash, hash, shift, replaceValue);
});
$p.oO = (function() {
  return this.oN();
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cA)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  cA: 1,
  cJ: 1,
  bf: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.jm = 0;
  this.dz = 0;
  this.a9 = null;
  this.jm = originalHash;
  this.dz = hash;
  this.a9 = content;
  $m_s_Predef$().sW((this.a9.q() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.fq = (function(key) {
  var iter = this.a9.m();
  var i = 0;
  while (iter.p()) {
    if ($m_sr_BoxesRunTime$().n(iter.l().aY(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.aO = (function() {
  return this.a9.q();
});
$p.jK = (function(key, originalHash, hash, shift) {
  var this$1 = this.rR(key, originalHash, hash, shift);
  return (this$1.d() ? $m_sc_Iterator$().X.l() : this$1.x());
});
$p.rR = (function(key, originalHash, hash, shift) {
  if ((this.dz === hash)) {
    var index = this.fq(key);
    return ((index >= 0) ? new $c_s_Some(this.a9.u(index).aL()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.ke = (function(key, originalHash, hash, shift, f) {
  if ((this.dz === hash)) {
    var x36 = this.fq(key);
    if ((x36 === (-1))) {
      return f.M();
    }
    return this.a9.u(x36).aL();
  } else {
    return f.M();
  }
});
$p.jV = (function(key, originalHash, hash, shift) {
  return ((this.dz === hash) && (this.fq(key) >= 0));
});
$p.pP = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.fq(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.a9.u(index).aL(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.a9.e4(index, $ct_T2__O__O__(new $c_T2(), key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.a9.dV($ct_T2__O__O__(new $c_T2(), key, value))));
});
$p.kh = (function() {
  return false;
});
$p.kt = (function() {
  return 0;
});
$p.da = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.i3 = (function() {
  return true;
});
$p.kx = (function() {
  return this.a9.q();
});
$p.e1 = (function(index) {
  return this.a9.u(index).aY();
});
$p.dc = (function(index) {
  return this.a9.u(index).aL();
});
$p.pa = (function(index) {
  return this.a9.u(index);
});
$p.gN = (function(index) {
  return this.jm;
});
$p.et = (function(f) {
  this.a9.bc(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.aY();
    var v = x$1$2.aL();
    return f.fi(k, v);
  })));
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.dz === that.dz) && (this.a9.q() === that.a9.q()))) {
      var iter = this.a9.m();
      while (iter.p()) {
        var \u03b412$;
        var \u03b412$ = iter.l();
        var key = \u03b412$.aY();
        var value = \u03b412$.aL();
        var index = that.fq(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().n(value, that.a9.u(index).aL())))) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.i = (function() {
  throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.");
});
$p.h = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.dZ = (function() {
  return Math.imul(this.a9.q(), this.dz);
});
$p.kd = (function(index) {
  return this.da(index);
});
$p.oO = (function() {
  return new $c_sci_HashCollisionMapNode(this.jm, this.dz, this.a9);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cC)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  cC: 1,
  cJ: 1,
  bf: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.jn = null;
  $n_sci_HashMap$ = this;
  this.jn = new $c_sci_HashMap($m_sci_MapNode$().nO);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.rJ = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().jJ(source).kB());
});
$p.ay = (function(it) {
  return this.rJ(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  hI: 1,
  a: 1,
  b9: 1
}));
var $n_sci_HashMap$;
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$();
  }
  return $n_sci_HashMap$;
}
/** @constructor */
function $c_sci_Map$() {
}
$p = $c_sci_Map$.prototype = new $h_O();
$p.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
}
$h_sci_Map$.prototype = $p;
$p.p5 = (function(it) {
  if ($is_sci_Iterable(it)) {
    if (it.d()) {
      return $m_sci_Map$EmptyMap$();
    }
  }
  if ((it instanceof $c_sci_HashMap)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map1)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map2)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map3)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map4)) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  return new $c_sci_MapBuilderImpl().ov(it).pw();
});
$p.ay = (function(it) {
  return this.p5(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  hX: 1,
  a: 1,
  b9: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = coll.y();
  if ((x1 === (-1))) {
    return (void 0);
  }
  var that = ((x1 + delta) | 0);
  $thiz.b6(((that < 0) ? 0 : that));
}
/** @constructor */
function $c_scm_HashSet$() {
}
$p = $c_scm_HashSet$.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$;
/** @constructor */
function $h_scm_HashSet$() {
}
$h_scm_HashSet$.prototype = $p;
$p.rL = (function(it) {
  var k = it.y();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).oy(it);
});
$p.b1 = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.ay = (function(source) {
  return this.rL(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  iI: 1,
  a: 1,
  Q: 1
}));
var $n_scm_HashSet$;
function $m_scm_HashSet$() {
  if ((!$n_scm_HashSet$)) {
    $n_scm_HashSet$ = new $c_scm_HashSet$();
  }
  return $n_scm_HashSet$;
}
/** @constructor */
function $c_s_concurrent_BatchingExecutor$SyncBatch(outer, runnable) {
  this.gl = null;
  this.gm = null;
  this.dQ = 0;
  this.qd = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.qd = outer;
  $ct_s_concurrent_BatchingExecutor$AbstractBatch__jl_Runnable__Ajl_Runnable__I__(this, runnable, $m_s_concurrent_BatchingExecutorStatics$().o4, 1);
}
$p = $c_s_concurrent_BatchingExecutor$SyncBatch.prototype = new $h_s_concurrent_BatchingExecutor$AbstractBatch();
$p.constructor = $c_s_concurrent_BatchingExecutor$SyncBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$SyncBatch() {
}
$h_s_concurrent_BatchingExecutor$SyncBatch.prototype = $p;
$p.ez = (function() {
  while (true) {
    try {
      this.t3(1024);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if (false) {
        $m_s_concurrent_ExecutionContext$().ff.c(e$2);
      } else {
        matchResult2: {
          if ($m_s_util_control_NonFatal$().hV(e$2)) {
            $m_s_concurrent_ExecutionContext$().ff.c(e$2);
            break matchResult2;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
        }
      }
    }
    if ((this.dQ > 0)) {
    } else {
      return (void 0);
    }
  }
});
function $isArrayOf_s_concurrent_BatchingExecutor$SyncBatch(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d0)));
}
var $d_s_concurrent_BatchingExecutor$SyncBatch = new $TypeData().i($c_s_concurrent_BatchingExecutor$SyncBatch, "scala.concurrent.BatchingExecutor$SyncBatch", ({
  d0: 1,
  iZ: 1,
  aZ: 1
}));
/** @constructor */
function $c_s_concurrent_impl_Promise$Link(to) {
  this.O = null;
  $ct_ju_concurrent_atomic_AtomicReference__O__(this, to);
}
$p = $c_s_concurrent_impl_Promise$Link.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$Link;
/** @constructor */
function $h_s_concurrent_impl_Promise$Link() {
}
$h_s_concurrent_impl_Promise$Link.prototype = $p;
$p.fx = (function(owner) {
  var c = this.O;
  var target$tailLocal1 = c;
  var current$tailLocal1 = c;
  while (true) {
    var value = target$tailLocal1.O;
    if ($is_s_concurrent_impl_Promise$Callbacks(value)) {
      if (this.gH(current$tailLocal1, target$tailLocal1)) {
        return target$tailLocal1;
      } else {
        current$tailLocal1 = this.O;
      }
    } else if ((value instanceof $c_s_concurrent_impl_Promise$Link)) {
      target$tailLocal1 = value.O;
    } else {
      owner.tw(value);
      return owner;
    }
  }
});
function $isArrayOf_s_concurrent_impl_Promise$Link(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d3)));
}
var $d_s_concurrent_impl_Promise$Link = new $TypeData().i($c_s_concurrent_impl_Promise$Link, "scala.concurrent.impl.Promise$Link", ({
  d3: 1,
  b3: 1,
  a: 1
}));
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ja)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.od = null;
  this.od = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.M = (function() {
  return (0, this.od)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  jz: 1,
  d6: 1,
  b4: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.oe = null;
  this.oe = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.c = (function(x0) {
  return (0, this.oe)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  jA: 1,
  bn: 1,
  e: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.of = null;
  this.of = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.fi = (function(x0, x1) {
  return (0, this.of)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  jB: 1,
  d7: 1,
  b5: 1
}));
/** @constructor */
function $c_sr_AbstractPartialFunction() {
}
$p = $c_sr_AbstractPartialFunction.prototype = new $h_O();
$p.constructor = $c_sr_AbstractPartialFunction;
/** @constructor */
function $h_sr_AbstractPartialFunction() {
}
$h_sr_AbstractPartialFunction.prototype = $p;
$p.h = (function() {
  return "<function1>";
});
$p.c = (function(x) {
  return this.c9(x, $m_s_PartialFunction$().hA);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  jH: 1,
  o: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.rN = (function(f) {
  return (() => f.M());
});
$p.gK = (function(f) {
  return ((arg1$2) => f.c(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  jT: 1,
  jU: 1,
  jV: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
/** @constructor */
function $c_sjsr_AnonFunction0() {
}
$p = $c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
}
$h_sjsr_AnonFunction0.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction1() {
}
$p = $c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
}
$h_sjsr_AnonFunction1.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction2() {
}
$p = $c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
}
$h_sjsr_AnonFunction2.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction3() {
}
$p = $c_sjsr_AnonFunction3.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sjsr_AnonFunction3;
/** @constructor */
function $h_sjsr_AnonFunction3() {
}
$h_sjsr_AnonFunction3.prototype = $p;
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.kb)));
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote(text, translation, audio, deck, language, tags) {
  this.fI = null;
  this.fJ = null;
  this.fF = null;
  this.fG = null;
  this.hc = null;
  this.fH = null;
  this.fI = text;
  this.fJ = translation;
  this.fF = audio;
  this.fG = deck;
  this.hc = language;
  this.fH = tags;
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_ClozeNote() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_ClozeNote.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, 833541524, true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote)) {
    if ((this.fI === x$0.fI)) {
      var x = this.fJ;
      var x$2 = x$0.fJ;
      var $x_3 = ((x === null) ? (x$2 === null) : x.g(x$2));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$3 = this.fF;
      var x$4 = x$0.fF;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : x$3.g(x$4));
    } else {
      var $x_2 = false;
    }
    if (($x_2 && (this.fG === x$0.fG))) {
      var x$5 = this.hc;
      var x$6 = x$0.hc;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : x$5.g(x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$7 = this.fH;
      var x$8 = x$0.fH;
      return ((x$7 === null) ? (x$8 === null) : x$7.g(x$8));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c8(this);
});
$p.z = (function() {
  return 6;
});
$p.B = (function() {
  return "ClozeNote";
});
$p.A = (function(n) {
  switch (n) {
    case 0: {
      return this.fI;
      break;
    }
    case 1: {
      return this.fJ;
      break;
    }
    case 2: {
      return this.fF;
      break;
    }
    case 3: {
      return this.fG;
      break;
    }
    case 4: {
      return this.hc;
      break;
    }
    case 5: {
      return this.fH;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_domain_ClozeNote(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
var $d_Lcom_github_pwharned_clausula_extension_domain_ClozeNote = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote, "com.github.pwharned.clausula.extension.domain.ClozeNote", ({
  bu: 1,
  b: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult(text, detectedLanguage) {
  this.eM = null;
  this.eL = null;
  this.eM = text;
  this.eL = detectedLanguage;
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_TranslationResult() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_TranslationResult.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, 606425562, true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult)) {
    if ((this.eM === x$0.eM)) {
      var x = this.eL;
      var x$2 = x$0.eL;
      return ((x === null) ? (x$2 === null) : x.g(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c8(this);
});
$p.z = (function() {
  return 2;
});
$p.B = (function() {
  return "TranslationResult";
});
$p.A = (function(n) {
  if ((n === 0)) {
    return this.eM;
  }
  if ((n === 1)) {
    return this.eL;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_domain_TranslationResult(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bz)));
}
var $d_Lcom_github_pwharned_clausula_extension_domain_TranslationResult = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult, "com.github.pwharned.clausula.extension.domain.TranslationResult", ({
  bz: 1,
  b: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.kM = null;
  this.kK = false;
  this.id = null;
  this.kL = null;
  this.kM = onNextParam$2;
  this.kK = handleObserverErrors$3;
  this.id = onErrorParam$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.kL = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.cL = (function() {
  return this.kL;
});
$p.cD = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gS = (function(nextValue) {
  try {
    this.kM.c(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.kK) {
      this.ex(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cq(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.ex = (function(error) {
  try {
    if (this.id.cK(error)) {
      this.id.c(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cq(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cq(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.e3 = (function(nextValue) {
  nextValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((error) => {
    this.ex(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue$2) => {
    this.gS(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  e3: 1,
  ap: 1,
  a2: 1,
  aG: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.ie = null;
  this.kN = false;
  this.kO = null;
  this.ie = onTryParam$2;
  this.kN = handleObserverErrors$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.kO = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.cL = (function() {
  return this.kO;
});
$p.cD = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gS = (function(nextValue) {
  this.e3(new $c_s_util_Success(nextValue));
});
$p.ex = (function(error) {
  this.e3(new $c_s_util_Failure(error));
});
$p.e3 = (function(nextValue) {
  try {
    if (this.ie.cK(nextValue)) {
      this.ie.c(nextValue);
    } else {
      nextValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cq(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.kN && nextValue.pf())) {
      this.ex(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cq(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cq(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  e4: 1,
  ap: 1,
  a2: 1,
  aG: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_eventbus_WriteBus(parentDisplayName, displayNameSuffix) {
  this.l3 = null;
  this.l4 = null;
  this.l2 = null;
  this.eQ = null;
  this.l4 = parentDisplayName;
  this.l2 = displayNameSuffix;
  this.l3 = (void 0);
  this.eQ = new $c_Lcom_raquo_airstream_eventbus_EventBusStream(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
}
$p = $c_Lcom_raquo_airstream_eventbus_WriteBus.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_eventbus_WriteBus;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_WriteBus() {
}
$h_Lcom_raquo_airstream_eventbus_WriteBus.prototype = $p;
$p.cL = (function() {
  return this.l3;
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gS = (function(nextValue) {
  if ($f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this.eQ)) {
    this.eQ.fv(nextValue, null);
  }
});
$p.ex = (function(nextError) {
  if ($f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this.eQ)) {
    this.eQ.fu(nextError, null);
  }
});
$p.e3 = (function(nextValue) {
  nextValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    this.ex(nextError);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue$2) => {
    this.gS(nextValue$2);
  })));
});
$p.cD = (function() {
  return (("" + this.l4.M()) + this.l2);
});
var $d_Lcom_raquo_airstream_eventbus_WriteBus = new $TypeData().i($c_Lcom_raquo_airstream_eventbus_WriteBus, "com.raquo.airstream.eventbus.WriteBus", ({
  ed: 1,
  ap: 1,
  a2: 1,
  aG: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.lN = null;
  this.lO = false;
  this.pU = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_Laminar$svg$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$svg$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$svg$() {
}
$h_Lcom_raquo_laminar_api_Laminar$svg$.prototype = $p;
$p.tm = (function() {
  if ((!this.lO)) {
    this.lN = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.lO = true;
  }
  return this.lN;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  eA: 1,
  eZ: 1,
  eJ: 1,
  eL: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.o = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.o = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
$p = $c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
$h_Lcom_raquo_laminar_api_package$.prototype = $p;
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().i($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  eE: 1,
  bM: 1,
  bP: 1,
  bL: 1
}));
var $n_Lcom_raquo_laminar_api_package$;
function $m_Lcom_raquo_laminar_api_package$() {
  if ((!$n_Lcom_raquo_laminar_api_package$)) {
    $n_Lcom_raquo_laminar_api_package$ = new $c_Lcom_raquo_laminar_api_package$();
  }
  return $n_Lcom_raquo_laminar_api_package$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_DynamicInserter(initialContext, preferStrictMode, insertFn, hooks) {
  this.mv = null;
  this.mx = false;
  this.mw = null;
  this.ix = null;
  this.mv = initialContext;
  this.mx = preferStrictMode;
  this.mw = insertFn;
  this.ix = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.jP = (function(element) {
  var this$1 = this.mv;
  var insertContext = (this$1.d() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().sX(element, this.mx, this.ix) : this$1.x());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((mountContext) => this.mw.jL(insertContext, mountContext.iD, this.ix)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h6(element.cc, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.cl = (function(element) {
  this.jP(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  f2: 1,
  a6: 1,
  f6: 1,
  f3: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.eb = name;
  $thiz.ec = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.eb = null;
  this.ec = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.or = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().ta(element, styleProp, value$2);
  })));
});
$p.jG = (function(values, ev) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eB(), new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((el, v, _$1) => {
    $m_Lcom_raquo_laminar_DomApi$().t7(el, this, v);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.iH = null;
  this.iI = null;
  this.iH = $m_s_None$();
  this.iI = $m_Lcom_raquo_laminar_DomApi$().rb(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.jR = (function() {
  return this.iH;
});
$p.eA = (function(maybeNextParent) {
  this.iH = maybeNextParent;
});
$p.eF = (function(maybeNextParent) {
});
$p.cl = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gv(parentNode, this, (void 0));
});
$p.an = (function() {
  return this.iI;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  fy: 1,
  aK: 1,
  a6: 1,
  aX: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.iN = null;
  this.iO = null;
  this.iN = $m_s_None$();
  this.iO = $m_Lcom_raquo_laminar_DomApi$().re(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.jR = (function() {
  return this.iN;
});
$p.eA = (function(maybeNextParent) {
  this.iN = maybeNextParent;
});
$p.eF = (function(maybeNextParent) {
});
$p.cl = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gv(parentNode, this, (void 0));
});
$p.tq = (function() {
  return this.iO.data;
});
$p.an = (function() {
  return this.iO;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  fE: 1,
  aK: 1,
  a6: 1,
  aX: 1
}));
class $c_Ljava_io_IOException extends $c_jl_Exception {
}
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  fP: 1,
  aM: 1,
  o: 1,
  a: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  fQ: 1,
  a: 1,
  J: 1,
  a7: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bZ)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  bZ: 1,
  a: 1,
  J: 1,
  a7: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fZ)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g2)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.r = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  $thiz.r = str;
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.r = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.oB = (function(str) {
  var str$1 = $m_jl_String$().su(str, 0, str.a.length);
  this.r = (("" + this.r) + str$1);
  return this;
});
$p.h = (function() {
  return this.r;
});
$p.q = (function() {
  return this.r.length;
});
$p.fj = (function(index) {
  return this.r.charCodeAt(index);
});
$p.kC = (function(start, end) {
  return this.pG(start, end);
});
$p.pG = (function(start, end) {
  var this$1 = this.r;
  return this$1.substring(start, end);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  gd: 1,
  aL: 1,
  aY: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gg)));
}
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c5)));
}
/** @constructor */
function $c_Ljava_nio_HeapByteBuffer(_capacity, _array0, _arrayOffset0, _initialPosition, _initialLimit, _readOnly, _isDirect) {
  this.cP = 0;
  this.G = 0;
  this.s = 0;
  this.cs = 0;
  this.ef = null;
  this.eg = 0;
  this.iX = false;
  this.iX = _readOnly;
  $ct_Ljava_nio_ByteBuffer__I__AB__I__(this, _capacity, _array0, _arrayOffset0);
  $c_Ljava_nio_Buffer.prototype.aH.call(this, _initialPosition);
  $c_Ljava_nio_Buffer.prototype.km.call(this, _initialLimit);
}
$p = $c_Ljava_nio_HeapByteBuffer.prototype = new $h_Ljava_nio_ByteBuffer();
$p.constructor = $c_Ljava_nio_HeapByteBuffer;
/** @constructor */
function $h_Ljava_nio_HeapByteBuffer() {
}
$h_Ljava_nio_HeapByteBuffer.prototype = $p;
$p.a7 = (function(b) {
  if (this.iX) {
    throw new $c_Ljava_nio_ReadOnlyBufferException();
  }
  var p = this.s;
  if ((p === this.G)) {
    throw new $c_Ljava_nio_BufferOverflowException();
  }
  this.s = ((1 + p) | 0);
  var a = this.ef;
  var i = ((this.eg + p) | 0);
  a.a[i] = b;
  return this;
});
$p.sG = (function(src, offset, length) {
  if (this.iX) {
    throw new $c_Ljava_nio_ReadOnlyBufferException();
  }
  if ((((offset < 0) || (length < 0)) || (offset > ((src.a.length - length) | 0)))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  var p = this.s;
  var newPos = ((p + length) | 0);
  if ((newPos > this.G)) {
    throw new $c_Ljava_nio_BufferOverflowException();
  }
  this.s = newPos;
  var x2 = this.ef;
  var x3 = ((this.eg + p) | 0);
  src.t(offset, x2, x3, length);
  return this;
});
var $d_Ljava_nio_HeapByteBuffer = new $TypeData().i($c_Ljava_nio_HeapByteBuffer, "java.nio.HeapByteBuffer", ({
  gm: 1,
  ca: 1,
  c7: 1,
  J: 1
}));
class $c_Ljava_nio_charset_CoderMalfunctionError extends $c_jl_Error {
  constructor(cause) {
    super();
    $ct_jl_Error__jl_Throwable__(this, cause);
  }
}
var $d_Ljava_nio_charset_CoderMalfunctionError = new $TypeData().i($c_Ljava_nio_charset_CoderMalfunctionError, "java.nio.charset.CoderMalfunctionError", ({
  gs: 1,
  aM: 1,
  o: 1,
  a: 1
}));
/** @constructor */
function $c_Ljava_nio_charset_ISO\uff3f8859\uff3f1$() {
  this.by = null;
  this.ct = null;
  this.ht = 0;
  $ct_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon__T__AT__I__(this, "ISO-8859-1", new ($d_T.r().C)(["csISOLatin1", "IBM-819", "iso-ir-100", "8859_1", "ISO_8859-1", "l1", "ISO8859-1", "ISO_8859_1", "cp819", "ISO8859_1", "latin1", "ISO_8859-1:1987", "819", "IBM819"]), 255);
}
$p = $c_Ljava_nio_charset_ISO\uff3f8859\uff3f1$.prototype = new $h_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon();
$p.constructor = $c_Ljava_nio_charset_ISO\uff3f8859\uff3f1$;
/** @constructor */
function $h_Ljava_nio_charset_ISO\uff3f8859\uff3f1$() {
}
$h_Ljava_nio_charset_ISO\uff3f8859\uff3f1$.prototype = $p;
var $d_Ljava_nio_charset_ISO\uff3f8859\uff3f1$ = new $TypeData().i($c_Ljava_nio_charset_ISO\uff3f8859\uff3f1$, "java.nio.charset.ISO_8859_1$", ({
  gx: 1,
  cc: 1,
  aj: 1,
  J: 1
}));
var $n_Ljava_nio_charset_ISO\uff3f8859\uff3f1$;
function $m_Ljava_nio_charset_ISO\uff3f8859\uff3f1$() {
  if ((!$n_Ljava_nio_charset_ISO\uff3f8859\uff3f1$)) {
    $n_Ljava_nio_charset_ISO\uff3f8859\uff3f1$ = new $c_Ljava_nio_charset_ISO\uff3f8859\uff3f1$();
  }
  return $n_Ljava_nio_charset_ISO\uff3f8859\uff3f1$;
}
/** @constructor */
function $c_Ljava_nio_charset_US\uff3fASCII$() {
  this.by = null;
  this.ct = null;
  this.ht = 0;
  $ct_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon__T__AT__I__(this, "US-ASCII", new ($d_T.r().C)(["cp367", "ascii7", "ISO646-US", "646", "csASCII", "us", "iso_646.irv:1983", "ISO_646.irv:1991", "IBM367", "ASCII", "default", "ANSI_X3.4-1986", "ANSI_X3.4-1968", "iso-ir-6"]), 127);
}
$p = $c_Ljava_nio_charset_US\uff3fASCII$.prototype = new $h_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon();
$p.constructor = $c_Ljava_nio_charset_US\uff3fASCII$;
/** @constructor */
function $h_Ljava_nio_charset_US\uff3fASCII$() {
}
$h_Ljava_nio_charset_US\uff3fASCII$.prototype = $p;
var $d_Ljava_nio_charset_US\uff3fASCII$ = new $TypeData().i($c_Ljava_nio_charset_US\uff3fASCII$, "java.nio.charset.US_ASCII$", ({
  gz: 1,
  cc: 1,
  aj: 1,
  J: 1
}));
var $n_Ljava_nio_charset_US\uff3fASCII$;
function $m_Ljava_nio_charset_US\uff3fASCII$() {
  if ((!$n_Ljava_nio_charset_US\uff3fASCII$)) {
    $n_Ljava_nio_charset_US\uff3fASCII$ = new $c_Ljava_nio_charset_US\uff3fASCII$();
  }
  return $n_Ljava_nio_charset_US\uff3fASCII$;
}
/** @constructor */
function $c_Ljava_nio_charset_UTF\uff3f16$() {
  this.by = null;
  this.ct = null;
  this.cQ = 0;
  $ct_Ljava_nio_charset_UTF\uff3f16\uff3fCommon__T__AT__I__(this, "UTF-16", new ($d_T.r().C)(["utf16", "UTF_16", "UnicodeBig", "unicode"]), 0);
}
$p = $c_Ljava_nio_charset_UTF\uff3f16$.prototype = new $h_Ljava_nio_charset_UTF\uff3f16\uff3fCommon();
$p.constructor = $c_Ljava_nio_charset_UTF\uff3f16$;
/** @constructor */
function $h_Ljava_nio_charset_UTF\uff3f16$() {
}
$h_Ljava_nio_charset_UTF\uff3f16$.prototype = $p;
var $d_Ljava_nio_charset_UTF\uff3f16$ = new $TypeData().i($c_Ljava_nio_charset_UTF\uff3f16$, "java.nio.charset.UTF_16$", ({
  gA: 1,
  b1: 1,
  aj: 1,
  J: 1
}));
var $n_Ljava_nio_charset_UTF\uff3f16$;
function $m_Ljava_nio_charset_UTF\uff3f16$() {
  if ((!$n_Ljava_nio_charset_UTF\uff3f16$)) {
    $n_Ljava_nio_charset_UTF\uff3f16$ = new $c_Ljava_nio_charset_UTF\uff3f16$();
  }
  return $n_Ljava_nio_charset_UTF\uff3f16$;
}
/** @constructor */
function $c_Ljava_nio_charset_UTF\uff3f16BE$() {
  this.by = null;
  this.ct = null;
  this.cQ = 0;
  $ct_Ljava_nio_charset_UTF\uff3f16\uff3fCommon__T__AT__I__(this, "UTF-16BE", new ($d_T.r().C)(["X-UTF-16BE", "UTF_16BE", "ISO-10646-UCS-2", "UnicodeBigUnmarked"]), 1);
}
$p = $c_Ljava_nio_charset_UTF\uff3f16BE$.prototype = new $h_Ljava_nio_charset_UTF\uff3f16\uff3fCommon();
$p.constructor = $c_Ljava_nio_charset_UTF\uff3f16BE$;
/** @constructor */
function $h_Ljava_nio_charset_UTF\uff3f16BE$() {
}
$h_Ljava_nio_charset_UTF\uff3f16BE$.prototype = $p;
var $d_Ljava_nio_charset_UTF\uff3f16BE$ = new $TypeData().i($c_Ljava_nio_charset_UTF\uff3f16BE$, "java.nio.charset.UTF_16BE$", ({
  gB: 1,
  b1: 1,
  aj: 1,
  J: 1
}));
var $n_Ljava_nio_charset_UTF\uff3f16BE$;
function $m_Ljava_nio_charset_UTF\uff3f16BE$() {
  if ((!$n_Ljava_nio_charset_UTF\uff3f16BE$)) {
    $n_Ljava_nio_charset_UTF\uff3f16BE$ = new $c_Ljava_nio_charset_UTF\uff3f16BE$();
  }
  return $n_Ljava_nio_charset_UTF\uff3f16BE$;
}
/** @constructor */
function $c_Ljava_nio_charset_UTF\uff3f16LE$() {
  this.by = null;
  this.ct = null;
  this.cQ = 0;
  $ct_Ljava_nio_charset_UTF\uff3f16\uff3fCommon__T__AT__I__(this, "UTF-16LE", new ($d_T.r().C)(["UnicodeLittleUnmarked", "UTF_16LE", "X-UTF-16LE"]), 2);
}
$p = $c_Ljava_nio_charset_UTF\uff3f16LE$.prototype = new $h_Ljava_nio_charset_UTF\uff3f16\uff3fCommon();
$p.constructor = $c_Ljava_nio_charset_UTF\uff3f16LE$;
/** @constructor */
function $h_Ljava_nio_charset_UTF\uff3f16LE$() {
}
$h_Ljava_nio_charset_UTF\uff3f16LE$.prototype = $p;
var $d_Ljava_nio_charset_UTF\uff3f16LE$ = new $TypeData().i($c_Ljava_nio_charset_UTF\uff3f16LE$, "java.nio.charset.UTF_16LE$", ({
  gC: 1,
  b1: 1,
  aj: 1,
  J: 1
}));
var $n_Ljava_nio_charset_UTF\uff3f16LE$;
function $m_Ljava_nio_charset_UTF\uff3f16LE$() {
  if ((!$n_Ljava_nio_charset_UTF\uff3f16LE$)) {
    $n_Ljava_nio_charset_UTF\uff3f16LE$ = new $c_Ljava_nio_charset_UTF\uff3f16LE$();
  }
  return $n_Ljava_nio_charset_UTF\uff3f16LE$;
}
class $c_ju_concurrent_ExecutionException extends $c_jl_Exception {
  constructor(message, cause) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_ju_concurrent_ExecutionException = new $TypeData().i($c_ju_concurrent_ExecutionException, "java.util.concurrent.ExecutionException", ({
  gJ: 1,
  v: 1,
  o: 1,
  a: 1
}));
/** @constructor */
function $c_s_$eq$colon$eq() {
}
$p = $c_s_$eq$colon$eq.prototype = new $h_s_$less$colon$less();
$p.constructor = $c_s_$eq$colon$eq;
/** @constructor */
function $h_s_$eq$colon$eq() {
}
$h_s_$eq$colon$eq.prototype = $p;
/** @constructor */
function $c_s_PartialFunction$$anon$1() {
  this.qb = null;
  this.qb = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => $m_s_None$()));
}
$p = $c_s_PartialFunction$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$$anon$1;
/** @constructor */
function $h_s_PartialFunction$$anon$1() {
}
$h_s_PartialFunction$$anon$1.prototype = $p;
$p.h = (function() {
  return "<function1>";
});
$p.c9 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cK = (function(x) {
  return false;
});
$p.jM = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.c = (function(v1) {
  this.jM(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  h8: 1,
  e: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_s_PartialFunction$Lifted(pf) {
  this.nu = null;
  this.nu = pf;
}
$p = $c_s_PartialFunction$Lifted.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_s_PartialFunction$Lifted;
/** @constructor */
function $h_s_PartialFunction$Lifted() {
}
$h_s_PartialFunction$Lifted.prototype = $p;
$p.jO = (function(x) {
  var z = this.nu.c9(x, $m_s_PartialFunction$().hB);
  return ((!$m_s_PartialFunction$().t4(z)) ? new $c_s_Some(z) : $m_s_None$());
});
$p.c = (function(v1) {
  return this.jO(v1);
});
var $d_s_PartialFunction$Lifted = new $TypeData().i($c_s_PartialFunction$Lifted, "scala.PartialFunction$Lifted", ({
  h9: 1,
  bn: 1,
  e: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.y = (function() {
  return (-1);
});
$p.bT = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.dU = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.m = (function() {
  return this;
});
$p.jT = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.e0 = (function(n) {
  return this.h5(n, (-1));
});
$p.h5 = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.h = (function() {
  return "<iterator>";
});
/** @constructor */
function $c_sc_Map$() {
  this.jj = null;
  this.nE = null;
  this.nF = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.nE = $ct_O__(new $c_O());
  this.nF = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.nE));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  hv: 1,
  hw: 1,
  a: 1,
  b9: 1
}));
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$();
  }
  return $n_sc_Map$;
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.f5 = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.f5 = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.oI = (function(elems) {
  return this.f5.d9(elems);
});
$p.p3 = (function(it) {
  return this.f5.ay(it);
});
$p.b1 = (function() {
  return this.f5.b1();
});
$p.d9 = (function(elems) {
  return this.oI(elems);
});
$p.ay = (function(source) {
  return this.p3(source);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cE(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => x$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.gL(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.bj(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bj(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.y();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.y();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.m(), that);
}
/** @constructor */
function $c_sci_Iterable$() {
  this.hD = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.rK = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.ay.call(this, it));
});
$p.ay = (function(it) {
  return this.rK(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  hN: 1,
  hm: 1,
  a: 1,
  Q: 1
}));
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$();
  }
  return $n_sci_Iterable$;
}
/** @constructor */
function $c_sci_LazyList$() {
  this.aa = null;
  $n_sci_LazyList$ = this;
  this.aa = $ct_sci_LazyList__O__(new $c_sci_LazyList(), $m_sci_LazyList$EmptyMarker$());
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.d9 = (function(elems) {
  return this.k9(elems);
});
$p.t5 = (function(ll, n) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef, iRef) => (() => {
    var rest = restRef.fg;
    var i = iRef.eq;
    while (((i > 0) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest) === $m_sci_LazyList$().aa)))) {
      rest = rest.bd();
      restRef.fg = rest;
      i = ((i - 1) | 0);
      iRef.eq = i;
    }
    return rest;
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.k9 = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.y() === 0) ? this.aa : $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.py(coll.m()))))));
});
$p.pz = (function(it, suffix) {
  return (it.p() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.l(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.pz(it, suffix))))) : suffix.M());
});
$p.py = (function(it) {
  return (it.p() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.l(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.py(it))))) : this.aa);
});
$p.b1 = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.ay = (function(source) {
  return this.k9(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  hO: 1,
  a: 1,
  Q: 1,
  a9: 1
}));
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$();
  }
  return $n_sci_LazyList$;
}
/** @constructor */
function $c_scm_Builder$$anon$1(f$2, outer) {
  this.nY = null;
  this.gh = null;
  this.nY = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.gh = outer;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.qJ = (function(x) {
  this.gh.b0(x);
  return this;
});
$p.qv = (function(xs) {
  this.gh.aZ(xs);
  return this;
});
$p.b6 = (function(size) {
  this.gh.b6(size);
});
$p.b5 = (function() {
  return this.nY.c(this.gh.b5());
});
$p.b0 = (function(elem) {
  return this.qJ(elem);
});
$p.aZ = (function(elems) {
  return this.qv(elems);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  iF: 1,
  L: 1,
  N: 1,
  S: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.dN = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.dN = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.b6 = (function(size) {
});
$p.qK = (function(elem) {
  this.dN.b0(elem);
  return this;
});
$p.qw = (function(xs) {
  this.dN.aZ(xs);
  return this;
});
$p.b5 = (function() {
  return this.dN;
});
$p.b0 = (function(elem) {
  return this.qK(elem);
});
$p.aZ = (function(elems) {
  return this.qw(elems);
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  bi: 1,
  L: 1,
  N: 1,
  S: 1
}));
class $c_s_concurrent_Future$$anon$4 extends $c_jl_Throwable {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  fm() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$4 = new $TypeData().i($c_s_concurrent_Future$$anon$4, "scala.concurrent.Future$$anon$4", ({
  j7: 1,
  o: 1,
  a: 1,
  aT: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
function $isArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.jG)));
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
  this.oj = null;
  this.oj = Promise.resolve((void 0));
}
$p = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
}
$h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = $p;
$p.k3 = (function(runnable) {
  this.oj.then(((arg1$2) => {
    try {
      runnable.ez();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gZ($m_jl_System$Streams$().f2);
    }
  }));
});
$p.kA = (function(t) {
  t.gZ($m_jl_System$Streams$().f2);
});
var $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", ({
  jR: 1,
  bl: 1,
  bk: 1,
  b2: 1
}));
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
}
$p = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
}
$h_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = $p;
$p.k3 = (function(runnable) {
  setTimeout($m_sjs_js_Any$().rN(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    try {
      runnable.ez();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gZ($m_jl_System$Streams$().f2);
    }
  }))), 0);
});
$p.kA = (function(t) {
  t.gZ($m_jl_System$Streams$().f2);
});
var $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", ({
  jS: 1,
  bl: 1,
  bk: 1,
  b2: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(f) {
  this.ok = null;
  this.ok = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d() {
}
$h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = $p;
$p.M = (function() {
  return (0, this.ok)();
});
var $d_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d, "scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d", ({
  k2: 1,
  k1: 1,
  d6: 1,
  b4: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(f) {
  this.ol = null;
  this.ol = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1() {
}
$h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = $p;
$p.c = (function(x0) {
  return (0, this.ol)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1 = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1, "scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1", ({
  k4: 1,
  k3: 1,
  bn: 1,
  e: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(f) {
  this.om = null;
  this.om = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7() {
}
$h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = $p;
$p.fi = (function(x0, x1) {
  return (0, this.om)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7, "scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7", ({
  k6: 1,
  k5: 1,
  d7: 1,
  b5: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(f) {
  this.on = null;
  this.on = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96() {
}
$h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = $p;
$p.jL = (function(x0, x1, x2) {
  return (0, this.on)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96, "scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96", ({
  k8: 1,
  k7: 1,
  jC: 1,
  h1: 1
}));
/** @constructor */
function $c_s_util_Either() {
}
$p = $c_s_util_Either.prototype = new $h_O();
$p.constructor = $c_s_util_Either;
/** @constructor */
function $h_s_util_Either() {
}
$h_s_util_Either.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.pJ = (function() {
  return ((this instanceof $c_s_util_Right) ? new $c_s_Some(this.bI) : $m_s_None$());
});
/** @constructor */
function $c_s_util_Try() {
}
$p = $c_s_util_Try.prototype = new $h_O();
$p.constructor = $c_s_util_Try;
/** @constructor */
function $h_s_util_Try() {
}
$h_s_util_Try.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $isArrayOf_s_util_Try(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bo)));
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_ExtensionStatus() {
}
$h_Lcom_github_pwharned_clausula_extension_ExtensionStatus.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_Main$$anon$1() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_Main$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_Main$$anon$1;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_Main$$anon$1() {
}
$h_Lcom_github_pwharned_clausula_extension_Main$$anon$1.prototype = $p;
$p.sd = (function(x) {
  var x$2 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
  if (((x$2 === null) ? (x === null) : x$2.g(x))) {
    return true;
  } else {
    return false;
  }
});
$p.qR = (function(x, default$1) {
  var x$2 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
  if (((x$2 === null) ? (x === null) : x$2.g(x))) {
    return (void 0);
  } else {
    return default$1.c(x);
  }
});
$p.cK = (function(x) {
  return this.sd(x);
});
$p.c9 = (function(x, default$1) {
  return this.qR(x, default$1);
});
var $d_Lcom_github_pwharned_clausula_extension_Main$$anon$1 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_Main$$anon$1, "com.github.pwharned.clausula.extension.Main$$anon$1", ({
  dl: 1,
  d8: 1,
  e: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage(code) {
  this.fK = null;
  this.kG = null;
  this.fK = code;
  this.kG = code;
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, 976053418, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage) && (this.fK === x$0.fK)));
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c8(this);
});
$p.z = (function() {
  return 1;
});
$p.B = (function() {
  return "DetectedLanguage";
});
$p.A = (function(n) {
  if ((n === 0)) {
    return this.fK;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.es = (function() {
  return this.fK;
});
$p.fl = (function() {
  return this.kG;
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bv)));
}
var $d_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage, "com.github.pwharned.clausula.extension.domain.DetectedLanguage", ({
  bv: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.gF($m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.gG($m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.eG(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.gQ(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.b8 || (!when))) {
    var $x_1 = f();
  } else {
    this$2.b8 = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.b8 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.cG();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.cJ();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.b8 || (!when))) {
    f();
  } else {
    this$3.b8 = true;
    try {
      f();
    } finally {
      this$3.b8 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pv($thiz.cJ(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pv($thiz.cG(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.h7())) {
    $thiz.gV();
    $thiz.eG(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.gT();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.gU();
    $thiz.eG(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.cG();
  var $x_1 = this$.length;
  var this$$1 = $thiz.cJ();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_eventbus_EventBus() {
  this.kS = null;
  this.kT = null;
  this.kR = null;
  this.kS = (void 0);
  this.kT = new $c_Lcom_raquo_airstream_eventbus_WriteBus(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))), ".writer");
  this.kR = this.kT.eQ;
}
$p = $c_Lcom_raquo_airstream_eventbus_EventBus.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_eventbus_EventBus;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_EventBus() {
}
$h_Lcom_raquo_airstream_eventbus_EventBus.prototype = $p;
$p.cL = (function() {
  return this.kS;
});
$p.cD = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eB = (function() {
  return this.kR;
});
var $d_Lcom_raquo_airstream_eventbus_EventBus = new $TypeData().i($c_Lcom_raquo_airstream_eventbus_EventBus, "com.raquo.airstream.eventbus.EventBus", ({
  eb: 1,
  ad: 1,
  ax: 1,
  ap: 1,
  a2: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.lB = $m_Lcom_raquo_airstream_core_Observer$().rO(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__set__O__V($thiz, value) {
  var tryValue = new $c_s_util_Success(value);
  $thiz.lB.e3(tryValue);
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.lC = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.lC = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.se = (function(x) {
  return true;
});
$p.qS = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    this.lC.t6(x, _$1);
  })));
});
$p.cK = (function(x) {
  return this.se(x);
});
$p.c9 = (function(x, default$1) {
  return this.qS(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  er: 1,
  d8: 1,
  e: 1,
  k: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.iJ = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.cc.ou();
  })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.cc.rf();
  })));
  $thiz.ed = (void 0);
  $thiz.fV = $m_sci_Map$EmptyMap$();
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.ed === (void 0))) {
    $thiz.ed = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.ed;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.ed;
    if ((x$2 === (void 0))) {
      var $x_2;
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get");
    } else {
      var $x_2 = x$2;
    }
    $x_2.push(listener);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V($thiz, index) {
  var x = $thiz.ed;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.ed;
  if ((x === (void 0))) {
    return (-1);
  } else {
    var found = false;
    var ix = 0;
    while (((!found) && (ix < (x.length | 0)))) {
      var x$1 = x[ix];
      if (((x$1 === null) ? (listener === null) : $dp_equals__O__Z(x$1, listener))) {
        found = true;
      } else {
        ix = ((1 + ix) | 0);
      }
    }
    return (found ? ix : (-1));
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V($thiz, key, reason, addItems, removeItems) {
  var keyItemsWithReason = $thiz.fV.db(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.d())) {
      var x0 = these.D();
      var x = x0.aY();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.aL();
        if ((!((x$3 === null) ? (reason === null) : $dp_equals__O__Z(x$3, reason)))) {
          var $x_1 = true;
        } else {
          var $x_1 = (reason === null);
        }
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        return true;
      }
      these = these.v();
    }
    return false;
  });
  var itemsToAdd = $f_sc_SeqOps__distinct__O(addItems);
  _return$1: {
    var result;
    var l$tailLocal1 = removeItems;
    while (true) {
      if (l$tailLocal1.d()) {
        var result = $m_sci_Nil$();
        break;
      } else {
        var h = l$tailLocal1.D();
        var t = l$tailLocal1.v();
        if (((!(!f(h))) === true)) {
          l$tailLocal1 = t;
          continue;
        }
        var start = l$tailLocal1;
        var remaining$tailLocal1 = t;
        while (true) {
          if (remaining$tailLocal1.d()) {
            var result = start;
            break _return$1;
          } else {
            var x$1 = remaining$tailLocal1.D();
            if (((!(!f(x$1))) !== true)) {
              remaining$tailLocal1 = remaining$tailLocal1.v();
              continue;
            }
            var firstMiss = remaining$tailLocal1;
            var newHead = new $c_sci_$colon$colon(start.D(), $m_sci_Nil$());
            var toProcess = start.v();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.D(), $m_sci_Nil$());
              currentLast.aA = newElem;
              currentLast = newElem;
              toProcess = toProcess.v();
            }
            var next = firstMiss.v();
            var nextToCopy = next;
            while ((!next.d())) {
              var head = next.D();
              if (((!(!f(head))) !== true)) {
                next = next.v();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.D(), $m_sci_Nil$());
                  currentLast.aA = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.v();
                }
                nextToCopy = next.v();
                next = next.v();
              }
            }
            if ((!nextToCopy.d())) {
              currentLast.aA = nextToCopy;
            }
            var result = newHead;
            break _return$1;
          }
        }
      }
    }
  }
  var this$1 = $thiz.fV.db(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.br(t$1.aY()));
  _return$3: {
    var $x_3;
    var l$tailLocal1$1 = this$1;
    while (true) {
      if (l$tailLocal1$1.d()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$tailLocal1$1.D();
        var t$2 = l$tailLocal1$1.v();
        if (((!(!f$1(h$1))) === true)) {
          l$tailLocal1$1 = t$2;
          continue;
        }
        var start$1 = l$tailLocal1$1;
        var remaining$tailLocal1$1 = t$2;
        while (true) {
          if (remaining$tailLocal1$1.d()) {
            var $x_3 = start$1;
            break _return$3;
          } else {
            var x$2 = remaining$tailLocal1$1.D();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$tailLocal1$1 = remaining$tailLocal1$1.v();
              continue;
            }
            var firstMiss$1 = remaining$tailLocal1$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.D(), $m_sci_Nil$());
            var toProcess$1 = start$1.v();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.D(), $m_sci_Nil$());
              currentLast$1.aA = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.v();
            }
            var next$1 = firstMiss$1.v();
            var nextToCopy$1 = next$1;
            while ((!next$1.d())) {
              var head$1 = next$1.D();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.v();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.D(), $m_sci_Nil$());
                  currentLast$1.aA = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.v();
                }
                nextToCopy$1 = next$1.v();
                next$1 = next$1.v();
              }
            }
            if ((!nextToCopy$1.d())) {
              currentLast$1.aA = nextToCopy$1;
            }
            var $x_3 = newHead$1;
            break _return$3;
          }
        }
      }
    }
  }
  var f$2 = ((_$2) => $ct_T2__O__O__(new $c_T2(), _$2, reason));
  if ((itemsToAdd === $m_sci_Nil$())) {
    var $x_2 = $m_sci_Nil$();
  } else {
    var x0$1 = itemsToAdd.D();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.v();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.D();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.aA = nx;
      t$3 = nx;
      rest = rest.v();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.oD($x_2);
  var domValues = key.iy.oQ(key.my.c($thiz));
  var f$3 = ((elem) => result.br(elem));
  _return$5: {
    var $x_5;
    var l$tailLocal1$2 = domValues;
    while (true) {
      if (l$tailLocal1$2.d()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$tailLocal1$2.D();
        var t$4 = l$tailLocal1$2.v();
        if (((!(!f$3(h$3))) === true)) {
          l$tailLocal1$2 = t$4;
          continue;
        }
        var start$2 = l$tailLocal1$2;
        var remaining$tailLocal1$2 = t$4;
        while (true) {
          if (remaining$tailLocal1$2.d()) {
            var $x_5 = start$2;
            break _return$5;
          } else {
            var x$4 = remaining$tailLocal1$2.D();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$tailLocal1$2 = remaining$tailLocal1$2.v();
              continue;
            }
            var firstMiss$2 = remaining$tailLocal1$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.D(), $m_sci_Nil$());
            var toProcess$2 = start$2.v();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.D(), $m_sci_Nil$());
              currentLast$2.aA = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.v();
            }
            var next$2 = firstMiss$2.v();
            var nextToCopy$2 = next$2;
            while ((!next$2.d())) {
              var head$2 = next$2.D();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.v();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.D(), $m_sci_Nil$());
                  currentLast$2.aA = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.v();
                }
                nextToCopy$2 = next$2.v();
                next$2 = next$2.v();
              }
            }
            if ((!nextToCopy$2.d())) {
              currentLast$2.aA = nextToCopy$2;
            }
            var $x_5 = newHead$2;
            break _return$5;
          }
        }
      }
    }
  }
  _return$7: {
    var $x_4;
    var l$tailLocal1$3 = itemsToAdd;
    while (true) {
      if (l$tailLocal1$3.d()) {
        var $x_4 = $m_sci_Nil$();
        break;
      } else {
        var h$4 = l$tailLocal1$3.D();
        var t$5 = l$tailLocal1$3.v();
        if (((!(!f(h$4))) === true)) {
          l$tailLocal1$3 = t$5;
          continue;
        }
        var start$3 = l$tailLocal1$3;
        var remaining$tailLocal1$3 = t$5;
        while (true) {
          if (remaining$tailLocal1$3.d()) {
            var $x_4 = start$3;
            break _return$7;
          } else {
            var x$5 = remaining$tailLocal1$3.D();
            if (((!(!f(x$5))) !== true)) {
              remaining$tailLocal1$3 = remaining$tailLocal1$3.v();
              continue;
            }
            var firstMiss$3 = remaining$tailLocal1$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.D(), $m_sci_Nil$());
            var toProcess$3 = start$3.v();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.D(), $m_sci_Nil$());
              currentLast$3.aA = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.v();
            }
            var next$3 = firstMiss$3.v();
            var nextToCopy$3 = next$3;
            while ((!next$3.d())) {
              var head$3 = next$3.D();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.v();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.D(), $m_sci_Nil$());
                  currentLast$3.aA = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.v();
                }
                nextToCopy$3 = next$3.v();
                next$3 = next$3.v();
              }
            }
            if ((!nextToCopy$3.d())) {
              currentLast$3.aA = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break _return$7;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.oD($x_4);
  $thiz.fV = $thiz.fV.e5(key, newItems);
  key.mA.fi($thiz, key.iy.oS(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.fU, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.fU;
  $thiz.fU = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.d()) && (!maybePrevParent.x().i0().bL.d()));
  var isNextParentActive = ((!maybeNextParent.d()) && (!maybeNextParent.x().i0().bL.d()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.d() ? $m_s_None$() : new $c_s_Some(maybeNextParent.x().i0())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.d()) {
    $thiz.iJ.r1();
  } else {
    var x0 = maybeNextOwner.x();
    $thiz.iJ.tb(x0);
  }
}
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_Ljava_io_UnsupportedEncodingException extends $c_Ljava_io_IOException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_Ljava_io_UnsupportedEncodingException = new $TypeData().i($c_Ljava_io_UnsupportedEncodingException, "java.io.UnsupportedEncodingException", ({
  fM: 1,
  fK: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  fN: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  fR: 1,
  ai: 1,
  a: 1,
  J: 1,
  a7: 1
}), ((x) => $isByte(x)));
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fU)));
}
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  aN: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $ct_jl_IllegalStateException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalStateException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  fW: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  c1: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  g1: 1,
  bX: 1,
  bV: 1,
  bY: 1,
  bW: 1
}));
function $ct_jl_NullPointerException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_NullPointerException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  g3: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g6)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  g7: 1,
  ai: 1,
  a: 1,
  J: 1,
  a7: 1
}), ((x) => $isShort(x)));
class $c_jl_StackOverflowError extends $c_jl_VirtualMachineError {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_StackOverflowError = new $TypeData().i($c_jl_StackOverflowError, "java.lang.StackOverflowError", ({
  g8: 1,
  c5: 1,
  aM: 1,
  o: 1,
  a: 1
}));
function $ct_jl_UnsupportedOperationException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
function $ct_jl_UnsupportedOperationException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  c4: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_Ljava_nio_BufferOverflowException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
function $isArrayOf_Ljava_nio_BufferOverflowException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c8)));
}
var $d_Ljava_nio_BufferOverflowException = new $TypeData().i($c_Ljava_nio_BufferOverflowException, "java.nio.BufferOverflowException", ({
  c8: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_Ljava_nio_BufferUnderflowException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
function $isArrayOf_Ljava_nio_BufferUnderflowException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
var $d_Ljava_nio_BufferUnderflowException = new $TypeData().i($c_Ljava_nio_BufferUnderflowException, "java.nio.BufferUnderflowException", ({
  c9: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  gI: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $ct_ju_NoSuchElementException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  aO: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
/** @constructor */
function $c_s_$less$colon$less$$anon$1() {
}
$p = $c_s_$less$colon$less$$anon$1.prototype = new $h_s_$eq$colon$eq();
$p.constructor = $c_s_$less$colon$less$$anon$1;
/** @constructor */
function $h_s_$less$colon$less$$anon$1() {
}
$h_s_$less$colon$less$$anon$1.prototype = $p;
$p.c = (function(x) {
  return x;
});
$p.h = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().i($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  gY: 1,
  gV: 1,
  gW: 1,
  e: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.nt)) {
    if (($thiz.hz === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.hz;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.ao.N));
      try {
        var $x_1 = ((($thiz.hz + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.ns = $x_1;
    $thiz.nt = true;
  }
  return $thiz.ns;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.hz = null;
    this.ns = null;
    this.nt = false;
    this.hz = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  eu() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  h4: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
/** @constructor */
function $c_s_Option() {
}
$p = $c_s_Option.prototype = new $h_O();
$p.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.d = (function() {
  return (this === $m_s_None$());
});
$p.y = (function() {
  return (this.d() ? 0 : 1);
});
$p.br = (function(elem) {
  return ((!this.d()) && $m_sr_BoxesRunTime$().n(this.x(), elem));
});
$p.m = (function() {
  return (this.d() ? $m_sc_Iterator$().X : new $c_sc_Iterator$$anon$20(this.x()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.g4 = 0;
  this.nw = 0;
  this.nv = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.nv = outer;
  this.g4 = 0;
  this.nw = outer.z();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.p = (function() {
  return (this.g4 < this.nw);
});
$p.l = (function() {
  var result = this.nv.A(this.g4);
  this.g4 = ((1 + this.g4) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  hb: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
function $ct_T2__O__O__($thiz, _1, _2) {
  $thiz.jd = _1;
  $thiz.je = _2;
  return $thiz;
}
/** @constructor */
function $c_T2() {
  this.jd = null;
  this.je = null;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.z = (function() {
  return 2;
});
$p.A = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.aY = (function() {
  return this.jd;
});
$p.aL = (function() {
  return this.je;
});
$p.h = (function() {
  return (((("(" + this.aY()) + ",") + this.aL()) + ")");
});
$p.B = (function() {
  return "Tuple2";
});
$p.W = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, (-116390334), true);
});
$p.g = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().n(this.aY(), x$1.aY()) && $m_sr_BoxesRunTime$().n(this.aL(), x$1.aL()))));
});
$p.os = (function() {
  return (+this.aY());
});
$p.ot = (function() {
  return (+this.aL());
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b6)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  b6: 1,
  ce: 1,
  g: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.g6 = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  hj: 1,
  hi: 1,
  a: 1,
  Q: 1,
  a9: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.cb() + "("), ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.f)));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.p = (function() {
  return false;
});
$p.sv = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator");
});
$p.y = (function() {
  return 0;
});
$p.l = (function() {
  this.sv();
});
$p.h5 = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  ho: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$2) {
  this.ny = null;
  this.g7 = false;
  this.ny = a$2;
  this.g7 = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.p = (function() {
  return (!this.g7);
});
$p.l = (function() {
  if (this.g7) {
    return $m_sc_Iterator$().X.l();
  } else {
    this.g7 = true;
    return this.ny;
  }
});
$p.h5 = (function(from, until) {
  return (((this.g7 || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().X : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  hp: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(f$8, outer) {
  this.nz = null;
  this.nB = null;
  this.hE = false;
  this.nA = null;
  this.ji = null;
  this.nz = f$8;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ji = outer;
  this.nB = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.hE = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.p = (function() {
  while (true) {
    if (this.hE) {
      return true;
    } else if (this.ji.p()) {
      var a = this.ji.l();
      if ((!this.nB.hS(this.nz.c(a)))) {
        continue;
      }
      this.nA = a;
      this.hE = true;
      return true;
    } else {
      return false;
    }
  }
});
$p.l = (function() {
  if (this.p()) {
    this.hE = false;
    return this.nA;
  } else {
    return $m_sc_Iterator$().X.l();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  hr: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(f$9, outer) {
  this.nC = null;
  this.hF = null;
  this.nC = f$9;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.hF = outer;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.y = (function() {
  return this.hF.y();
});
$p.p = (function() {
  return this.hF.p();
});
$p.l = (function() {
  return this.nC.c(this.hF.l());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  hs: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bz instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bz;
      $thiz.bz = c.bz;
      $thiz.dp = c.dp;
      if ((c.c0 !== null)) {
        if (($thiz.bZ === null)) {
          $thiz.bZ = c.bZ;
        }
        var x$proxy10 = c.bZ;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().bu();
        }
        x$proxy10.g8 = $thiz.c0;
        $thiz.c0 = c.c0;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.c0 === null)) {
      $thiz.bz = null;
      $thiz.bZ = null;
      return false;
    } else {
      $thiz.bz = $thiz.c0.s0();
      if (($thiz.bZ === $thiz.c0)) {
        var x$proxy12 = $thiz.bZ;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().bu();
        }
        $thiz.bZ = x$proxy12.g8;
      }
      $thiz.c0 = $thiz.c0.g8;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.dp) {
        return true;
      } else {
        if ((!(($thiz.bz !== null) && $thiz.bz.p()))) {
          continue;
        }
        $thiz.dp = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.bz = null;
  this.c0 = null;
  this.bZ = null;
  this.dp = false;
  this.bz = from;
  this.c0 = null;
  this.bZ = null;
  this.dp = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.p = (function() {
  if (this.dp) {
    return true;
  } else if ((this.bz !== null)) {
    if (this.bz.p()) {
      this.dp = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.l = (function() {
  if (this.p()) {
    this.dp = false;
    var x$proxy13 = this.bz;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    return x$proxy13.l();
  } else {
    return $m_sc_Iterator$().X.l();
  }
});
$p.jT = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.c0 === null)) {
    this.c0 = c;
    this.bZ = c;
  } else {
    var x$proxy14 = this.bZ;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    x$proxy14.g8 = c;
    this.bZ = c;
  }
  if ((this.bz === null)) {
    this.bz = $m_sc_Iterator$().X;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cl)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  cl: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.cT > 0)) {
    if ($thiz.dq.p()) {
      $thiz.dq.l();
      $thiz.cT = (($thiz.cT - 1) | 0);
    } else {
      $thiz.cT = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.bO < 0)) {
    return (-1);
  } else {
    var that = (($thiz.bO - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.dq = null;
  this.bO = 0;
  this.cT = 0;
  this.dq = underlying;
  this.bO = limit;
  this.cT = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.y = (function() {
  var size = this.dq.y();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.cT) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.bO < 0)) {
      return dropSize;
    } else {
      var x = this.bO;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.p = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.bO !== 0) && this.dq.p());
});
$p.l = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.bO > 0)) {
    this.bO = ((this.bO - 1) | 0);
    return this.dq.l();
  } else {
    return ((this.bO < 0) ? this.dq.l() : $m_sc_Iterator$().X.l());
  }
});
$p.h5 = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.bO < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.cT + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().X;
  } else if ((sum < 0)) {
    this.cT = 2147483647;
    this.bO = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.dq, ((sum - 2147483647) | 0), rest))));
  } else {
    this.cT = sum;
    this.bO = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  hu: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.d())) {
    len = ((1 + len) | 0);
    these = these.v();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len, 0, $thiz));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.bj(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.oR(n);
  if (skipped.d()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.D();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return (xs$tailLocal1.d() ? 0 : 1);
    } else if (xs$tailLocal1.d()) {
      return (-1);
    } else {
      var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
      var xs$tailLocal1$tmp1 = xs$tailLocal1.v();
      i$tailLocal1 = i$tailLocal1$tmp1;
      xs$tailLocal1 = xs$tailLocal1$tmp1;
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      if ((((!a$tailLocal1.d()) && (!b$tailLocal1.d())) && $m_sr_BoxesRunTime$().n(a$tailLocal1.D(), b$tailLocal1.D()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.v();
        var b$tailLocal1$tmp1 = b$tailLocal1.v();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.d() && b$tailLocal1.d());
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.g9 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.g9 = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.p = (function() {
  return (!this.g9.d());
});
$p.l = (function() {
  var r = this.g9.D();
  this.g9 = this.g9.v();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  hy: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.bP = 0;
  $thiz.ga = 0;
  $thiz.bB = (-1);
  return $thiz;
}
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.cV === null)) {
    $thiz.cV = new $ac_I(($m_sci_Node$().gg << 1));
    $thiz.gb = new ($d_sci_Node.r().C)($m_sci_Node$().gg);
  }
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.kh()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.i3()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.ek = node;
  $thiz.bP = 0;
  $thiz.ga = node.kx();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bB = ((1 + $thiz.bB) | 0);
  var cursorIndex = ($thiz.bB << 1);
  var lengthIndex = ((1 + ($thiz.bB << 1)) | 0);
  $thiz.gb.a[$thiz.bB] = node;
  $thiz.cV.a[cursorIndex] = 0;
  $thiz.cV.a[lengthIndex] = node.kt();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bB = (($thiz.bB - 1) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bB >= 0)) {
    var cursorIndex = ($thiz.bB << 1);
    var lengthIndex = ((1 + ($thiz.bB << 1)) | 0);
    var nodeCursor = $thiz.cV.a[cursorIndex];
    if ((nodeCursor < $thiz.cV.a[lengthIndex])) {
      var \u03b41$ = $thiz.cV;
      \u03b41$.a[cursorIndex] = ((1 + \u03b41$.a[cursorIndex]) | 0);
      var nextNode = $thiz.gb.a[$thiz.bB].kd(nodeCursor);
      if (nextNode.kh()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.i3()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true;
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz);
    }
  }
  return false;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.bP = 0;
  this.ga = 0;
  this.ek = null;
  this.bB = 0;
  this.cV = null;
  this.gb = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.p = (function() {
  return ((this.bP < this.ga) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.dy = (-1);
  $thiz.bQ = (-1);
  $thiz.gc = new $ac_I(((1 + $m_sci_Node$().gg) | 0));
  $thiz.gd = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().gg) | 0));
  return $thiz;
}
function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz;
}
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.hH = node;
  $thiz.dy = ((node.kx() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.bQ = ((1 + $thiz.bQ) | 0);
  $thiz.gd.a[$thiz.bQ] = node;
  $thiz.gc.a[$thiz.bQ] = ((node.kt() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.bQ = (($thiz.bQ - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bQ >= 0)) {
    var nodeCursor = $thiz.gc.a[$thiz.bQ];
    $thiz.gc.a[$thiz.bQ] = ((nodeCursor - 1) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.gd.a[$thiz.bQ].kd(nodeCursor));
    } else {
      var currNode = $thiz.gd.a[$thiz.bQ];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.i3()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
/** @constructor */
function $c_sci_ChampBaseReverseIterator() {
  this.dy = 0;
  this.hH = null;
  this.bQ = 0;
  this.gc = null;
  this.gd = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.p = (function() {
  return ((this.dy >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.f6 !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.t(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.t(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.gJ(bitpos);
  var idx = (dataIx << 1);
  var src = bm.ak;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.t(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.t(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bA, dataIx, originalHash);
  bm.Y = (bm.Y | bitpos);
  bm.ak = dst;
  bm.bA = dstHashes;
  bm.aQ = ((1 + bm.aQ) | 0);
  bm.bm = ((bm.bm + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.f6 = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.cx = $thiz.cx.oN();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.f6 = null;
  this.cx = null;
  this.cx = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().nr, $m_s_Array$EmptyArrays$().jc, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.b6 = (function(size) {
});
$p.fB = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().ew(keyHash, shift);
    var bitpos = $m_sci_Node$().dY(mask);
    if (((mapNode.Y & bitpos) !== 0)) {
      var index = $m_sci_Node$().cI(mapNode.Y, mask, bitpos);
      var key0 = mapNode.e1(index);
      var key0UnimprovedHash = mapNode.gN(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().n(key0, key))) {
        mapNode.ak.a[((1 + (index << 1)) | 0)] = value;
        return (void 0);
      } else {
        var value0 = mapNode.dc(index);
        var key0Hash = $m_sc_Hashing$().cm(key0UnimprovedHash);
        var subNodeNew = mapNode.kr(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.sp(bitpos, key0Hash, subNodeNew);
        return (void 0);
      }
    } else if (((mapNode.a8 & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cI(mapNode.a8, mask, bitpos);
      var subNode = mapNode.da(index$2);
      var beforeSize = subNode.aO();
      var beforeHash = subNode.dZ();
      this.fB(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.aQ = ((mapNode.aQ + ((subNode.aO() - beforeSize) | 0)) | 0);
      mapNode.bm = ((mapNode.bm + ((subNode.dZ() - beforeHash) | 0)) | 0);
      return (void 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
      return (void 0);
    }
  }
  if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.fq(key);
    if ((index$3 < 0)) {
      mapNode.a9 = mapNode.a9.dV($ct_T2__O__O__(new $c_T2(), key, value));
      return (void 0);
    } else {
      mapNode.a9 = mapNode.a9.e4(index$3, $ct_T2__O__O__(new $c_T2(), key, value));
      return (void 0);
    }
  }
  throw new $c_s_MatchError(mapNode);
});
$p.kB = (function() {
  if ((this.cx.aQ === 0)) {
    return $m_sci_HashMap$().jn;
  } else if ((this.f6 !== null)) {
    return this.f6;
  } else {
    this.f6 = new $c_sci_HashMap(this.cx);
    return this.f6;
  }
});
$p.oA = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().L(elem.aY());
  var im = $m_sc_Hashing$().cm(h);
  this.fB(this.cx, elem.aY(), elem.aL(), h, im, 0);
  return this;
});
$p.er = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().L(key);
  this.fB(this.cx, key, value, originalHash, $m_sc_Hashing$().cm(originalHash), 0);
  return this;
});
$p.jJ = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(xs, this);
  } else if (false) {
    var iter = xs.tS();
    while (iter.p()) {
      var next = iter.l();
      var originalHash = xs.tv(next.pb());
      var hash = $m_sc_Hashing$().cm(originalHash);
      this.fB(this.cx, next.pj(), next.pS(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.rt();
    while (iter$2.p()) {
      var next$2 = iter$2.l();
      var originalHash$2 = xs.tv(next$2.pb());
      var hash$2 = $m_sc_Hashing$().cm(originalHash$2);
      this.fB(this.cx, next$2.pj(), next$2.pS(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.et(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2, value$2) => this.er(key$2, value$2))));
  } else {
    var it = xs.m();
    while (it.p()) {
      this.oA(it.l());
    }
  }
  return this;
});
$p.b5 = (function() {
  return this.kB();
});
$p.b0 = (function(elem) {
  return this.oA(elem);
});
$p.aZ = (function(elems) {
  return this.jJ(elems);
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  hJ: 1,
  L: 1,
  N: 1,
  S: 1,
  ah: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.f7 = null;
  this.nM = null;
  this.r0();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.b6 = (function(size) {
});
$p.r0 = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.nM = ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.k2()))));
  this.f7 = deferred;
});
$p.t1 = (function() {
  this.f7.kj(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().aa)));
  return this.nM;
});
$p.qG = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.f7.kj(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $m_sci_LazyList$();
    return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.k2())))));
  })));
  this.f7 = deferred;
  return this;
});
$p.qt = (function(xs) {
  if ((xs.y() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.f7.kj(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().pz(xs.m(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.k2()))))));
    this.f7 = deferred;
  }
  return this;
});
$p.b5 = (function() {
  return this.t1();
});
$p.b0 = (function(elem) {
  return this.qG(elem);
});
$p.aZ = (function(elems) {
  return this.qt(elems);
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  hQ: 1,
  L: 1,
  N: 1,
  S: 1,
  ah: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.f8 = null;
  this.f8 = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.p = (function() {
  return (!($p_sci_LazyList__evaluated__sci_LazyList(this.f8) === $m_sci_LazyList$().aa));
});
$p.l = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this.f8) === $m_sci_LazyList$().aa)) {
    return $m_sc_Iterator$().X.l();
  } else {
    var res = this.f8.D();
    this.f8 = this.f8.bd();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  hS: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
$p.d9 = (function(elems) {
  return $m_sci_Nil$().ky(elems);
});
$p.b1 = (function() {
  return new $c_scm_ListBuffer();
});
$p.ay = (function(source) {
  return $m_sci_Nil$().ky(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  hV: 1,
  a: 1,
  Q: 1,
  a9: 1,
  at: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
function $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.f9 = outer;
  $thiz.dC = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dC = 0;
  this.f9 = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.p = (function() {
  return (this.dC < 2);
});
$p.l = (function() {
  matchResult5$1: {
    var result;
    var x23 = this.dC;
    if ((x23 === 0)) {
      var result = $ct_T2__O__O__(new $c_T2(), this.f9.cd, this.f9.dA);
      break matchResult5$1;
    }
    if ((x23 === 1)) {
      var result = $ct_T2__O__O__(new $c_T2(), this.f9.ce, this.f9.dB);
      break matchResult5$1;
    }
    var result = $m_sc_Iterator$().X.l();
  }
  this.dC = ((1 + this.dC) | 0);
  return result;
});
$p.e0 = (function(n) {
  this.dC = ((this.dC + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.dD = outer;
  $thiz.dE = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dE = 0;
  this.dD = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.p = (function() {
  return (this.dE < 3);
});
$p.l = (function() {
  var result;
  switch (this.dE) {
    case 0: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dD.c1, this.dD.cW);
      break;
    }
    case 1: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dD.c2, this.dD.cX);
      break;
    }
    case 2: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dD.c3, this.dD.cY);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().X.l();
    }
  }
  this.dE = ((1 + this.dE) | 0);
  return result;
});
$p.e0 = (function(n) {
  this.dE = ((this.dE + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.cA = outer;
  $thiz.dF = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dF = 0;
  this.cA = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.p = (function() {
  return (this.dF < 4);
});
$p.l = (function() {
  var result;
  switch (this.dF) {
    case 0: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cA.bC, this.cA.cf);
      break;
    }
    case 1: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cA.bD, this.cA.cg);
      break;
    }
    case 2: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cA.bE, this.cA.ch);
      break;
    }
    case 3: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cA.bF, this.cA.ci);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().X.l();
    }
  }
  this.dF = ((1 + this.dF) | 0);
  return result;
});
$p.e0 = (function(n) {
  this.dF = ((this.dF + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.cZ = null;
  this.ge = false;
  this.em = null;
  this.cZ = $m_sci_Map$EmptyMap$();
  this.ge = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.b6 = (function(size) {
});
$p.pw = (function() {
  return (this.ge ? this.em.kB() : this.cZ);
});
$p.qE = (function(key, value) {
  if (this.ge) {
    this.em.er(key, value);
  } else if ((this.cZ.aO() < 4)) {
    this.cZ = this.cZ.e5(key, value);
  } else if (this.cZ.br(key)) {
    this.cZ = this.cZ.e5(key, value);
  } else {
    this.ge = true;
    if ((this.em === null)) {
      this.em = new $c_sci_HashMapBuilder();
    }
    this.cZ.qY(this.em);
    this.em.er(key, value);
  }
  return this;
});
$p.ov = (function(xs) {
  return (this.ge ? (this.em.jJ(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b5 = (function() {
  return this.pw();
});
$p.b0 = (function(elem) {
  return this.qE(elem.aY(), elem.aL());
});
$p.aZ = (function(elems) {
  return this.ov(elems);
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  i5: 1,
  L: 1,
  N: 1,
  S: 1,
  ah: 1
}));
/** @constructor */
function $c_sci_Vector$() {
  this.nQ = 0;
  this.nR = null;
  $n_sci_Vector$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().pg($m_jl_System$SystemProperties$().kf("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 250;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.nQ = $x_1;
  this.nR = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.d9 = (function(elems) {
  return this.ka(elems);
});
$p.ka = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.y();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((((knownSize - 1) | 0) >>> 0) <= 31)) {
      matchResult3: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.a5().aN();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.cw;
            break matchResult3;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.bT(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchResult3;
        }
        var a1$2 = new $ac_O(knownSize);
        it.m().bT(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().ow(it).px();
    }
  }
});
$p.ay = (function(source) {
  return this.ka(source);
});
$p.b1 = (function() {
  return new $c_sci_VectorBuilder();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  ij: 1,
  a: 1,
  Q: 1,
  a9: 1,
  at: 1
}));
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$();
  }
  return $n_sci_Vector$;
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.K >= 6)) {
    a = $thiz.aE;
    var i = (($thiz.H >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.t(i, dest, 0, length);
    }
    var num = $thiz.H;
    var t = (((num >> 24) >>> 7) | 0);
    var newOffset = (((33554431 & ((num + t) | 0)) - t) | 0);
    $thiz.C = (($thiz.C - (($thiz.H - newOffset) | 0)) | 0);
    $thiz.H = newOffset;
    if (((($thiz.C >>> 25) | 0) === 0)) {
      $thiz.K = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.K >= 5)) {
    if ((a === null)) {
      a = $thiz.T;
    }
    var i$2 = (31 & (($thiz.H >>> 20) | 0));
    if (($thiz.K === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.t(i$2, dest$1, 0, length$1);
      }
      $thiz.T = a;
      var num$1 = $thiz.H;
      var t$1 = (((num$1 >> 19) >>> 12) | 0);
      var newOffset$1 = (((1048575 & ((num$1 + t$1) | 0)) - t$1) | 0);
      $thiz.C = (($thiz.C - (($thiz.H - newOffset$1) | 0)) | 0);
      $thiz.H = newOffset$1;
      if (((($thiz.C >>> 20) | 0) === 0)) {
        $thiz.K = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().a4(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.K >= 4)) {
    if ((a === null)) {
      a = $thiz.N;
    }
    var i$3 = (31 & (($thiz.H >>> 15) | 0));
    if (($thiz.K === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.t(i$3, dest$2, 0, length$2);
      }
      $thiz.N = a;
      var num$2 = $thiz.H;
      var t$2 = (((num$2 >> 14) >>> 17) | 0);
      var newOffset$2 = (((32767 & ((num$2 + t$2) | 0)) - t$2) | 0);
      $thiz.C = (($thiz.C - (($thiz.H - newOffset$2) | 0)) | 0);
      $thiz.H = newOffset$2;
      if (((($thiz.C >>> 15) | 0) === 0)) {
        $thiz.K = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().a4(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.K >= 3)) {
    if ((a === null)) {
      a = $thiz.I;
    }
    var i$4 = (31 & (($thiz.H >>> 10) | 0));
    if (($thiz.K === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.t(i$4, dest$3, 0, length$3);
      }
      $thiz.I = a;
      var num$3 = $thiz.H;
      var t$3 = (((num$3 >> 9) >>> 22) | 0);
      var newOffset$3 = (((1023 & ((num$3 + t$3) | 0)) - t$3) | 0);
      $thiz.C = (($thiz.C - (($thiz.H - newOffset$3) | 0)) | 0);
      $thiz.H = newOffset$3;
      if (((($thiz.C >>> 10) | 0) === 0)) {
        $thiz.K = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().a4(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.K >= 2)) {
    if ((a === null)) {
      a = $thiz.F;
    }
    var i$5 = (31 & (($thiz.H >>> 5) | 0));
    if (($thiz.K === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.t(i$5, dest$4, 0, length$4);
      }
      $thiz.F = a;
      var num$4 = $thiz.H;
      var t$4 = (((num$4 >> 4) >>> 27) | 0);
      var newOffset$4 = (((31 & ((num$4 + t$4) | 0)) - t$4) | 0);
      $thiz.C = (($thiz.C - (($thiz.H - newOffset$4) | 0)) | 0);
      $thiz.H = newOffset$4;
      if (((($thiz.C >>> 5) | 0) === 0)) {
        $thiz.K = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().a4(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.K >= 1)) {
    if ((a === null)) {
      a = $thiz.Q;
    }
    var i$6 = (31 & $thiz.H);
    if (($thiz.K === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.t(i$6, dest$5, 0, length$5);
      }
      $thiz.Q = a;
      $thiz.J = (($thiz.J - $thiz.H) | 0);
      $thiz.H = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().a4(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.hI = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.J === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.J) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.Q;
    var destPos = $thiz.J;
    data.t(0, dest, destPos, copy1);
    $thiz.J = (($thiz.J + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.Q;
      data.t(copy1, dest$1, 0, copy2);
      $thiz.J = (($thiz.J + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.J === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.C) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.C >>> 5) | 0));
      var dest = $thiz.F;
      slice.t(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.F;
        slice.t(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      var num = $thiz.C;
      var t = (((num >> 9) >>> 22) | 0);
      if (((((1023 & ((num + t) | 0)) - t) | 0) !== 0)) {
        var f = ((e$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3, 2);
        });
        var len = slice.a.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var x0 = slice.a[i];
            f(x0);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i < len)) {
            var x0$1 = slice.a[i];
            f(x0$1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i < len)) {
            var x0$2 = slice.a[i];
            f(x0$2);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i < len)) {
            var $x_1 = slice.a;
            var $x_2 = (i << 1);
            var x0$3_$_lo = $x_1[$x_2];
            var x0$3_$_hi = $x_1[(($x_2 + 1) | 0)];
            f($bL(x0$3_$_lo, x0$3_$_hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i < len)) {
            var x0$4 = slice.a[i];
            f(x0$4);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i < len)) {
            var x0$5 = slice.a[i];
            f($bC(x0$5));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i < len)) {
            var x0$6 = slice.a[i];
            f(x0$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i < len)) {
            var x0$7 = slice.a[i];
            f(x0$7);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i < len)) {
            var x0$8 = slice.a[i];
            f(x0$8);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.C) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.C >>> 10) | 0));
      var dest$2 = $thiz.I;
      slice.t(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.I;
        slice.t(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      var num$1 = $thiz.C;
      var t$1 = (((num$1 >> 14) >>> 17) | 0);
      if (((((32767 & ((num$1 + t$1) | 0)) - t$1) | 0) !== 0)) {
        var f$1 = ((e$3$1) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3$1, 3);
        });
        var len$1 = slice.a.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var x0$9 = slice.a[i$1];
            f$1(x0$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$1 < len$1)) {
            var x0$10 = slice.a[i$1];
            f$1(x0$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$1 < len$1)) {
            var x0$11 = slice.a[i$1];
            f$1(x0$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$1 < len$1)) {
            var $x_3 = slice.a;
            var $x_4 = (i$1 << 1);
            var x0$12_$_lo = $x_3[$x_4];
            var x0$12_$_hi = $x_3[(($x_4 + 1) | 0)];
            f$1($bL(x0$12_$_lo, x0$12_$_hi));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$1 < len$1)) {
            var x0$13 = slice.a[i$1];
            f$1(x0$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$1 < len$1)) {
            var x0$14 = slice.a[i$1];
            f$1($bC(x0$14));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$1 < len$1)) {
            var x0$15 = slice.a[i$1];
            f$1(x0$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$1 < len$1)) {
            var x0$16 = slice.a[i$1];
            f$1(x0$16);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$1 < len$1)) {
            var x0$17 = slice.a[i$1];
            f$1(x0$17);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.C) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.C >>> 15) | 0));
      var dest$4 = $thiz.N;
      slice.t(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.N;
        slice.t(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      var num$2 = $thiz.C;
      var t$2 = (((num$2 >> 19) >>> 12) | 0);
      if (((((1048575 & ((num$2 + t$2) | 0)) - t$2) | 0) !== 0)) {
        var f$2 = ((e$3$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3$2, 4);
        });
        var len$2 = slice.a.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var x0$18 = slice.a[i$2];
            f$2(x0$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$2 < len$2)) {
            var x0$19 = slice.a[i$2];
            f$2(x0$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$2 < len$2)) {
            var x0$20 = slice.a[i$2];
            f$2(x0$20);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$2 < len$2)) {
            var $x_5 = slice.a;
            var $x_6 = (i$2 << 1);
            var x0$21_$_lo = $x_5[$x_6];
            var x0$21_$_hi = $x_5[(($x_6 + 1) | 0)];
            f$2($bL(x0$21_$_lo, x0$21_$_hi));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$2 < len$2)) {
            var x0$22 = slice.a[i$2];
            f$2(x0$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$2 < len$2)) {
            var x0$23 = slice.a[i$2];
            f$2($bC(x0$23));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$2 < len$2)) {
            var x0$24 = slice.a[i$2];
            f$2(x0$24);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$2 < len$2)) {
            var x0$25 = slice.a[i$2];
            f$2(x0$25);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$2 < len$2)) {
            var x0$26 = slice.a[i$2];
            f$2(x0$26);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.C) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.C >>> 20) | 0));
      var dest$6 = $thiz.T;
      slice.t(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.T;
        slice.t(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      var num$3 = $thiz.C;
      var t$3 = (((num$3 >> 24) >>> 7) | 0);
      if (((((33554431 & ((num$3 + t$3) | 0)) - t$3) | 0) !== 0)) {
        var f$3 = ((e$3$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3$3, 5);
        });
        var len$3 = slice.a.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var x0$27 = slice.a[i$3];
            f$3(x0$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$3 < len$3)) {
            var x0$28 = slice.a[i$3];
            f$3(x0$28);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$3 < len$3)) {
            var x0$29 = slice.a[i$3];
            f$3(x0$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$3 < len$3)) {
            var $x_7 = slice.a;
            var $x_8 = (i$3 << 1);
            var x0$30_$_lo = $x_7[$x_8];
            var x0$30_$_hi = $x_7[(($x_8 + 1) | 0)];
            f$3($bL(x0$30_$_lo, x0$30_$_hi));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$3 < len$3)) {
            var x0$31 = slice.a[i$3];
            f$3(x0$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$3 < len$3)) {
            var x0$32 = slice.a[i$3];
            f$3($bC(x0$32));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$3 < len$3)) {
            var x0$33 = slice.a[i$3];
            f$3(x0$33);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$3 < len$3)) {
            var x0$34 = slice.a[i$3];
            f$3(x0$34);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$3 < len$3)) {
            var x0$35 = slice.a[i$3];
            f$3(x0$35);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.C >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.aE;
      slice.t(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.cO();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.cN(sliceIdx);
    matchResult26: {
      var idx = sliceIdx;
      var c = (((sliceCount + ((sliceCount >>> 31) | 0)) | 0) >> 1);
      var a = ((idx - c) | 0);
      var sign = (a >> 31);
      var x37 = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
      if ((x37 === 1)) {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
        break matchResult26;
      }
      if ((($thiz.J === 32) || ($thiz.J === 0))) {
        $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x37);
        break matchResult26;
      }
      $m_sci_VectorStatics$().k6(((x37 - 2) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((data$3) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$3);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.C) | 0);
  var xor = (idx ^ $thiz.C);
  $thiz.C = idx;
  $thiz.J = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.C + n) | 0);
    var xor = (idx ^ $thiz.C);
    $thiz.C = idx;
    $thiz.J = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.Q) + ", a2=") + $thiz.F) + ", a3=") + $thiz.I) + ", a4=") + $thiz.N) + ", a5=") + $thiz.T) + ", a6=") + $thiz.aE) + ", depth=") + $thiz.K));
  } else if ((xor < 1024)) {
    if (($thiz.K <= 1)) {
      $thiz.F = new ($d_O.r().r().C)(32);
      $thiz.F.a[0] = $thiz.Q;
      $thiz.K = 2;
    }
    $thiz.Q = new $ac_O(32);
    $thiz.F.a[(31 & ((idx >>> 5) | 0))] = $thiz.Q;
  } else if ((xor < 32768)) {
    if (($thiz.K <= 2)) {
      $thiz.I = new ($d_O.r().r().r().C)(32);
      $thiz.I.a[0] = $thiz.F;
      $thiz.K = 3;
    }
    $thiz.Q = new $ac_O(32);
    $thiz.F = new ($d_O.r().r().C)(32);
    $thiz.F.a[(31 & ((idx >>> 5) | 0))] = $thiz.Q;
    $thiz.I.a[(31 & ((idx >>> 10) | 0))] = $thiz.F;
  } else if ((xor < 1048576)) {
    if (($thiz.K <= 3)) {
      $thiz.N = new ($d_O.r().r().r().r().C)(32);
      $thiz.N.a[0] = $thiz.I;
      $thiz.K = 4;
    }
    $thiz.Q = new $ac_O(32);
    $thiz.F = new ($d_O.r().r().C)(32);
    $thiz.I = new ($d_O.r().r().r().C)(32);
    $thiz.F.a[(31 & ((idx >>> 5) | 0))] = $thiz.Q;
    $thiz.I.a[(31 & ((idx >>> 10) | 0))] = $thiz.F;
    $thiz.N.a[(31 & ((idx >>> 15) | 0))] = $thiz.I;
  } else if ((xor < 33554432)) {
    if (($thiz.K <= 4)) {
      $thiz.T = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.T.a[0] = $thiz.N;
      $thiz.K = 5;
    }
    $thiz.Q = new $ac_O(32);
    $thiz.F = new ($d_O.r().r().C)(32);
    $thiz.I = new ($d_O.r().r().r().C)(32);
    $thiz.N = new ($d_O.r().r().r().r().C)(32);
    $thiz.F.a[(31 & ((idx >>> 5) | 0))] = $thiz.Q;
    $thiz.I.a[(31 & ((idx >>> 10) | 0))] = $thiz.F;
    $thiz.N.a[(31 & ((idx >>> 15) | 0))] = $thiz.I;
    $thiz.T.a[(31 & ((idx >>> 20) | 0))] = $thiz.N;
  } else {
    if (($thiz.K <= 5)) {
      $thiz.aE = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aE.a[0] = $thiz.T;
      $thiz.K = 6;
    }
    $thiz.Q = new $ac_O(32);
    $thiz.F = new ($d_O.r().r().C)(32);
    $thiz.I = new ($d_O.r().r().r().C)(32);
    $thiz.N = new ($d_O.r().r().r().r().C)(32);
    $thiz.T = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.F.a[(31 & ((idx >>> 5) | 0))] = $thiz.Q;
    $thiz.I.a[(31 & ((idx >>> 10) | 0))] = $thiz.F;
    $thiz.N.a[(31 & ((idx >>> 15) | 0))] = $thiz.I;
    $thiz.T.a[(31 & ((idx >>> 20) | 0))] = $thiz.N;
    $thiz.aE.a[((idx >>> 25) | 0)] = $thiz.T;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aE = null;
  this.T = null;
  this.N = null;
  this.I = null;
  this.F = null;
  this.Q = null;
  this.J = 0;
  this.C = 0;
  this.H = 0;
  this.hI = false;
  this.K = 0;
  this.Q = new $ac_O(32);
  this.J = 0;
  this.C = 0;
  this.H = 0;
  this.hI = false;
  this.K = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.b6 = (function(size) {
});
$p.s4 = (function(v) {
  var x28 = v.cO();
  switch (x28) {
    case 0: {
      break;
    }
    case 1: {
      this.K = 1;
      var i = v.f.a.length;
      this.J = (31 & i);
      this.C = ((i - this.J) | 0);
      var a = v.f;
      this.Q = ((a.a.length === 32) ? a : $m_ju_Arrays$().a4(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bp;
      var a$1 = v.j;
      this.Q = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().a4(a$1, 0, 32));
      this.K = 2;
      this.H = ((32 - v.bR) | 0);
      var i$1 = ((v.k + this.H) | 0);
      this.J = (31 & i$1);
      this.C = ((i$1 - this.J) | 0);
      this.F = new ($d_O.r().r().C)(32);
      this.F.a[0] = v.f;
      var dest = this.F;
      var length = d2.a.length;
      d2.t(0, dest, 1, length);
      this.F.a[((1 + d2.a.length) | 0)] = this.Q;
      break;
    }
    case 5: {
      var d3 = v.b2;
      var s2 = v.b3;
      var a$2 = v.j;
      this.Q = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().a4(a$2, 0, 32));
      this.K = 3;
      this.H = ((1024 - v.bi) | 0);
      var i$2 = ((v.k + this.H) | 0);
      this.J = (31 & i$2);
      this.C = ((i$2 - this.J) | 0);
      this.I = new ($d_O.r().r().r().C)(32);
      this.I.a[0] = $m_sci_VectorStatics$().cC(v.f, v.bH);
      var dest$1 = this.I;
      var length$1 = d3.a.length;
      d3.t(0, dest$1, 1, length$1);
      this.F = $m_ju_Arrays$().V(s2, 32);
      this.I.a[((1 + d3.a.length) | 0)] = this.F;
      this.F.a[s2.a.length] = this.Q;
      break;
    }
    case 7: {
      var d4 = v.aB;
      var s3 = v.aD;
      var s2$2 = v.aC;
      var a$3 = v.j;
      this.Q = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().a4(a$3, 0, 32));
      this.K = 4;
      this.H = ((32768 - v.aV) | 0);
      var i$3 = ((v.k + this.H) | 0);
      this.J = (31 & i$3);
      this.C = ((i$3 - this.J) | 0);
      this.N = new ($d_O.r().r().r().r().C)(32);
      this.N.a[0] = $m_sci_VectorStatics$().cC($m_sci_VectorStatics$().cC(v.f, v.b9), v.ba);
      var dest$2 = this.N;
      var length$2 = d4.a.length;
      d4.t(0, dest$2, 1, length$2);
      this.I = $m_ju_Arrays$().V(s3, 32);
      this.F = $m_ju_Arrays$().V(s2$2, 32);
      this.N.a[((1 + d4.a.length) | 0)] = this.I;
      this.I.a[s3.a.length] = this.F;
      this.F.a[s2$2.a.length] = this.Q;
      break;
    }
    case 9: {
      var d5 = v.ab;
      var s4 = v.ae;
      var s3$2 = v.ad;
      var s2$3 = v.ac;
      var a$4 = v.j;
      this.Q = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().a4(a$4, 0, 32));
      this.K = 5;
      this.H = ((1048576 - v.at) | 0);
      var i$4 = ((v.k + this.H) | 0);
      this.J = (31 & i$4);
      this.C = ((i$4 - this.J) | 0);
      this.T = new ($d_O.r().r().r().r().r().C)(32);
      this.T.a[0] = $m_sci_VectorStatics$().cC($m_sci_VectorStatics$().cC($m_sci_VectorStatics$().cC(v.f, v.aI), v.aJ), v.aK);
      var dest$3 = this.T;
      var length$3 = d5.a.length;
      d5.t(0, dest$3, 1, length$3);
      this.N = $m_ju_Arrays$().V(s4, 32);
      this.I = $m_ju_Arrays$().V(s3$2, 32);
      this.F = $m_ju_Arrays$().V(s2$3, 32);
      this.T.a[((1 + d5.a.length) | 0)] = this.N;
      this.N.a[s4.a.length] = this.I;
      this.I.a[s3$2.a.length] = this.F;
      this.F.a[s2$3.a.length] = this.Q;
      break;
    }
    case 11: {
      var d6 = v.Z;
      var s5 = v.a3;
      var s4$2 = v.a2;
      var s3$3 = v.a1;
      var s2$4 = v.a0;
      var a$5 = v.j;
      this.Q = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().a4(a$5, 0, 32));
      this.K = 6;
      this.H = ((33554432 - v.al) | 0);
      var i$5 = ((v.k + this.H) | 0);
      this.J = (31 & i$5);
      this.C = ((i$5 - this.J) | 0);
      this.aE = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aE.a[0] = $m_sci_VectorStatics$().cC($m_sci_VectorStatics$().cC($m_sci_VectorStatics$().cC($m_sci_VectorStatics$().cC(v.f, v.au), v.av), v.aw), v.ax);
      var dest$4 = this.aE;
      var length$4 = d6.a.length;
      d6.t(0, dest$4, 1, length$4);
      this.T = $m_ju_Arrays$().V(s5, 32);
      this.N = $m_ju_Arrays$().V(s4$2, 32);
      this.I = $m_ju_Arrays$().V(s3$3, 32);
      this.F = $m_ju_Arrays$().V(s2$4, 32);
      this.aE.a[((1 + d6.a.length) | 0)] = this.T;
      this.T.a[s5.a.length] = this.N;
      this.N.a[s4$2.a.length] = this.I;
      this.I.a[s3$3.a.length] = this.F;
      this.F.a[s2$4.a.length] = this.Q;
      break;
    }
    default: {
      throw new $c_s_MatchError(x28);
    }
  }
  if (((this.J === 0) && (this.C > 0))) {
    this.J = 32;
    this.C = ((this.C - 32) | 0);
  }
  return this;
});
$p.qH = (function(elem) {
  if ((this.J === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.Q.a[this.J] = elem;
  this.J = ((1 + this.J) | 0);
  return this;
});
$p.ow = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.J === 0) && (this.C === 0)) && (!this.hI)) ? this.s4(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.px = (function() {
  if (this.hI) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.J + this.C) | 0);
  var realLen = ((len - this.H) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.Q;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().V(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & ((len - 1) | 0));
    var i2 = ((((len - 1) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().a4(this.F, 1, i2);
    var prefix1 = this.F.a[0];
    var a$1 = this.F.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().V(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.H) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & ((len - 1) | 0));
    var i2$2 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3 = ((((len - 1) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().a4(this.I, 1, i3);
    var a$2 = this.I.a[0];
    var prefix2 = $m_ju_Arrays$().a4(a$2, 1, a$2.a.length);
    var prefix1$2 = this.I.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().V(this.I.a[i3], i2$2);
    var a$3 = this.I.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().V(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & ((len - 1) | 0));
    var i2$3 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$2 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4 = ((((len - 1) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().a4(this.N, 1, i4);
    var a$4 = this.N.a[0];
    var prefix3 = $m_ju_Arrays$().a4(a$4, 1, a$4.a.length);
    var a$5 = this.N.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().a4(a$5, 1, a$5.a.length);
    var prefix1$3 = this.N.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().V(this.N.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().V(this.N.a[i4].a[i3$2], i2$3);
    var a$6 = this.N.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().V(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & ((len - 1) | 0));
    var i2$4 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$3 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4$2 = (31 & ((((len - 1) | 0) >>> 15) | 0));
    var i5 = ((((len - 1) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().a4(this.T, 1, i5);
    var a$7 = this.T.a[0];
    var prefix4 = $m_ju_Arrays$().a4(a$7, 1, a$7.a.length);
    var a$8 = this.T.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().a4(a$8, 1, a$8.a.length);
    var a$9 = this.T.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().a4(a$9, 1, a$9.a.length);
    var prefix1$4 = this.T.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().V(this.T.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().V(this.T.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().V(this.T.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.T.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().V(a$10, len$4));
    var len1$3 = prefix1$4.a.length;
    var len12$3 = ((len1$3 + (prefix2$3.a.length << 5)) | 0);
    var len123$2 = ((len12$3 + (prefix3$2.a.length << 10)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, ((len123$2 + (prefix4.a.length << 15)) | 0), data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & ((len - 1) | 0));
    var i2$5 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$4 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4$3 = (31 & ((((len - 1) | 0) >>> 15) | 0));
    var i5$2 = (31 & ((((len - 1) | 0) >>> 20) | 0));
    var i6 = ((((len - 1) | 0) >>> 25) | 0);
    var data$5 = $m_ju_Arrays$().a4(this.aE, 1, i6);
    var a$11 = this.aE.a[0];
    var prefix5 = $m_ju_Arrays$().a4(a$11, 1, a$11.a.length);
    var a$12 = this.aE.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().a4(a$12, 1, a$12.a.length);
    var a$13 = this.aE.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().a4(a$13, 1, a$13.a.length);
    var a$14 = this.aE.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().a4(a$14, 1, a$14.a.length);
    var prefix1$5 = this.aE.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().V(this.aE.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().V(this.aE.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().V(this.aE.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().V(this.aE.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.aE.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().V(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.h = (function() {
  return (((((((("VectorBuilder(len1=" + this.J) + ", lenRest=") + this.C) + ", offset=") + this.H) + ", depth=") + this.K) + ")");
});
$p.b0 = (function(elem) {
  return this.qH(elem);
});
$p.aZ = (function(elems) {
  return this.ow(elems);
});
$p.b5 = (function() {
  return this.px();
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  is: 1,
  L: 1,
  N: 1,
  S: 1,
  ah: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.nT = null;
  $n_scm_ArrayBuffer$ = this;
  this.nT = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.d9 = (function(elems) {
  return this.p6(elems);
});
$p.p6 = (function(coll) {
  var k = coll.y();
  if ((k >= 0)) {
    var array = this.pA(this.nT, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bT(array, 0, 2147483647) : coll.m().bT(array, 0, 2147483647));
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).ox(coll);
  }
});
$p.b1 = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.t0 = (function(arrayLen, targetLen) {
  if ((targetLen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((((("Overflow while resizing array of array-backed collection. Requested length: " + targetLen) + "; current length: ") + arrayLen) + "; increase: ") + ((targetLen - arrayLen) | 0)));
  } else if ((targetLen <= arrayLen)) {
    return (-1);
  } else if ((targetLen > 2147483639)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((("Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: " + targetLen) + "; current length: ") + arrayLen));
  } else if ((arrayLen > 1073741819)) {
    return 2147483639;
  } else {
    var x = (arrayLen << 1);
    var y = ((x > 16) ? x : 16);
    return ((targetLen > y) ? targetLen : y);
  }
});
$p.pA = (function(array, curSize, targetSize) {
  var newLen = this.t0(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.t(0, res, 0, curSize);
    return res;
  }
});
$p.ay = (function(source) {
  return this.p6(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  ix: 1,
  a: 1,
  Q: 1,
  a9: 1,
  at: 1
}));
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$();
  }
  return $n_scm_ArrayBuffer$;
}
/** @constructor */
function $c_scm_ArrayBuffer$$anon$1() {
  this.dN = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.b6 = (function(size) {
  this.dN.b6(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  iy: 1,
  bi: 1,
  L: 1,
  N: 1,
  S: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.f5 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  iE: 1,
  cm: 1,
  a: 1,
  Q: 1,
  a9: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
/** @constructor */
function $c_scm_HashSet$$anon$4(initialCapacity$1, loadFactor$1) {
  this.dN = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.b6 = (function(size) {
  this.dN.b6(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  iM: 1,
  bi: 1,
  L: 1,
  N: 1,
  S: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.gi = outer;
  $thiz.dP = 0;
  $thiz.d4 = null;
  $thiz.gj = outer.aW.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.dP = 0;
  this.d4 = null;
  this.gj = 0;
  this.gi = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.p = (function() {
  if ((this.d4 !== null)) {
    return true;
  } else {
    while ((this.dP < this.gj)) {
      var n = this.gi.aW.a[this.dP];
      this.dP = ((1 + this.dP) | 0);
      if ((n !== null)) {
        this.d4 = n;
        return true;
      }
    }
    return false;
  }
});
$p.l = (function() {
  if ((!this.p())) {
    return $m_sc_Iterator$().X.l();
  } else {
    var x$proxy10 = this.d4;
    if ((x$proxy10 === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    var r = this.k4(x$proxy10);
    var x$proxy11 = this.d4;
    if ((x$proxy11 === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    this.d4 = x$proxy11.aX;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.gk = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.gk = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.aZ = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b6 = (function(size) {
});
$p.b5 = (function() {
  return this.gk;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.f5 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  iP: 1,
  cm: 1,
  a: 1,
  Q: 1,
  a9: 1
}));
var $n_scm_IndexedSeq$;
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$();
  }
  return $n_scm_IndexedSeq$;
}
/** @constructor */
function $c_scm_ListBuffer$() {
}
$p = $c_scm_ListBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
}
$h_scm_ListBuffer$.prototype = $p;
$p.d9 = (function(elems) {
  return new $c_scm_ListBuffer().i9(elems);
});
$p.b1 = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.ay = (function(source) {
  return new $c_scm_ListBuffer().i9(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  iS: 1,
  a: 1,
  Q: 1,
  a9: 1,
  at: 1
}));
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$();
  }
  return $n_scm_ListBuffer$;
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.jB = null;
  this.o3 = null;
  this.o2 = 0;
  this.jB = underlying;
  this.o3 = mutationCount;
  this.o2 = (mutationCount.M() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.p = (function() {
  $m_scm_MutationTracker$().oJ(this.o2, (this.o3.M() | 0), "mutation occurred during iteration");
  return this.jB.p();
});
$p.l = (function() {
  return this.jB.l();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  iU: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_s_concurrent_ExecutionContext$parasitic$() {
  this.o7 = null;
  $n_s_concurrent_ExecutionContext$parasitic$ = this;
  this.o7 = new $c_jl_ThreadLocal();
}
$p = $c_s_concurrent_ExecutionContext$parasitic$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$parasitic$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$parasitic$() {
}
$h_s_concurrent_ExecutionContext$parasitic$.prototype = $p;
$p.k3 = (function(runnable) {
  $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V(this, runnable);
});
$p.kA = (function(t) {
  $m_s_concurrent_ExecutionContext$().ff.c(t);
});
var $d_s_concurrent_ExecutionContext$parasitic$ = new $TypeData().i($c_s_concurrent_ExecutionContext$parasitic$, "scala.concurrent.ExecutionContext$parasitic$", ({
  j2: 1,
  bk: 1,
  b2: 1,
  bl: 1,
  iY: 1
}));
var $n_s_concurrent_ExecutionContext$parasitic$;
function $m_s_concurrent_ExecutionContext$parasitic$() {
  if ((!$n_s_concurrent_ExecutionContext$parasitic$)) {
    $n_s_concurrent_ExecutionContext$parasitic$ = new $c_s_concurrent_ExecutionContext$parasitic$();
  }
  return $n_s_concurrent_ExecutionContext$parasitic$;
}
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.aN();
    var x$3 = x.aN();
    return ((x$2 === null) ? (x$3 === null) : (x$2 === x$3));
  } else {
    return false;
  }
}
function $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz) {
  return (clazz.ao.Z ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.ao.Q())) + "]") : clazz.ao.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.K)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.K)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.oh = null;
  this.gs = 0;
  this.og = 0;
  this.oh = x$1;
  this.gs = 0;
  this.og = x$1.z();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.p = (function() {
  return (this.gs < this.og);
});
$p.l = (function() {
  var result = this.oh.A(this.gs);
  this.gs = ((1 + this.gs) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  jM: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
$p = $c_sjs_js_WrappedArray$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
$h_sjs_js_WrappedArray$.prototype = $p;
$p.d9 = (function(elems) {
  return this.p7(elems);
});
$p.b1 = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.p7 = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).b5();
});
$p.ay = (function(source) {
  return this.p7(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  jY: 1,
  at: 1,
  a: 1,
  Q: 1,
  a9: 1
}));
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs$() {
}
$p = $c_sjsr_WrappedVarArgs$.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs$;
/** @constructor */
function $h_sjsr_WrappedVarArgs$() {
}
$h_sjsr_WrappedVarArgs$.prototype = $p;
$p.d9 = (function(elems) {
  return this.kb(elems);
});
$p.kb = (function(source) {
  return this.b1().aZ(source).b5();
});
$p.b1 = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.dR))), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []));
});
$p.ay = (function(source) {
  return this.kb(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  ka: 1,
  at: 1,
  a: 1,
  Q: 1,
  a9: 1
}));
var $n_sjsr_WrappedVarArgs$;
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$();
  }
  return $n_sjsr_WrappedVarArgs$;
}
/** @constructor */
function $c_s_util_Failure(exception) {
  this.d8 = null;
  this.d8 = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, (-1408943127), true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_s_util_Failure)) {
    var x = this.d8;
    var x$2 = x$0.d8;
    return ((x === null) ? (x$2 === null) : x.g(x$2));
  } else {
    return false;
  }
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c8(this);
});
$p.z = (function() {
  return 1;
});
$p.B = (function() {
  return "Failure";
});
$p.A = (function(n) {
  if ((n === 0)) {
    return this.d8;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.pe = (function() {
  return true;
});
$p.pf = (function() {
  return false;
});
$p.x = (function() {
  var $x_1 = this.d8;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.R : $x_1);
});
$p.bc = (function(f) {
});
$p.kp = (function(f) {
  return this;
});
$p.pt = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.c9(this.d8, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x18 = $m_s_util_control_NonFatal$().fA(e$2);
    if ((!x18.d())) {
      return new $c_s_util_Failure(x18.x());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
  }
});
$p.bU = (function(fa, fb) {
  return fa.c(this.d8);
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dc)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  dc: 1,
  bo: 1,
  b: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Left(value) {
  this.ck = null;
  this.ck = value;
}
$p = $c_s_util_Left.prototype = new $h_s_util_Either();
$p.constructor = $c_s_util_Left;
/** @constructor */
function $h_s_util_Left() {
}
$h_s_util_Left.prototype = $p;
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, 877209692, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Left) && $m_sr_BoxesRunTime$().n(this.ck, x$0.ck)));
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c8(this);
});
$p.z = (function() {
  return 1;
});
$p.B = (function() {
  return "Left";
});
$p.A = (function(n) {
  if ((n === 0)) {
    return this.ck;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_s_util_Left(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dd)));
}
var $d_s_util_Left = new $TypeData().i($c_s_util_Left, "scala.util.Left", ({
  dd: 1,
  db: 1,
  b: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Right(value) {
  this.bI = null;
  this.bI = value;
}
$p = $c_s_util_Right.prototype = new $h_s_util_Either();
$p.constructor = $c_s_util_Right;
/** @constructor */
function $h_s_util_Right() {
}
$h_s_util_Right.prototype = $p;
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, 252890491, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Right) && $m_sr_BoxesRunTime$().n(this.bI, x$0.bI)));
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c8(this);
});
$p.z = (function() {
  return 1;
});
$p.B = (function() {
  return "Right";
});
$p.A = (function(n) {
  if ((n === 0)) {
    return this.bI;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_s_util_Right(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.de)));
}
var $d_s_util_Right = new $TypeData().i($c_s_util_Right, "scala.util.Right", ({
  de: 1,
  db: 1,
  b: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.dS = null;
  this.dS = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, (-1750213842), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().n(this.dS, x$0.dS)));
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c8(this);
});
$p.z = (function() {
  return 1;
});
$p.B = (function() {
  return "Success";
});
$p.A = (function(n) {
  if ((n === 0)) {
    return this.dS;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.pe = (function() {
  return false;
});
$p.pf = (function() {
  return true;
});
$p.x = (function() {
  return this.dS;
});
$p.bc = (function(f) {
  f.c(this.dS);
});
$p.kp = (function(f) {
  try {
    return new $c_s_util_Success(f.c(this.dS));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x2 = $m_s_util_control_NonFatal$().fA(e$2);
    if ((!x2.d())) {
      return new $c_s_util_Failure(x2.x());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
  }
});
$p.pt = (function(pf) {
  return this;
});
$p.bU = (function(fa, fb) {
  try {
    return fb.c(this.dS);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x42 = $m_s_util_control_NonFatal$().fA(e$2);
    if ((!x42.d())) {
      var x43 = x42.x();
      return fa.c(x43);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
  }
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.df)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  df: 1,
  bo: 1,
  b: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$Created(noteId_$_lo, noteId_$_hi) {
  this.gt = 0;
  this.gu = 0;
  this.gt = noteId_$_lo;
  this.gu = noteId_$_hi;
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$Created.prototype = new $h_Lcom_github_pwharned_clausula_extension_PopupState();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$Created;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$Created() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$Created.prototype = $p;
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, (-793022216), true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Created)) {
    var x_$_lo = this.gt;
    var x_$_hi = this.gu;
    var $x_1 = x$0;
    var x$1_$_lo = $x_1.gt;
    var x$1_$_hi = $x_1.gu;
    return (((x_$_lo ^ x$1_$_lo) | (x_$_hi ^ x$1_$_hi)) === 0);
  } else {
    return false;
  }
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c8(this);
});
$p.z = (function() {
  return 1;
});
$p.B = (function() {
  return "Created";
});
$p.A = (function(n) {
  if ((n === 0)) {
    return $bL(this.gt, this.gu);
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_PopupState$Created(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bp)));
}
var $d_Lcom_github_pwharned_clausula_extension_PopupState$Created = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$Created, "com.github.pwharned.clausula.extension.PopupState$Created", ({
  bp: 1,
  aD: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(error) {
  this.fD = null;
  this.fD = error;
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed.prototype = new $h_Lcom_github_pwharned_clausula_extension_PopupState();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$Failed() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$Failed.prototype = $p;
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, 2021931327, true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed)) {
    var x = this.fD;
    var x$2 = x$0.fD;
    return ((x === null) ? (x$2 === null) : x.g(x$2));
  } else {
    return false;
  }
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c8(this);
});
$p.z = (function() {
  return 1;
});
$p.B = (function() {
  return "Failed";
});
$p.A = (function(n) {
  if ((n === 0)) {
    return this.fD;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_PopupState$Failed(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bq)));
}
var $d_Lcom_github_pwharned_clausula_extension_PopupState$Failed = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$Failed, "com.github.pwharned.clausula.extension.PopupState$Failed", ({
  bq: 1,
  aD: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview(word, sentence, language, position) {
  this.eJ = null;
  this.eI = null;
  this.eH = null;
  this.hb = null;
  this.eJ = word;
  this.eI = sentence;
  this.eH = language;
  this.hb = position;
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview.prototype = new $h_Lcom_github_pwharned_clausula_extension_PopupState();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$Preview() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$Preview.prototype = $p;
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, (-2055871664), true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview)) {
    if (((this.eJ === x$0.eJ) && (this.eI === x$0.eI))) {
      var x = this.eH;
      var x$2 = x$0.eH;
      var $x_1 = ((x === null) ? (x$2 === null) : x.g(x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.hb;
      var x$4 = x$0.hb;
      return ((x$3 === null) ? (x$4 === null) : x$3.g(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c8(this);
});
$p.z = (function() {
  return 4;
});
$p.B = (function() {
  return "Preview";
});
$p.A = (function(n) {
  switch (n) {
    case 0: {
      return this.eJ;
      break;
    }
    case 1: {
      return this.eI;
      break;
    }
    case 2: {
      return this.eH;
      break;
    }
    case 3: {
      return this.hb;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_PopupState$Preview(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.br)));
}
var $d_Lcom_github_pwharned_clausula_extension_PopupState$Preview = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$Preview, "com.github.pwharned.clausula.extension.PopupState$Preview", ({
  br: 1,
  aD: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(code, msg) {
  this.fE = 0;
  this.eK = null;
  this.fE = code;
  this.eK = msg;
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_ApiError.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_ApiError;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_ApiError() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_ApiError.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().w(acc, 1008012334);
  acc = $m_sr_Statics$().w(acc, this.fE);
  acc = $m_sr_Statics$().w(acc, $m_sr_Statics$().L(this.eK));
  return $m_sr_Statics$().a6(acc, 2);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_ApiError) && ((this.fE === x$0.fE) && (this.eK === x$0.eK))));
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c8(this);
});
$p.z = (function() {
  return 2;
});
$p.B = (function() {
  return "ApiError";
});
$p.A = (function(n) {
  if ((n === 0)) {
    return this.fE;
  }
  if ((n === 1)) {
    return this.eK;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_domain_ApiError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bt)));
}
var $d_Lcom_github_pwharned_clausula_extension_domain_ApiError = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_ApiError, "com.github.pwharned.clausula.extension.domain.ApiError", ({
  bt: 1,
  ac: 1,
  by: 1,
  b: 1,
  g: 1,
  a: 1
}));
function $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__($thiz, code, displayName, isRTL, sentenceStrategy) {
  $thiz.bk = code;
  $thiz.bw = displayName;
  return $thiz;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  this.bk = null;
  this.bw = null;
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.es = (function() {
  return this.bk;
});
$p.fl = (function() {
  return this.bw;
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage = new $TypeData().i(0, "com.github.pwharned.clausula.extension.domain.KnownLanguage", ({
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fM = null;
    this.fL = null;
    this.fM = error;
    this.fL = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fp(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().fp(cause)), null, true, true);
    this.pd(cause);
  }
  W() {
    return new $c_s_Product$$anon$1(this);
  }
  i() {
    return $m_s_util_hashing_MurmurHash3$().jQ(this, (-889275714), null);
  }
  g(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.fM;
      var x$2 = x$0.fM;
      if (((x === null) ? (x$2 === null) : x.g(x$2))) {
        var x$3 = this.fL;
        var x$4 = x$0.fL;
        return ((x$3 === null) ? (x$4 === null) : x$3.g(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  z() {
    return 2;
  }
  B() {
    return "ErrorHandlingError";
  }
  A(n) {
    if ((n === 0)) {
      return this.fM;
    }
    if ((n === 1)) {
      return this.fL;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  h() {
    return ((("ErrorHandlingError: " + this.fM) + "; cause: ") + this.fL);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bE)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  bE: 1,
  aE: 1,
  o: 1,
  a: 1,
  b: 1,
  g: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.fN = null;
    this.fN = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fp(error)), null, true, true);
  }
  W() {
    return new $c_s_Product$$anon$1(this);
  }
  i() {
    return $m_s_util_hashing_MurmurHash3$().jQ(this, (-889275714), null);
  }
  g(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.fN;
      var x$2 = x$0.fN;
      return ((x === null) ? (x$2 === null) : x.g(x$2));
    } else {
      return false;
    }
  }
  z() {
    return 1;
  }
  B() {
    return "ObserverError";
  }
  A(n) {
    if ((n === 0)) {
      return this.fN;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  h() {
    return ("ObserverError: " + this.fN);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bF)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  bF: 1,
  aE: 1,
  o: 1,
  a: 1,
  b: 1,
  g: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fP = null;
    this.fO = null;
    this.fP = error;
    this.fO = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fp(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().fp(cause)), null, true, true);
    this.pd(cause);
  }
  W() {
    return new $c_s_Product$$anon$1(this);
  }
  i() {
    return $m_s_util_hashing_MurmurHash3$().jQ(this, (-889275714), null);
  }
  g(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.fP;
      var x$2 = x$0.fP;
      if (((x === null) ? (x$2 === null) : x.g(x$2))) {
        var x$3 = this.fO;
        var x$4 = x$0.fO;
        return ((x$3 === null) ? (x$4 === null) : x$3.g(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  z() {
    return 2;
  }
  B() {
    return "ObserverErrorHandlingError";
  }
  A(n) {
    if ((n === 0)) {
      return this.fP;
    }
    if ((n === 1)) {
      return this.fO;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  h() {
    return ((("ObserverErrorHandlingError: " + this.fP) + "; cause: ") + this.fO);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bG)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bG: 1,
  aE: 1,
  o: 1,
  a: 1,
  b: 1,
  g: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.eO = null;
    this.eN = 0;
    this.eO = trx;
    this.eN = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  W() {
    return new $c_s_Product$$anon$1(this);
  }
  i() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().w(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().w(acc, $m_sr_Statics$().L(this.eO));
    acc = $m_sr_Statics$().w(acc, this.eN);
    return $m_sr_Statics$().a6(acc, 2);
  }
  g(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.eN === x$0.eN)) {
        var x = this.eO;
        var x$2 = x$0.eO;
        return ((x === null) ? (x$2 === null) : (x === x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  z() {
    return 2;
  }
  B() {
    return "TransactionDepthExceeded";
  }
  A(n) {
    if ((n === 0)) {
      return this.eO;
    }
    if ((n === 1)) {
      return this.eN;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  h() {
    return ((("TransactionDepthExceeded: " + this.eO) + "; maxDepth: ") + this.eN);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bH)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  bH: 1,
  aE: 1,
  o: 1,
  a: 1,
  b: 1,
  g: 1
}));
var $d_Lcom_raquo_airstream_core_EventStream = new $TypeData().i(1, "com.raquo.airstream.core.EventStream", ({
  aF: 1,
  ad: 1,
  a2: 1,
  an: 1,
  ao: 1,
  ax: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.ia();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.lA = null;
  this.lB = null;
  this.is = null;
  this.ir = null;
  this.dh = null;
  this.lA = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.is = initial;
  this.ir = new $c_Lcom_raquo_airstream_state_VarSignal(this.is, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.dh = this.ir;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.cL = (function() {
  return this.lA;
});
$p.cD = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.t6 = (function(value, transaction) {
  this.is = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.ir, value, transaction);
});
$p.eB = (function() {
  return this.dh;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  en: 1,
  ad: 1,
  aV: 1,
  ap: 1,
  a2: 1,
  ep: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1(key$1) {
  this.eb = null;
  this.ec = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$1, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1, "com.raquo.laminar.defs.styles.StyleProps$$anon$1", ({
  eP: 1,
  aJ: 1,
  aa: 1,
  aH: 1,
  aI: 1,
  bO: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43(key$43) {
  this.eb = null;
  this.ec = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$43, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43, "com.raquo.laminar.defs.styles.StyleProps$$anon$43", ({
  eS: 1,
  aJ: 1,
  aa: 1,
  aH: 1,
  aI: 1,
  eV: 1
}));
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.iK;
  if ((x === (void 0))) {
    $thiz.iK = $m_sjs_js_defined$().oG($m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.mP;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].tU() === propDomName)) {
          var $x_1 = i;
          break _return;
        }
        i = ((1 + i) | 0);
      }
      var $x_1 = (-1);
    }
    return ($x_1 >= 0);
  } else {
    return false;
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(tag, ref) {
  this.fU = null;
  this.cc = null;
  this.iJ = null;
  this.ed = null;
  this.fV = null;
  this.iL = null;
  this.be = null;
  this.mP = null;
  this.iK = null;
  this.iL = tag;
  this.be = ref;
  this.fU = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.mP = (void 0);
  this.iK = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.jR = (function() {
  return this.fU;
});
$p.cl = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gv(parentNode, this, (void 0));
});
$p.i0 = (function() {
  return this.cc;
});
$p.oM = (function(x$0) {
  this.cc = x$0;
});
$p.eF = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.eA = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.r6 = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().sc(this.be)) {
    var x1 = this.iL;
    if (false) {
      return x1.tK();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().mu;
  }
});
$p.sa = (function(propDomName) {
  var x = this.r6();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().s1(x, propDomName, 0));
});
$p.sy = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.sa(key.eW)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.eW)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.eW) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().oP(this.be)) + "` that already has an input controller for `") + key.eW) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.eW);
      }
    }
  }
});
$p.h = (function() {
  return (("ReactiveHtmlElement(" + ((this.be !== null) ? this.be.outerHTML : ("tag=" + this.iL.iP))) + ")");
});
$p.an = (function() {
  return this.be;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  fC: 1,
  aK: 1,
  a6: 1,
  aX: 1,
  bT: 1,
  fA: 1
}));
function $ct_jl_ArrayIndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_ArrayIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().i($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  fO: 1,
  c1: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c0)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  c0: 1,
  ai: 1,
  a: 1,
  J: 1,
  a7: 1,
  az: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  fV: 1,
  ai: 1,
  a: 1,
  J: 1,
  a7: 1,
  az: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  fX: 1,
  ai: 1,
  a: 1,
  J: 1,
  a7: 1,
  az: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, $thizhi, that) {
  if ((that instanceof $Long)) {
    var $x_1 = that;
    var this$1_$_lo = $x_1.l;
    var this$1_$_hi = $x_1.h;
    return ((($thiz ^ this$1_$_lo) | ($thizhi ^ this$1_$_hi)) === 0);
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().pK($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c2)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  c2: 1,
  ai: 1,
  a: 1,
  J: 1,
  a7: 1,
  az: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  g4: 1,
  aN: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
function $f_T__length__I($thiz) {
  return $thiz.length;
}
function $f_T__charAt__I__C($thiz, index) {
  return $thiz.charCodeAt(index);
}
function $f_T__codePointAt__I__I($thiz, index) {
  return ($thiz.codePointAt(index) | 0);
}
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().kE(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__indexOf__I__I__I($thiz, ch, fromIndex) {
  var str = $m_jl_Character$().kE(ch);
  return ($thiz.indexOf(str, fromIndex) | 0);
}
function $f_T__lastIndexOf__I__I__I($thiz, ch, fromIndex) {
  if ((fromIndex < 0)) {
    return (-1);
  } else {
    var str = $m_jl_Character$().kE(ch);
    return ((fromIndex < 0) ? (-1) : ($thiz.lastIndexOf(str, fromIndex) | 0));
  }
}
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  } else {
    return $thiz.repeat(count);
  }
}
function $f_T__split__T__I__AT($thiz, regex, limit) {
  return $m_ju_regex_PatternCompiler$().r4(regex, 0).si($thiz, limit);
}
function $f_T__subSequence__I__I__jl_CharSequence($thiz, beginIndex, endIndex) {
  return $thiz.substring(beginIndex, endIndex);
}
function $f_T__trim__T($thiz) {
  var len = $thiz.length;
  var start = 0;
  while (((start !== len) && ($thiz.charCodeAt(start) <= 32))) {
    start = ((1 + start) | 0);
  }
  if ((start === len)) {
    return "";
  } else {
    var end = len;
    while (($thiz.charCodeAt(((end - 1) | 0)) <= 32)) {
      end = ((end - 1) | 0);
    }
    if (((start | (end ^ len)) === 0)) {
      return $thiz;
    } else {
      var beginIndex = start;
      var endIndex = end;
      return $thiz.substring(beginIndex, endIndex);
    }
  }
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  gb: 1,
  a: 1,
  J: 1,
  aL: 1,
  a7: 1,
  az: 1
}), ((x) => ((typeof x) === "string")));
function $ct_Ljava_nio_CharBuffer__I__AC__I__($thiz, _capacity, _array, _arrayOffset) {
  $thiz.n1 = _array;
  $thiz.n2 = _arrayOffset;
  $ct_Ljava_nio_Buffer__I__($thiz, _capacity);
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_CharBuffer() {
  this.cP = 0;
  this.G = 0;
  this.s = 0;
  this.cs = 0;
  this.n1 = null;
  this.n2 = 0;
}
$p = $c_Ljava_nio_CharBuffer.prototype = new $h_Ljava_nio_Buffer();
$p.constructor = $c_Ljava_nio_CharBuffer;
/** @constructor */
function $h_Ljava_nio_CharBuffer() {
}
$h_Ljava_nio_CharBuffer.prototype = $p;
$p.i = (function() {
  var start = this.s;
  var end = this.G;
  var h = (-182887236);
  var i = start;
  while ((i !== end)) {
    var $x_2 = $m_ju_internal_MurmurHash3$();
    var $x_1 = h;
    var index = i;
    h = $x_2.w($x_1, $dp_charAt__I__C(this.dj, ((this.dk + index) | 0)));
    i = ((1 + i) | 0);
  }
  return $m_ju_internal_MurmurHash3$().a6(h, ((end - start) | 0));
});
$p.g = (function(that) {
  return ((that instanceof $c_Ljava_nio_CharBuffer) && (this.r3(that) === 0));
});
$p.r3 = (function(that) {
  if ((this === that)) {
    return 0;
  } else {
    var thisStart = this.s;
    var thisRemaining = ((this.G - thisStart) | 0);
    var thatStart = that.s;
    var thatRemaining = ((that.G - thatStart) | 0);
    var shortestLength = ((thisRemaining < thatRemaining) ? thisRemaining : thatRemaining);
    var i = 0;
    while ((i !== shortestLength)) {
      var index = ((thisStart + i) | 0);
      var t = $dp_charAt__I__C(this.dj, ((this.dk + index) | 0));
      var index$1 = ((thatStart + i) | 0);
      var u = $dp_charAt__I__C(that.dj, ((that.dk + index$1) | 0));
      var cmp = ((t - u) | 0);
      if ((cmp !== 0)) {
        return cmp;
      }
      i = ((1 + i) | 0);
    }
    return ((thisRemaining === thatRemaining) ? 0 : ((thisRemaining < thatRemaining) ? (-1) : 1));
  }
});
$p.q = (function() {
  return ((this.G - this.s) | 0);
});
$p.fj = (function(index) {
  return this.rQ(((this.s + index) | 0));
});
function $isArrayOf_Ljava_nio_CharBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
class $c_Ljava_nio_ReadOnlyBufferException extends $c_jl_UnsupportedOperationException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_Ljava_nio_ReadOnlyBufferException = new $TypeData().i($c_Ljava_nio_ReadOnlyBufferException, "java.nio.ReadOnlyBufferException", ({
  go: 1,
  c4: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_Ljava_nio_charset_UnsupportedCharsetException extends $c_jl_IllegalArgumentException {
  constructor(charsetName) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, charsetName, null, true, true);
  }
}
var $d_Ljava_nio_charset_UnsupportedCharsetException = new $TypeData().i($c_Ljava_nio_charset_UnsupportedCharsetException, "java.nio.charset.UnsupportedCharsetException", ({
  gG: 1,
  aN: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.no = null;
    this.nq = null;
    this.np = 0;
    this.no = desc;
    this.nq = regex;
    this.np = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  eu() {
    var idx = this.np;
    var re = this.nq;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.no + indexHint) + "\n") + re);
    return ((((idx >= 0) && (re !== null)) && (idx < re.length)) ? (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^") : base);
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().i($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  gT: 1,
  aN: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1
}));
/** @constructor */
function $c_s_None$() {
}
$p = $c_s_None$.prototype = new $h_s_Option();
$p.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $p;
$p.i = (function() {
  return 2433880;
});
$p.h = (function() {
  return "None";
});
$p.z = (function() {
  return 0;
});
$p.B = (function() {
  return "None";
});
$p.A = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.rS = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get");
});
$p.x = (function() {
  this.rS();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  h5: 1,
  cd: 1,
  c: 1,
  b: 1,
  g: 1,
  a: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.eh = null;
  this.eh = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, 1323286827, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().n(this.eh, x$0.eh)));
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c8(this);
});
$p.z = (function() {
  return 1;
});
$p.B = (function() {
  return "Some";
});
$p.A = (function(n) {
  if ((n === 0)) {
    return this.eh;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.x = (function() {
  return this.eh;
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cf)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  cf: 1,
  cd: 1,
  c: 1,
  b: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.y = (function() {
  return (-1);
});
$p.bc = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.fn = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.d = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.bT = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.dU = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.gM = (function(coll) {
  return this.bV().ay(coll);
});
$p.gP = (function() {
  return this.bV().b1();
});
$p.cb = (function() {
  return this.bv();
});
$p.gL = (function(coll) {
  return this.gM(coll);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.hC = null;
  this.cR = 0;
  this.g5 = 0;
  this.hC = xs;
  this.cR = 0;
  this.g5 = $m_jl_reflect_Array$().bs(this.hC);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.y = (function() {
  return ((this.g5 - this.cR) | 0);
});
$p.p = (function() {
  return (this.cR < this.g5);
});
$p.l = (function() {
  if ((this.cR >= $m_jl_reflect_Array$().bs(this.hC))) {
    $m_sc_Iterator$().X.l();
  }
  var r = $m_sr_ScalaRunTime$().dW(this.hC, this.cR);
  this.cR = ((1 + this.cR) | 0);
  return r;
});
$p.e0 = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.cR + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.g5;
    } else {
      var a = this.g5;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.cR = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  hh: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.jh = self;
  $thiz.cS = 0;
  $thiz.bf = self.q();
  return $thiz;
}
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bf) ? $thiz.bf : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.jh = null;
  this.cS = 0;
  this.bf = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.y = (function() {
  return this.bf;
});
$p.p = (function() {
  return (this.bf > 0);
});
$p.l = (function() {
  if ((this.bf > 0)) {
    var r = this.jh.u(this.cS);
    this.cS = ((1 + this.cS) | 0);
    this.bf = ((this.bf - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().X.l();
  }
});
$p.e0 = (function(n) {
  if ((n > 0)) {
    this.cS = ((this.cS + n) | 0);
    var b = ((this.bf - n) | 0);
    this.bf = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.h5 = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bf = ((b < 0) ? 0 : b);
  this.cS = ((this.cS + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  ck: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.gk = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().X);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.qF = (function(elem) {
  this.gk = this.gk.jT(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.b0 = (function(elem) {
  return this.qF(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  hq: 1,
  iO: 1,
  L: 1,
  N: 1,
  S: 1,
  ah: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.db(x, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => default$1.c(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.m();
  while (it.p()) {
    var next = it.l();
    f.fi(next.aY(), next.aL());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.aY();
    var v = x$1$2.aL();
    return ((k + " -> ") + v);
  })), $thiz.m()), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.gP();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.m();
  while (it.p()) {
    var next = it.l();
    if (seen.hS(f.c(next))) {
      builder.b0(next);
    }
  }
  return builder.b5();
}
function $f_sc_StrictOptimizedSeqOps__appended__O__O($thiz, elem) {
  var b = $thiz.dd().b1();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, $thiz, 1);
  b.aZ($thiz);
  b.b0(elem);
  return b.b5();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.dd().b1();
  b.aZ($thiz);
  b.aZ(suffix);
  return b.b5();
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.nK)) {
    $thiz.nJ = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.nK = true;
  }
  return $thiz.nJ;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.jl = null;
  this.nJ = null;
  this.nK = false;
  $n_sci_ArraySeq$ = this;
  this.jl = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.k8 = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.pN($m_s_Array$().p2(it, tag)));
});
$p.i7 = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$2) => this.pN($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2, evidence$1)))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.pN = (function(x) {
  if ((x === null)) {
    return null;
  }
  if ((x instanceof $ac_O)) {
    return new $c_sci_ArraySeq$ofRef(x);
  }
  if ((x instanceof $ac_I)) {
    return new $c_sci_ArraySeq$ofInt(x);
  }
  if ((x instanceof $ac_D)) {
    return new $c_sci_ArraySeq$ofDouble(x);
  }
  if ((x instanceof $ac_J)) {
    return new $c_sci_ArraySeq$ofLong(x);
  }
  if ((x instanceof $ac_F)) {
    return new $c_sci_ArraySeq$ofFloat(x);
  }
  if ((x instanceof $ac_C)) {
    return new $c_sci_ArraySeq$ofChar(x);
  }
  if ((x instanceof $ac_B)) {
    return new $c_sci_ArraySeq$ofByte(x);
  }
  if ((x instanceof $ac_S)) {
    return new $c_sci_ArraySeq$ofShort(x);
  }
  if ((x instanceof $ac_Z)) {
    return new $c_sci_ArraySeq$ofBoolean(x);
  }
  if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_sci_ArraySeq$ofUnit(x);
  }
  throw new $c_s_MatchError(x);
});
$p.k7 = (function(it, evidence$1) {
  return this.k8(it, evidence$1);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  hG: 1,
  a: 1,
  ci: 1,
  cg: 1,
  ch: 1,
  co: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_sci_HashMapBuilder$$anon$1(hm$1, outer) {
  this.bP = 0;
  this.ga = 0;
  this.ek = null;
  this.bB = 0;
  this.cV = null;
  this.gb = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_ChampBaseIterator__sci_Node__(this, hm$1.bn);
  while (this.p()) {
    var originalHash = this.ek.gN(this.bP);
    outer.fB(outer.cx, this.ek.e1(this.bP), this.ek.dc(this.bP), originalHash, $m_sc_Hashing$().cm(originalHash), 0);
    this.bP = ((1 + this.bP) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.l = (function() {
  return $m_sc_Iterator$().X.l();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  hK: 1,
  cB: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.t)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.t)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.dC = 0;
  this.f9 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  hZ: 1,
  i0: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dE = 0;
  this.dD = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  i1: 1,
  i2: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dF = 0;
  this.cA = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  i3: 1,
  i4: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.dy = 0;
  this.hH = null;
  this.bQ = 0;
  this.gc = null;
  this.gd = null;
  this.jp = 0;
  this.nN = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.jp = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().pM(this.jp, $m_sr_Statics$().L(this.nN), (-889275714));
});
$p.sx = (function() {
  if ((!this.p())) {
    $m_sc_Iterator$().X.l();
  }
  this.jp = this.hH.gN(this.dy);
  this.nN = this.hH.dc(this.dy);
  this.dy = ((this.dy - 1) | 0);
  return this;
});
$p.l = (function() {
  return this.sx();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  i6: 1,
  hH: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.bP = 0;
  this.ga = 0;
  this.ek = null;
  this.bB = 0;
  this.cV = null;
  this.gb = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.sw = (function() {
  if ((!this.p())) {
    $m_sc_Iterator$().X.l();
  }
  var payload = this.ek.pa(this.bP);
  this.bP = ((1 + this.bP) | 0);
  return payload;
});
$p.l = (function() {
  return this.sw();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  i7: 1,
  cB: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bG <= $thiz.ap)) {
    $m_sc_Iterator$().X.l();
  }
  $thiz.dH = ((1 + $thiz.dH) | 0);
  var slice = $thiz.jr.cN($thiz.dH);
  while ((slice.a.length === 0)) {
    $thiz.dH = ((1 + $thiz.dH) | 0);
    slice = $thiz.jr.cN($thiz.dH);
  }
  $thiz.gf = $thiz.eo;
  var count = $thiz.nP;
  var idx = $thiz.dH;
  var c = (((count + ((count >>> 31) | 0)) | 0) >> 1);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.dG = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x46 = $thiz.dG;
  switch (x46) {
    case 1: {
      $thiz.aR = slice;
      break;
    }
    case 2: {
      $thiz.aS = slice;
      break;
    }
    case 3: {
      $thiz.bo = slice;
      break;
    }
    case 4: {
      $thiz.cj = slice;
      break;
    }
    case 5: {
      $thiz.en = slice;
      break;
    }
    case 6: {
      $thiz.jq = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x46);
    }
  }
  $thiz.eo = (($thiz.gf + Math.imul(slice.a.length, (1 << Math.imul(5, (($thiz.dG - 1) | 0))))) | 0);
  if (($thiz.eo > $thiz.d1)) {
    $thiz.eo = $thiz.d1;
  }
  if (($thiz.dG > 1)) {
    $thiz.fa = (((1 << Math.imul(5, $thiz.dG)) - 1) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.ap - $thiz.bG) | 0) + $thiz.d1) | 0);
  if ((pos === $thiz.eo)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.dG > 1)) {
    var io = ((pos - $thiz.gf) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.fa ^ io));
    $thiz.fa = io;
  }
  $thiz.bG = (($thiz.bG - $thiz.ap) | 0);
  var a = $thiz.aR.a.length;
  var b = $thiz.bG;
  $thiz.d0 = ((a < b) ? a : b);
  $thiz.ap = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aR = $thiz.aS.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aS = $thiz.bo.a[(31 & ((io >>> 10) | 0))];
    $thiz.aR = $thiz.aS.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bo = $thiz.cj.a[(31 & ((io >>> 15) | 0))];
    $thiz.aS = $thiz.bo.a[0];
    $thiz.aR = $thiz.aS.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cj = $thiz.en.a[(31 & ((io >>> 20) | 0))];
    $thiz.bo = $thiz.cj.a[0];
    $thiz.aS = $thiz.bo.a[0];
    $thiz.aR = $thiz.aS.a[0];
  } else {
    $thiz.en = $thiz.jq.a[((io >>> 25) | 0)];
    $thiz.cj = $thiz.en.a[0];
    $thiz.bo = $thiz.cj.a[0];
    $thiz.aS = $thiz.bo.a[0];
    $thiz.aR = $thiz.aS.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aR = $thiz.aS.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aS = $thiz.bo.a[(31 & ((io >>> 10) | 0))];
    $thiz.aR = $thiz.aS.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bo = $thiz.cj.a[(31 & ((io >>> 15) | 0))];
    $thiz.aS = $thiz.bo.a[(31 & ((io >>> 10) | 0))];
    $thiz.aR = $thiz.aS.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cj = $thiz.en.a[(31 & ((io >>> 20) | 0))];
    $thiz.bo = $thiz.cj.a[(31 & ((io >>> 15) | 0))];
    $thiz.aS = $thiz.bo.a[(31 & ((io >>> 10) | 0))];
    $thiz.aR = $thiz.aS.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.en = $thiz.jq.a[((io >>> 25) | 0)];
    $thiz.cj = $thiz.en.a[(31 & ((io >>> 20) | 0))];
    $thiz.bo = $thiz.cj.a[(31 & ((io >>> 15) | 0))];
    $thiz.aS = $thiz.bo.a[(31 & ((io >>> 10) | 0))];
    $thiz.aR = $thiz.aS.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.jr = null;
  this.d1 = 0;
  this.nP = 0;
  this.aR = null;
  this.aS = null;
  this.bo = null;
  this.cj = null;
  this.en = null;
  this.jq = null;
  this.d0 = 0;
  this.ap = 0;
  this.fa = 0;
  this.bG = 0;
  this.dH = 0;
  this.dG = 0;
  this.gf = 0;
  this.eo = 0;
  this.jr = v;
  this.d1 = totalLength;
  this.nP = sliceCount;
  this.aR = v.f;
  this.d0 = this.aR.a.length;
  this.ap = 0;
  this.fa = 0;
  this.bG = this.d1;
  this.dH = 0;
  this.dG = 1;
  this.gf = 0;
  this.eo = this.d0;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.y = (function() {
  return ((this.bG - this.ap) | 0);
});
$p.p = (function() {
  return (this.bG > this.ap);
});
$p.l = (function() {
  if ((this.ap === this.d0)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.aR.a[this.ap];
  this.ap = ((1 + this.ap) | 0);
  return r;
});
$p.e0 = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.ap - this.bG) | 0) + this.d1) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.d1;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.d1)) {
      this.ap = 0;
      this.bG = 0;
      this.d0 = 0;
    } else {
      while ((newpos >= this.eo)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.gf) | 0);
      if ((this.dG > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.fa ^ io));
        this.fa = io;
      }
      this.d0 = this.aR.a.length;
      this.ap = (31 & io);
      this.bG = ((this.ap + ((this.d1 - newpos) | 0)) | 0);
      if ((this.d0 > this.bG)) {
        this.d0 = this.bG;
      }
    }
  }
  return this;
});
$p.bT = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().bs(xs);
  var srcLen = ((this.bG - this.ap) | 0);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? xsLen : ((xsLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var total$1 = ((total < 0) ? 0 : total);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total$1)) {
    if ((this.ap === this.d0)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total$1 - copied) | 0);
    var b = ((this.aR.a.length - this.ap) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.aR;
      var srcPos = this.ap;
      var destPos = ((start + copied) | 0);
      src.t(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().gI(this.aR, this.ap, xs, ((start + copied) | 0), count);
    }
    this.ap = ((this.ap + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total$1;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  i9: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1,
  G: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.jv = 0;
  $thiz.nV = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.jv = 0;
  this.nV = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.b6 = (function(size) {
  if ((this.jv < size)) {
    this.sZ(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.jx = null;
  this.nX = null;
  $n_scm_ArraySeq$ = this;
  this.jx = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.nX = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.rI = (function(it, evidence$1) {
  return this.ko($m_s_Array$().p2(it, evidence$1));
});
$p.i7 = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => this.ko(x$2))), new $c_scm_ArrayBuilder$generic(evidence$1.aN()));
});
$p.ko = (function(x) {
  if ((x === null)) {
    return null;
  }
  if ((x instanceof $ac_O)) {
    return new $c_scm_ArraySeq$ofRef(x);
  }
  if ((x instanceof $ac_I)) {
    return new $c_scm_ArraySeq$ofInt(x);
  }
  if ((x instanceof $ac_D)) {
    return new $c_scm_ArraySeq$ofDouble(x);
  }
  if ((x instanceof $ac_J)) {
    return new $c_scm_ArraySeq$ofLong(x);
  }
  if ((x instanceof $ac_F)) {
    return new $c_scm_ArraySeq$ofFloat(x);
  }
  if ((x instanceof $ac_C)) {
    return new $c_scm_ArraySeq$ofChar(x);
  }
  if ((x instanceof $ac_B)) {
    return new $c_scm_ArraySeq$ofByte(x);
  }
  if ((x instanceof $ac_S)) {
    return new $c_scm_ArraySeq$ofShort(x);
  }
  if ((x instanceof $ac_Z)) {
    return new $c_scm_ArraySeq$ofBoolean(x);
  }
  if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_scm_ArraySeq$ofUnit(x);
  }
  throw new $c_s_MatchError(x);
});
$p.k7 = (function(it, evidence$1) {
  return this.rI(it, evidence$1);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  iD: 1,
  a: 1,
  ci: 1,
  cg: 1,
  ch: 1,
  co: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_scm_HashSet$$anon$1(outer) {
  this.dP = 0;
  this.d4 = null;
  this.gj = 0;
  this.gi = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.k4 = (function(nd) {
  return nd.fe;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  iJ: 1,
  bj: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.dP = 0;
  this.d4 = null;
  this.gj = 0;
  this.gi = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.k4 = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  iK: 1,
  bj: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.dP = 0;
  this.d4 = null;
  this.gj = 0;
  this.gi = null;
  this.jA = 0;
  this.o1 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.o1 = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.jA = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.i = (function() {
  return this.jA;
});
$p.k4 = (function(nd) {
  this.jA = $p_scm_HashSet__improveHash__I__I(this.o1, nd.d5);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  iL: 1,
  bj: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.gr = null;
  this.gr = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.g = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.i = (function() {
  return $m_sr_Statics$().L(this.gr);
});
$p.h = (function() {
  return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.gr);
});
$p.aN = (function() {
  return this.gr;
});
$p.bt = (function(len) {
  return this.gr.ao.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  jc: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28(key$28) {
  this.eb = null;
  this.ec = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$28, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28, "com.raquo.laminar.defs.styles.StyleProps$$anon$28", ({
  eQ: 1,
  aJ: 1,
  aa: 1,
  aH: 1,
  aI: 1,
  eU: 1,
  eT: 1
}));
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $p;
$p.ey = (function(s) {
  this.sE(s);
  this.ph("\n");
});
/** @constructor */
function $c_Ljava_nio_StringCharBuffer(_capacity, _csq, _csqOffset, _initialPosition, _initialLimit) {
  this.cP = 0;
  this.G = 0;
  this.s = 0;
  this.cs = 0;
  this.n1 = null;
  this.n2 = 0;
  this.dj = null;
  this.dk = 0;
  this.dj = _csq;
  this.dk = _csqOffset;
  $ct_Ljava_nio_CharBuffer__I__AC__I__(this, _capacity, null, (-1));
  $c_Ljava_nio_Buffer.prototype.aH.call(this, _initialPosition);
  $c_Ljava_nio_Buffer.prototype.km.call(this, _initialLimit);
}
$p = $c_Ljava_nio_StringCharBuffer.prototype = new $h_Ljava_nio_CharBuffer();
$p.constructor = $c_Ljava_nio_StringCharBuffer;
/** @constructor */
function $h_Ljava_nio_StringCharBuffer() {
}
$h_Ljava_nio_StringCharBuffer.prototype = $p;
$p.ti = (function(start, end) {
  if ((((start < 0) || (start > end)) || (end > ((this.G - this.s) | 0)))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  return new $c_Ljava_nio_StringCharBuffer(this.cP, this.dj, this.dk, ((this.s + start) | 0), ((this.s + end) | 0));
});
$p.fo = (function() {
  var p = this.s;
  if ((p === this.G)) {
    throw new $c_Ljava_nio_BufferUnderflowException();
  }
  this.s = ((1 + p) | 0);
  return $dp_charAt__I__C(this.dj, ((this.dk + p) | 0));
});
$p.rQ = (function(index) {
  if (((index < 0) || (index >= this.G))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  return $dp_charAt__I__C(this.dj, ((this.dk + index) | 0));
});
$p.h = (function() {
  var offset = this.dk;
  return $dp_toString__T($dp_subSequence__I__I__jl_CharSequence(this.dj, ((this.s + offset) | 0), ((this.G + offset) | 0)));
});
$p.kC = (function(start, end) {
  return this.ti(start, end);
});
var $d_Ljava_nio_StringCharBuffer = new $TypeData().i($c_Ljava_nio_StringCharBuffer, "java.nio.StringCharBuffer", ({
  gp: 1,
  cb: 1,
  c7: 1,
  J: 1,
  aL: 1,
  aY: 1,
  g5: 1
}));
/** @constructor */
function $c_T2$mcDD$sp(_1$mcD$sp, _2$mcD$sp) {
  this.jd = null;
  this.je = null;
  this.jf = 0.0;
  this.jg = 0.0;
  this.jf = _1$mcD$sp;
  this.jg = _2$mcD$sp;
  $ct_T2__O__O__(this, null, null);
}
$p = $c_T2$mcDD$sp.prototype = new $h_T2();
$p.constructor = $c_T2$mcDD$sp;
/** @constructor */
function $h_T2$mcDD$sp() {
}
$h_T2$mcDD$sp.prototype = $p;
$p.os = (function() {
  return this.jf;
});
$p.ot = (function() {
  return this.jg;
});
$p.aL = (function() {
  return this.jg;
});
$p.aY = (function() {
  return this.jf;
});
var $d_T2$mcDD$sp = new $TypeData().i($c_T2$mcDD$sp, "scala.Tuple2$mcDD$sp", ({
  hd: 1,
  b6: 1,
  ce: 1,
  g: 1,
  b: 1,
  a: 1,
  hc: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.cb() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ak)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.jv = 0;
  this.nV = 0;
  this.fd = null;
  this.nW = false;
  this.jw = null;
  this.fd = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.nW = (elementClass === $d_C.l());
  this.jw = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.oz = (function(elem) {
  var unboxedElem = (this.nW ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h1(this.fd) : elem));
  this.jw.push(unboxedElem);
  return this;
});
$p.qu = (function(xs) {
  var it = xs.m();
  while (it.p()) {
    this.oz(it.l());
  }
  return this;
});
$p.sZ = (function(size) {
});
$p.b5 = (function() {
  return $m_scm_ArrayBuilder$().h0(((this.fd === $d_V.l()) ? $d_jl_Void.l() : (((this.fd === $d_sr_Null$.l()) || (this.fd === $d_sr_Nothing$.l())) ? $d_O.l() : this.fd)), this.jw);
});
$p.h = (function() {
  return "ArrayBuilder.generic";
});
$p.b0 = (function(elem) {
  return this.oz(elem);
});
$p.aZ = (function(elems) {
  return this.qu(elems);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  iC: 1,
  iA: 1,
  L: 1,
  N: 1,
  S: 1,
  ah: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.jh = null;
  this.cS = 0;
  this.bf = 0;
  this.o0 = null;
  this.nZ = 0;
  this.o0 = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.nZ = (mutationCount.M() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.p = (function() {
  $m_scm_MutationTracker$().oJ(this.nZ, (this.o0.M() | 0), "mutation occurred during iteration");
  return (this.bf > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  iG: 1,
  ck: 1,
  w: 1,
  c: 1,
  d: 1,
  x: 1,
  a: 1
}));
class $c_s_concurrent_Future$$anon$1 extends $c_ju_NoSuchElementException {
  constructor(t$2) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("Future.collect partial function is not defined at: " + t$2), null, true, true);
  }
  fm() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$1 = new $TypeData().i($c_s_concurrent_Future$$anon$1, "scala.concurrent.Future$$anon$1", ({
  j4: 1,
  aO: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1,
  aT: 1
}));
class $c_s_concurrent_Future$$anon$2 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.filter predicate is not satisfied", null, true, true);
  }
  fm() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$2 = new $TypeData().i($c_s_concurrent_Future$$anon$2, "scala.concurrent.Future$$anon$2", ({
  j5: 1,
  aO: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1,
  aT: 1
}));
class $c_s_concurrent_Future$$anon$3 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.failed not completed with a throwable.", null, true, true);
  }
  fm() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$3 = new $TypeData().i($c_s_concurrent_Future$$anon$3, "scala.concurrent.Future$$anon$3", ({
  j6: 1,
  aO: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1,
  aT: 1
}));
function $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, initial) {
  $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, initial);
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__($thiz, result) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().h2(result));
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().gn);
  return $thiz;
}
function $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try($thiz) {
  var \u03b4this$tailLocal2 = $thiz;
  while (true) {
    var state = \u03b4this$tailLocal2.O;
    if ((state instanceof $c_s_util_Try)) {
      return state;
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      \u03b4this$tailLocal2 = state.fx(\u03b4this$tailLocal2);
    } else {
      return null;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($thiz, state, callbacks) {
  var \u03b4this$tailLocal4 = $thiz;
  var state$tailLocal2 = state;
  while (true) {
    if ((state$tailLocal2 instanceof $c_s_util_Try)) {
      $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(\u03b4this$tailLocal4, callbacks, state$tailLocal2);
      return callbacks;
    } else if ($is_s_concurrent_impl_Promise$Callbacks(state$tailLocal2)) {
      if (\u03b4this$tailLocal4.gH(state$tailLocal2, ((state$tailLocal2 !== $m_s_concurrent_impl_Promise$().gn) ? $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(\u03b4this$tailLocal4, callbacks, state$tailLocal2) : callbacks))) {
        return callbacks;
      } else {
        state$tailLocal2 = \u03b4this$tailLocal4.O;
      }
    } else {
      var p = state$tailLocal2.fx(\u03b4this$tailLocal4);
      var state$tailLocal2$tmp1 = p.O;
      \u03b4this$tailLocal4 = p;
      state$tailLocal2 = state$tailLocal2$tmp1;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($thiz, left, right) {
  var right$tailLocal1 = right;
  var left$tailLocal1 = left;
  while (true) {
    if ((left$tailLocal1 instanceof $c_s_concurrent_impl_Promise$Transformation)) {
      return new $c_s_concurrent_impl_Promise$ManyCallbacks(left$tailLocal1, right$tailLocal1);
    } else {
      var m = left$tailLocal1;
      var left$tailLocal1$tmp1 = m.jE;
      var right$tailLocal1$tmp1 = new $c_s_concurrent_impl_Promise$ManyCallbacks(m.jD, right$tailLocal1);
      left$tailLocal1 = left$tailLocal1$tmp1;
      right$tailLocal1 = right$tailLocal1$tmp1;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V($thiz, callbacks, resolved) {
  var callbacks$tailLocal1 = callbacks;
  while (true) {
    if ((callbacks$tailLocal1 instanceof $c_s_concurrent_impl_Promise$ManyCallbacks)) {
      var m = callbacks$tailLocal1;
      m.jD.pE(resolved);
      callbacks$tailLocal1 = m.jE;
    } else {
      callbacks$tailLocal1.pE(resolved);
      return (void 0);
    }
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$DefaultPromise() {
  this.O = null;
}
$p = $c_s_concurrent_impl_Promise$DefaultPromise.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$DefaultPromise;
/** @constructor */
function $h_s_concurrent_impl_Promise$DefaultPromise() {
}
$h_s_concurrent_impl_Promise$DefaultPromise.prototype = $p;
$p.k5 = (function(f, executor) {
  var state = this.O;
  if ((!(state instanceof $c_s_util_Failure))) {
    $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 5, f, executor));
  }
});
$p.p0 = (function(f, executor) {
  var state = this.O;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 2, f, executor)) : this);
});
$p.i6 = (function(f, executor) {
  var state = this.O;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 1, f, executor)) : this);
});
$p.sA = (function(func, executor) {
  $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, this.O, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 6, func, executor));
});
$p.h = (function() {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    var state = \u03b4this$tailLocal1.O;
    if ((state instanceof $c_s_util_Try)) {
      return (("Future(" + state) + ")");
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      \u03b4this$tailLocal1 = state.fx(\u03b4this$tailLocal1);
    } else {
      return "Future(<not completed>)";
    }
  }
});
$p.tu = (function(value) {
  var state = this.O;
  return ((!(state instanceof $c_s_util_Try)) && this.eD(state, $m_s_concurrent_impl_Promise$().h2(value)));
});
$p.eD = (function(state, resolved) {
  var \u03b4this$tailLocal3 = this;
  var state$tailLocal1 = state;
  while (true) {
    if ($is_s_concurrent_impl_Promise$Callbacks(state$tailLocal1)) {
      if ((!\u03b4this$tailLocal3.gH(state$tailLocal1, resolved))) {
        state$tailLocal1 = \u03b4this$tailLocal3.O;
        continue;
      }
      if ((state$tailLocal1 !== $m_s_concurrent_impl_Promise$().gn)) {
        $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(\u03b4this$tailLocal3, state$tailLocal1, resolved);
      }
      return true;
    } else if ((state$tailLocal1 instanceof $c_s_concurrent_impl_Promise$Link)) {
      var p = state$tailLocal1.fx(\u03b4this$tailLocal3);
      if ((p !== \u03b4this$tailLocal3)) {
        var state$tailLocal1$tmp1 = p.O;
        \u03b4this$tailLocal3 = p;
        state$tailLocal1 = state$tailLocal1$tmp1;
        continue;
      }
      return false;
    } else {
      return false;
    }
  }
});
$p.jS = (function(other) {
  if ((other !== this)) {
    var state = this.O;
    if ((!(state instanceof $c_s_util_Try))) {
      if ((other instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
        var resolved = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other);
      } else {
        var this$1 = $m_s_Option$().jO($p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other));
        var resolved = (this$1.d() ? null : this$1.x());
      }
      if ((resolved !== null)) {
        this.eD(state, resolved);
      } else {
        other.sA(this, $m_s_concurrent_ExecutionContext$parasitic$());
      }
    }
  }
  return this;
});
$p.kn = (function(target, link) {
  var \u03b4this$tailLocal5 = this;
  var link$tailLocal1 = link;
  var target$tailLocal2 = target;
  while (true) {
    if ((\u03b4this$tailLocal5 !== target$tailLocal2)) {
      var state = \u03b4this$tailLocal5.O;
      if ((state instanceof $c_s_util_Try)) {
        if ((!target$tailLocal2.eD(target$tailLocal2.O, state))) {
          throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "Cannot link completed promises together");
        } else {
          return (void 0);
        }
      } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
        var l = ((link$tailLocal1 !== null) ? link$tailLocal1 : new $c_s_concurrent_impl_Promise$Link(target$tailLocal2));
        var p = l.fx(\u03b4this$tailLocal5);
        if (((\u03b4this$tailLocal5 !== p) && \u03b4this$tailLocal5.gH(state, l))) {
          if ((state !== $m_s_concurrent_impl_Promise$().gn)) {
            $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(p, p.O, state);
            return (void 0);
          } else {
            return (void 0);
          }
        } else {
          target$tailLocal2 = p;
          link$tailLocal1 = l;
        }
      } else {
        \u03b4this$tailLocal5 = state.fx(\u03b4this$tailLocal5);
      }
    } else {
      return (void 0);
    }
  }
});
$p.tw = (function(resolved) {
  var \u03b4this$tailLocal6 = this;
  while (true) {
    var state = \u03b4this$tailLocal6.O;
    if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      var next = (\u03b4this$tailLocal6.gH(state, resolved) ? state.O : \u03b4this$tailLocal6);
      \u03b4this$tailLocal6 = next;
    } else {
      \u03b4this$tailLocal6.eD(state, resolved);
      return (void 0);
    }
  }
});
$p.c = (function(v1) {
  this.eD(this.O, v1);
});
function $isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bm)));
}
var $d_s_concurrent_impl_Promise$DefaultPromise = new $TypeData().i($c_s_concurrent_impl_Promise$DefaultPromise, "scala.concurrent.impl.Promise$DefaultPromise", ({
  bm: 1,
  b3: 1,
  a: 1,
  d2: 1,
  cZ: 1,
  d1: 1,
  e: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.U = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.h = (function() {
  return this.U;
});
$p.g = (function(that) {
  return (this === that);
});
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.R = null;
    this.R = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  eu() {
    return $dp_toString__T(this.R);
  }
  B() {
    return "JavaScriptException";
  }
  z() {
    return 1;
  }
  A(x$1) {
    return ((x$1 === 0) ? this.R : $m_sr_Statics$().s9(x$1));
  }
  W() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  i() {
    return $m_s_util_hashing_MurmurHash3$().bW(this, 1744042595, true);
  }
  g(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().n(this.R, x$1.R)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d9)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  d9: 1,
  A: 1,
  v: 1,
  o: 1,
  a: 1,
  g: 1,
  b: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return 1938557015;
});
$p.h = (function() {
  return "CJKStrategy";
});
$p.z = (function() {
  return 0;
});
$p.B = (function() {
  return "CJKStrategy";
});
$p.A = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$, "com.github.pwharned.clausula.extension.domain.CJKStrategy$", ({
  du: 1,
  aU: 1,
  b: 1,
  g: 1,
  a: 1,
  u: 1,
  y: 1,
  z: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$;
function $m_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$ = new $c_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return (-2033731977);
});
$p.h = (function() {
  return "LatinStrategy";
});
$p.z = (function() {
  return 0;
});
$p.B = (function() {
  return "LatinStrategy";
});
$p.A = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$, "com.github.pwharned.clausula.extension.domain.LatinStrategy$", ({
  dM: 1,
  aU: 1,
  b: 1,
  g: 1,
  a: 1,
  u: 1,
  y: 1,
  z: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$;
function $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$ = new $c_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return 1276468189;
});
$p.h = (function() {
  return "RTLStrategy";
});
$p.z = (function() {
  return 0;
});
$p.B = (function() {
  return "RTLStrategy";
});
$p.A = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$, "com.github.pwharned.clausula.extension.domain.RTLStrategy$", ({
  dO: 1,
  aU: 1,
  b: 1,
  g: 1,
  a: 1,
  u: 1,
  y: 1,
  z: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$;
function $m_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$ = new $c_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$;
}
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.kq() === (void 0)))) {
    $thiz.jH($m_Lcom_raquo_airstream_core_Signal$().pn());
  }
  $thiz.pm(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.kq();
  if ((x === (void 0))) {
    $thiz.jH($m_Lcom_raquo_airstream_core_Signal$().pn());
    var nextValue = $thiz.jW();
    $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
    var $x_1 = nextValue;
  } else {
    var $x_1 = x;
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, new $c_s_util_Failure(nextError), transaction);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  var isError = nextValue.pe();
  var elem = false;
  elem = false;
  $thiz.cn(false);
  var this$ = $thiz.cG();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.e3(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.cJ();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fw(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cn(true);
  var x = $thiz.e2();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].M();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cq(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cn(false);
  var this$ = $thiz.cG();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.gS(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().cq(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.cJ();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fv(nextValue, transaction);
  }
  $thiz.cn(true);
  var x = $thiz.e2();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].M();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.cn(false);
  var this$ = $thiz.cG();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.ex(nextError);
  }
  var this$$1 = $thiz.cJ();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fu(nextError, transaction);
  }
  $thiz.cn(true);
  var x = $thiz.e2();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].M();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, _$2, transaction);
  })));
}
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4(key$4) {
  this.eb = null;
  this.ec = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$4, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4, "com.raquo.laminar.defs.styles.StyleProps$$anon$4", ({
  eR: 1,
  aJ: 1,
  aa: 1,
  aH: 1,
  aI: 1,
  bO: 1,
  eW: 1,
  eX: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.mT && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.mT = false;
  this.fW = null;
  this.mT = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.fW = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.sE = (function(s) {
  this.ph(((s === null) ? "null" : s));
});
$p.ph = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.fW = (("" + this.fW) + rest);
      rest = "";
    } else {
      var $x_1 = this.fW;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.fW = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  g0: 1,
  fL: 1,
  fJ: 1,
  bX: 1,
  bV: 1,
  bY: 1,
  bW: 1,
  aY: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.d())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.v();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
function $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  if (($thiz.bj(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.gP();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.m();
    var different = false;
    while (it.p()) {
      var next = it.l();
      if (seen.hS(f.c(next))) {
        builder.b0(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.b5() : $thiz);
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.U = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.aN = (function() {
  return $d_Z.l();
});
$p.bt = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.U = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.aN = (function() {
  return $d_B.l();
});
$p.bt = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.U = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.aN = (function() {
  return $d_C.l();
});
$p.bt = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.U = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.aN = (function() {
  return $d_D.l();
});
$p.bt = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.U = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.aN = (function() {
  return $d_F.l();
});
$p.bt = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.U = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.aN = (function() {
  return $d_I.l();
});
$p.bt = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.U = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.aN = (function() {
  return $d_J.l();
});
$p.bt = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.d7 = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.h = (function() {
  return this.d7;
});
$p.g = (function(that) {
  return (this === that);
});
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.U = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.aN = (function() {
  return $d_S.l();
});
$p.bt = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.U = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.aN = (function() {
  return $d_V.l();
});
$p.bt = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return (-1469642697);
});
$p.h = (function() {
  return "AnkiNotRunning";
});
$p.z = (function() {
  return 0;
});
$p.B = (function() {
  return "AnkiNotRunning";
});
$p.A = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$, "com.github.pwharned.clausula.extension.domain.AnkiNotRunning$", ({
  dt: 1,
  ac: 1,
  bs: 1,
  b: 1,
  g: 1,
  a: 1,
  u: 1,
  y: 1,
  z: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$;
function $m_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$ = new $c_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return (-451861635);
});
$p.h = (function() {
  return "DuplicateNote";
});
$p.z = (function() {
  return 0;
});
$p.B = (function() {
  return "DuplicateNote";
});
$p.A = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$, "com.github.pwharned.clausula.extension.domain.DuplicateNote$", ({
  dv: 1,
  ac: 1,
  bs: 1,
  b: 1,
  g: 1,
  a: 1,
  u: 1,
  y: 1,
  z: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$;
function $m_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$ = new $c_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return (-926920016);
});
$p.h = (function() {
  return "EmptySentence";
});
$p.z = (function() {
  return 0;
});
$p.B = (function() {
  return "EmptySentence";
});
$p.A = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$, "com.github.pwharned.clausula.extension.domain.EmptySentence$", ({
  dw: 1,
  ac: 1,
  bA: 1,
  b: 1,
  g: 1,
  a: 1,
  u: 1,
  y: 1,
  z: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$;
function $m_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$ = new $c_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return 584085975;
});
$p.h = (function() {
  return "EmptyWord";
});
$p.z = (function() {
  return 0;
});
$p.B = (function() {
  return "EmptyWord";
});
$p.A = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$, "com.github.pwharned.clausula.extension.domain.EmptyWord$", ({
  dx: 1,
  ac: 1,
  bA: 1,
  b: 1,
  g: 1,
  a: 1,
  u: 1,
  y: 1,
  z: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$;
function $m_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$ = new $c_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return (-190555721);
});
$p.h = (function() {
  return "NoWordFound";
});
$p.z = (function() {
  return 0;
});
$p.B = (function() {
  return "NoWordFound";
});
$p.A = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$, "com.github.pwharned.clausula.extension.domain.NoWordFound$", ({
  dN: 1,
  ac: 1,
  bw: 1,
  b: 1,
  g: 1,
  a: 1,
  u: 1,
  y: 1,
  z: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$;
function $m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$ = new $c_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return (-1807195300);
});
$p.h = (function() {
  return "SentenceBoundaryNotFound";
});
$p.z = (function() {
  return 0;
});
$p.B = (function() {
  return "SentenceBoundaryNotFound";
});
$p.A = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$, "com.github.pwharned.clausula.extension.domain.SentenceBoundaryNotFound$", ({
  dR: 1,
  ac: 1,
  bw: 1,
  b: 1,
  g: 1,
  a: 1,
  u: 1,
  y: 1,
  z: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$;
function $m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$ = new $c_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return 1949293709;
});
$p.h = (function() {
  return "UnsupportedLanguage";
});
$p.z = (function() {
  return 0;
});
$p.B = (function() {
  return "UnsupportedLanguage";
});
$p.A = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$, "com.github.pwharned.clausula.extension.domain.UnsupportedLanguage$", ({
  dS: 1,
  ac: 1,
  by: 1,
  b: 1,
  g: 1,
  a: 1,
  u: 1,
  y: 1,
  z: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$;
function $m_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$ = new $c_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$;
}
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.bV = (function() {
  return $m_sc_View$();
});
$p.h = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bv = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.aO() === that.aO())) {
      try {
        return $thiz.tk(that);
      } catch (e) {
        if (false) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.bb)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bb)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.d7 = null;
  this.d7 = "Any";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.aN = (function() {
  return $d_O.l();
});
$p.bt = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  jd: 1,
  aS: 1,
  aR: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$();
  }
  return $n_s_reflect_ManifestFactory$AnyManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.U = null;
  this.U = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  jf: 1,
  je: 1,
  ab: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$();
  }
  return $n_s_reflect_ManifestFactory$BooleanManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.U = null;
  this.U = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  jh: 1,
  jg: 1,
  ab: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$();
  }
  return $n_s_reflect_ManifestFactory$ByteManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.U = null;
  this.U = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  jj: 1,
  ji: 1,
  ab: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$();
  }
  return $n_s_reflect_ManifestFactory$CharManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.U = null;
  this.U = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  jl: 1,
  jk: 1,
  ab: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
  }
  return $n_s_reflect_ManifestFactory$DoubleManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.U = null;
  this.U = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  jn: 1,
  jm: 1,
  ab: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
  }
  return $n_s_reflect_ManifestFactory$FloatManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.U = null;
  this.U = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  jp: 1,
  jo: 1,
  ab: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.U = null;
  this.U = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  jr: 1,
  jq: 1,
  ab: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
  }
  return $n_s_reflect_ManifestFactory$LongManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.d7 = null;
  this.d7 = "Nothing";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.aN = (function() {
  return $d_sr_Nothing$.l();
});
$p.bt = (function(len) {
  return new ($d_sr_Nothing$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  js: 1,
  aS: 1,
  aR: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$();
  }
  return $n_s_reflect_ManifestFactory$NothingManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.d7 = null;
  this.d7 = "Null";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.aN = (function() {
  return $d_sr_Null$.l();
});
$p.bt = (function(len) {
  return new ($d_sr_Null$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  jt: 1,
  aS: 1,
  aR: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$();
  }
  return $n_s_reflect_ManifestFactory$NullManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.d7 = null;
  this.d7 = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.aN = (function() {
  return $d_O.l();
});
$p.bt = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  ju: 1,
  aS: 1,
  aR: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.U = null;
  this.U = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  jw: 1,
  jv: 1,
  ab: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$();
  }
  return $n_s_reflect_ManifestFactory$ShortManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.U = null;
  this.U = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  jy: 1,
  jx: 1,
  ab: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  K: 1,
  a1: 1
}));
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
  }
  return $n_s_reflect_ManifestFactory$UnitManifest$;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1(\u03b4name$2, _$ordinal$2) {
  this.h9 = null;
  this.h9 = \u03b4name$2;
}
$p = $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1.prototype = new $h_Lcom_github_pwharned_clausula_extension_ExtensionStatus();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1() {
}
$h_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return this.h9;
});
$p.h = (function() {
  return this.h9;
});
$p.i = (function() {
  return $f_T__hashCode__I(this.h9);
});
var $d_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1, "com.github.pwharned.clausula.extension.ExtensionStatus$$anon$1", ({
  dj: 1,
  dh: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1(\u03b4name$2, _$ordinal$2) {
  this.ha = null;
  this.ha = \u03b4name$2;
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1.prototype = new $h_Lcom_github_pwharned_clausula_extension_PopupState();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return this.ha;
});
$p.h = (function() {
  return this.ha;
});
$p.i = (function() {
  return $f_T__hashCode__I(this.ha);
});
var $d_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1, "com.github.pwharned.clausula.extension.PopupState$$anon$1", ({
  dn: 1,
  aD: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.kw(), $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.kw(), $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.lG = null;
  this.lF = false;
  this.lH = null;
  this.it = 0;
  this.lD = null;
  this.lE = null;
  this.lK = false;
  this.iu = null;
  this.lI = null;
  this.lJ = 0;
  this.lI = parentDisplayName;
  this.lG = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.it = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.iu = (void 0);
  this.lJ = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.cL = (function() {
  return this.lG;
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fr = (function() {
  return this.lF;
});
$p.e2 = (function() {
  return this.lH;
});
$p.cn = (function(x$1) {
  this.lF = x$1;
});
$p.ft = (function(x$1) {
  this.lH = x$1;
});
$p.gU = (function() {
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.fh = (function() {
  return this.it;
});
$p.jH = (function(x$1) {
  this.it = x$1;
});
$p.gT = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.gQ = (function(observer) {
  observer.e3($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cG = (function() {
  return this.lD;
});
$p.cJ = (function() {
  return this.lE;
});
$p.h7 = (function() {
  return this.lK;
});
$p.eG = (function(x$1) {
  this.lK = x$1;
});
$p.gF = (function(x$0) {
  this.lD = x$0;
});
$p.gG = (function(x$0) {
  this.lE = x$0;
});
$p.kq = (function() {
  return this.iu;
});
$p.pm = (function(x$1) {
  this.iu = x$1;
});
$p.ia = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.eC = (function() {
  return this.lJ;
});
$p.jW = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gV = (function() {
});
$p.cD = (function() {
  return (this.lI.M() + ".signal");
});
$p.eB = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  es: 1,
  ad: 1,
  a2: 1,
  an: 1,
  ao: 1,
  aV: 1,
  bI: 1,
  ay: 1,
  bJ: 1,
  eo: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.hZ($thiz)) {
        return $thiz.fy(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.n)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.n)));
}
/** @constructor */
function $c_sc_View$$anon$1(it$3) {
  this.nH = null;
  this.nH = it$3;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.m = (function() {
  return this.nH.M();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  hC: 1,
  aA: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  a: 1,
  ak: 1
}));
/** @constructor */
function $c_sc_View$DistinctBy(underlying, f) {
  this.hG = null;
  this.nI = null;
  this.hG = underlying;
  this.nI = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.m = (function() {
  var this$1 = this.hG.m();
  return new $c_sc_Iterator$$anon$8(this.nI, this$1);
});
$p.y = (function() {
  return ((this.hG.y() === 0) ? 0 : (-1));
});
$p.d = (function() {
  return this.hG.d();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  hD: 1,
  aA: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  a: 1,
  ak: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1() {
  this.bk = null;
  this.bw = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "en", "English", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return "English";
});
$p.h = (function() {
  return "English";
});
$p.i = (function() {
  return $f_T__hashCode__I("English");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$1", ({
  dz: 1,
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10() {
  this.bk = null;
  this.bw = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "la", "Latin", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return "Latin";
});
$p.h = (function() {
  return "Latin";
});
$p.i = (function() {
  return $f_T__hashCode__I("Latin");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$10", ({
  dA: 1,
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11() {
  this.bk = null;
  this.bw = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "he", "Hebrew", true, $m_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return "Hebrew";
});
$p.h = (function() {
  return "Hebrew";
});
$p.i = (function() {
  return $f_T__hashCode__I("Hebrew");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$11", ({
  dB: 1,
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12() {
  this.bk = null;
  this.bw = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "auto", "Auto", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return "Auto";
});
$p.h = (function() {
  return "Auto";
});
$p.i = (function() {
  return $f_T__hashCode__I("Auto");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$12", ({
  dC: 1,
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2() {
  this.bk = null;
  this.bw = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "ru", "Russian", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return "Russian";
});
$p.h = (function() {
  return "Russian";
});
$p.i = (function() {
  return $f_T__hashCode__I("Russian");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$2", ({
  dD: 1,
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3() {
  this.bk = null;
  this.bw = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "fr", "French", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return "French";
});
$p.h = (function() {
  return "French";
});
$p.i = (function() {
  return $f_T__hashCode__I("French");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$3", ({
  dE: 1,
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4() {
  this.bk = null;
  this.bw = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "de", "German", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return "German";
});
$p.h = (function() {
  return "German";
});
$p.i = (function() {
  return $f_T__hashCode__I("German");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$4", ({
  dF: 1,
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5() {
  this.bk = null;
  this.bw = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "es", "Spanish", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return "Spanish";
});
$p.h = (function() {
  return "Spanish";
});
$p.i = (function() {
  return $f_T__hashCode__I("Spanish");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$5", ({
  dG: 1,
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6() {
  this.bk = null;
  this.bw = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "ja", "Japanese", false, $m_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return "Japanese";
});
$p.h = (function() {
  return "Japanese";
});
$p.i = (function() {
  return $f_T__hashCode__I("Japanese");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$6", ({
  dH: 1,
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7() {
  this.bk = null;
  this.bw = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "zh", "Chinese", false, $m_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return "Chinese";
});
$p.h = (function() {
  return "Chinese";
});
$p.i = (function() {
  return $f_T__hashCode__I("Chinese");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$7", ({
  dI: 1,
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8() {
  this.bk = null;
  this.bw = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "ar", "Arabic", true, $m_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return "Arabic";
});
$p.h = (function() {
  return "Arabic";
});
$p.i = (function() {
  return $f_T__hashCode__I("Arabic");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$8", ({
  dJ: 1,
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9() {
  this.bk = null;
  this.bw = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "fa", "Farsi", true, $m_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9.prototype = $p;
$p.z = (function() {
  return 0;
});
$p.A = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.B = (function() {
  return "Farsi";
});
$p.h = (function() {
  return "Farsi";
});
$p.i = (function() {
  return $f_T__hashCode__I("Farsi");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$9", ({
  dK: 1,
  Y: 1,
  P: 1,
  b: 1,
  g: 1,
  a: 1,
  I: 1,
  X: 1,
  u: 1,
  y: 1,
  z: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.il = ($thiz.de !== null);
  $thiz.hg = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.de);
  if ($thiz.il) {
    var newParentLastUpdateId = $thiz.de.fh();
    if ((newParentLastUpdateId !== $thiz.hg)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.jW(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.hg = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.il) {
    $thiz.hg = $thiz.de.fh();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.de, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.de, $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_eventbus_EventBusStream(parentDisplayName) {
  this.kX = null;
  this.kW = false;
  this.kY = null;
  this.kU = null;
  this.kV = null;
  this.l1 = false;
  this.kZ = null;
  this.hf = null;
  this.l0 = 0;
  this.kZ = parentDisplayName;
  this.kX = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hf = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_core_EventStream.r().C)([])));
  this.l0 = 1;
}
$p = $c_Lcom_raquo_airstream_eventbus_EventBusStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_eventbus_EventBusStream;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_EventBusStream() {
}
$h_Lcom_raquo_airstream_eventbus_EventBusStream.prototype = $p;
$p.cL = (function() {
  return this.kX;
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fr = (function() {
  return this.kW;
});
$p.e2 = (function() {
  return this.kY;
});
$p.cn = (function(x$1) {
  this.kW = x$1;
});
$p.ft = (function(x$1) {
  this.kY = x$1;
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.gQ = (function(observer) {
});
$p.cG = (function() {
  return this.kU;
});
$p.cJ = (function() {
  return this.kV;
});
$p.h7 = (function() {
  return this.l1;
});
$p.eG = (function(x$1) {
  this.l1 = x$1;
});
$p.gF = (function(x$0) {
  this.kU = x$0;
});
$p.gG = (function(x$0) {
  this.kV = x$0;
});
$p.fw = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eC = (function() {
  return this.l0;
});
$p.fv = (function(nextValue, ignoredTransaction) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, _$1);
  })));
});
$p.fu = (function(nextError, transaction) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, _$2);
  })));
});
$p.gV = (function() {
  var arr = this.hf;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(arr[i]);
    i = ((1 + i) | 0);
  }
});
$p.gT = (function() {
  var arr = this.hf;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(arr[i], this, false);
    i = ((1 + i) | 0);
  }
});
$p.gU = (function() {
  var arr = this.hf;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(arr[i], this);
    i = ((1 + i) | 0);
  }
});
$p.cD = (function() {
  return (this.kZ.M() + ".events");
});
$p.eB = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_eventbus_EventBusStream = new $TypeData().i($c_Lcom_raquo_airstream_eventbus_EventBusStream, "com.raquo.airstream.eventbus.EventBusStream", ({
  ec: 1,
  ad: 1,
  a2: 1,
  an: 1,
  ao: 1,
  ax: 1,
  aF: 1,
  ay: 1,
  aW: 1,
  aw: 1,
  bB: 1
}));
/** @constructor */
function $c_sc_AbstractSet() {
}
$p = $c_sc_AbstractSet.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSet;
/** @constructor */
function $h_sc_AbstractSet() {
}
$h_sc_AbstractSet.prototype = $p;
$p.tk = (function(that) {
  return this.fn(that);
});
$p.g = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.bv = (function() {
  return "Set";
});
$p.h = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.c = (function(v1) {
  return this.br(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.aO() === o.aO())) {
      try {
        return $thiz.fn(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((map$1) => ((kv$2) => $m_sr_BoxesRunTime$().n(map$1.db(kv$2.aY(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sc_Map$().nF.M()))), kv$2.aL())))(o)));
      } catch (e) {
        if (false) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ae)));
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
function $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, _fun, _ec, _arg, _xform) {
  $thiz.hL = _fun;
  $thiz.gp = _ec;
  $thiz.go = _arg;
  $thiz.gq = _xform;
  $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz);
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__($thiz, xform, f, ec) {
  $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, f, ec, null, xform);
  return $thiz;
}
function $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V($thiz, t, e) {
  if ((false || $m_s_util_control_NonFatal$().hV(t))) {
    var completed = $thiz.eD($thiz.O, $m_s_concurrent_impl_Promise$().h2(new $c_s_util_Failure(t)));
    if (((($thiz.gq === 5) || ($thiz.gq === 6)) || (!completed))) {
      e.kA(t);
    }
  } else {
    var $x_1 = t;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.R : $x_1);
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$Transformation() {
  this.O = null;
  this.hL = null;
  this.gp = null;
  this.go = null;
  this.gq = 0;
}
$p = $c_s_concurrent_impl_Promise$Transformation.prototype = new $h_s_concurrent_impl_Promise$DefaultPromise();
$p.constructor = $c_s_concurrent_impl_Promise$Transformation;
/** @constructor */
function $h_s_concurrent_impl_Promise$Transformation() {
}
$h_s_concurrent_impl_Promise$Transformation.prototype = $p;
$p.pE = (function(resolved) {
  this.go = resolved;
  var e = this.gp;
  try {
    if ((e === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    e.k3(this);
  } catch (e$2) {
    var e$3 = ((e$2 instanceof $c_jl_Throwable) ? e$2 : new $c_sjs_js_JavaScriptException(e$2));
    this.hL = null;
    this.go = null;
    this.gp = null;
    if ((e === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$3, e);
  }
  return this;
});
$p.ez = (function() {
  var x$proxy4 = this.go;
  if ((x$proxy4 === null)) {
    $m_sr_Scala3RunTime$().bu();
  }
  var x$proxy5 = this.hL;
  if ((x$proxy5 === null)) {
    $m_sr_Scala3RunTime$().bu();
  }
  var x$proxy6 = this.gp;
  if ((x$proxy6 === null)) {
    $m_sr_Scala3RunTime$().bu();
  }
  this.hL = null;
  this.go = null;
  this.gp = null;
  try {
    var resolvedResult;
    switch (this.gq) {
      case 0: {
        var resolvedResult = null;
        break;
      }
      case 1: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Success) ? new $c_s_util_Success(x$proxy5.c(x$proxy4.x())) : x$proxy4);
        break;
      }
      case 2: {
        if ((x$proxy4 instanceof $c_s_util_Success)) {
          var f = x$proxy5.c(x$proxy4.x());
          if ((f instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
            f.kn(this, null);
          } else {
            this.jS(f);
          }
          var resolvedResult = null;
        } else {
          var resolvedResult = x$proxy4;
        }
        break;
      }
      case 3: {
        var resolvedResult = $m_s_concurrent_impl_Promise$().h2(x$proxy5.c(x$proxy4));
        break;
      }
      case 4: {
        var f$2 = x$proxy5.c(x$proxy4);
        if ((f$2 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
          f$2.kn(this, null);
        } else {
          this.jS(f$2);
        }
        var resolvedResult = null;
        break;
      }
      case 5: {
        x$proxy4.bc(x$proxy5);
        var resolvedResult = null;
        break;
      }
      case 6: {
        x$proxy5.c(x$proxy4);
        var resolvedResult = null;
        break;
      }
      case 7: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Failure) ? $m_s_concurrent_impl_Promise$().h2(x$proxy4.pt(x$proxy5)) : x$proxy4);
        break;
      }
      case 8: {
        if ((x$proxy4 instanceof $c_s_util_Failure)) {
          var f$3 = x$proxy5.c9(x$proxy4.d8, $m_s_concurrent_Future$().ob);
          var resolvedResult = ((f$3 !== $m_s_concurrent_Future$().jC) ? (((f$3 instanceof $c_s_concurrent_impl_Promise$DefaultPromise) ? f$3.kn(this, null) : this.jS(f$3)), null) : x$proxy4);
        } else {
          var resolvedResult = x$proxy4;
        }
        break;
      }
      case 9: {
        var resolvedResult = (((x$proxy4 instanceof $c_s_util_Failure) || (!(!x$proxy5.c(x$proxy4.x())))) ? x$proxy4 : $m_s_concurrent_Future$().oa);
        break;
      }
      case 10: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Success) ? new $c_s_util_Success(x$proxy5.c9(x$proxy4.x(), $m_s_concurrent_Future$().o8)) : x$proxy4);
        break;
      }
      default: {
        var resolvedResult = new $c_s_util_Failure($ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ("BUG: encountered transformation promise with illegal type: " + this.gq)));
      }
    }
    if ((resolvedResult !== null)) {
      this.eD(this.O, resolvedResult);
    }
  } catch (e) {
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)), x$proxy6);
  }
});
function $isArrayOf_s_concurrent_impl_Promise$Transformation(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d5)));
}
var $d_s_concurrent_impl_Promise$Transformation = new $TypeData().i($c_s_concurrent_impl_Promise$Transformation, "scala.concurrent.impl.Promise$Transformation", ({
  d5: 1,
  bm: 1,
  b3: 1,
  a: 1,
  d2: 1,
  cZ: 1,
  d1: 1,
  e: 1,
  aQ: 1,
  aZ: 1,
  iX: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.l9 = null;
  this.l8 = false;
  this.la = null;
  this.l5 = null;
  this.l7 = null;
  this.lc = false;
  this.ii = null;
  this.l6 = null;
  this.lb = 0;
  this.ii = parent;
  this.l6 = fn;
  this.l9 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.lb = ((1 + parent.eC()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.cL = (function() {
  return this.l9;
});
$p.cD = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fr = (function() {
  return this.l8;
});
$p.e2 = (function() {
  return this.la;
});
$p.cn = (function(x$1) {
  this.l8 = x$1;
});
$p.ft = (function(x$1) {
  this.la = x$1;
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.gQ = (function(observer) {
});
$p.cG = (function() {
  return this.l5;
});
$p.cJ = (function() {
  return this.l7;
});
$p.h7 = (function() {
  return this.lc;
});
$p.eG = (function(x$1) {
  this.lc = x$1;
});
$p.gF = (function(x$0) {
  this.l5 = x$0;
});
$p.gG = (function(x$0) {
  this.l7 = x$0;
});
$p.gV = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.ii);
});
$p.gT = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.gU = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.fw = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eC = (function() {
  return this.lb;
});
$p.fv = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.l6.c(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchResult1: {
      var $x_1;
      var x2 = $m_s_util_control_NonFatal$().fA(e$2);
      if ((!x2.d())) {
        var $x_1 = new $c_s_util_Failure(x2.x());
        break matchResult1;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
    }
  }
  $x_1.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
    if ((!nextValue.d())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.x(), transaction);
    }
  })));
});
$p.fu = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.kw = (function() {
  return this.ii;
});
$p.eB = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  ee: 1,
  ad: 1,
  a2: 1,
  an: 1,
  ao: 1,
  ax: 1,
  aF: 1,
  ay: 1,
  aW: 1,
  aw: 1,
  bD: 1,
  bB: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.lg = null;
  this.lf = false;
  this.lh = null;
  this.ij = 0;
  this.ld = null;
  this.le = null;
  this.lj = false;
  this.ik = null;
  this.il = false;
  this.hg = 0;
  this.de = null;
  this.im = null;
  this.io = null;
  this.li = 0;
  this.de = parent;
  this.im = project;
  this.io = recover;
  this.lg = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.ij = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.ik = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.li = ((1 + parent.eC()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.cL = (function() {
  return this.lg;
});
$p.cD = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fr = (function() {
  return this.lf;
});
$p.e2 = (function() {
  return this.lh;
});
$p.cn = (function(x$1) {
  this.lf = x$1;
});
$p.ft = (function(x$1) {
  this.lh = x$1;
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.fh = (function() {
  return this.ij;
});
$p.jH = (function(x$1) {
  this.ij = x$1;
});
$p.gQ = (function(observer) {
  observer.e3($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cG = (function() {
  return this.ld;
});
$p.cJ = (function() {
  return this.le;
});
$p.h7 = (function() {
  return this.lj;
});
$p.eG = (function(x$1) {
  this.lj = x$1;
});
$p.gF = (function(x$0) {
  this.ld = x$0;
});
$p.gG = (function(x$0) {
  this.le = x$0;
});
$p.kq = (function() {
  return this.ik;
});
$p.pm = (function(x$1) {
  this.ik = x$1;
});
$p.ia = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.fv = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.fu = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gV = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.gT = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.gU = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.eC = (function() {
  return this.li;
});
$p.fw = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.io;
    if (this$2.d()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.x();
      try {
        var $x_1 = new $c_s_util_Success(x0.c9(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchResult1: {
          var $x_1;
          var x2 = $m_s_util_control_NonFatal$().fA(e$2);
          if ((!x2.d())) {
            var $x_1 = new $c_s_util_Failure(x2.x());
            break matchResult1;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
        }
      }
      $x_1.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.d())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.x(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.kp(this.im), transaction);
  })));
});
$p.jW = (function() {
  var originalValue = this.de.ia().kp(this.im);
  return originalValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.io;
    if (this$2.d()) {
      return originalValue;
    } else {
      var x0 = this$2.x();
      try {
        var $x_1 = new $c_s_util_Success(x0.c9(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchResult1: {
          var $x_1;
          var x2 = $m_s_util_control_NonFatal$().fA(e$2);
          if ((!x2.d())) {
            var $x_1 = new $c_s_util_Failure(x2.x());
            break matchResult1;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
        }
      }
      return $x_1.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$10 = (nextValue.d() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.x())));
          return (this$10.d() ? originalValue : this$10.x());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$6) => originalValue)));
});
$p.eB = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  ef: 1,
  ad: 1,
  a2: 1,
  an: 1,
  ao: 1,
  aV: 1,
  bI: 1,
  ay: 1,
  bJ: 1,
  aw: 1,
  bC: 1,
  e0: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_StreamFromSignal(parent, changesOnly) {
  this.lo = null;
  this.ln = false;
  this.lp = null;
  this.ll = null;
  this.lm = null;
  this.lr = false;
  this.e8 = null;
  this.lk = false;
  this.lq = 0;
  this.fR = 0;
  this.hh = false;
  this.e8 = parent;
  this.lk = changesOnly;
  this.lo = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.lq = ((1 + parent.eC()) | 0);
  this.fR = 0;
  this.hh = true;
}
$p = $c_Lcom_raquo_airstream_misc_StreamFromSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_StreamFromSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_StreamFromSignal() {
}
$h_Lcom_raquo_airstream_misc_StreamFromSignal.prototype = $p;
$p.cL = (function() {
  return this.lo;
});
$p.cD = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fr = (function() {
  return this.ln;
});
$p.e2 = (function() {
  return this.lp;
});
$p.cn = (function(x$1) {
  this.ln = x$1;
});
$p.ft = (function(x$1) {
  this.lp = x$1;
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.gQ = (function(observer) {
});
$p.cG = (function() {
  return this.ll;
});
$p.cJ = (function() {
  return this.lm;
});
$p.h7 = (function() {
  return this.lr;
});
$p.eG = (function(x$1) {
  this.lr = x$1;
});
$p.gF = (function(x$0) {
  this.ll = x$0;
});
$p.gG = (function(x$0) {
  this.lm = x$0;
});
$p.gV = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.e8);
});
$p.gU = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.fv = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.fu = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eC = (function() {
  return this.lq;
});
$p.gT = (function() {
  var newParentLastUpdateId = this.e8.fh();
  if ((this.hh && this.lk)) {
    this.fR = newParentLastUpdateId;
  } else if ((newParentLastUpdateId !== this.fR)) {
    $m_Lcom_raquo_airstream_core_Transaction$onStart$().qs(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
      if ($f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this)) {
        $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, this.e8.ia(), trx);
        this.fR = this.e8.fh();
      }
    })));
  }
  this.hh = false;
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.fw = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
  this.fR = this.e8.fh();
  this.hh = false;
});
$p.kw = (function() {
  return this.e8;
});
$p.eB = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_StreamFromSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_StreamFromSignal, "com.raquo.airstream.misc.StreamFromSignal", ({
  eg: 1,
  ad: 1,
  a2: 1,
  an: 1,
  ao: 1,
  ax: 1,
  aF: 1,
  ay: 1,
  aW: 1,
  aw: 1,
  bD: 1,
  bC: 1
}));
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.c9 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cE = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.kk = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.bj = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.d = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fy = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.hZ = (function(that) {
  return true;
});
$p.g = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().pB(this);
});
$p.h = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.cK = (function(x) {
  return this.kk((x | 0));
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
$p.cE = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bj = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.d = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bv = (function() {
  return "SeqView";
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.q)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.q)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aB)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  $thiz.pW = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
}
/** @constructor */
function $c_sc_AbstractMap() {
}
$p = $c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
}
$h_sc_AbstractMap.prototype = $p;
$p.c9 = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.et = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.cK = (function(key) {
  return this.br(key);
});
$p.dU = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
$p.gM = (function(coll) {
  return this.pl().ay(coll);
});
$p.g = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().sn(this);
});
$p.bv = (function() {
  return "Map";
});
$p.h = (function() {
  return $f_sc_Iterable__toString__T(this);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.ei = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.ei = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.u = (function(idx) {
  return this.ei.u(idx);
});
$p.q = (function() {
  return this.ei.q();
});
$p.m = (function() {
  return this.ei.m();
});
$p.y = (function() {
  return this.ei.y();
});
$p.d = (function() {
  return this.ei.d();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  cn: 1,
  b7: 1,
  aA: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  a: 1,
  ak: 1,
  m: 1,
  ba: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.mh = null;
  this.mi = false;
  this.mf = null;
  this.mg = false;
  this.lS = null;
  this.lT = false;
  this.mb = null;
  this.mc = false;
  this.lZ = null;
  this.m0 = false;
  this.m3 = null;
  this.m4 = false;
  this.lU = null;
  this.lV = false;
  this.mp = null;
  this.mq = false;
  this.m7 = null;
  this.m8 = false;
  this.m5 = null;
  this.m6 = false;
  this.m9 = null;
  this.ma = false;
  this.lX = null;
  this.lY = false;
  this.m1 = null;
  this.m2 = false;
  this.md = null;
  this.me = false;
  this.ml = null;
  this.mm = false;
  this.mr = null;
  this.ms = false;
  this.lW = null;
  this.bl = null;
  this.hl = null;
  this.pV = null;
  this.lQ = null;
  this.lR = false;
  this.mj = null;
  this.mk = false;
  this.mn = null;
  this.mo = false;
  this.pW = null;
  $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V(this);
  $f_Lcom_raquo_laminar_api_MountHooks__$init$__V(this);
  $f_Lcom_raquo_laminar_api_AirstreamAliases__$init$__V(this);
  $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V(this);
  $f_Lcom_raquo_laminar_api_Laminar__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$$anon$1() {
}
$h_Lcom_raquo_laminar_api_package$$anon$1.prototype = $p;
$p.th = (function() {
  if ((!this.mi)) {
    this.mh = new $c_Lcom_raquo_laminar_tags_HtmlTag("strong", false);
    this.mi = true;
  }
  return this.mh;
});
$p.pC = (function() {
  if ((!this.mg)) {
    this.mf = new $c_Lcom_raquo_laminar_tags_HtmlTag("span", false);
    this.mg = true;
  }
  return this.mf;
});
$p.hY = (function() {
  if ((!this.lT)) {
    this.lS = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.lT = true;
  }
  return this.lS;
});
$p.gW = (function() {
  if ((!this.mc)) {
    this.mb = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.mc = true;
  }
  return this.mb;
});
$p.cF = (function() {
  if ((!this.m0)) {
    this.lZ = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.m0 = true;
  }
  return this.lZ;
});
$p.so = (function() {
  if ((!this.m4)) {
    this.m3 = new $c_Lcom_raquo_laminar_tags_HtmlTag("mark", false);
    this.m4 = true;
  }
  return this.m3;
});
$p.qZ = (function() {
  if ((!this.lV)) {
    this.lU = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().mt);
    this.lV = true;
  }
  return this.lU;
});
$p.pR = (function() {
  if ((!this.mq)) {
    this.mp = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().hm);
    this.mq = true;
  }
  return this.mp;
});
$p.gR = (function() {
  if ((!this.m8)) {
    this.m7 = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.m8 = true;
  }
  return this.m7;
});
$p.sz = (function() {
  if ((!this.m6)) {
    this.m5 = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.m6 = true;
  }
  return this.m5;
});
$p.kv = (function() {
  if ((!this.ma)) {
    this.m9 = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.ma = true;
  }
  return this.m9;
});
$p.rk = (function() {
  if ((!this.lY)) {
    this.lX = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28("display");
    this.lY = true;
  }
  return this.lX;
});
$p.sj = (function() {
  if ((!this.m2)) {
    this.m1 = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("left");
    this.m2 = true;
  }
  return this.m1;
});
$p.sD = (function() {
  if ((!this.me)) {
    this.md = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43("position");
    this.me = true;
  }
  return this.md;
});
$p.ts = (function() {
  if ((!this.mm)) {
    this.ml = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("top");
    this.mm = true;
  }
  return this.ml;
});
$p.tG = (function() {
  if ((!this.ms)) {
    this.mr = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1("z-index");
    this.ms = true;
  }
  return this.mr;
});
$p.qr = (function() {
  if ((!this.lR)) {
    this.lQ = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.lR = true;
  }
  return this.lQ;
});
$p.tl = (function() {
  if ((!this.mk)) {
    this.mj = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.mk = true;
  }
  return this.mj;
});
$p.tz = (function() {
  if ((!this.mo)) {
    this.mn = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.mo = true;
  }
  return this.mn;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  eF: 1,
  eY: 1,
  eI: 1,
  eN: 1,
  eM: 1,
  eO: 1,
  eK: 1,
  eD: 1,
  ey: 1,
  eC: 1,
  bM: 1,
  bP: 1,
  bL: 1,
  ez: 1
}));
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.af)));
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
}
$p = $c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
}
$h_sc_AbstractIndexedSeqView.prototype = $p;
$p.bj = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.q();
});
$p.bv = (function() {
  return "IndexedSeqView";
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.ei = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.bj = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.q();
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bv = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  hl: 1,
  cn: 1,
  b7: 1,
  aA: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  a: 1,
  ak: 1,
  m: 1,
  ba: 1,
  r: 1,
  cj: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.ju = null;
  this.nU = null;
  this.ju = underlying;
  this.nU = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.u = (function(n) {
  return this.ju.u(n);
});
$p.q = (function() {
  return this.ju.b4;
});
$p.cb = (function() {
  return "ArrayBufferView";
});
$p.m = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.nU);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  iz: 1,
  he: 1,
  b7: 1,
  aA: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  a: 1,
  ak: 1,
  m: 1,
  ba: 1,
  r: 1,
  cj: 1
}));
/** @constructor */
function $c_sci_AbstractMap() {
}
$p = $c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
$p.constructor = $c_sci_AbstractMap;
/** @constructor */
function $h_sci_AbstractMap() {
}
$h_sci_AbstractMap.prototype = $p;
$p.bV = (function() {
  return $m_sci_Iterable$();
});
$p.pl = (function() {
  return $m_sci_Map$();
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ($is_sci_IndexedSeq(that) ? ($thiz.q() === that.q()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.q();
      var equal = (length === o.q());
      if (equal) {
        var index = 0;
        var a = $thiz.hW();
        var b = o.hW();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().n($thiz.u(index), o.u(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.m().e0(index);
          var thatIt = o.m().e0(index);
          while ((equal && thisIt.p())) {
            equal = $m_sr_BoxesRunTime$().n(thisIt.l(), thatIt.l());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.E)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.E)));
}
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ic)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.id)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ie)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ig)));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_sci_Map$EmptyMap$() {
}
$p = $c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
}
$h_sci_Map$EmptyMap$.prototype = $p;
$p.aO = (function() {
  return 0;
});
$p.y = (function() {
  return 0;
});
$p.d = (function() {
  return true;
});
$p.jM = (function(key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
});
$p.br = (function(key) {
  return false;
});
$p.db = (function(key, default$1) {
  return default$1.M();
});
$p.m = (function() {
  return $m_sc_Iterator$().X;
});
$p.c = (function(key) {
  this.jM(key);
});
$p.e5 = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  hY: 1,
  au: 1,
  aq: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  as: 1,
  ar: 1,
  b: 1,
  ae: 1,
  t: 1,
  av: 1,
  af: 1,
  a: 1
}));
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$();
  }
  return $n_sci_Map$EmptyMap$;
}
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.cz = null;
  this.el = null;
  this.cz = key1;
  this.el = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.aO = (function() {
  return 1;
});
$p.y = (function() {
  return 1;
});
$p.d = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.cz)) {
    return this.el;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.br = (function(key) {
  return $m_sr_BoxesRunTime$().n(key, this.cz);
});
$p.db = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.cz) ? this.el : default$1.M());
});
$p.m = (function() {
  return new $c_sc_Iterator$$anon$20($ct_T2__O__O__(new $c_T2(), this.cz, this.el));
});
$p.eE = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.cz) ? new $c_sci_Map$Map1(this.cz, value) : new $c_sci_Map$Map2(this.cz, this.el, key, value));
});
$p.fn = (function(p) {
  return (!(!p.c($ct_T2__O__O__(new $c_T2(), this.cz, this.el))));
});
$p.i = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cr(this.cz, this.el);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dT;
  h = $m_s_util_hashing_MurmurHash3$().w(h, a);
  h = $m_s_util_hashing_MurmurHash3$().w(h, b);
  h = $m_s_util_hashing_MurmurHash3$().co(h, c);
  return $m_s_util_hashing_MurmurHash3$().a6(h, 1);
});
$p.e5 = (function(key, value) {
  return this.eE(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cF)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  cF: 1,
  au: 1,
  aq: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  as: 1,
  ar: 1,
  b: 1,
  ae: 1,
  t: 1,
  av: 1,
  af: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.cd = null;
  this.dA = null;
  this.ce = null;
  this.dB = null;
  this.cd = key1;
  this.dA = value1;
  this.ce = key2;
  this.dB = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.aO = (function() {
  return 2;
});
$p.y = (function() {
  return 2;
});
$p.d = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.cd)) {
    return this.dA;
  } else if ($m_sr_BoxesRunTime$().n(key, this.ce)) {
    return this.dB;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.br = (function(key) {
  return ($m_sr_BoxesRunTime$().n(key, this.cd) || $m_sr_BoxesRunTime$().n(key, this.ce));
});
$p.db = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.cd) ? this.dA : ($m_sr_BoxesRunTime$().n(key, this.ce) ? this.dB : default$1.M()));
});
$p.m = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.eE = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.cd) ? new $c_sci_Map$Map2(this.cd, value, this.ce, this.dB) : ($m_sr_BoxesRunTime$().n(key, this.ce) ? new $c_sci_Map$Map2(this.cd, this.dA, this.ce, value) : new $c_sci_Map$Map3(this.cd, this.dA, this.ce, this.dB, key, value)));
});
$p.fn = (function(p) {
  return ((!(!p.c($ct_T2__O__O__(new $c_T2(), this.cd, this.dA)))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.ce, this.dB)))));
});
$p.i = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cr(this.cd, this.dA);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cr(this.ce, this.dB);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dT;
  h = $m_s_util_hashing_MurmurHash3$().w(h, a);
  h = $m_s_util_hashing_MurmurHash3$().w(h, b);
  h = $m_s_util_hashing_MurmurHash3$().co(h, c);
  return $m_s_util_hashing_MurmurHash3$().a6(h, 2);
});
$p.e5 = (function(key, value) {
  return this.eE(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cG)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  cG: 1,
  au: 1,
  aq: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  as: 1,
  ar: 1,
  b: 1,
  ae: 1,
  t: 1,
  av: 1,
  af: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.c1 = null;
  this.cW = null;
  this.c2 = null;
  this.cX = null;
  this.c3 = null;
  this.cY = null;
  this.c1 = key1;
  this.cW = value1;
  this.c2 = key2;
  this.cX = value2;
  this.c3 = key3;
  this.cY = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.aO = (function() {
  return 3;
});
$p.y = (function() {
  return 3;
});
$p.d = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.c1)) {
    return this.cW;
  } else if ($m_sr_BoxesRunTime$().n(key, this.c2)) {
    return this.cX;
  } else if ($m_sr_BoxesRunTime$().n(key, this.c3)) {
    return this.cY;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.br = (function(key) {
  return (($m_sr_BoxesRunTime$().n(key, this.c1) || $m_sr_BoxesRunTime$().n(key, this.c2)) || $m_sr_BoxesRunTime$().n(key, this.c3));
});
$p.db = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.c1) ? this.cW : ($m_sr_BoxesRunTime$().n(key, this.c2) ? this.cX : ($m_sr_BoxesRunTime$().n(key, this.c3) ? this.cY : default$1.M())));
});
$p.m = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.eE = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.c1) ? new $c_sci_Map$Map3(this.c1, value, this.c2, this.cX, this.c3, this.cY) : ($m_sr_BoxesRunTime$().n(key, this.c2) ? new $c_sci_Map$Map3(this.c1, this.cW, this.c2, value, this.c3, this.cY) : ($m_sr_BoxesRunTime$().n(key, this.c3) ? new $c_sci_Map$Map3(this.c1, this.cW, this.c2, this.cX, this.c3, value) : new $c_sci_Map$Map4(this.c1, this.cW, this.c2, this.cX, this.c3, this.cY, key, value))));
});
$p.fn = (function(p) {
  return (((!(!p.c($ct_T2__O__O__(new $c_T2(), this.c1, this.cW)))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.c2, this.cX))))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.c3, this.cY)))));
});
$p.i = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cr(this.c1, this.cW);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cr(this.c2, this.cX);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cr(this.c3, this.cY);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dT;
  h = $m_s_util_hashing_MurmurHash3$().w(h, a);
  h = $m_s_util_hashing_MurmurHash3$().w(h, b);
  h = $m_s_util_hashing_MurmurHash3$().co(h, c);
  return $m_s_util_hashing_MurmurHash3$().a6(h, 3);
});
$p.e5 = (function(key, value) {
  return this.eE(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cH)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  cH: 1,
  au: 1,
  aq: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  as: 1,
  ar: 1,
  b: 1,
  ae: 1,
  t: 1,
  av: 1,
  af: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bC = null;
  this.cf = null;
  this.bD = null;
  this.cg = null;
  this.bE = null;
  this.ch = null;
  this.bF = null;
  this.ci = null;
  this.bC = key1;
  this.cf = value1;
  this.bD = key2;
  this.cg = value2;
  this.bE = key3;
  this.ch = value3;
  this.bF = key4;
  this.ci = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.aO = (function() {
  return 4;
});
$p.y = (function() {
  return 4;
});
$p.d = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.bC)) {
    return this.cf;
  } else if ($m_sr_BoxesRunTime$().n(key, this.bD)) {
    return this.cg;
  } else if ($m_sr_BoxesRunTime$().n(key, this.bE)) {
    return this.ch;
  } else if ($m_sr_BoxesRunTime$().n(key, this.bF)) {
    return this.ci;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.br = (function(key) {
  return ((($m_sr_BoxesRunTime$().n(key, this.bC) || $m_sr_BoxesRunTime$().n(key, this.bD)) || $m_sr_BoxesRunTime$().n(key, this.bE)) || $m_sr_BoxesRunTime$().n(key, this.bF));
});
$p.db = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.bC) ? this.cf : ($m_sr_BoxesRunTime$().n(key, this.bD) ? this.cg : ($m_sr_BoxesRunTime$().n(key, this.bE) ? this.ch : ($m_sr_BoxesRunTime$().n(key, this.bF) ? this.ci : default$1.M()))));
});
$p.m = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.eE = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.bC) ? new $c_sci_Map$Map4(this.bC, value, this.bD, this.cg, this.bE, this.ch, this.bF, this.ci) : ($m_sr_BoxesRunTime$().n(key, this.bD) ? new $c_sci_Map$Map4(this.bC, this.cf, this.bD, value, this.bE, this.ch, this.bF, this.ci) : ($m_sr_BoxesRunTime$().n(key, this.bE) ? new $c_sci_Map$Map4(this.bC, this.cf, this.bD, this.cg, this.bE, value, this.bF, this.ci) : ($m_sr_BoxesRunTime$().n(key, this.bF) ? new $c_sci_Map$Map4(this.bC, this.cf, this.bD, this.cg, this.bE, this.ch, this.bF, value) : $m_sci_HashMap$().jn.fC(this.bC, this.cf).fC(this.bD, this.cg).fC(this.bE, this.ch).fC(this.bF, this.ci).fC(key, value)))));
});
$p.fn = (function(p) {
  return ((((!(!p.c($ct_T2__O__O__(new $c_T2(), this.bC, this.cf)))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bD, this.cg))))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bE, this.ch))))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bF, this.ci)))));
});
$p.qY = (function(builder) {
  return builder.er(this.bC, this.cf).er(this.bD, this.cg).er(this.bE, this.ch).er(this.bF, this.ci);
});
$p.i = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cr(this.bC, this.cf);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cr(this.bD, this.cg);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cr(this.bE, this.ch);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cr(this.bF, this.ci);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dT;
  h = $m_s_util_hashing_MurmurHash3$().w(h, a);
  h = $m_s_util_hashing_MurmurHash3$().w(h, b);
  h = $m_s_util_hashing_MurmurHash3$().co(h, c);
  return $m_s_util_hashing_MurmurHash3$().a6(h, 4);
});
$p.e5 = (function(key, value) {
  return this.eE(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cI)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  cI: 1,
  au: 1,
  aq: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  as: 1,
  ar: 1,
  b: 1,
  ae: 1,
  t: 1,
  av: 1,
  af: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hL)));
}
/** @constructor */
function $c_scm_AbstractSet() {
}
$p = $c_scm_AbstractSet.prototype = new $h_sc_AbstractSet();
$p.constructor = $c_scm_AbstractSet;
/** @constructor */
function $h_scm_AbstractSet() {
}
$h_scm_AbstractSet.prototype = $p;
$p.b5 = (function() {
  return this;
});
function $ct_sci_LazyList__O__($thiz, lazyState) {
  $thiz.bg = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : $m_sci_LazyList$Uninitialized$());
  $thiz.cy = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : lazyState);
  return $thiz;
}
function $ct_sci_LazyList__O__sci_LazyList__($thiz, head, tail) {
  $ct_sci_LazyList__O__($thiz, $m_sci_LazyList$EmptyMarker$());
  $thiz.bg = head;
  $thiz.cy = tail;
  return $thiz;
}
function $p_sci_LazyList__initState__V($thiz) {
  if (($thiz.bg === $m_sci_LazyList$Uninitialized$())) {
    if (($thiz.cy === $m_sci_LazyList$MidEvaluation$())) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    var fun = $thiz.cy;
    $thiz.cy = $m_sci_LazyList$MidEvaluation$();
    try {
      var l = $p_sci_LazyList__evaluated__sci_LazyList(fun.M());
    } finally {
      $thiz.cy = fun;
    }
    $thiz.cy = l.cy;
    $thiz.bg = l.bg;
  }
}
function $p_sci_LazyList__evaluated__sci_LazyList($thiz) {
  while (true) {
    if (($thiz.bg !== $m_sci_LazyList$Uninitialized$())) {
      return (($thiz.cy === null) ? $m_sci_LazyList$().aa : $thiz);
    } else {
      $p_sci_LazyList__initState__V($thiz);
    }
  }
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.r = (("" + b.r) + start);
  if (($thiz.bg === $m_sci_LazyList$Uninitialized$())) {
    b.r = (b.r + "<not computed>");
  } else if (($p_sci_LazyList__evaluated__sci_LazyList($thiz) !== $m_sci_LazyList$().aa)) {
    var obj = $thiz.D();
    b.r = (("" + b.r) + obj);
    var cursor = $thiz;
    var scout = $thiz.bd();
    if ((cursor !== scout)) {
      cursor = scout;
      var this$1 = scout;
      if (((this$1.bg !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$1) !== $m_sci_LazyList$().aa))) {
        scout = scout.bd();
        while (true) {
          if ((cursor !== scout)) {
            var this$2 = scout;
            var $x_1 = ((this$2.bg !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$2) !== $m_sci_LazyList$().aa));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var c = cursor;
            b.r = (("" + b.r) + sep);
            var obj$1 = c.D();
            b.r = (("" + b.r) + obj$1);
            cursor = cursor.bd();
            scout = scout.bd();
            var this$3 = scout;
            if (((this$3.bg !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$3) !== $m_sci_LazyList$().aa))) {
              scout = scout.bd();
            }
          } else {
            break;
          }
        }
      }
    }
    var this$4 = scout;
    if ((!((this$4.bg !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$4) !== $m_sci_LazyList$().aa)))) {
      while ((cursor !== scout)) {
        var c$1 = cursor;
        b.r = (("" + b.r) + sep);
        var obj$2 = c$1.D();
        b.r = (("" + b.r) + obj$2);
        cursor = cursor.bd();
      }
      if ((!(cursor.bg !== $m_sci_LazyList$Uninitialized$()))) {
        b.r = (("" + b.r) + sep);
        b.r = (b.r + "<not computed>");
      }
    } else {
      if ((cursor !== $thiz)) {
        var runner = $thiz;
        while ((runner !== scout)) {
          runner = runner.bd();
          scout = scout.bd();
        }
        while (true) {
          var ct = cursor.bd();
          if ((ct !== scout)) {
            var c$2 = cursor;
            b.r = (("" + b.r) + sep);
            var obj$3 = c$2.D();
            b.r = (("" + b.r) + obj$3);
          }
          cursor = ct;
          if ((cursor !== scout)) {
          } else {
            break;
          }
        }
      }
      b.r = (("" + b.r) + sep);
      b.r = (b.r + "<cycle>");
    }
  }
  b.r = (("" + b.r) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList() {
  this.bg = null;
  this.cy = null;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.q = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.bj = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.kk = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.u = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fy = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bv = (function() {
  return "LinearSeq";
});
$p.d = (function() {
  return ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aa);
});
$p.y = (function() {
  return (((this.bg !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aa)) ? 0 : (-1));
});
$p.D = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aa)) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list");
  } else {
    return this.bg;
  }
});
$p.bd = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aa)) {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty lazy list");
  } else {
    return this.cy;
  }
});
$p.rG = (function() {
  var these = this;
  var those = this;
  if ((!($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().aa))) {
    these = these.bd();
  }
  while ((those !== these)) {
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().aa)) {
      return this;
    }
    these = these.bd();
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().aa)) {
      return this;
    }
    these = these.bd();
    if ((these === those)) {
      return this;
    }
    those = those.bd();
  }
  return this;
});
$p.m = (function() {
  return (((this.bg !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aa)) ? $m_sc_Iterator$().X : new $c_sci_LazyList$LazyIterator(this));
});
$p.bc = (function(f) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if ((!($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal1) === $m_sci_LazyList$().aa))) {
      f.c(\u03b4this$tailLocal1.D());
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.bd();
    } else {
      return (void 0);
    }
  }
});
$p.cb = (function() {
  return "LazyList";
});
$p.rp = (function(n) {
  return ((n <= 0) ? this : (((this.bg !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aa)) ? $m_sci_LazyList$().aa : $m_sci_LazyList$().t5(this, n)));
});
$p.dU = (function(sb, start, sep, end) {
  this.rG();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.aF, start, sep, end);
  return sb;
});
$p.h = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").r;
});
$p.bV = (function() {
  return $m_sci_LazyList$();
});
$p.v = (function() {
  return this.bd();
});
$p.oR = (function(n) {
  return this.rp(n);
});
$p.cK = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.c = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cE)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  cE: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  b8: 1,
  aB: 1,
  bd: 1,
  bc: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iv)));
}
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.hN = null;
  this.hN = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cE = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.hZ = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fy = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.hW = (function() {
  return $m_sci_IndexedSeqDefaults$().nL;
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bj = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.q();
});
$p.g = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().pB(this);
});
$p.h = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.d = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.c9 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.gP = (function() {
  return $m_sjsr_WrappedVarArgs$().b1();
});
$p.bc = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.bT = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.dU = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.dd = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.q = (function() {
  return (this.hN.length | 0);
});
$p.u = (function(idx) {
  return this.hN[idx];
});
$p.cb = (function() {
  return "WrappedVarArgs";
});
$p.gL = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().kb(coll);
});
$p.cK = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.c = (function(v1) {
  return this.u((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.da)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  da: 1,
  E: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  t: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  F: 1,
  l: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.bn = null;
  this.bn = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.pl = (function() {
  return $m_sci_HashMap$();
});
$p.y = (function() {
  return this.bn.aQ;
});
$p.aO = (function() {
  return this.bn.aQ;
});
$p.d = (function() {
  return (this.bn.aQ === 0);
});
$p.m = (function() {
  return (this.d() ? $m_sc_Iterator$().X : new $c_sci_MapKeyValueTupleIterator(this.bn));
});
$p.br = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var keyHash = $m_sc_Hashing$().cm(keyUnimprovedHash);
  return this.bn.jV(key, keyUnimprovedHash, keyHash, 0);
});
$p.c = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var keyHash = $m_sc_Hashing$().cm(keyUnimprovedHash);
  return this.bn.jK(key, keyUnimprovedHash, keyHash, 0);
});
$p.db = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var keyHash = $m_sc_Hashing$().cm(keyUnimprovedHash);
  return this.bn.ke(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fC = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var newRootNode = this.bn.pO(key, value, keyUnimprovedHash, $m_sc_Hashing$().cm(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bn) ? this : new $c_sci_HashMap(newRootNode));
});
$p.et = (function(f) {
  this.bn.et(f);
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bn;
      var x$2 = that.bn;
      return ((x === null) ? (x$2 === null) : x.g(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.i = (function() {
  if (this.d()) {
    return $m_s_util_hashing_MurmurHash3$().jF;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bn);
    return $m_s_util_hashing_MurmurHash3$().kF(hashIterator, $m_s_util_hashing_MurmurHash3$().dT);
  }
});
$p.cb = (function() {
  return "HashMap";
});
$p.e5 = (function(key, value) {
  return this.fC(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cD)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  cD: 1,
  au: 1,
  aq: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  as: 1,
  ar: 1,
  b: 1,
  ae: 1,
  t: 1,
  av: 1,
  af: 1,
  l: 1,
  hz: 1,
  ih: 1,
  a: 1,
  a3: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ii)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.it)));
}
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
$p.aZ = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.jy = loadFactor;
  $thiz.aW = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.jz = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.aW.a.length);
  $thiz.dO = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
function $p_scm_HashSet__improveHash__I__I($thiz, originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
}
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (($thiz.aW.a.length - 1) | 0));
  matchResult4: {
    var x10 = $thiz.aW.a[idx];
    if ((x10 === null)) {
      $thiz.aW.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
      break matchResult4;
    }
    var prev = null;
    var n = x10;
    while (((n !== null) && (n.d5 <= hash))) {
      if (((n.d5 === hash) && $m_sr_BoxesRunTime$().n(elem, n.fe))) {
        return false;
      }
      prev = n;
      n = n.aX;
    }
    if ((prev === null)) {
      $thiz.aW.a[idx] = new $c_scm_HashSet$Node(elem, hash, x10);
    } else {
      var this$3 = prev;
      var n$1 = new $c_scm_HashSet$Node(elem, hash, prev.aX);
      this$3.aX = n$1;
    }
  }
  $thiz.dO = ((1 + $thiz.dO) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.aW.a.length;
  $thiz.jz = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.dO === 0)) {
    $thiz.aW = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.aW = $m_ju_Arrays$().V($thiz.aW, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.aW.a[i];
        if ((old !== null)) {
          preLow.aX = null;
          preHigh.aX = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.aX;
            if (((n.d5 & oldlen) === 0)) {
              var this$2 = lastLow;
              var n$1 = n;
              this$2.aX = n$1;
              lastLow = n;
            } else {
              var this$3 = lastHigh;
              var n$2 = n;
              this$3.aX = n$2;
              lastHigh = n;
            }
            n = next;
          }
          var this$4 = lastLow;
          this$4.aX = null;
          if ((old !== preLow.aX)) {
            $thiz.aW.a[i] = preLow.aX;
          }
          if ((preHigh.aX !== null)) {
            $thiz.aW.a[((i + oldlen) | 0)] = preHigh.aX;
            var this$5 = lastHigh;
            this$5.aX = null;
          }
        }
        i = ((1 + i) | 0);
      }
      oldlen = (oldlen << 1);
    }
  }
}
function $p_scm_HashSet__tableSizeFor__I__I($thiz, capacity) {
  var x = ((capacity - 1) | 0);
  var i = ((x > 4) ? x : 4);
  var x$1 = ((((-2147483648) >> Math.clz32(i)) & i) << 1);
  return ((x$1 < 1073741824) ? x$1 : 1073741824);
}
function $p_scm_HashSet__newThreshold__I__I($thiz, size) {
  return $doubleToInt((size * $thiz.jy));
}
/** @constructor */
function $c_scm_HashSet() {
  this.jy = 0.0;
  this.aW = null;
  this.jz = 0;
  this.dO = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.aO = (function() {
  return this.dO;
});
$p.br = (function(elem) {
  var hash = $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().L(elem));
  matchResult1: {
    var $x_1;
    var x1 = this.aW.a[(hash & ((this.aW.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.rC(elem, hash);
  }
  return ($x_1 !== null);
});
$p.b6 = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jy)));
  if ((target > this.aW.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.hS = (function(elem) {
  if ((((1 + this.dO) | 0) >= this.jz)) {
    $p_scm_HashSet__growTable__I__V(this, (this.aW.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().L(elem)));
});
$p.oy = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, v1$2, $p_scm_HashSet__improveHash__I__I(this, (v2$2 | 0)));
    }));
    xs.tI.tN(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.p()) {
      var next = iter.l();
      $p_scm_HashSet__addElem__O__I__Z(this, next.fe, next.d5);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.rt();
    while (iter$2.p()) {
      var next$2 = iter$2.l();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.pj(), next$2.pb());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.m = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.bV = (function() {
  return $m_scm_HashSet$();
});
$p.y = (function() {
  return this.dO;
});
$p.d = (function() {
  return (this.dO === 0);
});
$p.cb = (function() {
  return "HashSet";
});
$p.i = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.p()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().kF(hashIterator, $m_s_util_hashing_MurmurHash3$().op);
});
$p.aZ = (function(elems) {
  return this.oy(elems);
});
$p.b0 = (function(elem) {
  this.hS(elem);
  return this;
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cV)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  cV: 1,
  iw: 1,
  hf: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  hx: 1,
  b: 1,
  bb: 1,
  O: 1,
  G: 1,
  M: 1,
  L: 1,
  N: 1,
  S: 1,
  aP: 1,
  iW: 1,
  iV: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hW)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iR)));
}
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.bj = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.q();
});
$p.bv = (function() {
  return "IndexedSeq";
});
$p.hZ = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fy = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.cE = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.gM = (function(coll) {
  return $m_sci_ArraySeq$().k8(coll, this.a5());
});
$p.gP = (function() {
  return $m_sci_ArraySeq$().i7(this.a5());
});
$p.dd = (function() {
  return $m_sci_ArraySeq$().jl;
});
$p.cb = (function() {
  return "ArraySeq";
});
$p.bT = (function(xs, start, len) {
  var srcLen = this.q();
  var destLen = $m_jl_reflect_Array$().bs(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gI(this.cM(), 0, xs, start, copied);
  }
  return copied;
});
$p.hW = (function() {
  return 2147483647;
});
$p.bV = (function() {
  return $m_sci_ArraySeq$().jl;
});
$p.gL = (function(coll) {
  return $m_sci_ArraySeq$().k8(coll, this.a5());
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.f = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.f = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.bj = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.q();
});
$p.bv = (function() {
  return "IndexedSeq";
});
$p.hZ = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fy = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.cE = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.dd = (function() {
  return $m_sci_Vector$();
});
$p.q = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.k : this.f.a.length);
});
$p.m = (function() {
  return ((this === $m_sci_Vector0$()) ? $m_sci_Vector$().nR : new $c_sci_NewVectorIterator(this, this.q(), this.cO()));
});
$p.cb = (function() {
  return "Vector";
});
$p.bT = (function(xs, start, len) {
  return this.m().bT(xs, start, len);
});
$p.hW = (function() {
  return $m_sci_Vector$().nQ;
});
$p.aG = (function(index) {
  return $m_scg_CommonErrors$().ki(index, ((this.q() - 1) | 0));
});
$p.bc = (function(f) {
  var c = this.cO();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = (((c + ((c >>> 31) | 0)) | 0) >> 1);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.k6(((((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0) - 1) | 0), this.cN(i), f);
    i = ((1 + i) | 0);
  }
});
$p.bV = (function() {
  return $m_sci_Vector$();
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.bj = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.q();
});
$p.bv = (function() {
  return "IndexedSeq";
});
$p.cE = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.dd = (function() {
  return $m_scm_ArraySeq$().jx;
});
$p.p8 = (function(coll) {
  var evidence$1 = this.a5();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aN();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.y();
  var it = coll.m();
  while (it.p()) {
    var elem = it.l();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h1(elementClass) : elem));
    jsElems.push(unboxedElem);
  }
  return $m_scm_ArraySeq$().ko($m_scm_ArrayBuilder$().h0(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems));
});
$p.gP = (function() {
  return $m_scm_ArraySeq$().i7(this.a5());
});
$p.cb = (function() {
  return "ArraySeq";
});
$p.bT = (function(xs, start, len) {
  var srcLen = this.q();
  var destLen = $m_jl_reflect_Array$().bs(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gI(this.ca(), 0, xs, start, copied);
  }
  return copied;
});
$p.g = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().bs(this.ca()) !== $m_jl_reflect_Array$().bs(other.ca()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.bV = (function() {
  return $m_scm_ArraySeq$().jx;
});
$p.gM = (function(coll) {
  return this.p8(coll);
});
$p.gL = (function(coll) {
  return this.p8(coll);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.dr = null;
  this.dr = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.q = (function() {
  return this.dr.a.length;
});
$p.gE = (function(i) {
  return this.dr.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dr, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().oY(this.dr, that.dr) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dr);
});
$p.cM = (function() {
  return this.dr;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.u = (function(i) {
  return this.gE(i);
});
$p.c = (function(v1) {
  return this.gE((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  cq: 1,
  a4: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a8: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.ds = null;
  this.ds = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.q = (function() {
  return this.ds.a.length;
});
$p.gw = (function(i) {
  return this.ds.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.ds, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().oU(this.ds, that.ds) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ds);
});
$p.cM = (function() {
  return this.ds;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.u = (function(i) {
  return this.gw(i);
});
$p.c = (function(v1) {
  return this.gw((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cr)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  cr: 1,
  a4: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a8: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.cU = null;
  this.cU = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.q = (function() {
  return this.cU.a.length;
});
$p.gx = (function(i) {
  return this.cU.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.cU, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().oV(this.cU, that.cU) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cU);
});
$p.dU = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.cU).dU(sb, start, sep, end);
});
$p.cM = (function() {
  return this.cU;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.u = (function(i) {
  return $bC(this.gx(i));
});
$p.c = (function(v1) {
  return $bC(this.gx((v1 | 0)));
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  cs: 1,
  a4: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a8: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.dt = null;
  this.dt = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.q = (function() {
  return this.dt.a.length;
});
$p.gy = (function(i) {
  return this.dt.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dt, this$1.aj);
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofDouble)) {
    var array = this.dt;
    var thatArray = that.dt;
    if ((array === thatArray)) {
      return true;
    } else if ((array.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < array.a.length) && (array.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= array.a.length);
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dt);
});
$p.cM = (function() {
  return this.dt;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.u = (function(i) {
  return this.gy(i);
});
$p.c = (function(v1) {
  return this.gy((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ct)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  ct: 1,
  a4: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a8: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.du = null;
  this.du = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.q = (function() {
  return this.du.a.length;
});
$p.gz = (function(i) {
  return this.du.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.du, this$1.aj);
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofFloat)) {
    var array = this.du;
    var thatArray = that.du;
    if ((array === thatArray)) {
      return true;
    } else if ((array.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < array.a.length) && (array.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= array.a.length);
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.du);
});
$p.cM = (function() {
  return this.du;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.u = (function(i) {
  return this.gz(i);
});
$p.c = (function(v1) {
  return this.gz((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  cu: 1,
  a4: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a8: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.dv = null;
  this.dv = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.q = (function() {
  return this.dv.a.length;
});
$p.gA = (function(i) {
  return this.dv.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dv, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().k1(this.dv, that.dv) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dv);
});
$p.cM = (function() {
  return this.dv;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.u = (function(i) {
  return this.gA(i);
});
$p.c = (function(v1) {
  return this.gA((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cv)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  cv: 1,
  a4: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a8: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.dw = null;
  this.dw = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.q = (function() {
  return ((this.dw.a.length >>> 1) | 0);
});
$p.gB = (function(i) {
  var $x_1 = this.dw.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dw, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().oW(this.dw, that.dw) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dw);
});
$p.cM = (function() {
  return this.dw;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.u = (function(i) {
  return this.gB(i);
});
$p.c = (function(v1) {
  return this.gB((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cw)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  cw: 1,
  a4: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a8: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.cw = null;
  this.cw = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.a5 = (function() {
  return $m_s_reflect_ClassTag$().oF($objectGetClass(this.cw).ao.Q());
});
$p.q = (function() {
  return this.cw.a.length;
});
$p.u = (function(i) {
  return this.cw.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.cw, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().oZ(this.cw, that.cw) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cw);
});
$p.cM = (function() {
  return this.cw;
});
$p.c = (function(v1) {
  return this.u((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cx)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  cx: 1,
  a4: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a8: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.dx = null;
  this.dx = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.q = (function() {
  return this.dx.a.length;
});
$p.gC = (function(i) {
  return this.dx.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dx, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().oX(this.dx, that.dx) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dx);
});
$p.cM = (function() {
  return this.dx;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.u = (function(i) {
  return this.gC(i);
});
$p.c = (function(v1) {
  return this.gC((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cy)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  cy: 1,
  a4: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a8: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.ej = null;
  this.ej = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.q = (function() {
  return this.ej.a.length;
});
$p.gD = (function(i) {
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.ej, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.ej.a.length === that.ej.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ej);
});
$p.cM = (function() {
  return this.ej;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.u = (function(i) {
  this.gD(i);
});
$p.c = (function(v1) {
  this.gD((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cz)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  cz: 1,
  a4: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a8: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return (xs$tailLocal1.d() ? 0 : 1);
    } else if (xs$tailLocal1.d()) {
      return (-1);
    } else {
      var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
      var xs$tailLocal1$tmp1 = xs$tailLocal1.v();
      i$tailLocal1 = i$tailLocal1$tmp1;
      xs$tailLocal1 = xs$tailLocal1$tmp1;
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.d();
      var bEmpty = b$tailLocal1.d();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().n(a$tailLocal1.D(), b$tailLocal1.D()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.v();
        var b$tailLocal1$tmp1 = b$tailLocal1.v();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (aEmpty && bEmpty);
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.kk = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.u = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fy = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bv = (function() {
  return "LinearSeq";
});
$p.m = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.cE = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.dd = (function() {
  return $m_sci_List$();
});
$p.oq = (function(prefix) {
  if (this.d()) {
    return prefix;
  } else if (prefix.d()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.D(), this);
    var curr = result;
    var that = prefix.v();
    while ((!that.d())) {
      var temp = new $c_sci_$colon$colon(that.D(), this);
      curr.aA = temp;
      curr = temp;
      that = that.v();
    }
    return result;
  }
});
$p.d = (function() {
  return (this === $m_sci_Nil$());
});
$p.ky = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.oq(prefix);
  }
  if ((prefix.y() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.d()) {
      return prefix.pI();
    }
  }
  var iter = prefix.m();
  if (iter.p()) {
    var result = new $c_sci_$colon$colon(iter.l(), this);
    var curr = result;
    while (iter.p()) {
      var temp = new $c_sci_$colon$colon(iter.l(), this);
      curr.aA = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.oD = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.oq(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.bc = (function(f) {
  var these = this;
  while ((!these.d())) {
    f.c(these.D());
    these = these.v();
  }
});
$p.q = (function() {
  var these = this;
  var len = 0;
  while ((!these.d())) {
    len = ((1 + len) | 0);
    these = these.v();
  }
  return len;
});
$p.bj = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.br = (function(elem) {
  var these = this;
  while ((!these.d())) {
    if ($m_sr_BoxesRunTime$().n(these.D(), elem)) {
      return true;
    }
    these = these.v();
  }
  return false;
});
$p.cb = (function() {
  return "List";
});
$p.g = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.bV = (function() {
  return $m_sci_List$();
});
$p.oR = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.cK = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.c = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.be)));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.f = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.dI = null;
  this.dI = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.q = (function() {
  return this.dI.a.length;
});
$p.gE = (function(index) {
  return this.dI.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dI, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().oY(this.dI, that.dI) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dI);
});
$p.ca = (function() {
  return this.dI;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.u = (function(i) {
  return this.gE(i);
});
$p.c = (function(v1) {
  return this.gE((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cL)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  cL: 1,
  a5: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  r: 1,
  q: 1,
  a0: 1,
  Z: 1,
  l: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.dJ = null;
  this.dJ = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.q = (function() {
  return this.dJ.a.length;
});
$p.gw = (function(index) {
  return this.dJ.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dJ, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().oU(this.dJ, that.dJ) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dJ);
});
$p.ca = (function() {
  return this.dJ;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.u = (function(i) {
  return this.gw(i);
});
$p.c = (function(v1) {
  return this.gw((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cM)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  cM: 1,
  a5: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  r: 1,
  q: 1,
  a0: 1,
  Z: 1,
  l: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.bS = null;
  this.bS = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.q = (function() {
  return this.bS.a.length;
});
$p.gx = (function(index) {
  return this.bS.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.bS, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().oV(this.bS, that.bS) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bS);
});
$p.dU = (function(sb, start, sep, end) {
  var jsb = sb.aF;
  if ((start.length !== 0)) {
    jsb.r = (("" + jsb.r) + start);
  }
  var len = this.bS.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.oB(this.bS);
    } else {
      jsb.q();
      var c = this.bS.a[0];
      var str = ("" + $cToS(c));
      jsb.r = (jsb.r + str);
      var i = 1;
      while ((i < len)) {
        jsb.r = (("" + jsb.r) + sep);
        var c$1 = this.bS.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.r = (jsb.r + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.r = (("" + jsb.r) + end);
  }
  return sb;
});
$p.ca = (function() {
  return this.bS;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.u = (function(i) {
  return $bC(this.gx(i));
});
$p.c = (function(v1) {
  return $bC(this.gx((v1 | 0)));
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cN)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  cN: 1,
  a5: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  r: 1,
  q: 1,
  a0: 1,
  Z: 1,
  l: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.c4 = null;
  this.c4 = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.q = (function() {
  return this.c4.a.length;
});
$p.gy = (function(index) {
  return this.c4.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.c4, this$1.aj);
});
$p.g = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
    var thatArray = that.c4;
    if ((this.c4 === thatArray)) {
      return true;
    } else if ((this.c4.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < this.c4.a.length) && (this.c4.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.c4.a.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.g.call(this, that);
  }
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.c4);
});
$p.ca = (function() {
  return this.c4;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.u = (function(i) {
  return this.gy(i);
});
$p.c = (function(v1) {
  return this.gy((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cO)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  cO: 1,
  a5: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  r: 1,
  q: 1,
  a0: 1,
  Z: 1,
  l: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.c5 = null;
  this.c5 = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.q = (function() {
  return this.c5.a.length;
});
$p.gz = (function(index) {
  return this.c5.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.c5, this$1.aj);
});
$p.g = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
    var thatArray = that.c5;
    if ((this.c5 === thatArray)) {
      return true;
    } else if ((this.c5.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < this.c5.a.length) && (this.c5.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.c5.a.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.g.call(this, that);
  }
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.c5);
});
$p.ca = (function() {
  return this.c5;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.u = (function(i) {
  return this.gz(i);
});
$p.c = (function(v1) {
  return this.gz((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cP)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  cP: 1,
  a5: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  r: 1,
  q: 1,
  a0: 1,
  Z: 1,
  l: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.dK = null;
  this.dK = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.q = (function() {
  return this.dK.a.length;
});
$p.gA = (function(index) {
  return this.dK.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dK, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().k1(this.dK, that.dK) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dK);
});
$p.ca = (function() {
  return this.dK;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.u = (function(i) {
  return this.gA(i);
});
$p.c = (function(v1) {
  return this.gA((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cQ)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  cQ: 1,
  a5: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  r: 1,
  q: 1,
  a0: 1,
  Z: 1,
  l: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.dL = null;
  this.dL = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.q = (function() {
  return ((this.dL.a.length >>> 1) | 0);
});
$p.gB = (function(index) {
  var $x_1 = this.dL.a;
  var $x_2 = (index << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dL, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().oW(this.dL, that.dL) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dL);
});
$p.ca = (function() {
  return this.dL;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.u = (function(i) {
  return this.gB(i);
});
$p.c = (function(v1) {
  return this.gB((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cR)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  cR: 1,
  a5: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  r: 1,
  q: 1,
  a0: 1,
  Z: 1,
  l: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.d3 = null;
  this.d3 = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.a5 = (function() {
  return $m_s_reflect_ClassTag$().oF($objectGetClass(this.d3).ao.Q());
});
$p.q = (function() {
  return this.d3.a.length;
});
$p.u = (function(index) {
  return this.d3.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.d3, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().oZ(this.d3, that.d3) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.d3);
});
$p.ca = (function() {
  return this.d3;
});
$p.c = (function(v1) {
  return this.u((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cS)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  cS: 1,
  a5: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  r: 1,
  q: 1,
  a0: 1,
  Z: 1,
  l: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.dM = null;
  this.dM = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.q = (function() {
  return this.dM.a.length;
});
$p.gC = (function(index) {
  return this.dM.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dM, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().oX(this.dM, that.dM) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dM);
});
$p.ca = (function() {
  return this.dM;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.u = (function(i) {
  return this.gC(i);
});
$p.c = (function(v1) {
  return this.gC((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cT)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  cT: 1,
  a5: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  r: 1,
  q: 1,
  a0: 1,
  Z: 1,
  l: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.ep = null;
  this.ep = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.q = (function() {
  return this.ep.a.length;
});
$p.gD = (function(index) {
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.ep, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.ep.a.length === that.ep.a.length) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ep);
});
$p.ca = (function() {
  return this.ep;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.u = (function(i) {
  this.gD(i);
});
$p.c = (function(v1) {
  this.gD((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cU)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  cU: 1,
  a5: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  r: 1,
  q: 1,
  a0: 1,
  Z: 1,
  l: 1,
  s: 1,
  a: 1
}));
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iH)));
}
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.j = suffix1;
  $thiz.k = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.f = null;
  this.j = null;
  this.k = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.f = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.u = (function(index) {
  if (((index >= 0) && (index < this.f.a.length))) {
    return this.f.a[index];
  } else {
    throw this.aG(index);
  }
});
$p.e4 = (function(index, elem) {
  if (((index >= 0) && (index < this.f.a.length))) {
    var a1 = this.f;
    var a1c = a1.e();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.aG(index);
  }
});
$p.dV = (function(elem) {
  if ((this.f.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().fk(this.f, elem));
  } else {
    var $x_2 = this.f;
    var $x_1 = $m_sci_VectorStatics$().bq;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.cO = (function() {
  return 1;
});
$p.cN = (function(idx) {
  return this.f;
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f.a.length))) {
    return this.f.a[index];
  } else {
    throw this.aG(index);
  }
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  il: 1,
  am: 1,
  ag: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.jk = null;
  this.aA = null;
  this.jk = head;
  this.aA = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 2;
});
$p.B = (function() {
  return "::";
});
$p.A = (function(n) {
  if ((n === 0)) {
    return this.jk;
  }
  if ((n === 1)) {
    return this.aA;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.D = (function() {
  return this.jk;
});
$p.v = (function() {
  return this.aA;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  hF: 1,
  be: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  b8: 1,
  aB: 1,
  bd: 1,
  bc: 1,
  l: 1,
  s: 1,
  cp: 1,
  F: 1,
  a: 1,
  a3: 1,
  g: 1
}));
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.W = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 0;
});
$p.B = (function() {
  return "Nil";
});
$p.A = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.rZ = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list");
});
$p.to = (function() {
  throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty list");
});
$p.y = (function() {
  return 0;
});
$p.m = (function() {
  return $m_sc_Iterator$().X;
});
$p.D = (function() {
  this.rZ();
});
$p.v = (function() {
  this.to();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  ia: 1,
  be: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  b8: 1,
  aB: 1,
  bd: 1,
  bc: 1,
  l: 1,
  s: 1,
  cp: 1,
  F: 1,
  a: 1,
  a3: 1,
  g: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
/** @constructor */
function $c_sci_Vector0$() {
  this.f = null;
  this.j = null;
  this.k = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().js, $m_sci_VectorStatics$().js, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.oE = (function(index) {
  throw this.aG(index);
});
$p.e4 = (function(index, elem) {
  throw this.aG(index);
});
$p.dV = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.cO = (function() {
  return 0;
});
$p.cN = (function(idx) {
  return null;
});
$p.g = (function(o) {
  return ((this === o) || ((o instanceof $c_sci_Vector) ? false : $f_sc_Seq__equals__O__Z(this, o)));
});
$p.aG = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.u = (function(i) {
  this.oE(i);
});
$p.c = (function(v1) {
  this.oE((v1 | 0));
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  ik: 1,
  al: 1,
  am: 1,
  ag: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$();
  }
  return $n_sci_Vector0$;
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.f = null;
  this.j = null;
  this.k = 0;
  this.bR = 0;
  this.bp = null;
  this.bR = len1;
  this.bp = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.u = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.bR) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bp.a.length) ? this.bp.a[i2].a[i1] : this.j.a[(31 & io)]);
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
$p.e4 = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.bR)) {
      var io = ((index - this.bR) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.bp.a.length)) {
        var a2 = this.bp;
        var a2c = a2.e();
        var a1 = a2c.a[i2];
        var a1c = a1.e();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.f, this.bR, a2c, this.j, this.k);
      } else {
        var a1$1 = this.j;
        var a1c$1 = a1$1.e();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.f, this.bR, this.bp, a1c$1, this.k);
      }
    } else {
      var a1$2 = this.f;
      var a1c$2 = a1$2.e();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bR, this.bp, this.j, this.k);
    }
  } else {
    throw this.aG(index);
  }
});
$p.dV = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$3 = $m_sci_VectorStatics$().fk(this.j, elem);
    var length0$3 = ((1 + this.k) | 0);
    return new $c_sci_Vector2(this.f, this.bR, this.bp, suffix1$3, length0$3);
  } else if ((this.bp.a.length < 30)) {
    var data2$4 = $m_sci_VectorStatics$().E(this.bp, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$4 = ((1 + this.k) | 0);
    return new $c_sci_Vector2(this.f, this.bR, data2$4, a, length0$4);
  } else {
    var $x_5 = this.f;
    var $x_4 = this.bR;
    var $x_3 = this.bp;
    var $x_2 = this.bR;
    var $x_1 = $m_sci_VectorStatics$().cB;
    var x = this.j;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.k) | 0));
  }
});
$p.cO = (function() {
  return 3;
});
$p.cN = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.bp;
      break;
    }
    case 2: {
      return this.j;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.bR) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bp.a.length) ? this.bp.a[i2].a[i1] : this.j.a[(31 & io)]);
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  im: 1,
  al: 1,
  am: 1,
  ag: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.j = null;
  this.k = 0;
  this.bh = 0;
  this.bH = null;
  this.bi = 0;
  this.b2 = null;
  this.b3 = null;
  this.bh = len1;
  this.bH = prefix2;
  this.bi = len12;
  this.b2 = data3;
  this.b3 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.u = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.bi) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.b2.a.length) ? this.b2.a[i3].a[i2].a[i1] : ((i2 < this.b3.a.length) ? this.b3.a[i2].a[i1] : this.j.a[i1]));
    } else if ((index >= this.bh)) {
      var io$2 = ((index - this.bh) | 0);
      return this.bH.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
$p.e4 = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.bi)) {
      var io = ((index - this.bi) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.b2.a.length)) {
        var a3 = this.b2;
        var a3c = a3.e();
        var a2 = a3c.a[i3];
        var a2c = a2.e();
        var a1 = a2c.a[i2];
        var a1c = a1.e();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.f, this.bh, this.bH, this.bi, a3c, this.b3, this.j, this.k);
      } else if ((i2 < this.b3.a.length)) {
        var a2$1 = this.b3;
        var a2c$1 = a2$1.e();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.e();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.f, this.bh, this.bH, this.bi, this.b2, a2c$1, this.j, this.k);
      } else {
        var a1$2 = this.j;
        var a1c$2 = a1$2.e();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.f, this.bh, this.bH, this.bi, this.b2, this.b3, a1c$2, this.k);
      }
    } else if ((index >= this.bh)) {
      var io$2 = ((index - this.bh) | 0);
      var a2$2 = this.bH;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.e();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.e();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.f, this.bh, a2c$2, this.bi, this.b2, this.b3, this.j, this.k);
    } else {
      var a1$4 = this.f;
      var a1c$4 = a1$4.e();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bh, this.bH, this.bi, this.b2, this.b3, this.j, this.k);
    }
  } else {
    throw this.aG(index);
  }
});
$p.dV = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$16 = $m_sci_VectorStatics$().fk(this.j, elem);
    var length0$16 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(this.f, this.bh, this.bH, this.bi, this.b2, this.b3, suffix1$16, length0$16);
  } else if ((this.b3.a.length < 31)) {
    var suffix2$6 = $m_sci_VectorStatics$().E(this.b3, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$17 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(this.f, this.bh, this.bH, this.bi, this.b2, suffix2$6, a, length0$17);
  } else if ((this.b2.a.length < 30)) {
    var data3$7 = $m_sci_VectorStatics$().E(this.b2, $m_sci_VectorStatics$().E(this.b3, this.j));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$18 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(this.f, this.bh, this.bH, this.bi, data3$7, $m_sci_VectorStatics$().bq, a$1, length0$18);
  } else {
    var $x_8 = this.f;
    var $x_7 = this.bh;
    var $x_6 = this.bH;
    var $x_5 = this.bi;
    var $x_4 = this.b2;
    var $x_3 = this.bi;
    var $x_2 = $m_sci_VectorStatics$().fb;
    var x = $m_sci_VectorStatics$().E(this.b3, this.j);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().bq;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.k) | 0));
  }
});
$p.cO = (function() {
  return 5;
});
$p.cN = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.bH;
      break;
    }
    case 2: {
      return this.b2;
      break;
    }
    case 3: {
      return this.b3;
      break;
    }
    case 4: {
      return this.j;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.bi) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.b2.a.length) ? this.b2.a[i3].a[i2].a[i1] : ((i2 < this.b3.a.length) ? this.b3.a[i2].a[i1] : this.j.a[i1]));
    } else if ((index >= this.bh)) {
      var io$2 = ((index - this.bh) | 0);
      return this.bH.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  io: 1,
  al: 1,
  am: 1,
  ag: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.j = null;
  this.k = 0;
  this.aT = 0;
  this.b9 = null;
  this.aU = 0;
  this.ba = null;
  this.aV = 0;
  this.aB = null;
  this.aD = null;
  this.aC = null;
  this.aT = len1;
  this.b9 = prefix2;
  this.aU = len12;
  this.ba = prefix3;
  this.aV = len123;
  this.aB = data4;
  this.aD = suffix3;
  this.aC = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.u = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.aV) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aB.a.length) ? this.aB.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aD.a.length) ? this.aD.a[i3].a[i2].a[i1] : ((i2 < this.aC.a.length) ? this.aC.a[i2].a[i1] : this.j.a[i1])));
    } else if ((index >= this.aU)) {
      var io$2 = ((index - this.aU) | 0);
      return this.ba.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aT)) {
      var io$3 = ((index - this.aT) | 0);
      return this.b9.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
$p.e4 = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.aV)) {
      var io = ((index - this.aV) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.aB.a.length)) {
        var a4 = this.aB;
        var a4c = a4.e();
        var a3 = a4c.a[i4];
        var a3c = a3.e();
        var a2 = a3c.a[i3];
        var a2c = a2.e();
        var a1 = a2c.a[i2];
        var a1c = a1.e();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        return new $c_sci_Vector4(this.f, this.aT, this.b9, this.aU, this.ba, this.aV, a4c, this.aD, this.aC, this.j, this.k);
      } else if ((i3 < this.aD.a.length)) {
        var a3$1 = this.aD;
        var a3c$1 = a3$1.e();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.e();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.e();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.f, this.aT, this.b9, this.aU, this.ba, this.aV, this.aB, a3c$1, this.aC, this.j, this.k);
      } else if ((i2 < this.aC.a.length)) {
        var a2$2 = this.aC;
        var a2c$2 = a2$2.e();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.e();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.f, this.aT, this.b9, this.aU, this.ba, this.aV, this.aB, this.aD, a2c$2, this.j, this.k);
      } else {
        var a1$3 = this.j;
        var a1c$3 = a1$3.e();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.f, this.aT, this.b9, this.aU, this.ba, this.aV, this.aB, this.aD, this.aC, a1c$3, this.k);
      }
    } else if ((index >= this.aU)) {
      var io$2 = ((index - this.aU) | 0);
      var a3$2 = this.ba;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.e();
      var a2$3 = a3c$2.a[idx3];
      var a2c$3 = a2$3.e();
      var a1$4 = a2c$3.a[idx2];
      var a1c$4 = a1$4.e();
      a1c$4.a[idx1] = elem;
      a2c$3.a[idx2] = a1c$4;
      a3c$2.a[idx3] = a2c$3;
      return new $c_sci_Vector4(this.f, this.aT, this.b9, this.aU, a3c$2, this.aV, this.aB, this.aD, this.aC, this.j, this.k);
    } else if ((index >= this.aT)) {
      var io$3 = ((index - this.aT) | 0);
      var a2$4 = this.b9;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.e();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.e();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.f, this.aT, a2c$4, this.aU, this.ba, this.aV, this.aB, this.aD, this.aC, this.j, this.k);
    } else {
      var a1$6 = this.f;
      var a1c$6 = a1$6.e();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.aT, this.b9, this.aU, this.ba, this.aV, this.aB, this.aD, this.aC, this.j, this.k);
    }
  } else {
    throw this.aG(index);
  }
});
$p.dV = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$33 = $m_sci_VectorStatics$().fk(this.j, elem);
    var length0$33 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.aT, this.b9, this.aU, this.ba, this.aV, this.aB, this.aD, this.aC, suffix1$33, length0$33);
  } else if ((this.aC.a.length < 31)) {
    var suffix2$22 = $m_sci_VectorStatics$().E(this.aC, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$34 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.aT, this.b9, this.aU, this.ba, this.aV, this.aB, this.aD, suffix2$22, a, length0$34);
  } else if ((this.aD.a.length < 31)) {
    var suffix3$9 = $m_sci_VectorStatics$().E(this.aD, $m_sci_VectorStatics$().E(this.aC, this.j));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$35 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.aT, this.b9, this.aU, this.ba, this.aV, this.aB, suffix3$9, $m_sci_VectorStatics$().bq, a$1, length0$35);
  } else if ((this.aB.a.length < 30)) {
    var data4$10 = $m_sci_VectorStatics$().E(this.aB, $m_sci_VectorStatics$().E(this.aD, $m_sci_VectorStatics$().E(this.aC, this.j)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$36 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.aT, this.b9, this.aU, this.ba, this.aV, data4$10, $m_sci_VectorStatics$().cB, $m_sci_VectorStatics$().bq, a$2, length0$36);
  } else {
    var $x_11 = this.f;
    var $x_10 = this.aT;
    var $x_9 = this.b9;
    var $x_8 = this.aU;
    var $x_7 = this.ba;
    var $x_6 = this.aV;
    var $x_5 = this.aB;
    var $x_4 = this.aV;
    var $x_3 = $m_sci_VectorStatics$().jt;
    var x = $m_sci_VectorStatics$().E(this.aD, $m_sci_VectorStatics$().E(this.aC, this.j));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().cB;
    var $x_1 = $m_sci_VectorStatics$().bq;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.k) | 0));
  }
});
$p.cO = (function() {
  return 7;
});
$p.cN = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.b9;
      break;
    }
    case 2: {
      return this.ba;
      break;
    }
    case 3: {
      return this.aB;
      break;
    }
    case 4: {
      return this.aD;
      break;
    }
    case 5: {
      return this.aC;
      break;
    }
    case 6: {
      return this.j;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.aV) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aB.a.length) ? this.aB.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aD.a.length) ? this.aD.a[i3].a[i2].a[i1] : ((i2 < this.aC.a.length) ? this.aC.a[i2].a[i1] : this.j.a[i1])));
    } else if ((index >= this.aU)) {
      var io$2 = ((index - this.aU) | 0);
      return this.ba.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aT)) {
      var io$3 = ((index - this.aT) | 0);
      return this.b9.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  ip: 1,
  al: 1,
  am: 1,
  ag: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.j = null;
  this.k = 0;
  this.aq = 0;
  this.aI = null;
  this.ar = 0;
  this.aJ = null;
  this.as = 0;
  this.aK = null;
  this.at = 0;
  this.ab = null;
  this.ae = null;
  this.ad = null;
  this.ac = null;
  this.aq = len1;
  this.aI = prefix2;
  this.ar = len12;
  this.aJ = prefix3;
  this.as = len123;
  this.aK = prefix4;
  this.at = len1234;
  this.ab = data5;
  this.ae = suffix4;
  this.ad = suffix3;
  this.ac = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.u = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.at) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.ab.a.length) ? this.ab.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ae.a.length) ? this.ae.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ad.a.length) ? this.ad.a[i3].a[i2].a[i1] : ((i2 < this.ac.a.length) ? this.ac.a[i2].a[i1] : this.j.a[i1]))));
    } else if ((index >= this.as)) {
      var io$2 = ((index - this.as) | 0);
      return this.aK.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ar)) {
      var io$3 = ((index - this.ar) | 0);
      return this.aJ.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aq)) {
      var io$4 = ((index - this.aq) | 0);
      return this.aI.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
$p.e4 = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.at)) {
      var io = ((index - this.at) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.ab.a.length)) {
        var a5 = this.ab;
        var a5c = a5.e();
        var a4 = a5c.a[i5];
        var a4c = a4.e();
        var a3 = a4c.a[i4];
        var a3c = a3.e();
        var a2 = a3c.a[i3];
        var a2c = a2.e();
        var a1 = a2c.a[i2];
        var a1c = a1.e();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, a5c, this.ae, this.ad, this.ac, this.j, this.k);
      } else if ((i4 < this.ae.a.length)) {
        var a4$1 = this.ae;
        var a4c$1 = a4$1.e();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.e();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.e();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.e();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, this.ab, a4c$1, this.ad, this.ac, this.j, this.k);
      } else if ((i3 < this.ad.a.length)) {
        var a3$2 = this.ad;
        var a3c$2 = a3$2.e();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.e();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.e();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, this.ab, this.ae, a3c$2, this.ac, this.j, this.k);
      } else if ((i2 < this.ac.a.length)) {
        var a2$3 = this.ac;
        var a2c$3 = a2$3.e();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.e();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, this.ab, this.ae, this.ad, a2c$3, this.j, this.k);
      } else {
        var a1$4 = this.j;
        var a1c$4 = a1$4.e();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, this.ab, this.ae, this.ad, this.ac, a1c$4, this.k);
      }
    } else if ((index >= this.as)) {
      var io$2 = ((index - this.as) | 0);
      var a4$2 = this.aK;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.e();
      var a3$3 = a4c$2.a[idx4];
      var a3c$3 = a3$3.e();
      var a2$4 = a3c$3.a[idx3];
      var a2c$4 = a2$4.e();
      var a1$5 = a2c$4.a[idx2];
      var a1c$5 = a1$5.e();
      a1c$5.a[idx1] = elem;
      a2c$4.a[idx2] = a1c$5;
      a3c$3.a[idx3] = a2c$4;
      a4c$2.a[idx4] = a3c$3;
      return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, a4c$2, this.at, this.ab, this.ae, this.ad, this.ac, this.j, this.k);
    } else if ((index >= this.ar)) {
      var io$3 = ((index - this.ar) | 0);
      var a3$4 = this.aJ;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.e();
      var a2$5 = a3c$4.a[idx3$1];
      var a2c$5 = a2$5.e();
      var a1$6 = a2c$5.a[idx2$1];
      var a1c$6 = a1$6.e();
      a1c$6.a[idx1$1] = elem;
      a2c$5.a[idx2$1] = a1c$6;
      a3c$4.a[idx3$1] = a2c$5;
      return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, a3c$4, this.as, this.aK, this.at, this.ab, this.ae, this.ad, this.ac, this.j, this.k);
    } else if ((index >= this.aq)) {
      var io$4 = ((index - this.aq) | 0);
      var a2$6 = this.aI;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.e();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.e();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.f, this.aq, a2c$6, this.ar, this.aJ, this.as, this.aK, this.at, this.ab, this.ae, this.ad, this.ac, this.j, this.k);
    } else {
      var a1$8 = this.f;
      var a1c$8 = a1$8.e();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, this.ab, this.ae, this.ad, this.ac, this.j, this.k);
    }
  } else {
    throw this.aG(index);
  }
});
$p.dV = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$54 = $m_sci_VectorStatics$().fk(this.j, elem);
    var length0$54 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, this.ab, this.ae, this.ad, this.ac, suffix1$54, length0$54);
  } else if ((this.ac.a.length < 31)) {
    var suffix2$41 = $m_sci_VectorStatics$().E(this.ac, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$55 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, this.ab, this.ae, this.ad, suffix2$41, a, length0$55);
  } else if ((this.ad.a.length < 31)) {
    var suffix3$29 = $m_sci_VectorStatics$().E(this.ad, $m_sci_VectorStatics$().E(this.ac, this.j));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$56 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, this.ab, this.ae, suffix3$29, $m_sci_VectorStatics$().bq, a$1, length0$56);
  } else if ((this.ae.a.length < 31)) {
    var suffix4$12 = $m_sci_VectorStatics$().E(this.ae, $m_sci_VectorStatics$().E(this.ad, $m_sci_VectorStatics$().E(this.ac, this.j)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$57 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, this.ab, suffix4$12, $m_sci_VectorStatics$().cB, $m_sci_VectorStatics$().bq, a$2, length0$57);
  } else if ((this.ab.a.length < 30)) {
    var data5$13 = $m_sci_VectorStatics$().E(this.ab, $m_sci_VectorStatics$().E(this.ae, $m_sci_VectorStatics$().E(this.ad, $m_sci_VectorStatics$().E(this.ac, this.j))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$58 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, data5$13, $m_sci_VectorStatics$().fb, $m_sci_VectorStatics$().cB, $m_sci_VectorStatics$().bq, a$3, length0$58);
  } else {
    var $x_14 = this.f;
    var $x_13 = this.aq;
    var $x_12 = this.aI;
    var $x_11 = this.ar;
    var $x_10 = this.aJ;
    var $x_9 = this.as;
    var $x_8 = this.aK;
    var $x_7 = this.at;
    var $x_6 = this.ab;
    var $x_5 = this.at;
    var $x_4 = $m_sci_VectorStatics$().nS;
    var x = $m_sci_VectorStatics$().E(this.ae, $m_sci_VectorStatics$().E(this.ad, $m_sci_VectorStatics$().E(this.ac, this.j)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().fb;
    var $x_2 = $m_sci_VectorStatics$().cB;
    var $x_1 = $m_sci_VectorStatics$().bq;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.k) | 0));
  }
});
$p.cO = (function() {
  return 9;
});
$p.cN = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.aI;
      break;
    }
    case 2: {
      return this.aJ;
      break;
    }
    case 3: {
      return this.aK;
      break;
    }
    case 4: {
      return this.ab;
      break;
    }
    case 5: {
      return this.ae;
      break;
    }
    case 6: {
      return this.ad;
      break;
    }
    case 7: {
      return this.ac;
      break;
    }
    case 8: {
      return this.j;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.at) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.ab.a.length) ? this.ab.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ae.a.length) ? this.ae.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ad.a.length) ? this.ad.a[i3].a[i2].a[i1] : ((i2 < this.ac.a.length) ? this.ac.a[i2].a[i1] : this.j.a[i1]))));
    } else if ((index >= this.as)) {
      var io$2 = ((index - this.as) | 0);
      return this.aK.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ar)) {
      var io$3 = ((index - this.ar) | 0);
      return this.aJ.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aq)) {
      var io$4 = ((index - this.aq) | 0);
      return this.aI.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  iq: 1,
  al: 1,
  am: 1,
  ag: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.j = null;
  this.k = 0;
  this.af = 0;
  this.au = null;
  this.ag = 0;
  this.av = null;
  this.ah = 0;
  this.aw = null;
  this.ai = 0;
  this.ax = null;
  this.al = 0;
  this.Z = null;
  this.a3 = null;
  this.a2 = null;
  this.a1 = null;
  this.a0 = null;
  this.af = len1;
  this.au = prefix2;
  this.ag = len12;
  this.av = prefix3;
  this.ah = len123;
  this.aw = prefix4;
  this.ai = len1234;
  this.ax = prefix5;
  this.al = len12345;
  this.Z = data6;
  this.a3 = suffix5;
  this.a2 = suffix4;
  this.a1 = suffix3;
  this.a0 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.u = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.al) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.Z.a.length) ? this.Z.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a3.a.length) ? this.a3.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a2.a.length) ? this.a2.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a1.a.length) ? this.a1.a[i3].a[i2].a[i1] : ((i2 < this.a0.a.length) ? this.a0.a[i2].a[i1] : this.j.a[i1])))));
    } else if ((index >= this.ai)) {
      var io$2 = ((index - this.ai) | 0);
      return this.ax.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ah)) {
      var io$3 = ((index - this.ah) | 0);
      return this.aw.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ag)) {
      var io$4 = ((index - this.ag) | 0);
      return this.av.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.af)) {
      var io$5 = ((index - this.af) | 0);
      return this.au.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
$p.e4 = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.al)) {
      var io = ((index - this.al) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.Z.a.length)) {
        var a6 = this.Z;
        var a6c = a6.e();
        var a5 = a6c.a[i6];
        var a5c = a5.e();
        var a4 = a5c.a[i5];
        var a4c = a4.e();
        var a3 = a4c.a[i4];
        var a3c = a3.e();
        var a2 = a3c.a[i3];
        var a2c = a2.e();
        var a1 = a2c.a[i2];
        var a1c = a1.e();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        a6c.a[i6] = a5c;
        return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, a6c, this.a3, this.a2, this.a1, this.a0, this.j, this.k);
      } else if ((i5 < this.a3.a.length)) {
        var a5$1 = this.a3;
        var a5c$1 = a5$1.e();
        var a4$1 = a5c$1.a[i5];
        var a4c$1 = a4$1.e();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.e();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.e();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.e();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        a5c$1.a[i5] = a4c$1;
        return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, a5c$1, this.a2, this.a1, this.a0, this.j, this.k);
      } else if ((i4 < this.a2.a.length)) {
        var a4$2 = this.a2;
        var a4c$2 = a4$2.e();
        var a3$2 = a4c$2.a[i4];
        var a3c$2 = a3$2.e();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.e();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.e();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        a4c$2.a[i4] = a3c$2;
        return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, this.a3, a4c$2, this.a1, this.a0, this.j, this.k);
      } else if ((i3 < this.a1.a.length)) {
        var a3$3 = this.a1;
        var a3c$3 = a3$3.e();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.e();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.e();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, this.a3, this.a2, a3c$3, this.a0, this.j, this.k);
      } else if ((i2 < this.a0.a.length)) {
        var a2$4 = this.a0;
        var a2c$4 = a2$4.e();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.e();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, this.a3, this.a2, this.a1, a2c$4, this.j, this.k);
      } else {
        var a1$5 = this.j;
        var a1c$5 = a1$5.e();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, this.a3, this.a2, this.a1, this.a0, a1c$5, this.k);
      }
    } else if ((index >= this.ai)) {
      var io$2 = ((index - this.ai) | 0);
      var a5$2 = this.ax;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.e();
      var a4$3 = a5c$2.a[idx5];
      var a4c$3 = a4$3.e();
      var a3$4 = a4c$3.a[idx4];
      var a3c$4 = a3$4.e();
      var a2$5 = a3c$4.a[idx3];
      var a2c$5 = a2$5.e();
      var a1$6 = a2c$5.a[idx2];
      var a1c$6 = a1$6.e();
      a1c$6.a[idx1] = elem;
      a2c$5.a[idx2] = a1c$6;
      a3c$4.a[idx3] = a2c$5;
      a4c$3.a[idx4] = a3c$4;
      a5c$2.a[idx5] = a4c$3;
      return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, a5c$2, this.al, this.Z, this.a3, this.a2, this.a1, this.a0, this.j, this.k);
    } else if ((index >= this.ah)) {
      var io$3 = ((index - this.ah) | 0);
      var a4$4 = this.aw;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.e();
      var a3$5 = a4c$4.a[idx4$1];
      var a3c$5 = a3$5.e();
      var a2$6 = a3c$5.a[idx3$1];
      var a2c$6 = a2$6.e();
      var a1$7 = a2c$6.a[idx2$1];
      var a1c$7 = a1$7.e();
      a1c$7.a[idx1$1] = elem;
      a2c$6.a[idx2$1] = a1c$7;
      a3c$5.a[idx3$1] = a2c$6;
      a4c$4.a[idx4$1] = a3c$5;
      return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, a4c$4, this.ai, this.ax, this.al, this.Z, this.a3, this.a2, this.a1, this.a0, this.j, this.k);
    } else if ((index >= this.ag)) {
      var io$4 = ((index - this.ag) | 0);
      var a3$6 = this.av;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.e();
      var a2$7 = a3c$6.a[idx3$2];
      var a2c$7 = a2$7.e();
      var a1$8 = a2c$7.a[idx2$2];
      var a1c$8 = a1$8.e();
      a1c$8.a[idx1$2] = elem;
      a2c$7.a[idx2$2] = a1c$8;
      a3c$6.a[idx3$2] = a2c$7;
      return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, a3c$6, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, this.a3, this.a2, this.a1, this.a0, this.j, this.k);
    } else if ((index >= this.af)) {
      var io$5 = ((index - this.af) | 0);
      var a2$8 = this.au;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.e();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.e();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.f, this.af, a2c$8, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, this.a3, this.a2, this.a1, this.a0, this.j, this.k);
    } else {
      var a1$10 = this.f;
      var a1c$10 = a1$10.e();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, this.a3, this.a2, this.a1, this.a0, this.j, this.k);
    }
  } else {
    throw this.aG(index);
  }
});
$p.dV = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$79 = $m_sci_VectorStatics$().fk(this.j, elem);
    var length0$79 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, this.a3, this.a2, this.a1, this.a0, suffix1$79, length0$79);
  } else if ((this.a0.a.length < 31)) {
    var suffix2$63 = $m_sci_VectorStatics$().E(this.a0, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$80 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, this.a3, this.a2, this.a1, suffix2$63, a, length0$80);
  } else if ((this.a1.a.length < 31)) {
    var suffix3$52 = $m_sci_VectorStatics$().E(this.a1, $m_sci_VectorStatics$().E(this.a0, this.j));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$81 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, this.a3, this.a2, suffix3$52, $m_sci_VectorStatics$().bq, a$1, length0$81);
  } else if ((this.a2.a.length < 31)) {
    var suffix4$36 = $m_sci_VectorStatics$().E(this.a2, $m_sci_VectorStatics$().E(this.a1, $m_sci_VectorStatics$().E(this.a0, this.j)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$82 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, this.a3, suffix4$36, $m_sci_VectorStatics$().cB, $m_sci_VectorStatics$().bq, a$2, length0$82);
  } else if ((this.a3.a.length < 31)) {
    var suffix5$15 = $m_sci_VectorStatics$().E(this.a3, $m_sci_VectorStatics$().E(this.a2, $m_sci_VectorStatics$().E(this.a1, $m_sci_VectorStatics$().E(this.a0, this.j))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$83 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, this.Z, suffix5$15, $m_sci_VectorStatics$().fb, $m_sci_VectorStatics$().cB, $m_sci_VectorStatics$().bq, a$3, length0$83);
  } else if ((this.Z.a.length < 62)) {
    var data6$16 = $m_sci_VectorStatics$().E(this.Z, $m_sci_VectorStatics$().E(this.a3, $m_sci_VectorStatics$().E(this.a2, $m_sci_VectorStatics$().E(this.a1, $m_sci_VectorStatics$().E(this.a0, this.j)))));
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var length0$84 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.al, data6$16, $m_sci_VectorStatics$().jt, $m_sci_VectorStatics$().fb, $m_sci_VectorStatics$().cB, $m_sci_VectorStatics$().bq, a$4, length0$84);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cO = (function() {
  return 11;
});
$p.cN = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.au;
      break;
    }
    case 2: {
      return this.av;
      break;
    }
    case 3: {
      return this.aw;
      break;
    }
    case 4: {
      return this.ax;
      break;
    }
    case 5: {
      return this.Z;
      break;
    }
    case 6: {
      return this.a3;
      break;
    }
    case 7: {
      return this.a2;
      break;
    }
    case 8: {
      return this.a1;
      break;
    }
    case 9: {
      return this.a0;
      break;
    }
    case 10: {
      return this.j;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.al) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.Z.a.length) ? this.Z.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a3.a.length) ? this.a3.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a2.a.length) ? this.a2.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a1.a.length) ? this.a1.a[i3].a[i2].a[i1] : ((i2 < this.a0.a.length) ? this.a0.a[i2].a[i1] : this.j.a[i1])))));
    } else if ((index >= this.ai)) {
      var io$2 = ((index - this.ai) | 0);
      return this.ax.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ah)) {
      var io$3 = ((index - this.ah) | 0);
      return this.aw.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ag)) {
      var io$4 = ((index - this.ag) | 0);
      return this.av.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.af)) {
      var io$5 = ((index - this.af) | 0);
      return this.au.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  ir: 1,
  al: 1,
  am: 1,
  ag: 1,
  D: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  t: 1,
  C: 1,
  B: 1,
  r: 1,
  q: 1,
  H: 1,
  E: 1,
  l: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.aF = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.aF = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.aZ = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b6 = (function(size) {
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bj = (function(len) {
  var x = this.aF.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bv = (function() {
  return "IndexedSeq";
});
$p.q = (function() {
  return this.aF.q();
});
$p.y = (function() {
  return this.aF.q();
});
$p.qD = (function(x) {
  var this$1 = this.aF;
  var str = ("" + $cToS(x));
  this$1.r = (this$1.r + str);
  return this;
});
$p.h = (function() {
  return this.aF.r;
});
$p.oC = (function(xs) {
  if (false) {
    var this$3 = this.aF;
    var str = xs.tJ;
    this$3.r = (("" + this$3.r) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.aF.oB(xs.bS);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.aF;
    var s = xs.aF;
    this$4.r = (("" + this$4.r) + s);
  } else {
    var ks = xs.y();
    if ((ks !== 0)) {
      var b = this.aF;
      if ((ks > 0)) {
        b.q();
      }
      var it = xs.m();
      while (it.p()) {
        var c = $uC(it.l());
        var str$1 = ("" + $cToS(c));
        b.r = (b.r + str$1);
      }
    }
  }
  return this;
});
$p.fj = (function(index) {
  return this.aF.fj(index);
});
$p.kC = (function(start, end) {
  return this.aF.pG(start, end);
});
$p.d = (function() {
  return (this.aF.q() === 0);
});
$p.u = (function(i) {
  return $bC(this.aF.fj(i));
});
$p.c = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aF.fj(i));
});
$p.gM = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oC(coll);
});
$p.gL = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oC(coll);
});
$p.b0 = (function(elem) {
  return this.qD($uC(elem));
});
$p.b5 = (function() {
  return this.aF.r;
});
$p.bV = (function() {
  return $m_scm_IndexedSeq$();
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cY)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cY: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  L: 1,
  N: 1,
  S: 1,
  ah: 1,
  r: 1,
  q: 1,
  a0: 1,
  Z: 1,
  aL: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iQ)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().i9($thiz);
  $thiz.c6 = buf.c6;
  $thiz.d6 = buf.d6;
  $thiz.hJ = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.hK = ((1 + $thiz.hK) | 0);
  if ($thiz.hJ) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.hK = 0;
  this.c6 = null;
  this.d6 = null;
  this.hJ = false;
  this.c7 = 0;
  this.hK = 0;
  this.c6 = $m_sci_Nil$();
  this.d6 = null;
  this.hJ = false;
  this.c7 = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.cE = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b6 = (function(size) {
});
$p.m = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.c6.m(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.hK)));
});
$p.dd = (function() {
  return $m_scm_ListBuffer$();
});
$p.u = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.c6, i);
});
$p.q = (function() {
  return this.c7;
});
$p.y = (function() {
  return this.c7;
});
$p.d = (function() {
  return (this.c7 === 0);
});
$p.pI = (function() {
  this.hJ = (!this.d());
  return this.c6;
});
$p.qL = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.c7 === 0)) {
    this.c6 = last1;
  } else {
    var x$proxy2 = this.d6;
    if ((x$proxy2 === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    x$proxy2.aA = last1;
  }
  this.d6 = last1;
  this.c7 = ((1 + this.c7) | 0);
  return this;
});
$p.i9 = (function(xs) {
  var it = xs.m();
  if (it.p()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.l(), $m_sci_Nil$());
    this.c6 = last0;
    while (it.p()) {
      var last1 = new $c_sci_$colon$colon(it.l(), $m_sci_Nil$());
      last0.aA = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.c7 = len;
    this.d6 = last0;
  }
  return this;
});
$p.qx = (function(xs) {
  var it = xs.m();
  if (it.p()) {
    var fresh = new $c_scm_ListBuffer().i9(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.c7 === 0)) {
      this.c6 = fresh.c6;
    } else {
      var x$proxy3 = this.d6;
      if ((x$proxy3 === null)) {
        $m_sr_Scala3RunTime$().bu();
      }
      x$proxy3.aA = fresh.c6;
    }
    this.d6 = fresh.d6;
    this.c7 = ((this.c7 + fresh.c7) | 0);
  }
  return this;
});
$p.bv = (function() {
  return "ListBuffer";
});
$p.bV = (function() {
  return $m_scm_ListBuffer$();
});
$p.c = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.c6, i);
});
$p.b5 = (function() {
  return this.pI();
});
$p.b0 = (function(elem) {
  return this.qL(elem);
});
$p.aZ = (function(elems) {
  return this.qx(elems);
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cX)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  cX: 1,
  bg: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  L: 1,
  N: 1,
  aP: 1,
  bh: 1,
  l: 1,
  s: 1,
  S: 1,
  ah: 1,
  a: 1,
  a3: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.fc = 0;
  $thiz.d2 = initialElements;
  $thiz.b4 = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.fc = 0;
  this.d2 = null;
  this.b4 = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.m = (function() {
  return this.tB().m();
});
$p.bj = (function(len) {
  var x = this.b4;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cE = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.y = (function() {
  return this.b4;
});
$p.k0 = (function(n) {
  this.d2 = $m_scm_ArrayBuffer$().pA(this.d2, this.b4, n);
});
$p.b6 = (function(size) {
  if (((size > this.b4) && (size >= 1))) {
    this.k0(size);
  }
});
$p.u = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().ki(n, ((this.b4 - 1) | 0));
  }
  if ((hi > this.b4)) {
    throw $m_scg_CommonErrors$().ki(((hi - 1) | 0), ((this.b4 - 1) | 0));
  }
  return this.d2.a[n];
});
$p.q = (function() {
  return this.b4;
});
$p.tB = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.fc)));
});
$p.dd = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.qI = (function(elem) {
  this.fc = ((1 + this.fc) | 0);
  var newSize = ((1 + this.b4) | 0);
  if ((this.d2.a.length <= ((newSize - 1) | 0))) {
    this.k0(newSize);
  }
  this.b4 = newSize;
  this.d2.a[((newSize - 1) | 0)] = elem;
  return this;
});
$p.ox = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.b4;
    if ((elemsLength > 0)) {
      this.fc = ((1 + this.fc) | 0);
      this.k0(((this.b4 + elemsLength) | 0));
      $m_s_Array$().gI(elems.d2, 0, this.d2, this.b4, elemsLength);
      this.b4 = ((this.b4 + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bv = (function() {
  return "ArrayBuffer";
});
$p.bT = (function(xs, start, len) {
  var srcLen = this.b4;
  var destLen = $m_jl_reflect_Array$().bs(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gI(this.d2, 0, xs, start, copied);
  }
  return copied;
});
$p.c = (function(v1) {
  return this.u((v1 | 0));
});
$p.bV = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.b0 = (function(elem) {
  return this.qI(elem);
});
$p.aZ = (function(elems) {
  return this.ox(elems);
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cK)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  cK: 1,
  bg: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  L: 1,
  N: 1,
  aP: 1,
  bh: 1,
  r: 1,
  q: 1,
  a0: 1,
  Z: 1,
  cW: 1,
  l: 1,
  s: 1,
  a: 1,
  a3: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.dR = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.dR = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.b6 = (function(size) {
});
$p.bv = (function() {
  return "IndexedSeq";
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bj = (function(len) {
  var x = (this.dR.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cE = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.dd = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.u = (function(index) {
  return this.dR[index];
});
$p.q = (function() {
  return (this.dR.length | 0);
});
$p.y = (function() {
  return (this.dR.length | 0);
});
$p.cb = (function() {
  return "WrappedArray";
});
$p.b5 = (function() {
  return this;
});
$p.b0 = (function(elem) {
  this.dR.push(elem);
  return this;
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  return this.dR[index];
});
$p.bV = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  jX: 1,
  bg: 1,
  R: 1,
  p: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  O: 1,
  G: 1,
  M: 1,
  U: 1,
  T: 1,
  L: 1,
  N: 1,
  aP: 1,
  bh: 1,
  s: 1,
  l: 1,
  Z: 1,
  r: 1,
  q: 1,
  a0: 1,
  cW: 1,
  S: 1,
  a: 1
}));
var $t_Lcom_github_pwharned_clausula_extension_ExtensionStatus$__Idle = null;
var $t_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden = null;
var $t_Lcom_github_pwharned_clausula_extension_PopupState$__Loading = null;
var $t_Lcom_github_pwharned_clausula_extension_PopupState$__Creating = null;
var $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English = null;
var $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Russian = null;
var $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__French = null;
var $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__German = null;
var $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Spanish = null;
var $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Japanese = null;
var $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Chinese = null;
var $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Arabic = null;
var $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Farsi = null;
var $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Latin = null;
var $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Hebrew = null;
var $t_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto = null;
$s_Lcom_github_pwharned_clausula_extension_Main__main__AT__V(new ($d_T.r().C)([]));
}).call(this);
//# sourceMappingURL=main.js.map
