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
        return null.sF();
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.sC(x0);
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
        return instance.j();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.j.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.sG(x0);
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.sK(x0);
  }
}
function $dp_split__T__I__AT(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__split__T__I__AT(instance, x0, x1);
  } else {
    return instance.sL(x0, x1);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $dp_trim__T(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__trim__T(instance);
  } else {
    return instance.sN();
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
$p.j = (function() {
  return $systemIdentityHashCode(this);
});
$p.g = (function(that) {
  return (this === that);
});
$p.h = (function() {
  var i = this.j();
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
    F: 1,
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
    F: 1,
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
  this.aK = null;
  this.gJ = null;
  this.hJ = null;
  $n_Lcom_github_pwharned_clausula_extension_AppBus$ = this;
  new $c_Lcom_raquo_airstream_eventbus_EventBus();
  $m_Lcom_raquo_laminar_api_package$().o.gW.jf($s_Lcom_github_pwharned_clausula_extension_ExtensionStatus$__Idle__Lcom_github_pwharned_clausula_extension_ExtensionStatus());
  this.aK = $m_Lcom_raquo_laminar_api_package$().o.gW.jf($s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  this.gJ = $m_Lcom_raquo_laminar_api_package$().o.gW.jf(new $c_T2$mcDD$sp(0.0, 0.0));
  this.hJ = $m_s_None$();
}
$p = $c_Lcom_github_pwharned_clausula_extension_AppBus$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_AppBus$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_AppBus$() {
}
$h_Lcom_github_pwharned_clausula_extension_AppBus$.prototype = $p;
var $d_Lcom_github_pwharned_clausula_extension_AppBus$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_AppBus$, "com.github.pwharned.clausula.extension.AppBus$", ({
  d6: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_AppBus$;
function $m_Lcom_github_pwharned_clausula_extension_AppBus$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_AppBus$)) {
    $n_Lcom_github_pwharned_clausula_extension_AppBus$ = new $c_Lcom_github_pwharned_clausula_extension_AppBus$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_AppBus$;
}
function $s_Lcom_github_pwharned_clausula_extension_Main__main__AT__V(args) {
  $m_Lcom_github_pwharned_clausula_extension_Main$().rl(args);
}
function $p_Lcom_github_pwharned_clausula_extension_Main$__createCard__Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient__T__s_Option__s_Option__Lcom_github_pwharned_clausula_extension_domain_Language__V($thiz, ankiClient, clozeText, translation, audio, lang) {
  var note = new $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote(clozeText, translation, audio, "Default", lang, new $c_sci_$colon$colon("clausula", new $c_sci_$colon$colon(lang.ea(), $m_sci_Nil$())));
  ankiClient.pJ(note).jv(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3) => {
    matchResult1: {
      if ((x$1$3 instanceof $c_s_util_Right)) {
        var $x_1 = $uJ(x$1$3.bN);
        var noteId_$_lo = $x_1.l;
        var noteId_$_hi = $x_1.h;
        console.log(("Card created: " + $s_RTLong__toString__I__I__T(noteId_$_lo, noteId_$_hi)));
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Created(noteId_$_lo, noteId_$_hi));
        break matchResult1;
      }
      if ((x$1$3 instanceof $c_s_util_Left)) {
        var err = x$1$3.dB;
        console.error(("Failed to create card: " + err));
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(err));
        break matchResult1;
      }
      throw new $c_s_MatchError(x$1$3);
    }
  })), $m_s_concurrent_ExecutionContext$().c7());
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
$p.rl = (function(args) {
  var container = document.createElement("div");
  container.id = "clausula-root";
  document.body.appendChild(container);
  $m_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$().rp(container);
  var extractor = new $c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction();
  var ankiClient = new $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient();
  var translator = new $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchTranslation();
  var audio = new $c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration();
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream(new $c_Lcom_raquo_airstream_misc_StreamFromSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK.d5, true), new $c_s_PartialFunction$Lifted(new $c_Lcom_github_pwharned_clausula_extension_Main$$anon$1())), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$3) => {
    matchResult7: {
      var x23 = $m_Lcom_github_pwharned_clausula_extension_AppBus$().hJ;
      if (($m_s_None$() === x23)) {
        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed($m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$()));
        break matchResult7;
      }
      if ((x23 instanceof $c_s_Some)) {
        var x25 = x23.d6;
        if ((x25 !== null)) {
          var x27 = x25.eq;
          var x28 = x25.ep;
          var x29 = x25.eo;
          var x18 = $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$().sl(x28, x27);
          if ((x18 instanceof $c_s_util_Left)) {
            var err = x18.dB;
            $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(err));
            break matchResult7;
          }
          if ((x18 instanceof $c_s_util_Right)) {
            var clozeText = x18.bN;
            translator.oV(x28, x29, $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$()).oc(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((translationSentence$2) => {
              var this$9 = translationSentence$2.hH();
              var this$10 = (this$9.d() ? $m_s_None$() : this$9.v().es);
              return translator.oV(x27, (this$10.d() ? $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() : this$10.v()), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$()).f7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => _$2$2.hH())), $m_s_concurrent_ExecutionContext$().c7()).oc(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((translationSentence$1) => ((translationWord$2) => {
                matchResult4: {
                  var $x_1;
                  if ((translationSentence$1 instanceof $c_s_util_Left)) {
                    var $x_1 = audio.om(x27, x28, x29).f7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$2) => _$3$2.hH())), $m_s_concurrent_ExecutionContext$().c7());
                    break matchResult4;
                  }
                  if ((translationSentence$1 instanceof $c_s_util_Right)) {
                    var value$2$1 = translationSentence$1.bN;
                    var this$13 = value$2$1.es;
                    var $x_1 = audio.om(x27, x28, (this$13.d() ? x29 : this$13.v())).f7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$4$2) => _$4$2.hH())), $m_s_concurrent_ExecutionContext$().c7());
                    break matchResult4;
                  }
                  throw new $c_s_MatchError(translationSentence$1);
                }
                return $x_1.f7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((translationWord$2$1) => ((audioTag$3) => {
                  matchResult5: {
                    if ((translationSentence$1 instanceof $c_s_util_Right)) {
                      var value$3 = translationSentence$1.bN;
                      var this$16 = (translationWord$2$1.d() ? $m_s_None$() : new $c_s_Some(translationWord$2$1.v().et));
                      $p_Lcom_github_pwharned_clausula_extension_Main$__createCard__Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient__T__s_Option__s_Option__Lcom_github_pwharned_clausula_extension_domain_Language__V(this, ankiClient, clozeText, new $c_s_Some((((this$16.d() ? "" : this$16.v()) + " :  ") + value$3.et)), audioTag$3, x29);
                      break matchResult5;
                    }
                    if ((translationSentence$1 instanceof $c_s_util_Left)) {
                      var error$1 = translationSentence$1.dB;
                      $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, new $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(error$1));
                      break matchResult5;
                    }
                    throw new $c_s_MatchError(translationSentence$1);
                  }
                }))(translationWord$2)), $m_s_concurrent_ExecutionContext$().c7());
              }))(translationSentence$2)), $m_s_concurrent_ExecutionContext$().c7());
            })), $m_s_concurrent_ExecutionContext$().c7());
            break matchResult7;
          }
          throw new $c_s_MatchError(x18);
        }
      }
      if ((x23 === null)) {
        break matchResult7;
      }
      throw new $c_s_MatchError(x23);
    }
  })), $m_Lcom_raquo_laminar_api_package$().o.st());
  document.addEventListener("mouseup", ((event$2) => {
    var target = event$2.target;
    if ((target.closest("#clausula-root") !== null)) {
      return (void 0);
    } else {
      matchResult11: {
        var x46 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK.d5).v();
        var x$1 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
        if (((x$1 === null) ? (x46 === null) : x$1.g(x46))) {
          break matchResult11;
        }
        if ((x46 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Created)) {
          break matchResult11;
        }
        var selection = window.getSelection();
        if (((selection === null) || ($f_T__trim__T($dp_toString__T(selection)) === ""))) {
          $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
        } else {
          var selectedText = $f_T__trim__T($dp_toString__T(selection));
          var node = selection.anchorNode;
          var x41 = $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$().hr(selectedText);
          if ((x41 instanceof $c_s_util_Left)) {
            $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
            break matchResult11;
          }
          if ((x41 instanceof $c_s_util_Right)) {
            var word = x41.bN;
            extractor.qB(word, node).jv(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3) => {
              matchResult9: {
                if ((x$1$3 instanceof $c_s_util_Left)) {
                  $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
                  break matchResult9;
                }
                if ((x$1$3 instanceof $c_s_util_Right)) {
                  var sentence = x$1$3.bN;
                  extractor.qo(sentence).jv(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3$1) => {
                    matchResult8: {
                      if ((x$1$3$1 instanceof $c_s_util_Left)) {
                        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
                        break matchResult8;
                      }
                      if ((x$1$3$1 instanceof $c_s_util_Right)) {
                        var lang = x$1$3$1.bN;
                        var preview = new $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview(word, sentence, lang, $ct_T2__O__O__(new $c_T2(), (+event$2.clientX), (+event$2.clientY)));
                        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().gJ, $ct_T2__O__O__(new $c_T2(), (+event$2.clientX), (+event$2.clientY)));
                        $m_Lcom_github_pwharned_clausula_extension_AppBus$().hJ = new $c_s_Some(preview);
                        $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, preview);
                        break matchResult8;
                      }
                      throw new $c_s_MatchError(x$1$3$1);
                    }
                  })), $m_s_concurrent_ExecutionContext$().c7());
                  break matchResult9;
                }
                throw new $c_s_MatchError(x$1$3);
              }
            })), $m_s_concurrent_ExecutionContext$().c7());
            break matchResult11;
          }
          throw new $c_s_MatchError(x41);
        }
      }
      return (void 0);
    }
  }));
});
var $d_Lcom_github_pwharned_clausula_extension_Main$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_Main$, "com.github.pwharned.clausula.extension.Main$", ({
  da: 1
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
$p.hr = (function(s) {
  $m_sc_StringOps$();
  return (($f_T__trim__T(s) !== "") ? new $c_s_util_Right($f_T__trim__T(s)) : new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$()));
});
$p.sl = (function(s, w) {
  if (((s.indexOf(w) | 0) !== (-1))) {
    var replacement = (("{{c1::" + w) + "}}");
    return new $c_s_util_Right(s.split(w).join(replacement));
  } else {
    return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$());
  }
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$, "com.github.pwharned.clausula.extension.domain.Sentence$package$Sentence$", ({
  dF: 1
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
$p.hr = (function(s) {
  $m_sc_StringOps$();
  return (($f_T__trim__T(s) !== "") ? new $c_s_util_Right($f_T__trim__T(s)) : new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$()));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$, "com.github.pwharned.clausula.extension.domain.Word$package$Word$", ({
  dJ: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$;
function $m_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$ = new $c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$;
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__loadingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz) {
  return $m_Lcom_raquo_laminar_api_package$().o.cw().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-popup"), $m_Lcom_raquo_laminar_api_package$().o.gx().ai(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Extracting...", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt)]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__previewView__T__T__Lcom_github_pwharned_clausula_extension_domain_Language__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, word, sentence, lang) {
  return $m_Lcom_raquo_laminar_api_package$().o.cw().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-popup"), $m_Lcom_raquo_laminar_api_package$().o.cw().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-word"), $m_Lcom_raquo_laminar_api_package$().o.sc().ai(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, word, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt)]))])), $m_Lcom_raquo_laminar_api_package$().o.cw().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-sentence"), $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__renderHighlightedSentence__T__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, sentence, word)])), $m_Lcom_raquo_laminar_api_package$().o.cw().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-lang"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, ("Language: " + lang.o2()), $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt)])), $m_Lcom_raquo_laminar_api_package$().o.cw().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-actions"), $m_Lcom_raquo_laminar_api_package$().o.hv().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-btn-create"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Create Card", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().hy($m_Lcom_raquo_laminar_api_package$().o.gs(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState());
  })))])), $m_Lcom_raquo_laminar_api_package$().o.hv().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-btn-dismiss"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Dismiss", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().hy($m_Lcom_raquo_laminar_api_package$().o.gs(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$4$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  })))]))]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__renderHighlightedSentence__T__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, sentence, word) {
  var escapedWord = $m_ju_regex_Pattern$().rF(word);
  var parts = $f_T__split__T__I__AT(sentence, escapedWord, 0);
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().o.gx();
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-sentence-text");
  var $x_1 = $m_Lcom_raquo_laminar_api_package$().o;
  var xs = $m_sc_ArrayOps$().sy(parts);
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
    var part = x0.aU();
    var i$1 = (x0.aG() | 0);
    var elems = ((i$1 < ((parts.a.length - 1) | 0)) ? new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().o.oO().ai(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, part, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt)])), new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().o.rn().ai(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, word, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt)])), $m_sci_Nil$())) : new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().o.oO().ai(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, part, $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt)])), $m_sci_Nil$()));
    var it = new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(elems);
    while (it.p()) {
      var elem = it.l();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().gC(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    i = ((1 + i) | 0);
  }
  return $x_3.ai(new $c_sjsr_WrappedVarArgs([$x_2, $f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_1, $m_scm_ArrayBuilder$().gB(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((component$2) => {
    $m_Lcom_raquo_laminar_api_package$();
    return component$2;
  })), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$())]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__creatingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz) {
  return $m_Lcom_raquo_laminar_api_package$().o.cw().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-popup"), $m_Lcom_raquo_laminar_api_package$().o.gx().ai(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Creating card...", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt)]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__createdView__J__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, noteId_$_lo, noteId_$_hi) {
  return $m_Lcom_raquo_laminar_api_package$().o.cw().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-popup clausula-success"), $m_Lcom_raquo_laminar_api_package$().o.gx().ai(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "\u2713 Card created!", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt)])), $m_Lcom_raquo_laminar_api_package$().o.hv().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-btn-dismiss"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Close", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().hy($m_Lcom_raquo_laminar_api_package$().o.gs(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$5$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  })))]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorView__Lcom_github_pwharned_clausula_extension_domain_AppError__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, error) {
  return $m_Lcom_raquo_laminar_api_package$().o.cw().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-popup clausula-error"), $m_Lcom_raquo_laminar_api_package$().o.gx().ai(new $c_sjsr_WrappedVarArgs([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, ("Error: " + $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorMessage__Lcom_github_pwharned_clausula_extension_domain_AppError__T($thiz, error)), $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt)])), $m_Lcom_raquo_laminar_api_package$().o.hv().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.bh.bD("clausula-btn-dismiss"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().o, "Close", $m_Lcom_raquo_laminar_modifiers_RenderableText$().bt), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().hy($m_Lcom_raquo_laminar_api_package$().o.gs(), false, false)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$6$3) => {
    $f_Lcom_raquo_airstream_state_Var__set__O__V($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK, $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState());
  })))]))]));
}
function $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorMessage__Lcom_github_pwharned_clausula_extension_domain_AppError__T($thiz, error) {
  return (($m_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$() === error) ? "Anki is not running" : (($m_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$() === error) ? "No word found" : (($m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$() === error) ? "Could not extract sentence" : (($m_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$() === error) ? "Unsupported language" : (($m_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$() === error) ? "Card already exists" : ((error instanceof $c_Lcom_github_pwharned_clausula_extension_domain_ApiError) ? error.er : error.h()))))));
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
$p.rp = (function(container) {
  var island = $m_Lcom_raquo_laminar_api_package$().o.cw().ai(new $c_sjsr_WrappedVarArgs([$m_Lcom_raquo_laminar_api_package$().o.rB().nB("fixed"), $m_Lcom_raquo_laminar_api_package$().o.sx().nB("999999"), $m_Lcom_raquo_laminar_api_package$().o.ri().j8(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().gJ.d5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => (x$1$2.nC() + "px"))), $m_s_None$()), $m_s_$less$colon$less$().h5), $m_Lcom_raquo_laminar_api_package$().o.sn().j8(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().gJ.d5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$1) => ((x$1$2$1.nD() + 20.0) + "px"))), $m_s_None$()), $m_s_$less$colon$less$().h5), $m_Lcom_raquo_laminar_api_package$().o.qq().j8(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK.d5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => {
    var x$1 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Hidden__Lcom_github_pwharned_clausula_extension_PopupState();
    if (((x$1 === null) ? (x$1$2$2 === null) : x$1.g(x$1$2$2))) {
      return "none";
    } else {
      return "block";
    }
  })), $m_s_None$()), $m_s_$less$colon$less$().h5), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildInserter$().pV(new $c_Lcom_raquo_airstream_misc_MapSignal($m_Lcom_github_pwharned_clausula_extension_AppBus$().aK.d5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$3) => {
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
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__previewView__T__T__Lcom_github_pwharned_clausula_extension_domain_Language__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, x$1$2$3.eq, x$1$2$3.ep, x$1$2$3.eo);
    }
    var x$5 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
    if (((x$5 === null) ? (x$1$2$3 === null) : x$5.g(x$1$2$3))) {
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__creatingView__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this);
    }
    if ((x$1$2$3 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Created)) {
      var $x_1 = x$1$2$3;
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__createdView__J__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $x_1.g5, $x_1.g6);
    }
    if ((x$1$2$3 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed)) {
      return $p_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$__errorView__Lcom_github_pwharned_clausula_extension_domain_AppError__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, x$1$2$3.fi);
    }
    throw new $c_s_MatchError(x$1$2$3);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().m9, (void 0)))]));
  $m_Lcom_raquo_laminar_api_package$();
  new $c_Lcom_raquo_laminar_nodes_RootNode(container, island);
});
var $d_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$, "com.github.pwharned.clausula.extension.islands.HoverPopupIsland$", ({
  dP: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$;
function $m_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$)) {
    $n_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$ = new $c_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_islands_HoverPopupIsland$;
}
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().i(1, "com.raquo.airstream.core.InternalObserver", ({
  av: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).jG() + "@") + $thiz.j());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.cB();
  return ((x === (void 0)) ? $thiz.cu() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().p3(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))), $m_s_PartialFunction$().h7, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.p3 = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.qQ = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  dS: 1
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
$p.oH = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  dV: 1
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
  this.ew = 0;
  this.ew = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.oz = (function() {
  if ((this.ew === 2147483647)) {
    this.ew = 1;
  } else {
    this.ew = ((1 + this.ew) | 0);
  }
  return this.ew;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  dW: 1
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
  this.hN = null;
  this.kb = null;
  this.hO = 0;
  this.hN = code;
  this.kb = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().gz();
  this.hO = ((x === (void 0)) ? 1 : ((1 + x.hO) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().gO === (-1)) || (this.hO > $m_Lcom_raquo_airstream_core_Transaction$().gO))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().ck(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().gO));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().b3) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().dR.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().ja(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  dX: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.gO = 0;
  this.kc = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.gO = 1000;
  this.kc = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.nV = (function(transaction) {
  try {
    transaction.hN.c(transaction);
    var x = transaction.kb;
    if ((x !== (void 0))) {
      while (x.sI()) {
        x.sD().sM(transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().ck(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  dY: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.fv.length | 0) === 0)) {
    if ((($thiz.dR.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
        while ((($thiz.dR.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().ja($thiz.dR.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
      while ((($thiz.fv.length | 0) > 0)) {
        var callback = $thiz.fv.shift();
        try {
          callback.c(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().ck(e$2);
        }
      }
      while ((($thiz.dR.length | 0) > 0)) {
        var _trx = $thiz.dR.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().ja(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.b3 = false;
  this.fv = null;
  this.dR = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.b3 = false;
  this.fv = $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_F1.r().C)([])));
  this.dR = $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
$p.pz = (function(callback) {
  this.fv.push(callback);
});
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  dZ: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.dS.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gP.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.gP.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.dS.set(parent, newChildren);
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
      (!(!$thiz.dS.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.gP = null;
  this.dS = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.gP = $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.dS = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.ja = (function(newTransaction) {
  var x = this.gz();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().nV(newTransaction);
    this.qt(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.qt = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.gz();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().n(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.rE(transaction$tailLocal1);
    transaction$tailLocal1.hN = $m_Lcom_raquo_airstream_core_Transaction$().kc;
    var maybeNextTransaction = this.gz();
    if ($m_sr_BoxesRunTime$().n(maybeNextTransaction, (void 0))) {
      if (((this.dS.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.dS.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.e8 + (transactions.length | 0)) | 0);
          numChildren.e8 = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.e8) + " children for ") + (this.dS.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().nV(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.rE = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().n(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.gz();
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
$p.gz = (function() {
  return this.gP[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  e0: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
function $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$)) {
    $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.d3.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.d3.splice(index, 1);
    if ((!$thiz.bF.d())) {
      subscription.oC();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.gT.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.gT.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.kO = null;
  this.d3 = null;
  this.ey = false;
  this.gT = null;
  this.bF = null;
  this.ez = 0;
  this.kO = onAccessAfterKilled;
  this.d3 = $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.ey = true;
  this.gT = $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.bF = $m_s_None$();
  this.ez = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.nE = (function() {
  if ((!(!this.bF.d()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.kO);
      this.bF = new $c_s_Some(newOwner);
      this.ey = false;
      this.ez = 0;
      var i = 0;
      var originalNumSubs = (this.d3.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.ez) | 0);
        this.d3[ix].oB(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.ey = true;
      this.ez = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.b3 || (!when))) {
      f();
    } else {
      this$4.b3 = true;
      try {
        f();
      } finally {
        this$4.b3 = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.ql = (function() {
  if ((!this.bF.d())) {
    this.ey = false;
    var arr = this.d3;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].oC();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.bF;
    if ((!this$4.d())) {
      this$4.v().ow();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.ey = true;
    this.bF = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.pT = (function(subscription, prepend) {
  if (prepend) {
    this.ez = ((1 + this.ez) | 0);
    this.d3.unshift(subscription);
  } else {
    this.d3.push(subscription);
  }
  var this$1 = this.bF;
  if ((!this$1.d())) {
    var x0 = this$1.v();
    subscription.oB(x0);
  }
});
$p.rP = (function(subscription) {
  if (this.ey) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.gT.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  e7: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.gU = null;
  this.kP = null;
  this.gV = null;
  this.gU = dynamicOwner;
  this.kP = activate;
  this.gV = $m_s_None$();
  dynamicOwner.pT(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.hD = (function() {
  this.gU.rP(this);
});
$p.oB = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.gV = this.kP.c(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.b3 || (!when))) {
    f();
  } else {
    this$2.b3 = true;
    try {
      f();
    } finally {
      this$2.b3 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.oC = (function() {
  var this$1 = this.gV;
  if ((!this$1.d())) {
    this$1.v().hD();
    this.gV = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  e8: 1
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
$p.gH = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => new $c_s_Some(activate.c(owner)))), prepend);
});
$p.oR = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => {
    activate.c(owner);
    return $m_s_None$();
  })), prepend);
});
$p.sd = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gH(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  e9: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.nW($m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.fe();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.fe().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.fe().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.fe().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.fe().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.hW)) {
    $thiz.kS.K();
    $thiz.hW = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.kT = null;
  this.kS = null;
  this.hW = false;
  this.kT = owner;
  this.kS = cleanup;
  this.hW = false;
  owner.oE(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.hD = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.kT, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  eb: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.kU = null;
  this.kV = null;
  this.d4 = null;
  this.dU = false;
  this.kU = activate;
  this.kV = deactivate;
  this.d4 = $m_s_None$();
  this.dU = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.rb = (function() {
  var this$1 = this.d4;
  return ((!this$1.d()) && (!this$1.v().gU.bF.d()));
});
$p.s6 = (function(nextOwner) {
  if (this.dU) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.d4;
  if ((!this$1.d())) {
    var x0 = this$1.v();
    var x$2 = x0.gU;
    var $x_1 = ((nextOwner === null) ? (x$2 === null) : (nextOwner === x$2));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.rb() && (!nextOwner.bF.d()))) {
      this.dU = true;
    }
    var this$3 = this.d4;
    if ((!this$3.d())) {
      this$3.v().hD();
      this.d4 = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gH(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((parentOwner) => {
      if ((!this.dU)) {
        this.kU.K();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        if ((!this.dU)) {
          this.kV.K();
        }
      })));
    })), false);
    this.d4 = new $c_s_Some(newPilotSubscription);
    this.dU = false;
  }
});
$p.q8 = (function() {
  if (this.dU) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.d4;
  if ((!this$1.d())) {
    this$1.v().hD();
  }
  this.d4 = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  ec: 1
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
$p.jf = (function(initial) {
  return new $c_Lcom_raquo_airstream_state_SourceVar(new $c_s_util_Success(initial));
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$, "com.raquo.airstream.state.Var$", ({
  eg: 1
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
$p.b6 = (function(items) {
  return [...$m_sjsr_Compat$().oS(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  ej: 1
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
$p.r1 = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.qH = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  ek: 1
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
  this.l7 = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.qj($m_Lcom_raquo_laminar_api_package$().o.sf().sg());
  this.l7 = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.pU = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.P instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
  }
});
$p.rL = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.P instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
  }
});
$p.r6 = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.P instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
  }
});
$p.r5 = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.P instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
  }
});
$p.rS = (function(parent, newChild, oldChild) {
  try {
    parent.replaceChild(newChild, oldChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.P instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
  }
});
$p.rf = (function(node, ancestor) {
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
$p.pI = (function(element, listener) {
  element.addEventListener(listener.eE.gY.gZ, listener.ib, listener.ic);
});
$p.rM = (function(element, listener) {
  element.removeEventListener(listener.eE.gY.gZ, listener.ib, listener.ic);
});
$p.qi = (function(tag) {
  return document.createElement(tag.im);
});
$p.qT = (function(element, attr) {
  var x = this.qU(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.i6.jo(x));
});
$p.qU = (function(element, attr) {
  var domValue = element.ba.getAttributeNS(null, attr.fy);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.s3 = (function(element, attr, value) {
  this.s4(element, attr, attr.i6.jp(value));
});
$p.s4 = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.rN(element, attr);
  } else {
    element.ba.setAttribute(attr.fy, domValue);
  }
});
$p.rN = (function(element, attr) {
  element.ba.removeAttribute(attr.fy);
});
$p.s5 = (function(element, styleProp, value) {
  var ref = element.ba;
  var styleCssName = styleProp.dW;
  var prefixes = styleProp.dX;
  var styleValue = ((value === null) ? null : value);
  if ((styleValue === null)) {
    prefixes.b7(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.b7(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.s2 = (function(element, style, value) {
  var ref = element.ba;
  var styleCssName = style.dW;
  var prefixes = style.dX;
  var styleValue = ((value === null) ? null : $dp_toString__T(value));
  if ((styleValue === null)) {
    prefixes.b7(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.b7(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.qj = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.me);
});
$p.qW = (function(element, attr) {
  var x = this.qX(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.i7.jo(x));
});
$p.qX = (function(element, attr) {
  var $x_2 = element.jX();
  var this$1 = attr.h1;
  var $x_1 = $x_2.getAttributeNS((this$1.d() ? null : this$1.v()), attr.i8);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.s7 = (function(element, attr, value) {
  this.s8(element, attr, attr.i7.jp(value));
});
$p.s8 = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.rQ(element, attr);
  } else {
    var this$1 = attr.h1;
    if (this$1.d()) {
      element.jX().setAttribute(attr.h0, domValue);
    } else {
      var x0 = this$1.v();
      element.jX().setAttributeNS(x0, attr.h0, domValue);
    }
  }
});
$p.rQ = (function(element, attr) {
  var $x_1 = element.jX();
  var this$1 = attr.h1;
  $x_1.removeAttributeNS((this$1.d() ? null : this$1.v()), attr.i8);
});
$p.qh = (function(text) {
  return document.createComment(text);
});
$p.qk = (function(text) {
  return document.createTextNode(text);
});
$p.rc = (function(element) {
  return $m_sc_StringOps$().qb(element.tagName, 45);
});
$p.qn = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.o0(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.o0 = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if (($m_sc_StringOps$(), (id !== ""))) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = (($m_sc_StringOps$(), (classes !== "")) ? ("." + classes.replace(this.l7, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.qm = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  el: 1
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
  this.i2 = null;
  this.l8 = null;
  this.i1 = null;
  this.i2 = seq;
  this.l8 = scalaArray;
  this.i1 = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.b7 = (function(f) {
  if ((this.i2 !== null)) {
    this.i2.b7(f);
  } else if ((this.i1 !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().qH(this.i1, $m_sjs_js_Any$().hz(f));
  } else {
    $m_sc_ArrayOps$().qJ(this.l8, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  em: 1
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
  en: 1
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
  $thiz.gW = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.p5 = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    _$1.m0.ba.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.c8.bF.d()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((c) => {
      if (ignoreNextActivation.hj) {
        var ev$5 = false;
        ignoreNextActivation.hj = ev$5;
      } else {
        fn.c(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().oR(element.c8, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element$2) => ((owner) => {
      activate.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.gX = null;
  this.lP = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.gX = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.lP = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  ew: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.li = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.bh = $thiz.li;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().gX);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.fy, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().qT(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().s3(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.p4 = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().gX, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.h0, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().qW(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().s7(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.lQ = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().o.p1();
  $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().o.jT()])));
  $m_Lcom_raquo_laminar_api_package$().o.p1();
  $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().o.jT(), $m_Lcom_raquo_laminar_api_package$().o.ry()])));
  $m_Lcom_raquo_laminar_api_package$().o.q6();
  $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().o.jT(), $m_Lcom_raquo_laminar_api_package$().o.gs()])));
  this.lQ = $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  eQ: 1
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
$p.pV = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((ctx, owner, hooks) => {
    if ((!ctx.fx)) {
      ctx.od();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.sh(maybeLastSeenChild.eW, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.eW = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.sh = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.fx)) {
    ctx.od();
  }
  var elem = ctx.eA;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().n(maybeLastSeenChild.aj(), ctx.eC.aj().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().r7(ctx.eB, newChildNode, ctx.eC, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().rR(ctx.eB, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = ((elem$1 - 1) | 0);
    elem$1 = ev$4;
  }
  ctx.rO(newChildNode);
  ctx.dV.clear();
  ctx.dV.set(newChildNode.aj(), newChildNode);
  ctx.eA = 1;
});
var $d_Lcom_raquo_laminar_inserters_ChildInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildInserter$, "com.raquo.laminar.inserters.ChildInserter$", ({
  eR: 1
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
  this.eB = null;
  this.eC = null;
  this.fx = false;
  this.eA = 0;
  this.dV = null;
  this.eB = parentNode;
  this.eC = sentinelNode;
  this.fx = strictMode;
  this.eA = extraNodeCount;
  this.dV = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.od = (function() {
  if ((this.fx || (this.eA !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().qm(this.eB.ba)));
  }
  if ((this.dV === null)) {
    this.dV = new Map();
  }
  if ((!(!(!(this.eC.aj() instanceof Comment))))) {
    var contentNode = this.eC;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().r6(this.eB.ba, newSentinelNode.ie, contentNode.aj());
    this.eC = newSentinelNode;
    this.eA = 1;
    this.dV.set(contentNode.aj(), contentNode);
  }
  this.fx = true;
});
$p.rO = (function(after) {
  var elem = this.eA;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = after.aj().nextSibling;
    if ((prevChildRef === null)) {
      var ev$3 = 0;
      elem$1 = ev$3;
    } else {
      var maybePrevChild = this.dV.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        var ev$4 = 0;
        elem$1 = ev$4;
      } else if ((maybePrevChild !== (void 0))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().rK(this.eB, maybePrevChild);
        var ev$5 = ((elem$1 - 1) | 0);
        elem$1 = ev$5;
      }
    }
  }
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  eU: 1
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
$p.rU = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().g7(parentNode, sentinelNode, hooks);
  return this.ss(parentNode, sentinelNode, strictMode);
});
$p.ss = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  eV: 1
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
$p.oA = (function(items, separator) {
  if ((items === "")) {
    return $m_sci_Nil$();
  } else {
    var this$10 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => {
      $m_sc_StringOps$();
      return (_$1 !== "");
    })));
    $m_sci_List$();
    return $m_sci_Nil$().jW(this$10);
  }
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  eY: 1
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
  this.gY = null;
  this.lZ = false;
  this.lY = false;
  this.lX = null;
  this.gY = eventProp;
  this.lZ = shouldUseCapture;
  this.lY = shouldBePassive;
  this.lX = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  f2: 1
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
$p.hy = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  f3: 1
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
  this.p7 = null;
  this.p8 = null;
  this.p9 = null;
  this.pa = null;
  this.p7 = "http://www.w3.org/2000/svg";
  this.p8 = "http://www.w3.org/1999/xlink";
  this.p9 = "http://www.w3.org/XML/1998/namespace";
  this.pa = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.rr = (function(namespace) {
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
  f7: 1
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
  this.m0 = null;
  this.i9 = null;
  this.m0 = thisNode;
  this.i9 = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  f8: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.pb = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.pb = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  fd: 1
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
  this.m9 = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.m9 = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  fh: 1
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
  this.bt = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.bt = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => _$4.sk())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  fm: 1
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
$p.g7 = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.em(nextParent);
  if ((hooks !== (void 0))) {
    hooks.oD(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().pU(parent.aj(), child.aj());
  if (appended) {
    child.eh(nextParent);
  }
  return appended;
});
$p.rK = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().n(child.aj().parentNode, parent.aj())) {
    child.em($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().rL(parent.aj(), child.aj());
    child.eh($m_s_None$());
  }
  return removed;
});
$p.r7 = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.em(nextParent);
  if ((hooks !== (void 0))) {
    hooks.oD(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().r5(parent.aj(), newChild.aj(), referenceChild.aj());
  newChild.eh(nextParent);
  return inserted;
});
$p.rR = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.jj().bn(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.em($m_s_None$());
      newChild.em(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.oD(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().rS(parent.aj(), newChild.aj(), oldChild.aj());
      if (replaced) {
        oldChild.eh($m_s_None$());
        newChild.eh(newChildNextParent);
      }
    }
  }
  return replaced;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  fp: 1
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
$p.sr = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gH(element.c8, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  fr: 1
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
  fv: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
}
var $d_jl_Runnable = new $TypeData().i(1, "java.lang.Runnable", ({
  aX: 1
}));
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().cj("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
  var PatBC = $m_jl_StackTrace$StringRE$().cj("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().cj("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().cj("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().cj("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().cj("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().eK.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.bS) << 24) >> 24) === 0)) {
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
    $thiz.ir = dict;
    $thiz.bS = (((1 | $thiz.bS) << 24) >> 24);
  }
  return $thiz.ir;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.bS) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.ir);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.bS) << 24) >> 24) === 0)) {
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
    $thiz.is = dict;
    $thiz.bS = (((2 | $thiz.bS) << 24) >> 24);
  }
  return $thiz.is;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.bS) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.is);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.bS) << 24) >> 24) === 0)) {
    $thiz.iq = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.bS = (((4 | $thiz.bS) << 24) >> 24);
  }
  return $thiz.iq;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.bS) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.iq);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().cj("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().bE("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().bE("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().bE("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().bE("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bE("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().bE("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().bE("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().bE("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().bE("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bE("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bE("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bE("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bE("Line (\\d+).*script (?:in )?(\\S+)", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().bE("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cj("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cj("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().cj("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().cj("<anonymous function>"), "{anonymous}");
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
  this.ir = null;
  this.is = null;
  this.iq = null;
  this.bS = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.qA = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  fW: 1
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
$p.cj = (function(this$) {
  return new RegExp(this$);
});
$p.bE = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  fX: 1
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
  this.eJ = null;
  $n_jl_System$Streams$ = this;
  this.eJ = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  g1: 1
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
  this.it = null;
  this.mg = null;
  $n_jl_System$SystemProperties$ = this;
  this.it = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.mg = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.jF = (function(key, default$1) {
  if ((this.it !== null)) {
    var dict = this.it;
    return ((!(!$m_jl_Utils$Cache$().eK.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.mg.jF(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  g2: 1
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
  this.iu = false;
  this.mh = null;
  this.iu = false;
}
$p = $c_jl_ThreadLocal.prototype = new $h_O();
$p.constructor = $c_jl_ThreadLocal;
/** @constructor */
function $h_jl_ThreadLocal() {
}
$h_jl_ThreadLocal.prototype = $p;
$p.v = (function() {
  if ((!this.iu)) {
    this.gF(null);
  }
  return this.mh;
});
$p.gF = (function(o) {
  this.mh = o;
  this.iu = true;
});
var $d_jl_ThreadLocal = new $TypeData().i($c_jl_ThreadLocal, "java.lang.ThreadLocal", ({
  g4: 1
}));
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.eK = null;
  $n_jl_Utils$Cache$ = this;
  this.eK = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  g6: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c2)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  c2: 1
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
$p.bo = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? ((array.a.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  g7: 1
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
$p.q2 = (function(a, key) {
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
$p.o8 = (function(a, b) {
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
$p.jr = (function(a, b) {
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
$p.o9 = (function(a, b) {
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
$p.o7 = (function(a, b) {
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
$p.o6 = (function(a, b) {
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
$p.oa = (function(a, b) {
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
$p.T = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).ak.Q().ak.U(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.a2 = (function(original, from, to) {
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
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  g8: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.aw, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().mw.exec($thiz.aw);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var end = x.length;
      var i = 0;
      while ((i < end)) {
        var value = i;
        $thiz.N = ($thiz.N | $m_ju_regex_PatternCompiler$().ou(x.charCodeAt(value)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.N) !== 0)) {
      $thiz.N = (64 | $thiz.N);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var end$1 = x$1.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var value$1 = i$1;
        $thiz.N = ($thiz.N & (~$m_ju_regex_PatternCompiler$().ou(x$1.charCodeAt(value$1))));
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
  var s = $m_ju_regex_PatternCompiler$().ec(cp);
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
        return (((66 & $thiz.N) !== 2) ? s : (((((cp - 65) | 0) >>> 0) <= 25) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().ec(((32 + cp) | 0))) + "]") : (((((cp - 97) | 0) >>> 0) <= 25) ? ((("[" + $m_ju_regex_PatternCompiler$().ec(((cp - 32) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.aw;
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
          $thiz.jL();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.aw;
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
  var pattern = $thiz.aw;
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
  var end = ($thiz.bH.length | 0);
  var i = 0;
  while ((i < end)) {
    var value = i;
    var mapped = ($thiz.bH[value] | 0);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.bH[value] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = compiledToken.replace($m_ju_regex_PatternCompiler$().mx, ((arg1$2, arg2$2, arg3$2) => {
    var num = arg2$2.length;
    var t = ((num >>> 31) | 0);
    if (((((1 & ((num + t) | 0)) - t) | 0) === 0)) {
      return arg1$2;
    } else {
      var groupNumber = (parseInt(arg3$2, 10) | 0);
      return ((groupNumber > compiledGroupCountBeforeThisToken) ? (("" + arg2$2) + ((1 + groupNumber) | 0)) : arg1$2);
    }
  }));
  $thiz.bG = ((1 + $thiz.bG) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.aw;
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
      var x1$2 = cls.h4;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + cls.cm) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + cls.cm) + "}");
          break;
        }
        case 2: {
          return (("[" + cls.cm) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().hC(cls.cm);
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
      } else if (((320 & $thiz.N) !== 0)) {
        $thiz.f6("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.N) !== 0)) {
        $thiz.f6("\\B with UNICODE_CASE", "2018");
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
      return (("(?=" + (((1 & $thiz.N) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])")) + "?$)");
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
          var $x_1 = ((parseInt(s, 10) | 0) <= ((($thiz.bH.length | 0) - 1) | 0));
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
      if ((groupNumber > ((($thiz.bH.length | 0) - 1) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = ($thiz.bH[groupNumber] | 0);
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
      var dict = $thiz.fE;
      if ((!(!(!$m_jl_Utils$Cache$().eK.call(dict, groupName))))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = (dict[groupName] | 0);
      var compiledGroupNumber$2 = ($thiz.bH[groupNumber$2] | 0);
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
  var pattern = $thiz.aw;
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
  var pattern = $thiz.aw;
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
  var pattern = $thiz.aw;
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
  var pattern = $thiz.aw;
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
  var pattern = $thiz.aw;
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
      var positive = $m_ju_regex_PatternCompiler$().mr;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().mu;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().ms;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().mv;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().mt;
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
  return ((dispatchChar >= 97) ? positive : positive.rs());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.aw;
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
  var dict = $m_ju_regex_PatternCompiler$().iz;
  if ((!(!(!$m_jl_Utils$Cache$().eK.call(dict, property))))) {
    $thiz.f6("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.N) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().iz;
  var result = dict$1[property2];
  $thiz.b = ((1 + $thiz.b) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.aw;
  var len = pattern.length;
  $thiz.b = ((1 + $thiz.b) | 0);
  var isNegated = (($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 94));
  if (isNegated) {
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.N) === 2), isNegated);
  while (($thiz.b !== len)) {
    var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return builder.qG();
          break;
        }
        case 38: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if ((($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 38))) {
            $thiz.b = ((1 + $thiz.b) | 0);
            builder.sb();
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
              builder.pF($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
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
              builder.pH(pattern, $thiz.b, end);
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
          if (((4 & $thiz.N) !== 0)) {
            $thiz.b = ((1 + $thiz.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & $thiz.N) !== 0)) {
            $thiz.jL();
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
  var pattern = $thiz.aw;
  var len = pattern.length;
  var start = $thiz.b;
  if (((((1 + start) | 0) === len) || (pattern.charCodeAt(((1 + start) | 0)) !== 63))) {
    $thiz.b = ((1 + start) | 0);
    $thiz.bG = ((1 + $thiz.bG) | 0);
    $thiz.bH.push($thiz.bG);
    return (("(" + $thiz.gp(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var index$1 = ((2 + start) | 0);
    var c1 = pattern.charCodeAt(index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.b = ((3 + start) | 0);
      return ((("" + pattern.substring(start, ((3 + start) | 0))) + $thiz.gp(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var index$2 = ((3 + start) | 0);
      var c2 = pattern.charCodeAt(index$2);
      if ((((((c2 - 65) | 0) >>> 0) <= 25) || ((((c2 - 97) | 0) >>> 0) <= 25))) {
        $thiz.b = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.fE;
        if ((!(!$m_jl_Utils$Cache$().eK.call(dict, name)))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.bG = ((1 + $thiz.bG) | 0);
        $thiz.bH.push($thiz.bG);
        var dict$1 = $thiz.fE;
        var value = ((($thiz.bH.length | 0) - 1) | 0);
        dict$1[name] = value;
        $thiz.b = ((1 + $thiz.b) | 0);
        return (("(" + $thiz.gp(true)) + ")");
      } else {
        if (((c2 !== 33) && (c2 !== 61))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.f6("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.b = ((3 + start) | 0);
      $thiz.bG = ((1 + $thiz.bG) | 0);
      var groupNumber = $thiz.bG;
      return (((("(?:(?=(" + $thiz.gp(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.aw;
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
  if (((4 & $thiz.N) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if ((($thiz.b !== len$2) && (pattern$3.charCodeAt($thiz.b) === 45))) {
    $thiz.b = ((1 + $thiz.b) | 0);
    if (((4 & $thiz.N) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.b === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I(pattern$3, $thiz.b);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      builder$1.hq(startCodePoint);
      builder$1.hq(45);
    } else {
      $thiz.b = (($thiz.b + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      builder$1.pG(startCodePoint, endCodePoint);
    }
  } else {
    builder$1.hq(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.aw = null;
  this.N = 0;
  this.h3 = false;
  this.b = 0;
  this.bG = 0;
  this.bH = null;
  this.fE = null;
  this.aw = pattern;
  this.N = flags;
  this.h3 = false;
  this.b = 0;
  this.bG = 0;
  this.bH = [0];
  this.fE = ({});
}
$p = $c_ju_regex_PatternCompiler.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $p;
$p.qa = (function() {
  if (((256 & this.N) !== 0)) {
    this.N = (64 | this.N);
  }
  var isLiteral = ((16 & this.N) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.N) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.N) !== 0)) {
    this.f6("MULTILINE", "2018");
  }
  if (((256 & this.N) !== 0)) {
    this.f6("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.aw);
  } else {
    if ((this.aw.substring(this.b, ((2 + this.b) | 0)) === "\\G")) {
      this.h3 = true;
      this.b = ((2 + this.b) | 0);
    }
    var jsPattern = this.gp(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().iy ? "us" : "u");
  var jsFlags = (((66 & this.N) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.aw, this.N, jsPattern, jsFlags, this.h3, (((this.bH.length | 0) - 1) | 0), this.bH, this.fE);
});
$p.f6 = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$p.gp = (function(insideGroup) {
  var pattern = this.aw;
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
          if ((this.h3 && (!insideGroup))) {
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
          if (((4 & this.N) !== 0)) {
            this.b = ((1 + this.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & this.N) !== 0)) {
            this.jL();
            break matchResult;
          }
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().ec(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.bG;
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
          var rejected = (((32 & this.N) !== 0) ? "" : (((1 & this.N) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().hC(rejected);
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
$p.jL = (function() {
  var pattern = this.aw;
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
  gf: 1
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
  this.mw = null;
  this.mx = null;
  this.pg = false;
  this.pf = false;
  this.iy = false;
  this.mr = null;
  this.pc = null;
  this.mu = null;
  this.ms = null;
  this.pd = null;
  this.mv = null;
  this.mt = null;
  this.pe = null;
  this.iz = null;
  this.ph = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.mw = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.mx = new RegExp("(\\\\+)(\\d+)", "g");
  this.pg = true;
  this.pf = true;
  this.iy = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.mr = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.pc = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.mu = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.ms = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.pd = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.mv = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.mt = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.pe = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
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
  this.iz = r;
  this.ph = new RegExp("(?:^|_)[a-z]", "g");
}
$p = $c_ju_regex_PatternCompiler$.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $p;
$p.q9 = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).qa();
});
$p.ou = (function(c) {
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
$p.hC = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().iy ? "." : "[\\d\\D]"));
});
$p.ec = (function(codePoint) {
  return String.fromCodePoint(codePoint);
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().i($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  gg: 1
}));
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
  }
  return $n_ju_regex_PatternCompiler$;
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.bT === "")) {
    $thiz.bT = alt;
  } else {
    $thiz.bT = (($thiz.bT + "|") + alt);
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.iB) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().hC($thiz.Q);
    return (($thiz.bT === "") ? negThisSegment : (((("(?:(?!" + $thiz.bT) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.Q === "") ? (($thiz.bT === "") ? "[^\\d\\D]" : (("(?:" + $thiz.bT) + ")")) : (($thiz.bT === "") ? (("[" + $thiz.Q) + "]") : (((("(?:" + $thiz.bT) + "|[") + $thiz.Q) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().ec(codePoint);
  return (((((((codePoint - 92) | 0) >>> 0) <= 1) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.iA = false;
  this.iB = false;
  this.fF = null;
  this.bT = null;
  this.Q = null;
  this.iA = asciiCaseInsensitive;
  this.iB = isNegated;
  this.fF = "";
  this.bT = "";
  this.Q = "";
}
$p = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $p;
$p.qG = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.fF === "") ? conjunct : ((("(?:" + this.fF) + conjunct) + ")"));
});
$p.sb = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.fF = (this.fF + (this.iB ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.bT = "";
  this.Q = "";
});
$p.pF = (function(cls) {
  var x1 = cls.h4;
  switch (x1) {
    case 0: {
      this.Q = ((this.Q + ("\\p{" + cls.cm)) + "}");
      break;
    }
    case 1: {
      this.Q = ((this.Q + ("\\P{" + cls.cm)) + "}");
      break;
    }
    case 2: {
      this.Q = (("" + this.Q) + cls.cm);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().hC(cls.cm));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$p.pH = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I(str, i);
    this.hq(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$p.hq = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.Q = (("" + s) + this.Q);
  } else {
    this.Q = (("" + this.Q) + s);
  }
  if (this.iA) {
    if (((((codePoint - 65) | 0) >>> 0) <= 25)) {
      this.Q = (("" + this.Q) + $m_ju_regex_PatternCompiler$().ec(((32 + codePoint) | 0)));
    } else if (((((codePoint - 97) | 0) >>> 0) <= 25)) {
      this.Q = (("" + this.Q) + $m_ju_regex_PatternCompiler$().ec(((codePoint - 32) | 0)));
    }
  }
});
$p.pG = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.Q = (s + this.Q);
  } else {
    this.Q = (this.Q + s);
  }
  if (this.iA) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.Q;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.Q = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
    }
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.Q;
      var start$3 = ((start$2 - 32) | 0);
      var end$3 = ((end$2 - 32) | 0);
      this.Q = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().i($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
  gh: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.iC)) {
    $thiz.iD = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.h4), $thiz.cm);
    $thiz.iC = true;
  }
  return $thiz.iD;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.iD = null;
  this.h4 = 0;
  this.cm = null;
  this.iC = false;
  this.h4 = kind;
  this.cm = data;
}
$p = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $p;
$p.rs = (function() {
  return ((!this.iC) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.iD);
});
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().i($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  gi: 1
}));
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rJ(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rI(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().qs(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().qr(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().jC(value);
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
  return $m_RTLong$().oU(lo, hi);
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
$p.oU = (function(lo, hi) {
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
$p.jC = (function(value) {
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
$p.qr = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.hF(rlo, rhi, rlo$1, rhi$1, true);
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
$p.qs = (function(alo, ahi, blo, bhi) {
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
    return this.hF(alo, ahi, blo, bhi, true);
  }
});
$p.rI = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.hF(rlo, rhi, rlo$1, rhi$1, false);
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
$p.rJ = (function(alo, ahi, blo, bhi) {
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
    return this.hF(alo, ahi, blo, bhi, false);
  }
});
$p.hF = (function(alo, ahi, blo, bhi, askQuotient) {
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
  gk: 1
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
  this.h5 = null;
  $n_s_$less$colon$less$ = this;
  this.h5 = new $c_s_$less$colon$less$$anon$1();
}
$p = $c_s_$less$colon$less$.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $p;
var $d_s_$less$colon$less$ = new $TypeData().i($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  gn: 1
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
    $m_sr_ScalaRunTime$().hu(dest, j, $m_sr_ScalaRunTime$().dG(src, i));
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
$p.oe = (function(it, evidence$1) {
  var n = it.w();
  if ((n > (-1))) {
    var elements = evidence$1.bp(n);
    var iterator = it.m();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().hu(elements, i, iterator.l());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.aI();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.m();
    while (iterator$2.p()) {
      var elem = iterator$2.l();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().gC(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().gB(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
});
$p.gk = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.ak.Z && $objectGetClass(dest).ak.R(srcClass.ak))) {
    src.s(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.ob = (function(xs, ys) {
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
  gp: 1
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
  this.iE = null;
  this.mB = null;
  $n_s_Array$EmptyArrays$ = this;
  this.iE = new $ac_I(0);
  this.mB = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  gq: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  b0: 1
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
$p.jg = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  gw: 1
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
  this.h8 = null;
  this.h7 = null;
  $n_s_PartialFunction$ = this;
  this.h8 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => this.h8));
  this.h7 = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
$p.rZ = (function(x) {
  return (this.h8 === x);
});
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  gx: 1
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
  this.mH = null;
  $n_sc_ArrayOps$ = this;
  this.mH = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $m_sc_ArrayOps$().mH));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.sy = (function(this$) {
  var b = new ($d_T2.r().C)($m_jl_reflect_Array$().bo(this$));
  var i = 0;
  while ((i < $m_jl_reflect_Array$().bo(this$))) {
    b.a[i] = $ct_T2__O__O__(new $c_T2(), $m_sr_ScalaRunTime$().dG(this$, i), i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.qJ = (function(this$, f) {
  var len = $m_jl_reflect_Array$().bo(this$);
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
  gG: 1
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
$p.ch = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  gK: 1
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
  var x30 = $thiz.w();
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
    var x31 = $thiz.w();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().bo(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().bo(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.p())) {
    $m_sr_ScalaRunTime$().hu(dest, i, it.l());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.w() === 0) ? (("" + start) + end) : $thiz.dE($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).aT.r);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.aT;
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
  if (($thiz.w() >= 0)) {
    var length = $thiz.w();
    var destination = evidence$1.bp(length);
    $thiz.bO(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.aI();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.m();
    while (it.p()) {
      var elem = it.l();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().gC(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().gB(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.mN = null;
  this.fK = null;
  this.mN = head;
  this.fK = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.r0 = (function() {
  return this.mN.K().m();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  gT: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.mQ = null;
  $n_sc_StringOps$ = this;
  this.mQ = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.mQ));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.qb = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.sa = (function(this$, from, until) {
  var start = ((from > 0) ? from : 0);
  var that = this$.length;
  var end = ((until < that) ? until : that);
  return ((start >= end) ? "" : this$.substring(start, end));
});
$p.sj = (function(this$, n) {
  var y = this$.length;
  return this.sa(this$, 0, ((n < y) ? n : y));
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  h0: 1
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
$p.jI = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  h4: 1
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
  this.mV = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().os($m_jl_System$SystemProperties$().jF("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.mV = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  hc: 1
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
  hf: 1
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
  this.iQ = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.js = (function() {
  var state = this.iQ;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return state.K();
});
$p.jJ = (function(state) {
  if ((this.iQ !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.iQ = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  hh: 1
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
  hj: 1
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
  this.mY = null;
  $n_sci_MapNode$ = this;
  $m_s_reflect_ManifestFactory$IntManifest$();
  this.mY = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  hy: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (($m_jl_reflect_Array$().bo(as) - 1) | 0)));
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
$p.oG = (function(as, ix) {
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
$p.r8 = (function(as, ix, elem) {
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
  bb: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.fS = 0;
  $n_sci_Node$ = this;
  this.fS = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.ed = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.dI = (function(mask) {
  return (1 << mask);
});
$p.r2 = (function(bitmap, bitpos) {
  return $m_jl_Integer$().dH((bitmap & ((bitpos - 1) | 0)));
});
$p.cy = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.r2(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  hB: 1
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
  this.iU = null;
  this.bm = null;
  this.cs = null;
  this.eR = null;
  this.iV = null;
  this.n2 = null;
  $n_sci_VectorStatics$ = this;
  this.iU = new $ac_O(0);
  this.bm = new ($d_O.r().r().C)(0);
  this.cs = new ($d_O.r().r().r().C)(0);
  this.eR = new ($d_O.r().r().r().r().C)(0);
  this.iV = new ($d_O.r().r().r().r().r().C)(0);
  this.n2 = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.eZ = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.s(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.D = (function(a, elem) {
  var ac = $m_ju_Arrays$().T(a, ((1 + a.a.length) | 0));
  ac.a[((ac.a.length - 1) | 0)] = elem;
  return ac;
});
$p.ct = (function(elem, a) {
  var ac = $objectGetClass(a).ak.Q().ak.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.s(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.jw = (function(level, a, f) {
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
      this.jw(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  hS: 1
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
$p.gC = (function(runtimeClass) {
  return ((runtimeClass === $d_B.l()) ? 0 : ((runtimeClass === $d_S.l()) ? 0 : ((runtimeClass === $d_C.l()) ? 0 : ((runtimeClass === $d_I.l()) ? 0 : ((runtimeClass === $d_J.l()) ? $bL(0, 0) : ((runtimeClass === $d_F.l()) ? 0.0 : ((runtimeClass === $d_D.l()) ? 0.0 : ((runtimeClass === $d_Z.l()) ? false : ((runtimeClass === $d_V.l()) ? (void 0) : null)))))))));
});
$p.gB = (function(runtimeClass, a) {
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
      $m_sr_ScalaRunTime$().hu(result$2, i$2, a[i$2]);
      i$2 = ((1 + i$2) | 0);
    }
    return result$2;
  }
});
var $d_scm_ArrayBuilder$ = new $TypeData().i($c_scm_ArrayBuilder$, "scala.collection.mutable.ArrayBuilder$", ({
  hZ: 1
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
  this.eU = null;
  this.cT = 0;
  this.aS = null;
  this.eU = _key;
  this.cT = _hash;
  this.aS = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.qF = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.cT) && $m_sr_BoxesRunTime$().n(k, \u03b4this$tailLocal1.eU))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.aS === null) || (\u03b4this$tailLocal1.cT > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.aS;
    }
  }
});
$p.h = (function() {
  return ((((("Node(" + this.eU) + ", ") + this.cT) + ") -> ") + this.aS);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  ib: 1
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
$p.nU = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  ii: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
function $ct_s_concurrent_BatchingExecutor$AbstractBatch__jl_Runnable__Ajl_Runnable__I__($thiz, first, other, size) {
  $thiz.fX = first;
  $thiz.fY = other;
  $thiz.dz = size;
  return $thiz;
}
function $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable($thiz, curSize) {
  var curOther = $thiz.fY;
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
    $thiz.fY = newOther;
    return newOther;
  }
}
/** @constructor */
function $c_s_concurrent_BatchingExecutor$AbstractBatch() {
  this.fX = null;
  this.fY = null;
  this.dz = 0;
}
$p = $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutor$AbstractBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$AbstractBatch() {
}
$h_s_concurrent_BatchingExecutor$AbstractBatch.prototype = $p;
$p.rD = (function(r) {
  var sz = this.dz;
  if ((sz === 0)) {
    this.fX = r;
  } else {
    $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable(this, sz).a[((sz - 1) | 0)] = r;
  }
  this.dz = ((1 + sz) | 0);
});
$p.rY = (function(n) {
  var n$tailLocal1 = n;
  while (true) {
    if ((n$tailLocal1 > 0)) {
      var x1 = this.dz;
      if ((x1 === 0)) {
        return (void 0);
      }
      if ((x1 === 1)) {
        var x$proxy1 = this.fX;
        if ((x$proxy1 === null)) {
          $m_sr_Scala3RunTime$().bq();
        }
        this.fX = null;
        this.dz = 0;
        x$proxy1.eg();
        n$tailLocal1 = ((n$tailLocal1 - 1) | 0);
        continue;
      }
      var o = this.fY;
      var x$proxy2 = o.a[((x1 - 2) | 0)];
      if ((x$proxy2 === null)) {
        $m_sr_Scala3RunTime$().bq();
      }
      o.a[((x1 - 2) | 0)] = null;
      this.dz = ((x1 - 1) | 0);
      x$proxy2.eg();
      n$tailLocal1 = ((n$tailLocal1 - 1) | 0);
    } else {
      return (void 0);
    }
  }
});
/** @constructor */
function $c_s_concurrent_BatchingExecutorStatics$() {
  this.ne = null;
  $n_s_concurrent_BatchingExecutorStatics$ = this;
  this.ne = new ($d_jl_Runnable.r().C)(0);
}
$p = $c_s_concurrent_BatchingExecutorStatics$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutorStatics$;
/** @constructor */
function $h_s_concurrent_BatchingExecutorStatics$() {
}
$h_s_concurrent_BatchingExecutorStatics$.prototype = $p;
var $d_s_concurrent_BatchingExecutorStatics$ = new $TypeData().i($c_s_concurrent_BatchingExecutorStatics$, "scala.concurrent.BatchingExecutorStatics$", ({
  iq: 1
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
  this.nf = null;
  this.ng = false;
  this.eV = null;
  $n_s_concurrent_ExecutionContext$ = this;
  this.eV = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$3) => {
    _$1$3.gA($m_jl_System$Streams$().eJ);
  }));
}
$p = $c_s_concurrent_ExecutionContext$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$() {
}
$h_s_concurrent_ExecutionContext$.prototype = $p;
$p.c7 = (function() {
  if ((!this.ng)) {
    this.nf = $m_sjs_concurrent_JSExecutionContext$().ns;
    this.ng = true;
  }
  return this.nf;
});
var $d_s_concurrent_ExecutionContext$ = new $TypeData().i($c_s_concurrent_ExecutionContext$, "scala.concurrent.ExecutionContext$", ({
  ir: 1
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
  this.ni = null;
  this.nk = null;
  this.nj = null;
  this.j4 = null;
  this.nl = null;
  this.nm = null;
  $n_s_concurrent_Future$ = this;
  $m_sci_Map$().oh(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $d_Z.l(), $d_jl_Boolean.l()), $ct_T2__O__O__(new $c_T2(), $d_B.l(), $d_jl_Byte.l()), $ct_T2__O__O__(new $c_T2(), $d_C.l(), $d_jl_Character.l()), $ct_T2__O__O__(new $c_T2(), $d_S.l(), $d_jl_Short.l()), $ct_T2__O__O__(new $c_T2(), $d_I.l(), $d_jl_Integer.l()), $ct_T2__O__O__(new $c_T2(), $d_J.l(), $d_jl_Long.l()), $ct_T2__O__O__(new $c_T2(), $d_F.l(), $d_jl_Float.l()), $ct_T2__O__O__(new $c_T2(), $d_D.l(), $d_jl_Double.l()), $ct_T2__O__O__(new $c_T2(), $d_V.l(), $d_jl_Void.l())]));
  this.ni = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2) => {
    throw new $c_s_concurrent_Future$$anon$1(t$2);
  }));
  this.nk = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$2());
  this.nj = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$3());
  $m_s_concurrent_Future$().ol(this.nj);
  this.j4 = $m_s_concurrent_Future$().qC(new $c_s_concurrent_Future$$anon$4());
  this.nl = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2$1) => this.j4));
  this.nm = this.ol(new $c_s_util_Success((void 0)));
}
$p = $c_s_concurrent_Future$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Future$;
/** @constructor */
function $h_s_concurrent_Future$() {
}
$h_s_concurrent_Future$.prototype = $p;
$p.qC = (function(exception) {
  return $m_s_concurrent_Promise$().qD(exception);
});
$p.ol = (function(result) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result);
});
$p.nR = (function(body, executor) {
  return this.nm.f7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$4$2) => body.K())), executor);
});
var $d_s_concurrent_Future$ = new $TypeData().i($c_s_concurrent_Future$, "scala.concurrent.Future$", ({
  it: 1
}));
var $n_s_concurrent_Future$;
function $m_s_concurrent_Future$() {
  if ((!$n_s_concurrent_Future$)) {
    $n_s_concurrent_Future$ = new $c_s_concurrent_Future$();
  }
  return $n_s_concurrent_Future$;
}
function $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result) {
  if ($thiz.so(result)) {
    return $thiz;
  } else {
    throw new $c_jl_IllegalStateException("Promise already completed.");
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
$p.qD = (function(exception) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), new $c_s_util_Failure(exception));
});
var $d_s_concurrent_Promise$ = new $TypeData().i($c_s_concurrent_Promise$, "scala.concurrent.Promise$", ({
  iy: 1
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
  this.fZ = null;
  $n_s_concurrent_impl_Promise$ = this;
  this.fZ = $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 0, null, $m_s_concurrent_ExecutionContext$parasitic$());
}
$p = $c_s_concurrent_impl_Promise$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_impl_Promise$;
/** @constructor */
function $h_s_concurrent_impl_Promise$() {
}
$h_s_concurrent_impl_Promise$.prototype = $p;
$p.gD = (function(value) {
  if ((value instanceof $c_s_util_Success)) {
    return value;
  } else {
    var t = value.cW;
    return (((false || false) || (t instanceof $c_jl_Error)) ? (false ? new $c_s_util_Success(t.p2()) : new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Exception", t))) : value);
  }
});
var $d_s_concurrent_impl_Promise$ = new $TypeData().i($c_s_concurrent_impl_Promise$, "scala.concurrent.impl.Promise$", ({
  iz: 1
}));
var $n_s_concurrent_impl_Promise$;
function $m_s_concurrent_impl_Promise$() {
  if ((!$n_s_concurrent_impl_Promise$)) {
    $n_s_concurrent_impl_Promise$ = new $c_s_concurrent_impl_Promise$();
  }
  return $n_s_concurrent_impl_Promise$;
}
function $is_s_concurrent_impl_Promise$Callbacks(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aM)));
}
function $isArrayOf_s_concurrent_impl_Promise$Callbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aM)));
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.pn = null;
  this.pw = null;
  this.po = null;
  this.pr = null;
  this.ps = null;
  this.pq = null;
  this.pp = null;
  this.pm = null;
  this.px = null;
  this.pl = null;
  this.pv = null;
  this.pt = null;
  this.pu = null;
  $n_s_reflect_ClassTag$ = this;
  this.pn = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.pw = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.po = $m_s_reflect_ManifestFactory$CharManifest$();
  this.pr = $m_s_reflect_ManifestFactory$IntManifest$();
  this.ps = $m_s_reflect_ManifestFactory$LongManifest$();
  this.pq = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.pp = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.pm = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.px = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.pl = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.pv = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.pt = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.pu = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.nP = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  iB: 1
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
  return ((x === y) || ($is_jl_Number(x) ? this.qz(x, y) : ((x instanceof $Char) ? this.qx(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.qz = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.qy(xn, y);
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
$p.qy = (function(xn, yn) {
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
$p.qx = (function(xc, y) {
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
  j4: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  j8: 1
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
$p.bq = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  ja: 1
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
$p.dG = (function(xs, idx) {
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
$p.hu = (function(xs, idx, value) {
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
$p.c3 = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.U(), (x.A() + "("), ",", ")");
});
$p.b2 = (function(xs) {
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
  jb: 1
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
$p.x = (function(hash, data) {
  var h = this.d1(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.d1 = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.au = (function(hash, length) {
  return this.q1((hash ^ length));
});
$p.q1 = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.rk = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.qu = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().jC(dv);
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
$p.J = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.qu((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.rk($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.r9 = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  jd: 1
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
  je: 1
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
  this.ns = null;
  $n_sjs_concurrent_JSExecutionContext$ = this;
  this.ns = $m_sjs_concurrent_QueueExecutionContext$().pX();
}
$p = $c_sjs_concurrent_JSExecutionContext$.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_JSExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_JSExecutionContext$() {
}
$h_sjs_concurrent_JSExecutionContext$.prototype = $p;
var $d_sjs_concurrent_JSExecutionContext$ = new $TypeData().i($c_sjs_concurrent_JSExecutionContext$, "scala.scalajs.concurrent.JSExecutionContext$", ({
  jf: 1
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
$p.pX = (function() {
  return (((typeof Promise) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext());
});
var $d_sjs_concurrent_QueueExecutionContext$ = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$, "scala.scalajs.concurrent.QueueExecutionContext$", ({
  jg: 1
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
$p.k0 = (function(this$) {
  var p2 = $ct_s_concurrent_impl_Promise$DefaultPromise__(new $c_s_concurrent_impl_Promise$DefaultPromise());
  this$.then(((arg1$2) => {
    $f_s_concurrent_Promise__success__O__s_concurrent_Promise(p2, arg1$2);
  }), $m_sjs_js_defined$().nQ(((arg1$2$1) => {
    $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(p2, ((arg1$2$1 instanceof $c_jl_Throwable) ? arg1$2$1 : new $c_sjs_js_JavaScriptException(arg1$2$1)));
  })));
  return p2;
});
var $d_sjs_js_Thenable$ThenableOps$ = new $TypeData().i($c_sjs_js_Thenable$ThenableOps$, "scala.scalajs.js.Thenable$ThenableOps$", ({
  jm: 1
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
$p.nQ = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  jp: 1
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
$p.s9 = (function(interval, body) {
  return setTimeout((() => {
    body.K();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  jq: 1
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
$p.oS = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.hk;
  } else {
    var result = [];
    seq.b7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  jz: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
function $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable($thiz) {
  return ($m_s_util_control_NoStackTrace$().ny ? $c_jl_Throwable.prototype.f0.call($thiz) : $thiz);
}
/** @constructor */
function $c_s_util_control_NoStackTrace$() {
  this.ny = false;
  this.ny = false;
}
$p = $c_s_util_control_NoStackTrace$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NoStackTrace$;
/** @constructor */
function $h_s_util_control_NoStackTrace$() {
}
$h_s_util_control_NoStackTrace$.prototype = $p;
var $d_s_util_control_NoStackTrace$ = new $TypeData().i($c_s_util_control_NoStackTrace$, "scala.util.control.NoStackTrace$", ({
  jC: 1
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
$p.hs = (function(t) {
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
$p.ff = (function(t) {
  return (this.hs(t) ? new $c_s_Some(t) : $m_s_None$());
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  jD: 1
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
$p.x = (function(hash, data) {
  var h = this.d1(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.d1 = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.au = (function(hash, length) {
  return this.gE((hash ^ length));
});
$p.gE = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.oW = (function(x, y, seed) {
  var h = seed;
  h = this.x(h, $f_T__hashCode__I("Tuple2"));
  h = this.x(h, x);
  h = this.x(h, y);
  return this.au(h, 2);
});
$p.bR = (function(x, seed, ignorePrefix) {
  var arr = x.y();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.A()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.x(h, $f_T__hashCode__I(x.A()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.x(h, $m_sr_Statics$().J(x.z(i)));
      i = ((1 + i) | 0);
    }
    return this.au(h, arr);
  }
});
$p.ji = (function(x, seed, caseClassName) {
  var arr = x.y();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.A()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.x(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.x(h, $m_sr_Statics$().J(x.z(i)));
      i = ((1 + i) | 0);
    }
    return this.au(h, arr);
  }
});
$p.k1 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.m();
  while (iterator.p()) {
    var x = iterator.l();
    var h = $m_sr_Statics$().J(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.x(h$2, a);
  h$2 = this.x(h$2, b);
  h$2 = this.d1(h$2, c);
  return this.au(h$2, n);
});
$p.rA = (function(xs, seed) {
  var it = xs.m();
  var h = seed;
  if ((!it.p())) {
    return this.au(h, 0);
  }
  var x0 = it.l();
  if ((!it.p())) {
    return this.au(this.x(h, $m_sr_Statics$().J(x0)), 1);
  }
  var x1 = it.l();
  var initial = $m_sr_Statics$().J(x0);
  h = this.x(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().J(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.p()) {
    h = this.x(h, prev);
    var hash = $m_sr_Statics$().J(it.l());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.x(h, hash);
      i = ((1 + i) | 0);
      while (it.p()) {
        h = this.x(h, $m_sr_Statics$().J(it.l()));
        i = ((1 + i) | 0);
      }
      return this.au(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.gE(this.x(this.x(h0, rangeDiff), prev));
});
$p.aH = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().bo(a);
  switch (l) {
    case 0: {
      return this.au(h, 0);
      break;
    }
    case 1: {
      return this.au(this.x(h, $m_sr_Statics$().J($m_sr_ScalaRunTime$().dG(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().J($m_sr_ScalaRunTime$().dG(a, 0));
      h = this.x(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().J($m_sr_ScalaRunTime$().dG(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.x(h, prev);
        var hash = $m_sr_Statics$().J($m_sr_ScalaRunTime$().dG(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.x(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.x(h, $m_sr_Statics$().J($m_sr_ScalaRunTime$().dG(a, i)));
            i = ((1 + i) | 0);
          }
          return this.au(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gE(this.x(this.x(h0, rangeDiff), prev));
    }
  }
});
$p.rG = (function(start, step, last, seed) {
  return this.gE(this.x(this.x(this.x(seed, start), step), last));
});
$p.r3 = (function(a, seed) {
  var h = seed;
  var l = a.q();
  switch (l) {
    case 0: {
      return this.au(h, 0);
      break;
    }
    case 1: {
      return this.au(this.x(h, $m_sr_Statics$().J(a.t(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().J(a.t(0));
      h = this.x(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().J(a.t(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.x(h, prev);
        var hash = $m_sr_Statics$().J(a.t(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.x(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.x(h, $m_sr_Statics$().J(a.t(i)));
            i = ((1 + i) | 0);
          }
          return this.au(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gE(this.x(this.x(h0, rangeDiff), prev));
    }
  }
});
$p.rj = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.d())) {
    var head = elems.C();
    var tail = elems.u();
    var hash = $m_sr_Statics$().J(head);
    h = this.x(h, hash);
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
  return ((rangeState === 2) ? this.rG(initial, rangeDiff, prev, seed) : this.au(h, n));
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
$p.p0 = (function(s) {
  return s;
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$s$, "com.github.pwharned.clausula.extension.domain.Sentence$package$Sentence$s$", ({
  dG: 1,
  bt: 1
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
$p.p0 = (function(a) {
  return a;
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Word$package$Word$given\uff3fToText\uff3fWord$, "com.github.pwharned.clausula.extension.domain.Word$package$Word$given_ToText_Word$", ({
  dK: 1,
  bt: 1
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
  var chars = $m_sc_StringOps$().sj(text, 200);
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
            if (new $c_sci_$colon$colon($bC(1711), new $c_sci_$colon$colon($bC(1670), new $c_sci_$colon$colon($bC(1662), new $c_sci_$colon$colon($bC(1688), new $c_sci_$colon$colon($bC(1740), new $c_sci_$colon$colon($bC(1705), $m_sci_Nil$())))))).bn($bC(x0$3))) {
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
$p.qB = (function(word, node) {
  return $m_s_concurrent_Future$().nR(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var text = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__extractTextWithoutFurigana__Lorg_scalajs_dom_Node__T(this, node);
    if (((text === null) || (text === ""))) {
      return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$());
    } else {
      var x5 = $p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__findSentenceContaining__T__T__s_Option(this, text, word);
      if ((x5 instanceof $c_s_Some)) {
        return $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$().hr(x5.d6);
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
          return $m_Lcom_github_pwharned_clausula_extension_domain_Sentence$package$Sentence$().hr(x2.d6);
        }
        if (($m_s_None$() === x2)) {
          return new $c_s_util_Left($m_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$());
        }
        throw new $c_s_MatchError(x2);
      }
      throw new $c_s_MatchError(x5);
    }
  })), $m_s_concurrent_ExecutionContext$().c7());
});
$p.qo = (function(sentence) {
  return $m_s_concurrent_Future$().nR(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    document.documentElement.lang;
    return new $c_s_util_Right($p_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction__detectByScript__T__Lcom_github_pwharned_clausula_extension_domain_Language(this, sentence));
  })), $m_s_concurrent_ExecutionContext$().c7());
});
var $d_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_interpreters_DomTextExtraction, "com.github.pwharned.clausula.extension.interpreters.DomTextExtraction", ({
  dL: 1,
  dg: 1
}));
function $p_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient__post__sjs_js_Object__s_concurrent_Future($thiz, body) {
  return $m_sjs_js_Thenable$ThenableOps$().k0(new Promise(((resolve$2, _$1$2) => {
    var message = ({
      "type": "ANKI_REQUEST",
      "payload": body
    });
    return chrome.runtime.sendMessage(message, $m_sjs_js_Any$().hz(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((response$2) => {
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
$p.pJ = (function(note) {
  var $x_1 = note.fn;
  var this$2 = note.fk;
  var s = (("" + $x_1) + (this$2.d() ? "" : this$2.v()));
  var this$5 = note.fo;
  var s$1 = (this$5.d() ? "" : this$5.v());
  var fields = ({
    "Text": s,
    "Translation": s$1
  });
  var d = note.fl;
  var _2 = [...$m_sjsr_Compat$().oS(note.fm)];
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
  })).f7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    if ((x$1$2 instanceof $c_s_util_Left)) {
      return new $c_s_util_Left(x$1$2.dB);
    }
    if ((x$1$2 instanceof $c_s_util_Right)) {
      var response = x$1$2.bN;
      var error = response.error;
      if (((error === null) || $m_sr_BoxesRunTime$().n(error, (void 0)))) {
        var $x_2 = $m_RTLong$().jC((+response.result));
        return new $c_s_util_Right($x_2);
      } else {
        console.error(("AnkiConnect error: " + error));
        return new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, error));
      }
    }
    throw new $c_s_MatchError(x$1$2);
  })), $m_s_concurrent_ExecutionContext$().c7());
});
var $d_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAnkiClient, "com.github.pwharned.clausula.extension.interpreters.FetchAnkiClient", ({
  dM: 1,
  de: 1
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
$p.om = (function(word, sentence, language) {
  return $m_sjs_js_Thenable$ThenableOps$().k0(new Promise(((resolve$2, _$1$2) => {
    var s = language.ea();
    var message = ({
      "type": "AUDIO_REQUEST",
      "word": word,
      "sentence": sentence,
      "lang": s
    });
    return chrome.runtime.sendMessage(message, $m_sjs_js_Any$().hz(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((response$2) => {
      var lastError = chrome.runtime.lastError;
      if (((lastError !== null) && (!$m_sr_BoxesRunTime$().n(lastError, (void 0))))) {
        console.error(("Audio runtime error: " + lastError.message));
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, lastError.message)));
      } else if (((response$2 === null) || $m_sr_BoxesRunTime$().n(response$2, (void 0)))) {
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, "No response from background worker")));
      } else if ((!(!response$2.success))) {
        var filename = response$2.filename;
        console.log(("Audio stored: " + filename));
        return resolve$2(new $c_s_util_Right((("[sound:" + filename) + "]")));
      } else {
        var error = response$2.error;
        console.error(("Audio error: " + error));
        return resolve$2(new $c_s_util_Left(new $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(0, error)));
      }
    }))));
  })));
});
var $d_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_interpreters_FetchAudioGeneration, "com.github.pwharned.clausula.extension.interpreters.FetchAudioGeneration", ({
  dN: 1,
  df: 1
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
$p.oV = (function(text, source, target, t) {
  return $m_sjs_js_Thenable$ThenableOps$().k0(new Promise(((resolve$2, _$1$2) => {
    var s = t.p0(text);
    var s$1 = source.ea();
    var s$2 = target.ea();
    var message = ({
      "type": "TRANSLATE_REQUEST",
      "text": s,
      "langSrc": s$1,
      "langTgt": s$2
    });
    return chrome.runtime.sendMessage(message, $m_sjs_js_Any$().hz(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((response$2) => {
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
          var detectedLang = new $c_s_Some($m_Lcom_github_pwharned_clausula_extension_domain_Language$().qO(x1));
        }
        console.log(((((((("Translation result: " + source.ea()) + " to ") + target.ea()) + " ") + translatedText) + ", detected: ") + detectedLang));
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
  dO: 1,
  dh: 1
}));
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.bP(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $thiz.f9(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $thiz.fa(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.fb(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.fb(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.kR = null;
  this.kQ = null;
  this.hV = false;
  this.kQ = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.hV = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.fe = (function() {
  return this.kR;
});
$p.nW = (function(x$0) {
  this.kR = x$0;
});
$p.oE = (function(subscription) {
  if (this.hV) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.kQ.K();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.ow = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.hV = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  ea: 1,
  bG: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.lb = null;
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
$p.fe = (function() {
  return this.lb;
});
$p.nW = (function(x$0) {
  this.lb = x$0;
});
$p.ow = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.oE = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  er: 1,
  bG: 1
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
$p.jp = (function(scalaValue) {
  return scalaValue;
});
$p.jo = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  ex: 1,
  bJ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.lU = null;
  this.lW = null;
  this.lV = null;
  this.i4 = null;
  this.lU = getRawDomValue;
  this.lW = setRawDomValue;
  this.lV = separator;
  this.i4 = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.bD = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().o.py(), $m_Lcom_raquo_laminar_keys_CompositeKey$().oA(items, this.lV)));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  eX: 1,
  a9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.i5 = null;
  this.i5 = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.o1 = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().oA(domValue, this.i5);
});
$p.o4 = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.i5, "");
});
$p.jo = (function(domValue) {
  return this.o1(domValue);
});
$p.jp = (function(scalaValue) {
  return this.o4(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  eZ: 1,
  bJ: 1
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
  f1: 1,
  f0: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.gZ = null;
  this.gZ = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  f4: 1,
  a9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.fy = null;
  this.i6 = null;
  this.fy = name;
  this.i6 = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  f5: 1,
  a9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.eD = null;
  this.eD = name;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bM)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  bM: 1,
  a9: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.i8 = null;
  this.i7 = null;
  this.h0 = null;
  this.h1 = null;
  this.i8 = localName;
  this.i7 = codec;
  var this$2 = (namespacePrefix.d() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.v() + ":") + localName)));
  this.h0 = (this$2.d() ? localName : this$2.v());
  this.h1 = (namespacePrefix.d() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().rr(namespacePrefix.v())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  f6: 1,
  a9: 1
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
$p.cg = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  fe: 1,
  a5: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.m8 = null;
  this.m8 = f$2;
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
$p.cg = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.m8.c(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.b3 || (!when))) {
    f();
  } else {
    this$2.b3 = true;
    try {
      f();
    } finally {
      this$2.b3 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  ff: 1,
  a5: 1
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
  fi: 1,
  fg: 1
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
  fk: 1,
  fj: 1
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
  this.ma = null;
  this.ma = render$2;
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
$p.q0 = (function(value) {
  return this.ma.c(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  fn: 1,
  fl: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.nX(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().qn($thiz.aj(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.im = null;
  this.im = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.ai = (function(modifiers) {
  var element = this.q4();
  modifiers.b7(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((modifier) => {
    modifier.cg(element);
  })));
  return element;
});
$p.q4 = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().qi(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  fx: 1,
  bQ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.me = null;
  this.me = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  fy: 1,
  bQ: 1
}));
/** @constructor */
function $c_jl_Character$() {
  this.io = null;
  $n_jl_Character$ = this;
  this.io = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.sm = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.qp = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().q2(this.io, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.io.a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  fG: 1,
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
$p.gy = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.os = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().gy(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().gy(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().gy(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.qp(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().gy(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().gy(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
$p.dH = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  fM: 1,
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
  this.eG = null;
  this.fC = null;
  this.eH = null;
  this.eI = 0;
  this.eF = 0;
  this.eG = declaringClass;
  this.fC = methodName;
  this.eH = fileName;
  this.eI = lineNumber;
  this.eF = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.g = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.eH === that.eH) && (this.eI === that.eI)) && (this.eF === that.eF)) && (this.eG === that.eG)) && (this.fC === that.fC)));
});
$p.h = (function() {
  var result = "";
  if ((this.eG !== "<jscode>")) {
    result = ((("" + result) + this.eG) + ".");
  }
  result = (("" + result) + this.fC);
  if ((this.eH === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.eH);
    if ((this.eI >= 0)) {
      result = ((result + ":") + this.eI);
      if ((this.eF >= 0)) {
        result = ((result + ":") + this.eF);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.j = (function() {
  return (((($f_T__hashCode__I(this.eG) ^ $f_T__hashCode__I(this.fC)) ^ $f_T__hashCode__I(this.eH)) ^ this.eI) ^ this.eF);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c0)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  c0: 1,
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
$p.rt = (function(value, offset, count) {
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
  fZ: 1,
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
  $thiz.mj = s;
  $thiz.fD = e;
  $thiz.mk = writableStackTrace;
  if (writableStackTrace) {
    $thiz.f0();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.mj = null;
    this.fD = null;
    this.mk = false;
    this.mi = null;
    this.dZ = null;
  }
  op(cause) {
    this.fD = cause;
    return this;
  }
  f3() {
    return this.mj;
  }
  f0() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.P : this);
    this.mi = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  hA() {
    if ((this.dZ === null)) {
      if (this.mk) {
        this.dZ = $m_jl_StackTrace$().qA(this.mi);
      } else {
        this.dZ = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.dZ;
  }
  gA(s) {
    this.hA();
    var t = this.h();
    s.ef(t);
    if ((this.dZ.a.length !== 0)) {
      var i = 0;
      while ((i < this.dZ.a.length)) {
        var t$1 = ("  at " + this.dZ.a[i]);
        s.ef(t$1);
        i = ((1 + i) | 0);
      }
    } else {
      s.ef("  <no stack trace available>");
    }
    var wCause = this;
    while (((wCause !== wCause.fD) && (wCause.fD !== null))) {
      var parentTrace = wCause.hA();
      wCause = wCause.fD;
      var thisTrace = wCause.hA();
      var thisLength = thisTrace.a.length;
      var parentLength = parentTrace.a.length;
      var t$2 = ("Caused by: " + wCause);
      s.ef(t$2);
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
          s.ef(t$3);
          i$2 = ((1 + i$2) | 0);
        }
        if ((sameFrameCount > 0)) {
          var t$4 = (("  ... " + sameFrameCount) + " more");
          s.ef(t$4);
        }
      } else {
        s.ef("  <no stack trace available>");
      }
    }
  }
  h() {
    var className = $objectClassName(this);
    var message = this.f3();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  j() {
    return $c_O.prototype.j.call(this);
  }
  g(that) {
    return $c_O.prototype.g.call(this, that);
  }
  get "message"() {
    var m = this.f3();
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
function $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, value) {
  $thiz.M = value;
  return $thiz;
}
/** @constructor */
function $c_ju_concurrent_atomic_AtomicReference() {
  this.M = null;
}
$p = $c_ju_concurrent_atomic_AtomicReference.prototype = new $h_O();
$p.constructor = $c_ju_concurrent_atomic_AtomicReference;
/** @constructor */
function $h_ju_concurrent_atomic_AtomicReference() {
}
$h_ju_concurrent_atomic_AtomicReference.prototype = $p;
$p.gj = (function(expect, update) {
  if (Object.is(expect, this.M)) {
    this.M = update;
    return true;
  } else {
    return false;
  }
});
$p.h = (function() {
  return ("" + this.M);
});
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.h2 === null)) {
    throw new $c_jl_IllegalStateException("No match available");
  }
  return $thiz.h2;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.mm = null;
  this.ml = null;
  this.mn = 0;
  this.iv = null;
  this.iw = 0;
  this.h2 = null;
  this.mm = pattern0;
  this.ml = input0;
  this.mn = 0;
  this.iv = this.ml;
  this.iw = 0;
  this.h2 = null;
}
$p = $c_ju_regex_Matcher.prototype = new $h_O();
$p.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $p;
$p.qE = (function() {
  var this$1 = this.mm;
  var input = this.iv;
  var start = this.iw;
  var mtch = this$1.rg(input, start);
  var end = (this$1.ix.lastIndex | 0);
  this.iw = ((mtch !== null) ? ((end === (mtch.index | 0)) ? ((1 + end) | 0) : end) : ((1 + this.iv.length) | 0));
  this.h2 = mtch;
  return (mtch !== null);
});
$p.oP = (function() {
  return ((($p_ju_regex_Matcher__ensureLastMatch__O(this).index | 0) + this.mn) | 0);
});
$p.o5 = (function() {
  return ((this.oP() + this.qY().length) | 0);
});
$p.qY = (function() {
  return $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
});
var $d_ju_regex_Matcher = new $TypeData().i($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  gc: 1,
  gb: 1
}));
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.mo = null;
  this.mp = null;
  this.mq = false;
  this.ix = null;
  this.mo = _pattern;
  this.mp = jsFlags;
  this.mq = sticky;
  this.ix = new RegExp(jsPattern, (this.mp + (this.mq ? "gy" : "g")));
  new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$p = $c_ju_regex_Pattern.prototype = new $h_O();
$p.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $p;
$p.rg = (function(input, start) {
  var regexp = this.ix;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$p.h = (function() {
  return this.mo;
});
$p.rh = (function(inputStr, limit) {
  if ((inputStr === "")) {
    return new ($d_T.r().C)([""]);
  } else {
    var lim = ((limit > 0) ? limit : 2147483647);
    var matcher = new $c_ju_regex_Matcher(this, inputStr);
    var result = [];
    var prevEnd = 0;
    while ((((result.length | 0) < ((lim - 1) | 0)) && matcher.qE())) {
      if ((matcher.o5() !== 0)) {
        var beginIndex = prevEnd;
        var endIndex = matcher.oP();
        var $x_1 = result.push(inputStr.substring(beginIndex, endIndex));
      }
      prevEnd = matcher.o5();
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
  gd: 1,
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
$p.rF = (function(s) {
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
  ge: 1,
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
$p.sw = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.n7;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.cA(x) ? $thiz.c(x) : default$1.c(x));
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
  hk: 1,
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
    $thiz.aY($m_scm_Buffer$().of(elems));
  } else {
    var it = elems.m();
    while (it.p()) {
      $thiz.aZ(it.l());
    }
  }
  return $thiz;
}
function $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V($thiz, runnable) {
  var tl = $thiz.nh;
  var b = tl.v();
  if ((b instanceof $c_s_concurrent_BatchingExecutor$SyncBatch)) {
    b.rD(runnable);
  } else {
    var i = ((b !== null) ? b : 0);
    if ((i < 16)) {
      tl.gF(((1 + i) | 0));
      try {
        runnable.eg();
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        if (false) {
          $m_s_concurrent_ExecutionContext$().eV.c(e$2);
        } else {
          matchResult3: {
            if ($m_s_util_control_NonFatal$().hs(e$2)) {
              $m_s_concurrent_ExecutionContext$().eV.c(e$2);
              break matchResult3;
            }
            throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
          }
        }
      } finally {
        tl.gF(b);
      }
    } else {
      var batch = new $c_s_concurrent_BatchingExecutor$SyncBatch($thiz, runnable);
      tl.gF(batch);
      batch.eg();
      tl.gF(b);
    }
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$ManyCallbacks(first, rest) {
  this.j5 = null;
  this.j6 = null;
  this.j5 = first;
  this.j6 = rest;
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cU)));
}
var $d_s_concurrent_impl_Promise$ManyCallbacks = new $TypeData().i($c_s_concurrent_impl_Promise$ManyCallbacks, "scala.concurrent.impl.Promise$ManyCallbacks", ({
  cU: 1,
  aM: 1
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
  this.hj = false;
  this.hj = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.h = (function() {
  return ("" + this.hj);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  j3: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.e8 = 0;
  this.e8 = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.h = (function() {
  return ("" + this.e8);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  j5: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.eW = null;
  this.eW = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.h = (function() {
  return ("" + this.eW);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  j9: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.af = 0;
  this.dD = 0;
  this.nz = 0;
  this.j7 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.af = $f_T__hashCode__I("Seq");
  this.dD = $f_T__hashCode__I("Map");
  this.nz = $f_T__hashCode__I("Set");
  this.j7 = this.k1($m_sci_Nil$(), this.dD);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cl = (function(x, y) {
  return this.oW($m_sr_Statics$().J(x), $m_sr_Statics$().J(y), (-889275714));
});
$p.oN = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.r3(xs, this.af) : ((xs instanceof $c_sci_List) ? this.rj(xs, this.af) : this.rA(xs, this.af)));
});
$p.rm = (function(xs) {
  if (xs.d()) {
    return this.j7;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.dD;
    xs.eb(accum);
    h = this.x(h, accum.hl);
    h = this.x(h, accum.hm);
    h = this.d1(h, accum.hn);
    return this.au(h, accum.ho);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  jF: 1,
  jE: 1
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
  this.hl = 0;
  this.hm = 0;
  this.ho = 0;
  this.hn = 0;
  this.hl = 0;
  this.hm = 0;
  this.ho = 0;
  this.hn = 1;
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
$p.pW = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cl(k, v);
  this.hl = ((this.hl + h) | 0);
  this.hm = (this.hm ^ h);
  this.hn = Math.imul(this.hn, (1 | h));
  this.ho = ((1 + this.ho) | 0);
});
$p.eY = (function(v1, v2) {
  this.pW(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  jG: 1,
  b1: 1
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
  d8: 1,
  t: 1,
  aB: 1
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
  dc: 1,
  t: 1,
  aB: 1
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
  this.k3 = null;
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
  this.k3 = new ($d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage.r().C)([$s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__English__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Russian__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__French__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__German__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Spanish__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Japanese__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Chinese__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Arabic__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Farsi__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Latin__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Hebrew__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage(), $s_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$__Auto__Lcom_github_pwharned_clausula_extension_domain_KnownLanguage()]);
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$.prototype = new $h_O();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$.prototype = $p;
$p.su = (function() {
  return this.k3.e();
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$, "com.github.pwharned.clausula.extension.domain.KnownLanguage$", ({
  dn: 1,
  t: 1,
  aB: 1
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
$p.qO = (function(code) {
  var xs = $m_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$().su();
  _return: {
    var i = 0;
    while ((i < xs.a.length)) {
      var x1 = i;
      if ((xs.a[x1].bg === code)) {
        var idx = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var idx = (-1);
  }
  var this$4 = ((idx === (-1)) ? $m_s_None$() : new $c_s_Some(xs.a[idx]));
  return (this$4.d() ? new $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage(code) : this$4.v());
});
var $d_Lcom_github_pwharned_clausula_extension_domain_Language$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_Language$, "com.github.pwharned.clausula.extension.domain.Language$", ({
  dB: 1,
  t: 1,
  aB: 1
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
  this.hK = null;
  this.k4 = null;
  this.k5 = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.hK = $m_scm_Buffer$().nS($m_sr_ScalaRunTime$().b2(new ($d_F1.r().C)([])));
  this.k4 = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
    try {
      console.error(((this.f2(err) + "\n") + this.qV(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.k5 = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.P : $x_1);
  }));
  this.rH(this.k4);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.f2 = (function(e) {
  try {
    var errorMessage = e.f3();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).jG() + ": ") + errorMessage);
});
$p.qV = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().sw(err.hA()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.rH = (function(fn) {
  this.hK.aZ(fn);
});
$p.ck = (function(err) {
  var this$1 = this.hK;
  var it = this$1.m();
  while (it.p()) {
    var x0 = it.l();
    try {
      x0.c(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.k5;
      if (((x0 === null) ? (x$2 === null) : x0.g(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().s9(0.0, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  dR: 1,
  t: 1,
  aB: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.ci(true);
  $thiz.f8((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().p3(onNext, $m_s_PartialFunction$().h7, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.f5()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.f5()) {
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
  var x = $thiz.dN();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_F0.r().C)([])));
    $thiz.f8(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aF: 1,
  ao: 1,
  a1: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.q0(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, modifiers, asModifier, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(null, modifiers, null)).b7(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element$2) => ((_$6) => {
      asModifier.c(_$6).cg(element$2);
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.m1 = null;
  this.ia = null;
  this.m1 = key;
  this.ia = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.cg = (function(element) {
  if ((!this.ia.d())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.m1, null, this.ia, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  f9: 1,
  a5: 1,
  bO: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.eE = null;
  this.ib = null;
  this.ic = null;
  this.eE = eventProcessor;
  this.ib = ((ev) => {
    var processor = eventProcessor.lX;
    var this$2 = processor.c(ev);
    if ((!this$2.d())) {
      callback.c(this$2.v());
    }
  });
  this.ic = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
    }
    this$3.capture = outer.eE.lZ;
    this$3.passive = outer.eE.lY;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.cg = (function(element) {
  this.q3(element, false);
});
$p.q3 = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().pI(element.ba, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.i9, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().rM(element.ba, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().sr(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gH(element.c8, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().oR(element.c8, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner$1) => {
      activate.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.h = (function() {
  return (("EventListener(" + this.eE.gY.gZ) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  fa: 1,
  a5: 1,
  bN: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.m3 = null;
  this.m4 = null;
  this.m2 = null;
  this.m3 = key;
  this.m4 = value;
  this.m2 = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.cg = (function(element) {
  this.m2.jd(element, this.m3, this.m4);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  fb: 1,
  a5: 1,
  bO: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.m5 = null;
  this.m7 = null;
  this.m6 = null;
  this.m5 = key;
  this.m7 = values;
  this.m6 = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.cg = (function(element) {
  this.jh(element);
});
$p.jh = (function(element) {
  element.rx(this.m5);
  var observable = this.m7;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((value) => {
    this.m6.jd(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().sd(element.c8, observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  fc: 1,
  a5: 1,
  bN: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.ij = null;
  this.mc = null;
  this.md = null;
  this.mc = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().rf(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.md = container;
  this.rq();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.hx = (function() {
  return this.ij;
});
$p.nX = (function(x$0) {
  this.ij = x$0;
});
$p.rq = (function() {
  this.ij.nE();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().g7(this, this.mc, (void 0));
});
$p.aj = (function() {
  return this.md;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  ft: 1,
  aJ: 1,
  bP: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fw)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.ak.Z) {
    return ($thiz.ak.Q().jG() + "[]");
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
  this.ip = null;
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
$p.jG = (function() {
  if ((this.ip === null)) {
    this.ip = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.ip;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  fH: 1,
  a: 1,
  a6: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
function $isArrayOf_jl_Error(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aV)));
}
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().i($c_jl_Exception, "java.lang.Exception", ({
  E: 1,
  u: 1,
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
  this.pj = null;
  $n_s_Predef$ = this;
  $m_sci_List$();
  this.pj = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.rT = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  gA: 1,
  gs: 1,
  gt: 1
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
      return $thiz.aU();
      break;
    }
    case 1: {
      return $thiz.aG();
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.fI = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.fI = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.av = (function(it) {
  return this.fI.jx(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.b0 = (function() {
  return this.fI.hE($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.cX = (function(elems) {
  return this.fI.jx(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.ha = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.ha = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.av = (function(it) {
  return this.ha.av(it);
});
$p.b0 = (function() {
  return this.ha.b0();
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
  return new $c_sc_Iterator$ConcatIterator($thiz).jl(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().V : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
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
  this.V = null;
  $n_sc_Iterator$ = this;
  this.V = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.b0 = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.av = (function(source) {
  return source.m();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  gN: 1,
  a: 1,
  P: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.iL = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.iL = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.av = (function(it) {
  return this.iL.av(it);
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
$p.og = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((it$2) => (() => it$2.m()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().jz(it))));
});
$p.b0 = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((it$2) => this.og(it$2))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.av = (function(source) {
  return this.og(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  h1: 1,
  a: 1,
  P: 1
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
  this.W = 0;
  this.a4 = 0;
  this.ag = null;
  this.bv = null;
  this.aL = 0;
  this.bi = 0;
  this.W = dataMap;
  this.a4 = nodeMap;
  this.ag = content;
  this.bv = originalHashes;
  this.aL = size;
  this.bi = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.aJ = (function() {
  return this.aL;
});
$p.dJ = (function() {
  return this.bi;
});
$p.dL = (function(index) {
  return this.ag.a[(index << 1)];
});
$p.d0 = (function(index) {
  return this.ag.a[((1 + (index << 1)) | 0)];
});
$p.on = (function(index) {
  return $ct_T2__O__O__(new $c_T2(), this.ag.a[(index << 1)], this.ag.a[((1 + (index << 1)) | 0)]);
});
$p.go = (function(index) {
  return this.bv.a[index];
});
$p.cY = (function(index) {
  return this.ag.a[((((this.ag.a.length - 1) | 0) - index) | 0)];
});
$p.jc = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ed(keyHash, shift);
  var bitpos = $m_sci_Node$().dI(mask);
  if (((this.W & bitpos) !== 0)) {
    var index = $m_sci_Node$().cy(this.W, mask, bitpos);
    if ($m_sr_BoxesRunTime$().n(key, this.dL(index))) {
      return this.d0(index);
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
    }
  } else if (((this.a4 & bitpos) !== 0)) {
    return this.cY($m_sci_Node$().cy(this.a4, mask, bitpos)).jc(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.jE = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().ed(keyHash, shift);
  var bitpos = $m_sci_Node$().dI(mask);
  if (((this.W & bitpos) !== 0)) {
    var index = $m_sci_Node$().cy(this.W, mask, bitpos);
    return ($m_sr_BoxesRunTime$().n(key, this.dL(index)) ? this.d0(index) : f.K());
  } else {
    return (((this.a4 & bitpos) !== 0) ? this.cY($m_sci_Node$().cy(this.a4, mask, bitpos)).jE(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.K());
  }
});
$p.jm = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ed(keyHash, shift);
  var bitpos = $m_sci_Node$().dI(mask);
  if (((this.W & bitpos) !== 0)) {
    var index = $m_sci_Node$().cy(this.W, mask, bitpos);
    return ((this.bv.a[index] === originalHash) && $m_sr_BoxesRunTime$().n(key, this.dL(index)));
  } else {
    return (((this.a4 & bitpos) !== 0) && this.cY($m_sci_Node$().cy(this.a4, mask, bitpos)).jm(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.oY = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().ed(keyHash, shift);
  var bitpos = $m_sci_Node$().dI(mask);
  if (((this.W & bitpos) !== 0)) {
    var index = $m_sci_Node$().cy(this.W, mask, bitpos);
    var key0 = this.dL(index);
    var key0UnimprovedHash = this.go(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().n(key0, key))) {
      if (replaceValue) {
        var value0 = this.d0(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.qg(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.d0(index);
      var key0Hash = $m_sc_Hashing$().ch(key0UnimprovedHash);
      return this.qe(bitpos, key0Hash, this.jQ(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.a4 & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cy(this.a4, mask, bitpos);
    var subNode = this.cY(index$2);
    var subNodeNew$2 = subNode.oZ(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.qf(bitpos, subNode, subNodeNew$2));
  } else {
    return this.qd(bitpos, key, originalHash, keyHash, value);
  }
});
$p.jQ = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().jA(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), key0, value0), $ct_T2__O__O__(new $c_T2(), key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().ed(keyHash0, shift);
    var mask1 = $m_sci_Node$().ed(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().dI(mask0) | $m_sci_Node$().dI(mask1));
      if ((mask0 < mask1)) {
        var xs = new $c_sjsr_WrappedVarArgs([key0, value0, key1, value1]);
        var array$2 = new $ac_O(xs.q());
        var iterator = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs));
        var i = 0;
        while ((iterator.bb > 0)) {
          array$2.a[i] = iterator.l();
          i = ((1 + i) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$2, new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash);
      } else {
        var xs$1 = new $c_sjsr_WrappedVarArgs([key1, value1, key0, value0]);
        var array$4 = new $ac_O(xs$1.q());
        var iterator$1 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$1));
        var i$1 = 0;
        while ((iterator$1.bb > 0)) {
          array$4.a[i$1] = iterator$1.l();
          i$1 = ((1 + i$1) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$4, new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash);
      }
    } else {
      var nodeMap = $m_sci_Node$().dI(mask0);
      var node = this.jQ(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      var xs$2 = new $c_sjsr_WrappedVarArgs([node]);
      var array$6 = new $ac_O(xs$2.q());
      var iterator$2 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$2));
      var i$2 = 0;
      while ((iterator$2.bb > 0)) {
        array$6.a[i$2] = iterator$2.l();
        i$2 = ((1 + i$2) | 0);
      }
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().iE, node.aJ(), node.dJ());
    }
  }
});
$p.jH = (function() {
  return (this.a4 !== 0);
});
$p.jR = (function() {
  return $m_jl_Integer$().dH(this.a4);
});
$p.hB = (function() {
  return (this.W !== 0);
});
$p.jV = (function() {
  return $m_jl_Integer$().dH(this.W);
});
$p.gl = (function(bitpos) {
  return $m_jl_Integer$().dH((this.W & ((bitpos - 1) | 0)));
});
$p.jS = (function(bitpos) {
  return $m_jl_Integer$().dH((this.a4 & ((bitpos - 1) | 0)));
});
$p.qg = (function(bitpos, newKey, newValue) {
  var dataIx = this.gl(bitpos);
  var idx = (dataIx << 1);
  var src = this.ag;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.s(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.W, this.a4, dst, this.bv, this.aL, this.bi);
});
$p.qf = (function(bitpos, oldNode, newNode) {
  var idx = ((((this.ag.a.length - 1) | 0) - this.jS(bitpos)) | 0);
  var src = this.ag;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.s(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.W, this.a4, dst, this.bv, ((((this.aL - oldNode.aJ()) | 0) + newNode.aJ()) | 0), ((((this.bi - oldNode.dJ()) | 0) + newNode.dJ()) | 0));
});
$p.qd = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.gl(bitpos);
  var idx = (dataIx << 1);
  var src = this.ag;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.s(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.s(idx, dst, destPos, length);
  var dstHashes = this.r8(this.bv, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.W | bitpos), this.a4, dst, dstHashes, ((1 + this.aL) | 0), ((this.bi + keyHash) | 0));
});
$p.ro = (function(bitpos, keyHash, node) {
  var dataIx = this.gl(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.ag.a.length - 2) | 0) - this.jS(bitpos)) | 0);
  var src = this.ag;
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
  var dstHashes = this.oG(this.bv, dataIx);
  this.W = (this.W ^ bitpos);
  this.a4 = (this.a4 | bitpos);
  this.ag = dst;
  this.bv = dstHashes;
  this.aL = ((((this.aL - 1) | 0) + node.aJ()) | 0);
  this.bi = ((((this.bi - keyHash) | 0) + node.dJ()) | 0);
  return this;
});
$p.qe = (function(bitpos, keyHash, node) {
  var dataIx = this.gl(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.ag.a.length - 2) | 0) - this.jS(bitpos)) | 0);
  var src = this.ag;
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
  var dstHashes = this.oG(this.bv, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.W ^ bitpos), (this.a4 | bitpos), dst, dstHashes, ((((this.aL - 1) | 0) + node.aJ()) | 0), ((((this.bi - keyHash) | 0) + node.dJ()) | 0));
});
$p.eb = (function(f) {
  var iN = $m_jl_Integer$().dH(this.W);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.eY(this.dL(i$1), this.d0(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().dH(this.a4);
  var j = 0;
  while ((j < jN)) {
    this.cY(j).eb(f);
    j = ((1 + j) | 0);
  }
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bi === that.bi) && (this.a4 === that.a4)) && (this.W === that.W)) && (this.aL === that.aL)) && $m_ju_Arrays$().jr(this.bv, that.bv))) {
      var a1 = this.ag;
      var a2 = that.ag;
      var length = this.ag.a.length;
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
$p.j = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.h = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.nY = (function() {
  var this$1 = this.ag;
  var contentClone = this$1.e();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().dH(this.W) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].nZ();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.W, this.a4, contentClone, this.bv.e(), this.aL, this.bi);
});
$p.jD = (function(index) {
  return this.cY(index);
});
$p.oZ = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.oY(key, value, originalHash, hash, shift, replaceValue);
});
$p.nZ = (function() {
  return this.nY();
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  cq: 1,
  cz: 1,
  bb: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.iO = 0;
  this.dh = 0;
  this.a5 = null;
  this.iO = originalHash;
  this.dh = hash;
  this.a5 = content;
  $m_s_Predef$().rT((this.a5.q() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.f4 = (function(key) {
  var iter = this.a5.m();
  var i = 0;
  while (iter.p()) {
    if ($m_sr_BoxesRunTime$().n(iter.l().aU(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.aJ = (function() {
  return this.a5.q();
});
$p.jc = (function(key, originalHash, hash, shift) {
  var this$1 = this.qR(key, originalHash, hash, shift);
  return (this$1.d() ? $m_sc_Iterator$().V.l() : this$1.v());
});
$p.qR = (function(key, originalHash, hash, shift) {
  if ((this.dh === hash)) {
    var index = this.f4(key);
    return ((index >= 0) ? new $c_s_Some(this.a5.t(index).aG()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.jE = (function(key, originalHash, hash, shift, f) {
  if ((this.dh === hash)) {
    var x36 = this.f4(key);
    if ((x36 === (-1))) {
      return f.K();
    }
    return this.a5.t(x36).aG();
  } else {
    return f.K();
  }
});
$p.jm = (function(key, originalHash, hash, shift) {
  return ((this.dh === hash) && (this.f4(key) >= 0));
});
$p.oZ = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.f4(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.a5.t(index).aG(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.a5.dP(index, $ct_T2__O__O__(new $c_T2(), key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.a5.dF($ct_T2__O__O__(new $c_T2(), key, value))));
});
$p.jH = (function() {
  return false;
});
$p.jR = (function() {
  return 0;
});
$p.cY = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.hB = (function() {
  return true;
});
$p.jV = (function() {
  return this.a5.q();
});
$p.dL = (function(index) {
  return this.a5.t(index).aU();
});
$p.d0 = (function(index) {
  return this.a5.t(index).aG();
});
$p.on = (function(index) {
  return this.a5.t(index);
});
$p.go = (function(index) {
  return this.iO;
});
$p.eb = (function(f) {
  this.a5.b7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.aU();
    var v = x$1$2.aG();
    return f.eY(k, v);
  })));
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.dh === that.dh) && (this.a5.q() === that.a5.q()))) {
      var iter = this.a5.m();
      while (iter.p()) {
        var \u03b412$;
        var \u03b412$ = iter.l();
        var key = \u03b412$.aU();
        var value = \u03b412$.aG();
        var index = that.f4(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().n(value, that.a5.t(index).aG())))) {
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
$p.j = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.h = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.dJ = (function() {
  return Math.imul(this.a5.q(), this.dh);
});
$p.jD = (function(index) {
  return this.cY(index);
});
$p.nZ = (function() {
  return new $c_sci_HashCollisionMapNode(this.iO, this.dh, this.a5);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  cs: 1,
  cz: 1,
  bb: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.iP = null;
  $n_sci_HashMap$ = this;
  this.iP = new $c_sci_HashMap($m_sci_MapNode$().mY);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.qL = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().jb(source).jZ());
});
$p.av = (function(it) {
  return this.qL(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  h8: 1,
  a: 1,
  b5: 1
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
$p.oh = (function(it) {
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
  return new $c_sci_MapBuilderImpl().nF(it).oI();
});
$p.av = (function(it) {
  return this.oh(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  hn: 1,
  a: 1,
  b5: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = coll.w();
  if ((x1 === (-1))) {
    return (void 0);
  }
  var that = ((x1 + delta) | 0);
  $thiz.b1(((that < 0) ? 0 : that));
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
$p.qN = (function(it) {
  var k = it.w();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).nI(it);
});
$p.b0 = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.av = (function(source) {
  return this.qN(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  i6: 1,
  a: 1,
  P: 1
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
  this.fX = null;
  this.fY = null;
  this.dz = 0;
  this.pk = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.pk = outer;
  $ct_s_concurrent_BatchingExecutor$AbstractBatch__jl_Runnable__Ajl_Runnable__I__(this, runnable, $m_s_concurrent_BatchingExecutorStatics$().ne, 1);
}
$p = $c_s_concurrent_BatchingExecutor$SyncBatch.prototype = new $h_s_concurrent_BatchingExecutor$AbstractBatch();
$p.constructor = $c_s_concurrent_BatchingExecutor$SyncBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$SyncBatch() {
}
$h_s_concurrent_BatchingExecutor$SyncBatch.prototype = $p;
$p.eg = (function() {
  while (true) {
    try {
      this.rY(1024);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if (false) {
        $m_s_concurrent_ExecutionContext$().eV.c(e$2);
      } else {
        matchResult2: {
          if ($m_s_util_control_NonFatal$().hs(e$2)) {
            $m_s_concurrent_ExecutionContext$().eV.c(e$2);
            break matchResult2;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
        }
      }
    }
    if ((this.dz > 0)) {
    } else {
      return (void 0);
    }
  }
});
function $isArrayOf_s_concurrent_BatchingExecutor$SyncBatch(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cQ)));
}
var $d_s_concurrent_BatchingExecutor$SyncBatch = new $TypeData().i($c_s_concurrent_BatchingExecutor$SyncBatch, "scala.concurrent.BatchingExecutor$SyncBatch", ({
  cQ: 1,
  ip: 1,
  aX: 1
}));
/** @constructor */
function $c_s_concurrent_impl_Promise$Link(to) {
  this.M = null;
  $ct_ju_concurrent_atomic_AtomicReference__O__(this, to);
}
$p = $c_s_concurrent_impl_Promise$Link.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$Link;
/** @constructor */
function $h_s_concurrent_impl_Promise$Link() {
}
$h_s_concurrent_impl_Promise$Link.prototype = $p;
$p.fc = (function(owner) {
  var c = this.M;
  var target$tailLocal1 = c;
  var current$tailLocal1 = c;
  while (true) {
    var value = target$tailLocal1.M;
    if ($is_s_concurrent_impl_Promise$Callbacks(value)) {
      if (this.gj(current$tailLocal1, target$tailLocal1)) {
        return target$tailLocal1;
      } else {
        current$tailLocal1 = this.M;
      }
    } else if ((value instanceof $c_s_concurrent_impl_Promise$Link)) {
      target$tailLocal1 = value.M;
    } else {
      owner.sq(value);
      return owner;
    }
  }
});
function $isArrayOf_s_concurrent_impl_Promise$Link(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cT)));
}
var $d_s_concurrent_impl_Promise$Link = new $TypeData().i($c_s_concurrent_impl_Promise$Link, "scala.concurrent.impl.Promise$Link", ({
  cT: 1,
  aZ: 1,
  a: 1
}));
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iA)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.nn = null;
  this.nn = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.K = (function() {
  return (0, this.nn)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  iZ: 1,
  cW: 1,
  b0: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.no = null;
  this.no = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.c = (function(x0) {
  return (0, this.no)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  j0: 1,
  bj: 1,
  e: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.np = null;
  this.np = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.eY = (function(x0, x1) {
  return (0, this.np)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  j1: 1,
  cX: 1,
  b1: 1
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
  return this.c4(x, $m_s_PartialFunction$().h7);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  j7: 1,
  u: 1,
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
$p.qP = (function(f) {
  return (() => f.K());
});
$p.hz = (function(f) {
  return ((arg1$2) => f.c(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  jj: 1,
  jk: 1,
  jl: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.jB)));
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote(text, translation, audio, deck, language, tags) {
  this.fn = null;
  this.fo = null;
  this.fk = null;
  this.fl = null;
  this.gN = null;
  this.fm = null;
  this.fn = text;
  this.fo = translation;
  this.fk = audio;
  this.fl = deck;
  this.gN = language;
  this.fm = tags;
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
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().bR(this, 833541524, true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote)) {
    if ((this.fn === x$0.fn)) {
      var x = this.fo;
      var x$2 = x$0.fo;
      var $x_3 = ((x === null) ? (x$2 === null) : x.g(x$2));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$3 = this.fk;
      var x$4 = x$0.fk;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : x$3.g(x$4));
    } else {
      var $x_2 = false;
    }
    if (($x_2 && (this.fl === x$0.fl))) {
      var x$5 = this.gN;
      var x$6 = x$0.gN;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : x$5.g(x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$7 = this.fm;
      var x$8 = x$0.fm;
      return ((x$7 === null) ? (x$8 === null) : x$7.g(x$8));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c3(this);
});
$p.y = (function() {
  return 6;
});
$p.A = (function() {
  return "ClozeNote";
});
$p.z = (function(n) {
  switch (n) {
    case 0: {
      return this.fn;
      break;
    }
    case 1: {
      return this.fo;
      break;
    }
    case 2: {
      return this.fk;
      break;
    }
    case 3: {
      return this.fl;
      break;
    }
    case 4: {
      return this.gN;
      break;
    }
    case 5: {
      return this.fm;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_domain_ClozeNote(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bq)));
}
var $d_Lcom_github_pwharned_clausula_extension_domain_ClozeNote = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_ClozeNote, "com.github.pwharned.clausula.extension.domain.ClozeNote", ({
  bq: 1,
  b: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult(text, detectedLanguage) {
  this.et = null;
  this.es = null;
  this.et = text;
  this.es = detectedLanguage;
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
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().bR(this, 606425562, true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult)) {
    if ((this.et === x$0.et)) {
      var x = this.es;
      var x$2 = x$0.es;
      return ((x === null) ? (x$2 === null) : x.g(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c3(this);
});
$p.y = (function() {
  return 2;
});
$p.A = (function() {
  return "TranslationResult";
});
$p.z = (function(n) {
  if ((n === 0)) {
    return this.et;
  }
  if ((n === 1)) {
    return this.es;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_domain_TranslationResult(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bv)));
}
var $d_Lcom_github_pwharned_clausula_extension_domain_TranslationResult = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_TranslationResult, "com.github.pwharned.clausula.extension.domain.TranslationResult", ({
  bv: 1,
  b: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.k8 = null;
  this.k6 = false;
  this.hL = null;
  this.k7 = null;
  this.k8 = onNextParam$2;
  this.k6 = handleObserverErrors$3;
  this.hL = onErrorParam$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.k7 = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.cB = (function() {
  return this.k7;
});
$p.cu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gt = (function(nextValue) {
  try {
    this.k8.c(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.k6) {
      this.ee(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().ck(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.ee = (function(error) {
  try {
    if (this.hL.cA(error)) {
      this.hL.c(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().ck(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().ck(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.dO = (function(nextValue) {
  nextValue.bP(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((error) => {
    this.ee(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue$2) => {
    this.gt(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  dT: 1,
  ao: 1,
  a1: 1,
  aF: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.hM = null;
  this.k9 = false;
  this.ka = null;
  this.hM = onTryParam$2;
  this.k9 = handleObserverErrors$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ka = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.cB = (function() {
  return this.ka;
});
$p.cu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gt = (function(nextValue) {
  this.dO(new $c_s_util_Success(nextValue));
});
$p.ee = (function(error) {
  this.dO(new $c_s_util_Failure(error));
});
$p.dO = (function(nextValue) {
  try {
    if (this.hM.cA(nextValue)) {
      this.hM.c(nextValue);
    } else {
      nextValue.bP(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().ck(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.k9 && nextValue.or())) {
      this.ee(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.bP(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().ck(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().ck(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  dU: 1,
  ao: 1,
  a1: 1,
  aF: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_eventbus_WriteBus(parentDisplayName, displayNameSuffix) {
  this.kp = null;
  this.kq = null;
  this.ko = null;
  this.ex = null;
  this.kq = parentDisplayName;
  this.ko = displayNameSuffix;
  this.kp = (void 0);
  this.ex = new $c_Lcom_raquo_airstream_eventbus_EventBusStream(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
}
$p = $c_Lcom_raquo_airstream_eventbus_WriteBus.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_eventbus_WriteBus;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_WriteBus() {
}
$h_Lcom_raquo_airstream_eventbus_WriteBus.prototype = $p;
$p.cB = (function() {
  return this.kp;
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.gt = (function(nextValue) {
  if ($f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this.ex)) {
    this.ex.fa(nextValue, null);
  }
});
$p.ee = (function(nextError) {
  if ($f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this.ex)) {
    this.ex.f9(nextError, null);
  }
});
$p.dO = (function(nextValue) {
  nextValue.bP(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    this.ee(nextError);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue$2) => {
    this.gt(nextValue$2);
  })));
});
$p.cu = (function() {
  return (("" + this.kq.K()) + this.ko);
});
var $d_Lcom_raquo_airstream_eventbus_WriteBus = new $TypeData().i($c_Lcom_raquo_airstream_eventbus_WriteBus, "com.raquo.airstream.eventbus.WriteBus", ({
  e3: 1,
  ao: 1,
  a1: 1,
  aF: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.l9 = null;
  this.la = false;
  this.p4 = null;
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
$p.sg = (function() {
  if ((!this.la)) {
    this.l9 = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.la = true;
  }
  return this.l9;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  eq: 1,
  eP: 1,
  ez: 1,
  eB: 1
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
  eu: 1,
  bI: 1,
  bL: 1,
  bH: 1
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
  this.lR = null;
  this.lT = false;
  this.lS = null;
  this.i3 = null;
  this.lR = initialContext;
  this.lT = preferStrictMode;
  this.lS = insertFn;
  this.i3 = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.jh = (function(element) {
  var this$1 = this.lR;
  var insertContext = (this$1.d() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().rU(element, this.lT, this.i3) : this$1.v());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((mountContext) => this.lS.jd(insertContext, mountContext.i9, this.i3)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gH(element.c8, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.c(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.cg = (function(element) {
  this.jh(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  eS: 1,
  a5: 1,
  eW: 1,
  eT: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.dW = name;
  $thiz.dX = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.dW = null;
  this.dX = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.nB = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().s5(element, styleProp, value$2);
  })));
});
$p.j8 = (function(values, ev) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.ei(), new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((el, v, _$1) => {
    $m_Lcom_raquo_laminar_DomApi$().s2(el, this, v);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.id = null;
  this.ie = null;
  this.id = $m_s_None$();
  this.ie = $m_Lcom_raquo_laminar_DomApi$().qh(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.jj = (function() {
  return this.id;
});
$p.eh = (function(maybeNextParent) {
  this.id = maybeNextParent;
});
$p.em = (function(maybeNextParent) {
});
$p.cg = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().g7(parentNode, this, (void 0));
});
$p.aj = (function() {
  return this.ie;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  fo: 1,
  aJ: 1,
  a5: 1,
  aT: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.ik = null;
  this.il = null;
  this.ik = $m_s_None$();
  this.il = $m_Lcom_raquo_laminar_DomApi$().qk(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.jj = (function() {
  return this.ik;
});
$p.eh = (function(maybeNextParent) {
  this.ik = maybeNextParent;
});
$p.em = (function(maybeNextParent) {
});
$p.cg = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().g7(parentNode, this, (void 0));
});
$p.sk = (function() {
  return this.il.data;
});
$p.aj = (function() {
  return this.il;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  fu: 1,
  aJ: 1,
  a5: 1,
  aT: 1
}));
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
  fD: 1,
  aV: 1,
  u: 1,
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
  fE: 1,
  a: 1,
  aa: 1,
  a6: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bW)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  bW: 1,
  a: 1,
  aa: 1,
  a6: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fN)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fQ)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  I: 1,
  E: 1,
  u: 1,
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
$p.nL = (function(str) {
  var str$1 = $m_jl_String$().rt(str, 0, str.a.length);
  this.r = (("" + this.r) + str$1);
  return this;
});
$p.h = (function() {
  return this.r;
});
$p.q = (function() {
  return this.r.length;
});
$p.nT = (function(index) {
  return this.r.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  g0: 1,
  aU: 1,
  bU: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g3)));
}
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c1)));
}
class $c_ju_concurrent_ExecutionException extends $c_jl_Exception {
  constructor(message, cause) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_ju_concurrent_ExecutionException = new $TypeData().i($c_ju_concurrent_ExecutionException, "java.util.concurrent.ExecutionException", ({
  ga: 1,
  E: 1,
  u: 1,
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
  this.pi = null;
  this.pi = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => $m_s_None$()));
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
$p.c4 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cA = (function(x) {
  return false;
});
$p.je = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.c = (function(v1) {
  this.je(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  gy: 1,
  e: 1,
  k: 1,
  a: 1
}));
/** @constructor */
function $c_s_PartialFunction$Lifted(pf) {
  this.mE = null;
  this.mE = pf;
}
$p = $c_s_PartialFunction$Lifted.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_s_PartialFunction$Lifted;
/** @constructor */
function $h_s_PartialFunction$Lifted() {
}
$h_s_PartialFunction$Lifted.prototype = $p;
$p.jg = (function(x) {
  var z = this.mE.c4(x, $m_s_PartialFunction$().h8);
  return ((!$m_s_PartialFunction$().rZ(z)) ? new $c_s_Some(z) : $m_s_None$());
});
$p.c = (function(v1) {
  return this.jg(v1);
});
var $d_s_PartialFunction$Lifted = new $TypeData().i($c_s_PartialFunction$Lifted, "scala.PartialFunction$Lifted", ({
  gz: 1,
  bj: 1,
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
$p.w = (function() {
  return (-1);
});
$p.bO = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.dE = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.m = (function() {
  return this;
});
$p.jl = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.dK = (function(n) {
  return this.gG(n, (-1));
});
$p.gG = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.h = (function() {
  return "<iterator>";
});
/** @constructor */
function $c_sc_Map$() {
  this.iL = null;
  this.mO = null;
  this.mP = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.mO = $ct_O__(new $c_O());
  this.mP = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.mO));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  gV: 1,
  gW: 1,
  a: 1,
  b5: 1
}));
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$();
  }
  return $n_sc_Map$;
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.eL = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.eL = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.nS = (function(elems) {
  return this.eL.cX(elems);
});
$p.of = (function(it) {
  return this.eL.av(it);
});
$p.b0 = (function() {
  return this.eL.b0();
});
$p.cX = (function(elems) {
  return this.nS(elems);
});
$p.av = (function(source) {
  return this.of(source);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cv(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => x$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.gm(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.bf(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bf(0) === 0);
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
/** @constructor */
function $c_sci_Iterable$() {
  this.ha = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.qM = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.av.call(this, it));
});
$p.av = (function(it) {
  return this.qM(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  hd: 1,
  gM: 1,
  a: 1,
  P: 1
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
  this.a6 = null;
  $n_sci_LazyList$ = this;
  this.a6 = $ct_sci_LazyList__O__(new $c_sci_LazyList(), $m_sci_LazyList$EmptyMarker$());
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.cX = (function(elems) {
  return this.jz(elems);
});
$p.s0 = (function(ll, n) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef, iRef) => (() => {
    var rest = restRef.eW;
    var i = iRef.e8;
    while (((i > 0) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest) === $m_sci_LazyList$().a6)))) {
      rest = rest.b9();
      restRef.eW = rest;
      i = ((i - 1) | 0);
      iRef.e8 = i;
    }
    return rest;
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.jz = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.w() === 0) ? this.a6 : $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.oK(coll.m()))))));
});
$p.oL = (function(it, suffix) {
  return (it.p() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.l(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.oL(it, suffix))))) : suffix.K());
});
$p.oK = (function(it) {
  return (it.p() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.l(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.oK(it))))) : this.a6);
});
$p.b0 = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.av = (function(source) {
  return this.jz(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  he: 1,
  a: 1,
  P: 1,
  a8: 1
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
  this.n8 = null;
  this.fT = null;
  this.n8 = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.fT = outer;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.pQ = (function(x) {
  this.fT.aZ(x);
  return this;
});
$p.pC = (function(xs) {
  this.fT.aY(xs);
  return this;
});
$p.b1 = (function(size) {
  this.fT.b1(size);
});
$p.b8 = (function() {
  return this.n8.c(this.fT.b8());
});
$p.aZ = (function(elem) {
  return this.pQ(elem);
});
$p.aY = (function(elems) {
  return this.pC(elems);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  i3: 1,
  K: 1,
  M: 1,
  R: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.dw = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.dw = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.b1 = (function(size) {
});
$p.pR = (function(elem) {
  this.dw.aZ(elem);
  return this;
});
$p.pD = (function(xs) {
  this.dw.aY(xs);
  return this;
});
$p.b8 = (function() {
  return this.dw;
});
$p.aZ = (function(elem) {
  return this.pR(elem);
});
$p.aY = (function(elems) {
  return this.pD(elems);
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  be: 1,
  K: 1,
  M: 1,
  R: 1
}));
class $c_s_concurrent_Future$$anon$4 extends $c_jl_Throwable {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  f0() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$4 = new $TypeData().i($c_s_concurrent_Future$$anon$4, "scala.concurrent.Future$$anon$4", ({
  ix: 1,
  u: 1,
  a: 1,
  aP: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
function $isArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.j6)));
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
  this.nt = null;
  this.nt = Promise.resolve((void 0));
}
$p = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
}
$h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = $p;
$p.jt = (function(runnable) {
  this.nt.then(((arg1$2) => {
    try {
      runnable.eg();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gA($m_jl_System$Streams$().eJ);
    }
  }));
});
$p.jY = (function(t) {
  t.gA($m_jl_System$Streams$().eJ);
});
var $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", ({
  jh: 1,
  bh: 1,
  bg: 1,
  aY: 1
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
$p.jt = (function(runnable) {
  setTimeout($m_sjs_js_Any$().qP(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    try {
      runnable.eg();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).gA($m_jl_System$Streams$().eJ);
    }
  }))), 0);
});
$p.jY = (function(t) {
  t.gA($m_jl_System$Streams$().eJ);
});
var $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", ({
  ji: 1,
  bh: 1,
  bg: 1,
  aY: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(f) {
  this.nu = null;
  this.nu = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d() {
}
$h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = $p;
$p.K = (function() {
  return (0, this.nu)();
});
var $d_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d, "scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d", ({
  js: 1,
  jr: 1,
  cW: 1,
  b0: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(f) {
  this.nv = null;
  this.nv = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1() {
}
$h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = $p;
$p.c = (function(x0) {
  return (0, this.nv)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1 = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1, "scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1", ({
  ju: 1,
  jt: 1,
  bj: 1,
  e: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(f) {
  this.nw = null;
  this.nw = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7() {
}
$h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = $p;
$p.eY = (function(x0, x1) {
  return (0, this.nw)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7, "scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7", ({
  jw: 1,
  jv: 1,
  cX: 1,
  b1: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(f) {
  this.nx = null;
  this.nx = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96() {
}
$h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = $p;
$p.jd = (function(x0, x1, x2) {
  return (0, this.nx)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96, "scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96", ({
  jy: 1,
  jx: 1,
  j2: 1,
  gr: 1
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
$p.hH = (function() {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bk)));
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
$p.rd = (function(x) {
  var x$2 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
  if (((x$2 === null) ? (x === null) : x$2.g(x))) {
    return true;
  } else {
    return false;
  }
});
$p.pY = (function(x, default$1) {
  var x$2 = $s_Lcom_github_pwharned_clausula_extension_PopupState$__Creating__Lcom_github_pwharned_clausula_extension_PopupState();
  if (((x$2 === null) ? (x === null) : x$2.g(x))) {
    return (void 0);
  } else {
    return default$1.c(x);
  }
});
$p.cA = (function(x) {
  return this.rd(x);
});
$p.c4 = (function(x, default$1) {
  return this.pY(x, default$1);
});
var $d_Lcom_github_pwharned_clausula_extension_Main$$anon$1 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_Main$$anon$1, "com.github.pwharned.clausula.extension.Main$$anon$1", ({
  db: 1,
  cY: 1,
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage(code) {
  this.fp = null;
  this.k2 = null;
  this.fp = code;
  this.k2 = code;
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
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().bR(this, 976053418, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage) && (this.fp === x$0.fp)));
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c3(this);
});
$p.y = (function() {
  return 1;
});
$p.A = (function() {
  return "DetectedLanguage";
});
$p.z = (function(n) {
  if ((n === 0)) {
    return this.fp;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.ea = (function() {
  return this.fp;
});
$p.o2 = (function() {
  return this.k2;
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.br)));
}
var $d_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_DetectedLanguage, "com.github.pwharned.clausula.extension.domain.DetectedLanguage", ({
  br: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.gh($m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.gi($m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.en(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.gr(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.b3 || (!when))) {
    var $x_1 = f();
  } else {
    this$2.b3 = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.b3 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.cx();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.cz();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.b3 || (!when))) {
    f();
  } else {
    this$3.b3 = true;
    try {
      f();
    } finally {
      this$3.b3 = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().oH($thiz.cz(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().oH($thiz.cx(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.gI())) {
    $thiz.gw();
    $thiz.en(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.gu();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.gv();
    $thiz.en(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.cx();
  var $x_1 = this$.length;
  var this$$1 = $thiz.cz();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_eventbus_EventBus() {
  this.ke = null;
  this.kf = null;
  this.kd = null;
  this.ke = (void 0);
  this.kf = new $c_Lcom_raquo_airstream_eventbus_WriteBus(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))), ".writer");
  this.kd = this.kf.ex;
}
$p = $c_Lcom_raquo_airstream_eventbus_EventBus.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_eventbus_EventBus;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_EventBus() {
}
$h_Lcom_raquo_airstream_eventbus_EventBus.prototype = $p;
$p.cB = (function() {
  return this.ke;
});
$p.cu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ei = (function() {
  return this.kd;
});
var $d_Lcom_raquo_airstream_eventbus_EventBus = new $TypeData().i($c_Lcom_raquo_airstream_eventbus_EventBus, "com.raquo.airstream.eventbus.EventBus", ({
  e1: 1,
  ad: 1,
  aw: 1,
  ao: 1,
  a1: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.kX = $m_Lcom_raquo_airstream_core_Observer$().qQ(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__set__O__V($thiz, value) {
  var tryValue = new $c_s_util_Success(value);
  $thiz.kX.dO(tryValue);
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.kY = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.kY = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.re = (function(x) {
  return true;
});
$p.pZ = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    this.kY.s1(x, _$1);
  })));
});
$p.cA = (function(x) {
  return this.re(x);
});
$p.c4 = (function(x, default$1) {
  return this.pZ(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  eh: 1,
  cY: 1,
  e: 1,
  k: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.ig = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.c8.nE();
  })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.c8.ql();
  })));
  $thiz.dY = (void 0);
  $thiz.fA = $m_sci_Map$EmptyMap$();
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.dY === (void 0))) {
    $thiz.dY = $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.dY;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.dY;
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
  var x = $thiz.dY;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.dY;
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
  var keyItemsWithReason = $thiz.fA.cZ(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.d())) {
      var x0 = these.C();
      var x = x0.aU();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.aG();
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
      these = these.u();
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
        var h = l$tailLocal1.C();
        var t = l$tailLocal1.u();
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
            var x$1 = remaining$tailLocal1.C();
            if (((!(!f(x$1))) !== true)) {
              remaining$tailLocal1 = remaining$tailLocal1.u();
              continue;
            }
            var firstMiss = remaining$tailLocal1;
            var newHead = new $c_sci_$colon$colon(start.C(), $m_sci_Nil$());
            var toProcess = start.u();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.C(), $m_sci_Nil$());
              currentLast.ax = newElem;
              currentLast = newElem;
              toProcess = toProcess.u();
            }
            var next = firstMiss.u();
            var nextToCopy = next;
            while ((!next.d())) {
              var head = next.C();
              if (((!(!f(head))) !== true)) {
                next = next.u();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.C(), $m_sci_Nil$());
                  currentLast.ax = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.u();
                }
                nextToCopy = next.u();
                next = next.u();
              }
            }
            if ((!nextToCopy.d())) {
              currentLast.ax = nextToCopy;
            }
            var result = newHead;
            break _return$1;
          }
        }
      }
    }
  }
  var this$1 = $thiz.fA.cZ(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.bn(t$1.aU()));
  _return$3: {
    var $x_3;
    var l$tailLocal1$1 = this$1;
    while (true) {
      if (l$tailLocal1$1.d()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$tailLocal1$1.C();
        var t$2 = l$tailLocal1$1.u();
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
            var x$2 = remaining$tailLocal1$1.C();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$tailLocal1$1 = remaining$tailLocal1$1.u();
              continue;
            }
            var firstMiss$1 = remaining$tailLocal1$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.C(), $m_sci_Nil$());
            var toProcess$1 = start$1.u();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.C(), $m_sci_Nil$());
              currentLast$1.ax = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.u();
            }
            var next$1 = firstMiss$1.u();
            var nextToCopy$1 = next$1;
            while ((!next$1.d())) {
              var head$1 = next$1.C();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.u();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.C(), $m_sci_Nil$());
                  currentLast$1.ax = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.u();
                }
                nextToCopy$1 = next$1.u();
                next$1 = next$1.u();
              }
            }
            if ((!nextToCopy$1.d())) {
              currentLast$1.ax = nextToCopy$1;
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
    var x0$1 = itemsToAdd.C();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.u();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.C();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.ax = nx;
      t$3 = nx;
      rest = rest.u();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.nN($x_2);
  var domValues = key.i4.o1(key.lU.c($thiz));
  var f$3 = ((elem) => result.bn(elem));
  _return$5: {
    var $x_5;
    var l$tailLocal1$2 = domValues;
    while (true) {
      if (l$tailLocal1$2.d()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$tailLocal1$2.C();
        var t$4 = l$tailLocal1$2.u();
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
            var x$4 = remaining$tailLocal1$2.C();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$tailLocal1$2 = remaining$tailLocal1$2.u();
              continue;
            }
            var firstMiss$2 = remaining$tailLocal1$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.C(), $m_sci_Nil$());
            var toProcess$2 = start$2.u();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.C(), $m_sci_Nil$());
              currentLast$2.ax = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.u();
            }
            var next$2 = firstMiss$2.u();
            var nextToCopy$2 = next$2;
            while ((!next$2.d())) {
              var head$2 = next$2.C();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.u();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.C(), $m_sci_Nil$());
                  currentLast$2.ax = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.u();
                }
                nextToCopy$2 = next$2.u();
                next$2 = next$2.u();
              }
            }
            if ((!nextToCopy$2.d())) {
              currentLast$2.ax = nextToCopy$2;
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
        var h$4 = l$tailLocal1$3.C();
        var t$5 = l$tailLocal1$3.u();
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
            var x$5 = remaining$tailLocal1$3.C();
            if (((!(!f(x$5))) !== true)) {
              remaining$tailLocal1$3 = remaining$tailLocal1$3.u();
              continue;
            }
            var firstMiss$3 = remaining$tailLocal1$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.C(), $m_sci_Nil$());
            var toProcess$3 = start$3.u();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.C(), $m_sci_Nil$());
              currentLast$3.ax = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.u();
            }
            var next$3 = firstMiss$3.u();
            var nextToCopy$3 = next$3;
            while ((!next$3.d())) {
              var head$3 = next$3.C();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.u();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.C(), $m_sci_Nil$());
                  currentLast$3.ax = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.u();
                }
                nextToCopy$3 = next$3.u();
                next$3 = next$3.u();
              }
            }
            if ((!nextToCopy$3.d())) {
              currentLast$3.ax = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break _return$7;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.nN($x_4);
  $thiz.fA = $thiz.fA.dQ(key, newItems);
  key.lW.eY($thiz, key.i4.o4(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.fz, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.fz;
  $thiz.fz = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.d()) && (!maybePrevParent.v().hx().bF.d()));
  var isNextParentActive = ((!maybeNextParent.d()) && (!maybeNextParent.v().hx().bF.d()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.d() ? $m_s_None$() : new $c_s_Some(maybeNextParent.v().hx())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.d()) {
    $thiz.ig.q8();
  } else {
    var x0 = maybeNextOwner.v();
    $thiz.ig.s6(x0);
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
  fB: 1,
  I: 1,
  E: 1,
  u: 1,
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
  fF: 1,
  ai: 1,
  a: 1,
  aa: 1,
  a6: 1
}), ((x) => $isByte(x)));
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fI)));
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
  aW: 1,
  I: 1,
  E: 1,
  u: 1,
  a: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  fK: 1,
  I: 1,
  E: 1,
  u: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  bY: 1,
  I: 1,
  E: 1,
  u: 1,
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
  fP: 1,
  bT: 1,
  bR: 1,
  bV: 1,
  bS: 1
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
  fR: 1,
  I: 1,
  E: 1,
  u: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fT)));
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
  fU: 1,
  ai: 1,
  a: 1,
  aa: 1,
  a6: 1
}), ((x) => $isShort(x)));
class $c_jl_StackOverflowError extends $c_jl_VirtualMachineError {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_StackOverflowError = new $TypeData().i($c_jl_StackOverflowError, "java.lang.StackOverflowError", ({
  fV: 1,
  c1: 1,
  aV: 1,
  u: 1,
  a: 1
}));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  g5: 1,
  I: 1,
  E: 1,
  u: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  g9: 1,
  I: 1,
  E: 1,
  u: 1,
  a: 1
}));
function $ct_ju_NoSuchElementException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  aK: 1,
  I: 1,
  E: 1,
  u: 1,
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
  go: 1,
  gl: 1,
  gm: 1,
  e: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.mD)) {
    if (($thiz.h6 === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.h6;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.ak.N));
      try {
        var $x_1 = ((($thiz.h6 + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.mC = $x_1;
    $thiz.mD = true;
  }
  return $thiz.mC;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.h6 = null;
    this.mC = null;
    this.mD = false;
    this.h6 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  f3() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  gu: 1,
  I: 1,
  E: 1,
  u: 1,
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
$p.d = (function() {
  return (this === $m_s_None$());
});
$p.w = (function() {
  return (this.d() ? 0 : 1);
});
$p.bn = (function(elem) {
  return ((!this.d()) && $m_sr_BoxesRunTime$().n(this.v(), elem));
});
$p.m = (function() {
  return (this.d() ? $m_sc_Iterator$().V : new $c_sc_Iterator$$anon$20(this.v()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fG = 0;
  this.mG = 0;
  this.mF = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mF = outer;
  this.fG = 0;
  this.mG = outer.y();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.p = (function() {
  return (this.fG < this.mG);
});
$p.l = (function() {
  var result = this.mF.z(this.fG);
  this.fG = ((1 + this.fG) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  gB: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
function $ct_T2__O__O__($thiz, _1, _2) {
  $thiz.iF = _1;
  $thiz.iG = _2;
  return $thiz;
}
/** @constructor */
function $c_T2() {
  this.iF = null;
  this.iG = null;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.y = (function() {
  return 2;
});
$p.z = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.aU = (function() {
  return this.iF;
});
$p.aG = (function() {
  return this.iG;
});
$p.h = (function() {
  return (((("(" + this.aU()) + ",") + this.aG()) + ")");
});
$p.A = (function() {
  return "Tuple2";
});
$p.U = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().bR(this, (-116390334), true);
});
$p.g = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().n(this.aU(), x$1.aU()) && $m_sr_BoxesRunTime$().n(this.aG(), x$1.aG()))));
});
$p.nC = (function() {
  return (+this.aU());
});
$p.nD = (function() {
  return (+this.aG());
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b2)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  b2: 1,
  c4: 1,
  g: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.fI = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  gJ: 1,
  gI: 1,
  a: 1,
  P: 1,
  a8: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.c6() + "("), ", ", ")");
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
$p.ru = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator");
});
$p.w = (function() {
  return 0;
});
$p.l = (function() {
  this.ru();
});
$p.gG = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  gO: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$2) {
  this.mI = null;
  this.fJ = false;
  this.mI = a$2;
  this.fJ = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.p = (function() {
  return (!this.fJ);
});
$p.l = (function() {
  if (this.fJ) {
    return $m_sc_Iterator$().V.l();
  } else {
    this.fJ = true;
    return this.mI;
  }
});
$p.gG = (function(from, until) {
  return (((this.fJ || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().V : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  gP: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(f$8, outer) {
  this.mJ = null;
  this.mL = null;
  this.hb = false;
  this.mK = null;
  this.iK = null;
  this.mJ = f$8;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.iK = outer;
  this.mL = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.hb = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.p = (function() {
  while (true) {
    if (this.hb) {
      return true;
    } else if (this.iK.p()) {
      var a = this.iK.l();
      if ((!this.mL.hp(this.mJ.c(a)))) {
        continue;
      }
      this.mK = a;
      this.hb = true;
      return true;
    } else {
      return false;
    }
  }
});
$p.l = (function() {
  if (this.p()) {
    this.hb = false;
    return this.mK;
  } else {
    return $m_sc_Iterator$().V.l();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  gR: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(f$9, outer) {
  this.mM = null;
  this.hc = null;
  this.mM = f$9;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.hc = outer;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.w = (function() {
  return this.hc.w();
});
$p.p = (function() {
  return this.hc.p();
});
$p.l = (function() {
  return this.mM.c(this.hc.l());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  gS: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bu instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bu;
      $thiz.bu = c.bu;
      $thiz.d7 = c.d7;
      if ((c.bV !== null)) {
        if (($thiz.bU === null)) {
          $thiz.bU = c.bU;
        }
        var x$proxy10 = c.bU;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().bq();
        }
        x$proxy10.fK = $thiz.bV;
        $thiz.bV = c.bV;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.bV === null)) {
      $thiz.bu = null;
      $thiz.bU = null;
      return false;
    } else {
      $thiz.bu = $thiz.bV.r0();
      if (($thiz.bU === $thiz.bV)) {
        var x$proxy12 = $thiz.bU;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().bq();
        }
        $thiz.bU = x$proxy12.fK;
      }
      $thiz.bV = $thiz.bV.fK;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.d7) {
        return true;
      } else {
        if ((!(($thiz.bu !== null) && $thiz.bu.p()))) {
          continue;
        }
        $thiz.d7 = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.bu = null;
  this.bV = null;
  this.bU = null;
  this.d7 = false;
  this.bu = from;
  this.bV = null;
  this.bU = null;
  this.d7 = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.p = (function() {
  if (this.d7) {
    return true;
  } else if ((this.bu !== null)) {
    if (this.bu.p()) {
      this.d7 = true;
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
    this.d7 = false;
    var x$proxy13 = this.bu;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().bq();
    }
    return x$proxy13.l();
  } else {
    return $m_sc_Iterator$().V.l();
  }
});
$p.jl = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.bV === null)) {
    this.bV = c;
    this.bU = c;
  } else {
    var x$proxy14 = this.bU;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().bq();
    }
    x$proxy14.fK = c;
    this.bU = c;
  }
  if ((this.bu === null)) {
    this.bu = $m_sc_Iterator$().V;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  cb: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.cH > 0)) {
    if ($thiz.d8.p()) {
      $thiz.d8.l();
      $thiz.cH = (($thiz.cH - 1) | 0);
    } else {
      $thiz.cH = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.bI < 0)) {
    return (-1);
  } else {
    var that = (($thiz.bI - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.d8 = null;
  this.bI = 0;
  this.cH = 0;
  this.d8 = underlying;
  this.bI = limit;
  this.cH = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.w = (function() {
  var size = this.d8.w();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.cH) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.bI < 0)) {
      return dropSize;
    } else {
      var x = this.bI;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.p = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.bI !== 0) && this.d8.p());
});
$p.l = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.bI > 0)) {
    this.bI = ((this.bI - 1) | 0);
    return this.d8.l();
  } else {
    return ((this.bI < 0) ? this.d8.l() : $m_sc_Iterator$().V.l());
  }
});
$p.gG = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.bI < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.cH + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().V;
  } else if ((sum < 0)) {
    this.cH = 2147483647;
    this.bI = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.d8, ((sum - 2147483647) | 0), rest))));
  } else {
    this.cH = sum;
    this.bI = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  gU: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.d())) {
    len = ((1 + len) | 0);
    these = these.u();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len, 0, $thiz));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.bf(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.o3(n);
  if (skipped.d()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.C();
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
      var xs$tailLocal1$tmp1 = xs$tailLocal1.u();
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
      if ((((!a$tailLocal1.d()) && (!b$tailLocal1.d())) && $m_sr_BoxesRunTime$().n(a$tailLocal1.C(), b$tailLocal1.C()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.u();
        var b$tailLocal1$tmp1 = b$tailLocal1.u();
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
  this.fL = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.fL = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.p = (function() {
  return (!this.fL.d());
});
$p.l = (function() {
  var r = this.fL.C();
  this.fL = this.fL.u();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  gY: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.bJ = 0;
  $thiz.fM = 0;
  $thiz.bw = (-1);
  return $thiz;
}
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.cJ === null)) {
    $thiz.cJ = new $ac_I(($m_sci_Node$().fS << 1));
    $thiz.fN = new ($d_sci_Node.r().C)($m_sci_Node$().fS);
  }
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.jH()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.hB()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.e2 = node;
  $thiz.bJ = 0;
  $thiz.fM = node.jV();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bw = ((1 + $thiz.bw) | 0);
  var cursorIndex = ($thiz.bw << 1);
  var lengthIndex = ((1 + ($thiz.bw << 1)) | 0);
  $thiz.fN.a[$thiz.bw] = node;
  $thiz.cJ.a[cursorIndex] = 0;
  $thiz.cJ.a[lengthIndex] = node.jR();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bw = (($thiz.bw - 1) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bw >= 0)) {
    var cursorIndex = ($thiz.bw << 1);
    var lengthIndex = ((1 + ($thiz.bw << 1)) | 0);
    var nodeCursor = $thiz.cJ.a[cursorIndex];
    if ((nodeCursor < $thiz.cJ.a[lengthIndex])) {
      var \u03b41$ = $thiz.cJ;
      \u03b41$.a[cursorIndex] = ((1 + \u03b41$.a[cursorIndex]) | 0);
      var nextNode = $thiz.fN.a[$thiz.bw].jD(nodeCursor);
      if (nextNode.jH()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.hB()) {
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
  this.bJ = 0;
  this.fM = 0;
  this.e2 = null;
  this.bw = 0;
  this.cJ = null;
  this.fN = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.p = (function() {
  return ((this.bJ < this.fM) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.dg = (-1);
  $thiz.bK = (-1);
  $thiz.fO = new $ac_I(((1 + $m_sci_Node$().fS) | 0));
  $thiz.fP = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().fS) | 0));
  return $thiz;
}
function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz;
}
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.he = node;
  $thiz.dg = ((node.jV() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.bK = ((1 + $thiz.bK) | 0);
  $thiz.fP.a[$thiz.bK] = node;
  $thiz.fO.a[$thiz.bK] = ((node.jR() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.bK = (($thiz.bK - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bK >= 0)) {
    var nodeCursor = $thiz.fO.a[$thiz.bK];
    $thiz.fO.a[$thiz.bK] = ((nodeCursor - 1) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.fP.a[$thiz.bK].jD(nodeCursor));
    } else {
      var currNode = $thiz.fP.a[$thiz.bK];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.hB()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
/** @constructor */
function $c_sci_ChampBaseReverseIterator() {
  this.dg = 0;
  this.he = null;
  this.bK = 0;
  this.fO = null;
  this.fP = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.p = (function() {
  return ((this.dg >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.eM !== null);
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
  var dataIx = bm.gl(bitpos);
  var idx = (dataIx << 1);
  var src = bm.ag;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.s(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.s(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bv, dataIx, originalHash);
  bm.W = (bm.W | bitpos);
  bm.ag = dst;
  bm.bv = dstHashes;
  bm.aL = ((1 + bm.aL) | 0);
  bm.bi = ((bm.bi + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.eM = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.co = $thiz.co.nY();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.eM = null;
  this.co = null;
  this.co = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().mB, $m_s_Array$EmptyArrays$().iE, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.b1 = (function(size) {
});
$p.fg = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().ed(keyHash, shift);
    var bitpos = $m_sci_Node$().dI(mask);
    if (((mapNode.W & bitpos) !== 0)) {
      var index = $m_sci_Node$().cy(mapNode.W, mask, bitpos);
      var key0 = mapNode.dL(index);
      var key0UnimprovedHash = mapNode.go(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().n(key0, key))) {
        mapNode.ag.a[((1 + (index << 1)) | 0)] = value;
        return (void 0);
      } else {
        var value0 = mapNode.d0(index);
        var key0Hash = $m_sc_Hashing$().ch(key0UnimprovedHash);
        var subNodeNew = mapNode.jQ(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.ro(bitpos, key0Hash, subNodeNew);
        return (void 0);
      }
    } else if (((mapNode.a4 & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cy(mapNode.a4, mask, bitpos);
      var subNode = mapNode.cY(index$2);
      var beforeSize = subNode.aJ();
      var beforeHash = subNode.dJ();
      this.fg(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.aL = ((mapNode.aL + ((subNode.aJ() - beforeSize) | 0)) | 0);
      mapNode.bi = ((mapNode.bi + ((subNode.dJ() - beforeHash) | 0)) | 0);
      return (void 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
      return (void 0);
    }
  }
  if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.f4(key);
    if ((index$3 < 0)) {
      mapNode.a5 = mapNode.a5.dF($ct_T2__O__O__(new $c_T2(), key, value));
      return (void 0);
    } else {
      mapNode.a5 = mapNode.a5.dP(index$3, $ct_T2__O__O__(new $c_T2(), key, value));
      return (void 0);
    }
  }
  throw new $c_s_MatchError(mapNode);
});
$p.jZ = (function() {
  if ((this.co.aL === 0)) {
    return $m_sci_HashMap$().iP;
  } else if ((this.eM !== null)) {
    return this.eM;
  } else {
    this.eM = new $c_sci_HashMap(this.co);
    return this.eM;
  }
});
$p.nK = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().J(elem.aU());
  var im = $m_sc_Hashing$().ch(h);
  this.fg(this.co, elem.aU(), elem.aG(), h, im, 0);
  return this;
});
$p.e9 = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().J(key);
  this.fg(this.co, key, value, originalHash, $m_sc_Hashing$().ch(originalHash), 0);
  return this;
});
$p.jb = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(xs, this);
  } else if (false) {
    var iter = xs.sH();
    while (iter.p()) {
      var next = iter.l();
      var originalHash = xs.sp(next.oo());
      var hash = $m_sc_Hashing$().ch(originalHash);
      this.fg(this.co, next.ov(), next.p2(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.qw();
    while (iter$2.p()) {
      var next$2 = iter$2.l();
      var originalHash$2 = xs.sp(next$2.oo());
      var hash$2 = $m_sc_Hashing$().ch(originalHash$2);
      this.fg(this.co, next$2.ov(), next$2.p2(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.eb(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2, value$2) => this.e9(key$2, value$2))));
  } else {
    var it = xs.m();
    while (it.p()) {
      this.nK(it.l());
    }
  }
  return this;
});
$p.b8 = (function() {
  return this.jZ();
});
$p.aZ = (function(elem) {
  return this.nK(elem);
});
$p.aY = (function(elems) {
  return this.jb(elems);
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  h9: 1,
  K: 1,
  M: 1,
  R: 1,
  ah: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.eN = null;
  this.mW = null;
  this.q7();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.b1 = (function(size) {
});
$p.q7 = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.mW = ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.js()))));
  this.eN = deferred;
});
$p.rX = (function() {
  this.eN.jJ(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().a6)));
  return this.mW;
});
$p.pN = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.eN.jJ(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $m_sci_LazyList$();
    return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.js())))));
  })));
  this.eN = deferred;
  return this;
});
$p.pA = (function(xs) {
  if ((xs.w() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.eN.jJ(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().oL(xs.m(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.js()))))));
    this.eN = deferred;
  }
  return this;
});
$p.b8 = (function() {
  return this.rX();
});
$p.aZ = (function(elem) {
  return this.pN(elem);
});
$p.aY = (function(elems) {
  return this.pA(elems);
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  hg: 1,
  K: 1,
  M: 1,
  R: 1,
  ah: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.eO = null;
  this.eO = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.p = (function() {
  return (!($p_sci_LazyList__evaluated__sci_LazyList(this.eO) === $m_sci_LazyList$().a6));
});
$p.l = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this.eO) === $m_sci_LazyList$().a6)) {
    return $m_sc_Iterator$().V.l();
  } else {
    var res = this.eO.C();
    this.eO = this.eO.b9();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  hi: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
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
$p.cX = (function(elems) {
  return $m_sci_Nil$().jW(elems);
});
$p.b0 = (function() {
  return new $c_scm_ListBuffer();
});
$p.av = (function(source) {
  return $m_sci_Nil$().jW(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  hl: 1,
  a: 1,
  P: 1,
  a8: 1,
  as: 1
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
  $thiz.eP = outer;
  $thiz.dk = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dk = 0;
  this.eP = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.p = (function() {
  return (this.dk < 2);
});
$p.l = (function() {
  matchResult5$1: {
    var result;
    var x23 = this.dk;
    if ((x23 === 0)) {
      var result = $ct_T2__O__O__(new $c_T2(), this.eP.c9, this.eP.di);
      break matchResult5$1;
    }
    if ((x23 === 1)) {
      var result = $ct_T2__O__O__(new $c_T2(), this.eP.ca, this.eP.dj);
      break matchResult5$1;
    }
    var result = $m_sc_Iterator$().V.l();
  }
  this.dk = ((1 + this.dk) | 0);
  return result;
});
$p.dK = (function(n) {
  this.dk = ((this.dk + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.dl = outer;
  $thiz.dm = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dm = 0;
  this.dl = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.p = (function() {
  return (this.dm < 3);
});
$p.l = (function() {
  var result;
  switch (this.dm) {
    case 0: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dl.bW, this.dl.cK);
      break;
    }
    case 1: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dl.bX, this.dl.cL);
      break;
    }
    case 2: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dl.bY, this.dl.cM);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().V.l();
    }
  }
  this.dm = ((1 + this.dm) | 0);
  return result;
});
$p.dK = (function(n) {
  this.dm = ((this.dm + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.cr = outer;
  $thiz.dn = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dn = 0;
  this.cr = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.p = (function() {
  return (this.dn < 4);
});
$p.l = (function() {
  var result;
  switch (this.dn) {
    case 0: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cr.bx, this.cr.cb);
      break;
    }
    case 1: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cr.by, this.cr.cc);
      break;
    }
    case 2: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cr.bz, this.cr.cd);
      break;
    }
    case 3: {
      var result = $ct_T2__O__O__(new $c_T2(), this.cr.bA, this.cr.ce);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().V.l();
    }
  }
  this.dn = ((1 + this.dn) | 0);
  return result;
});
$p.dK = (function(n) {
  this.dn = ((this.dn + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.cN = null;
  this.fQ = false;
  this.e4 = null;
  this.cN = $m_sci_Map$EmptyMap$();
  this.fQ = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.b1 = (function(size) {
});
$p.oI = (function() {
  return (this.fQ ? this.e4.jZ() : this.cN);
});
$p.pL = (function(key, value) {
  if (this.fQ) {
    this.e4.e9(key, value);
  } else if ((this.cN.aJ() < 4)) {
    this.cN = this.cN.dQ(key, value);
  } else if (this.cN.bn(key)) {
    this.cN = this.cN.dQ(key, value);
  } else {
    this.fQ = true;
    if ((this.e4 === null)) {
      this.e4 = new $c_sci_HashMapBuilder();
    }
    this.cN.q5(this.e4);
    this.e4.e9(key, value);
  }
  return this;
});
$p.nF = (function(xs) {
  return (this.fQ ? (this.e4.jb(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.b8 = (function() {
  return this.oI();
});
$p.aZ = (function(elem) {
  return this.pL(elem.aU(), elem.aG());
});
$p.aY = (function(elems) {
  return this.nF(elems);
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  hv: 1,
  K: 1,
  M: 1,
  R: 1,
  ah: 1
}));
/** @constructor */
function $c_sci_Vector$() {
  this.n0 = 0;
  this.n1 = null;
  $n_sci_Vector$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().os($m_jl_System$SystemProperties$().jF("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 250;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.n0 = $x_1;
  this.n1 = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.cX = (function(elems) {
  return this.jA(elems);
});
$p.jA = (function(it) {
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
          var x = it.a3().aI();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.cn;
            break matchResult3;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.bO(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchResult3;
        }
        var a1$2 = new $ac_O(knownSize);
        it.m().bO(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().nG(it).oJ();
    }
  }
});
$p.av = (function(source) {
  return this.jA(source);
});
$p.b0 = (function() {
  return new $c_sci_VectorBuilder();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  hI: 1,
  a: 1,
  P: 1,
  a8: 1,
  as: 1
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
  if (($thiz.I >= 6)) {
    a = $thiz.aB;
    var i = (($thiz.F >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.s(i, dest, 0, length);
    }
    var num = $thiz.F;
    var t = (((num >> 24) >>> 7) | 0);
    var newOffset = (((33554431 & ((num + t) | 0)) - t) | 0);
    $thiz.B = (($thiz.B - (($thiz.F - newOffset) | 0)) | 0);
    $thiz.F = newOffset;
    if (((($thiz.B >>> 25) | 0) === 0)) {
      $thiz.I = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.I >= 5)) {
    if ((a === null)) {
      a = $thiz.R;
    }
    var i$2 = (31 & (($thiz.F >>> 20) | 0));
    if (($thiz.I === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.s(i$2, dest$1, 0, length$1);
      }
      $thiz.R = a;
      var num$1 = $thiz.F;
      var t$1 = (((num$1 >> 19) >>> 12) | 0);
      var newOffset$1 = (((1048575 & ((num$1 + t$1) | 0)) - t$1) | 0);
      $thiz.B = (($thiz.B - (($thiz.F - newOffset$1) | 0)) | 0);
      $thiz.F = newOffset$1;
      if (((($thiz.B >>> 20) | 0) === 0)) {
        $thiz.I = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().a2(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.I >= 4)) {
    if ((a === null)) {
      a = $thiz.L;
    }
    var i$3 = (31 & (($thiz.F >>> 15) | 0));
    if (($thiz.I === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.s(i$3, dest$2, 0, length$2);
      }
      $thiz.L = a;
      var num$2 = $thiz.F;
      var t$2 = (((num$2 >> 14) >>> 17) | 0);
      var newOffset$2 = (((32767 & ((num$2 + t$2) | 0)) - t$2) | 0);
      $thiz.B = (($thiz.B - (($thiz.F - newOffset$2) | 0)) | 0);
      $thiz.F = newOffset$2;
      if (((($thiz.B >>> 15) | 0) === 0)) {
        $thiz.I = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().a2(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.I >= 3)) {
    if ((a === null)) {
      a = $thiz.G;
    }
    var i$4 = (31 & (($thiz.F >>> 10) | 0));
    if (($thiz.I === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.s(i$4, dest$3, 0, length$3);
      }
      $thiz.G = a;
      var num$3 = $thiz.F;
      var t$3 = (((num$3 >> 9) >>> 22) | 0);
      var newOffset$3 = (((1023 & ((num$3 + t$3) | 0)) - t$3) | 0);
      $thiz.B = (($thiz.B - (($thiz.F - newOffset$3) | 0)) | 0);
      $thiz.F = newOffset$3;
      if (((($thiz.B >>> 10) | 0) === 0)) {
        $thiz.I = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().a2(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.I >= 2)) {
    if ((a === null)) {
      a = $thiz.E;
    }
    var i$5 = (31 & (($thiz.F >>> 5) | 0));
    if (($thiz.I === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.s(i$5, dest$4, 0, length$4);
      }
      $thiz.E = a;
      var num$4 = $thiz.F;
      var t$4 = (((num$4 >> 4) >>> 27) | 0);
      var newOffset$4 = (((31 & ((num$4 + t$4) | 0)) - t$4) | 0);
      $thiz.B = (($thiz.B - (($thiz.F - newOffset$4) | 0)) | 0);
      $thiz.F = newOffset$4;
      if (((($thiz.B >>> 5) | 0) === 0)) {
        $thiz.I = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().a2(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.I >= 1)) {
    if ((a === null)) {
      a = $thiz.O;
    }
    var i$6 = (31 & $thiz.F);
    if (($thiz.I === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.s(i$6, dest$5, 0, length$5);
      }
      $thiz.O = a;
      $thiz.H = (($thiz.H - $thiz.F) | 0);
      $thiz.F = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().a2(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.hf = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.H === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.H) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.O;
    var destPos = $thiz.H;
    data.s(0, dest, destPos, copy1);
    $thiz.H = (($thiz.H + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.O;
      data.s(copy1, dest$1, 0, copy2);
      $thiz.H = (($thiz.H + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.H === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.B) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.B >>> 5) | 0));
      var dest = $thiz.E;
      slice.s(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.E;
        slice.s(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      var num = $thiz.B;
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
      var a$1 = (31 & ((((32768 - $thiz.B) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.B >>> 10) | 0));
      var dest$2 = $thiz.G;
      slice.s(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.G;
        slice.s(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      var num$1 = $thiz.B;
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
      var a$2 = (31 & ((((1048576 - $thiz.B) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.B >>> 15) | 0));
      var dest$4 = $thiz.L;
      slice.s(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.L;
        slice.s(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      var num$2 = $thiz.B;
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
      var a$3 = (31 & ((((33554432 - $thiz.B) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.B >>> 20) | 0));
      var dest$6 = $thiz.R;
      slice.s(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.R;
        slice.s(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      var num$3 = $thiz.B;
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
      var destPos$5 = (($thiz.B >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.aB;
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
  var sliceCount = xs.cE();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.cD(sliceIdx);
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
      if ((($thiz.H === 32) || ($thiz.H === 0))) {
        $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x37);
        break matchResult26;
      }
      $m_sci_VectorStatics$().jw(((x37 - 2) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((data$3) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$3);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.B) | 0);
  var xor = (idx ^ $thiz.B);
  $thiz.B = idx;
  $thiz.H = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.B + n) | 0);
    var xor = (idx ^ $thiz.B);
    $thiz.B = idx;
    $thiz.H = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.O) + ", a2=") + $thiz.E) + ", a3=") + $thiz.G) + ", a4=") + $thiz.L) + ", a5=") + $thiz.R) + ", a6=") + $thiz.aB) + ", depth=") + $thiz.I));
  } else if ((xor < 1024)) {
    if (($thiz.I <= 1)) {
      $thiz.E = new ($d_O.r().r().C)(32);
      $thiz.E.a[0] = $thiz.O;
      $thiz.I = 2;
    }
    $thiz.O = new $ac_O(32);
    $thiz.E.a[(31 & ((idx >>> 5) | 0))] = $thiz.O;
  } else if ((xor < 32768)) {
    if (($thiz.I <= 2)) {
      $thiz.G = new ($d_O.r().r().r().C)(32);
      $thiz.G.a[0] = $thiz.E;
      $thiz.I = 3;
    }
    $thiz.O = new $ac_O(32);
    $thiz.E = new ($d_O.r().r().C)(32);
    $thiz.E.a[(31 & ((idx >>> 5) | 0))] = $thiz.O;
    $thiz.G.a[(31 & ((idx >>> 10) | 0))] = $thiz.E;
  } else if ((xor < 1048576)) {
    if (($thiz.I <= 3)) {
      $thiz.L = new ($d_O.r().r().r().r().C)(32);
      $thiz.L.a[0] = $thiz.G;
      $thiz.I = 4;
    }
    $thiz.O = new $ac_O(32);
    $thiz.E = new ($d_O.r().r().C)(32);
    $thiz.G = new ($d_O.r().r().r().C)(32);
    $thiz.E.a[(31 & ((idx >>> 5) | 0))] = $thiz.O;
    $thiz.G.a[(31 & ((idx >>> 10) | 0))] = $thiz.E;
    $thiz.L.a[(31 & ((idx >>> 15) | 0))] = $thiz.G;
  } else if ((xor < 33554432)) {
    if (($thiz.I <= 4)) {
      $thiz.R = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.R.a[0] = $thiz.L;
      $thiz.I = 5;
    }
    $thiz.O = new $ac_O(32);
    $thiz.E = new ($d_O.r().r().C)(32);
    $thiz.G = new ($d_O.r().r().r().C)(32);
    $thiz.L = new ($d_O.r().r().r().r().C)(32);
    $thiz.E.a[(31 & ((idx >>> 5) | 0))] = $thiz.O;
    $thiz.G.a[(31 & ((idx >>> 10) | 0))] = $thiz.E;
    $thiz.L.a[(31 & ((idx >>> 15) | 0))] = $thiz.G;
    $thiz.R.a[(31 & ((idx >>> 20) | 0))] = $thiz.L;
  } else {
    if (($thiz.I <= 5)) {
      $thiz.aB = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aB.a[0] = $thiz.R;
      $thiz.I = 6;
    }
    $thiz.O = new $ac_O(32);
    $thiz.E = new ($d_O.r().r().C)(32);
    $thiz.G = new ($d_O.r().r().r().C)(32);
    $thiz.L = new ($d_O.r().r().r().r().C)(32);
    $thiz.R = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.E.a[(31 & ((idx >>> 5) | 0))] = $thiz.O;
    $thiz.G.a[(31 & ((idx >>> 10) | 0))] = $thiz.E;
    $thiz.L.a[(31 & ((idx >>> 15) | 0))] = $thiz.G;
    $thiz.R.a[(31 & ((idx >>> 20) | 0))] = $thiz.L;
    $thiz.aB.a[((idx >>> 25) | 0)] = $thiz.R;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aB = null;
  this.R = null;
  this.L = null;
  this.G = null;
  this.E = null;
  this.O = null;
  this.H = 0;
  this.B = 0;
  this.F = 0;
  this.hf = false;
  this.I = 0;
  this.O = new $ac_O(32);
  this.H = 0;
  this.B = 0;
  this.F = 0;
  this.hf = false;
  this.I = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.b1 = (function(size) {
});
$p.r4 = (function(v) {
  var x28 = v.cE();
  switch (x28) {
    case 0: {
      break;
    }
    case 1: {
      this.I = 1;
      var i = v.f.a.length;
      this.H = (31 & i);
      this.B = ((i - this.H) | 0);
      var a = v.f;
      this.O = ((a.a.length === 32) ? a : $m_ju_Arrays$().a2(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bl;
      var a$1 = v.i;
      this.O = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().a2(a$1, 0, 32));
      this.I = 2;
      this.F = ((32 - v.bL) | 0);
      var i$1 = ((v.k + this.F) | 0);
      this.H = (31 & i$1);
      this.B = ((i$1 - this.H) | 0);
      this.E = new ($d_O.r().r().C)(32);
      this.E.a[0] = v.f;
      var dest = this.E;
      var length = d2.a.length;
      d2.s(0, dest, 1, length);
      this.E.a[((1 + d2.a.length) | 0)] = this.O;
      break;
    }
    case 5: {
      var d3 = v.aV;
      var s2 = v.aW;
      var a$2 = v.i;
      this.O = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().a2(a$2, 0, 32));
      this.I = 3;
      this.F = ((1024 - v.be) | 0);
      var i$2 = ((v.k + this.F) | 0);
      this.H = (31 & i$2);
      this.B = ((i$2 - this.H) | 0);
      this.G = new ($d_O.r().r().r().C)(32);
      this.G.a[0] = $m_sci_VectorStatics$().ct(v.f, v.bC);
      var dest$1 = this.G;
      var length$1 = d3.a.length;
      d3.s(0, dest$1, 1, length$1);
      this.E = $m_ju_Arrays$().T(s2, 32);
      this.G.a[((1 + d3.a.length) | 0)] = this.E;
      this.E.a[s2.a.length] = this.O;
      break;
    }
    case 7: {
      var d4 = v.ay;
      var s3 = v.aA;
      var s2$2 = v.az;
      var a$3 = v.i;
      this.O = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().a2(a$3, 0, 32));
      this.I = 4;
      this.F = ((32768 - v.aQ) | 0);
      var i$3 = ((v.k + this.F) | 0);
      this.H = (31 & i$3);
      this.B = ((i$3 - this.H) | 0);
      this.L = new ($d_O.r().r().r().r().C)(32);
      this.L.a[0] = $m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct(v.f, v.b4), v.b5);
      var dest$2 = this.L;
      var length$2 = d4.a.length;
      d4.s(0, dest$2, 1, length$2);
      this.G = $m_ju_Arrays$().T(s3, 32);
      this.E = $m_ju_Arrays$().T(s2$2, 32);
      this.L.a[((1 + d4.a.length) | 0)] = this.G;
      this.G.a[s3.a.length] = this.E;
      this.E.a[s2$2.a.length] = this.O;
      break;
    }
    case 9: {
      var d5 = v.a7;
      var s4 = v.aa;
      var s3$2 = v.a9;
      var s2$3 = v.a8;
      var a$4 = v.i;
      this.O = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().a2(a$4, 0, 32));
      this.I = 5;
      this.F = ((1048576 - v.ap) | 0);
      var i$4 = ((v.k + this.F) | 0);
      this.H = (31 & i$4);
      this.B = ((i$4 - this.H) | 0);
      this.R = new ($d_O.r().r().r().r().r().C)(32);
      this.R.a[0] = $m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct(v.f, v.aD), v.aE), v.aF);
      var dest$3 = this.R;
      var length$3 = d5.a.length;
      d5.s(0, dest$3, 1, length$3);
      this.L = $m_ju_Arrays$().T(s4, 32);
      this.G = $m_ju_Arrays$().T(s3$2, 32);
      this.E = $m_ju_Arrays$().T(s2$3, 32);
      this.R.a[((1 + d5.a.length) | 0)] = this.L;
      this.L.a[s4.a.length] = this.G;
      this.G.a[s3$2.a.length] = this.E;
      this.E.a[s2$3.a.length] = this.O;
      break;
    }
    case 11: {
      var d6 = v.X;
      var s5 = v.a1;
      var s4$2 = v.a0;
      var s3$3 = v.Z;
      var s2$4 = v.Y;
      var a$5 = v.i;
      this.O = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().a2(a$5, 0, 32));
      this.I = 6;
      this.F = ((33554432 - v.ah) | 0);
      var i$5 = ((v.k + this.F) | 0);
      this.H = (31 & i$5);
      this.B = ((i$5 - this.H) | 0);
      this.aB = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aB.a[0] = $m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct($m_sci_VectorStatics$().ct(v.f, v.aq), v.ar), v.as), v.at);
      var dest$4 = this.aB;
      var length$4 = d6.a.length;
      d6.s(0, dest$4, 1, length$4);
      this.R = $m_ju_Arrays$().T(s5, 32);
      this.L = $m_ju_Arrays$().T(s4$2, 32);
      this.G = $m_ju_Arrays$().T(s3$3, 32);
      this.E = $m_ju_Arrays$().T(s2$4, 32);
      this.aB.a[((1 + d6.a.length) | 0)] = this.R;
      this.R.a[s5.a.length] = this.L;
      this.L.a[s4$2.a.length] = this.G;
      this.G.a[s3$3.a.length] = this.E;
      this.E.a[s2$4.a.length] = this.O;
      break;
    }
    default: {
      throw new $c_s_MatchError(x28);
    }
  }
  if (((this.H === 0) && (this.B > 0))) {
    this.H = 32;
    this.B = ((this.B - 32) | 0);
  }
  return this;
});
$p.pO = (function(elem) {
  if ((this.H === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.O.a[this.H] = elem;
  this.H = ((1 + this.H) | 0);
  return this;
});
$p.nG = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.H === 0) && (this.B === 0)) && (!this.hf)) ? this.r4(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.oJ = (function() {
  if (this.hf) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.H + this.B) | 0);
  var realLen = ((len - this.F) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.O;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().T(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & ((len - 1) | 0));
    var i2 = ((((len - 1) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().a2(this.E, 1, i2);
    var prefix1 = this.E.a[0];
    var a$1 = this.E.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().T(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.F) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & ((len - 1) | 0));
    var i2$2 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3 = ((((len - 1) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().a2(this.G, 1, i3);
    var a$2 = this.G.a[0];
    var prefix2 = $m_ju_Arrays$().a2(a$2, 1, a$2.a.length);
    var prefix1$2 = this.G.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().T(this.G.a[i3], i2$2);
    var a$3 = this.G.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().T(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & ((len - 1) | 0));
    var i2$3 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$2 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4 = ((((len - 1) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().a2(this.L, 1, i4);
    var a$4 = this.L.a[0];
    var prefix3 = $m_ju_Arrays$().a2(a$4, 1, a$4.a.length);
    var a$5 = this.L.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().a2(a$5, 1, a$5.a.length);
    var prefix1$3 = this.L.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().T(this.L.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().T(this.L.a[i4].a[i3$2], i2$3);
    var a$6 = this.L.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().T(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & ((len - 1) | 0));
    var i2$4 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$3 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4$2 = (31 & ((((len - 1) | 0) >>> 15) | 0));
    var i5 = ((((len - 1) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().a2(this.R, 1, i5);
    var a$7 = this.R.a[0];
    var prefix4 = $m_ju_Arrays$().a2(a$7, 1, a$7.a.length);
    var a$8 = this.R.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().a2(a$8, 1, a$8.a.length);
    var a$9 = this.R.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().a2(a$9, 1, a$9.a.length);
    var prefix1$4 = this.R.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().T(this.R.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().T(this.R.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().T(this.R.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.R.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().T(a$10, len$4));
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
    var data$5 = $m_ju_Arrays$().a2(this.aB, 1, i6);
    var a$11 = this.aB.a[0];
    var prefix5 = $m_ju_Arrays$().a2(a$11, 1, a$11.a.length);
    var a$12 = this.aB.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().a2(a$12, 1, a$12.a.length);
    var a$13 = this.aB.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().a2(a$13, 1, a$13.a.length);
    var a$14 = this.aB.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().a2(a$14, 1, a$14.a.length);
    var prefix1$5 = this.aB.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().T(this.aB.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().T(this.aB.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().T(this.aB.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().T(this.aB.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.aB.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().T(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.h = (function() {
  return (((((((("VectorBuilder(len1=" + this.H) + ", lenRest=") + this.B) + ", offset=") + this.F) + ", depth=") + this.I) + ")");
});
$p.aZ = (function(elem) {
  return this.pO(elem);
});
$p.aY = (function(elems) {
  return this.nG(elems);
});
$p.b8 = (function() {
  return this.oJ();
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  hQ: 1,
  K: 1,
  M: 1,
  R: 1,
  ah: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.n3 = null;
  $n_scm_ArrayBuffer$ = this;
  this.n3 = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.cX = (function(elems) {
  return this.oi(elems);
});
$p.oi = (function(coll) {
  var k = coll.w();
  if ((k >= 0)) {
    var array = this.oM(this.n3, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bO(array, 0, 2147483647) : coll.m().bO(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).nH(coll);
  }
});
$p.b0 = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.rW = (function(arrayLen, targetLen) {
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
$p.oM = (function(array, curSize, targetSize) {
  var newLen = this.rW(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.s(0, res, 0, curSize);
    return res;
  }
});
$p.av = (function(source) {
  return this.oi(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  hV: 1,
  a: 1,
  P: 1,
  a8: 1,
  as: 1
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
  this.dw = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.b1 = (function(size) {
  this.dw.b1(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  hW: 1,
  be: 1,
  K: 1,
  M: 1,
  R: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.eL = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  i2: 1,
  cc: 1,
  a: 1,
  P: 1,
  a8: 1
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
  this.dw = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.b1 = (function(size) {
  this.dw.b1(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  ia: 1,
  be: 1,
  K: 1,
  M: 1,
  R: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.fU = outer;
  $thiz.dy = 0;
  $thiz.cS = null;
  $thiz.fV = outer.aR.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.dy = 0;
  this.cS = null;
  this.fV = 0;
  this.fU = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.p = (function() {
  if ((this.cS !== null)) {
    return true;
  } else {
    while ((this.dy < this.fV)) {
      var n = this.fU.aR.a[this.dy];
      this.dy = ((1 + this.dy) | 0);
      if ((n !== null)) {
        this.cS = n;
        return true;
      }
    }
    return false;
  }
});
$p.l = (function() {
  if ((!this.p())) {
    return $m_sc_Iterator$().V.l();
  } else {
    var x$proxy10 = this.cS;
    if ((x$proxy10 === null)) {
      $m_sr_Scala3RunTime$().bq();
    }
    var r = this.ju(x$proxy10);
    var x$proxy11 = this.cS;
    if ((x$proxy11 === null)) {
      $m_sr_Scala3RunTime$().bq();
    }
    this.cS = x$proxy11.aS;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.fW = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.fW = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.aY = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b1 = (function(size) {
});
$p.b8 = (function() {
  return this.fW;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.eL = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  id: 1,
  cc: 1,
  a: 1,
  P: 1,
  a8: 1
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
$p.cX = (function(elems) {
  return new $c_scm_ListBuffer().hG(elems);
});
$p.b0 = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.av = (function(source) {
  return new $c_scm_ListBuffer().hG(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  ih: 1,
  a: 1,
  P: 1,
  a8: 1,
  as: 1
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
  this.j3 = null;
  this.nd = null;
  this.nc = 0;
  this.j3 = underlying;
  this.nd = mutationCount;
  this.nc = (mutationCount.K() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.p = (function() {
  $m_scm_MutationTracker$().nU(this.nc, (this.nd.K() | 0), "mutation occurred during iteration");
  return this.j3.p();
});
$p.l = (function() {
  return this.j3.l();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  ij: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
/** @constructor */
function $c_s_concurrent_ExecutionContext$parasitic$() {
  this.nh = null;
  $n_s_concurrent_ExecutionContext$parasitic$ = this;
  this.nh = new $c_jl_ThreadLocal();
}
$p = $c_s_concurrent_ExecutionContext$parasitic$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$parasitic$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$parasitic$() {
}
$h_s_concurrent_ExecutionContext$parasitic$.prototype = $p;
$p.jt = (function(runnable) {
  $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V(this, runnable);
});
$p.jY = (function(t) {
  $m_s_concurrent_ExecutionContext$().eV.c(t);
});
var $d_s_concurrent_ExecutionContext$parasitic$ = new $TypeData().i($c_s_concurrent_ExecutionContext$parasitic$, "scala.concurrent.ExecutionContext$parasitic$", ({
  is: 1,
  bg: 1,
  aY: 1,
  bh: 1,
  io: 1
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
    var x$2 = $thiz.aI();
    var x$3 = x.aI();
    return ((x$2 === null) ? (x$3 === null) : (x$2 === x$3));
  } else {
    return false;
  }
}
function $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz) {
  return (clazz.ak.Z ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.ak.Q())) + "]") : clazz.ak.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.J)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.J)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.nr = null;
  this.g4 = 0;
  this.nq = 0;
  this.nr = x$1;
  this.g4 = 0;
  this.nq = x$1.y();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.p = (function() {
  return (this.g4 < this.nq);
});
$p.l = (function() {
  var result = this.nr.z(this.g4);
  this.g4 = ((1 + this.g4) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  jc: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
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
$p.cX = (function(elems) {
  return this.oj(elems);
});
$p.b0 = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.oj = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).b8();
});
$p.av = (function(source) {
  return this.oj(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  jo: 1,
  as: 1,
  a: 1,
  P: 1,
  a8: 1
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
$p.cX = (function(elems) {
  return this.jB(elems);
});
$p.jB = (function(source) {
  return this.b0().aY(source).b8();
});
$p.b0 = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.dA))), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []));
});
$p.av = (function(source) {
  return this.jB(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  jA: 1,
  as: 1,
  a: 1,
  P: 1,
  a8: 1
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
  this.cW = null;
  this.cW = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().bR(this, (-1408943127), true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_s_util_Failure)) {
    var x = this.cW;
    var x$2 = x$0.cW;
    return ((x === null) ? (x$2 === null) : x.g(x$2));
  } else {
    return false;
  }
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c3(this);
});
$p.y = (function() {
  return 1;
});
$p.A = (function() {
  return "Failure";
});
$p.z = (function(n) {
  if ((n === 0)) {
    return this.cW;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.oq = (function() {
  return true;
});
$p.or = (function() {
  return false;
});
$p.v = (function() {
  var $x_1 = this.cW;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.P : $x_1);
});
$p.b7 = (function(f) {
});
$p.jO = (function(f) {
  return this;
});
$p.oF = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.c4(this.cW, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x18 = $m_s_util_control_NonFatal$().ff(e$2);
    if ((!x18.d())) {
      return new $c_s_util_Failure(x18.v());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
  }
});
$p.bP = (function(fa, fb) {
  return fa.c(this.cW);
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d2)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  d2: 1,
  bk: 1,
  b: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Left(value) {
  this.dB = null;
  this.dB = value;
}
$p = $c_s_util_Left.prototype = new $h_s_util_Either();
$p.constructor = $c_s_util_Left;
/** @constructor */
function $h_s_util_Left() {
}
$h_s_util_Left.prototype = $p;
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().bR(this, 877209692, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Left) && $m_sr_BoxesRunTime$().n(this.dB, x$0.dB)));
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c3(this);
});
$p.y = (function() {
  return 1;
});
$p.A = (function() {
  return "Left";
});
$p.z = (function(n) {
  if ((n === 0)) {
    return this.dB;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_s_util_Left(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d3)));
}
var $d_s_util_Left = new $TypeData().i($c_s_util_Left, "scala.util.Left", ({
  d3: 1,
  d1: 1,
  b: 1,
  g: 1,
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
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().bR(this, 252890491, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Right) && $m_sr_BoxesRunTime$().n(this.bN, x$0.bN)));
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c3(this);
});
$p.y = (function() {
  return 1;
});
$p.A = (function() {
  return "Right";
});
$p.z = (function(n) {
  if ((n === 0)) {
    return this.bN;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_s_util_Right(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d4)));
}
var $d_s_util_Right = new $TypeData().i($c_s_util_Right, "scala.util.Right", ({
  d4: 1,
  d1: 1,
  b: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.dC = null;
  this.dC = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().bR(this, (-1750213842), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().n(this.dC, x$0.dC)));
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c3(this);
});
$p.y = (function() {
  return 1;
});
$p.A = (function() {
  return "Success";
});
$p.z = (function(n) {
  if ((n === 0)) {
    return this.dC;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.oq = (function() {
  return false;
});
$p.or = (function() {
  return true;
});
$p.v = (function() {
  return this.dC;
});
$p.b7 = (function(f) {
  f.c(this.dC);
});
$p.jO = (function(f) {
  try {
    return new $c_s_util_Success(f.c(this.dC));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x2 = $m_s_util_control_NonFatal$().ff(e$2);
    if ((!x2.d())) {
      return new $c_s_util_Failure(x2.v());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
  }
});
$p.oF = (function(pf) {
  return this;
});
$p.bP = (function(fa, fb) {
  try {
    return fb.c(this.dC);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x42 = $m_s_util_control_NonFatal$().ff(e$2);
    if ((!x42.d())) {
      var x43 = x42.v();
      return fa.c(x43);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
  }
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d5)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  d5: 1,
  bk: 1,
  b: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$Created(noteId_$_lo, noteId_$_hi) {
  this.g5 = 0;
  this.g6 = 0;
  this.g5 = noteId_$_lo;
  this.g6 = noteId_$_hi;
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$Created.prototype = new $h_Lcom_github_pwharned_clausula_extension_PopupState();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$Created;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$Created() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$Created.prototype = $p;
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().bR(this, (-793022216), true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Created)) {
    var x_$_lo = this.g5;
    var x_$_hi = this.g6;
    var $x_1 = x$0;
    var x$1_$_lo = $x_1.g5;
    var x$1_$_hi = $x_1.g6;
    return (((x_$_lo ^ x$1_$_lo) | (x_$_hi ^ x$1_$_hi)) === 0);
  } else {
    return false;
  }
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c3(this);
});
$p.y = (function() {
  return 1;
});
$p.A = (function() {
  return "Created";
});
$p.z = (function(n) {
  if ((n === 0)) {
    return $bL(this.g5, this.g6);
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_PopupState$Created(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bl)));
}
var $d_Lcom_github_pwharned_clausula_extension_PopupState$Created = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$Created, "com.github.pwharned.clausula.extension.PopupState$Created", ({
  bl: 1,
  aC: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed(error) {
  this.fi = null;
  this.fi = error;
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed.prototype = new $h_Lcom_github_pwharned_clausula_extension_PopupState();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$Failed() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$Failed.prototype = $p;
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().bR(this, 2021931327, true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Failed)) {
    var x = this.fi;
    var x$2 = x$0.fi;
    return ((x === null) ? (x$2 === null) : x.g(x$2));
  } else {
    return false;
  }
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c3(this);
});
$p.y = (function() {
  return 1;
});
$p.A = (function() {
  return "Failed";
});
$p.z = (function(n) {
  if ((n === 0)) {
    return this.fi;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_PopupState$Failed(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bm)));
}
var $d_Lcom_github_pwharned_clausula_extension_PopupState$Failed = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$Failed, "com.github.pwharned.clausula.extension.PopupState$Failed", ({
  bm: 1,
  aC: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview(word, sentence, language, position) {
  this.eq = null;
  this.ep = null;
  this.eo = null;
  this.gM = null;
  this.eq = word;
  this.ep = sentence;
  this.eo = language;
  this.gM = position;
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview.prototype = new $h_Lcom_github_pwharned_clausula_extension_PopupState();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$Preview() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$Preview.prototype = $p;
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().bR(this, (-2055871664), true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_PopupState$Preview)) {
    if (((this.eq === x$0.eq) && (this.ep === x$0.ep))) {
      var x = this.eo;
      var x$2 = x$0.eo;
      var $x_1 = ((x === null) ? (x$2 === null) : x.g(x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.gM;
      var x$4 = x$0.gM;
      return ((x$3 === null) ? (x$4 === null) : x$3.g(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c3(this);
});
$p.y = (function() {
  return 4;
});
$p.A = (function() {
  return "Preview";
});
$p.z = (function(n) {
  switch (n) {
    case 0: {
      return this.eq;
      break;
    }
    case 1: {
      return this.ep;
      break;
    }
    case 2: {
      return this.eo;
      break;
    }
    case 3: {
      return this.gM;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_PopupState$Preview(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bn)));
}
var $d_Lcom_github_pwharned_clausula_extension_PopupState$Preview = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$Preview, "com.github.pwharned.clausula.extension.PopupState$Preview", ({
  bn: 1,
  aC: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_ApiError(code, msg) {
  this.fj = 0;
  this.er = null;
  this.fj = code;
  this.er = msg;
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
$p.j = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().x(acc, 1008012334);
  acc = $m_sr_Statics$().x(acc, this.fj);
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().J(this.er));
  return $m_sr_Statics$().au(acc, 2);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lcom_github_pwharned_clausula_extension_domain_ApiError) && ((this.fj === x$0.fj) && (this.er === x$0.er))));
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c3(this);
});
$p.y = (function() {
  return 2;
});
$p.A = (function() {
  return "ApiError";
});
$p.z = (function(n) {
  if ((n === 0)) {
    return this.fj;
  }
  if ((n === 1)) {
    return this.er;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Lcom_github_pwharned_clausula_extension_domain_ApiError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bp)));
}
var $d_Lcom_github_pwharned_clausula_extension_domain_ApiError = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_ApiError, "com.github.pwharned.clausula.extension.domain.ApiError", ({
  bp: 1,
  ac: 1,
  bu: 1,
  b: 1,
  g: 1,
  a: 1
}));
function $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__($thiz, code, displayName, isRTL, sentenceStrategy) {
  $thiz.bg = code;
  $thiz.bs = displayName;
  return $thiz;
}
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage() {
  this.bg = null;
  this.bs = null;
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
$p.ea = (function() {
  return this.bg;
});
$p.o2 = (function() {
  return this.bs;
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage = new $TypeData().i(0, "com.github.pwharned.clausula.extension.domain.KnownLanguage", ({
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fr = null;
    this.fq = null;
    this.fr = error;
    this.fq = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().f2(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().f2(cause)), null, true, true);
    this.op(cause);
  }
  U() {
    return new $c_s_Product$$anon$1(this);
  }
  j() {
    return $m_s_util_hashing_MurmurHash3$().ji(this, (-889275714), null);
  }
  g(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.fr;
      var x$2 = x$0.fr;
      if (((x === null) ? (x$2 === null) : x.g(x$2))) {
        var x$3 = this.fq;
        var x$4 = x$0.fq;
        return ((x$3 === null) ? (x$4 === null) : x$3.g(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  y() {
    return 2;
  }
  A() {
    return "ErrorHandlingError";
  }
  z(n) {
    if ((n === 0)) {
      return this.fr;
    }
    if ((n === 1)) {
      return this.fq;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  h() {
    return ((("ErrorHandlingError: " + this.fr) + "; cause: ") + this.fq);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bA)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  bA: 1,
  aD: 1,
  u: 1,
  a: 1,
  b: 1,
  g: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.fs = null;
    this.fs = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().f2(error)), null, true, true);
  }
  U() {
    return new $c_s_Product$$anon$1(this);
  }
  j() {
    return $m_s_util_hashing_MurmurHash3$().ji(this, (-889275714), null);
  }
  g(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.fs;
      var x$2 = x$0.fs;
      return ((x === null) ? (x$2 === null) : x.g(x$2));
    } else {
      return false;
    }
  }
  y() {
    return 1;
  }
  A() {
    return "ObserverError";
  }
  z(n) {
    if ((n === 0)) {
      return this.fs;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  h() {
    return ("ObserverError: " + this.fs);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bB)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  bB: 1,
  aD: 1,
  u: 1,
  a: 1,
  b: 1,
  g: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fu = null;
    this.ft = null;
    this.fu = error;
    this.ft = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().f2(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().f2(cause)), null, true, true);
    this.op(cause);
  }
  U() {
    return new $c_s_Product$$anon$1(this);
  }
  j() {
    return $m_s_util_hashing_MurmurHash3$().ji(this, (-889275714), null);
  }
  g(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.fu;
      var x$2 = x$0.fu;
      if (((x === null) ? (x$2 === null) : x.g(x$2))) {
        var x$3 = this.ft;
        var x$4 = x$0.ft;
        return ((x$3 === null) ? (x$4 === null) : x$3.g(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  y() {
    return 2;
  }
  A() {
    return "ObserverErrorHandlingError";
  }
  z(n) {
    if ((n === 0)) {
      return this.fu;
    }
    if ((n === 1)) {
      return this.ft;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  h() {
    return ((("ObserverErrorHandlingError: " + this.fu) + "; cause: ") + this.ft);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bC: 1,
  aD: 1,
  u: 1,
  a: 1,
  b: 1,
  g: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.ev = null;
    this.eu = 0;
    this.ev = trx;
    this.eu = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  U() {
    return new $c_s_Product$$anon$1(this);
  }
  j() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().x(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().J(this.ev));
    acc = $m_sr_Statics$().x(acc, this.eu);
    return $m_sr_Statics$().au(acc, 2);
  }
  g(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.eu === x$0.eu)) {
        var x = this.ev;
        var x$2 = x$0.ev;
        return ((x === null) ? (x$2 === null) : (x === x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  y() {
    return 2;
  }
  A() {
    return "TransactionDepthExceeded";
  }
  z(n) {
    if ((n === 0)) {
      return this.ev;
    }
    if ((n === 1)) {
      return this.eu;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  h() {
    return ((("TransactionDepthExceeded: " + this.ev) + "; maxDepth: ") + this.eu);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  bD: 1,
  aD: 1,
  u: 1,
  a: 1,
  b: 1,
  g: 1
}));
var $d_Lcom_raquo_airstream_core_EventStream = new $TypeData().i(1, "com.raquo.airstream.core.EventStream", ({
  aE: 1,
  ad: 1,
  a1: 1,
  am: 1,
  an: 1,
  aw: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.hI();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.kW = null;
  this.kX = null;
  this.hY = null;
  this.hX = null;
  this.d5 = null;
  this.kW = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.hY = initial;
  this.hX = new $c_Lcom_raquo_airstream_state_VarSignal(this.hY, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.d5 = this.hX;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.cB = (function() {
  return this.kW;
});
$p.cu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.s1 = (function(value, transaction) {
  this.hY = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.hX, value, transaction);
});
$p.ei = (function() {
  return this.d5;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  ed: 1,
  ad: 1,
  aR: 1,
  ao: 1,
  a1: 1,
  ef: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1(key$1) {
  this.dW = null;
  this.dX = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$1, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1, "com.raquo.laminar.defs.styles.StyleProps$$anon$1", ({
  eF: 1,
  aI: 1,
  a9: 1,
  aG: 1,
  aH: 1,
  bK: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43(key$43) {
  this.dW = null;
  this.dX = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$43, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43, "com.raquo.laminar.defs.styles.StyleProps$$anon$43", ({
  eI: 1,
  aI: 1,
  a9: 1,
  aG: 1,
  aH: 1,
  eL: 1
}));
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.ih;
  if ((x === (void 0))) {
    $thiz.ih = $m_sjs_js_defined$().nQ($m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.mb;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].sJ() === propDomName)) {
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
  this.fz = null;
  this.c8 = null;
  this.ig = null;
  this.dY = null;
  this.fA = null;
  this.ii = null;
  this.ba = null;
  this.mb = null;
  this.ih = null;
  this.ii = tag;
  this.ba = ref;
  this.fz = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.mb = (void 0);
  this.ih = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.jj = (function() {
  return this.fz;
});
$p.cg = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().g7(parentNode, this, (void 0));
});
$p.hx = (function() {
  return this.c8;
});
$p.nX = (function(x$0) {
  this.c8 = x$0;
});
$p.em = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.eh = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.qc = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().rc(this.ba)) {
    var x1 = this.ii;
    if (false) {
      return x1.sB();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().lQ;
  }
});
$p.ra = (function(propDomName) {
  var x = this.qc();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().r1(x, propDomName, 0));
});
$p.rx = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.ra(key.eD)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.eD)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.eD) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().o0(this.ba)) + "` that already has an input controller for `") + key.eD) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.eD);
      }
    }
  }
});
$p.h = (function() {
  return (("ReactiveHtmlElement(" + ((this.ba !== null) ? this.ba.outerHTML : ("tag=" + this.ii.im))) + ")");
});
$p.aj = (function() {
  return this.ba;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  fs: 1,
  aJ: 1,
  a5: 1,
  aT: 1,
  bP: 1,
  fq: 1
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
  fC: 1,
  bY: 1,
  I: 1,
  E: 1,
  u: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bX)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bX: 1,
  ai: 1,
  a: 1,
  aa: 1,
  a6: 1,
  ay: 1
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
  fJ: 1,
  ai: 1,
  a: 1,
  aa: 1,
  a6: 1,
  ay: 1
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
  fL: 1,
  ai: 1,
  a: 1,
  aa: 1,
  a6: 1,
  ay: 1
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
  return $m_RTLong$().oU($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bZ)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  bZ: 1,
  ai: 1,
  a: 1,
  aa: 1,
  a6: 1,
  ay: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  fS: 1,
  aW: 1,
  I: 1,
  E: 1,
  u: 1,
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
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().sm(ch);
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
  return $m_ju_regex_PatternCompiler$().q9(regex, 0).rh($thiz, limit);
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
  fY: 1,
  a: 1,
  aa: 1,
  aU: 1,
  a6: 1,
  ay: 1
}), ((x) => ((typeof x) === "string")));
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.my = null;
    this.mA = null;
    this.mz = 0;
    this.my = desc;
    this.mA = regex;
    this.mz = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  f3() {
    var idx = this.mz;
    var re = this.mA;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.my + indexHint) + "\n") + re);
    return ((((idx >= 0) && (re !== null)) && (idx < re.length)) ? (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^") : base);
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().i($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  gj: 1,
  aW: 1,
  I: 1,
  E: 1,
  u: 1,
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
$p.j = (function() {
  return 2433880;
});
$p.h = (function() {
  return "None";
});
$p.y = (function() {
  return 0;
});
$p.A = (function() {
  return "None";
});
$p.z = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.qS = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get");
});
$p.v = (function() {
  this.qS();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  gv: 1,
  c3: 1,
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
  this.d6 = null;
  this.d6 = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().bR(this, 1323286827, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().n(this.d6, x$0.d6)));
});
$p.h = (function() {
  return $m_sr_ScalaRunTime$().c3(this);
});
$p.y = (function() {
  return 1;
});
$p.A = (function() {
  return "Some";
});
$p.z = (function(n) {
  if ((n === 0)) {
    return this.d6;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.v = (function() {
  return this.d6;
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c5)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  c5: 1,
  c3: 1,
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
$p.w = (function() {
  return (-1);
});
$p.b7 = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.f1 = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.d = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.bO = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.dE = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.gn = (function(coll) {
  return this.bQ().av(coll);
});
$p.gq = (function() {
  return this.bQ().b0();
});
$p.c6 = (function() {
  return this.br();
});
$p.gm = (function(coll) {
  return this.gn(coll);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.h9 = null;
  this.cF = 0;
  this.fH = 0;
  this.h9 = xs;
  this.cF = 0;
  this.fH = $m_jl_reflect_Array$().bo(this.h9);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.w = (function() {
  return ((this.fH - this.cF) | 0);
});
$p.p = (function() {
  return (this.cF < this.fH);
});
$p.l = (function() {
  if ((this.cF >= $m_jl_reflect_Array$().bo(this.h9))) {
    $m_sc_Iterator$().V.l();
  }
  var r = $m_sr_ScalaRunTime$().dG(this.h9, this.cF);
  this.cF = ((1 + this.cF) | 0);
  return r;
});
$p.dK = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.cF + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.fH;
    } else {
      var a = this.fH;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.cF = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  gH: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.iJ = self;
  $thiz.cG = 0;
  $thiz.bb = self.q();
  return $thiz;
}
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bb) ? $thiz.bb : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.iJ = null;
  this.cG = 0;
  this.bb = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.w = (function() {
  return this.bb;
});
$p.p = (function() {
  return (this.bb > 0);
});
$p.l = (function() {
  if ((this.bb > 0)) {
    var r = this.iJ.t(this.cG);
    this.cG = ((1 + this.cG) | 0);
    this.bb = ((this.bb - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().V.l();
  }
});
$p.dK = (function(n) {
  if ((n > 0)) {
    this.cG = ((this.cG + n) | 0);
    var b = ((this.bb - n) | 0);
    this.bb = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.gG = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bb = ((b < 0) ? 0 : b);
  this.cG = ((this.cG + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  ca: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.fW = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().V);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.pM = (function(elem) {
  this.fW = this.fW.jl(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.aZ = (function(elem) {
  return this.pM(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  gQ: 1,
  ic: 1,
  K: 1,
  M: 1,
  R: 1,
  ah: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.cZ(x, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => default$1.c(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.m();
  while (it.p()) {
    var next = it.l();
    f.eY(next.aU(), next.aG());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.aU();
    var v = x$1$2.aG();
    return ((k + " -> ") + v);
  })), $thiz.m()), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.gq();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.m();
  while (it.p()) {
    var next = it.l();
    if (seen.hp(f.c(next))) {
      builder.aZ(next);
    }
  }
  return builder.b8();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.dM().b0();
  b.aY($thiz);
  b.aY(suffix);
  return b.b8();
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.mU)) {
    $thiz.mT = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.mU = true;
  }
  return $thiz.mT;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.iN = null;
  this.mT = null;
  this.mU = false;
  $n_sci_ArraySeq$ = this;
  this.iN = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.jy = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.oX($m_s_Array$().oe(it, tag)));
});
$p.hE = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$2) => this.oX($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2, evidence$1)))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.oX = (function(x) {
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
$p.jx = (function(it, evidence$1) {
  return this.jy(it, evidence$1);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  h6: 1,
  a: 1,
  c8: 1,
  c6: 1,
  c7: 1,
  ce: 1
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
  this.bJ = 0;
  this.fM = 0;
  this.e2 = null;
  this.bw = 0;
  this.cJ = null;
  this.fN = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_ChampBaseIterator__sci_Node__(this, hm$1.bj);
  while (this.p()) {
    var originalHash = this.e2.go(this.bJ);
    outer.fg(outer.co, this.e2.dL(this.bJ), this.e2.d0(this.bJ), originalHash, $m_sc_Hashing$().ch(originalHash), 0);
    this.bJ = ((1 + this.bJ) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.l = (function() {
  return $m_sc_Iterator$().V.l();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  ha: 1,
  cr: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.s)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.s)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.dk = 0;
  this.eP = null;
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
  hp: 1,
  hq: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dm = 0;
  this.dl = null;
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
  hr: 1,
  hs: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dn = 0;
  this.cr = null;
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
  ht: 1,
  hu: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.dg = 0;
  this.he = null;
  this.bK = 0;
  this.fO = null;
  this.fP = null;
  this.iR = 0;
  this.mX = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.iR = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().oW(this.iR, $m_sr_Statics$().J(this.mX), (-889275714));
});
$p.rw = (function() {
  if ((!this.p())) {
    $m_sc_Iterator$().V.l();
  }
  this.iR = this.he.go(this.dg);
  this.mX = this.he.d0(this.dg);
  this.dg = ((this.dg - 1) | 0);
  return this;
});
$p.l = (function() {
  return this.rw();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  hw: 1,
  h7: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.bJ = 0;
  this.fM = 0;
  this.e2 = null;
  this.bw = 0;
  this.cJ = null;
  this.fN = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.rv = (function() {
  if ((!this.p())) {
    $m_sc_Iterator$().V.l();
  }
  var payload = this.e2.on(this.bJ);
  this.bJ = ((1 + this.bJ) | 0);
  return payload;
});
$p.l = (function() {
  return this.rv();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  hx: 1,
  cr: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bB <= $thiz.al)) {
    $m_sc_Iterator$().V.l();
  }
  $thiz.dq = ((1 + $thiz.dq) | 0);
  var slice = $thiz.iT.cD($thiz.dq);
  while ((slice.a.length === 0)) {
    $thiz.dq = ((1 + $thiz.dq) | 0);
    slice = $thiz.iT.cD($thiz.dq);
  }
  $thiz.fR = $thiz.e6;
  var count = $thiz.mZ;
  var idx = $thiz.dq;
  var c = (((count + ((count >>> 31) | 0)) | 0) >> 1);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.dp = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x46 = $thiz.dp;
  switch (x46) {
    case 1: {
      $thiz.aM = slice;
      break;
    }
    case 2: {
      $thiz.aN = slice;
      break;
    }
    case 3: {
      $thiz.bk = slice;
      break;
    }
    case 4: {
      $thiz.cf = slice;
      break;
    }
    case 5: {
      $thiz.e5 = slice;
      break;
    }
    case 6: {
      $thiz.iS = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x46);
    }
  }
  $thiz.e6 = (($thiz.fR + Math.imul(slice.a.length, (1 << Math.imul(5, (($thiz.dp - 1) | 0))))) | 0);
  if (($thiz.e6 > $thiz.cP)) {
    $thiz.e6 = $thiz.cP;
  }
  if (($thiz.dp > 1)) {
    $thiz.eQ = (((1 << Math.imul(5, $thiz.dp)) - 1) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.al - $thiz.bB) | 0) + $thiz.cP) | 0);
  if ((pos === $thiz.e6)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.dp > 1)) {
    var io = ((pos - $thiz.fR) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.eQ ^ io));
    $thiz.eQ = io;
  }
  $thiz.bB = (($thiz.bB - $thiz.al) | 0);
  var a = $thiz.aM.a.length;
  var b = $thiz.bB;
  $thiz.cO = ((a < b) ? a : b);
  $thiz.al = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aM = $thiz.aN.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aN = $thiz.bk.a[(31 & ((io >>> 10) | 0))];
    $thiz.aM = $thiz.aN.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bk = $thiz.cf.a[(31 & ((io >>> 15) | 0))];
    $thiz.aN = $thiz.bk.a[0];
    $thiz.aM = $thiz.aN.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cf = $thiz.e5.a[(31 & ((io >>> 20) | 0))];
    $thiz.bk = $thiz.cf.a[0];
    $thiz.aN = $thiz.bk.a[0];
    $thiz.aM = $thiz.aN.a[0];
  } else {
    $thiz.e5 = $thiz.iS.a[((io >>> 25) | 0)];
    $thiz.cf = $thiz.e5.a[0];
    $thiz.bk = $thiz.cf.a[0];
    $thiz.aN = $thiz.bk.a[0];
    $thiz.aM = $thiz.aN.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.aM = $thiz.aN.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.aN = $thiz.bk.a[(31 & ((io >>> 10) | 0))];
    $thiz.aM = $thiz.aN.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bk = $thiz.cf.a[(31 & ((io >>> 15) | 0))];
    $thiz.aN = $thiz.bk.a[(31 & ((io >>> 10) | 0))];
    $thiz.aM = $thiz.aN.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cf = $thiz.e5.a[(31 & ((io >>> 20) | 0))];
    $thiz.bk = $thiz.cf.a[(31 & ((io >>> 15) | 0))];
    $thiz.aN = $thiz.bk.a[(31 & ((io >>> 10) | 0))];
    $thiz.aM = $thiz.aN.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.e5 = $thiz.iS.a[((io >>> 25) | 0)];
    $thiz.cf = $thiz.e5.a[(31 & ((io >>> 20) | 0))];
    $thiz.bk = $thiz.cf.a[(31 & ((io >>> 15) | 0))];
    $thiz.aN = $thiz.bk.a[(31 & ((io >>> 10) | 0))];
    $thiz.aM = $thiz.aN.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.iT = null;
  this.cP = 0;
  this.mZ = 0;
  this.aM = null;
  this.aN = null;
  this.bk = null;
  this.cf = null;
  this.e5 = null;
  this.iS = null;
  this.cO = 0;
  this.al = 0;
  this.eQ = 0;
  this.bB = 0;
  this.dq = 0;
  this.dp = 0;
  this.fR = 0;
  this.e6 = 0;
  this.iT = v;
  this.cP = totalLength;
  this.mZ = sliceCount;
  this.aM = v.f;
  this.cO = this.aM.a.length;
  this.al = 0;
  this.eQ = 0;
  this.bB = this.cP;
  this.dq = 0;
  this.dp = 1;
  this.fR = 0;
  this.e6 = this.cO;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.w = (function() {
  return ((this.bB - this.al) | 0);
});
$p.p = (function() {
  return (this.bB > this.al);
});
$p.l = (function() {
  if ((this.al === this.cO)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.aM.a[this.al];
  this.al = ((1 + this.al) | 0);
  return r;
});
$p.dK = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.al - this.bB) | 0) + this.cP) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.cP;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.cP)) {
      this.al = 0;
      this.bB = 0;
      this.cO = 0;
    } else {
      while ((newpos >= this.e6)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.fR) | 0);
      if ((this.dp > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.eQ ^ io));
        this.eQ = io;
      }
      this.cO = this.aM.a.length;
      this.al = (31 & io);
      this.bB = ((this.al + ((this.cP - newpos) | 0)) | 0);
      if ((this.cO > this.bB)) {
        this.cO = this.bB;
      }
    }
  }
  return this;
});
$p.bO = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().bo(xs);
  var srcLen = ((this.bB - this.al) | 0);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? xsLen : ((xsLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var total$1 = ((total < 0) ? 0 : total);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total$1)) {
    if ((this.al === this.cO)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total$1 - copied) | 0);
    var b = ((this.aM.a.length - this.al) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.aM;
      var srcPos = this.al;
      var destPos = ((start + copied) | 0);
      src.s(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().gk(this.aM, this.al, xs, ((start + copied) | 0), count);
    }
    this.al = ((this.al + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total$1;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  hz: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1,
  F: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.iX = 0;
  $thiz.n5 = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.iX = 0;
  this.n5 = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.b1 = (function(size) {
  if ((this.iX < size)) {
    this.rV(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.iZ = null;
  this.n7 = null;
  $n_scm_ArraySeq$ = this;
  this.iZ = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.n7 = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.qK = (function(it, evidence$1) {
  return this.jN($m_s_Array$().oe(it, evidence$1));
});
$p.hE = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => this.jN(x$2))), new $c_scm_ArrayBuilder$generic(evidence$1.aI()));
});
$p.jN = (function(x) {
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
$p.jx = (function(it, evidence$1) {
  return this.qK(it, evidence$1);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  i1: 1,
  a: 1,
  c8: 1,
  c6: 1,
  c7: 1,
  ce: 1
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
  this.dy = 0;
  this.cS = null;
  this.fV = 0;
  this.fU = null;
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
$p.ju = (function(nd) {
  return nd.eU;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  i7: 1,
  bf: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.dy = 0;
  this.cS = null;
  this.fV = 0;
  this.fU = null;
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
$p.ju = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  i8: 1,
  bf: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.dy = 0;
  this.cS = null;
  this.fV = 0;
  this.fU = null;
  this.j2 = 0;
  this.nb = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.nb = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.j2 = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.j = (function() {
  return this.j2;
});
$p.ju = (function(nd) {
  this.j2 = $p_scm_HashSet__improveHash__I__I(this.nb, nd.cT);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  i9: 1,
  bf: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.g3 = null;
  this.g3 = runtimeClass;
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
$p.j = (function() {
  return $m_sr_Statics$().J(this.g3);
});
$p.h = (function() {
  return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.g3);
});
$p.aI = (function() {
  return this.g3;
});
$p.bp = (function(len) {
  return this.g3.ak.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  iC: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28(key$28) {
  this.dW = null;
  this.dX = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$28, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28, "com.raquo.laminar.defs.styles.StyleProps$$anon$28", ({
  eG: 1,
  aI: 1,
  a9: 1,
  aG: 1,
  aH: 1,
  eK: 1,
  eJ: 1
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
$p.ef = (function(s) {
  this.rC(s);
  this.ot("\n");
});
/** @constructor */
function $c_T2$mcDD$sp(_1$mcD$sp, _2$mcD$sp) {
  this.iF = null;
  this.iG = null;
  this.iH = 0.0;
  this.iI = 0.0;
  this.iH = _1$mcD$sp;
  this.iI = _2$mcD$sp;
  $ct_T2__O__O__(this, null, null);
}
$p = $c_T2$mcDD$sp.prototype = new $h_T2();
$p.constructor = $c_T2$mcDD$sp;
/** @constructor */
function $h_T2$mcDD$sp() {
}
$h_T2$mcDD$sp.prototype = $p;
$p.nC = (function() {
  return this.iH;
});
$p.nD = (function() {
  return this.iI;
});
$p.aG = (function() {
  return this.iI;
});
$p.aU = (function() {
  return this.iH;
});
var $d_T2$mcDD$sp = new $TypeData().i($c_T2$mcDD$sp, "scala.Tuple2$mcDD$sp", ({
  gD: 1,
  b2: 1,
  c4: 1,
  g: 1,
  b: 1,
  a: 1,
  gC: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.c6() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aj)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.iX = 0;
  this.n5 = 0;
  this.eT = null;
  this.n6 = false;
  this.iY = null;
  this.eT = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.n6 = (elementClass === $d_C.l());
  this.iY = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.nJ = (function(elem) {
  var unboxedElem = (this.n6 ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().gC(this.eT) : elem));
  this.iY.push(unboxedElem);
  return this;
});
$p.pB = (function(xs) {
  var it = xs.m();
  while (it.p()) {
    this.nJ(it.l());
  }
  return this;
});
$p.rV = (function(size) {
});
$p.b8 = (function() {
  return $m_scm_ArrayBuilder$().gB(((this.eT === $d_V.l()) ? $d_jl_Void.l() : (((this.eT === $d_sr_Null$.l()) || (this.eT === $d_sr_Nothing$.l())) ? $d_O.l() : this.eT)), this.iY);
});
$p.h = (function() {
  return "ArrayBuilder.generic";
});
$p.aZ = (function(elem) {
  return this.nJ(elem);
});
$p.aY = (function(elems) {
  return this.pB(elems);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  i0: 1,
  hY: 1,
  K: 1,
  M: 1,
  R: 1,
  ah: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.iJ = null;
  this.cG = 0;
  this.bb = 0;
  this.na = null;
  this.n9 = 0;
  this.na = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.n9 = (mutationCount.K() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.p = (function() {
  $m_scm_MutationTracker$().nU(this.n9, (this.na.K() | 0), "mutation occurred during iteration");
  return (this.bb > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  i4: 1,
  ca: 1,
  v: 1,
  c: 1,
  d: 1,
  w: 1,
  a: 1
}));
class $c_s_concurrent_Future$$anon$1 extends $c_ju_NoSuchElementException {
  constructor(t$2) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("Future.collect partial function is not defined at: " + t$2), null, true, true);
  }
  f0() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$1 = new $TypeData().i($c_s_concurrent_Future$$anon$1, "scala.concurrent.Future$$anon$1", ({
  iu: 1,
  aK: 1,
  I: 1,
  E: 1,
  u: 1,
  a: 1,
  aP: 1
}));
class $c_s_concurrent_Future$$anon$2 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.filter predicate is not satisfied", null, true, true);
  }
  f0() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$2 = new $TypeData().i($c_s_concurrent_Future$$anon$2, "scala.concurrent.Future$$anon$2", ({
  iv: 1,
  aK: 1,
  I: 1,
  E: 1,
  u: 1,
  a: 1,
  aP: 1
}));
class $c_s_concurrent_Future$$anon$3 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.failed not completed with a throwable.", null, true, true);
  }
  f0() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$3 = new $TypeData().i($c_s_concurrent_Future$$anon$3, "scala.concurrent.Future$$anon$3", ({
  iw: 1,
  aK: 1,
  I: 1,
  E: 1,
  u: 1,
  a: 1,
  aP: 1
}));
function $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, initial) {
  $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, initial);
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__($thiz, result) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().gD(result));
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().fZ);
  return $thiz;
}
function $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try($thiz) {
  var \u03b4this$tailLocal2 = $thiz;
  while (true) {
    var state = \u03b4this$tailLocal2.M;
    if ((state instanceof $c_s_util_Try)) {
      return state;
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      \u03b4this$tailLocal2 = state.fc(\u03b4this$tailLocal2);
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
      if (\u03b4this$tailLocal4.gj(state$tailLocal2, ((state$tailLocal2 !== $m_s_concurrent_impl_Promise$().fZ) ? $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(\u03b4this$tailLocal4, callbacks, state$tailLocal2) : callbacks))) {
        return callbacks;
      } else {
        state$tailLocal2 = \u03b4this$tailLocal4.M;
      }
    } else {
      var p = state$tailLocal2.fc(\u03b4this$tailLocal4);
      var state$tailLocal2$tmp1 = p.M;
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
      var left$tailLocal1$tmp1 = m.j6;
      var right$tailLocal1$tmp1 = new $c_s_concurrent_impl_Promise$ManyCallbacks(m.j5, right$tailLocal1);
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
      m.j5.oQ(resolved);
      callbacks$tailLocal1 = m.j6;
    } else {
      callbacks$tailLocal1.oQ(resolved);
      return (void 0);
    }
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$DefaultPromise() {
  this.M = null;
}
$p = $c_s_concurrent_impl_Promise$DefaultPromise.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$DefaultPromise;
/** @constructor */
function $h_s_concurrent_impl_Promise$DefaultPromise() {
}
$h_s_concurrent_impl_Promise$DefaultPromise.prototype = $p;
$p.jv = (function(f, executor) {
  var state = this.M;
  if ((!(state instanceof $c_s_util_Failure))) {
    $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 5, f, executor));
  }
});
$p.oc = (function(f, executor) {
  var state = this.M;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 2, f, executor)) : this);
});
$p.f7 = (function(f, executor) {
  var state = this.M;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 1, f, executor)) : this);
});
$p.rz = (function(func, executor) {
  $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, this.M, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 6, func, executor));
});
$p.h = (function() {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    var state = \u03b4this$tailLocal1.M;
    if ((state instanceof $c_s_util_Try)) {
      return (("Future(" + state) + ")");
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      \u03b4this$tailLocal1 = state.fc(\u03b4this$tailLocal1);
    } else {
      return "Future(<not completed>)";
    }
  }
});
$p.so = (function(value) {
  var state = this.M;
  return ((!(state instanceof $c_s_util_Try)) && this.ek(state, $m_s_concurrent_impl_Promise$().gD(value)));
});
$p.ek = (function(state, resolved) {
  var \u03b4this$tailLocal3 = this;
  var state$tailLocal1 = state;
  while (true) {
    if ($is_s_concurrent_impl_Promise$Callbacks(state$tailLocal1)) {
      if ((!\u03b4this$tailLocal3.gj(state$tailLocal1, resolved))) {
        state$tailLocal1 = \u03b4this$tailLocal3.M;
        continue;
      }
      if ((state$tailLocal1 !== $m_s_concurrent_impl_Promise$().fZ)) {
        $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(\u03b4this$tailLocal3, state$tailLocal1, resolved);
      }
      return true;
    } else if ((state$tailLocal1 instanceof $c_s_concurrent_impl_Promise$Link)) {
      var p = state$tailLocal1.fc(\u03b4this$tailLocal3);
      if ((p !== \u03b4this$tailLocal3)) {
        var state$tailLocal1$tmp1 = p.M;
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
$p.jk = (function(other) {
  if ((other !== this)) {
    var state = this.M;
    if ((!(state instanceof $c_s_util_Try))) {
      if ((other instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
        var resolved = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other);
      } else {
        var this$1 = $m_s_Option$().jg($p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other));
        var resolved = (this$1.d() ? null : this$1.v());
      }
      if ((resolved !== null)) {
        this.ek(state, resolved);
      } else {
        other.rz(this, $m_s_concurrent_ExecutionContext$parasitic$());
      }
    }
  }
  return this;
});
$p.jM = (function(target, link) {
  var \u03b4this$tailLocal5 = this;
  var link$tailLocal1 = link;
  var target$tailLocal2 = target;
  while (true) {
    if ((\u03b4this$tailLocal5 !== target$tailLocal2)) {
      var state = \u03b4this$tailLocal5.M;
      if ((state instanceof $c_s_util_Try)) {
        if ((!target$tailLocal2.ek(target$tailLocal2.M, state))) {
          throw new $c_jl_IllegalStateException("Cannot link completed promises together");
        } else {
          return (void 0);
        }
      } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
        var l = ((link$tailLocal1 !== null) ? link$tailLocal1 : new $c_s_concurrent_impl_Promise$Link(target$tailLocal2));
        var p = l.fc(\u03b4this$tailLocal5);
        if (((\u03b4this$tailLocal5 !== p) && \u03b4this$tailLocal5.gj(state, l))) {
          if ((state !== $m_s_concurrent_impl_Promise$().fZ)) {
            $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(p, p.M, state);
            return (void 0);
          } else {
            return (void 0);
          }
        } else {
          target$tailLocal2 = p;
          link$tailLocal1 = l;
        }
      } else {
        \u03b4this$tailLocal5 = state.fc(\u03b4this$tailLocal5);
      }
    } else {
      return (void 0);
    }
  }
});
$p.sq = (function(resolved) {
  var \u03b4this$tailLocal6 = this;
  while (true) {
    var state = \u03b4this$tailLocal6.M;
    if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      var next = (\u03b4this$tailLocal6.gj(state, resolved) ? state.M : \u03b4this$tailLocal6);
      \u03b4this$tailLocal6 = next;
    } else {
      \u03b4this$tailLocal6.ek(state, resolved);
      return (void 0);
    }
  }
});
$p.c = (function(v1) {
  this.ek(this.M, v1);
});
function $isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bi)));
}
var $d_s_concurrent_impl_Promise$DefaultPromise = new $TypeData().i($c_s_concurrent_impl_Promise$DefaultPromise, "scala.concurrent.impl.Promise$DefaultPromise", ({
  bi: 1,
  aZ: 1,
  a: 1,
  cS: 1,
  cP: 1,
  cR: 1,
  e: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.S = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.h = (function() {
  return this.S;
});
$p.g = (function(that) {
  return (this === that);
});
$p.j = (function() {
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
    this.P = null;
    this.P = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  f3() {
    return $dp_toString__T(this.P);
  }
  A() {
    return "JavaScriptException";
  }
  y() {
    return 1;
  }
  z(x$1) {
    return ((x$1 === 0) ? this.P : $m_sr_Statics$().r9(x$1));
  }
  U() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  j() {
    return $m_s_util_hashing_MurmurHash3$().bR(this, 1744042595, true);
  }
  g(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().n(this.P, x$1.P)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cZ)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  cZ: 1,
  I: 1,
  E: 1,
  u: 1,
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 1938557015;
});
$p.h = (function() {
  return "CJKStrategy";
});
$p.y = (function() {
  return 0;
});
$p.A = (function() {
  return "CJKStrategy";
});
$p.z = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$, "com.github.pwharned.clausula.extension.domain.CJKStrategy$", ({
  dj: 1,
  aQ: 1,
  b: 1,
  g: 1,
  a: 1,
  t: 1,
  x: 1,
  y: 1
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
$p.j = (function() {
  return (-2033731977);
});
$p.h = (function() {
  return "LatinStrategy";
});
$p.y = (function() {
  return 0;
});
$p.A = (function() {
  return "LatinStrategy";
});
$p.z = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$, "com.github.pwharned.clausula.extension.domain.LatinStrategy$", ({
  dC: 1,
  aQ: 1,
  b: 1,
  g: 1,
  a: 1,
  t: 1,
  x: 1,
  y: 1
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
$p.j = (function() {
  return 1276468189;
});
$p.h = (function() {
  return "RTLStrategy";
});
$p.y = (function() {
  return 0;
});
$p.A = (function() {
  return "RTLStrategy";
});
$p.z = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$, "com.github.pwharned.clausula.extension.domain.RTLStrategy$", ({
  dE: 1,
  aQ: 1,
  b: 1,
  g: 1,
  a: 1,
  t: 1,
  x: 1,
  y: 1
}));
var $n_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$;
function $m_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$() {
  if ((!$n_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$)) {
    $n_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$ = new $c_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$();
  }
  return $n_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$;
}
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.jP() === (void 0)))) {
    $thiz.j9($m_Lcom_raquo_airstream_core_Signal$().oz());
  }
  $thiz.oy(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.jP();
  if ((x === (void 0))) {
    $thiz.j9($m_Lcom_raquo_airstream_core_Signal$().oz());
    var nextValue = $thiz.jn();
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
  var isError = nextValue.oq();
  var elem = false;
  elem = false;
  $thiz.ci(false);
  var this$ = $thiz.cx();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.dO(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.cz();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fb(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.ci(true);
  var x = $thiz.dN();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].K();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.bP(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().ck(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.ci(false);
  var this$ = $thiz.cx();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.gt(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().ck(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.cz();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.fa(nextValue, transaction);
  }
  $thiz.ci(true);
  var x = $thiz.dN();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].K();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.ci(false);
  var this$ = $thiz.cx();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.ee(nextError);
  }
  var this$$1 = $thiz.cz();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.f9(nextError, transaction);
  }
  $thiz.ci(true);
  var x = $thiz.dN();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].K();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.bP(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, _$2, transaction);
  })));
}
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4(key$4) {
  this.dW = null;
  this.dX = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$4, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4, "com.raquo.laminar.defs.styles.StyleProps$$anon$4", ({
  eH: 1,
  aI: 1,
  a9: 1,
  aG: 1,
  aH: 1,
  bK: 1,
  eM: 1,
  eN: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.mf && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.mf = false;
  this.fB = null;
  this.mf = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.fB = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.rC = (function(s) {
  this.ot(((s === null) ? "null" : s));
});
$p.ot = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.fB = (("" + this.fB) + rest);
      rest = "";
    } else {
      var $x_1 = this.fB;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.fB = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  fO: 1,
  fA: 1,
  fz: 1,
  bT: 1,
  bR: 1,
  bV: 1,
  bS: 1,
  bU: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.d())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.u();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
function $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  if (($thiz.bf(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.gq();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.m();
    var different = false;
    while (it.p()) {
      var next = it.l();
      if (seen.hp(f.c(next))) {
        builder.aZ(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.b8() : $thiz);
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.aI = (function() {
  return $d_Z.l();
});
$p.bp = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.aI = (function() {
  return $d_B.l();
});
$p.bp = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.aI = (function() {
  return $d_C.l();
});
$p.bp = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.aI = (function() {
  return $d_D.l();
});
$p.bp = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.aI = (function() {
  return $d_F.l();
});
$p.bp = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.aI = (function() {
  return $d_I.l();
});
$p.bp = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.aI = (function() {
  return $d_J.l();
});
$p.bp = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.cV = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.h = (function() {
  return this.cV;
});
$p.g = (function(that) {
  return (this === that);
});
$p.j = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.aI = (function() {
  return $d_S.l();
});
$p.bp = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.S = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.aI = (function() {
  return $d_V.l();
});
$p.bp = (function(len) {
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
$p.j = (function() {
  return (-1469642697);
});
$p.h = (function() {
  return "AnkiNotRunning";
});
$p.y = (function() {
  return 0;
});
$p.A = (function() {
  return "AnkiNotRunning";
});
$p.z = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_AnkiNotRunning$, "com.github.pwharned.clausula.extension.domain.AnkiNotRunning$", ({
  di: 1,
  ac: 1,
  bo: 1,
  b: 1,
  g: 1,
  a: 1,
  t: 1,
  x: 1,
  y: 1
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
$p.j = (function() {
  return (-451861635);
});
$p.h = (function() {
  return "DuplicateNote";
});
$p.y = (function() {
  return 0;
});
$p.A = (function() {
  return "DuplicateNote";
});
$p.z = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_DuplicateNote$, "com.github.pwharned.clausula.extension.domain.DuplicateNote$", ({
  dk: 1,
  ac: 1,
  bo: 1,
  b: 1,
  g: 1,
  a: 1,
  t: 1,
  x: 1,
  y: 1
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
$p.j = (function() {
  return (-926920016);
});
$p.h = (function() {
  return "EmptySentence";
});
$p.y = (function() {
  return 0;
});
$p.A = (function() {
  return "EmptySentence";
});
$p.z = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_EmptySentence$, "com.github.pwharned.clausula.extension.domain.EmptySentence$", ({
  dl: 1,
  ac: 1,
  bw: 1,
  b: 1,
  g: 1,
  a: 1,
  t: 1,
  x: 1,
  y: 1
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
$p.j = (function() {
  return 584085975;
});
$p.h = (function() {
  return "EmptyWord";
});
$p.y = (function() {
  return 0;
});
$p.A = (function() {
  return "EmptyWord";
});
$p.z = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_EmptyWord$, "com.github.pwharned.clausula.extension.domain.EmptyWord$", ({
  dm: 1,
  ac: 1,
  bw: 1,
  b: 1,
  g: 1,
  a: 1,
  t: 1,
  x: 1,
  y: 1
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
$p.j = (function() {
  return (-190555721);
});
$p.h = (function() {
  return "NoWordFound";
});
$p.y = (function() {
  return 0;
});
$p.A = (function() {
  return "NoWordFound";
});
$p.z = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_NoWordFound$, "com.github.pwharned.clausula.extension.domain.NoWordFound$", ({
  dD: 1,
  ac: 1,
  bs: 1,
  b: 1,
  g: 1,
  a: 1,
  t: 1,
  x: 1,
  y: 1
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
$p.j = (function() {
  return (-1807195300);
});
$p.h = (function() {
  return "SentenceBoundaryNotFound";
});
$p.y = (function() {
  return 0;
});
$p.A = (function() {
  return "SentenceBoundaryNotFound";
});
$p.z = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_SentenceBoundaryNotFound$, "com.github.pwharned.clausula.extension.domain.SentenceBoundaryNotFound$", ({
  dH: 1,
  ac: 1,
  bs: 1,
  b: 1,
  g: 1,
  a: 1,
  t: 1,
  x: 1,
  y: 1
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
$p.j = (function() {
  return 1949293709;
});
$p.h = (function() {
  return "UnsupportedLanguage";
});
$p.y = (function() {
  return 0;
});
$p.A = (function() {
  return "UnsupportedLanguage";
});
$p.z = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$ = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_UnsupportedLanguage$, "com.github.pwharned.clausula.extension.domain.UnsupportedLanguage$", ({
  dI: 1,
  ac: 1,
  bu: 1,
  b: 1,
  g: 1,
  a: 1,
  t: 1,
  x: 1,
  y: 1
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
$p.bQ = (function() {
  return $m_sc_View$();
});
$p.h = (function() {
  return $f_sc_View__toString__T(this);
});
$p.br = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.aJ() === that.aJ())) {
      try {
        return $thiz.se(that);
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.b7)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b7)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.cV = null;
  this.cV = "Any";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.aI = (function() {
  return $d_O.l();
});
$p.bp = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  iD: 1,
  aO: 1,
  aN: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.S = null;
  this.S = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  iF: 1,
  iE: 1,
  ab: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.S = null;
  this.S = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  iH: 1,
  iG: 1,
  ab: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.S = null;
  this.S = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  iJ: 1,
  iI: 1,
  ab: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.S = null;
  this.S = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  iL: 1,
  iK: 1,
  ab: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.S = null;
  this.S = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  iN: 1,
  iM: 1,
  ab: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.S = null;
  this.S = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  iP: 1,
  iO: 1,
  ab: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.S = null;
  this.S = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  iR: 1,
  iQ: 1,
  ab: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.cV = null;
  this.cV = "Nothing";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.aI = (function() {
  return $d_sr_Nothing$.l();
});
$p.bp = (function(len) {
  return new ($d_sr_Nothing$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  iS: 1,
  aO: 1,
  aN: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.cV = null;
  this.cV = "Null";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.aI = (function() {
  return $d_sr_Null$.l();
});
$p.bp = (function(len) {
  return new ($d_sr_Null$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  iT: 1,
  aO: 1,
  aN: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.cV = null;
  this.cV = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.aI = (function() {
  return $d_O.l();
});
$p.bp = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  iU: 1,
  aO: 1,
  aN: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.S = null;
  this.S = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  iW: 1,
  iV: 1,
  ab: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.S = null;
  this.S = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  iY: 1,
  iX: 1,
  ab: 1,
  a: 1,
  V: 1,
  U: 1,
  b: 1,
  J: 1,
  a0: 1
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
  this.gK = null;
  this.gK = \u03b4name$2;
}
$p = $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1.prototype = new $h_Lcom_github_pwharned_clausula_extension_ExtensionStatus();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1() {
}
$h_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return this.gK;
});
$p.h = (function() {
  return this.gK;
});
$p.j = (function() {
  return $f_T__hashCode__I(this.gK);
});
var $d_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_ExtensionStatus$$anon$1, "com.github.pwharned.clausula.extension.ExtensionStatus$$anon$1", ({
  d9: 1,
  d7: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1(\u03b4name$2, _$ordinal$2) {
  this.gL = null;
  this.gL = \u03b4name$2;
}
$p = $c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1.prototype = new $h_Lcom_github_pwharned_clausula_extension_PopupState();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1() {
}
$h_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return this.gL;
});
$p.h = (function() {
  return this.gL;
});
$p.j = (function() {
  return $f_T__hashCode__I(this.gL);
});
var $d_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_PopupState$$anon$1, "com.github.pwharned.clausula.extension.PopupState$$anon$1", ({
  dd: 1,
  aC: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.jU(), $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.jU(), $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.l2 = null;
  this.l1 = false;
  this.l3 = null;
  this.hZ = 0;
  this.kZ = null;
  this.l0 = null;
  this.l6 = false;
  this.i0 = null;
  this.l4 = null;
  this.l5 = 0;
  this.l4 = parentDisplayName;
  this.l2 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.hZ = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.i0 = (void 0);
  this.l5 = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.cB = (function() {
  return this.l2;
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f5 = (function() {
  return this.l1;
});
$p.dN = (function() {
  return this.l3;
});
$p.ci = (function(x$1) {
  this.l1 = x$1;
});
$p.f8 = (function(x$1) {
  this.l3 = x$1;
});
$p.gv = (function() {
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.j = (function() {
  return $systemIdentityHashCode(this);
});
$p.eX = (function() {
  return this.hZ;
});
$p.j9 = (function(x$1) {
  this.hZ = x$1;
});
$p.gu = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.gr = (function(observer) {
  observer.dO($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cx = (function() {
  return this.kZ;
});
$p.cz = (function() {
  return this.l0;
});
$p.gI = (function() {
  return this.l6;
});
$p.en = (function(x$1) {
  this.l6 = x$1;
});
$p.gh = (function(x$0) {
  this.kZ = x$0;
});
$p.gi = (function(x$0) {
  this.l0 = x$0;
});
$p.jP = (function() {
  return this.i0;
});
$p.oy = (function(x$1) {
  this.i0 = x$1;
});
$p.hI = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.ej = (function() {
  return this.l5;
});
$p.jn = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gw = (function() {
});
$p.cu = (function() {
  return (this.l4.K() + ".signal");
});
$p.ei = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  ei: 1,
  ad: 1,
  a1: 1,
  am: 1,
  an: 1,
  aR: 1,
  bE: 1,
  ax: 1,
  bF: 1,
  ee: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.hw($thiz)) {
        return $thiz.fd(o);
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
  this.mR = null;
  this.mR = it$3;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.m = (function() {
  return this.mR.K();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  h2: 1,
  az: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  a: 1,
  aj: 1
}));
/** @constructor */
function $c_sc_View$DistinctBy(underlying, f) {
  this.hd = null;
  this.mS = null;
  this.hd = underlying;
  this.mS = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.m = (function() {
  var this$1 = this.hd.m();
  return new $c_sc_Iterator$$anon$8(this.mS, this$1);
});
$p.w = (function() {
  return ((this.hd.w() === 0) ? 0 : (-1));
});
$p.d = (function() {
  return this.hd.d();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  h3: 1,
  az: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  a: 1,
  aj: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1() {
  this.bg = null;
  this.bs = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "en", "English", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return "English";
});
$p.h = (function() {
  return "English";
});
$p.j = (function() {
  return $f_T__hashCode__I("English");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$1, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$1", ({
  dp: 1,
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10() {
  this.bg = null;
  this.bs = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "la", "Latin", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return "Latin";
});
$p.h = (function() {
  return "Latin";
});
$p.j = (function() {
  return $f_T__hashCode__I("Latin");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$10, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$10", ({
  dq: 1,
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11() {
  this.bg = null;
  this.bs = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "he", "Hebrew", true, $m_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return "Hebrew";
});
$p.h = (function() {
  return "Hebrew";
});
$p.j = (function() {
  return $f_T__hashCode__I("Hebrew");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$11, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$11", ({
  dr: 1,
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12() {
  this.bg = null;
  this.bs = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "auto", "Auto", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return "Auto";
});
$p.h = (function() {
  return "Auto";
});
$p.j = (function() {
  return $f_T__hashCode__I("Auto");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$12, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$12", ({
  ds: 1,
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2() {
  this.bg = null;
  this.bs = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "ru", "Russian", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return "Russian";
});
$p.h = (function() {
  return "Russian";
});
$p.j = (function() {
  return $f_T__hashCode__I("Russian");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$2, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$2", ({
  dt: 1,
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3() {
  this.bg = null;
  this.bs = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "fr", "French", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return "French";
});
$p.h = (function() {
  return "French";
});
$p.j = (function() {
  return $f_T__hashCode__I("French");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$3, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$3", ({
  du: 1,
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4() {
  this.bg = null;
  this.bs = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "de", "German", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return "German";
});
$p.h = (function() {
  return "German";
});
$p.j = (function() {
  return $f_T__hashCode__I("German");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$4, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$4", ({
  dv: 1,
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5() {
  this.bg = null;
  this.bs = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "es", "Spanish", false, $m_Lcom_github_pwharned_clausula_extension_domain_LatinStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return "Spanish";
});
$p.h = (function() {
  return "Spanish";
});
$p.j = (function() {
  return $f_T__hashCode__I("Spanish");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$5, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$5", ({
  dw: 1,
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6() {
  this.bg = null;
  this.bs = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "ja", "Japanese", false, $m_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return "Japanese";
});
$p.h = (function() {
  return "Japanese";
});
$p.j = (function() {
  return $f_T__hashCode__I("Japanese");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$6, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$6", ({
  dx: 1,
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7() {
  this.bg = null;
  this.bs = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "zh", "Chinese", false, $m_Lcom_github_pwharned_clausula_extension_domain_CJKStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return "Chinese";
});
$p.h = (function() {
  return "Chinese";
});
$p.j = (function() {
  return $f_T__hashCode__I("Chinese");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$7, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$7", ({
  dy: 1,
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8() {
  this.bg = null;
  this.bs = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "ar", "Arabic", true, $m_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return "Arabic";
});
$p.h = (function() {
  return "Arabic";
});
$p.j = (function() {
  return $f_T__hashCode__I("Arabic");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$8, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$8", ({
  dz: 1,
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
/** @constructor */
function $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9() {
  this.bg = null;
  this.bs = null;
  $ct_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage__T__T__Z__Lcom_github_pwharned_clausula_extension_domain_SentenceStrategy__(this, "fa", "Farsi", true, $m_Lcom_github_pwharned_clausula_extension_domain_RTLStrategy$());
}
$p = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9.prototype = new $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage();
$p.constructor = $c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9;
/** @constructor */
function $h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9() {
}
$h_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9.prototype = $p;
$p.y = (function() {
  return 0;
});
$p.z = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.A = (function() {
  return "Farsi";
});
$p.h = (function() {
  return "Farsi";
});
$p.j = (function() {
  return $f_T__hashCode__I("Farsi");
});
var $d_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9 = new $TypeData().i($c_Lcom_github_pwharned_clausula_extension_domain_KnownLanguage$$anon$9, "com.github.pwharned.clausula.extension.domain.KnownLanguage$$anon$9", ({
  dA: 1,
  X: 1,
  O: 1,
  b: 1,
  g: 1,
  a: 1,
  H: 1,
  W: 1,
  t: 1,
  x: 1,
  y: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.hS = ($thiz.d2 !== null);
  $thiz.gR = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.d2);
  if ($thiz.hS) {
    var newParentLastUpdateId = $thiz.d2.eX();
    if ((newParentLastUpdateId !== $thiz.gR)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.jn(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.gR = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.hS) {
    $thiz.gR = $thiz.d2.eX();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.d2, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.d2, $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_eventbus_EventBusStream(parentDisplayName) {
  this.kj = null;
  this.ki = false;
  this.kk = null;
  this.kg = null;
  this.kh = null;
  this.kn = false;
  this.kl = null;
  this.gQ = null;
  this.km = 0;
  this.kl = parentDisplayName;
  this.kj = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.gQ = $m_Lcom_raquo_ew_JsArray$().b6($m_sr_ScalaRunTime$().b2(new ($d_Lcom_raquo_airstream_core_EventStream.r().C)([])));
  this.km = 1;
}
$p = $c_Lcom_raquo_airstream_eventbus_EventBusStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_eventbus_EventBusStream;
/** @constructor */
function $h_Lcom_raquo_airstream_eventbus_EventBusStream() {
}
$h_Lcom_raquo_airstream_eventbus_EventBusStream.prototype = $p;
$p.cB = (function() {
  return this.kj;
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f5 = (function() {
  return this.ki;
});
$p.dN = (function() {
  return this.kk;
});
$p.ci = (function(x$1) {
  this.ki = x$1;
});
$p.f8 = (function(x$1) {
  this.kk = x$1;
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.j = (function() {
  return $systemIdentityHashCode(this);
});
$p.gr = (function(observer) {
});
$p.cx = (function() {
  return this.kg;
});
$p.cz = (function() {
  return this.kh;
});
$p.gI = (function() {
  return this.kn;
});
$p.en = (function(x$1) {
  this.kn = x$1;
});
$p.gh = (function(x$0) {
  this.kg = x$0;
});
$p.gi = (function(x$0) {
  this.kh = x$0;
});
$p.fb = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.ej = (function() {
  return this.km;
});
$p.fa = (function(nextValue, ignoredTransaction) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, _$1);
  })));
});
$p.f9 = (function(nextError, transaction) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, _$2);
  })));
});
$p.gw = (function() {
  var arr = this.gQ;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(arr[i]);
    i = ((1 + i) | 0);
  }
});
$p.gu = (function() {
  var arr = this.gQ;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V(arr[i], this, false);
    i = ((1 + i) | 0);
  }
});
$p.gv = (function() {
  var arr = this.gQ;
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V(arr[i], this);
    i = ((1 + i) | 0);
  }
});
$p.cu = (function() {
  return (this.kl.K() + ".events");
});
$p.ei = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_eventbus_EventBusStream = new $TypeData().i($c_Lcom_raquo_airstream_eventbus_EventBusStream, "com.raquo.airstream.eventbus.EventBusStream", ({
  e2: 1,
  ad: 1,
  a1: 1,
  am: 1,
  an: 1,
  aw: 1,
  aE: 1,
  ax: 1,
  aS: 1,
  av: 1,
  bx: 1
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
$p.se = (function(that) {
  return this.f1(that);
});
$p.g = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.br = (function() {
  return "Set";
});
$p.h = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.c = (function(v1) {
  return this.bn(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.aJ() === o.aJ())) {
      try {
        return $thiz.f1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((map$1) => ((kv$2) => $m_sr_BoxesRunTime$().n(map$1.cZ(kv$2.aU(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sc_Map$().mP.K()))), kv$2.aG())))(o)));
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
  $thiz.hi = _fun;
  $thiz.g1 = _ec;
  $thiz.g0 = _arg;
  $thiz.g2 = _xform;
  $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz);
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__($thiz, xform, f, ec) {
  $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, f, ec, null, xform);
  return $thiz;
}
function $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V($thiz, t, e) {
  if ((false || $m_s_util_control_NonFatal$().hs(t))) {
    var completed = $thiz.ek($thiz.M, $m_s_concurrent_impl_Promise$().gD(new $c_s_util_Failure(t)));
    if (((($thiz.g2 === 5) || ($thiz.g2 === 6)) || (!completed))) {
      e.jY(t);
    }
  } else {
    var $x_1 = t;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.P : $x_1);
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$Transformation() {
  this.M = null;
  this.hi = null;
  this.g1 = null;
  this.g0 = null;
  this.g2 = 0;
}
$p = $c_s_concurrent_impl_Promise$Transformation.prototype = new $h_s_concurrent_impl_Promise$DefaultPromise();
$p.constructor = $c_s_concurrent_impl_Promise$Transformation;
/** @constructor */
function $h_s_concurrent_impl_Promise$Transformation() {
}
$h_s_concurrent_impl_Promise$Transformation.prototype = $p;
$p.oQ = (function(resolved) {
  this.g0 = resolved;
  var e = this.g1;
  try {
    if ((e === null)) {
      $m_sr_Scala3RunTime$().bq();
    }
    e.jt(this);
  } catch (e$2) {
    var e$3 = ((e$2 instanceof $c_jl_Throwable) ? e$2 : new $c_sjs_js_JavaScriptException(e$2));
    this.hi = null;
    this.g0 = null;
    this.g1 = null;
    if ((e === null)) {
      $m_sr_Scala3RunTime$().bq();
    }
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$3, e);
  }
  return this;
});
$p.eg = (function() {
  var x$proxy4 = this.g0;
  if ((x$proxy4 === null)) {
    $m_sr_Scala3RunTime$().bq();
  }
  var x$proxy5 = this.hi;
  if ((x$proxy5 === null)) {
    $m_sr_Scala3RunTime$().bq();
  }
  var x$proxy6 = this.g1;
  if ((x$proxy6 === null)) {
    $m_sr_Scala3RunTime$().bq();
  }
  this.hi = null;
  this.g0 = null;
  this.g1 = null;
  try {
    var resolvedResult;
    switch (this.g2) {
      case 0: {
        var resolvedResult = null;
        break;
      }
      case 1: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Success) ? new $c_s_util_Success(x$proxy5.c(x$proxy4.v())) : x$proxy4);
        break;
      }
      case 2: {
        if ((x$proxy4 instanceof $c_s_util_Success)) {
          var f = x$proxy5.c(x$proxy4.v());
          if ((f instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
            f.jM(this, null);
          } else {
            this.jk(f);
          }
          var resolvedResult = null;
        } else {
          var resolvedResult = x$proxy4;
        }
        break;
      }
      case 3: {
        var resolvedResult = $m_s_concurrent_impl_Promise$().gD(x$proxy5.c(x$proxy4));
        break;
      }
      case 4: {
        var f$2 = x$proxy5.c(x$proxy4);
        if ((f$2 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
          f$2.jM(this, null);
        } else {
          this.jk(f$2);
        }
        var resolvedResult = null;
        break;
      }
      case 5: {
        x$proxy4.b7(x$proxy5);
        var resolvedResult = null;
        break;
      }
      case 6: {
        x$proxy5.c(x$proxy4);
        var resolvedResult = null;
        break;
      }
      case 7: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Failure) ? $m_s_concurrent_impl_Promise$().gD(x$proxy4.oF(x$proxy5)) : x$proxy4);
        break;
      }
      case 8: {
        if ((x$proxy4 instanceof $c_s_util_Failure)) {
          var f$3 = x$proxy5.c4(x$proxy4.cW, $m_s_concurrent_Future$().nl);
          var resolvedResult = ((f$3 !== $m_s_concurrent_Future$().j4) ? (((f$3 instanceof $c_s_concurrent_impl_Promise$DefaultPromise) ? f$3.jM(this, null) : this.jk(f$3)), null) : x$proxy4);
        } else {
          var resolvedResult = x$proxy4;
        }
        break;
      }
      case 9: {
        var resolvedResult = (((x$proxy4 instanceof $c_s_util_Failure) || (!(!x$proxy5.c(x$proxy4.v())))) ? x$proxy4 : $m_s_concurrent_Future$().nk);
        break;
      }
      case 10: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Success) ? new $c_s_util_Success(x$proxy5.c4(x$proxy4.v(), $m_s_concurrent_Future$().ni)) : x$proxy4);
        break;
      }
      default: {
        var resolvedResult = new $c_s_util_Failure(new $c_jl_IllegalStateException(("BUG: encountered transformation promise with illegal type: " + this.g2)));
      }
    }
    if ((resolvedResult !== null)) {
      this.ek(this.M, resolvedResult);
    }
  } catch (e) {
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)), x$proxy6);
  }
});
function $isArrayOf_s_concurrent_impl_Promise$Transformation(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cV)));
}
var $d_s_concurrent_impl_Promise$Transformation = new $TypeData().i($c_s_concurrent_impl_Promise$Transformation, "scala.concurrent.impl.Promise$Transformation", ({
  cV: 1,
  bi: 1,
  aZ: 1,
  a: 1,
  cS: 1,
  cP: 1,
  cR: 1,
  e: 1,
  aM: 1,
  aX: 1,
  im: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.kv = null;
  this.ku = false;
  this.kw = null;
  this.kr = null;
  this.kt = null;
  this.ky = false;
  this.hP = null;
  this.ks = null;
  this.kx = 0;
  this.hP = parent;
  this.ks = fn;
  this.kv = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.kx = ((1 + parent.ej()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.cB = (function() {
  return this.kv;
});
$p.cu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f5 = (function() {
  return this.ku;
});
$p.dN = (function() {
  return this.kw;
});
$p.ci = (function(x$1) {
  this.ku = x$1;
});
$p.f8 = (function(x$1) {
  this.kw = x$1;
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.j = (function() {
  return $systemIdentityHashCode(this);
});
$p.gr = (function(observer) {
});
$p.cx = (function() {
  return this.kr;
});
$p.cz = (function() {
  return this.kt;
});
$p.gI = (function() {
  return this.ky;
});
$p.en = (function(x$1) {
  this.ky = x$1;
});
$p.gh = (function(x$0) {
  this.kr = x$0;
});
$p.gi = (function(x$0) {
  this.kt = x$0;
});
$p.gw = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.hP);
});
$p.gu = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.gv = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.fb = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.ej = (function() {
  return this.kx;
});
$p.fa = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.ks.c(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchResult1: {
      var $x_1;
      var x2 = $m_s_util_control_NonFatal$().ff(e$2);
      if ((!x2.d())) {
        var $x_1 = new $c_s_util_Failure(x2.v());
        break matchResult1;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
    }
  }
  $x_1.bP(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
    if ((!nextValue.d())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.v(), transaction);
    }
  })));
});
$p.f9 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.jU = (function() {
  return this.hP;
});
$p.ei = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  e4: 1,
  ad: 1,
  a1: 1,
  am: 1,
  an: 1,
  aw: 1,
  aE: 1,
  ax: 1,
  aS: 1,
  av: 1,
  bz: 1,
  bx: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.kC = null;
  this.kB = false;
  this.kD = null;
  this.hQ = 0;
  this.kz = null;
  this.kA = null;
  this.kF = false;
  this.hR = null;
  this.hS = false;
  this.gR = 0;
  this.d2 = null;
  this.hT = null;
  this.hU = null;
  this.kE = 0;
  this.d2 = parent;
  this.hT = project;
  this.hU = recover;
  this.kC = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.hQ = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hR = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.kE = ((1 + parent.ej()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.cB = (function() {
  return this.kC;
});
$p.cu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f5 = (function() {
  return this.kB;
});
$p.dN = (function() {
  return this.kD;
});
$p.ci = (function(x$1) {
  this.kB = x$1;
});
$p.f8 = (function(x$1) {
  this.kD = x$1;
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.j = (function() {
  return $systemIdentityHashCode(this);
});
$p.eX = (function() {
  return this.hQ;
});
$p.j9 = (function(x$1) {
  this.hQ = x$1;
});
$p.gr = (function(observer) {
  observer.dO($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cx = (function() {
  return this.kz;
});
$p.cz = (function() {
  return this.kA;
});
$p.gI = (function() {
  return this.kF;
});
$p.en = (function(x$1) {
  this.kF = x$1;
});
$p.gh = (function(x$0) {
  this.kz = x$0;
});
$p.gi = (function(x$0) {
  this.kA = x$0;
});
$p.jP = (function() {
  return this.hR;
});
$p.oy = (function(x$1) {
  this.hR = x$1;
});
$p.hI = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.fa = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.f9 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.gw = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.gu = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.gv = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.ej = (function() {
  return this.kE;
});
$p.fb = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.bP(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.hU;
    if (this$2.d()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.v();
      try {
        var $x_1 = new $c_s_util_Success(x0.c4(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchResult1: {
          var $x_1;
          var x2 = $m_s_util_control_NonFatal$().ff(e$2);
          if ((!x2.d())) {
            var $x_1 = new $c_s_util_Failure(x2.v());
            break matchResult1;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
        }
      }
      $x_1.bP(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.d())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.v(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.jO(this.hT), transaction);
  })));
});
$p.jn = (function() {
  var originalValue = this.d2.hI().jO(this.hT);
  return originalValue.bP(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.hU;
    if (this$2.d()) {
      return originalValue;
    } else {
      var x0 = this$2.v();
      try {
        var $x_1 = new $c_s_util_Success(x0.c4(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchResult1: {
          var $x_1;
          var x2 = $m_s_util_control_NonFatal$().ff(e$2);
          if ((!x2.d())) {
            var $x_1 = new $c_s_util_Failure(x2.v());
            break matchResult1;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.P : e$2);
        }
      }
      return $x_1.bP(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$10 = (nextValue.d() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.v())));
          return (this$10.d() ? originalValue : this$10.v());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$6) => originalValue)));
});
$p.ei = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  e5: 1,
  ad: 1,
  a1: 1,
  am: 1,
  an: 1,
  aR: 1,
  bE: 1,
  ax: 1,
  bF: 1,
  av: 1,
  by: 1,
  dQ: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_StreamFromSignal(parent, changesOnly) {
  this.kK = null;
  this.kJ = false;
  this.kL = null;
  this.kH = null;
  this.kI = null;
  this.kN = false;
  this.dT = null;
  this.kG = false;
  this.kM = 0;
  this.fw = 0;
  this.gS = false;
  this.dT = parent;
  this.kG = changesOnly;
  this.kK = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.kM = ((1 + parent.ej()) | 0);
  this.fw = 0;
  this.gS = true;
}
$p = $c_Lcom_raquo_airstream_misc_StreamFromSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_StreamFromSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_StreamFromSignal() {
}
$h_Lcom_raquo_airstream_misc_StreamFromSignal.prototype = $p;
$p.cB = (function() {
  return this.kK;
});
$p.cu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.h = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.f5 = (function() {
  return this.kJ;
});
$p.dN = (function() {
  return this.kL;
});
$p.ci = (function(x$1) {
  this.kJ = x$1;
});
$p.f8 = (function(x$1) {
  this.kL = x$1;
});
$p.g = (function(obj) {
  return (this === obj);
});
$p.j = (function() {
  return $systemIdentityHashCode(this);
});
$p.gr = (function(observer) {
});
$p.cx = (function() {
  return this.kH;
});
$p.cz = (function() {
  return this.kI;
});
$p.gI = (function() {
  return this.kN;
});
$p.en = (function(x$1) {
  this.kN = x$1;
});
$p.gh = (function(x$0) {
  this.kH = x$0;
});
$p.gi = (function(x$0) {
  this.kI = x$0;
});
$p.gw = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.dT);
});
$p.gv = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.fa = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.f9 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.ej = (function() {
  return this.kM;
});
$p.gu = (function() {
  var newParentLastUpdateId = this.dT.eX();
  if ((this.gS && this.kG)) {
    this.fw = newParentLastUpdateId;
  } else if ((newParentLastUpdateId !== this.fw)) {
    $m_Lcom_raquo_airstream_core_Transaction$onStart$().pz(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
      if ($f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this)) {
        $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, this.dT.hI(), trx);
        this.fw = this.dT.eX();
      }
    })));
  }
  this.gS = false;
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.fb = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
  this.fw = this.dT.eX();
  this.gS = false;
});
$p.jU = (function() {
  return this.dT;
});
$p.ei = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_StreamFromSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_StreamFromSignal, "com.raquo.airstream.misc.StreamFromSignal", ({
  e6: 1,
  ad: 1,
  a1: 1,
  am: 1,
  an: 1,
  aw: 1,
  aE: 1,
  ax: 1,
  aS: 1,
  av: 1,
  bz: 1,
  by: 1
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
$p.c4 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cv = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.jK = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.bf = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.d = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fd = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.hw = (function(that) {
  return true;
});
$p.g = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().oN(this);
});
$p.h = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.cA = (function(x) {
  return this.jK((x | 0));
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
$p.cv = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bf = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.d = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.br = (function() {
  return "SeqView";
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.p)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.p)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aA)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  $thiz.p6 = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
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
$p.c4 = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.eb = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.cA = (function(key) {
  return this.bn(key);
});
$p.dE = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
$p.gn = (function(coll) {
  return this.ox().av(coll);
});
$p.g = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().rm(this);
});
$p.br = (function() {
  return "Map";
});
$p.h = (function() {
  return $f_sc_Iterable__toString__T(this);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.e0 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.e0 = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.t = (function(idx) {
  return this.e0.t(idx);
});
$p.q = (function() {
  return this.e0.q();
});
$p.m = (function() {
  return this.e0.m();
});
$p.w = (function() {
  return this.e0.w();
});
$p.d = (function() {
  return this.e0.d();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  cd: 1,
  b3: 1,
  az: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  a: 1,
  aj: 1,
  m: 1,
  b6: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.lD = null;
  this.lE = false;
  this.lB = null;
  this.lC = false;
  this.le = null;
  this.lf = false;
  this.lx = null;
  this.ly = false;
  this.ll = null;
  this.lm = false;
  this.lp = null;
  this.lq = false;
  this.lg = null;
  this.lh = false;
  this.lL = null;
  this.lM = false;
  this.lt = null;
  this.lu = false;
  this.lr = null;
  this.ls = false;
  this.lv = null;
  this.lw = false;
  this.lj = null;
  this.lk = false;
  this.ln = null;
  this.lo = false;
  this.lz = null;
  this.lA = false;
  this.lH = null;
  this.lI = false;
  this.lN = null;
  this.lO = false;
  this.li = null;
  this.bh = null;
  this.gW = null;
  this.p5 = null;
  this.lc = null;
  this.ld = false;
  this.lF = null;
  this.lG = false;
  this.lJ = null;
  this.lK = false;
  this.p6 = null;
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
$p.sc = (function() {
  if ((!this.lE)) {
    this.lD = new $c_Lcom_raquo_laminar_tags_HtmlTag("strong", false);
    this.lE = true;
  }
  return this.lD;
});
$p.oO = (function() {
  if ((!this.lC)) {
    this.lB = new $c_Lcom_raquo_laminar_tags_HtmlTag("span", false);
    this.lC = true;
  }
  return this.lB;
});
$p.hv = (function() {
  if ((!this.lf)) {
    this.le = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.lf = true;
  }
  return this.le;
});
$p.gx = (function() {
  if ((!this.ly)) {
    this.lx = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.ly = true;
  }
  return this.lx;
});
$p.cw = (function() {
  if ((!this.lm)) {
    this.ll = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.lm = true;
  }
  return this.ll;
});
$p.rn = (function() {
  if ((!this.lq)) {
    this.lp = new $c_Lcom_raquo_laminar_tags_HtmlTag("mark", false);
    this.lq = true;
  }
  return this.lp;
});
$p.q6 = (function() {
  if ((!this.lh)) {
    this.lg = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().lP);
    this.lh = true;
  }
  return this.lg;
});
$p.p1 = (function() {
  if ((!this.lM)) {
    this.lL = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().gX);
    this.lM = true;
  }
  return this.lL;
});
$p.gs = (function() {
  if ((!this.lu)) {
    this.lt = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.lu = true;
  }
  return this.lt;
});
$p.ry = (function() {
  if ((!this.ls)) {
    this.lr = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.ls = true;
  }
  return this.lr;
});
$p.jT = (function() {
  if ((!this.lw)) {
    this.lv = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.lw = true;
  }
  return this.lv;
});
$p.qq = (function() {
  if ((!this.lk)) {
    this.lj = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28("display");
    this.lk = true;
  }
  return this.lj;
});
$p.ri = (function() {
  if ((!this.lo)) {
    this.ln = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("left");
    this.lo = true;
  }
  return this.ln;
});
$p.rB = (function() {
  if ((!this.lA)) {
    this.lz = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$43("position");
    this.lA = true;
  }
  return this.lz;
});
$p.sn = (function() {
  if ((!this.lI)) {
    this.lH = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$4("top");
    this.lI = true;
  }
  return this.lH;
});
$p.sx = (function() {
  if ((!this.lO)) {
    this.lN = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$1("z-index");
    this.lO = true;
  }
  return this.lN;
});
$p.py = (function() {
  if ((!this.ld)) {
    this.lc = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.ld = true;
  }
  return this.lc;
});
$p.sf = (function() {
  if ((!this.lG)) {
    this.lF = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.lG = true;
  }
  return this.lF;
});
$p.st = (function() {
  if ((!this.lK)) {
    this.lJ = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.lK = true;
  }
  return this.lJ;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  ev: 1,
  eO: 1,
  ey: 1,
  eD: 1,
  eC: 1,
  eE: 1,
  eA: 1,
  et: 1,
  eo: 1,
  es: 1,
  bI: 1,
  bL: 1,
  bH: 1,
  ep: 1
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
$p.bf = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.q();
});
$p.br = (function() {
  return "IndexedSeqView";
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.e0 = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.bf = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.q();
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.br = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  gL: 1,
  cd: 1,
  b3: 1,
  az: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  a: 1,
  aj: 1,
  m: 1,
  b6: 1,
  q: 1,
  c9: 1
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
  this.iW = null;
  this.n4 = null;
  this.iW = underlying;
  this.n4 = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.t = (function(n) {
  return this.iW.t(n);
});
$p.q = (function() {
  return this.iW.aX;
});
$p.c6 = (function() {
  return "ArrayBufferView";
});
$p.m = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.n4);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  hX: 1,
  gE: 1,
  b3: 1,
  az: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  a: 1,
  aj: 1,
  m: 1,
  b6: 1,
  q: 1,
  c9: 1
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
$p.bQ = (function() {
  return $m_sci_Iterable$();
});
$p.ox = (function() {
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
        var a = $thiz.ht();
        var b = o.ht();
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
          equal = $m_sr_BoxesRunTime$().n($thiz.t(index), o.t(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.m().dK(index);
          var thatIt = o.m().dK(index);
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.C)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.C)));
}
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hC)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hD)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hE)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hF)));
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
$p.aJ = (function() {
  return 0;
});
$p.w = (function() {
  return 0;
});
$p.d = (function() {
  return true;
});
$p.je = (function(key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
});
$p.bn = (function(key) {
  return false;
});
$p.cZ = (function(key, default$1) {
  return default$1.K();
});
$p.m = (function() {
  return $m_sc_Iterator$().V;
});
$p.c = (function(key) {
  this.je(key);
});
$p.dQ = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  ho: 1,
  at: 1,
  ap: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  ar: 1,
  aq: 1,
  b: 1,
  ae: 1,
  s: 1,
  au: 1,
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
  this.cq = null;
  this.e3 = null;
  this.cq = key1;
  this.e3 = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.aJ = (function() {
  return 1;
});
$p.w = (function() {
  return 1;
});
$p.d = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.cq)) {
    return this.e3;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bn = (function(key) {
  return $m_sr_BoxesRunTime$().n(key, this.cq);
});
$p.cZ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.cq) ? this.e3 : default$1.K());
});
$p.m = (function() {
  return new $c_sc_Iterator$$anon$20($ct_T2__O__O__(new $c_T2(), this.cq, this.e3));
});
$p.el = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.cq) ? new $c_sci_Map$Map1(this.cq, value) : new $c_sci_Map$Map2(this.cq, this.e3, key, value));
});
$p.f1 = (function(p) {
  return (!(!p.c($ct_T2__O__O__(new $c_T2(), this.cq, this.e3))));
});
$p.j = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cl(this.cq, this.e3);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dD;
  h = $m_s_util_hashing_MurmurHash3$().x(h, a);
  h = $m_s_util_hashing_MurmurHash3$().x(h, b);
  h = $m_s_util_hashing_MurmurHash3$().d1(h, c);
  return $m_s_util_hashing_MurmurHash3$().au(h, 1);
});
$p.dQ = (function(key, value) {
  return this.el(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cv)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  cv: 1,
  at: 1,
  ap: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  ar: 1,
  aq: 1,
  b: 1,
  ae: 1,
  s: 1,
  au: 1,
  af: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.c9 = null;
  this.di = null;
  this.ca = null;
  this.dj = null;
  this.c9 = key1;
  this.di = value1;
  this.ca = key2;
  this.dj = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.aJ = (function() {
  return 2;
});
$p.w = (function() {
  return 2;
});
$p.d = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.c9)) {
    return this.di;
  } else if ($m_sr_BoxesRunTime$().n(key, this.ca)) {
    return this.dj;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bn = (function(key) {
  return ($m_sr_BoxesRunTime$().n(key, this.c9) || $m_sr_BoxesRunTime$().n(key, this.ca));
});
$p.cZ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.c9) ? this.di : ($m_sr_BoxesRunTime$().n(key, this.ca) ? this.dj : default$1.K()));
});
$p.m = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.el = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.c9) ? new $c_sci_Map$Map2(this.c9, value, this.ca, this.dj) : ($m_sr_BoxesRunTime$().n(key, this.ca) ? new $c_sci_Map$Map2(this.c9, this.di, this.ca, value) : new $c_sci_Map$Map3(this.c9, this.di, this.ca, this.dj, key, value)));
});
$p.f1 = (function(p) {
  return ((!(!p.c($ct_T2__O__O__(new $c_T2(), this.c9, this.di)))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.ca, this.dj)))));
});
$p.j = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cl(this.c9, this.di);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cl(this.ca, this.dj);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dD;
  h = $m_s_util_hashing_MurmurHash3$().x(h, a);
  h = $m_s_util_hashing_MurmurHash3$().x(h, b);
  h = $m_s_util_hashing_MurmurHash3$().d1(h, c);
  return $m_s_util_hashing_MurmurHash3$().au(h, 2);
});
$p.dQ = (function(key, value) {
  return this.el(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cw)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  cw: 1,
  at: 1,
  ap: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  ar: 1,
  aq: 1,
  b: 1,
  ae: 1,
  s: 1,
  au: 1,
  af: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.bW = null;
  this.cK = null;
  this.bX = null;
  this.cL = null;
  this.bY = null;
  this.cM = null;
  this.bW = key1;
  this.cK = value1;
  this.bX = key2;
  this.cL = value2;
  this.bY = key3;
  this.cM = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.aJ = (function() {
  return 3;
});
$p.w = (function() {
  return 3;
});
$p.d = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.bW)) {
    return this.cK;
  } else if ($m_sr_BoxesRunTime$().n(key, this.bX)) {
    return this.cL;
  } else if ($m_sr_BoxesRunTime$().n(key, this.bY)) {
    return this.cM;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bn = (function(key) {
  return (($m_sr_BoxesRunTime$().n(key, this.bW) || $m_sr_BoxesRunTime$().n(key, this.bX)) || $m_sr_BoxesRunTime$().n(key, this.bY));
});
$p.cZ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.bW) ? this.cK : ($m_sr_BoxesRunTime$().n(key, this.bX) ? this.cL : ($m_sr_BoxesRunTime$().n(key, this.bY) ? this.cM : default$1.K())));
});
$p.m = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.el = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.bW) ? new $c_sci_Map$Map3(this.bW, value, this.bX, this.cL, this.bY, this.cM) : ($m_sr_BoxesRunTime$().n(key, this.bX) ? new $c_sci_Map$Map3(this.bW, this.cK, this.bX, value, this.bY, this.cM) : ($m_sr_BoxesRunTime$().n(key, this.bY) ? new $c_sci_Map$Map3(this.bW, this.cK, this.bX, this.cL, this.bY, value) : new $c_sci_Map$Map4(this.bW, this.cK, this.bX, this.cL, this.bY, this.cM, key, value))));
});
$p.f1 = (function(p) {
  return (((!(!p.c($ct_T2__O__O__(new $c_T2(), this.bW, this.cK)))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bX, this.cL))))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bY, this.cM)))));
});
$p.j = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cl(this.bW, this.cK);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cl(this.bX, this.cL);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cl(this.bY, this.cM);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dD;
  h = $m_s_util_hashing_MurmurHash3$().x(h, a);
  h = $m_s_util_hashing_MurmurHash3$().x(h, b);
  h = $m_s_util_hashing_MurmurHash3$().d1(h, c);
  return $m_s_util_hashing_MurmurHash3$().au(h, 3);
});
$p.dQ = (function(key, value) {
  return this.el(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cx)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  cx: 1,
  at: 1,
  ap: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  ar: 1,
  aq: 1,
  b: 1,
  ae: 1,
  s: 1,
  au: 1,
  af: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bx = null;
  this.cb = null;
  this.by = null;
  this.cc = null;
  this.bz = null;
  this.cd = null;
  this.bA = null;
  this.ce = null;
  this.bx = key1;
  this.cb = value1;
  this.by = key2;
  this.cc = value2;
  this.bz = key3;
  this.cd = value3;
  this.bA = key4;
  this.ce = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.aJ = (function() {
  return 4;
});
$p.w = (function() {
  return 4;
});
$p.d = (function() {
  return false;
});
$p.c = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.bx)) {
    return this.cb;
  } else if ($m_sr_BoxesRunTime$().n(key, this.by)) {
    return this.cc;
  } else if ($m_sr_BoxesRunTime$().n(key, this.bz)) {
    return this.cd;
  } else if ($m_sr_BoxesRunTime$().n(key, this.bA)) {
    return this.ce;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.bn = (function(key) {
  return ((($m_sr_BoxesRunTime$().n(key, this.bx) || $m_sr_BoxesRunTime$().n(key, this.by)) || $m_sr_BoxesRunTime$().n(key, this.bz)) || $m_sr_BoxesRunTime$().n(key, this.bA));
});
$p.cZ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.bx) ? this.cb : ($m_sr_BoxesRunTime$().n(key, this.by) ? this.cc : ($m_sr_BoxesRunTime$().n(key, this.bz) ? this.cd : ($m_sr_BoxesRunTime$().n(key, this.bA) ? this.ce : default$1.K()))));
});
$p.m = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.el = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.bx) ? new $c_sci_Map$Map4(this.bx, value, this.by, this.cc, this.bz, this.cd, this.bA, this.ce) : ($m_sr_BoxesRunTime$().n(key, this.by) ? new $c_sci_Map$Map4(this.bx, this.cb, this.by, value, this.bz, this.cd, this.bA, this.ce) : ($m_sr_BoxesRunTime$().n(key, this.bz) ? new $c_sci_Map$Map4(this.bx, this.cb, this.by, this.cc, this.bz, value, this.bA, this.ce) : ($m_sr_BoxesRunTime$().n(key, this.bA) ? new $c_sci_Map$Map4(this.bx, this.cb, this.by, this.cc, this.bz, this.cd, this.bA, value) : $m_sci_HashMap$().iP.fh(this.bx, this.cb).fh(this.by, this.cc).fh(this.bz, this.cd).fh(this.bA, this.ce).fh(key, value)))));
});
$p.f1 = (function(p) {
  return ((((!(!p.c($ct_T2__O__O__(new $c_T2(), this.bx, this.cb)))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.by, this.cc))))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bz, this.cd))))) && (!(!p.c($ct_T2__O__O__(new $c_T2(), this.bA, this.ce)))));
});
$p.q5 = (function(builder) {
  return builder.e9(this.bx, this.cb).e9(this.by, this.cc).e9(this.bz, this.cd).e9(this.bA, this.ce);
});
$p.j = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cl(this.bx, this.cb);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cl(this.by, this.cc);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cl(this.bz, this.cd);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cl(this.bA, this.ce);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dD;
  h = $m_s_util_hashing_MurmurHash3$().x(h, a);
  h = $m_s_util_hashing_MurmurHash3$().x(h, b);
  h = $m_s_util_hashing_MurmurHash3$().d1(h, c);
  return $m_s_util_hashing_MurmurHash3$().au(h, 4);
});
$p.dQ = (function(key, value) {
  return this.el(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cy)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  cy: 1,
  at: 1,
  ap: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  ar: 1,
  aq: 1,
  b: 1,
  ae: 1,
  s: 1,
  au: 1,
  af: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hb)));
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
$p.b8 = (function() {
  return this;
});
function $ct_sci_LazyList__O__($thiz, lazyState) {
  $thiz.bc = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : $m_sci_LazyList$Uninitialized$());
  $thiz.cp = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : lazyState);
  return $thiz;
}
function $ct_sci_LazyList__O__sci_LazyList__($thiz, head, tail) {
  $ct_sci_LazyList__O__($thiz, $m_sci_LazyList$EmptyMarker$());
  $thiz.bc = head;
  $thiz.cp = tail;
  return $thiz;
}
function $p_sci_LazyList__initState__V($thiz) {
  if (($thiz.bc === $m_sci_LazyList$Uninitialized$())) {
    if (($thiz.cp === $m_sci_LazyList$MidEvaluation$())) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    var fun = $thiz.cp;
    $thiz.cp = $m_sci_LazyList$MidEvaluation$();
    try {
      var l = $p_sci_LazyList__evaluated__sci_LazyList(fun.K());
    } finally {
      $thiz.cp = fun;
    }
    $thiz.cp = l.cp;
    $thiz.bc = l.bc;
  }
}
function $p_sci_LazyList__evaluated__sci_LazyList($thiz) {
  while (true) {
    if (($thiz.bc !== $m_sci_LazyList$Uninitialized$())) {
      return (($thiz.cp === null) ? $m_sci_LazyList$().a6 : $thiz);
    } else {
      $p_sci_LazyList__initState__V($thiz);
    }
  }
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.r = (("" + b.r) + start);
  if (($thiz.bc === $m_sci_LazyList$Uninitialized$())) {
    b.r = (b.r + "<not computed>");
  } else if (($p_sci_LazyList__evaluated__sci_LazyList($thiz) !== $m_sci_LazyList$().a6)) {
    var obj = $thiz.C();
    b.r = (("" + b.r) + obj);
    var cursor = $thiz;
    var scout = $thiz.b9();
    if ((cursor !== scout)) {
      cursor = scout;
      var this$1 = scout;
      if (((this$1.bc !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$1) !== $m_sci_LazyList$().a6))) {
        scout = scout.b9();
        while (true) {
          if ((cursor !== scout)) {
            var this$2 = scout;
            var $x_1 = ((this$2.bc !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$2) !== $m_sci_LazyList$().a6));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var c = cursor;
            b.r = (("" + b.r) + sep);
            var obj$1 = c.C();
            b.r = (("" + b.r) + obj$1);
            cursor = cursor.b9();
            scout = scout.b9();
            var this$3 = scout;
            if (((this$3.bc !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$3) !== $m_sci_LazyList$().a6))) {
              scout = scout.b9();
            }
          } else {
            break;
          }
        }
      }
    }
    var this$4 = scout;
    if ((!((this$4.bc !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$4) !== $m_sci_LazyList$().a6)))) {
      while ((cursor !== scout)) {
        var c$1 = cursor;
        b.r = (("" + b.r) + sep);
        var obj$2 = c$1.C();
        b.r = (("" + b.r) + obj$2);
        cursor = cursor.b9();
      }
      if ((!(cursor.bc !== $m_sci_LazyList$Uninitialized$()))) {
        b.r = (("" + b.r) + sep);
        b.r = (b.r + "<not computed>");
      }
    } else {
      if ((cursor !== $thiz)) {
        var runner = $thiz;
        while ((runner !== scout)) {
          runner = runner.b9();
          scout = scout.b9();
        }
        while (true) {
          var ct = cursor.b9();
          if ((ct !== scout)) {
            var c$2 = cursor;
            b.r = (("" + b.r) + sep);
            var obj$3 = c$2.C();
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
  this.bc = null;
  this.cp = null;
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
$p.bf = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.jK = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.t = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fd = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.br = (function() {
  return "LinearSeq";
});
$p.d = (function() {
  return ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().a6);
});
$p.w = (function() {
  return (((this.bc !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().a6)) ? 0 : (-1));
});
$p.C = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().a6)) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list");
  } else {
    return this.bc;
  }
});
$p.b9 = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().a6)) {
    throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
  } else {
    return this.cp;
  }
});
$p.qI = (function() {
  var these = this;
  var those = this;
  if ((!($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().a6))) {
    these = these.b9();
  }
  while ((those !== these)) {
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().a6)) {
      return this;
    }
    these = these.b9();
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().a6)) {
      return this;
    }
    these = these.b9();
    if ((these === those)) {
      return this;
    }
    those = those.b9();
  }
  return this;
});
$p.m = (function() {
  return (((this.bc !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().a6)) ? $m_sc_Iterator$().V : new $c_sci_LazyList$LazyIterator(this));
});
$p.b7 = (function(f) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if ((!($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal1) === $m_sci_LazyList$().a6))) {
      f.c(\u03b4this$tailLocal1.C());
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.b9();
    } else {
      return (void 0);
    }
  }
});
$p.c6 = (function() {
  return "LazyList";
});
$p.qv = (function(n) {
  return ((n <= 0) ? this : (((this.bc !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().a6)) ? $m_sci_LazyList$().a6 : $m_sci_LazyList$().s0(this, n)));
});
$p.dE = (function(sb, start, sep, end) {
  this.qI();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.aT, start, sep, end);
  return sb;
});
$p.h = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").r;
});
$p.bQ = (function() {
  return $m_sci_LazyList$();
});
$p.u = (function() {
  return this.b9();
});
$p.o3 = (function(n) {
  return this.qv(n);
});
$p.cA = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.c = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  cu: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  b4: 1,
  aA: 1,
  b9: 1,
  b8: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hT)));
}
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.hk = null;
  this.hk = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cv = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.hw = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fd = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.ht = (function() {
  return $m_sci_IndexedSeqDefaults$().mV;
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bf = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.q();
});
$p.g = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().oN(this);
});
$p.h = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.d = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.c4 = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.gq = (function() {
  return $m_sjsr_WrappedVarArgs$().b0();
});
$p.b7 = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.bO = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.dE = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.dM = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.q = (function() {
  return (this.hk.length | 0);
});
$p.t = (function(idx) {
  return this.hk[idx];
});
$p.c6 = (function() {
  return "WrappedVarArgs";
});
$p.gm = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().jB(coll);
});
$p.cA = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.c = (function(v1) {
  return this.t((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d0)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  d0: 1,
  C: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  s: 1,
  e: 1,
  k: 1,
  m: 1,
  b: 1,
  n: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  D: 1,
  l: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.bj = null;
  this.bj = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.ox = (function() {
  return $m_sci_HashMap$();
});
$p.w = (function() {
  return this.bj.aL;
});
$p.aJ = (function() {
  return this.bj.aL;
});
$p.d = (function() {
  return (this.bj.aL === 0);
});
$p.m = (function() {
  return (this.d() ? $m_sc_Iterator$().V : new $c_sci_MapKeyValueTupleIterator(this.bj));
});
$p.bn = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().J(key);
  var keyHash = $m_sc_Hashing$().ch(keyUnimprovedHash);
  return this.bj.jm(key, keyUnimprovedHash, keyHash, 0);
});
$p.c = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().J(key);
  var keyHash = $m_sc_Hashing$().ch(keyUnimprovedHash);
  return this.bj.jc(key, keyUnimprovedHash, keyHash, 0);
});
$p.cZ = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().J(key);
  var keyHash = $m_sc_Hashing$().ch(keyUnimprovedHash);
  return this.bj.jE(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fh = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().J(key);
  var newRootNode = this.bj.oY(key, value, keyUnimprovedHash, $m_sc_Hashing$().ch(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bj) ? this : new $c_sci_HashMap(newRootNode));
});
$p.eb = (function(f) {
  this.bj.eb(f);
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bj;
      var x$2 = that.bj;
      return ((x === null) ? (x$2 === null) : x.g(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.j = (function() {
  if (this.d()) {
    return $m_s_util_hashing_MurmurHash3$().j7;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bj);
    return $m_s_util_hashing_MurmurHash3$().k1(hashIterator, $m_s_util_hashing_MurmurHash3$().dD);
  }
});
$p.c6 = (function() {
  return "HashMap";
});
$p.dQ = (function(key, value) {
  return this.fh(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ct)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  ct: 1,
  at: 1,
  ap: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  k: 1,
  ar: 1,
  aq: 1,
  b: 1,
  ae: 1,
  s: 1,
  au: 1,
  af: 1,
  l: 1,
  gZ: 1,
  hG: 1,
  a: 1,
  a2: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hH)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hR)));
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
$p.aY = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.j0 = loadFactor;
  $thiz.aR = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.j1 = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.aR.a.length);
  $thiz.dx = 0;
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
  var idx = (hash & (($thiz.aR.a.length - 1) | 0));
  matchResult4: {
    var x10 = $thiz.aR.a[idx];
    if ((x10 === null)) {
      $thiz.aR.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
      break matchResult4;
    }
    var prev = null;
    var n = x10;
    while (((n !== null) && (n.cT <= hash))) {
      if (((n.cT === hash) && $m_sr_BoxesRunTime$().n(elem, n.eU))) {
        return false;
      }
      prev = n;
      n = n.aS;
    }
    if ((prev === null)) {
      $thiz.aR.a[idx] = new $c_scm_HashSet$Node(elem, hash, x10);
    } else {
      var this$3 = prev;
      var n$1 = new $c_scm_HashSet$Node(elem, hash, prev.aS);
      this$3.aS = n$1;
    }
  }
  $thiz.dx = ((1 + $thiz.dx) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.aR.a.length;
  $thiz.j1 = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.dx === 0)) {
    $thiz.aR = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.aR = $m_ju_Arrays$().T($thiz.aR, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.aR.a[i];
        if ((old !== null)) {
          preLow.aS = null;
          preHigh.aS = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.aS;
            if (((n.cT & oldlen) === 0)) {
              var this$2 = lastLow;
              var n$1 = n;
              this$2.aS = n$1;
              lastLow = n;
            } else {
              var this$3 = lastHigh;
              var n$2 = n;
              this$3.aS = n$2;
              lastHigh = n;
            }
            n = next;
          }
          var this$4 = lastLow;
          this$4.aS = null;
          if ((old !== preLow.aS)) {
            $thiz.aR.a[i] = preLow.aS;
          }
          if ((preHigh.aS !== null)) {
            $thiz.aR.a[((i + oldlen) | 0)] = preHigh.aS;
            var this$5 = lastHigh;
            this$5.aS = null;
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
  return $doubleToInt((size * $thiz.j0));
}
/** @constructor */
function $c_scm_HashSet() {
  this.j0 = 0.0;
  this.aR = null;
  this.j1 = 0;
  this.dx = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.aJ = (function() {
  return this.dx;
});
$p.bn = (function(elem) {
  var hash = $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().J(elem));
  matchResult1: {
    var $x_1;
    var x1 = this.aR.a[(hash & ((this.aR.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.qF(elem, hash);
  }
  return ($x_1 !== null);
});
$p.b1 = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.j0)));
  if ((target > this.aR.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.hp = (function(elem) {
  if ((((1 + this.dx) | 0) >= this.j1)) {
    $p_scm_HashSet__growTable__I__V(this, (this.aR.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().J(elem)));
});
$p.nI = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, v1$2, $p_scm_HashSet__improveHash__I__I(this, (v2$2 | 0)));
    }));
    xs.sz.sE(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.p()) {
      var next = iter.l();
      $p_scm_HashSet__addElem__O__I__Z(this, next.eU, next.cT);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.qw();
    while (iter$2.p()) {
      var next$2 = iter$2.l();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.ov(), next$2.oo());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.m = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.bQ = (function() {
  return $m_scm_HashSet$();
});
$p.w = (function() {
  return this.dx;
});
$p.d = (function() {
  return (this.dx === 0);
});
$p.c6 = (function() {
  return "HashSet";
});
$p.j = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.p()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().k1(hashIterator, $m_s_util_hashing_MurmurHash3$().nz);
});
$p.aY = (function(elems) {
  return this.nI(elems);
});
$p.aZ = (function(elem) {
  this.hp(elem);
  return this;
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cL)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  cL: 1,
  hU: 1,
  gF: 1,
  j: 1,
  c: 1,
  d: 1,
  i: 1,
  h: 1,
  f: 1,
  e: 1,
  gX: 1,
  b: 1,
  b7: 1,
  N: 1,
  F: 1,
  L: 1,
  K: 1,
  M: 1,
  R: 1,
  aL: 1,
  il: 1,
  ik: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hm)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ig)));
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
$p.bf = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.q();
});
$p.br = (function() {
  return "IndexedSeq";
});
$p.hw = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fd = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.cv = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.gn = (function(coll) {
  return $m_sci_ArraySeq$().jy(coll, this.a3());
});
$p.gq = (function() {
  return $m_sci_ArraySeq$().hE(this.a3());
});
$p.dM = (function() {
  return $m_sci_ArraySeq$().iN;
});
$p.c6 = (function() {
  return "ArraySeq";
});
$p.bO = (function(xs, start, len) {
  var srcLen = this.q();
  var destLen = $m_jl_reflect_Array$().bo(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gk(this.cC(), 0, xs, start, copied);
  }
  return copied;
});
$p.ht = (function() {
  return 2147483647;
});
$p.bQ = (function() {
  return $m_sci_ArraySeq$().iN;
});
$p.gm = (function(coll) {
  return $m_sci_ArraySeq$().jy(coll, this.a3());
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
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
$p.bf = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.q();
});
$p.br = (function() {
  return "IndexedSeq";
});
$p.hw = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fd = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.cv = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.dM = (function() {
  return $m_sci_Vector$();
});
$p.q = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.k : this.f.a.length);
});
$p.m = (function() {
  return ((this === $m_sci_Vector0$()) ? $m_sci_Vector$().n1 : new $c_sci_NewVectorIterator(this, this.q(), this.cE()));
});
$p.c6 = (function() {
  return "Vector";
});
$p.bO = (function(xs, start, len) {
  return this.m().bO(xs, start, len);
});
$p.ht = (function() {
  return $m_sci_Vector$().n0;
});
$p.aC = (function(index) {
  return $m_scg_CommonErrors$().jI(index, ((this.q() - 1) | 0));
});
$p.b7 = (function(f) {
  var c = this.cE();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = (((c + ((c >>> 31) | 0)) | 0) >> 1);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.jw(((((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0) - 1) | 0), this.cD(i), f);
    i = ((1 + i) | 0);
  }
});
$p.bQ = (function() {
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
$p.bf = (function(len) {
  var x = this.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.w = (function() {
  return this.q();
});
$p.br = (function() {
  return "IndexedSeq";
});
$p.cv = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.dM = (function() {
  return $m_scm_ArraySeq$().iZ;
});
$p.ok = (function(coll) {
  var evidence$1 = this.a3();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aI();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.w();
  var it = coll.m();
  while (it.p()) {
    var elem = it.l();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().gC(elementClass) : elem));
    jsElems.push(unboxedElem);
  }
  return $m_scm_ArraySeq$().jN($m_scm_ArrayBuilder$().gB(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems));
});
$p.gq = (function() {
  return $m_scm_ArraySeq$().hE(this.a3());
});
$p.c6 = (function() {
  return "ArraySeq";
});
$p.bO = (function(xs, start, len) {
  var srcLen = this.q();
  var destLen = $m_jl_reflect_Array$().bo(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gk(this.c5(), 0, xs, start, copied);
  }
  return copied;
});
$p.g = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().bo(this.c5()) !== $m_jl_reflect_Array$().bo(other.c5()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.bQ = (function() {
  return $m_scm_ArraySeq$().iZ;
});
$p.gn = (function(coll) {
  return this.ok(coll);
});
$p.gm = (function(coll) {
  return this.ok(coll);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.d9 = null;
  this.d9 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.q = (function() {
  return this.d9.a.length;
});
$p.gg = (function(i) {
  return this.d9.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.d9, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().oa(this.d9, that.d9) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.d9);
});
$p.cC = (function() {
  return this.d9;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.t = (function(i) {
  return this.gg(i);
});
$p.c = (function(v1) {
  return this.gg((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  cg: 1,
  a3: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.da = null;
  this.da = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.q = (function() {
  return this.da.a.length;
});
$p.g8 = (function(i) {
  return this.da.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.da, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().o6(this.da, that.da) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.da);
});
$p.cC = (function() {
  return this.da;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.t = (function(i) {
  return this.g8(i);
});
$p.c = (function(v1) {
  return this.g8((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  ch: 1,
  a3: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.cI = null;
  this.cI = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.q = (function() {
  return this.cI.a.length;
});
$p.g9 = (function(i) {
  return this.cI.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.cI, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().o7(this.cI, that.cI) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cI);
});
$p.dE = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.cI).dE(sb, start, sep, end);
});
$p.cC = (function() {
  return this.cI;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.t = (function(i) {
  return $bC(this.g9(i));
});
$p.c = (function(v1) {
  return $bC(this.g9((v1 | 0)));
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  ci: 1,
  a3: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.db = null;
  this.db = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.q = (function() {
  return this.db.a.length;
});
$p.ga = (function(i) {
  return this.db.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.db, this$1.af);
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofDouble)) {
    var array = this.db;
    var thatArray = that.db;
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
  return new $c_sc_ArrayOps$ArrayIterator(this.db);
});
$p.cC = (function() {
  return this.db;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.t = (function(i) {
  return this.ga(i);
});
$p.c = (function(v1) {
  return this.ga((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cj)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  cj: 1,
  a3: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.dc = null;
  this.dc = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.q = (function() {
  return this.dc.a.length;
});
$p.gb = (function(i) {
  return this.dc.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.dc, this$1.af);
});
$p.g = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofFloat)) {
    var array = this.dc;
    var thatArray = that.dc;
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
  return new $c_sc_ArrayOps$ArrayIterator(this.dc);
});
$p.cC = (function() {
  return this.dc;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.t = (function(i) {
  return this.gb(i);
});
$p.c = (function(v1) {
  return this.gb((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ck)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  ck: 1,
  a3: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.dd = null;
  this.dd = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.q = (function() {
  return this.dd.a.length;
});
$p.gc = (function(i) {
  return this.dd.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.dd, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().jr(this.dd, that.dd) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dd);
});
$p.cC = (function() {
  return this.dd;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.t = (function(i) {
  return this.gc(i);
});
$p.c = (function(v1) {
  return this.gc((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cl)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  cl: 1,
  a3: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.de = null;
  this.de = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.q = (function() {
  return ((this.de.a.length >>> 1) | 0);
});
$p.gd = (function(i) {
  var $x_1 = this.de.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.de, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().o8(this.de, that.de) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.de);
});
$p.cC = (function() {
  return this.de;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.t = (function(i) {
  return this.gd(i);
});
$p.c = (function(v1) {
  return this.gd((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cm)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  cm: 1,
  a3: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.cn = null;
  this.cn = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.a3 = (function() {
  return $m_s_reflect_ClassTag$().nP($objectGetClass(this.cn).ak.Q());
});
$p.q = (function() {
  return this.cn.a.length;
});
$p.t = (function(i) {
  return this.cn.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.cn, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().ob(this.cn, that.cn) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cn);
});
$p.cC = (function() {
  return this.cn;
});
$p.c = (function(v1) {
  return this.t((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cn)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  cn: 1,
  a3: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.df = null;
  this.df = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.q = (function() {
  return this.df.a.length;
});
$p.ge = (function(i) {
  return this.df.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.df, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().o9(this.df, that.df) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.df);
});
$p.cC = (function() {
  return this.df;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.t = (function(i) {
  return this.ge(i);
});
$p.c = (function(v1) {
  return this.ge((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.co)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  co: 1,
  a3: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.e1 = null;
  this.e1 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.q = (function() {
  return this.e1.a.length;
});
$p.gf = (function(i) {
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.e1, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.e1.a.length === that.e1.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.e1);
});
$p.cC = (function() {
  return this.e1;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.t = (function(i) {
  this.gf(i);
});
$p.c = (function(v1) {
  this.gf((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cp)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  cp: 1,
  a3: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a7: 1,
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
      var xs$tailLocal1$tmp1 = xs$tailLocal1.u();
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
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().n(a$tailLocal1.C(), b$tailLocal1.C()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.u();
        var b$tailLocal1$tmp1 = b$tailLocal1.u();
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
$p.jK = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.t = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fd = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.br = (function() {
  return "LinearSeq";
});
$p.m = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.cv = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.dM = (function() {
  return $m_sci_List$();
});
$p.nA = (function(prefix) {
  if (this.d()) {
    return prefix;
  } else if (prefix.d()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.C(), this);
    var curr = result;
    var that = prefix.u();
    while ((!that.d())) {
      var temp = new $c_sci_$colon$colon(that.C(), this);
      curr.ax = temp;
      curr = temp;
      that = that.u();
    }
    return result;
  }
});
$p.d = (function() {
  return (this === $m_sci_Nil$());
});
$p.jW = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.nA(prefix);
  }
  if ((prefix.w() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.d()) {
      return prefix.oT();
    }
  }
  var iter = prefix.m();
  if (iter.p()) {
    var result = new $c_sci_$colon$colon(iter.l(), this);
    var curr = result;
    while (iter.p()) {
      var temp = new $c_sci_$colon$colon(iter.l(), this);
      curr.ax = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.nN = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.nA(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.b7 = (function(f) {
  var these = this;
  while ((!these.d())) {
    f.c(these.C());
    these = these.u();
  }
});
$p.q = (function() {
  var these = this;
  var len = 0;
  while ((!these.d())) {
    len = ((1 + len) | 0);
    these = these.u();
  }
  return len;
});
$p.bf = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.bn = (function(elem) {
  var these = this;
  while ((!these.d())) {
    if ($m_sr_BoxesRunTime$().n(these.C(), elem)) {
      return true;
    }
    these = these.u();
  }
  return false;
});
$p.c6 = (function() {
  return "List";
});
$p.g = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.bQ = (function() {
  return $m_sci_List$();
});
$p.o3 = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.cA = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.c = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ba)));
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
  this.dr = null;
  this.dr = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.q = (function() {
  return this.dr.a.length;
});
$p.gg = (function(index) {
  return this.dr.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.dr, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().oa(this.dr, that.dr) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dr);
});
$p.c5 = (function() {
  return this.dr;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.t = (function(i) {
  return this.gg(i);
});
$p.c = (function(v1) {
  return this.gg((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cB)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  cB: 1,
  a4: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  q: 1,
  p: 1,
  Z: 1,
  Y: 1,
  l: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.ds = null;
  this.ds = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.q = (function() {
  return this.ds.a.length;
});
$p.g8 = (function(index) {
  return this.ds.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.ds, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().o6(this.ds, that.ds) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ds);
});
$p.c5 = (function() {
  return this.ds;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.t = (function(i) {
  return this.g8(i);
});
$p.c = (function(v1) {
  return this.g8((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cC)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  cC: 1,
  a4: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  q: 1,
  p: 1,
  Z: 1,
  Y: 1,
  l: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.bM = null;
  this.bM = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.q = (function() {
  return this.bM.a.length;
});
$p.g9 = (function(index) {
  return this.bM.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.bM, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().o7(this.bM, that.bM) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bM);
});
$p.dE = (function(sb, start, sep, end) {
  var jsb = sb.aT;
  if ((start.length !== 0)) {
    jsb.r = (("" + jsb.r) + start);
  }
  var len = this.bM.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.nL(this.bM);
    } else {
      jsb.q();
      var c = this.bM.a[0];
      var str = ("" + $cToS(c));
      jsb.r = (jsb.r + str);
      var i = 1;
      while ((i < len)) {
        jsb.r = (("" + jsb.r) + sep);
        var c$1 = this.bM.a[i];
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
$p.c5 = (function() {
  return this.bM;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.t = (function(i) {
  return $bC(this.g9(i));
});
$p.c = (function(v1) {
  return $bC(this.g9((v1 | 0)));
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cD)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  cD: 1,
  a4: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  q: 1,
  p: 1,
  Z: 1,
  Y: 1,
  l: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.bZ = null;
  this.bZ = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.q = (function() {
  return this.bZ.a.length;
});
$p.ga = (function(index) {
  return this.bZ.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.bZ, this$1.af);
});
$p.g = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
    var thatArray = that.bZ;
    if ((this.bZ === thatArray)) {
      return true;
    } else if ((this.bZ.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < this.bZ.a.length) && (this.bZ.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.bZ.a.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.g.call(this, that);
  }
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bZ);
});
$p.c5 = (function() {
  return this.bZ;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.t = (function(i) {
  return this.ga(i);
});
$p.c = (function(v1) {
  return this.ga((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cE)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  cE: 1,
  a4: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  q: 1,
  p: 1,
  Z: 1,
  Y: 1,
  l: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.c0 = null;
  this.c0 = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.q = (function() {
  return this.c0.a.length;
});
$p.gb = (function(index) {
  return this.c0.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.c0, this$1.af);
});
$p.g = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
    var thatArray = that.c0;
    if ((this.c0 === thatArray)) {
      return true;
    } else if ((this.c0.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < this.c0.a.length) && (this.c0.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.c0.a.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.g.call(this, that);
  }
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.c0);
});
$p.c5 = (function() {
  return this.c0;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.t = (function(i) {
  return this.gb(i);
});
$p.c = (function(v1) {
  return this.gb((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cF)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  cF: 1,
  a4: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  q: 1,
  p: 1,
  Z: 1,
  Y: 1,
  l: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.dt = null;
  this.dt = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.q = (function() {
  return this.dt.a.length;
});
$p.gc = (function(index) {
  return this.dt.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.dt, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().jr(this.dt, that.dt) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dt);
});
$p.c5 = (function() {
  return this.dt;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.t = (function(i) {
  return this.gc(i);
});
$p.c = (function(v1) {
  return this.gc((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cG)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  cG: 1,
  a4: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  q: 1,
  p: 1,
  Z: 1,
  Y: 1,
  l: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.du = null;
  this.du = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.q = (function() {
  return ((this.du.a.length >>> 1) | 0);
});
$p.gd = (function(index) {
  var $x_1 = this.du.a;
  var $x_2 = (index << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.du, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().o8(this.du, that.du) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.du);
});
$p.c5 = (function() {
  return this.du;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.t = (function(i) {
  return this.gd(i);
});
$p.c = (function(v1) {
  return this.gd((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cH)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  cH: 1,
  a4: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  q: 1,
  p: 1,
  Z: 1,
  Y: 1,
  l: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.cR = null;
  this.cR = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.a3 = (function() {
  return $m_s_reflect_ClassTag$().nP($objectGetClass(this.cR).ak.Q());
});
$p.q = (function() {
  return this.cR.a.length;
});
$p.t = (function(index) {
  return this.cR.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.cR, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().ob(this.cR, that.cR) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cR);
});
$p.c5 = (function() {
  return this.cR;
});
$p.c = (function(v1) {
  return this.t((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cI)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  cI: 1,
  a4: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  q: 1,
  p: 1,
  Z: 1,
  Y: 1,
  l: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.dv = null;
  this.dv = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.q = (function() {
  return this.dv.a.length;
});
$p.ge = (function(index) {
  return this.dv.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.dv, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().o9(this.dv, that.dv) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dv);
});
$p.c5 = (function() {
  return this.dv;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.t = (function(i) {
  return this.ge(i);
});
$p.c = (function(v1) {
  return this.ge((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cJ)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  cJ: 1,
  a4: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  q: 1,
  p: 1,
  Z: 1,
  Y: 1,
  l: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.e7 = null;
  this.e7 = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.q = (function() {
  return this.e7.a.length;
});
$p.gf = (function(index) {
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.aH(this.e7, this$1.af);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.e7.a.length === that.e7.a.length) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.m = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.e7);
});
$p.c5 = (function() {
  return this.e7;
});
$p.a3 = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.t = (function(i) {
  this.gf(i);
});
$p.c = (function(v1) {
  this.gf((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cK)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  cK: 1,
  a4: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  q: 1,
  p: 1,
  Z: 1,
  Y: 1,
  l: 1,
  r: 1,
  a: 1
}));
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i5)));
}
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.i = suffix1;
  $thiz.k = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.f = null;
  this.i = null;
  this.k = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
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
$p.t = (function(index) {
  if (((index >= 0) && (index < this.f.a.length))) {
    return this.f.a[index];
  } else {
    throw this.aC(index);
  }
});
$p.dP = (function(index, elem) {
  if (((index >= 0) && (index < this.f.a.length))) {
    var a1 = this.f;
    var a1c = a1.e();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.aC(index);
  }
});
$p.dF = (function(elem) {
  if ((this.f.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().eZ(this.f, elem));
  } else {
    var $x_2 = this.f;
    var $x_1 = $m_sci_VectorStatics$().bm;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.cE = (function() {
  return 1;
});
$p.cD = (function(idx) {
  return this.f;
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f.a.length))) {
    return this.f.a[index];
  } else {
    throw this.aC(index);
  }
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  hK: 1,
  al: 1,
  ag: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a: 1,
  a2: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.iM = null;
  this.ax = null;
  this.iM = head;
  this.ax = next;
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
$p.y = (function() {
  return 2;
});
$p.A = (function() {
  return "::";
});
$p.z = (function(n) {
  if ((n === 0)) {
    return this.iM;
  }
  if ((n === 1)) {
    return this.ax;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.C = (function() {
  return this.iM;
});
$p.u = (function() {
  return this.ax;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  h5: 1,
  ba: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  b4: 1,
  aA: 1,
  b9: 1,
  b8: 1,
  l: 1,
  r: 1,
  cf: 1,
  D: 1,
  a: 1,
  a2: 1,
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
$p.U = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.y = (function() {
  return 0;
});
$p.A = (function() {
  return "Nil";
});
$p.z = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.qZ = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list");
});
$p.si = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.w = (function() {
  return 0;
});
$p.m = (function() {
  return $m_sc_Iterator$().V;
});
$p.C = (function() {
  this.qZ();
});
$p.u = (function() {
  this.si();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  hA: 1,
  ba: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  b4: 1,
  aA: 1,
  b9: 1,
  b8: 1,
  l: 1,
  r: 1,
  cf: 1,
  D: 1,
  a: 1,
  a2: 1,
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
  this.i = null;
  this.k = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().iU, $m_sci_VectorStatics$().iU, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.nO = (function(index) {
  throw this.aC(index);
});
$p.dP = (function(index, elem) {
  throw this.aC(index);
});
$p.dF = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.cE = (function() {
  return 0;
});
$p.cD = (function(idx) {
  return null;
});
$p.g = (function(o) {
  return ((this === o) || ((o instanceof $c_sci_Vector) ? false : $f_sc_Seq__equals__O__Z(this, o)));
});
$p.aC = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.t = (function(i) {
  this.nO(i);
});
$p.c = (function(v1) {
  this.nO((v1 | 0));
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  hJ: 1,
  ak: 1,
  al: 1,
  ag: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a: 1,
  a2: 1
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
  this.i = null;
  this.k = 0;
  this.bL = 0;
  this.bl = null;
  this.bL = len1;
  this.bl = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.bL) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bl.a.length) ? this.bl.a[i2].a[i1] : this.i.a[(31 & io)]);
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
$p.dP = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.bL)) {
      var io = ((index - this.bL) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.bl.a.length)) {
        var a2 = this.bl;
        var a2c = a2.e();
        var a1 = a2c.a[i2];
        var a1c = a1.e();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.f, this.bL, a2c, this.i, this.k);
      } else {
        var a1$1 = this.i;
        var a1c$1 = a1$1.e();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.f, this.bL, this.bl, a1c$1, this.k);
      }
    } else {
      var a1$2 = this.f;
      var a1c$2 = a1$2.e();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bL, this.bl, this.i, this.k);
    }
  } else {
    throw this.aC(index);
  }
});
$p.dF = (function(elem) {
  if ((this.i.a.length < 32)) {
    var suffix1$3 = $m_sci_VectorStatics$().eZ(this.i, elem);
    var length0$3 = ((1 + this.k) | 0);
    return new $c_sci_Vector2(this.f, this.bL, this.bl, suffix1$3, length0$3);
  } else if ((this.bl.a.length < 30)) {
    var data2$4 = $m_sci_VectorStatics$().D(this.bl, this.i);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$4 = ((1 + this.k) | 0);
    return new $c_sci_Vector2(this.f, this.bL, data2$4, a, length0$4);
  } else {
    var $x_5 = this.f;
    var $x_4 = this.bL;
    var $x_3 = this.bl;
    var $x_2 = this.bL;
    var $x_1 = $m_sci_VectorStatics$().cs;
    var x = this.i;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.k) | 0));
  }
});
$p.cE = (function() {
  return 3;
});
$p.cD = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.bl;
      break;
    }
    case 2: {
      return this.i;
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
    var io = ((index - this.bL) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bl.a.length) ? this.bl.a[i2].a[i1] : this.i.a[(31 & io)]);
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  hL: 1,
  ak: 1,
  al: 1,
  ag: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a: 1,
  a2: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.i = null;
  this.k = 0;
  this.bd = 0;
  this.bC = null;
  this.be = 0;
  this.aV = null;
  this.aW = null;
  this.bd = len1;
  this.bC = prefix2;
  this.be = len12;
  this.aV = data3;
  this.aW = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.be) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aV.a.length) ? this.aV.a[i3].a[i2].a[i1] : ((i2 < this.aW.a.length) ? this.aW.a[i2].a[i1] : this.i.a[i1]));
    } else if ((index >= this.bd)) {
      var io$2 = ((index - this.bd) | 0);
      return this.bC.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
$p.dP = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.be)) {
      var io = ((index - this.be) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.aV.a.length)) {
        var a3 = this.aV;
        var a3c = a3.e();
        var a2 = a3c.a[i3];
        var a2c = a2.e();
        var a1 = a2c.a[i2];
        var a1c = a1.e();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.f, this.bd, this.bC, this.be, a3c, this.aW, this.i, this.k);
      } else if ((i2 < this.aW.a.length)) {
        var a2$1 = this.aW;
        var a2c$1 = a2$1.e();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.e();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.f, this.bd, this.bC, this.be, this.aV, a2c$1, this.i, this.k);
      } else {
        var a1$2 = this.i;
        var a1c$2 = a1$2.e();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.f, this.bd, this.bC, this.be, this.aV, this.aW, a1c$2, this.k);
      }
    } else if ((index >= this.bd)) {
      var io$2 = ((index - this.bd) | 0);
      var a2$2 = this.bC;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.e();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.e();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.f, this.bd, a2c$2, this.be, this.aV, this.aW, this.i, this.k);
    } else {
      var a1$4 = this.f;
      var a1c$4 = a1$4.e();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bd, this.bC, this.be, this.aV, this.aW, this.i, this.k);
    }
  } else {
    throw this.aC(index);
  }
});
$p.dF = (function(elem) {
  if ((this.i.a.length < 32)) {
    var suffix1$16 = $m_sci_VectorStatics$().eZ(this.i, elem);
    var length0$16 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(this.f, this.bd, this.bC, this.be, this.aV, this.aW, suffix1$16, length0$16);
  } else if ((this.aW.a.length < 31)) {
    var suffix2$6 = $m_sci_VectorStatics$().D(this.aW, this.i);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$17 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(this.f, this.bd, this.bC, this.be, this.aV, suffix2$6, a, length0$17);
  } else if ((this.aV.a.length < 30)) {
    var data3$7 = $m_sci_VectorStatics$().D(this.aV, $m_sci_VectorStatics$().D(this.aW, this.i));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$18 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(this.f, this.bd, this.bC, this.be, data3$7, $m_sci_VectorStatics$().bm, a$1, length0$18);
  } else {
    var $x_8 = this.f;
    var $x_7 = this.bd;
    var $x_6 = this.bC;
    var $x_5 = this.be;
    var $x_4 = this.aV;
    var $x_3 = this.be;
    var $x_2 = $m_sci_VectorStatics$().eR;
    var x = $m_sci_VectorStatics$().D(this.aW, this.i);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().bm;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.k) | 0));
  }
});
$p.cE = (function() {
  return 5;
});
$p.cD = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.bC;
      break;
    }
    case 2: {
      return this.aV;
      break;
    }
    case 3: {
      return this.aW;
      break;
    }
    case 4: {
      return this.i;
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
    var io = ((index - this.be) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aV.a.length) ? this.aV.a[i3].a[i2].a[i1] : ((i2 < this.aW.a.length) ? this.aW.a[i2].a[i1] : this.i.a[i1]));
    } else if ((index >= this.bd)) {
      var io$2 = ((index - this.bd) | 0);
      return this.bC.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  hM: 1,
  ak: 1,
  al: 1,
  ag: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a: 1,
  a2: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.i = null;
  this.k = 0;
  this.aO = 0;
  this.b4 = null;
  this.aP = 0;
  this.b5 = null;
  this.aQ = 0;
  this.ay = null;
  this.aA = null;
  this.az = null;
  this.aO = len1;
  this.b4 = prefix2;
  this.aP = len12;
  this.b5 = prefix3;
  this.aQ = len123;
  this.ay = data4;
  this.aA = suffix3;
  this.az = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.aQ) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ay.a.length) ? this.ay.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aA.a.length) ? this.aA.a[i3].a[i2].a[i1] : ((i2 < this.az.a.length) ? this.az.a[i2].a[i1] : this.i.a[i1])));
    } else if ((index >= this.aP)) {
      var io$2 = ((index - this.aP) | 0);
      return this.b5.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aO)) {
      var io$3 = ((index - this.aO) | 0);
      return this.b4.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
$p.dP = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.aQ)) {
      var io = ((index - this.aQ) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.ay.a.length)) {
        var a4 = this.ay;
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
        return new $c_sci_Vector4(this.f, this.aO, this.b4, this.aP, this.b5, this.aQ, a4c, this.aA, this.az, this.i, this.k);
      } else if ((i3 < this.aA.a.length)) {
        var a3$1 = this.aA;
        var a3c$1 = a3$1.e();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.e();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.e();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.f, this.aO, this.b4, this.aP, this.b5, this.aQ, this.ay, a3c$1, this.az, this.i, this.k);
      } else if ((i2 < this.az.a.length)) {
        var a2$2 = this.az;
        var a2c$2 = a2$2.e();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.e();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.f, this.aO, this.b4, this.aP, this.b5, this.aQ, this.ay, this.aA, a2c$2, this.i, this.k);
      } else {
        var a1$3 = this.i;
        var a1c$3 = a1$3.e();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.f, this.aO, this.b4, this.aP, this.b5, this.aQ, this.ay, this.aA, this.az, a1c$3, this.k);
      }
    } else if ((index >= this.aP)) {
      var io$2 = ((index - this.aP) | 0);
      var a3$2 = this.b5;
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
      return new $c_sci_Vector4(this.f, this.aO, this.b4, this.aP, a3c$2, this.aQ, this.ay, this.aA, this.az, this.i, this.k);
    } else if ((index >= this.aO)) {
      var io$3 = ((index - this.aO) | 0);
      var a2$4 = this.b4;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.e();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.e();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.f, this.aO, a2c$4, this.aP, this.b5, this.aQ, this.ay, this.aA, this.az, this.i, this.k);
    } else {
      var a1$6 = this.f;
      var a1c$6 = a1$6.e();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.aO, this.b4, this.aP, this.b5, this.aQ, this.ay, this.aA, this.az, this.i, this.k);
    }
  } else {
    throw this.aC(index);
  }
});
$p.dF = (function(elem) {
  if ((this.i.a.length < 32)) {
    var suffix1$33 = $m_sci_VectorStatics$().eZ(this.i, elem);
    var length0$33 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.aO, this.b4, this.aP, this.b5, this.aQ, this.ay, this.aA, this.az, suffix1$33, length0$33);
  } else if ((this.az.a.length < 31)) {
    var suffix2$22 = $m_sci_VectorStatics$().D(this.az, this.i);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$34 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.aO, this.b4, this.aP, this.b5, this.aQ, this.ay, this.aA, suffix2$22, a, length0$34);
  } else if ((this.aA.a.length < 31)) {
    var suffix3$9 = $m_sci_VectorStatics$().D(this.aA, $m_sci_VectorStatics$().D(this.az, this.i));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$35 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.aO, this.b4, this.aP, this.b5, this.aQ, this.ay, suffix3$9, $m_sci_VectorStatics$().bm, a$1, length0$35);
  } else if ((this.ay.a.length < 30)) {
    var data4$10 = $m_sci_VectorStatics$().D(this.ay, $m_sci_VectorStatics$().D(this.aA, $m_sci_VectorStatics$().D(this.az, this.i)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$36 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.aO, this.b4, this.aP, this.b5, this.aQ, data4$10, $m_sci_VectorStatics$().cs, $m_sci_VectorStatics$().bm, a$2, length0$36);
  } else {
    var $x_11 = this.f;
    var $x_10 = this.aO;
    var $x_9 = this.b4;
    var $x_8 = this.aP;
    var $x_7 = this.b5;
    var $x_6 = this.aQ;
    var $x_5 = this.ay;
    var $x_4 = this.aQ;
    var $x_3 = $m_sci_VectorStatics$().iV;
    var x = $m_sci_VectorStatics$().D(this.aA, $m_sci_VectorStatics$().D(this.az, this.i));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().cs;
    var $x_1 = $m_sci_VectorStatics$().bm;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.k) | 0));
  }
});
$p.cE = (function() {
  return 7;
});
$p.cD = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.b4;
      break;
    }
    case 2: {
      return this.b5;
      break;
    }
    case 3: {
      return this.ay;
      break;
    }
    case 4: {
      return this.aA;
      break;
    }
    case 5: {
      return this.az;
      break;
    }
    case 6: {
      return this.i;
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
    var io = ((index - this.aQ) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ay.a.length) ? this.ay.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aA.a.length) ? this.aA.a[i3].a[i2].a[i1] : ((i2 < this.az.a.length) ? this.az.a[i2].a[i1] : this.i.a[i1])));
    } else if ((index >= this.aP)) {
      var io$2 = ((index - this.aP) | 0);
      return this.b5.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aO)) {
      var io$3 = ((index - this.aO) | 0);
      return this.b4.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  hN: 1,
  ak: 1,
  al: 1,
  ag: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a: 1,
  a2: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.i = null;
  this.k = 0;
  this.am = 0;
  this.aD = null;
  this.an = 0;
  this.aE = null;
  this.ao = 0;
  this.aF = null;
  this.ap = 0;
  this.a7 = null;
  this.aa = null;
  this.a9 = null;
  this.a8 = null;
  this.am = len1;
  this.aD = prefix2;
  this.an = len12;
  this.aE = prefix3;
  this.ao = len123;
  this.aF = prefix4;
  this.ap = len1234;
  this.a7 = data5;
  this.aa = suffix4;
  this.a9 = suffix3;
  this.a8 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.ap) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a7.a.length) ? this.a7.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aa.a.length) ? this.aa.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a9.a.length) ? this.a9.a[i3].a[i2].a[i1] : ((i2 < this.a8.a.length) ? this.a8.a[i2].a[i1] : this.i.a[i1]))));
    } else if ((index >= this.ao)) {
      var io$2 = ((index - this.ao) | 0);
      return this.aF.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.an)) {
      var io$3 = ((index - this.an) | 0);
      return this.aE.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.am)) {
      var io$4 = ((index - this.am) | 0);
      return this.aD.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
$p.dP = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.ap)) {
      var io = ((index - this.ap) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.a7.a.length)) {
        var a5 = this.a7;
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
        return new $c_sci_Vector5(this.f, this.am, this.aD, this.an, this.aE, this.ao, this.aF, this.ap, a5c, this.aa, this.a9, this.a8, this.i, this.k);
      } else if ((i4 < this.aa.a.length)) {
        var a4$1 = this.aa;
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
        return new $c_sci_Vector5(this.f, this.am, this.aD, this.an, this.aE, this.ao, this.aF, this.ap, this.a7, a4c$1, this.a9, this.a8, this.i, this.k);
      } else if ((i3 < this.a9.a.length)) {
        var a3$2 = this.a9;
        var a3c$2 = a3$2.e();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.e();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.e();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.f, this.am, this.aD, this.an, this.aE, this.ao, this.aF, this.ap, this.a7, this.aa, a3c$2, this.a8, this.i, this.k);
      } else if ((i2 < this.a8.a.length)) {
        var a2$3 = this.a8;
        var a2c$3 = a2$3.e();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.e();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.f, this.am, this.aD, this.an, this.aE, this.ao, this.aF, this.ap, this.a7, this.aa, this.a9, a2c$3, this.i, this.k);
      } else {
        var a1$4 = this.i;
        var a1c$4 = a1$4.e();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.f, this.am, this.aD, this.an, this.aE, this.ao, this.aF, this.ap, this.a7, this.aa, this.a9, this.a8, a1c$4, this.k);
      }
    } else if ((index >= this.ao)) {
      var io$2 = ((index - this.ao) | 0);
      var a4$2 = this.aF;
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
      return new $c_sci_Vector5(this.f, this.am, this.aD, this.an, this.aE, this.ao, a4c$2, this.ap, this.a7, this.aa, this.a9, this.a8, this.i, this.k);
    } else if ((index >= this.an)) {
      var io$3 = ((index - this.an) | 0);
      var a3$4 = this.aE;
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
      return new $c_sci_Vector5(this.f, this.am, this.aD, this.an, a3c$4, this.ao, this.aF, this.ap, this.a7, this.aa, this.a9, this.a8, this.i, this.k);
    } else if ((index >= this.am)) {
      var io$4 = ((index - this.am) | 0);
      var a2$6 = this.aD;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.e();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.e();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.f, this.am, a2c$6, this.an, this.aE, this.ao, this.aF, this.ap, this.a7, this.aa, this.a9, this.a8, this.i, this.k);
    } else {
      var a1$8 = this.f;
      var a1c$8 = a1$8.e();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.am, this.aD, this.an, this.aE, this.ao, this.aF, this.ap, this.a7, this.aa, this.a9, this.a8, this.i, this.k);
    }
  } else {
    throw this.aC(index);
  }
});
$p.dF = (function(elem) {
  if ((this.i.a.length < 32)) {
    var suffix1$54 = $m_sci_VectorStatics$().eZ(this.i, elem);
    var length0$54 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.am, this.aD, this.an, this.aE, this.ao, this.aF, this.ap, this.a7, this.aa, this.a9, this.a8, suffix1$54, length0$54);
  } else if ((this.a8.a.length < 31)) {
    var suffix2$41 = $m_sci_VectorStatics$().D(this.a8, this.i);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$55 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.am, this.aD, this.an, this.aE, this.ao, this.aF, this.ap, this.a7, this.aa, this.a9, suffix2$41, a, length0$55);
  } else if ((this.a9.a.length < 31)) {
    var suffix3$29 = $m_sci_VectorStatics$().D(this.a9, $m_sci_VectorStatics$().D(this.a8, this.i));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$56 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.am, this.aD, this.an, this.aE, this.ao, this.aF, this.ap, this.a7, this.aa, suffix3$29, $m_sci_VectorStatics$().bm, a$1, length0$56);
  } else if ((this.aa.a.length < 31)) {
    var suffix4$12 = $m_sci_VectorStatics$().D(this.aa, $m_sci_VectorStatics$().D(this.a9, $m_sci_VectorStatics$().D(this.a8, this.i)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$57 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.am, this.aD, this.an, this.aE, this.ao, this.aF, this.ap, this.a7, suffix4$12, $m_sci_VectorStatics$().cs, $m_sci_VectorStatics$().bm, a$2, length0$57);
  } else if ((this.a7.a.length < 30)) {
    var data5$13 = $m_sci_VectorStatics$().D(this.a7, $m_sci_VectorStatics$().D(this.aa, $m_sci_VectorStatics$().D(this.a9, $m_sci_VectorStatics$().D(this.a8, this.i))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$58 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.am, this.aD, this.an, this.aE, this.ao, this.aF, this.ap, data5$13, $m_sci_VectorStatics$().eR, $m_sci_VectorStatics$().cs, $m_sci_VectorStatics$().bm, a$3, length0$58);
  } else {
    var $x_14 = this.f;
    var $x_13 = this.am;
    var $x_12 = this.aD;
    var $x_11 = this.an;
    var $x_10 = this.aE;
    var $x_9 = this.ao;
    var $x_8 = this.aF;
    var $x_7 = this.ap;
    var $x_6 = this.a7;
    var $x_5 = this.ap;
    var $x_4 = $m_sci_VectorStatics$().n2;
    var x = $m_sci_VectorStatics$().D(this.aa, $m_sci_VectorStatics$().D(this.a9, $m_sci_VectorStatics$().D(this.a8, this.i)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().eR;
    var $x_2 = $m_sci_VectorStatics$().cs;
    var $x_1 = $m_sci_VectorStatics$().bm;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.k) | 0));
  }
});
$p.cE = (function() {
  return 9;
});
$p.cD = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
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
      return this.a7;
      break;
    }
    case 5: {
      return this.aa;
      break;
    }
    case 6: {
      return this.a9;
      break;
    }
    case 7: {
      return this.a8;
      break;
    }
    case 8: {
      return this.i;
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
    var io = ((index - this.ap) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a7.a.length) ? this.a7.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aa.a.length) ? this.aa.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a9.a.length) ? this.a9.a[i3].a[i2].a[i1] : ((i2 < this.a8.a.length) ? this.a8.a[i2].a[i1] : this.i.a[i1]))));
    } else if ((index >= this.ao)) {
      var io$2 = ((index - this.ao) | 0);
      return this.aF.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.an)) {
      var io$3 = ((index - this.an) | 0);
      return this.aE.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.am)) {
      var io$4 = ((index - this.am) | 0);
      return this.aD.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  hO: 1,
  ak: 1,
  al: 1,
  ag: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a: 1,
  a2: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.i = null;
  this.k = 0;
  this.ab = 0;
  this.aq = null;
  this.ac = 0;
  this.ar = null;
  this.ad = 0;
  this.as = null;
  this.ae = 0;
  this.at = null;
  this.ah = 0;
  this.X = null;
  this.a1 = null;
  this.a0 = null;
  this.Z = null;
  this.Y = null;
  this.ab = len1;
  this.aq = prefix2;
  this.ac = len12;
  this.ar = prefix3;
  this.ad = len123;
  this.as = prefix4;
  this.ae = len1234;
  this.at = prefix5;
  this.ah = len12345;
  this.X = data6;
  this.a1 = suffix5;
  this.a0 = suffix4;
  this.Z = suffix3;
  this.Y = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.ah) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.X.a.length) ? this.X.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a1.a.length) ? this.a1.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a0.a.length) ? this.a0.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.Z.a.length) ? this.Z.a[i3].a[i2].a[i1] : ((i2 < this.Y.a.length) ? this.Y.a[i2].a[i1] : this.i.a[i1])))));
    } else if ((index >= this.ae)) {
      var io$2 = ((index - this.ae) | 0);
      return this.at.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ad)) {
      var io$3 = ((index - this.ad) | 0);
      return this.as.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ac)) {
      var io$4 = ((index - this.ac) | 0);
      return this.ar.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ab)) {
      var io$5 = ((index - this.ab) | 0);
      return this.aq.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
$p.dP = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.ah)) {
      var io = ((index - this.ah) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.X.a.length)) {
        var a6 = this.X;
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
        return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, a6c, this.a1, this.a0, this.Z, this.Y, this.i, this.k);
      } else if ((i5 < this.a1.a.length)) {
        var a5$1 = this.a1;
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
        return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, this.X, a5c$1, this.a0, this.Z, this.Y, this.i, this.k);
      } else if ((i4 < this.a0.a.length)) {
        var a4$2 = this.a0;
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
        return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, this.X, this.a1, a4c$2, this.Z, this.Y, this.i, this.k);
      } else if ((i3 < this.Z.a.length)) {
        var a3$3 = this.Z;
        var a3c$3 = a3$3.e();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.e();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.e();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, this.X, this.a1, this.a0, a3c$3, this.Y, this.i, this.k);
      } else if ((i2 < this.Y.a.length)) {
        var a2$4 = this.Y;
        var a2c$4 = a2$4.e();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.e();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, this.X, this.a1, this.a0, this.Z, a2c$4, this.i, this.k);
      } else {
        var a1$5 = this.i;
        var a1c$5 = a1$5.e();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, this.X, this.a1, this.a0, this.Z, this.Y, a1c$5, this.k);
      }
    } else if ((index >= this.ae)) {
      var io$2 = ((index - this.ae) | 0);
      var a5$2 = this.at;
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
      return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, a5c$2, this.ah, this.X, this.a1, this.a0, this.Z, this.Y, this.i, this.k);
    } else if ((index >= this.ad)) {
      var io$3 = ((index - this.ad) | 0);
      var a4$4 = this.as;
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
      return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, a4c$4, this.ae, this.at, this.ah, this.X, this.a1, this.a0, this.Z, this.Y, this.i, this.k);
    } else if ((index >= this.ac)) {
      var io$4 = ((index - this.ac) | 0);
      var a3$6 = this.ar;
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
      return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, a3c$6, this.ad, this.as, this.ae, this.at, this.ah, this.X, this.a1, this.a0, this.Z, this.Y, this.i, this.k);
    } else if ((index >= this.ab)) {
      var io$5 = ((index - this.ab) | 0);
      var a2$8 = this.aq;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.e();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.e();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.f, this.ab, a2c$8, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, this.X, this.a1, this.a0, this.Z, this.Y, this.i, this.k);
    } else {
      var a1$10 = this.f;
      var a1c$10 = a1$10.e();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, this.X, this.a1, this.a0, this.Z, this.Y, this.i, this.k);
    }
  } else {
    throw this.aC(index);
  }
});
$p.dF = (function(elem) {
  if ((this.i.a.length < 32)) {
    var suffix1$79 = $m_sci_VectorStatics$().eZ(this.i, elem);
    var length0$79 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, this.X, this.a1, this.a0, this.Z, this.Y, suffix1$79, length0$79);
  } else if ((this.Y.a.length < 31)) {
    var suffix2$63 = $m_sci_VectorStatics$().D(this.Y, this.i);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$80 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, this.X, this.a1, this.a0, this.Z, suffix2$63, a, length0$80);
  } else if ((this.Z.a.length < 31)) {
    var suffix3$52 = $m_sci_VectorStatics$().D(this.Z, $m_sci_VectorStatics$().D(this.Y, this.i));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$81 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, this.X, this.a1, this.a0, suffix3$52, $m_sci_VectorStatics$().bm, a$1, length0$81);
  } else if ((this.a0.a.length < 31)) {
    var suffix4$36 = $m_sci_VectorStatics$().D(this.a0, $m_sci_VectorStatics$().D(this.Z, $m_sci_VectorStatics$().D(this.Y, this.i)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$82 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, this.X, this.a1, suffix4$36, $m_sci_VectorStatics$().cs, $m_sci_VectorStatics$().bm, a$2, length0$82);
  } else if ((this.a1.a.length < 31)) {
    var suffix5$15 = $m_sci_VectorStatics$().D(this.a1, $m_sci_VectorStatics$().D(this.a0, $m_sci_VectorStatics$().D(this.Z, $m_sci_VectorStatics$().D(this.Y, this.i))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$83 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, this.X, suffix5$15, $m_sci_VectorStatics$().eR, $m_sci_VectorStatics$().cs, $m_sci_VectorStatics$().bm, a$3, length0$83);
  } else if ((this.X.a.length < 62)) {
    var data6$16 = $m_sci_VectorStatics$().D(this.X, $m_sci_VectorStatics$().D(this.a1, $m_sci_VectorStatics$().D(this.a0, $m_sci_VectorStatics$().D(this.Z, $m_sci_VectorStatics$().D(this.Y, this.i)))));
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var length0$84 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.ab, this.aq, this.ac, this.ar, this.ad, this.as, this.ae, this.at, this.ah, data6$16, $m_sci_VectorStatics$().iV, $m_sci_VectorStatics$().eR, $m_sci_VectorStatics$().cs, $m_sci_VectorStatics$().bm, a$4, length0$84);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cE = (function() {
  return 11;
});
$p.cD = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.aq;
      break;
    }
    case 2: {
      return this.ar;
      break;
    }
    case 3: {
      return this.as;
      break;
    }
    case 4: {
      return this.at;
      break;
    }
    case 5: {
      return this.X;
      break;
    }
    case 6: {
      return this.a1;
      break;
    }
    case 7: {
      return this.a0;
      break;
    }
    case 8: {
      return this.Z;
      break;
    }
    case 9: {
      return this.Y;
      break;
    }
    case 10: {
      return this.i;
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
    var io = ((index - this.ah) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.X.a.length) ? this.X.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a1.a.length) ? this.a1.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a0.a.length) ? this.a0.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.Z.a.length) ? this.Z.a[i3].a[i2].a[i1] : ((i2 < this.Y.a.length) ? this.Y.a[i2].a[i1] : this.i.a[i1])))));
    } else if ((index >= this.ae)) {
      var io$2 = ((index - this.ae) | 0);
      return this.at.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ad)) {
      var io$3 = ((index - this.ad) | 0);
      return this.as.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ac)) {
      var io$4 = ((index - this.ac) | 0);
      return this.ar.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ab)) {
      var io$5 = ((index - this.ab) | 0);
      return this.aq.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.aC(index);
  }
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  hP: 1,
  ak: 1,
  al: 1,
  ag: 1,
  B: 1,
  o: 1,
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
  s: 1,
  A: 1,
  z: 1,
  q: 1,
  p: 1,
  G: 1,
  C: 1,
  l: 1,
  r: 1,
  D: 1,
  a: 1,
  a2: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.aT = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.aT = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.aY = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b1 = (function(size) {
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bf = (function(len) {
  var x = this.aT.q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.br = (function() {
  return "IndexedSeq";
});
$p.q = (function() {
  return this.aT.q();
});
$p.w = (function() {
  return this.aT.q();
});
$p.pK = (function(x) {
  var this$1 = this.aT;
  var str = ("" + $cToS(x));
  this$1.r = (this$1.r + str);
  return this;
});
$p.h = (function() {
  return this.aT.r;
});
$p.nM = (function(xs) {
  if (false) {
    var this$3 = this.aT;
    var str = xs.sA;
    this$3.r = (("" + this$3.r) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.aT.nL(xs.bM);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.aT;
    var s = xs.aT;
    this$4.r = (("" + this$4.r) + s);
  } else {
    var ks = xs.w();
    if ((ks !== 0)) {
      var b = this.aT;
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
$p.d = (function() {
  return (this.aT.q() === 0);
});
$p.t = (function(i) {
  return $bC(this.aT.nT(i));
});
$p.c = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aT.nT(i));
});
$p.gn = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).nM(coll);
});
$p.gm = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).nM(coll);
});
$p.aZ = (function(elem) {
  return this.pK($uC(elem));
});
$p.b8 = (function() {
  return this.aT.r;
});
$p.bQ = (function() {
  return $m_scm_IndexedSeq$();
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cO)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cO: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  K: 1,
  M: 1,
  R: 1,
  ah: 1,
  q: 1,
  p: 1,
  Z: 1,
  Y: 1,
  aU: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ie)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().hG($thiz);
  $thiz.c1 = buf.c1;
  $thiz.cU = buf.cU;
  $thiz.hg = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.hh = ((1 + $thiz.hh) | 0);
  if ($thiz.hg) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.hh = 0;
  this.c1 = null;
  this.cU = null;
  this.hg = false;
  this.c2 = 0;
  this.hh = 0;
  this.c1 = $m_sci_Nil$();
  this.cU = null;
  this.hg = false;
  this.c2 = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.cv = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b1 = (function(size) {
});
$p.m = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.c1.m(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.hh)));
});
$p.dM = (function() {
  return $m_scm_ListBuffer$();
});
$p.t = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.c1, i);
});
$p.q = (function() {
  return this.c2;
});
$p.w = (function() {
  return this.c2;
});
$p.d = (function() {
  return (this.c2 === 0);
});
$p.oT = (function() {
  this.hg = (!this.d());
  return this.c1;
});
$p.pS = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.c2 === 0)) {
    this.c1 = last1;
  } else {
    var x$proxy2 = this.cU;
    if ((x$proxy2 === null)) {
      $m_sr_Scala3RunTime$().bq();
    }
    x$proxy2.ax = last1;
  }
  this.cU = last1;
  this.c2 = ((1 + this.c2) | 0);
  return this;
});
$p.hG = (function(xs) {
  var it = xs.m();
  if (it.p()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.l(), $m_sci_Nil$());
    this.c1 = last0;
    while (it.p()) {
      var last1 = new $c_sci_$colon$colon(it.l(), $m_sci_Nil$());
      last0.ax = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.c2 = len;
    this.cU = last0;
  }
  return this;
});
$p.pE = (function(xs) {
  var it = xs.m();
  if (it.p()) {
    var fresh = new $c_scm_ListBuffer().hG(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.c2 === 0)) {
      this.c1 = fresh.c1;
    } else {
      var x$proxy3 = this.cU;
      if ((x$proxy3 === null)) {
        $m_sr_Scala3RunTime$().bq();
      }
      x$proxy3.ax = fresh.c1;
    }
    this.cU = fresh.cU;
    this.c2 = ((this.c2 + fresh.c2) | 0);
  }
  return this;
});
$p.br = (function() {
  return "ListBuffer";
});
$p.bQ = (function() {
  return $m_scm_ListBuffer$();
});
$p.c = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.c1, i);
});
$p.b8 = (function() {
  return this.oT();
});
$p.aZ = (function(elem) {
  return this.pS(elem);
});
$p.aY = (function(elems) {
  return this.pE(elems);
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cN)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  cN: 1,
  bc: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  K: 1,
  M: 1,
  aL: 1,
  bd: 1,
  l: 1,
  r: 1,
  R: 1,
  ah: 1,
  a: 1,
  a2: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.eS = 0;
  $thiz.cQ = initialElements;
  $thiz.aX = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.eS = 0;
  this.cQ = null;
  this.aX = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.m = (function() {
  return this.sv().m();
});
$p.bf = (function(len) {
  var x = this.aX;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cv = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.w = (function() {
  return this.aX;
});
$p.jq = (function(n) {
  this.cQ = $m_scm_ArrayBuffer$().oM(this.cQ, this.aX, n);
});
$p.b1 = (function(size) {
  if (((size > this.aX) && (size >= 1))) {
    this.jq(size);
  }
});
$p.t = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().jI(n, ((this.aX - 1) | 0));
  }
  if ((hi > this.aX)) {
    throw $m_scg_CommonErrors$().jI(((hi - 1) | 0), ((this.aX - 1) | 0));
  }
  return this.cQ.a[n];
});
$p.q = (function() {
  return this.aX;
});
$p.sv = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.eS)));
});
$p.dM = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.pP = (function(elem) {
  this.eS = ((1 + this.eS) | 0);
  var newSize = ((1 + this.aX) | 0);
  if ((this.cQ.a.length <= ((newSize - 1) | 0))) {
    this.jq(newSize);
  }
  this.aX = newSize;
  this.cQ.a[((newSize - 1) | 0)] = elem;
  return this;
});
$p.nH = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aX;
    if ((elemsLength > 0)) {
      this.eS = ((1 + this.eS) | 0);
      this.jq(((this.aX + elemsLength) | 0));
      $m_s_Array$().gk(elems.cQ, 0, this.cQ, this.aX, elemsLength);
      this.aX = ((this.aX + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.br = (function() {
  return "ArrayBuffer";
});
$p.bO = (function(xs, start, len) {
  var srcLen = this.aX;
  var destLen = $m_jl_reflect_Array$().bo(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().gk(this.cQ, 0, xs, start, copied);
  }
  return copied;
});
$p.c = (function(v1) {
  return this.t((v1 | 0));
});
$p.bQ = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.aZ = (function(elem) {
  return this.pP(elem);
});
$p.aY = (function(elems) {
  return this.nH(elems);
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cA)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  cA: 1,
  bc: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  K: 1,
  M: 1,
  aL: 1,
  bd: 1,
  q: 1,
  p: 1,
  Z: 1,
  Y: 1,
  cM: 1,
  l: 1,
  r: 1,
  a: 1,
  a2: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.dA = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.dA = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.b1 = (function(size) {
});
$p.br = (function() {
  return "IndexedSeq";
});
$p.m = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bf = (function(len) {
  var x = (this.dA.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cv = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.dM = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.t = (function(index) {
  return this.dA[index];
});
$p.q = (function() {
  return (this.dA.length | 0);
});
$p.w = (function() {
  return (this.dA.length | 0);
});
$p.c6 = (function() {
  return "WrappedArray";
});
$p.b8 = (function() {
  return this;
});
$p.aZ = (function(elem) {
  this.dA.push(elem);
  return this;
});
$p.c = (function(v1) {
  var index = (v1 | 0);
  return this.dA[index];
});
$p.bQ = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  jn: 1,
  bc: 1,
  Q: 1,
  o: 1,
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
  N: 1,
  F: 1,
  L: 1,
  T: 1,
  S: 1,
  K: 1,
  M: 1,
  aL: 1,
  bd: 1,
  r: 1,
  l: 1,
  Y: 1,
  q: 1,
  p: 1,
  Z: 1,
  cM: 1,
  R: 1,
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
