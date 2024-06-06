const ranges = [
  { min:"0x1", max:"0x1" },
  { min:"0x2", max:"0x3" },
  { min:"0x4", max:"0x7" },
  { min:"0x8", max:"0xf" },
  { min:"0x10", max:"0x1f" },
  { min:"0x20", max:"0x3f" },
  { min:"0x40", max:"0x7f" },
  { min:"0x80", max:"0xff" },
  { min:"0x100", max:"0x1ff" },
  { min:"0x200", max:"0x3ff" },
  { min:"0x400", max:"0x7ff" },
  { min:"0x800", max:"0xfff" },
  { min:"0x1000", max:"0x1fff" },
  { min:"0x2000", max:"0x3fff" },
  { min:"0x4000", max:"0x7fff" },
  { min:"0x8000", max:"0xffff" },
  { min:"0x10000", max:"0x1ffff" },
  { min:"0x20000", max:"0x3ffff" },
  { min:"0x40000", max:"0x7ffff" },
  { min:"0x80000", max:"0xfffff" },
  { min:"0x100000", max:"0x1fffff" },
  { min:"0x200000", max:"0x3fffff" },
  { min:"0x400000", max:"0x7fffff" },
  { min:"0x800000", max:"0xffffff" },
  { min:"0x1000000", max:"0x1ffffff" },
  { min:"0x2000000", max:"0x3ffffff" }, 
  { min:"0x4000000", max:"0x7ffffff" },
  { min:"0x8000000", max:"0xfffffff" },
  { min:"0x10000000", max:"0x1fffffff" },
  { min:"0x20000000", max:"0x3fffffff" },
  { min:"0x40000000", max:"0x7fffffff" },
  { min:"0x80000000", max:"0xffffffff" },
  { min:"0x100000000", max:"0x1ffffffff" },
  { min:"0x200000000", max:"0x3ffffffff" },
  { min:"0x400000000", max:"0x7ffffffff" },
  { min:"0x800000000", max:"0xfffffffff" },
  { min:"0x1000000000", max:"0x1fffffffff" },
  { min:"0x2000000000", max:"0x3fffffffff" },
  { min:"0x4000000000", max:"0x7fffffffff" },
  { min:"0x8000000000", max:"0xffffffffff" },
  { min:"0x10000000000", max:"0x1ffffffffff" },
  { min:"0x20000000000", max:"0x3ffffffffff" },
  { min:"0x40000000000", max:"0x7ffffffffff" },
  { min:"0x80000000000", max:"0xfffffffffff" },
  { min:"0x100000000000", max:"0x1fffffffffff" },
  { min:"0x200000000000", max:"0x3fffffffffff" },
  { min:"0x400000000000", max:"0x7fffffffffff" },
  { min:"0x800000000000", max:"0xffffffffffff" },
  { min:"0x1000000000000", max:"0x1ffffffffffff" },
  { min:"0x2000000000000", max:"0x3ffffffffffff" },
  { min:"0x4000000000000", max:"0x7ffffffffffff" },
  { min:"0x8000000000000", max:"0xfffffffffffff" },
  { min:"0x10000000000000", max:"0x1fffffffffffff" },
  { min:"0x20000000000000", max:"0x3fffffffffffff" },
  { min:"0x40000000000000", max:"0x7fffffffffffff" },
  { min:"0x80000000000000", max:"0xffffffffffffff" },
  { min:"0x100000000000000", max:"0x1ffffffffffffff" },
  { min:"0x200000000000000", max:"0x3ffffffffffffff" },
  { min:"0x400000000000000", max:"0x7ffffffffffffff" },
  { min:"0x800000000000000", max:"0xfffffffffffffff" },
  { min:"0x1000000000000000", max:"0x1fffffffffffffff" },
  { min:"0x2000000000000000", max:"0x3fffffffffffffff" },
  { min:"0x4000000000000000", max:"0x7fffffffffffffff" },
  { min:"0x8000000000000000", max:"0xffffffffffffffff" },
  { min:"0x10000000000000000", max:"0x1ffffffffffffffff" },
  { min:"0x20000000000000000", max:"0x3ffffffffffffffff" },
  { min:"0x40000000000000000", max:"0x7ffffffffffffffff" },
  { min:"0x80000000000000000", max:"0xfffffffffffffffff" },
  { min:"0x100000000000000000", max:"0x1fffffffffffffffff" },
  { min:"0x200000000000000000", max:"0x3fffffffffffffffff" },
  { min:"0x400000000000000000", max:"0x7fffffffffffffffff" },
  { min:"0x800000000000000000", max:"0xffffffffffffffffff" },
  { min:"0x1000000000000000000", max:"0x1ffffffffffffffffff" },
  { min:"0x2000000000000000000", max:"0x3ffffffffffffffffff" },
  { min:"0x4000000000000000000", max:"0x7ffffffffffffffffff" },
  { min:"0x8000000000000000000", max:"0xfffffffffffffffffff" },
  { min:"0x10000000000000000000", max:"0x1fffffffffffffffffff" },
  { min:"0x20000000000000000000", max:"0x3fffffffffffffffffff" },
  { min:"0x40000000000000000000", max:"0x7fffffffffffffffffff" },
  { min:"0x80000000000000000000", max:"0xffffffffffffffffffff" },
  { min:"0x100000000000000000000", max:"0x1ffffffffffffffffffff" },
  { min:"0x200000000000000000000", max:"0x3ffffffffffffffffffff" },
  { min:"0x400000000000000000000", max:"0x7ffffffffffffffffffff" },
  { min:"0x800000000000000000000", max:"0xfffffffffffffffffffff" },
  { min:"0x1000000000000000000000", max:"0x1fffffffffffffffffffff" },
  { min:"0x2000000000000000000000", max:"0x3fffffffffffffffffffff" },
  { min:"0x4000000000000000000000", max:"0x7fffffffffffffffffffff" },
  { min:"0x8000000000000000000000", max:"0xffffffffffffffffffffff" },
  { min:"0x10000000000000000000000", max:"0x1ffffffffffffffffffffff" },
  { min:"0x20000000000000000000000", max:"0x3ffffffffffffffffffffff" },
  { min:"0x40000000000000000000000", max:"0x7ffffffffffffffffffffff" },
  { min:"0x80000000000000000000000", max:"0xfffffffffffffffffffffff" },
  { min:"0x100000000000000000000000", max:"0x1fffffffffffffffffffffff" },
  { min:"0x200000000000000000000000", max:"0x3fffffffffffffffffffffff" },
  { min:"0x400000000000000000000000", max:"0x7fffffffffffffffffffffff" },
  { min:"0x800000000000000000000000", max:"0xffffffffffffffffffffffff" },
  { min:"0x1000000000000000000000000", max:"0x1ffffffffffffffffffffffff" },
  { min:"0x2000000000000000000000000", max:"0x3ffffffffffffffffffffffff" },
  { min:"0x4000000000000000000000000", max:"0x7ffffffffffffffffffffffff" },
  { min:"0x8000000000000000000000000", max:"0xfffffffffffffffffffffffff" },
  { min:"0x10000000000000000000000000", max:"0x1fffffffffffffffffffffffff" },
  { min:"0x20000000000000000000000000", max:"0x3fffffffffffffffffffffffff" },
  { min:"0x40000000000000000000000000", max:"0x7fffffffffffffffffffffffff" },
  { min:"0x80000000000000000000000000", max:"0xffffffffffffffffffffffffff" },
  { min:"0x100000000000000000000000000", max:"0x1ffffffffffffffffffffffffff" },
  { min:"0x200000000000000000000000000", max:"0x3ffffffffffffffffffffffffff" },
  { min:"400000000000000000000000000", max:"0x7ffffffffffffffffffffffffff" },
  { min:"0x800000000000000000000000000", max:"0xfffffffffffffffffffffffffff" },
  { min:"0x1000000000000000000000000000", max:"0x1fffffffffffffffffffffffffff" },
  { min:"0x2000000000000000000000000000", max:"0x3fffffffffffffffffffffffffff" },
  { min:"0x4000000000000000000000000000", max:"0x7fffffffffffffffffffffffffff" },
  { min:"0x8000000000000000000000000000", max:"0xffffffffffffffffffffffffffff" },
  { min:"0x10000000000000000000000000000", max:"0x1ffffffffffffffffffffffffffff" },
  { min:"0x20000000000000000000000000000", max:"0x3ffffffffffffffffffffffffffff" },
  { min:"0x40000000000000000000000000000", max:"0x7ffffffffffffffffffffffffffff" },
  { min:"0x80000000000000000000000000000", max:"0xfffffffffffffffffffffffffffff" },
  { min:"0x100000000000000000000000000000", max:"0x1fffffffffffffffffffffffffffff" },
  { min:"0x200000000000000000000000000000", max:"0x3fffffffffffffffffffffffffffff" },
  { min:"0x400000000000000000000000000000", max:"0x7fffffffffffffffffffffffffffff" },
  { min:"0x800000000000000000000000000000", max:"0xffffffffffffffffffffffffffffff" },
  { min:"0x1000000000000000000000000000000", max:"0x1ffffffffffffffffffffffffffffff" },
  { min:"0x2000000000000000000000000000000", max:"0x3ffffffffffffffffffffffffffffff" },
  { min:"0x4000000000000000000000000000000", max:"0x7ffffffffffffffffffffffffffffff" },
  { min:"0x8000000000000000000000000000000", max:"0xfffffffffffffffffffffffffffffff" },
  { min:"0x10000000000000000000000000000000", max:"0x1fffffffffffffffffffffffffffffff" },
  { min:"0x20000000000000000000000000000000", max:"0x3fffffffffffffffffffffffffffffff" },
  { min:"0x40000000000000000000000000000000", max:"0x7fffffffffffffffffffffffffffffff" },
  { min:"0x80000000000000000000000000000000", max:"0xffffffffffffffffffffffffffffffff" },
  { min:"0x100000000000000000000000000000000", max:"0x1ffffffffffffffffffffffffffffffff" },
  { min:"0x200000000000000000000000000000000", max:"0x3ffffffffffffffffffffffffffffffff" },
  { min:"0x400000000000000000000000000000000", max:"0x7ffffffffffffffffffffffffffffffff" },
  { min:"0x800000000000000000000000000000000", max:"0xfffffffffffffffffffffffffffffffff" },
  { min:"0x1000000000000000000000000000000000", max:"0x1fffffffffffffffffffffffffffffffff" },
  { min:"0x2000000000000000000000000000000000", max:"0x3fffffffffffffffffffffffffffffffff" },
  { min:"0x4000000000000000000000000000000000", max:"0x7fffffffffffffffffffffffffffffffff" },
  { min:"0x8000000000000000000000000000000000", max:"0xffffffffffffffffffffffffffffffffff" },
  { min:"0x10000000000000000000000000000000000", max:"0x1ffffffffffffffffffffffffffffffffff" },
  { min:"0x20000000000000000000000000000000000", max:"0x3ffffffffffffffffffffffffffffffffff" },
  { min:"0x40000000000000000000000000000000000", max:"0x7ffffffffffffffffffffffffffffffffff" },
  { min:"0x80000000000000000000000000000000000", max:"0xfffffffffffffffffffffffffffffffffff" },
  { min:"0x100000000000000000000000000000000000", max:"0x1fffffffffffffffffffffffffffffffffff" },
  { min:"0x200000000000000000000000000000000000", max:"0x3fffffffffffffffffffffffffffffffffff" },
  { min:"0x400000000000000000000000000000000000", max:"0x7fffffffffffffffffffffffffffffffffff" },
  { min:"0x800000000000000000000000000000000000", max:"0xffffffffffffffffffffffffffffffffffff" },
  { min: "0x1000000000000000000000000000000000000", max: "0x1ffffffffffffffffffffffffffffffffffff" },
  { min: "0x2000000000000000000000000000000000000", max: "0x3ffffffffffffffffffffffffffffffffffff" },
  { min: "0x4000000000000000000000000000000000000", max: "0x7ffffffffffffffffffffffffffffffffffff" },
  { min: "0x8000000000000000000000000000000000000", max: "0xfffffffffffffffffffffffffffffffffffff" },
  { min: "0x10000000000000000000000000000000000000", max: "0x1fffffffffffffffffffffffffffffffffffff" },
  { min: "0x20000000000000000000000000000000000000", max: "0x3fffffffffffffffffffffffffffffffffffff" },
  { min: "0x40000000000000000000000000000000000000", max: "0x7fffffffffffffffffffffffffffffffffffff" },
  { min: "0x80000000000000000000000000000000000000", max: "0xffffffffffffffffffffffffffffffffffffff" },
  { min: "0x100000000000000000000000000000000000000", max: "0x1ffffffffffffffffffffffffffffffffffffff" },
  { min: "0x200000000000000000000000000000000000000", max: "0x3ffffffffffffffffffffffffffffffffffffff" },
  { min: "0x400000000000000000000000000000000000000", max: "0x7ffffffffffffffffffffffffffffffffffffff" },
  { min: "0x800000000000000000000000000000000000000", max: "0xfffffffffffffffffffffffffffffffffffffff" },
  { min: "0x1000000000000000000000000000000000000000", max: "0x1fffffffffffffffffffffffffffffffffffffff" },
  { min: "0x2000000000000000000000000000000000000000", max: "0x3fffffffffffffffffffffffffffffffffffffff" },
  { min: "0x4000000000000000000000000000000000000000", max: "0x7fffffffffffffffffffffffffffffffffffffff" },
  { min: "0x8000000000000000000000000000000000000000", max: "0xffffffffffffffffffffffffffffffffffffffff" }
];

export default ranges;