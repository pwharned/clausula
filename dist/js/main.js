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
  return (arg0.$classData.Z ? arg0.f() : $objectClone(arg0));
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
        return null.ug();
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.ub(x0);
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
        return instance.i(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.i.call(instance, x0);
      }
    }
  }
}
function $dp_getChars__I__I__AC__I__V(instance, x0, x1, x2, x3) {
  if (((typeof instance) === "string")) {
    return $f_T__getChars__I__I__AC__I__V(instance, x0, x1, x2, x3);
  } else {
    return instance.uf(x0, x1, x2, x3);
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
        return instance.k();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.k.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.uh(x0);
  }
}
function $dp_lastIndexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__lastIndexOf__I__I(instance, x0);
  } else {
    return instance.ui(x0);
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.um(x0);
  }
}
function $dp_split__T__I__AT(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__split__T__I__AT(instance, x0, x1);
  } else {
    return instance.uo(x0, x1);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $dp_trim__T(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__trim__T(instance);
  } else {
    return instance.uq();
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
$p.k = (function() {
  return $systemIdentityHashCode(this);
});
$p.i = (function(that) {
  return (this === that);
});
$p.g = (function() {
  var i = this.k();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.g();
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
$p.s = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.f = (function() {
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
$p.s = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.f = (function() {
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
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.f = (function() {
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
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.f = (function() {
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
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.f = (function() {
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
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.f = (function() {
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
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.f = (function() {
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
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.f = (function() {
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
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.f = (function() {
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
    H: 1,
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
  $p.s = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.f = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    H: 1,
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
  this.aW = null;
  this.h9 = null;
  this.ii = null;
  $n_Lcom_github_pwharned_clausula_extension_AppBus$ = this;
  new $c_Lcom_raquo_airstream_eventbus_EventBus();
  $m_Lcom_raquo_laminar_api_package$().q.hm.jW($s_Lcom_github_pwharned_clausula_extension_ExtensionStatus$__Idle__Lcom_github_pwharned_clausula_extension_ExtensionStatus());
  this.aW = $m_Lcom_raquo_laminar_api_package$().q.hm.jW($s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  this.h9 = $m_Lcom_raquo_laminar_api_package$().q.hm.jW(new $c_T2$mcDD$sp(0.0, 0.0));
  this.ii = $m_s_None$();
}
$p = $c_Lcom_github_pwharned_clausula_extension_AppBus$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_AppBus$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_AppBus$() {
}
$h_Lcom_github_pwharned_clausula_extension_AppBus$.prototype = $p;
var $d_Lcom_github_pwharned_clausula_extension_AppBus$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_AppBus$, "com.github.pwharned.clausula.extension.AppBus$", ({
  dd: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_AppBus$;
function $m_Lcom_github_pwharned_clausula_extension_AppBus$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_AppBus$)) {
    $n_Lcom_github_pwharned_clausula_extension_AppBus$ = new $c_Lcom_github_pwharned_clausula_extension_AppBus$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_AppBus$;
}
function $s_Lcom_github_pwharned_clausula_extension_Main__main__AT__V(args) {
  $m_Lcom_github_pwharned_clausula_extension_Main$().sM(args);
}
function $p_Lcom_github_pwharned_clausula_extension_Main$__createCard__Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient__T__s_Option__s_Option__Lcom_github_pwharned_clausula_extension_domain_Language__V($thiz, ankiClient, clozeText, translation, audio, lang) {
  var note = new $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote(clozeText, translation, audio, "Default", lang, new $c_sci_$colon$colon("clausula", new $c_sci_$colon$colon(lang.ev(), $m_sci_Nil$())));
  ankiClient.qT(note).ke(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3) => {
    matchResult1: {
      if ((x$1$3 instanceof $c_s_util_Right)) {
        var $x_1 = $uJ(x$1$3.bN);
        var noteId_$_lo = $x_1.l;
        var noteId_$_hi = $x_1.h;
        console.log(("Card created: " + $s_RTLong__toString__I__I__T(noteId_$_lo, noteId_$_hi)));
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Created(noteId_$_lo, noteId_$_hi));
        break matchResult1;
      }
      if ((x$1$3 instanceof $c_s_util_Left)) {
        var err = x$1$3.dS;
        console.error(("Failed to create card: " + err));
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(err));
        break matchResult1;
      }
      throw new $c_s_MatchError(x$1$3);
    }
  })), $m_s_concurrent_ExecutionContext$().cf());
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
$p.sM = (function(args) {
  var container = document.createElement("div");
  container.id = "clausula-root";
  document.body.appendChild(container);
  $m_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$().sV(container);
  var extractor = new $c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction();
  var ankiClient = new $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient();
  var translator = new $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchTranslation();
  var audio = new $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration();
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream(new $c_Lcom_raquo_airstream_misc_StreamFromSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW.dm, true), new $c_s_PartialFunction$Lifted(new $c_Lcom_github_pwharned_clausula_extension_Main$$anon$1())), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$3) => {
    matchResult6: {
      var x18 = $m_Lcom_github_pwharned_clausula_extension_AppBus$().ii;
      if (($m_s_None$() === x18)) {
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed($m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$()));
        break matchResult6;
      }
      if ((x18 instanceof $c_s_Some)) {
        var x20 = x18.cU;
        if ((x20 !== null)) {
          var x22 = x20.eO;
          var x23 = x20.eN;
          var x24 = x20.eM;
          var x13 = $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$().tV(x23, x22);
          if ((x13 instanceof $c_s_util_Left)) {
            var err = x13.dS;
            $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(err));
            break matchResult6;
          }
          if ((x13 instanceof $c_s_util_Right)) {
            var clozeText = x13.bN;
            translator.q5(x23, x24, $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$()).kd(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((translationSentence$2) => $m_s_concurrent_Future$().jY(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((translationSentence$1) => (() => {
              var this$9 = translationSentence$1.tW();
              var this$10 = (this$9.e() ? $m_s_None$() : this$9.x().fM);
              return (this$10.e() ? $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() : this$10.x());
            }))(translationSentence$2)), $m_s_concurrent_ExecutionContext$().cf()).kd(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((translationSentence$2$1) => ((detectedLang$2) => translator.q5(x22, detectedLang$2, $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$()).kd(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((detectedLang$1) => ((translationWord$2) => audio.sd(x22, x23, detectedLang$1).i8(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((translationWord$1) => ((audioTag$2) => {
              if ((translationSentence$2$1 instanceof $c_s_util_Right)) {
                var b = translationSentence$2$1.bN;
                if ((audioTag$2 instanceof $c_s_util_Right)) {
                  var b$1 = audioTag$2.bN;
                  return ((translationWord$1 instanceof $c_s_util_Right) ? new $c_s_util_Right(($p_Lcom_github_pwharned_clausula_extension_Main$__createCard__Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient__T__s_Option__s_Option__Lcom_github_pwharned_clausula_extension_domain_Language__V(this, ankiClient, clozeText, new $c_s_Some(((translationWord$1.bN.eQ + " : ") + b.eQ)), new $c_s_Some(b$1), x24), (void 0))) : translationWord$1);
                } else {
                  return audioTag$2;
                }
              } else {
                return translationSentence$2$1;
              }
            }))(translationWord$2)), $m_s_concurrent_ExecutionContext$().cf())))(detectedLang$2)), $m_s_concurrent_ExecutionContext$().cf())))(translationSentence$2)), $m_s_concurrent_ExecutionContext$().cf()))), $m_s_concurrent_ExecutionContext$().cf()).i8(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3) => {
              matchResult4: {
                if ((x$1$3 instanceof $c_s_util_Left)) {
                  var value$4 = x$1$3.dS;
                  $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(value$4));
                  break matchResult4;
                }
                if ((x$1$3 instanceof $c_s_util_Right)) {
                  break matchResult4;
                }
                throw new $c_s_MatchError(x$1$3);
              }
            })), $m_s_concurrent_ExecutionContext$().cf());
            break matchResult6;
          }
          throw new $c_s_MatchError(x13);
        }
      }
      if ((x18 === null)) {
        break matchResult6;
      }
      throw new $c_s_MatchError(x18);
    }
  })), $m_Lcom_raquo_laminar_api_package$().q.u3());
  document.addEventListener("mouseup", ((event$2) => {
    var target = event$2.target;
    if ((target.closest("#clausula-root") !== null)) {
      return (void 0);
    } else {
      matchResult10: {
        var x41 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW.dm).x();
        var x$1 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
        if (((x$1 === null) ? (x41 === null) : x$1.i(x41))) {
          break matchResult10;
        }
        if ((x41 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Created)) {
          break matchResult10;
        }
        var selection = window.getSelection();
        if (((selection === null) || ($f_T__trim__T($dp_toString__T(selection)) === ""))) {
          $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
        } else {
          var selectedText = $f_T__trim__T($dp_toString__T(selection));
          var node = selection.anchorNode;
          var x36 = $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$().hV(selectedText);
          if ((x36 instanceof $c_s_util_Left)) {
            $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
            break matchResult10;
          }
          if ((x36 instanceof $c_s_util_Right)) {
            var word = x36.bN;
            extractor.rU(word, node).ke(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3$1) => {
              matchResult8: {
                if ((x$1$3$1 instanceof $c_s_util_Left)) {
                  $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
                  break matchResult8;
                }
                if ((x$1$3$1 instanceof $c_s_util_Right)) {
                  var sentence = x$1$3$1.bN;
                  extractor.rH(sentence).ke(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3$2) => {
                    matchResult7: {
                      if ((x$1$3$2 instanceof $c_s_util_Left)) {
                        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
                        break matchResult7;
                      }
                      if ((x$1$3$2 instanceof $c_s_util_Right)) {
                        var lang = x$1$3$2.bN;
                        var preview = new $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview(word, sentence, lang, $ct_T2__O__O__(new $c_T2(), (+event$2.clientX), (+event$2.clientY)));
                        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().h9, $ct_T2__O__O__(new $c_T2(), (+event$2.clientX), (+event$2.clientY)));
                        $m_Lcom_github_pwharned_clausula_extension_AppBus$().ii = new $c_s_Some(preview);
                        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, preview);
                        break matchResult7;
                      }
                      throw new $c_s_MatchError(x$1$3$2);
                    }
                  })), $m_s_concurrent_ExecutionContext$().cf());
                  break matchResult8;
                }
                throw new $c_s_MatchError(x$1$3$1);
              }
            })), $m_s_concurrent_ExecutionContext$().cf());
            break matchResult10;
          }
          throw new $c_s_MatchError(x36);
        }
      }
      return (void 0);
    }
  }));
});
var $d_Lcom_github_pwharned_clausula_extension_Main$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_Main$, "com.github.pwharned.clausula.extension.Main$", ({
  dh: 1
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
$p.hV = (function(s) {
  $m_sc_StringOps$();
  return (($f_T__trim__T(s) !== "") ? new $c_s_util_Right($f_T__trim__T(s)) : new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$()));
});
$p.tV = (function(s, w) {
  if (((s.indexOf(w) | 0) !== (-1))) {
    var replacement = (("{{c1::" + w) + "}}");
    return new $c_s_util_Right(s.split(w).join(replacement));
  } else {
    return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$());
  }
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$, "com.github.pwharned.clausula.extension.domain.Sentence$package$Sentence$", ({
  dM: 1
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
$p.hV = (function(s) {
  $m_sc_StringOps$();
  return (($f_T__trim__T(s) !== "") ? new $c_s_util_Right($f_T__trim__T(s)) : new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$()));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$, "com.github.pwharned.clausula.extension.domain.Word$package$Word$", ({
  dQ: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$;
function $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$ = new $c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$;
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__loadingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz) {
  return $m_Lcom_raquo_laminar_api_package$().q.cK().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-popup"), $m_Lcom_raquo_laminar_api_package$().q.gW().az(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, "Extracting...", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD)]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__previewView__T__T__Lcom_github_pwharned_clausula_extension_domain_Language__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, word, sentence, lang) {
  return $m_Lcom_raquo_laminar_api_package$().q.cK().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-popup"), $m_Lcom_raquo_laminar_api_package$().q.cK().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-word"), $m_Lcom_raquo_laminar_api_package$().q.tN().az(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, word, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD)]))])), $m_Lcom_raquo_laminar_api_package$().q.cK().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-sentence"), $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__renderHighlightedSentence__T__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, sentence, word)])), $m_Lcom_raquo_laminar_api_package$().q.cK().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-lang"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, ("Language: " + lang.gL()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD)])), $m_Lcom_raquo_laminar_api_package$().q.cK().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-actions"), $m_Lcom_raquo_laminar_api_package$().q.hY().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-btn-create"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, "Create Card", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().i0($m_Lcom_raquo_laminar_api_package$().q.gR(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState());
  })))])), $m_Lcom_raquo_laminar_api_package$().q.hY().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-btn-dismiss"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, "Dismiss", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().i0($m_Lcom_raquo_laminar_api_package$().q.gR(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$4$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  })))]))]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__renderHighlightedSentence__T__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, sentence, word) {
  var escapedWord = $m_ju_regex_Pattern$().t9(word);
  var parts = $f_T__split__T__I__AT(sentence, escapedWord, 0);
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().q.gW();
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-sentence-text");
  var $x_1 = $m_Lcom_raquo_laminar_api_package$().q;
  var xs = $m_sc_ArrayOps$().u8(parts);
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
    var part = x0.aS();
    var i$1 = (x0.aJ() | 0);
    var elems = ((i$1 < ((parts.a.length - 1) | 0)) ? new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().q.pY().az(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, part, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD)])), new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().q.sT().az(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, word, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD)])), $m_sci_Nil$())) : new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().q.pY().az(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, part, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD)])), $m_sci_Nil$()));
    var it = new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(elems);
    while (it.o()) {
      var elem = it.l();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h1(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    i = ((1 + i) | 0);
  }
  return $x_3.az(new $c_sjsr_WrappedVarArgs([$x_2, $f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_1, $m_scm_ArrayBuilder$().h0(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((component$2) => {
    $m_Lcom_raquo_laminar_api_package$();
    return component$2;
  })), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$())]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__creatingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz) {
  return $m_Lcom_raquo_laminar_api_package$().q.cK().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-popup"), $m_Lcom_raquo_laminar_api_package$().q.gW().az(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, "Creating card...", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD)]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__createdView__J__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, noteId_$_lo, noteId_$_hi) {
  return $m_Lcom_raquo_laminar_api_package$().q.cK().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-popup clausula-success"), $m_Lcom_raquo_laminar_api_package$().q.gW().az(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, "\u2713 Card created!", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD)])), $m_Lcom_raquo_laminar_api_package$().q.hY().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-btn-dismiss"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, "Close", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().i0($m_Lcom_raquo_laminar_api_package$().q.gR(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$5$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  })))]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorView__Lcom_github_pwharned_clausula_extension_domain_AppError__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, error) {
  return $m_Lcom_raquo_laminar_api_package$().q.cK().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-popup clausula-error"), $m_Lcom_raquo_laminar_api_package$().q.gW().az(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, ("Error: " + $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorMessage__Lcom_github_pwharned_clausula_extension_domain_AppError__T($thiz, error)), $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD)])), $m_Lcom_raquo_laminar_api_package$().q.hY().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.bv.bO("clausula-btn-dismiss"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().q, "Close", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bD), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().i0($m_Lcom_raquo_laminar_api_package$().q.gR(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$6$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  })))]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorMessage__Lcom_github_pwharned_clausula_extension_domain_AppError__T($thiz, error) {
  return (($m_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$() === error) ? "Anki is not running" : (($m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$() === error) ? "No word found" : (($m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$() === error) ? "Could not extract sentence" : (($m_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$() === error) ? "Unsupported language" : (($m_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$() === error) ? "Card already exists" : ((error instanceof $c_Lcom_github_pwharned_clausula_extension_domain_ApiError) ? error.eP : error.g()))))));
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
$p.sV = (function(container) {
  var island = $m_Lcom_raquo_laminar_api_package$().q.cK().az(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().q.t6().oK("fixed"), $m_Lcom_raquo_laminar_api_package$().q.u7().oK("999999"), $m_Lcom_raquo_laminar_api_package$().q.sJ().jO(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().h9.dm, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => (x$1$2.oL() + "px"))), $m_s_None$()), $m_s_$less$colon$less$().hv), $m_Lcom_raquo_laminar_api_package$().q.tX().jO(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().h9.dm, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$1) => ((x$1$2$1.oM() + 20.0) + "px"))), $m_s_None$()), $m_s_$less$colon$less$().hv), $m_Lcom_raquo_laminar_api_package$().q.rJ().jO(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW.dm, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => {
    var x$1 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState();
    if (((x$1 === null) ? (x$1$2$2 === null) : x$1.i(x$1$2$2))) {
      return "none";
    } else {
      return "block";
    }
  })), $m_s_None$()), $m_s_$less$colon$less$().hv), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().r6(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().aW.dm, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$3) => {
    var x$2 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState();
    if (((x$2 === null) ? (x$1$2$3 === null) : x$2.i(x$1$2$3))) {
      $m_Lcom_raquo_laminar_api_package$();
      return new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
    var x$3 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Loading__Lcom_github_pwharned_clausula_extension_PopupState();
    if (((x$3 === null) ? (x$1$2$3 === null) : x$3.i(x$1$2$3))) {
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__loadingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this);
    }
    if ((x$1$2$3 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview)) {
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__previewView__T__T__Lcom_github_pwharned_clausula_extension_domain_Language__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, x$1$2$3.eO, x$1$2$3.eN, x$1$2$3.eM);
    }
    var x$5 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
    if (((x$5 === null) ? (x$1$2$3 === null) : x$5.i(x$1$2$3))) {
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__creatingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this);
    }
    if ((x$1$2$3 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Created)) {
      var $x_1 = x$1$2$3;
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__createdView__J__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $x_1.gs, $x_1.gt);
    }
    if ((x$1$2$3 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed)) {
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorView__Lcom_github_pwharned_clausula_extension_domain_AppError__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, x$1$2$3.fE);
    }
    throw new $c_s_MatchError(x$1$2$3);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().mV, (void 0)))]));
  $m_Lcom_raquo_laminar_api_package$();
  new $c_Lcom_raquo_laminar_nodes_RootNode(container, island);
});
var $d_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$, "com.github.pwharned.clausula.extension.islands.HoverPopupIsland$", ({
  dW: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$;
function $m_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$)) {
    $n_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$ = new $c_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$;
}
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().i(1, "com.raquo.airstream.core.InternalObserver", ({
  aB: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).kp() + "@") + $thiz.k());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.cP();
  return ((x === (void 0)) ? $thiz.cJ() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().qd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))), $m_s_PartialFunction$().hx, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.qd = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.sc = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  dZ: 1
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
$p.pQ = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  e2: 1
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
  this.eT = 0;
  this.eT = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.pH = (function() {
  if ((this.eT === 2147483647)) {
    this.eT = 1;
  } else {
    this.eT = ((1 + this.eT) | 0);
  }
  return this.eT;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  e3: 1
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
  this.im = null;
  this.kX = null;
  this.io = 0;
  this.im = code;
  this.kX = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().gY();
  this.io = ((x === (void 0)) ? 1 : ((1 + x.io) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().he === (-1)) || (this.io > $m_Lcom_raquo_airstream_core_Transaction$().he))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().cz(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().he));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().be) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().e9.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jQ(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  e4: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.he = 0;
  this.kY = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.he = 1000;
  this.kY = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.p3 = (function(transaction) {
  try {
    transaction.im.c(transaction);
    var x = transaction.kX;
    if ((x !== (void 0))) {
      while (x.uk()) {
        x.uc().up(transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cz(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  e5: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.fS.length | 0) === 0)) {
    if ((($thiz.e9.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
        while ((($thiz.e9.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jQ($thiz.e9.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
      while ((($thiz.fS.length | 0) > 0)) {
        var callback = $thiz.fS.shift();
        try {
          callback.c(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().cz(e$2);
        }
      }
      while ((($thiz.e9.length | 0) > 0)) {
        var _trx = $thiz.e9.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jQ(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.be = false;
  this.fS = null;
  this.e9 = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.be = false;
  this.fS = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_F1.r().C)([])));
  this.e9 = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
$p.qJ = (function(callback) {
  this.fS.push(callback);
});
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  e6: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.ea.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.hf.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.hf.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.ea.set(parent, newChildren);
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
      (!(!$thiz.ea.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.hf = null;
  this.ea = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.hf = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.ea = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.jQ = (function(newTransaction) {
  var x = this.gY();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().p3(newTransaction);
    this.rM(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.rM = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.gY();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().p(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.t8(transaction$tailLocal1);
    transaction$tailLocal1.im = $m_Lcom_raquo_airstream_core_Transaction$().kY;
    var maybeNextTransaction = this.gY();
    if ($m_sr_BoxesRunTime$().p(maybeNextTransaction, (void 0))) {
      if (((this.ea.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.ea.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.et + (transactions.length | 0)) | 0);
          numChildren.et = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.et) + " children for ") + (this.ea.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().p3(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.t8 = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().p(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.gY();
      if ((!$m_sr_BoxesRunTime$().p(maybeParentTransaction, (void 0)))) {
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
  return this.hf[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  e7: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
function $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$)) {
    $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.dk.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.dk.splice(index, 1);
    if ((!$thiz.bR.e())) {
      subscription.pK();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.hj.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.hj.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.lA = null;
  this.dk = null;
  this.eV = false;
  this.hj = null;
  this.bR = null;
  this.eW = 0;
  this.lA = onAccessAfterKilled;
  this.dk = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.eV = true;
  this.hj = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.bR = $m_s_None$();
  this.eW = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.oN = (function() {
  if ((!(!this.bR.e()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.lA);
      this.bR = new $c_s_Some(newOwner);
      this.eV = false;
      this.eW = 0;
      var i = 0;
      var originalNumSubs = (this.dk.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.eW) | 0);
        this.dk[ix].pJ(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.eV = true;
      this.eW = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.be || (!when))) {
      f();
    } else {
      this$4.be = true;
      try {
        f();
      } finally {
        this$4.be = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.rE = (function() {
  if ((!this.bR.e())) {
    this.eV = false;
    var arr = this.dk;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].pK();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.bR;
    if ((!this$4.e())) {
      this$4.x().pE();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.eV = true;
    this.bR = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.r3 = (function(subscription, prepend) {
  if (prepend) {
    this.eW = ((1 + this.eW) | 0);
    this.dk.unshift(subscription);
  } else {
    this.dk.push(subscription);
  }
  var this$1 = this.bR;
  if ((!this$1.e())) {
    var x0 = this$1.x();
    subscription.pJ(x0);
  }
});
$p.tj = (function(subscription) {
  if (this.eV) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.hj.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  ee: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.hk = null;
  this.lB = null;
  this.hl = null;
  this.hk = dynamicOwner;
  this.lB = activate;
  this.hl = $m_s_None$();
  dynamicOwner.r3(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.i7 = (function() {
  this.hk.tj(this);
});
$p.pJ = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.hl = this.lB.c(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.be || (!when))) {
    f();
  } else {
    this$2.be = true;
    try {
      f();
    } finally {
      this$2.be = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.pK = (function() {
  var this$1 = this.hl;
  if ((!this$1.e())) {
    this$1.x().i7();
    this.hl = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  ef: 1
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
$p.q1 = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => {
    activate.c(owner);
    return $m_s_None$();
  })), prepend);
});
$p.tO = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h6(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  eg: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.p4($m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.fA();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.fA().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.fA().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.fA().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.fA().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.iw)) {
    $thiz.lE.M();
    $thiz.iw = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.lF = null;
  this.lE = null;
  this.iw = false;
  this.lF = owner;
  this.lE = cleanup;
  this.iw = false;
  owner.pM(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.i7 = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.lF, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  ei: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.lG = null;
  this.lH = null;
  this.dl = null;
  this.ec = false;
  this.lG = activate;
  this.lH = deactivate;
  this.dl = $m_s_None$();
  this.ec = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.sz = (function() {
  var this$1 = this.dl;
  return ((!this$1.e()) && (!this$1.x().hk.bR.e()));
});
$p.tC = (function(nextOwner) {
  if (this.ec) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.dl;
  if ((!this$1.e())) {
    var x0 = this$1.x();
    var x$2 = x0.hk;
    var $x_1 = ((nextOwner === null) ? (x$2 === null) : (nextOwner === x$2));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.sz() && (!nextOwner.bR.e()))) {
      this.ec = true;
    }
    var this$3 = this.dl;
    if ((!this$3.e())) {
      this$3.x().i7();
      this.dl = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h6(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((parentOwner) => {
      if ((!this.ec)) {
        this.lG.M();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        if ((!this.ec)) {
          this.lH.M();
        }
      })));
    })), false);
    this.dl = new $c_s_Some(newPilotSubscription);
    this.ec = false;
  }
});
$p.rj = (function() {
  if (this.ec) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.dl;
  if ((!this$1.e())) {
    this$1.x().i7();
  }
  this.dl = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  ej: 1
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
$p.jW = (function(initial) {
  return new $c_Lcom_raquo_airstream_state_SourceVar(new $c_s_util_Success(initial));
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$, "com.raquo.airstream.state.Var$", ({
  en: 1
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
$p.bk = (function(items) {
  return [...$m_sjsr_Compat$().q3(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  eq: 1
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
$p.sp = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.s0 = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  er: 1
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
  this.lT = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.rC($m_Lcom_raquo_laminar_api_package$().q.tQ().tR());
  this.lT = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.r5 = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.T instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
  }
});
$p.tf = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.T instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
  }
});
$p.su = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.T instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
  }
});
$p.st = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.T instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
  }
});
$p.tm = (function(parent, newChild, oldChild) {
  try {
    parent.replaceChild(newChild, oldChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.T instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
  }
});
$p.sD = (function(node, ancestor) {
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
    if ($m_sr_BoxesRunTime$().p(ancestor, effectiveParentNode)) {
      return true;
    }
    node$tailLocal1 = effectiveParentNode;
  }
});
$p.qS = (function(element, listener) {
  element.addEventListener(listener.f1.ho.hp, listener.iL, listener.iM);
});
$p.tg = (function(element, listener) {
  element.removeEventListener(listener.f1.ho.hp, listener.iL, listener.iM);
});
$p.rB = (function(tag) {
  return document.createElement(tag.iV);
});
$p.sh = (function(element, attr) {
  var x = this.si(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.iG.k6(x));
});
$p.si = (function(element, attr) {
  var domValue = element.bq.getAttributeNS(null, attr.fV);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.tz = (function(element, attr, value) {
  this.tA(element, attr, attr.iG.k7(value));
});
$p.tA = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.th(element, attr);
  } else {
    element.bq.setAttribute(attr.fV, domValue);
  }
});
$p.th = (function(element, attr) {
  element.bq.removeAttribute(attr.fV);
});
$p.tB = (function(element, styleProp, value) {
  var ref = element.bq;
  var styleCssName = styleProp.ee;
  var prefixes = styleProp.ef;
  var styleValue = ((value === null) ? null : value);
  if ((styleValue === null)) {
    prefixes.bl(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.bl(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.ty = (function(element, style, value) {
  var ref = element.bq;
  var styleCssName = style.ee;
  var prefixes = style.ef;
  var styleValue = ((value === null) ? null : $dp_toString__T(value));
  if ((styleValue === null)) {
    prefixes.bl(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.bl(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.rC = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.n0);
});
$p.sk = (function(element, attr) {
  var x = this.sl(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.iH.k6(x));
});
$p.sl = (function(element, attr) {
  var $x_2 = element.kI();
  var this$1 = attr.hr;
  var $x_1 = $x_2.getAttributeNS((this$1.e() ? null : this$1.x()), attr.iI);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.tE = (function(element, attr, value) {
  this.tF(element, attr, attr.iH.k7(value));
});
$p.tF = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.tk(element, attr);
  } else {
    var this$1 = attr.hr;
    if (this$1.e()) {
      element.kI().setAttribute(attr.hq, domValue);
    } else {
      var x0 = this$1.x();
      element.kI().setAttributeNS(x0, attr.hq, domValue);
    }
  }
});
$p.tk = (function(element, attr) {
  var $x_1 = element.kI();
  var this$1 = attr.hr;
  $x_1.removeAttributeNS((this$1.e() ? null : this$1.x()), attr.iI);
});
$p.rA = (function(text) {
  return document.createComment(text);
});
$p.rD = (function(text) {
  return document.createTextNode(text);
});
$p.sA = (function(element) {
  return $m_sc_StringOps$().rm(element.tagName, 45);
});
$p.rG = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.p8(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.p8 = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if (($m_sc_StringOps$(), (id !== ""))) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = (($m_sc_StringOps$(), (classes !== "")) ? ("." + classes.replace(this.lT, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.rF = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  es: 1
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
  this.iC = null;
  this.lU = null;
  this.iB = null;
  this.iC = seq;
  this.lU = scalaArray;
  this.iB = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.bl = (function(f) {
  if ((this.iC !== null)) {
    this.iC.bl(f);
  } else if ((this.iB !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().s0(this.iB, $m_sjs_js_Any$().i2(f));
  } else {
    $m_sc_ArrayOps$().s2(this.lU, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  et: 1
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
  eu: 1
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
  $thiz.hm = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.qf = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    _$1.mM.bq.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cj.bR.e()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((c) => {
      if (ignoreNextActivation.hN) {
        var ev$5 = false;
        ignoreNextActivation.hN = ev$5;
      } else {
        fn.c(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().q1(element.cj, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element$2) => ((owner) => {
      activate.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.hn = null;
  this.mB = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.hn = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.mB = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  eD: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.m4 = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.bv = $thiz.m4;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().hn);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.fV, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().sh(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().tz(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.qe = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().hn, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.hq, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().sk(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().tE(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.mC = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().q.qb();
  $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().q.kE()])));
  $m_Lcom_raquo_laminar_api_package$().q.qb();
  $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().q.kE(), $m_Lcom_raquo_laminar_api_package$().q.t3()])));
  $m_Lcom_raquo_laminar_api_package$().q.rh();
  $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().q.kE(), $m_Lcom_raquo_laminar_api_package$().q.gR()])));
  this.mC = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  eX: 1
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
$p.r6 = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((ctx, owner, hooks) => {
    if ((!ctx.fU)) {
      ctx.pj();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.tS(maybeLastSeenChild.fk, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.fk = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.tS = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.fU)) {
    ctx.pj();
  }
  var elem = ctx.eX;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().p(maybeLastSeenChild.aA(), ctx.eZ.aA().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().sv(ctx.eY, newChildNode, ctx.eZ, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().tl(ctx.eY, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = ((elem$1 - 1) | 0);
    elem$1 = ev$4;
  }
  ctx.ti(newChildNode);
  ctx.ed.clear();
  ctx.ed.set(newChildNode.aA(), newChildNode);
  ctx.eX = 1;
});
var $d_Lcom_raquo_laminar_inserters_ChildInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildInserter$, "com.raquo.laminar.inserters.ChildInserter$", ({
  eY: 1
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
  this.eY = null;
  this.eZ = null;
  this.fU = false;
  this.eX = 0;
  this.ed = null;
  this.eY = parentNode;
  this.eZ = sentinelNode;
  this.fU = strictMode;
  this.eX = extraNodeCount;
  this.ed = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.pj = (function() {
  if ((this.fU || (this.eX !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().rF(this.eY.bq)));
  }
  if ((this.ed === null)) {
    this.ed = new Map();
  }
  if ((!(!(!(this.eZ.aA() instanceof Comment))))) {
    var contentNode = this.eZ;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().su(this.eY.bq, newSentinelNode.iO, contentNode.aA());
    this.eZ = newSentinelNode;
    this.eX = 1;
    this.ed.set(contentNode.aA(), contentNode);
  }
  this.fU = true;
});
$p.ti = (function(after) {
  var elem = this.eX;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = after.aA().nextSibling;
    if ((prevChildRef === null)) {
      var ev$3 = 0;
      elem$1 = ev$3;
    } else {
      var maybePrevChild = this.ed.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        var ev$4 = 0;
        elem$1 = ev$4;
      } else if ((maybePrevChild !== (void 0))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().te(this.eY, maybePrevChild);
        var ev$5 = ((elem$1 - 1) | 0);
        elem$1 = ev$5;
      }
    }
  }
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  f1: 1
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
$p.to = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gu(parentNode, sentinelNode, hooks);
  return this.u2(parentNode, sentinelNode, strictMode);
});
$p.u2 = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  f2: 1
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
$p.pI = (function(items, separator) {
  if ((items === "")) {
    return $m_sci_Nil$();
  } else {
    var this$10 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => {
      $m_sc_StringOps$();
      return (_$1 !== "");
    })));
    $m_sci_List$();
    return $m_sci_Nil$().kH(this$10);
  }
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  f5: 1
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
  this.ho = null;
  this.mL = false;
  this.mK = false;
  this.mJ = null;
  this.ho = eventProp;
  this.mL = shouldUseCapture;
  this.mK = shouldBePassive;
  this.mJ = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  f9: 1
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
$p.i0 = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  fa: 1
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
  this.qh = null;
  this.qi = null;
  this.qj = null;
  this.qk = null;
  this.qh = "http://www.w3.org/2000/svg";
  this.qi = "http://www.w3.org/1999/xlink";
  this.qj = "http://www.w3.org/XML/1998/namespace";
  this.qk = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.sX = (function(namespace) {
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
  fe: 1
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
  this.mM = null;
  this.iJ = null;
  this.mM = thisNode;
  this.iJ = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  ff: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.ql = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.ql = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  fk: 1
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
  this.mV = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.mV = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  fo: 1
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
  this.bD = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.bD = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => _$4.tU())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  ft: 1
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
$p.gu = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.eK(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pL(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().r5(parent.aA(), child.aA());
  if (appended) {
    child.eE(nextParent);
  }
  return appended;
});
$p.te = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().p(child.aA().parentNode, parent.aA())) {
    child.eK($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().tf(parent.aA(), child.aA());
    child.eE($m_s_None$());
  }
  return removed;
});
$p.sv = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.eK(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pL(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().st(parent.aA(), newChild.aA(), referenceChild.aA());
  newChild.eE(nextParent);
  return inserted;
});
$p.tl = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.k1().bA(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.eK($m_s_None$());
      newChild.eK(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.pL(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().tm(parent.aA(), newChild.aA(), oldChild.aA());
      if (replaced) {
        oldChild.eE($m_s_None$());
        newChild.eE(newChildNextParent);
      }
    }
  }
  return replaced;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  fw: 1
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
$p.u1 = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h6(element.cj, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  fy: 1
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
  fC: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
}
var $d_jl_Runnable = new $TypeData().i(1, "java.lang.Runnable", ({
  b5: 1
}));
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().cy("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
  var PatBC = $m_jl_StackTrace$StringRE$().cy("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().cy("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().cy("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().cy("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().cy("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().f7.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.c1) << 24) >> 24) === 0)) {
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
    $thiz.iZ = dict;
    $thiz.c1 = (((1 | $thiz.c1) << 24) >> 24);
  }
  return $thiz.iZ;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.c1) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.iZ);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.c1) << 24) >> 24) === 0)) {
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
    $thiz.j0 = dict;
    $thiz.c1 = (((2 | $thiz.c1) << 24) >> 24);
  }
  return $thiz.j0;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.c1) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.j0);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.c1) << 24) >> 24) === 0)) {
    $thiz.iY = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.c1 = (((4 | $thiz.c1) << 24) >> 24);
  }
  return $thiz.iY;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.c1) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.iY);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().cy("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().bQ("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().bQ("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().bQ("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().bQ("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bQ("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().bQ("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().bQ("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().bQ("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().bQ("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bQ("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bQ("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bQ("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bQ("Line (\\d+).*script (?:in )?(\\S+)", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().bQ("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cy("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cy("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().cy("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().cy("<anonymous function>"), "{anonymous}");
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
  this.iZ = null;
  this.j0 = null;
  this.iY = null;
  this.c1 = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.rT = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  g3: 1
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
$p.cy = (function(this$) {
  return new RegExp(this$);
});
$p.bQ = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  g4: 1
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
  this.f6 = null;
  $n_jl_System$Streams$ = this;
  this.f6 = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  g8: 1
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
  this.j1 = null;
  this.n2 = null;
  $n_jl_System$SystemProperties$ = this;
  this.j1 = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.n2 = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.ko = (function(key, default$1) {
  if ((this.j1 !== null)) {
    var dict = this.j1;
    return ((!(!$m_jl_Utils$Cache$().f7.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.n2.ko(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  g9: 1
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
  this.j2 = false;
  this.n3 = null;
  this.j2 = false;
}
$p = $c_jl_ThreadLocal.prototype = new $h_O();
$p.constructor = $c_jl_ThreadLocal;
/** @constructor */
function $h_jl_ThreadLocal() {
}
$h_jl_ThreadLocal.prototype = $p;
$p.x = (function() {
  if ((!this.j2)) {
    this.h4(null);
  }
  return this.n3;
});
$p.h4 = (function(o) {
  this.n3 = o;
  this.j2 = true;
});
var $d_jl_ThreadLocal = new $TypeData().i($c_jl_ThreadLocal, "java.lang.ThreadLocal", ({
  gb: 1
}));
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.f7 = null;
  $n_jl_Utils$Cache$ = this;
  this.f7 = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  gd: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c8)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  c8: 1
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
$p.bm = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? ((array.a.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  ge: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
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
$p.rd = (function(a, key) {
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
$p.pf = (function(a, b) {
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
$p.k9 = (function(a, b) {
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
$p.pg = (function(a, b) {
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
$p.pe = (function(a, b) {
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
$p.pd = (function(a, b) {
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
$p.ph = (function(a, b) {
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
$p.S = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).a5.Q().a5.U(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.L = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).a5.Q().a5.U(retLength);
  original.s(from, ret, 0, copyLength);
  return ret;
});
$p.rs = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_B(retLength);
  original.s(start, ret, 0, copyLength);
  return ret;
});
$p.ry = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_S(retLength);
  original.s(start, ret, 0, copyLength);
  return ret;
});
$p.rw = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_I(retLength);
  original.s(start, ret, 0, copyLength);
  return ret;
});
$p.rx = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = ((original.a.length >>> 1) | 0);
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_J(retLength);
  original.s(start, ret, 0, copyLength);
  return ret;
});
$p.rt = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_C(retLength);
  original.s(start, ret, 0, copyLength);
  return ret;
});
$p.rv = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_F(retLength);
  original.s(start, ret, 0, copyLength);
  return ret;
});
$p.ru = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_D(retLength);
  original.s(start, ret, 0, copyLength);
  return ret;
});
$p.rz = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_Z(retLength);
  original.s(start, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  gh: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $is_ju_Formattable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.c9)));
}
function $isArrayOf_ju_Formattable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
/** @constructor */
function $c_ju_Formatter$() {
  this.nc = null;
  this.nb = null;
  $n_ju_Formatter$ = this;
  this.nc = new RegExp("(?:(\\d+)\\$)?([-#+ 0,\\(<]*)(\\d+)?(?:\\.(\\d+))?[%A-Za-z]", "g");
  this.nb = new $ac_I(new Int32Array([96, 126, 638, 770, 32, 256, 2, 126, (-1), (-1), (-1), (-1), (-1), (-1), 800, (-1), (-1), (-1), 124, (-1), (-1), (-1), (-1), 544, (-1), (-1)]));
}
$p = $c_ju_Formatter$.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$;
/** @constructor */
function $h_ju_Formatter$() {
}
$h_ju_Formatter$.prototype = $p;
$p.ku = (function(count) {
  if ((count <= 20)) {
    return "00000000000000000000".substring(0, count);
  } else {
    var result = "";
    var remaining = count;
    while ((remaining > 20)) {
      result = (result + "00000000000000000000");
      remaining = ((remaining - 20) | 0);
    }
    var $x_1 = result;
    var endIndex = remaining;
    return (("" + $x_1) + "00000000000000000000".substring(0, endIndex));
  }
});
$p.sG = (function(x) {
  if ((x === 0.0)) {
    return new $c_ju_Formatter$Decimal(((1.0 / x) < 0.0), "0", 0);
  } else {
    var negative$2 = (x < 0.0);
    var d = (negative$2 ? (-x) : x);
    var s = ("" + d);
    var ePos = $f_T__indexOf__I__I(s, 101);
    if ((ePos < 0)) {
      var e = 0;
    } else {
      var $x_2 = parseInt;
      var beginIndex = ((1 + ePos) | 0);
      var $x_1 = $x_2(s.substring(beginIndex));
      var e = ($x_1 | 0);
    }
    var significandEnd = ((ePos < 0) ? s.length : ePos);
    var dotPos = $f_T__indexOf__I__I(s, 46);
    if ((dotPos < 0)) {
      return new $c_ju_Formatter$Decimal(negative$2, s.substring(0, significandEnd), ((-e) | 0));
    } else {
      var $x_3 = s.substring(0, dotPos);
      var beginIndex$1 = ((1 + dotPos) | 0);
      var digits = (("" + $x_3) + s.substring(beginIndex$1, significandEnd));
      var digitsLen = digits.length;
      var i = 0;
      while (((i < digitsLen) && (digits.charCodeAt(i) === 48))) {
        i = ((1 + i) | 0);
      }
      var beginIndex$2 = i;
      return new $c_ju_Formatter$Decimal(negative$2, digits.substring(beginIndex$2), ((((-e) | 0) + ((significandEnd - ((1 + dotPos) | 0)) | 0)) | 0));
    }
  }
});
$p.sF = (function(x) {
  var unscaledValueWithSign = x.us().g();
  if ((unscaledValueWithSign === "0")) {
    return new $c_ju_Formatter$Decimal(false, "0", 0);
  } else {
    var negative = (unscaledValueWithSign.charCodeAt(0) === 45);
    return new $c_ju_Formatter$Decimal(negative, (negative ? unscaledValueWithSign.substring(1) : unscaledValueWithSign), x.un());
  }
});
var $d_ju_Formatter$ = new $TypeData().i($c_ju_Formatter$, "java.util.Formatter$", ({
  gm: 1
}));
var $n_ju_Formatter$;
function $m_ju_Formatter$() {
  if ((!$n_ju_Formatter$)) {
    $n_ju_Formatter$ = new $c_ju_Formatter$();
  }
  return $n_ju_Formatter$;
}
function $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal($thiz, roundingPos) {
  var digits = $thiz.cT;
  var digitsLen = digits.length;
  if ((roundingPos < 0)) {
    return new $c_ju_Formatter$Decimal($thiz.cS, "0", 0);
  } else if ((roundingPos >= digitsLen)) {
    return $thiz;
  } else if ((digits.charCodeAt(roundingPos) < 53)) {
    return ((roundingPos === 0) ? new $c_ju_Formatter$Decimal($thiz.cS, "0", 0) : new $c_ju_Formatter$Decimal($thiz.cS, digits.substring(0, roundingPos), (($thiz.cB - ((digitsLen - roundingPos) | 0)) | 0)));
  } else {
    var lastNonNinePos = ((roundingPos - 1) | 0);
    while (((lastNonNinePos >= 0) && (digits.charCodeAt(lastNonNinePos) === 57))) {
      lastNonNinePos = ((lastNonNinePos - 1) | 0);
    }
    if ((lastNonNinePos < 0)) {
      var newUnscaledValue = "1";
    } else {
      var endIndex = lastNonNinePos;
      var newUnscaledValue = (digits.substring(0, endIndex) + $cToS((65535 & ((1 + digits.charCodeAt(lastNonNinePos)) | 0))));
    }
    var pos = ((1 + lastNonNinePos) | 0);
    var newScale = (($thiz.cB - ((digitsLen - pos) | 0)) | 0);
    return new $c_ju_Formatter$Decimal($thiz.cS, newUnscaledValue, newScale);
  }
}
/** @constructor */
function $c_ju_Formatter$Decimal(negative, unscaledValue, scale) {
  this.cS = false;
  this.cT = null;
  this.cB = 0;
  this.cS = negative;
  this.cT = unscaledValue;
  this.cB = scale;
}
$p = $c_ju_Formatter$Decimal.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$Decimal;
/** @constructor */
function $h_ju_Formatter$Decimal() {
}
$h_ju_Formatter$Decimal.prototype = $p;
$p.py = (function() {
  return (this.cT === "0");
});
$p.pS = (function(precision) {
  $m_ju_Formatter$();
  if ((!(precision > 0))) {
    throw new $c_jl_AssertionError("Decimal.round() called with non-positive precision");
  }
  return $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, precision);
});
$p.tD = (function(newScale) {
  var roundingPos = ((((this.cT.length + newScale) | 0) - this.cB) | 0);
  var rounded = $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, roundingPos);
  $m_ju_Formatter$();
  if ((!(rounded.py() || (rounded.cB <= newScale)))) {
    throw new $c_jl_AssertionError("roundAtPos returned a non-zero value with a scale too large");
  }
  return ((rounded.py() || (rounded.cB === newScale)) ? rounded : new $c_ju_Formatter$Decimal(this.cS, (("" + rounded.cT) + $m_ju_Formatter$().ku(((newScale - rounded.cB) | 0))), newScale));
});
$p.g = (function() {
  return (((((("Decimal(" + this.cS) + ", ") + this.cT) + ", ") + this.cB) + ")");
});
var $d_ju_Formatter$Decimal = new $TypeData().i($c_ju_Formatter$Decimal, "java.util.Formatter$Decimal", ({
  gn: 1
}));
/** @constructor */
function $c_ju_Formatter$LocaleInfo() {
}
$p = $c_ju_Formatter$LocaleInfo.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$LocaleInfo;
/** @constructor */
function $h_ju_Formatter$LocaleInfo() {
}
$h_ju_Formatter$LocaleInfo.prototype = $p;
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.aH, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().ny.exec($thiz.aH);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var end = x.length;
      var i = 0;
      while ((i < end)) {
        var value = i;
        $thiz.Q = ($thiz.Q | $m_ju_regex_PatternCompiler$().pC(x.charCodeAt(value)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.Q) !== 0)) {
      $thiz.Q = (64 | $thiz.Q);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var end$1 = x$1.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var value$1 = i$1;
        $thiz.Q = ($thiz.Q & (~$m_ju_regex_PatternCompiler$().pC(x$1.charCodeAt(value$1))));
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
  var s = $m_ju_regex_PatternCompiler$().ey(cp);
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
        return (((66 & $thiz.Q) !== 2) ? s : (((((cp - 65) | 0) >>> 0) <= 25) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().ey(((32 + cp) | 0))) + "]") : (((((cp - 97) | 0) >>> 0) <= 25) ? ((("[" + $m_ju_regex_PatternCompiler$().ey(((cp - 32) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.aH;
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
          $thiz.kw();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.aH;
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
  var pattern = $thiz.aH;
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
  var end = ($thiz.bT.length | 0);
  var i = 0;
  while ((i < end)) {
    var value = i;
    var mapped = ($thiz.bT[value] | 0);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.bT[value] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = compiledToken.replace($m_ju_regex_PatternCompiler$().nz, ((arg1$2, arg2$2, arg3$2) => {
    var num = arg2$2.length;
    var t = ((num >>> 31) | 0);
    if (((((1 & ((num + t) | 0)) - t) | 0) === 0)) {
      return arg1$2;
    } else {
      var groupNumber = (parseInt(arg3$2, 10) | 0);
      return ((groupNumber > compiledGroupCountBeforeThisToken) ? (("" + arg2$2) + ((1 + groupNumber) | 0)) : arg1$2);
    }
  }));
  $thiz.bS = ((1 + $thiz.bS) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.aH;
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
      var x1$2 = cls.hu;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + cls.cC) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + cls.cC) + "}");
          break;
        }
        case 2: {
          return (("[" + cls.cC) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().i6(cls.cC);
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
      } else if (((320 & $thiz.Q) !== 0)) {
        $thiz.fu("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.Q) !== 0)) {
        $thiz.fu("\\B with UNICODE_CASE", "2018");
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
      return (("(?=" + (((1 & $thiz.Q) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])")) + "?$)");
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
          var $x_1 = ((parseInt(s, 10) | 0) <= ((($thiz.bT.length | 0) - 1) | 0));
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
      if ((groupNumber > ((($thiz.bT.length | 0) - 1) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = ($thiz.bT[groupNumber] | 0);
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
      var dict = $thiz.g1;
      if ((!(!(!$m_jl_Utils$Cache$().f7.call(dict, groupName))))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = (dict[groupName] | 0);
      var compiledGroupNumber$2 = ($thiz.bT[groupNumber$2] | 0);
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
  var pattern = $thiz.aH;
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
  var pattern = $thiz.aH;
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
  var pattern = $thiz.aH;
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
  var pattern = $thiz.aH;
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
  var pattern = $thiz.aH;
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
      var positive = $m_ju_regex_PatternCompiler$().nt;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().nw;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().nu;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().nx;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().nv;
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
  return ((dispatchChar >= 97) ? positive : positive.sY());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.aH;
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
  var dict = $m_ju_regex_PatternCompiler$().j8;
  if ((!(!(!$m_jl_Utils$Cache$().f7.call(dict, property))))) {
    $thiz.fu("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.Q) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().j8;
  var result = dict$1[property2];
  $thiz.b = ((1 + $thiz.b) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.aH;
  var len = pattern.length;
  $thiz.b = ((1 + $thiz.b) | 0);
  var isNegated = (($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 94));
  if (isNegated) {
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.Q) === 2), isNegated);
  while (($thiz.b !== len)) {
    var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return builder.rZ();
          break;
        }
        case 38: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if ((($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 38))) {
            $thiz.b = ((1 + $thiz.b) | 0);
            builder.tM();
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
              builder.qP($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
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
              builder.qR(pattern, $thiz.b, end);
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
          if (((4 & $thiz.Q) !== 0)) {
            $thiz.b = ((1 + $thiz.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & $thiz.Q) !== 0)) {
            $thiz.kw();
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
  var pattern = $thiz.aH;
  var len = pattern.length;
  var start = $thiz.b;
  if (((((1 + start) | 0) === len) || (pattern.charCodeAt(((1 + start) | 0)) !== 63))) {
    $thiz.b = ((1 + start) | 0);
    $thiz.bS = ((1 + $thiz.bS) | 0);
    $thiz.bT.push($thiz.bS);
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
        var dict = $thiz.g1;
        if ((!(!$m_jl_Utils$Cache$().f7.call(dict, name)))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.bS = ((1 + $thiz.bS) | 0);
        $thiz.bT.push($thiz.bS);
        var dict$1 = $thiz.g1;
        var value = ((($thiz.bT.length | 0) - 1) | 0);
        dict$1[name] = value;
        $thiz.b = ((1 + $thiz.b) | 0);
        return (("(" + $thiz.gO(true)) + ")");
      } else {
        if (((c2 !== 33) && (c2 !== 61))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.fu("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.b = ((3 + start) | 0);
      $thiz.bS = ((1 + $thiz.bS) | 0);
      var groupNumber = $thiz.bS;
      return (((("(?:(?=(" + $thiz.gO(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.aH;
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
  if (((4 & $thiz.Q) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if ((($thiz.b !== len$2) && (pattern$3.charCodeAt($thiz.b) === 45))) {
    $thiz.b = ((1 + $thiz.b) | 0);
    if (((4 & $thiz.Q) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.b === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I(pattern$3, $thiz.b);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      builder$1.hU(startCodePoint);
      builder$1.hU(45);
    } else {
      $thiz.b = (($thiz.b + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      builder$1.qQ(startCodePoint, endCodePoint);
    }
  } else {
    builder$1.hU(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.aH = null;
  this.Q = 0;
  this.ht = false;
  this.b = 0;
  this.bS = 0;
  this.bT = null;
  this.g1 = null;
  this.aH = pattern;
  this.Q = flags;
  this.ht = false;
  this.b = 0;
  this.bS = 0;
  this.bT = [0];
  this.g1 = ({});
}
$p = $c_ju_regex_PatternCompiler.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $p;
$p.rl = (function() {
  if (((256 & this.Q) !== 0)) {
    this.Q = (64 | this.Q);
  }
  var isLiteral = ((16 & this.Q) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.Q) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.Q) !== 0)) {
    this.fu("MULTILINE", "2018");
  }
  if (((256 & this.Q) !== 0)) {
    this.fu("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.aH);
  } else {
    if ((this.aH.substring(this.b, ((2 + this.b) | 0)) === "\\G")) {
      this.ht = true;
      this.b = ((2 + this.b) | 0);
    }
    var jsPattern = this.gO(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().j7 ? "us" : "u");
  var jsFlags = (((66 & this.Q) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.aH, this.Q, jsPattern, jsFlags, this.ht, (((this.bT.length | 0) - 1) | 0), this.bT, this.g1);
});
$p.fu = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$p.gO = (function(insideGroup) {
  var pattern = this.aH;
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
          if ((this.ht && (!insideGroup))) {
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
          if (((4 & this.Q) !== 0)) {
            this.b = ((1 + this.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & this.Q) !== 0)) {
            this.kw();
            break matchResult;
          }
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().ey(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.bS;
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
          var rejected = (((32 & this.Q) !== 0) ? "" : (((1 & this.Q) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().i6(rejected);
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
$p.kw = (function() {
  var pattern = this.aH;
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
  gF: 1
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
  this.ny = null;
  this.nz = null;
  this.qq = false;
  this.qp = false;
  this.j7 = false;
  this.nt = null;
  this.qm = null;
  this.nw = null;
  this.nu = null;
  this.qn = null;
  this.nx = null;
  this.nv = null;
  this.qo = null;
  this.j8 = null;
  this.qr = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.ny = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.nz = new RegExp("(\\\\+)(\\d+)", "g");
  this.qq = true;
  this.qp = true;
  this.j7 = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.nt = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.qm = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.nw = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.nu = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.qn = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.nx = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.nv = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.qo = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
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
  this.j8 = r;
  this.qr = new RegExp("(?:^|_)[a-z]", "g");
}
$p = $c_ju_regex_PatternCompiler$.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $p;
$p.rk = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).rl();
});
$p.pC = (function(c) {
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
$p.i6 = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().j7 ? "." : "[\\d\\D]"));
});
$p.ey = (function(codePoint) {
  return String.fromCodePoint(codePoint);
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().i($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  gG: 1
}));
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
  }
  return $n_ju_regex_PatternCompiler$;
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.c2 === "")) {
    $thiz.c2 = alt;
  } else {
    $thiz.c2 = (($thiz.c2 + "|") + alt);
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.ja) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().i6($thiz.V);
    return (($thiz.c2 === "") ? negThisSegment : (((("(?:(?!" + $thiz.c2) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.V === "") ? (($thiz.c2 === "") ? "[^\\d\\D]" : (("(?:" + $thiz.c2) + ")")) : (($thiz.c2 === "") ? (("[" + $thiz.V) + "]") : (((("(?:" + $thiz.c2) + "|[") + $thiz.V) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().ey(codePoint);
  return (((((((codePoint - 92) | 0) >>> 0) <= 1) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.j9 = false;
  this.ja = false;
  this.g2 = null;
  this.c2 = null;
  this.V = null;
  this.j9 = asciiCaseInsensitive;
  this.ja = isNegated;
  this.g2 = "";
  this.c2 = "";
  this.V = "";
}
$p = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $p;
$p.rZ = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.g2 === "") ? conjunct : ((("(?:" + this.g2) + conjunct) + ")"));
});
$p.tM = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.g2 = (this.g2 + (this.ja ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.c2 = "";
  this.V = "";
});
$p.qP = (function(cls) {
  var x1 = cls.hu;
  switch (x1) {
    case 0: {
      this.V = ((this.V + ("\\p{" + cls.cC)) + "}");
      break;
    }
    case 1: {
      this.V = ((this.V + ("\\P{" + cls.cC)) + "}");
      break;
    }
    case 2: {
      this.V = (("" + this.V) + cls.cC);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().i6(cls.cC));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$p.qR = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I(str, i);
    this.hU(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$p.hU = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.V = (("" + s) + this.V);
  } else {
    this.V = (("" + this.V) + s);
  }
  if (this.j9) {
    if (((((codePoint - 65) | 0) >>> 0) <= 25)) {
      this.V = (("" + this.V) + $m_ju_regex_PatternCompiler$().ey(((32 + codePoint) | 0)));
    } else if (((((codePoint - 97) | 0) >>> 0) <= 25)) {
      this.V = (("" + this.V) + $m_ju_regex_PatternCompiler$().ey(((codePoint - 32) | 0)));
    }
  }
});
$p.qQ = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.V = (s + this.V);
  } else {
    this.V = (this.V + s);
  }
  if (this.j9) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.V;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.V = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
    }
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.V;
      var start$3 = ((start$2 - 32) | 0);
      var end$3 = ((end$2 - 32) | 0);
      this.V = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().i($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
  gH: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.jb)) {
    $thiz.jc = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.hu), $thiz.cC);
    $thiz.jb = true;
  }
  return $thiz.jc;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.jc = null;
  this.hu = 0;
  this.cC = null;
  this.jb = false;
  this.hu = kind;
  this.cC = data;
}
$p = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $p;
$p.sY = (function() {
  return ((!this.jb) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.jc);
});
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().i($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  gI: 1
}));
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().td(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().tc(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rL(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rK(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().kl(value);
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
  return $m_RTLong$().kM(lo, hi);
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
$p.kM = (function(lo, hi) {
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
$p.kl = (function(value) {
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
$p.rK = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.ib(rlo, rhi, rlo$1, rhi$1, true);
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
$p.rL = (function(alo, ahi, blo, bhi) {
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
    return this.ib(alo, ahi, blo, bhi, true);
  }
});
$p.tc = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.ib(rlo, rhi, rlo$1, rhi$1, false);
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
$p.td = (function(alo, ahi, blo, bhi) {
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
    return this.ib(alo, ahi, blo, bhi, false);
  }
});
$p.ib = (function(alo, ahi, blo, bhi, askQuotient) {
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
  gK: 1
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
  this.hv = null;
  $n_s_$less$colon$less$ = this;
  this.hv = new $c_s_$less$colon$less$$anon$1();
}
$p = $c_s_$less$colon$less$.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $p;
var $d_s_$less$colon$less$ = new $TypeData().i($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  gN: 1
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
    $m_sr_ScalaRunTime$().hX(dest, j, $m_sr_ScalaRunTime$().dX(src, i));
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
$p.pk = (function(it, evidence$1) {
  var n = it.w();
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
    var elementClass = evidence$1.aU();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.m();
    while (iterator$2.o()) {
      var elem = iterator$2.l();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h1(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().h0(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
});
$p.gJ = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.a5.Z && $objectGetClass(dest).a5.R(srcClass.a5))) {
    src.s(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.pi = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().p(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  gP: 1
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
  this.jd = null;
  this.nD = null;
  $n_s_Array$EmptyArrays$ = this;
  this.jd = new $ac_I(0);
  this.nD = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  gQ: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  b8: 1
}));
var $d_F1 = new $TypeData().i(1, "scala.Function1", ({
  f: 1
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
$p.jX = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  gW: 1
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
  this.hy = null;
  this.hx = null;
  $n_s_PartialFunction$ = this;
  this.hy = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => this.hy));
  this.hx = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
$p.tt = (function(x) {
  return (this.hy === x);
});
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  gX: 1
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
  this.nJ = null;
  $n_sc_ArrayOps$ = this;
  this.nJ = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $m_sc_ArrayOps$().nJ));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.tK = (function(this$, from, until) {
  var lo = ((from > 0) ? from : 0);
  var b = $m_jl_reflect_Array$().bm(this$);
  var hi = ((until < b) ? until : b);
  if ((hi > lo)) {
    if ((this$ instanceof $ac_O)) {
      return $m_ju_Arrays$().L(this$, lo, hi);
    } else if ((this$ instanceof $ac_I)) {
      return $m_ju_Arrays$().rw(this$, lo, hi);
    } else if ((this$ instanceof $ac_D)) {
      return $m_ju_Arrays$().ru(this$, lo, hi);
    } else if ((this$ instanceof $ac_J)) {
      return $m_ju_Arrays$().rx(this$, lo, hi);
    } else if ((this$ instanceof $ac_F)) {
      return $m_ju_Arrays$().rv(this$, lo, hi);
    } else if ((this$ instanceof $ac_C)) {
      return $m_ju_Arrays$().rt(this$, lo, hi);
    } else if ((this$ instanceof $ac_B)) {
      return $m_ju_Arrays$().rs(this$, lo, hi);
    } else if ((this$ instanceof $ac_S)) {
      return $m_ju_Arrays$().ry(this$, lo, hi);
    } else if ((this$ instanceof $ac_Z)) {
      return $m_ju_Arrays$().rz(this$, lo, hi);
    } else {
      throw new $c_s_MatchError(this$);
    }
  } else {
    return $m_s_reflect_ClassTag$().jS($objectGetClass(this$).a5.Q()).bt(0);
  }
});
$p.u8 = (function(this$) {
  var b = new ($d_T2.r().C)($m_jl_reflect_Array$().bm(this$));
  var i = 0;
  while ((i < $m_jl_reflect_Array$().bm(this$))) {
    b.a[i] = $ct_T2__O__O__(new $c_T2(), $m_sr_ScalaRunTime$().dX(this$, i), i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.s2 = (function(this$, f) {
  var len = $m_jl_reflect_Array$().bm(this$);
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
  h5: 1
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
$p.cv = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  ha: 1
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
  while (it.o()) {
    f.c(it.l());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.m();
  while ((res && it.o())) {
    res = (!(!p.c(it.l())));
  }
  return res;
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  var x30 = $thiz.w();
  if ((x30 === (-1))) {
    return (!$thiz.m().o());
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
    var x31 = $thiz.w();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().bm(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().bm(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.o())) {
    $m_sr_ScalaRunTime$().hX(dest, i, it.l());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.w() === 0) ? (("" + start) + end) : $thiz.dV($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).b4.r);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.b4;
  if ((start.length !== 0)) {
    jsb.r = (("" + jsb.r) + start);
  }
  var it = $thiz.m();
  if (it.o()) {
    var obj = it.l();
    jsb.r = (("" + jsb.r) + obj);
    while (it.o()) {
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
  if (($thiz.w() >= 0)) {
    var length = $thiz.w();
    var destination = evidence$1.bt(length);
    $thiz.bB(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.aU();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.m();
    while (it.o()) {
      var elem = it.l();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h1(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().h0(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.nU = null;
  this.g7 = null;
  this.nU = head;
  this.g7 = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.so = (function() {
  return this.nU.M().m();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  hn: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.nX = null;
  $n_sc_StringOps$ = this;
  this.nX = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.nX));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.rm = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.tL = (function(this$, from, until) {
  var start = ((from > 0) ? from : 0);
  var that = this$.length;
  var end = ((until < that) ? until : that);
  return ((start >= end) ? "" : this$.substring(start, end));
});
$p.tu = (function(this$, arg) {
  return (false ? arg.ur() : arg);
});
$p.s5 = (function(this$, args) {
  return $m_jl_String$().s3(this$, $m_sr_Arrays$().tw(args.cg(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((arg$2) => this.tu(this$, arg$2)))), $d_O.l()));
});
$p.q2 = (function(this$, n) {
  var y = this$.length;
  return this.tL(this$, 0, ((n < y) ? n : y));
});
$p.pX = (function(this$, size, step) {
  return new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$7$2) => _$7$2.aR)), $f_sc_IndexedSeqOps__sliding__I__I__sc_Iterator(new $c_sci_WrappedString(this$), size, step));
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  hw: 1
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
$p.kr = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  hB: 1
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
  this.o2 = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().pz($m_jl_System$SystemProperties$().ko("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.o2 = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  hK: 1
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
  hN: 1
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
  this.js = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.ka = (function() {
  var state = this.js;
  if ((state === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "uninitialized");
  }
  return state.M();
});
$p.ks = (function(state) {
  if ((this.js !== null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "already initialized");
  }
  this.js = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  hP: 1
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
  hR: 1
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
  this.o5 = null;
  $n_sci_MapNode$ = this;
  $m_s_reflect_ManifestFactory$IntManifest$();
  this.o5 = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  i6: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (($m_jl_reflect_Array$().bm(as) - 1) | 0)));
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
$p.pP = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > ((as.a.length - 1) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((as.a.length - 1) | 0));
  as.s(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = ((((as.a.length - ix) | 0) - 1) | 0);
  as.s(srcPos, result, ix, length);
  return result;
});
$p.sw = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.s(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.s(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  bi: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.gf = 0;
  $n_sci_Node$ = this;
  this.gf = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.ez = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.dZ = (function(mask) {
  return (1 << mask);
});
$p.sq = (function(bitmap, bitpos) {
  return $m_jl_Integer$().dY((bitmap & ((bitpos - 1) | 0)));
});
$p.cM = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.sq(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  i9: 1
}));
var $n_sci_Node$;
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$();
  }
  return $n_sci_Node$;
}
function $p_sci_VectorSliceBuilder__addSlice__I__AO__I__I__V($thiz, n, a, lo, hi) {
  var hi$tailLocal1 = hi;
  var lo$tailLocal1 = lo;
  var a$tailLocal1 = a;
  var n$tailLocal1 = n;
  while (true) {
    if ((n$tailLocal1 === 1)) {
      var a$1 = a$tailLocal1;
      var start = lo$tailLocal1;
      var end = hi$tailLocal1;
      $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, 1, (((start | (end ^ a$1.a.length)) === 0) ? a$1 : $m_ju_Arrays$().L(a$1, start, end)));
      return (void 0);
    } else {
      var bitsN = Math.imul(5, ((n$tailLocal1 - 1) | 0));
      var widthN = (1 << bitsN);
      var loN = ((lo$tailLocal1 >>> bitsN) | 0);
      var hiN = ((hi$tailLocal1 >>> bitsN) | 0);
      var loRest = (lo$tailLocal1 & ((widthN - 1) | 0));
      var hiRest = (hi$tailLocal1 & ((widthN - 1) | 0));
      if ((loRest === 0)) {
        if ((hiRest === 0)) {
          var $x_1 = n$tailLocal1;
          var a$2 = a$tailLocal1;
          $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $x_1, (((loN | (hiN ^ a$2.a.length)) === 0) ? a$2 : $m_ju_Arrays$().L(a$2, loN, hiN)));
          return (void 0);
        } else {
          if ((hiN > loN)) {
            var $x_2 = n$tailLocal1;
            var a$3 = a$tailLocal1;
            $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $x_2, (((loN | (hiN ^ a$3.a.length)) === 0) ? a$3 : $m_ju_Arrays$().L(a$3, loN, hiN)));
          }
          var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
          var a$tailLocal1$tmp1 = a$tailLocal1.a[hiN];
          n$tailLocal1 = n$tailLocal1$tmp1;
          a$tailLocal1 = a$tailLocal1$tmp1;
          lo$tailLocal1 = 0;
          hi$tailLocal1 = hiRest;
        }
      } else if ((hiN === loN)) {
        var n$tailLocal1$tmp2 = ((n$tailLocal1 - 1) | 0);
        var a$tailLocal1$tmp2 = a$tailLocal1.a[loN];
        n$tailLocal1 = n$tailLocal1$tmp2;
        a$tailLocal1 = a$tailLocal1$tmp2;
        lo$tailLocal1 = loRest;
        hi$tailLocal1 = hiRest;
      } else {
        $p_sci_VectorSliceBuilder__addSlice__I__AO__I__I__V($thiz, ((n$tailLocal1 - 1) | 0), a$tailLocal1.a[loN], loRest, widthN);
        if ((hiRest === 0)) {
          if ((hiN > ((1 + loN) | 0))) {
            var $x_3 = n$tailLocal1;
            var a$4 = a$tailLocal1;
            var start$1 = ((1 + loN) | 0);
            $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $x_3, (((start$1 | (hiN ^ a$4.a.length)) === 0) ? a$4 : $m_ju_Arrays$().L(a$4, start$1, hiN)));
            return (void 0);
          } else {
            return (void 0);
          }
        } else {
          if ((hiN > ((1 + loN) | 0))) {
            var $x_4 = n$tailLocal1;
            var a$5 = a$tailLocal1;
            var start$2 = ((1 + loN) | 0);
            $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $x_4, (((start$2 | (hiN ^ a$5.a.length)) === 0) ? a$5 : $m_ju_Arrays$().L(a$5, start$2, hiN)));
          }
          var n$tailLocal1$tmp3 = ((n$tailLocal1 - 1) | 0);
          var a$tailLocal1$tmp3 = a$tailLocal1.a[hiN];
          n$tailLocal1 = n$tailLocal1$tmp3;
          a$tailLocal1 = a$tailLocal1$tmp3;
          lo$tailLocal1 = 0;
          hi$tailLocal1 = hiRest;
        }
      }
    }
  }
}
function $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, n, a) {
  if ((n <= $thiz.bz)) {
    var idx = ((11 - n) | 0);
  } else {
    $thiz.bz = n;
    var idx = ((n - 1) | 0);
  }
  $thiz.u.a[idx] = a;
}
function $p_sci_VectorSliceBuilder__balancePrefix__I__V($thiz, n) {
  if (($thiz.u.a[((n - 1) | 0)] === null)) {
    if ((n === $thiz.bz)) {
      $thiz.u.a[((n - 1) | 0)] = $thiz.u.a[((11 - n) | 0)];
      $thiz.u.a[((11 - n) | 0)] = null;
    } else {
      $p_sci_VectorSliceBuilder__balancePrefix__I__V($thiz, ((1 + n) | 0));
      var preN1 = $thiz.u.a[((((1 + n) | 0) - 1) | 0)];
      $thiz.u.a[((n - 1) | 0)] = preN1.a[0];
      if ((preN1.a.length === 1)) {
        $thiz.u.a[((((1 + n) | 0) - 1) | 0)] = null;
        if ((($thiz.bz === ((1 + n) | 0)) && ($thiz.u.a[((11 - ((1 + n) | 0)) | 0)] === null))) {
          $thiz.bz = n;
        }
      } else {
        $thiz.u.a[((((1 + n) | 0) - 1) | 0)] = $m_ju_Arrays$().L(preN1, 1, preN1.a.length);
      }
    }
  }
}
function $p_sci_VectorSliceBuilder__balanceSuffix__I__V($thiz, n) {
  if (($thiz.u.a[((11 - n) | 0)] === null)) {
    if ((n === $thiz.bz)) {
      $thiz.u.a[((11 - n) | 0)] = $thiz.u.a[((n - 1) | 0)];
      $thiz.u.a[((n - 1) | 0)] = null;
    } else {
      $p_sci_VectorSliceBuilder__balanceSuffix__I__V($thiz, ((1 + n) | 0));
      var sufN1 = $thiz.u.a[((11 - ((1 + n) | 0)) | 0)];
      $thiz.u.a[((11 - n) | 0)] = sufN1.a[((sufN1.a.length - 1) | 0)];
      if ((sufN1.a.length === 1)) {
        $thiz.u.a[((11 - ((1 + n) | 0)) | 0)] = null;
        if ((($thiz.bz === ((1 + n) | 0)) && ($thiz.u.a[((((1 + n) | 0) - 1) | 0)] === null))) {
          $thiz.bz = n;
        }
      } else {
        $thiz.u.a[((11 - ((1 + n) | 0)) | 0)] = $m_ju_Arrays$().L(sufN1, 0, ((sufN1.a.length - 1) | 0));
      }
    }
  }
}
/** @constructor */
function $c_sci_VectorSliceBuilder(lo, hi) {
  this.jx = 0;
  this.jw = 0;
  this.u = null;
  this.cr = 0;
  this.fe = 0;
  this.bz = 0;
  this.jx = lo;
  this.jw = hi;
  this.u = new ($d_O.r().r().C)(11);
  this.cr = 0;
  this.fe = 0;
  this.bz = 0;
}
$p = $c_sci_VectorSliceBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorSliceBuilder;
/** @constructor */
function $h_sci_VectorSliceBuilder() {
}
$h_sci_VectorSliceBuilder.prototype = $p;
$p.K = (function(n, a) {
  var count = Math.imul(a.a.length, (1 << Math.imul(5, ((n - 1) | 0))));
  var a$1 = ((this.jx - this.fe) | 0);
  var lo0 = ((a$1 > 0) ? a$1 : 0);
  var a$2 = ((this.jw - this.fe) | 0);
  var hi0 = ((a$2 < count) ? a$2 : count);
  if ((hi0 > lo0)) {
    $p_sci_VectorSliceBuilder__addSlice__I__AO__I__I__V(this, n, a, lo0, hi0);
    this.cr = ((this.cr + ((hi0 - lo0) | 0)) | 0);
  }
  this.fe = ((this.fe + count) | 0);
});
$p.e6 = (function() {
  if ((this.cr <= 32)) {
    if ((this.cr === 0)) {
      return $m_sci_Vector0$();
    } else {
      var prefix1 = this.u.a[0];
      var suffix1 = this.u.a[10];
      if ((prefix1 !== null)) {
        if ((suffix1 !== null)) {
          var dest = $m_ju_Arrays$().S(prefix1, ((prefix1.a.length + suffix1.a.length) | 0));
          var destPos = prefix1.a.length;
          var length = suffix1.a.length;
          suffix1.s(0, dest, destPos, length);
          var $x_1 = dest;
        } else {
          var $x_1 = prefix1;
        }
      } else if ((suffix1 !== null)) {
        var $x_1 = suffix1;
      } else {
        var prefix2 = this.u.a[1];
        var $x_1 = ((prefix2 !== null) ? prefix2.a[0] : this.u.a[9].a[0]);
      }
      return new $c_sci_Vector1($x_1);
    }
  } else {
    $p_sci_VectorSliceBuilder__balancePrefix__I__V(this, 1);
    $p_sci_VectorSliceBuilder__balanceSuffix__I__V(this, 1);
    var resultDim = this.bz;
    if ((resultDim < 6)) {
      var pre = this.u.a[((this.bz - 1) | 0)];
      var suf = this.u.a[((11 - this.bz) | 0)];
      if (((pre !== null) && (suf !== null))) {
        if ((((pre.a.length + suf.a.length) | 0) <= 30)) {
          var $x_3 = this.u;
          var $x_2 = this.bz;
          var dest$1 = $m_ju_Arrays$().S(pre, ((pre.a.length + suf.a.length) | 0));
          var destPos$1 = pre.a.length;
          var length$1 = suf.a.length;
          suf.s(0, dest$1, destPos$1, length$1);
          $x_3.a[(($x_2 - 1) | 0)] = dest$1;
          this.u.a[((11 - this.bz) | 0)] = null;
        } else {
          resultDim = ((1 + resultDim) | 0);
        }
      } else {
        var one = ((pre !== null) ? pre : suf);
        if ((one === null)) {
          $m_sr_Scala3RunTime$().ba();
        }
        if ((one.a.length > 30)) {
          resultDim = ((1 + resultDim) | 0);
        }
      }
    }
    var x$proxy1 = this.u.a[0];
    if ((x$proxy1 === null)) {
      $m_sr_Scala3RunTime$().ba();
    }
    var x$proxy2 = this.u.a[10];
    if ((x$proxy2 === null)) {
      $m_sr_Scala3RunTime$().ba();
    }
    var len1 = x$proxy1.a.length;
    var x27 = resultDim;
    switch (x27) {
      case 2: {
        var a$1 = $m_sci_VectorStatics$().ao;
        var p = this.u.a[1];
        if ((p !== null)) {
          var $x_4 = p;
        } else {
          var s = this.u.a[9];
          var $x_4 = ((s !== null) ? s : a$1);
        }
        return new $c_sci_Vector2(x$proxy1, len1, $x_4, x$proxy2, this.cr);
        break;
      }
      case 3: {
        var a$2 = $m_sci_VectorStatics$().ao;
        var p$1 = this.u.a[1];
        var prefix2$2 = ((p$1 !== null) ? p$1 : a$2);
        var a$3 = $m_sci_VectorStatics$().bj;
        var p$2 = this.u.a[2];
        if ((p$2 !== null)) {
          var $x_5 = p$2;
        } else {
          var s$1 = this.u.a[8];
          var $x_5 = ((s$1 !== null) ? s$1 : a$3);
        }
        var a$4 = $m_sci_VectorStatics$().ao;
        var s$2 = this.u.a[9];
        return new $c_sci_Vector3(x$proxy1, len1, prefix2$2, ((len1 + (prefix2$2.a.length << 5)) | 0), $x_5, ((s$2 !== null) ? s$2 : a$4), x$proxy2, this.cr);
        break;
      }
      case 4: {
        var a$5 = $m_sci_VectorStatics$().ao;
        var p$3 = this.u.a[1];
        var prefix2$3 = ((p$3 !== null) ? p$3 : a$5);
        var a$6 = $m_sci_VectorStatics$().bj;
        var p$4 = this.u.a[2];
        var prefix3 = ((p$4 !== null) ? p$4 : a$6);
        var a$7 = $m_sci_VectorStatics$().cs;
        var p$5 = this.u.a[3];
        if ((p$5 !== null)) {
          var $x_6 = p$5;
        } else {
          var s$3 = this.u.a[7];
          var $x_6 = ((s$3 !== null) ? s$3 : a$7);
        }
        var data4 = $x_6;
        var a$8 = $m_sci_VectorStatics$().bj;
        var s$4 = this.u.a[8];
        var suffix3 = ((s$4 !== null) ? s$4 : a$8);
        var a$9 = $m_sci_VectorStatics$().ao;
        var s$5 = this.u.a[9];
        var suffix2$3 = ((s$5 !== null) ? s$5 : a$9);
        var len12$2 = ((len1 + (prefix2$3.a.length << 5)) | 0);
        return new $c_sci_Vector4(x$proxy1, len1, prefix2$3, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data4, suffix3, suffix2$3, x$proxy2, this.cr);
        break;
      }
      case 5: {
        var a$10 = $m_sci_VectorStatics$().ao;
        var p$6 = this.u.a[1];
        var prefix2$4 = ((p$6 !== null) ? p$6 : a$10);
        var a$11 = $m_sci_VectorStatics$().bj;
        var p$7 = this.u.a[2];
        var prefix3$2 = ((p$7 !== null) ? p$7 : a$11);
        var a$12 = $m_sci_VectorStatics$().cs;
        var p$8 = this.u.a[3];
        var prefix4 = ((p$8 !== null) ? p$8 : a$12);
        var a$13 = $m_sci_VectorStatics$().ff;
        var p$9 = this.u.a[4];
        if ((p$9 !== null)) {
          var $x_7 = p$9;
        } else {
          var s$6 = this.u.a[6];
          var $x_7 = ((s$6 !== null) ? s$6 : a$13);
        }
        var data5 = $x_7;
        var a$14 = $m_sci_VectorStatics$().cs;
        var s$7 = this.u.a[7];
        var suffix4 = ((s$7 !== null) ? s$7 : a$14);
        var a$15 = $m_sci_VectorStatics$().bj;
        var s$8 = this.u.a[8];
        var suffix3$2 = ((s$8 !== null) ? s$8 : a$15);
        var a$16 = $m_sci_VectorStatics$().ao;
        var s$9 = this.u.a[9];
        var suffix2$4 = ((s$9 !== null) ? s$9 : a$16);
        var len12$3 = ((len1 + (prefix2$4.a.length << 5)) | 0);
        var len123$2 = ((len12$3 + (prefix3$2.a.length << 10)) | 0);
        return new $c_sci_Vector5(x$proxy1, len1, prefix2$4, len12$3, prefix3$2, len123$2, prefix4, ((len123$2 + (prefix4.a.length << 15)) | 0), data5, suffix4, suffix3$2, suffix2$4, x$proxy2, this.cr);
        break;
      }
      case 6: {
        var a$17 = $m_sci_VectorStatics$().ao;
        var p$10 = this.u.a[1];
        var prefix2$5 = ((p$10 !== null) ? p$10 : a$17);
        var a$18 = $m_sci_VectorStatics$().bj;
        var p$11 = this.u.a[2];
        var prefix3$3 = ((p$11 !== null) ? p$11 : a$18);
        var a$19 = $m_sci_VectorStatics$().cs;
        var p$12 = this.u.a[3];
        var prefix4$2 = ((p$12 !== null) ? p$12 : a$19);
        var a$20 = $m_sci_VectorStatics$().ff;
        var p$13 = this.u.a[4];
        var prefix5 = ((p$13 !== null) ? p$13 : a$20);
        var a$21 = $m_sci_VectorStatics$().jz;
        var p$14 = this.u.a[5];
        if ((p$14 !== null)) {
          var $x_8 = p$14;
        } else {
          var s$10 = this.u.a[5];
          var $x_8 = ((s$10 !== null) ? s$10 : a$21);
        }
        var data6 = $x_8;
        var a$22 = $m_sci_VectorStatics$().ff;
        var s$11 = this.u.a[6];
        var suffix5 = ((s$11 !== null) ? s$11 : a$22);
        var a$23 = $m_sci_VectorStatics$().cs;
        var s$12 = this.u.a[7];
        var suffix4$2 = ((s$12 !== null) ? s$12 : a$23);
        var a$24 = $m_sci_VectorStatics$().bj;
        var s$13 = this.u.a[8];
        var suffix3$3 = ((s$13 !== null) ? s$13 : a$24);
        var a$25 = $m_sci_VectorStatics$().ao;
        var s$14 = this.u.a[9];
        var suffix2$5 = ((s$14 !== null) ? s$14 : a$25);
        var len12$4 = ((len1 + (prefix2$5.a.length << 5)) | 0);
        var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
        var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
        return new $c_sci_Vector6(x$proxy1, len1, prefix2$5, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data6, suffix5, suffix4$2, suffix3$3, suffix2$5, x$proxy2, this.cr);
        break;
      }
      default: {
        throw new $c_s_MatchError(x27);
      }
    }
  }
});
$p.g = (function() {
  return (((((((((("VectorSliceBuilder(lo=" + this.jx) + ", hi=") + this.jw) + ", len=") + this.cr) + ", pos=") + this.fe) + ", maxDim=") + this.bz) + ")");
});
var $d_sci_VectorSliceBuilder = new $TypeData().i($c_sci_VectorSliceBuilder, "scala.collection.immutable.VectorSliceBuilder", ({
  is: 1
}));
/** @constructor */
function $c_sci_VectorStatics$() {
  this.jy = null;
  this.ao = null;
  this.bj = null;
  this.cs = null;
  this.ff = null;
  this.jz = null;
  $n_sci_VectorStatics$ = this;
  this.jy = new $ac_O(0);
  this.ao = new ($d_O.r().r().C)(0);
  this.bj = new ($d_O.r().r().r().C)(0);
  this.cs = new ($d_O.r().r().r().r().C)(0);
  this.ff = new ($d_O.r().r().r().r().r().C)(0);
  this.jz = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.fn = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.s(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.E = (function(a, elem) {
  var ac = $m_ju_Arrays$().S(a, ((1 + a.a.length) | 0));
  ac.a[((ac.a.length - 1) | 0)] = elem;
  return ac;
});
$p.cI = (function(elem, a) {
  var ac = $objectGetClass(a).a5.Q().a5.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.s(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.kf = (function(level, a, f) {
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
      this.kf(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.ch = (function(a, f) {
  var i = 0;
  while ((i < a.a.length)) {
    var v1 = a.a[i];
    var v2 = f.c(v1);
    if ((!Object.is(v1, v2))) {
      return this.sQ(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.sQ = (function(a, f, at, v2) {
  var ac = new $ac_O(a.a.length);
  if ((at > 0)) {
    a.s(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = f.c(a.a[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.a7 = (function(n, a, f) {
  if ((n === 1)) {
    return this.ch(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.a7(((n - 1) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.sR(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.sR = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).a5.Q().a5.U(a.a.length);
  if ((at > 0)) {
    a.s(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.a7(((n - 1) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  it: 1
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
    var result$2 = runtimeClass.a5.U(len);
    var i$2 = 0;
    while ((i$2 !== len)) {
      $m_sr_ScalaRunTime$().hX(result$2, i$2, a[i$2]);
      i$2 = ((1 + i$2) | 0);
    }
    return result$2;
  }
});
var $d_scm_ArrayBuilder$ = new $TypeData().i($c_scm_ArrayBuilder$, "scala.collection.mutable.ArrayBuilder$", ({
  iA: 1
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
  this.fi = null;
  this.da = 0;
  this.b3 = null;
  this.fi = _key;
  this.da = _hash;
  this.b3 = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.rY = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.da) && $m_sr_BoxesRunTime$().p(k, \u03b4this$tailLocal1.fi))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.b3 === null) || (\u03b4this$tailLocal1.da > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.b3;
    }
  }
});
$p.g = (function() {
  return ((((("Node(" + this.fi) + ", ") + this.da) + ") -> ") + this.b3);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  iO: 1
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
$p.p2 = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  iU: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
function $ct_s_concurrent_BatchingExecutor$AbstractBatch__jl_Runnable__Ajl_Runnable__I__($thiz, first, other, size) {
  $thiz.gk = first;
  $thiz.gl = other;
  $thiz.dQ = size;
  return $thiz;
}
function $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable($thiz, curSize) {
  var curOther = $thiz.gl;
  var curLen = curOther.a.length;
  if ((curSize <= curLen)) {
    return curOther;
  } else {
    var newLen = ((curLen === 0) ? 4 : (curLen << 1));
    if ((newLen <= curLen)) {
      throw new $c_jl_StackOverflowError(("Space limit of asynchronous stack reached: " + curLen));
    }
    var newOther = new ($d_jl_Runnable.r().C)(newLen);
    curOther.s(0, newOther, 0, curLen);
    $thiz.gl = newOther;
    return newOther;
  }
}
/** @constructor */
function $c_s_concurrent_BatchingExecutor$AbstractBatch() {
  this.gk = null;
  this.gl = null;
  this.dQ = 0;
}
$p = $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutor$AbstractBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$AbstractBatch() {
}
$h_s_concurrent_BatchingExecutor$AbstractBatch.prototype = $p;
$p.t7 = (function(r) {
  var sz = this.dQ;
  if ((sz === 0)) {
    this.gk = r;
  } else {
    $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable(this, sz).a[((sz - 1) | 0)] = r;
  }
  this.dQ = ((1 + sz) | 0);
});
$p.ts = (function(n) {
  var n$tailLocal1 = n;
  while (true) {
    if ((n$tailLocal1 > 0)) {
      var x1 = this.dQ;
      if ((x1 === 0)) {
        return (void 0);
      }
      if ((x1 === 1)) {
        var x$proxy1 = this.gk;
        if ((x$proxy1 === null)) {
          $m_sr_Scala3RunTime$().ba();
        }
        this.gk = null;
        this.dQ = 0;
        x$proxy1.eC();
        n$tailLocal1 = ((n$tailLocal1 - 1) | 0);
        continue;
      }
      var o = this.gl;
      var x$proxy2 = o.a[((x1 - 2) | 0)];
      if ((x$proxy2 === null)) {
        $m_sr_Scala3RunTime$().ba();
      }
      o.a[((x1 - 2) | 0)] = null;
      this.dQ = ((x1 - 1) | 0);
      x$proxy2.eC();
      n$tailLocal1 = ((n$tailLocal1 - 1) | 0);
    } else {
      return (void 0);
    }
  }
});
/** @constructor */
function $c_s_concurrent_BatchingExecutorStatics$() {
  this.on = null;
  $n_s_concurrent_BatchingExecutorStatics$ = this;
  this.on = new ($d_jl_Runnable.r().C)(0);
}
$p = $c_s_concurrent_BatchingExecutorStatics$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutorStatics$;
/** @constructor */
function $h_s_concurrent_BatchingExecutorStatics$() {
}
$h_s_concurrent_BatchingExecutorStatics$.prototype = $p;
var $d_s_concurrent_BatchingExecutorStatics$ = new $TypeData().i($c_s_concurrent_BatchingExecutorStatics$, "scala.concurrent.BatchingExecutorStatics$", ({
  j1: 1
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
  this.oo = null;
  this.op = false;
  this.fj = null;
  $n_s_concurrent_ExecutionContext$ = this;
  this.fj = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$3) => {
    _$1$3.gZ($m_jl_System$Streams$().f6);
  }));
}
$p = $c_s_concurrent_ExecutionContext$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$() {
}
$h_s_concurrent_ExecutionContext$.prototype = $p;
$p.cf = (function() {
  if ((!this.op)) {
    this.oo = $m_sjs_concurrent_JSExecutionContext$().oB;
    this.op = true;
  }
  return this.oo;
});
var $d_s_concurrent_ExecutionContext$ = new $TypeData().i($c_s_concurrent_ExecutionContext$, "scala.concurrent.ExecutionContext$", ({
  j2: 1
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
  this.or = null;
  this.ot = null;
  this.os = null;
  this.jK = null;
  this.ou = null;
  this.ov = null;
  $n_s_concurrent_Future$ = this;
  $m_sci_Map$().pn(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $d_Z.l(), $d_jl_Boolean.l()), $ct_T2__O__O__(new $c_T2(), $d_B.l(), $d_jl_Byte.l()), $ct_T2__O__O__(new $c_T2(), $d_C.l(), $d_jl_Character.l()), $ct_T2__O__O__(new $c_T2(), $d_S.l(), $d_jl_Short.l()), $ct_T2__O__O__(new $c_T2(), $d_I.l(), $d_jl_Integer.l()), $ct_T2__O__O__(new $c_T2(), $d_J.l(), $d_jl_Long.l()), $ct_T2__O__O__(new $c_T2(), $d_F.l(), $d_jl_Float.l()), $ct_T2__O__O__(new $c_T2(), $d_D.l(), $d_jl_Double.l()), $ct_T2__O__O__(new $c_T2(), $d_V.l(), $d_jl_Void.l())]));
  this.or = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2) => {
    throw new $c_s_concurrent_Future$$anon$1(t$2);
  }));
  this.ot = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$2());
  this.os = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$3());
  $m_s_concurrent_Future$().ps(this.os);
  this.jK = $m_s_concurrent_Future$().rV(new $c_s_concurrent_Future$$anon$4());
  this.ou = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2$1) => this.jK));
  this.ov = this.ps(new $c_s_util_Success((void 0)));
}
$p = $c_s_concurrent_Future$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Future$;
/** @constructor */
function $h_s_concurrent_Future$() {
}
$h_s_concurrent_Future$.prototype = $p;
$p.rV = (function(exception) {
  return $m_s_concurrent_Promise$().rW(exception);
});
$p.ps = (function(result) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result);
});
$p.jY = (function(body, executor) {
  return this.ov.i8(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$4$2) => body.M())), executor);
});
var $d_s_concurrent_Future$ = new $TypeData().i($c_s_concurrent_Future$, "scala.concurrent.Future$", ({
  j4: 1
}));
var $n_s_concurrent_Future$;
function $m_s_concurrent_Future$() {
  if ((!$n_s_concurrent_Future$)) {
    $n_s_concurrent_Future$ = new $c_s_concurrent_Future$();
  }
  return $n_s_concurrent_Future$;
}
function $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result) {
  if ($thiz.tY(result)) {
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
$p.rW = (function(exception) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), new $c_s_util_Failure(exception));
});
var $d_s_concurrent_Promise$ = new $TypeData().i($c_s_concurrent_Promise$, "scala.concurrent.Promise$", ({
  j9: 1
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
  this.gm = null;
  $n_s_concurrent_impl_Promise$ = this;
  this.gm = $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 0, null, $m_s_concurrent_ExecutionContext$parasitic$());
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
    var t = value.dd;
    return (((false || false) || (t instanceof $c_jl_Error)) ? (false ? new $c_s_util_Success(t.qc()) : new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Exception", t))) : value);
  }
});
var $d_s_concurrent_impl_Promise$ = new $TypeData().i($c_s_concurrent_impl_Promise$, "scala.concurrent.impl.Promise$", ({
  ja: 1
}));
var $n_s_concurrent_impl_Promise$;
function $m_s_concurrent_impl_Promise$() {
  if ((!$n_s_concurrent_impl_Promise$)) {
    $n_s_concurrent_impl_Promise$ = new $c_s_concurrent_impl_Promise$();
  }
  return $n_s_concurrent_impl_Promise$;
}
function $is_s_concurrent_impl_Promise$Callbacks(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aS)));
}
function $isArrayOf_s_concurrent_impl_Promise$Callbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aS)));
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.qx = null;
  this.qG = null;
  this.qy = null;
  this.qB = null;
  this.qC = null;
  this.qA = null;
  this.qz = null;
  this.qw = null;
  this.qH = null;
  this.qv = null;
  this.qF = null;
  this.qD = null;
  this.qE = null;
  $n_s_reflect_ClassTag$ = this;
  this.qx = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.qG = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.qy = $m_s_reflect_ManifestFactory$CharManifest$();
  this.qB = $m_s_reflect_ManifestFactory$IntManifest$();
  this.qC = $m_s_reflect_ManifestFactory$LongManifest$();
  this.qA = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.qz = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.qw = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.qH = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.qv = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.qF = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qD = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.qE = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.jS = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  jc: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
/** @constructor */
function $c_sr_Arrays$() {
}
$p = $c_sr_Arrays$.prototype = new $h_O();
$p.constructor = $c_sr_Arrays$;
/** @constructor */
function $h_sr_Arrays$() {
}
$h_sr_Arrays$.prototype = $p;
$p.tw = (function(xs, clazz) {
  var length = xs.n();
  var arr = clazz.a5.U(length);
  xs.bB(arr, 0, 2147483647);
  return arr;
});
var $d_sr_Arrays$ = new $TypeData().i($c_sr_Arrays$, "scala.runtime.Arrays$", ({
  jE: 1
}));
var $n_sr_Arrays$;
function $m_sr_Arrays$() {
  if ((!$n_sr_Arrays$)) {
    $n_sr_Arrays$ = new $c_sr_Arrays$();
  }
  return $n_sr_Arrays$;
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
$p.p = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.rS(x, y) : ((x instanceof $Char) ? this.rQ(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.rS = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.rR(xn, y);
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
$p.rR = (function(xn, yn) {
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
      return (false && yn.i(x2));
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
      return (false && yn.i($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.rQ = (function(xc, y) {
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
  jG: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  jK: 1
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
$p.ba = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  jM: 1
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
$p.dX = (function(xs, idx) {
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
$p.cc = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.U(), (x.C() + "("), ",", ")");
});
$p.se = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().h7(xs));
});
$p.bd = (function(xs) {
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
  jN: 1
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
$p.y = (function(hash, data) {
  var h = this.di(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.di = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.aG = (function(hash, length) {
  return this.rc((hash ^ length));
});
$p.rc = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.sL = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.rN = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().kl(dv);
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
$p.N = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.rN((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.sL($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.sx = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  jP: 1
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
  jQ: 1
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
  this.oB = null;
  $n_sjs_concurrent_JSExecutionContext$ = this;
  this.oB = $m_sjs_concurrent_QueueExecutionContext$().r8();
}
$p = $c_sjs_concurrent_JSExecutionContext$.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_JSExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_JSExecutionContext$() {
}
$h_sjs_concurrent_JSExecutionContext$.prototype = $p;
var $d_sjs_concurrent_JSExecutionContext$ = new $TypeData().i($c_sjs_concurrent_JSExecutionContext$, "scala.scalajs.concurrent.JSExecutionContext$", ({
  jR: 1
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
$p.r8 = (function() {
  return (((typeof Promise) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext());
});
var $d_sjs_concurrent_QueueExecutionContext$ = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$, "scala.scalajs.concurrent.QueueExecutionContext$", ({
  jS: 1
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
$p.kL = (function(this$) {
  var p2 = $ct_s_concurrent_impl_Promise$DefaultPromise__(new $c_s_concurrent_impl_Promise$DefaultPromise());
  this$.then(((arg1$2) => {
    $f_s_concurrent_Promise__success__O__s_concurrent_Promise(p2, arg1$2);
  }), $m_sjs_js_defined$().oZ(((arg1$2$1) => {
    $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(p2, ((arg1$2$1 instanceof $c_jl_Throwable) ? arg1$2$1 : new $c_sjs_js_JavaScriptException(arg1$2$1)));
  })));
  return p2;
});
var $d_sjs_js_Thenable$ThenableOps$ = new $TypeData().i($c_sjs_js_Thenable$ThenableOps$, "scala.scalajs.js.Thenable$ThenableOps$", ({
  jY: 1
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
$p.oZ = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  k1: 1
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
$p.tG = (function(interval, body) {
  return setTimeout((() => {
    body.M();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  k2: 1
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
$p.q3 = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.hO;
  } else {
    var result = [];
    seq.bl(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  kb: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
function $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable($thiz) {
  return ($m_s_util_control_NoStackTrace$().oH ? $c_jl_Throwable.prototype.fo.call($thiz) : $thiz);
}
/** @constructor */
function $c_s_util_control_NoStackTrace$() {
  this.oH = false;
  this.oH = false;
}
$p = $c_s_util_control_NoStackTrace$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NoStackTrace$;
/** @constructor */
function $h_s_util_control_NoStackTrace$() {
}
$h_s_util_control_NoStackTrace$.prototype = $p;
var $d_s_util_control_NoStackTrace$ = new $TypeData().i($c_s_util_control_NoStackTrace$, "scala.util.control.NoStackTrace$", ({
  ke: 1
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
$p.hW = (function(t) {
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
$p.fB = (function(t) {
  return (this.hW(t) ? new $c_s_Some(t) : $m_s_None$());
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  kf: 1
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
$p.y = (function(hash, data) {
  var h = this.di(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.di = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.aG = (function(hash, length) {
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
$p.q7 = (function(x, y, seed) {
  var h = seed;
  h = this.y(h, $f_T__hashCode__I("Tuple2"));
  h = this.y(h, x);
  h = this.y(h, y);
  return this.aG(h, 2);
});
$p.bP = (function(x, seed, ignorePrefix) {
  var arr = x.A();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.C()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.y(h, $f_T__hashCode__I(x.C()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.y(h, $m_sr_Statics$().N(x.B(i)));
      i = ((1 + i) | 0);
    }
    return this.aG(h, arr);
  }
});
$p.k0 = (function(x, seed, caseClassName) {
  var arr = x.A();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.C()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.y(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.y(h, $m_sr_Statics$().N(x.B(i)));
      i = ((1 + i) | 0);
    }
    return this.aG(h, arr);
  }
});
$p.kN = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.m();
  while (iterator.o()) {
    var x = iterator.l();
    var h = $m_sr_Statics$().N(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.y(h$2, a);
  h$2 = this.y(h$2, b);
  h$2 = this.di(h$2, c);
  return this.aG(h$2, n);
});
$p.t5 = (function(xs, seed) {
  var it = xs.m();
  var h = seed;
  if ((!it.o())) {
    return this.aG(h, 0);
  }
  var x0 = it.l();
  if ((!it.o())) {
    return this.aG(this.y(h, $m_sr_Statics$().N(x0)), 1);
  }
  var x1 = it.l();
  var initial = $m_sr_Statics$().N(x0);
  h = this.y(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().N(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.o()) {
    h = this.y(h, prev);
    var hash = $m_sr_Statics$().N(it.l());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.y(h, hash);
      i = ((1 + i) | 0);
      while (it.o()) {
        h = this.y(h, $m_sr_Statics$().N(it.l()));
        i = ((1 + i) | 0);
      }
      return this.aG(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.h3(this.y(this.y(h0, rangeDiff), prev));
});
$p.aT = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().bm(a);
  switch (l) {
    case 0: {
      return this.aG(h, 0);
      break;
    }
    case 1: {
      return this.aG(this.y(h, $m_sr_Statics$().N($m_sr_ScalaRunTime$().dX(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().N($m_sr_ScalaRunTime$().dX(a, 0));
      h = this.y(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().N($m_sr_ScalaRunTime$().dX(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.y(h, prev);
        var hash = $m_sr_Statics$().N($m_sr_ScalaRunTime$().dX(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.y(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.y(h, $m_sr_Statics$().N($m_sr_ScalaRunTime$().dX(a, i)));
            i = ((1 + i) | 0);
          }
          return this.aG(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.h3(this.y(this.y(h0, rangeDiff), prev));
    }
  }
});
$p.ta = (function(start, step, last, seed) {
  return this.h3(this.y(this.y(this.y(seed, start), step), last));
});
$p.sr = (function(a, seed) {
  var h = seed;
  var l = a.n();
  switch (l) {
    case 0: {
      return this.aG(h, 0);
      break;
    }
    case 1: {
      return this.aG(this.y(h, $m_sr_Statics$().N(a.t(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().N(a.t(0));
      h = this.y(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().N(a.t(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.y(h, prev);
        var hash = $m_sr_Statics$().N(a.t(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.y(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.y(h, $m_sr_Statics$().N(a.t(i)));
            i = ((1 + i) | 0);
          }
          return this.aG(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.h3(this.y(this.y(h0, rangeDiff), prev));
    }
  }
});
$p.sK = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.e())) {
    var head = elems.z();
    var tail = elems.v();
    var hash = $m_sr_Statics$().N(head);
    h = this.y(h, hash);
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
  return ((rangeState === 2) ? this.ta(initial, rangeDiff, prev, seed) : this.aG(h, n));
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
$p.qa = (function(s) {
  return s;
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$, "com.github.pwharned.clausula.extension.domain.Sentence$package$Sentence$s$", ({
  dN: 1,
  bA: 1
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
$p.qa = (function(a) {
  return a;
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$, "com.github.pwharned.clausula.extension.domain.Word$package$Word$given_ToText_Word$", ({
  dR: 1,
  bA: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$;
function $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$ = new $c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$;
}
function $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__extractTextWithoutFurigana__Lorg_scalajs_dom_Node__T($thiz, node) {
  var this$1 = node.nodeName;
  if ((this$1.toLowerCase() === "rt")) {
    return "";
  } else if (((node.nodeType | 0) === (Node.TEXT_NODE | 0))) {
    return node.textContent;
  } else {
    var result = "";
    var child = node.firstChild;
    while ((child !== null)) {
      result = (("" + result) + $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__extractTextWithoutFurigana__Lorg_scalajs_dom_Node__T($thiz, child));
      child = child.nextSibling;
    }
    return result;
  }
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
  var chars = $m_sc_StringOps$().q2(text, 200);
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
            if (new $c_sci_$colon$colon($bC(1711), new $c_sci_$colon$colon($bC(1670), new $c_sci_$colon$colon($bC(1662), new $c_sci_$colon$colon($bC(1688), new $c_sci_$colon$colon($bC(1740), new $c_sci_$colon$colon($bC(1705), $m_sci_Nil$())))))).bA($bC(x0$3))) {
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
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction() {
}
$p = $c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction() {
}
$h_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction.prototype = $p;
$p.q6 = (function(word, sentence) {
  var this$2 = $m_sc_StringOps$().pX(sentence, 200, ($m_sc_StringOps$(), 1));
  _return: {
    while (this$2.o()) {
      var a = this$2.l();
      if (((a.indexOf(word) | 0) !== (-1))) {
        var x1 = new $c_s_Some(a);
        break _return;
      }
    }
    var x1 = $m_s_None$();
  }
  if ((x1 instanceof $c_s_Some)) {
    var value = x1.cU;
    var lastSpace = $f_T__lastIndexOf__I__I(value, 32);
    var this$8 = new $c_sc_Iterator$$anon$16($m_sc_StringOps$().pX(sentence, word.length, ($m_sc_StringOps$(), 1)));
    _return$1: {
      while (this$8.o()) {
        var a$1 = this$8.ia();
        var x$2 = a$1.aS();
        if (((x$2 === null) ? (word === null) : $dp_equals__O__Z(x$2, word))) {
          var $x_1 = new $c_s_Some(a$1);
          break _return$1;
        }
      }
      var $x_1 = $m_s_None$();
    }
    if ((($x_1.x().aJ() | 0) === ((sentence.length - word.length) | 0))) {
      return $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$().hV(value);
    } else {
      return $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$().hV($m_sc_StringOps$().q2(value, lastSpace));
    }
  }
  if (($m_s_None$() === x1)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), (((("Could not find word " + word) + " in ") + sentence) + " "));
  }
  throw new $c_s_MatchError(x1);
});
$p.rU = (function(word, node) {
  return $m_s_concurrent_Future$().jY(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var text = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__extractTextWithoutFurigana__Lorg_scalajs_dom_Node__T(this, node);
    if (((text === null) || (text === ""))) {
      return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$());
    } else {
      var x8 = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__findSentenceContaining__T__T__s_Option(this, text, word);
      if ((x8 instanceof $c_s_Some)) {
        return this.q6(word, x8.cU);
      }
      if (($m_s_None$() === x8)) {
        matchResult2: {
          var parentText;
          var x4 = node.parentNode;
          if ((x4 === null)) {
            var parentText = text;
            break matchResult2;
          }
          var parentText = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__extractTextWithoutFurigana__Lorg_scalajs_dom_Node__T(this, x4);
        }
        var x5 = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__findSentenceContaining__T__T__s_Option(this, parentText, word);
        if ((x5 instanceof $c_s_Some)) {
          return this.q6(word, x5.cU);
        }
        if (($m_s_None$() === x5)) {
          return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$());
        }
        throw new $c_s_MatchError(x5);
      }
      throw new $c_s_MatchError(x8);
    }
  })), $m_s_concurrent_ExecutionContext$().cf());
});
$p.rH = (function(sentence) {
  return $m_s_concurrent_Future$().jY(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    document.documentElement.lang;
    return new $c_s_util_Right($p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__detectByScript__T__Lcom_github_pwharned_clausula_extension_domain_Language(this, sentence));
  })), $m_s_concurrent_ExecutionContext$().cf());
});
var $d_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction, "com.github.pwharned.clausula.extension.interpreters.DomTextExtraction", ({
  dS: 1,
  dn: 1
}));
function $p_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient__post__sjs_js_Object__s_concurrent_Future($thiz, body) {
  return $m_sjs_js_Thenable$ThenableOps$().kL(new Promise(((resolve$2, _$1$2) => {
    var message = ({
      "type": "ANKI_REQUEST",
      "payload": body
    });
    return chrome.runtime.sendMessage(message, $m_sjs_js_Any$().i2(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((response$2) => {
      var lastError = chrome.runtime.lastError;
      return (((lastError !== null) && (!$m_sr_BoxesRunTime$().p(lastError, (void 0)))) ? (console.error(("Chrome runtime error: " + lastError.message)), resolve$2(new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$()))) : (((response$2 === null) || $m_sr_BoxesRunTime$().p(response$2, (void 0))) ? resolve$2(new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$())) : ((!(!response$2.success)) ? (console.log(("AnkiConnect response: " + JSON.stringify(response$2.data))), resolve$2(new $c_s_util_Right(response$2.data))) : (console.error(("AnkiConnect failed: " + response$2.error)), resolve$2(new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$()))))));
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
$p.qT = (function(note) {
  var $x_1 = note.fJ;
  var this$2 = note.fG;
  var s = (("" + $x_1) + (this$2.e() ? "" : this$2.x()));
  var this$5 = note.fK;
  var s$1 = (this$5.e() ? "" : this$5.x());
  var fields = ({
    "Text": s,
    "Translation": s$1
  });
  var d = note.fH;
  var _2 = [...$m_sjsr_Compat$().q3(note.fI)];
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
  })).i8(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    if ((x$1$2 instanceof $c_s_util_Left)) {
      return new $c_s_util_Left(x$1$2.dS);
    }
    if ((x$1$2 instanceof $c_s_util_Right)) {
      var response = x$1$2.bN;
      var error = response.error;
      if (((error === null) || $m_sr_BoxesRunTime$().p(error, (void 0)))) {
        var $x_2 = $m_RTLong$().kl((+response.result));
        return new $c_s_util_Right($x_2);
      } else {
        console.error(("AnkiConnect error: " + error));
        return new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, error));
      }
    }
    throw new $c_s_MatchError(x$1$2);
  })), $m_s_concurrent_ExecutionContext$().cf());
});
var $d_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient, "com.github.pwharned.clausula.extension.interpreters.FetchAnkiClient", ({
  dT: 1,
  dl: 1
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
$p.sd = (function(word, sentence, language) {
  return $m_sjs_js_Thenable$ThenableOps$().kL(new Promise(((resolve$2, _$1$2) => {
    var s = language.ev();
    var message = ({
      "type": "AUDIO_REQUEST",
      "word": word,
      "sentence": sentence,
      "lang": s
    });
    return chrome.runtime.sendMessage(message, $m_sjs_js_Any$().i2(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((response$2) => {
      var lastError = chrome.runtime.lastError;
      if (((lastError !== null) && (!$m_sr_BoxesRunTime$().p(lastError, (void 0))))) {
        var message$1 = (((((((("Audio runtime error: " + lastError.message) + " for {") + word) + ", ") + sentence) + " ") + language.gL()) + " ");
        console.error(message$1);
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, message$1)));
      } else if (((response$2 === null) || $m_sr_BoxesRunTime$().p(response$2, (void 0)))) {
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, (((((("No response from background worker  for {" + word) + ", ") + sentence) + " ") + language.gL()) + " "))));
      } else if ((!(!response$2.success))) {
        var filename = response$2.filename;
        console.log(("Audio stored: " + filename));
        return resolve$2(new $c_s_util_Right((("[sound:" + filename) + "]")));
      } else {
        var error = response$2.error;
        console.error((((((("Audio error: for {" + word) + ", ") + sentence) + ": ") + language.gL()) + " "));
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, error)));
      }
    }))));
  })));
});
var $d_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration, "com.github.pwharned.clausula.extension.interpreters.FetchAudioGeneration", ({
  dU: 1,
  dm: 1
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
$p.q5 = (function(text, source, target, t) {
  return $m_sjs_js_Thenable$ThenableOps$().kL(new Promise(((resolve$2, _$1$2) => {
    var s = t.qa(text);
    var s$1 = source.ev();
    var s$2 = target.ev();
    var message = ({
      "type": "TRANSLATE_REQUEST",
      "text": s,
      "langSrc": s$1,
      "langTgt": s$2
    });
    return chrome.runtime.sendMessage(message, $m_sjs_js_Any$().i2(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((response$2) => {
      var lastError = chrome.runtime.lastError;
      if (((lastError !== null) && (!$m_sr_BoxesRunTime$().p(lastError, (void 0))))) {
        console.error(("Translation runtime error: " + lastError.message));
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, lastError.message)));
      } else if (((response$2 === null) || $m_sr_BoxesRunTime$().p(response$2, (void 0)))) {
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, "No response from background worker")));
      } else if ((!(!response$2.success))) {
        var translatedText = response$2.result;
        matchResult1: {
          var detectedLang;
          var x1 = response$2.detectedLang;
          if (((x1 === null) || $m_sr_BoxesRunTime$().p(x1, (void 0)))) {
            var detectedLang = $m_s_None$();
            break matchResult1;
          }
          var detectedLang = new $c_s_Some($m_Lcom_github_pwharned_clausula_extension_domain_Language$().sa(x1));
        }
        console.log(((((((("Translation result: " + source.ev()) + " to ") + target.ev()) + " ") + translatedText) + ", detected: ") + detectedLang));
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
  dV: 1,
  dp: 1
}));
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.bZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $thiz.fw(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $thiz.fx(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.fy(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.fy(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.lD = null;
  this.lC = null;
  this.iv = false;
  this.lC = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.iv = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.fA = (function() {
  return this.lD;
});
$p.p4 = (function(x$0) {
  this.lD = x$0;
});
$p.pM = (function(subscription) {
  if (this.iv) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.lC.M();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.pE = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.iv = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  eh: 1,
  bN: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.lX = null;
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
$p.fA = (function() {
  return this.lX;
});
$p.p4 = (function(x$0) {
  this.lX = x$0;
});
$p.pE = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.pM = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  ey: 1,
  bN: 1
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
$p.k7 = (function(scalaValue) {
  return scalaValue;
});
$p.k6 = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  eE: 1,
  bQ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.mG = null;
  this.mI = null;
  this.mH = null;
  this.iE = null;
  this.mG = getRawDomValue;
  this.mI = setRawDomValue;
  this.mH = separator;
  this.iE = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.bO = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().q.qI(), $m_Lcom_raquo_laminar_keys_CompositeKey$().pI(items, this.mH)));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  f4: 1,
  ac: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.iF = null;
  this.iF = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.p9 = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().pI(domValue, this.iF);
});
$p.pb = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.iF, "");
});
$p.k6 = (function(domValue) {
  return this.p9(domValue);
});
$p.k7 = (function(scalaValue) {
  return this.pb(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  f6: 1,
  bQ: 1
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
  f8: 1,
  f7: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.hp = null;
  this.hp = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  fb: 1,
  ac: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.fV = null;
  this.iG = null;
  this.fV = name;
  this.iG = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  fc: 1,
  ac: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.f0 = null;
  this.f0 = name;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bT)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  bT: 1,
  ac: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.iI = null;
  this.iH = null;
  this.hq = null;
  this.hr = null;
  this.iI = localName;
  this.iH = codec;
  var this$2 = (namespacePrefix.e() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.x() + ":") + localName)));
  this.hq = (this$2.e() ? localName : this$2.x());
  this.hr = (namespacePrefix.e() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().sX(namespacePrefix.x())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  fd: 1,
  ac: 1
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
$p.ct = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  fl: 1,
  a9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.mU = null;
  this.mU = f$2;
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
$p.ct = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.mU.c(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.be || (!when))) {
    f();
  } else {
    this$2.be = true;
    try {
      f();
    } finally {
      this$2.be = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  fm: 1,
  a9: 1
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
  fp: 1,
  fn: 1
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
  fr: 1,
  fq: 1
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
  this.mW = null;
  this.mW = render$2;
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
$p.rb = (function(value) {
  return this.mW.c(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  fu: 1,
  fs: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.p5(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().rG($thiz.aA(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.iV = null;
  this.iV = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.az = (function(modifiers) {
  var element = this.rf();
  modifiers.bl(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((modifier) => {
    modifier.ct(element);
  })));
  return element;
});
$p.rf = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().rB(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  fE: 1,
  bX: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.n0 = null;
  this.n0 = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  fF: 1,
  bX: 1
}));
/** @constructor */
function $c_jl_Character$() {
  this.iW = null;
  $n_jl_Character$ = this;
  this.iW = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.ig = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.rI = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().rd(this.iW, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.iW.a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  fO: 1,
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
$p.pz = (function(s, radix, overflowBarrier) {
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
    var x = character.rI(s.charCodeAt(i), radix);
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
$p.dY = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  fS: 1,
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
function $c_jl_Long$() {
}
$p = $c_jl_Long$.prototype = new $h_O();
$p.constructor = $c_jl_Long$;
/** @constructor */
function $h_jl_Long$() {
}
$h_jl_Long$.prototype = $p;
$p.pB = (function(lo, hi) {
  if ((hi !== 0)) {
    var $x_1 = (hi >>> 0.0).toString(16);
    var s = (lo >>> 0.0).toString(16);
    var beginIndex = s.length;
    return ($x_1 + (("" + "00000000".substring(beginIndex)) + s));
  } else {
    return (lo >>> 0.0).toString(16);
  }
});
$p.sE = (function(lo, hi) {
  var lp = (1073741823 & lo);
  var mp = (1073741823 & ((((lo >>> 30) | 0) + (hi << 2)) | 0));
  var hp = ((hi >>> 28) | 0);
  if ((hp !== 0)) {
    var $x_2 = (hp >>> 0.0).toString(8);
    var s = (mp >>> 0.0).toString(8);
    var beginIndex = s.length;
    var $x_1 = "0000000000".substring(beginIndex);
    var s$1 = (lp >>> 0.0).toString(8);
    var beginIndex$1 = s$1.length;
    return (($x_2 + (("" + $x_1) + s)) + (("" + "0000000000".substring(beginIndex$1)) + s$1));
  } else if ((mp !== 0)) {
    var $x_3 = (mp >>> 0.0).toString(8);
    var s$2 = (lp >>> 0.0).toString(8);
    var beginIndex$2 = s$2.length;
    return ($x_3 + (("" + "0000000000".substring(beginIndex$2)) + s$2));
  } else {
    return (lp >>> 0.0).toString(8);
  }
});
var $d_jl_Long$ = new $TypeData().i($c_jl_Long$, "java.lang.Long$", ({
  fX: 1,
  a: 1
}));
var $n_jl_Long$;
function $m_jl_Long$() {
  if ((!$n_jl_Long$)) {
    $n_jl_Long$ = new $c_jl_Long$();
  }
  return $n_jl_Long$;
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.f3 = null;
  this.fZ = null;
  this.f4 = null;
  this.f5 = 0;
  this.f2 = 0;
  this.f3 = declaringClass;
  this.fZ = methodName;
  this.f4 = fileName;
  this.f5 = lineNumber;
  this.f2 = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.i = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.f4 === that.f4) && (this.f5 === that.f5)) && (this.f2 === that.f2)) && (this.f3 === that.f3)) && (this.fZ === that.fZ)));
});
$p.g = (function() {
  var result = "";
  if ((this.f3 !== "<jscode>")) {
    result = ((("" + result) + this.f3) + ".");
  }
  result = (("" + result) + this.fZ);
  if ((this.f4 === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.f4);
    if ((this.f5 >= 0)) {
      result = ((result + ":") + this.f5);
      if ((this.f2 >= 0)) {
        result = ((result + ":") + this.f2);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.k = (function() {
  return (((($f_T__hashCode__I(this.f3) ^ $f_T__hashCode__I(this.fZ)) ^ $f_T__hashCode__I(this.f4)) ^ this.f5) ^ this.f2);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c6)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  c6: 1,
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
$p.sZ = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  var result = "";
  var i = offset;
  while ((i !== end)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
$p.s3 = (function(format, args) {
  return $ct_ju_Formatter__(new $c_ju_Formatter()).s4(format, args).g();
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  g6: 1,
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
  $thiz.n5 = s;
  $thiz.g0 = e;
  $thiz.n6 = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fo();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.n5 = null;
    this.g0 = null;
    this.n6 = false;
    this.n4 = null;
    this.eh = null;
  }
  pv(cause) {
    this.g0 = cause;
    return this;
  }
  bn() {
    return this.n5;
  }
  fo() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.T : this);
    this.n4 = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  i3() {
    if ((this.eh === null)) {
      if (this.n6) {
        this.eh = $m_jl_StackTrace$().rT(this.n4);
      } else {
        this.eh = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.eh;
  }
  gZ(s) {
    this.i3();
    var t = this.g();
    s.eB(t);
    if ((this.eh.a.length !== 0)) {
      var i = 0;
      while ((i < this.eh.a.length)) {
        var t$1 = ("  at " + this.eh.a[i]);
        s.eB(t$1);
        i = ((1 + i) | 0);
      }
    } else {
      s.eB("  <no stack trace available>");
    }
    var wCause = this;
    while (((wCause !== wCause.g0) && (wCause.g0 !== null))) {
      var parentTrace = wCause.i3();
      wCause = wCause.g0;
      var thisTrace = wCause.i3();
      var thisLength = thisTrace.a.length;
      var parentLength = parentTrace.a.length;
      var t$2 = ("Caused by: " + wCause);
      s.eB(t$2);
      if ((thisLength !== 0)) {
        var sameFrameCount = 0;
        while (true) {
          if (((sameFrameCount < thisLength) && (sameFrameCount < parentLength))) {
            var x = thisTrace.a[((((thisLength - sameFrameCount) | 0) - 1) | 0)];
            var x$2 = parentTrace.a[((((parentLength - sameFrameCount) | 0) - 1) | 0)];
            var $x_1 = ((x === null) ? (x$2 === null) : x.i(x$2));
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
          s.eB(t$3);
          i$2 = ((1 + i$2) | 0);
        }
        if ((sameFrameCount > 0)) {
          var t$4 = (("  ... " + sameFrameCount) + " more");
          s.eB(t$4);
        }
      } else {
        s.eB("  <no stack trace available>");
      }
    }
  }
  g() {
    var className = $objectClassName(this);
    var message = this.bn();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  k() {
    return $c_O.prototype.k.call(this);
  }
  i(that) {
    return $c_O.prototype.i.call(this, that);
  }
  get "message"() {
    var m = this.bn();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.g();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.m)));
}
/** @constructor */
function $c_ju_Formatter$RootLocaleInfo$() {
}
$p = $c_ju_Formatter$RootLocaleInfo$.prototype = new $h_ju_Formatter$LocaleInfo();
$p.constructor = $c_ju_Formatter$RootLocaleInfo$;
/** @constructor */
function $h_ju_Formatter$RootLocaleInfo$() {
}
$h_ju_Formatter$RootLocaleInfo$.prototype = $p;
var $d_ju_Formatter$RootLocaleInfo$ = new $TypeData().i($c_ju_Formatter$RootLocaleInfo$, "java.util.Formatter$RootLocaleInfo$", ({
  gp: 1,
  go: 1
}));
var $n_ju_Formatter$RootLocaleInfo$;
function $m_ju_Formatter$RootLocaleInfo$() {
  if ((!$n_ju_Formatter$RootLocaleInfo$)) {
    $n_ju_Formatter$RootLocaleInfo$ = new $c_ju_Formatter$RootLocaleInfo$();
  }
  return $n_ju_Formatter$RootLocaleInfo$;
}
function $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, value) {
  $thiz.P = value;
  return $thiz;
}
/** @constructor */
function $c_ju_concurrent_atomic_AtomicReference() {
  this.P = null;
}
$p = $c_ju_concurrent_atomic_AtomicReference.prototype = new $h_O();
$p.constructor = $c_ju_concurrent_atomic_AtomicReference;
/** @constructor */
function $h_ju_concurrent_atomic_AtomicReference() {
}
$h_ju_concurrent_atomic_AtomicReference.prototype = $p;
$p.gI = (function(expect, update) {
  if (Object.is(expect, this.P)) {
    this.P = update;
    return true;
  } else {
    return false;
  }
});
$p.g = (function() {
  return ("" + this.P);
});
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.hs === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "No match available");
  }
  return $thiz.hs;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.no = null;
  this.nn = null;
  this.np = 0;
  this.j4 = null;
  this.j5 = 0;
  this.hs = null;
  this.no = pattern0;
  this.nn = input0;
  this.np = 0;
  this.j4 = this.nn;
  this.j5 = 0;
  this.hs = null;
}
$p = $c_ju_regex_Matcher.prototype = new $h_O();
$p.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $p;
$p.rX = (function() {
  var this$1 = this.no;
  var input = this.j4;
  var start = this.j5;
  var mtch = this$1.sH(input, start);
  var end = (this$1.j6.lastIndex | 0);
  this.j5 = ((mtch !== null) ? ((end === (mtch.index | 0)) ? ((1 + end) | 0) : end) : ((1 + this.j4.length) | 0));
  this.hs = mtch;
  return (mtch !== null);
});
$p.pZ = (function() {
  return ((($p_ju_regex_Matcher__ensureLastMatch__O(this).index | 0) + this.np) | 0);
});
$p.pc = (function() {
  return ((this.pZ() + this.sm().length) | 0);
});
$p.sm = (function() {
  return $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
});
var $d_ju_regex_Matcher = new $TypeData().i($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  gC: 1,
  gB: 1
}));
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.nq = null;
  this.nr = null;
  this.ns = false;
  this.j6 = null;
  this.nq = _pattern;
  this.nr = jsFlags;
  this.ns = sticky;
  this.j6 = new RegExp(jsPattern, (this.nr + (this.ns ? "gy" : "g")));
  new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$p = $c_ju_regex_Pattern.prototype = new $h_O();
$p.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $p;
$p.sH = (function(input, start) {
  var regexp = this.j6;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$p.g = (function() {
  return this.nq;
});
$p.sI = (function(inputStr, limit) {
  if ((inputStr === "")) {
    return new ($d_T.r().C)([""]);
  } else {
    var lim = ((limit > 0) ? limit : 2147483647);
    var matcher = new $c_ju_regex_Matcher(this, inputStr);
    var result = [];
    var prevEnd = 0;
    while ((((result.length | 0) < ((lim - 1) | 0)) && matcher.rX())) {
      if ((matcher.pc() !== 0)) {
        var beginIndex = prevEnd;
        var endIndex = matcher.pZ();
        var $x_1 = result.push(inputStr.substring(beginIndex, endIndex));
      }
      prevEnd = matcher.pc();
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
  gD: 1,
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
$p.t9 = (function(s) {
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
  gE: 1,
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
$p.u6 = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.od;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.cO(x) ? $thiz.c(x) : default$1.c(x));
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
  hS: 1,
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
    $thiz.b5($m_scm_Buffer$().i1(elems));
  } else {
    var it = elems.m();
    while (it.o()) {
      $thiz.b6(it.l());
    }
  }
  return $thiz;
}
function $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V($thiz, runnable) {
  var tl = $thiz.oq;
  var b = tl.x();
  if ((b instanceof $c_s_concurrent_BatchingExecutor$SyncBatch)) {
    b.t7(runnable);
  } else {
    var i = ((b !== null) ? b : 0);
    if ((i < 16)) {
      tl.h4(((1 + i) | 0));
      try {
        runnable.eC();
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        if (false) {
          $m_s_concurrent_ExecutionContext$().fj.c(e$2);
        } else {
          matchResult3: {
            if ($m_s_util_control_NonFatal$().hW(e$2)) {
              $m_s_concurrent_ExecutionContext$().fj.c(e$2);
              break matchResult3;
            }
            throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
          }
        }
      } finally {
        tl.h4(b);
      }
    } else {
      var batch = new $c_s_concurrent_BatchingExecutor$SyncBatch($thiz, runnable);
      tl.h4(batch);
      batch.eC();
      tl.h4(b);
    }
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$ManyCallbacks(first, rest) {
  this.jL = null;
  this.jM = null;
  this.jL = first;
  this.jM = rest;
}
$p = $c_s_concurrent_impl_Promise$ManyCallbacks.prototype = new $h_O();
$p.constructor = $c_s_concurrent_impl_Promise$ManyCallbacks;
/** @constructor */
function $h_s_concurrent_impl_Promise$ManyCallbacks() {
}
$h_s_concurrent_impl_Promise$ManyCallbacks.prototype = $p;
$p.g = (function() {
  return "ManyCallbacks";
});
function $isArrayOf_s_concurrent_impl_Promise$ManyCallbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d1)));
}
var $d_s_concurrent_impl_Promise$ManyCallbacks = new $TypeData().i($c_s_concurrent_impl_Promise$ManyCallbacks, "scala.concurrent.impl.Promise$ManyCallbacks", ({
  d1: 1,
  aS: 1
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
$p.g = (function() {
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
$p.g = (function() {
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
$p.g = (function() {
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
$p.g = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.hN = false;
  this.hN = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.g = (function() {
  return ("" + this.hN);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  jF: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.et = 0;
  this.et = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.g = (function() {
  return ("" + this.et);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  jH: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.fk = null;
  this.fk = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.g = (function() {
  return ("" + this.fk);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  jL: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.ap = 0;
  this.dU = 0;
  this.oI = 0;
  this.jN = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.ap = $f_T__hashCode__I("Seq");
  this.dU = $f_T__hashCode__I("Map");
  this.oI = $f_T__hashCode__I("Set");
  this.jN = this.kN($m_sci_Nil$(), this.dU);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cA = (function(x, y) {
  return this.q7($m_sr_Statics$().N(x), $m_sr_Statics$().N(y), (-889275714));
});
$p.pW = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.sr(xs, this.ap) : ((xs instanceof $c_sci_List) ? this.sK(xs, this.ap) : this.t5(xs, this.ap)));
});
$p.sS = (function(xs) {
  if (xs.e()) {
    return this.jN;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.dU;
    xs.ew(accum);
    h = this.y(h, accum.hP);
    h = this.y(h, accum.hQ);
    h = this.di(h, accum.hR);
    return this.aG(h, accum.hS);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  kh: 1,
  kg: 1
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
  this.hP = 0;
  this.hQ = 0;
  this.hS = 0;
  this.hR = 0;
  this.hP = 0;
  this.hQ = 0;
  this.hS = 0;
  this.hR = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.g = (function() {
  return "<function2>";
});
$p.r7 = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cA(k, v);
  this.hP = ((this.hP + h) | 0);
  this.hQ = (this.hQ ^ h);
  this.hR = Math.imul(this.hR, (1 | h));
  this.hS = ((1 + this.hS) | 0);
});
$p.fm = (function(v1, v2) {
  this.r7(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  ki: 1,
  b9: 1
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
  df: 1,
  w: 1,
  aG: 1
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
  dj: 1,
  w: 1,
  aG: 1
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
  this.kP = null;
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
  this.kP = new ($d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage.r().C)([$s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Russian__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__French__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__German__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Spanish__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Japanese__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Chinese__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Arabic__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Farsi__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Latin__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Hebrew__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage()]);
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$.prototype = $p;
$p.u4 = (function() {
  return this.kP.f();
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$, "com.github.pwharned.clausula.extension.domain.KnownLanguage$", ({
  dv: 1,
  w: 1,
  aG: 1
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
$p.sa = (function(code) {
  var xs = $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$().u4();
  _return: {
    var i = 0;
    while ((i < xs.a.length)) {
      var x1 = i;
      if ((xs.a[x1].bu === code)) {
        var idx = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var idx = (-1);
  }
  var this$4 = ((idx === (-1)) ? $m_s_None$() : new $c_s_Some(xs.a[idx]));
  return (this$4.e() ? new $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage(code) : this$4.x());
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Language$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Language$, "com.github.pwharned.clausula.extension.domain.Language$", ({
  dI: 1,
  w: 1,
  aG: 1
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
  this.ij = null;
  this.kQ = null;
  this.kR = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.ij = $m_scm_Buffer$().p0($m_sr_ScalaRunTime$().bd(new ($d_F1.r().C)([])));
  this.kQ = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
    try {
      console.error(((this.fr(err) + "\n") + this.sj(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.kR = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.T : $x_1);
  }));
  this.tb(this.kQ);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.fr = (function(e) {
  try {
    var errorMessage = e.bn();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).kp() + ": ") + errorMessage);
});
$p.sj = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().u6(err.i3()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.tb = (function(fn) {
  this.ij.b6(fn);
});
$p.cz = (function(err) {
  var this$1 = this.ij;
  var it = this$1.m();
  while (it.o()) {
    var x0 = it.l();
    try {
      x0.c(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.kR;
      if (((x0 === null) ? (x$2 === null) : x0.i(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().tG(0.0, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  dY: 1,
  w: 1,
  aG: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.cw(true);
  $thiz.fv((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().qd(onNext, $m_s_PartialFunction$().hx, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.ft()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.ft()) {
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
  var x = $thiz.e4();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_F0.r().C)([])));
    $thiz.fv(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aK: 1,
  as: 1,
  a2: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.rb(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, modifiers, asModifier, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(null, modifiers, null)).bl(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element$2) => ((_$6) => {
      asModifier.c(_$6).ct(element$2);
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.mN = null;
  this.iK = null;
  this.mN = key;
  this.iK = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.ct = (function(element) {
  if ((!this.iK.e())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.mN, null, this.iK, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  fg: 1,
  a9: 1,
  bV: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.f1 = null;
  this.iL = null;
  this.iM = null;
  this.f1 = eventProcessor;
  this.iL = ((ev) => {
    var processor = eventProcessor.mJ;
    var this$2 = processor.c(ev);
    if ((!this$2.e())) {
      callback.c(this$2.x());
    }
  });
  this.iM = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
    }
    this$3.capture = outer.f1.mL;
    this$3.passive = outer.f1.mK;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.ct = (function(element) {
  this.re(element, false);
});
$p.re = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().qS(element.bq, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.iJ, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().tg(element.bq, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().u1(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h6(element.cj, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().q1(element.cj, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner$1) => {
      activate.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.g = (function() {
  return (("EventListener(" + this.f1.ho.hp) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  fh: 1,
  a9: 1,
  bU: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.mP = null;
  this.mQ = null;
  this.mO = null;
  this.mP = key;
  this.mQ = value;
  this.mO = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.ct = (function(element) {
  this.mO.jU(element, this.mP, this.mQ);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  fi: 1,
  a9: 1,
  bV: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.mR = null;
  this.mT = null;
  this.mS = null;
  this.mR = key;
  this.mT = values;
  this.mS = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.ct = (function(element) {
  this.jZ(element);
});
$p.jZ = (function(element) {
  element.t2(this.mR);
  var observable = this.mT;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((value) => {
    this.mS.jU(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().tO(element.cj, observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  fj: 1,
  a9: 1,
  bU: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.iS = null;
  this.mY = null;
  this.mZ = null;
  this.mY = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().sD(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.mZ = container;
  this.sW();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.hZ = (function() {
  return this.iS;
});
$p.p5 = (function(x$0) {
  this.iS = x$0;
});
$p.sW = (function() {
  this.iS.oN();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().gu(this, this.mY, (void 0));
});
$p.aA = (function() {
  return this.mZ;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  fA: 1,
  aO: 1,
  bW: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fD)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.a5.Z) {
    return ($thiz.a5.Q().kp() + "[]");
  } else {
    var name = $thiz.a5.N;
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
  this.iX = null;
  this.a5 = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.g = (function() {
  return ((this.a5.Y ? "interface " : (this.a5.X ? "" : "class ")) + this.a5.N);
});
$p.kp = (function() {
  if ((this.iX === null)) {
    this.iX = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.iX;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  fP: 1,
  a: 1,
  aa: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
function $isArrayOf_jl_Error(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b4)));
}
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().i($c_jl_Exception, "java.lang.Exception", ({
  t: 1,
  m: 1,
  a: 1
}));
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
  this.qt = null;
  $n_s_Predef$ = this;
  $m_sci_List$();
  this.qt = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.tn = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  h0: 1,
  gS: 1,
  gT: 1
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
      return $thiz.aS();
      break;
    }
    case 1: {
      return $thiz.aJ();
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.g5 = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.g5 = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.aq = (function(it) {
  return this.g5.kg(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aL = (function() {
  return this.g5.i9($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.de = (function(elems) {
  return this.g5.kg(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.hA = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.hA = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.aq = (function(it) {
  return this.hA.aq(it);
});
$p.aL = (function() {
  return this.hA.aL();
});
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.w();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.m();
      while (it.o()) {
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
  return new $c_sc_Iterator$ConcatIterator($thiz).k3(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().W : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.m();
  while ($thiz.o()) {
    if ((!those.o())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().p($thiz.l(), those.l()))) {
      return false;
    }
  }
  return (!those.o());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.W = null;
  $n_sc_Iterator$ = this;
  this.W = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.aL = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.aq = (function(source) {
  return source.m();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  hg: 1,
  a: 1,
  K: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.jm = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.jm = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.aq = (function(it) {
  return this.jm.aq(it);
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
$p.pl = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((it$2) => (() => it$2.m()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().ki(it))));
});
$p.aL = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((it$2) => this.pl(it$2))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.aq = (function(source) {
  return this.pl(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  hx: 1,
  a: 1,
  K: 1
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
  this.a6 = 0;
  this.ah = 0;
  this.ar = null;
  this.bF = null;
  this.aX = 0;
  this.bw = 0;
  this.a6 = dataMap;
  this.ah = nodeMap;
  this.ar = content;
  this.bF = originalHashes;
  this.aX = size;
  this.bw = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.aV = (function() {
  return this.aX;
});
$p.e0 = (function() {
  return this.bw;
});
$p.e2 = (function(index) {
  return this.ar.a[(index << 1)];
});
$p.dh = (function(index) {
  return this.ar.a[((1 + (index << 1)) | 0)];
});
$p.pt = (function(index) {
  return $ct_T2__O__O__(new $c_T2(), this.ar.a[(index << 1)], this.ar.a[((1 + (index << 1)) | 0)]);
});
$p.gM = (function(index) {
  return this.bF.a[index];
});
$p.df = (function(index) {
  return this.ar.a[((((this.ar.a.length - 1) | 0) - index) | 0)];
});
$p.jT = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ez(keyHash, shift);
  var bitpos = $m_sci_Node$().dZ(mask);
  if (((this.a6 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cM(this.a6, mask, bitpos);
    if ($m_sr_BoxesRunTime$().p(key, this.e2(index))) {
      return this.dh(index);
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
    }
  } else if (((this.ah & bitpos) !== 0)) {
    return this.df($m_sci_Node$().cM(this.ah, mask, bitpos)).jT(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.kn = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().ez(keyHash, shift);
  var bitpos = $m_sci_Node$().dZ(mask);
  if (((this.a6 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cM(this.a6, mask, bitpos);
    return ($m_sr_BoxesRunTime$().p(key, this.e2(index)) ? this.dh(index) : f.M());
  } else {
    return (((this.ah & bitpos) !== 0) ? this.df($m_sci_Node$().cM(this.ah, mask, bitpos)).kn(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.M());
  }
});
$p.k4 = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ez(keyHash, shift);
  var bitpos = $m_sci_Node$().dZ(mask);
  if (((this.a6 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cM(this.a6, mask, bitpos);
    return ((this.bF.a[index] === originalHash) && $m_sr_BoxesRunTime$().p(key, this.e2(index)));
  } else {
    return (((this.ah & bitpos) !== 0) && this.df($m_sci_Node$().cM(this.ah, mask, bitpos)).k4(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.q8 = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().ez(keyHash, shift);
  var bitpos = $m_sci_Node$().dZ(mask);
  if (((this.a6 & bitpos) !== 0)) {
    var index = $m_sci_Node$().cM(this.a6, mask, bitpos);
    var key0 = this.e2(index);
    var key0UnimprovedHash = this.gM(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().p(key0, key))) {
      if (replaceValue) {
        var value0 = this.dh(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.rr(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.dh(index);
      var key0Hash = $m_sc_Hashing$().cv(key0UnimprovedHash);
      return this.rp(bitpos, key0Hash, this.kB(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.ah & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cM(this.ah, mask, bitpos);
    var subNode = this.df(index$2);
    var subNodeNew$2 = subNode.q9(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.rq(bitpos, subNode, subNodeNew$2));
  } else {
    return this.ro(bitpos, key, originalHash, keyHash, value);
  }
});
$p.kB = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().kj(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), key0, value0), $ct_T2__O__O__(new $c_T2(), key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().ez(keyHash0, shift);
    var mask1 = $m_sci_Node$().ez(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().dZ(mask0) | $m_sci_Node$().dZ(mask1));
      if ((mask0 < mask1)) {
        var xs = new $c_sjsr_WrappedVarArgs([key0, value0, key1, value1]);
        var array$2 = new $ac_O(xs.n());
        var iterator = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs));
        var i = 0;
        while ((iterator.br > 0)) {
          array$2.a[i] = iterator.l();
          i = ((1 + i) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$2, new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash);
      } else {
        var xs$1 = new $c_sjsr_WrappedVarArgs([key1, value1, key0, value0]);
        var array$4 = new $ac_O(xs$1.n());
        var iterator$1 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$1));
        var i$1 = 0;
        while ((iterator$1.br > 0)) {
          array$4.a[i$1] = iterator$1.l();
          i$1 = ((1 + i$1) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$4, new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash);
      }
    } else {
      var nodeMap = $m_sci_Node$().dZ(mask0);
      var node = this.kB(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      var xs$2 = new $c_sjsr_WrappedVarArgs([node]);
      var array$6 = new $ac_O(xs$2.n());
      var iterator$2 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$2));
      var i$2 = 0;
      while ((iterator$2.br > 0)) {
        array$6.a[i$2] = iterator$2.l();
        i$2 = ((1 + i$2) | 0);
      }
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().jd, node.aV(), node.e0());
    }
  }
});
$p.kq = (function() {
  return (this.ah !== 0);
});
$p.kC = (function() {
  return $m_jl_Integer$().dY(this.ah);
});
$p.i4 = (function() {
  return (this.a6 !== 0);
});
$p.kG = (function() {
  return $m_jl_Integer$().dY(this.a6);
});
$p.gK = (function(bitpos) {
  return $m_jl_Integer$().dY((this.a6 & ((bitpos - 1) | 0)));
});
$p.kD = (function(bitpos) {
  return $m_jl_Integer$().dY((this.ah & ((bitpos - 1) | 0)));
});
$p.rr = (function(bitpos, newKey, newValue) {
  var dataIx = this.gK(bitpos);
  var idx = (dataIx << 1);
  var src = this.ar;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.s(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.a6, this.ah, dst, this.bF, this.aX, this.bw);
});
$p.rq = (function(bitpos, oldNode, newNode) {
  var idx = ((((this.ar.a.length - 1) | 0) - this.kD(bitpos)) | 0);
  var src = this.ar;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.s(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.a6, this.ah, dst, this.bF, ((((this.aX - oldNode.aV()) | 0) + newNode.aV()) | 0), ((((this.bw - oldNode.e0()) | 0) + newNode.e0()) | 0));
});
$p.ro = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.gK(bitpos);
  var idx = (dataIx << 1);
  var src = this.ar;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.s(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.s(idx, dst, destPos, length);
  var dstHashes = this.sw(this.bF, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.a6 | bitpos), this.ah, dst, dstHashes, ((1 + this.aX) | 0), ((this.bw + keyHash) | 0));
});
$p.sU = (function(bitpos, keyHash, node) {
  var dataIx = this.gK(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.ar.a.length - 2) | 0) - this.kD(bitpos)) | 0);
  var src = this.ar;
  var dst = new $ac_O(((src.a.length - 1) | 0));
  src.s(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.s(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 2) | 0);
  src.s(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.pP(this.bF, dataIx);
  this.a6 = (this.a6 ^ bitpos);
  this.ah = (this.ah | bitpos);
  this.ar = dst;
  this.bF = dstHashes;
  this.aX = ((((this.aX - 1) | 0) + node.aV()) | 0);
  this.bw = ((((this.bw - keyHash) | 0) + node.e0()) | 0);
  return this;
});
$p.rp = (function(bitpos, keyHash, node) {
  var dataIx = this.gK(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.ar.a.length - 2) | 0) - this.kD(bitpos)) | 0);
  var src = this.ar;
  var dst = new $ac_O(((src.a.length - 1) | 0));
  src.s(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.s(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 2) | 0);
  src.s(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.pP(this.bF, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.a6 ^ bitpos), (this.ah | bitpos), dst, dstHashes, ((((this.aX - 1) | 0) + node.aV()) | 0), ((((this.bw - keyHash) | 0) + node.e0()) | 0));
});
$p.ew = (function(f) {
  var iN = $m_jl_Integer$().dY(this.a6);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.fm(this.e2(i$1), this.dh(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().dY(this.ah);
  var j = 0;
  while ((j < jN)) {
    this.df(j).ew(f);
    j = ((1 + j) | 0);
  }
});
$p.i = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bw === that.bw) && (this.ah === that.ah)) && (this.a6 === that.a6)) && (this.aX === that.aX)) && $m_ju_Arrays$().k9(this.bF, that.bF))) {
      var a1 = this.ar;
      var a2 = that.ar;
      var length = this.ar.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().p(a1.a[i], a2.a[i]);
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
$p.k = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.g = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.p6 = (function() {
  var this$1 = this.ar;
  var contentClone = this$1.f();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().dY(this.a6) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].p7();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.a6, this.ah, contentClone, this.bF.f(), this.aX, this.bw);
});
$p.km = (function(index) {
  return this.df(index);
});
$p.q9 = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.q8(key, value, originalHash, hash, shift, replaceValue);
});
$p.p7 = (function() {
  return this.p6();
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cw)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  cw: 1,
  cF: 1,
  bi: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.jq = 0;
  this.dz = 0;
  this.ai = null;
  this.jq = originalHash;
  this.dz = hash;
  this.ai = content;
  $m_s_Predef$().tn((this.ai.n() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.fs = (function(key) {
  var iter = this.ai.m();
  var i = 0;
  while (iter.o()) {
    if ($m_sr_BoxesRunTime$().p(iter.l().aS(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.aV = (function() {
  return this.ai.n();
});
$p.jT = (function(key, originalHash, hash, shift) {
  var this$1 = this.sf(key, originalHash, hash, shift);
  return (this$1.e() ? $m_sc_Iterator$().W.l() : this$1.x());
});
$p.sf = (function(key, originalHash, hash, shift) {
  if ((this.dz === hash)) {
    var index = this.fs(key);
    return ((index >= 0) ? new $c_s_Some(this.ai.t(index).aJ()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.kn = (function(key, originalHash, hash, shift, f) {
  if ((this.dz === hash)) {
    var x36 = this.fs(key);
    if ((x36 === (-1))) {
      return f.M();
    }
    return this.ai.t(x36).aJ();
  } else {
    return f.M();
  }
});
$p.k4 = (function(key, originalHash, hash, shift) {
  return ((this.dz === hash) && (this.fs(key) >= 0));
});
$p.q9 = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.fs(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.ai.t(index).aJ(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.ai.e7(index, $ct_T2__O__O__(new $c_T2(), key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.ai.dW($ct_T2__O__O__(new $c_T2(), key, value))));
});
$p.kq = (function() {
  return false;
});
$p.kC = (function() {
  return 0;
});
$p.df = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.i4 = (function() {
  return true;
});
$p.kG = (function() {
  return this.ai.n();
});
$p.e2 = (function(index) {
  return this.ai.t(index).aS();
});
$p.dh = (function(index) {
  return this.ai.t(index).aJ();
});
$p.pt = (function(index) {
  return this.ai.t(index);
});
$p.gM = (function(index) {
  return this.jq;
});
$p.ew = (function(f) {
  this.ai.bl(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.aS();
    var v = x$1$2.aJ();
    return f.fm(k, v);
  })));
});
$p.i = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.dz === that.dz) && (this.ai.n() === that.ai.n()))) {
      var iter = this.ai.m();
      while (iter.o()) {
        var \u03b412$;
        var \u03b412$ = iter.l();
        var key = \u03b412$.aS();
        var value = \u03b412$.aJ();
        var index = that.fs(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().p(value, that.ai.t(index).aJ())))) {
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
$p.k = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.g = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.e0 = (function() {
  return Math.imul(this.ai.n(), this.dz);
});
$p.km = (function(index) {
  return this.df(index);
});
$p.p7 = (function() {
  return new $c_sci_HashCollisionMapNode(this.jq, this.dz, this.ai);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cy)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  cy: 1,
  cF: 1,
  bi: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.jr = null;
  $n_sci_HashMap$ = this;
  this.jr = new $c_sci_HashMap($m_sci_MapNode$().o5);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.s7 = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().jR(source).kK());
});
$p.aq = (function(it) {
  return this.s7(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  hF: 1,
  a: 1,
  bc: 1
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
$p.pn = (function(it) {
  if ($is_sci_Iterable(it)) {
    if (it.e()) {
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
  return new $c_sci_MapBuilderImpl().oO(it).pR();
});
$p.aq = (function(it) {
  return this.pn(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  hV: 1,
  a: 1,
  bc: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
/** @constructor */
function $c_sci_WrappedString$() {
  this.o9 = null;
  $n_sci_WrappedString$ = this;
  this.o9 = new $c_sci_WrappedString("");
}
$p = $c_sci_WrappedString$.prototype = new $h_O();
$p.constructor = $c_sci_WrappedString$;
/** @constructor */
function $h_sci_WrappedString$() {
}
$h_sci_WrappedString$.prototype = $p;
$p.pq = (function(it) {
  var b = this.aL();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, it, 0);
  b.b5(it);
  return b.b7();
});
$p.aL = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => new $c_sci_WrappedString(x$2))), $ct_scm_StringBuilder__(new $c_scm_StringBuilder()));
});
var $d_sci_WrappedString$ = new $TypeData().i($c_sci_WrappedString$, "scala.collection.immutable.WrappedString$", ({
  iu: 1,
  h9: 1,
  ht: 1
}));
var $n_sci_WrappedString$;
function $m_sci_WrappedString$() {
  if ((!$n_sci_WrappedString$)) {
    $n_sci_WrappedString$ = new $c_sci_WrappedString$();
  }
  return $n_sci_WrappedString$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = coll.w();
  if ((x1 === (-1))) {
    return (void 0);
  }
  var that = ((x1 + delta) | 0);
  $thiz.bb(((that < 0) ? 0 : that));
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
$p.s9 = (function(it) {
  var k = it.w();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).oR(it);
});
$p.aL = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.aq = (function(source) {
  return this.s9(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  iJ: 1,
  a: 1,
  K: 1
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
  this.gk = null;
  this.gl = null;
  this.dQ = 0;
  this.qu = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.qu = outer;
  $ct_s_concurrent_BatchingExecutor$AbstractBatch__jl_Runnable__Ajl_Runnable__I__(this, runnable, $m_s_concurrent_BatchingExecutorStatics$().on, 1);
}
$p = $c_s_concurrent_BatchingExecutor$SyncBatch.prototype = new $h_s_concurrent_BatchingExecutor$AbstractBatch();
$p.constructor = $c_s_concurrent_BatchingExecutor$SyncBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$SyncBatch() {
}
$h_s_concurrent_BatchingExecutor$SyncBatch.prototype = $p;
$p.eC = (function() {
  while (true) {
    try {
      this.ts(1024);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if (false) {
        $m_s_concurrent_ExecutionContext$().fj.c(e$2);
      } else {
        matchResult2: {
          if ($m_s_util_control_NonFatal$().hW(e$2)) {
            $m_s_concurrent_ExecutionContext$().fj.c(e$2);
            break matchResult2;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cX)));
}
var $d_s_concurrent_BatchingExecutor$SyncBatch = new $TypeData().i($c_s_concurrent_BatchingExecutor$SyncBatch, "scala.concurrent.BatchingExecutor$SyncBatch", ({
  cX: 1,
  j0: 1,
  b5: 1
}));
/** @constructor */
function $c_s_concurrent_impl_Promise$Link(to) {
  this.P = null;
  $ct_ju_concurrent_atomic_AtomicReference__O__(this, to);
}
$p = $c_s_concurrent_impl_Promise$Link.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$Link;
/** @constructor */
function $h_s_concurrent_impl_Promise$Link() {
}
$h_s_concurrent_impl_Promise$Link.prototype = $p;
$p.fz = (function(owner) {
  var c = this.P;
  var target$tailLocal1 = c;
  var current$tailLocal1 = c;
  while (true) {
    var value = target$tailLocal1.P;
    if ($is_s_concurrent_impl_Promise$Callbacks(value)) {
      if (this.gI(current$tailLocal1, target$tailLocal1)) {
        return target$tailLocal1;
      } else {
        current$tailLocal1 = this.P;
      }
    } else if ((value instanceof $c_s_concurrent_impl_Promise$Link)) {
      target$tailLocal1 = value.P;
    } else {
      owner.u0(value);
      return owner;
    }
  }
});
function $isArrayOf_s_concurrent_impl_Promise$Link(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d0)));
}
var $d_s_concurrent_impl_Promise$Link = new $TypeData().i($c_s_concurrent_impl_Promise$Link, "scala.concurrent.impl.Promise$Link", ({
  d0: 1,
  b7: 1,
  a: 1
}));
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.jb)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.ow = null;
  this.ow = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.M = (function() {
  return (0, this.ow)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  jA: 1,
  d3: 1,
  b8: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.ox = null;
  this.ox = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.c = (function(x0) {
  return (0, this.ox)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  jB: 1,
  bq: 1,
  f: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.oy = null;
  this.oy = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.fm = (function(x0, x1) {
  return (0, this.oy)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  jC: 1,
  d4: 1,
  b9: 1
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
$p.g = (function() {
  return "<function1>";
});
$p.c = (function(x) {
  return this.cd(x, $m_s_PartialFunction$().hx);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  jJ: 1,
  m: 1,
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
$p.sb = (function(f) {
  return (() => f.M());
});
$p.i2 = (function(f) {
  return ((arg1$2) => f.c(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  jV: 1,
  jW: 1,
  jX: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.kd)));
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote(text, translation, audio, deck, language, tags) {
  this.fJ = null;
  this.fK = null;
  this.fG = null;
  this.fH = null;
  this.hd = null;
  this.fI = null;
  this.fJ = text;
  this.fK = translation;
  this.fG = audio;
  this.fH = deck;
  this.hd = language;
  this.fI = tags;
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_ClozeNote() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_ClozeNote.prototype = $p;
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, 833541524, true);
});
$p.i = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote)) {
    if ((this.fJ === x$0.fJ)) {
      var x = this.fK;
      var x$2 = x$0.fK;
      var $x_3 = ((x === null) ? (x$2 === null) : x.i(x$2));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$3 = this.fG;
      var x$4 = x$0.fG;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : x$3.i(x$4));
    } else {
      var $x_2 = false;
    }
    if (($x_2 && (this.fH === x$0.fH))) {
      var x$5 = this.hd;
      var x$6 = x$0.hd;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : x$5.i(x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$7 = this.fI;
      var x$8 = x$0.fI;
      return ((x$7 === null) ? (x$8 === null) : x$7.i(x$8));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.g = (function() {
  return $m_sr_ScalaRunTime$().cc(this);
});
$p.A = (function() {
  return 6;
});
$p.C = (function() {
  return "ClozeNote";
});
$p.B = (function(n) {
  switch (n) {
    case 0: {
      return this.fJ;
      break;
    }
    case 1: {
      return this.fK;
      break;
    }
    case 2: {
      return this.fG;
      break;
    }
    case 3: {
      return this.fH;
      break;
    }
    case 4: {
      return this.hd;
      break;
    }
    case 5: {
      return this.fI;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_domain_ClozeNote(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bx)));
}
var $d_Lcom_github_pwharned_clausula_extension_domain_ClozeNote = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote, "com.github.pwharned.clausula.extension.domain.ClozeNote", ({
  bx: 1,
  b: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult(text, detectedLanguage) {
  this.eQ = null;
  this.fM = null;
  this.eQ = text;
  this.fM = detectedLanguage;
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_TranslationResult() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_TranslationResult.prototype = $p;
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, 606425562, true);
});
$p.i = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult)) {
    if ((this.eQ === x$0.eQ)) {
      var x = this.fM;
      var x$2 = x$0.fM;
      return ((x === null) ? (x$2 === null) : x.i(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.g = (function() {
  return $m_sr_ScalaRunTime$().cc(this);
});
$p.A = (function() {
  return 2;
});
$p.C = (function() {
  return "TranslationResult";
});
$p.B = (function(n) {
  if ((n === 0)) {
    return this.eQ;
  }
  if ((n === 1)) {
    return this.fM;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_domain_TranslationResult(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
var $d_Lcom_github_pwharned_clausula_extension_domain_TranslationResult = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult, "com.github.pwharned.clausula.extension.domain.TranslationResult", ({
  bC: 1,
  b: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.kU = null;
  this.kS = false;
  this.ik = null;
  this.kT = null;
  this.kU = onNextParam$2;
  this.kS = handleObserverErrors$3;
  this.ik = onErrorParam$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.kT = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.cP = (function() {
  return this.kT;
});
$p.cJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.g = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gS = (function(nextValue) {
  try {
    this.kU.c(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.kS) {
      this.eA(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cz(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.eA = (function(error) {
  try {
    if (this.ik.cO(error)) {
      this.ik.c(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cz(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cz(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.e5 = (function(nextValue) {
  nextValue.bZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((error) => {
    this.eA(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue$2) => {
    this.gS(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  e0: 1,
  as: 1,
  a2: 1,
  aK: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.il = null;
  this.kV = false;
  this.kW = null;
  this.il = onTryParam$2;
  this.kV = handleObserverErrors$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.kW = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.cP = (function() {
  return this.kW;
});
$p.cJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.g = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gS = (function(nextValue) {
  this.e5(new $c_s_util_Success(nextValue));
});
$p.eA = (function(error) {
  this.e5(new $c_s_util_Failure(error));
});
$p.e5 = (function(nextValue) {
  try {
    if (this.il.cO(nextValue)) {
      this.il.c(nextValue);
    } else {
      nextValue.bZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cz(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.kV && nextValue.px())) {
      this.eA(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.bZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cz(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cz(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  e1: 1,
  as: 1,
  a2: 1,
  aK: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_eventbus_WriteBus(parentDisplayName, displayNameSuffix) {
  this.lb = null;
  this.lc = null;
  this.la = null;
  this.eU = null;
  this.lc = parentDisplayName;
  this.la = displayNameSuffix;
  this.lb = (void 0);
  this.eU = new $c_Lcom_raquo_airstream_eventbus_EventBusStream(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
}
$p = $c_Lcom_raquo_airstream_eventbus_WriteBus.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_eventbus_WriteBus;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_WriteBus() {
}
$h_Lcom_raquo_airstream_eventbus_WriteBus.prototype = $p;
$p.cP = (function() {
  return this.lb;
});
$p.g = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gS = (function(nextValue) {
  if ($f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this.eU)) {
    this.eU.fx(nextValue, null);
  }
});
$p.eA = (function(nextError) {
  if ($f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this.eU)) {
    this.eU.fw(nextError, null);
  }
});
$p.e5 = (function(nextValue) {
  nextValue.bZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    this.eA(nextError);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue$2) => {
    this.gS(nextValue$2);
  })));
});
$p.cJ = (function() {
  return (("" + this.lc.M()) + this.la);
});
var $d_Lcom_raquo_airstream_eventbus_WriteBus = new $TypeData().i($c_Lcom_raquo_airstream_eventbus_WriteBus, "com.raquo.airstream.eventbus.WriteBus", ({
  ea: 1,
  as: 1,
  a2: 1,
  aK: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.lV = null;
  this.lW = false;
  this.qe = null;
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
$p.tR = (function() {
  if ((!this.lW)) {
    this.lV = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.lW = true;
  }
  return this.lV;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  ex: 1,
  eW: 1,
  eG: 1,
  eI: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.q = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.q = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
$p = $c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
$h_Lcom_raquo_laminar_api_package$.prototype = $p;
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().i($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  eB: 1,
  bP: 1,
  bS: 1,
  bO: 1
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
  this.mD = null;
  this.mF = false;
  this.mE = null;
  this.iD = null;
  this.mD = initialContext;
  this.mF = preferStrictMode;
  this.mE = insertFn;
  this.iD = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.jZ = (function(element) {
  var this$1 = this.mD;
  var insertContext = (this$1.e() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().to(element, this.mF, this.iD) : this$1.x());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((mountContext) => this.mE.jU(insertContext, mountContext.iJ, this.iD)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h6(element.cj, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.ct = (function(element) {
  this.jZ(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  eZ: 1,
  a9: 1,
  f3: 1,
  f0: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.ee = name;
  $thiz.ef = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.ee = null;
  this.ef = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.oK = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().tB(element, styleProp, value$2);
  })));
});
$p.jO = (function(values, ev) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eG(), new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((el, v, _$1) => {
    $m_Lcom_raquo_laminar_DomApi$().ty(el, this, v);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.iN = null;
  this.iO = null;
  this.iN = $m_s_None$();
  this.iO = $m_Lcom_raquo_laminar_DomApi$().rA(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.k1 = (function() {
  return this.iN;
});
$p.eE = (function(maybeNextParent) {
  this.iN = maybeNextParent;
});
$p.eK = (function(maybeNextParent) {
});
$p.ct = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gu(parentNode, this, (void 0));
});
$p.aA = (function() {
  return this.iO;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  fv: 1,
  aO: 1,
  a9: 1,
  aZ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.iT = null;
  this.iU = null;
  this.iT = $m_s_None$();
  this.iU = $m_Lcom_raquo_laminar_DomApi$().rD(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.k1 = (function() {
  return this.iT;
});
$p.eE = (function(maybeNextParent) {
  this.iT = maybeNextParent;
});
$p.eK = (function(maybeNextParent) {
});
$p.ct = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gu(parentNode, this, (void 0));
});
$p.tU = (function() {
  return this.iU.data;
});
$p.aA = (function() {
  return this.iU;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  fB: 1,
  aO: 1,
  a9: 1,
  aZ: 1
}));
function $isArrayOf_Ljava_io_IOException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fH)));
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
  fL: 1,
  b4: 1,
  m: 1,
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
  fM: 1,
  a: 1,
  ad: 1,
  aa: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c0)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  c0: 1,
  a: 1,
  ad: 1,
  aa: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fT)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fW)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  v: 1,
  t: 1,
  m: 1,
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
$p.oV = (function(str) {
  var str$1 = $m_jl_String$().sZ(str, 0, str.a.length);
  this.r = (("" + this.r) + str$1);
  return this;
});
$p.g = (function() {
  return this.r;
});
$p.n = (function() {
  return this.r.length;
});
$p.p1 = (function(index) {
  return this.r.charCodeAt(index);
});
$p.oU = (function(csq) {
  this.r = (("" + this.r) + csq);
  return this;
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  g7: 1,
  b3: 1,
  bZ: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ga)));
}
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c7)));
}
function $isArrayOf_Ljava_math_BigDecimal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gf)));
}
function $isArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gg)));
}
function $p_ju_Formatter__sendToDest__T__V($thiz, s) {
  if (($thiz.ei === null)) {
    $thiz.dn = (("" + $thiz.dn) + s);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__V($thiz, s1, s2) {
  if (($thiz.ei === null)) {
    $thiz.dn = ((("" + $thiz.dn) + s1) + s2);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__T__V($thiz, s1, s2, s3) {
  if (($thiz.ei === null)) {
    $thiz.dn = (($thiz.dn + (("" + s1) + s2)) + s3);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2, s3]);
  }
}
function $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, ss) {
  try {
    var len = (ss.length | 0);
    var i = 0;
    while ((i !== len)) {
      var t = ss[i];
      $thiz.ei.oU(t);
      i = ((1 + i) | 0);
    }
  } catch (e) {
    if ((!false)) {
      throw e;
    }
  }
}
function $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter($thiz, localeInfo, format, args) {
  if ($thiz.j3) {
    throw new $c_ju_FormatterClosedException();
  }
  var lastImplicitArgIndex = 0;
  var lastArgIndex = 0;
  var fmtLength = format.length;
  var fmtIndex = 0;
  while ((fmtIndex !== fmtLength)) {
    var fromIndex = fmtIndex;
    var nextPercentIndex = (format.indexOf("%", fromIndex) | 0);
    if ((nextPercentIndex < 0)) {
      var beginIndex = fmtIndex;
      $p_ju_Formatter__sendToDest__T__V($thiz, format.substring(beginIndex));
      return $thiz;
    }
    var beginIndex$1 = fmtIndex;
    $p_ju_Formatter__sendToDest__T__V($thiz, format.substring(beginIndex$1, nextPercentIndex));
    var formatSpecifierIndex = ((1 + nextPercentIndex) | 0);
    var re = $m_ju_Formatter$().nc;
    re.lastIndex = formatSpecifierIndex;
    var execResult = re.exec(format);
    if (((execResult === null) || ((execResult.index | 0) !== formatSpecifierIndex))) {
      $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, ((formatSpecifierIndex === fmtLength) ? 37 : format.charCodeAt(formatSpecifierIndex)));
    }
    fmtIndex = (re.lastIndex | 0);
    var index = ((fmtIndex - 1) | 0);
    var conversion$2 = format.charCodeAt(index);
    var flags = $p_ju_Formatter__parseFlags__T__C__I($thiz, execResult[2], conversion$2);
    var width = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[3]);
    var precision = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[4]);
    if ((width === (-2))) {
      $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, (-2147483648));
    }
    if ((precision === (-2))) {
      $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, (-2147483648));
    }
    if ((conversion$2 === 110)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((width !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, width);
      }
      if ((flags !== 0)) {
        $thiz.kv(flags);
      }
      $p_ju_Formatter__sendToDest__T__V($thiz, "\n");
    } else if ((conversion$2 === 37)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.kv(flags);
      }
      if ((((1 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((-2) & flags) !== 0)) {
        $thiz.i5(37, flags, (-2));
      }
      $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, "%");
    } else {
      var conversionLower = (((256 & flags) !== 0) ? (65535 & ((32 + conversion$2) | 0)) : conversion$2);
      var illegalFlags = $m_ju_Formatter$().nb.a[((conversionLower - 97) | 0)];
      if (((illegalFlags === (-1)) || (((256 & flags) & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion$2);
      }
      if ((((17 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.kv(flags);
      }
      if (((precision !== (-1)) && ((512 & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if (((flags & illegalFlags) !== 0)) {
        $thiz.i5(conversionLower, flags, illegalFlags);
      }
      if (((128 & flags) !== 0)) {
        var argIndex = lastArgIndex;
      } else {
        var i = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[1]);
        if ((i === (-1))) {
          lastImplicitArgIndex = ((1 + lastImplicitArgIndex) | 0);
          var argIndex = lastImplicitArgIndex;
        } else {
          if ((i <= 0)) {
            $p_ju_Formatter__throwIllegalFormatArgumentIndexException__I__E($thiz, i);
          }
          var argIndex = i;
        }
      }
      if (((argIndex <= 0) || (argIndex > args.a.length))) {
        $p_ju_Formatter__throwMissingFormatArgumentException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      lastArgIndex = argIndex;
      var arg = args.a[((argIndex - 1) | 0)];
      if ((((arg === null) && (conversionLower !== 98)) && (conversionLower !== 115))) {
        $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, "null");
      } else {
        $p_ju_Formatter__formatArg__ju_Formatter$LocaleInfo__O__C__I__I__I__V($thiz, localeInfo, arg, conversionLower, flags, width, precision);
      }
    }
  }
  return $thiz;
}
function $p_ju_Formatter__parseFlags__T__C__I($thiz, flags, conversion) {
  var bits = (((((conversion - 65) | 0) >>> 0) <= 25) ? 256 : 0);
  var len = flags.length;
  var i = 0;
  while ((i !== len)) {
    var index = i;
    var f = flags.charCodeAt(index);
    switch (f) {
      case 45: {
        var bit = 1;
        break;
      }
      case 35: {
        var bit = 2;
        break;
      }
      case 43: {
        var bit = 4;
        break;
      }
      case 32: {
        var bit = 8;
        break;
      }
      case 48: {
        var bit = 16;
        break;
      }
      case 44: {
        var bit = 32;
        break;
      }
      case 40: {
        var bit = 64;
        break;
      }
      case 60: {
        var bit = 128;
        break;
      }
      default: {
        var bit;
        throw new $c_jl_AssertionError($bC(f));
      }
    }
    if (((bits & bit) !== 0)) {
      $p_ju_Formatter__throwDuplicateFormatFlagsException__C__E($thiz, f);
    }
    bits = (bits | bit);
    i = ((1 + i) | 0);
  }
  return bits;
}
function $p_ju_Formatter__parsePositiveInt__O__I($thiz, capture) {
  if ((capture !== (void 0))) {
    var x = (+parseInt(capture, 10));
    return ((x <= 2.147483647E9) ? $doubleToInt(x) : (-2));
  } else {
    return (-1);
  }
}
function $p_ju_Formatter__formatArg__ju_Formatter$LocaleInfo__O__C__I__I__I__V($thiz, localeInfo, arg, conversionLower, flags, width, precision) {
  switch (conversionLower) {
    case 98: {
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, (((arg === false) || (arg === null)) ? "false" : "true"));
      break;
    }
    case 104: {
      var $x_1 = $m_ju_Formatter$RootLocaleInfo$();
      var i = $dp_hashCode__I(arg);
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $x_1, flags, width, precision, (i >>> 0.0).toString(16));
      break;
    }
    case 115: {
      if ($is_ju_Formattable(arg)) {
        var formattableFlags = (((((1 & flags) !== 0) ? 1 : 0) | (((2 & flags) !== 0) ? 4 : 0)) | (((256 & flags) !== 0) ? 2 : 0));
        arg.ue($thiz, formattableFlags, width, precision);
      } else {
        if (((2 & flags) !== 0)) {
          $thiz.i5(conversionLower, flags, 2);
        }
        $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, precision, ("" + arg));
      }
      break;
    }
    case 99: {
      if ((arg instanceof $Char)) {
        var $x_2 = ("" + $cToS($uC(arg)));
      } else {
        if ((!$isInt(arg))) {
          $thiz.gN(conversionLower, arg);
        }
        var x3 = (arg | 0);
        if (((x3 >>> 0) > 1114111)) {
          $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, x3);
        }
        var $x_2 = $m_jl_Character$().ig(x3);
      }
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, (-1), $x_2);
      break;
    }
    case 100: {
      if ($isInt(arg)) {
        var $x_3 = ("" + (arg | 0));
      } else if ((arg instanceof $Long)) {
        var $x_4 = $uJ(arg);
        var x3$2_$_lo = $x_4.l;
        var x3$2_$_hi = $x_4.h;
        var $x_3 = $m_RTLong$().kM(x3$2_$_lo, x3$2_$_hi);
      } else {
        if ((!false)) {
          $thiz.gN(conversionLower, arg);
        }
        var $x_3 = arg.g();
      }
      $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, $x_3, "");
      break;
    }
    case 111:
    case 120: {
      var isOctal = (conversionLower === 111);
      var prefix = (((2 & flags) === 0) ? "" : (isOctal ? "0" : (((256 & flags) !== 0) ? "0X" : "0x")));
      if (false) {
        var radix = (isOctal ? 8 : 16);
        $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, arg.ig(radix), prefix);
      } else {
        if ($isInt(arg)) {
          var x2$5 = (arg | 0);
          var str$6 = (isOctal ? (x2$5 >>> 0.0).toString(8) : (x2$5 >>> 0.0).toString(16));
        } else {
          if ((!(arg instanceof $Long))) {
            $thiz.gN(conversionLower, arg);
          }
          var $x_5 = $uJ(arg);
          var x3$3_$_lo = $x_5.l;
          var x3$3_$_hi = $x_5.h;
          var str$6 = (isOctal ? $m_jl_Long$().sE(x3$3_$_lo, x3$3_$_hi) : $m_jl_Long$().pB(x3$3_$_lo, x3$3_$_hi));
        }
        if (((76 & flags) !== 0)) {
          $thiz.i5(conversionLower, flags, 76);
        }
        $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, prefix, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str$6));
      }
      break;
    }
    case 101:
    case 102:
    case 103: {
      if (((typeof arg) === "number")) {
        var x2$6 = (+arg);
        if (((x2$6 !== x2$6) || ((x2$6 === Infinity) || (x2$6 === (-Infinity))))) {
          $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, x2$6);
        } else {
          $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().sG(x2$6), flags, precision, conversionLower, localeInfo, width);
        }
      } else if (false) {
        $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().sF(arg), flags, precision, conversionLower, localeInfo, width);
      } else {
        $thiz.gN(conversionLower, arg);
      }
      break;
    }
    case 97: {
      if (((typeof arg) === "number")) {
        $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, (+arg));
      } else {
        $thiz.gN(conversionLower, arg);
      }
      break;
    }
    default: {
      throw new $c_jl_AssertionError((("Unknown conversion '" + $cToS(conversionLower)) + "' was not rejected earlier"));
    }
  }
}
function $p_ju_Formatter__flagsToString__I__T($thiz, flags) {
  return ((((((((((1 & flags) !== 0) ? "-" : "") + (((2 & flags) !== 0) ? "#" : "")) + (((4 & flags) !== 0) ? "+" : "")) + (((8 & flags) !== 0) ? " " : "")) + (((16 & flags) !== 0) ? "0" : "")) + (((32 & flags) !== 0) ? "," : "")) + (((64 & flags) !== 0) ? "(" : "")) + (((128 & flags) !== 0) ? "<" : ""));
}
function $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, digitsAfterDot, forceDecimalSep) {
  var rounded = x.pS(((1 + digitsAfterDot) | 0));
  var signStr = (rounded.cS ? "-" : "");
  var intStr = rounded.cT;
  var fractionalDigitCount = ((intStr.length - 1) | 0);
  var missingZeros = ((digitsAfterDot - fractionalDigitCount) | 0);
  var integerPart = intStr.substring(0, 1);
  var fractionalPart = (("" + intStr.substring(1)) + $m_ju_Formatter$().ku(missingZeros));
  var significandStr = (((fractionalPart === "") && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + fractionalPart));
  var exponent = ((fractionalDigitCount - rounded.cB) | 0);
  var exponentSign = ((exponent < 0) ? "-" : "+");
  var sign = (exponent >> 31);
  var this$2 = (((exponent ^ sign) - sign) | 0);
  var exponentAbsStr0 = ("" + this$2);
  var exponentAbsStr = ((exponentAbsStr0.length === 1) ? ("0" + exponentAbsStr0) : exponentAbsStr0);
  return ((((signStr + significandStr) + "e") + exponentSign) + exponentAbsStr);
}
function $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, scale, forceDecimalSep) {
  var rounded = x.tD(scale);
  var signStr = (rounded.cS ? "-" : "");
  var intStr = rounded.cT;
  var intStrLen = intStr.length;
  var minDigits = ((1 + scale) | 0);
  var expandedIntStr = ((intStrLen >= minDigits) ? intStr : (("" + $m_ju_Formatter$().ku(((minDigits - intStrLen) | 0))) + intStr));
  var dotPos = ((expandedIntStr.length - scale) | 0);
  var integerPart = (signStr + expandedIntStr.substring(0, dotPos));
  return (((scale === 0) && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + expandedIntStr.substring(dotPos)));
}
function $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, precision, forceDecimalSep) {
  var p = ((precision === 0) ? 1 : precision);
  var rounded = x.pS(p);
  var orderOfMagnitude = ((((rounded.cT.length - 1) | 0) - rounded.cB) | 0);
  if (((orderOfMagnitude >= (-4)) && (orderOfMagnitude < p))) {
    var b = ((((p - orderOfMagnitude) | 0) - 1) | 0);
    return $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, rounded, ((b < 0) ? 0 : b), forceDecimalSep);
  } else {
    return $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, rounded, ((p - 1) | 0), forceDecimalSep);
  }
}
function $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, arg) {
  if (((arg !== arg) || ((arg === Infinity) || (arg === (-Infinity))))) {
    $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, arg);
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, arg, true);
    var lo = (fpBitsDataView.getInt32(0, true) | 0);
    var hi = (fpBitsDataView.getInt32(4, true) | 0);
    var negative = (hi < 0);
    var hi$1 = (1048575 & hi);
    var biasedExponent = (2047 & ((hi >>> 20) | 0));
    var actualPrecision = ((precision === 0) ? 1 : ((precision > 12) ? (-1) : precision));
    var signStr = (negative ? "-" : (((4 & flags) !== 0) ? "+" : (((8 & flags) !== 0) ? " " : "")));
    if ((biasedExponent === 0)) {
      if (((lo | hi$1) === 0)) {
        var x1___1 = "0";
        var x1___2 = $bL(0, 0);
        var x1___3 = 0;
      } else if ((actualPrecision === (-1))) {
        var x1___1 = "0";
        var x1___2 = $bL(lo, hi$1);
        var x1___3 = (-1022);
      } else {
        var leadingZeros = ((hi$1 !== 0) ? Math.clz32(hi$1) : ((32 + Math.clz32(lo)) | 0));
        var shift = ((leadingZeros - 11) | 0);
        var lo$2 = (((32 & shift) === 0) ? (lo << shift) : 0);
        var hi$2 = (((32 & shift) === 0) ? (((((lo >>> 1) | 0) >>> (~shift)) | 0) | (hi$1 << shift)) : (lo << shift));
        var hi$3 = (1048575 & hi$2);
        var normalizedExponent = (((-1022) - shift) | 0);
        var x1___1 = "1";
        var x1___2 = $bL(lo$2, hi$3);
        var x1___3 = normalizedExponent;
      }
    } else {
      var _3 = ((biasedExponent - 1023) | 0);
      var x1___1 = "1";
      var x1___2 = $bL(lo, hi$1);
      var x1___3 = _3;
    }
    var implicitBitStr = x1___1;
    var $x_1 = $uJ(x1___2);
    var mantissa_$_lo = $x_1.l;
    var mantissa_$_hi = $x_1.h;
    var exponent = (x1___3 | 0);
    if ((actualPrecision === (-1))) {
      var roundedMantissa_$_lo = mantissa_$_lo;
      var roundedMantissa_$_hi = mantissa_$_hi;
    } else {
      var n = ((52 - (actualPrecision << 2)) | 0);
      var lo$3 = (((32 & n) === 0) ? (1 << n) : 0);
      var hi$4 = (((32 & n) === 0) ? 0 : (1 << n));
      var lo$4 = ((lo$3 - 1) | 0);
      var hi$5 = ((((hi$4 - 1) | 0) + (((lo$3 | (~lo$4)) >>> 31) | 0)) | 0);
      var lo$5 = (((lo$3 >>> 1) | 0) | (hi$4 << 31));
      var hi$6 = (hi$4 >> 1);
      var lo$6 = (~lo$4);
      var hi$7 = (~hi$5);
      var lo$7 = (mantissa_$_lo & lo$6);
      var hi$8 = (mantissa_$_hi & hi$7);
      var lo$8 = (mantissa_$_lo & lo$4);
      var hi$9 = (mantissa_$_hi & hi$5);
      if (((hi$9 === hi$6) ? ((lo$8 >>> 0) < (lo$5 >>> 0)) : (hi$9 < hi$6))) {
        var roundedMantissa_$_lo = lo$7;
        var roundedMantissa_$_hi = hi$8;
      } else if (((hi$9 === hi$6) ? ((lo$8 >>> 0) > (lo$5 >>> 0)) : (hi$9 > hi$6))) {
        var lo$9 = ((lo$7 + lo$3) | 0);
        var hi$10 = ((((hi$8 + hi$4) | 0) + ((((lo$7 & lo$3) | ((lo$7 | lo$3) & (~lo$9))) >>> 31) | 0)) | 0);
        var roundedMantissa_$_lo = lo$9;
        var roundedMantissa_$_hi = hi$10;
      } else if ((((lo$7 & lo$3) | (hi$8 & hi$4)) === 0)) {
        var roundedMantissa_$_lo = lo$7;
        var roundedMantissa_$_hi = hi$8;
      } else {
        var lo$11 = ((lo$7 + lo$3) | 0);
        var hi$12 = ((((hi$8 + hi$4) | 0) + ((((lo$7 & lo$3) | ((lo$7 | lo$3) & (~lo$11))) >>> 31) | 0)) | 0);
        var roundedMantissa_$_lo = lo$11;
        var roundedMantissa_$_hi = hi$12;
      }
    }
    var baseStr = $m_jl_Long$().pB(roundedMantissa_$_lo, roundedMantissa_$_hi);
    var beginIndex = baseStr.length;
    var padded = (("" + "0000000000000".substring(beginIndex)) + baseStr);
    $m_ju_Formatter$();
    if ((!(padded.length === 13))) {
      throw new $c_jl_AssertionError("padded mantissa does not have the right number of bits");
    }
    var minLength = ((actualPrecision < 1) ? 1 : actualPrecision);
    var len = padded.length;
    while (((len > minLength) && (padded.charCodeAt(((len - 1) | 0)) === 48))) {
      len = ((len - 1) | 0);
    }
    var endIndex = len;
    var mantissaStr = padded.substring(0, endIndex);
    var exponentStr = ("" + exponent);
    $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, (signStr + (((256 & flags) !== 0) ? "0X" : "0x")), $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, ((((implicitBitStr + ".") + mantissaStr) + "p") + exponentStr)));
  }
}
function $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, precision, str) {
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyUpperCase__ju_Formatter$LocaleInfo__I__T__T($thiz, localeInfo, flags, (((precision < 0) || (precision >= str.length)) ? str : str.substring(0, precision))));
}
function $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, x) {
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, ((x !== x) ? "NaN" : ((x > 0.0) ? (((4 & flags) !== 0) ? "+Infinity" : (((8 & flags) !== 0) ? " Infinity" : "Infinity")) : (((64 & flags) !== 0) ? "(Infinity)" : "-Infinity")))));
}
function $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, str, basePrefix) {
  if (((str.length >= width) && ((110 & flags) === 0))) {
    $p_ju_Formatter__sendToDest__T__V($thiz, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str));
  } else if (((126 & flags) === 0)) {
    $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str));
  } else {
    if ((str.charCodeAt(0) !== 45)) {
      if (((4 & flags) !== 0)) {
        var x1___1 = "+";
        var x1___2 = str;
      } else if (((8 & flags) !== 0)) {
        var x1___1 = " ";
        var x1___2 = str;
      } else {
        var x1___1 = "";
        var x1___2 = str;
      }
    } else if (((64 & flags) !== 0)) {
      var x1___1 = "(";
      var x1___2 = (str.substring(1) + ")");
    } else {
      var x1___1 = "-";
      var x1___2 = str.substring(1);
    }
    var numberPrefix = x1___1;
    var rest0 = x1___2;
    $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, (("" + numberPrefix) + basePrefix), $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, (((32 & flags) !== 0) ? $p_ju_Formatter__insertGroupingCommas__ju_Formatter$LocaleInfo__T__T($thiz, localeInfo, rest0) : rest0)));
  }
}
function $p_ju_Formatter__insertGroupingCommas__ju_Formatter$LocaleInfo__T__T($thiz, localeInfo, s) {
  var len = s.length;
  var index = 0;
  while (((index !== len) && ((((s.charCodeAt(index) - 48) | 0) >>> 0) <= 9))) {
    index = ((1 + index) | 0);
  }
  index = ((index - 3) | 0);
  if ((index <= 0)) {
    return s;
  } else {
    var beginIndex = index;
    var result = s.substring(beginIndex);
    while ((index > 3)) {
      var next = ((index - 3) | 0);
      var endIndex = index;
      result = ((s.substring(next, endIndex) + ",") + result);
      index = next;
    }
    var endIndex$1 = index;
    return ((s.substring(0, endIndex$1) + ",") + result);
  }
}
function $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str) {
  return (((256 & flags) !== 0) ? str.toUpperCase() : str);
}
function $p_ju_Formatter__applyUpperCase__ju_Formatter$LocaleInfo__I__T__T($thiz, localeInfo, flags, str) {
  return (((256 & flags) !== 0) ? str.toUpperCase() : str);
}
function $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, str) {
  var len = str.length;
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__V($thiz, str);
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)));
  } else {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), str);
  }
}
function $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, prefix, str) {
  var len = ((prefix.length + str.length) | 0);
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, prefix, str);
  } else if (((16 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, $p_ju_Formatter__strRepeat__T__I__T($thiz, "0", ((width - len) | 0)), str);
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)));
  } else {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), prefix, str);
  }
}
function $p_ju_Formatter__strRepeat__T__I__T($thiz, s, times) {
  var result = "";
  var i = 0;
  while ((i !== times)) {
    result = (("" + result) + s);
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_ju_Formatter__throwDuplicateFormatFlagsException__C__E($thiz, flag) {
  throw new $c_ju_DuplicateFormatFlagsException(("" + $cToS(flag)));
}
function $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion) {
  throw new $c_ju_UnknownFormatConversionException(("" + $cToS(conversion)));
}
function $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision) {
  throw new $c_ju_IllegalFormatPrecisionException(precision);
}
function $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, width) {
  throw new $c_ju_IllegalFormatWidthException(width);
}
function $p_ju_Formatter__throwIllegalFormatArgumentIndexException__I__E($thiz, index) {
  throw new $c_ju_IllegalFormatArgumentIndexException(((index === 0) ? "Illegal format argument index = 0" : "Format argument index: (not representable as int)"));
}
function $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, fullFormatSpecifier) {
  throw new $c_ju_MissingFormatWidthException(fullFormatSpecifier);
}
function $p_ju_Formatter__throwMissingFormatArgumentException__T__E($thiz, fullFormatSpecifier) {
  throw new $c_ju_MissingFormatArgumentException(fullFormatSpecifier);
}
function $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, arg) {
  throw new $c_ju_IllegalFormatCodePointException(arg);
}
function $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult$1) {
  return ("%" + execResult$1[0]);
}
function $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, x, flags$1, precision$1, conversionLower$1, localeInfo$1, width$1) {
  var forceDecimalSep = ((2 & flags$1) !== 0);
  var actualPrecision = ((precision$1 >= 0) ? precision$1 : 6);
  switch (conversionLower$1) {
    case 101: {
      var $x_1 = $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
      break;
    }
    case 102: {
      var $x_1 = $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
      break;
    }
    default: {
      var $x_1 = $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
    }
  }
  $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo$1, flags$1, width$1, $x_1, "");
}
function $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, dest, formatterLocaleInfo) {
  $thiz.ei = dest;
  $thiz.na = formatterLocaleInfo;
  $thiz.dn = "";
  $thiz.j3 = false;
  return $thiz;
}
function $ct_ju_Formatter__($thiz) {
  $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, null, $m_ju_Formatter$RootLocaleInfo$());
  return $thiz;
}
/** @constructor */
function $c_ju_Formatter() {
  this.ei = null;
  this.na = null;
  this.dn = null;
  this.j3 = false;
}
$p = $c_ju_Formatter.prototype = new $h_O();
$p.constructor = $c_ju_Formatter;
/** @constructor */
function $h_ju_Formatter() {
}
$h_ju_Formatter.prototype = $p;
$p.s4 = (function(format, args) {
  return $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter(this, this.na, format, args);
});
$p.g = (function() {
  if (this.j3) {
    throw new $c_ju_FormatterClosedException();
  }
  return ((this.ei === null) ? this.dn : this.ei.g());
});
$p.kv = (function(flags) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T(this, flags));
});
$p.i5 = (function(conversionLower, flags, illegalFlags) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T(this, (flags & illegalFlags)), conversionLower);
});
$p.gN = (function(conversionLower, arg) {
  throw new $c_ju_IllegalFormatConversionException(conversionLower, $objectGetClass(arg));
});
var $d_ju_Formatter = new $TypeData().i($c_ju_Formatter, "java.util.Formatter", ({
  gl: 1,
  b0: 1,
  b2: 1,
  b1: 1
}));
class $c_ju_concurrent_ExecutionException extends $c_jl_Exception {
  constructor(message, cause) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_ju_concurrent_ExecutionException = new $TypeData().i($c_ju_concurrent_ExecutionException, "java.util.concurrent.ExecutionException", ({
  gA: 1,
  t: 1,
  m: 1,
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
  this.qs = null;
  this.qs = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => $m_s_None$()));
}
$p = $c_s_PartialFunction$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$$anon$1;
/** @constructor */
function $h_s_PartialFunction$$anon$1() {
}
$h_s_PartialFunction$$anon$1.prototype = $p;
$p.g = (function() {
  return "<function1>";
});
$p.cd = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cO = (function(x) {
  return false;
});
$p.jV = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.c = (function(v1) {
  this.jV(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  gY: 1,
  f: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_s_PartialFunction$Lifted(pf) {
  this.nG = null;
  this.nG = pf;
}
$p = $c_s_PartialFunction$Lifted.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_s_PartialFunction$Lifted;
/** @constructor */
function $h_s_PartialFunction$Lifted() {
}
$h_s_PartialFunction$Lifted.prototype = $p;
$p.jX = (function(x) {
  var z = this.nG.cd(x, $m_s_PartialFunction$().hy);
  return ((!$m_s_PartialFunction$().tt(z)) ? new $c_s_Some(z) : $m_s_None$());
});
$p.c = (function(v1) {
  return this.jX(v1);
});
var $d_s_PartialFunction$Lifted = new $TypeData().i($c_s_PartialFunction$Lifted, "scala.PartialFunction$Lifted", ({
  gZ: 1,
  bq: 1,
  f: 1,
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
$p.w = (function() {
  return (-1);
});
$p.bB = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.dV = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.m = (function() {
  return this;
});
$p.k3 = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.e1 = (function(n) {
  return this.h5(n, (-1));
});
$p.h5 = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.g = (function() {
  return "<iterator>";
});
/** @constructor */
function $c_sc_Map$() {
  this.jm = null;
  this.nV = null;
  this.nW = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.nV = $ct_O__(new $c_O());
  this.nW = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.nV));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  hp: 1,
  hq: 1,
  a: 1,
  bc: 1
}));
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$();
  }
  return $n_sc_Map$;
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.ej = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.ej = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.p0 = (function(elems) {
  return this.ej.de(elems);
});
$p.i1 = (function(it) {
  return this.ej.aq(it);
});
$p.aL = (function() {
  return this.ej.aL();
});
$p.de = (function(elems) {
  return this.p0(elems);
});
$p.aq = (function(source) {
  return this.i1(source);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cu(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => x$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.ex(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.b9(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.b9(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.w();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.w();
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
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $thiz.bo().aL();
  var it = $thiz.m();
  while (it.o()) {
    b.b6(f.c(it.l()));
  }
  return b.b7();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.hA = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.s8 = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.aq.call(this, it));
});
$p.aq = (function(it) {
  return this.s8(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  hL: 1,
  hf: 1,
  a: 1,
  K: 1
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
  this.X = null;
  $n_sci_LazyList$ = this;
  this.X = $ct_sci_LazyList__O__(new $c_sci_LazyList(), $m_sci_LazyList$EmptyMarker$());
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.de = (function(elems) {
  return this.ki(elems);
});
$p.tv = (function(ll, n) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef, iRef) => (() => {
    var rest = restRef.fk;
    var i = iRef.et;
    while (((i > 0) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest) === $m_sci_LazyList$().X)))) {
      rest = rest.bc();
      restRef.fk = rest;
      i = ((i - 1) | 0);
      iRef.et = i;
    }
    return rest;
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.ki = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.w() === 0) ? this.X : $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.pT(coll.m()))))));
});
$p.pU = (function(it, suffix) {
  return (it.o() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.l(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.pU(it, suffix))))) : suffix.M());
});
$p.pT = (function(it) {
  return (it.o() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.l(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.pT(it))))) : this.X);
});
$p.aL = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.aq = (function(source) {
  return this.ki(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  hM: 1,
  a: 1,
  K: 1,
  a5: 1
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
  this.oe = null;
  this.gg = null;
  this.oe = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.gg = outer;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.r0 = (function(x) {
  this.gg.b6(x);
  return this;
});
$p.qM = (function(xs) {
  this.gg.b5(xs);
  return this;
});
$p.bb = (function(size) {
  this.gg.bb(size);
});
$p.b7 = (function() {
  return this.oe.c(this.gg.b7());
});
$p.b6 = (function(elem) {
  return this.r0(elem);
});
$p.b5 = (function(elems) {
  return this.qM(elems);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  iE: 1,
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
$p.bb = (function(size) {
});
$p.r1 = (function(elem) {
  this.dN.b6(elem);
  return this;
});
$p.qN = (function(xs) {
  this.dN.b5(xs);
  return this;
});
$p.b7 = (function() {
  return this.dN;
});
$p.b6 = (function(elem) {
  return this.r1(elem);
});
$p.b5 = (function(elems) {
  return this.qN(elems);
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  bl: 1,
  L: 1,
  N: 1,
  S: 1
}));
class $c_s_concurrent_Future$$anon$4 extends $c_jl_Throwable {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  fo() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$4 = new $TypeData().i($c_s_concurrent_Future$$anon$4, "scala.concurrent.Future$$anon$4", ({
  j8: 1,
  m: 1,
  a: 1,
  aV: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
function $isArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.jI)));
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
  this.oC = null;
  this.oC = Promise.resolve((void 0));
}
$p = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
}
$h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = $p;
$p.kb = (function(runnable) {
  this.oC.then(((arg1$2) => {
    try {
      runnable.eC();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gZ($m_jl_System$Streams$().f6);
    }
  }));
});
$p.kJ = (function(t) {
  t.gZ($m_jl_System$Streams$().f6);
});
var $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", ({
  jT: 1,
  bo: 1,
  bn: 1,
  b6: 1
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
$p.kb = (function(runnable) {
  setTimeout($m_sjs_js_Any$().sb(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    try {
      runnable.eC();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gZ($m_jl_System$Streams$().f6);
    }
  }))), 0);
});
$p.kJ = (function(t) {
  t.gZ($m_jl_System$Streams$().f6);
});
var $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", ({
  jU: 1,
  bo: 1,
  bn: 1,
  b6: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(f) {
  this.oD = null;
  this.oD = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d() {
}
$h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = $p;
$p.M = (function() {
  return (0, this.oD)();
});
var $d_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d, "scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d", ({
  k4: 1,
  k3: 1,
  d3: 1,
  b8: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(f) {
  this.oE = null;
  this.oE = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1() {
}
$h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = $p;
$p.c = (function(x0) {
  return (0, this.oE)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1 = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1, "scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1", ({
  k6: 1,
  k5: 1,
  bq: 1,
  f: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(f) {
  this.oF = null;
  this.oF = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7() {
}
$h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = $p;
$p.fm = (function(x0, x1) {
  return (0, this.oF)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7, "scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7", ({
  k8: 1,
  k7: 1,
  d4: 1,
  b9: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(f) {
  this.oG = null;
  this.oG = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96() {
}
$h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = $p;
$p.jU = (function(x0, x1, x2) {
  return (0, this.oG)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96, "scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96", ({
  ka: 1,
  k9: 1,
  jD: 1,
  gR: 1
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.tW = (function() {
  return ((this instanceof $c_s_util_Right) ? new $c_s_Some(this.bN) : $m_s_None$());
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $isArrayOf_s_util_Try(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.br)));
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
$p.U = (function() {
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
$p.sB = (function(x) {
  var x$2 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
  if (((x$2 === null) ? (x === null) : x$2.i(x))) {
    return true;
  } else {
    return false;
  }
});
$p.r9 = (function(x, default$1) {
  var x$2 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
  if (((x$2 === null) ? (x === null) : x$2.i(x))) {
    return (void 0);
  } else {
    return default$1.c(x);
  }
});
$p.cO = (function(x) {
  return this.sB(x);
});
$p.cd = (function(x, default$1) {
  return this.r9(x, default$1);
});
var $d_Lcom_github_pwharned_clausula_extension_Main$$anon$1 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_Main$$anon$1, "com.github.pwharned.clausula.extension.Main$$anon$1", ({
  di: 1,
  d5: 1,
  f: 1,
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage(code) {
  this.fL = null;
  this.kO = null;
  this.fL = code;
  this.kO = code;
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage.prototype = $p;
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, 976053418, true);
});
$p.i = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage) && (this.fL === x$0.fL)));
});
$p.g = (function() {
  return $m_sr_ScalaRunTime$().cc(this);
});
$p.A = (function() {
  return 1;
});
$p.C = (function() {
  return "DetectedLanguage";
});
$p.B = (function(n) {
  if ((n === 0)) {
    return this.fL;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.ev = (function() {
  return this.fL;
});
$p.gL = (function() {
  return this.kO;
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.by)));
}
var $d_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage, "com.github.pwharned.clausula.extension.domain.DetectedLanguage", ({
  by: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.gG($m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.gH($m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.eL(false);
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
  if ((this$2.be || (!when))) {
    var $x_1 = f();
  } else {
    this$2.be = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.be = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.cL();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.cN();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.be || (!when))) {
    f();
  } else {
    this$3.be = true;
    try {
      f();
    } finally {
      this$3.be = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pQ($thiz.cN(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pQ($thiz.cL(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.h8())) {
    $thiz.gV();
    $thiz.eL(true);
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
    $thiz.eL(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.cL();
  var $x_1 = this$.length;
  var this$$1 = $thiz.cN();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_eventbus_EventBus() {
  this.l0 = null;
  this.l1 = null;
  this.kZ = null;
  this.l0 = (void 0);
  this.l1 = new $c_Lcom_raquo_airstream_eventbus_WriteBus(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))), ".writer");
  this.kZ = this.l1.eU;
}
$p = $c_Lcom_raquo_airstream_eventbus_EventBus.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_eventbus_EventBus;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_EventBus() {
}
$h_Lcom_raquo_airstream_eventbus_EventBus.prototype = $p;
$p.cP = (function() {
  return this.l0;
});
$p.cJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.g = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eG = (function() {
  return this.kZ;
});
var $d_Lcom_raquo_airstream_eventbus_EventBus = new $TypeData().i($c_Lcom_raquo_airstream_eventbus_EventBus, "com.raquo.airstream.eventbus.EventBus", ({
  e8: 1,
  ah: 1,
  aC: 1,
  as: 1,
  a2: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.lJ = $m_Lcom_raquo_airstream_core_Observer$().sc(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__set__O__V($thiz, value) {
  var tryValue = new $c_s_util_Success(value);
  $thiz.lJ.e5(tryValue);
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.lK = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.lK = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.sC = (function(x) {
  return true;
});
$p.ra = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    this.lK.tx(x, _$1);
  })));
});
$p.cO = (function(x) {
  return this.sC(x);
});
$p.cd = (function(x, default$1) {
  return this.ra(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  eo: 1,
  d5: 1,
  f: 1,
  k: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.iP = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.cj.oN();
  })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.cj.rE();
  })));
  $thiz.eg = (void 0);
  $thiz.fX = $m_sci_Map$EmptyMap$();
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.eg === (void 0))) {
    $thiz.eg = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.eg;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.eg;
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
  var x = $thiz.eg;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.eg;
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
  var keyItemsWithReason = $thiz.fX.dg(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.e())) {
      var x0 = these.z();
      var x = x0.aS();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.aJ();
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
      if (l$tailLocal1.e()) {
        var result = $m_sci_Nil$();
        break;
      } else {
        var h = l$tailLocal1.z();
        var t = l$tailLocal1.v();
        if (((!(!f(h))) === true)) {
          l$tailLocal1 = t;
          continue;
        }
        var start = l$tailLocal1;
        var remaining$tailLocal1 = t;
        while (true) {
          if (remaining$tailLocal1.e()) {
            var result = start;
            break _return$1;
          } else {
            var x$1 = remaining$tailLocal1.z();
            if (((!(!f(x$1))) !== true)) {
              remaining$tailLocal1 = remaining$tailLocal1.v();
              continue;
            }
            var firstMiss = remaining$tailLocal1;
            var newHead = new $c_sci_$colon$colon(start.z(), $m_sci_Nil$());
            var toProcess = start.v();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.z(), $m_sci_Nil$());
              currentLast.aB = newElem;
              currentLast = newElem;
              toProcess = toProcess.v();
            }
            var next = firstMiss.v();
            var nextToCopy = next;
            while ((!next.e())) {
              var head = next.z();
              if (((!(!f(head))) !== true)) {
                next = next.v();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.z(), $m_sci_Nil$());
                  currentLast.aB = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.v();
                }
                nextToCopy = next.v();
                next = next.v();
              }
            }
            if ((!nextToCopy.e())) {
              currentLast.aB = nextToCopy;
            }
            var result = newHead;
            break _return$1;
          }
        }
      }
    }
  }
  var this$1 = $thiz.fX.dg(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.bA(t$1.aS()));
  _return$3: {
    var $x_3;
    var l$tailLocal1$1 = this$1;
    while (true) {
      if (l$tailLocal1$1.e()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$tailLocal1$1.z();
        var t$2 = l$tailLocal1$1.v();
        if (((!(!f$1(h$1))) === true)) {
          l$tailLocal1$1 = t$2;
          continue;
        }
        var start$1 = l$tailLocal1$1;
        var remaining$tailLocal1$1 = t$2;
        while (true) {
          if (remaining$tailLocal1$1.e()) {
            var $x_3 = start$1;
            break _return$3;
          } else {
            var x$2 = remaining$tailLocal1$1.z();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$tailLocal1$1 = remaining$tailLocal1$1.v();
              continue;
            }
            var firstMiss$1 = remaining$tailLocal1$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.z(), $m_sci_Nil$());
            var toProcess$1 = start$1.v();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.z(), $m_sci_Nil$());
              currentLast$1.aB = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.v();
            }
            var next$1 = firstMiss$1.v();
            var nextToCopy$1 = next$1;
            while ((!next$1.e())) {
              var head$1 = next$1.z();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.v();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.z(), $m_sci_Nil$());
                  currentLast$1.aB = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.v();
                }
                nextToCopy$1 = next$1.v();
                next$1 = next$1.v();
              }
            }
            if ((!nextToCopy$1.e())) {
              currentLast$1.aB = nextToCopy$1;
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
    var x0$1 = itemsToAdd.z();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.v();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.z();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.aB = nx;
      t$3 = nx;
      rest = rest.v();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.oX($x_2);
  var domValues = key.iE.p9(key.mG.c($thiz));
  var f$3 = ((elem) => result.bA(elem));
  _return$5: {
    var $x_5;
    var l$tailLocal1$2 = domValues;
    while (true) {
      if (l$tailLocal1$2.e()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$tailLocal1$2.z();
        var t$4 = l$tailLocal1$2.v();
        if (((!(!f$3(h$3))) === true)) {
          l$tailLocal1$2 = t$4;
          continue;
        }
        var start$2 = l$tailLocal1$2;
        var remaining$tailLocal1$2 = t$4;
        while (true) {
          if (remaining$tailLocal1$2.e()) {
            var $x_5 = start$2;
            break _return$5;
          } else {
            var x$4 = remaining$tailLocal1$2.z();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$tailLocal1$2 = remaining$tailLocal1$2.v();
              continue;
            }
            var firstMiss$2 = remaining$tailLocal1$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.z(), $m_sci_Nil$());
            var toProcess$2 = start$2.v();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.z(), $m_sci_Nil$());
              currentLast$2.aB = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.v();
            }
            var next$2 = firstMiss$2.v();
            var nextToCopy$2 = next$2;
            while ((!next$2.e())) {
              var head$2 = next$2.z();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.v();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.z(), $m_sci_Nil$());
                  currentLast$2.aB = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.v();
                }
                nextToCopy$2 = next$2.v();
                next$2 = next$2.v();
              }
            }
            if ((!nextToCopy$2.e())) {
              currentLast$2.aB = nextToCopy$2;
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
      if (l$tailLocal1$3.e()) {
        var $x_4 = $m_sci_Nil$();
        break;
      } else {
        var h$4 = l$tailLocal1$3.z();
        var t$5 = l$tailLocal1$3.v();
        if (((!(!f(h$4))) === true)) {
          l$tailLocal1$3 = t$5;
          continue;
        }
        var start$3 = l$tailLocal1$3;
        var remaining$tailLocal1$3 = t$5;
        while (true) {
          if (remaining$tailLocal1$3.e()) {
            var $x_4 = start$3;
            break _return$7;
          } else {
            var x$5 = remaining$tailLocal1$3.z();
            if (((!(!f(x$5))) !== true)) {
              remaining$tailLocal1$3 = remaining$tailLocal1$3.v();
              continue;
            }
            var firstMiss$3 = remaining$tailLocal1$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.z(), $m_sci_Nil$());
            var toProcess$3 = start$3.v();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.z(), $m_sci_Nil$());
              currentLast$3.aB = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.v();
            }
            var next$3 = firstMiss$3.v();
            var nextToCopy$3 = next$3;
            while ((!next$3.e())) {
              var head$3 = next$3.z();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.v();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.z(), $m_sci_Nil$());
                  currentLast$3.aB = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.v();
                }
                nextToCopy$3 = next$3.v();
                next$3 = next$3.v();
              }
            }
            if ((!nextToCopy$3.e())) {
              currentLast$3.aB = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break _return$7;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.oX($x_4);
  $thiz.fX = $thiz.fX.e8(key, newItems);
  key.mI.fm($thiz, key.iE.pb(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.fW, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.fW;
  $thiz.fW = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.e()) && (!maybePrevParent.x().hZ().bR.e()));
  var isNextParentActive = ((!maybeNextParent.e()) && (!maybeNextParent.x().hZ().bR.e()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.e() ? $m_s_None$() : new $c_s_Some(maybeNextParent.x().hZ())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.e()) {
    $thiz.iP.rj();
  } else {
    var x0 = maybeNextOwner.x();
    $thiz.iP.tC(x0);
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
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  fJ: 1,
  v: 1,
  t: 1,
  m: 1,
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
  fN: 1,
  am: 1,
  a: 1,
  ad: 1,
  aa: 1
}), ((x) => $isByte(x)));
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fQ)));
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
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
function $ct_jl_IllegalStateException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  c2: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  c3: 1,
  v: 1,
  t: 1,
  m: 1,
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
  fV: 1,
  bY: 1,
  b0: 1,
  b2: 1,
  b1: 1
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
  fY: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g0)));
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
  g1: 1,
  am: 1,
  a: 1,
  ad: 1,
  aa: 1
}), ((x) => $isShort(x)));
class $c_jl_StackOverflowError extends $c_jl_VirtualMachineError {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_StackOverflowError = new $TypeData().i($c_jl_StackOverflowError, "java.lang.StackOverflowError", ({
  g2: 1,
  c7: 1,
  b4: 1,
  m: 1,
  a: 1
}));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  gc: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  gi: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
function $ct_ju_NoSuchElementException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  aP: 1,
  v: 1,
  t: 1,
  m: 1,
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
$p.g = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().i($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  gO: 1,
  gL: 1,
  gM: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.nF)) {
    if (($thiz.hw === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.hw;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.a5.N));
      try {
        var $x_1 = ((($thiz.hw + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.nE = $x_1;
    $thiz.nF = true;
  }
  return $thiz.nE;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.hw = null;
    this.nE = null;
    this.nF = false;
    this.hw = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  gU: 1,
  v: 1,
  t: 1,
  m: 1,
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.e = (function() {
  return (this === $m_s_None$());
});
$p.w = (function() {
  return (this.e() ? 0 : 1);
});
$p.bA = (function(elem) {
  return ((!this.e()) && $m_sr_BoxesRunTime$().p(this.x(), elem));
});
$p.m = (function() {
  return (this.e() ? $m_sc_Iterator$().W : new $c_sc_Iterator$$anon$20(this.x()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.g3 = 0;
  this.nI = 0;
  this.nH = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.nH = outer;
  this.g3 = 0;
  this.nI = outer.A();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.o = (function() {
  return (this.g3 < this.nI);
});
$p.l = (function() {
  var result = this.nH.B(this.g3);
  this.g3 = ((1 + this.g3) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  h1: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
function $ct_T2__O__O__($thiz, _1, _2) {
  $thiz.je = _1;
  $thiz.jf = _2;
  return $thiz;
}
/** @constructor */
function $c_T2() {
  this.je = null;
  this.jf = null;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.A = (function() {
  return 2;
});
$p.B = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.aS = (function() {
  return this.je;
});
$p.aJ = (function() {
  return this.jf;
});
$p.g = (function() {
  return (((("(" + this.aS()) + ",") + this.aJ()) + ")");
});
$p.C = (function() {
  return "Tuple2";
});
$p.U = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, (-116390334), true);
});
$p.i = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().p(this.aS(), x$1.aS()) && $m_sr_BoxesRunTime$().p(this.aJ(), x$1.aJ()))));
});
$p.oL = (function() {
  return (+this.aS());
});
$p.oM = (function() {
  return (+this.aJ());
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ba)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  ba: 1,
  cb: 1,
  j: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.g5 = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  h8: 1,
  h7: 1,
  a: 1,
  K: 1,
  a5: 1
}));
function $f_sc_IndexedSeqOps__map__F1__O($thiz, f) {
  return $thiz.bo().aq(new $c_sc_IndexedSeqView$Map($thiz, f));
}
function $f_sc_IndexedSeqOps__slice__I__I__O($thiz, from, until) {
  return $thiz.ex(new $c_sc_IndexedSeqView$Slice($thiz, from, until));
}
function $f_sc_IndexedSeqOps__sliding__I__I__sc_Iterator($thiz, size, step) {
  if ((!((size >= 1) && (step >= 1)))) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ("requirement failed: " + $m_sc_StringOps$().s5("size=%d and step=%d, but both must be positive", $m_sr_ScalaRunTime$().se(new $ac_O([size, step])))));
  }
  return new $c_sc_IndexedSeqSlidingIterator($thiz, size, step);
}
function $p_sc_IndexedSeqSlidingIterator__chklen__Z($thiz) {
  if (($thiz.cW !== $thiz.ji.n())) {
    throw new $c_ju_ConcurrentModificationException("collection size changed during iteration");
  }
  return true;
}
/** @constructor */
function $c_sc_IndexedSeqSlidingIterator(s, size, step) {
  this.ji = null;
  this.nK = 0;
  this.nL = 0;
  this.cW = 0;
  this.f8 = 0;
  this.ji = s;
  this.nK = size;
  this.nL = step;
  this.cW = s.n();
  this.f8 = 0;
}
$p = $c_sc_IndexedSeqSlidingIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqSlidingIterator;
/** @constructor */
function $h_sc_IndexedSeqSlidingIterator() {
}
$h_sc_IndexedSeqSlidingIterator.prototype = $p;
$p.o = (function() {
  return ($p_sc_IndexedSeqSlidingIterator__chklen__Z(this) && (this.f8 < this.cW));
});
$p.l = (function() {
  if (((!$p_sc_IndexedSeqSlidingIterator__chklen__Z(this)) || (!this.o()))) {
    return $m_sc_Iterator$().W.l();
  } else {
    var x = ((this.f8 + this.nK) | 0);
    var end = (((x < 0) || (x > this.cW)) ? this.cW : x);
    var slice = this.ji.c0(this.f8, end);
    if ((end >= this.cW)) {
      var $x_1 = this.cW;
    } else {
      var x$2 = ((this.f8 + this.nL) | 0);
      var $x_1 = (((x$2 < 0) || (x$2 > this.cW)) ? this.cW : x$2);
    }
    this.f8 = $x_1;
    return slice;
  }
});
var $d_sc_IndexedSeqSlidingIterator = new $TypeData().i($c_sc_IndexedSeqSlidingIterator, "scala.collection.IndexedSeqSlidingIterator", ({
  hb: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.bY() + "("), ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.e)));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e)));
}
/** @constructor */
function $c_sc_Iterator$$anon$16(outer) {
  this.hC = 0;
  this.hB = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.hB = outer;
  this.hC = 0;
}
$p = $c_sc_Iterator$$anon$16.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$16;
/** @constructor */
function $h_sc_Iterator$$anon$16() {
}
$h_sc_Iterator$$anon$16.prototype = $p;
$p.w = (function() {
  return this.hB.w();
});
$p.o = (function() {
  return this.hB.o();
});
$p.ia = (function() {
  var ret = $ct_T2__O__O__(new $c_T2(), this.hB.l(), this.hC);
  this.hC = ((1 + this.hC) | 0);
  return ret;
});
$p.l = (function() {
  return this.ia();
});
var $d_sc_Iterator$$anon$16 = new $TypeData().i($c_sc_Iterator$$anon$16, "scala.collection.Iterator$$anon$16", ({
  hh: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.o = (function() {
  return false;
});
$p.t0 = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator");
});
$p.w = (function() {
  return 0;
});
$p.l = (function() {
  this.t0();
});
$p.h5 = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  hi: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$2) {
  this.nP = null;
  this.g6 = false;
  this.nP = a$2;
  this.g6 = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.o = (function() {
  return (!this.g6);
});
$p.l = (function() {
  if (this.g6) {
    return $m_sc_Iterator$().W.l();
  } else {
    this.g6 = true;
    return this.nP;
  }
});
$p.h5 = (function(from, until) {
  return (((this.g6 || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().W : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  hj: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(f$8, outer) {
  this.nQ = null;
  this.nS = null;
  this.hD = false;
  this.nR = null;
  this.jl = null;
  this.nQ = f$8;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jl = outer;
  this.nS = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.hD = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.o = (function() {
  while (true) {
    if (this.hD) {
      return true;
    } else if (this.jl.o()) {
      var a = this.jl.l();
      if ((!this.nS.hT(this.nQ.c(a)))) {
        continue;
      }
      this.nR = a;
      this.hD = true;
      return true;
    } else {
      return false;
    }
  }
});
$p.l = (function() {
  if (this.o()) {
    this.hD = false;
    return this.nR;
  } else {
    return $m_sc_Iterator$().W.l();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  hl: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(f$9, outer) {
  this.nT = null;
  this.hE = null;
  this.nT = f$9;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.hE = outer;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.w = (function() {
  return this.hE.w();
});
$p.o = (function() {
  return this.hE.o();
});
$p.l = (function() {
  return this.nT.c(this.hE.l());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  hm: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bE instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bE;
      $thiz.bE = c.bE;
      $thiz.dp = c.dp;
      if ((c.c4 !== null)) {
        if (($thiz.c3 === null)) {
          $thiz.c3 = c.c3;
        }
        var x$proxy10 = c.c3;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().ba();
        }
        x$proxy10.g7 = $thiz.c4;
        $thiz.c4 = c.c4;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.c4 === null)) {
      $thiz.bE = null;
      $thiz.c3 = null;
      return false;
    } else {
      $thiz.bE = $thiz.c4.so();
      if (($thiz.c3 === $thiz.c4)) {
        var x$proxy12 = $thiz.c3;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().ba();
        }
        $thiz.c3 = x$proxy12.g7;
      }
      $thiz.c4 = $thiz.c4.g7;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.dp) {
        return true;
      } else {
        if ((!(($thiz.bE !== null) && $thiz.bE.o()))) {
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
  this.bE = null;
  this.c4 = null;
  this.c3 = null;
  this.dp = false;
  this.bE = from;
  this.c4 = null;
  this.c3 = null;
  this.dp = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.o = (function() {
  if (this.dp) {
    return true;
  } else if ((this.bE !== null)) {
    if (this.bE.o()) {
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
  if (this.o()) {
    this.dp = false;
    var x$proxy13 = this.bE;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().ba();
    }
    return x$proxy13.l();
  } else {
    return $m_sc_Iterator$().W.l();
  }
});
$p.k3 = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.c4 === null)) {
    this.c4 = c;
    this.c3 = c;
  } else {
    var x$proxy14 = this.c3;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().ba();
    }
    x$proxy14.g7 = c;
    this.c3 = c;
  }
  if ((this.bE === null)) {
    this.bE = $m_sc_Iterator$().W;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  ch: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.cY > 0)) {
    if ($thiz.dq.o()) {
      $thiz.dq.l();
      $thiz.cY = (($thiz.cY - 1) | 0);
    } else {
      $thiz.cY = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.bU < 0)) {
    return (-1);
  } else {
    var that = (($thiz.bU - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.dq = null;
  this.bU = 0;
  this.cY = 0;
  this.dq = underlying;
  this.bU = limit;
  this.cY = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.w = (function() {
  var size = this.dq.w();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.cY) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.bU < 0)) {
      return dropSize;
    } else {
      var x = this.bU;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.o = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.bU !== 0) && this.dq.o());
});
$p.l = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.bU > 0)) {
    this.bU = ((this.bU - 1) | 0);
    return this.dq.l();
  } else {
    return ((this.bU < 0) ? this.dq.l() : $m_sc_Iterator$().W.l());
  }
});
$p.h5 = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.bU < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.cY + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().W;
  } else if ((sum < 0)) {
    this.cY = 2147483647;
    this.bU = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.dq, ((sum - 2147483647) | 0), rest))));
  } else {
    this.cY = sum;
    this.bU = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  ho: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.e())) {
    len = ((1 + len) | 0);
    these = these.v();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len, 0, $thiz));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.b9(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.pa(n);
  if (skipped.e()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.z();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return (xs$tailLocal1.e() ? 0 : 1);
    } else if (xs$tailLocal1.e()) {
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
      if ((((!a$tailLocal1.e()) && (!b$tailLocal1.e())) && $m_sr_BoxesRunTime$().p(a$tailLocal1.z(), b$tailLocal1.z()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.v();
        var b$tailLocal1$tmp1 = b$tailLocal1.v();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.e() && b$tailLocal1.e());
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.g8 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.g8 = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.o = (function() {
  return (!this.g8.e());
});
$p.l = (function() {
  var r = this.g8.z();
  this.g8 = this.g8.v();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  hu: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.bV = 0;
  $thiz.g9 = 0;
  $thiz.bG = (-1);
  return $thiz;
}
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.d0 === null)) {
    $thiz.d0 = new $ac_I(($m_sci_Node$().gf << 1));
    $thiz.ga = new ($d_sci_Node.r().C)($m_sci_Node$().gf);
  }
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.kq()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.i4()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.en = node;
  $thiz.bV = 0;
  $thiz.g9 = node.kG();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bG = ((1 + $thiz.bG) | 0);
  var cursorIndex = ($thiz.bG << 1);
  var lengthIndex = ((1 + ($thiz.bG << 1)) | 0);
  $thiz.ga.a[$thiz.bG] = node;
  $thiz.d0.a[cursorIndex] = 0;
  $thiz.d0.a[lengthIndex] = node.kC();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bG = (($thiz.bG - 1) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bG >= 0)) {
    var cursorIndex = ($thiz.bG << 1);
    var lengthIndex = ((1 + ($thiz.bG << 1)) | 0);
    var nodeCursor = $thiz.d0.a[cursorIndex];
    if ((nodeCursor < $thiz.d0.a[lengthIndex])) {
      var \u03b41$ = $thiz.d0;
      \u03b41$.a[cursorIndex] = ((1 + \u03b41$.a[cursorIndex]) | 0);
      var nextNode = $thiz.ga.a[$thiz.bG].km(nodeCursor);
      if (nextNode.kq()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.i4()) {
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
  this.bV = 0;
  this.g9 = 0;
  this.en = null;
  this.bG = 0;
  this.d0 = null;
  this.ga = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.o = (function() {
  return ((this.bV < this.g9) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.dy = (-1);
  $thiz.bW = (-1);
  $thiz.gb = new $ac_I(((1 + $m_sci_Node$().gf) | 0));
  $thiz.gc = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().gf) | 0));
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
  $thiz.dy = ((node.kG() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.bW = ((1 + $thiz.bW) | 0);
  $thiz.gc.a[$thiz.bW] = node;
  $thiz.gb.a[$thiz.bW] = ((node.kC() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.bW = (($thiz.bW - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bW >= 0)) {
    var nodeCursor = $thiz.gb.a[$thiz.bW];
    $thiz.gb.a[$thiz.bW] = ((nodeCursor - 1) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.gc.a[$thiz.bW].km(nodeCursor));
    } else {
      var currNode = $thiz.gc.a[$thiz.bW];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.i4()) {
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
  this.bW = 0;
  this.gb = null;
  this.gc = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.o = (function() {
  return ((this.dy >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.f9 !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.s(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.s(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.gK(bitpos);
  var idx = (dataIx << 1);
  var src = bm.ar;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.s(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.s(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bF, dataIx, originalHash);
  bm.a6 = (bm.a6 | bitpos);
  bm.ar = dst;
  bm.bF = dstHashes;
  bm.aX = ((1 + bm.aX) | 0);
  bm.bw = ((bm.bw + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.f9 = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.cE = $thiz.cE.p6();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.f9 = null;
  this.cE = null;
  this.cE = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().nD, $m_s_Array$EmptyArrays$().jd, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.bb = (function(size) {
});
$p.fC = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().ez(keyHash, shift);
    var bitpos = $m_sci_Node$().dZ(mask);
    if (((mapNode.a6 & bitpos) !== 0)) {
      var index = $m_sci_Node$().cM(mapNode.a6, mask, bitpos);
      var key0 = mapNode.e2(index);
      var key0UnimprovedHash = mapNode.gM(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().p(key0, key))) {
        mapNode.ar.a[((1 + (index << 1)) | 0)] = value;
        return (void 0);
      } else {
        var value0 = mapNode.dh(index);
        var key0Hash = $m_sc_Hashing$().cv(key0UnimprovedHash);
        var subNodeNew = mapNode.kB(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.sU(bitpos, key0Hash, subNodeNew);
        return (void 0);
      }
    } else if (((mapNode.ah & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cM(mapNode.ah, mask, bitpos);
      var subNode = mapNode.df(index$2);
      var beforeSize = subNode.aV();
      var beforeHash = subNode.e0();
      this.fC(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.aX = ((mapNode.aX + ((subNode.aV() - beforeSize) | 0)) | 0);
      mapNode.bw = ((mapNode.bw + ((subNode.e0() - beforeHash) | 0)) | 0);
      return (void 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
      return (void 0);
    }
  }
  if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.fs(key);
    if ((index$3 < 0)) {
      mapNode.ai = mapNode.ai.dW($ct_T2__O__O__(new $c_T2(), key, value));
      return (void 0);
    } else {
      mapNode.ai = mapNode.ai.e7(index$3, $ct_T2__O__O__(new $c_T2(), key, value));
      return (void 0);
    }
  }
  throw new $c_s_MatchError(mapNode);
});
$p.kK = (function() {
  if ((this.cE.aX === 0)) {
    return $m_sci_HashMap$().jr;
  } else if ((this.f9 !== null)) {
    return this.f9;
  } else {
    this.f9 = new $c_sci_HashMap(this.cE);
    return this.f9;
  }
});
$p.oT = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().N(elem.aS());
  var im = $m_sc_Hashing$().cv(h);
  this.fC(this.cE, elem.aS(), elem.aJ(), h, im, 0);
  return this;
});
$p.eu = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().N(key);
  this.fC(this.cE, key, value, originalHash, $m_sc_Hashing$().cv(originalHash), 0);
  return this;
});
$p.jR = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(xs, this);
  } else if (false) {
    var iter = xs.uj();
    while (iter.o()) {
      var next = iter.l();
      var originalHash = xs.tZ(next.pu());
      var hash = $m_sc_Hashing$().cv(originalHash);
      this.fC(this.cE, next.pD(), next.qc(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.rP();
    while (iter$2.o()) {
      var next$2 = iter$2.l();
      var originalHash$2 = xs.tZ(next$2.pu());
      var hash$2 = $m_sc_Hashing$().cv(originalHash$2);
      this.fC(this.cE, next$2.pD(), next$2.qc(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.ew(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2, value$2) => this.eu(key$2, value$2))));
  } else {
    var it = xs.m();
    while (it.o()) {
      this.oT(it.l());
    }
  }
  return this;
});
$p.b7 = (function() {
  return this.kK();
});
$p.b6 = (function(elem) {
  return this.oT(elem);
});
$p.b5 = (function(elems) {
  return this.jR(elems);
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  hG: 1,
  L: 1,
  N: 1,
  S: 1,
  al: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.ej = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.pm = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.i1.call(this, it));
});
$p.i1 = (function(it) {
  return this.pm(it);
});
$p.aq = (function(source) {
  return this.pm(source);
});
var $d_sci_IndexedSeq$ = new $TypeData().i($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  hJ: 1,
  bd: 1,
  a: 1,
  K: 1,
  a5: 1
}));
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$();
  }
  return $n_sci_IndexedSeq$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.fa = null;
  this.o3 = null;
  this.ri();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.bb = (function(size) {
});
$p.ri = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.o3 = ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.ka()))));
  this.fa = deferred;
});
$p.tr = (function() {
  this.fa.ks(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().X)));
  return this.o3;
});
$p.qX = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.fa.ks(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $m_sci_LazyList$();
    return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.ka())))));
  })));
  this.fa = deferred;
  return this;
});
$p.qK = (function(xs) {
  if ((xs.w() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.fa.ks(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().pU(xs.m(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.ka()))))));
    this.fa = deferred;
  }
  return this;
});
$p.b7 = (function() {
  return this.tr();
});
$p.b6 = (function(elem) {
  return this.qX(elem);
});
$p.b5 = (function(elems) {
  return this.qK(elems);
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  hO: 1,
  L: 1,
  N: 1,
  S: 1,
  al: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.fb = null;
  this.fb = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.o = (function() {
  return (!($p_sci_LazyList__evaluated__sci_LazyList(this.fb) === $m_sci_LazyList$().X));
});
$p.l = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this.fb) === $m_sci_LazyList$().X)) {
    return $m_sc_Iterator$().W.l();
  } else {
    var res = this.fb.z();
    this.fb = this.fb.bc();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  hQ: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
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
$p.de = (function(elems) {
  return $m_sci_Nil$().kH(elems);
});
$p.aL = (function() {
  return new $c_scm_ListBuffer();
});
$p.aq = (function(source) {
  return $m_sci_Nil$().kH(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  hT: 1,
  a: 1,
  K: 1,
  a5: 1,
  ay: 1
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
  $thiz.fc = outer;
  $thiz.dC = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dC = 0;
  this.fc = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.o = (function() {
  return (this.dC < 2);
});
$p.l = (function() {
  matchResult5$1: {
    var result;
    var x23 = this.dC;
    if ((x23 === 0)) {
      var result = $ct_T2__O__O__(new $c_T2(), this.fc.ck, this.fc.dA);
      break matchResult5$1;
    }
    if ((x23 === 1)) {
      var result = $ct_T2__O__O__(new $c_T2(), this.fc.cl, this.fc.dB);
      break matchResult5$1;
    }
    var result = $m_sc_Iterator$().W.l();
  }
  this.dC = ((1 + this.dC) | 0);
  return result;
});
$p.e1 = (function(n) {
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
$p.o = (function() {
  return (this.dE < 3);
});
$p.l = (function() {
  var result;
  switch (this.dE) {
    case 0: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dD.c5, this.dD.d1);
      break;
    }
    case 1: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dD.c6, this.dD.d2);
      break;
    }
    case 2: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dD.c7, this.dD.d3);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().W.l();
    }
  }
  this.dE = ((1 + this.dE) | 0);
  return result;
});
$p.e1 = (function(n) {
  this.dE = ((this.dE + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.cH = outer;
  $thiz.dF = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dF = 0;
  this.cH = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.o = (function() {
  return (this.dF < 4);
});
$p.l = (function() {
  var result;
  switch (this.dF) {
    case 0: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cH.bH, this.cH.cm);
      break;
    }
    case 1: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cH.bI, this.cH.cn);
      break;
    }
    case 2: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cH.bJ, this.cH.co);
      break;
    }
    case 3: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cH.bK, this.cH.cp);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().W.l();
    }
  }
  this.dF = ((1 + this.dF) | 0);
  return result;
});
$p.e1 = (function(n) {
  this.dF = ((this.dF + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.d4 = null;
  this.gd = false;
  this.ep = null;
  this.d4 = $m_sci_Map$EmptyMap$();
  this.gd = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.bb = (function(size) {
});
$p.pR = (function() {
  return (this.gd ? this.ep.kK() : this.d4);
});
$p.qV = (function(key, value) {
  if (this.gd) {
    this.ep.eu(key, value);
  } else if ((this.d4.aV() < 4)) {
    this.d4 = this.d4.e8(key, value);
  } else if (this.d4.bA(key)) {
    this.d4 = this.d4.e8(key, value);
  } else {
    this.gd = true;
    if ((this.ep === null)) {
      this.ep = new $c_sci_HashMapBuilder();
    }
    this.d4.rg(this.ep);
    this.ep.eu(key, value);
  }
  return this;
});
$p.oO = (function(xs) {
  return (this.gd ? (this.ep.jR(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b7 = (function() {
  return this.pR();
});
$p.b6 = (function(elem) {
  return this.qV(elem.aS(), elem.aJ());
});
$p.b5 = (function(elems) {
  return this.oO(elems);
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  i3: 1,
  L: 1,
  N: 1,
  S: 1,
  al: 1
}));
/** @constructor */
function $c_sci_Vector$() {
  this.o7 = 0;
  this.o8 = null;
  $n_sci_Vector$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().pz($m_jl_System$SystemProperties$().ko("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 250;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.o7 = $x_1;
  this.o8 = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.de = (function(elems) {
  return this.kj(elems);
});
$p.kj = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.w();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((((knownSize - 1) | 0) >>> 0) <= 31)) {
      matchResult3: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.ag().aU();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.cD;
            break matchResult3;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.bB(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchResult3;
        }
        var a1$2 = new $ac_O(knownSize);
        it.m().bB(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().oP(it).e6();
    }
  }
});
$p.aq = (function(source) {
  return this.kj(source);
});
$p.aL = (function() {
  return new $c_sci_VectorBuilder();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  ih: 1,
  a: 1,
  K: 1,
  a5: 1,
  ay: 1
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
  if (($thiz.J >= 6)) {
    a = $thiz.aI;
    var i = (($thiz.G >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.s(i, dest, 0, length);
    }
    var num = $thiz.G;
    var t = (((num >> 24) >>> 7) | 0);
    var newOffset = (((33554431 & ((num + t) | 0)) - t) | 0);
    $thiz.D = (($thiz.D - (($thiz.G - newOffset) | 0)) | 0);
    $thiz.G = newOffset;
    if (((($thiz.D >>> 25) | 0) === 0)) {
      $thiz.J = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.J >= 5)) {
    if ((a === null)) {
      a = $thiz.a3;
    }
    var i$2 = (31 & (($thiz.G >>> 20) | 0));
    if (($thiz.J === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.s(i$2, dest$1, 0, length$1);
      }
      $thiz.a3 = a;
      var num$1 = $thiz.G;
      var t$1 = (((num$1 >> 19) >>> 12) | 0);
      var newOffset$1 = (((1048575 & ((num$1 + t$1) | 0)) - t$1) | 0);
      $thiz.D = (($thiz.D - (($thiz.G - newOffset$1) | 0)) | 0);
      $thiz.G = newOffset$1;
      if (((($thiz.D >>> 20) | 0) === 0)) {
        $thiz.J = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().L(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.J >= 4)) {
    if ((a === null)) {
      a = $thiz.O;
    }
    var i$3 = (31 & (($thiz.G >>> 15) | 0));
    if (($thiz.J === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.s(i$3, dest$2, 0, length$2);
      }
      $thiz.O = a;
      var num$2 = $thiz.G;
      var t$2 = (((num$2 >> 14) >>> 17) | 0);
      var newOffset$2 = (((32767 & ((num$2 + t$2) | 0)) - t$2) | 0);
      $thiz.D = (($thiz.D - (($thiz.G - newOffset$2) | 0)) | 0);
      $thiz.G = newOffset$2;
      if (((($thiz.D >>> 15) | 0) === 0)) {
        $thiz.J = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().L(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.J >= 3)) {
    if ((a === null)) {
      a = $thiz.H;
    }
    var i$4 = (31 & (($thiz.G >>> 10) | 0));
    if (($thiz.J === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.s(i$4, dest$3, 0, length$3);
      }
      $thiz.H = a;
      var num$3 = $thiz.G;
      var t$3 = (((num$3 >> 9) >>> 22) | 0);
      var newOffset$3 = (((1023 & ((num$3 + t$3) | 0)) - t$3) | 0);
      $thiz.D = (($thiz.D - (($thiz.G - newOffset$3) | 0)) | 0);
      $thiz.G = newOffset$3;
      if (((($thiz.D >>> 10) | 0) === 0)) {
        $thiz.J = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().L(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.J >= 2)) {
    if ((a === null)) {
      a = $thiz.F;
    }
    var i$5 = (31 & (($thiz.G >>> 5) | 0));
    if (($thiz.J === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.s(i$5, dest$4, 0, length$4);
      }
      $thiz.F = a;
      var num$4 = $thiz.G;
      var t$4 = (((num$4 >> 4) >>> 27) | 0);
      var newOffset$4 = (((31 & ((num$4 + t$4) | 0)) - t$4) | 0);
      $thiz.D = (($thiz.D - (($thiz.G - newOffset$4) | 0)) | 0);
      $thiz.G = newOffset$4;
      if (((($thiz.D >>> 5) | 0) === 0)) {
        $thiz.J = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().L(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.J >= 1)) {
    if ((a === null)) {
      a = $thiz.R;
    }
    var i$6 = (31 & $thiz.G);
    if (($thiz.J === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.s(i$6, dest$5, 0, length$5);
      }
      $thiz.R = a;
      $thiz.I = (($thiz.I - $thiz.G) | 0);
      $thiz.G = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().L(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.hI = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.I === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.I) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.R;
    var destPos = $thiz.I;
    data.s(0, dest, destPos, copy1);
    $thiz.I = (($thiz.I + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.R;
      data.s(copy1, dest$1, 0, copy2);
      $thiz.I = (($thiz.I + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.I === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.D) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.D >>> 5) | 0));
      var dest = $thiz.F;
      slice.s(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.F;
        slice.s(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      var num = $thiz.D;
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
      var a$1 = (31 & ((((32768 - $thiz.D) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.D >>> 10) | 0));
      var dest$2 = $thiz.H;
      slice.s(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.H;
        slice.s(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      var num$1 = $thiz.D;
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
      var a$2 = (31 & ((((1048576 - $thiz.D) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.D >>> 15) | 0));
      var dest$4 = $thiz.O;
      slice.s(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.O;
        slice.s(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      var num$2 = $thiz.D;
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
      var a$3 = (31 & ((((33554432 - $thiz.D) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.D >>> 20) | 0));
      var dest$6 = $thiz.a3;
      slice.s(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.a3;
        slice.s(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      var num$3 = $thiz.D;
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
      var destPos$5 = (($thiz.D >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.aI;
      slice.s(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.cR();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.cQ(sliceIdx);
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
      if ((($thiz.I === 32) || ($thiz.I === 0))) {
        $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x37);
        break matchResult26;
      }
      $m_sci_VectorStatics$().kf(((x37 - 2) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((data$3) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$3);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.D) | 0);
  var xor = (idx ^ $thiz.D);
  $thiz.D = idx;
  $thiz.I = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.D + n) | 0);
    var xor = (idx ^ $thiz.D);
    $thiz.D = idx;
    $thiz.I = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.R) + ", a2=") + $thiz.F) + ", a3=") + $thiz.H) + ", a4=") + $thiz.O) + ", a5=") + $thiz.a3) + ", a6=") + $thiz.aI) + ", depth=") + $thiz.J));
  } else if ((xor < 1024)) {
    if (($thiz.J <= 1)) {
      $thiz.F = new ($d_O.r().r().C)(32);
      $thiz.F.a[0] = $thiz.R;
      $thiz.J = 2;
    }
    $thiz.R = new $ac_O(32);
    $thiz.F.a[(31 & ((idx >>> 5) | 0))] = $thiz.R;
  } else if ((xor < 32768)) {
    if (($thiz.J <= 2)) {
      $thiz.H = new ($d_O.r().r().r().C)(32);
      $thiz.H.a[0] = $thiz.F;
      $thiz.J = 3;
    }
    $thiz.R = new $ac_O(32);
    $thiz.F = new ($d_O.r().r().C)(32);
    $thiz.F.a[(31 & ((idx >>> 5) | 0))] = $thiz.R;
    $thiz.H.a[(31 & ((idx >>> 10) | 0))] = $thiz.F;
  } else if ((xor < 1048576)) {
    if (($thiz.J <= 3)) {
      $thiz.O = new ($d_O.r().r().r().r().C)(32);
      $thiz.O.a[0] = $thiz.H;
      $thiz.J = 4;
    }
    $thiz.R = new $ac_O(32);
    $thiz.F = new ($d_O.r().r().C)(32);
    $thiz.H = new ($d_O.r().r().r().C)(32);
    $thiz.F.a[(31 & ((idx >>> 5) | 0))] = $thiz.R;
    $thiz.H.a[(31 & ((idx >>> 10) | 0))] = $thiz.F;
    $thiz.O.a[(31 & ((idx >>> 15) | 0))] = $thiz.H;
  } else if ((xor < 33554432)) {
    if (($thiz.J <= 4)) {
      $thiz.a3 = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.a3.a[0] = $thiz.O;
      $thiz.J = 5;
    }
    $thiz.R = new $ac_O(32);
    $thiz.F = new ($d_O.r().r().C)(32);
    $thiz.H = new ($d_O.r().r().r().C)(32);
    $thiz.O = new ($d_O.r().r().r().r().C)(32);
    $thiz.F.a[(31 & ((idx >>> 5) | 0))] = $thiz.R;
    $thiz.H.a[(31 & ((idx >>> 10) | 0))] = $thiz.F;
    $thiz.O.a[(31 & ((idx >>> 15) | 0))] = $thiz.H;
    $thiz.a3.a[(31 & ((idx >>> 20) | 0))] = $thiz.O;
  } else {
    if (($thiz.J <= 5)) {
      $thiz.aI = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aI.a[0] = $thiz.a3;
      $thiz.J = 6;
    }
    $thiz.R = new $ac_O(32);
    $thiz.F = new ($d_O.r().r().C)(32);
    $thiz.H = new ($d_O.r().r().r().C)(32);
    $thiz.O = new ($d_O.r().r().r().r().C)(32);
    $thiz.a3 = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.F.a[(31 & ((idx >>> 5) | 0))] = $thiz.R;
    $thiz.H.a[(31 & ((idx >>> 10) | 0))] = $thiz.F;
    $thiz.O.a[(31 & ((idx >>> 15) | 0))] = $thiz.H;
    $thiz.a3.a[(31 & ((idx >>> 20) | 0))] = $thiz.O;
    $thiz.aI.a[((idx >>> 25) | 0)] = $thiz.a3;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aI = null;
  this.a3 = null;
  this.O = null;
  this.H = null;
  this.F = null;
  this.R = null;
  this.I = 0;
  this.D = 0;
  this.G = 0;
  this.hI = false;
  this.J = 0;
  this.R = new $ac_O(32);
  this.I = 0;
  this.D = 0;
  this.G = 0;
  this.hI = false;
  this.J = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.bb = (function(size) {
});
$p.ss = (function(v) {
  var x28 = v.cR();
  switch (x28) {
    case 0: {
      break;
    }
    case 1: {
      this.J = 1;
      var i = v.d.a.length;
      this.I = (31 & i);
      this.D = ((i - this.I) | 0);
      var a = v.d;
      this.R = ((a.a.length === 32) ? a : $m_ju_Arrays$().L(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bg;
      var a$1 = v.h;
      this.R = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().L(a$1, 0, 32));
      this.J = 2;
      this.G = ((32 - v.bM) | 0);
      var i$1 = ((v.j + this.G) | 0);
      this.I = (31 & i$1);
      this.D = ((i$1 - this.I) | 0);
      this.F = new ($d_O.r().r().C)(32);
      this.F.a[0] = v.d;
      var dest = this.F;
      var length = d2.a.length;
      d2.s(0, dest, 1, length);
      this.F.a[((1 + d2.a.length) | 0)] = this.R;
      break;
    }
    case 5: {
      var d3 = v.aM;
      var s2 = v.aN;
      var a$2 = v.h;
      this.R = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().L(a$2, 0, 32));
      this.J = 3;
      this.G = ((1024 - v.bi) | 0);
      var i$2 = ((v.j + this.G) | 0);
      this.I = (31 & i$2);
      this.D = ((i$2 - this.I) | 0);
      this.H = new ($d_O.r().r().r().C)(32);
      this.H.a[0] = $m_sci_VectorStatics$().cI(v.d, v.bs);
      var dest$1 = this.H;
      var length$1 = d3.a.length;
      d3.s(0, dest$1, 1, length$1);
      this.F = $m_ju_Arrays$().S(s2, 32);
      this.H.a[((1 + d3.a.length) | 0)] = this.F;
      this.F.a[s2.a.length] = this.R;
      break;
    }
    case 7: {
      var d4 = v.as;
      var s3 = v.au;
      var s2$2 = v.at;
      var a$3 = v.h;
      this.R = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().L(a$3, 0, 32));
      this.J = 4;
      this.G = ((32768 - v.aQ) | 0);
      var i$3 = ((v.j + this.G) | 0);
      this.I = (31 & i$3);
      this.D = ((i$3 - this.I) | 0);
      this.O = new ($d_O.r().r().r().r().C)(32);
      this.O.a[0] = $m_sci_VectorStatics$().cI($m_sci_VectorStatics$().cI(v.d, v.b0), v.b1);
      var dest$2 = this.O;
      var length$2 = d4.a.length;
      d4.s(0, dest$2, 1, length$2);
      this.H = $m_ju_Arrays$().S(s3, 32);
      this.F = $m_ju_Arrays$().S(s2$2, 32);
      this.O.a[((1 + d4.a.length) | 0)] = this.H;
      this.H.a[s3.a.length] = this.F;
      this.F.a[s2$2.a.length] = this.R;
      break;
    }
    case 9: {
      var d5 = v.a8;
      var s4 = v.ab;
      var s3$2 = v.aa;
      var s2$3 = v.a9;
      var a$4 = v.h;
      this.R = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().L(a$4, 0, 32));
      this.J = 5;
      this.G = ((1048576 - v.ay) | 0);
      var i$4 = ((v.j + this.G) | 0);
      this.I = (31 & i$4);
      this.D = ((i$4 - this.I) | 0);
      this.a3 = new ($d_O.r().r().r().r().r().C)(32);
      this.a3.a[0] = $m_sci_VectorStatics$().cI($m_sci_VectorStatics$().cI($m_sci_VectorStatics$().cI(v.d, v.aD), v.aE), v.aF);
      var dest$3 = this.a3;
      var length$3 = d5.a.length;
      d5.s(0, dest$3, 1, length$3);
      this.O = $m_ju_Arrays$().S(s4, 32);
      this.H = $m_ju_Arrays$().S(s3$2, 32);
      this.F = $m_ju_Arrays$().S(s2$3, 32);
      this.a3.a[((1 + d5.a.length) | 0)] = this.O;
      this.O.a[s4.a.length] = this.H;
      this.H.a[s3$2.a.length] = this.F;
      this.F.a[s2$3.a.length] = this.R;
      break;
    }
    case 11: {
      var d6 = v.Y;
      var s5 = v.a2;
      var s4$2 = v.a1;
      var s3$3 = v.a0;
      var s2$4 = v.Z;
      var a$5 = v.h;
      this.R = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().L(a$5, 0, 32));
      this.J = 6;
      this.G = ((33554432 - v.aj) | 0);
      var i$5 = ((v.j + this.G) | 0);
      this.I = (31 & i$5);
      this.D = ((i$5 - this.I) | 0);
      this.aI = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aI.a[0] = $m_sci_VectorStatics$().cI($m_sci_VectorStatics$().cI($m_sci_VectorStatics$().cI($m_sci_VectorStatics$().cI(v.d, v.ak), v.al), v.am), v.an);
      var dest$4 = this.aI;
      var length$4 = d6.a.length;
      d6.s(0, dest$4, 1, length$4);
      this.a3 = $m_ju_Arrays$().S(s5, 32);
      this.O = $m_ju_Arrays$().S(s4$2, 32);
      this.H = $m_ju_Arrays$().S(s3$3, 32);
      this.F = $m_ju_Arrays$().S(s2$4, 32);
      this.aI.a[((1 + d6.a.length) | 0)] = this.a3;
      this.a3.a[s5.a.length] = this.O;
      this.O.a[s4$2.a.length] = this.H;
      this.H.a[s3$3.a.length] = this.F;
      this.F.a[s2$4.a.length] = this.R;
      break;
    }
    default: {
      throw new $c_s_MatchError(x28);
    }
  }
  if (((this.I === 0) && (this.D > 0))) {
    this.I = 32;
    this.D = ((this.D - 32) | 0);
  }
  return this;
});
$p.qY = (function(elem) {
  if ((this.I === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.R.a[this.I] = elem;
  this.I = ((1 + this.I) | 0);
  return this;
});
$p.oP = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.I === 0) && (this.D === 0)) && (!this.hI)) ? this.ss(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.e6 = (function() {
  if (this.hI) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.I + this.D) | 0);
  var realLen = ((len - this.G) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.R;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().S(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & ((len - 1) | 0));
    var i2 = ((((len - 1) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().L(this.F, 1, i2);
    var prefix1 = this.F.a[0];
    var a$1 = this.F.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().S(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.G) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & ((len - 1) | 0));
    var i2$2 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3 = ((((len - 1) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().L(this.H, 1, i3);
    var a$2 = this.H.a[0];
    var prefix2 = $m_ju_Arrays$().L(a$2, 1, a$2.a.length);
    var prefix1$2 = this.H.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().S(this.H.a[i3], i2$2);
    var a$3 = this.H.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().S(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & ((len - 1) | 0));
    var i2$3 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$2 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4 = ((((len - 1) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().L(this.O, 1, i4);
    var a$4 = this.O.a[0];
    var prefix3 = $m_ju_Arrays$().L(a$4, 1, a$4.a.length);
    var a$5 = this.O.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().L(a$5, 1, a$5.a.length);
    var prefix1$3 = this.O.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().S(this.O.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().S(this.O.a[i4].a[i3$2], i2$3);
    var a$6 = this.O.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().S(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & ((len - 1) | 0));
    var i2$4 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$3 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4$2 = (31 & ((((len - 1) | 0) >>> 15) | 0));
    var i5 = ((((len - 1) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().L(this.a3, 1, i5);
    var a$7 = this.a3.a[0];
    var prefix4 = $m_ju_Arrays$().L(a$7, 1, a$7.a.length);
    var a$8 = this.a3.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().L(a$8, 1, a$8.a.length);
    var a$9 = this.a3.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().L(a$9, 1, a$9.a.length);
    var prefix1$4 = this.a3.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().S(this.a3.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().S(this.a3.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().S(this.a3.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.a3.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().S(a$10, len$4));
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
    var data$5 = $m_ju_Arrays$().L(this.aI, 1, i6);
    var a$11 = this.aI.a[0];
    var prefix5 = $m_ju_Arrays$().L(a$11, 1, a$11.a.length);
    var a$12 = this.aI.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().L(a$12, 1, a$12.a.length);
    var a$13 = this.aI.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().L(a$13, 1, a$13.a.length);
    var a$14 = this.aI.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().L(a$14, 1, a$14.a.length);
    var prefix1$5 = this.aI.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().S(this.aI.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().S(this.aI.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().S(this.aI.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().S(this.aI.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.aI.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().S(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.g = (function() {
  return (((((((("VectorBuilder(len1=" + this.I) + ", lenRest=") + this.D) + ", offset=") + this.G) + ", depth=") + this.J) + ")");
});
$p.b6 = (function(elem) {
  return this.qY(elem);
});
$p.b5 = (function(elems) {
  return this.oP(elems);
});
$p.b7 = (function() {
  return this.e6();
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  iq: 1,
  L: 1,
  N: 1,
  S: 1,
  al: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.oa = null;
  $n_scm_ArrayBuffer$ = this;
  this.oa = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.de = (function(elems) {
  return this.po(elems);
});
$p.po = (function(coll) {
  var k = coll.w();
  if ((k >= 0)) {
    var array = this.pV(this.oa, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bB(array, 0, 2147483647) : coll.m().bB(array, 0, 2147483647));
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).oQ(coll);
  }
});
$p.aL = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.tq = (function(arrayLen, targetLen) {
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
$p.pV = (function(array, curSize, targetSize) {
  var newLen = this.tq(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.s(0, res, 0, curSize);
    return res;
  }
});
$p.aq = (function(source) {
  return this.po(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  iw: 1,
  a: 1,
  K: 1,
  a5: 1,
  ay: 1
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
$p.bb = (function(size) {
  this.dN.bb(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  ix: 1,
  bl: 1,
  L: 1,
  N: 1,
  S: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.ej = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  iD: 1,
  bd: 1,
  a: 1,
  K: 1,
  a5: 1
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
$p.bb = (function(size) {
  this.dN.bb(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  iN: 1,
  bl: 1,
  L: 1,
  N: 1,
  S: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.gh = outer;
  $thiz.dP = 0;
  $thiz.d9 = null;
  $thiz.gi = outer.b2.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.dP = 0;
  this.d9 = null;
  this.gi = 0;
  this.gh = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.o = (function() {
  if ((this.d9 !== null)) {
    return true;
  } else {
    while ((this.dP < this.gi)) {
      var n = this.gh.b2.a[this.dP];
      this.dP = ((1 + this.dP) | 0);
      if ((n !== null)) {
        this.d9 = n;
        return true;
      }
    }
    return false;
  }
});
$p.l = (function() {
  if ((!this.o())) {
    return $m_sc_Iterator$().W.l();
  } else {
    var x$proxy10 = this.d9;
    if ((x$proxy10 === null)) {
      $m_sr_Scala3RunTime$().ba();
    }
    var r = this.kc(x$proxy10);
    var x$proxy11 = this.d9;
    if ((x$proxy11 === null)) {
      $m_sr_Scala3RunTime$().ba();
    }
    this.d9 = x$proxy11.b3;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.gj = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.gj = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.b5 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.bb = (function(size) {
});
$p.b7 = (function() {
  return this.gj;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.ej = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  iQ: 1,
  bd: 1,
  a: 1,
  K: 1,
  a5: 1
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
$p.de = (function(elems) {
  return new $c_scm_ListBuffer().id(elems);
});
$p.aL = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.aq = (function(source) {
  return new $c_scm_ListBuffer().id(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  iT: 1,
  a: 1,
  K: 1,
  a5: 1,
  ay: 1
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
  this.jJ = null;
  this.om = null;
  this.ol = 0;
  this.jJ = underlying;
  this.om = mutationCount;
  this.ol = (mutationCount.M() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.o = (function() {
  $m_scm_MutationTracker$().p2(this.ol, (this.om.M() | 0), "mutation occurred during iteration");
  return this.jJ.o();
});
$p.l = (function() {
  return this.jJ.l();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  iV: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
/** @constructor */
function $c_s_concurrent_ExecutionContext$parasitic$() {
  this.oq = null;
  $n_s_concurrent_ExecutionContext$parasitic$ = this;
  this.oq = new $c_jl_ThreadLocal();
}
$p = $c_s_concurrent_ExecutionContext$parasitic$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$parasitic$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$parasitic$() {
}
$h_s_concurrent_ExecutionContext$parasitic$.prototype = $p;
$p.kb = (function(runnable) {
  $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V(this, runnable);
});
$p.kJ = (function(t) {
  $m_s_concurrent_ExecutionContext$().fj.c(t);
});
var $d_s_concurrent_ExecutionContext$parasitic$ = new $TypeData().i($c_s_concurrent_ExecutionContext$parasitic$, "scala.concurrent.ExecutionContext$parasitic$", ({
  j3: 1,
  bn: 1,
  b6: 1,
  bo: 1,
  iZ: 1
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
    var x$2 = $thiz.aU();
    var x$3 = x.aU();
    return ((x$2 === null) ? (x$3 === null) : (x$2 === x$3));
  } else {
    return false;
  }
}
function $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz) {
  return (clazz.a5.Z ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.a5.Q())) + "]") : clazz.a5.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.J)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.J)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.oA = null;
  this.gr = 0;
  this.oz = 0;
  this.oA = x$1;
  this.gr = 0;
  this.oz = x$1.A();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.o = (function() {
  return (this.gr < this.oz);
});
$p.l = (function() {
  var result = this.oA.B(this.gr);
  this.gr = ((1 + this.gr) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  jO: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
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
$p.de = (function(elems) {
  return this.pp(elems);
});
$p.aL = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.pp = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).b7();
});
$p.aq = (function(source) {
  return this.pp(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  k0: 1,
  ay: 1,
  a: 1,
  K: 1,
  a5: 1
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
$p.de = (function(elems) {
  return this.kk(elems);
});
$p.kk = (function(source) {
  return this.aL().b5(source).b7();
});
$p.aL = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.dR))), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []));
});
$p.aq = (function(source) {
  return this.kk(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  kc: 1,
  ay: 1,
  a: 1,
  K: 1,
  a5: 1
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
  this.dd = null;
  this.dd = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, (-1408943127), true);
});
$p.i = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_s_util_Failure)) {
    var x = this.dd;
    var x$2 = x$0.dd;
    return ((x === null) ? (x$2 === null) : x.i(x$2));
  } else {
    return false;
  }
});
$p.g = (function() {
  return $m_sr_ScalaRunTime$().cc(this);
});
$p.A = (function() {
  return 1;
});
$p.C = (function() {
  return "Failure";
});
$p.B = (function(n) {
  if ((n === 0)) {
    return this.dd;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.pw = (function() {
  return true;
});
$p.px = (function() {
  return false;
});
$p.x = (function() {
  var $x_1 = this.dd;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.T : $x_1);
});
$p.bl = (function(f) {
});
$p.kz = (function(f) {
  return this;
});
$p.pO = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.cd(this.dd, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x18 = $m_s_util_control_NonFatal$().fB(e$2);
    if ((!x18.e())) {
      return new $c_s_util_Failure(x18.x());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
  }
});
$p.bZ = (function(fa, fb) {
  return fa.c(this.dd);
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d9)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  d9: 1,
  br: 1,
  b: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Left(value) {
  this.dS = null;
  this.dS = value;
}
$p = $c_s_util_Left.prototype = new $h_s_util_Either();
$p.constructor = $c_s_util_Left;
/** @constructor */
function $h_s_util_Left() {
}
$h_s_util_Left.prototype = $p;
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, 877209692, true);
});
$p.i = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Left) && $m_sr_BoxesRunTime$().p(this.dS, x$0.dS)));
});
$p.g = (function() {
  return $m_sr_ScalaRunTime$().cc(this);
});
$p.A = (function() {
  return 1;
});
$p.C = (function() {
  return "Left";
});
$p.B = (function(n) {
  if ((n === 0)) {
    return this.dS;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_s_util_Left(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.da)));
}
var $d_s_util_Left = new $TypeData().i($c_s_util_Left, "scala.util.Left", ({
  da: 1,
  d8: 1,
  b: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Right(value) {
  this.bN = null;
  this.bN = value;
}
$p = $c_s_util_Right.prototype = new $h_s_util_Either();
$p.constructor = $c_s_util_Right;
/** @constructor */
function $h_s_util_Right() {
}
$h_s_util_Right.prototype = $p;
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, 252890491, true);
});
$p.i = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Right) && $m_sr_BoxesRunTime$().p(this.bN, x$0.bN)));
});
$p.g = (function() {
  return $m_sr_ScalaRunTime$().cc(this);
});
$p.A = (function() {
  return 1;
});
$p.C = (function() {
  return "Right";
});
$p.B = (function(n) {
  if ((n === 0)) {
    return this.bN;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_s_util_Right(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.db)));
}
var $d_s_util_Right = new $TypeData().i($c_s_util_Right, "scala.util.Right", ({
  db: 1,
  d8: 1,
  b: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.dT = null;
  this.dT = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, (-1750213842), true);
});
$p.i = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().p(this.dT, x$0.dT)));
});
$p.g = (function() {
  return $m_sr_ScalaRunTime$().cc(this);
});
$p.A = (function() {
  return 1;
});
$p.C = (function() {
  return "Success";
});
$p.B = (function(n) {
  if ((n === 0)) {
    return this.dT;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.pw = (function() {
  return false;
});
$p.px = (function() {
  return true;
});
$p.x = (function() {
  return this.dT;
});
$p.bl = (function(f) {
  f.c(this.dT);
});
$p.kz = (function(f) {
  try {
    return new $c_s_util_Success(f.c(this.dT));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x2 = $m_s_util_control_NonFatal$().fB(e$2);
    if ((!x2.e())) {
      return new $c_s_util_Failure(x2.x());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
  }
});
$p.pO = (function(pf) {
  return this;
});
$p.bZ = (function(fa, fb) {
  try {
    return fb.c(this.dT);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x42 = $m_s_util_control_NonFatal$().fB(e$2);
    if ((!x42.e())) {
      var x43 = x42.x();
      return fa.c(x43);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
  }
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dc)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  dc: 1,
  br: 1,
  b: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$Created(noteId_$_lo, noteId_$_hi) {
  this.gs = 0;
  this.gt = 0;
  this.gs = noteId_$_lo;
  this.gt = noteId_$_hi;
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$Created.prototype = new $h_Lcom_github_pwharned_clausula_extension_PopupState();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$Created;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$Created() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$Created.prototype = $p;
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, (-793022216), true);
});
$p.i = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Created)) {
    var x_$_lo = this.gs;
    var x_$_hi = this.gt;
    var $x_1 = x$0;
    var x$1_$_lo = $x_1.gs;
    var x$1_$_hi = $x_1.gt;
    return (((x_$_lo ^ x$1_$_lo) | (x_$_hi ^ x$1_$_hi)) === 0);
  } else {
    return false;
  }
});
$p.g = (function() {
  return $m_sr_ScalaRunTime$().cc(this);
});
$p.A = (function() {
  return 1;
});
$p.C = (function() {
  return "Created";
});
$p.B = (function(n) {
  if ((n === 0)) {
    return $bL(this.gs, this.gt);
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_PopupState$Created(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bs)));
}
var $d_Lcom_github_pwharned_clausula_extension_PopupState$Created = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$Created, "com.github.pwharned.clausula.extension.PopupState$Created", ({
  bs: 1,
  aH: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(error) {
  this.fE = null;
  this.fE = error;
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed.prototype = new $h_Lcom_github_pwharned_clausula_extension_PopupState();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$Failed() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$Failed.prototype = $p;
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, 2021931327, true);
});
$p.i = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed)) {
    var x = this.fE;
    var x$2 = x$0.fE;
    return ((x === null) ? (x$2 === null) : x.i(x$2));
  } else {
    return false;
  }
});
$p.g = (function() {
  return $m_sr_ScalaRunTime$().cc(this);
});
$p.A = (function() {
  return 1;
});
$p.C = (function() {
  return "Failed";
});
$p.B = (function(n) {
  if ((n === 0)) {
    return this.fE;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_PopupState$Failed(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bt)));
}
var $d_Lcom_github_pwharned_clausula_extension_PopupState$Failed = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$Failed, "com.github.pwharned.clausula.extension.PopupState$Failed", ({
  bt: 1,
  aH: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview(word, sentence, language, position) {
  this.eO = null;
  this.eN = null;
  this.eM = null;
  this.hc = null;
  this.eO = word;
  this.eN = sentence;
  this.eM = language;
  this.hc = position;
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview.prototype = new $h_Lcom_github_pwharned_clausula_extension_PopupState();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$Preview() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$Preview.prototype = $p;
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, (-2055871664), true);
});
$p.i = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview)) {
    if (((this.eO === x$0.eO) && (this.eN === x$0.eN))) {
      var x = this.eM;
      var x$2 = x$0.eM;
      var $x_1 = ((x === null) ? (x$2 === null) : x.i(x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.hc;
      var x$4 = x$0.hc;
      return ((x$3 === null) ? (x$4 === null) : x$3.i(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.g = (function() {
  return $m_sr_ScalaRunTime$().cc(this);
});
$p.A = (function() {
  return 4;
});
$p.C = (function() {
  return "Preview";
});
$p.B = (function(n) {
  switch (n) {
    case 0: {
      return this.eO;
      break;
    }
    case 1: {
      return this.eN;
      break;
    }
    case 2: {
      return this.eM;
      break;
    }
    case 3: {
      return this.hc;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_PopupState$Preview(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
var $d_Lcom_github_pwharned_clausula_extension_PopupState$Preview = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$Preview, "com.github.pwharned.clausula.extension.PopupState$Preview", ({
  bu: 1,
  aH: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(code, msg) {
  this.fF = 0;
  this.eP = null;
  this.fF = code;
  this.eP = msg;
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_ApiError.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_ApiError;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_ApiError() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_ApiError.prototype = $p;
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().y(acc, 1008012334);
  acc = $m_sr_Statics$().y(acc, this.fF);
  acc = $m_sr_Statics$().y(acc, $m_sr_Statics$().N(this.eP));
  return $m_sr_Statics$().aG(acc, 2);
});
$p.i = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_ApiError) && ((this.fF === x$0.fF) && (this.eP === x$0.eP))));
});
$p.g = (function() {
  return $m_sr_ScalaRunTime$().cc(this);
});
$p.A = (function() {
  return 2;
});
$p.C = (function() {
  return "ApiError";
});
$p.B = (function(n) {
  if ((n === 0)) {
    return this.fF;
  }
  if ((n === 1)) {
    return this.eP;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_domain_ApiError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bw)));
}
var $d_Lcom_github_pwharned_clausula_extension_domain_ApiError = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_ApiError, "com.github.pwharned.clausula.extension.domain.ApiError", ({
  bw: 1,
  ag: 1,
  bB: 1,
  b: 1,
  j: 1,
  a: 1
}));
function $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__($thiz, code, displayName, isRTL, sentenceStrategy) {
  $thiz.bu = code;
  $thiz.bC = displayName;
  return $thiz;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  this.bu = null;
  this.bC = null;
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage.prototype = $p;
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.ev = (function() {
  return this.bu;
});
$p.gL = (function() {
  return this.bC;
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage = new $TypeData().i(0, "com.github.pwharned.clausula.extension.domain.KnownLanguage", ({
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fO = null;
    this.fN = null;
    this.fO = error;
    this.fN = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fr(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().fr(cause)), null, true, true);
    this.pv(cause);
  }
  U() {
    return new $c_s_Product$$anon$1(this);
  }
  k() {
    return $m_s_util_hashing_MurmurHash3$().k0(this, (-889275714), null);
  }
  i(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.fO;
      var x$2 = x$0.fO;
      if (((x === null) ? (x$2 === null) : x.i(x$2))) {
        var x$3 = this.fN;
        var x$4 = x$0.fN;
        return ((x$3 === null) ? (x$4 === null) : x$3.i(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  A() {
    return 2;
  }
  C() {
    return "ErrorHandlingError";
  }
  B(n) {
    if ((n === 0)) {
      return this.fO;
    }
    if ((n === 1)) {
      return this.fN;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  g() {
    return ((("ErrorHandlingError: " + this.fO) + "; cause: ") + this.fN);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bH)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  bH: 1,
  aI: 1,
  m: 1,
  a: 1,
  b: 1,
  j: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.fP = null;
    this.fP = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fr(error)), null, true, true);
  }
  U() {
    return new $c_s_Product$$anon$1(this);
  }
  k() {
    return $m_s_util_hashing_MurmurHash3$().k0(this, (-889275714), null);
  }
  i(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.fP;
      var x$2 = x$0.fP;
      return ((x === null) ? (x$2 === null) : x.i(x$2));
    } else {
      return false;
    }
  }
  A() {
    return 1;
  }
  C() {
    return "ObserverError";
  }
  B(n) {
    if ((n === 0)) {
      return this.fP;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  g() {
    return ("ObserverError: " + this.fP);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bI)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  bI: 1,
  aI: 1,
  m: 1,
  a: 1,
  b: 1,
  j: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fR = null;
    this.fQ = null;
    this.fR = error;
    this.fQ = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fr(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().fr(cause)), null, true, true);
    this.pv(cause);
  }
  U() {
    return new $c_s_Product$$anon$1(this);
  }
  k() {
    return $m_s_util_hashing_MurmurHash3$().k0(this, (-889275714), null);
  }
  i(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.fR;
      var x$2 = x$0.fR;
      if (((x === null) ? (x$2 === null) : x.i(x$2))) {
        var x$3 = this.fQ;
        var x$4 = x$0.fQ;
        return ((x$3 === null) ? (x$4 === null) : x$3.i(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  A() {
    return 2;
  }
  C() {
    return "ObserverErrorHandlingError";
  }
  B(n) {
    if ((n === 0)) {
      return this.fR;
    }
    if ((n === 1)) {
      return this.fQ;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  g() {
    return ((("ObserverErrorHandlingError: " + this.fR) + "; cause: ") + this.fQ);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bJ)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bJ: 1,
  aI: 1,
  m: 1,
  a: 1,
  b: 1,
  j: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.eS = null;
    this.eR = 0;
    this.eS = trx;
    this.eR = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  U() {
    return new $c_s_Product$$anon$1(this);
  }
  k() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().y(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().y(acc, $m_sr_Statics$().N(this.eS));
    acc = $m_sr_Statics$().y(acc, this.eR);
    return $m_sr_Statics$().aG(acc, 2);
  }
  i(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.eR === x$0.eR)) {
        var x = this.eS;
        var x$2 = x$0.eS;
        return ((x === null) ? (x$2 === null) : (x === x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  A() {
    return 2;
  }
  C() {
    return "TransactionDepthExceeded";
  }
  B(n) {
    if ((n === 0)) {
      return this.eS;
    }
    if ((n === 1)) {
      return this.eR;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  g() {
    return ((("TransactionDepthExceeded: " + this.eS) + "; maxDepth: ") + this.eR);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  bK: 1,
  aI: 1,
  m: 1,
  a: 1,
  b: 1,
  j: 1
}));
var $d_Lcom_raquo_airstream_core_EventStream = new $TypeData().i(1, "com.raquo.airstream.core.EventStream", ({
  aJ: 1,
  ah: 1,
  a2: 1,
  aq: 1,
  ar: 1,
  aC: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.ih();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.lI = null;
  this.lJ = null;
  this.iy = null;
  this.ix = null;
  this.dm = null;
  this.lI = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.iy = initial;
  this.ix = new $c_Lcom_raquo_airstream_state_VarSignal(this.iy, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.dm = this.ix;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.cP = (function() {
  return this.lI;
});
$p.cJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.g = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.tx = (function(value, transaction) {
  this.iy = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.ix, value, transaction);
});
$p.eG = (function() {
  return this.dm;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  ek: 1,
  ah: 1,
  aX: 1,
  as: 1,
  a2: 1,
  em: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1(key$1) {
  this.ee = null;
  this.ef = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$1, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1, "com.raquo.laminar.defs.styles.StyleProps$$anon$1", ({
  eM: 1,
  aN: 1,
  ac: 1,
  aL: 1,
  aM: 1,
  bR: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43(key$43) {
  this.ee = null;
  this.ef = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$43, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43, "com.raquo.laminar.defs.styles.StyleProps$$anon$43", ({
  eP: 1,
  aN: 1,
  ac: 1,
  aL: 1,
  aM: 1,
  eS: 1
}));
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.iQ;
  if ((x === (void 0))) {
    $thiz.iQ = $m_sjs_js_defined$().oZ($m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.mX;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].ul() === propDomName)) {
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
  this.fW = null;
  this.cj = null;
  this.iP = null;
  this.eg = null;
  this.fX = null;
  this.iR = null;
  this.bq = null;
  this.mX = null;
  this.iQ = null;
  this.iR = tag;
  this.bq = ref;
  this.fW = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.mX = (void 0);
  this.iQ = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.k1 = (function() {
  return this.fW;
});
$p.ct = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gu(parentNode, this, (void 0));
});
$p.hZ = (function() {
  return this.cj;
});
$p.p5 = (function(x$0) {
  this.cj = x$0;
});
$p.eK = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.eE = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.rn = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().sA(this.bq)) {
    var x1 = this.iR;
    if (false) {
      return x1.ua();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().mC;
  }
});
$p.sy = (function(propDomName) {
  var x = this.rn();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().sp(x, propDomName, 0));
});
$p.t2 = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.sy(key.f0)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.f0)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.f0) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().p8(this.bq)) + "` that already has an input controller for `") + key.f0) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.f0);
      }
    }
  }
});
$p.g = (function() {
  return (("ReactiveHtmlElement(" + ((this.bq !== null) ? this.bq.outerHTML : ("tag=" + this.iR.iV))) + ")");
});
$p.aA = (function() {
  return this.bq;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  fz: 1,
  aO: 1,
  a9: 1,
  aZ: 1,
  bW: 1,
  fx: 1
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
  fK: 1,
  c3: 1,
  v: 1,
  t: 1,
  m: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c1)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  c1: 1,
  am: 1,
  a: 1,
  ad: 1,
  aa: 1,
  aE: 1
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
  fR: 1,
  am: 1,
  a: 1,
  ad: 1,
  aa: 1,
  aE: 1
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
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c4)));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  c4: 1,
  am: 1,
  a: 1,
  ad: 1,
  aa: 1,
  aE: 1
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
  return $m_RTLong$().kM($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c5)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  c5: 1,
  am: 1,
  a: 1,
  ad: 1,
  aa: 1,
  aE: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  fZ: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
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
function $f_T__getChars__I__I__AC__I__V($thiz, srcBegin, srcEnd, dst, dstBegin) {
  var offset = ((dstBegin - srcBegin) | 0);
  var i = srcBegin;
  while ((i < srcEnd)) {
    dst.a[((i + offset) | 0)] = $thiz.charCodeAt(i);
    i = ((1 + i) | 0);
  }
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().ig(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__lastIndexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().ig(ch);
  return ($thiz.lastIndexOf(str) | 0);
}
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  } else {
    return $thiz.repeat(count);
  }
}
function $f_T__split__T__I__AT($thiz, regex, limit) {
  return $m_ju_regex_PatternCompiler$().rk(regex, 0).sI($thiz, limit);
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
  g5: 1,
  a: 1,
  ad: 1,
  b3: 1,
  aa: 1,
  aE: 1
}), ((x) => ((typeof x) === "string")));
class $c_ju_FormatterClosedException extends $c_jl_IllegalStateException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_ju_FormatterClosedException = new $TypeData().i($c_ju_FormatterClosedException, "java.util.FormatterClosedException", ({
  gq: 1,
  c2: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
class $c_ju_IllegalFormatException extends $c_jl_IllegalArgumentException {
}
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.nA = null;
    this.nC = null;
    this.nB = 0;
    this.nA = desc;
    this.nC = regex;
    this.nB = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    var idx = this.nB;
    var re = this.nC;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.nA + indexHint) + "\n") + re);
    return ((((idx >= 0) && (re !== null)) && (idx < re.length)) ? (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^") : base);
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().i($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  gJ: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
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
$p.k = (function() {
  return 2433880;
});
$p.g = (function() {
  return "None";
});
$p.A = (function() {
  return 0;
});
$p.C = (function() {
  return "None";
});
$p.B = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.sg = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get");
});
$p.x = (function() {
  this.sg();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  gV: 1,
  ca: 1,
  c: 1,
  b: 1,
  j: 1,
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
  this.cU = null;
  this.cU = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, 1323286827, true);
});
$p.i = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().p(this.cU, x$0.cU)));
});
$p.g = (function() {
  return $m_sr_ScalaRunTime$().cc(this);
});
$p.A = (function() {
  return 1;
});
$p.C = (function() {
  return "Some";
});
$p.B = (function(n) {
  if ((n === 0)) {
    return this.cU;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.x = (function() {
  return this.cU;
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cc)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  cc: 1,
  ca: 1,
  c: 1,
  b: 1,
  j: 1,
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
$p.w = (function() {
  return (-1);
});
$p.bl = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.fp = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.e = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.bB = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.dV = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fq = (function(coll) {
  return this.bo().aq(coll);
});
$p.gP = (function() {
  return this.bo().aL();
});
$p.bY = (function() {
  return this.bp();
});
$p.ex = (function(coll) {
  return this.fq(coll);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.hz = null;
  this.cV = 0;
  this.g4 = 0;
  this.hz = xs;
  this.cV = 0;
  this.g4 = $m_jl_reflect_Array$().bm(this.hz);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.w = (function() {
  return ((this.g4 - this.cV) | 0);
});
$p.o = (function() {
  return (this.cV < this.g4);
});
$p.l = (function() {
  if ((this.cV >= $m_jl_reflect_Array$().bm(this.hz))) {
    $m_sc_Iterator$().W.l();
  }
  var r = $m_sr_ScalaRunTime$().dX(this.hz, this.cV);
  this.cV = ((1 + this.cV) | 0);
  return r;
});
$p.e1 = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.cV + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.g4;
    } else {
      var a = this.g4;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.cV = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  h6: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.jj = self;
  $thiz.cX = 0;
  $thiz.br = self.n();
  return $thiz;
}
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.br) ? $thiz.br : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.jj = null;
  this.cX = 0;
  this.br = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.w = (function() {
  return this.br;
});
$p.o = (function() {
  return (this.br > 0);
});
$p.l = (function() {
  if ((this.br > 0)) {
    var r = this.jj.t(this.cX);
    this.cX = ((1 + this.cX) | 0);
    this.br = ((this.br - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().W.l();
  }
});
$p.e1 = (function(n) {
  if ((n > 0)) {
    this.cX = ((this.cX + n) | 0);
    var b = ((this.br - n) | 0);
    this.br = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.h5 = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.br = ((b < 0) ? 0 : b);
  this.cX = ((this.cX + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  cg: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.gj = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().W);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.qW = (function(elem) {
  this.gj = this.gj.k3(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.b6 = (function(elem) {
  return this.qW(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  hk: 1,
  iP: 1,
  L: 1,
  N: 1,
  S: 1,
  al: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.dg(x, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => default$1.c(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.m();
  while (it.o()) {
    var next = it.l();
    f.fm(next.aS(), next.aJ());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.aS();
    var v = x$1$2.aJ();
    return ((k + " -> ") + v);
  })), $thiz.m()), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.gP();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.m();
  while (it.o()) {
    var next = it.l();
    if (seen.hT(f.c(next))) {
      builder.b6(next);
    }
  }
  return builder.b7();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.e3().aL();
  b.b5($thiz);
  b.b5(suffix);
  return b.b7();
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.o1)) {
    $thiz.o0 = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.o1 = true;
  }
  return $thiz.o0;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.jp = null;
  this.o0 = null;
  this.o1 = false;
  $n_sci_ArraySeq$ = this;
  this.jp = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.kh = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.h7($m_s_Array$().pk(it, tag)));
});
$p.i9 = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$2) => this.h7($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2, evidence$1)))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.h7 = (function(x) {
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
$p.kg = (function(it, evidence$1) {
  return this.kh(it, evidence$1);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  hD: 1,
  a: 1,
  cf: 1,
  cd: 1,
  ce: 1,
  cj: 1
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
  this.bV = 0;
  this.g9 = 0;
  this.en = null;
  this.bG = 0;
  this.d0 = null;
  this.ga = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_ChampBaseIterator__sci_Node__(this, hm$1.bx);
  while (this.o()) {
    var originalHash = this.en.gM(this.bV);
    outer.fC(outer.cE, this.en.e2(this.bV), this.en.dh(this.bV), originalHash, $m_sc_Hashing$().cv(originalHash), 0);
    this.bV = ((1 + this.bV) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.l = (function() {
  return $m_sc_Iterator$().W.l();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  hH: 1,
  cx: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.u)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.dC = 0;
  this.fc = null;
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
  hX: 1,
  hY: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
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
  hZ: 1,
  i0: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dF = 0;
  this.cH = null;
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
  i1: 1,
  i2: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.dy = 0;
  this.hH = null;
  this.bW = 0;
  this.gb = null;
  this.gc = null;
  this.jt = 0;
  this.o4 = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.jt = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().q7(this.jt, $m_sr_Statics$().N(this.o4), (-889275714));
});
$p.t1 = (function() {
  if ((!this.o())) {
    $m_sc_Iterator$().W.l();
  }
  this.jt = this.hH.gM(this.dy);
  this.o4 = this.hH.dh(this.dy);
  this.dy = ((this.dy - 1) | 0);
  return this;
});
$p.l = (function() {
  return this.t1();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  i4: 1,
  hE: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.bV = 0;
  this.g9 = 0;
  this.en = null;
  this.bG = 0;
  this.d0 = null;
  this.ga = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.ia = (function() {
  if ((!this.o())) {
    $m_sc_Iterator$().W.l();
  }
  var payload = this.en.pt(this.bV);
  this.bV = ((1 + this.bV) | 0);
  return payload;
});
$p.l = (function() {
  return this.ia();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  i5: 1,
  cx: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bL <= $thiz.aC)) {
    $m_sc_Iterator$().W.l();
  }
  $thiz.dH = ((1 + $thiz.dH) | 0);
  var slice = $thiz.jv.cQ($thiz.dH);
  while ((slice.a.length === 0)) {
    $thiz.dH = ((1 + $thiz.dH) | 0);
    slice = $thiz.jv.cQ($thiz.dH);
  }
  $thiz.ge = $thiz.er;
  var count = $thiz.o6;
  var idx = $thiz.dH;
  var c = (((count + ((count >>> 31) | 0)) | 0) >> 1);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.dG = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x46 = $thiz.dG;
  switch (x46) {
    case 1: {
      $thiz.aY = slice;
      break;
    }
    case 2: {
      $thiz.aZ = slice;
      break;
    }
    case 3: {
      $thiz.by = slice;
      break;
    }
    case 4: {
      $thiz.cq = slice;
      break;
    }
    case 5: {
      $thiz.eq = slice;
      break;
    }
    case 6: {
      $thiz.ju = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x46);
    }
  }
  $thiz.er = (($thiz.ge + Math.imul(slice.a.length, (1 << Math.imul(5, (($thiz.dG - 1) | 0))))) | 0);
  if (($thiz.er > $thiz.d6)) {
    $thiz.er = $thiz.d6;
  }
  if (($thiz.dG > 1)) {
    $thiz.fd = (((1 << Math.imul(5, $thiz.dG)) - 1) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.aC - $thiz.bL) | 0) + $thiz.d6) | 0);
  if ((pos === $thiz.er)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.dG > 1)) {
    var io = ((pos - $thiz.ge) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.fd ^ io));
    $thiz.fd = io;
  }
  $thiz.bL = (($thiz.bL - $thiz.aC) | 0);
  var a = $thiz.aY.a.length;
  var b = $thiz.bL;
  $thiz.d5 = ((a < b) ? a : b);
  $thiz.aC = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aY = $thiz.aZ.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aZ = $thiz.by.a[(31 & ((io >>> 10) | 0))];
    $thiz.aY = $thiz.aZ.a[0];
  } else if ((xor < 1048576)) {
    $thiz.by = $thiz.cq.a[(31 & ((io >>> 15) | 0))];
    $thiz.aZ = $thiz.by.a[0];
    $thiz.aY = $thiz.aZ.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cq = $thiz.eq.a[(31 & ((io >>> 20) | 0))];
    $thiz.by = $thiz.cq.a[0];
    $thiz.aZ = $thiz.by.a[0];
    $thiz.aY = $thiz.aZ.a[0];
  } else {
    $thiz.eq = $thiz.ju.a[((io >>> 25) | 0)];
    $thiz.cq = $thiz.eq.a[0];
    $thiz.by = $thiz.cq.a[0];
    $thiz.aZ = $thiz.by.a[0];
    $thiz.aY = $thiz.aZ.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aY = $thiz.aZ.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aZ = $thiz.by.a[(31 & ((io >>> 10) | 0))];
    $thiz.aY = $thiz.aZ.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.by = $thiz.cq.a[(31 & ((io >>> 15) | 0))];
    $thiz.aZ = $thiz.by.a[(31 & ((io >>> 10) | 0))];
    $thiz.aY = $thiz.aZ.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cq = $thiz.eq.a[(31 & ((io >>> 20) | 0))];
    $thiz.by = $thiz.cq.a[(31 & ((io >>> 15) | 0))];
    $thiz.aZ = $thiz.by.a[(31 & ((io >>> 10) | 0))];
    $thiz.aY = $thiz.aZ.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.eq = $thiz.ju.a[((io >>> 25) | 0)];
    $thiz.cq = $thiz.eq.a[(31 & ((io >>> 20) | 0))];
    $thiz.by = $thiz.cq.a[(31 & ((io >>> 15) | 0))];
    $thiz.aZ = $thiz.by.a[(31 & ((io >>> 10) | 0))];
    $thiz.aY = $thiz.aZ.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.jv = null;
  this.d6 = 0;
  this.o6 = 0;
  this.aY = null;
  this.aZ = null;
  this.by = null;
  this.cq = null;
  this.eq = null;
  this.ju = null;
  this.d5 = 0;
  this.aC = 0;
  this.fd = 0;
  this.bL = 0;
  this.dH = 0;
  this.dG = 0;
  this.ge = 0;
  this.er = 0;
  this.jv = v;
  this.d6 = totalLength;
  this.o6 = sliceCount;
  this.aY = v.d;
  this.d5 = this.aY.a.length;
  this.aC = 0;
  this.fd = 0;
  this.bL = this.d6;
  this.dH = 0;
  this.dG = 1;
  this.ge = 0;
  this.er = this.d5;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.w = (function() {
  return ((this.bL - this.aC) | 0);
});
$p.o = (function() {
  return (this.bL > this.aC);
});
$p.l = (function() {
  if ((this.aC === this.d5)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.aY.a[this.aC];
  this.aC = ((1 + this.aC) | 0);
  return r;
});
$p.e1 = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.aC - this.bL) | 0) + this.d6) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.d6;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.d6)) {
      this.aC = 0;
      this.bL = 0;
      this.d5 = 0;
    } else {
      while ((newpos >= this.er)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.ge) | 0);
      if ((this.dG > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.fd ^ io));
        this.fd = io;
      }
      this.d5 = this.aY.a.length;
      this.aC = (31 & io);
      this.bL = ((this.aC + ((this.d6 - newpos) | 0)) | 0);
      if ((this.d5 > this.bL)) {
        this.d5 = this.bL;
      }
    }
  }
  return this;
});
$p.bB = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().bm(xs);
  var srcLen = ((this.bL - this.aC) | 0);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? xsLen : ((xsLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var total$1 = ((total < 0) ? 0 : total);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total$1)) {
    if ((this.aC === this.d5)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total$1 - copied) | 0);
    var b = ((this.aY.a.length - this.aC) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.aY;
      var srcPos = this.aC;
      var destPos = ((start + copied) | 0);
      src.s(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().gJ(this.aY, this.aC, xs, ((start + copied) | 0), count);
    }
    this.aC = ((this.aC + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total$1;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  i7: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1,
  H: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.jC = 0;
  $thiz.ob = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.jC = 0;
  this.ob = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.bb = (function(size) {
  if ((this.jC < size)) {
    this.tp(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.jE = null;
  this.od = null;
  $n_scm_ArraySeq$ = this;
  this.jE = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.od = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.s6 = (function(it, evidence$1) {
  return this.ky($m_s_Array$().pk(it, evidence$1));
});
$p.i9 = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => this.ky(x$2))), new $c_scm_ArrayBuilder$generic(evidence$1.aU()));
});
$p.ky = (function(x) {
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
$p.kg = (function(it, evidence$1) {
  return this.s6(it, evidence$1);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  iC: 1,
  a: 1,
  cf: 1,
  cd: 1,
  ce: 1,
  cj: 1
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
  this.d9 = null;
  this.gi = 0;
  this.gh = null;
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
$p.kc = (function(nd) {
  return nd.fi;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  iK: 1,
  bm: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.dP = 0;
  this.d9 = null;
  this.gi = 0;
  this.gh = null;
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
$p.kc = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  iL: 1,
  bm: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.dP = 0;
  this.d9 = null;
  this.gi = 0;
  this.gh = null;
  this.jI = 0;
  this.ok = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ok = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.jI = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.k = (function() {
  return this.jI;
});
$p.kc = (function(nd) {
  this.jI = $p_scm_HashSet__improveHash__I__I(this.ok, nd.da);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  iM: 1,
  bm: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.gq = null;
  this.gq = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.i = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.k = (function() {
  return $m_sr_Statics$().N(this.gq);
});
$p.g = (function() {
  return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.gq);
});
$p.aU = (function() {
  return this.gq;
});
$p.bt = (function(len) {
  return this.gq.a5.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  jd: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28(key$28) {
  this.ee = null;
  this.ef = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$28, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28, "com.raquo.laminar.defs.styles.StyleProps$$anon$28", ({
  eN: 1,
  aN: 1,
  ac: 1,
  aL: 1,
  aM: 1,
  eR: 1,
  eQ: 1
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
$p.eB = (function(s) {
  this.pN(s);
  this.pA("\n");
});
$p.r4 = (function(csq) {
  this.pN(((csq === null) ? "null" : $dp_toString__T(csq)));
  return this;
});
$p.oU = (function(csq) {
  return this.r4(csq);
});
class $c_ju_DuplicateFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.n7 = null;
    this.n7 = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    return (("Flags = '" + this.n7) + "'");
  }
}
var $d_ju_DuplicateFormatFlagsException = new $TypeData().i($c_ju_DuplicateFormatFlagsException, "java.util.DuplicateFormatFlagsException", ({
  gj: 1,
  a4: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
class $c_ju_FormatFlagsConversionMismatchException extends $c_ju_IllegalFormatException {
  constructor(f, c) {
    super();
    this.n9 = null;
    this.n8 = 0;
    this.n9 = f;
    this.n8 = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    return ((("Conversion = " + $cToS(this.n8)) + ", Flags = ") + this.n9);
  }
}
var $d_ju_FormatFlagsConversionMismatchException = new $TypeData().i($c_ju_FormatFlagsConversionMismatchException, "java.util.FormatFlagsConversionMismatchException", ({
  gk: 1,
  a4: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
class $c_ju_IllegalFormatArgumentIndexException extends $c_ju_IllegalFormatException {
  constructor(msg) {
    super();
    this.nd = null;
    this.nd = msg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    return this.nd;
  }
}
var $d_ju_IllegalFormatArgumentIndexException = new $TypeData().i($c_ju_IllegalFormatArgumentIndexException, "java.util.IllegalFormatArgumentIndexException", ({
  gr: 1,
  a4: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
class $c_ju_IllegalFormatCodePointException extends $c_ju_IllegalFormatException {
  constructor(c) {
    super();
    this.ne = 0;
    this.ne = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    var i = this.ne;
    return ("Code point = 0x" + (i >>> 0.0).toString(16));
  }
}
var $d_ju_IllegalFormatCodePointException = new $TypeData().i($c_ju_IllegalFormatCodePointException, "java.util.IllegalFormatCodePointException", ({
  gs: 1,
  a4: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
class $c_ju_IllegalFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(c, arg) {
    super();
    this.ng = 0;
    this.nf = null;
    this.ng = c;
    this.nf = arg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    return ((("" + $cToS(this.ng)) + " != ") + this.nf.a5.N);
  }
}
var $d_ju_IllegalFormatConversionException = new $TypeData().i($c_ju_IllegalFormatConversionException, "java.util.IllegalFormatConversionException", ({
  gt: 1,
  a4: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
class $c_ju_IllegalFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.nh = null;
    this.nh = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    return (("Flags = '" + this.nh) + "'");
  }
}
var $d_ju_IllegalFormatFlagsException = new $TypeData().i($c_ju_IllegalFormatFlagsException, "java.util.IllegalFormatFlagsException", ({
  gu: 1,
  a4: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
class $c_ju_IllegalFormatPrecisionException extends $c_ju_IllegalFormatException {
  constructor(p) {
    super();
    this.ni = 0;
    this.ni = p;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    return ("" + this.ni);
  }
}
var $d_ju_IllegalFormatPrecisionException = new $TypeData().i($c_ju_IllegalFormatPrecisionException, "java.util.IllegalFormatPrecisionException", ({
  gv: 1,
  a4: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
class $c_ju_IllegalFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(w) {
    super();
    this.nj = 0;
    this.nj = w;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    return ("" + this.nj);
  }
}
var $d_ju_IllegalFormatWidthException = new $TypeData().i($c_ju_IllegalFormatWidthException, "java.util.IllegalFormatWidthException", ({
  gw: 1,
  a4: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
class $c_ju_MissingFormatArgumentException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.nk = null;
    this.nk = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    return (("Format specifier '" + this.nk) + "'");
  }
}
var $d_ju_MissingFormatArgumentException = new $TypeData().i($c_ju_MissingFormatArgumentException, "java.util.MissingFormatArgumentException", ({
  gx: 1,
  a4: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
class $c_ju_MissingFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.nl = null;
    this.nl = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    return this.nl;
  }
}
var $d_ju_MissingFormatWidthException = new $TypeData().i($c_ju_MissingFormatWidthException, "java.util.MissingFormatWidthException", ({
  gy: 1,
  a4: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
class $c_ju_UnknownFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.nm = null;
    this.nm = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    return (("Conversion = '" + this.nm) + "'");
  }
}
var $d_ju_UnknownFormatConversionException = new $TypeData().i($c_ju_UnknownFormatConversionException, "java.util.UnknownFormatConversionException", ({
  gz: 1,
  a4: 1,
  Q: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_T2$mcDD$sp(_1$mcD$sp, _2$mcD$sp) {
  this.je = null;
  this.jf = null;
  this.jg = 0.0;
  this.jh = 0.0;
  this.jg = _1$mcD$sp;
  this.jh = _2$mcD$sp;
  $ct_T2__O__O__(this, null, null);
}
$p = $c_T2$mcDD$sp.prototype = new $h_T2();
$p.constructor = $c_T2$mcDD$sp;
/** @constructor */
function $h_T2$mcDD$sp() {
}
$h_T2$mcDD$sp.prototype = $p;
$p.oL = (function() {
  return this.jg;
});
$p.oM = (function() {
  return this.jh;
});
$p.aJ = (function() {
  return this.jh;
});
$p.aS = (function() {
  return this.jg;
});
var $d_T2$mcDD$sp = new $TypeData().i($c_T2$mcDD$sp, "scala.Tuple2$mcDD$sp", ({
  h3: 1,
  ba: 1,
  cb: 1,
  j: 1,
  b: 1,
  a: 1,
  h2: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bY() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.a6)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
function $f_sci_IndexedSeqOps__slice__I__I__O($thiz, from, until) {
  return (((from <= 0) && (until >= $thiz.n())) ? $thiz : $thiz.ic(from, until));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.jC = 0;
  this.ob = 0;
  this.fh = null;
  this.oc = false;
  this.jD = null;
  this.fh = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.oc = (elementClass === $d_C.l());
  this.jD = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.oS = (function(elem) {
  var unboxedElem = (this.oc ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h1(this.fh) : elem));
  this.jD.push(unboxedElem);
  return this;
});
$p.qL = (function(xs) {
  var it = xs.m();
  while (it.o()) {
    this.oS(it.l());
  }
  return this;
});
$p.tp = (function(size) {
});
$p.b7 = (function() {
  return $m_scm_ArrayBuilder$().h0(((this.fh === $d_V.l()) ? $d_jl_Void.l() : (((this.fh === $d_sr_Null$.l()) || (this.fh === $d_sr_Nothing$.l())) ? $d_O.l() : this.fh)), this.jD);
});
$p.g = (function() {
  return "ArrayBuilder.generic";
});
$p.b6 = (function(elem) {
  return this.oS(elem);
});
$p.b5 = (function(elems) {
  return this.qL(elems);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  iB: 1,
  iz: 1,
  L: 1,
  N: 1,
  S: 1,
  al: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.jj = null;
  this.cX = 0;
  this.br = 0;
  this.og = null;
  this.of = 0;
  this.og = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.of = (mutationCount.M() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.o = (function() {
  $m_scm_MutationTracker$().p2(this.of, (this.og.M() | 0), "mutation occurred during iteration");
  return (this.br > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  iG: 1,
  cg: 1,
  x: 1,
  c: 1,
  d: 1,
  y: 1,
  a: 1
}));
class $c_s_concurrent_Future$$anon$1 extends $c_ju_NoSuchElementException {
  constructor(t$2) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("Future.collect partial function is not defined at: " + t$2), null, true, true);
  }
  fo() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$1 = new $TypeData().i($c_s_concurrent_Future$$anon$1, "scala.concurrent.Future$$anon$1", ({
  j5: 1,
  aP: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1,
  aV: 1
}));
class $c_s_concurrent_Future$$anon$2 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.filter predicate is not satisfied", null, true, true);
  }
  fo() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$2 = new $TypeData().i($c_s_concurrent_Future$$anon$2, "scala.concurrent.Future$$anon$2", ({
  j6: 1,
  aP: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1,
  aV: 1
}));
class $c_s_concurrent_Future$$anon$3 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.failed not completed with a throwable.", null, true, true);
  }
  fo() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$3 = new $TypeData().i($c_s_concurrent_Future$$anon$3, "scala.concurrent.Future$$anon$3", ({
  j7: 1,
  aP: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1,
  aV: 1
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
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().gm);
  return $thiz;
}
function $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try($thiz) {
  var \u03b4this$tailLocal2 = $thiz;
  while (true) {
    var state = \u03b4this$tailLocal2.P;
    if ((state instanceof $c_s_util_Try)) {
      return state;
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      \u03b4this$tailLocal2 = state.fz(\u03b4this$tailLocal2);
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
      if (\u03b4this$tailLocal4.gI(state$tailLocal2, ((state$tailLocal2 !== $m_s_concurrent_impl_Promise$().gm) ? $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(\u03b4this$tailLocal4, callbacks, state$tailLocal2) : callbacks))) {
        return callbacks;
      } else {
        state$tailLocal2 = \u03b4this$tailLocal4.P;
      }
    } else {
      var p = state$tailLocal2.fz(\u03b4this$tailLocal4);
      var state$tailLocal2$tmp1 = p.P;
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
      var left$tailLocal1$tmp1 = m.jM;
      var right$tailLocal1$tmp1 = new $c_s_concurrent_impl_Promise$ManyCallbacks(m.jL, right$tailLocal1);
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
      m.jL.q0(resolved);
      callbacks$tailLocal1 = m.jM;
    } else {
      callbacks$tailLocal1.q0(resolved);
      return (void 0);
    }
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$DefaultPromise() {
  this.P = null;
}
$p = $c_s_concurrent_impl_Promise$DefaultPromise.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$DefaultPromise;
/** @constructor */
function $h_s_concurrent_impl_Promise$DefaultPromise() {
}
$h_s_concurrent_impl_Promise$DefaultPromise.prototype = $p;
$p.ke = (function(f, executor) {
  var state = this.P;
  if ((!(state instanceof $c_s_util_Failure))) {
    $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 5, f, executor));
  }
});
$p.kd = (function(f, executor) {
  var state = this.P;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 2, f, executor)) : this);
});
$p.i8 = (function(f, executor) {
  var state = this.P;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 1, f, executor)) : this);
});
$p.t4 = (function(func, executor) {
  $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, this.P, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 6, func, executor));
});
$p.g = (function() {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    var state = \u03b4this$tailLocal1.P;
    if ((state instanceof $c_s_util_Try)) {
      return (("Future(" + state) + ")");
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      \u03b4this$tailLocal1 = state.fz(\u03b4this$tailLocal1);
    } else {
      return "Future(<not completed>)";
    }
  }
});
$p.tY = (function(value) {
  var state = this.P;
  return ((!(state instanceof $c_s_util_Try)) && this.eI(state, $m_s_concurrent_impl_Promise$().h2(value)));
});
$p.eI = (function(state, resolved) {
  var \u03b4this$tailLocal3 = this;
  var state$tailLocal1 = state;
  while (true) {
    if ($is_s_concurrent_impl_Promise$Callbacks(state$tailLocal1)) {
      if ((!\u03b4this$tailLocal3.gI(state$tailLocal1, resolved))) {
        state$tailLocal1 = \u03b4this$tailLocal3.P;
        continue;
      }
      if ((state$tailLocal1 !== $m_s_concurrent_impl_Promise$().gm)) {
        $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(\u03b4this$tailLocal3, state$tailLocal1, resolved);
      }
      return true;
    } else if ((state$tailLocal1 instanceof $c_s_concurrent_impl_Promise$Link)) {
      var p = state$tailLocal1.fz(\u03b4this$tailLocal3);
      if ((p !== \u03b4this$tailLocal3)) {
        var state$tailLocal1$tmp1 = p.P;
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
$p.k2 = (function(other) {
  if ((other !== this)) {
    var state = this.P;
    if ((!(state instanceof $c_s_util_Try))) {
      if ((other instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
        var resolved = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other);
      } else {
        var this$1 = $m_s_Option$().jX($p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other));
        var resolved = (this$1.e() ? null : this$1.x());
      }
      if ((resolved !== null)) {
        this.eI(state, resolved);
      } else {
        other.t4(this, $m_s_concurrent_ExecutionContext$parasitic$());
      }
    }
  }
  return this;
});
$p.kx = (function(target, link) {
  var \u03b4this$tailLocal5 = this;
  var link$tailLocal1 = link;
  var target$tailLocal2 = target;
  while (true) {
    if ((\u03b4this$tailLocal5 !== target$tailLocal2)) {
      var state = \u03b4this$tailLocal5.P;
      if ((state instanceof $c_s_util_Try)) {
        if ((!target$tailLocal2.eI(target$tailLocal2.P, state))) {
          throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "Cannot link completed promises together");
        } else {
          return (void 0);
        }
      } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
        var l = ((link$tailLocal1 !== null) ? link$tailLocal1 : new $c_s_concurrent_impl_Promise$Link(target$tailLocal2));
        var p = l.fz(\u03b4this$tailLocal5);
        if (((\u03b4this$tailLocal5 !== p) && \u03b4this$tailLocal5.gI(state, l))) {
          if ((state !== $m_s_concurrent_impl_Promise$().gm)) {
            $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(p, p.P, state);
            return (void 0);
          } else {
            return (void 0);
          }
        } else {
          target$tailLocal2 = p;
          link$tailLocal1 = l;
        }
      } else {
        \u03b4this$tailLocal5 = state.fz(\u03b4this$tailLocal5);
      }
    } else {
      return (void 0);
    }
  }
});
$p.u0 = (function(resolved) {
  var \u03b4this$tailLocal6 = this;
  while (true) {
    var state = \u03b4this$tailLocal6.P;
    if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      var next = (\u03b4this$tailLocal6.gI(state, resolved) ? state.P : \u03b4this$tailLocal6);
      \u03b4this$tailLocal6 = next;
    } else {
      \u03b4this$tailLocal6.eI(state, resolved);
      return (void 0);
    }
  }
});
$p.c = (function(v1) {
  this.eI(this.P, v1);
});
function $isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bp)));
}
var $d_s_concurrent_impl_Promise$DefaultPromise = new $TypeData().i($c_s_concurrent_impl_Promise$DefaultPromise, "scala.concurrent.impl.Promise$DefaultPromise", ({
  bp: 1,
  b7: 1,
  a: 1,
  cZ: 1,
  cW: 1,
  cY: 1,
  f: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.g = (function() {
  return this.a4;
});
$p.i = (function(that) {
  return (this === that);
});
$p.k = (function() {
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
    this.T = null;
    this.T = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bn() {
    return $dp_toString__T(this.T);
  }
  C() {
    return "JavaScriptException";
  }
  A() {
    return 1;
  }
  B(x$1) {
    return ((x$1 === 0) ? this.T : $m_sr_Statics$().sx(x$1));
  }
  U() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  k() {
    return $m_s_util_hashing_MurmurHash3$().bP(this, 1744042595, true);
  }
  i(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().p(this.T, x$1.T)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d6)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  d6: 1,
  v: 1,
  t: 1,
  m: 1,
  a: 1,
  j: 1,
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return 1938557015;
});
$p.g = (function() {
  return "CJKStrategy";
});
$p.A = (function() {
  return 0;
});
$p.C = (function() {
  return "CJKStrategy";
});
$p.B = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$, "com.github.pwharned.clausula.extension.domain.CJKStrategy$", ({
  dr: 1,
  aW: 1,
  b: 1,
  j: 1,
  a: 1,
  w: 1,
  z: 1,
  A: 1
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return (-2033731977);
});
$p.g = (function() {
  return "LatinStrategy";
});
$p.A = (function() {
  return 0;
});
$p.C = (function() {
  return "LatinStrategy";
});
$p.B = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$, "com.github.pwharned.clausula.extension.domain.LatinStrategy$", ({
  dJ: 1,
  aW: 1,
  b: 1,
  j: 1,
  a: 1,
  w: 1,
  z: 1,
  A: 1
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return 1276468189;
});
$p.g = (function() {
  return "RTLStrategy";
});
$p.A = (function() {
  return 0;
});
$p.C = (function() {
  return "RTLStrategy";
});
$p.B = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$, "com.github.pwharned.clausula.extension.domain.RTLStrategy$", ({
  dL: 1,
  aW: 1,
  b: 1,
  j: 1,
  a: 1,
  w: 1,
  z: 1,
  A: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$;
function $m_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$ = new $c_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$;
}
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.kA() === (void 0)))) {
    $thiz.jP($m_Lcom_raquo_airstream_core_Signal$().pH());
  }
  $thiz.pG(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.kA();
  if ((x === (void 0))) {
    $thiz.jP($m_Lcom_raquo_airstream_core_Signal$().pH());
    var nextValue = $thiz.k5();
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
  var isError = nextValue.pw();
  var elem = false;
  elem = false;
  $thiz.cw(false);
  var this$ = $thiz.cL();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.e5(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.cN();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fy(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cw(true);
  var x = $thiz.e4();
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
    nextValue.bZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cz(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cw(false);
  var this$ = $thiz.cL();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.gS(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().cz(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.cN();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fx(nextValue, transaction);
  }
  $thiz.cw(true);
  var x = $thiz.e4();
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
  $thiz.cw(false);
  var this$ = $thiz.cL();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.eA(nextError);
  }
  var this$$1 = $thiz.cN();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fw(nextError, transaction);
  }
  $thiz.cw(true);
  var x = $thiz.e4();
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
  nextValue.bZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, _$2, transaction);
  })));
}
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4(key$4) {
  this.ee = null;
  this.ef = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$4, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4, "com.raquo.laminar.defs.styles.StyleProps$$anon$4", ({
  eO: 1,
  aN: 1,
  ac: 1,
  aL: 1,
  aM: 1,
  bR: 1,
  eT: 1,
  eU: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.n1 && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.n1 = false;
  this.fY = null;
  this.n1 = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.fY = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.pN = (function(s) {
  this.pA(((s === null) ? "null" : s));
});
$p.pA = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.fY = (("" + this.fY) + rest);
      rest = "";
    } else {
      var $x_1 = this.fY;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.fY = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  fU: 1,
  fI: 1,
  fG: 1,
  bY: 1,
  b0: 1,
  b2: 1,
  b1: 1,
  bZ: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.e())) {
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
  if (($thiz.b9(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.gP();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.m();
    var different = false;
    while (it.o()) {
      var next = it.l();
      if (seen.hT(f.c(next))) {
        builder.b6(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.b7() : $thiz);
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.aU = (function() {
  return $d_Z.l();
});
$p.bt = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.aU = (function() {
  return $d_B.l();
});
$p.bt = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.aU = (function() {
  return $d_C.l();
});
$p.bt = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.aU = (function() {
  return $d_D.l();
});
$p.bt = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.aU = (function() {
  return $d_F.l();
});
$p.bt = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.aU = (function() {
  return $d_I.l();
});
$p.bt = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.aU = (function() {
  return $d_J.l();
});
$p.bt = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.dc = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.g = (function() {
  return this.dc;
});
$p.i = (function(that) {
  return (this === that);
});
$p.k = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.aU = (function() {
  return $d_S.l();
});
$p.bt = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.aU = (function() {
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return (-1469642697);
});
$p.g = (function() {
  return "AnkiNotRunning";
});
$p.A = (function() {
  return 0;
});
$p.C = (function() {
  return "AnkiNotRunning";
});
$p.B = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$, "com.github.pwharned.clausula.extension.domain.AnkiNotRunning$", ({
  dq: 1,
  ag: 1,
  bv: 1,
  b: 1,
  j: 1,
  a: 1,
  w: 1,
  z: 1,
  A: 1
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return (-451861635);
});
$p.g = (function() {
  return "DuplicateNote";
});
$p.A = (function() {
  return 0;
});
$p.C = (function() {
  return "DuplicateNote";
});
$p.B = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$, "com.github.pwharned.clausula.extension.domain.DuplicateNote$", ({
  ds: 1,
  ag: 1,
  bv: 1,
  b: 1,
  j: 1,
  a: 1,
  w: 1,
  z: 1,
  A: 1
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return (-926920016);
});
$p.g = (function() {
  return "EmptySentence";
});
$p.A = (function() {
  return 0;
});
$p.C = (function() {
  return "EmptySentence";
});
$p.B = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$, "com.github.pwharned.clausula.extension.domain.EmptySentence$", ({
  dt: 1,
  ag: 1,
  bD: 1,
  b: 1,
  j: 1,
  a: 1,
  w: 1,
  z: 1,
  A: 1
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return 584085975;
});
$p.g = (function() {
  return "EmptyWord";
});
$p.A = (function() {
  return 0;
});
$p.C = (function() {
  return "EmptyWord";
});
$p.B = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$, "com.github.pwharned.clausula.extension.domain.EmptyWord$", ({
  du: 1,
  ag: 1,
  bD: 1,
  b: 1,
  j: 1,
  a: 1,
  w: 1,
  z: 1,
  A: 1
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return (-190555721);
});
$p.g = (function() {
  return "NoWordFound";
});
$p.A = (function() {
  return 0;
});
$p.C = (function() {
  return "NoWordFound";
});
$p.B = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$, "com.github.pwharned.clausula.extension.domain.NoWordFound$", ({
  dK: 1,
  ag: 1,
  bz: 1,
  b: 1,
  j: 1,
  a: 1,
  w: 1,
  z: 1,
  A: 1
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return (-1807195300);
});
$p.g = (function() {
  return "SentenceBoundaryNotFound";
});
$p.A = (function() {
  return 0;
});
$p.C = (function() {
  return "SentenceBoundaryNotFound";
});
$p.B = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$, "com.github.pwharned.clausula.extension.domain.SentenceBoundaryNotFound$", ({
  dO: 1,
  ag: 1,
  bz: 1,
  b: 1,
  j: 1,
  a: 1,
  w: 1,
  z: 1,
  A: 1
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return 1949293709;
});
$p.g = (function() {
  return "UnsupportedLanguage";
});
$p.A = (function() {
  return 0;
});
$p.C = (function() {
  return "UnsupportedLanguage";
});
$p.B = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$, "com.github.pwharned.clausula.extension.domain.UnsupportedLanguage$", ({
  dP: 1,
  ag: 1,
  bB: 1,
  b: 1,
  j: 1,
  a: 1,
  w: 1,
  z: 1,
  A: 1
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
$p.bo = (function() {
  return $m_sc_View$();
});
$p.g = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bp = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.aV() === that.aV())) {
      try {
        return $thiz.tP(that);
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.be)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.be)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.dc = null;
  this.dc = "Any";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.aU = (function() {
  return $d_O.l();
});
$p.bt = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  je: 1,
  aU: 1,
  aT: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.a4 = null;
  this.a4 = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  jg: 1,
  jf: 1,
  af: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.a4 = null;
  this.a4 = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  ji: 1,
  jh: 1,
  af: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.a4 = null;
  this.a4 = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  jk: 1,
  jj: 1,
  af: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.a4 = null;
  this.a4 = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  jm: 1,
  jl: 1,
  af: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.a4 = null;
  this.a4 = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  jo: 1,
  jn: 1,
  af: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.a4 = null;
  this.a4 = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  jq: 1,
  jp: 1,
  af: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.a4 = null;
  this.a4 = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  js: 1,
  jr: 1,
  af: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.dc = null;
  this.dc = "Nothing";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.aU = (function() {
  return $d_sr_Nothing$.l();
});
$p.bt = (function(len) {
  return new ($d_sr_Nothing$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  jt: 1,
  aU: 1,
  aT: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.dc = null;
  this.dc = "Null";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.aU = (function() {
  return $d_sr_Null$.l();
});
$p.bt = (function(len) {
  return new ($d_sr_Null$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  ju: 1,
  aU: 1,
  aT: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.dc = null;
  this.dc = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.aU = (function() {
  return $d_O.l();
});
$p.bt = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  jv: 1,
  aU: 1,
  aT: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.a4 = null;
  this.a4 = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  jx: 1,
  jw: 1,
  af: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.a4 = null;
  this.a4 = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  jz: 1,
  jy: 1,
  af: 1,
  a: 1,
  W: 1,
  V: 1,
  b: 1,
  J: 1,
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
  this.ha = null;
  this.ha = \u03b4name$2;
}
$p = $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1.prototype = new $h_Lcom_github_pwharned_clausula_extension_ExtensionStatus();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1() {
}
$h_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return this.ha;
});
$p.g = (function() {
  return this.ha;
});
$p.k = (function() {
  return $f_T__hashCode__I(this.ha);
});
var $d_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1, "com.github.pwharned.clausula.extension.ExtensionStatus$$anon$1", ({
  dg: 1,
  de: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1(\u03b4name$2, _$ordinal$2) {
  this.hb = null;
  this.hb = \u03b4name$2;
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1.prototype = new $h_Lcom_github_pwharned_clausula_extension_PopupState();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return this.hb;
});
$p.g = (function() {
  return this.hb;
});
$p.k = (function() {
  return $f_T__hashCode__I(this.hb);
});
var $d_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1, "com.github.pwharned.clausula.extension.PopupState$$anon$1", ({
  dk: 1,
  aH: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.kF(), $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.kF(), $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.lO = null;
  this.lN = false;
  this.lP = null;
  this.iz = 0;
  this.lL = null;
  this.lM = null;
  this.lS = false;
  this.iA = null;
  this.lQ = null;
  this.lR = 0;
  this.lQ = parentDisplayName;
  this.lO = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.iz = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.iA = (void 0);
  this.lR = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.cP = (function() {
  return this.lO;
});
$p.g = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ft = (function() {
  return this.lN;
});
$p.e4 = (function() {
  return this.lP;
});
$p.cw = (function(x$1) {
  this.lN = x$1;
});
$p.fv = (function(x$1) {
  this.lP = x$1;
});
$p.gU = (function() {
});
$p.i = (function(obj) {
  return (this === obj);
});
$p.k = (function() {
  return $systemIdentityHashCode(this);
});
$p.fl = (function() {
  return this.iz;
});
$p.jP = (function(x$1) {
  this.iz = x$1;
});
$p.gT = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.gQ = (function(observer) {
  observer.e5($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cL = (function() {
  return this.lL;
});
$p.cN = (function() {
  return this.lM;
});
$p.h8 = (function() {
  return this.lS;
});
$p.eL = (function(x$1) {
  this.lS = x$1;
});
$p.gG = (function(x$0) {
  this.lL = x$0;
});
$p.gH = (function(x$0) {
  this.lM = x$0;
});
$p.kA = (function() {
  return this.iA;
});
$p.pG = (function(x$1) {
  this.iA = x$1;
});
$p.ih = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.eH = (function() {
  return this.lR;
});
$p.k5 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gV = (function() {
});
$p.cJ = (function() {
  return (this.lQ.M() + ".signal");
});
$p.eG = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  ep: 1,
  ah: 1,
  a2: 1,
  aq: 1,
  ar: 1,
  aX: 1,
  bL: 1,
  aD: 1,
  bM: 1,
  el: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.gF($thiz)) {
        return $thiz.eD(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.p)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.p)));
}
/** @constructor */
function $c_sc_View$$anon$1(it$3) {
  this.nY = null;
  this.nY = it$3;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.m = (function() {
  return this.nY.M();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  hy: 1,
  ae: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  a: 1,
  a6: 1
}));
/** @constructor */
function $c_sc_View$DistinctBy(underlying, f) {
  this.hG = null;
  this.nZ = null;
  this.hG = underlying;
  this.nZ = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.m = (function() {
  var this$1 = this.hG.m();
  return new $c_sc_Iterator$$anon$8(this.nZ, this$1);
});
$p.w = (function() {
  return ((this.hG.w() === 0) ? 0 : (-1));
});
$p.e = (function() {
  return this.hG.e();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  hz: 1,
  ae: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  a: 1,
  a6: 1
}));
function $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f) {
  return $thiz;
}
/** @constructor */
function $c_sc_View$Map() {
}
$p = $c_sc_View$Map.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $p;
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1() {
  this.bu = null;
  this.bC = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "en", "English", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return "English";
});
$p.g = (function() {
  return "English";
});
$p.k = (function() {
  return $f_T__hashCode__I("English");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$1", ({
  dw: 1,
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10() {
  this.bu = null;
  this.bC = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "la", "Latin", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return "Latin";
});
$p.g = (function() {
  return "Latin";
});
$p.k = (function() {
  return $f_T__hashCode__I("Latin");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$10", ({
  dx: 1,
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11() {
  this.bu = null;
  this.bC = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "he", "Hebrew", true, $m_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return "Hebrew";
});
$p.g = (function() {
  return "Hebrew";
});
$p.k = (function() {
  return $f_T__hashCode__I("Hebrew");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$11", ({
  dy: 1,
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12() {
  this.bu = null;
  this.bC = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "auto", "Auto", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return "Auto";
});
$p.g = (function() {
  return "Auto";
});
$p.k = (function() {
  return $f_T__hashCode__I("Auto");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$12", ({
  dz: 1,
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2() {
  this.bu = null;
  this.bC = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "ru", "Russian", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return "Russian";
});
$p.g = (function() {
  return "Russian";
});
$p.k = (function() {
  return $f_T__hashCode__I("Russian");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$2", ({
  dA: 1,
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3() {
  this.bu = null;
  this.bC = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "fr", "French", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return "French";
});
$p.g = (function() {
  return "French";
});
$p.k = (function() {
  return $f_T__hashCode__I("French");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$3", ({
  dB: 1,
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4() {
  this.bu = null;
  this.bC = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "de", "German", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return "German";
});
$p.g = (function() {
  return "German";
});
$p.k = (function() {
  return $f_T__hashCode__I("German");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$4", ({
  dC: 1,
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5() {
  this.bu = null;
  this.bC = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "es", "Spanish", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return "Spanish";
});
$p.g = (function() {
  return "Spanish";
});
$p.k = (function() {
  return $f_T__hashCode__I("Spanish");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$5", ({
  dD: 1,
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6() {
  this.bu = null;
  this.bC = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "ja", "Japanese", false, $m_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return "Japanese";
});
$p.g = (function() {
  return "Japanese";
});
$p.k = (function() {
  return $f_T__hashCode__I("Japanese");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$6", ({
  dE: 1,
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7() {
  this.bu = null;
  this.bC = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "zh", "Chinese", false, $m_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return "Chinese";
});
$p.g = (function() {
  return "Chinese";
});
$p.k = (function() {
  return $f_T__hashCode__I("Chinese");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$7", ({
  dF: 1,
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8() {
  this.bu = null;
  this.bC = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "ar", "Arabic", true, $m_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return "Arabic";
});
$p.g = (function() {
  return "Arabic";
});
$p.k = (function() {
  return $f_T__hashCode__I("Arabic");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$8", ({
  dG: 1,
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9() {
  this.bu = null;
  this.bC = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "fa", "Farsi", true, $m_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9.prototype = $p;
$p.A = (function() {
  return 0;
});
$p.B = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.C = (function() {
  return "Farsi";
});
$p.g = (function() {
  return "Farsi";
});
$p.k = (function() {
  return $f_T__hashCode__I("Farsi");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$9", ({
  dH: 1,
  Y: 1,
  P: 1,
  b: 1,
  j: 1,
  a: 1,
  I: 1,
  X: 1,
  w: 1,
  z: 1,
  A: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.is = ($thiz.dj !== null);
  $thiz.hh = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.dj);
  if ($thiz.is) {
    var newParentLastUpdateId = $thiz.dj.fl();
    if ((newParentLastUpdateId !== $thiz.hh)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.k5(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.hh = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.is) {
    $thiz.hh = $thiz.dj.fl();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.dj, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.dj, $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_eventbus_EventBusStream(parentDisplayName) {
  this.l5 = null;
  this.l4 = false;
  this.l6 = null;
  this.l2 = null;
  this.l3 = null;
  this.l9 = false;
  this.l7 = null;
  this.hg = null;
  this.l8 = 0;
  this.l7 = parentDisplayName;
  this.l5 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hg = $m_Lcom_raquo_ew_JsArray$().bk($m_sr_ScalaRunTime$().bd(new ($d_Lcom_raquo_airstream_core_EventStream.r().C)([])));
  this.l8 = 1;
}
$p = $c_Lcom_raquo_airstream_eventbus_EventBusStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_eventbus_EventBusStream;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_EventBusStream() {
}
$h_Lcom_raquo_airstream_eventbus_EventBusStream.prototype = $p;
$p.cP = (function() {
  return this.l5;
});
$p.g = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ft = (function() {
  return this.l4;
});
$p.e4 = (function() {
  return this.l6;
});
$p.cw = (function(x$1) {
  this.l4 = x$1;
});
$p.fv = (function(x$1) {
  this.l6 = x$1;
});
$p.i = (function(obj) {
  return (this === obj);
});
$p.k = (function() {
  return $systemIdentityHashCode(this);
});
$p.gQ = (function(observer) {
});
$p.cL = (function() {
  return this.l2;
});
$p.cN = (function() {
  return this.l3;
});
$p.h8 = (function() {
  return this.l9;
});
$p.eL = (function(x$1) {
  this.l9 = x$1;
});
$p.gG = (function(x$0) {
  this.l2 = x$0;
});
$p.gH = (function(x$0) {
  this.l3 = x$0;
});
$p.fy = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eH = (function() {
  return this.l8;
});
$p.fx = (function(nextValue, ignoredTransaction) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, _$1);
  })));
});
$p.fw = (function(nextError, transaction) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, _$2);
  })));
});
$p.gV = (function() {
  var arr = this.hg;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(arr[i]);
    i = ((1 + i) | 0);
  }
});
$p.gT = (function() {
  var arr = this.hg;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(arr[i], this, false);
    i = ((1 + i) | 0);
  }
});
$p.gU = (function() {
  var arr = this.hg;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(arr[i], this);
    i = ((1 + i) | 0);
  }
});
$p.cJ = (function() {
  return (this.l7.M() + ".events");
});
$p.eG = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_eventbus_EventBusStream = new $TypeData().i($c_Lcom_raquo_airstream_eventbus_EventBusStream, "com.raquo.airstream.eventbus.EventBusStream", ({
  e9: 1,
  ah: 1,
  a2: 1,
  aq: 1,
  ar: 1,
  aC: 1,
  aJ: 1,
  aD: 1,
  aY: 1,
  aB: 1,
  bE: 1
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
$p.tP = (function(that) {
  return this.fp(that);
});
$p.i = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.bp = (function() {
  return "Set";
});
$p.g = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.c = (function(v1) {
  return this.bA(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.aV() === o.aV())) {
      try {
        return $thiz.fp(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((map$1) => ((kv$2) => $m_sr_BoxesRunTime$().p(map$1.dg(kv$2.aS(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sc_Map$().nW.M()))), kv$2.aJ())))(o)));
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.ai)));
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
function $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, _fun, _ec, _arg, _xform) {
  $thiz.hM = _fun;
  $thiz.go = _ec;
  $thiz.gn = _arg;
  $thiz.gp = _xform;
  $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz);
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__($thiz, xform, f, ec) {
  $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, f, ec, null, xform);
  return $thiz;
}
function $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V($thiz, t, e) {
  if ((false || $m_s_util_control_NonFatal$().hW(t))) {
    var completed = $thiz.eI($thiz.P, $m_s_concurrent_impl_Promise$().h2(new $c_s_util_Failure(t)));
    if (((($thiz.gp === 5) || ($thiz.gp === 6)) || (!completed))) {
      e.kJ(t);
    }
  } else {
    var $x_1 = t;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.T : $x_1);
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$Transformation() {
  this.P = null;
  this.hM = null;
  this.go = null;
  this.gn = null;
  this.gp = 0;
}
$p = $c_s_concurrent_impl_Promise$Transformation.prototype = new $h_s_concurrent_impl_Promise$DefaultPromise();
$p.constructor = $c_s_concurrent_impl_Promise$Transformation;
/** @constructor */
function $h_s_concurrent_impl_Promise$Transformation() {
}
$h_s_concurrent_impl_Promise$Transformation.prototype = $p;
$p.q0 = (function(resolved) {
  this.gn = resolved;
  var e = this.go;
  try {
    if ((e === null)) {
      $m_sr_Scala3RunTime$().ba();
    }
    e.kb(this);
  } catch (e$2) {
    var e$3 = ((e$2 instanceof $c_jl_Throwable) ? e$2 : new $c_sjs_js_JavaScriptException(e$2));
    this.hM = null;
    this.gn = null;
    this.go = null;
    if ((e === null)) {
      $m_sr_Scala3RunTime$().ba();
    }
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$3, e);
  }
  return this;
});
$p.eC = (function() {
  var x$proxy4 = this.gn;
  if ((x$proxy4 === null)) {
    $m_sr_Scala3RunTime$().ba();
  }
  var x$proxy5 = this.hM;
  if ((x$proxy5 === null)) {
    $m_sr_Scala3RunTime$().ba();
  }
  var x$proxy6 = this.go;
  if ((x$proxy6 === null)) {
    $m_sr_Scala3RunTime$().ba();
  }
  this.hM = null;
  this.gn = null;
  this.go = null;
  try {
    var resolvedResult;
    switch (this.gp) {
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
            f.kx(this, null);
          } else {
            this.k2(f);
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
          f$2.kx(this, null);
        } else {
          this.k2(f$2);
        }
        var resolvedResult = null;
        break;
      }
      case 5: {
        x$proxy4.bl(x$proxy5);
        var resolvedResult = null;
        break;
      }
      case 6: {
        x$proxy5.c(x$proxy4);
        var resolvedResult = null;
        break;
      }
      case 7: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Failure) ? $m_s_concurrent_impl_Promise$().h2(x$proxy4.pO(x$proxy5)) : x$proxy4);
        break;
      }
      case 8: {
        if ((x$proxy4 instanceof $c_s_util_Failure)) {
          var f$3 = x$proxy5.cd(x$proxy4.dd, $m_s_concurrent_Future$().ou);
          var resolvedResult = ((f$3 !== $m_s_concurrent_Future$().jK) ? (((f$3 instanceof $c_s_concurrent_impl_Promise$DefaultPromise) ? f$3.kx(this, null) : this.k2(f$3)), null) : x$proxy4);
        } else {
          var resolvedResult = x$proxy4;
        }
        break;
      }
      case 9: {
        var resolvedResult = (((x$proxy4 instanceof $c_s_util_Failure) || (!(!x$proxy5.c(x$proxy4.x())))) ? x$proxy4 : $m_s_concurrent_Future$().ot);
        break;
      }
      case 10: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Success) ? new $c_s_util_Success(x$proxy5.cd(x$proxy4.x(), $m_s_concurrent_Future$().or)) : x$proxy4);
        break;
      }
      default: {
        var resolvedResult = new $c_s_util_Failure($ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ("BUG: encountered transformation promise with illegal type: " + this.gp)));
      }
    }
    if ((resolvedResult !== null)) {
      this.eI(this.P, resolvedResult);
    }
  } catch (e) {
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)), x$proxy6);
  }
});
function $isArrayOf_s_concurrent_impl_Promise$Transformation(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d2)));
}
var $d_s_concurrent_impl_Promise$Transformation = new $TypeData().i($c_s_concurrent_impl_Promise$Transformation, "scala.concurrent.impl.Promise$Transformation", ({
  d2: 1,
  bp: 1,
  b7: 1,
  a: 1,
  cZ: 1,
  cW: 1,
  cY: 1,
  f: 1,
  aS: 1,
  b5: 1,
  iY: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.lh = null;
  this.lg = false;
  this.li = null;
  this.ld = null;
  this.lf = null;
  this.lk = false;
  this.ip = null;
  this.le = null;
  this.lj = 0;
  this.ip = parent;
  this.le = fn;
  this.lh = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.lj = ((1 + parent.eH()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.cP = (function() {
  return this.lh;
});
$p.cJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.g = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ft = (function() {
  return this.lg;
});
$p.e4 = (function() {
  return this.li;
});
$p.cw = (function(x$1) {
  this.lg = x$1;
});
$p.fv = (function(x$1) {
  this.li = x$1;
});
$p.i = (function(obj) {
  return (this === obj);
});
$p.k = (function() {
  return $systemIdentityHashCode(this);
});
$p.gQ = (function(observer) {
});
$p.cL = (function() {
  return this.ld;
});
$p.cN = (function() {
  return this.lf;
});
$p.h8 = (function() {
  return this.lk;
});
$p.eL = (function(x$1) {
  this.lk = x$1;
});
$p.gG = (function(x$0) {
  this.ld = x$0;
});
$p.gH = (function(x$0) {
  this.lf = x$0;
});
$p.gV = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.ip);
});
$p.gT = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.gU = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.fy = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eH = (function() {
  return this.lj;
});
$p.fx = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.le.c(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchResult1: {
      var $x_1;
      var x2 = $m_s_util_control_NonFatal$().fB(e$2);
      if ((!x2.e())) {
        var $x_1 = new $c_s_util_Failure(x2.x());
        break matchResult1;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
    }
  }
  $x_1.bZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
    if ((!nextValue.e())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.x(), transaction);
    }
  })));
});
$p.fw = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.kF = (function() {
  return this.ip;
});
$p.eG = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  eb: 1,
  ah: 1,
  a2: 1,
  aq: 1,
  ar: 1,
  aC: 1,
  aJ: 1,
  aD: 1,
  aY: 1,
  aB: 1,
  bG: 1,
  bE: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.lo = null;
  this.ln = false;
  this.lp = null;
  this.iq = 0;
  this.ll = null;
  this.lm = null;
  this.lr = false;
  this.ir = null;
  this.is = false;
  this.hh = 0;
  this.dj = null;
  this.it = null;
  this.iu = null;
  this.lq = 0;
  this.dj = parent;
  this.it = project;
  this.iu = recover;
  this.lo = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.iq = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.ir = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.lq = ((1 + parent.eH()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.cP = (function() {
  return this.lo;
});
$p.cJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.g = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ft = (function() {
  return this.ln;
});
$p.e4 = (function() {
  return this.lp;
});
$p.cw = (function(x$1) {
  this.ln = x$1;
});
$p.fv = (function(x$1) {
  this.lp = x$1;
});
$p.i = (function(obj) {
  return (this === obj);
});
$p.k = (function() {
  return $systemIdentityHashCode(this);
});
$p.fl = (function() {
  return this.iq;
});
$p.jP = (function(x$1) {
  this.iq = x$1;
});
$p.gQ = (function(observer) {
  observer.e5($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cL = (function() {
  return this.ll;
});
$p.cN = (function() {
  return this.lm;
});
$p.h8 = (function() {
  return this.lr;
});
$p.eL = (function(x$1) {
  this.lr = x$1;
});
$p.gG = (function(x$0) {
  this.ll = x$0;
});
$p.gH = (function(x$0) {
  this.lm = x$0;
});
$p.kA = (function() {
  return this.ir;
});
$p.pG = (function(x$1) {
  this.ir = x$1;
});
$p.ih = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.fx = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.fw = (function(nextError, transaction) {
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
$p.eH = (function() {
  return this.lq;
});
$p.fy = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.bZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.iu;
    if (this$2.e()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.x();
      try {
        var $x_1 = new $c_s_util_Success(x0.cd(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchResult1: {
          var $x_1;
          var x2 = $m_s_util_control_NonFatal$().fB(e$2);
          if ((!x2.e())) {
            var $x_1 = new $c_s_util_Failure(x2.x());
            break matchResult1;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
        }
      }
      $x_1.bZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.e())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.x(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.kz(this.it), transaction);
  })));
});
$p.k5 = (function() {
  var originalValue = this.dj.ih().kz(this.it);
  return originalValue.bZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.iu;
    if (this$2.e()) {
      return originalValue;
    } else {
      var x0 = this$2.x();
      try {
        var $x_1 = new $c_s_util_Success(x0.cd(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchResult1: {
          var $x_1;
          var x2 = $m_s_util_control_NonFatal$().fB(e$2);
          if ((!x2.e())) {
            var $x_1 = new $c_s_util_Failure(x2.x());
            break matchResult1;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.T : e$2);
        }
      }
      return $x_1.bZ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$10 = (nextValue.e() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.x())));
          return (this$10.e() ? originalValue : this$10.x());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$6) => originalValue)));
});
$p.eG = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  ec: 1,
  ah: 1,
  a2: 1,
  aq: 1,
  ar: 1,
  aX: 1,
  bL: 1,
  aD: 1,
  bM: 1,
  aB: 1,
  bF: 1,
  dX: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_StreamFromSignal(parent, changesOnly) {
  this.lw = null;
  this.lv = false;
  this.lx = null;
  this.lt = null;
  this.lu = null;
  this.lz = false;
  this.eb = null;
  this.ls = false;
  this.ly = 0;
  this.fT = 0;
  this.hi = false;
  this.eb = parent;
  this.ls = changesOnly;
  this.lw = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.ly = ((1 + parent.eH()) | 0);
  this.fT = 0;
  this.hi = true;
}
$p = $c_Lcom_raquo_airstream_misc_StreamFromSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_StreamFromSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_StreamFromSignal() {
}
$h_Lcom_raquo_airstream_misc_StreamFromSignal.prototype = $p;
$p.cP = (function() {
  return this.lw;
});
$p.cJ = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.g = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ft = (function() {
  return this.lv;
});
$p.e4 = (function() {
  return this.lx;
});
$p.cw = (function(x$1) {
  this.lv = x$1;
});
$p.fv = (function(x$1) {
  this.lx = x$1;
});
$p.i = (function(obj) {
  return (this === obj);
});
$p.k = (function() {
  return $systemIdentityHashCode(this);
});
$p.gQ = (function(observer) {
});
$p.cL = (function() {
  return this.lt;
});
$p.cN = (function() {
  return this.lu;
});
$p.h8 = (function() {
  return this.lz;
});
$p.eL = (function(x$1) {
  this.lz = x$1;
});
$p.gG = (function(x$0) {
  this.lt = x$0;
});
$p.gH = (function(x$0) {
  this.lu = x$0;
});
$p.gV = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.eb);
});
$p.gU = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.fx = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.fw = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eH = (function() {
  return this.ly;
});
$p.gT = (function() {
  var newParentLastUpdateId = this.eb.fl();
  if ((this.hi && this.ls)) {
    this.fT = newParentLastUpdateId;
  } else if ((newParentLastUpdateId !== this.fT)) {
    $m_Lcom_raquo_airstream_core_Transaction$onStart$().qJ(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
      if ($f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this)) {
        $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, this.eb.ih(), trx);
        this.fT = this.eb.fl();
      }
    })));
  }
  this.hi = false;
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.fy = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
  this.fT = this.eb.fl();
  this.hi = false;
});
$p.kF = (function() {
  return this.eb;
});
$p.eG = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_StreamFromSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_StreamFromSignal, "com.raquo.airstream.misc.StreamFromSignal", ({
  ed: 1,
  ah: 1,
  a2: 1,
  aq: 1,
  ar: 1,
  aC: 1,
  aJ: 1,
  aD: 1,
  aY: 1,
  aB: 1,
  bG: 1,
  bF: 1
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
$p.cd = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cu = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.kt = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.b9 = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.e = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.eD = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.gF = (function(that) {
  return true;
});
$p.i = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().pW(this);
});
$p.g = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.cO = (function(x) {
  return this.kt((x | 0));
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
$p.cu = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.b9 = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.e = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bp = (function() {
  return "SeqView";
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.r)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.r)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aF)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
}
function $f_scm_CheckedIndexedSeqView__iterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.hJ.M() | 0))));
}
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  $thiz.qg = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
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
$p.cd = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.ew = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.cO = (function(key) {
  return this.bA(key);
});
$p.dV = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
$p.fq = (function(coll) {
  return this.pF().aq(coll);
});
$p.i = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().sS(this);
});
$p.bp = (function() {
  return "Map";
});
$p.g = (function() {
  return $f_sc_Iterable__toString__T(this);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.ek = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.ek = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.t = (function(idx) {
  return this.ek.t(idx);
});
$p.n = (function() {
  return this.ek.n();
});
$p.m = (function() {
  return this.ek.m();
});
$p.w = (function() {
  return this.ek.w();
});
$p.e = (function() {
  return this.ek.e();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  ci: 1,
  au: 1,
  ae: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  a: 1,
  a6: 1,
  l: 1,
  an: 1
}));
function $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f) {
  $thiz.hF = underlying;
  $thiz.jn = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.hF = null;
  this.jn = null;
}
$p = $c_sc_SeqView$Map.prototype = new $h_sc_View$Map();
$p.constructor = $c_sc_SeqView$Map;
/** @constructor */
function $h_sc_SeqView$Map() {
}
$h_sc_SeqView$Map.prototype = $p;
$p.cu = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.e = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.t = (function(idx) {
  return this.jn.c(this.hF.t(idx));
});
$p.n = (function() {
  return this.hF.n();
});
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.mp = null;
  this.mq = false;
  this.mn = null;
  this.mo = false;
  this.m0 = null;
  this.m1 = false;
  this.mj = null;
  this.mk = false;
  this.m7 = null;
  this.m8 = false;
  this.mb = null;
  this.mc = false;
  this.m2 = null;
  this.m3 = false;
  this.mx = null;
  this.my = false;
  this.mf = null;
  this.mg = false;
  this.md = null;
  this.me = false;
  this.mh = null;
  this.mi = false;
  this.m5 = null;
  this.m6 = false;
  this.m9 = null;
  this.ma = false;
  this.ml = null;
  this.mm = false;
  this.mt = null;
  this.mu = false;
  this.mz = null;
  this.mA = false;
  this.m4 = null;
  this.bv = null;
  this.hm = null;
  this.qf = null;
  this.lY = null;
  this.lZ = false;
  this.mr = null;
  this.ms = false;
  this.mv = null;
  this.mw = false;
  this.qg = null;
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
$p.tN = (function() {
  if ((!this.mq)) {
    this.mp = new $c_Lcom_raquo_laminar_tags_HtmlTag("strong", false);
    this.mq = true;
  }
  return this.mp;
});
$p.pY = (function() {
  if ((!this.mo)) {
    this.mn = new $c_Lcom_raquo_laminar_tags_HtmlTag("span", false);
    this.mo = true;
  }
  return this.mn;
});
$p.hY = (function() {
  if ((!this.m1)) {
    this.m0 = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.m1 = true;
  }
  return this.m0;
});
$p.gW = (function() {
  if ((!this.mk)) {
    this.mj = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.mk = true;
  }
  return this.mj;
});
$p.cK = (function() {
  if ((!this.m8)) {
    this.m7 = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.m8 = true;
  }
  return this.m7;
});
$p.sT = (function() {
  if ((!this.mc)) {
    this.mb = new $c_Lcom_raquo_laminar_tags_HtmlTag("mark", false);
    this.mc = true;
  }
  return this.mb;
});
$p.rh = (function() {
  if ((!this.m3)) {
    this.m2 = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().mB);
    this.m3 = true;
  }
  return this.m2;
});
$p.qb = (function() {
  if ((!this.my)) {
    this.mx = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().hn);
    this.my = true;
  }
  return this.mx;
});
$p.gR = (function() {
  if ((!this.mg)) {
    this.mf = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.mg = true;
  }
  return this.mf;
});
$p.t3 = (function() {
  if ((!this.me)) {
    this.md = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.me = true;
  }
  return this.md;
});
$p.kE = (function() {
  if ((!this.mi)) {
    this.mh = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.mi = true;
  }
  return this.mh;
});
$p.rJ = (function() {
  if ((!this.m6)) {
    this.m5 = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28("display");
    this.m6 = true;
  }
  return this.m5;
});
$p.sJ = (function() {
  if ((!this.ma)) {
    this.m9 = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("left");
    this.ma = true;
  }
  return this.m9;
});
$p.t6 = (function() {
  if ((!this.mm)) {
    this.ml = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43("position");
    this.mm = true;
  }
  return this.ml;
});
$p.tX = (function() {
  if ((!this.mu)) {
    this.mt = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("top");
    this.mu = true;
  }
  return this.mt;
});
$p.u7 = (function() {
  if ((!this.mA)) {
    this.mz = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1("z-index");
    this.mA = true;
  }
  return this.mz;
});
$p.qI = (function() {
  if ((!this.lZ)) {
    this.lY = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.lZ = true;
  }
  return this.lY;
});
$p.tQ = (function() {
  if ((!this.ms)) {
    this.mr = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.ms = true;
  }
  return this.mr;
});
$p.u3 = (function() {
  if ((!this.mw)) {
    this.mv = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.mw = true;
  }
  return this.mv;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  eC: 1,
  eV: 1,
  eF: 1,
  eK: 1,
  eJ: 1,
  eL: 1,
  eH: 1,
  eA: 1,
  ev: 1,
  ez: 1,
  bP: 1,
  bS: 1,
  bO: 1,
  ew: 1
}));
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aj)));
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
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
$p.b9 = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.n();
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.ie = (function(from, until) {
  return new $c_sc_IndexedSeqView$Slice(this, from, until);
});
$p.bp = (function() {
  return "IndexedSeqView";
});
$p.c0 = (function(from, until) {
  return this.ie(from, until);
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.ek = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.b9 = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.n();
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bp = (function() {
  return "IndexedSeqView";
});
$p.c0 = (function(from, until) {
  return new $c_sc_IndexedSeqView$Slice(this, from, until);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  hc: 1,
  ci: 1,
  au: 1,
  ae: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  a: 1,
  a6: 1,
  l: 1,
  an: 1,
  o: 1,
  av: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Map(underlying, f) {
  this.hF = null;
  this.jn = null;
  $ct_sc_SeqView$Map__sc_SeqOps__F1__(this, underlying, f);
}
$p = $c_sc_IndexedSeqView$Map.prototype = new $h_sc_SeqView$Map();
$p.constructor = $c_sc_IndexedSeqView$Map;
/** @constructor */
function $h_sc_IndexedSeqView$Map() {
}
$h_sc_IndexedSeqView$Map.prototype = $p;
$p.b9 = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.n();
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bp = (function() {
  return "IndexedSeqView";
});
$p.c0 = (function(from, until) {
  return new $c_sc_IndexedSeqView$Slice(this, from, until);
});
var $d_sc_IndexedSeqView$Map = new $TypeData().i($c_sc_IndexedSeqView$Map, "scala.collection.IndexedSeqView$Map", ({
  hd: 1,
  hr: 1,
  hA: 1,
  ae: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  a: 1,
  a6: 1,
  l: 1,
  an: 1,
  o: 1,
  av: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Slice(underlying, from, until) {
  this.nO = null;
  this.jk = 0;
  this.nM = 0;
  this.nN = 0;
  this.nO = underlying;
  this.jk = ((from > 0) ? from : 0);
  var x = ((until > 0) ? until : 0);
  var that = underlying.n();
  this.nM = ((x < that) ? x : that);
  var x$1 = ((this.nM - this.jk) | 0);
  this.nN = ((x$1 > 0) ? x$1 : 0);
}
$p = $c_sc_IndexedSeqView$Slice.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_sc_IndexedSeqView$Slice;
/** @constructor */
function $h_sc_IndexedSeqView$Slice() {
}
$h_sc_IndexedSeqView$Slice.prototype = $p;
$p.t = (function(i) {
  return this.nO.t(((this.jk + i) | 0));
});
$p.n = (function() {
  return this.nN;
});
var $d_sc_IndexedSeqView$Slice = new $TypeData().i($c_sc_IndexedSeqView$Slice, "scala.collection.IndexedSeqView$Slice", ({
  he: 1,
  aQ: 1,
  au: 1,
  ae: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  a: 1,
  a6: 1,
  l: 1,
  an: 1,
  o: 1,
  av: 1
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
  this.jB = null;
  this.jA = null;
  this.jB = underlying;
  this.jA = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.t = (function(n) {
  return this.jB.t(n);
});
$p.n = (function() {
  return this.jB.b8;
});
$p.bY = (function() {
  return "ArrayBufferView";
});
$p.m = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.jA);
});
$p.ie = (function(from, until) {
  return new $c_scm_CheckedIndexedSeqView$Slice(this, from, until, this.jA);
});
$p.c0 = (function(from, until) {
  return this.ie(from, until);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  iy: 1,
  aQ: 1,
  au: 1,
  ae: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  a: 1,
  a6: 1,
  l: 1,
  an: 1,
  o: 1,
  av: 1
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
$p.bo = (function() {
  return $m_sci_Iterable$();
});
$p.pF = (function() {
  return $m_sci_Map$();
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ($is_sci_IndexedSeq(that) ? ($thiz.n() === that.n()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.n();
      var equal = (length === o.n());
      if (equal) {
        var index = 0;
        var a = $thiz.gE();
        var b = o.gE();
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
          equal = $m_sr_BoxesRunTime$().p($thiz.t(index), o.t(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.m().e1(index);
          var thatIt = o.m().e1(index);
          while ((equal && thisIt.o())) {
            equal = $m_sr_BoxesRunTime$().p(thisIt.l(), thatIt.l());
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
/** @constructor */
function $c_scm_CheckedIndexedSeqView$Slice(underlying, from, until, mutationCount) {
  this.oj = null;
  this.hJ = null;
  this.jF = 0;
  this.oh = 0;
  this.oi = 0;
  this.oj = underlying;
  this.hJ = mutationCount;
  this.jF = ((from > 0) ? from : 0);
  var x = ((until > 0) ? until : 0);
  var that = underlying.n();
  this.oh = ((x < that) ? x : that);
  var x$1 = ((this.oh - this.jF) | 0);
  this.oi = ((x$1 > 0) ? x$1 : 0);
}
$p = $c_scm_CheckedIndexedSeqView$Slice.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_CheckedIndexedSeqView$Slice;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Slice() {
}
$h_scm_CheckedIndexedSeqView$Slice.prototype = $p;
$p.m = (function() {
  return $f_scm_CheckedIndexedSeqView__iterator__sc_Iterator(this);
});
$p.ie = (function(from, until) {
  return new $c_scm_CheckedIndexedSeqView$Slice(this, from, until, this.hJ);
});
$p.t = (function(i) {
  return this.oj.t(((this.jF + i) | 0));
});
$p.n = (function() {
  return this.oi;
});
$p.c0 = (function(from, until) {
  return new $c_scm_CheckedIndexedSeqView$Slice(this, from, until, this.hJ);
});
var $d_scm_CheckedIndexedSeqView$Slice = new $TypeData().i($c_scm_CheckedIndexedSeqView$Slice, "scala.collection.mutable.CheckedIndexedSeqView$Slice", ({
  iH: 1,
  aQ: 1,
  au: 1,
  ae: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  a: 1,
  a6: 1,
  l: 1,
  an: 1,
  o: 1,
  av: 1,
  iF: 1
}));
/** @constructor */
function $c_sc_StringView(s) {
  this.el = null;
  this.el = s;
}
$p = $c_sc_StringView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_sc_StringView;
/** @constructor */
function $h_sc_StringView() {
}
$h_sc_StringView.prototype = $p;
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().bP(this, (-351294208), true);
});
$p.i = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_sc_StringView) && (this.el === x$0.el)));
});
$p.A = (function() {
  return 1;
});
$p.C = (function() {
  return "StringView";
});
$p.B = (function(n) {
  if ((n === 0)) {
    return this.el;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.n = (function() {
  return this.el.length;
});
$p.g = (function() {
  return (("StringView(" + this.el) + ")");
});
$p.t = (function(i) {
  return $bC(this.el.charCodeAt(i));
});
function $isArrayOf_sc_StringView(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cl)));
}
var $d_sc_StringView = new $TypeData().i($c_sc_StringView, "scala.collection.StringView", ({
  cl: 1,
  aQ: 1,
  au: 1,
  ae: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  a: 1,
  a6: 1,
  l: 1,
  an: 1,
  o: 1,
  av: 1,
  b: 1,
  j: 1
}));
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ia)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ib)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ic)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.id)));
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
$p.aV = (function() {
  return 0;
});
$p.w = (function() {
  return 0;
});
$p.e = (function() {
  return true;
});
$p.jV = (function(key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
});
$p.bA = (function(key) {
  return false;
});
$p.dg = (function(key, default$1) {
  return default$1.M();
});
$p.m = (function() {
  return $m_sc_Iterator$().W;
});
$p.c = (function(key) {
  this.jV(key);
});
$p.e8 = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  hW: 1,
  az: 1,
  at: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  ax: 1,
  aw: 1,
  b: 1,
  ai: 1,
  u: 1,
  aA: 1,
  aj: 1,
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
  this.cG = null;
  this.eo = null;
  this.cG = key1;
  this.eo = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.aV = (function() {
  return 1;
});
$p.w = (function() {
  return 1;
});
$p.e = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().p(key, this.cG)) {
    return this.eo;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bA = (function(key) {
  return $m_sr_BoxesRunTime$().p(key, this.cG);
});
$p.dg = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().p(key, this.cG) ? this.eo : default$1.M());
});
$p.m = (function() {
  return new $c_sc_Iterator$$anon$20($ct_T2__O__O__(new $c_T2(), this.cG, this.eo));
});
$p.eJ = (function(key, value) {
  return ($m_sr_BoxesRunTime$().p(key, this.cG) ? new $c_sci_Map$Map1(this.cG, value) : new $c_sci_Map$Map2(this.cG, this.eo, key, value));
});
$p.fp = (function(p) {
  return (!(!p.c($ct_T2__O__O__(new $c_T2(), this.cG, this.eo))));
});
$p.k = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cA(this.cG, this.eo);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dU;
  h = $m_s_util_hashing_MurmurHash3$().y(h, a);
  h = $m_s_util_hashing_MurmurHash3$().y(h, b);
  h = $m_s_util_hashing_MurmurHash3$().di(h, c);
  return $m_s_util_hashing_MurmurHash3$().aG(h, 1);
});
$p.e8 = (function(key, value) {
  return this.eJ(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cB)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  cB: 1,
  az: 1,
  at: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  ax: 1,
  aw: 1,
  b: 1,
  ai: 1,
  u: 1,
  aA: 1,
  aj: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.ck = null;
  this.dA = null;
  this.cl = null;
  this.dB = null;
  this.ck = key1;
  this.dA = value1;
  this.cl = key2;
  this.dB = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.aV = (function() {
  return 2;
});
$p.w = (function() {
  return 2;
});
$p.e = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().p(key, this.ck)) {
    return this.dA;
  } else if ($m_sr_BoxesRunTime$().p(key, this.cl)) {
    return this.dB;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bA = (function(key) {
  return ($m_sr_BoxesRunTime$().p(key, this.ck) || $m_sr_BoxesRunTime$().p(key, this.cl));
});
$p.dg = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().p(key, this.ck) ? this.dA : ($m_sr_BoxesRunTime$().p(key, this.cl) ? this.dB : default$1.M()));
});
$p.m = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.eJ = (function(key, value) {
  return ($m_sr_BoxesRunTime$().p(key, this.ck) ? new $c_sci_Map$Map2(this.ck, value, this.cl, this.dB) : ($m_sr_BoxesRunTime$().p(key, this.cl) ? new $c_sci_Map$Map2(this.ck, this.dA, this.cl, value) : new $c_sci_Map$Map3(this.ck, this.dA, this.cl, this.dB, key, value)));
});
$p.fp = (function(p) {
  return ((!(!p.c($ct_T2__O__O__(new $c_T2(), this.ck, this.dA)))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.cl, this.dB)))));
});
$p.k = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cA(this.ck, this.dA);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cA(this.cl, this.dB);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dU;
  h = $m_s_util_hashing_MurmurHash3$().y(h, a);
  h = $m_s_util_hashing_MurmurHash3$().y(h, b);
  h = $m_s_util_hashing_MurmurHash3$().di(h, c);
  return $m_s_util_hashing_MurmurHash3$().aG(h, 2);
});
$p.e8 = (function(key, value) {
  return this.eJ(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cC)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  cC: 1,
  az: 1,
  at: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  ax: 1,
  aw: 1,
  b: 1,
  ai: 1,
  u: 1,
  aA: 1,
  aj: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.c5 = null;
  this.d1 = null;
  this.c6 = null;
  this.d2 = null;
  this.c7 = null;
  this.d3 = null;
  this.c5 = key1;
  this.d1 = value1;
  this.c6 = key2;
  this.d2 = value2;
  this.c7 = key3;
  this.d3 = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.aV = (function() {
  return 3;
});
$p.w = (function() {
  return 3;
});
$p.e = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().p(key, this.c5)) {
    return this.d1;
  } else if ($m_sr_BoxesRunTime$().p(key, this.c6)) {
    return this.d2;
  } else if ($m_sr_BoxesRunTime$().p(key, this.c7)) {
    return this.d3;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bA = (function(key) {
  return (($m_sr_BoxesRunTime$().p(key, this.c5) || $m_sr_BoxesRunTime$().p(key, this.c6)) || $m_sr_BoxesRunTime$().p(key, this.c7));
});
$p.dg = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().p(key, this.c5) ? this.d1 : ($m_sr_BoxesRunTime$().p(key, this.c6) ? this.d2 : ($m_sr_BoxesRunTime$().p(key, this.c7) ? this.d3 : default$1.M())));
});
$p.m = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.eJ = (function(key, value) {
  return ($m_sr_BoxesRunTime$().p(key, this.c5) ? new $c_sci_Map$Map3(this.c5, value, this.c6, this.d2, this.c7, this.d3) : ($m_sr_BoxesRunTime$().p(key, this.c6) ? new $c_sci_Map$Map3(this.c5, this.d1, this.c6, value, this.c7, this.d3) : ($m_sr_BoxesRunTime$().p(key, this.c7) ? new $c_sci_Map$Map3(this.c5, this.d1, this.c6, this.d2, this.c7, value) : new $c_sci_Map$Map4(this.c5, this.d1, this.c6, this.d2, this.c7, this.d3, key, value))));
});
$p.fp = (function(p) {
  return (((!(!p.c($ct_T2__O__O__(new $c_T2(), this.c5, this.d1)))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.c6, this.d2))))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.c7, this.d3)))));
});
$p.k = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cA(this.c5, this.d1);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cA(this.c6, this.d2);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cA(this.c7, this.d3);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dU;
  h = $m_s_util_hashing_MurmurHash3$().y(h, a);
  h = $m_s_util_hashing_MurmurHash3$().y(h, b);
  h = $m_s_util_hashing_MurmurHash3$().di(h, c);
  return $m_s_util_hashing_MurmurHash3$().aG(h, 3);
});
$p.e8 = (function(key, value) {
  return this.eJ(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cD)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  cD: 1,
  az: 1,
  at: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  ax: 1,
  aw: 1,
  b: 1,
  ai: 1,
  u: 1,
  aA: 1,
  aj: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bH = null;
  this.cm = null;
  this.bI = null;
  this.cn = null;
  this.bJ = null;
  this.co = null;
  this.bK = null;
  this.cp = null;
  this.bH = key1;
  this.cm = value1;
  this.bI = key2;
  this.cn = value2;
  this.bJ = key3;
  this.co = value3;
  this.bK = key4;
  this.cp = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.aV = (function() {
  return 4;
});
$p.w = (function() {
  return 4;
});
$p.e = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().p(key, this.bH)) {
    return this.cm;
  } else if ($m_sr_BoxesRunTime$().p(key, this.bI)) {
    return this.cn;
  } else if ($m_sr_BoxesRunTime$().p(key, this.bJ)) {
    return this.co;
  } else if ($m_sr_BoxesRunTime$().p(key, this.bK)) {
    return this.cp;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bA = (function(key) {
  return ((($m_sr_BoxesRunTime$().p(key, this.bH) || $m_sr_BoxesRunTime$().p(key, this.bI)) || $m_sr_BoxesRunTime$().p(key, this.bJ)) || $m_sr_BoxesRunTime$().p(key, this.bK));
});
$p.dg = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().p(key, this.bH) ? this.cm : ($m_sr_BoxesRunTime$().p(key, this.bI) ? this.cn : ($m_sr_BoxesRunTime$().p(key, this.bJ) ? this.co : ($m_sr_BoxesRunTime$().p(key, this.bK) ? this.cp : default$1.M()))));
});
$p.m = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.eJ = (function(key, value) {
  return ($m_sr_BoxesRunTime$().p(key, this.bH) ? new $c_sci_Map$Map4(this.bH, value, this.bI, this.cn, this.bJ, this.co, this.bK, this.cp) : ($m_sr_BoxesRunTime$().p(key, this.bI) ? new $c_sci_Map$Map4(this.bH, this.cm, this.bI, value, this.bJ, this.co, this.bK, this.cp) : ($m_sr_BoxesRunTime$().p(key, this.bJ) ? new $c_sci_Map$Map4(this.bH, this.cm, this.bI, this.cn, this.bJ, value, this.bK, this.cp) : ($m_sr_BoxesRunTime$().p(key, this.bK) ? new $c_sci_Map$Map4(this.bH, this.cm, this.bI, this.cn, this.bJ, this.co, this.bK, value) : $m_sci_HashMap$().jr.fD(this.bH, this.cm).fD(this.bI, this.cn).fD(this.bJ, this.co).fD(this.bK, this.cp).fD(key, value)))));
});
$p.fp = (function(p) {
  return ((((!(!p.c($ct_T2__O__O__(new $c_T2(), this.bH, this.cm)))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bI, this.cn))))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bJ, this.co))))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bK, this.cp)))));
});
$p.rg = (function(builder) {
  return builder.eu(this.bH, this.cm).eu(this.bI, this.cn).eu(this.bJ, this.co).eu(this.bK, this.cp);
});
$p.k = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cA(this.bH, this.cm);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cA(this.bI, this.cn);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cA(this.bJ, this.co);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cA(this.bK, this.cp);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dU;
  h = $m_s_util_hashing_MurmurHash3$().y(h, a);
  h = $m_s_util_hashing_MurmurHash3$().y(h, b);
  h = $m_s_util_hashing_MurmurHash3$().di(h, c);
  return $m_s_util_hashing_MurmurHash3$().aG(h, 4);
});
$p.e8 = (function(key, value) {
  return this.eJ(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cE)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  cE: 1,
  az: 1,
  at: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  ax: 1,
  aw: 1,
  b: 1,
  ai: 1,
  u: 1,
  aA: 1,
  aj: 1,
  n: 1,
  a: 1
}));
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hI)));
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
$p.b7 = (function() {
  return this;
});
function $ct_sci_LazyList__O__($thiz, lazyState) {
  $thiz.bf = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : $m_sci_LazyList$Uninitialized$());
  $thiz.cF = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : lazyState);
  return $thiz;
}
function $ct_sci_LazyList__O__sci_LazyList__($thiz, head, tail) {
  $ct_sci_LazyList__O__($thiz, $m_sci_LazyList$EmptyMarker$());
  $thiz.bf = head;
  $thiz.cF = tail;
  return $thiz;
}
function $p_sci_LazyList__initState__V($thiz) {
  if (($thiz.bf === $m_sci_LazyList$Uninitialized$())) {
    if (($thiz.cF === $m_sci_LazyList$MidEvaluation$())) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    var fun = $thiz.cF;
    $thiz.cF = $m_sci_LazyList$MidEvaluation$();
    try {
      var l = $p_sci_LazyList__evaluated__sci_LazyList(fun.M());
    } finally {
      $thiz.cF = fun;
    }
    $thiz.cF = l.cF;
    $thiz.bf = l.bf;
  }
}
function $p_sci_LazyList__evaluated__sci_LazyList($thiz) {
  while (true) {
    if (($thiz.bf !== $m_sci_LazyList$Uninitialized$())) {
      return (($thiz.cF === null) ? $m_sci_LazyList$().X : $thiz);
    } else {
      $p_sci_LazyList__initState__V($thiz);
    }
  }
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (($p_sci_LazyList__evaluated__sci_LazyList($thiz) === $m_sci_LazyList$().X) ? $m_sci_LazyList$().X : ($m_sci_LazyList$(), $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), f.c($thiz.z()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.bc(), f)))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.r = (("" + b.r) + start);
  if (($thiz.bf === $m_sci_LazyList$Uninitialized$())) {
    b.r = (b.r + "<not computed>");
  } else if (($p_sci_LazyList__evaluated__sci_LazyList($thiz) !== $m_sci_LazyList$().X)) {
    var obj = $thiz.z();
    b.r = (("" + b.r) + obj);
    var cursor = $thiz;
    var scout = $thiz.bc();
    if ((cursor !== scout)) {
      cursor = scout;
      var this$1 = scout;
      if (((this$1.bf !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$1) !== $m_sci_LazyList$().X))) {
        scout = scout.bc();
        while (true) {
          if ((cursor !== scout)) {
            var this$2 = scout;
            var $x_1 = ((this$2.bf !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$2) !== $m_sci_LazyList$().X));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var c = cursor;
            b.r = (("" + b.r) + sep);
            var obj$1 = c.z();
            b.r = (("" + b.r) + obj$1);
            cursor = cursor.bc();
            scout = scout.bc();
            var this$3 = scout;
            if (((this$3.bf !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$3) !== $m_sci_LazyList$().X))) {
              scout = scout.bc();
            }
          } else {
            break;
          }
        }
      }
    }
    var this$4 = scout;
    if ((!((this$4.bf !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$4) !== $m_sci_LazyList$().X)))) {
      while ((cursor !== scout)) {
        var c$1 = cursor;
        b.r = (("" + b.r) + sep);
        var obj$2 = c$1.z();
        b.r = (("" + b.r) + obj$2);
        cursor = cursor.bc();
      }
      if ((!(cursor.bf !== $m_sci_LazyList$Uninitialized$()))) {
        b.r = (("" + b.r) + sep);
        b.r = (b.r + "<not computed>");
      }
    } else {
      if ((cursor !== $thiz)) {
        var runner = $thiz;
        while ((runner !== scout)) {
          runner = runner.bc();
          scout = scout.bc();
        }
        while (true) {
          var ct = cursor.bc();
          if ((ct !== scout)) {
            var c$2 = cursor;
            b.r = (("" + b.r) + sep);
            var obj$3 = c$2.z();
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
  this.bf = null;
  this.cF = null;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.n = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.b9 = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.kt = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.t = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.eD = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bp = (function() {
  return "LinearSeq";
});
$p.e = (function() {
  return ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().X);
});
$p.w = (function() {
  return (((this.bf !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().X)) ? 0 : (-1));
});
$p.z = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().X)) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list");
  } else {
    return this.bf;
  }
});
$p.bc = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().X)) {
    throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
  } else {
    return this.cF;
  }
});
$p.s1 = (function() {
  var these = this;
  var those = this;
  if ((!($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().X))) {
    these = these.bc();
  }
  while ((those !== these)) {
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().X)) {
      return this;
    }
    these = these.bc();
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().X)) {
      return this;
    }
    these = these.bc();
    if ((these === those)) {
      return this;
    }
    those = those.bc();
  }
  return this;
});
$p.m = (function() {
  return (((this.bf !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().X)) ? $m_sc_Iterator$().W : new $c_sci_LazyList$LazyIterator(this));
});
$p.bl = (function(f) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if ((!($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal1) === $m_sci_LazyList$().X))) {
      f.c(\u03b4this$tailLocal1.z());
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.bc();
    } else {
      return (void 0);
    }
  }
});
$p.bY = (function() {
  return "LazyList";
});
$p.sO = (function(f) {
  return (((this.bf !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().X)) ? $m_sci_LazyList$().X : $p_sci_LazyList__mapImpl__F1__sci_LazyList(this, f));
});
$p.rO = (function(n) {
  return ((n <= 0) ? this : (((this.bf !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().X)) ? $m_sci_LazyList$().X : $m_sci_LazyList$().tv(this, n)));
});
$p.dV = (function(sb, start, sep, end) {
  this.s1();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.b4, start, sep, end);
  return sb;
});
$p.g = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").r;
});
$p.bo = (function() {
  return $m_sci_LazyList$();
});
$p.v = (function() {
  return this.bc();
});
$p.cg = (function(f) {
  return this.sO(f);
});
$p.pa = (function(n) {
  return this.rO(n);
});
$p.cO = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.c = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cA)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  cA: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  bb: 1,
  aF: 1,
  bg: 1,
  bf: 1,
  a: 1
}));
/** @constructor */
function $c_sci_WrappedString(self) {
  this.aR = null;
  this.aR = self;
}
$p = $c_sci_WrappedString.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_WrappedString;
/** @constructor */
function $h_sci_WrappedString() {
}
$h_sci_WrappedString.prototype = $p;
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_StringView(this.aR));
});
$p.cg = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.b9 = (function(len) {
  var this$1 = this.aR;
  var x = this$1.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.aR.length;
});
$p.bp = (function() {
  return "IndexedSeq";
});
$p.gF = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.tJ = (function(from, until) {
  var start = ((from < 0) ? 0 : from);
  if (((until <= start) || (start >= this.aR.length))) {
    return $m_sci_WrappedString$().o9;
  }
  var end = ((until > this.aR.length) ? this.aR.length : until);
  var this$4 = this.aR;
  return new $c_sci_WrappedString(this$4.substring(start, end));
});
$p.n = (function() {
  return this.aR.length;
});
$p.g = (function() {
  return this.aR;
});
$p.bB = (function(xs, start, len) {
  if ((xs instanceof $ac_C)) {
    var this$1 = this.aR;
    var srcLen = this$1.length;
    var destLen = xs.a.length;
    var limit = ((len < srcLen) ? len : srcLen);
    var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
    var total = ((capacity < limit) ? capacity : limit);
    var copied = ((total < 0) ? 0 : total);
    $f_T__getChars__I__I__AC__I__V(this.aR, 0, copied, xs, start);
    return copied;
  } else {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
  }
});
$p.eD = (function(o) {
  return ((o instanceof $c_sci_WrappedString) ? (this.aR === o.aR) : $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o));
});
$p.bY = (function() {
  return "WrappedString";
});
$p.gE = (function() {
  return 2147483647;
});
$p.i = (function(other) {
  return ((other instanceof $c_sci_WrappedString) ? (this.aR === other.aR) : $f_sc_Seq__equals__O__Z(this, other));
});
$p.t = (function(i) {
  return $bC(this.aR.charCodeAt(i));
});
$p.c = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aR.charCodeAt(i));
});
$p.fq = (function(coll) {
  return $m_sci_WrappedString$().pq(coll);
});
$p.ex = (function(coll) {
  return $m_sci_WrappedString$().pq(coll);
});
$p.c0 = (function(from, until) {
  return this.tJ(from, until);
});
$p.ic = (function(from, until) {
  return $f_sc_IndexedSeqOps__slice__I__I__O(this, from, until);
});
$p.bo = (function() {
  return $m_sci_IndexedSeq$();
});
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cG)));
}
var $d_sci_WrappedString = new $TypeData().i($c_sci_WrappedString, "scala.collection.immutable.WrappedString", ({
  cG: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  a: 1
}));
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.hO = null;
  this.hO = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cu = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.cg = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.gF = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.eD = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.gE = (function() {
  return $m_sci_IndexedSeqDefaults$().o2;
});
$p.ic = (function(from, until) {
  return $f_sc_IndexedSeqOps__slice__I__I__O(this, from, until);
});
$p.c0 = (function(from, until) {
  return $f_sci_IndexedSeqOps__slice__I__I__O(this, from, until);
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.b9 = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.n();
});
$p.i = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.k = (function() {
  return $m_s_util_hashing_MurmurHash3$().pW(this);
});
$p.g = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.e = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.cd = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.gP = (function() {
  return $m_sjsr_WrappedVarArgs$().aL();
});
$p.bl = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.bB = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.dV = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.e3 = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.n = (function() {
  return (this.hO.length | 0);
});
$p.t = (function(idx) {
  return this.hO[idx];
});
$p.bY = (function() {
  return "WrappedVarArgs";
});
$p.ex = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().kk(coll);
});
$p.cO = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.c = (function(v1) {
  return this.t((v1 | 0));
});
$p.bo = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d7)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  d7: 1,
  E: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  u: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  F: 1,
  n: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.bx = null;
  this.bx = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.pF = (function() {
  return $m_sci_HashMap$();
});
$p.w = (function() {
  return this.bx.aX;
});
$p.aV = (function() {
  return this.bx.aX;
});
$p.e = (function() {
  return (this.bx.aX === 0);
});
$p.m = (function() {
  return (this.e() ? $m_sc_Iterator$().W : new $c_sci_MapKeyValueTupleIterator(this.bx));
});
$p.bA = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().N(key);
  var keyHash = $m_sc_Hashing$().cv(keyUnimprovedHash);
  return this.bx.k4(key, keyUnimprovedHash, keyHash, 0);
});
$p.c = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().N(key);
  var keyHash = $m_sc_Hashing$().cv(keyUnimprovedHash);
  return this.bx.jT(key, keyUnimprovedHash, keyHash, 0);
});
$p.dg = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().N(key);
  var keyHash = $m_sc_Hashing$().cv(keyUnimprovedHash);
  return this.bx.kn(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fD = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().N(key);
  var newRootNode = this.bx.q8(key, value, keyUnimprovedHash, $m_sc_Hashing$().cv(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bx) ? this : new $c_sci_HashMap(newRootNode));
});
$p.ew = (function(f) {
  this.bx.ew(f);
});
$p.i = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bx;
      var x$2 = that.bx;
      return ((x === null) ? (x$2 === null) : x.i(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.k = (function() {
  if (this.e()) {
    return $m_s_util_hashing_MurmurHash3$().jN;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bx);
    return $m_s_util_hashing_MurmurHash3$().kN(hashIterator, $m_s_util_hashing_MurmurHash3$().dU);
  }
});
$p.bY = (function() {
  return "HashMap";
});
$p.e8 = (function(key, value) {
  return this.fD(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cz)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  cz: 1,
  az: 1,
  at: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  ax: 1,
  aw: 1,
  b: 1,
  ai: 1,
  u: 1,
  aA: 1,
  aj: 1,
  n: 1,
  hv: 1,
  ie: 1,
  a: 1,
  a3: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ig)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ir)));
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
$p.b5 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.jG = loadFactor;
  $thiz.b2 = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.jH = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.b2.a.length);
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
  var idx = (hash & (($thiz.b2.a.length - 1) | 0));
  matchResult4: {
    var x10 = $thiz.b2.a[idx];
    if ((x10 === null)) {
      $thiz.b2.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
      break matchResult4;
    }
    var prev = null;
    var n = x10;
    while (((n !== null) && (n.da <= hash))) {
      if (((n.da === hash) && $m_sr_BoxesRunTime$().p(elem, n.fi))) {
        return false;
      }
      prev = n;
      n = n.b3;
    }
    if ((prev === null)) {
      $thiz.b2.a[idx] = new $c_scm_HashSet$Node(elem, hash, x10);
    } else {
      var this$3 = prev;
      var n$1 = new $c_scm_HashSet$Node(elem, hash, prev.b3);
      this$3.b3 = n$1;
    }
  }
  $thiz.dO = ((1 + $thiz.dO) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.b2.a.length;
  $thiz.jH = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.dO === 0)) {
    $thiz.b2 = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.b2 = $m_ju_Arrays$().S($thiz.b2, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.b2.a[i];
        if ((old !== null)) {
          preLow.b3 = null;
          preHigh.b3 = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.b3;
            if (((n.da & oldlen) === 0)) {
              var this$2 = lastLow;
              var n$1 = n;
              this$2.b3 = n$1;
              lastLow = n;
            } else {
              var this$3 = lastHigh;
              var n$2 = n;
              this$3.b3 = n$2;
              lastHigh = n;
            }
            n = next;
          }
          var this$4 = lastLow;
          this$4.b3 = null;
          if ((old !== preLow.b3)) {
            $thiz.b2.a[i] = preLow.b3;
          }
          if ((preHigh.b3 !== null)) {
            $thiz.b2.a[((i + oldlen) | 0)] = preHigh.b3;
            var this$5 = lastHigh;
            this$5.b3 = null;
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
  return $doubleToInt((size * $thiz.jG));
}
/** @constructor */
function $c_scm_HashSet() {
  this.jG = 0.0;
  this.b2 = null;
  this.jH = 0;
  this.dO = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.aV = (function() {
  return this.dO;
});
$p.bA = (function(elem) {
  var hash = $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().N(elem));
  matchResult1: {
    var $x_1;
    var x1 = this.b2.a[(hash & ((this.b2.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.rY(elem, hash);
  }
  return ($x_1 !== null);
});
$p.bb = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jG)));
  if ((target > this.b2.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.hT = (function(elem) {
  if ((((1 + this.dO) | 0) >= this.jH)) {
    $p_scm_HashSet__growTable__I__V(this, (this.b2.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().N(elem)));
});
$p.oR = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, v1$2, $p_scm_HashSet__improveHash__I__I(this, (v2$2 | 0)));
    }));
    xs.u9.ud(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.o()) {
      var next = iter.l();
      $p_scm_HashSet__addElem__O__I__Z(this, next.fi, next.da);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.rP();
    while (iter$2.o()) {
      var next$2 = iter$2.l();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.pD(), next$2.pu());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.m = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.bo = (function() {
  return $m_scm_HashSet$();
});
$p.w = (function() {
  return this.dO;
});
$p.e = (function() {
  return (this.dO === 0);
});
$p.bY = (function() {
  return "HashSet";
});
$p.k = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.o()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().kN(hashIterator, $m_s_util_hashing_MurmurHash3$().oI);
});
$p.b5 = (function(elems) {
  return this.oR(elems);
});
$p.b6 = (function(elem) {
  this.hT(elem);
  return this;
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cS)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  cS: 1,
  iv: 1,
  h4: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  hs: 1,
  b: 1,
  be: 1,
  O: 1,
  H: 1,
  M: 1,
  L: 1,
  N: 1,
  S: 1,
  aR: 1,
  iX: 1,
  iW: 1,
  n: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hU)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iS)));
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
$p.b9 = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.n();
});
$p.bp = (function() {
  return "IndexedSeq";
});
$p.gF = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.eD = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.cu = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.fq = (function(coll) {
  return $m_sci_ArraySeq$().kh(coll, this.ag());
});
$p.gP = (function() {
  return $m_sci_ArraySeq$().i9(this.ag());
});
$p.e3 = (function() {
  return $m_sci_ArraySeq$().jp;
});
$p.sN = (function(f) {
  var a = new $ac_O(this.n());
  var i = 0;
  while ((i < a.a.length)) {
    a.a[i] = f.c(this.t(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().h7(a);
});
$p.tH = (function(from, until) {
  return (((from <= 0) && ($m_jl_reflect_Array$().bm(this.ci()) <= until)) ? this : $m_sci_ArraySeq$().h7($m_sc_ArrayOps$().tK(this.ci(), from, until)));
});
$p.bY = (function() {
  return "ArraySeq";
});
$p.bB = (function(xs, start, len) {
  var srcLen = this.n();
  var destLen = $m_jl_reflect_Array$().bm(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gJ(this.ci(), 0, xs, start, copied);
  }
  return copied;
});
$p.gE = (function() {
  return 2147483647;
});
$p.bo = (function() {
  return $m_sci_ArraySeq$().jp;
});
$p.cg = (function(f) {
  return this.sN(f);
});
$p.c0 = (function(from, until) {
  return this.tH(from, until);
});
$p.ic = (function(from, until) {
  return $f_sc_IndexedSeqOps__slice__I__I__O(this, from, until);
});
$p.ex = (function(coll) {
  return $m_sci_ArraySeq$().kh(coll, this.ag());
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.d = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.d = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.b9 = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.n();
});
$p.bp = (function() {
  return "IndexedSeq";
});
$p.gF = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.eD = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.cu = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.e3 = (function() {
  return $m_sci_Vector$();
});
$p.n = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.j : this.d.a.length);
});
$p.m = (function() {
  return ((this === $m_sci_Vector0$()) ? $m_sci_Vector$().o8 : new $c_sci_NewVectorIterator(this, this.n(), this.cR()));
});
$p.bY = (function() {
  return "Vector";
});
$p.bB = (function(xs, start, len) {
  return this.m().bB(xs, start, len);
});
$p.gE = (function() {
  return $m_sci_Vector$().o7;
});
$p.aK = (function(index) {
  return $m_scg_CommonErrors$().kr(index, ((this.n() - 1) | 0));
});
$p.bl = (function(f) {
  var c = this.cR();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = (((c + ((c >>> 31) | 0)) | 0) >> 1);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.kf(((((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0) - 1) | 0), this.cQ(i), f);
    i = ((1 + i) | 0);
  }
});
$p.bo = (function() {
  return $m_sci_Vector$();
});
$p.ic = (function(from, until) {
  return $f_sc_IndexedSeqOps__slice__I__I__O(this, from, until);
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
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
$p.c0 = (function(from, until) {
  return $f_sc_IndexedSeqOps__slice__I__I__O(this, from, until);
});
$p.b9 = (function(len) {
  var x = this.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.n();
});
$p.bp = (function() {
  return "IndexedSeq";
});
$p.cu = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.e3 = (function() {
  return $m_scm_ArraySeq$().jE;
});
$p.pr = (function(coll) {
  var evidence$1 = this.ag();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aU();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.w();
  var it = coll.m();
  while (it.o()) {
    var elem = it.l();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h1(elementClass) : elem));
    jsElems.push(unboxedElem);
  }
  return $m_scm_ArraySeq$().ky($m_scm_ArrayBuilder$().h0(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems));
});
$p.gP = (function() {
  return $m_scm_ArraySeq$().i9(this.ag());
});
$p.bY = (function() {
  return "ArraySeq";
});
$p.bB = (function(xs, start, len) {
  var srcLen = this.n();
  var destLen = $m_jl_reflect_Array$().bm(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gJ(this.ce(), 0, xs, start, copied);
  }
  return copied;
});
$p.i = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().bm(this.ce()) !== $m_jl_reflect_Array$().bm(other.ce()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.bo = (function() {
  return $m_scm_ArraySeq$().jE;
});
$p.fq = (function(coll) {
  return this.pr(coll);
});
$p.ex = (function(coll) {
  return this.pr(coll);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
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
$p.n = (function() {
  return this.dr.a.length;
});
$p.gD = (function(i) {
  return this.dr.a[i];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.dr, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().ph(this.dr, that.dr) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dr);
});
$p.ci = (function() {
  return this.dr;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.t = (function(i) {
  return this.gD(i);
});
$p.c = (function(v1) {
  return this.gD((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cm)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  cm: 1,
  a7: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  ab: 1,
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
$p.n = (function() {
  return this.ds.a.length;
});
$p.gv = (function(i) {
  return this.ds.a[i];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.ds, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().pd(this.ds, that.ds) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ds);
});
$p.ci = (function() {
  return this.ds;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.t = (function(i) {
  return this.gv(i);
});
$p.c = (function(v1) {
  return this.gv((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cn)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  cn: 1,
  a7: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  ab: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.cZ = null;
  this.cZ = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.n = (function() {
  return this.cZ.a.length;
});
$p.gw = (function(i) {
  return this.cZ.a[i];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.cZ, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().pe(this.cZ, that.cZ) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cZ);
});
$p.dV = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.cZ).dV(sb, start, sep, end);
});
$p.ci = (function() {
  return this.cZ;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.t = (function(i) {
  return $bC(this.gw(i));
});
$p.c = (function(v1) {
  return $bC(this.gw((v1 | 0)));
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.co)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  co: 1,
  a7: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  ab: 1,
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
$p.n = (function() {
  return this.dt.a.length;
});
$p.gx = (function(i) {
  return this.dt.a[i];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.dt, this$1.ap);
});
$p.i = (function(that) {
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
$p.ci = (function() {
  return this.dt;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.t = (function(i) {
  return this.gx(i);
});
$p.c = (function(v1) {
  return this.gx((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cp)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  cp: 1,
  a7: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  ab: 1,
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
$p.n = (function() {
  return this.du.a.length;
});
$p.gy = (function(i) {
  return this.du.a[i];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.du, this$1.ap);
});
$p.i = (function(that) {
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
$p.ci = (function() {
  return this.du;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.t = (function(i) {
  return this.gy(i);
});
$p.c = (function(v1) {
  return this.gy((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  cq: 1,
  a7: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  ab: 1,
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
$p.n = (function() {
  return this.dv.a.length;
});
$p.gz = (function(i) {
  return this.dv.a[i];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.dv, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().k9(this.dv, that.dv) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dv);
});
$p.ci = (function() {
  return this.dv;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.t = (function(i) {
  return this.gz(i);
});
$p.c = (function(v1) {
  return this.gz((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cr)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  cr: 1,
  a7: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  ab: 1,
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
$p.n = (function() {
  return ((this.dw.a.length >>> 1) | 0);
});
$p.gA = (function(i) {
  var $x_1 = this.dw.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.dw, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().pf(this.dw, that.dw) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dw);
});
$p.ci = (function() {
  return this.dw;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.t = (function(i) {
  return this.gA(i);
});
$p.c = (function(v1) {
  return this.gA((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  cs: 1,
  a7: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  ab: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.cD = null;
  this.cD = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.ag = (function() {
  return $m_s_reflect_ClassTag$().jS($objectGetClass(this.cD).a5.Q());
});
$p.n = (function() {
  return this.cD.a.length;
});
$p.t = (function(i) {
  return this.cD.a[i];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.cD, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().pi(this.cD, that.cD) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cD);
});
$p.ci = (function() {
  return this.cD;
});
$p.c = (function(v1) {
  return this.t((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ct)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  ct: 1,
  a7: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  ab: 1,
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
$p.n = (function() {
  return this.dx.a.length;
});
$p.gB = (function(i) {
  return this.dx.a[i];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.dx, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().pg(this.dx, that.dx) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dx);
});
$p.ci = (function() {
  return this.dx;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.t = (function(i) {
  return this.gB(i);
});
$p.c = (function(v1) {
  return this.gB((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  cu: 1,
  a7: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  ab: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.em = null;
  this.em = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.n = (function() {
  return this.em.a.length;
});
$p.gC = (function(i) {
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.em, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.em.a.length === that.em.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.em);
});
$p.ci = (function() {
  return this.em;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.t = (function(i) {
  this.gC(i);
});
$p.c = (function(v1) {
  this.gC((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cv)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  cv: 1,
  a7: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  ab: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return (xs$tailLocal1.e() ? 0 : 1);
    } else if (xs$tailLocal1.e()) {
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
      var aEmpty = a$tailLocal1.e();
      var bEmpty = b$tailLocal1.e();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().p(a$tailLocal1.z(), b$tailLocal1.z()))) {
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
$p.kt = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.t = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.eD = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bp = (function() {
  return "LinearSeq";
});
$p.m = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.cu = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.e3 = (function() {
  return $m_sci_List$();
});
$p.oJ = (function(prefix) {
  if (this.e()) {
    return prefix;
  } else if (prefix.e()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.z(), this);
    var curr = result;
    var that = prefix.v();
    while ((!that.e())) {
      var temp = new $c_sci_$colon$colon(that.z(), this);
      curr.aB = temp;
      curr = temp;
      that = that.v();
    }
    return result;
  }
});
$p.e = (function() {
  return (this === $m_sci_Nil$());
});
$p.kH = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.oJ(prefix);
  }
  if ((prefix.w() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.e()) {
      return prefix.q4();
    }
  }
  var iter = prefix.m();
  if (iter.o()) {
    var result = new $c_sci_$colon$colon(iter.l(), this);
    var curr = result;
    while (iter.o()) {
      var temp = new $c_sci_$colon$colon(iter.l(), this);
      curr.aB = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.oX = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.oJ(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.sP = (function(f) {
  if ((this === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.c(this.z()), $m_sci_Nil$());
    var t = h;
    var rest = this.v();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.c(rest.z()), $m_sci_Nil$());
      t.aB = nx;
      t = nx;
      rest = rest.v();
    }
    var $x_1 = h;
  }
  return $x_1;
});
$p.bl = (function(f) {
  var these = this;
  while ((!these.e())) {
    f.c(these.z());
    these = these.v();
  }
});
$p.n = (function() {
  var these = this;
  var len = 0;
  while ((!these.e())) {
    len = ((1 + len) | 0);
    these = these.v();
  }
  return len;
});
$p.b9 = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.bA = (function(elem) {
  var these = this;
  while ((!these.e())) {
    if ($m_sr_BoxesRunTime$().p(these.z(), elem)) {
      return true;
    }
    these = these.v();
  }
  return false;
});
$p.bY = (function() {
  return "List";
});
$p.i = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.bo = (function() {
  return $m_sci_List$();
});
$p.cg = (function(f) {
  return this.sP(f);
});
$p.pa = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.cO = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.c = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bh)));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.d = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
$p.tI = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  var b = this.n();
  var hi = ((until < b) ? until : b);
  return ((hi <= lo) ? $m_sci_Vector0$() : ((((hi - lo) | 0) === this.n()) ? this : this.eF(lo, hi)));
});
$p.c0 = (function(from, until) {
  return this.tI(from, until);
});
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
$p.n = (function() {
  return this.dI.a.length;
});
$p.gD = (function(index) {
  return this.dI.a[index];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.dI, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().ph(this.dI, that.dI) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dI);
});
$p.ce = (function() {
  return this.dI;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.t = (function(i) {
  return this.gD(i);
});
$p.c = (function(v1) {
  return this.gD((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cI)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  cI: 1,
  a8: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  o: 1,
  r: 1,
  a0: 1,
  Z: 1,
  n: 1,
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
$p.n = (function() {
  return this.dJ.a.length;
});
$p.gv = (function(index) {
  return this.dJ.a[index];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.dJ, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().pd(this.dJ, that.dJ) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dJ);
});
$p.ce = (function() {
  return this.dJ;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.t = (function(i) {
  return this.gv(i);
});
$p.c = (function(v1) {
  return this.gv((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cJ)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  cJ: 1,
  a8: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  o: 1,
  r: 1,
  a0: 1,
  Z: 1,
  n: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.bX = null;
  this.bX = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.n = (function() {
  return this.bX.a.length;
});
$p.gw = (function(index) {
  return this.bX.a[index];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.bX, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().pe(this.bX, that.bX) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bX);
});
$p.dV = (function(sb, start, sep, end) {
  var jsb = sb.b4;
  if ((start.length !== 0)) {
    jsb.r = (("" + jsb.r) + start);
  }
  var len = this.bX.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.oV(this.bX);
    } else {
      jsb.n();
      var c = this.bX.a[0];
      var str = ("" + $cToS(c));
      jsb.r = (jsb.r + str);
      var i = 1;
      while ((i < len)) {
        jsb.r = (("" + jsb.r) + sep);
        var c$1 = this.bX.a[i];
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
$p.ce = (function() {
  return this.bX;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.t = (function(i) {
  return $bC(this.gw(i));
});
$p.c = (function(v1) {
  return $bC(this.gw((v1 | 0)));
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cK)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  cK: 1,
  a8: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  o: 1,
  r: 1,
  a0: 1,
  Z: 1,
  n: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.c8 = null;
  this.c8 = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.n = (function() {
  return this.c8.a.length;
});
$p.gx = (function(index) {
  return this.c8.a[index];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.c8, this$1.ap);
});
$p.i = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
    var thatArray = that.c8;
    if ((this.c8 === thatArray)) {
      return true;
    } else if ((this.c8.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < this.c8.a.length) && (this.c8.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.c8.a.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.i.call(this, that);
  }
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.c8);
});
$p.ce = (function() {
  return this.c8;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.t = (function(i) {
  return this.gx(i);
});
$p.c = (function(v1) {
  return this.gx((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cL)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  cL: 1,
  a8: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  o: 1,
  r: 1,
  a0: 1,
  Z: 1,
  n: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.c9 = null;
  this.c9 = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.n = (function() {
  return this.c9.a.length;
});
$p.gy = (function(index) {
  return this.c9.a[index];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.c9, this$1.ap);
});
$p.i = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
    var thatArray = that.c9;
    if ((this.c9 === thatArray)) {
      return true;
    } else if ((this.c9.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < this.c9.a.length) && (this.c9.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.c9.a.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.i.call(this, that);
  }
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.c9);
});
$p.ce = (function() {
  return this.c9;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.t = (function(i) {
  return this.gy(i);
});
$p.c = (function(v1) {
  return this.gy((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cM)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  cM: 1,
  a8: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  o: 1,
  r: 1,
  a0: 1,
  Z: 1,
  n: 1,
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
$p.n = (function() {
  return this.dK.a.length;
});
$p.gz = (function(index) {
  return this.dK.a[index];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.dK, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().k9(this.dK, that.dK) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dK);
});
$p.ce = (function() {
  return this.dK;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.t = (function(i) {
  return this.gz(i);
});
$p.c = (function(v1) {
  return this.gz((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cN)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  cN: 1,
  a8: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  o: 1,
  r: 1,
  a0: 1,
  Z: 1,
  n: 1,
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
$p.n = (function() {
  return ((this.dL.a.length >>> 1) | 0);
});
$p.gA = (function(index) {
  var $x_1 = this.dL.a;
  var $x_2 = (index << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.dL, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().pf(this.dL, that.dL) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dL);
});
$p.ce = (function() {
  return this.dL;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.t = (function(i) {
  return this.gA(i);
});
$p.c = (function(v1) {
  return this.gA((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cO)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  cO: 1,
  a8: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  o: 1,
  r: 1,
  a0: 1,
  Z: 1,
  n: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.d8 = null;
  this.d8 = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.ag = (function() {
  return $m_s_reflect_ClassTag$().jS($objectGetClass(this.d8).a5.Q());
});
$p.n = (function() {
  return this.d8.a.length;
});
$p.t = (function(index) {
  return this.d8.a[index];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.d8, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().pi(this.d8, that.d8) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.d8);
});
$p.ce = (function() {
  return this.d8;
});
$p.c = (function(v1) {
  return this.t((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cP)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  cP: 1,
  a8: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  o: 1,
  r: 1,
  a0: 1,
  Z: 1,
  n: 1,
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
$p.n = (function() {
  return this.dM.a.length;
});
$p.gB = (function(index) {
  return this.dM.a[index];
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.dM, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().pg(this.dM, that.dM) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dM);
});
$p.ce = (function() {
  return this.dM;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.t = (function(i) {
  return this.gB(i);
});
$p.c = (function(v1) {
  return this.gB((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cQ)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  cQ: 1,
  a8: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  o: 1,
  r: 1,
  a0: 1,
  Z: 1,
  n: 1,
  s: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.es = null;
  this.es = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.n = (function() {
  return this.es.a.length;
});
$p.gC = (function(index) {
});
$p.k = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aT(this.es, this$1.ap);
});
$p.i = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.es.a.length === that.es.a.length) : $c_scm_ArraySeq.prototype.i.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.es);
});
$p.ce = (function() {
  return this.es;
});
$p.ag = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.t = (function(i) {
  this.gC(i);
});
$p.c = (function(v1) {
  this.gC((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cR)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  cR: 1,
  a8: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  o: 1,
  r: 1,
  a0: 1,
  Z: 1,
  n: 1,
  s: 1,
  a: 1
}));
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iI)));
}
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.h = suffix1;
  $thiz.j = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.d = null;
  this.h = null;
  this.j = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.d = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.d.a.length))) {
    return this.d.a[index];
  } else {
    throw this.aK(index);
  }
});
$p.e7 = (function(index, elem) {
  if (((index >= 0) && (index < this.d.a.length))) {
    var a1 = this.d;
    var a1c = a1.f();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.aK(index);
  }
});
$p.dW = (function(elem) {
  if ((this.d.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().fn(this.d, elem));
  } else {
    var $x_2 = this.d;
    var $x_1 = $m_sci_VectorStatics$().ao;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.cx = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().ch(this.d, f));
});
$p.eF = (function(lo, hi) {
  return new $c_sci_Vector1($m_ju_Arrays$().L(this.d, lo, hi));
});
$p.cR = (function() {
  return 1;
});
$p.cQ = (function(idx) {
  return this.d;
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.d.a.length))) {
    return this.d.a[index];
  } else {
    throw this.aK(index);
  }
});
$p.cg = (function(f) {
  return this.cx(f);
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  ij: 1,
  ap: 1,
  ak: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.jo = null;
  this.aB = null;
  this.jo = head;
  this.aB = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.A = (function() {
  return 2;
});
$p.C = (function() {
  return "::";
});
$p.B = (function(n) {
  if ((n === 0)) {
    return this.jo;
  }
  if ((n === 1)) {
    return this.aB;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.z = (function() {
  return this.jo;
});
$p.v = (function() {
  return this.aB;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  hC: 1,
  bh: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  bb: 1,
  aF: 1,
  bg: 1,
  bf: 1,
  n: 1,
  s: 1,
  ck: 1,
  F: 1,
  a: 1,
  a3: 1,
  j: 1
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.A = (function() {
  return 0;
});
$p.C = (function() {
  return "Nil";
});
$p.B = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.sn = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list");
});
$p.tT = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.w = (function() {
  return 0;
});
$p.m = (function() {
  return $m_sc_Iterator$().W;
});
$p.z = (function() {
  this.sn();
});
$p.v = (function() {
  this.tT();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  i8: 1,
  bh: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  bb: 1,
  aF: 1,
  bg: 1,
  bf: 1,
  n: 1,
  s: 1,
  ck: 1,
  F: 1,
  a: 1,
  a3: 1,
  j: 1
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
  this.d = null;
  this.h = null;
  this.j = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().jy, $m_sci_VectorStatics$().jy, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.oY = (function(index) {
  throw this.aK(index);
});
$p.e7 = (function(index, elem) {
  throw this.aK(index);
});
$p.dW = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.eF = (function(lo, hi) {
  return this;
});
$p.cR = (function() {
  return 0;
});
$p.cQ = (function(idx) {
  return null;
});
$p.i = (function(o) {
  return ((this === o) || ((o instanceof $c_sci_Vector) ? false : $f_sc_Seq__equals__O__Z(this, o)));
});
$p.aK = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.t = (function(i) {
  this.oY(i);
});
$p.c = (function(v1) {
  this.oY((v1 | 0));
});
$p.cg = (function(f) {
  return this;
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  ii: 1,
  ao: 1,
  ap: 1,
  ak: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
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
  this.d = null;
  this.h = null;
  this.j = 0;
  this.bM = 0;
  this.bg = null;
  this.bM = len1;
  this.bg = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.bM) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bg.a.length) ? this.bg.a[i2].a[i1] : this.h.a[(31 & io)]);
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.aK(index);
  }
});
$p.e7 = (function(index, elem) {
  if (((index >= 0) && (index < this.j))) {
    if ((index >= this.bM)) {
      var io = ((index - this.bM) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.bg.a.length)) {
        var a2 = this.bg;
        var a2c = a2.f();
        var a1 = a2c.a[i2];
        var a1c = a1.f();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.d, this.bM, a2c, this.h, this.j);
      } else {
        var a1$1 = this.h;
        var a1c$1 = a1$1.f();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.d, this.bM, this.bg, a1c$1, this.j);
      }
    } else {
      var a1$2 = this.d;
      var a1c$2 = a1$2.f();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bM, this.bg, this.h, this.j);
    }
  } else {
    throw this.aK(index);
  }
});
$p.dW = (function(elem) {
  if ((this.h.a.length < 32)) {
    var suffix1$3 = $m_sci_VectorStatics$().fn(this.h, elem);
    var length0$3 = ((1 + this.j) | 0);
    return new $c_sci_Vector2(this.d, this.bM, this.bg, suffix1$3, length0$3);
  } else if ((this.bg.a.length < 30)) {
    var data2$4 = $m_sci_VectorStatics$().E(this.bg, this.h);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$4 = ((1 + this.j) | 0);
    return new $c_sci_Vector2(this.d, this.bM, data2$4, a, length0$4);
  } else {
    var $x_5 = this.d;
    var $x_4 = this.bM;
    var $x_3 = this.bg;
    var $x_2 = this.bM;
    var $x_1 = $m_sci_VectorStatics$().bj;
    var x = this.h;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.j) | 0));
  }
});
$p.cx = (function(f) {
  var prefix1$7 = $m_sci_VectorStatics$().ch(this.d, f);
  var data2$7 = $m_sci_VectorStatics$().a7(2, this.bg, f);
  var suffix1$7 = $m_sci_VectorStatics$().ch(this.h, f);
  return new $c_sci_Vector2(prefix1$7, this.bM, data2$7, suffix1$7, this.j);
});
$p.eF = (function(lo, hi) {
  var b = new $c_sci_VectorSliceBuilder(lo, hi);
  b.K(1, this.d);
  b.K(2, this.bg);
  b.K(1, this.h);
  return b.e6();
});
$p.cR = (function() {
  return 3;
});
$p.cQ = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.bg;
      break;
    }
    case 2: {
      return this.h;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.bM) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bg.a.length) ? this.bg.a[i2].a[i1] : this.h.a[(31 & io)]);
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.aK(index);
  }
});
$p.cg = (function(f) {
  return this.cx(f);
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  ik: 1,
  ao: 1,
  ap: 1,
  ak: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.h = null;
  this.j = 0;
  this.bh = 0;
  this.bs = null;
  this.bi = 0;
  this.aM = null;
  this.aN = null;
  this.bh = len1;
  this.bs = prefix2;
  this.bi = len12;
  this.aM = data3;
  this.aN = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.bi) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aM.a.length) ? this.aM.a[i3].a[i2].a[i1] : ((i2 < this.aN.a.length) ? this.aN.a[i2].a[i1] : this.h.a[i1]));
    } else if ((index >= this.bh)) {
      var io$2 = ((index - this.bh) | 0);
      return this.bs.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.aK(index);
  }
});
$p.e7 = (function(index, elem) {
  if (((index >= 0) && (index < this.j))) {
    if ((index >= this.bi)) {
      var io = ((index - this.bi) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.aM.a.length)) {
        var a3 = this.aM;
        var a3c = a3.f();
        var a2 = a3c.a[i3];
        var a2c = a2.f();
        var a1 = a2c.a[i2];
        var a1c = a1.f();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.d, this.bh, this.bs, this.bi, a3c, this.aN, this.h, this.j);
      } else if ((i2 < this.aN.a.length)) {
        var a2$1 = this.aN;
        var a2c$1 = a2$1.f();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.f();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.d, this.bh, this.bs, this.bi, this.aM, a2c$1, this.h, this.j);
      } else {
        var a1$2 = this.h;
        var a1c$2 = a1$2.f();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.d, this.bh, this.bs, this.bi, this.aM, this.aN, a1c$2, this.j);
      }
    } else if ((index >= this.bh)) {
      var io$2 = ((index - this.bh) | 0);
      var a2$2 = this.bs;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.f();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.f();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.d, this.bh, a2c$2, this.bi, this.aM, this.aN, this.h, this.j);
    } else {
      var a1$4 = this.d;
      var a1c$4 = a1$4.f();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bh, this.bs, this.bi, this.aM, this.aN, this.h, this.j);
    }
  } else {
    throw this.aK(index);
  }
});
$p.dW = (function(elem) {
  if ((this.h.a.length < 32)) {
    var suffix1$16 = $m_sci_VectorStatics$().fn(this.h, elem);
    var length0$16 = ((1 + this.j) | 0);
    return new $c_sci_Vector3(this.d, this.bh, this.bs, this.bi, this.aM, this.aN, suffix1$16, length0$16);
  } else if ((this.aN.a.length < 31)) {
    var suffix2$6 = $m_sci_VectorStatics$().E(this.aN, this.h);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$17 = ((1 + this.j) | 0);
    return new $c_sci_Vector3(this.d, this.bh, this.bs, this.bi, this.aM, suffix2$6, a, length0$17);
  } else if ((this.aM.a.length < 30)) {
    var data3$7 = $m_sci_VectorStatics$().E(this.aM, $m_sci_VectorStatics$().E(this.aN, this.h));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$18 = ((1 + this.j) | 0);
    return new $c_sci_Vector3(this.d, this.bh, this.bs, this.bi, data3$7, $m_sci_VectorStatics$().ao, a$1, length0$18);
  } else {
    var $x_8 = this.d;
    var $x_7 = this.bh;
    var $x_6 = this.bs;
    var $x_5 = this.bi;
    var $x_4 = this.aM;
    var $x_3 = this.bi;
    var $x_2 = $m_sci_VectorStatics$().cs;
    var x = $m_sci_VectorStatics$().E(this.aN, this.h);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().ao;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.j) | 0));
  }
});
$p.cx = (function(f) {
  var prefix1$21 = $m_sci_VectorStatics$().ch(this.d, f);
  var prefix2$10 = $m_sci_VectorStatics$().a7(2, this.bs, f);
  var data3$11 = $m_sci_VectorStatics$().a7(3, this.aM, f);
  var suffix2$10 = $m_sci_VectorStatics$().a7(2, this.aN, f);
  var suffix1$22 = $m_sci_VectorStatics$().ch(this.h, f);
  return new $c_sci_Vector3(prefix1$21, this.bh, prefix2$10, this.bi, data3$11, suffix2$10, suffix1$22, this.j);
});
$p.eF = (function(lo, hi) {
  var b = new $c_sci_VectorSliceBuilder(lo, hi);
  b.K(1, this.d);
  b.K(2, this.bs);
  b.K(3, this.aM);
  b.K(2, this.aN);
  b.K(1, this.h);
  return b.e6();
});
$p.cR = (function() {
  return 5;
});
$p.cQ = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.bs;
      break;
    }
    case 2: {
      return this.aM;
      break;
    }
    case 3: {
      return this.aN;
      break;
    }
    case 4: {
      return this.h;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.bi) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aM.a.length) ? this.aM.a[i3].a[i2].a[i1] : ((i2 < this.aN.a.length) ? this.aN.a[i2].a[i1] : this.h.a[i1]));
    } else if ((index >= this.bh)) {
      var io$2 = ((index - this.bh) | 0);
      return this.bs.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.aK(index);
  }
});
$p.cg = (function(f) {
  return this.cx(f);
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  il: 1,
  ao: 1,
  ap: 1,
  ak: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.h = null;
  this.j = 0;
  this.aO = 0;
  this.b0 = null;
  this.aP = 0;
  this.b1 = null;
  this.aQ = 0;
  this.as = null;
  this.au = null;
  this.at = null;
  this.aO = len1;
  this.b0 = prefix2;
  this.aP = len12;
  this.b1 = prefix3;
  this.aQ = len123;
  this.as = data4;
  this.au = suffix3;
  this.at = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.aQ) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.as.a.length) ? this.as.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.au.a.length) ? this.au.a[i3].a[i2].a[i1] : ((i2 < this.at.a.length) ? this.at.a[i2].a[i1] : this.h.a[i1])));
    } else if ((index >= this.aP)) {
      var io$2 = ((index - this.aP) | 0);
      return this.b1.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aO)) {
      var io$3 = ((index - this.aO) | 0);
      return this.b0.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.aK(index);
  }
});
$p.e7 = (function(index, elem) {
  if (((index >= 0) && (index < this.j))) {
    if ((index >= this.aQ)) {
      var io = ((index - this.aQ) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.as.a.length)) {
        var a4 = this.as;
        var a4c = a4.f();
        var a3 = a4c.a[i4];
        var a3c = a3.f();
        var a2 = a3c.a[i3];
        var a2c = a2.f();
        var a1 = a2c.a[i2];
        var a1c = a1.f();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        return new $c_sci_Vector4(this.d, this.aO, this.b0, this.aP, this.b1, this.aQ, a4c, this.au, this.at, this.h, this.j);
      } else if ((i3 < this.au.a.length)) {
        var a3$1 = this.au;
        var a3c$1 = a3$1.f();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.f();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.f();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.d, this.aO, this.b0, this.aP, this.b1, this.aQ, this.as, a3c$1, this.at, this.h, this.j);
      } else if ((i2 < this.at.a.length)) {
        var a2$2 = this.at;
        var a2c$2 = a2$2.f();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.f();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.d, this.aO, this.b0, this.aP, this.b1, this.aQ, this.as, this.au, a2c$2, this.h, this.j);
      } else {
        var a1$3 = this.h;
        var a1c$3 = a1$3.f();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.d, this.aO, this.b0, this.aP, this.b1, this.aQ, this.as, this.au, this.at, a1c$3, this.j);
      }
    } else if ((index >= this.aP)) {
      var io$2 = ((index - this.aP) | 0);
      var a3$2 = this.b1;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.f();
      var a2$3 = a3c$2.a[idx3];
      var a2c$3 = a2$3.f();
      var a1$4 = a2c$3.a[idx2];
      var a1c$4 = a1$4.f();
      a1c$4.a[idx1] = elem;
      a2c$3.a[idx2] = a1c$4;
      a3c$2.a[idx3] = a2c$3;
      return new $c_sci_Vector4(this.d, this.aO, this.b0, this.aP, a3c$2, this.aQ, this.as, this.au, this.at, this.h, this.j);
    } else if ((index >= this.aO)) {
      var io$3 = ((index - this.aO) | 0);
      var a2$4 = this.b0;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.f();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.f();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.d, this.aO, a2c$4, this.aP, this.b1, this.aQ, this.as, this.au, this.at, this.h, this.j);
    } else {
      var a1$6 = this.d;
      var a1c$6 = a1$6.f();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.aO, this.b0, this.aP, this.b1, this.aQ, this.as, this.au, this.at, this.h, this.j);
    }
  } else {
    throw this.aK(index);
  }
});
$p.dW = (function(elem) {
  if ((this.h.a.length < 32)) {
    var suffix1$33 = $m_sci_VectorStatics$().fn(this.h, elem);
    var length0$33 = ((1 + this.j) | 0);
    return new $c_sci_Vector4(this.d, this.aO, this.b0, this.aP, this.b1, this.aQ, this.as, this.au, this.at, suffix1$33, length0$33);
  } else if ((this.at.a.length < 31)) {
    var suffix2$22 = $m_sci_VectorStatics$().E(this.at, this.h);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$34 = ((1 + this.j) | 0);
    return new $c_sci_Vector4(this.d, this.aO, this.b0, this.aP, this.b1, this.aQ, this.as, this.au, suffix2$22, a, length0$34);
  } else if ((this.au.a.length < 31)) {
    var suffix3$9 = $m_sci_VectorStatics$().E(this.au, $m_sci_VectorStatics$().E(this.at, this.h));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$35 = ((1 + this.j) | 0);
    return new $c_sci_Vector4(this.d, this.aO, this.b0, this.aP, this.b1, this.aQ, this.as, suffix3$9, $m_sci_VectorStatics$().ao, a$1, length0$35);
  } else if ((this.as.a.length < 30)) {
    var data4$10 = $m_sci_VectorStatics$().E(this.as, $m_sci_VectorStatics$().E(this.au, $m_sci_VectorStatics$().E(this.at, this.h)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$36 = ((1 + this.j) | 0);
    return new $c_sci_Vector4(this.d, this.aO, this.b0, this.aP, this.b1, this.aQ, data4$10, $m_sci_VectorStatics$().bj, $m_sci_VectorStatics$().ao, a$2, length0$36);
  } else {
    var $x_11 = this.d;
    var $x_10 = this.aO;
    var $x_9 = this.b0;
    var $x_8 = this.aP;
    var $x_7 = this.b1;
    var $x_6 = this.aQ;
    var $x_5 = this.as;
    var $x_4 = this.aQ;
    var $x_3 = $m_sci_VectorStatics$().ff;
    var x = $m_sci_VectorStatics$().E(this.au, $m_sci_VectorStatics$().E(this.at, this.h));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().bj;
    var $x_1 = $m_sci_VectorStatics$().ao;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.j) | 0));
  }
});
$p.cx = (function(f) {
  var prefix1$39 = $m_sci_VectorStatics$().ch(this.d, f);
  var prefix2$27 = $m_sci_VectorStatics$().a7(2, this.b0, f);
  var prefix3$14 = $m_sci_VectorStatics$().a7(3, this.b1, f);
  var data4$15 = $m_sci_VectorStatics$().a7(4, this.as, f);
  var suffix3$14 = $m_sci_VectorStatics$().a7(3, this.au, f);
  var suffix2$27 = $m_sci_VectorStatics$().a7(2, this.at, f);
  var suffix1$41 = $m_sci_VectorStatics$().ch(this.h, f);
  return new $c_sci_Vector4(prefix1$39, this.aO, prefix2$27, this.aP, prefix3$14, this.aQ, data4$15, suffix3$14, suffix2$27, suffix1$41, this.j);
});
$p.eF = (function(lo, hi) {
  var b = new $c_sci_VectorSliceBuilder(lo, hi);
  b.K(1, this.d);
  b.K(2, this.b0);
  b.K(3, this.b1);
  b.K(4, this.as);
  b.K(3, this.au);
  b.K(2, this.at);
  b.K(1, this.h);
  return b.e6();
});
$p.cR = (function() {
  return 7;
});
$p.cQ = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.b0;
      break;
    }
    case 2: {
      return this.b1;
      break;
    }
    case 3: {
      return this.as;
      break;
    }
    case 4: {
      return this.au;
      break;
    }
    case 5: {
      return this.at;
      break;
    }
    case 6: {
      return this.h;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.aQ) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.as.a.length) ? this.as.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.au.a.length) ? this.au.a[i3].a[i2].a[i1] : ((i2 < this.at.a.length) ? this.at.a[i2].a[i1] : this.h.a[i1])));
    } else if ((index >= this.aP)) {
      var io$2 = ((index - this.aP) | 0);
      return this.b1.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aO)) {
      var io$3 = ((index - this.aO) | 0);
      return this.b0.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.aK(index);
  }
});
$p.cg = (function(f) {
  return this.cx(f);
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  im: 1,
  ao: 1,
  ap: 1,
  ak: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.h = null;
  this.j = 0;
  this.av = 0;
  this.aD = null;
  this.aw = 0;
  this.aE = null;
  this.ax = 0;
  this.aF = null;
  this.ay = 0;
  this.a8 = null;
  this.ab = null;
  this.aa = null;
  this.a9 = null;
  this.av = len1;
  this.aD = prefix2;
  this.aw = len12;
  this.aE = prefix3;
  this.ax = len123;
  this.aF = prefix4;
  this.ay = len1234;
  this.a8 = data5;
  this.ab = suffix4;
  this.aa = suffix3;
  this.a9 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.ay) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a8.a.length) ? this.a8.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ab.a.length) ? this.ab.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aa.a.length) ? this.aa.a[i3].a[i2].a[i1] : ((i2 < this.a9.a.length) ? this.a9.a[i2].a[i1] : this.h.a[i1]))));
    } else if ((index >= this.ax)) {
      var io$2 = ((index - this.ax) | 0);
      return this.aF.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aw)) {
      var io$3 = ((index - this.aw) | 0);
      return this.aE.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.av)) {
      var io$4 = ((index - this.av) | 0);
      return this.aD.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.aK(index);
  }
});
$p.e7 = (function(index, elem) {
  if (((index >= 0) && (index < this.j))) {
    if ((index >= this.ay)) {
      var io = ((index - this.ay) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.a8.a.length)) {
        var a5 = this.a8;
        var a5c = a5.f();
        var a4 = a5c.a[i5];
        var a4c = a4.f();
        var a3 = a4c.a[i4];
        var a3c = a3.f();
        var a2 = a3c.a[i3];
        var a2c = a2.f();
        var a1 = a2c.a[i2];
        var a1c = a1.f();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        return new $c_sci_Vector5(this.d, this.av, this.aD, this.aw, this.aE, this.ax, this.aF, this.ay, a5c, this.ab, this.aa, this.a9, this.h, this.j);
      } else if ((i4 < this.ab.a.length)) {
        var a4$1 = this.ab;
        var a4c$1 = a4$1.f();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.f();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.f();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.f();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        return new $c_sci_Vector5(this.d, this.av, this.aD, this.aw, this.aE, this.ax, this.aF, this.ay, this.a8, a4c$1, this.aa, this.a9, this.h, this.j);
      } else if ((i3 < this.aa.a.length)) {
        var a3$2 = this.aa;
        var a3c$2 = a3$2.f();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.f();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.f();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.d, this.av, this.aD, this.aw, this.aE, this.ax, this.aF, this.ay, this.a8, this.ab, a3c$2, this.a9, this.h, this.j);
      } else if ((i2 < this.a9.a.length)) {
        var a2$3 = this.a9;
        var a2c$3 = a2$3.f();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.f();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.d, this.av, this.aD, this.aw, this.aE, this.ax, this.aF, this.ay, this.a8, this.ab, this.aa, a2c$3, this.h, this.j);
      } else {
        var a1$4 = this.h;
        var a1c$4 = a1$4.f();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.d, this.av, this.aD, this.aw, this.aE, this.ax, this.aF, this.ay, this.a8, this.ab, this.aa, this.a9, a1c$4, this.j);
      }
    } else if ((index >= this.ax)) {
      var io$2 = ((index - this.ax) | 0);
      var a4$2 = this.aF;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.f();
      var a3$3 = a4c$2.a[idx4];
      var a3c$3 = a3$3.f();
      var a2$4 = a3c$3.a[idx3];
      var a2c$4 = a2$4.f();
      var a1$5 = a2c$4.a[idx2];
      var a1c$5 = a1$5.f();
      a1c$5.a[idx1] = elem;
      a2c$4.a[idx2] = a1c$5;
      a3c$3.a[idx3] = a2c$4;
      a4c$2.a[idx4] = a3c$3;
      return new $c_sci_Vector5(this.d, this.av, this.aD, this.aw, this.aE, this.ax, a4c$2, this.ay, this.a8, this.ab, this.aa, this.a9, this.h, this.j);
    } else if ((index >= this.aw)) {
      var io$3 = ((index - this.aw) | 0);
      var a3$4 = this.aE;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.f();
      var a2$5 = a3c$4.a[idx3$1];
      var a2c$5 = a2$5.f();
      var a1$6 = a2c$5.a[idx2$1];
      var a1c$6 = a1$6.f();
      a1c$6.a[idx1$1] = elem;
      a2c$5.a[idx2$1] = a1c$6;
      a3c$4.a[idx3$1] = a2c$5;
      return new $c_sci_Vector5(this.d, this.av, this.aD, this.aw, a3c$4, this.ax, this.aF, this.ay, this.a8, this.ab, this.aa, this.a9, this.h, this.j);
    } else if ((index >= this.av)) {
      var io$4 = ((index - this.av) | 0);
      var a2$6 = this.aD;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.f();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.f();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.d, this.av, a2c$6, this.aw, this.aE, this.ax, this.aF, this.ay, this.a8, this.ab, this.aa, this.a9, this.h, this.j);
    } else {
      var a1$8 = this.d;
      var a1c$8 = a1$8.f();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.av, this.aD, this.aw, this.aE, this.ax, this.aF, this.ay, this.a8, this.ab, this.aa, this.a9, this.h, this.j);
    }
  } else {
    throw this.aK(index);
  }
});
$p.dW = (function(elem) {
  if ((this.h.a.length < 32)) {
    var suffix1$54 = $m_sci_VectorStatics$().fn(this.h, elem);
    var length0$54 = ((1 + this.j) | 0);
    return new $c_sci_Vector5(this.d, this.av, this.aD, this.aw, this.aE, this.ax, this.aF, this.ay, this.a8, this.ab, this.aa, this.a9, suffix1$54, length0$54);
  } else if ((this.a9.a.length < 31)) {
    var suffix2$41 = $m_sci_VectorStatics$().E(this.a9, this.h);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$55 = ((1 + this.j) | 0);
    return new $c_sci_Vector5(this.d, this.av, this.aD, this.aw, this.aE, this.ax, this.aF, this.ay, this.a8, this.ab, this.aa, suffix2$41, a, length0$55);
  } else if ((this.aa.a.length < 31)) {
    var suffix3$29 = $m_sci_VectorStatics$().E(this.aa, $m_sci_VectorStatics$().E(this.a9, this.h));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$56 = ((1 + this.j) | 0);
    return new $c_sci_Vector5(this.d, this.av, this.aD, this.aw, this.aE, this.ax, this.aF, this.ay, this.a8, this.ab, suffix3$29, $m_sci_VectorStatics$().ao, a$1, length0$56);
  } else if ((this.ab.a.length < 31)) {
    var suffix4$12 = $m_sci_VectorStatics$().E(this.ab, $m_sci_VectorStatics$().E(this.aa, $m_sci_VectorStatics$().E(this.a9, this.h)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$57 = ((1 + this.j) | 0);
    return new $c_sci_Vector5(this.d, this.av, this.aD, this.aw, this.aE, this.ax, this.aF, this.ay, this.a8, suffix4$12, $m_sci_VectorStatics$().bj, $m_sci_VectorStatics$().ao, a$2, length0$57);
  } else if ((this.a8.a.length < 30)) {
    var data5$13 = $m_sci_VectorStatics$().E(this.a8, $m_sci_VectorStatics$().E(this.ab, $m_sci_VectorStatics$().E(this.aa, $m_sci_VectorStatics$().E(this.a9, this.h))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$58 = ((1 + this.j) | 0);
    return new $c_sci_Vector5(this.d, this.av, this.aD, this.aw, this.aE, this.ax, this.aF, this.ay, data5$13, $m_sci_VectorStatics$().cs, $m_sci_VectorStatics$().bj, $m_sci_VectorStatics$().ao, a$3, length0$58);
  } else {
    var $x_14 = this.d;
    var $x_13 = this.av;
    var $x_12 = this.aD;
    var $x_11 = this.aw;
    var $x_10 = this.aE;
    var $x_9 = this.ax;
    var $x_8 = this.aF;
    var $x_7 = this.ay;
    var $x_6 = this.a8;
    var $x_5 = this.ay;
    var $x_4 = $m_sci_VectorStatics$().jz;
    var x = $m_sci_VectorStatics$().E(this.ab, $m_sci_VectorStatics$().E(this.aa, $m_sci_VectorStatics$().E(this.a9, this.h)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().cs;
    var $x_2 = $m_sci_VectorStatics$().bj;
    var $x_1 = $m_sci_VectorStatics$().ao;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.j) | 0));
  }
});
$p.cx = (function(f) {
  var prefix1$61 = $m_sci_VectorStatics$().ch(this.d, f);
  var prefix2$47 = $m_sci_VectorStatics$().a7(2, this.aD, f);
  var prefix3$35 = $m_sci_VectorStatics$().a7(3, this.aE, f);
  var prefix4$18 = $m_sci_VectorStatics$().a7(4, this.aF, f);
  var data5$19 = $m_sci_VectorStatics$().a7(5, this.a8, f);
  var suffix4$18 = $m_sci_VectorStatics$().a7(4, this.ab, f);
  var suffix3$35 = $m_sci_VectorStatics$().a7(3, this.aa, f);
  var suffix2$47 = $m_sci_VectorStatics$().a7(2, this.a9, f);
  var suffix1$64 = $m_sci_VectorStatics$().ch(this.h, f);
  return new $c_sci_Vector5(prefix1$61, this.av, prefix2$47, this.aw, prefix3$35, this.ax, prefix4$18, this.ay, data5$19, suffix4$18, suffix3$35, suffix2$47, suffix1$64, this.j);
});
$p.eF = (function(lo, hi) {
  var b = new $c_sci_VectorSliceBuilder(lo, hi);
  b.K(1, this.d);
  b.K(2, this.aD);
  b.K(3, this.aE);
  b.K(4, this.aF);
  b.K(5, this.a8);
  b.K(4, this.ab);
  b.K(3, this.aa);
  b.K(2, this.a9);
  b.K(1, this.h);
  return b.e6();
});
$p.cR = (function() {
  return 9;
});
$p.cQ = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.aD;
      break;
    }
    case 2: {
      return this.aE;
      break;
    }
    case 3: {
      return this.aF;
      break;
    }
    case 4: {
      return this.a8;
      break;
    }
    case 5: {
      return this.ab;
      break;
    }
    case 6: {
      return this.aa;
      break;
    }
    case 7: {
      return this.a9;
      break;
    }
    case 8: {
      return this.h;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.ay) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a8.a.length) ? this.a8.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.ab.a.length) ? this.ab.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aa.a.length) ? this.aa.a[i3].a[i2].a[i1] : ((i2 < this.a9.a.length) ? this.a9.a[i2].a[i1] : this.h.a[i1]))));
    } else if ((index >= this.ax)) {
      var io$2 = ((index - this.ax) | 0);
      return this.aF.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aw)) {
      var io$3 = ((index - this.aw) | 0);
      return this.aE.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.av)) {
      var io$4 = ((index - this.av) | 0);
      return this.aD.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.aK(index);
  }
});
$p.cg = (function(f) {
  return this.cx(f);
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  io: 1,
  ao: 1,
  ap: 1,
  ak: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.d = null;
  this.h = null;
  this.j = 0;
  this.ac = 0;
  this.ak = null;
  this.ad = 0;
  this.al = null;
  this.ae = 0;
  this.am = null;
  this.af = 0;
  this.an = null;
  this.aj = 0;
  this.Y = null;
  this.a2 = null;
  this.a1 = null;
  this.a0 = null;
  this.Z = null;
  this.ac = len1;
  this.ak = prefix2;
  this.ad = len12;
  this.al = prefix3;
  this.ae = len123;
  this.am = prefix4;
  this.af = len1234;
  this.an = prefix5;
  this.aj = len12345;
  this.Y = data6;
  this.a2 = suffix5;
  this.a1 = suffix4;
  this.a0 = suffix3;
  this.Z = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.aj) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.Y.a.length) ? this.Y.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a2.a.length) ? this.a2.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a1.a.length) ? this.a1.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a0.a.length) ? this.a0.a[i3].a[i2].a[i1] : ((i2 < this.Z.a.length) ? this.Z.a[i2].a[i1] : this.h.a[i1])))));
    } else if ((index >= this.af)) {
      var io$2 = ((index - this.af) | 0);
      return this.an.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ae)) {
      var io$3 = ((index - this.ae) | 0);
      return this.am.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ad)) {
      var io$4 = ((index - this.ad) | 0);
      return this.al.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ac)) {
      var io$5 = ((index - this.ac) | 0);
      return this.ak.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.aK(index);
  }
});
$p.e7 = (function(index, elem) {
  if (((index >= 0) && (index < this.j))) {
    if ((index >= this.aj)) {
      var io = ((index - this.aj) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.Y.a.length)) {
        var a6 = this.Y;
        var a6c = a6.f();
        var a5 = a6c.a[i6];
        var a5c = a5.f();
        var a4 = a5c.a[i5];
        var a4c = a4.f();
        var a3 = a4c.a[i4];
        var a3c = a3.f();
        var a2 = a3c.a[i3];
        var a2c = a2.f();
        var a1 = a2c.a[i2];
        var a1c = a1.f();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        a6c.a[i6] = a5c;
        return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, a6c, this.a2, this.a1, this.a0, this.Z, this.h, this.j);
      } else if ((i5 < this.a2.a.length)) {
        var a5$1 = this.a2;
        var a5c$1 = a5$1.f();
        var a4$1 = a5c$1.a[i5];
        var a4c$1 = a4$1.f();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.f();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.f();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.f();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        a5c$1.a[i5] = a4c$1;
        return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, this.Y, a5c$1, this.a1, this.a0, this.Z, this.h, this.j);
      } else if ((i4 < this.a1.a.length)) {
        var a4$2 = this.a1;
        var a4c$2 = a4$2.f();
        var a3$2 = a4c$2.a[i4];
        var a3c$2 = a3$2.f();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.f();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.f();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        a4c$2.a[i4] = a3c$2;
        return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, this.Y, this.a2, a4c$2, this.a0, this.Z, this.h, this.j);
      } else if ((i3 < this.a0.a.length)) {
        var a3$3 = this.a0;
        var a3c$3 = a3$3.f();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.f();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.f();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, this.Y, this.a2, this.a1, a3c$3, this.Z, this.h, this.j);
      } else if ((i2 < this.Z.a.length)) {
        var a2$4 = this.Z;
        var a2c$4 = a2$4.f();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.f();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, this.Y, this.a2, this.a1, this.a0, a2c$4, this.h, this.j);
      } else {
        var a1$5 = this.h;
        var a1c$5 = a1$5.f();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, a1c$5, this.j);
      }
    } else if ((index >= this.af)) {
      var io$2 = ((index - this.af) | 0);
      var a5$2 = this.an;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.f();
      var a4$3 = a5c$2.a[idx5];
      var a4c$3 = a4$3.f();
      var a3$4 = a4c$3.a[idx4];
      var a3c$4 = a3$4.f();
      var a2$5 = a3c$4.a[idx3];
      var a2c$5 = a2$5.f();
      var a1$6 = a2c$5.a[idx2];
      var a1c$6 = a1$6.f();
      a1c$6.a[idx1] = elem;
      a2c$5.a[idx2] = a1c$6;
      a3c$4.a[idx3] = a2c$5;
      a4c$3.a[idx4] = a3c$4;
      a5c$2.a[idx5] = a4c$3;
      return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, a5c$2, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, this.h, this.j);
    } else if ((index >= this.ae)) {
      var io$3 = ((index - this.ae) | 0);
      var a4$4 = this.am;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.f();
      var a3$5 = a4c$4.a[idx4$1];
      var a3c$5 = a3$5.f();
      var a2$6 = a3c$5.a[idx3$1];
      var a2c$6 = a2$6.f();
      var a1$7 = a2c$6.a[idx2$1];
      var a1c$7 = a1$7.f();
      a1c$7.a[idx1$1] = elem;
      a2c$6.a[idx2$1] = a1c$7;
      a3c$5.a[idx3$1] = a2c$6;
      a4c$4.a[idx4$1] = a3c$5;
      return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, a4c$4, this.af, this.an, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, this.h, this.j);
    } else if ((index >= this.ad)) {
      var io$4 = ((index - this.ad) | 0);
      var a3$6 = this.al;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.f();
      var a2$7 = a3c$6.a[idx3$2];
      var a2c$7 = a2$7.f();
      var a1$8 = a2c$7.a[idx2$2];
      var a1c$8 = a1$8.f();
      a1c$8.a[idx1$2] = elem;
      a2c$7.a[idx2$2] = a1c$8;
      a3c$6.a[idx3$2] = a2c$7;
      return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, a3c$6, this.ae, this.am, this.af, this.an, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, this.h, this.j);
    } else if ((index >= this.ac)) {
      var io$5 = ((index - this.ac) | 0);
      var a2$8 = this.ak;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.f();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.f();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.d, this.ac, a2c$8, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, this.h, this.j);
    } else {
      var a1$10 = this.d;
      var a1c$10 = a1$10.f();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, this.h, this.j);
    }
  } else {
    throw this.aK(index);
  }
});
$p.dW = (function(elem) {
  if ((this.h.a.length < 32)) {
    var suffix1$79 = $m_sci_VectorStatics$().fn(this.h, elem);
    var length0$79 = ((1 + this.j) | 0);
    return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, this.Y, this.a2, this.a1, this.a0, this.Z, suffix1$79, length0$79);
  } else if ((this.Z.a.length < 31)) {
    var suffix2$63 = $m_sci_VectorStatics$().E(this.Z, this.h);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$80 = ((1 + this.j) | 0);
    return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, this.Y, this.a2, this.a1, this.a0, suffix2$63, a, length0$80);
  } else if ((this.a0.a.length < 31)) {
    var suffix3$52 = $m_sci_VectorStatics$().E(this.a0, $m_sci_VectorStatics$().E(this.Z, this.h));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$81 = ((1 + this.j) | 0);
    return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, this.Y, this.a2, this.a1, suffix3$52, $m_sci_VectorStatics$().ao, a$1, length0$81);
  } else if ((this.a1.a.length < 31)) {
    var suffix4$36 = $m_sci_VectorStatics$().E(this.a1, $m_sci_VectorStatics$().E(this.a0, $m_sci_VectorStatics$().E(this.Z, this.h)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$82 = ((1 + this.j) | 0);
    return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, this.Y, this.a2, suffix4$36, $m_sci_VectorStatics$().bj, $m_sci_VectorStatics$().ao, a$2, length0$82);
  } else if ((this.a2.a.length < 31)) {
    var suffix5$15 = $m_sci_VectorStatics$().E(this.a2, $m_sci_VectorStatics$().E(this.a1, $m_sci_VectorStatics$().E(this.a0, $m_sci_VectorStatics$().E(this.Z, this.h))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$83 = ((1 + this.j) | 0);
    return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, this.Y, suffix5$15, $m_sci_VectorStatics$().cs, $m_sci_VectorStatics$().bj, $m_sci_VectorStatics$().ao, a$3, length0$83);
  } else if ((this.Y.a.length < 62)) {
    var data6$16 = $m_sci_VectorStatics$().E(this.Y, $m_sci_VectorStatics$().E(this.a2, $m_sci_VectorStatics$().E(this.a1, $m_sci_VectorStatics$().E(this.a0, $m_sci_VectorStatics$().E(this.Z, this.h)))));
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var length0$84 = ((1 + this.j) | 0);
    return new $c_sci_Vector6(this.d, this.ac, this.ak, this.ad, this.al, this.ae, this.am, this.af, this.an, this.aj, data6$16, $m_sci_VectorStatics$().ff, $m_sci_VectorStatics$().cs, $m_sci_VectorStatics$().bj, $m_sci_VectorStatics$().ao, a$4, length0$84);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cx = (function(f) {
  var prefix1$87 = $m_sci_VectorStatics$().ch(this.d, f);
  var prefix2$70 = $m_sci_VectorStatics$().a7(2, this.ak, f);
  var prefix3$59 = $m_sci_VectorStatics$().a7(3, this.al, f);
  var prefix4$43 = $m_sci_VectorStatics$().a7(4, this.am, f);
  var prefix5$22 = $m_sci_VectorStatics$().a7(5, this.an, f);
  var data6$23 = $m_sci_VectorStatics$().a7(6, this.Y, f);
  var suffix5$22 = $m_sci_VectorStatics$().a7(5, this.a2, f);
  var suffix4$43 = $m_sci_VectorStatics$().a7(4, this.a1, f);
  var suffix3$59 = $m_sci_VectorStatics$().a7(3, this.a0, f);
  var suffix2$70 = $m_sci_VectorStatics$().a7(2, this.Z, f);
  var suffix1$91 = $m_sci_VectorStatics$().ch(this.h, f);
  return new $c_sci_Vector6(prefix1$87, this.ac, prefix2$70, this.ad, prefix3$59, this.ae, prefix4$43, this.af, prefix5$22, this.aj, data6$23, suffix5$22, suffix4$43, suffix3$59, suffix2$70, suffix1$91, this.j);
});
$p.eF = (function(lo, hi) {
  var b = new $c_sci_VectorSliceBuilder(lo, hi);
  b.K(1, this.d);
  b.K(2, this.ak);
  b.K(3, this.al);
  b.K(4, this.am);
  b.K(5, this.an);
  b.K(6, this.Y);
  b.K(5, this.a2);
  b.K(4, this.a1);
  b.K(3, this.a0);
  b.K(2, this.Z);
  b.K(1, this.h);
  return b.e6();
});
$p.cR = (function() {
  return 11;
});
$p.cQ = (function(idx) {
  switch (idx) {
    case 0: {
      return this.d;
      break;
    }
    case 1: {
      return this.ak;
      break;
    }
    case 2: {
      return this.al;
      break;
    }
    case 3: {
      return this.am;
      break;
    }
    case 4: {
      return this.an;
      break;
    }
    case 5: {
      return this.Y;
      break;
    }
    case 6: {
      return this.a2;
      break;
    }
    case 7: {
      return this.a1;
      break;
    }
    case 8: {
      return this.a0;
      break;
    }
    case 9: {
      return this.Z;
      break;
    }
    case 10: {
      return this.h;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.j))) {
    var io = ((index - this.aj) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.Y.a.length) ? this.Y.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a2.a.length) ? this.a2.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a1.a.length) ? this.a1.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a0.a.length) ? this.a0.a[i3].a[i2].a[i1] : ((i2 < this.Z.a.length) ? this.Z.a[i2].a[i1] : this.h.a[i1])))));
    } else if ((index >= this.af)) {
      var io$2 = ((index - this.af) | 0);
      return this.an.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ae)) {
      var io$3 = ((index - this.ae) | 0);
      return this.am.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ad)) {
      var io$4 = ((index - this.ad) | 0);
      return this.al.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ac)) {
      var io$5 = ((index - this.ac) | 0);
      return this.ak.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.d.a[index];
    }
  } else {
    throw this.aK(index);
  }
});
$p.cg = (function(f) {
  return this.cx(f);
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  ip: 1,
  ao: 1,
  ap: 1,
  ak: 1,
  D: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  u: 1,
  C: 1,
  B: 1,
  o: 1,
  r: 1,
  G: 1,
  E: 1,
  n: 1,
  s: 1,
  F: 1,
  a: 1,
  a3: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.b4 = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.b4 = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.b5 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.bb = (function(size) {
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.c0 = (function(from, until) {
  return $f_sc_IndexedSeqOps__slice__I__I__O(this, from, until);
});
$p.b9 = (function(len) {
  var x = this.b4.n();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bp = (function() {
  return "IndexedSeq";
});
$p.n = (function() {
  return this.b4.n();
});
$p.w = (function() {
  return this.b4.n();
});
$p.qU = (function(x) {
  var this$1 = this.b4;
  var str = ("" + $cToS(x));
  this$1.r = (this$1.r + str);
  return this;
});
$p.g = (function() {
  return this.b4.r;
});
$p.oW = (function(xs) {
  if ((xs instanceof $c_sci_WrappedString)) {
    var this$3 = this.b4;
    var str = xs.aR;
    this$3.r = (("" + this$3.r) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.b4.oV(xs.bX);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.b4;
    var s = xs.b4;
    this$4.r = (("" + this$4.r) + s);
  } else {
    var ks = xs.w();
    if ((ks !== 0)) {
      var b = this.b4;
      if ((ks > 0)) {
        b.n();
      }
      var it = xs.m();
      while (it.o()) {
        var c = $uC(it.l());
        var str$1 = ("" + $cToS(c));
        b.r = (b.r + str$1);
      }
    }
  }
  return this;
});
$p.e = (function() {
  return (this.b4.n() === 0);
});
$p.t = (function(i) {
  return $bC(this.b4.p1(i));
});
$p.c = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.b4.p1(i));
});
$p.fq = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oW(coll);
});
$p.ex = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oW(coll);
});
$p.b6 = (function(elem) {
  return this.qU($uC(elem));
});
$p.b7 = (function() {
  return this.b4.r;
});
$p.bo = (function() {
  return $m_scm_IndexedSeq$();
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cV)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cV: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  L: 1,
  N: 1,
  S: 1,
  al: 1,
  o: 1,
  r: 1,
  a0: 1,
  Z: 1,
  b3: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iR)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().id($thiz);
  $thiz.ca = buf.ca;
  $thiz.db = buf.db;
  $thiz.hK = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.hL = ((1 + $thiz.hL) | 0);
  if ($thiz.hK) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.hL = 0;
  this.ca = null;
  this.db = null;
  this.hK = false;
  this.cb = 0;
  this.hL = 0;
  this.ca = $m_sci_Nil$();
  this.db = null;
  this.hK = false;
  this.cb = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.cu = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.bb = (function(size) {
});
$p.m = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.ca.m(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.hL)));
});
$p.e3 = (function() {
  return $m_scm_ListBuffer$();
});
$p.t = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.ca, i);
});
$p.n = (function() {
  return this.cb;
});
$p.w = (function() {
  return this.cb;
});
$p.e = (function() {
  return (this.cb === 0);
});
$p.q4 = (function() {
  this.hK = (!this.e());
  return this.ca;
});
$p.r2 = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.cb === 0)) {
    this.ca = last1;
  } else {
    var x$proxy2 = this.db;
    if ((x$proxy2 === null)) {
      $m_sr_Scala3RunTime$().ba();
    }
    x$proxy2.aB = last1;
  }
  this.db = last1;
  this.cb = ((1 + this.cb) | 0);
  return this;
});
$p.id = (function(xs) {
  var it = xs.m();
  if (it.o()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.l(), $m_sci_Nil$());
    this.ca = last0;
    while (it.o()) {
      var last1 = new $c_sci_$colon$colon(it.l(), $m_sci_Nil$());
      last0.aB = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.cb = len;
    this.db = last0;
  }
  return this;
});
$p.qO = (function(xs) {
  var it = xs.m();
  if (it.o()) {
    var fresh = new $c_scm_ListBuffer().id(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.cb === 0)) {
      this.ca = fresh.ca;
    } else {
      var x$proxy3 = this.db;
      if ((x$proxy3 === null)) {
        $m_sr_Scala3RunTime$().ba();
      }
      x$proxy3.aB = fresh.ca;
    }
    this.db = fresh.db;
    this.cb = ((this.cb + fresh.cb) | 0);
  }
  return this;
});
$p.bp = (function() {
  return "ListBuffer";
});
$p.bo = (function() {
  return $m_scm_ListBuffer$();
});
$p.c = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.ca, i);
});
$p.b7 = (function() {
  return this.q4();
});
$p.b6 = (function(elem) {
  return this.r2(elem);
});
$p.b5 = (function(elems) {
  return this.qO(elems);
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cU)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  cU: 1,
  bj: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  L: 1,
  N: 1,
  aR: 1,
  bk: 1,
  n: 1,
  s: 1,
  S: 1,
  al: 1,
  a: 1,
  a3: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.fg = 0;
  $thiz.d7 = initialElements;
  $thiz.b8 = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.fg = 0;
  this.d7 = null;
  this.b8 = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.m = (function() {
  return this.u5().m();
});
$p.c0 = (function(from, until) {
  return $f_sc_IndexedSeqOps__slice__I__I__O(this, from, until);
});
$p.b9 = (function(len) {
  var x = this.b8;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cu = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.w = (function() {
  return this.b8;
});
$p.k8 = (function(n) {
  this.d7 = $m_scm_ArrayBuffer$().pV(this.d7, this.b8, n);
});
$p.bb = (function(size) {
  if (((size > this.b8) && (size >= 1))) {
    this.k8(size);
  }
});
$p.t = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().kr(n, ((this.b8 - 1) | 0));
  }
  if ((hi > this.b8)) {
    throw $m_scg_CommonErrors$().kr(((hi - 1) | 0), ((this.b8 - 1) | 0));
  }
  return this.d7.a[n];
});
$p.n = (function() {
  return this.b8;
});
$p.u5 = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.fg)));
});
$p.e3 = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.qZ = (function(elem) {
  this.fg = ((1 + this.fg) | 0);
  var newSize = ((1 + this.b8) | 0);
  if ((this.d7.a.length <= ((newSize - 1) | 0))) {
    this.k8(newSize);
  }
  this.b8 = newSize;
  this.d7.a[((newSize - 1) | 0)] = elem;
  return this;
});
$p.oQ = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.b8;
    if ((elemsLength > 0)) {
      this.fg = ((1 + this.fg) | 0);
      this.k8(((this.b8 + elemsLength) | 0));
      $m_s_Array$().gJ(elems.d7, 0, this.d7, this.b8, elemsLength);
      this.b8 = ((this.b8 + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bp = (function() {
  return "ArrayBuffer";
});
$p.bB = (function(xs, start, len) {
  var srcLen = this.b8;
  var destLen = $m_jl_reflect_Array$().bm(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gJ(this.d7, 0, xs, start, copied);
  }
  return copied;
});
$p.c = (function(v1) {
  return this.t((v1 | 0));
});
$p.bo = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.b6 = (function(elem) {
  return this.qZ(elem);
});
$p.b5 = (function(elems) {
  return this.oQ(elems);
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cH)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  cH: 1,
  bj: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  L: 1,
  N: 1,
  aR: 1,
  bk: 1,
  o: 1,
  r: 1,
  a0: 1,
  Z: 1,
  cT: 1,
  n: 1,
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
$p.bb = (function(size) {
});
$p.bp = (function() {
  return "IndexedSeq";
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.c0 = (function(from, until) {
  return $f_sc_IndexedSeqOps__slice__I__I__O(this, from, until);
});
$p.b9 = (function(len) {
  var x = (this.dR.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cu = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.e3 = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.t = (function(index) {
  return this.dR[index];
});
$p.n = (function() {
  return (this.dR.length | 0);
});
$p.w = (function() {
  return (this.dR.length | 0);
});
$p.bY = (function() {
  return "WrappedArray";
});
$p.b7 = (function() {
  return this;
});
$p.b6 = (function(elem) {
  this.dR.push(elem);
  return this;
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  return this.dR[index];
});
$p.bo = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  jZ: 1,
  bj: 1,
  R: 1,
  q: 1,
  i: 1,
  c: 1,
  d: 1,
  h: 1,
  g: 1,
  e: 1,
  f: 1,
  k: 1,
  l: 1,
  b: 1,
  p: 1,
  O: 1,
  H: 1,
  M: 1,
  U: 1,
  T: 1,
  L: 1,
  N: 1,
  aR: 1,
  bk: 1,
  s: 1,
  n: 1,
  Z: 1,
  o: 1,
  r: 1,
  a0: 1,
  cT: 1,
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
