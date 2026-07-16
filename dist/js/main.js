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
        return null.tZ();
      }
    }
  }
}
function $dp_charAt__I__C(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__charAt__I__C(instance, x0);
  } else {
    return instance.fi(x0);
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.tW(x0);
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
    return instance.u0(x0);
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
    return instance.u4(x0);
  }
}
function $dp_split__T__I__AT(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__split__T__I__AT(instance, x0, x1);
  } else {
    return instance.u5(x0, x1);
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
    return instance.u7();
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
$p.s = (function(srcPos, dest, destPos, length) {
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
$p.s = (function(srcPos, dest, destPos, length) {
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
$p.s = (function(srcPos, dest, destPos, length) {
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
$p.s = (function(srcPos, dest, destPos, length) {
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
$p.s = (function(srcPos, dest, destPos, length) {
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
$p.s = (function(srcPos, dest, destPos, length) {
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
$p.s = (function(srcPos, dest, destPos, length) {
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
$p.s = (function(srcPos, dest, destPos, length) {
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
$p.s = (function(srcPos, dest, destPos, length) {
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
  $p.s = (function(srcPos, dest, destPos, length) {
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
  this.aQ = null;
  this.h7 = null;
  this.ib = null;
  $n_Lcom_github_pwharned_clausula_extension_AppBus$ = this;
  new $c_Lcom_raquo_airstream_eventbus_EventBus();
  $m_Lcom_raquo_laminar_api_package$().o.hk.jO($s_Lcom_github_pwharned_clausula_extension_ExtensionStatus$__Idle__Lcom_github_pwharned_clausula_extension_ExtensionStatus());
  this.aQ = $m_Lcom_raquo_laminar_api_package$().o.hk.jO($s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  this.h7 = $m_Lcom_raquo_laminar_api_package$().o.hk.jO(new $c_T2$mcDD$sp(0.0, 0.0));
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
  $m_Lcom_github_pwharned_clausula_extension_Main$().sx(args);
}
function $p_Lcom_github_pwharned_clausula_extension_Main$__createCard__Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient__T__s_Option__s_Option__Lcom_github_pwharned_clausula_extension_domain_Language__V($thiz, ankiClient, clozeText, translation, audio, lang) {
  var note = new $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote(clozeText, translation, audio, "Default", lang, new $c_sci_$colon$colon("clausula", new $c_sci_$colon$colon(lang.es(), $m_sci_Nil$())));
  ankiClient.qD(note).k5(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3) => {
    matchResult1: {
      if ((x$1$3 instanceof $c_s_util_Right)) {
        var $x_1 = $uJ(x$1$3.bI);
        var noteId_$_lo = $x_1.l;
        var noteId_$_hi = $x_1.h;
        console.log(("Card created: " + $s_RTLong__toString__I__I__T(noteId_$_lo, noteId_$_hi)));
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Created(noteId_$_lo, noteId_$_hi));
        break matchResult1;
      }
      if ((x$1$3 instanceof $c_s_util_Left)) {
        var err = x$1$3.dR;
        console.error(("Failed to create card: " + err));
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(err));
        break matchResult1;
      }
      throw new $c_s_MatchError(x$1$3);
    }
  })), $m_s_concurrent_ExecutionContext$().cG());
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
$p.sx = (function(args) {
  var container = document.createElement("div");
  container.id = "clausula-root";
  document.body.appendChild(container);
  $m_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$().sB(container);
  var extractor = new $c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction();
  var ankiClient = new $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient();
  var translator = new $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchTranslation();
  var audio = new $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration();
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream(new $c_Lcom_raquo_airstream_misc_StreamFromSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ.df, true), new $c_s_PartialFunction$Lifted(new $c_Lcom_github_pwharned_clausula_extension_Main$$anon$1())), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$3) => {
    matchResult7: {
      var x19 = $m_Lcom_github_pwharned_clausula_extension_AppBus$().ib;
      if (($m_s_None$() === x19)) {
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed($m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$()));
        break matchResult7;
      }
      if ((x19 instanceof $c_s_Some)) {
        var x21 = x19.dm;
        if ((x21 !== null)) {
          var x23 = x21.eI;
          var x24 = x21.eH;
          var x25 = x21.eG;
          var x14 = $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$().tD(x24, x23);
          if ((x14 instanceof $c_s_util_Left)) {
            var err = x14.dR;
            $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(err));
            break matchResult7;
          }
          if ((x14 instanceof $c_s_util_Right)) {
            var clozeText = x14.bI;
            translator.pL(x24, x25, $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$()).oZ(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((translationSentence$2) => {
              var this$9 = translationSentence$2.pJ();
              var this$10 = (this$9.d() ? $m_s_None$() : this$9.x().eK);
              var detectedLang = (this$10.d() ? $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() : this$10.x());
              return translator.pL(x23, detectedLang, $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$()).oZ(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((translationSentence$1) => ((translationWord$2) => {
                var x$1 = $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
                if (((x$1 === null) ? (detectedLang === null) : (x$1 === detectedLang))) {
                  var this$11 = translationWord$2.pJ();
                  var this$12 = (this$11.d() ? $m_s_None$() : this$11.x().eK);
                  var $x_1 = (this$12.d() ? $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() : this$12.x());
                } else {
                  var $x_1 = detectedLang;
                }
                return audio.rZ(x23, x24, $x_1).i6(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((translationWord$1) => ((audioTag$2) => {
                  if ((translationSentence$1 instanceof $c_s_util_Right)) {
                    var b = translationSentence$1.bI;
                    if ((audioTag$2 instanceof $c_s_util_Right)) {
                      var b$1 = audioTag$2.bI;
                      return ((translationWord$1 instanceof $c_s_util_Right) ? new $c_s_util_Right(($p_Lcom_github_pwharned_clausula_extension_Main$__createCard__Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient__T__s_Option__s_Option__Lcom_github_pwharned_clausula_extension_domain_Language__V(this, ankiClient, clozeText, new $c_s_Some(((translationWord$1.bI.eL + " : ") + b.eL)), new $c_s_Some(b$1), x25), (void 0))) : translationWord$1);
                    } else {
                      return audioTag$2;
                    }
                  } else {
                    return translationSentence$1;
                  }
                }))(translationWord$2)), $m_s_concurrent_ExecutionContext$().cG());
              }))(translationSentence$2)), $m_s_concurrent_ExecutionContext$().cG());
            })), $m_s_concurrent_ExecutionContext$().cG()).i6(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3) => {
              matchResult5: {
                if ((x$1$3 instanceof $c_s_util_Left)) {
                  var value$4 = x$1$3.dR;
                  $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(value$4));
                  break matchResult5;
                }
                if ((x$1$3 instanceof $c_s_util_Right)) {
                  break matchResult5;
                }
                throw new $c_s_MatchError(x$1$3);
              }
            })), $m_s_concurrent_ExecutionContext$().cG());
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
  })), $m_Lcom_raquo_laminar_api_package$().o.tL());
  document.addEventListener("mouseup", ((event$2) => {
    var target = event$2.target;
    if ((target.closest("#clausula-root") !== null)) {
      return (void 0);
    } else {
      matchResult11$2: {
        var x42 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ.df).x();
        var x$2 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
        if (((x$2 === null) ? (x42 === null) : x$2.g(x42))) {
          break matchResult11$2;
        }
        if ((x42 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Created)) {
          break matchResult11$2;
        }
        var selection = window.getSelection();
        if (((selection === null) || ($f_T__trim__T($dp_toString__T(selection)) === ""))) {
          $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
        } else {
          var selectedText = $f_T__trim__T($dp_toString__T(selection));
          var node = selection.anchorNode;
          var x37 = $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$().hT(selectedText);
          if ((x37 instanceof $c_s_util_Left)) {
            $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
            break matchResult11$2;
          }
          if ((x37 instanceof $c_s_util_Right)) {
            var word = x37.bI;
            extractor.rI(word, node).k5(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3$1) => {
              matchResult9: {
                if ((x$1$3$1 instanceof $c_s_util_Left)) {
                  $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
                  break matchResult9;
                }
                if ((x$1$3$1 instanceof $c_s_util_Right)) {
                  var sentence = x$1$3$1.bI;
                  extractor.rs(sentence).k5(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3$2) => {
                    matchResult8: {
                      if ((x$1$3$2 instanceof $c_s_util_Left)) {
                        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
                        break matchResult8;
                      }
                      if ((x$1$3$2 instanceof $c_s_util_Right)) {
                        var lang = x$1$3$2.bI;
                        var preview = new $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview(word, sentence, lang, $ct_T2__O__O__(new $c_T2(), (+event$2.clientX), (+event$2.clientY)));
                        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().h7, $ct_T2__O__O__(new $c_T2(), (+event$2.clientX), (+event$2.clientY)));
                        $m_Lcom_github_pwharned_clausula_extension_AppBus$().ib = new $c_s_Some(preview);
                        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, preview);
                        break matchResult8;
                      }
                      throw new $c_s_MatchError(x$1$3$2);
                    }
                  })), $m_s_concurrent_ExecutionContext$().cG());
                  break matchResult9;
                }
                throw new $c_s_MatchError(x$1$3$1);
              }
            })), $m_s_concurrent_ExecutionContext$().cG());
            break matchResult11$2;
          }
          throw new $c_s_MatchError(x37);
        }
      }
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
$p.hT = (function(s) {
  $m_sc_StringOps$();
  return (($f_T__trim__T(s) !== "") ? new $c_s_util_Right($f_T__trim__T(s)) : new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$()));
});
$p.tD = (function(s, w) {
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
$p.hT = (function(s) {
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
  return $m_Lcom_raquo_laminar_api_package$().o.cE().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-popup"), $m_Lcom_raquo_laminar_api_package$().o.gV().an(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Extracting...", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__previewView__T__T__Lcom_github_pwharned_clausula_extension_domain_Language__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, word, sentence, lang) {
  return $m_Lcom_raquo_laminar_api_package$().o.cE().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-popup"), $m_Lcom_raquo_laminar_api_package$().o.cE().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-word"), $m_Lcom_raquo_laminar_api_package$().o.ts().an(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, word, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)]))])), $m_Lcom_raquo_laminar_api_package$().o.cE().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-sentence"), $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__renderHighlightedSentence__T__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, sentence, word)])), $m_Lcom_raquo_laminar_api_package$().o.cE().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-lang"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, ("Language: " + lang.gJ()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)])), $m_Lcom_raquo_laminar_api_package$().o.cE().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-actions"), $m_Lcom_raquo_laminar_api_package$().o.hX().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-btn-create"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Create Card", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().i0($m_Lcom_raquo_laminar_api_package$().o.gQ(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState());
  })))])), $m_Lcom_raquo_laminar_api_package$().o.hX().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-btn-dismiss"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Dismiss", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().i0($m_Lcom_raquo_laminar_api_package$().o.gQ(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$4$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  })))]))]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__renderHighlightedSentence__T__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, sentence, word) {
  var escapedWord = $m_ju_regex_Pattern$().sT(word);
  var parts = $f_T__split__T__I__AT(sentence, escapedWord, 0);
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().o.gV();
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-sentence-text");
  var $x_1 = $m_Lcom_raquo_laminar_api_package$().o;
  var xs = $m_sc_ArrayOps$().tS(parts);
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
    var part = x0.aZ();
    var i$1 = (x0.aL() | 0);
    var elems = ((i$1 < ((parts.a.length - 1) | 0)) ? new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().o.pC().an(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, part, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)])), new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().o.sz().an(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, word, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)])), $m_sci_Nil$())) : new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().o.pC().an(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, part, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)])), $m_sci_Nil$()));
    var it = new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(elems);
    while (it.p()) {
      var elem = it.l();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h0(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    i = ((1 + i) | 0);
  }
  return $x_3.an(new $c_sjsr_WrappedVarArgs([$x_2, $f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_1, $m_scm_ArrayBuilder$().gZ(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((component$2) => {
    $m_Lcom_raquo_laminar_api_package$();
    return component$2;
  })), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$())]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__creatingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz) {
  return $m_Lcom_raquo_laminar_api_package$().o.cE().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-popup"), $m_Lcom_raquo_laminar_api_package$().o.gV().an(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Creating card...", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__createdView__J__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, noteId_$_lo, noteId_$_hi) {
  return $m_Lcom_raquo_laminar_api_package$().o.cE().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-popup clausula-success"), $m_Lcom_raquo_laminar_api_package$().o.gV().an(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "\u2713 Card created!", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)])), $m_Lcom_raquo_laminar_api_package$().o.hX().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-btn-dismiss"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Close", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().i0($m_Lcom_raquo_laminar_api_package$().o.gQ(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$5$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  })))]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorView__Lcom_github_pwharned_clausula_extension_domain_AppError__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, error) {
  return $m_Lcom_raquo_laminar_api_package$().o.cE().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-popup clausula-error"), $m_Lcom_raquo_laminar_api_package$().o.gV().an(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, ("Error: " + $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorMessage__Lcom_github_pwharned_clausula_extension_domain_AppError__T($thiz, error)), $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx)])), $m_Lcom_raquo_laminar_api_package$().o.hX().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bn.bJ("clausula-btn-dismiss"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Close", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bx), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().i0($m_Lcom_raquo_laminar_api_package$().o.gQ(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$6$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  })))]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorMessage__Lcom_github_pwharned_clausula_extension_domain_AppError__T($thiz, error) {
  return (($m_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$() === error) ? "Anki is not running" : (($m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$() === error) ? "No word found" : (($m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$() === error) ? "Could not extract sentence" : (($m_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$() === error) ? "Unsupported language" : (($m_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$() === error) ? "Card already exists" : ((error instanceof $c_Lcom_github_pwharned_clausula_extension_domain_ApiError) ? error.eJ : error.h()))))));
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
$p.sB = (function(container) {
  var island = $m_Lcom_raquo_laminar_api_package$().o.cE().an(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.sO().or("fixed"), $m_Lcom_raquo_laminar_api_package$().o.tR().or("999999"), $m_Lcom_raquo_laminar_api_package$().o.su().jG(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().h7.df, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => (x$1$2.os() + "px"))), $m_s_None$()), $m_s_$less$colon$less$().hx), $m_Lcom_raquo_laminar_api_package$().o.tF().jG(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().h7.df, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$1) => ((x$1$2$1.ot() + 20.0) + "px"))), $m_s_None$()), $m_s_$less$colon$less$().hx), $m_Lcom_raquo_laminar_api_package$().o.ru().jG(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ.df, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => {
    var x$1 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState();
    if (((x$1 === null) ? (x$1$2$2 === null) : x$1.g(x$1$2$2))) {
      return "none";
    } else {
      return "block";
    }
  })), $m_s_None$()), $m_s_$less$colon$less$().hx), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().qP(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().aQ.df, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$3) => {
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
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__previewView__T__T__Lcom_github_pwharned_clausula_extension_domain_Language__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, x$1$2$3.eI, x$1$2$3.eH, x$1$2$3.eG);
    }
    var x$5 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
    if (((x$5 === null) ? (x$1$2$3 === null) : x$5.g(x$1$2$3))) {
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__creatingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this);
    }
    if ((x$1$2$3 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Created)) {
      var $x_1 = x$1$2$3;
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__createdView__J__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $x_1.gs, $x_1.gt);
    }
    if ((x$1$2$3 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed)) {
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorView__Lcom_github_pwharned_clausula_extension_domain_AppError__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, x$1$2$3.fC);
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
  var x = $thiz.cK();
  return ((x === (void 0)) ? $thiz.cC() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().pU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))), $m_s_PartialFunction$().hz, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.pU = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.rY = (function(onTry, handleObserverErrors) {
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
$p.pu = (function(this$, observer) {
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
  this.eO = 0;
  this.eO = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.pm = (function() {
  if ((this.eO === 2147483647)) {
    this.eO = 1;
  } else {
    this.eO = ((1 + this.eO) | 0);
  }
  return this.eO;
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
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().gX();
  this.ih = ((x === (void 0)) ? 1 : ((1 + x.ih) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().hc === (-1)) || (this.ih > $m_Lcom_raquo_airstream_core_Transaction$().hc))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().cp(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().hc));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().b8) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().e7.push(this) | 0);
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
  this.hc = 0;
  this.kQ = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.hc = 1000;
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
$p.oJ = (function(transaction) {
  try {
    transaction.ig.c(transaction);
    var x = transaction.kP;
    if ((x !== (void 0))) {
      while (x.u2()) {
        x.tX().u6(transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cp(e$2);
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
  if ((($thiz.fP.length | 0) === 0)) {
    if ((($thiz.e7.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
        while ((($thiz.e7.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jI($thiz.e7.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
      while ((($thiz.fP.length | 0) > 0)) {
        var callback = $thiz.fP.shift();
        try {
          callback.c(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().cp(e$2);
        }
      }
      while ((($thiz.e7.length | 0) > 0)) {
        var _trx = $thiz.e7.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().jI(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.b8 = false;
  this.fP = null;
  this.e7 = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.b8 = false;
  this.fP = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_F1.r().C)([])));
  this.e7 = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
$p.qt = (function(callback) {
  this.fP.push(callback);
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
  return $thiz.e8.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.hd.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.hd.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.e8.set(parent, newChildren);
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
      (!(!$thiz.e8.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.hd = null;
  this.e8 = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.hd = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.e8 = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.jI = (function(newTransaction) {
  var x = this.gX();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().oJ(newTransaction);
    this.rx(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.rx = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.gX();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().n(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.sS(transaction$tailLocal1);
    transaction$tailLocal1.ig = $m_Lcom_raquo_airstream_core_Transaction$().kQ;
    var maybeNextTransaction = this.gX();
    if ($m_sr_BoxesRunTime$().n(maybeNextTransaction, (void 0))) {
      if (((this.e8.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.e8.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.eq + (transactions.length | 0)) | 0);
          numChildren.eq = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.eq) + " children for ") + (this.e8.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().oJ(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.sS = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().n(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.gX();
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
$p.gX = (function() {
  return this.hd[0];
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
  var index = ($thiz.dd.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.dd.splice(index, 1);
    if ((!$thiz.bL.d())) {
      subscription.pp();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.hh.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.hh.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.ls = null;
  this.dd = null;
  this.eQ = false;
  this.hh = null;
  this.bL = null;
  this.eR = 0;
  this.ls = onAccessAfterKilled;
  this.dd = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.eQ = true;
  this.hh = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.bL = $m_s_None$();
  this.eR = 0;
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
      this.eQ = false;
      this.eR = 0;
      var i = 0;
      var originalNumSubs = (this.dd.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.eR) | 0);
        this.dd[ix].po(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.eQ = true;
      this.eR = 0;
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
$p.rp = (function() {
  if ((!this.bL.d())) {
    this.eQ = false;
    var arr = this.dd;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].pp();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.bL;
    if ((!this$4.d())) {
      this$4.x().pj();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.eQ = true;
    this.bL = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.qN = (function(subscription, prepend) {
  if (prepend) {
    this.eR = ((1 + this.eR) | 0);
    this.dd.unshift(subscription);
  } else {
    this.dd.push(subscription);
  }
  var this$1 = this.bL;
  if ((!this$1.d())) {
    var x0 = this$1.x();
    subscription.po(x0);
  }
});
$p.t3 = (function(subscription) {
  if (this.eQ) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.hh.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  eh: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.hi = null;
  this.lt = null;
  this.hj = null;
  this.hi = dynamicOwner;
  this.lt = activate;
  this.hj = $m_s_None$();
  dynamicOwner.qN(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.i5 = (function() {
  this.hi.t3(this);
});
$p.po = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.hj = this.lt.c(owner);
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
$p.pp = (function() {
  var this$1 = this.hj;
  if ((!this$1.d())) {
    this$1.x().i5();
    this.hj = $m_s_None$();
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
$p.h5 = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => new $c_s_Some(activate.c(owner)))), prepend);
});
$p.pF = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => {
    activate.c(owner);
    return $m_s_None$();
  })), prepend);
});
$p.tu = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h5(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
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
  $thiz.oK($m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.fy();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.fy().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.fy().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.fy().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.fy().push(subscription);
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
  owner.pr(this);
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
  this.de = null;
  this.ea = false;
  this.ly = activate;
  this.lz = deactivate;
  this.de = $m_s_None$();
  this.ea = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.sm = (function() {
  var this$1 = this.de;
  return ((!this$1.d()) && (!this$1.x().hi.bL.d()));
});
$p.tm = (function(nextOwner) {
  if (this.ea) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.de;
  if ((!this$1.d())) {
    var x0 = this$1.x();
    var x$2 = x0.hi;
    var $x_1 = ((nextOwner === null) ? (x$2 === null) : (nextOwner === x$2));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.sm() && (!nextOwner.bL.d()))) {
      this.ea = true;
    }
    var this$3 = this.de;
    if ((!this$3.d())) {
      this$3.x().i5();
      this.de = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h5(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((parentOwner) => {
      if ((!this.ea)) {
        this.ly.M();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        if ((!this.ea)) {
          this.lz.M();
        }
      })));
    })), false);
    this.de = new $c_s_Some(newPilotSubscription);
    this.ea = false;
  }
});
$p.r2 = (function() {
  if (this.ea) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.de;
  if ((!this$1.d())) {
    this$1.x().i5();
  }
  this.de = $m_s_None$();
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
$p.jO = (function(initial) {
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
$p.sb = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.rO = (function(this$, cb) {
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
  this.rn($m_Lcom_raquo_laminar_api_package$().o.tw().tx());
  this.lL = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.qO = (function(parent, child) {
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
$p.sZ = (function(parent, child) {
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
$p.sh = (function(parent, newChild, referenceChild) {
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
$p.sg = (function(parent, newChild, referenceChild) {
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
$p.t6 = (function(parent, newChild, oldChild) {
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
$p.sq = (function(node, ancestor) {
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
$p.qC = (function(element, listener) {
  element.addEventListener(listener.eW.hm.hn, listener.iF, listener.iG);
});
$p.t0 = (function(element, listener) {
  element.removeEventListener(listener.eW.hm.hn, listener.iF, listener.iG);
});
$p.rm = (function(tag) {
  return document.createElement(tag.iP);
});
$p.s3 = (function(element, attr) {
  var x = this.s4(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.iA.jX(x));
});
$p.s4 = (function(element, attr) {
  var domValue = element.bf.getAttributeNS(null, attr.fS);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.tj = (function(element, attr, value) {
  this.tk(element, attr, attr.iA.jY(value));
});
$p.tk = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.t1(element, attr);
  } else {
    element.bf.setAttribute(attr.fS, domValue);
  }
});
$p.t1 = (function(element, attr) {
  element.bf.removeAttribute(attr.fS);
});
$p.tl = (function(element, styleProp, value) {
  var ref = element.bf;
  var styleCssName = styleProp.ec;
  var prefixes = styleProp.ed;
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
$p.ti = (function(element, style, value) {
  var ref = element.bf;
  var styleCssName = style.ec;
  var prefixes = style.ed;
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
$p.rn = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.mS);
});
$p.s6 = (function(element, attr) {
  var x = this.s7(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.iB.jX(x));
});
$p.s7 = (function(element, attr) {
  var $x_2 = element.kz();
  var this$1 = attr.hp;
  var $x_1 = $x_2.getAttributeNS((this$1.d() ? null : this$1.x()), attr.iC);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.tn = (function(element, attr, value) {
  this.to(element, attr, attr.iB.jY(value));
});
$p.to = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.t4(element, attr);
  } else {
    var this$1 = attr.hp;
    if (this$1.d()) {
      element.kz().setAttribute(attr.ho, domValue);
    } else {
      var x0 = this$1.x();
      element.kz().setAttributeNS(x0, attr.ho, domValue);
    }
  }
});
$p.t4 = (function(element, attr) {
  var $x_1 = element.kz();
  var this$1 = attr.hp;
  $x_1.removeAttributeNS((this$1.d() ? null : this$1.x()), attr.iC);
});
$p.rl = (function(text) {
  return document.createComment(text);
});
$p.ro = (function(text) {
  return document.createTextNode(text);
});
$p.sn = (function(element) {
  return $m_sc_StringOps$().r7(element.tagName, 45);
});
$p.rr = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.oO(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.oO = (function(node) {
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
$p.rq = (function(node) {
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
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().rO(this.iv, $m_sjs_js_Any$().i1(f));
  } else {
    $m_sc_ArrayOps$().rR(this.lM, f);
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
  $thiz.hk = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.pW = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    _$1.mE.bf.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cc.bL.d()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((c) => {
      if (ignoreNextActivation.hL) {
        var ev$5 = false;
        ignoreNextActivation.hL = ev$5;
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
  this.hl = null;
  this.mt = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.hl = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
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
  $thiz.bn = $thiz.lW;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().hl);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.fS, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().s3(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().tj(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.pV = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().hl, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.ho, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().s6(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().tn(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.mu = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().o.pS();
  $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().o.kv()])));
  $m_Lcom_raquo_laminar_api_package$().o.pS();
  $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().o.kv(), $m_Lcom_raquo_laminar_api_package$().o.sK()])));
  $m_Lcom_raquo_laminar_api_package$().o.r0();
  $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().o.kv(), $m_Lcom_raquo_laminar_api_package$().o.gQ()])));
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
$p.qP = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((ctx, owner, hooks) => {
    if ((!ctx.fR)) {
      ctx.p0();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.ty(maybeLastSeenChild.ff, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.ff = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.ty = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.fR)) {
    ctx.p0();
  }
  var elem = ctx.eS;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().n(maybeLastSeenChild.ao(), ctx.eU.ao().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().si(ctx.eT, newChildNode, ctx.eU, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().t5(ctx.eT, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = ((elem$1 - 1) | 0);
    elem$1 = ev$4;
  }
  ctx.t2(newChildNode);
  ctx.eb.clear();
  ctx.eb.set(newChildNode.ao(), newChildNode);
  ctx.eS = 1;
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
  this.eT = null;
  this.eU = null;
  this.fR = false;
  this.eS = 0;
  this.eb = null;
  this.eT = parentNode;
  this.eU = sentinelNode;
  this.fR = strictMode;
  this.eS = extraNodeCount;
  this.eb = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.p0 = (function() {
  if ((this.fR || (this.eS !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().rq(this.eT.bf)));
  }
  if ((this.eb === null)) {
    this.eb = new Map();
  }
  if ((!(!(!(this.eU.ao() instanceof Comment))))) {
    var contentNode = this.eU;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().sh(this.eT.bf, newSentinelNode.iI, contentNode.ao());
    this.eU = newSentinelNode;
    this.eS = 1;
    this.eb.set(contentNode.ao(), contentNode);
  }
  this.fR = true;
});
$p.t2 = (function(after) {
  var elem = this.eS;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = after.ao().nextSibling;
    if ((prevChildRef === null)) {
      var ev$3 = 0;
      elem$1 = ev$3;
    } else {
      var maybePrevChild = this.eb.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        var ev$4 = 0;
        elem$1 = ev$4;
      } else if ((maybePrevChild !== (void 0))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().sY(this.eT, maybePrevChild);
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
$p.t8 = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gu(parentNode, sentinelNode, hooks);
  return this.tK(parentNode, sentinelNode, strictMode);
});
$p.tK = (function(parentNode, sentinelNode, strictMode) {
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
$p.pn = (function(items, separator) {
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
  this.hm = null;
  this.mD = false;
  this.mC = false;
  this.mB = null;
  this.hm = eventProp;
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
$p.i0 = (function(eventProp, shouldUseCapture, shouldBePassive) {
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
  this.pY = null;
  this.pZ = null;
  this.q0 = null;
  this.q1 = null;
  this.pY = "http://www.w3.org/2000/svg";
  this.pZ = "http://www.w3.org/1999/xlink";
  this.q0 = "http://www.w3.org/XML/1998/namespace";
  this.q1 = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.sD = (function(namespace) {
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
  this.q2 = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.q2 = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
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
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => _$4.tC())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
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
$p.gu = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.eE(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pq(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().qO(parent.ao(), child.ao());
  if (appended) {
    child.ez(nextParent);
  }
  return appended;
});
$p.sY = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().n(child.ao().parentNode, parent.ao())) {
    child.eE($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().sZ(parent.ao(), child.ao());
    child.ez($m_s_None$());
  }
  return removed;
});
$p.si = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.eE(nextParent);
  if ((hooks !== (void 0))) {
    hooks.pq(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().sg(parent.ao(), newChild.ao(), referenceChild.ao());
  newChild.ez(nextParent);
  return inserted;
});
$p.t5 = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.jS().bt(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.eE($m_s_None$());
      newChild.eE(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.pq(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().t6(parent.ao(), newChild.ao(), oldChild.ao());
      if (replaced) {
        oldChild.ez($m_s_None$());
        newChild.ez(newChildNextParent);
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
$p.tJ = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h5(element.cc, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
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
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().co("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
  var PatBC = $m_jl_StackTrace$StringRE$().co("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().co("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().co("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().co("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().co("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().dg.call(dict, encodedName)))) {
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().co("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().bK("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().bK("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().bK("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().bK("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
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
  var lineRE = $m_jl_StackTrace$StringRE$().co("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().co("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().co("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().co("<anonymous function>"), "{anonymous}");
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
$p.rH = (function(jsError) {
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
$p.co = (function(this$) {
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
  this.f1 = null;
  $n_jl_System$Streams$ = this;
  this.f1 = new $c_jl_JSConsoleBasedPrintStream(true);
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
    return ((!(!$m_jl_Utils$Cache$().dg.call(dict, key))) ? dict[key] : default$1);
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
    this.h3(null);
  }
  return this.mV;
});
$p.h3 = (function(o) {
  this.mV = o;
  this.iW = true;
});
var $d_jl_ThreadLocal = new $TypeData().i($c_jl_ThreadLocal, "java.lang.ThreadLocal", ({
  gh: 1
}));
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.dg = null;
  $n_jl_Utils$Cache$ = this;
  this.dg = Object.prototype.hasOwnProperty;
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
$p.aN = (function(array) {
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
$p.rA = (function(s, enc) {
  var this$1 = $m_Ljava_nio_charset_Charset$();
  var dict = $p_Ljava_nio_charset_Charset$__CharsetMap__O(this$1);
  var key = enc.toLowerCase();
  if ((!(!(!$m_jl_Utils$Cache$().dg.call(dict, key))))) {
    throw new $c_Ljava_io_UnsupportedEncodingException(enc);
  }
  return this.rB(s, $m_Ljava_nio_charset_Charset$().rP(enc));
});
$p.rB = (function(s, charset) {
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
    var charBuffer = $m_Ljava_nio_CharBuffer$().tP(s, 0, s.length);
    var encoder = charset.ks().sM($m_Ljava_nio_charset_CodingErrorAction$().j1);
    var bufferArray = new $ac_B($doubleToInt(Math.fround((Math.fround(((1 + ((len - i) | 0)) | 0)) * encoder.fZ))));
    var buffer = $m_Ljava_nio_HeapByteBuffer$().tQ(bufferArray, 0, bufferArray.a.length, 0, bufferArray.a.length, false);
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
        $c_Ljava_nio_Buffer.prototype.td.call(buffer);
        encoder.t9().rC(charBuffer, buffer, true);
        var end = buffer.t;
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
  $thiz.cO = _capacity;
  $thiz.G = $thiz.cO;
  $thiz.t = 0;
  $thiz.cr = (-1);
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_Buffer() {
  this.cO = 0;
  this.G = 0;
  this.t = 0;
  this.cr = 0;
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
  this.t = newPosition;
  if ((this.cr > newPosition)) {
    this.cr = (-1);
  }
  return this;
});
$p.km = (function(newLimit) {
  if (((newLimit < 0) || (newLimit > this.cO))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  this.G = newLimit;
  if ((this.t > newLimit)) {
    this.t = newLimit;
    if ((this.cr > newLimit)) {
      this.cr = (-1);
    }
  }
  return this;
});
$p.td = (function() {
  this.cr = (-1);
  this.t = 0;
  return this;
});
$p.h = (function() {
  return ((((((($objectClassName(this) + "[pos=") + this.t) + " lim=") + this.G) + " cap=") + this.cO) + "]");
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
$p.tP = (function(csq, start, end) {
  return $m_Ljava_nio_StringCharBuffer$().tO(csq, 0, $dp_length__I(csq), start, ((end - start) | 0));
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
$p.tQ = (function(array, arrayOffset, capacity, initialPosition, initialLength, isReadOnly) {
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
$p.tO = (function(csq, csqOffset, capacity, initialPosition, initialLength) {
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
  if (((((2 & $thiz.hq) << 24) >> 24) === 0)) {
    var m = ({});
    var array = $p_Ljava_nio_charset_Charset$__allSJSCharsets__O($thiz);
    var len = (array.length | 0);
    var i = 0;
    while ((i !== len)) {
      var t = array[i];
      var this$3 = t.by;
      var key = this$3.toLowerCase();
      m[key] = t;
      var aliases = t.cs;
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
    $thiz.hq = (((2 | $thiz.hq) << 24) >> 24);
  }
  return $thiz.iY;
}
function $p_Ljava_nio_charset_Charset$__CharsetMap__O($thiz) {
  return (((((2 & $thiz.hq) << 24) >> 24) === 0) ? $p_Ljava_nio_charset_Charset$__CharsetMap$lzycompute__O($thiz) : $thiz.iY);
}
function $p_Ljava_nio_charset_Charset$__allSJSCharsets__O($thiz) {
  return [$m_Ljava_nio_charset_US\uff3fASCII$(), $m_Ljava_nio_charset_ISO\uff3f8859\uff3f1$(), $m_Ljava_nio_charset_UTF\uff3f8$(), $m_Ljava_nio_charset_UTF\uff3f16BE$(), $m_Ljava_nio_charset_UTF\uff3f16LE$(), $m_Ljava_nio_charset_UTF\uff3f16$()];
}
/** @constructor */
function $c_Ljava_nio_charset_Charset$() {
  this.iY = null;
  this.hq = 0;
}
$p = $c_Ljava_nio_charset_Charset$.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_charset_Charset$;
/** @constructor */
function $h_Ljava_nio_charset_Charset$() {
}
$h_Ljava_nio_charset_Charset$.prototype = $p;
$p.rP = (function(charsetName) {
  var dict = $p_Ljava_nio_charset_Charset$__CharsetMap__O(this);
  var key = charsetName.toLowerCase();
  if ((!(!(!$m_jl_Utils$Cache$().dg.call(dict, key))))) {
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
  $thiz.fZ = _maxBytesPerChar;
  $thiz.f2 = _replacement;
  $thiz.fY = $m_Ljava_nio_charset_CodingErrorAction$().hr;
  $thiz.f3 = $m_Ljava_nio_charset_CodingErrorAction$().hr;
  $thiz.dj = 0;
  return $thiz;
}
function $ct_Ljava_nio_charset_CharsetEncoder__Ljava_nio_charset_Charset__F__F__($thiz, cs, _averageBytesPerChar, _maxBytesPerChar) {
  $ct_Ljava_nio_charset_CharsetEncoder__Ljava_nio_charset_Charset__F__F__AB__($thiz, cs, _averageBytesPerChar, _maxBytesPerChar, new $ac_B(new Int8Array([63])));
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_charset_CharsetEncoder() {
  this.fZ = 0.0;
  this.f2 = null;
  this.fY = null;
  this.f3 = null;
  this.dj = 0;
}
$p = $c_Ljava_nio_charset_CharsetEncoder.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_charset_CharsetEncoder;
/** @constructor */
function $h_Ljava_nio_charset_CharsetEncoder() {
}
$h_Ljava_nio_charset_CharsetEncoder.prototype = $p;
$p.sM = (function(newAction) {
  if ((newAction === null)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "null CodingErrorAction");
  }
  this.f3 = newAction;
  return this;
});
$p.rC = (function(in$1, out, endOfInput) {
  if (((this.dj === 3) || ((!endOfInput) && (this.dj === 2)))) {
    throw $ct_jl_IllegalStateException__(new $c_jl_IllegalStateException());
  }
  this.dj = (endOfInput ? 2 : 1);
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
    if ((result1.g0 === 0)) {
      var remaining = ((in$1.G - in$1.t) | 0);
      if ((endOfInput && (remaining > 0))) {
        var this$1 = $m_Ljava_nio_charset_CoderResult$();
        switch (remaining) {
          case 1: {
            var result2 = this$1.dl;
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
            var result2 = this$1.sr(remaining);
          }
        }
      } else {
        var result2 = result1;
      }
    } else {
      var result2 = result1;
    }
    if (((result2.g0 === 0) || (result2.g0 === 1))) {
      return result2;
    } else {
      var action = ((result2.g0 === 3) ? this.f3 : this.fY);
      var x = $m_Ljava_nio_charset_CodingErrorAction$().j1;
      if (((x === null) ? (action === null) : (x === action))) {
        if ((((out.G - out.t) | 0) < this.f2.a.length)) {
          return $m_Ljava_nio_charset_CoderResult$().ct;
        } else {
          var src = this.f2;
          out.sR(src, 0, src.a.length);
          var $x_1 = in$1.t;
          var l = result2.iZ;
          if ((l < 0)) {
            throw $ct_jl_UnsupportedOperationException__(new $c_jl_UnsupportedOperationException());
          }
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, (($x_1 + l) | 0));
        }
      } else {
        var x$3 = $m_Ljava_nio_charset_CodingErrorAction$().hr;
        if (((x$3 === null) ? (action === null) : (x$3 === action))) {
          return result2;
        } else {
          var x$5 = $m_Ljava_nio_charset_CodingErrorAction$().n9;
          if (((x$5 === null) ? (action === null) : (x$5 === action))) {
            var $x_2 = in$1.t;
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
$p.t9 = (function() {
  this.dj = 0;
  this.pb();
  return this;
});
$p.pb = (function() {
});
/** @constructor */
function $c_Ljava_nio_charset_CoderResult(kind, _length) {
  this.g0 = 0;
  this.iZ = 0;
  this.g0 = kind;
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
  this.ct = null;
  this.dk = null;
  this.dl = null;
  this.n3 = null;
  this.n4 = null;
  this.n5 = null;
  this.j0 = null;
  this.n6 = null;
  this.n7 = null;
  this.q3 = null;
  this.q4 = null;
  this.q5 = null;
  $n_Ljava_nio_charset_CoderResult$ = this;
  this.ct = new $c_Ljava_nio_charset_CoderResult(1, (-1));
  this.dk = new $c_Ljava_nio_charset_CoderResult(0, (-1));
  this.dl = new $c_Ljava_nio_charset_CoderResult(2, 1);
  this.n3 = new $c_Ljava_nio_charset_CoderResult(2, 2);
  this.n4 = new $c_Ljava_nio_charset_CoderResult(2, 3);
  this.n5 = new $c_Ljava_nio_charset_CoderResult(2, 4);
  this.j0 = [];
  this.n6 = new $c_Ljava_nio_charset_CoderResult(3, 1);
  this.n7 = new $c_Ljava_nio_charset_CoderResult(3, 2);
  this.q3 = new $c_Ljava_nio_charset_CoderResult(3, 3);
  this.q4 = new $c_Ljava_nio_charset_CoderResult(3, 4);
  this.q5 = [];
}
$p = $c_Ljava_nio_charset_CoderResult$.prototype = new $h_O();
$p.constructor = $c_Ljava_nio_charset_CoderResult$;
/** @constructor */
function $h_Ljava_nio_charset_CoderResult$() {
}
$h_Ljava_nio_charset_CoderResult$.prototype = $p;
$p.sr = (function(length) {
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
  this.hr = null;
  $n_Ljava_nio_charset_CodingErrorAction$ = this;
  this.n9 = new $c_Ljava_nio_charset_CodingErrorAction("IGNORE");
  this.j1 = new $c_Ljava_nio_charset_CodingErrorAction("REPLACE");
  this.hr = new $c_Ljava_nio_charset_CodingErrorAction("REPORT");
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
$p.qW = (function(a, key) {
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
$p.oV = (function(a, b) {
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
$p.oW = (function(a, b) {
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
$p.oT = (function(a, b) {
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
$p.V = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).ak.Q().ak.U(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.Z = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).ak.Q().ak.U(retLength);
  original.s(from, ret, 0, copyLength);
  return ret;
});
$p.rd = (function(original, start, end) {
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
$p.rj = (function(original, start, end) {
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
$p.rh = (function(original, start, end) {
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
$p.ri = (function(original, start, end) {
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
$p.re = (function(original, start, end) {
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
$p.rg = (function(original, start, end) {
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
$p.rf = (function(original, start, end) {
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
$p.rk = (function(original, start, end) {
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
  var h = this.cn(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.cn = (function(hash, data) {
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
        $thiz.P = ($thiz.P | $m_ju_regex_PatternCompiler$().ph(x.charCodeAt(value)));
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
        $thiz.P = ($thiz.P & (~$m_ju_regex_PatternCompiler$().ph(x$1.charCodeAt(value$1))));
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
  var s = $m_ju_regex_PatternCompiler$().eu(cp);
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
        return (((66 & $thiz.P) !== 2) ? s : (((((cp - 65) | 0) >>> 0) <= 25) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().eu(((32 + cp) | 0))) + "]") : (((((cp - 97) | 0) >>> 0) <= 25) ? ((("[" + $m_ju_regex_PatternCompiler$().eu(((cp - 32) | 0))) + s) + "]") : s)));
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
      var x1$2 = cls.hw;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + cls.cu) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + cls.cu) + "}");
          break;
        }
        case 2: {
          return (("[" + cls.cu) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().i4(cls.cu);
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
        $thiz.fr("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.P) !== 0)) {
        $thiz.fr("\\B with UNICODE_CASE", "2018");
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
      var dict = $thiz.g1;
      if ((!(!(!$m_jl_Utils$Cache$().dg.call(dict, groupName))))) {
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
  return ((dispatchChar >= 97) ? positive : positive.sE());
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
  if ((!(!(!$m_jl_Utils$Cache$().dg.call(dict, property))))) {
    $thiz.fr("Unicode character family", "2018");
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
          return builder.rN();
          break;
        }
        case 38: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if ((($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 38))) {
            $thiz.b = ((1 + $thiz.b) | 0);
            builder.tr();
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
              builder.qz($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
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
              builder.qB(pattern, $thiz.b, end);
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
    return (("(" + $thiz.gN(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var index$1 = ((2 + start) | 0);
    var c1 = pattern.charCodeAt(index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.b = ((3 + start) | 0);
      return ((("" + pattern.substring(start, ((3 + start) | 0))) + $thiz.gN(true)) + ")");
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
        if ((!(!$m_jl_Utils$Cache$().dg.call(dict, name)))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.bM = ((1 + $thiz.bM) | 0);
        $thiz.bN.push($thiz.bM);
        var dict$1 = $thiz.g1;
        var value = ((($thiz.bN.length | 0) - 1) | 0);
        dict$1[name] = value;
        $thiz.b = ((1 + $thiz.b) | 0);
        return (("(" + $thiz.gN(true)) + ")");
      } else {
        if (((c2 !== 33) && (c2 !== 61))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.fr("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.b = ((3 + start) | 0);
      $thiz.bM = ((1 + $thiz.bM) | 0);
      var groupNumber = $thiz.bM;
      return (((("(?:(?=(" + $thiz.gN(true)) + "))\\") + groupNumber) + ")");
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
      builder$1.hS(startCodePoint);
      builder$1.hS(45);
    } else {
      $thiz.b = (($thiz.b + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      builder$1.qA(startCodePoint, endCodePoint);
    }
  } else {
    builder$1.hS(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.az = null;
  this.P = 0;
  this.hv = false;
  this.b = 0;
  this.bM = 0;
  this.bN = null;
  this.g1 = null;
  this.az = pattern;
  this.P = flags;
  this.hv = false;
  this.b = 0;
  this.bM = 0;
  this.bN = [0];
  this.g1 = ({});
}
$p = $c_ju_regex_PatternCompiler.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $p;
$p.r6 = (function() {
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
    this.fr("MULTILINE", "2018");
  }
  if (((256 & this.P) !== 0)) {
    this.fr("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.az);
  } else {
    if ((this.az.substring(this.b, ((2 + this.b) | 0)) === "\\G")) {
      this.hv = true;
      this.b = ((2 + this.b) | 0);
    }
    var jsPattern = this.gN(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().j6 ? "us" : "u");
  var jsFlags = (((66 & this.P) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.az, this.P, jsPattern, jsFlags, this.hv, (((this.bN.length | 0) - 1) | 0), this.bN, this.g1);
});
$p.fr = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$p.gN = (function(insideGroup) {
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
          if ((this.hv && (!insideGroup))) {
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
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().eu(dispatchCP)) + "'"));
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
  this.qa = false;
  this.q9 = false;
  this.j6 = false;
  this.nh = null;
  this.q6 = null;
  this.nk = null;
  this.ni = null;
  this.q7 = null;
  this.nl = null;
  this.nj = null;
  this.q8 = null;
  this.j7 = null;
  this.qb = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.nm = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.nn = new RegExp("(\\\\+)(\\d+)", "g");
  this.qa = true;
  this.q9 = true;
  this.j6 = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.nh = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.q6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.nk = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.ni = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.q7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.nl = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.nj = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.q8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
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
  this.qb = new RegExp("(?:^|_)[a-z]", "g");
}
$p = $c_ju_regex_PatternCompiler$.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $p;
$p.r5 = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).r6();
});
$p.ph = (function(c) {
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
$p.eu = (function(codePoint) {
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
  var s = $m_ju_regex_PatternCompiler$().eu(codePoint);
  return (((((((codePoint - 92) | 0) >>> 0) <= 1) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.j8 = false;
  this.j9 = false;
  this.g2 = null;
  this.bY = null;
  this.S = null;
  this.j8 = asciiCaseInsensitive;
  this.j9 = isNegated;
  this.g2 = "";
  this.bY = "";
  this.S = "";
}
$p = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $p;
$p.rN = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.g2 === "") ? conjunct : ((("(?:" + this.g2) + conjunct) + ")"));
});
$p.tr = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.g2 = (this.g2 + (this.j9 ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.bY = "";
  this.S = "";
});
$p.qz = (function(cls) {
  var x1 = cls.hw;
  switch (x1) {
    case 0: {
      this.S = ((this.S + ("\\p{" + cls.cu)) + "}");
      break;
    }
    case 1: {
      this.S = ((this.S + ("\\P{" + cls.cu)) + "}");
      break;
    }
    case 2: {
      this.S = (("" + this.S) + cls.cu);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().i4(cls.cu));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$p.qB = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I(str, i);
    this.hS(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$p.hS = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.S = (("" + s) + this.S);
  } else {
    this.S = (("" + this.S) + s);
  }
  if (this.j8) {
    if (((((codePoint - 65) | 0) >>> 0) <= 25)) {
      this.S = (("" + this.S) + $m_ju_regex_PatternCompiler$().eu(((32 + codePoint) | 0)));
    } else if (((((codePoint - 97) | 0) >>> 0) <= 25)) {
      this.S = (("" + this.S) + $m_ju_regex_PatternCompiler$().eu(((codePoint - 32) | 0)));
    }
  }
});
$p.qA = (function(startCodePoint, endCodePoint) {
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
    $thiz.jb = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.hw), $thiz.cu);
    $thiz.ja = true;
  }
  return $thiz.jb;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.jb = null;
  this.hw = 0;
  this.cu = null;
  this.ja = false;
  this.hw = kind;
  this.cu = data;
}
$p = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $p;
$p.sE = (function() {
  return ((!this.ja) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.jb);
});
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().i($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  gS: 1
}));
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sX(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sW(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rw(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rv(alo, ahi, blo, bhi);
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
$p.rv = (function(alo, ahi, blo, bhi) {
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
$p.rw = (function(alo, ahi, blo, bhi) {
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
$p.sW = (function(alo, ahi, blo, bhi) {
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
$p.sX = (function(alo, ahi, blo, bhi) {
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
  this.hx = null;
  $n_s_$less$colon$less$ = this;
  this.hx = new $c_s_$less$colon$less$$anon$1();
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
    $m_sr_ScalaRunTime$().hW(dest, j, $m_sr_ScalaRunTime$().dW(src, i));
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
$p.p1 = (function(it, evidence$1) {
  var n = it.y();
  if ((n > (-1))) {
    var elements = evidence$1.bl(n);
    var iterator = it.m();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().hW(elements, i, iterator.l());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.aO();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.m();
    while (iterator$2.p()) {
      var elem = iterator$2.l();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h0(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().gZ(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
});
$p.gH = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.ak.Z && $objectGetClass(dest).ak.R(srcClass.ak))) {
    src.s(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.oY = (function(xs, ys) {
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
$p.jP = (function(x) {
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
  this.hA = null;
  this.hz = null;
  $n_s_PartialFunction$ = this;
  this.hA = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => this.hA));
  this.hz = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
$p.tf = (function(x) {
  return (this.hA === x);
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
$p.pB = (function(this$, from, until) {
  var lo = ((from > 0) ? from : 0);
  var b = $m_jl_reflect_Array$().aN(this$);
  var hi = ((until < b) ? until : b);
  if ((hi > lo)) {
    if ((this$ instanceof $ac_O)) {
      return $m_ju_Arrays$().Z(this$, lo, hi);
    } else if ((this$ instanceof $ac_I)) {
      return $m_ju_Arrays$().rh(this$, lo, hi);
    } else if ((this$ instanceof $ac_D)) {
      return $m_ju_Arrays$().rf(this$, lo, hi);
    } else if ((this$ instanceof $ac_J)) {
      return $m_ju_Arrays$().ri(this$, lo, hi);
    } else if ((this$ instanceof $ac_F)) {
      return $m_ju_Arrays$().rg(this$, lo, hi);
    } else if ((this$ instanceof $ac_C)) {
      return $m_ju_Arrays$().re(this$, lo, hi);
    } else if ((this$ instanceof $ac_B)) {
      return $m_ju_Arrays$().rd(this$, lo, hi);
    } else if ((this$ instanceof $ac_S)) {
      return $m_ju_Arrays$().rj(this$, lo, hi);
    } else if ((this$ instanceof $ac_Z)) {
      return $m_ju_Arrays$().rk(this$, lo, hi);
    } else {
      throw new $c_s_MatchError(this$);
    }
  } else {
    return $m_s_reflect_ClassTag$().jK($objectGetClass(this$).ak.Q()).bl(0);
  }
});
$p.tA = (function(this$) {
  if (($m_jl_reflect_Array$().aN(this$) === 0)) {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty array");
  } else {
    return $m_sc_ArrayOps$().pB(this$, 1, $m_jl_reflect_Array$().aN(this$));
  }
});
$p.se = (function(this$) {
  if (($m_jl_reflect_Array$().aN(this$) === 0)) {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "init of empty array");
  } else {
    return $m_sc_ArrayOps$().pB(this$, 0, (($m_jl_reflect_Array$().aN(this$) - 1) | 0));
  }
});
$p.tS = (function(this$) {
  var b = new ($d_T2.r().C)($m_jl_reflect_Array$().aN(this$));
  var i = 0;
  while ((i < $m_jl_reflect_Array$().aN(this$))) {
    b.a[i] = $ct_T2__O__O__(new $c_T2(), $m_sr_ScalaRunTime$().dW(this$, i), i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.rR = (function(this$, f) {
  var len = $m_jl_reflect_Array$().aN(this$);
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
$p.cl = (function(hcode) {
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
      var srclen = $m_jl_reflect_Array$().aN(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().aN(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.p())) {
    $m_sr_ScalaRunTime$().hW(dest, i, it.l());
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
    var destination = evidence$1.bl(length);
    $thiz.bT(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.aO();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.m();
    while (it.p()) {
      var elem = it.l();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h0(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().gZ(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.nD = null;
  this.g7 = null;
  this.nD = head;
  this.g7 = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.sa = (function() {
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
$p.r7 = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.tq = (function(this$, from, until) {
  var start = ((from > 0) ? from : 0);
  var that = this$.length;
  var end = ((until < that) ? until : that);
  return ((start >= end) ? "" : this$.substring(start, end));
});
$p.tB = (function(this$, n) {
  var y = this$.length;
  return this.tq(this$, 0, ((n < y) ? n : y));
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
    var $x_1 = $m_jl_Integer$().pf($m_jl_System$SystemProperties$().kf("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
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
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (($m_jl_reflect_Array$().aN(as) - 1) | 0)));
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
$p.pt = (function(as, ix) {
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
$p.sj = (function(as, ix, elem) {
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
  bf: 1
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
$p.ev = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.dY = (function(mask) {
  return (1 << mask);
});
$p.sc = (function(bitmap, bitpos) {
  return $m_jl_Integer$().dX((bitmap & ((bitpos - 1) | 0)));
});
$p.cH = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.sc(bitmap, bitpos));
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
  this.bs = null;
  this.cA = null;
  this.fa = null;
  this.jt = null;
  this.nS = null;
  $n_sci_VectorStatics$ = this;
  this.js = new $ac_O(0);
  this.bs = new ($d_O.r().r().C)(0);
  this.cA = new ($d_O.r().r().r().C)(0);
  this.fa = new ($d_O.r().r().r().r().C)(0);
  this.jt = new ($d_O.r().r().r().r().r().C)(0);
  this.nS = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.fj = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.s(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.E = (function(a, elem) {
  var ac = $m_ju_Arrays$().V(a, ((1 + a.a.length) | 0));
  ac.a[((ac.a.length - 1) | 0)] = elem;
  return ac;
});
$p.cB = (function(elem, a) {
  var ac = $objectGetClass(a).ak.Q().ak.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.s(0, ac, 1, length$1);
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
$p.h0 = (function(runtimeClass) {
  return ((runtimeClass === $d_B.l()) ? 0 : ((runtimeClass === $d_S.l()) ? 0 : ((runtimeClass === $d_C.l()) ? 0 : ((runtimeClass === $d_I.l()) ? 0 : ((runtimeClass === $d_J.l()) ? $bL(0, 0) : ((runtimeClass === $d_F.l()) ? 0.0 : ((runtimeClass === $d_D.l()) ? 0.0 : ((runtimeClass === $d_Z.l()) ? false : ((runtimeClass === $d_V.l()) ? (void 0) : null)))))))));
});
$p.gZ = (function(runtimeClass, a) {
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
    var result$2 = runtimeClass.ak.U(len);
    var i$2 = 0;
    while ((i$2 !== len)) {
      $m_sr_ScalaRunTime$().hW(result$2, i$2, a[i$2]);
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
  this.fd = null;
  this.d4 = 0;
  this.aY = null;
  this.fd = _key;
  this.d4 = _hash;
  this.aY = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.rM = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.d4) && $m_sr_BoxesRunTime$().n(k, \u03b4this$tailLocal1.fd))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.aY === null) || (\u03b4this$tailLocal1.d4 > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.aY;
    }
  }
});
$p.h = (function() {
  return ((((("Node(" + this.fd) + ", ") + this.d4) + ") -> ") + this.aY);
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
$p.oI = (function(expectedCount, actualCount, message) {
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
  $thiz.gk = first;
  $thiz.gl = other;
  $thiz.dP = size;
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
  this.dP = 0;
}
$p = $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutor$AbstractBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$AbstractBatch() {
}
$h_s_concurrent_BatchingExecutor$AbstractBatch.prototype = $p;
$p.sQ = (function(r) {
  var sz = this.dP;
  if ((sz === 0)) {
    this.gk = r;
  } else {
    $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable(this, sz).a[((sz - 1) | 0)] = r;
  }
  this.dP = ((1 + sz) | 0);
});
$p.te = (function(n) {
  var n$tailLocal1 = n;
  while (true) {
    if ((n$tailLocal1 > 0)) {
      var x1 = this.dP;
      if ((x1 === 0)) {
        return (void 0);
      }
      if ((x1 === 1)) {
        var x$proxy1 = this.gk;
        if ((x$proxy1 === null)) {
          $m_sr_Scala3RunTime$().bu();
        }
        this.gk = null;
        this.dP = 0;
        x$proxy1.ey();
        n$tailLocal1 = ((n$tailLocal1 - 1) | 0);
        continue;
      }
      var o = this.gl;
      var x$proxy2 = o.a[((x1 - 2) | 0)];
      if ((x$proxy2 === null)) {
        $m_sr_Scala3RunTime$().bu();
      }
      o.a[((x1 - 2) | 0)] = null;
      this.dP = ((x1 - 1) | 0);
      x$proxy2.ey();
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
  this.fe = null;
  $n_s_concurrent_ExecutionContext$ = this;
  this.fe = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$3) => {
    _$1$3.gY($m_jl_System$Streams$().f1);
  }));
}
$p = $c_s_concurrent_ExecutionContext$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$() {
}
$h_s_concurrent_ExecutionContext$.prototype = $p;
$p.cG = (function() {
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
  $m_sci_Map$().p4(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $d_Z.l(), $d_jl_Boolean.l()), $ct_T2__O__O__(new $c_T2(), $d_B.l(), $d_jl_Byte.l()), $ct_T2__O__O__(new $c_T2(), $d_C.l(), $d_jl_Character.l()), $ct_T2__O__O__(new $c_T2(), $d_S.l(), $d_jl_Short.l()), $ct_T2__O__O__(new $c_T2(), $d_I.l(), $d_jl_Integer.l()), $ct_T2__O__O__(new $c_T2(), $d_J.l(), $d_jl_Long.l()), $ct_T2__O__O__(new $c_T2(), $d_F.l(), $d_jl_Float.l()), $ct_T2__O__O__(new $c_T2(), $d_D.l(), $d_jl_Double.l()), $ct_T2__O__O__(new $c_T2(), $d_V.l(), $d_jl_Void.l())]));
  this.o8 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2) => {
    throw new $c_s_concurrent_Future$$anon$1(t$2);
  }));
  this.oa = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$2());
  this.o9 = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$3());
  $m_s_concurrent_Future$().p8(this.o9);
  this.jC = $m_s_concurrent_Future$().rJ(new $c_s_concurrent_Future$$anon$4());
  this.ob = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2$1) => this.jC));
  this.oc = this.p8(new $c_s_util_Success((void 0)));
}
$p = $c_s_concurrent_Future$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Future$;
/** @constructor */
function $h_s_concurrent_Future$() {
}
$h_s_concurrent_Future$.prototype = $p;
$p.rJ = (function(exception) {
  return $m_s_concurrent_Promise$().rK(exception);
});
$p.p8 = (function(result) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result);
});
$p.oG = (function(body, executor) {
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
  if ($thiz.tG(result)) {
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
$p.rK = (function(exception) {
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
$p.h1 = (function(value) {
  if ((value instanceof $c_s_util_Success)) {
    return value;
  } else {
    var t = value.d7;
    return (((false || false) || (t instanceof $c_jl_Error)) ? (false ? new $c_s_util_Success(t.pT()) : new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Exception", t))) : value);
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
  this.qh = null;
  this.qq = null;
  this.qi = null;
  this.ql = null;
  this.qm = null;
  this.qk = null;
  this.qj = null;
  this.qg = null;
  this.qr = null;
  this.qf = null;
  this.qp = null;
  this.qn = null;
  this.qo = null;
  $n_s_reflect_ClassTag$ = this;
  this.qh = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.qq = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.qi = $m_s_reflect_ManifestFactory$CharManifest$();
  this.ql = $m_s_reflect_ManifestFactory$IntManifest$();
  this.qm = $m_s_reflect_ManifestFactory$LongManifest$();
  this.qk = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.qj = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.qg = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.qr = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.qf = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.qp = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.qn = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.qo = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.jK = (function(runtimeClass1) {
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
  return ((x === y) || ($is_jl_Number(x) ? this.rG(x, y) : ((x instanceof $Char) ? this.rE(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.rG = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.rF(xn, y);
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
$p.rF = (function(xn, yn) {
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
$p.rE = (function(xc, y) {
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
$p.hW = (function(xs, idx, value) {
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
  var h = this.cn(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.cn = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a6 = (function(hash, length) {
  return this.qV((hash ^ length));
});
$p.qV = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.sw = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.ry = (function(dv) {
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
    return this.ry((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.sw($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.sk = (function(n) {
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
  this.oi = $m_sjs_concurrent_QueueExecutionContext$().qR();
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
$p.qR = (function() {
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
  }), $m_sjs_js_defined$().oF(((arg1$2$1) => {
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
$p.oF = (function(a) {
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
$p.tp = (function(interval, body) {
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
    return seq.hM;
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
  return ($m_s_util_control_NoStackTrace$().oo ? $c_jl_Throwable.prototype.fk.call($thiz) : $thiz);
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
$p.hU = (function(t) {
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
$p.fz = (function(t) {
  return (this.hU(t) ? new $c_s_Some(t) : $m_s_None$());
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
  var h = this.cn(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.cn = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a6 = (function(hash, length) {
  return this.h2((hash ^ length));
});
$p.h2 = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.pN = (function(x, y, seed) {
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
$p.jR = (function(x, seed, caseClassName) {
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
$p.kE = (function(xs, seed) {
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
  h$2 = this.cn(h$2, c);
  return this.a6(h$2, n);
});
$p.sN = (function(xs, seed) {
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
  return this.h2(this.w(this.w(h0, rangeDiff), prev));
});
$p.aM = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().aN(a);
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
      return this.h2(this.w(this.w(h0, rangeDiff), prev));
    }
  }
});
$p.sU = (function(start, step, last, seed) {
  return this.h2(this.w(this.w(this.w(seed, start), step), last));
});
$p.sd = (function(a, seed) {
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
      return this.h2(this.w(this.w(h0, rangeDiff), prev));
    }
  }
});
$p.sv = (function(xs, seed) {
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
  return ((rangeState === 2) ? this.sU(initial, rangeDiff, prev, seed) : this.a6(h, n));
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
$p.pR = (function(s) {
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
$p.pR = (function(a) {
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
  var chars = $m_sc_StringOps$().tB(text, 200);
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
            if (new $c_sci_$colon$colon($bC(1711), new $c_sci_$colon$colon($bC(1670), new $c_sci_$colon$colon($bC(1662), new $c_sci_$colon$colon($bC(1688), new $c_sci_$colon$colon($bC(1740), new $c_sci_$colon$colon($bC(1705), $m_sci_Nil$())))))).bt($bC(x0$3))) {
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
  return $m_Ljava_net_URLEncoder$().rA(s, "UTF-8").length;
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
$p.pM = (function(word, sentence) {
  if (($p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__encodedLength$1__T__I(this, sentence) <= 200)) {
    return $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$().hT(sentence);
  } else if (((sentence.indexOf(word) | 0) === (-1))) {
    return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$());
  } else {
    var trimmedSentence = sentence;
    var this$4 = trimmedSentence;
    var wordPos = (this$4.indexOf(word) | 0);
    if ((wordPos === (-1))) {
      return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$());
    } else {
      while ((($p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__encodedLength$1__T__I(this, trimmedSentence) > 200) && ($f_T__split__T__I__AT(trimmedSentence, " ", 0).a.length > 1))) {
        if ((wordPos >= ((((trimmedSentence.length - 1) | 0) - wordPos) | 0))) {
          trimmedSentence = $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().kF($m_sc_ArrayOps$().tA($f_T__split__T__I__AT(trimmedSentence, " ", 0))), "", " ", "");
        } else {
          trimmedSentence = $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().kF($m_sc_ArrayOps$().se($f_T__split__T__I__AT(trimmedSentence, " ", 0))), "", " ", "");
        }
      }
      return $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$().hT(trimmedSentence);
    }
  }
});
$p.rI = (function(word, node) {
  return $m_s_concurrent_Future$().oG(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var text = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__extractTextWithoutFurigana__Lorg_scalajs_dom_Node__T(this, node);
    if (((text === null) || (text === ""))) {
      return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$());
    } else {
      var x5 = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__findSentenceContaining__T__T__s_Option(this, text, word);
      if ((x5 instanceof $c_s_Some)) {
        return this.pM(word, x5.dm);
      }
      if (($m_s_None$() === x5)) {
        matchResult1: {
          var parentText;
          var x1 = node.parentNode;
          if ((x1 === null)) {
            var parentText = text;
            break matchResult1;
          }
          var parentText = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__extractTextWithoutFurigana__Lorg_scalajs_dom_Node__T(this, x1);
        }
        var x2 = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__findSentenceContaining__T__T__s_Option(this, parentText, word);
        if ((x2 instanceof $c_s_Some)) {
          return this.pM(word, x2.dm);
        }
        if (($m_s_None$() === x2)) {
          return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$());
        }
        throw new $c_s_MatchError(x2);
      }
      throw new $c_s_MatchError(x5);
    }
  })), $m_s_concurrent_ExecutionContext$().cG());
});
$p.rs = (function(sentence) {
  return $m_s_concurrent_Future$().oG(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    document.documentElement.lang;
    return new $c_s_util_Right($p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__detectByScript__T__Lcom_github_pwharned_clausula_extension_domain_Language(this, sentence));
  })), $m_s_concurrent_ExecutionContext$().cG());
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
    return chrome.runtime.sendMessage(message, $m_sjs_js_Any$().i1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((response$2) => {
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
$p.qD = (function(note) {
  var $x_1 = note.fH;
  var this$2 = note.fE;
  var s = (("" + $x_1) + (this$2.d() ? "" : this$2.x()));
  var this$5 = note.fI;
  var s$1 = (this$5.d() ? "" : this$5.x());
  var fields = ({
    "Text": s,
    "Translation": s$1
  });
  var d = note.fF;
  var _2 = [...$m_sjsr_Compat$().pH(note.fG)];
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
      return new $c_s_util_Left(x$1$2.dR);
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
  })), $m_s_concurrent_ExecutionContext$().cG());
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
$p.rZ = (function(word, sentence, language) {
  return $m_sjs_js_Thenable$ThenableOps$().kD(new Promise(((resolve$2, _$1$2) => {
    var s = language.es();
    var message = ({
      "type": "AUDIO_REQUEST",
      "word": word,
      "sentence": sentence,
      "lang": s
    });
    return chrome.runtime.sendMessage(message, $m_sjs_js_Any$().i1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((response$2) => {
      var lastError = chrome.runtime.lastError;
      if (((lastError !== null) && (!$m_sr_BoxesRunTime$().n(lastError, (void 0))))) {
        var message$1 = (((((((("Audio runtime error: " + lastError.message) + " for {") + word) + ", ") + sentence) + " ") + language.gJ()) + " ");
        console.error(message$1);
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, message$1)));
      } else if (((response$2 === null) || $m_sr_BoxesRunTime$().n(response$2, (void 0)))) {
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, (((((("No response from background worker  for {" + word) + ", ") + sentence) + " ") + language.gJ()) + " "))));
      } else if ((!(!response$2.success))) {
        var filename = response$2.filename;
        console.log(("Audio stored: " + filename));
        return resolve$2(new $c_s_util_Right((("[sound:" + filename) + "]")));
      } else {
        var error = response$2.error;
        console.error((((((((("Audio error: for {" + word) + ", ") + sentence) + ": ") + language.gJ()) + " : ") + error) + " "));
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
    var s = t.pR(text);
    var s$1 = source.es();
    var s$2 = target.es();
    var message = ({
      "type": "TRANSLATE_REQUEST",
      "text": s,
      "langSrc": s$1,
      "langTgt": s$2
    });
    return chrome.runtime.sendMessage(message, $m_sjs_js_Any$().i1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((response$2) => {
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
          var detectedLang = new $c_s_Some($m_Lcom_github_pwharned_clausula_extension_domain_Language$().rW(x1));
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
    $thiz.ft(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $thiz.fu(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.fv(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.fv(new $c_s_util_Failure(nextError), transaction);
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
$p.fy = (function() {
  return this.lv;
});
$p.oK = (function(x$0) {
  this.lv = x$0;
});
$p.pr = (function(subscription) {
  if (this.ip) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.lu.M();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.pj = (function() {
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
$p.fy = (function() {
  return this.lP;
});
$p.oK = (function(x$0) {
  this.lP = x$0;
});
$p.pj = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.pr = (function(subscription) {
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
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().o.qs(), $m_Lcom_raquo_laminar_keys_CompositeKey$().pn(items, this.mz)));
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
$p.oP = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().pn(domValue, this.iz);
});
$p.oR = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.iz, "");
});
$p.jX = (function(domValue) {
  return this.oP(domValue);
});
$p.jY = (function(scalaValue) {
  return this.oR(scalaValue);
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
  this.hn = null;
  this.hn = name;
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
  this.fS = null;
  this.iA = null;
  this.fS = name;
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
  this.eV = null;
  this.eV = name;
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
  this.ho = null;
  this.hp = null;
  this.iC = localName;
  this.iB = codec;
  var this$2 = (namespacePrefix.d() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.x() + ":") + localName)));
  this.ho = (this$2.d() ? localName : this$2.x());
  this.hp = (namespacePrefix.d() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().sD(namespacePrefix.x())));
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
$p.ck = (function(element) {
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
$p.ck = (function(element) {
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
$p.qU = (function(value) {
  return this.mO.c(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  fx: 1,
  fv: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.oL(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().rr($thiz.ao(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
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
$p.an = (function(modifiers) {
  var element = this.qY();
  modifiers.bc(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((modifier) => {
    modifier.ck(element);
  })));
  return element;
});
$p.qY = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().rm(this));
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
$p.tE = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.rt = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().qW(this.iQ, codePoint);
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
$p.gW = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.pf = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().gW(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().gW(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().gW(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.rt(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().gW(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().gW(s);
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
  this.eY = null;
  this.fW = null;
  this.eZ = null;
  this.f0 = 0;
  this.eX = 0;
  this.eY = declaringClass;
  this.fW = methodName;
  this.eZ = fileName;
  this.f0 = lineNumber;
  this.eX = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.g = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.eZ === that.eZ) && (this.f0 === that.f0)) && (this.eX === that.eX)) && (this.eY === that.eY)) && (this.fW === that.fW)));
});
$p.h = (function() {
  var result = "";
  if ((this.eY !== "<jscode>")) {
    result = ((("" + result) + this.eY) + ".");
  }
  result = (("" + result) + this.fW);
  if ((this.eZ === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.eZ);
    if ((this.f0 >= 0)) {
      result = ((result + ":") + this.f0);
      if ((this.eX >= 0)) {
        result = ((result + ":") + this.eX);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.i = (function() {
  return (((($f_T__hashCode__I(this.eY) ^ $f_T__hashCode__I(this.fW)) ^ $f_T__hashCode__I(this.eZ)) ^ this.f0) ^ this.eX);
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
$p.sF = (function(value, offset, count) {
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
  $thiz.fX = e;
  $thiz.mY = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fk();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.mX = null;
    this.fX = null;
    this.mY = false;
    this.mW = null;
    this.ef = null;
  }
  pc(cause) {
    this.fX = cause;
    return this;
  }
  fo() {
    return this.mX;
  }
  fk() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.R : this);
    this.mW = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  i2() {
    if ((this.ef === null)) {
      if (this.mY) {
        this.ef = $m_jl_StackTrace$().rH(this.mW);
      } else {
        this.ef = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.ef;
  }
  gY(s) {
    this.i2();
    var t = this.h();
    s.ex(t);
    if ((this.ef.a.length !== 0)) {
      var i = 0;
      while ((i < this.ef.a.length)) {
        var t$1 = ("  at " + this.ef.a[i]);
        s.ex(t$1);
        i = ((1 + i) | 0);
      }
    } else {
      s.ex("  <no stack trace available>");
    }
    var wCause = this;
    while (((wCause !== wCause.fX) && (wCause.fX !== null))) {
      var parentTrace = wCause.i2();
      wCause = wCause.fX;
      var thisTrace = wCause.i2();
      var thisLength = thisTrace.a.length;
      var parentLength = parentTrace.a.length;
      var t$2 = ("Caused by: " + wCause);
      s.ex(t$2);
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
          s.ex(t$3);
          i$2 = ((1 + i$2) | 0);
        }
        if ((sameFrameCount > 0)) {
          var t$4 = (("  ... " + sameFrameCount) + " more");
          s.ex(t$4);
        }
      } else {
        s.ex("  <no stack trace available>");
      }
    }
  }
  h() {
    var className = $objectClassName(this);
    var message = this.fo();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  i() {
    return $c_O.prototype.i.call(this);
  }
  g(that) {
    return $c_O.prototype.g.call(this, that);
  }
  get "message"() {
    var m = this.fo();
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
  $thiz.cs = _aliases;
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_charset_Charset() {
  this.by = null;
  this.cs = null;
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
  this.fZ = 0.0;
  this.f2 = null;
  this.fY = null;
  this.f3 = null;
  this.dj = 0;
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
  var maxValue = this.na.hs;
  if ((((in$1.G - in$1.t) | 0) === 0)) {
    return $m_Ljava_nio_charset_CoderResult$().dk;
  } else {
    while (true) {
      if ((in$1.t === in$1.G)) {
        return $m_Ljava_nio_charset_CoderResult$().dk;
      } else if ((out.t === out.G)) {
        return $m_Ljava_nio_charset_CoderResult$().ct;
      } else {
        var c = in$1.fm();
        if ((c <= maxValue)) {
          out.a7(((c << 24) >> 24));
        } else if (((64512 & c) === 56320)) {
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 1) | 0));
          return $m_Ljava_nio_charset_CoderResult$().dl;
        } else if (((64512 & c) === 55296)) {
          if ((in$1.t !== in$1.G)) {
            var c2 = in$1.fm();
            $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 2) | 0));
            return (((64512 & c2) === 56320) ? $m_Ljava_nio_charset_CoderResult$().n7 : $m_Ljava_nio_charset_CoderResult$().dl);
          } else {
            $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 1) | 0));
            return $m_Ljava_nio_charset_CoderResult$().dk;
          }
        } else {
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 1) | 0));
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
  this.fZ = 0.0;
  this.f2 = null;
  this.fY = null;
  this.f3 = null;
  this.dj = 0;
  this.ht = false;
  this.j2 = null;
  this.j2 = outer;
  $ct_Ljava_nio_charset_CharsetEncoder__Ljava_nio_charset_Charset__F__F__AB__(this, outer, 2.0, ((outer.cP === 0) ? 4.0 : 2.0), ((outer.cP === 2) ? new $ac_B(new Int8Array([(-3), (-1)])) : new $ac_B(new Int8Array([(-1), (-3)]))));
  this.ht = (outer.cP === 0);
}
$p = $c_Ljava_nio_charset_UTF\uff3f16\uff3fCommon$Encoder.prototype = new $h_Ljava_nio_charset_CharsetEncoder();
$p.constructor = $c_Ljava_nio_charset_UTF\uff3f16\uff3fCommon$Encoder;
/** @constructor */
function $h_Ljava_nio_charset_UTF\uff3f16\uff3fCommon$Encoder() {
}
$h_Ljava_nio_charset_UTF\uff3f16\uff3fCommon$Encoder.prototype = $p;
$p.pb = (function() {
  this.ht = (this.j2.cP === 0);
});
$p.jZ = (function(in$1, out) {
  if (this.ht) {
    if ((((out.G - out.t) | 0) < 2)) {
      return $m_Ljava_nio_charset_CoderResult$().ct;
    } else {
      out.a7((-2));
      out.a7((-1));
      this.ht = false;
    }
  }
  var bigEndian = (this.j2.cP !== 2);
  while (true) {
    if ((((in$1.G - in$1.t) | 0) === 0)) {
      return $m_Ljava_nio_charset_CoderResult$().dk;
    } else {
      var c1 = in$1.fm();
      if (((64512 & c1) === 56320)) {
        $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 1) | 0));
        return $m_Ljava_nio_charset_CoderResult$().dl;
      } else if (((64512 & c1) !== 55296)) {
        if ((((out.G - out.t) | 0) < 2)) {
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 1) | 0));
          return $m_Ljava_nio_charset_CoderResult$().ct;
        } else if (bigEndian) {
          out.a7((((c1 >> 8) << 24) >> 24));
          out.a7(((c1 << 24) >> 24));
        } else {
          out.a7(((c1 << 24) >> 24));
          out.a7((((c1 >> 8) << 24) >> 24));
        }
      } else if ((((in$1.G - in$1.t) | 0) < 1)) {
        $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 1) | 0));
        return $m_Ljava_nio_charset_CoderResult$().dk;
      } else {
        var c2 = in$1.fm();
        if (((64512 & c2) !== 56320)) {
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 2) | 0));
          return $m_Ljava_nio_charset_CoderResult$().dl;
        } else if ((((out.G - out.t) | 0) < 4)) {
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 2) | 0));
          return $m_Ljava_nio_charset_CoderResult$().ct;
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
  this.fZ = 0.0;
  this.f2 = null;
  this.fY = null;
  this.f3 = null;
  this.dj = 0;
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
    if ((in$1.t === in$1.G)) {
      return $m_Ljava_nio_charset_CoderResult$().dk;
    } else {
      var c1 = in$1.fm();
      if ((c1 < 128)) {
        if ((out.t === out.G)) {
          var result = $m_Ljava_nio_charset_CoderResult$().ct;
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 1) | 0));
          return result;
        } else {
          out.a7(((c1 << 24) >> 24));
        }
      } else if ((c1 < 2048)) {
        if ((((out.G - out.t) | 0) < 2)) {
          var result$1 = $m_Ljava_nio_charset_CoderResult$().ct;
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 1) | 0));
          return result$1;
        } else {
          out.a7((((192 | (c1 >> 6)) << 24) >> 24));
          out.a7((((128 | (63 & c1)) << 24) >> 24));
        }
      } else if ((!($m_Ljava_nio_charset_UTF\uff3f8$(), ((63488 & c1) === 55296)))) {
        if ((((out.G - out.t) | 0) < 3)) {
          var result$2 = $m_Ljava_nio_charset_CoderResult$().ct;
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 1) | 0));
          return result$2;
        } else {
          out.a7((((224 | (c1 >> 12)) << 24) >> 24));
          out.a7((((128 | (63 & (c1 >> 6))) << 24) >> 24));
          out.a7((((128 | (63 & c1)) << 24) >> 24));
        }
      } else if (((64512 & c1) === 55296)) {
        if ((in$1.t === in$1.G)) {
          var result$3 = $m_Ljava_nio_charset_CoderResult$().dk;
          $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 1) | 0));
          return result$3;
        } else {
          var c2 = in$1.fm();
          if (((64512 & c2) !== 56320)) {
            var result$4 = $m_Ljava_nio_charset_CoderResult$().dl;
            $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 2) | 0));
            return result$4;
          } else if ((((out.G - out.t) | 0) < 4)) {
            var result$5 = $m_Ljava_nio_charset_CoderResult$().ct;
            $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 2) | 0));
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
        var result$6 = $m_Ljava_nio_charset_CoderResult$().dl;
        $c_Ljava_nio_Buffer.prototype.aH.call(in$1, ((in$1.t - 1) | 0));
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
$p.gG = (function(expect, update) {
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
  if (($thiz.hu === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "No match available");
  }
  return $thiz.hu;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.nc = null;
  this.nb = null;
  this.nd = 0;
  this.j3 = null;
  this.j4 = 0;
  this.hu = null;
  this.nc = pattern0;
  this.nb = input0;
  this.nd = 0;
  this.j3 = this.nb;
  this.j4 = 0;
  this.hu = null;
}
$p = $c_ju_regex_Matcher.prototype = new $h_O();
$p.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $p;
$p.rL = (function() {
  var this$1 = this.nc;
  var input = this.j3;
  var start = this.j4;
  var mtch = this$1.ss(input, start);
  var end = (this$1.j5.lastIndex | 0);
  this.j4 = ((mtch !== null) ? ((end === (mtch.index | 0)) ? ((1 + end) | 0) : end) : ((1 + this.j3.length) | 0));
  this.hu = mtch;
  return (mtch !== null);
});
$p.pD = (function() {
  return ((($p_ju_regex_Matcher__ensureLastMatch__O(this).index | 0) + this.nd) | 0);
});
$p.oS = (function() {
  return ((this.pD() + this.s8().length) | 0);
});
$p.s8 = (function() {
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
$p.ss = (function(input, start) {
  var regexp = this.j5;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$p.h = (function() {
  return this.ne;
});
$p.st = (function(inputStr, limit) {
  if ((inputStr === "")) {
    return new ($d_T.r().C)([""]);
  } else {
    var lim = ((limit > 0) ? limit : 2147483647);
    var matcher = new $c_ju_regex_Matcher(this, inputStr);
    var result = [];
    var prevEnd = 0;
    while ((((result.length | 0) < ((lim - 1) | 0)) && matcher.rL())) {
      if ((matcher.oS() !== 0)) {
        var beginIndex = prevEnd;
        var endIndex = matcher.pD();
        var $x_1 = result.push(inputStr.substring(beginIndex, endIndex));
      }
      prevEnd = matcher.oS();
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
$p.sT = (function(s) {
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
$p.kF = (function(xs) {
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
  return ($thiz.cJ(x) ? $thiz.c(x) : default$1.c(x));
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
    $thiz.b3($m_scm_Buffer$().p2(elems));
  } else {
    var it = elems.m();
    while (it.p()) {
      $thiz.b4(it.l());
    }
  }
  return $thiz;
}
function $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V($thiz, runnable) {
  var tl = $thiz.o7;
  var b = tl.x();
  if ((b instanceof $c_s_concurrent_BatchingExecutor$SyncBatch)) {
    b.sQ(runnable);
  } else {
    var i = ((b !== null) ? b : 0);
    if ((i < 16)) {
      tl.h3(((1 + i) | 0));
      try {
        runnable.ey();
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        if (false) {
          $m_s_concurrent_ExecutionContext$().fe.c(e$2);
        } else {
          matchResult3: {
            if ($m_s_util_control_NonFatal$().hU(e$2)) {
              $m_s_concurrent_ExecutionContext$().fe.c(e$2);
              break matchResult3;
            }
            throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
          }
        }
      } finally {
        tl.h3(b);
      }
    } else {
      var batch = new $c_s_concurrent_BatchingExecutor$SyncBatch($thiz, runnable);
      tl.h3(batch);
      batch.ey();
      tl.h3(b);
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
  this.hL = false;
  this.hL = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.h = (function() {
  return ("" + this.hL);
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
  this.ff = null;
  this.ff = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.h = (function() {
  return ("" + this.ff);
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
  this.jF = this.kE($m_sci_Nil$(), this.dT);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cq = (function(x, y) {
  return this.pN($m_sr_Statics$().L(x), $m_sr_Statics$().L(y), (-889275714));
});
$p.pA = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.sd(xs, this.aj) : ((xs instanceof $c_sci_List) ? this.sv(xs, this.aj) : this.sN(xs, this.aj)));
});
$p.sy = (function(xs) {
  if (xs.d()) {
    return this.jF;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.dT;
    xs.et(accum);
    h = this.w(h, accum.hN);
    h = this.w(h, accum.hO);
    h = this.cn(h, accum.hP);
    return this.a6(h, accum.hQ);
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
  this.hN = 0;
  this.hO = 0;
  this.hQ = 0;
  this.hP = 0;
  this.hN = 0;
  this.hO = 0;
  this.hQ = 0;
  this.hP = 1;
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
$p.qQ = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cq(k, v);
  this.hN = ((this.hN + h) | 0);
  this.hO = (this.hO ^ h);
  this.hP = Math.imul(this.hP, (1 | h));
  this.hQ = ((1 + this.hQ) | 0);
});
$p.fh = (function(v1, v2) {
  this.qQ(v1, v2);
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
$p.tM = (function() {
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
$p.rW = (function(code) {
  var xs = $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$().tM();
  _return: {
    var i = 0;
    while ((i < xs.a.length)) {
      var x1 = i;
      if ((xs.a[x1].bm === code)) {
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
  this.ic = $m_scm_Buffer$().oH($m_sr_ScalaRunTime$().b7(new ($d_F1.r().C)([])));
  this.kI = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
    try {
      console.error(((this.fn(err) + "\n") + this.s5(err, "\n")));
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
  this.sV(this.kI);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.fn = (function(e) {
  try {
    var errorMessage = e.fo();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).kg() + ": ") + errorMessage);
});
$p.s5 = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().kF(err.i2()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.sV = (function(fn) {
  this.ic.b4(fn);
});
$p.cp = (function(err) {
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
      $m_sjs_js_timers_package$().tp(0.0, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(((e$2) => (() => {
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
  $thiz.cm(true);
  $thiz.fs((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().pU(onNext, $m_s_PartialFunction$().hz, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.fq()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.fq()) {
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
  var x = $thiz.e3();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_F0.r().C)([])));
    $thiz.fs(newArray);
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
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.qU(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, modifiers, asModifier, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(null, modifiers, null)).bc(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element$2) => ((_$6) => {
      asModifier.c(_$6).ck(element$2);
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
$p.ck = (function(element) {
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
  this.eW = null;
  this.iF = null;
  this.iG = null;
  this.eW = eventProcessor;
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
    this$3.capture = outer.eW.mD;
    this$3.passive = outer.eW.mC;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.ck = (function(element) {
  this.qX(element, false);
});
$p.qX = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().qC(element.bf, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.iD, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().t0(element.bf, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().tJ(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h5(element.cc, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
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
  return (("EventListener(" + this.eW.hm.hn) + ")");
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
$p.ck = (function(element) {
  this.mG.jM(element, this.mH, this.mI);
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
$p.ck = (function(element) {
  this.jQ(element);
});
$p.jQ = (function(element) {
  element.sJ(this.mJ);
  var observable = this.mL;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((value) => {
    this.mK.jM(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().tu(element.cc, observable, onNext);
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
  if ((!$m_Lcom_raquo_laminar_DomApi$().sq(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.mR = container;
  this.sC();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.hZ = (function() {
  return this.iM;
});
$p.oL = (function(x$0) {
  this.iM = x$0;
});
$p.sC = (function() {
  this.iM.ou();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().gu(this, this.mQ, (void 0));
});
$p.ao = (function() {
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
  if ($thiz.ak.Z) {
    return ($thiz.ak.Q().kg() + "[]");
  } else {
    var name = $thiz.ak.N;
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
  this.ak = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.h = (function() {
  return ((this.ak.Y ? "interface " : (this.ak.X ? "" : "class ")) + this.ak.N);
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
  $thiz.eg = _array;
  $thiz.eh = _arrayOffset;
  $ct_Ljava_nio_Buffer__I__($thiz, _capacity);
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_ByteBuffer() {
  this.cO = 0;
  this.G = 0;
  this.t = 0;
  this.cr = 0;
  this.eg = null;
  this.eh = 0;
}
$p = $c_Ljava_nio_ByteBuffer.prototype = new $h_Ljava_nio_Buffer();
$p.constructor = $c_Ljava_nio_ByteBuffer;
/** @constructor */
function $h_Ljava_nio_ByteBuffer() {
}
$h_Ljava_nio_ByteBuffer.prototype = $p;
$p.i = (function() {
  var start = this.t;
  var end = this.G;
  var h = (-547316498);
  var i = start;
  while ((i !== end)) {
    var $x_2 = $m_ju_internal_MurmurHash3$();
    var $x_1 = h;
    var index = i;
    var a = this.eg;
    var i$1 = ((this.eh + index) | 0);
    h = $x_2.w($x_1, a.a[i$1]);
    i = ((1 + i) | 0);
  }
  return $m_ju_internal_MurmurHash3$().a6(h, ((end - start) | 0));
});
$p.g = (function(that) {
  return ((that instanceof $c_Ljava_nio_ByteBuffer) && (this.r3(that) === 0));
});
$p.r3 = (function(that) {
  if ((this === that)) {
    return 0;
  } else {
    var thisStart = this.t;
    var thisRemaining = ((this.G - thisStart) | 0);
    var thatStart = that.t;
    var thatRemaining = ((that.G - thatStart) | 0);
    var shortestLength = ((thisRemaining < thatRemaining) ? thisRemaining : thatRemaining);
    var i = 0;
    while ((i !== shortestLength)) {
      var index = ((thisStart + i) | 0);
      var a = this.eg;
      var i$1 = ((this.eh + index) | 0);
      var t = a.a[i$1];
      var index$1 = ((thatStart + i) | 0);
      var a$1 = that.eg;
      var i$2 = ((that.eh + index$1) | 0);
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
  $thiz.hs = maxValue;
  $ct_Ljava_nio_charset_Charset__T__AT__($thiz, name, aliases);
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_charset_ISO\uff3f8859\uff3f1\uff3fAnd\uff3fUS\uff3fASCII\uff3fCommon() {
  this.by = null;
  this.cs = null;
  this.hs = 0;
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
  $thiz.cP = endianness;
  $ct_Ljava_nio_charset_Charset__T__AT__($thiz, name, aliases);
  return $thiz;
}
/** @constructor */
function $c_Ljava_nio_charset_UTF\uff3f16\uff3fCommon() {
  this.by = null;
  this.cs = null;
  this.cP = 0;
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
  this.cs = null;
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
  this.qd = null;
  $n_s_Predef$ = this;
  $m_sci_List$();
  this.qd = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.t7 = (function(requirement) {
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
      return $thiz.aZ();
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
$p.ay = (function(it) {
  return this.g5.k7(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.b5 = (function() {
  return this.g5.i7($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.d8 = (function(elems) {
  return this.g5.k7(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.hC = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.hC = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.ay = (function(it) {
  return this.hC.ay(it);
});
$p.b5 = (function() {
  return this.hC.b5();
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
  return new $c_sc_Iterator$ConcatIterator($thiz).jU(xs);
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
$p.b5 = (function() {
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
$p.p3 = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((it$2) => (() => it$2.m()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().k9(it))));
});
$p.b5 = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((it$2) => this.p3(it$2))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.ay = (function(source) {
  return this.p3(source);
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
  this.al = null;
  this.bA = null;
  this.aR = 0;
  this.bo = 0;
  this.Y = dataMap;
  this.a8 = nodeMap;
  this.al = content;
  this.bA = originalHashes;
  this.aR = size;
  this.bo = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.aP = (function() {
  return this.aR;
});
$p.dZ = (function() {
  return this.bo;
});
$p.e1 = (function(index) {
  return this.al.a[(index << 1)];
});
$p.db = (function(index) {
  return this.al.a[((1 + (index << 1)) | 0)];
});
$p.p9 = (function(index) {
  return $ct_T2__O__O__(new $c_T2(), this.al.a[(index << 1)], this.al.a[((1 + (index << 1)) | 0)]);
});
$p.gM = (function(index) {
  return this.bA.a[index];
});
$p.d9 = (function(index) {
  return this.al.a[((((this.al.a.length - 1) | 0) - index) | 0)];
});
$p.jL = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ev(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.Y & bitpos) !== 0)) {
    var index = $m_sci_Node$().cH(this.Y, mask, bitpos);
    if ($m_sr_BoxesRunTime$().n(key, this.e1(index))) {
      return this.db(index);
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
    }
  } else if (((this.a8 & bitpos) !== 0)) {
    return this.d9($m_sci_Node$().cH(this.a8, mask, bitpos)).jL(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.ke = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().ev(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.Y & bitpos) !== 0)) {
    var index = $m_sci_Node$().cH(this.Y, mask, bitpos);
    return ($m_sr_BoxesRunTime$().n(key, this.e1(index)) ? this.db(index) : f.M());
  } else {
    return (((this.a8 & bitpos) !== 0) ? this.d9($m_sci_Node$().cH(this.a8, mask, bitpos)).ke(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.M());
  }
});
$p.jV = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ev(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.Y & bitpos) !== 0)) {
    var index = $m_sci_Node$().cH(this.Y, mask, bitpos);
    return ((this.bA.a[index] === originalHash) && $m_sr_BoxesRunTime$().n(key, this.e1(index)));
  } else {
    return (((this.a8 & bitpos) !== 0) && this.d9($m_sci_Node$().cH(this.a8, mask, bitpos)).jV(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.pP = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().ev(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.Y & bitpos) !== 0)) {
    var index = $m_sci_Node$().cH(this.Y, mask, bitpos);
    var key0 = this.e1(index);
    var key0UnimprovedHash = this.gM(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().n(key0, key))) {
      if (replaceValue) {
        var value0 = this.db(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.rc(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.db(index);
      var key0Hash = $m_sc_Hashing$().cl(key0UnimprovedHash);
      return this.ra(bitpos, key0Hash, this.kr(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.a8 & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cH(this.a8, mask, bitpos);
    var subNode = this.d9(index$2);
    var subNodeNew$2 = subNode.pQ(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.rb(bitpos, subNode, subNodeNew$2));
  } else {
    return this.r9(bitpos, key, originalHash, keyHash, value);
  }
});
$p.kr = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().ka(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), key0, value0), $ct_T2__O__O__(new $c_T2(), key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().ev(keyHash0, shift);
    var mask1 = $m_sci_Node$().ev(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().dY(mask0) | $m_sci_Node$().dY(mask1));
      if ((mask0 < mask1)) {
        var xs = new $c_sjsr_WrappedVarArgs([key0, value0, key1, value1]);
        var array$2 = new $ac_O(xs.q());
        var iterator = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs));
        var i = 0;
        while ((iterator.bg > 0)) {
          array$2.a[i] = iterator.l();
          i = ((1 + i) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$2, new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash);
      } else {
        var xs$1 = new $c_sjsr_WrappedVarArgs([key1, value1, key0, value0]);
        var array$4 = new $ac_O(xs$1.q());
        var iterator$1 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$1));
        var i$1 = 0;
        while ((iterator$1.bg > 0)) {
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
      while ((iterator$2.bg > 0)) {
        array$6.a[i$2] = iterator$2.l();
        i$2 = ((1 + i$2) | 0);
      }
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().jc, node.aP(), node.dZ());
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
$p.gI = (function(bitpos) {
  return $m_jl_Integer$().dX((this.Y & ((bitpos - 1) | 0)));
});
$p.ku = (function(bitpos) {
  return $m_jl_Integer$().dX((this.a8 & ((bitpos - 1) | 0)));
});
$p.rc = (function(bitpos, newKey, newValue) {
  var dataIx = this.gI(bitpos);
  var idx = (dataIx << 1);
  var src = this.al;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.s(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.Y, this.a8, dst, this.bA, this.aR, this.bo);
});
$p.rb = (function(bitpos, oldNode, newNode) {
  var idx = ((((this.al.a.length - 1) | 0) - this.ku(bitpos)) | 0);
  var src = this.al;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.s(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.Y, this.a8, dst, this.bA, ((((this.aR - oldNode.aP()) | 0) + newNode.aP()) | 0), ((((this.bo - oldNode.dZ()) | 0) + newNode.dZ()) | 0));
});
$p.r9 = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.gI(bitpos);
  var idx = (dataIx << 1);
  var src = this.al;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.s(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.s(idx, dst, destPos, length);
  var dstHashes = this.sj(this.bA, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.Y | bitpos), this.a8, dst, dstHashes, ((1 + this.aR) | 0), ((this.bo + keyHash) | 0));
});
$p.sA = (function(bitpos, keyHash, node) {
  var dataIx = this.gI(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.al.a.length - 2) | 0) - this.ku(bitpos)) | 0);
  var src = this.al;
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
  var dstHashes = this.pt(this.bA, dataIx);
  this.Y = (this.Y ^ bitpos);
  this.a8 = (this.a8 | bitpos);
  this.al = dst;
  this.bA = dstHashes;
  this.aR = ((((this.aR - 1) | 0) + node.aP()) | 0);
  this.bo = ((((this.bo - keyHash) | 0) + node.dZ()) | 0);
  return this;
});
$p.ra = (function(bitpos, keyHash, node) {
  var dataIx = this.gI(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.al.a.length - 2) | 0) - this.ku(bitpos)) | 0);
  var src = this.al;
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
  var dstHashes = this.pt(this.bA, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.Y ^ bitpos), (this.a8 | bitpos), dst, dstHashes, ((((this.aR - 1) | 0) + node.aP()) | 0), ((((this.bo - keyHash) | 0) + node.dZ()) | 0));
});
$p.et = (function(f) {
  var iN = $m_jl_Integer$().dX(this.Y);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.fh(this.e1(i$1), this.db(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().dX(this.a8);
  var j = 0;
  while ((j < jN)) {
    this.d9(j).et(f);
    j = ((1 + j) | 0);
  }
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bo === that.bo) && (this.a8 === that.a8)) && (this.Y === that.Y)) && (this.aR === that.aR)) && $m_ju_Arrays$().k1(this.bA, that.bA))) {
      var a1 = this.al;
      var a2 = that.al;
      var length = this.al.a.length;
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
$p.oM = (function() {
  var this$1 = this.al;
  var contentClone = this$1.e();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().dX(this.Y) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].oN();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.Y, this.a8, contentClone, this.bA.e(), this.aR, this.bo);
});
$p.kd = (function(index) {
  return this.d9(index);
});
$p.pQ = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.pP(key, value, originalHash, hash, shift, replaceValue);
});
$p.oN = (function() {
  return this.oM();
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
  this.dy = 0;
  this.a9 = null;
  this.jm = originalHash;
  this.dy = hash;
  this.a9 = content;
  $m_s_Predef$().t7((this.a9.q() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.fp = (function(key) {
  var iter = this.a9.m();
  var i = 0;
  while (iter.p()) {
    if ($m_sr_BoxesRunTime$().n(iter.l().aZ(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.aP = (function() {
  return this.a9.q();
});
$p.jL = (function(key, originalHash, hash, shift) {
  var this$1 = this.s1(key, originalHash, hash, shift);
  return (this$1.d() ? $m_sc_Iterator$().X.l() : this$1.x());
});
$p.s1 = (function(key, originalHash, hash, shift) {
  if ((this.dy === hash)) {
    var index = this.fp(key);
    return ((index >= 0) ? new $c_s_Some(this.a9.u(index).aL()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.ke = (function(key, originalHash, hash, shift, f) {
  if ((this.dy === hash)) {
    var x36 = this.fp(key);
    if ((x36 === (-1))) {
      return f.M();
    }
    return this.a9.u(x36).aL();
  } else {
    return f.M();
  }
});
$p.jV = (function(key, originalHash, hash, shift) {
  return ((this.dy === hash) && (this.fp(key) >= 0));
});
$p.pQ = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.fp(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.a9.u(index).aL(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.a9.e5(index, $ct_T2__O__O__(new $c_T2(), key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.a9.dV($ct_T2__O__O__(new $c_T2(), key, value))));
});
$p.kh = (function() {
  return false;
});
$p.kt = (function() {
  return 0;
});
$p.d9 = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.i3 = (function() {
  return true;
});
$p.kx = (function() {
  return this.a9.q();
});
$p.e1 = (function(index) {
  return this.a9.u(index).aZ();
});
$p.db = (function(index) {
  return this.a9.u(index).aL();
});
$p.p9 = (function(index) {
  return this.a9.u(index);
});
$p.gM = (function(index) {
  return this.jm;
});
$p.et = (function(f) {
  this.a9.bc(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.aZ();
    var v = x$1$2.aL();
    return f.fh(k, v);
  })));
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.dy === that.dy) && (this.a9.q() === that.a9.q()))) {
      var iter = this.a9.m();
      while (iter.p()) {
        var \u03b412$;
        var \u03b412$ = iter.l();
        var key = \u03b412$.aZ();
        var value = \u03b412$.aL();
        var index = that.fp(key);
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
  return Math.imul(this.a9.q(), this.dy);
});
$p.kd = (function(index) {
  return this.d9(index);
});
$p.oN = (function() {
  return new $c_sci_HashCollisionMapNode(this.jm, this.dy, this.a9);
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
$p.rT = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().jJ(source).kB());
});
$p.ay = (function(it) {
  return this.rT(it);
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
$p.p4 = (function(it) {
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
  return new $c_sci_MapBuilderImpl().ov(it).pv();
});
$p.ay = (function(it) {
  return this.p4(it);
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
$p.rV = (function(it) {
  var k = it.y();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).oy(it);
});
$p.b5 = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.ay = (function(source) {
  return this.rV(source);
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
  this.gk = null;
  this.gl = null;
  this.dP = 0;
  this.qe = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.qe = outer;
  $ct_s_concurrent_BatchingExecutor$AbstractBatch__jl_Runnable__Ajl_Runnable__I__(this, runnable, $m_s_concurrent_BatchingExecutorStatics$().o4, 1);
}
$p = $c_s_concurrent_BatchingExecutor$SyncBatch.prototype = new $h_s_concurrent_BatchingExecutor$AbstractBatch();
$p.constructor = $c_s_concurrent_BatchingExecutor$SyncBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$SyncBatch() {
}
$h_s_concurrent_BatchingExecutor$SyncBatch.prototype = $p;
$p.ey = (function() {
  while (true) {
    try {
      this.te(1024);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if (false) {
        $m_s_concurrent_ExecutionContext$().fe.c(e$2);
      } else {
        matchResult2: {
          if ($m_s_util_control_NonFatal$().hU(e$2)) {
            $m_s_concurrent_ExecutionContext$().fe.c(e$2);
            break matchResult2;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
        }
      }
    }
    if ((this.dP > 0)) {
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
$p.fw = (function(owner) {
  var c = this.O;
  var target$tailLocal1 = c;
  var current$tailLocal1 = c;
  while (true) {
    var value = target$tailLocal1.O;
    if ($is_s_concurrent_impl_Promise$Callbacks(value)) {
      if (this.gG(current$tailLocal1, target$tailLocal1)) {
        return target$tailLocal1;
      } else {
        current$tailLocal1 = this.O;
      }
    } else if ((value instanceof $c_s_concurrent_impl_Promise$Link)) {
      target$tailLocal1 = value.O;
    } else {
      owner.tI(value);
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
$p.fh = (function(x0, x1) {
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
  return this.c9(x, $m_s_PartialFunction$().hz);
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
$p.rX = (function(f) {
  return (() => f.M());
});
$p.i1 = (function(f) {
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
  this.fH = null;
  this.fI = null;
  this.fE = null;
  this.fF = null;
  this.hb = null;
  this.fG = null;
  this.fH = text;
  this.fI = translation;
  this.fE = audio;
  this.fF = deck;
  this.hb = language;
  this.fG = tags;
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
    if ((this.fH === x$0.fH)) {
      var x = this.fI;
      var x$2 = x$0.fI;
      var $x_3 = ((x === null) ? (x$2 === null) : x.g(x$2));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$3 = this.fE;
      var x$4 = x$0.fE;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : x$3.g(x$4));
    } else {
      var $x_2 = false;
    }
    if (($x_2 && (this.fF === x$0.fF))) {
      var x$5 = this.hb;
      var x$6 = x$0.hb;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : x$5.g(x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$7 = this.fG;
      var x$8 = x$0.fG;
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
      return this.fH;
      break;
    }
    case 1: {
      return this.fI;
      break;
    }
    case 2: {
      return this.fE;
      break;
    }
    case 3: {
      return this.fF;
      break;
    }
    case 4: {
      return this.hb;
      break;
    }
    case 5: {
      return this.fG;
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
  this.eL = null;
  this.eK = null;
  this.eL = text;
  this.eK = detectedLanguage;
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
    if ((this.eL === x$0.eL)) {
      var x = this.eK;
      var x$2 = x$0.eK;
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
    return this.eL;
  }
  if ((n === 1)) {
    return this.eK;
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
$p.cK = (function() {
  return this.kL;
});
$p.cC = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gR = (function(nextValue) {
  try {
    this.kM.c(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.kK) {
      this.ew(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cp(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.ew = (function(error) {
  try {
    if (this.id.cJ(error)) {
      this.id.c(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().cp(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().cp(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.e4 = (function(nextValue) {
  nextValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((error) => {
    this.ew(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue$2) => {
    this.gR(nextValue$2);
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
$p.cK = (function() {
  return this.kO;
});
$p.cC = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gR = (function(nextValue) {
  this.e4(new $c_s_util_Success(nextValue));
});
$p.ew = (function(error) {
  this.e4(new $c_s_util_Failure(error));
});
$p.e4 = (function(nextValue) {
  try {
    if (this.ie.cJ(nextValue)) {
      this.ie.c(nextValue);
    } else {
      nextValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cp(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.kN && nextValue.pe())) {
      this.ew(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cp(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().cp(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
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
  this.eP = null;
  this.l4 = parentDisplayName;
  this.l2 = displayNameSuffix;
  this.l3 = (void 0);
  this.eP = new $c_Lcom_raquo_airstream_eventbus_EventBusStream(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
}
$p = $c_Lcom_raquo_airstream_eventbus_WriteBus.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_eventbus_WriteBus;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_WriteBus() {
}
$h_Lcom_raquo_airstream_eventbus_WriteBus.prototype = $p;
$p.cK = (function() {
  return this.l3;
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gR = (function(nextValue) {
  if ($f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this.eP)) {
    this.eP.fu(nextValue, null);
  }
});
$p.ew = (function(nextError) {
  if ($f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this.eP)) {
    this.eP.ft(nextError, null);
  }
});
$p.e4 = (function(nextValue) {
  nextValue.bU(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    this.ew(nextError);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue$2) => {
    this.gR(nextValue$2);
  })));
});
$p.cC = (function() {
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
  this.pV = null;
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
$p.tx = (function() {
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
$p.jQ = (function(element) {
  var this$1 = this.mv;
  var insertContext = (this$1.d() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().t8(element, this.mx, this.ix) : this$1.x());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((mountContext) => this.mw.jM(insertContext, mountContext.iD, this.ix)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().h5(element.cc, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.ck = (function(element) {
  this.jQ(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  f2: 1,
  a6: 1,
  f6: 1,
  f3: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.ec = name;
  $thiz.ed = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.ec = null;
  this.ed = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.or = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().tl(element, styleProp, value$2);
  })));
});
$p.jG = (function(values, ev) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.eA(), new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((el, v, _$1) => {
    $m_Lcom_raquo_laminar_DomApi$().ti(el, this, v);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.iH = null;
  this.iI = null;
  this.iH = $m_s_None$();
  this.iI = $m_Lcom_raquo_laminar_DomApi$().rl(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.jS = (function() {
  return this.iH;
});
$p.ez = (function(maybeNextParent) {
  this.iH = maybeNextParent;
});
$p.eE = (function(maybeNextParent) {
});
$p.ck = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gu(parentNode, this, (void 0));
});
$p.ao = (function() {
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
  this.iO = $m_Lcom_raquo_laminar_DomApi$().ro(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.jS = (function() {
  return this.iN;
});
$p.ez = (function(maybeNextParent) {
  this.iN = maybeNextParent;
});
$p.eE = (function(maybeNextParent) {
});
$p.ck = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gu(parentNode, this, (void 0));
});
$p.tC = (function() {
  return this.iO.data;
});
$p.ao = (function() {
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
  var str$1 = $m_jl_String$().sF(str, 0, str.a.length);
  this.r = (("" + this.r) + str$1);
  return this;
});
$p.h = (function() {
  return this.r;
});
$p.q = (function() {
  return this.r.length;
});
$p.fi = (function(index) {
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
  this.cO = 0;
  this.G = 0;
  this.t = 0;
  this.cr = 0;
  this.eg = null;
  this.eh = 0;
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
  var p = this.t;
  if ((p === this.G)) {
    throw new $c_Ljava_nio_BufferOverflowException();
  }
  this.t = ((1 + p) | 0);
  var a = this.eg;
  var i = ((this.eh + p) | 0);
  a.a[i] = b;
  return this;
});
$p.sR = (function(src, offset, length) {
  if (this.iX) {
    throw new $c_Ljava_nio_ReadOnlyBufferException();
  }
  if ((((offset < 0) || (length < 0)) || (offset > ((src.a.length - length) | 0)))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  var p = this.t;
  var newPos = ((p + length) | 0);
  if ((newPos > this.G)) {
    throw new $c_Ljava_nio_BufferOverflowException();
  }
  this.t = newPos;
  var x2 = this.eg;
  var x3 = ((this.eh + p) | 0);
  src.s(offset, x2, x3, length);
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
  this.cs = null;
  this.hs = 0;
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
  this.cs = null;
  this.hs = 0;
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
  this.cs = null;
  this.cP = 0;
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
  this.cs = null;
  this.cP = 0;
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
  this.cs = null;
  this.cP = 0;
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
  this.qc = null;
  this.qc = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => $m_s_None$()));
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
$p.cJ = (function(x) {
  return false;
});
$p.jN = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.c = (function(v1) {
  this.jN(v1);
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
$p.jP = (function(x) {
  var z = this.nu.c9(x, $m_s_PartialFunction$().hA);
  return ((!$m_s_PartialFunction$().tf(z)) ? new $c_s_Some(z) : $m_s_None$());
});
$p.c = (function(v1) {
  return this.jP(v1);
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
$p.jU = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.e0 = (function(n) {
  return this.h4(n, (-1));
});
$p.h4 = (function(from, until) {
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
  $thiz.f4 = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.f4 = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.oH = (function(elems) {
  return this.f4.d8(elems);
});
$p.p2 = (function(it) {
  return this.f4.ay(it);
});
$p.b5 = (function() {
  return this.f4.b5();
});
$p.d8 = (function(elems) {
  return this.oH(elems);
});
$p.ay = (function(source) {
  return this.p2(source);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cD(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => x$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.gK(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.bk(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bk(0) === 0);
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
  this.hC = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.rU = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.ay.call(this, it));
});
$p.ay = (function(it) {
  return this.rU(it);
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
$p.d8 = (function(elems) {
  return this.k9(elems);
});
$p.tg = (function(ll, n) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef, iRef) => (() => {
    var rest = restRef.ff;
    var i = iRef.eq;
    while (((i > 0) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest) === $m_sci_LazyList$().aa)))) {
      rest = rest.be();
      restRef.ff = rest;
      i = ((i - 1) | 0);
      iRef.eq = i;
    }
    return rest;
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.k9 = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.y() === 0) ? this.aa : $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.px(coll.m()))))));
});
$p.py = (function(it, suffix) {
  return (it.p() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.l(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.py(it, suffix))))) : suffix.M());
});
$p.px = (function(it) {
  return (it.p() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.l(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.px(it))))) : this.aa);
});
$p.b5 = (function() {
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
  this.gg = null;
  this.nY = f$2;
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
$p.qK = (function(x) {
  this.gg.b4(x);
  return this;
});
$p.qw = (function(xs) {
  this.gg.b3(xs);
  return this;
});
$p.b6 = (function(size) {
  this.gg.b6(size);
});
$p.bd = (function() {
  return this.nY.c(this.gg.bd());
});
$p.b4 = (function(elem) {
  return this.qK(elem);
});
$p.b3 = (function(elems) {
  return this.qw(elems);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  iF: 1,
  L: 1,
  N: 1,
  S: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.dM = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.dM = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.b6 = (function(size) {
});
$p.qL = (function(elem) {
  this.dM.b4(elem);
  return this;
});
$p.qx = (function(xs) {
  this.dM.b3(xs);
  return this;
});
$p.bd = (function() {
  return this.dM;
});
$p.b4 = (function(elem) {
  return this.qL(elem);
});
$p.b3 = (function(elems) {
  return this.qx(elems);
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
  fk() {
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
      runnable.ey();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gY($m_jl_System$Streams$().f1);
    }
  }));
});
$p.kA = (function(t) {
  t.gY($m_jl_System$Streams$().f1);
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
  setTimeout($m_sjs_js_Any$().rX(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    try {
      runnable.ey();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gY($m_jl_System$Streams$().f1);
    }
  }))), 0);
});
$p.kA = (function(t) {
  t.gY($m_jl_System$Streams$().f1);
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
$p.fh = (function(x0, x1) {
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
$p.jM = (function(x0, x1, x2) {
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
$p.so = (function(x) {
  var x$2 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
  if (((x$2 === null) ? (x === null) : x$2.g(x))) {
    return true;
  } else {
    return false;
  }
});
$p.qS = (function(x, default$1) {
  var x$2 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
  if (((x$2 === null) ? (x === null) : x$2.g(x))) {
    return (void 0);
  } else {
    return default$1.c(x);
  }
});
$p.cJ = (function(x) {
  return this.so(x);
});
$p.c9 = (function(x, default$1) {
  return this.qS(x, default$1);
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
  this.fJ = null;
  this.kG = null;
  this.fJ = code;
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
  return ((this === x$0) || ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage) && (this.fJ === x$0.fJ)));
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
    return this.fJ;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.es = (function() {
  return this.fJ;
});
$p.gJ = (function() {
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
  $thiz.gE($m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.gF($m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.eF(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.gP(observer);
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
  var this$ = $thiz.cF();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.cI();
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
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pu($thiz.cI(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().pu($thiz.cF(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.h6())) {
    $thiz.gU();
    $thiz.eF(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.gS();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.gT();
    $thiz.eF(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.cF();
  var $x_1 = this$.length;
  var this$$1 = $thiz.cI();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_eventbus_EventBus() {
  this.kS = null;
  this.kT = null;
  this.kR = null;
  this.kS = (void 0);
  this.kT = new $c_Lcom_raquo_airstream_eventbus_WriteBus(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))), ".writer");
  this.kR = this.kT.eP;
}
$p = $c_Lcom_raquo_airstream_eventbus_EventBus.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_eventbus_EventBus;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_EventBus() {
}
$h_Lcom_raquo_airstream_eventbus_EventBus.prototype = $p;
$p.cK = (function() {
  return this.kS;
});
$p.cC = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eA = (function() {
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
  $thiz.lB = $m_Lcom_raquo_airstream_core_Observer$().rY(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__set__O__V($thiz, value) {
  var tryValue = new $c_s_util_Success(value);
  $thiz.lB.e4(tryValue);
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
$p.sp = (function(x) {
  return true;
});
$p.qT = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    this.lC.th(x, _$1);
  })));
});
$p.cJ = (function(x) {
  return this.sp(x);
});
$p.c9 = (function(x, default$1) {
  return this.qT(x, default$1);
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
    $thiz.cc.rp();
  })));
  $thiz.ee = (void 0);
  $thiz.fU = $m_sci_Map$EmptyMap$();
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.ee === (void 0))) {
    $thiz.ee = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.ee;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.ee;
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
  var x = $thiz.ee;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.ee;
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
  var keyItemsWithReason = $thiz.fU.da(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.d())) {
      var x0 = these.D();
      var x = x0.aZ();
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
  var this$1 = $thiz.fU.da(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.bt(t$1.aZ()));
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
  var domValues = key.iy.oP(key.my.c($thiz));
  var f$3 = ((elem) => result.bt(elem));
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
  $thiz.fU = $thiz.fU.e6(key, newItems);
  key.mA.fh($thiz, key.iy.oR(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.fT, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.fT;
  $thiz.fT = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.d()) && (!maybePrevParent.x().hZ().bL.d()));
  var isNextParentActive = ((!maybeNextParent.d()) && (!maybeNextParent.x().hZ().bL.d()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.d() ? $m_s_None$() : new $c_s_Some(maybeNextParent.x().hZ())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.d()) {
    $thiz.iJ.r2();
  } else {
    var x0 = maybeNextOwner.x();
    $thiz.iJ.tm(x0);
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
    if (($thiz.hy === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.hy;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.ak.N));
      try {
        var $x_1 = ((($thiz.hy + " (") + ofClass) + ")");
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
    this.hy = null;
    this.ns = null;
    this.nt = false;
    this.hy = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  fo() {
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
$p.bt = (function(elem) {
  return ((!this.d()) && $m_sr_BoxesRunTime$().n(this.x(), elem));
});
$p.m = (function() {
  return (this.d() ? $m_sc_Iterator$().X : new $c_sc_Iterator$$anon$20(this.x()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.g3 = 0;
  this.nw = 0;
  this.nv = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.nv = outer;
  this.g3 = 0;
  this.nw = outer.z();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.p = (function() {
  return (this.g3 < this.nw);
});
$p.l = (function() {
  var result = this.nv.A(this.g3);
  this.g3 = ((1 + this.g3) | 0);
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
$p.aZ = (function() {
  return this.jd;
});
$p.aL = (function() {
  return this.je;
});
$p.h = (function() {
  return (((("(" + this.aZ()) + ",") + this.aL()) + ")");
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
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().n(this.aZ(), x$1.aZ()) && $m_sr_BoxesRunTime$().n(this.aL(), x$1.aL()))));
});
$p.os = (function() {
  return (+this.aZ());
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
$p.sG = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator");
});
$p.y = (function() {
  return 0;
});
$p.l = (function() {
  this.sG();
});
$p.h4 = (function(from, until) {
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
  this.g6 = false;
  this.ny = a$2;
  this.g6 = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.p = (function() {
  return (!this.g6);
});
$p.l = (function() {
  if (this.g6) {
    return $m_sc_Iterator$().X.l();
  } else {
    this.g6 = true;
    return this.ny;
  }
});
$p.h4 = (function(from, until) {
  return (((this.g6 || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().X : this);
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
  this.hD = false;
  this.nA = null;
  this.ji = null;
  this.nz = f$8;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ji = outer;
  this.nB = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.hD = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.p = (function() {
  while (true) {
    if (this.hD) {
      return true;
    } else if (this.ji.p()) {
      var a = this.ji.l();
      if ((!this.nB.hR(this.nz.c(a)))) {
        continue;
      }
      this.nA = a;
      this.hD = true;
      return true;
    } else {
      return false;
    }
  }
});
$p.l = (function() {
  if (this.p()) {
    this.hD = false;
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
  this.hE = null;
  this.nC = f$9;
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
$p.y = (function() {
  return this.hE.y();
});
$p.p = (function() {
  return this.hE.p();
});
$p.l = (function() {
  return this.nC.c(this.hE.l());
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
      $thiz.dn = c.dn;
      if ((c.c0 !== null)) {
        if (($thiz.bZ === null)) {
          $thiz.bZ = c.bZ;
        }
        var x$proxy10 = c.bZ;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().bu();
        }
        x$proxy10.g7 = $thiz.c0;
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
      $thiz.bz = $thiz.c0.sa();
      if (($thiz.bZ === $thiz.c0)) {
        var x$proxy12 = $thiz.bZ;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().bu();
        }
        $thiz.bZ = x$proxy12.g7;
      }
      $thiz.c0 = $thiz.c0.g7;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.dn) {
        return true;
      } else {
        if ((!(($thiz.bz !== null) && $thiz.bz.p()))) {
          continue;
        }
        $thiz.dn = true;
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
  this.dn = false;
  this.bz = from;
  this.c0 = null;
  this.bZ = null;
  this.dn = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.p = (function() {
  if (this.dn) {
    return true;
  } else if ((this.bz !== null)) {
    if (this.bz.p()) {
      this.dn = true;
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
    this.dn = false;
    var x$proxy13 = this.bz;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    return x$proxy13.l();
  } else {
    return $m_sc_Iterator$().X.l();
  }
});
$p.jU = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.c0 === null)) {
    this.c0 = c;
    this.bZ = c;
  } else {
    var x$proxy14 = this.bZ;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    x$proxy14.g7 = c;
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
  while (($thiz.cS > 0)) {
    if ($thiz.dp.p()) {
      $thiz.dp.l();
      $thiz.cS = (($thiz.cS - 1) | 0);
    } else {
      $thiz.cS = 0;
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
  this.dp = null;
  this.bO = 0;
  this.cS = 0;
  this.dp = underlying;
  this.bO = limit;
  this.cS = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.y = (function() {
  var size = this.dp.y();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.cS) | 0);
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
  return ((this.bO !== 0) && this.dp.p());
});
$p.l = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.bO > 0)) {
    this.bO = ((this.bO - 1) | 0);
    return this.dp.l();
  } else {
    return ((this.bO < 0) ? this.dp.l() : $m_sc_Iterator$().X.l());
  }
});
$p.h4 = (function(from, until) {
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
  var sum = ((this.cS + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().X;
  } else if ((sum < 0)) {
    this.cS = 2147483647;
    this.bO = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.dp, ((sum - 2147483647) | 0), rest))));
  } else {
    this.cS = sum;
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
  return ((x >= 0) && ($thiz.bk(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.oQ(n);
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
$p.p = (function() {
  return (!this.g8.d());
});
$p.l = (function() {
  var r = this.g8.D();
  this.g8 = this.g8.v();
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
  $thiz.g9 = 0;
  $thiz.bB = (-1);
  return $thiz;
}
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.cU === null)) {
    $thiz.cU = new $ac_I(($m_sci_Node$().gf << 1));
    $thiz.ga = new ($d_sci_Node.r().C)($m_sci_Node$().gf);
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
  $thiz.g9 = node.kx();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bB = ((1 + $thiz.bB) | 0);
  var cursorIndex = ($thiz.bB << 1);
  var lengthIndex = ((1 + ($thiz.bB << 1)) | 0);
  $thiz.ga.a[$thiz.bB] = node;
  $thiz.cU.a[cursorIndex] = 0;
  $thiz.cU.a[lengthIndex] = node.kt();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bB = (($thiz.bB - 1) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bB >= 0)) {
    var cursorIndex = ($thiz.bB << 1);
    var lengthIndex = ((1 + ($thiz.bB << 1)) | 0);
    var nodeCursor = $thiz.cU.a[cursorIndex];
    if ((nodeCursor < $thiz.cU.a[lengthIndex])) {
      var \u03b41$ = $thiz.cU;
      \u03b41$.a[cursorIndex] = ((1 + \u03b41$.a[cursorIndex]) | 0);
      var nextNode = $thiz.ga.a[$thiz.bB].kd(nodeCursor);
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
  this.g9 = 0;
  this.ek = null;
  this.bB = 0;
  this.cU = null;
  this.ga = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.p = (function() {
  return ((this.bP < this.g9) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.dx = (-1);
  $thiz.bQ = (-1);
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
  $thiz.hG = node;
  $thiz.dx = ((node.kx() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.bQ = ((1 + $thiz.bQ) | 0);
  $thiz.gc.a[$thiz.bQ] = node;
  $thiz.gb.a[$thiz.bQ] = ((node.kt() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.bQ = (($thiz.bQ - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bQ >= 0)) {
    var nodeCursor = $thiz.gb.a[$thiz.bQ];
    $thiz.gb.a[$thiz.bQ] = ((nodeCursor - 1) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.gc.a[$thiz.bQ].kd(nodeCursor));
    } else {
      var currNode = $thiz.gc.a[$thiz.bQ];
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
  this.dx = 0;
  this.hG = null;
  this.bQ = 0;
  this.gb = null;
  this.gc = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.p = (function() {
  return ((this.dx >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.f5 !== null);
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
  var dataIx = bm.gI(bitpos);
  var idx = (dataIx << 1);
  var src = bm.al;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.s(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.s(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bA, dataIx, originalHash);
  bm.Y = (bm.Y | bitpos);
  bm.al = dst;
  bm.bA = dstHashes;
  bm.aR = ((1 + bm.aR) | 0);
  bm.bo = ((bm.bo + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.f5 = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.cw = $thiz.cw.oM();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.f5 = null;
  this.cw = null;
  this.cw = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().nr, $m_s_Array$EmptyArrays$().jc, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.b6 = (function(size) {
});
$p.fA = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().ev(keyHash, shift);
    var bitpos = $m_sci_Node$().dY(mask);
    if (((mapNode.Y & bitpos) !== 0)) {
      var index = $m_sci_Node$().cH(mapNode.Y, mask, bitpos);
      var key0 = mapNode.e1(index);
      var key0UnimprovedHash = mapNode.gM(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().n(key0, key))) {
        mapNode.al.a[((1 + (index << 1)) | 0)] = value;
        return (void 0);
      } else {
        var value0 = mapNode.db(index);
        var key0Hash = $m_sc_Hashing$().cl(key0UnimprovedHash);
        var subNodeNew = mapNode.kr(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.sA(bitpos, key0Hash, subNodeNew);
        return (void 0);
      }
    } else if (((mapNode.a8 & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cH(mapNode.a8, mask, bitpos);
      var subNode = mapNode.d9(index$2);
      var beforeSize = subNode.aP();
      var beforeHash = subNode.dZ();
      this.fA(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.aR = ((mapNode.aR + ((subNode.aP() - beforeSize) | 0)) | 0);
      mapNode.bo = ((mapNode.bo + ((subNode.dZ() - beforeHash) | 0)) | 0);
      return (void 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
      return (void 0);
    }
  }
  if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.fp(key);
    if ((index$3 < 0)) {
      mapNode.a9 = mapNode.a9.dV($ct_T2__O__O__(new $c_T2(), key, value));
      return (void 0);
    } else {
      mapNode.a9 = mapNode.a9.e5(index$3, $ct_T2__O__O__(new $c_T2(), key, value));
      return (void 0);
    }
  }
  throw new $c_s_MatchError(mapNode);
});
$p.kB = (function() {
  if ((this.cw.aR === 0)) {
    return $m_sci_HashMap$().jn;
  } else if ((this.f5 !== null)) {
    return this.f5;
  } else {
    this.f5 = new $c_sci_HashMap(this.cw);
    return this.f5;
  }
});
$p.oA = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().L(elem.aZ());
  var im = $m_sc_Hashing$().cl(h);
  this.fA(this.cw, elem.aZ(), elem.aL(), h, im, 0);
  return this;
});
$p.er = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().L(key);
  this.fA(this.cw, key, value, originalHash, $m_sc_Hashing$().cl(originalHash), 0);
  return this;
});
$p.jJ = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(xs, this);
  } else if (false) {
    var iter = xs.u1();
    while (iter.p()) {
      var next = iter.l();
      var originalHash = xs.tH(next.pa());
      var hash = $m_sc_Hashing$().cl(originalHash);
      this.fA(this.cw, next.pi(), next.pT(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.rD();
    while (iter$2.p()) {
      var next$2 = iter$2.l();
      var originalHash$2 = xs.tH(next$2.pa());
      var hash$2 = $m_sc_Hashing$().cl(originalHash$2);
      this.fA(this.cw, next$2.pi(), next$2.pT(), originalHash$2, hash$2, 0);
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
$p.bd = (function() {
  return this.kB();
});
$p.b4 = (function(elem) {
  return this.oA(elem);
});
$p.b3 = (function(elems) {
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
  this.f6 = null;
  this.nM = null;
  this.r1();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.b6 = (function(size) {
});
$p.r1 = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.nM = ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.k2()))));
  this.f6 = deferred;
});
$p.tc = (function() {
  this.f6.kj(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().aa)));
  return this.nM;
});
$p.qH = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.f6.kj(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $m_sci_LazyList$();
    return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.k2())))));
  })));
  this.f6 = deferred;
  return this;
});
$p.qu = (function(xs) {
  if ((xs.y() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.f6.kj(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().py(xs.m(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.k2()))))));
    this.f6 = deferred;
  }
  return this;
});
$p.bd = (function() {
  return this.tc();
});
$p.b4 = (function(elem) {
  return this.qH(elem);
});
$p.b3 = (function(elems) {
  return this.qu(elems);
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
  this.f7 = null;
  this.f7 = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.p = (function() {
  return (!($p_sci_LazyList__evaluated__sci_LazyList(this.f7) === $m_sci_LazyList$().aa));
});
$p.l = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this.f7) === $m_sci_LazyList$().aa)) {
    return $m_sc_Iterator$().X.l();
  } else {
    var res = this.f7.D();
    this.f7 = this.f7.be();
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
$p.d8 = (function(elems) {
  return $m_sci_Nil$().ky(elems);
});
$p.b5 = (function() {
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
  $thiz.f8 = outer;
  $thiz.dB = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dB = 0;
  this.f8 = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.p = (function() {
  return (this.dB < 2);
});
$p.l = (function() {
  matchResult5$1: {
    var result;
    var x23 = this.dB;
    if ((x23 === 0)) {
      var result = $ct_T2__O__O__(new $c_T2(), this.f8.cd, this.f8.dz);
      break matchResult5$1;
    }
    if ((x23 === 1)) {
      var result = $ct_T2__O__O__(new $c_T2(), this.f8.ce, this.f8.dA);
      break matchResult5$1;
    }
    var result = $m_sc_Iterator$().X.l();
  }
  this.dB = ((1 + this.dB) | 0);
  return result;
});
$p.e0 = (function(n) {
  this.dB = ((this.dB + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.dC = outer;
  $thiz.dD = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dD = 0;
  this.dC = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.p = (function() {
  return (this.dD < 3);
});
$p.l = (function() {
  var result;
  switch (this.dD) {
    case 0: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dC.c1, this.dC.cV);
      break;
    }
    case 1: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dC.c2, this.dC.cW);
      break;
    }
    case 2: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dC.c3, this.dC.cX);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().X.l();
    }
  }
  this.dD = ((1 + this.dD) | 0);
  return result;
});
$p.e0 = (function(n) {
  this.dD = ((this.dD + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.cz = outer;
  $thiz.dE = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dE = 0;
  this.cz = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.p = (function() {
  return (this.dE < 4);
});
$p.l = (function() {
  var result;
  switch (this.dE) {
    case 0: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cz.bC, this.cz.cf);
      break;
    }
    case 1: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cz.bD, this.cz.cg);
      break;
    }
    case 2: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cz.bE, this.cz.ch);
      break;
    }
    case 3: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cz.bF, this.cz.ci);
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
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.cY = null;
  this.gd = false;
  this.em = null;
  this.cY = $m_sci_Map$EmptyMap$();
  this.gd = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.b6 = (function(size) {
});
$p.pv = (function() {
  return (this.gd ? this.em.kB() : this.cY);
});
$p.qF = (function(key, value) {
  if (this.gd) {
    this.em.er(key, value);
  } else if ((this.cY.aP() < 4)) {
    this.cY = this.cY.e6(key, value);
  } else if (this.cY.bt(key)) {
    this.cY = this.cY.e6(key, value);
  } else {
    this.gd = true;
    if ((this.em === null)) {
      this.em = new $c_sci_HashMapBuilder();
    }
    this.cY.qZ(this.em);
    this.em.er(key, value);
  }
  return this;
});
$p.ov = (function(xs) {
  return (this.gd ? (this.em.jJ(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.bd = (function() {
  return this.pv();
});
$p.b4 = (function(elem) {
  return this.qF(elem.aZ(), elem.aL());
});
$p.b3 = (function(elems) {
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
    var $x_1 = $m_jl_Integer$().pf($m_jl_System$SystemProperties$().kf("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
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
$p.d8 = (function(elems) {
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
          var x = it.a5().aO();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.cv;
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
      return new $c_sci_VectorBuilder().ow(it).pw();
    }
  }
});
$p.ay = (function(source) {
  return this.ka(source);
});
$p.b5 = (function() {
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
      src.s(i, dest, 0, length);
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
        src$1.s(i$2, dest$1, 0, length$1);
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
        a = $m_ju_Arrays$().Z(a, i$2, 32);
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
        src$2.s(i$3, dest$2, 0, length$2);
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
        a = $m_ju_Arrays$().Z(a, i$3, 32);
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
        src$3.s(i$4, dest$3, 0, length$3);
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
        a = $m_ju_Arrays$().Z(a, i$4, 32);
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
        src$4.s(i$5, dest$4, 0, length$4);
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
        a = $m_ju_Arrays$().Z(a, i$5, 32);
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
        src$5.s(i$6, dest$5, 0, length$5);
      }
      $thiz.Q = a;
      $thiz.J = (($thiz.J - $thiz.H) | 0);
      $thiz.H = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().Z(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.hH = false;
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
    data.s(0, dest, destPos, copy1);
    $thiz.J = (($thiz.J + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.Q;
      data.s(copy1, dest$1, 0, copy2);
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
      slice.s(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.I;
        slice.s(copy1$2, dest$3, 0, copy2$2);
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
      slice.s(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.N;
        slice.s(copy1$3, dest$5, 0, copy2$3);
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
      slice.s(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.T;
        slice.s(copy1$4, dest$7, 0, copy2$4);
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
  var sliceCount = xs.cN();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.cM(sliceIdx);
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
  this.hH = false;
  this.K = 0;
  this.Q = new $ac_O(32);
  this.J = 0;
  this.C = 0;
  this.H = 0;
  this.hH = false;
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
$p.sf = (function(v) {
  var x28 = v.cN();
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
      this.Q = ((a.a.length === 32) ? a : $m_ju_Arrays$().Z(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.br;
      var a$1 = v.j;
      this.Q = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().Z(a$1, 0, 32));
      this.K = 2;
      this.H = ((32 - v.bR) | 0);
      var i$1 = ((v.k + this.H) | 0);
      this.J = (31 & i$1);
      this.C = ((i$1 - this.J) | 0);
      this.F = new ($d_O.r().r().C)(32);
      this.F.a[0] = v.f;
      var dest = this.F;
      var length = d2.a.length;
      d2.s(0, dest, 1, length);
      this.F.a[((1 + d2.a.length) | 0)] = this.Q;
      break;
    }
    case 5: {
      var d3 = v.b0;
      var s2 = v.b1;
      var a$2 = v.j;
      this.Q = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().Z(a$2, 0, 32));
      this.K = 3;
      this.H = ((1024 - v.bj) | 0);
      var i$2 = ((v.k + this.H) | 0);
      this.J = (31 & i$2);
      this.C = ((i$2 - this.J) | 0);
      this.I = new ($d_O.r().r().r().C)(32);
      this.I.a[0] = $m_sci_VectorStatics$().cB(v.f, v.bH);
      var dest$1 = this.I;
      var length$1 = d3.a.length;
      d3.s(0, dest$1, 1, length$1);
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
      this.Q = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().Z(a$3, 0, 32));
      this.K = 4;
      this.H = ((32768 - v.aW) | 0);
      var i$3 = ((v.k + this.H) | 0);
      this.J = (31 & i$3);
      this.C = ((i$3 - this.J) | 0);
      this.N = new ($d_O.r().r().r().r().C)(32);
      this.N.a[0] = $m_sci_VectorStatics$().cB($m_sci_VectorStatics$().cB(v.f, v.b9), v.ba);
      var dest$2 = this.N;
      var length$2 = d4.a.length;
      d4.s(0, dest$2, 1, length$2);
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
      this.Q = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().Z(a$4, 0, 32));
      this.K = 5;
      this.H = ((1048576 - v.at) | 0);
      var i$4 = ((v.k + this.H) | 0);
      this.J = (31 & i$4);
      this.C = ((i$4 - this.J) | 0);
      this.T = new ($d_O.r().r().r().r().r().C)(32);
      this.T.a[0] = $m_sci_VectorStatics$().cB($m_sci_VectorStatics$().cB($m_sci_VectorStatics$().cB(v.f, v.aI), v.aJ), v.aK);
      var dest$3 = this.T;
      var length$3 = d5.a.length;
      d5.s(0, dest$3, 1, length$3);
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
      var d6 = v.a0;
      var s5 = v.a4;
      var s4$2 = v.a3;
      var s3$3 = v.a2;
      var s2$4 = v.a1;
      var a$5 = v.j;
      this.Q = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().Z(a$5, 0, 32));
      this.K = 6;
      this.H = ((33554432 - v.am) | 0);
      var i$5 = ((v.k + this.H) | 0);
      this.J = (31 & i$5);
      this.C = ((i$5 - this.J) | 0);
      this.aE = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aE.a[0] = $m_sci_VectorStatics$().cB($m_sci_VectorStatics$().cB($m_sci_VectorStatics$().cB($m_sci_VectorStatics$().cB(v.f, v.au), v.av), v.aw), v.ax);
      var dest$4 = this.aE;
      var length$4 = d6.a.length;
      d6.s(0, dest$4, 1, length$4);
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
$p.qI = (function(elem) {
  if ((this.J === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.Q.a[this.J] = elem;
  this.J = ((1 + this.J) | 0);
  return this;
});
$p.ow = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.J === 0) && (this.C === 0)) && (!this.hH)) ? this.sf(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.pw = (function() {
  if (this.hH) {
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
    var data = $m_ju_Arrays$().Z(this.F, 1, i2);
    var prefix1 = this.F.a[0];
    var a$1 = this.F.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().V(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.H) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & ((len - 1) | 0));
    var i2$2 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3 = ((((len - 1) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().Z(this.I, 1, i3);
    var a$2 = this.I.a[0];
    var prefix2 = $m_ju_Arrays$().Z(a$2, 1, a$2.a.length);
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
    var data$3 = $m_ju_Arrays$().Z(this.N, 1, i4);
    var a$4 = this.N.a[0];
    var prefix3 = $m_ju_Arrays$().Z(a$4, 1, a$4.a.length);
    var a$5 = this.N.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().Z(a$5, 1, a$5.a.length);
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
    var data$4 = $m_ju_Arrays$().Z(this.T, 1, i5);
    var a$7 = this.T.a[0];
    var prefix4 = $m_ju_Arrays$().Z(a$7, 1, a$7.a.length);
    var a$8 = this.T.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().Z(a$8, 1, a$8.a.length);
    var a$9 = this.T.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().Z(a$9, 1, a$9.a.length);
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
    var data$5 = $m_ju_Arrays$().Z(this.aE, 1, i6);
    var a$11 = this.aE.a[0];
    var prefix5 = $m_ju_Arrays$().Z(a$11, 1, a$11.a.length);
    var a$12 = this.aE.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().Z(a$12, 1, a$12.a.length);
    var a$13 = this.aE.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().Z(a$13, 1, a$13.a.length);
    var a$14 = this.aE.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().Z(a$14, 1, a$14.a.length);
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
$p.b4 = (function(elem) {
  return this.qI(elem);
});
$p.b3 = (function(elems) {
  return this.ow(elems);
});
$p.bd = (function() {
  return this.pw();
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
$p.d8 = (function(elems) {
  return this.p5(elems);
});
$p.p5 = (function(coll) {
  var k = coll.y();
  if ((k >= 0)) {
    var array = this.pz(this.nT, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bT(array, 0, 2147483647) : coll.m().bT(array, 0, 2147483647));
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).ox(coll);
  }
});
$p.b5 = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.tb = (function(arrayLen, targetLen) {
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
$p.pz = (function(array, curSize, targetSize) {
  var newLen = this.tb(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.s(0, res, 0, curSize);
    return res;
  }
});
$p.ay = (function(source) {
  return this.p5(source);
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
  this.dM = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.b6 = (function(size) {
  this.dM.b6(size);
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
  this.f4 = null;
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
  this.dM = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.b6 = (function(size) {
  this.dM.b6(size);
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
  $thiz.gh = outer;
  $thiz.dO = 0;
  $thiz.d3 = null;
  $thiz.gi = outer.aX.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.dO = 0;
  this.d3 = null;
  this.gi = 0;
  this.gh = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.p = (function() {
  if ((this.d3 !== null)) {
    return true;
  } else {
    while ((this.dO < this.gi)) {
      var n = this.gh.aX.a[this.dO];
      this.dO = ((1 + this.dO) | 0);
      if ((n !== null)) {
        this.d3 = n;
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
    var x$proxy10 = this.d3;
    if ((x$proxy10 === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    var r = this.k4(x$proxy10);
    var x$proxy11 = this.d3;
    if ((x$proxy11 === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    this.d3 = x$proxy11.aY;
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
$p.b3 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b6 = (function(size) {
});
$p.bd = (function() {
  return this.gj;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.f4 = null;
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
$p.d8 = (function(elems) {
  return new $c_scm_ListBuffer().i9(elems);
});
$p.b5 = (function() {
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
  $m_scm_MutationTracker$().oI(this.o2, (this.o3.M() | 0), "mutation occurred during iteration");
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
  $m_s_concurrent_ExecutionContext$().fe.c(t);
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
    var x$2 = $thiz.aO();
    var x$3 = x.aO();
    return ((x$2 === null) ? (x$3 === null) : (x$2 === x$3));
  } else {
    return false;
  }
}
function $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz) {
  return (clazz.ak.Z ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.ak.Q())) + "]") : clazz.ak.N);
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
  this.gr = 0;
  this.og = 0;
  this.oh = x$1;
  this.gr = 0;
  this.og = x$1.z();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.p = (function() {
  return (this.gr < this.og);
});
$p.l = (function() {
  var result = this.oh.A(this.gr);
  this.gr = ((1 + this.gr) | 0);
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
$p.d8 = (function(elems) {
  return this.p6(elems);
});
$p.b5 = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.p6 = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).bd();
});
$p.ay = (function(source) {
  return this.p6(source);
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
$p.d8 = (function(elems) {
  return this.kb(elems);
});
$p.kb = (function(source) {
  return this.b5().b3(source).bd();
});
$p.b5 = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.dQ))), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []));
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
  this.d7 = null;
  this.d7 = exception;
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
    var x = this.d7;
    var x$2 = x$0.d7;
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
    return this.d7;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.pd = (function() {
  return true;
});
$p.pe = (function() {
  return false;
});
$p.x = (function() {
  var $x_1 = this.d7;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.R : $x_1);
});
$p.bc = (function(f) {
});
$p.kp = (function(f) {
  return this;
});
$p.ps = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.c9(this.d7, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x18 = $m_s_util_control_NonFatal$().fz(e$2);
    if ((!x18.d())) {
      return new $c_s_util_Failure(x18.x());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
  }
});
$p.bU = (function(fa, fb) {
  return fa.c(this.d7);
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
  this.dR = null;
  this.dR = value;
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
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Left) && $m_sr_BoxesRunTime$().n(this.dR, x$0.dR)));
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
    return this.dR;
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
$p.pd = (function() {
  return false;
});
$p.pe = (function() {
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
    var x2 = $m_s_util_control_NonFatal$().fz(e$2);
    if ((!x2.d())) {
      return new $c_s_util_Failure(x2.x());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.R : e$2);
  }
});
$p.ps = (function(pf) {
  return this;
});
$p.bU = (function(fa, fb) {
  try {
    return fb.c(this.dS);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x42 = $m_s_util_control_NonFatal$().fz(e$2);
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
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().bW(this, (-793022216), true);
});
$p.g = (function(x$0) {
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
    return $bL(this.gs, this.gt);
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
  this.fC = null;
  this.fC = error;
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
    var x = this.fC;
    var x$2 = x$0.fC;
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
    return this.fC;
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
  this.eI = null;
  this.eH = null;
  this.eG = null;
  this.ha = null;
  this.eI = word;
  this.eH = sentence;
  this.eG = language;
  this.ha = position;
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
    if (((this.eI === x$0.eI) && (this.eH === x$0.eH))) {
      var x = this.eG;
      var x$2 = x$0.eG;
      var $x_1 = ((x === null) ? (x$2 === null) : x.g(x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.ha;
      var x$4 = x$0.ha;
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
      return this.eI;
      break;
    }
    case 1: {
      return this.eH;
      break;
    }
    case 2: {
      return this.eG;
      break;
    }
    case 3: {
      return this.ha;
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
  this.fD = 0;
  this.eJ = null;
  this.fD = code;
  this.eJ = msg;
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
  acc = $m_sr_Statics$().w(acc, this.fD);
  acc = $m_sr_Statics$().w(acc, $m_sr_Statics$().L(this.eJ));
  return $m_sr_Statics$().a6(acc, 2);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_ApiError) && ((this.fD === x$0.fD) && (this.eJ === x$0.eJ))));
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
    return this.fD;
  }
  if ((n === 1)) {
    return this.eJ;
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
  $thiz.bm = code;
  $thiz.bw = displayName;
  return $thiz;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  this.bm = null;
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
  return this.bm;
});
$p.gJ = (function() {
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
    this.fL = null;
    this.fK = null;
    this.fL = error;
    this.fK = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fn(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().fn(cause)), null, true, true);
    this.pc(cause);
  }
  W() {
    return new $c_s_Product$$anon$1(this);
  }
  i() {
    return $m_s_util_hashing_MurmurHash3$().jR(this, (-889275714), null);
  }
  g(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.fL;
      var x$2 = x$0.fL;
      if (((x === null) ? (x$2 === null) : x.g(x$2))) {
        var x$3 = this.fK;
        var x$4 = x$0.fK;
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
      return this.fL;
    }
    if ((n === 1)) {
      return this.fK;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  h() {
    return ((("ErrorHandlingError: " + this.fL) + "; cause: ") + this.fK);
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
    this.fM = null;
    this.fM = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fn(error)), null, true, true);
  }
  W() {
    return new $c_s_Product$$anon$1(this);
  }
  i() {
    return $m_s_util_hashing_MurmurHash3$().jR(this, (-889275714), null);
  }
  g(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.fM;
      var x$2 = x$0.fM;
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
      return this.fM;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  h() {
    return ("ObserverError: " + this.fM);
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
    this.fO = null;
    this.fN = null;
    this.fO = error;
    this.fN = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fn(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().fn(cause)), null, true, true);
    this.pc(cause);
  }
  W() {
    return new $c_s_Product$$anon$1(this);
  }
  i() {
    return $m_s_util_hashing_MurmurHash3$().jR(this, (-889275714), null);
  }
  g(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.fO;
      var x$2 = x$0.fO;
      if (((x === null) ? (x$2 === null) : x.g(x$2))) {
        var x$3 = this.fN;
        var x$4 = x$0.fN;
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
      return this.fO;
    }
    if ((n === 1)) {
      return this.fN;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  h() {
    return ((("ObserverErrorHandlingError: " + this.fO) + "; cause: ") + this.fN);
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
    this.eN = null;
    this.eM = 0;
    this.eN = trx;
    this.eM = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  W() {
    return new $c_s_Product$$anon$1(this);
  }
  i() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().w(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().w(acc, $m_sr_Statics$().L(this.eN));
    acc = $m_sr_Statics$().w(acc, this.eM);
    return $m_sr_Statics$().a6(acc, 2);
  }
  g(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.eM === x$0.eM)) {
        var x = this.eN;
        var x$2 = x$0.eN;
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
      return this.eN;
    }
    if ((n === 1)) {
      return this.eM;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  h() {
    return ((("TransactionDepthExceeded: " + this.eN) + "; maxDepth: ") + this.eM);
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
  this.df = null;
  this.lA = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.is = initial;
  this.ir = new $c_Lcom_raquo_airstream_state_VarSignal(this.is, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.df = this.ir;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.cK = (function() {
  return this.lA;
});
$p.cC = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.th = (function(value, transaction) {
  this.is = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.ir, value, transaction);
});
$p.eA = (function() {
  return this.df;
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
  this.ec = null;
  this.ed = null;
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
  this.ec = null;
  this.ed = null;
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
    $thiz.iK = $m_sjs_js_defined$().oF($m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_T.r().C)([propDomName]))));
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
        if ((x[i].u3() === propDomName)) {
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
  this.fT = null;
  this.cc = null;
  this.iJ = null;
  this.ee = null;
  this.fU = null;
  this.iL = null;
  this.bf = null;
  this.mP = null;
  this.iK = null;
  this.iL = tag;
  this.bf = ref;
  this.fT = $m_s_None$();
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
$p.jS = (function() {
  return this.fT;
});
$p.ck = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().gu(parentNode, this, (void 0));
});
$p.hZ = (function() {
  return this.cc;
});
$p.oL = (function(x$0) {
  this.cc = x$0;
});
$p.eE = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.ez = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.r8 = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().sn(this.bf)) {
    var x1 = this.iL;
    if (false) {
      return x1.tV();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().mu;
  }
});
$p.sl = (function(propDomName) {
  var x = this.r8();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().sb(x, propDomName, 0));
});
$p.sJ = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.sl(key.eV)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.eV)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.eV) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().oO(this.bf)) + "` that already has an input controller for `") + key.eV) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.eV);
      }
    }
  }
});
$p.h = (function() {
  return (("ReactiveHtmlElement(" + ((this.bf !== null) ? this.bf.outerHTML : ("tag=" + this.iL.iP))) + ")");
});
$p.ao = (function() {
  return this.bf;
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
  var str = $m_jl_Character$().tE(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  } else {
    return $thiz.repeat(count);
  }
}
function $f_T__split__T__I__AT($thiz, regex, limit) {
  return $m_ju_regex_PatternCompiler$().r5(regex, 0).st($thiz, limit);
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
  this.cO = 0;
  this.G = 0;
  this.t = 0;
  this.cr = 0;
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
  var start = this.t;
  var end = this.G;
  var h = (-182887236);
  var i = start;
  while ((i !== end)) {
    var $x_2 = $m_ju_internal_MurmurHash3$();
    var $x_1 = h;
    var index = i;
    h = $x_2.w($x_1, $dp_charAt__I__C(this.dh, ((this.di + index) | 0)));
    i = ((1 + i) | 0);
  }
  return $m_ju_internal_MurmurHash3$().a6(h, ((end - start) | 0));
});
$p.g = (function(that) {
  return ((that instanceof $c_Ljava_nio_CharBuffer) && (this.r4(that) === 0));
});
$p.r4 = (function(that) {
  if ((this === that)) {
    return 0;
  } else {
    var thisStart = this.t;
    var thisRemaining = ((this.G - thisStart) | 0);
    var thatStart = that.t;
    var thatRemaining = ((that.G - thatStart) | 0);
    var shortestLength = ((thisRemaining < thatRemaining) ? thisRemaining : thatRemaining);
    var i = 0;
    while ((i !== shortestLength)) {
      var index = ((thisStart + i) | 0);
      var t = $dp_charAt__I__C(this.dh, ((this.di + index) | 0));
      var index$1 = ((thatStart + i) | 0);
      var u = $dp_charAt__I__C(that.dh, ((that.di + index$1) | 0));
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
  return ((this.G - this.t) | 0);
});
$p.fi = (function(index) {
  return this.s0(((this.t + index) | 0));
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
  fo() {
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
$p.s2 = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get");
});
$p.x = (function() {
  this.s2();
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
  this.dm = null;
  this.dm = value;
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
  return ((this === x$0) || ((x$0 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().n(this.dm, x$0.dm)));
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
    return this.dm;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.x = (function() {
  return this.dm;
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
$p.fl = (function(p) {
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
$p.gL = (function(coll) {
  return this.bV().ay(coll);
});
$p.gO = (function() {
  return this.bV().b5();
});
$p.cb = (function() {
  return this.bv();
});
$p.gK = (function(coll) {
  return this.gL(coll);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.hB = null;
  this.cQ = 0;
  this.g4 = 0;
  this.hB = xs;
  this.cQ = 0;
  this.g4 = $m_jl_reflect_Array$().aN(this.hB);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.y = (function() {
  return ((this.g4 - this.cQ) | 0);
});
$p.p = (function() {
  return (this.cQ < this.g4);
});
$p.l = (function() {
  if ((this.cQ >= $m_jl_reflect_Array$().aN(this.hB))) {
    $m_sc_Iterator$().X.l();
  }
  var r = $m_sr_ScalaRunTime$().dW(this.hB, this.cQ);
  this.cQ = ((1 + this.cQ) | 0);
  return r;
});
$p.e0 = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.cQ + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.g4;
    } else {
      var a = this.g4;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.cQ = $x_1;
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
  $thiz.cR = 0;
  $thiz.bg = self.q();
  return $thiz;
}
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bg) ? $thiz.bg : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.jh = null;
  this.cR = 0;
  this.bg = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.y = (function() {
  return this.bg;
});
$p.p = (function() {
  return (this.bg > 0);
});
$p.l = (function() {
  if ((this.bg > 0)) {
    var r = this.jh.u(this.cR);
    this.cR = ((1 + this.cR) | 0);
    this.bg = ((this.bg - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().X.l();
  }
});
$p.e0 = (function(n) {
  if ((n > 0)) {
    this.cR = ((this.cR + n) | 0);
    var b = ((this.bg - n) | 0);
    this.bg = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.h4 = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bg = ((b < 0) ? 0 : b);
  this.cR = ((this.cR + formatFrom) | 0);
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
  this.gj = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().X);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.qG = (function(elem) {
  this.gj = this.gj.jU(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.b4 = (function(elem) {
  return this.qG(elem);
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
  return $thiz.da(x, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => default$1.c(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.m();
  while (it.p()) {
    var next = it.l();
    f.fh(next.aZ(), next.aL());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.aZ();
    var v = x$1$2.aL();
    return ((k + " -> ") + v);
  })), $thiz.m()), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.gO();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.m();
  while (it.p()) {
    var next = it.l();
    if (seen.hR(f.c(next))) {
      builder.b4(next);
    }
  }
  return builder.bd();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.e2().b5();
  b.b3($thiz);
  b.b3(suffix);
  return b.bd();
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
  return ((it instanceof $c_sci_ArraySeq) ? it : this.pO($m_s_Array$().p1(it, tag)));
});
$p.i7 = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$2) => this.pO($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2, evidence$1)))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.pO = (function(x) {
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
  this.g9 = 0;
  this.ek = null;
  this.bB = 0;
  this.cU = null;
  this.ga = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_ChampBaseIterator__sci_Node__(this, hm$1.bp);
  while (this.p()) {
    var originalHash = this.ek.gM(this.bP);
    outer.fA(outer.cw, this.ek.e1(this.bP), this.ek.db(this.bP), originalHash, $m_sc_Hashing$().cl(originalHash), 0);
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
  this.dB = 0;
  this.f8 = null;
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
  this.dD = 0;
  this.dC = null;
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
  this.dE = 0;
  this.cz = null;
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
  this.dx = 0;
  this.hG = null;
  this.bQ = 0;
  this.gb = null;
  this.gc = null;
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
  return $m_s_util_hashing_MurmurHash3$().pN(this.jp, $m_sr_Statics$().L(this.nN), (-889275714));
});
$p.sI = (function() {
  if ((!this.p())) {
    $m_sc_Iterator$().X.l();
  }
  this.jp = this.hG.gM(this.dx);
  this.nN = this.hG.db(this.dx);
  this.dx = ((this.dx - 1) | 0);
  return this;
});
$p.l = (function() {
  return this.sI();
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
  this.g9 = 0;
  this.ek = null;
  this.bB = 0;
  this.cU = null;
  this.ga = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.sH = (function() {
  if ((!this.p())) {
    $m_sc_Iterator$().X.l();
  }
  var payload = this.ek.p9(this.bP);
  this.bP = ((1 + this.bP) | 0);
  return payload;
});
$p.l = (function() {
  return this.sH();
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
  $thiz.dG = ((1 + $thiz.dG) | 0);
  var slice = $thiz.jr.cM($thiz.dG);
  while ((slice.a.length === 0)) {
    $thiz.dG = ((1 + $thiz.dG) | 0);
    slice = $thiz.jr.cM($thiz.dG);
  }
  $thiz.ge = $thiz.eo;
  var count = $thiz.nP;
  var idx = $thiz.dG;
  var c = (((count + ((count >>> 31) | 0)) | 0) >> 1);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.dF = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x46 = $thiz.dF;
  switch (x46) {
    case 1: {
      $thiz.aS = slice;
      break;
    }
    case 2: {
      $thiz.aT = slice;
      break;
    }
    case 3: {
      $thiz.bq = slice;
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
  $thiz.eo = (($thiz.ge + Math.imul(slice.a.length, (1 << Math.imul(5, (($thiz.dF - 1) | 0))))) | 0);
  if (($thiz.eo > $thiz.d0)) {
    $thiz.eo = $thiz.d0;
  }
  if (($thiz.dF > 1)) {
    $thiz.f9 = (((1 << Math.imul(5, $thiz.dF)) - 1) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.ap - $thiz.bG) | 0) + $thiz.d0) | 0);
  if ((pos === $thiz.eo)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.dF > 1)) {
    var io = ((pos - $thiz.ge) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.f9 ^ io));
    $thiz.f9 = io;
  }
  $thiz.bG = (($thiz.bG - $thiz.ap) | 0);
  var a = $thiz.aS.a.length;
  var b = $thiz.bG;
  $thiz.cZ = ((a < b) ? a : b);
  $thiz.ap = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aS = $thiz.aT.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aT = $thiz.bq.a[(31 & ((io >>> 10) | 0))];
    $thiz.aS = $thiz.aT.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bq = $thiz.cj.a[(31 & ((io >>> 15) | 0))];
    $thiz.aT = $thiz.bq.a[0];
    $thiz.aS = $thiz.aT.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cj = $thiz.en.a[(31 & ((io >>> 20) | 0))];
    $thiz.bq = $thiz.cj.a[0];
    $thiz.aT = $thiz.bq.a[0];
    $thiz.aS = $thiz.aT.a[0];
  } else {
    $thiz.en = $thiz.jq.a[((io >>> 25) | 0)];
    $thiz.cj = $thiz.en.a[0];
    $thiz.bq = $thiz.cj.a[0];
    $thiz.aT = $thiz.bq.a[0];
    $thiz.aS = $thiz.aT.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aS = $thiz.aT.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aT = $thiz.bq.a[(31 & ((io >>> 10) | 0))];
    $thiz.aS = $thiz.aT.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bq = $thiz.cj.a[(31 & ((io >>> 15) | 0))];
    $thiz.aT = $thiz.bq.a[(31 & ((io >>> 10) | 0))];
    $thiz.aS = $thiz.aT.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cj = $thiz.en.a[(31 & ((io >>> 20) | 0))];
    $thiz.bq = $thiz.cj.a[(31 & ((io >>> 15) | 0))];
    $thiz.aT = $thiz.bq.a[(31 & ((io >>> 10) | 0))];
    $thiz.aS = $thiz.aT.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.en = $thiz.jq.a[((io >>> 25) | 0)];
    $thiz.cj = $thiz.en.a[(31 & ((io >>> 20) | 0))];
    $thiz.bq = $thiz.cj.a[(31 & ((io >>> 15) | 0))];
    $thiz.aT = $thiz.bq.a[(31 & ((io >>> 10) | 0))];
    $thiz.aS = $thiz.aT.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.jr = null;
  this.d0 = 0;
  this.nP = 0;
  this.aS = null;
  this.aT = null;
  this.bq = null;
  this.cj = null;
  this.en = null;
  this.jq = null;
  this.cZ = 0;
  this.ap = 0;
  this.f9 = 0;
  this.bG = 0;
  this.dG = 0;
  this.dF = 0;
  this.ge = 0;
  this.eo = 0;
  this.jr = v;
  this.d0 = totalLength;
  this.nP = sliceCount;
  this.aS = v.f;
  this.cZ = this.aS.a.length;
  this.ap = 0;
  this.f9 = 0;
  this.bG = this.d0;
  this.dG = 0;
  this.dF = 1;
  this.ge = 0;
  this.eo = this.cZ;
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
  if ((this.ap === this.cZ)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.aS.a[this.ap];
  this.ap = ((1 + this.ap) | 0);
  return r;
});
$p.e0 = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.ap - this.bG) | 0) + this.d0) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.d0;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.d0)) {
      this.ap = 0;
      this.bG = 0;
      this.cZ = 0;
    } else {
      while ((newpos >= this.eo)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.ge) | 0);
      if ((this.dF > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.f9 ^ io));
        this.f9 = io;
      }
      this.cZ = this.aS.a.length;
      this.ap = (31 & io);
      this.bG = ((this.ap + ((this.d0 - newpos) | 0)) | 0);
      if ((this.cZ > this.bG)) {
        this.cZ = this.bG;
      }
    }
  }
  return this;
});
$p.bT = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().aN(xs);
  var srcLen = ((this.bG - this.ap) | 0);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? xsLen : ((xsLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var total$1 = ((total < 0) ? 0 : total);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total$1)) {
    if ((this.ap === this.cZ)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total$1 - copied) | 0);
    var b = ((this.aS.a.length - this.ap) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.aS;
      var srcPos = this.ap;
      var destPos = ((start + copied) | 0);
      src.s(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().gH(this.aS, this.ap, xs, ((start + copied) | 0), count);
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
    this.ta(size);
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
$p.rS = (function(it, evidence$1) {
  return this.ko($m_s_Array$().p1(it, evidence$1));
});
$p.i7 = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => this.ko(x$2))), new $c_scm_ArrayBuilder$generic(evidence$1.aO()));
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
  return this.rS(it, evidence$1);
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
  this.dO = 0;
  this.d3 = null;
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
$p.k4 = (function(nd) {
  return nd.fd;
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
  this.dO = 0;
  this.d3 = null;
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
  this.dO = 0;
  this.d3 = null;
  this.gi = 0;
  this.gh = null;
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
  this.jA = $p_scm_HashSet__improveHash__I__I(this.o1, nd.d4);
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
  this.gq = null;
  this.gq = runtimeClass;
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
  return $m_sr_Statics$().L(this.gq);
});
$p.h = (function() {
  return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.gq);
});
$p.aO = (function() {
  return this.gq;
});
$p.bl = (function(len) {
  return this.gq.ak.U(len);
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
  this.ec = null;
  this.ed = null;
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
$p.ex = (function(s) {
  this.sP(s);
  this.pg("\n");
});
/** @constructor */
function $c_Ljava_nio_StringCharBuffer(_capacity, _csq, _csqOffset, _initialPosition, _initialLimit) {
  this.cO = 0;
  this.G = 0;
  this.t = 0;
  this.cr = 0;
  this.n1 = null;
  this.n2 = 0;
  this.dh = null;
  this.di = 0;
  this.dh = _csq;
  this.di = _csqOffset;
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
$p.tt = (function(start, end) {
  if ((((start < 0) || (start > end)) || (end > ((this.G - this.t) | 0)))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  return new $c_Ljava_nio_StringCharBuffer(this.cO, this.dh, this.di, ((this.t + start) | 0), ((this.t + end) | 0));
});
$p.fm = (function() {
  var p = this.t;
  if ((p === this.G)) {
    throw new $c_Ljava_nio_BufferUnderflowException();
  }
  this.t = ((1 + p) | 0);
  return $dp_charAt__I__C(this.dh, ((this.di + p) | 0));
});
$p.s0 = (function(index) {
  if (((index < 0) || (index >= this.G))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  return $dp_charAt__I__C(this.dh, ((this.di + index) | 0));
});
$p.h = (function() {
  var offset = this.di;
  return $dp_toString__T($dp_subSequence__I__I__jl_CharSequence(this.dh, ((this.t + offset) | 0), ((this.G + offset) | 0)));
});
$p.kC = (function(start, end) {
  return this.tt(start, end);
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
$p.aZ = (function() {
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
  this.fc = null;
  this.nW = false;
  this.jw = null;
  this.fc = elementClass;
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
  var unboxedElem = (this.nW ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h0(this.fc) : elem));
  this.jw.push(unboxedElem);
  return this;
});
$p.qv = (function(xs) {
  var it = xs.m();
  while (it.p()) {
    this.oz(it.l());
  }
  return this;
});
$p.ta = (function(size) {
});
$p.bd = (function() {
  return $m_scm_ArrayBuilder$().gZ(((this.fc === $d_V.l()) ? $d_jl_Void.l() : (((this.fc === $d_sr_Null$.l()) || (this.fc === $d_sr_Nothing$.l())) ? $d_O.l() : this.fc)), this.jw);
});
$p.h = (function() {
  return "ArrayBuilder.generic";
});
$p.b4 = (function(elem) {
  return this.oz(elem);
});
$p.b3 = (function(elems) {
  return this.qv(elems);
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
  this.cR = 0;
  this.bg = 0;
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
  $m_scm_MutationTracker$().oI(this.nZ, (this.o0.M() | 0), "mutation occurred during iteration");
  return (this.bg > 0);
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
  fk() {
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
  fk() {
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
  fk() {
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
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().h1(result));
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().gm);
  return $thiz;
}
function $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try($thiz) {
  var \u03b4this$tailLocal2 = $thiz;
  while (true) {
    var state = \u03b4this$tailLocal2.O;
    if ((state instanceof $c_s_util_Try)) {
      return state;
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      \u03b4this$tailLocal2 = state.fw(\u03b4this$tailLocal2);
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
      if (\u03b4this$tailLocal4.gG(state$tailLocal2, ((state$tailLocal2 !== $m_s_concurrent_impl_Promise$().gm) ? $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(\u03b4this$tailLocal4, callbacks, state$tailLocal2) : callbacks))) {
        return callbacks;
      } else {
        state$tailLocal2 = \u03b4this$tailLocal4.O;
      }
    } else {
      var p = state$tailLocal2.fw(\u03b4this$tailLocal4);
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
$p.oZ = (function(f, executor) {
  var state = this.O;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 2, f, executor)) : this);
});
$p.i6 = (function(f, executor) {
  var state = this.O;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 1, f, executor)) : this);
});
$p.sL = (function(func, executor) {
  $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, this.O, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 6, func, executor));
});
$p.h = (function() {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    var state = \u03b4this$tailLocal1.O;
    if ((state instanceof $c_s_util_Try)) {
      return (("Future(" + state) + ")");
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      \u03b4this$tailLocal1 = state.fw(\u03b4this$tailLocal1);
    } else {
      return "Future(<not completed>)";
    }
  }
});
$p.tG = (function(value) {
  var state = this.O;
  return ((!(state instanceof $c_s_util_Try)) && this.eC(state, $m_s_concurrent_impl_Promise$().h1(value)));
});
$p.eC = (function(state, resolved) {
  var \u03b4this$tailLocal3 = this;
  var state$tailLocal1 = state;
  while (true) {
    if ($is_s_concurrent_impl_Promise$Callbacks(state$tailLocal1)) {
      if ((!\u03b4this$tailLocal3.gG(state$tailLocal1, resolved))) {
        state$tailLocal1 = \u03b4this$tailLocal3.O;
        continue;
      }
      if ((state$tailLocal1 !== $m_s_concurrent_impl_Promise$().gm)) {
        $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(\u03b4this$tailLocal3, state$tailLocal1, resolved);
      }
      return true;
    } else if ((state$tailLocal1 instanceof $c_s_concurrent_impl_Promise$Link)) {
      var p = state$tailLocal1.fw(\u03b4this$tailLocal3);
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
$p.jT = (function(other) {
  if ((other !== this)) {
    var state = this.O;
    if ((!(state instanceof $c_s_util_Try))) {
      if ((other instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
        var resolved = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other);
      } else {
        var this$1 = $m_s_Option$().jP($p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other));
        var resolved = (this$1.d() ? null : this$1.x());
      }
      if ((resolved !== null)) {
        this.eC(state, resolved);
      } else {
        other.sL(this, $m_s_concurrent_ExecutionContext$parasitic$());
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
        if ((!target$tailLocal2.eC(target$tailLocal2.O, state))) {
          throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "Cannot link completed promises together");
        } else {
          return (void 0);
        }
      } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
        var l = ((link$tailLocal1 !== null) ? link$tailLocal1 : new $c_s_concurrent_impl_Promise$Link(target$tailLocal2));
        var p = l.fw(\u03b4this$tailLocal5);
        if (((\u03b4this$tailLocal5 !== p) && \u03b4this$tailLocal5.gG(state, l))) {
          if ((state !== $m_s_concurrent_impl_Promise$().gm)) {
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
        \u03b4this$tailLocal5 = state.fw(\u03b4this$tailLocal5);
      }
    } else {
      return (void 0);
    }
  }
});
$p.tI = (function(resolved) {
  var \u03b4this$tailLocal6 = this;
  while (true) {
    var state = \u03b4this$tailLocal6.O;
    if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      var next = (\u03b4this$tailLocal6.gG(state, resolved) ? state.O : \u03b4this$tailLocal6);
      \u03b4this$tailLocal6 = next;
    } else {
      \u03b4this$tailLocal6.eC(state, resolved);
      return (void 0);
    }
  }
});
$p.c = (function(v1) {
  this.eC(this.O, v1);
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
  fo() {
    return $dp_toString__T(this.R);
  }
  B() {
    return "JavaScriptException";
  }
  z() {
    return 1;
  }
  A(x$1) {
    return ((x$1 === 0) ? this.R : $m_sr_Statics$().sk(x$1));
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
    $thiz.jH($m_Lcom_raquo_airstream_core_Signal$().pm());
  }
  $thiz.pl(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.kq();
  if ((x === (void 0))) {
    $thiz.jH($m_Lcom_raquo_airstream_core_Signal$().pm());
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
  var isError = nextValue.pd();
  var elem = false;
  elem = false;
  $thiz.cm(false);
  var this$ = $thiz.cF();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.e4(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.cI();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fv(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cm(true);
  var x = $thiz.e3();
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
      $m_Lcom_raquo_airstream_core_AirstreamError$().cp(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cm(false);
  var this$ = $thiz.cF();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.gR(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().cp(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.cI();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fu(nextValue, transaction);
  }
  $thiz.cm(true);
  var x = $thiz.e3();
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
  $thiz.cm(false);
  var this$ = $thiz.cF();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.ew(nextError);
  }
  var this$$1 = $thiz.cI();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.ft(nextError, transaction);
  }
  $thiz.cm(true);
  var x = $thiz.e3();
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
  this.ec = null;
  this.ed = null;
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
  this.fV = null;
  this.mT = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.fV = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.sP = (function(s) {
  this.pg(((s === null) ? "null" : s));
});
$p.pg = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.fV = (("" + this.fV) + rest);
      rest = "";
    } else {
      var $x_1 = this.fV;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.fV = "";
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
  if (($thiz.bk(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.gO();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.m();
    var different = false;
    while (it.p()) {
      var next = it.l();
      if (seen.hR(f.c(next))) {
        builder.b4(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.bd() : $thiz);
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
$p.aO = (function() {
  return $d_Z.l();
});
$p.bl = (function(len) {
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
$p.aO = (function() {
  return $d_B.l();
});
$p.bl = (function(len) {
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
$p.aO = (function() {
  return $d_C.l();
});
$p.bl = (function(len) {
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
$p.aO = (function() {
  return $d_D.l();
});
$p.bl = (function(len) {
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
$p.aO = (function() {
  return $d_F.l();
});
$p.bl = (function(len) {
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
$p.aO = (function() {
  return $d_I.l();
});
$p.bl = (function(len) {
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
$p.aO = (function() {
  return $d_J.l();
});
$p.bl = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.d6 = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.h = (function() {
  return this.d6;
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
$p.aO = (function() {
  return $d_S.l();
});
$p.bl = (function(len) {
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
$p.aO = (function() {
  return $d_V.l();
});
$p.bl = (function(len) {
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
    if (($thiz.aP() === that.aP())) {
      try {
        return $thiz.tv(that);
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
  this.d6 = null;
  this.d6 = "Any";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.aO = (function() {
  return $d_O.l();
});
$p.bl = (function(len) {
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
  this.d6 = null;
  this.d6 = "Nothing";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.aO = (function() {
  return $d_sr_Nothing$.l();
});
$p.bl = (function(len) {
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
  this.d6 = null;
  this.d6 = "Null";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.aO = (function() {
  return $d_sr_Null$.l();
});
$p.bl = (function(len) {
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
  this.d6 = null;
  this.d6 = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.aO = (function() {
  return $d_O.l();
});
$p.bl = (function(len) {
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
  this.h8 = null;
  this.h8 = \u03b4name$2;
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
  return this.h8;
});
$p.h = (function() {
  return this.h8;
});
$p.i = (function() {
  return $f_T__hashCode__I(this.h8);
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
  this.h9 = null;
  this.h9 = \u03b4name$2;
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
  return this.h9;
});
$p.h = (function() {
  return this.h9;
});
$p.i = (function() {
  return $f_T__hashCode__I(this.h9);
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
$p.cK = (function() {
  return this.lG;
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fq = (function() {
  return this.lF;
});
$p.e3 = (function() {
  return this.lH;
});
$p.cm = (function(x$1) {
  this.lF = x$1;
});
$p.fs = (function(x$1) {
  this.lH = x$1;
});
$p.gT = (function() {
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.fg = (function() {
  return this.it;
});
$p.jH = (function(x$1) {
  this.it = x$1;
});
$p.gS = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.gP = (function(observer) {
  observer.e4($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cF = (function() {
  return this.lD;
});
$p.cI = (function() {
  return this.lE;
});
$p.h6 = (function() {
  return this.lK;
});
$p.eF = (function(x$1) {
  this.lK = x$1;
});
$p.gE = (function(x$0) {
  this.lD = x$0;
});
$p.gF = (function(x$0) {
  this.lE = x$0;
});
$p.kq = (function() {
  return this.iu;
});
$p.pl = (function(x$1) {
  this.iu = x$1;
});
$p.ia = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.eB = (function() {
  return this.lJ;
});
$p.jW = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gU = (function() {
});
$p.cC = (function() {
  return (this.lI.M() + ".signal");
});
$p.eA = (function() {
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
      if (o.hY($thiz)) {
        return $thiz.fx(o);
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
  this.hF = null;
  this.nI = null;
  this.hF = underlying;
  this.nI = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.m = (function() {
  var this$1 = this.hF.m();
  return new $c_sc_Iterator$$anon$8(this.nI, this$1);
});
$p.y = (function() {
  return ((this.hF.y() === 0) ? 0 : (-1));
});
$p.d = (function() {
  return this.hF.d();
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
  this.bm = null;
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
  this.bm = null;
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
  this.bm = null;
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
  this.bm = null;
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
  this.bm = null;
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
  this.bm = null;
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
  this.bm = null;
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
  this.bm = null;
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
  this.bm = null;
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
  this.bm = null;
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
  this.bm = null;
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
  this.bm = null;
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
  $thiz.il = ($thiz.dc !== null);
  $thiz.hf = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.dc);
  if ($thiz.il) {
    var newParentLastUpdateId = $thiz.dc.fg();
    if ((newParentLastUpdateId !== $thiz.hf)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.jW(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.hf = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.il) {
    $thiz.hf = $thiz.dc.fg();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.dc, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.dc, $thiz);
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
  this.he = null;
  this.l0 = 0;
  this.kZ = parentDisplayName;
  this.kX = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.he = $m_Lcom_raquo_ew_JsArray$().bb($m_sr_ScalaRunTime$().b7(new ($d_Lcom_raquo_airstream_core_EventStream.r().C)([])));
  this.l0 = 1;
}
$p = $c_Lcom_raquo_airstream_eventbus_EventBusStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_eventbus_EventBusStream;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_EventBusStream() {
}
$h_Lcom_raquo_airstream_eventbus_EventBusStream.prototype = $p;
$p.cK = (function() {
  return this.kX;
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fq = (function() {
  return this.kW;
});
$p.e3 = (function() {
  return this.kY;
});
$p.cm = (function(x$1) {
  this.kW = x$1;
});
$p.fs = (function(x$1) {
  this.kY = x$1;
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.gP = (function(observer) {
});
$p.cF = (function() {
  return this.kU;
});
$p.cI = (function() {
  return this.kV;
});
$p.h6 = (function() {
  return this.l1;
});
$p.eF = (function(x$1) {
  this.l1 = x$1;
});
$p.gE = (function(x$0) {
  this.kU = x$0;
});
$p.gF = (function(x$0) {
  this.kV = x$0;
});
$p.fv = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eB = (function() {
  return this.l0;
});
$p.fu = (function(nextValue, ignoredTransaction) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, _$1);
  })));
});
$p.ft = (function(nextError, transaction) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, _$2);
  })));
});
$p.gU = (function() {
  var arr = this.he;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(arr[i]);
    i = ((1 + i) | 0);
  }
});
$p.gS = (function() {
  var arr = this.he;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(arr[i], this, false);
    i = ((1 + i) | 0);
  }
});
$p.gT = (function() {
  var arr = this.he;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(arr[i], this);
    i = ((1 + i) | 0);
  }
});
$p.cC = (function() {
  return (this.kZ.M() + ".events");
});
$p.eA = (function() {
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
$p.tv = (function(that) {
  return this.fl(that);
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
  return this.bt(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.aP() === o.aP())) {
      try {
        return $thiz.fl(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((map$1) => ((kv$2) => $m_sr_BoxesRunTime$().n(map$1.da(kv$2.aZ(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sc_Map$().nF.M()))), kv$2.aL())))(o)));
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
  $thiz.hK = _fun;
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
  if ((false || $m_s_util_control_NonFatal$().hU(t))) {
    var completed = $thiz.eC($thiz.O, $m_s_concurrent_impl_Promise$().h1(new $c_s_util_Failure(t)));
    if (((($thiz.gp === 5) || ($thiz.gp === 6)) || (!completed))) {
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
  this.hK = null;
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
$p.pE = (function(resolved) {
  this.gn = resolved;
  var e = this.go;
  try {
    if ((e === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    e.k3(this);
  } catch (e$2) {
    var e$3 = ((e$2 instanceof $c_jl_Throwable) ? e$2 : new $c_sjs_js_JavaScriptException(e$2));
    this.hK = null;
    this.gn = null;
    this.go = null;
    if ((e === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$3, e);
  }
  return this;
});
$p.ey = (function() {
  var x$proxy4 = this.gn;
  if ((x$proxy4 === null)) {
    $m_sr_Scala3RunTime$().bu();
  }
  var x$proxy5 = this.hK;
  if ((x$proxy5 === null)) {
    $m_sr_Scala3RunTime$().bu();
  }
  var x$proxy6 = this.go;
  if ((x$proxy6 === null)) {
    $m_sr_Scala3RunTime$().bu();
  }
  this.hK = null;
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
            f.kn(this, null);
          } else {
            this.jT(f);
          }
          var resolvedResult = null;
        } else {
          var resolvedResult = x$proxy4;
        }
        break;
      }
      case 3: {
        var resolvedResult = $m_s_concurrent_impl_Promise$().h1(x$proxy5.c(x$proxy4));
        break;
      }
      case 4: {
        var f$2 = x$proxy5.c(x$proxy4);
        if ((f$2 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
          f$2.kn(this, null);
        } else {
          this.jT(f$2);
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
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Failure) ? $m_s_concurrent_impl_Promise$().h1(x$proxy4.ps(x$proxy5)) : x$proxy4);
        break;
      }
      case 8: {
        if ((x$proxy4 instanceof $c_s_util_Failure)) {
          var f$3 = x$proxy5.c9(x$proxy4.d7, $m_s_concurrent_Future$().ob);
          var resolvedResult = ((f$3 !== $m_s_concurrent_Future$().jC) ? (((f$3 instanceof $c_s_concurrent_impl_Promise$DefaultPromise) ? f$3.kn(this, null) : this.jT(f$3)), null) : x$proxy4);
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
        var resolvedResult = new $c_s_util_Failure($ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ("BUG: encountered transformation promise with illegal type: " + this.gp)));
      }
    }
    if ((resolvedResult !== null)) {
      this.eC(this.O, resolvedResult);
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
  this.lb = ((1 + parent.eB()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.cK = (function() {
  return this.l9;
});
$p.cC = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fq = (function() {
  return this.l8;
});
$p.e3 = (function() {
  return this.la;
});
$p.cm = (function(x$1) {
  this.l8 = x$1;
});
$p.fs = (function(x$1) {
  this.la = x$1;
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.gP = (function(observer) {
});
$p.cF = (function() {
  return this.l5;
});
$p.cI = (function() {
  return this.l7;
});
$p.h6 = (function() {
  return this.lc;
});
$p.eF = (function(x$1) {
  this.lc = x$1;
});
$p.gE = (function(x$0) {
  this.l5 = x$0;
});
$p.gF = (function(x$0) {
  this.l7 = x$0;
});
$p.gU = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.ii);
});
$p.gS = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.gT = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.fv = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.eB = (function() {
  return this.lb;
});
$p.fu = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.l6.c(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchResult1: {
      var $x_1;
      var x2 = $m_s_util_control_NonFatal$().fz(e$2);
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
$p.ft = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.kw = (function() {
  return this.ii;
});
$p.eA = (function() {
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
  this.hf = 0;
  this.dc = null;
  this.im = null;
  this.io = null;
  this.li = 0;
  this.dc = parent;
  this.im = project;
  this.io = recover;
  this.lg = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.ij = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.ik = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.li = ((1 + parent.eB()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.cK = (function() {
  return this.lg;
});
$p.cC = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fq = (function() {
  return this.lf;
});
$p.e3 = (function() {
  return this.lh;
});
$p.cm = (function(x$1) {
  this.lf = x$1;
});
$p.fs = (function(x$1) {
  this.lh = x$1;
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.fg = (function() {
  return this.ij;
});
$p.jH = (function(x$1) {
  this.ij = x$1;
});
$p.gP = (function(observer) {
  observer.e4($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cF = (function() {
  return this.ld;
});
$p.cI = (function() {
  return this.le;
});
$p.h6 = (function() {
  return this.lj;
});
$p.eF = (function(x$1) {
  this.lj = x$1;
});
$p.gE = (function(x$0) {
  this.ld = x$0;
});
$p.gF = (function(x$0) {
  this.le = x$0;
});
$p.kq = (function() {
  return this.ik;
});
$p.pl = (function(x$1) {
  this.ik = x$1;
});
$p.ia = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.fu = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.ft = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gU = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.gS = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.gT = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.eB = (function() {
  return this.li;
});
$p.fv = (function(nextParentValue, transaction) {
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
          var x2 = $m_s_util_control_NonFatal$().fz(e$2);
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
  var originalValue = this.dc.ia().kp(this.im);
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
          var x2 = $m_s_util_control_NonFatal$().fz(e$2);
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
$p.eA = (function() {
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
  this.e9 = null;
  this.lk = false;
  this.lq = 0;
  this.fQ = 0;
  this.hg = false;
  this.e9 = parent;
  this.lk = changesOnly;
  this.lo = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.lq = ((1 + parent.eB()) | 0);
  this.fQ = 0;
  this.hg = true;
}
$p = $c_Lcom_raquo_airstream_misc_StreamFromSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_StreamFromSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_StreamFromSignal() {
}
$h_Lcom_raquo_airstream_misc_StreamFromSignal.prototype = $p;
$p.cK = (function() {
  return this.lo;
});
$p.cC = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fq = (function() {
  return this.ln;
});
$p.e3 = (function() {
  return this.lp;
});
$p.cm = (function(x$1) {
  this.ln = x$1;
});
$p.fs = (function(x$1) {
  this.lp = x$1;
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.gP = (function(observer) {
});
$p.cF = (function() {
  return this.ll;
});
$p.cI = (function() {
  return this.lm;
});
$p.h6 = (function() {
  return this.lr;
});
$p.eF = (function(x$1) {
  this.lr = x$1;
});
$p.gE = (function(x$0) {
  this.ll = x$0;
});
$p.gF = (function(x$0) {
  this.lm = x$0;
});
$p.gU = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.e9);
});
$p.gT = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.fu = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.ft = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.eB = (function() {
  return this.lq;
});
$p.gS = (function() {
  var newParentLastUpdateId = this.e9.fg();
  if ((this.hg && this.lk)) {
    this.fQ = newParentLastUpdateId;
  } else if ((newParentLastUpdateId !== this.fQ)) {
    $m_Lcom_raquo_airstream_core_Transaction$onStart$().qt(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
      if ($f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this)) {
        $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, this.e9.ia(), trx);
        this.fQ = this.e9.fg();
      }
    })));
  }
  this.hg = false;
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.fv = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
  this.fQ = this.e9.fg();
  this.hg = false;
});
$p.kw = (function() {
  return this.e9;
});
$p.eA = (function() {
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
$p.cD = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.kk = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.bk = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.d = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fx = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.hY = (function(that) {
  return true;
});
$p.g = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().pA(this);
});
$p.h = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.cJ = (function(x) {
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
$p.cD = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bk = (function(len) {
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
  $thiz.pX = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
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
$p.cJ = (function(key) {
  return this.bt(key);
});
$p.dU = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
$p.gL = (function(coll) {
  return this.pk().ay(coll);
});
$p.g = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().sy(this);
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
  this.bn = null;
  this.hk = null;
  this.pW = null;
  this.lQ = null;
  this.lR = false;
  this.mj = null;
  this.mk = false;
  this.mn = null;
  this.mo = false;
  this.pX = null;
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
$p.ts = (function() {
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
$p.hX = (function() {
  if ((!this.lT)) {
    this.lS = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.lT = true;
  }
  return this.lS;
});
$p.gV = (function() {
  if ((!this.mc)) {
    this.mb = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.mc = true;
  }
  return this.mb;
});
$p.cE = (function() {
  if ((!this.m0)) {
    this.lZ = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.m0 = true;
  }
  return this.lZ;
});
$p.sz = (function() {
  if ((!this.m4)) {
    this.m3 = new $c_Lcom_raquo_laminar_tags_HtmlTag("mark", false);
    this.m4 = true;
  }
  return this.m3;
});
$p.r0 = (function() {
  if ((!this.lV)) {
    this.lU = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().mt);
    this.lV = true;
  }
  return this.lU;
});
$p.pS = (function() {
  if ((!this.mq)) {
    this.mp = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().hl);
    this.mq = true;
  }
  return this.mp;
});
$p.gQ = (function() {
  if ((!this.m8)) {
    this.m7 = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.m8 = true;
  }
  return this.m7;
});
$p.sK = (function() {
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
$p.ru = (function() {
  if ((!this.lY)) {
    this.lX = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28("display");
    this.lY = true;
  }
  return this.lX;
});
$p.su = (function() {
  if ((!this.m2)) {
    this.m1 = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("left");
    this.m2 = true;
  }
  return this.m1;
});
$p.sO = (function() {
  if ((!this.me)) {
    this.md = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43("position");
    this.me = true;
  }
  return this.md;
});
$p.tF = (function() {
  if ((!this.mm)) {
    this.ml = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("top");
    this.mm = true;
  }
  return this.ml;
});
$p.tR = (function() {
  if ((!this.ms)) {
    this.mr = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1("z-index");
    this.ms = true;
  }
  return this.mr;
});
$p.qs = (function() {
  if ((!this.lR)) {
    this.lQ = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.lR = true;
  }
  return this.lQ;
});
$p.tw = (function() {
  if ((!this.mk)) {
    this.mj = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.mk = true;
  }
  return this.mj;
});
$p.tL = (function() {
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
$p.bk = (function(len) {
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
$p.bk = (function(len) {
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
  return this.ju.b2;
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
$p.pk = (function() {
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
        var a = $thiz.hV();
        var b = o.hV();
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
$p.aP = (function() {
  return 0;
});
$p.y = (function() {
  return 0;
});
$p.d = (function() {
  return true;
});
$p.jN = (function(key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
});
$p.bt = (function(key) {
  return false;
});
$p.da = (function(key, default$1) {
  return default$1.M();
});
$p.m = (function() {
  return $m_sc_Iterator$().X;
});
$p.c = (function(key) {
  this.jN(key);
});
$p.e6 = (function(key, value) {
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
  this.cy = null;
  this.el = null;
  this.cy = key1;
  this.el = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.aP = (function() {
  return 1;
});
$p.y = (function() {
  return 1;
});
$p.d = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.cy)) {
    return this.el;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bt = (function(key) {
  return $m_sr_BoxesRunTime$().n(key, this.cy);
});
$p.da = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.cy) ? this.el : default$1.M());
});
$p.m = (function() {
  return new $c_sc_Iterator$$anon$20($ct_T2__O__O__(new $c_T2(), this.cy, this.el));
});
$p.eD = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.cy) ? new $c_sci_Map$Map1(this.cy, value) : new $c_sci_Map$Map2(this.cy, this.el, key, value));
});
$p.fl = (function(p) {
  return (!(!p.c($ct_T2__O__O__(new $c_T2(), this.cy, this.el))));
});
$p.i = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cq(this.cy, this.el);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dT;
  h = $m_s_util_hashing_MurmurHash3$().w(h, a);
  h = $m_s_util_hashing_MurmurHash3$().w(h, b);
  h = $m_s_util_hashing_MurmurHash3$().cn(h, c);
  return $m_s_util_hashing_MurmurHash3$().a6(h, 1);
});
$p.e6 = (function(key, value) {
  return this.eD(key, value);
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
  this.dz = null;
  this.ce = null;
  this.dA = null;
  this.cd = key1;
  this.dz = value1;
  this.ce = key2;
  this.dA = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.aP = (function() {
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
    return this.dz;
  } else if ($m_sr_BoxesRunTime$().n(key, this.ce)) {
    return this.dA;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bt = (function(key) {
  return ($m_sr_BoxesRunTime$().n(key, this.cd) || $m_sr_BoxesRunTime$().n(key, this.ce));
});
$p.da = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.cd) ? this.dz : ($m_sr_BoxesRunTime$().n(key, this.ce) ? this.dA : default$1.M()));
});
$p.m = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.eD = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.cd) ? new $c_sci_Map$Map2(this.cd, value, this.ce, this.dA) : ($m_sr_BoxesRunTime$().n(key, this.ce) ? new $c_sci_Map$Map2(this.cd, this.dz, this.ce, value) : new $c_sci_Map$Map3(this.cd, this.dz, this.ce, this.dA, key, value)));
});
$p.fl = (function(p) {
  return ((!(!p.c($ct_T2__O__O__(new $c_T2(), this.cd, this.dz)))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.ce, this.dA)))));
});
$p.i = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cq(this.cd, this.dz);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cq(this.ce, this.dA);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dT;
  h = $m_s_util_hashing_MurmurHash3$().w(h, a);
  h = $m_s_util_hashing_MurmurHash3$().w(h, b);
  h = $m_s_util_hashing_MurmurHash3$().cn(h, c);
  return $m_s_util_hashing_MurmurHash3$().a6(h, 2);
});
$p.e6 = (function(key, value) {
  return this.eD(key, value);
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
  this.cV = null;
  this.c2 = null;
  this.cW = null;
  this.c3 = null;
  this.cX = null;
  this.c1 = key1;
  this.cV = value1;
  this.c2 = key2;
  this.cW = value2;
  this.c3 = key3;
  this.cX = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.aP = (function() {
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
    return this.cV;
  } else if ($m_sr_BoxesRunTime$().n(key, this.c2)) {
    return this.cW;
  } else if ($m_sr_BoxesRunTime$().n(key, this.c3)) {
    return this.cX;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bt = (function(key) {
  return (($m_sr_BoxesRunTime$().n(key, this.c1) || $m_sr_BoxesRunTime$().n(key, this.c2)) || $m_sr_BoxesRunTime$().n(key, this.c3));
});
$p.da = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.c1) ? this.cV : ($m_sr_BoxesRunTime$().n(key, this.c2) ? this.cW : ($m_sr_BoxesRunTime$().n(key, this.c3) ? this.cX : default$1.M())));
});
$p.m = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.eD = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.c1) ? new $c_sci_Map$Map3(this.c1, value, this.c2, this.cW, this.c3, this.cX) : ($m_sr_BoxesRunTime$().n(key, this.c2) ? new $c_sci_Map$Map3(this.c1, this.cV, this.c2, value, this.c3, this.cX) : ($m_sr_BoxesRunTime$().n(key, this.c3) ? new $c_sci_Map$Map3(this.c1, this.cV, this.c2, this.cW, this.c3, value) : new $c_sci_Map$Map4(this.c1, this.cV, this.c2, this.cW, this.c3, this.cX, key, value))));
});
$p.fl = (function(p) {
  return (((!(!p.c($ct_T2__O__O__(new $c_T2(), this.c1, this.cV)))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.c2, this.cW))))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.c3, this.cX)))));
});
$p.i = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cq(this.c1, this.cV);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cq(this.c2, this.cW);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cq(this.c3, this.cX);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dT;
  h = $m_s_util_hashing_MurmurHash3$().w(h, a);
  h = $m_s_util_hashing_MurmurHash3$().w(h, b);
  h = $m_s_util_hashing_MurmurHash3$().cn(h, c);
  return $m_s_util_hashing_MurmurHash3$().a6(h, 3);
});
$p.e6 = (function(key, value) {
  return this.eD(key, value);
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
$p.aP = (function() {
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
$p.bt = (function(key) {
  return ((($m_sr_BoxesRunTime$().n(key, this.bC) || $m_sr_BoxesRunTime$().n(key, this.bD)) || $m_sr_BoxesRunTime$().n(key, this.bE)) || $m_sr_BoxesRunTime$().n(key, this.bF));
});
$p.da = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.bC) ? this.cf : ($m_sr_BoxesRunTime$().n(key, this.bD) ? this.cg : ($m_sr_BoxesRunTime$().n(key, this.bE) ? this.ch : ($m_sr_BoxesRunTime$().n(key, this.bF) ? this.ci : default$1.M()))));
});
$p.m = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.eD = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.bC) ? new $c_sci_Map$Map4(this.bC, value, this.bD, this.cg, this.bE, this.ch, this.bF, this.ci) : ($m_sr_BoxesRunTime$().n(key, this.bD) ? new $c_sci_Map$Map4(this.bC, this.cf, this.bD, value, this.bE, this.ch, this.bF, this.ci) : ($m_sr_BoxesRunTime$().n(key, this.bE) ? new $c_sci_Map$Map4(this.bC, this.cf, this.bD, this.cg, this.bE, value, this.bF, this.ci) : ($m_sr_BoxesRunTime$().n(key, this.bF) ? new $c_sci_Map$Map4(this.bC, this.cf, this.bD, this.cg, this.bE, this.ch, this.bF, value) : $m_sci_HashMap$().jn.fB(this.bC, this.cf).fB(this.bD, this.cg).fB(this.bE, this.ch).fB(this.bF, this.ci).fB(key, value)))));
});
$p.fl = (function(p) {
  return ((((!(!p.c($ct_T2__O__O__(new $c_T2(), this.bC, this.cf)))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bD, this.cg))))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bE, this.ch))))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bF, this.ci)))));
});
$p.qZ = (function(builder) {
  return builder.er(this.bC, this.cf).er(this.bD, this.cg).er(this.bE, this.ch).er(this.bF, this.ci);
});
$p.i = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cq(this.bC, this.cf);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cq(this.bD, this.cg);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cq(this.bE, this.ch);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cq(this.bF, this.ci);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dT;
  h = $m_s_util_hashing_MurmurHash3$().w(h, a);
  h = $m_s_util_hashing_MurmurHash3$().w(h, b);
  h = $m_s_util_hashing_MurmurHash3$().cn(h, c);
  return $m_s_util_hashing_MurmurHash3$().a6(h, 4);
});
$p.e6 = (function(key, value) {
  return this.eD(key, value);
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
$p.bd = (function() {
  return this;
});
function $ct_sci_LazyList__O__($thiz, lazyState) {
  $thiz.bh = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : $m_sci_LazyList$Uninitialized$());
  $thiz.cx = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : lazyState);
  return $thiz;
}
function $ct_sci_LazyList__O__sci_LazyList__($thiz, head, tail) {
  $ct_sci_LazyList__O__($thiz, $m_sci_LazyList$EmptyMarker$());
  $thiz.bh = head;
  $thiz.cx = tail;
  return $thiz;
}
function $p_sci_LazyList__initState__V($thiz) {
  if (($thiz.bh === $m_sci_LazyList$Uninitialized$())) {
    if (($thiz.cx === $m_sci_LazyList$MidEvaluation$())) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    var fun = $thiz.cx;
    $thiz.cx = $m_sci_LazyList$MidEvaluation$();
    try {
      var l = $p_sci_LazyList__evaluated__sci_LazyList(fun.M());
    } finally {
      $thiz.cx = fun;
    }
    $thiz.cx = l.cx;
    $thiz.bh = l.bh;
  }
}
function $p_sci_LazyList__evaluated__sci_LazyList($thiz) {
  while (true) {
    if (($thiz.bh !== $m_sci_LazyList$Uninitialized$())) {
      return (($thiz.cx === null) ? $m_sci_LazyList$().aa : $thiz);
    } else {
      $p_sci_LazyList__initState__V($thiz);
    }
  }
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.r = (("" + b.r) + start);
  if (($thiz.bh === $m_sci_LazyList$Uninitialized$())) {
    b.r = (b.r + "<not computed>");
  } else if (($p_sci_LazyList__evaluated__sci_LazyList($thiz) !== $m_sci_LazyList$().aa)) {
    var obj = $thiz.D();
    b.r = (("" + b.r) + obj);
    var cursor = $thiz;
    var scout = $thiz.be();
    if ((cursor !== scout)) {
      cursor = scout;
      var this$1 = scout;
      if (((this$1.bh !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$1) !== $m_sci_LazyList$().aa))) {
        scout = scout.be();
        while (true) {
          if ((cursor !== scout)) {
            var this$2 = scout;
            var $x_1 = ((this$2.bh !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$2) !== $m_sci_LazyList$().aa));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var c = cursor;
            b.r = (("" + b.r) + sep);
            var obj$1 = c.D();
            b.r = (("" + b.r) + obj$1);
            cursor = cursor.be();
            scout = scout.be();
            var this$3 = scout;
            if (((this$3.bh !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$3) !== $m_sci_LazyList$().aa))) {
              scout = scout.be();
            }
          } else {
            break;
          }
        }
      }
    }
    var this$4 = scout;
    if ((!((this$4.bh !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$4) !== $m_sci_LazyList$().aa)))) {
      while ((cursor !== scout)) {
        var c$1 = cursor;
        b.r = (("" + b.r) + sep);
        var obj$2 = c$1.D();
        b.r = (("" + b.r) + obj$2);
        cursor = cursor.be();
      }
      if ((!(cursor.bh !== $m_sci_LazyList$Uninitialized$()))) {
        b.r = (("" + b.r) + sep);
        b.r = (b.r + "<not computed>");
      }
    } else {
      if ((cursor !== $thiz)) {
        var runner = $thiz;
        while ((runner !== scout)) {
          runner = runner.be();
          scout = scout.be();
        }
        while (true) {
          var ct = cursor.be();
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
  this.bh = null;
  this.cx = null;
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
$p.bk = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.kk = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.u = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fx = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bv = (function() {
  return "LinearSeq";
});
$p.d = (function() {
  return ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aa);
});
$p.y = (function() {
  return (((this.bh !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aa)) ? 0 : (-1));
});
$p.D = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aa)) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list");
  } else {
    return this.bh;
  }
});
$p.be = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aa)) {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty lazy list");
  } else {
    return this.cx;
  }
});
$p.rQ = (function() {
  var these = this;
  var those = this;
  if ((!($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().aa))) {
    these = these.be();
  }
  while ((those !== these)) {
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().aa)) {
      return this;
    }
    these = these.be();
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().aa)) {
      return this;
    }
    these = these.be();
    if ((these === those)) {
      return this;
    }
    those = those.be();
  }
  return this;
});
$p.m = (function() {
  return (((this.bh !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aa)) ? $m_sc_Iterator$().X : new $c_sci_LazyList$LazyIterator(this));
});
$p.bc = (function(f) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if ((!($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal1) === $m_sci_LazyList$().aa))) {
      f.c(\u03b4this$tailLocal1.D());
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.be();
    } else {
      return (void 0);
    }
  }
});
$p.cb = (function() {
  return "LazyList";
});
$p.rz = (function(n) {
  return ((n <= 0) ? this : (((this.bh !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aa)) ? $m_sci_LazyList$().aa : $m_sci_LazyList$().tg(this, n)));
});
$p.dU = (function(sb, start, sep, end) {
  this.rQ();
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
  return this.be();
});
$p.oQ = (function(n) {
  return this.rz(n);
});
$p.cJ = (function(x) {
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
  this.hM = null;
  this.hM = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cD = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.hY = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fx = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.hV = (function() {
  return $m_sci_IndexedSeqDefaults$().nL;
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bk = (function(len) {
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
  return $m_s_util_hashing_MurmurHash3$().pA(this);
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
$p.gO = (function() {
  return $m_sjsr_WrappedVarArgs$().b5();
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
$p.e2 = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.q = (function() {
  return (this.hM.length | 0);
});
$p.u = (function(idx) {
  return this.hM[idx];
});
$p.cb = (function() {
  return "WrappedVarArgs";
});
$p.gK = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().kb(coll);
});
$p.cJ = (function(x) {
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
  this.bp = null;
  this.bp = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.pk = (function() {
  return $m_sci_HashMap$();
});
$p.y = (function() {
  return this.bp.aR;
});
$p.aP = (function() {
  return this.bp.aR;
});
$p.d = (function() {
  return (this.bp.aR === 0);
});
$p.m = (function() {
  return (this.d() ? $m_sc_Iterator$().X : new $c_sci_MapKeyValueTupleIterator(this.bp));
});
$p.bt = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var keyHash = $m_sc_Hashing$().cl(keyUnimprovedHash);
  return this.bp.jV(key, keyUnimprovedHash, keyHash, 0);
});
$p.c = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var keyHash = $m_sc_Hashing$().cl(keyUnimprovedHash);
  return this.bp.jL(key, keyUnimprovedHash, keyHash, 0);
});
$p.da = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var keyHash = $m_sc_Hashing$().cl(keyUnimprovedHash);
  return this.bp.ke(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fB = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().L(key);
  var newRootNode = this.bp.pP(key, value, keyUnimprovedHash, $m_sc_Hashing$().cl(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bp) ? this : new $c_sci_HashMap(newRootNode));
});
$p.et = (function(f) {
  this.bp.et(f);
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bp;
      var x$2 = that.bp;
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
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bp);
    return $m_s_util_hashing_MurmurHash3$().kE(hashIterator, $m_s_util_hashing_MurmurHash3$().dT);
  }
});
$p.cb = (function() {
  return "HashMap";
});
$p.e6 = (function(key, value) {
  return this.fB(key, value);
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
$p.b3 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.jy = loadFactor;
  $thiz.aX = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.jz = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.aX.a.length);
  $thiz.dN = 0;
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
  var idx = (hash & (($thiz.aX.a.length - 1) | 0));
  matchResult4: {
    var x10 = $thiz.aX.a[idx];
    if ((x10 === null)) {
      $thiz.aX.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
      break matchResult4;
    }
    var prev = null;
    var n = x10;
    while (((n !== null) && (n.d4 <= hash))) {
      if (((n.d4 === hash) && $m_sr_BoxesRunTime$().n(elem, n.fd))) {
        return false;
      }
      prev = n;
      n = n.aY;
    }
    if ((prev === null)) {
      $thiz.aX.a[idx] = new $c_scm_HashSet$Node(elem, hash, x10);
    } else {
      var this$3 = prev;
      var n$1 = new $c_scm_HashSet$Node(elem, hash, prev.aY);
      this$3.aY = n$1;
    }
  }
  $thiz.dN = ((1 + $thiz.dN) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.aX.a.length;
  $thiz.jz = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.dN === 0)) {
    $thiz.aX = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.aX = $m_ju_Arrays$().V($thiz.aX, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.aX.a[i];
        if ((old !== null)) {
          preLow.aY = null;
          preHigh.aY = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.aY;
            if (((n.d4 & oldlen) === 0)) {
              var this$2 = lastLow;
              var n$1 = n;
              this$2.aY = n$1;
              lastLow = n;
            } else {
              var this$3 = lastHigh;
              var n$2 = n;
              this$3.aY = n$2;
              lastHigh = n;
            }
            n = next;
          }
          var this$4 = lastLow;
          this$4.aY = null;
          if ((old !== preLow.aY)) {
            $thiz.aX.a[i] = preLow.aY;
          }
          if ((preHigh.aY !== null)) {
            $thiz.aX.a[((i + oldlen) | 0)] = preHigh.aY;
            var this$5 = lastHigh;
            this$5.aY = null;
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
  this.aX = null;
  this.jz = 0;
  this.dN = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.aP = (function() {
  return this.dN;
});
$p.bt = (function(elem) {
  var hash = $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().L(elem));
  matchResult1: {
    var $x_1;
    var x1 = this.aX.a[(hash & ((this.aX.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.rM(elem, hash);
  }
  return ($x_1 !== null);
});
$p.b6 = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jy)));
  if ((target > this.aX.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.hR = (function(elem) {
  if ((((1 + this.dN) | 0) >= this.jz)) {
    $p_scm_HashSet__growTable__I__V(this, (this.aX.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().L(elem)));
});
$p.oy = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, v1$2, $p_scm_HashSet__improveHash__I__I(this, (v2$2 | 0)));
    }));
    xs.tT.tY(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.p()) {
      var next = iter.l();
      $p_scm_HashSet__addElem__O__I__Z(this, next.fd, next.d4);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.rD();
    while (iter$2.p()) {
      var next$2 = iter$2.l();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.pi(), next$2.pa());
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
  return this.dN;
});
$p.d = (function() {
  return (this.dN === 0);
});
$p.cb = (function() {
  return "HashSet";
});
$p.i = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.p()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().kE(hashIterator, $m_s_util_hashing_MurmurHash3$().op);
});
$p.b3 = (function(elems) {
  return this.oy(elems);
});
$p.b4 = (function(elem) {
  this.hR(elem);
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
$p.bk = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.q();
});
$p.bv = (function() {
  return "IndexedSeq";
});
$p.hY = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fx = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.cD = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.gL = (function(coll) {
  return $m_sci_ArraySeq$().k8(coll, this.a5());
});
$p.gO = (function() {
  return $m_sci_ArraySeq$().i7(this.a5());
});
$p.e2 = (function() {
  return $m_sci_ArraySeq$().jl;
});
$p.cb = (function() {
  return "ArraySeq";
});
$p.bT = (function(xs, start, len) {
  var srcLen = this.q();
  var destLen = $m_jl_reflect_Array$().aN(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gH(this.cL(), 0, xs, start, copied);
  }
  return copied;
});
$p.hV = (function() {
  return 2147483647;
});
$p.bV = (function() {
  return $m_sci_ArraySeq$().jl;
});
$p.gK = (function(coll) {
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
$p.bk = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.q();
});
$p.bv = (function() {
  return "IndexedSeq";
});
$p.hY = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fx = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.cD = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.e2 = (function() {
  return $m_sci_Vector$();
});
$p.q = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.k : this.f.a.length);
});
$p.m = (function() {
  return ((this === $m_sci_Vector0$()) ? $m_sci_Vector$().nR : new $c_sci_NewVectorIterator(this, this.q(), this.cN()));
});
$p.cb = (function() {
  return "Vector";
});
$p.bT = (function(xs, start, len) {
  return this.m().bT(xs, start, len);
});
$p.hV = (function() {
  return $m_sci_Vector$().nQ;
});
$p.aG = (function(index) {
  return $m_scg_CommonErrors$().ki(index, ((this.q() - 1) | 0));
});
$p.bc = (function(f) {
  var c = this.cN();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = (((c + ((c >>> 31) | 0)) | 0) >> 1);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.k6(((((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0) - 1) | 0), this.cM(i), f);
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
$p.bk = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.q();
});
$p.bv = (function() {
  return "IndexedSeq";
});
$p.cD = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.e2 = (function() {
  return $m_scm_ArraySeq$().jx;
});
$p.p7 = (function(coll) {
  var evidence$1 = this.a5();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aO();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.y();
  var it = coll.m();
  while (it.p()) {
    var elem = it.l();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().h0(elementClass) : elem));
    jsElems.push(unboxedElem);
  }
  return $m_scm_ArraySeq$().ko($m_scm_ArrayBuilder$().gZ(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems));
});
$p.gO = (function() {
  return $m_scm_ArraySeq$().i7(this.a5());
});
$p.cb = (function() {
  return "ArraySeq";
});
$p.bT = (function(xs, start, len) {
  var srcLen = this.q();
  var destLen = $m_jl_reflect_Array$().aN(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gH(this.ca(), 0, xs, start, copied);
  }
  return copied;
});
$p.g = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().aN(this.ca()) !== $m_jl_reflect_Array$().aN(other.ca()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.bV = (function() {
  return $m_scm_ArraySeq$().jx;
});
$p.gL = (function(coll) {
  return this.p7(coll);
});
$p.gK = (function(coll) {
  return this.p7(coll);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.dq = null;
  this.dq = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.q = (function() {
  return this.dq.a.length;
});
$p.gD = (function(i) {
  return this.dq.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dq, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().oX(this.dq, that.dq) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dq);
});
$p.cL = (function() {
  return this.dq;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.u = (function(i) {
  return this.gD(i);
});
$p.c = (function(v1) {
  return this.gD((v1 | 0));
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
  this.dr = null;
  this.dr = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.q = (function() {
  return this.dr.a.length;
});
$p.gv = (function(i) {
  return this.dr.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dr, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().oT(this.dr, that.dr) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dr);
});
$p.cL = (function() {
  return this.dr;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.u = (function(i) {
  return this.gv(i);
});
$p.c = (function(v1) {
  return this.gv((v1 | 0));
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
  this.cT = null;
  this.cT = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.q = (function() {
  return this.cT.a.length;
});
$p.gw = (function(i) {
  return this.cT.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.cT, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().oU(this.cT, that.cT) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cT);
});
$p.dU = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.cT).dU(sb, start, sep, end);
});
$p.cL = (function() {
  return this.cT;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.u = (function(i) {
  return $bC(this.gw(i));
});
$p.c = (function(v1) {
  return $bC(this.gw((v1 | 0)));
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
  this.ds = null;
  this.ds = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.q = (function() {
  return this.ds.a.length;
});
$p.gx = (function(i) {
  return this.ds.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.ds, this$1.aj);
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofDouble)) {
    var array = this.ds;
    var thatArray = that.ds;
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
  return new $c_sc_ArrayOps$ArrayIterator(this.ds);
});
$p.cL = (function() {
  return this.ds;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.u = (function(i) {
  return this.gx(i);
});
$p.c = (function(v1) {
  return this.gx((v1 | 0));
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
  this.dt = null;
  this.dt = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
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
  if ((that instanceof $c_sci_ArraySeq$ofFloat)) {
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
$p.cL = (function() {
  return this.dt;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.u = (function(i) {
  return this.gy(i);
});
$p.c = (function(v1) {
  return this.gy((v1 | 0));
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
  this.du = null;
  this.du = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
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
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().k1(this.du, that.du) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.du);
});
$p.cL = (function() {
  return this.du;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.u = (function(i) {
  return this.gz(i);
});
$p.c = (function(v1) {
  return this.gz((v1 | 0));
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
  this.dv = null;
  this.dv = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.q = (function() {
  return ((this.dv.a.length >>> 1) | 0);
});
$p.gA = (function(i) {
  var $x_1 = this.dv.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dv, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().oV(this.dv, that.dv) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dv);
});
$p.cL = (function() {
  return this.dv;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.u = (function(i) {
  return this.gA(i);
});
$p.c = (function(v1) {
  return this.gA((v1 | 0));
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
  this.cv = null;
  this.cv = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.a5 = (function() {
  return $m_s_reflect_ClassTag$().jK($objectGetClass(this.cv).ak.Q());
});
$p.q = (function() {
  return this.cv.a.length;
});
$p.u = (function(i) {
  return this.cv.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.cv, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().oY(this.cv, that.cv) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cv);
});
$p.cL = (function() {
  return this.cv;
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
  this.dw = null;
  this.dw = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.q = (function() {
  return this.dw.a.length;
});
$p.gB = (function(i) {
  return this.dw.a[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dw, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().oW(this.dw, that.dw) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dw);
});
$p.cL = (function() {
  return this.dw;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.u = (function(i) {
  return this.gB(i);
});
$p.c = (function(v1) {
  return this.gB((v1 | 0));
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
$p.gC = (function(i) {
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
$p.cL = (function() {
  return this.ej;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.u = (function(i) {
  this.gC(i);
});
$p.c = (function(v1) {
  this.gC((v1 | 0));
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
$p.fx = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bv = (function() {
  return "LinearSeq";
});
$p.m = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.cD = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.e2 = (function() {
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
$p.bk = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.bt = (function(elem) {
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
$p.oQ = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.cJ = (function(x) {
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
  this.dH = null;
  this.dH = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.q = (function() {
  return this.dH.a.length;
});
$p.gD = (function(index) {
  return this.dH.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dH, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().oX(this.dH, that.dH) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dH);
});
$p.ca = (function() {
  return this.dH;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.u = (function(i) {
  return this.gD(i);
});
$p.c = (function(v1) {
  return this.gD((v1 | 0));
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
  this.dI = null;
  this.dI = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.q = (function() {
  return this.dI.a.length;
});
$p.gv = (function(index) {
  return this.dI.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dI, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().oT(this.dI, that.dI) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dI);
});
$p.ca = (function() {
  return this.dI;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.u = (function(i) {
  return this.gv(i);
});
$p.c = (function(v1) {
  return this.gv((v1 | 0));
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
$p.gw = (function(index) {
  return this.bS.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.bS, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().oU(this.bS, that.bS) : $c_scm_ArraySeq.prototype.g.call(this, that));
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
  return $bC(this.gw(i));
});
$p.c = (function(v1) {
  return $bC(this.gw((v1 | 0)));
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
$p.gx = (function(index) {
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
  return this.gx(i);
});
$p.c = (function(v1) {
  return this.gx((v1 | 0));
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
$p.gy = (function(index) {
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
  return this.gy(i);
});
$p.c = (function(v1) {
  return this.gy((v1 | 0));
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
  this.dJ = null;
  this.dJ = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.q = (function() {
  return this.dJ.a.length;
});
$p.gz = (function(index) {
  return this.dJ.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dJ, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().k1(this.dJ, that.dJ) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dJ);
});
$p.ca = (function() {
  return this.dJ;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.u = (function(i) {
  return this.gz(i);
});
$p.c = (function(v1) {
  return this.gz((v1 | 0));
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
  this.dK = null;
  this.dK = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.q = (function() {
  return ((this.dK.a.length >>> 1) | 0);
});
$p.gA = (function(index) {
  var $x_1 = this.dK.a;
  var $x_2 = (index << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dK, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().oV(this.dK, that.dK) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dK);
});
$p.ca = (function() {
  return this.dK;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.u = (function(i) {
  return this.gA(i);
});
$p.c = (function(v1) {
  return this.gA((v1 | 0));
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
  this.d2 = null;
  this.d2 = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.a5 = (function() {
  return $m_s_reflect_ClassTag$().jK($objectGetClass(this.d2).ak.Q());
});
$p.q = (function() {
  return this.d2.a.length;
});
$p.u = (function(index) {
  return this.d2.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.d2, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().oY(this.d2, that.d2) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.d2);
});
$p.ca = (function() {
  return this.d2;
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
  this.dL = null;
  this.dL = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.q = (function() {
  return this.dL.a.length;
});
$p.gB = (function(index) {
  return this.dL.a[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aM(this.dL, this$1.aj);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().oW(this.dL, that.dL) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dL);
});
$p.ca = (function() {
  return this.dL;
});
$p.a5 = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.u = (function(i) {
  return this.gB(i);
});
$p.c = (function(v1) {
  return this.gB((v1 | 0));
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
$p.gC = (function(index) {
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
  this.gC(i);
});
$p.c = (function(v1) {
  this.gC((v1 | 0));
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
$p.e5 = (function(index, elem) {
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
    return new $c_sci_Vector1($m_sci_VectorStatics$().fj(this.f, elem));
  } else {
    var $x_2 = this.f;
    var $x_1 = $m_sci_VectorStatics$().bs;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.cN = (function() {
  return 1;
});
$p.cM = (function(idx) {
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
$p.s9 = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list");
});
$p.tz = (function() {
  throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty list");
});
$p.y = (function() {
  return 0;
});
$p.m = (function() {
  return $m_sc_Iterator$().X;
});
$p.D = (function() {
  this.s9();
});
$p.v = (function() {
  this.tz();
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
$p.e5 = (function(index, elem) {
  throw this.aG(index);
});
$p.dV = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.cN = (function() {
  return 0;
});
$p.cM = (function(idx) {
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
  this.br = null;
  this.bR = len1;
  this.br = data2;
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
      return ((i2 < this.br.a.length) ? this.br.a[i2].a[i1] : this.j.a[(31 & io)]);
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
$p.e5 = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.bR)) {
      var io = ((index - this.bR) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.br.a.length)) {
        var a2 = this.br;
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
        return new $c_sci_Vector2(this.f, this.bR, this.br, a1c$1, this.k);
      }
    } else {
      var a1$2 = this.f;
      var a1c$2 = a1$2.e();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bR, this.br, this.j, this.k);
    }
  } else {
    throw this.aG(index);
  }
});
$p.dV = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$3 = $m_sci_VectorStatics$().fj(this.j, elem);
    var length0$3 = ((1 + this.k) | 0);
    return new $c_sci_Vector2(this.f, this.bR, this.br, suffix1$3, length0$3);
  } else if ((this.br.a.length < 30)) {
    var data2$4 = $m_sci_VectorStatics$().E(this.br, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$4 = ((1 + this.k) | 0);
    return new $c_sci_Vector2(this.f, this.bR, data2$4, a, length0$4);
  } else {
    var $x_5 = this.f;
    var $x_4 = this.bR;
    var $x_3 = this.br;
    var $x_2 = this.bR;
    var $x_1 = $m_sci_VectorStatics$().cA;
    var x = this.j;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.k) | 0));
  }
});
$p.cN = (function() {
  return 3;
});
$p.cM = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.br;
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
      return ((i2 < this.br.a.length) ? this.br.a[i2].a[i1] : this.j.a[(31 & io)]);
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
  this.bi = 0;
  this.bH = null;
  this.bj = 0;
  this.b0 = null;
  this.b1 = null;
  this.bi = len1;
  this.bH = prefix2;
  this.bj = len12;
  this.b0 = data3;
  this.b1 = suffix2;
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
    var io = ((index - this.bj) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.b0.a.length) ? this.b0.a[i3].a[i2].a[i1] : ((i2 < this.b1.a.length) ? this.b1.a[i2].a[i1] : this.j.a[i1]));
    } else if ((index >= this.bi)) {
      var io$2 = ((index - this.bi) | 0);
      return this.bH.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
$p.e5 = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.bj)) {
      var io = ((index - this.bj) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.b0.a.length)) {
        var a3 = this.b0;
        var a3c = a3.e();
        var a2 = a3c.a[i3];
        var a2c = a2.e();
        var a1 = a2c.a[i2];
        var a1c = a1.e();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.f, this.bi, this.bH, this.bj, a3c, this.b1, this.j, this.k);
      } else if ((i2 < this.b1.a.length)) {
        var a2$1 = this.b1;
        var a2c$1 = a2$1.e();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.e();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.f, this.bi, this.bH, this.bj, this.b0, a2c$1, this.j, this.k);
      } else {
        var a1$2 = this.j;
        var a1c$2 = a1$2.e();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.f, this.bi, this.bH, this.bj, this.b0, this.b1, a1c$2, this.k);
      }
    } else if ((index >= this.bi)) {
      var io$2 = ((index - this.bi) | 0);
      var a2$2 = this.bH;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.e();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.e();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.f, this.bi, a2c$2, this.bj, this.b0, this.b1, this.j, this.k);
    } else {
      var a1$4 = this.f;
      var a1c$4 = a1$4.e();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bi, this.bH, this.bj, this.b0, this.b1, this.j, this.k);
    }
  } else {
    throw this.aG(index);
  }
});
$p.dV = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$16 = $m_sci_VectorStatics$().fj(this.j, elem);
    var length0$16 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(this.f, this.bi, this.bH, this.bj, this.b0, this.b1, suffix1$16, length0$16);
  } else if ((this.b1.a.length < 31)) {
    var suffix2$6 = $m_sci_VectorStatics$().E(this.b1, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$17 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(this.f, this.bi, this.bH, this.bj, this.b0, suffix2$6, a, length0$17);
  } else if ((this.b0.a.length < 30)) {
    var data3$7 = $m_sci_VectorStatics$().E(this.b0, $m_sci_VectorStatics$().E(this.b1, this.j));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$18 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(this.f, this.bi, this.bH, this.bj, data3$7, $m_sci_VectorStatics$().bs, a$1, length0$18);
  } else {
    var $x_8 = this.f;
    var $x_7 = this.bi;
    var $x_6 = this.bH;
    var $x_5 = this.bj;
    var $x_4 = this.b0;
    var $x_3 = this.bj;
    var $x_2 = $m_sci_VectorStatics$().fa;
    var x = $m_sci_VectorStatics$().E(this.b1, this.j);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().bs;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.k) | 0));
  }
});
$p.cN = (function() {
  return 5;
});
$p.cM = (function(idx) {
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
      return this.b0;
      break;
    }
    case 3: {
      return this.b1;
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
    var io = ((index - this.bj) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.b0.a.length) ? this.b0.a[i3].a[i2].a[i1] : ((i2 < this.b1.a.length) ? this.b1.a[i2].a[i1] : this.j.a[i1]));
    } else if ((index >= this.bi)) {
      var io$2 = ((index - this.bi) | 0);
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
  this.aU = 0;
  this.b9 = null;
  this.aV = 0;
  this.ba = null;
  this.aW = 0;
  this.aB = null;
  this.aD = null;
  this.aC = null;
  this.aU = len1;
  this.b9 = prefix2;
  this.aV = len12;
  this.ba = prefix3;
  this.aW = len123;
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
    var io = ((index - this.aW) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aB.a.length) ? this.aB.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aD.a.length) ? this.aD.a[i3].a[i2].a[i1] : ((i2 < this.aC.a.length) ? this.aC.a[i2].a[i1] : this.j.a[i1])));
    } else if ((index >= this.aV)) {
      var io$2 = ((index - this.aV) | 0);
      return this.ba.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aU)) {
      var io$3 = ((index - this.aU) | 0);
      return this.b9.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aG(index);
  }
});
$p.e5 = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.aW)) {
      var io = ((index - this.aW) | 0);
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
        return new $c_sci_Vector4(this.f, this.aU, this.b9, this.aV, this.ba, this.aW, a4c, this.aD, this.aC, this.j, this.k);
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
        return new $c_sci_Vector4(this.f, this.aU, this.b9, this.aV, this.ba, this.aW, this.aB, a3c$1, this.aC, this.j, this.k);
      } else if ((i2 < this.aC.a.length)) {
        var a2$2 = this.aC;
        var a2c$2 = a2$2.e();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.e();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.f, this.aU, this.b9, this.aV, this.ba, this.aW, this.aB, this.aD, a2c$2, this.j, this.k);
      } else {
        var a1$3 = this.j;
        var a1c$3 = a1$3.e();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.f, this.aU, this.b9, this.aV, this.ba, this.aW, this.aB, this.aD, this.aC, a1c$3, this.k);
      }
    } else if ((index >= this.aV)) {
      var io$2 = ((index - this.aV) | 0);
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
      return new $c_sci_Vector4(this.f, this.aU, this.b9, this.aV, a3c$2, this.aW, this.aB, this.aD, this.aC, this.j, this.k);
    } else if ((index >= this.aU)) {
      var io$3 = ((index - this.aU) | 0);
      var a2$4 = this.b9;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.e();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.e();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.f, this.aU, a2c$4, this.aV, this.ba, this.aW, this.aB, this.aD, this.aC, this.j, this.k);
    } else {
      var a1$6 = this.f;
      var a1c$6 = a1$6.e();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.aU, this.b9, this.aV, this.ba, this.aW, this.aB, this.aD, this.aC, this.j, this.k);
    }
  } else {
    throw this.aG(index);
  }
});
$p.dV = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$33 = $m_sci_VectorStatics$().fj(this.j, elem);
    var length0$33 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.aU, this.b9, this.aV, this.ba, this.aW, this.aB, this.aD, this.aC, suffix1$33, length0$33);
  } else if ((this.aC.a.length < 31)) {
    var suffix2$22 = $m_sci_VectorStatics$().E(this.aC, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$34 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.aU, this.b9, this.aV, this.ba, this.aW, this.aB, this.aD, suffix2$22, a, length0$34);
  } else if ((this.aD.a.length < 31)) {
    var suffix3$9 = $m_sci_VectorStatics$().E(this.aD, $m_sci_VectorStatics$().E(this.aC, this.j));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$35 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.aU, this.b9, this.aV, this.ba, this.aW, this.aB, suffix3$9, $m_sci_VectorStatics$().bs, a$1, length0$35);
  } else if ((this.aB.a.length < 30)) {
    var data4$10 = $m_sci_VectorStatics$().E(this.aB, $m_sci_VectorStatics$().E(this.aD, $m_sci_VectorStatics$().E(this.aC, this.j)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$36 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.aU, this.b9, this.aV, this.ba, this.aW, data4$10, $m_sci_VectorStatics$().cA, $m_sci_VectorStatics$().bs, a$2, length0$36);
  } else {
    var $x_11 = this.f;
    var $x_10 = this.aU;
    var $x_9 = this.b9;
    var $x_8 = this.aV;
    var $x_7 = this.ba;
    var $x_6 = this.aW;
    var $x_5 = this.aB;
    var $x_4 = this.aW;
    var $x_3 = $m_sci_VectorStatics$().jt;
    var x = $m_sci_VectorStatics$().E(this.aD, $m_sci_VectorStatics$().E(this.aC, this.j));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().cA;
    var $x_1 = $m_sci_VectorStatics$().bs;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.k) | 0));
  }
});
$p.cN = (function() {
  return 7;
});
$p.cM = (function(idx) {
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
    var io = ((index - this.aW) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aB.a.length) ? this.aB.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aD.a.length) ? this.aD.a[i3].a[i2].a[i1] : ((i2 < this.aC.a.length) ? this.aC.a[i2].a[i1] : this.j.a[i1])));
    } else if ((index >= this.aV)) {
      var io$2 = ((index - this.aV) | 0);
      return this.ba.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aU)) {
      var io$3 = ((index - this.aU) | 0);
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
$p.e5 = (function(index, elem) {
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
    var suffix1$54 = $m_sci_VectorStatics$().fj(this.j, elem);
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
    return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, this.ab, this.ae, suffix3$29, $m_sci_VectorStatics$().bs, a$1, length0$56);
  } else if ((this.ae.a.length < 31)) {
    var suffix4$12 = $m_sci_VectorStatics$().E(this.ae, $m_sci_VectorStatics$().E(this.ad, $m_sci_VectorStatics$().E(this.ac, this.j)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$57 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, this.ab, suffix4$12, $m_sci_VectorStatics$().cA, $m_sci_VectorStatics$().bs, a$2, length0$57);
  } else if ((this.ab.a.length < 30)) {
    var data5$13 = $m_sci_VectorStatics$().E(this.ab, $m_sci_VectorStatics$().E(this.ae, $m_sci_VectorStatics$().E(this.ad, $m_sci_VectorStatics$().E(this.ac, this.j))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$58 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.aq, this.aI, this.ar, this.aJ, this.as, this.aK, this.at, data5$13, $m_sci_VectorStatics$().fa, $m_sci_VectorStatics$().cA, $m_sci_VectorStatics$().bs, a$3, length0$58);
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
    var $x_3 = $m_sci_VectorStatics$().fa;
    var $x_2 = $m_sci_VectorStatics$().cA;
    var $x_1 = $m_sci_VectorStatics$().bs;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.k) | 0));
  }
});
$p.cN = (function() {
  return 9;
});
$p.cM = (function(idx) {
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
  this.am = 0;
  this.a0 = null;
  this.a4 = null;
  this.a3 = null;
  this.a2 = null;
  this.a1 = null;
  this.af = len1;
  this.au = prefix2;
  this.ag = len12;
  this.av = prefix3;
  this.ah = len123;
  this.aw = prefix4;
  this.ai = len1234;
  this.ax = prefix5;
  this.am = len12345;
  this.a0 = data6;
  this.a4 = suffix5;
  this.a3 = suffix4;
  this.a2 = suffix3;
  this.a1 = suffix2;
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
    var io = ((index - this.am) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a0.a.length) ? this.a0.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a4.a.length) ? this.a4.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a3.a.length) ? this.a3.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a2.a.length) ? this.a2.a[i3].a[i2].a[i1] : ((i2 < this.a1.a.length) ? this.a1.a[i2].a[i1] : this.j.a[i1])))));
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
$p.e5 = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.am)) {
      var io = ((index - this.am) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.a0.a.length)) {
        var a6 = this.a0;
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
        return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, a6c, this.a4, this.a3, this.a2, this.a1, this.j, this.k);
      } else if ((i5 < this.a4.a.length)) {
        var a5$1 = this.a4;
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
        return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, a5c$1, this.a3, this.a2, this.a1, this.j, this.k);
      } else if ((i4 < this.a3.a.length)) {
        var a4$2 = this.a3;
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
        return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, this.a4, a4c$2, this.a2, this.a1, this.j, this.k);
      } else if ((i3 < this.a2.a.length)) {
        var a3$3 = this.a2;
        var a3c$3 = a3$3.e();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.e();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.e();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, this.a4, this.a3, a3c$3, this.a1, this.j, this.k);
      } else if ((i2 < this.a1.a.length)) {
        var a2$4 = this.a1;
        var a2c$4 = a2$4.e();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.e();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, this.a4, this.a3, this.a2, a2c$4, this.j, this.k);
      } else {
        var a1$5 = this.j;
        var a1c$5 = a1$5.e();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, this.a4, this.a3, this.a2, this.a1, a1c$5, this.k);
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
      return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, a5c$2, this.am, this.a0, this.a4, this.a3, this.a2, this.a1, this.j, this.k);
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
      return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, a4c$4, this.ai, this.ax, this.am, this.a0, this.a4, this.a3, this.a2, this.a1, this.j, this.k);
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
      return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, a3c$6, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, this.a4, this.a3, this.a2, this.a1, this.j, this.k);
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
      return new $c_sci_Vector6(this.f, this.af, a2c$8, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, this.a4, this.a3, this.a2, this.a1, this.j, this.k);
    } else {
      var a1$10 = this.f;
      var a1c$10 = a1$10.e();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, this.a4, this.a3, this.a2, this.a1, this.j, this.k);
    }
  } else {
    throw this.aG(index);
  }
});
$p.dV = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$79 = $m_sci_VectorStatics$().fj(this.j, elem);
    var length0$79 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, this.a4, this.a3, this.a2, this.a1, suffix1$79, length0$79);
  } else if ((this.a1.a.length < 31)) {
    var suffix2$63 = $m_sci_VectorStatics$().E(this.a1, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$80 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, this.a4, this.a3, this.a2, suffix2$63, a, length0$80);
  } else if ((this.a2.a.length < 31)) {
    var suffix3$52 = $m_sci_VectorStatics$().E(this.a2, $m_sci_VectorStatics$().E(this.a1, this.j));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$81 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, this.a4, this.a3, suffix3$52, $m_sci_VectorStatics$().bs, a$1, length0$81);
  } else if ((this.a3.a.length < 31)) {
    var suffix4$36 = $m_sci_VectorStatics$().E(this.a3, $m_sci_VectorStatics$().E(this.a2, $m_sci_VectorStatics$().E(this.a1, this.j)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$82 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, this.a4, suffix4$36, $m_sci_VectorStatics$().cA, $m_sci_VectorStatics$().bs, a$2, length0$82);
  } else if ((this.a4.a.length < 31)) {
    var suffix5$15 = $m_sci_VectorStatics$().E(this.a4, $m_sci_VectorStatics$().E(this.a3, $m_sci_VectorStatics$().E(this.a2, $m_sci_VectorStatics$().E(this.a1, this.j))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$83 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, this.a0, suffix5$15, $m_sci_VectorStatics$().fa, $m_sci_VectorStatics$().cA, $m_sci_VectorStatics$().bs, a$3, length0$83);
  } else if ((this.a0.a.length < 62)) {
    var data6$16 = $m_sci_VectorStatics$().E(this.a0, $m_sci_VectorStatics$().E(this.a4, $m_sci_VectorStatics$().E(this.a3, $m_sci_VectorStatics$().E(this.a2, $m_sci_VectorStatics$().E(this.a1, this.j)))));
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var length0$84 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.af, this.au, this.ag, this.av, this.ah, this.aw, this.ai, this.ax, this.am, data6$16, $m_sci_VectorStatics$().jt, $m_sci_VectorStatics$().fa, $m_sci_VectorStatics$().cA, $m_sci_VectorStatics$().bs, a$4, length0$84);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cN = (function() {
  return 11;
});
$p.cM = (function(idx) {
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
      return this.a0;
      break;
    }
    case 6: {
      return this.a4;
      break;
    }
    case 7: {
      return this.a3;
      break;
    }
    case 8: {
      return this.a2;
      break;
    }
    case 9: {
      return this.a1;
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
    var io = ((index - this.am) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a0.a.length) ? this.a0.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a4.a.length) ? this.a4.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a3.a.length) ? this.a3.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a2.a.length) ? this.a2.a[i3].a[i2].a[i1] : ((i2 < this.a1.a.length) ? this.a1.a[i2].a[i1] : this.j.a[i1])))));
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
$p.b3 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b6 = (function(size) {
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bk = (function(len) {
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
$p.qE = (function(x) {
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
    var str = xs.tU;
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
$p.fi = (function(index) {
  return this.aF.fi(index);
});
$p.kC = (function(start, end) {
  return this.aF.pG(start, end);
});
$p.d = (function() {
  return (this.aF.q() === 0);
});
$p.u = (function(i) {
  return $bC(this.aF.fi(i));
});
$p.c = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aF.fi(i));
});
$p.gL = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oC(coll);
});
$p.gK = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).oC(coll);
});
$p.b4 = (function(elem) {
  return this.qE($uC(elem));
});
$p.bd = (function() {
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
  $thiz.d5 = buf.d5;
  $thiz.hI = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.hJ = ((1 + $thiz.hJ) | 0);
  if ($thiz.hI) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.hJ = 0;
  this.c6 = null;
  this.d5 = null;
  this.hI = false;
  this.c7 = 0;
  this.hJ = 0;
  this.c6 = $m_sci_Nil$();
  this.d5 = null;
  this.hI = false;
  this.c7 = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.cD = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b6 = (function(size) {
});
$p.m = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.c6.m(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.hJ)));
});
$p.e2 = (function() {
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
  this.hI = (!this.d());
  return this.c6;
});
$p.qM = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.c7 === 0)) {
    this.c6 = last1;
  } else {
    var x$proxy2 = this.d5;
    if ((x$proxy2 === null)) {
      $m_sr_Scala3RunTime$().bu();
    }
    x$proxy2.aA = last1;
  }
  this.d5 = last1;
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
    this.d5 = last0;
  }
  return this;
});
$p.qy = (function(xs) {
  var it = xs.m();
  if (it.p()) {
    var fresh = new $c_scm_ListBuffer().i9(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.c7 === 0)) {
      this.c6 = fresh.c6;
    } else {
      var x$proxy3 = this.d5;
      if ((x$proxy3 === null)) {
        $m_sr_Scala3RunTime$().bu();
      }
      x$proxy3.aA = fresh.c6;
    }
    this.d5 = fresh.d5;
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
$p.bd = (function() {
  return this.pI();
});
$p.b4 = (function(elem) {
  return this.qM(elem);
});
$p.b3 = (function(elems) {
  return this.qy(elems);
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
  $thiz.fb = 0;
  $thiz.d1 = initialElements;
  $thiz.b2 = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.fb = 0;
  this.d1 = null;
  this.b2 = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.m = (function() {
  return this.tN().m();
});
$p.bk = (function(len) {
  var x = this.b2;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cD = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.y = (function() {
  return this.b2;
});
$p.k0 = (function(n) {
  this.d1 = $m_scm_ArrayBuffer$().pz(this.d1, this.b2, n);
});
$p.b6 = (function(size) {
  if (((size > this.b2) && (size >= 1))) {
    this.k0(size);
  }
});
$p.u = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().ki(n, ((this.b2 - 1) | 0));
  }
  if ((hi > this.b2)) {
    throw $m_scg_CommonErrors$().ki(((hi - 1) | 0), ((this.b2 - 1) | 0));
  }
  return this.d1.a[n];
});
$p.q = (function() {
  return this.b2;
});
$p.tN = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.fb)));
});
$p.e2 = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.qJ = (function(elem) {
  this.fb = ((1 + this.fb) | 0);
  var newSize = ((1 + this.b2) | 0);
  if ((this.d1.a.length <= ((newSize - 1) | 0))) {
    this.k0(newSize);
  }
  this.b2 = newSize;
  this.d1.a[((newSize - 1) | 0)] = elem;
  return this;
});
$p.ox = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.b2;
    if ((elemsLength > 0)) {
      this.fb = ((1 + this.fb) | 0);
      this.k0(((this.b2 + elemsLength) | 0));
      $m_s_Array$().gH(elems.d1, 0, this.d1, this.b2, elemsLength);
      this.b2 = ((this.b2 + elemsLength) | 0);
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
  var srcLen = this.b2;
  var destLen = $m_jl_reflect_Array$().aN(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gH(this.d1, 0, xs, start, copied);
  }
  return copied;
});
$p.c = (function(v1) {
  return this.u((v1 | 0));
});
$p.bV = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.b4 = (function(elem) {
  return this.qJ(elem);
});
$p.b3 = (function(elems) {
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
  $thiz.dQ = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.dQ = null;
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
$p.bk = (function(len) {
  var x = (this.dQ.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cD = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.e2 = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.u = (function(index) {
  return this.dQ[index];
});
$p.q = (function() {
  return (this.dQ.length | 0);
});
$p.y = (function() {
  return (this.dQ.length | 0);
});
$p.cb = (function() {
  return "WrappedArray";
});
$p.bd = (function() {
  return this;
});
$p.b4 = (function(elem) {
  this.dQ.push(elem);
  return this;
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  return this.dQ[index];
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
