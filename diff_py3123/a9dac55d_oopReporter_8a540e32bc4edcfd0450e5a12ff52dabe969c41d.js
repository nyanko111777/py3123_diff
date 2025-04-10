"use strict";

var Er = Object.create;
var ne = Object.defineProperty;
var wr = Object.getOwnPropertyDescriptor;
var br = Object.getOwnPropertyNames;
var Pr = Object.getPrototypeOf,
  Or = Object.prototype.hasOwnProperty;
var S = (r, e) => () => (e || r((e = {
    exports: {}
  }).exports, e), e.exports),
  Cr = (r, e) => {
    for (var t in e) ne(r, t, {
      get: e[t],
      enumerable: !0
    });
  },
  Ye = (r, e, t, s) => {
    if (e && typeof e == "object" || typeof e == "function") for (let i of br(e)) !Or.call(r, i) && i !== t && ne(r, i, {
      get: () => e[i],
      enumerable: !(s = wr(e, i)) || s.enumerable
    });
    return r;
  };
var I = (r, e, t) => (t = r != null ? Er(Pr(r)) : {}, Ye(e || !r || !r.__esModule ? ne(t, "default", {
    value: r,
    enumerable: !0
  }) : t, r)),
  Rr = r => Ye(ne({}, "__esModule", {
    value: !0
  }), r);
var Ze = S(W => {
  "use strict";

  Object.defineProperty(W, "__esModule", {
    value: !0
  });
  W.sync = W.isexe = void 0;
  var kr = require("fs"),
    Lr = require("fs/promises"),
    Ir = async (r, e = {}) => {
      let {
        ignoreErrors: t = !1
      } = e;
      try {
        return Xe(await (0, Lr.stat)(r), e);
      } catch (s) {
        let i = s;
        if (t || i.code === "EACCES") return !1;
        throw i;
      }
    };
  W.isexe = Ir;
  var Nr = (r, e = {}) => {
    let {
      ignoreErrors: t = !1
    } = e;
    try {
      return Xe((0, kr.statSync)(r), e);
    } catch (s) {
      let i = s;
      if (t || i.code === "EACCES") return !1;
      throw i;
    }
  };
  W.sync = Nr;
  var Xe = (r, e) => r.isFile() && Br(r, e),
    Br = (r, e) => {
      var _, p, f, g, P, L, V, O;
      let t = (p = e.uid) != null ? p : (_ = process.getuid) == null ? void 0 : _.call(process),
        s = (P = (g = e.groups) != null ? g : (f = process.getgroups) == null ? void 0 : f.call(process)) != null ? P : [],
        i = (O = (V = e.gid) != null ? V : (L = process.getgid) == null ? void 0 : L.call(process)) != null ? O : s[0];
      if (t === void 0 || i === void 0) throw new Error("cannot get uid or gid");
      let n = new Set([i, ...s]),
        o = r.mode,
        l = r.uid,
        c = r.gid,
        a = parseInt("100", 8),
        u = parseInt("010", 8),
        h = parseInt("001", 8),
        d = a | u;
      return !!(o & h || o & u && n.has(c) || o & a && l === t || o & d && t === 0);
    };
});
var Qe = S(j => {
  "use strict";

  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j.sync = j.isexe = void 0;
  var Mr = require("fs"),
    Dr = require("fs/promises"),
    Ar = async (r, e = {}) => {
      let {
        ignoreErrors: t = !1
      } = e;
      try {
        return Ke(await (0, Dr.stat)(r), r, e);
      } catch (s) {
        let i = s;
        if (t || i.code === "EACCES") return !1;
        throw i;
      }
    };
  j.isexe = Ar;
  var Fr = (r, e = {}) => {
    let {
      ignoreErrors: t = !1
    } = e;
    try {
      return Ke((0, Mr.statSync)(r), r, e);
    } catch (s) {
      let i = s;
      if (t || i.code === "EACCES") return !1;
      throw i;
    }
  };
  j.sync = Fr;
  var Ur = (r, e) => {
      let {
          pathExt: t = process.env.PATHEXT || ""
        } = e,
        s = t.split(";");
      if (s.indexOf("") !== -1) return !0;
      for (let i = 0; i < s.length; i++) {
        let n = s[i].toLowerCase(),
          o = r.substring(r.length - n.length).toLowerCase();
        if (n && o === n) return !0;
      }
      return !1;
    },
    Ke = (r, e, t) => r.isFile() && Ur(e, t);
});
var tt = S(et => {
  "use strict";

  Object.defineProperty(et, "__esModule", {
    value: !0
  });
});
var at = S(y => {
  "use strict";

  var rt = y && y.__createBinding || (Object.create ? function (r, e, t, s) {
      s === void 0 && (s = t);
      var i = Object.getOwnPropertyDescriptor(e, t);
      (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = {
        enumerable: !0,
        get: function () {
          return e[t];
        }
      }), Object.defineProperty(r, s, i);
    } : function (r, e, t, s) {
      s === void 0 && (s = t), r[s] = e[t];
    }),
    Wr = y && y.__setModuleDefault || (Object.create ? function (r, e) {
      Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      });
    } : function (r, e) {
      r.default = e;
    }),
    st = y && y.__importStar || function (r) {
      if (r && r.__esModule) return r;
      var e = {};
      if (r != null) for (var t in r) t !== "default" && Object.prototype.hasOwnProperty.call(r, t) && rt(e, r, t);
      return Wr(e, r), e;
    },
    jr = y && y.__exportStar || function (r, e) {
      for (var t in r) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && rt(e, r, t);
    };
  Object.defineProperty(y, "__esModule", {
    value: !0
  });
  y.sync = y.isexe = y.posix = y.win32 = void 0;
  var it = st(Ze());
  y.posix = it;
  var nt = st(Qe());
  y.win32 = nt;
  jr(tt(), y);
  var qr = process.env._ISEXE_TEST_PLATFORM_ || process.platform,
    ot = qr === "win32" ? nt : it;
  y.isexe = ot.isexe;
  y.sync = ot.sync;
});
var gt = S((mi, mt) => {
  var {
      isexe: Jr,
      sync: $r
    } = at(),
    {
      join: Gr,
      delimiter: Vr,
      sep: lt,
      posix: ct
    } = require("path"),
    ut = process.platform === "win32",
    ht = new RegExp(`[${ct.sep}${lt === ct.sep ? "" : lt}]`.replace(/(\\)/g, "\\$1")),
    zr = new RegExp(`^\\.${ht.source}`),
    ft = r => Object.assign(new Error(`not found: ${r}`), {
      code: "ENOENT"
    }),
    dt = (r, {
      path: e = process.env.PATH,
      pathExt: t = process.env.PATHEXT,
      delimiter: s = Vr
    }) => {
      let i = r.match(ht) ? [""] : [...(ut ? [process.cwd()] : []), ...(e || "").split(s)];
      if (ut) {
        let n = t || [".EXE", ".CMD", ".BAT", ".COM"].join(s),
          o = n.split(s).flatMap(l => [l, l.toLowerCase()]);
        return r.includes(".") && o[0] !== "" && o.unshift(""), {
          pathEnv: i,
          pathExt: o,
          pathExtExe: n
        };
      }
      return {
        pathEnv: i,
        pathExt: [""]
      };
    },
    pt = (r, e) => {
      let t = /^".*"$/.test(r) ? r.slice(1, -1) : r;
      return (!t && zr.test(e) ? e.slice(0, 2) : "") + Gr(t, e);
    },
    _t = async (r, e = {}) => {
      let {
          pathEnv: t,
          pathExt: s,
          pathExtExe: i
        } = dt(r, e),
        n = [];
      for (let o of t) {
        let l = pt(o, r);
        for (let c of s) {
          let a = l + c;
          if (await Jr(a, {
            pathExt: i,
            ignoreErrors: !0
          })) {
            if (!e.all) return a;
            n.push(a);
          }
        }
      }
      if (e.all && n.length) return n;
      if (e.nothrow) return null;
      throw ft(r);
    },
    Hr = (r, e = {}) => {
      let {
          pathEnv: t,
          pathExt: s,
          pathExtExe: i
        } = dt(r, e),
        n = [];
      for (let o of t) {
        let l = pt(o, r);
        for (let c of s) {
          let a = l + c;
          if ($r(a, {
            pathExt: i,
            ignoreErrors: !0
          })) {
            if (!e.all) return a;
            n.push(a);
          }
        }
      }
      if (e.all && n.length) return n;
      if (e.nothrow) return null;
      throw ft(r);
    };
  mt.exports = _t;
  _t.sync = Hr;
});
var Et = S((bi, Tt) => {
  "use strict";

  var {
    Duplex: Xr
  } = require("stream");
  function xt(r) {
    r.emit("close");
  }
  function Zr() {
    !this.destroyed && this._writableState.finished && this.destroy();
  }
  function vt(r) {
    this.removeListener("error", vt), this.destroy(), this.listenerCount("error") === 0 && this.emit("error", r);
  }
  function Kr(r, e) {
    let t = !0,
      s = new Xr({
        ...e,
        autoDestroy: !1,
        emitClose: !1,
        objectMode: !1,
        writableObjectMode: !1
      });
    return r.on("message", function (n, o) {
      let l = !o && s._readableState.objectMode ? n.toString() : n;
      s.push(l) || r.pause();
    }), r.once("error", function (n) {
      s.destroyed || (t = !1, s.destroy(n));
    }), r.once("close", function () {
      s.destroyed || s.push(null);
    }), s._destroy = function (i, n) {
      if (r.readyState === r.CLOSED) {
        n(i), process.nextTick(xt, s);
        return;
      }
      let o = !1;
      r.once("error", function (c) {
        o = !0, n(c);
      }), r.once("close", function () {
        o || n(i), process.nextTick(xt, s);
      }), t && r.terminate();
    }, s._final = function (i) {
      if (r.readyState === r.CONNECTING) {
        r.once("open", function () {
          s._final(i);
        });
        return;
      }
      r._socket !== null && (r._socket._writableState.finished ? (i(), s._readableState.endEmitted && s.destroy()) : (r._socket.once("finish", function () {
        i();
      }), r.close()));
    }, s._read = function () {
      r.isPaused && r.resume();
    }, s._write = function (i, n, o) {
      if (r.readyState === r.CONNECTING) {
        r.once("open", function () {
          s._write(i, n, o);
        });
        return;
      }
      r.send(i, o);
    }, s.on("end", Zr), s.on("error", vt), s;
  }
  Tt.exports = Kr;
});
var N = S((Pi, wt) => {
  "use strict";

  wt.exports = {
    BINARY_TYPES: ["nodebuffer", "arraybuffer", "fragments"],
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
    kListener: Symbol("kListener"),
    kStatusCode: Symbol("status-code"),
    kWebSocket: Symbol("websocket"),
    NOOP: () => {}
  };
});
var Y = S((Oi, ae) => {
  "use strict";

  var {
      EMPTY_BUFFER: Qr
    } = N(),
    be = Buffer[Symbol.species];
  function es(r, e) {
    if (r.length === 0) return Qr;
    if (r.length === 1) return r[0];
    let t = Buffer.allocUnsafe(e),
      s = 0;
    for (let i = 0; i < r.length; i++) {
      let n = r[i];
      t.set(n, s), s += n.length;
    }
    return s < e ? new be(t.buffer, t.byteOffset, s) : t;
  }
  function bt(r, e, t, s, i) {
    for (let n = 0; n < i; n++) t[s + n] = r[n] ^ e[n & 3];
  }
  function Pt(r, e) {
    for (let t = 0; t < r.length; t++) r[t] ^= e[t & 3];
  }
  function ts(r) {
    return r.length === r.buffer.byteLength ? r.buffer : r.buffer.slice(r.byteOffset, r.byteOffset + r.length);
  }
  function Pe(r) {
    if (Pe.readOnly = !0, Buffer.isBuffer(r)) return r;
    let e;
    return r instanceof ArrayBuffer ? e = new be(r) : ArrayBuffer.isView(r) ? e = new be(r.buffer, r.byteOffset, r.byteLength) : (e = Buffer.from(r), Pe.readOnly = !1), e;
  }
  ae.exports = {
    concat: es,
    mask: bt,
    toArrayBuffer: ts,
    toBuffer: Pe,
    unmask: Pt
  };
  if (!process.env.WS_NO_BUFFER_UTIL) try {
    let r = require("bufferutil");
    ae.exports.mask = function (e, t, s, i, n) {
      n < 48 ? bt(e, t, s, i, n) : r.mask(e, t, s, i, n);
    }, ae.exports.unmask = function (e, t) {
      e.length < 32 ? Pt(e, t) : r.unmask(e, t);
    };
  } catch {}
});
var Rt = S((Ci, Ct) => {
  "use strict";

  var Ot = Symbol("kDone"),
    Oe = Symbol("kRun"),
    Ce = class {
      constructor(e) {
        this[Ot] = () => {
          this.pending--, this[Oe]();
        }, this.concurrency = e || 1 / 0, this.jobs = [], this.pending = 0;
      }
      add(e) {
        this.jobs.push(e), this[Oe]();
      }
      [Oe]() {
        if (this.pending !== this.concurrency && this.jobs.length) {
          let e = this.jobs.shift();
          this.pending++, e(this[Ot]);
        }
      }
    };
  Ct.exports = Ce;
});
var K = S((Ri, Nt) => {
  "use strict";

  var X = require("zlib"),
    kt = Y(),
    rs = Rt(),
    {
      kStatusCode: Lt
    } = N(),
    ss = Buffer[Symbol.species],
    is = Buffer.from([0, 0, 255, 255]),
    ue = Symbol("permessage-deflate"),
    C = Symbol("total-length"),
    Z = Symbol("callback"),
    B = Symbol("buffers"),
    ce = Symbol("error"),
    le,
    Re = class {
      constructor(e, t, s) {
        if (this._maxPayload = s | 0, this._options = e || {}, this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024, this._isServer = !!t, this._deflate = null, this._inflate = null, this.params = null, !le) {
          let i = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          le = new rs(i);
        }
      }
      static get extensionName() {
        return "permessage-deflate";
      }
      offer() {
        let e = {};
        return this._options.serverNoContextTakeover && (e.server_no_context_takeover = !0), this._options.clientNoContextTakeover && (e.client_no_context_takeover = !0), this._options.serverMaxWindowBits && (e.server_max_window_bits = this._options.serverMaxWindowBits), this._options.clientMaxWindowBits ? e.client_max_window_bits = this._options.clientMaxWindowBits : this._options.clientMaxWindowBits == null && (e.client_max_window_bits = !0), e;
      }
      accept(e) {
        return e = this.normalizeParams(e), this.params = this._isServer ? this.acceptAsServer(e) : this.acceptAsClient(e), this.params;
      }
      cleanup() {
        if (this._inflate && (this._inflate.close(), this._inflate = null), this._deflate) {
          let e = this._deflate[Z];
          this._deflate.close(), this._deflate = null, e && e(new Error("The deflate stream was closed while data was being processed"));
        }
      }
      acceptAsServer(e) {
        let t = this._options,
          s = e.find(i => !(t.serverNoContextTakeover === !1 && i.server_no_context_takeover || i.server_max_window_bits && (t.serverMaxWindowBits === !1 || typeof t.serverMaxWindowBits == "number" && t.serverMaxWindowBits > i.server_max_window_bits) || typeof t.clientMaxWindowBits == "number" && !i.client_max_window_bits));
        if (!s) throw new Error("None of the extension offers can be accepted");
        return t.serverNoContextTakeover && (s.server_no_context_takeover = !0), t.clientNoContextTakeover && (s.client_no_context_takeover = !0), typeof t.serverMaxWindowBits == "number" && (s.server_max_window_bits = t.serverMaxWindowBits), typeof t.clientMaxWindowBits == "number" ? s.client_max_window_bits = t.clientMaxWindowBits : (s.client_max_window_bits === !0 || t.clientMaxWindowBits === !1) && delete s.client_max_window_bits, s;
      }
      acceptAsClient(e) {
        let t = e[0];
        if (this._options.clientNoContextTakeover === !1 && t.client_no_context_takeover) throw new Error('Unexpected parameter "client_no_context_takeover"');
        if (!t.client_max_window_bits) typeof this._options.clientMaxWindowBits == "number" && (t.client_max_window_bits = this._options.clientMaxWindowBits);else if (this._options.clientMaxWindowBits === !1 || typeof this._options.clientMaxWindowBits == "number" && t.client_max_window_bits > this._options.clientMaxWindowBits) throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
        return t;
      }
      normalizeParams(e) {
        return e.forEach(t => {
          Object.keys(t).forEach(s => {
            let i = t[s];
            if (i.length > 1) throw new Error(`Parameter "${s}" must have only a single value`);
            if (i = i[0], s === "client_max_window_bits") {
              if (i !== !0) {
                let n = +i;
                if (!Number.isInteger(n) || n < 8 || n > 15) throw new TypeError(`Invalid value for parameter "${s}": ${i}`);
                i = n;
              } else if (!this._isServer) throw new TypeError(`Invalid value for parameter "${s}": ${i}`);
            } else if (s === "server_max_window_bits") {
              let n = +i;
              if (!Number.isInteger(n) || n < 8 || n > 15) throw new TypeError(`Invalid value for parameter "${s}": ${i}`);
              i = n;
            } else if (s === "client_no_context_takeover" || s === "server_no_context_takeover") {
              if (i !== !0) throw new TypeError(`Invalid value for parameter "${s}": ${i}`);
            } else throw new Error(`Unknown parameter "${s}"`);
            t[s] = i;
          });
        }), e;
      }
      decompress(e, t, s) {
        le.add(i => {
          this._decompress(e, t, (n, o) => {
            i(), s(n, o);
          });
        });
      }
      compress(e, t, s) {
        le.add(i => {
          this._compress(e, t, (n, o) => {
            i(), s(n, o);
          });
        });
      }
      _decompress(e, t, s) {
        let i = this._isServer ? "client" : "server";
        if (!this._inflate) {
          let n = `${i}_max_window_bits`,
            o = typeof this.params[n] != "number" ? X.Z_DEFAULT_WINDOWBITS : this.params[n];
          this._inflate = X.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits: o
          }), this._inflate[ue] = this, this._inflate[C] = 0, this._inflate[B] = [], this._inflate.on("error", os), this._inflate.on("data", It);
        }
        this._inflate[Z] = s, this._inflate.write(e), t && this._inflate.write(is), this._inflate.flush(() => {
          let n = this._inflate[ce];
          if (n) {
            this._inflate.close(), this._inflate = null, s(n);
            return;
          }
          let o = kt.concat(this._inflate[B], this._inflate[C]);
          this._inflate._readableState.endEmitted ? (this._inflate.close(), this._inflate = null) : (this._inflate[C] = 0, this._inflate[B] = [], t && this.params[`${i}_no_context_takeover`] && this._inflate.reset()), s(null, o);
        });
      }
      _compress(e, t, s) {
        let i = this._isServer ? "server" : "client";
        if (!this._deflate) {
          let n = `${i}_max_window_bits`,
            o = typeof this.params[n] != "number" ? X.Z_DEFAULT_WINDOWBITS : this.params[n];
          this._deflate = X.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits: o
          }), this._deflate[C] = 0, this._deflate[B] = [], this._deflate.on("data", ns);
        }
        this._deflate[Z] = s, this._deflate.write(e), this._deflate.flush(X.Z_SYNC_FLUSH, () => {
          if (!this._deflate) return;
          let n = kt.concat(this._deflate[B], this._deflate[C]);
          t && (n = new ss(n.buffer, n.byteOffset, n.length - 4)), this._deflate[Z] = null, this._deflate[C] = 0, this._deflate[B] = [], t && this.params[`${i}_no_context_takeover`] && this._deflate.reset(), s(null, n);
        });
      }
    };
  Nt.exports = Re;
  function ns(r) {
    this[B].push(r), this[C] += r.length;
  }
  function It(r) {
    if (this[C] += r.length, this[ue]._maxPayload < 1 || this[C] <= this[ue]._maxPayload) {
      this[B].push(r);
      return;
    }
    this[ce] = new RangeError("Max payload size exceeded"), this[ce].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[ce][Lt] = 1009, this.removeListener("data", It), this.reset();
  }
  function os(r) {
    this[ue]._inflate = null, r[Lt] = 1007, this[Z](r);
  }
});
var Q = S((ki, he) => {
  "use strict";

  var {
      isUtf8: Bt
    } = require("buffer"),
    as = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0];
  function ls(r) {
    return r >= 1e3 && r <= 1014 && r !== 1004 && r !== 1005 && r !== 1006 || r >= 3e3 && r <= 4999;
  }
  function ke(r) {
    let e = r.length,
      t = 0;
    for (; t < e;) if (!(r[t] & 128)) t++;else if ((r[t] & 224) === 192) {
      if (t + 1 === e || (r[t + 1] & 192) !== 128 || (r[t] & 254) === 192) return !1;
      t += 2;
    } else if ((r[t] & 240) === 224) {
      if (t + 2 >= e || (r[t + 1] & 192) !== 128 || (r[t + 2] & 192) !== 128 || r[t] === 224 && (r[t + 1] & 224) === 128 || r[t] === 237 && (r[t + 1] & 224) === 160) return !1;
      t += 3;
    } else if ((r[t] & 248) === 240) {
      if (t + 3 >= e || (r[t + 1] & 192) !== 128 || (r[t + 2] & 192) !== 128 || (r[t + 3] & 192) !== 128 || r[t] === 240 && (r[t + 1] & 240) === 128 || r[t] === 244 && r[t + 1] > 143 || r[t] > 244) return !1;
      t += 4;
    } else return !1;
    return !0;
  }
  he.exports = {
    isValidStatusCode: ls,
    isValidUTF8: ke,
    tokenChars: as
  };
  if (Bt) he.exports.isValidUTF8 = function (r) {
    return r.length < 24 ? ke(r) : Bt(r);
  };else if (!process.env.WS_NO_UTF_8_VALIDATE) try {
    let r = require("utf-8-validate");
    he.exports.isValidUTF8 = function (e) {
      return e.length < 32 ? ke(e) : r(e);
    };
  } catch {}
});
var Me = S((Li, jt) => {
  "use strict";

  var {
      Writable: cs
    } = require("stream"),
    Mt = K(),
    {
      BINARY_TYPES: us,
      EMPTY_BUFFER: Dt,
      kStatusCode: hs,
      kWebSocket: fs
    } = N(),
    {
      concat: Le,
      toArrayBuffer: ds,
      unmask: ps
    } = Y(),
    {
      isValidStatusCode: _s,
      isValidUTF8: At
    } = Q(),
    fe = Buffer[Symbol.species],
    T = 0,
    Ft = 1,
    Ut = 2,
    Wt = 3,
    Ie = 4,
    Ne = 5,
    de = 6,
    Be = class extends cs {
      constructor(e = {}) {
        super(), this._allowSynchronousEvents = e.allowSynchronousEvents !== void 0 ? e.allowSynchronousEvents : !0, this._binaryType = e.binaryType || us[0], this._extensions = e.extensions || {}, this._isServer = !!e.isServer, this._maxPayload = e.maxPayload | 0, this._skipUTF8Validation = !!e.skipUTF8Validation, this[fs] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = !1, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = !1, this._fin = !1, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._fragments = [], this._errored = !1, this._loop = !1, this._state = T;
      }
      _write(e, t, s) {
        if (this._opcode === 8 && this._state == T) return s();
        this._bufferedBytes += e.length, this._buffers.push(e), this.startLoop(s);
      }
      consume(e) {
        if (this._bufferedBytes -= e, e === this._buffers[0].length) return this._buffers.shift();
        if (e < this._buffers[0].length) {
          let s = this._buffers[0];
          return this._buffers[0] = new fe(s.buffer, s.byteOffset + e, s.length - e), new fe(s.buffer, s.byteOffset, e);
        }
        let t = Buffer.allocUnsafe(e);
        do {
          let s = this._buffers[0],
            i = t.length - e;
          e >= s.length ? t.set(this._buffers.shift(), i) : (t.set(new Uint8Array(s.buffer, s.byteOffset, e), i), this._buffers[0] = new fe(s.buffer, s.byteOffset + e, s.length - e)), e -= s.length;
        } while (e > 0);
        return t;
      }
      startLoop(e) {
        this._loop = !0;
        do switch (this._state) {
          case T:
            this.getInfo(e);
            break;
          case Ft:
            this.getPayloadLength16(e);
            break;
          case Ut:
            this.getPayloadLength64(e);
            break;
          case Wt:
            this.getMask();
            break;
          case Ie:
            this.getData(e);
            break;
          case Ne:
          case de:
            this._loop = !1;
            return;
        } while (this._loop);
        this._errored || e();
      }
      getInfo(e) {
        if (this._bufferedBytes < 2) {
          this._loop = !1;
          return;
        }
        let t = this.consume(2);
        if (t[0] & 48) {
          let i = this.createError(RangeError, "RSV2 and RSV3 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
          e(i);
          return;
        }
        let s = (t[0] & 64) === 64;
        if (s && !this._extensions[Mt.extensionName]) {
          let i = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          e(i);
          return;
        }
        if (this._fin = (t[0] & 128) === 128, this._opcode = t[0] & 15, this._payloadLength = t[1] & 127, this._opcode === 0) {
          if (s) {
            let i = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
            e(i);
            return;
          }
          if (!this._fragmented) {
            let i = this.createError(RangeError, "invalid opcode 0", !0, 1002, "WS_ERR_INVALID_OPCODE");
            e(i);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            let i = this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE");
            e(i);
            return;
          }
          this._compressed = s;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            let i = this.createError(RangeError, "FIN must be set", !0, 1002, "WS_ERR_EXPECTED_FIN");
            e(i);
            return;
          }
          if (s) {
            let i = this.createError(RangeError, "RSV1 must be clear", !0, 1002, "WS_ERR_UNEXPECTED_RSV_1");
            e(i);
            return;
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            let i = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, !0, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
            e(i);
            return;
          }
        } else {
          let i = this.createError(RangeError, `invalid opcode ${this._opcode}`, !0, 1002, "WS_ERR_INVALID_OPCODE");
          e(i);
          return;
        }
        if (!this._fin && !this._fragmented && (this._fragmented = this._opcode), this._masked = (t[1] & 128) === 128, this._isServer) {
          if (!this._masked) {
            let i = this.createError(RangeError, "MASK must be set", !0, 1002, "WS_ERR_EXPECTED_MASK");
            e(i);
            return;
          }
        } else if (this._masked) {
          let i = this.createError(RangeError, "MASK must be clear", !0, 1002, "WS_ERR_UNEXPECTED_MASK");
          e(i);
          return;
        }
        this._payloadLength === 126 ? this._state = Ft : this._payloadLength === 127 ? this._state = Ut : this.haveLength(e);
      }
      getPayloadLength16(e) {
        if (this._bufferedBytes < 2) {
          this._loop = !1;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(e);
      }
      getPayloadLength64(e) {
        if (this._bufferedBytes < 8) {
          this._loop = !1;
          return;
        }
        let t = this.consume(8),
          s = t.readUInt32BE(0);
        if (s > Math.pow(2, 21) - 1) {
          let i = this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", !1, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH");
          e(i);
          return;
        }
        this._payloadLength = s * Math.pow(2, 32) + t.readUInt32BE(4), this.haveLength(e);
      }
      haveLength(e) {
        if (this._payloadLength && this._opcode < 8 && (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)) {
          let t = this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
          e(t);
          return;
        }
        this._masked ? this._state = Wt : this._state = Ie;
      }
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = !1;
          return;
        }
        this._mask = this.consume(4), this._state = Ie;
      }
      getData(e) {
        let t = Dt;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = !1;
            return;
          }
          t = this.consume(this._payloadLength), this._masked && this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3] && ps(t, this._mask);
        }
        if (this._opcode > 7) {
          this.controlMessage(t, e);
          return;
        }
        if (this._compressed) {
          this._state = Ne, this.decompress(t, e);
          return;
        }
        t.length && (this._messageLength = this._totalPayloadLength, this._fragments.push(t)), this.dataMessage(e);
      }
      decompress(e, t) {
        this._extensions[Mt.extensionName].decompress(e, this._fin, (i, n) => {
          if (i) return t(i);
          if (n.length) {
            if (this._messageLength += n.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
              let o = this.createError(RangeError, "Max payload size exceeded", !1, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
              t(o);
              return;
            }
            this._fragments.push(n);
          }
          this.dataMessage(t), this._state === T && this.startLoop(t);
        });
      }
      dataMessage(e) {
        if (!this._fin) {
          this._state = T;
          return;
        }
        let t = this._messageLength,
          s = this._fragments;
        if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._fragments = [], this._opcode === 2) {
          let i;
          this._binaryType === "nodebuffer" ? i = Le(s, t) : this._binaryType === "arraybuffer" ? i = ds(Le(s, t)) : i = s, this._allowSynchronousEvents ? (this.emit("message", i, !0), this._state = T) : (this._state = de, setImmediate(() => {
            this.emit("message", i, !0), this._state = T, this.startLoop(e);
          }));
        } else {
          let i = Le(s, t);
          if (!this._skipUTF8Validation && !At(i)) {
            let n = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
            e(n);
            return;
          }
          this._state === Ne || this._allowSynchronousEvents ? (this.emit("message", i, !1), this._state = T) : (this._state = de, setImmediate(() => {
            this.emit("message", i, !1), this._state = T, this.startLoop(e);
          }));
        }
      }
      controlMessage(e, t) {
        if (this._opcode === 8) {
          if (e.length === 0) this._loop = !1, this.emit("conclude", 1005, Dt), this.end();else {
            let s = e.readUInt16BE(0);
            if (!_s(s)) {
              let n = this.createError(RangeError, `invalid status code ${s}`, !0, 1002, "WS_ERR_INVALID_CLOSE_CODE");
              t(n);
              return;
            }
            let i = new fe(e.buffer, e.byteOffset + 2, e.length - 2);
            if (!this._skipUTF8Validation && !At(i)) {
              let n = this.createError(Error, "invalid UTF-8 sequence", !0, 1007, "WS_ERR_INVALID_UTF8");
              t(n);
              return;
            }
            this._loop = !1, this.emit("conclude", s, i), this.end();
          }
          this._state = T;
          return;
        }
        this._allowSynchronousEvents ? (this.emit(this._opcode === 9 ? "ping" : "pong", e), this._state = T) : (this._state = de, setImmediate(() => {
          this.emit(this._opcode === 9 ? "ping" : "pong", e), this._state = T, this.startLoop(t);
        }));
      }
      createError(e, t, s, i, n) {
        this._loop = !1, this._errored = !0;
        let o = new e(s ? `Invalid WebSocket frame: ${t}` : t);
        return Error.captureStackTrace(o, this.createError), o.code = n, o[hs] = i, o;
      }
    };
  jt.exports = Be;
});
var Ae = S((Ni, $t) => {
  "use strict";

  var {
      Duplex: Ii
    } = require("stream"),
    {
      randomFillSync: ms
    } = require("crypto"),
    qt = K(),
    {
      EMPTY_BUFFER: gs
    } = N(),
    {
      isValidStatusCode: ys
    } = Q(),
    {
      mask: Jt,
      toBuffer: q
    } = Y(),
    E = Symbol("kByteLength"),
    Ss = Buffer.alloc(4),
    pe = 8 * 1024,
    D,
    J = pe,
    De = class r {
      constructor(e, t, s) {
        this._extensions = t || {}, s && (this._generateMask = s, this._maskBuffer = Buffer.alloc(4)), this._socket = e, this._firstFragment = !0, this._compress = !1, this._bufferedBytes = 0, this._deflating = !1, this._queue = [];
      }
      static frame(e, t) {
        let s,
          i = !1,
          n = 2,
          o = !1;
        t.mask && (s = t.maskBuffer || Ss, t.generateMask ? t.generateMask(s) : (J === pe && (D === void 0 && (D = Buffer.alloc(pe)), ms(D, 0, pe), J = 0), s[0] = D[J++], s[1] = D[J++], s[2] = D[J++], s[3] = D[J++]), o = (s[0] | s[1] | s[2] | s[3]) === 0, n = 6);
        let l;
        typeof e == "string" ? (!t.mask || o) && t[E] !== void 0 ? l = t[E] : (e = Buffer.from(e), l = e.length) : (l = e.length, i = t.mask && t.readOnly && !o);
        let c = l;
        l >= 65536 ? (n += 8, c = 127) : l > 125 && (n += 2, c = 126);
        let a = Buffer.allocUnsafe(i ? l + n : n);
        return a[0] = t.fin ? t.opcode | 128 : t.opcode, t.rsv1 && (a[0] |= 64), a[1] = c, c === 126 ? a.writeUInt16BE(l, 2) : c === 127 && (a[2] = a[3] = 0, a.writeUIntBE(l, 4, 6)), t.mask ? (a[1] |= 128, a[n - 4] = s[0], a[n - 3] = s[1], a[n - 2] = s[2], a[n - 1] = s[3], o ? [a, e] : i ? (Jt(e, s, a, n, l), [a]) : (Jt(e, s, e, 0, l), [a, e])) : [a, e];
      }
      close(e, t, s, i) {
        let n;
        if (e === void 0) n = gs;else {
          if (typeof e != "number" || !ys(e)) throw new TypeError("First argument must be a valid error code number");
          if (t === void 0 || !t.length) n = Buffer.allocUnsafe(2), n.writeUInt16BE(e, 0);else {
            let l = Buffer.byteLength(t);
            if (l > 123) throw new RangeError("The message must not be greater than 123 bytes");
            n = Buffer.allocUnsafe(2 + l), n.writeUInt16BE(e, 0), typeof t == "string" ? n.write(t, 2) : n.set(t, 2);
          }
        }
        let o = {
          [E]: n.length,
          fin: !0,
          generateMask: this._generateMask,
          mask: s,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: !1,
          rsv1: !1
        };
        this._deflating ? this.enqueue([this.dispatch, n, !1, o, i]) : this.sendFrame(r.frame(n, o), i);
      }
      ping(e, t, s) {
        let i, n;
        if (typeof e == "string" ? (i = Buffer.byteLength(e), n = !1) : (e = q(e), i = e.length, n = q.readOnly), i > 125) throw new RangeError("The data size must not be greater than 125 bytes");
        let o = {
          [E]: i,
          fin: !0,
          generateMask: this._generateMask,
          mask: t,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly: n,
          rsv1: !1
        };
        this._deflating ? this.enqueue([this.dispatch, e, !1, o, s]) : this.sendFrame(r.frame(e, o), s);
      }
      pong(e, t, s) {
        let i, n;
        if (typeof e == "string" ? (i = Buffer.byteLength(e), n = !1) : (e = q(e), i = e.length, n = q.readOnly), i > 125) throw new RangeError("The data size must not be greater than 125 bytes");
        let o = {
          [E]: i,
          fin: !0,
          generateMask: this._generateMask,
          mask: t,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly: n,
          rsv1: !1
        };
        this._deflating ? this.enqueue([this.dispatch, e, !1, o, s]) : this.sendFrame(r.frame(e, o), s);
      }
      send(e, t, s) {
        let i = this._extensions[qt.extensionName],
          n = t.binary ? 2 : 1,
          o = t.compress,
          l,
          c;
        if (typeof e == "string" ? (l = Buffer.byteLength(e), c = !1) : (e = q(e), l = e.length, c = q.readOnly), this._firstFragment ? (this._firstFragment = !1, o && i && i.params[i._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] && (o = l >= i._threshold), this._compress = o) : (o = !1, n = 0), t.fin && (this._firstFragment = !0), i) {
          let a = {
            [E]: l,
            fin: t.fin,
            generateMask: this._generateMask,
            mask: t.mask,
            maskBuffer: this._maskBuffer,
            opcode: n,
            readOnly: c,
            rsv1: o
          };
          this._deflating ? this.enqueue([this.dispatch, e, this._compress, a, s]) : this.dispatch(e, this._compress, a, s);
        } else this.sendFrame(r.frame(e, {
          [E]: l,
          fin: t.fin,
          generateMask: this._generateMask,
          mask: t.mask,
          maskBuffer: this._maskBuffer,
          opcode: n,
          readOnly: c,
          rsv1: !1
        }), s);
      }
      dispatch(e, t, s, i) {
        if (!t) {
          this.sendFrame(r.frame(e, s), i);
          return;
        }
        let n = this._extensions[qt.extensionName];
        this._bufferedBytes += s[E], this._deflating = !0, n.compress(e, s.fin, (o, l) => {
          if (this._socket.destroyed) {
            let c = new Error("The socket was closed while data was being compressed");
            typeof i == "function" && i(c);
            for (let a = 0; a < this._queue.length; a++) {
              let u = this._queue[a],
                h = u[u.length - 1];
              typeof h == "function" && h(c);
            }
            return;
          }
          this._bufferedBytes -= s[E], this._deflating = !1, s.readOnly = !1, this.sendFrame(r.frame(l, s), i), this.dequeue();
        });
      }
      dequeue() {
        for (; !this._deflating && this._queue.length;) {
          let e = this._queue.shift();
          this._bufferedBytes -= e[3][E], Reflect.apply(e[0], this, e.slice(1));
        }
      }
      enqueue(e) {
        this._bufferedBytes += e[3][E], this._queue.push(e);
      }
      sendFrame(e, t) {
        e.length === 2 ? (this._socket.cork(), this._socket.write(e[0]), this._socket.write(e[1], t), this._socket.uncork()) : this._socket.write(e[0], t);
      }
    };
  $t.exports = De;
});
var Qt = S((Bi, Kt) => {
  "use strict";

  var {
      kForOnEventAttribute: ee,
      kListener: Fe
    } = N(),
    Gt = Symbol("kCode"),
    Vt = Symbol("kData"),
    zt = Symbol("kError"),
    Ht = Symbol("kMessage"),
    Yt = Symbol("kReason"),
    $ = Symbol("kTarget"),
    Xt = Symbol("kType"),
    Zt = Symbol("kWasClean"),
    R = class {
      constructor(e) {
        this[$] = null, this[Xt] = e;
      }
      get target() {
        return this[$];
      }
      get type() {
        return this[Xt];
      }
    };
  Object.defineProperty(R.prototype, "target", {
    enumerable: !0
  });
  Object.defineProperty(R.prototype, "type", {
    enumerable: !0
  });
  var A = class extends R {
    constructor(e, t = {}) {
      super(e), this[Gt] = t.code === void 0 ? 0 : t.code, this[Yt] = t.reason === void 0 ? "" : t.reason, this[Zt] = t.wasClean === void 0 ? !1 : t.wasClean;
    }
    get code() {
      return this[Gt];
    }
    get reason() {
      return this[Yt];
    }
    get wasClean() {
      return this[Zt];
    }
  };
  Object.defineProperty(A.prototype, "code", {
    enumerable: !0
  });
  Object.defineProperty(A.prototype, "reason", {
    enumerable: !0
  });
  Object.defineProperty(A.prototype, "wasClean", {
    enumerable: !0
  });
  var G = class extends R {
    constructor(e, t = {}) {
      super(e), this[zt] = t.error === void 0 ? null : t.error, this[Ht] = t.message === void 0 ? "" : t.message;
    }
    get error() {
      return this[zt];
    }
    get message() {
      return this[Ht];
    }
  };
  Object.defineProperty(G.prototype, "error", {
    enumerable: !0
  });
  Object.defineProperty(G.prototype, "message", {
    enumerable: !0
  });
  var te = class extends R {
    constructor(e, t = {}) {
      super(e), this[Vt] = t.data === void 0 ? null : t.data;
    }
    get data() {
      return this[Vt];
    }
  };
  Object.defineProperty(te.prototype, "data", {
    enumerable: !0
  });
  var xs = {
    addEventListener(r, e, t = {}) {
      for (let i of this.listeners(r)) if (!t[ee] && i[Fe] === e && !i[ee]) return;
      let s;
      if (r === "message") s = function (n, o) {
        let l = new te("message", {
          data: o ? n : n.toString()
        });
        l[$] = this, _e(e, this, l);
      };else if (r === "close") s = function (n, o) {
        let l = new A("close", {
          code: n,
          reason: o.toString(),
          wasClean: this._closeFrameReceived && this._closeFrameSent
        });
        l[$] = this, _e(e, this, l);
      };else if (r === "error") s = function (n) {
        let o = new G("error", {
          error: n,
          message: n.message
        });
        o[$] = this, _e(e, this, o);
      };else if (r === "open") s = function () {
        let n = new R("open");
        n[$] = this, _e(e, this, n);
      };else return;
      s[ee] = !!t[ee], s[Fe] = e, t.once ? this.once(r, s) : this.on(r, s);
    },
    removeEventListener(r, e) {
      for (let t of this.listeners(r)) if (t[Fe] === e && !t[ee]) {
        this.removeListener(r, t);
        break;
      }
    }
  };
  Kt.exports = {
    CloseEvent: A,
    ErrorEvent: G,
    Event: R,
    EventTarget: xs,
    MessageEvent: te
  };
  function _e(r, e, t) {
    typeof r == "object" && r.handleEvent ? r.handleEvent.call(r, t) : r.call(e, t);
  }
});
var Ue = S((Mi, er) => {
  "use strict";

  var {
    tokenChars: re
  } = Q();
  function b(r, e, t) {
    r[e] === void 0 ? r[e] = [t] : r[e].push(t);
  }
  function vs(r) {
    let e = Object.create(null),
      t = Object.create(null),
      s = !1,
      i = !1,
      n = !1,
      o,
      l,
      c = -1,
      a = -1,
      u = -1,
      h = 0;
    for (; h < r.length; h++) if (a = r.charCodeAt(h), o === void 0) {
      if (u === -1 && re[a] === 1) c === -1 && (c = h);else if (h !== 0 && (a === 32 || a === 9)) u === -1 && c !== -1 && (u = h);else if (a === 59 || a === 44) {
        if (c === -1) throw new SyntaxError(`Unexpected character at index ${h}`);
        u === -1 && (u = h);
        let _ = r.slice(c, u);
        a === 44 ? (b(e, _, t), t = Object.create(null)) : o = _, c = u = -1;
      } else throw new SyntaxError(`Unexpected character at index ${h}`);
    } else if (l === void 0) {
      if (u === -1 && re[a] === 1) c === -1 && (c = h);else if (a === 32 || a === 9) u === -1 && c !== -1 && (u = h);else if (a === 59 || a === 44) {
        if (c === -1) throw new SyntaxError(`Unexpected character at index ${h}`);
        u === -1 && (u = h), b(t, r.slice(c, u), !0), a === 44 && (b(e, o, t), t = Object.create(null), o = void 0), c = u = -1;
      } else if (a === 61 && c !== -1 && u === -1) l = r.slice(c, h), c = u = -1;else throw new SyntaxError(`Unexpected character at index ${h}`);
    } else if (i) {
      if (re[a] !== 1) throw new SyntaxError(`Unexpected character at index ${h}`);
      c === -1 ? c = h : s || (s = !0), i = !1;
    } else if (n) {
      if (re[a] === 1) c === -1 && (c = h);else if (a === 34 && c !== -1) n = !1, u = h;else if (a === 92) i = !0;else throw new SyntaxError(`Unexpected character at index ${h}`);
    } else if (a === 34 && r.charCodeAt(h - 1) === 61) n = !0;else if (u === -1 && re[a] === 1) c === -1 && (c = h);else if (c !== -1 && (a === 32 || a === 9)) u === -1 && (u = h);else if (a === 59 || a === 44) {
      if (c === -1) throw new SyntaxError(`Unexpected character at index ${h}`);
      u === -1 && (u = h);
      let _ = r.slice(c, u);
      s && (_ = _.replace(/\\/g, ""), s = !1), b(t, l, _), a === 44 && (b(e, o, t), t = Object.create(null), o = void 0), l = void 0, c = u = -1;
    } else throw new SyntaxError(`Unexpected character at index ${h}`);
    if (c === -1 || n || a === 32 || a === 9) throw new SyntaxError("Unexpected end of input");
    u === -1 && (u = h);
    let d = r.slice(c, u);
    return o === void 0 ? b(e, d, t) : (l === void 0 ? b(t, d, !0) : s ? b(t, l, d.replace(/\\/g, "")) : b(t, l, d), b(e, o, t)), e;
  }
  function Ts(r) {
    return Object.keys(r).map(e => {
      let t = r[e];
      return Array.isArray(t) || (t = [t]), t.map(s => [e].concat(Object.keys(s).map(i => {
        let n = s[i];
        return Array.isArray(n) || (n = [n]), n.map(o => o === !0 ? i : `${i}=${o}`).join("; ");
      })).join("; ")).join(", ");
    }).join(", ");
  }
  er.exports = {
    format: Ts,
    parse: vs
  };
});
var $e = S((Fi, hr) => {
  "use strict";

  var Es = require("events"),
    ws = require("https"),
    bs = require("http"),
    sr = require("net"),
    Ps = require("tls"),
    {
      randomBytes: Os,
      createHash: Cs
    } = require("crypto"),
    {
      Duplex: Di,
      Readable: Ai
    } = require("stream"),
    {
      URL: We
    } = require("url"),
    M = K(),
    Rs = Me(),
    ks = Ae(),
    {
      BINARY_TYPES: tr,
      EMPTY_BUFFER: me,
      GUID: Ls,
      kForOnEventAttribute: je,
      kListener: Is,
      kStatusCode: Ns,
      kWebSocket: x,
      NOOP: ir
    } = N(),
    {
      EventTarget: {
        addEventListener: Bs,
        removeEventListener: Ms
      }
    } = Qt(),
    {
      format: Ds,
      parse: As
    } = Ue(),
    {
      toBuffer: Fs
    } = Y(),
    Us = 30 * 1e3,
    nr = Symbol("kAborted"),
    qe = [8, 13],
    k = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],
    Ws = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/,
    m = class r extends Es {
      constructor(e, t, s) {
        super(), this._binaryType = tr[0], this._closeCode = 1006, this._closeFrameReceived = !1, this._closeFrameSent = !1, this._closeMessage = me, this._closeTimer = null, this._extensions = {}, this._paused = !1, this._protocol = "", this._readyState = r.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, e !== null ? (this._bufferedAmount = 0, this._isServer = !1, this._redirects = 0, t === void 0 ? t = [] : Array.isArray(t) || (typeof t == "object" && t !== null ? (s = t, t = []) : t = [t]), or(this, e, t, s)) : (this._autoPong = s.autoPong, this._isServer = !0);
      }
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(e) {
        tr.includes(e) && (this._binaryType = e, this._receiver && (this._receiver._binaryType = e));
      }
      get bufferedAmount() {
        return this._socket ? this._socket._writableState.length + this._sender._bufferedBytes : this._bufferedAmount;
      }
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      get isPaused() {
        return this._paused;
      }
      get onclose() {
        return null;
      }
      get onerror() {
        return null;
      }
      get onopen() {
        return null;
      }
      get onmessage() {
        return null;
      }
      get protocol() {
        return this._protocol;
      }
      get readyState() {
        return this._readyState;
      }
      get url() {
        return this._url;
      }
      setSocket(e, t, s) {
        let i = new Rs({
          allowSynchronousEvents: s.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: s.maxPayload,
          skipUTF8Validation: s.skipUTF8Validation
        });
        this._sender = new ks(e, this._extensions, s.generateMask), this._receiver = i, this._socket = e, i[x] = this, e[x] = this, i.on("conclude", Js), i.on("drain", $s), i.on("error", Gs), i.on("message", Vs), i.on("ping", zs), i.on("pong", Hs), e.setTimeout && e.setTimeout(0), e.setNoDelay && e.setNoDelay(), t.length > 0 && e.unshift(t), e.on("close", lr), e.on("data", ye), e.on("end", cr), e.on("error", ur), this._readyState = r.OPEN, this.emit("open");
      }
      emitClose() {
        if (!this._socket) {
          this._readyState = r.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        this._extensions[M.extensionName] && this._extensions[M.extensionName].cleanup(), this._receiver.removeAllListeners(), this._readyState = r.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
      }
      close(e, t) {
        if (this.readyState !== r.CLOSED) {
          if (this.readyState === r.CONNECTING) {
            v(this, this._req, "WebSocket was closed before the connection was established");
            return;
          }
          if (this.readyState === r.CLOSING) {
            this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end();
            return;
          }
          this._readyState = r.CLOSING, this._sender.close(e, t, !this._isServer, s => {
            s || (this._closeFrameSent = !0, (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end());
          }), this._closeTimer = setTimeout(this._socket.destroy.bind(this._socket), Us);
        }
      }
      pause() {
        this.readyState === r.CONNECTING || this.readyState === r.CLOSED || (this._paused = !0, this._socket.pause());
      }
      ping(e, t, s) {
        if (this.readyState === r.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if (typeof e == "function" ? (s = e, e = t = void 0) : typeof t == "function" && (s = t, t = void 0), typeof e == "number" && (e = e.toString()), this.readyState !== r.OPEN) {
          Je(this, e, s);
          return;
        }
        t === void 0 && (t = !this._isServer), this._sender.ping(e || me, t, s);
      }
      pong(e, t, s) {
        if (this.readyState === r.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if (typeof e == "function" ? (s = e, e = t = void 0) : typeof t == "function" && (s = t, t = void 0), typeof e == "number" && (e = e.toString()), this.readyState !== r.OPEN) {
          Je(this, e, s);
          return;
        }
        t === void 0 && (t = !this._isServer), this._sender.pong(e || me, t, s);
      }
      resume() {
        this.readyState === r.CONNECTING || this.readyState === r.CLOSED || (this._paused = !1, this._receiver._writableState.needDrain || this._socket.resume());
      }
      send(e, t, s) {
        if (this.readyState === r.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if (typeof t == "function" && (s = t, t = {}), typeof e == "number" && (e = e.toString()), this.readyState !== r.OPEN) {
          Je(this, e, s);
          return;
        }
        let i = {
          binary: typeof e != "string",
          mask: !this._isServer,
          compress: !0,
          fin: !0,
          ...t
        };
        this._extensions[M.extensionName] || (i.compress = !1), this._sender.send(e || me, i, s);
      }
      terminate() {
        if (this.readyState !== r.CLOSED) {
          if (this.readyState === r.CONNECTING) {
            v(this, this._req, "WebSocket was closed before the connection was established");
            return;
          }
          this._socket && (this._readyState = r.CLOSING, this._socket.destroy());
        }
      }
    };
  Object.defineProperty(m, "CONNECTING", {
    enumerable: !0,
    value: k.indexOf("CONNECTING")
  });
  Object.defineProperty(m.prototype, "CONNECTING", {
    enumerable: !0,
    value: k.indexOf("CONNECTING")
  });
  Object.defineProperty(m, "OPEN", {
    enumerable: !0,
    value: k.indexOf("OPEN")
  });
  Object.defineProperty(m.prototype, "OPEN", {
    enumerable: !0,
    value: k.indexOf("OPEN")
  });
  Object.defineProperty(m, "CLOSING", {
    enumerable: !0,
    value: k.indexOf("CLOSING")
  });
  Object.defineProperty(m.prototype, "CLOSING", {
    enumerable: !0,
    value: k.indexOf("CLOSING")
  });
  Object.defineProperty(m, "CLOSED", {
    enumerable: !0,
    value: k.indexOf("CLOSED")
  });
  Object.defineProperty(m.prototype, "CLOSED", {
    enumerable: !0,
    value: k.indexOf("CLOSED")
  });
  ["binaryType", "bufferedAmount", "extensions", "isPaused", "protocol", "readyState", "url"].forEach(r => {
    Object.defineProperty(m.prototype, r, {
      enumerable: !0
    });
  });
  ["open", "error", "close", "message"].forEach(r => {
    Object.defineProperty(m.prototype, `on${r}`, {
      enumerable: !0,
      get() {
        for (let e of this.listeners(r)) if (e[je]) return e[Is];
        return null;
      },
      set(e) {
        for (let t of this.listeners(r)) if (t[je]) {
          this.removeListener(r, t);
          break;
        }
        typeof e == "function" && this.addEventListener(r, e, {
          [je]: !0
        });
      }
    });
  });
  m.prototype.addEventListener = Bs;
  m.prototype.removeEventListener = Ms;
  hr.exports = m;
  function or(r, e, t, s) {
    let i = {
      allowSynchronousEvents: !0,
      autoPong: !0,
      protocolVersion: qe[1],
      maxPayload: 104857600,
      skipUTF8Validation: !1,
      perMessageDeflate: !0,
      followRedirects: !1,
      maxRedirects: 10,
      ...s,
      socketPath: void 0,
      hostname: void 0,
      protocol: void 0,
      timeout: void 0,
      method: "GET",
      host: void 0,
      path: void 0,
      port: void 0
    };
    if (r._autoPong = i.autoPong, !qe.includes(i.protocolVersion)) throw new RangeError(`Unsupported protocol version: ${i.protocolVersion} (supported versions: ${qe.join(", ")})`);
    let n;
    if (e instanceof We) n = e;else try {
      n = new We(e);
    } catch {
      throw new SyntaxError(`Invalid URL: ${e}`);
    }
    n.protocol === "http:" ? n.protocol = "ws:" : n.protocol === "https:" && (n.protocol = "wss:"), r._url = n.href;
    let o = n.protocol === "wss:",
      l = n.protocol === "ws+unix:",
      c;
    if (n.protocol !== "ws:" && !o && !l ? c = `The URL's protocol must be one of "ws:", "wss:", "http:", "https", or "ws+unix:"` : l && !n.pathname ? c = "The URL's pathname is empty" : n.hash && (c = "The URL contains a fragment identifier"), c) {
      let f = new SyntaxError(c);
      if (r._redirects === 0) throw f;
      ge(r, f);
      return;
    }
    let a = o ? 443 : 80,
      u = Os(16).toString("base64"),
      h = o ? ws.request : bs.request,
      d = new Set(),
      _;
    if (i.createConnection = i.createConnection || (o ? qs : js), i.defaultPort = i.defaultPort || a, i.port = n.port || a, i.host = n.hostname.startsWith("[") ? n.hostname.slice(1, -1) : n.hostname, i.headers = {
      ...i.headers,
      "Sec-WebSocket-Version": i.protocolVersion,
      "Sec-WebSocket-Key": u,
      Connection: "Upgrade",
      Upgrade: "websocket"
    }, i.path = n.pathname + n.search, i.timeout = i.handshakeTimeout, i.perMessageDeflate && (_ = new M(i.perMessageDeflate !== !0 ? i.perMessageDeflate : {}, !1, i.maxPayload), i.headers["Sec-WebSocket-Extensions"] = Ds({
      [M.extensionName]: _.offer()
    })), t.length) {
      for (let f of t) {
        if (typeof f != "string" || !Ws.test(f) || d.has(f)) throw new SyntaxError("An invalid or duplicated subprotocol was specified");
        d.add(f);
      }
      i.headers["Sec-WebSocket-Protocol"] = t.join(",");
    }
    if (i.origin && (i.protocolVersion < 13 ? i.headers["Sec-WebSocket-Origin"] = i.origin : i.headers.Origin = i.origin), (n.username || n.password) && (i.auth = `${n.username}:${n.password}`), l) {
      let f = i.path.split(":");
      i.socketPath = f[0], i.path = f[1];
    }
    let p;
    if (i.followRedirects) {
      if (r._redirects === 0) {
        r._originalIpc = l, r._originalSecure = o, r._originalHostOrSocketPath = l ? i.socketPath : n.host;
        let f = s && s.headers;
        if (s = {
          ...s,
          headers: {}
        }, f) for (let [g, P] of Object.entries(f)) s.headers[g.toLowerCase()] = P;
      } else if (r.listenerCount("redirect") === 0) {
        let f = l ? r._originalIpc ? i.socketPath === r._originalHostOrSocketPath : !1 : r._originalIpc ? !1 : n.host === r._originalHostOrSocketPath;
        (!f || r._originalSecure && !o) && (delete i.headers.authorization, delete i.headers.cookie, f || delete i.headers.host, i.auth = void 0);
      }
      i.auth && !s.headers.authorization && (s.headers.authorization = "Basic " + Buffer.from(i.auth).toString("base64")), p = r._req = h(i), r._redirects && r.emit("redirect", r.url, p);
    } else p = r._req = h(i);
    i.timeout && p.on("timeout", () => {
      v(r, p, "Opening handshake has timed out");
    }), p.on("error", f => {
      p === null || p[nr] || (p = r._req = null, ge(r, f));
    }), p.on("response", f => {
      let g = f.headers.location,
        P = f.statusCode;
      if (g && i.followRedirects && P >= 300 && P < 400) {
        if (++r._redirects > i.maxRedirects) {
          v(r, p, "Maximum redirects exceeded");
          return;
        }
        p.abort();
        let L;
        try {
          L = new We(g, e);
        } catch {
          let O = new SyntaxError(`Invalid URL: ${g}`);
          ge(r, O);
          return;
        }
        or(r, L, t, s);
      } else r.emit("unexpected-response", p, f) || v(r, p, `Unexpected server response: ${f.statusCode}`);
    }), p.on("upgrade", (f, g, P) => {
      if (r.emit("upgrade", f), r.readyState !== m.CONNECTING) return;
      p = r._req = null;
      let L = f.headers.upgrade;
      if (L === void 0 || L.toLowerCase() !== "websocket") {
        v(r, g, "Invalid Upgrade header");
        return;
      }
      let V = Cs("sha1").update(u + Ls).digest("base64");
      if (f.headers["sec-websocket-accept"] !== V) {
        v(r, g, "Invalid Sec-WebSocket-Accept header");
        return;
      }
      let O = f.headers["sec-websocket-protocol"],
        z;
      if (O !== void 0 ? d.size ? d.has(O) || (z = "Server sent an invalid subprotocol") : z = "Server sent a subprotocol but none was requested" : d.size && (z = "Server sent no subprotocol"), z) {
        v(r, g, z);
        return;
      }
      O && (r._protocol = O);
      let ze = f.headers["sec-websocket-extensions"];
      if (ze !== void 0) {
        if (!_) {
          v(r, g, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
          return;
        }
        let Te;
        try {
          Te = As(ze);
        } catch {
          v(r, g, "Invalid Sec-WebSocket-Extensions header");
          return;
        }
        let He = Object.keys(Te);
        if (He.length !== 1 || He[0] !== M.extensionName) {
          v(r, g, "Server indicated an extension that was not requested");
          return;
        }
        try {
          _.accept(Te[M.extensionName]);
        } catch {
          v(r, g, "Invalid Sec-WebSocket-Extensions header");
          return;
        }
        r._extensions[M.extensionName] = _;
      }
      r.setSocket(g, P, {
        allowSynchronousEvents: i.allowSynchronousEvents,
        generateMask: i.generateMask,
        maxPayload: i.maxPayload,
        skipUTF8Validation: i.skipUTF8Validation
      });
    }), i.finishRequest ? i.finishRequest(p, r) : p.end();
  }
  function ge(r, e) {
    r._readyState = m.CLOSING, r.emit("error", e), r.emitClose();
  }
  function js(r) {
    return r.path = r.socketPath, sr.connect(r);
  }
  function qs(r) {
    return r.path = void 0, !r.servername && r.servername !== "" && (r.servername = sr.isIP(r.host) ? "" : r.host), Ps.connect(r);
  }
  function v(r, e, t) {
    r._readyState = m.CLOSING;
    let s = new Error(t);
    Error.captureStackTrace(s, v), e.setHeader ? (e[nr] = !0, e.abort(), e.socket && !e.socket.destroyed && e.socket.destroy(), process.nextTick(ge, r, s)) : (e.destroy(s), e.once("error", r.emit.bind(r, "error")), e.once("close", r.emitClose.bind(r)));
  }
  function Je(r, e, t) {
    if (e) {
      let s = Fs(e).length;
      r._socket ? r._sender._bufferedBytes += s : r._bufferedAmount += s;
    }
    if (t) {
      let s = new Error(`WebSocket is not open: readyState ${r.readyState} (${k[r.readyState]})`);
      process.nextTick(t, s);
    }
  }
  function Js(r, e) {
    let t = this[x];
    t._closeFrameReceived = !0, t._closeMessage = e, t._closeCode = r, t._socket[x] !== void 0 && (t._socket.removeListener("data", ye), process.nextTick(ar, t._socket), r === 1005 ? t.close() : t.close(r, e));
  }
  function $s() {
    let r = this[x];
    r.isPaused || r._socket.resume();
  }
  function Gs(r) {
    let e = this[x];
    e._socket[x] !== void 0 && (e._socket.removeListener("data", ye), process.nextTick(ar, e._socket), e.close(r[Ns])), e.emit("error", r);
  }
  function rr() {
    this[x].emitClose();
  }
  function Vs(r, e) {
    this[x].emit("message", r, e);
  }
  function zs(r) {
    let e = this[x];
    e._autoPong && e.pong(r, !this._isServer, ir), e.emit("ping", r);
  }
  function Hs(r) {
    this[x].emit("pong", r);
  }
  function ar(r) {
    r.resume();
  }
  function lr() {
    let r = this[x];
    this.removeListener("close", lr), this.removeListener("data", ye), this.removeListener("end", cr), r._readyState = m.CLOSING;
    let e;
    !this._readableState.endEmitted && !r._closeFrameReceived && !r._receiver._writableState.errorEmitted && (e = r._socket.read()) !== null && r._receiver.write(e), r._receiver.end(), this[x] = void 0, clearTimeout(r._closeTimer), r._receiver._writableState.finished || r._receiver._writableState.errorEmitted ? r.emitClose() : (r._receiver.on("error", rr), r._receiver.on("finish", rr));
  }
  function ye(r) {
    this[x]._receiver.write(r) || this.pause();
  }
  function cr() {
    let r = this[x];
    r._readyState = m.CLOSING, r._receiver.end(), this.end();
  }
  function ur() {
    let r = this[x];
    this.removeListener("error", ur), this.on("error", ir), r && (r._readyState = m.CLOSING, this.destroy());
  }
});
var dr = S((Ui, fr) => {
  "use strict";

  var {
    tokenChars: Ys
  } = Q();
  function Xs(r) {
    let e = new Set(),
      t = -1,
      s = -1,
      i = 0;
    for (i; i < r.length; i++) {
      let o = r.charCodeAt(i);
      if (s === -1 && Ys[o] === 1) t === -1 && (t = i);else if (i !== 0 && (o === 32 || o === 9)) s === -1 && t !== -1 && (s = i);else if (o === 44) {
        if (t === -1) throw new SyntaxError(`Unexpected character at index ${i}`);
        s === -1 && (s = i);
        let l = r.slice(t, s);
        if (e.has(l)) throw new SyntaxError(`The "${l}" subprotocol is duplicated`);
        e.add(l), t = s = -1;
      } else throw new SyntaxError(`Unexpected character at index ${i}`);
    }
    if (t === -1 || s !== -1) throw new SyntaxError("Unexpected end of input");
    let n = r.slice(t, i);
    if (e.has(n)) throw new SyntaxError(`The "${n}" subprotocol is duplicated`);
    return e.add(n), e;
  }
  fr.exports = {
    parse: Xs
  };
});
var xr = S((ji, Sr) => {
  "use strict";

  var Zs = require("events"),
    Se = require("http"),
    {
      Duplex: Wi
    } = require("stream"),
    {
      createHash: Ks
    } = require("crypto"),
    pr = Ue(),
    F = K(),
    Qs = dr(),
    ei = $e(),
    {
      GUID: ti,
      kWebSocket: ri
    } = N(),
    si = /^[+/0-9A-Za-z]{22}==$/,
    _r = 0,
    mr = 1,
    yr = 2,
    Ge = class extends Zs {
      constructor(e, t) {
        if (super(), e = {
          allowSynchronousEvents: !0,
          autoPong: !0,
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: !1,
          perMessageDeflate: !1,
          handleProtocols: null,
          clientTracking: !0,
          verifyClient: null,
          noServer: !1,
          backlog: null,
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: ei,
          ...e
        }, e.port == null && !e.server && !e.noServer || e.port != null && (e.server || e.noServer) || e.server && e.noServer) throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
        if (e.port != null ? (this._server = Se.createServer((s, i) => {
          let n = Se.STATUS_CODES[426];
          i.writeHead(426, {
            "Content-Length": n.length,
            "Content-Type": "text/plain"
          }), i.end(n);
        }), this._server.listen(e.port, e.host, e.backlog, t)) : e.server && (this._server = e.server), this._server) {
          let s = this.emit.bind(this, "connection");
          this._removeListeners = ii(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (i, n, o) => {
              this.handleUpgrade(i, n, o, s);
            }
          });
        }
        e.perMessageDeflate === !0 && (e.perMessageDeflate = {}), e.clientTracking && (this.clients = new Set(), this._shouldEmitClose = !1), this.options = e, this._state = _r;
      }
      address() {
        if (this.options.noServer) throw new Error('The server is operating in "noServer" mode');
        return this._server ? this._server.address() : null;
      }
      close(e) {
        if (this._state === yr) {
          e && this.once("close", () => {
            e(new Error("The server is not running"));
          }), process.nextTick(se, this);
          return;
        }
        if (e && this.once("close", e), this._state !== mr) if (this._state = mr, this.options.noServer || this.options.server) this._server && (this._removeListeners(), this._removeListeners = this._server = null), this.clients ? this.clients.size ? this._shouldEmitClose = !0 : process.nextTick(se, this) : process.nextTick(se, this);else {
          let t = this._server;
          this._removeListeners(), this._removeListeners = this._server = null, t.close(() => {
            se(this);
          });
        }
      }
      shouldHandle(e) {
        if (this.options.path) {
          let t = e.url.indexOf("?");
          if ((t !== -1 ? e.url.slice(0, t) : e.url) !== this.options.path) return !1;
        }
        return !0;
      }
      handleUpgrade(e, t, s, i) {
        t.on("error", gr);
        let n = e.headers["sec-websocket-key"],
          o = e.headers.upgrade,
          l = +e.headers["sec-websocket-version"];
        if (e.method !== "GET") {
          U(this, e, t, 405, "Invalid HTTP method");
          return;
        }
        if (o === void 0 || o.toLowerCase() !== "websocket") {
          U(this, e, t, 400, "Invalid Upgrade header");
          return;
        }
        if (n === void 0 || !si.test(n)) {
          U(this, e, t, 400, "Missing or invalid Sec-WebSocket-Key header");
          return;
        }
        if (l !== 8 && l !== 13) {
          U(this, e, t, 400, "Missing or invalid Sec-WebSocket-Version header");
          return;
        }
        if (!this.shouldHandle(e)) {
          ie(t, 400);
          return;
        }
        let c = e.headers["sec-websocket-protocol"],
          a = new Set();
        if (c !== void 0) try {
          a = Qs.parse(c);
        } catch {
          U(this, e, t, 400, "Invalid Sec-WebSocket-Protocol header");
          return;
        }
        let u = e.headers["sec-websocket-extensions"],
          h = {};
        if (this.options.perMessageDeflate && u !== void 0) {
          let d = new F(this.options.perMessageDeflate, !0, this.options.maxPayload);
          try {
            let _ = pr.parse(u);
            _[F.extensionName] && (d.accept(_[F.extensionName]), h[F.extensionName] = d);
          } catch {
            U(this, e, t, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
            return;
          }
        }
        if (this.options.verifyClient) {
          let d = {
            origin: e.headers[`${l === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(e.socket.authorized || e.socket.encrypted),
            req: e
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(d, (_, p, f, g) => {
              if (!_) return ie(t, p || 401, f, g);
              this.completeUpgrade(h, n, a, e, t, s, i);
            });
            return;
          }
          if (!this.options.verifyClient(d)) return ie(t, 401);
        }
        this.completeUpgrade(h, n, a, e, t, s, i);
      }
      completeUpgrade(e, t, s, i, n, o, l) {
        if (!n.readable || !n.writable) return n.destroy();
        if (n[ri]) throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
        if (this._state > _r) return ie(n, 503);
        let a = ["HTTP/1.1 101 Switching Protocols", "Upgrade: websocket", "Connection: Upgrade", `Sec-WebSocket-Accept: ${Ks("sha1").update(t + ti).digest("base64")}`],
          u = new this.options.WebSocket(null, void 0, this.options);
        if (s.size) {
          let h = this.options.handleProtocols ? this.options.handleProtocols(s, i) : s.values().next().value;
          h && (a.push(`Sec-WebSocket-Protocol: ${h}`), u._protocol = h);
        }
        if (e[F.extensionName]) {
          let h = e[F.extensionName].params,
            d = pr.format({
              [F.extensionName]: [h]
            });
          a.push(`Sec-WebSocket-Extensions: ${d}`), u._extensions = e;
        }
        this.emit("headers", a, i), n.write(a.concat(`\r
`).join(`\r
`)), n.removeListener("error", gr), u.setSocket(n, o, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        }), this.clients && (this.clients.add(u), u.on("close", () => {
          this.clients.delete(u), this._shouldEmitClose && !this.clients.size && process.nextTick(se, this);
        })), l(u, i);
      }
    };
  Sr.exports = Ge;
  function ii(r, e) {
    for (let t of Object.keys(e)) r.on(t, e[t]);
    return function () {
      for (let s of Object.keys(e)) r.removeListener(s, e[s]);
    };
  }
  function se(r) {
    r._state = yr, r.emit("close");
  }
  function gr() {
    this.destroy();
  }
  function ie(r, e, t, s) {
    t = t || Se.STATUS_CODES[e], s = {
      Connection: "close",
      "Content-Type": "text/html",
      "Content-Length": Buffer.byteLength(t),
      ...s
    }, r.once("finish", r.destroy), r.end(`HTTP/1.1 ${e} ${Se.STATUS_CODES[e]}\r
` + Object.keys(s).map(i => `${i}: ${s[i]}`).join(`\r
`) + `\r
\r
` + t);
  }
  function U(r, e, t, s, i) {
    if (r.listenerCount("wsClientError")) {
      let n = new Error(i);
      Error.captureStackTrace(n, U), r.emit("wsClientError", n, t, e);
    } else ie(t, s, i);
  }
});
var ui = {};
Cr(ui, {
  default: () => ci
});
module.exports = Rr(ui);
var St = I(require("path"));
var yt = I(require("crypto"));
var Yr = I(gt());
function we() {
  return yt.default.randomBytes(16).toString("hex");
}
var gi = new RegExp("([\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~])))", "g");
var yi = process.platform === "win32" ? ";" : ":";
var xi = {
  forbidOnly: !1,
  fullyParallel: !1,
  globalSetup: null,
  globalTeardown: null,
  globalTimeout: 0,
  grep: /.*/,
  grepInvert: null,
  maxFailures: 0,
  metadata: {},
  preserveOutput: "always",
  projects: [],
  reporter: [[process.env.CI ? "dot" : "list"]],
  reportSlowTests: {
    max: 5,
    threshold: 15e3
  },
  configFile: "",
  rootDir: "",
  quiet: !1,
  shard: null,
  updateSnapshots: "missing",
  version: "",
  workers: 0,
  webServer: null
};
function H(r) {
  return Array.isArray(r) || (r = [r]), r.map(e => typeof e == "string" ? {
    s: e
  } : {
    r: {
      source: e.source,
      flags: e.flags
    }
  });
}
var oe = class {
    constructor(e, t = {}) {
      this._messageSink = e, this._emitterOptions = t;
    }
    version() {
      return "v2";
    }
    onConfigure(e) {
      this._rootDir = e.rootDir, this._messageSink({
        method: "onConfigure",
        params: {
          config: this._serializeConfig(e)
        }
      });
    }
    onBegin(e) {
      let t = e.suites.map(s => this._serializeProject(s));
      for (let s of t) this._messageSink({
        method: "onProject",
        params: {
          project: s
        }
      });
      this._messageSink({
        method: "onBegin",
        params: void 0
      });
    }
    onTestBegin(e, t) {
      t[w] = we(), this._messageSink({
        method: "onTestBegin",
        params: {
          testId: e.id,
          result: this._serializeResultStart(t)
        }
      });
    }
    onTestEnd(e, t) {
      let s = {
        testId: e.id,
        expectedStatus: e.expectedStatus,
        annotations: e.annotations,
        timeout: e.timeout
      };
      this._messageSink({
        method: "onTestEnd",
        params: {
          test: s,
          result: this._serializeResultEnd(t)
        }
      });
    }
    onStepBegin(e, t, s) {
      s[w] = we(), this._messageSink({
        method: "onStepBegin",
        params: {
          testId: e.id,
          resultId: t[w],
          step: this._serializeStepStart(s)
        }
      });
    }
    onStepEnd(e, t, s) {
      this._messageSink({
        method: "onStepEnd",
        params: {
          testId: e.id,
          resultId: t[w],
          step: this._serializeStepEnd(s)
        }
      });
    }
    onError(e) {
      this._messageSink({
        method: "onError",
        params: {
          error: e
        }
      });
    }
    onStdOut(e, t, s) {
      this._onStdIO("stdout", e, t, s);
    }
    onStdErr(e, t, s) {
      this._onStdIO("stderr", e, t, s);
    }
    _onStdIO(e, t, s, i) {
      if (this._emitterOptions.omitOutput) return;
      let n = typeof t != "string",
        o = n ? t.toString("base64") : t;
      this._messageSink({
        method: "onStdIO",
        params: {
          testId: s == null ? void 0 : s.id,
          resultId: i ? i[w] : void 0,
          type: e,
          data: o,
          isBase64: n
        }
      });
    }
    async onEnd(e) {
      let t = {
        status: e.status,
        startTime: e.startTime.getTime(),
        duration: e.duration
      };
      this._messageSink({
        method: "onEnd",
        params: {
          result: t
        }
      });
    }
    async onExit() {}
    printsToStdio() {
      return !1;
    }
    _serializeConfig(e) {
      return {
        configFile: this._relativePath(e.configFile),
        globalTimeout: e.globalTimeout,
        maxFailures: e.maxFailures,
        metadata: e.metadata,
        rootDir: e.rootDir,
        version: e.version,
        workers: e.workers
      };
    }
    _serializeProject(e) {
      let t = e.project();
      return {
        metadata: t.metadata,
        name: t.name,
        outputDir: this._relativePath(t.outputDir),
        repeatEach: t.repeatEach,
        retries: t.retries,
        testDir: this._relativePath(t.testDir),
        testIgnore: H(t.testIgnore),
        testMatch: H(t.testMatch),
        timeout: t.timeout,
        suites: e.suites.map(i => this._serializeSuite(i)),
        grep: H(t.grep),
        grepInvert: H(t.grepInvert || []),
        dependencies: t.dependencies,
        snapshotDir: this._relativePath(t.snapshotDir),
        teardown: t.teardown
      };
    }
    _serializeSuite(e) {
      return {
        title: e.title,
        location: this._relativeLocation(e.location),
        suites: e.suites.map(s => this._serializeSuite(s)),
        tests: e.tests.map(s => this._serializeTest(s))
      };
    }
    _serializeTest(e) {
      return {
        testId: e.id,
        title: e.title,
        location: this._relativeLocation(e.location),
        retries: e.retries,
        tags: e.tags,
        repeatEachIndex: e.repeatEachIndex
      };
    }
    _serializeResultStart(e) {
      return {
        id: e[w],
        retry: e.retry,
        workerIndex: e.workerIndex,
        parallelIndex: e.parallelIndex,
        startTime: +e.startTime
      };
    }
    _serializeResultEnd(e) {
      return {
        id: e[w],
        duration: e.duration,
        status: e.status,
        errors: e.errors,
        attachments: this._serializeAttachments(e.attachments)
      };
    }
    _serializeAttachments(e) {
      return e.map(t => ({
        ...t,
        base64: t.body && !this._emitterOptions.omitBuffers ? t.body.toString("base64") : void 0
      }));
    }
    _serializeStepStart(e) {
      var t;
      return {
        id: e[w],
        parentStepId: (t = e.parent) == null ? void 0 : t[w],
        title: e.title,
        category: e.category,
        startTime: +e.startTime,
        location: this._relativeLocation(e.location)
      };
    }
    _serializeStepEnd(e) {
      return {
        id: e[w],
        duration: e.duration,
        error: e.error
      };
    }
    _relativeLocation(e) {
      return e && {
        ...e,
        file: this._relativePath(e.file)
      };
    }
    _relativePath(e) {
      return e && St.default.relative(this._rootDir, e);
    }
  },
  w = Symbol("id");
var ni = I(Et(), 1),
  oi = I(Me(), 1),
  ai = I(Ae(), 1),
  vr = I($e(), 1),
  li = I(xr(), 1);
var xe = vr.default;
var ve = class r {
  static async connect(e, t = {}) {
    let s = new r(e, t);
    return await new Promise((i, n) => {
      s._ws.addEventListener("open", async () => {
        i(s);
      }), s._ws.addEventListener("error", o => {
        n(new Error("WebSocket error: " + o.message)), s._ws.close();
      });
    }), s;
  }
  constructor(e, t = {}) {
    this.wsEndpoint = e, this._ws = new xe(e, [], {
      perMessageDeflate: !1,
      maxPayload: 256 * 1024 * 1024,
      handshakeTimeout: 3e4,
      headers: t
    }), this._ws.addEventListener("message", s => {
      try {
        this.onmessage && this.onmessage.call(null, JSON.parse(s.data.toString()));
      } catch {
        this._ws.close();
      }
    }), this._ws.addEventListener("close", s => {
      this.onclose && this.onclose.call(null);
    }), this._ws.addEventListener("error", () => {});
  }
  isClosed() {
    return this._ws.readyState === xe.CLOSING || this._ws.readyState === xe.CLOSED;
  }
  send(e) {
    this._ws.send(JSON.stringify(e));
  }
  close() {
    this._ws.close();
  }
  async closeAndWait() {
    let e = new Promise(t => this._ws.once("close", t));
    this.close(), await e;
  }
};
var Ve = class extends oe {
    constructor(e) {
      let t;
      if (e != null && e._send) t = e._send;else if (process.env.PW_TEST_REPORTER_WS_ENDPOINT) {
        let s = ve.connect(process.env.PW_TEST_REPORTER_WS_ENDPOINT);
        s.then(i => {
          i.onmessage = n => {
            n.method === "stop" && process.emit("SIGINT");
          }, i.onclose = () => process.exit(0);
        }), t = i => {
          s.then(n => n.send(i));
        };
      } else t = s => {
        console.log(s);
      };
      super(t, {
        omitBuffers: !0,
        omitOutput: !0
      }), this._hasSender = !!(e != null && e._send);
    }
    async onEnd(e) {
      super.onEnd(e), this._hasSender || (await new Promise(() => {}));
    }
  },
  ci = Ve;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFciIsIk9iamVjdCIsImNyZWF0ZSIsIm5lIiwiZGVmaW5lUHJvcGVydHkiLCJ3ciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImJyIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIlByIiwiZ2V0UHJvdG90eXBlT2YiLCJPciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiUyIsInIiLCJlIiwiZXhwb3J0cyIsIkNyIiwidCIsImdldCIsImVudW1lcmFibGUiLCJZZSIsInMiLCJpIiwiY2FsbCIsIkkiLCJfX2VzTW9kdWxlIiwidmFsdWUiLCJSciIsIlplIiwiVyIsInN5bmMiLCJpc2V4ZSIsImtyIiwicmVxdWlyZSIsIkxyIiwiSXIiLCJpZ25vcmVFcnJvcnMiLCJYZSIsInN0YXQiLCJjb2RlIiwiTnIiLCJzdGF0U3luYyIsImlzRmlsZSIsIkJyIiwiXyIsInAiLCJmIiwiZyIsIlAiLCJMIiwiViIsIk8iLCJ1aWQiLCJwcm9jZXNzIiwiZ2V0dWlkIiwiZ3JvdXBzIiwiZ2V0Z3JvdXBzIiwiZ2lkIiwiZ2V0Z2lkIiwiRXJyb3IiLCJuIiwiU2V0IiwibyIsIm1vZGUiLCJsIiwiYyIsImEiLCJwYXJzZUludCIsInUiLCJoIiwiZCIsImhhcyIsIlFlIiwiaiIsIk1yIiwiRHIiLCJBciIsIktlIiwiRnIiLCJVciIsInBhdGhFeHQiLCJlbnYiLCJQQVRIRVhUIiwic3BsaXQiLCJpbmRleE9mIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJzdWJzdHJpbmciLCJ0dCIsImV0IiwiYXQiLCJ5IiwicnQiLCJfX2NyZWF0ZUJpbmRpbmciLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsIldyIiwiX19zZXRNb2R1bGVEZWZhdWx0IiwiZGVmYXVsdCIsInN0IiwiX19pbXBvcnRTdGFyIiwianIiLCJfX2V4cG9ydFN0YXIiLCJwb3NpeCIsIndpbjMyIiwiaXQiLCJudCIsInFyIiwiX0lTRVhFX1RFU1RfUExBVEZPUk1fIiwicGxhdGZvcm0iLCJvdCIsImd0IiwibWkiLCJtdCIsIkpyIiwiJHIiLCJqb2luIiwiR3IiLCJkZWxpbWl0ZXIiLCJWciIsInNlcCIsImx0IiwiY3QiLCJ1dCIsImh0IiwiUmVnRXhwIiwicmVwbGFjZSIsInpyIiwic291cmNlIiwiZnQiLCJhc3NpZ24iLCJkdCIsInBhdGgiLCJQQVRIIiwibWF0Y2giLCJjd2QiLCJmbGF0TWFwIiwiaW5jbHVkZXMiLCJ1bnNoaWZ0IiwicGF0aEVudiIsInBhdGhFeHRFeGUiLCJwdCIsInRlc3QiLCJzbGljZSIsIl90IiwiYWxsIiwicHVzaCIsIm5vdGhyb3ciLCJIciIsIkV0IiwiYmkiLCJUdCIsIkR1cGxleCIsIlhyIiwieHQiLCJlbWl0IiwiWnIiLCJkZXN0cm95ZWQiLCJfd3JpdGFibGVTdGF0ZSIsImZpbmlzaGVkIiwiZGVzdHJveSIsInZ0IiwicmVtb3ZlTGlzdGVuZXIiLCJsaXN0ZW5lckNvdW50IiwiS3IiLCJhdXRvRGVzdHJveSIsImVtaXRDbG9zZSIsIm9iamVjdE1vZGUiLCJ3cml0YWJsZU9iamVjdE1vZGUiLCJvbiIsIl9yZWFkYWJsZVN0YXRlIiwidG9TdHJpbmciLCJwYXVzZSIsIm9uY2UiLCJfZGVzdHJveSIsInJlYWR5U3RhdGUiLCJDTE9TRUQiLCJuZXh0VGljayIsInRlcm1pbmF0ZSIsIl9maW5hbCIsIkNPTk5FQ1RJTkciLCJfc29ja2V0IiwiZW5kRW1pdHRlZCIsImNsb3NlIiwiX3JlYWQiLCJpc1BhdXNlZCIsInJlc3VtZSIsIl93cml0ZSIsInNlbmQiLCJOIiwiUGkiLCJ3dCIsIkJJTkFSWV9UWVBFUyIsIkVNUFRZX0JVRkZFUiIsIkJ1ZmZlciIsImFsbG9jIiwiR1VJRCIsImtGb3JPbkV2ZW50QXR0cmlidXRlIiwiU3ltYm9sIiwia0xpc3RlbmVyIiwia1N0YXR1c0NvZGUiLCJrV2ViU29ja2V0IiwiTk9PUCIsIlkiLCJPaSIsImFlIiwiUXIiLCJiZSIsInNwZWNpZXMiLCJlcyIsImFsbG9jVW5zYWZlIiwic2V0IiwiYnVmZmVyIiwiYnl0ZU9mZnNldCIsImJ0IiwiUHQiLCJ0cyIsImJ5dGVMZW5ndGgiLCJQZSIsInJlYWRPbmx5IiwiaXNCdWZmZXIiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsImZyb20iLCJjb25jYXQiLCJtYXNrIiwidG9BcnJheUJ1ZmZlciIsInRvQnVmZmVyIiwidW5tYXNrIiwiV1NfTk9fQlVGRkVSX1VUSUwiLCJSdCIsIkNpIiwiQ3QiLCJPdCIsIk9lIiwiQ2UiLCJjb25zdHJ1Y3RvciIsInBlbmRpbmciLCJjb25jdXJyZW5jeSIsImpvYnMiLCJhZGQiLCJzaGlmdCIsIksiLCJSaSIsIk50IiwiWCIsImt0IiwicnMiLCJMdCIsInNzIiwiaXMiLCJ1ZSIsIkMiLCJaIiwiQiIsImNlIiwibGUiLCJSZSIsIl9tYXhQYXlsb2FkIiwiX29wdGlvbnMiLCJfdGhyZXNob2xkIiwidGhyZXNob2xkIiwiX2lzU2VydmVyIiwiX2RlZmxhdGUiLCJfaW5mbGF0ZSIsInBhcmFtcyIsImNvbmN1cnJlbmN5TGltaXQiLCJleHRlbnNpb25OYW1lIiwib2ZmZXIiLCJzZXJ2ZXJOb0NvbnRleHRUYWtlb3ZlciIsInNlcnZlcl9ub19jb250ZXh0X3Rha2VvdmVyIiwiY2xpZW50Tm9Db250ZXh0VGFrZW92ZXIiLCJjbGllbnRfbm9fY29udGV4dF90YWtlb3ZlciIsInNlcnZlck1heFdpbmRvd0JpdHMiLCJzZXJ2ZXJfbWF4X3dpbmRvd19iaXRzIiwiY2xpZW50TWF4V2luZG93Qml0cyIsImNsaWVudF9tYXhfd2luZG93X2JpdHMiLCJhY2NlcHQiLCJub3JtYWxpemVQYXJhbXMiLCJhY2NlcHRBc1NlcnZlciIsImFjY2VwdEFzQ2xpZW50IiwiY2xlYW51cCIsImZpbmQiLCJmb3JFYWNoIiwia2V5cyIsIk51bWJlciIsImlzSW50ZWdlciIsIlR5cGVFcnJvciIsImRlY29tcHJlc3MiLCJfZGVjb21wcmVzcyIsImNvbXByZXNzIiwiX2NvbXByZXNzIiwiWl9ERUZBVUxUX1dJTkRPV0JJVFMiLCJjcmVhdGVJbmZsYXRlUmF3IiwiemxpYkluZmxhdGVPcHRpb25zIiwid2luZG93Qml0cyIsIm9zIiwiSXQiLCJ3cml0ZSIsImZsdXNoIiwicmVzZXQiLCJjcmVhdGVEZWZsYXRlUmF3IiwiemxpYkRlZmxhdGVPcHRpb25zIiwibnMiLCJaX1NZTkNfRkxVU0giLCJSYW5nZUVycm9yIiwiUSIsImtpIiwiaGUiLCJpc1V0ZjgiLCJCdCIsImFzIiwibHMiLCJrZSIsImlzVmFsaWRTdGF0dXNDb2RlIiwiaXNWYWxpZFVURjgiLCJ0b2tlbkNoYXJzIiwiV1NfTk9fVVRGXzhfVkFMSURBVEUiLCJNZSIsIkxpIiwianQiLCJXcml0YWJsZSIsImNzIiwiTXQiLCJ1cyIsIkR0IiwiaHMiLCJmcyIsIkxlIiwiZHMiLCJwcyIsIl9zIiwiQXQiLCJmZSIsIlQiLCJGdCIsIlV0IiwiV3QiLCJJZSIsIk5lIiwiZGUiLCJCZSIsIl9hbGxvd1N5bmNocm9ub3VzRXZlbnRzIiwiYWxsb3dTeW5jaHJvbm91c0V2ZW50cyIsIl9iaW5hcnlUeXBlIiwiYmluYXJ5VHlwZSIsIl9leHRlbnNpb25zIiwiZXh0ZW5zaW9ucyIsImlzU2VydmVyIiwibWF4UGF5bG9hZCIsIl9za2lwVVRGOFZhbGlkYXRpb24iLCJza2lwVVRGOFZhbGlkYXRpb24iLCJfYnVmZmVyZWRCeXRlcyIsIl9idWZmZXJzIiwiX2NvbXByZXNzZWQiLCJfcGF5bG9hZExlbmd0aCIsIl9tYXNrIiwiX2ZyYWdtZW50ZWQiLCJfbWFza2VkIiwiX2ZpbiIsIl9vcGNvZGUiLCJfdG90YWxQYXlsb2FkTGVuZ3RoIiwiX21lc3NhZ2VMZW5ndGgiLCJfZnJhZ21lbnRzIiwiX2Vycm9yZWQiLCJfbG9vcCIsIl9zdGF0ZSIsInN0YXJ0TG9vcCIsImNvbnN1bWUiLCJVaW50OEFycmF5IiwiZ2V0SW5mbyIsImdldFBheWxvYWRMZW5ndGgxNiIsImdldFBheWxvYWRMZW5ndGg2NCIsImdldE1hc2siLCJnZXREYXRhIiwiY3JlYXRlRXJyb3IiLCJoYXZlTGVuZ3RoIiwicmVhZFVJbnQxNkJFIiwicmVhZFVJbnQzMkJFIiwiTWF0aCIsInBvdyIsImNvbnRyb2xNZXNzYWdlIiwiZGF0YU1lc3NhZ2UiLCJzZXRJbW1lZGlhdGUiLCJlbmQiLCJjYXB0dXJlU3RhY2tUcmFjZSIsIkFlIiwiTmkiLCIkdCIsIklpIiwicmFuZG9tRmlsbFN5bmMiLCJtcyIsInF0IiwiZ3MiLCJ5cyIsIkp0IiwicSIsIkUiLCJTcyIsInBlIiwiRCIsIkoiLCJEZSIsIl9nZW5lcmF0ZU1hc2siLCJfbWFza0J1ZmZlciIsIl9maXJzdEZyYWdtZW50IiwiX2RlZmxhdGluZyIsIl9xdWV1ZSIsImZyYW1lIiwibWFza0J1ZmZlciIsImdlbmVyYXRlTWFzayIsImZpbiIsIm9wY29kZSIsInJzdjEiLCJ3cml0ZVVJbnQxNkJFIiwid3JpdGVVSW50QkUiLCJlbnF1ZXVlIiwiZGlzcGF0Y2giLCJzZW5kRnJhbWUiLCJwaW5nIiwicG9uZyIsImJpbmFyeSIsImRlcXVldWUiLCJSZWZsZWN0IiwiYXBwbHkiLCJjb3JrIiwidW5jb3JrIiwiUXQiLCJCaSIsIkt0IiwiZWUiLCJGZSIsIkd0IiwiVnQiLCJ6dCIsIkh0IiwiWXQiLCIkIiwiWHQiLCJadCIsIlIiLCJ0YXJnZXQiLCJ0eXBlIiwiQSIsInJlYXNvbiIsIndhc0NsZWFuIiwiRyIsImVycm9yIiwibWVzc2FnZSIsInRlIiwiZGF0YSIsInhzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVycyIsIl9lIiwiX2Nsb3NlRnJhbWVSZWNlaXZlZCIsIl9jbG9zZUZyYW1lU2VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDbG9zZUV2ZW50IiwiRXJyb3JFdmVudCIsIkV2ZW50IiwiRXZlbnRUYXJnZXQiLCJNZXNzYWdlRXZlbnQiLCJoYW5kbGVFdmVudCIsIlVlIiwiTWkiLCJlciIsInJlIiwiYiIsInZzIiwiY2hhckNvZGVBdCIsIlN5bnRheEVycm9yIiwiVHMiLCJtYXAiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JtYXQiLCJwYXJzZSIsIiRlIiwiRmkiLCJociIsIkVzIiwid3MiLCJicyIsInNyIiwiUHMiLCJyYW5kb21CeXRlcyIsIk9zIiwiY3JlYXRlSGFzaCIsIkNzIiwiRGkiLCJSZWFkYWJsZSIsIkFpIiwiVVJMIiwiV2UiLCJNIiwiUnMiLCJrcyIsInRyIiwibWUiLCJMcyIsImplIiwiSXMiLCJOcyIsIngiLCJpciIsIkJzIiwiTXMiLCJEcyIsIkFzIiwiRnMiLCJVcyIsIm5yIiwicWUiLCJrIiwiV3MiLCJtIiwiX2Nsb3NlQ29kZSIsIl9jbG9zZU1lc3NhZ2UiLCJfY2xvc2VUaW1lciIsIl9wYXVzZWQiLCJfcHJvdG9jb2wiLCJfcmVhZHlTdGF0ZSIsIl9yZWNlaXZlciIsIl9zZW5kZXIiLCJfYnVmZmVyZWRBbW91bnQiLCJfcmVkaXJlY3RzIiwib3IiLCJfYXV0b1BvbmciLCJhdXRvUG9uZyIsImJ1ZmZlcmVkQW1vdW50Iiwib25jbG9zZSIsIm9uZXJyb3IiLCJvbm9wZW4iLCJvbm1lc3NhZ2UiLCJwcm90b2NvbCIsInVybCIsIl91cmwiLCJzZXRTb2NrZXQiLCJKcyIsIiRzIiwiR3MiLCJWcyIsInpzIiwiSHMiLCJzZXRUaW1lb3V0Iiwic2V0Tm9EZWxheSIsImxyIiwieWUiLCJjciIsInVyIiwiT1BFTiIsInJlbW92ZUFsbExpc3RlbmVycyIsInYiLCJfcmVxIiwiQ0xPU0lORyIsImVycm9yRW1pdHRlZCIsImJpbmQiLCJKZSIsIm5lZWREcmFpbiIsInByb3RvY29sVmVyc2lvbiIsInBlck1lc3NhZ2VEZWZsYXRlIiwiZm9sbG93UmVkaXJlY3RzIiwibWF4UmVkaXJlY3RzIiwic29ja2V0UGF0aCIsImhvc3RuYW1lIiwidGltZW91dCIsIm1ldGhvZCIsImhvc3QiLCJwb3J0IiwiaHJlZiIsInBhdGhuYW1lIiwiaGFzaCIsImdlIiwicmVxdWVzdCIsImNyZWF0ZUNvbm5lY3Rpb24iLCJxcyIsImpzIiwiZGVmYXVsdFBvcnQiLCJzdGFydHNXaXRoIiwiaGVhZGVycyIsIkNvbm5lY3Rpb24iLCJVcGdyYWRlIiwic2VhcmNoIiwiaGFuZHNoYWtlVGltZW91dCIsIm9yaWdpbiIsIk9yaWdpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhdXRoIiwiX29yaWdpbmFsSXBjIiwiX29yaWdpbmFsU2VjdXJlIiwiX29yaWdpbmFsSG9zdE9yU29ja2V0UGF0aCIsImVudHJpZXMiLCJhdXRob3JpemF0aW9uIiwiY29va2llIiwibG9jYXRpb24iLCJzdGF0dXNDb2RlIiwiYWJvcnQiLCJ1cGdyYWRlIiwidXBkYXRlIiwiZGlnZXN0IiwieiIsInNpemUiLCJ6ZSIsIlRlIiwiSGUiLCJmaW5pc2hSZXF1ZXN0IiwiY29ubmVjdCIsInNlcnZlcm5hbWUiLCJpc0lQIiwic2V0SGVhZGVyIiwic29ja2V0IiwiYXIiLCJyciIsInJlYWQiLCJjbGVhclRpbWVvdXQiLCJkciIsIlVpIiwiZnIiLCJZcyIsIlhzIiwieHIiLCJqaSIsIlNyIiwiWnMiLCJTZSIsIldpIiwiS3MiLCJwciIsIkYiLCJRcyIsImVpIiwidGkiLCJyaSIsInNpIiwiX3IiLCJtciIsInlyIiwiR2UiLCJoYW5kbGVQcm90b2NvbHMiLCJjbGllbnRUcmFja2luZyIsInZlcmlmeUNsaWVudCIsIm5vU2VydmVyIiwiYmFja2xvZyIsInNlcnZlciIsIldlYlNvY2tldCIsIl9zZXJ2ZXIiLCJjcmVhdGVTZXJ2ZXIiLCJTVEFUVVNfQ09ERVMiLCJ3cml0ZUhlYWQiLCJsaXN0ZW4iLCJfcmVtb3ZlTGlzdGVuZXJzIiwiaWkiLCJsaXN0ZW5pbmciLCJoYW5kbGVVcGdyYWRlIiwiY2xpZW50cyIsIl9zaG91bGRFbWl0Q2xvc2UiLCJvcHRpb25zIiwiYWRkcmVzcyIsInNlIiwic2hvdWxkSGFuZGxlIiwiZ3IiLCJVIiwiaWUiLCJzZWN1cmUiLCJhdXRob3JpemVkIiwiZW5jcnlwdGVkIiwicmVxIiwiY29tcGxldGVVcGdyYWRlIiwicmVhZGFibGUiLCJ2YWx1ZXMiLCJuZXh0IiwiZGVsZXRlIiwidWkiLCJjaSIsIm1vZHVsZSIsIlN0IiwieXQiLCJZciIsIndlIiwiZ2kiLCJ5aSIsInhpIiwiZm9yYmlkT25seSIsImZ1bGx5UGFyYWxsZWwiLCJnbG9iYWxTZXR1cCIsImdsb2JhbFRlYXJkb3duIiwiZ2xvYmFsVGltZW91dCIsImdyZXAiLCJncmVwSW52ZXJ0IiwibWF4RmFpbHVyZXMiLCJtZXRhZGF0YSIsInByZXNlcnZlT3V0cHV0IiwicHJvamVjdHMiLCJyZXBvcnRlciIsIkNJIiwicmVwb3J0U2xvd1Rlc3RzIiwibWF4IiwiY29uZmlnRmlsZSIsInJvb3REaXIiLCJxdWlldCIsInNoYXJkIiwidXBkYXRlU25hcHNob3RzIiwidmVyc2lvbiIsIndvcmtlcnMiLCJ3ZWJTZXJ2ZXIiLCJIIiwiZmxhZ3MiLCJvZSIsIl9tZXNzYWdlU2luayIsIl9lbWl0dGVyT3B0aW9ucyIsIm9uQ29uZmlndXJlIiwiX3Jvb3REaXIiLCJjb25maWciLCJfc2VyaWFsaXplQ29uZmlnIiwib25CZWdpbiIsInN1aXRlcyIsIl9zZXJpYWxpemVQcm9qZWN0IiwicHJvamVjdCIsIm9uVGVzdEJlZ2luIiwidyIsInRlc3RJZCIsImlkIiwicmVzdWx0IiwiX3NlcmlhbGl6ZVJlc3VsdFN0YXJ0Iiwib25UZXN0RW5kIiwiZXhwZWN0ZWRTdGF0dXMiLCJhbm5vdGF0aW9ucyIsIl9zZXJpYWxpemVSZXN1bHRFbmQiLCJvblN0ZXBCZWdpbiIsInJlc3VsdElkIiwic3RlcCIsIl9zZXJpYWxpemVTdGVwU3RhcnQiLCJvblN0ZXBFbmQiLCJfc2VyaWFsaXplU3RlcEVuZCIsIm9uRXJyb3IiLCJvblN0ZE91dCIsIl9vblN0ZElPIiwib25TdGRFcnIiLCJvbWl0T3V0cHV0IiwiaXNCYXNlNjQiLCJvbkVuZCIsInN0YXR1cyIsInN0YXJ0VGltZSIsImdldFRpbWUiLCJkdXJhdGlvbiIsIm9uRXhpdCIsInByaW50c1RvU3RkaW8iLCJfcmVsYXRpdmVQYXRoIiwibmFtZSIsIm91dHB1dERpciIsInJlcGVhdEVhY2giLCJyZXRyaWVzIiwidGVzdERpciIsInRlc3RJZ25vcmUiLCJ0ZXN0TWF0Y2giLCJfc2VyaWFsaXplU3VpdGUiLCJkZXBlbmRlbmNpZXMiLCJzbmFwc2hvdERpciIsInRlYXJkb3duIiwidGl0bGUiLCJfcmVsYXRpdmVMb2NhdGlvbiIsInRlc3RzIiwiX3NlcmlhbGl6ZVRlc3QiLCJ0YWdzIiwicmVwZWF0RWFjaEluZGV4IiwicmV0cnkiLCJ3b3JrZXJJbmRleCIsInBhcmFsbGVsSW5kZXgiLCJlcnJvcnMiLCJhdHRhY2htZW50cyIsIl9zZXJpYWxpemVBdHRhY2htZW50cyIsImJhc2U2NCIsImJvZHkiLCJvbWl0QnVmZmVycyIsInBhcmVudFN0ZXBJZCIsInBhcmVudCIsImNhdGVnb3J5IiwiZmlsZSIsInJlbGF0aXZlIiwibmkiLCJvaSIsImFpIiwidnIiLCJsaSIsInhlIiwidmUiLCJQcm9taXNlIiwiX3dzIiwid3NFbmRwb2ludCIsIkpTT04iLCJpc0Nsb3NlZCIsInN0cmluZ2lmeSIsImNsb3NlQW5kV2FpdCIsIlZlIiwiX3NlbmQiLCJQV19URVNUX1JFUE9SVEVSX1dTX0VORFBPSU5UIiwidGhlbiIsImV4aXQiLCJjb25zb2xlIiwibG9nIiwiX2hhc1NlbmRlciJdLCJzb3VyY2VzIjpbIm9vcFJlcG9ydGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBFcj1PYmplY3QuY3JlYXRlO3ZhciBuZT1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIHdyPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIGJyPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBQcj1PYmplY3QuZ2V0UHJvdG90eXBlT2YsT3I9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgUz0ocixlKT0+KCk9PihlfHxyKChlPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxlKSxlLmV4cG9ydHMpLENyPShyLGUpPT57Zm9yKHZhciB0IGluIGUpbmUocix0LHtnZXQ6ZVt0XSxlbnVtZXJhYmxlOiEwfSl9LFllPShyLGUsdCxzKT0+e2lmKGUmJnR5cGVvZiBlPT1cIm9iamVjdFwifHx0eXBlb2YgZT09XCJmdW5jdGlvblwiKWZvcihsZXQgaSBvZiBicihlKSkhT3IuY2FsbChyLGkpJiZpIT09dCYmbmUocixpLHtnZXQ6KCk9PmVbaV0sZW51bWVyYWJsZTohKHM9d3IoZSxpKSl8fHMuZW51bWVyYWJsZX0pO3JldHVybiByfTt2YXIgST0ocixlLHQpPT4odD1yIT1udWxsP0VyKFByKHIpKTp7fSxZZShlfHwhcnx8IXIuX19lc01vZHVsZT9uZSh0LFwiZGVmYXVsdFwiLHt2YWx1ZTpyLGVudW1lcmFibGU6ITB9KTp0LHIpKSxScj1yPT5ZZShuZSh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyKTt2YXIgWmU9UyhXPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KFcsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Vy5zeW5jPVcuaXNleGU9dm9pZCAwO3ZhciBrcj1yZXF1aXJlKFwiZnNcIiksTHI9cmVxdWlyZShcImZzL3Byb21pc2VzXCIpLElyPWFzeW5jKHIsZT17fSk9PntsZXR7aWdub3JlRXJyb3JzOnQ9ITF9PWU7dHJ5e3JldHVybiBYZShhd2FpdCgwLExyLnN0YXQpKHIpLGUpfWNhdGNoKHMpe2xldCBpPXM7aWYodHx8aS5jb2RlPT09XCJFQUNDRVNcIilyZXR1cm4hMTt0aHJvdyBpfX07Vy5pc2V4ZT1Jcjt2YXIgTnI9KHIsZT17fSk9PntsZXR7aWdub3JlRXJyb3JzOnQ9ITF9PWU7dHJ5e3JldHVybiBYZSgoMCxrci5zdGF0U3luYykociksZSl9Y2F0Y2gocyl7bGV0IGk9cztpZih0fHxpLmNvZGU9PT1cIkVBQ0NFU1wiKXJldHVybiExO3Rocm93IGl9fTtXLnN5bmM9TnI7dmFyIFhlPShyLGUpPT5yLmlzRmlsZSgpJiZCcihyLGUpLEJyPShyLGUpPT57dmFyIF8scCxmLGcsUCxMLFYsTztsZXQgdD0ocD1lLnVpZCkhPW51bGw/cDooXz1wcm9jZXNzLmdldHVpZCk9PW51bGw/dm9pZCAwOl8uY2FsbChwcm9jZXNzKSxzPShQPShnPWUuZ3JvdXBzKSE9bnVsbD9nOihmPXByb2Nlc3MuZ2V0Z3JvdXBzKT09bnVsbD92b2lkIDA6Zi5jYWxsKHByb2Nlc3MpKSE9bnVsbD9QOltdLGk9KE89KFY9ZS5naWQpIT1udWxsP1Y6KEw9cHJvY2Vzcy5nZXRnaWQpPT1udWxsP3ZvaWQgMDpMLmNhbGwocHJvY2VzcykpIT1udWxsP086c1swXTtpZih0PT09dm9pZCAwfHxpPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcImNhbm5vdCBnZXQgdWlkIG9yIGdpZFwiKTtsZXQgbj1uZXcgU2V0KFtpLC4uLnNdKSxvPXIubW9kZSxsPXIudWlkLGM9ci5naWQsYT1wYXJzZUludChcIjEwMFwiLDgpLHU9cGFyc2VJbnQoXCIwMTBcIiw4KSxoPXBhcnNlSW50KFwiMDAxXCIsOCksZD1hfHU7cmV0dXJuISEobyZofHxvJnUmJm4uaGFzKGMpfHxvJmEmJmw9PT10fHxvJmQmJnQ9PT0wKX19KTt2YXIgUWU9UyhqPT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGosXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ai5zeW5jPWouaXNleGU9dm9pZCAwO3ZhciBNcj1yZXF1aXJlKFwiZnNcIiksRHI9cmVxdWlyZShcImZzL3Byb21pc2VzXCIpLEFyPWFzeW5jKHIsZT17fSk9PntsZXR7aWdub3JlRXJyb3JzOnQ9ITF9PWU7dHJ5e3JldHVybiBLZShhd2FpdCgwLERyLnN0YXQpKHIpLHIsZSl9Y2F0Y2gocyl7bGV0IGk9cztpZih0fHxpLmNvZGU9PT1cIkVBQ0NFU1wiKXJldHVybiExO3Rocm93IGl9fTtqLmlzZXhlPUFyO3ZhciBGcj0ocixlPXt9KT0+e2xldHtpZ25vcmVFcnJvcnM6dD0hMX09ZTt0cnl7cmV0dXJuIEtlKCgwLE1yLnN0YXRTeW5jKShyKSxyLGUpfWNhdGNoKHMpe2xldCBpPXM7aWYodHx8aS5jb2RlPT09XCJFQUNDRVNcIilyZXR1cm4hMTt0aHJvdyBpfX07ai5zeW5jPUZyO3ZhciBVcj0ocixlKT0+e2xldHtwYXRoRXh0OnQ9cHJvY2Vzcy5lbnYuUEFUSEVYVHx8XCJcIn09ZSxzPXQuc3BsaXQoXCI7XCIpO2lmKHMuaW5kZXhPZihcIlwiKSE9PS0xKXJldHVybiEwO2ZvcihsZXQgaT0wO2k8cy5sZW5ndGg7aSsrKXtsZXQgbj1zW2ldLnRvTG93ZXJDYXNlKCksbz1yLnN1YnN0cmluZyhyLmxlbmd0aC1uLmxlbmd0aCkudG9Mb3dlckNhc2UoKTtpZihuJiZvPT09bilyZXR1cm4hMH1yZXR1cm4hMX0sS2U9KHIsZSx0KT0+ci5pc0ZpbGUoKSYmVXIoZSx0KX0pO3ZhciB0dD1TKGV0PT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSk7dmFyIGF0PVMoeT0+e1widXNlIHN0cmljdFwiO3ZhciBydD15JiZ5Ll9fY3JlYXRlQmluZGluZ3x8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24ocixlLHQscyl7cz09PXZvaWQgMCYmKHM9dCk7dmFyIGk9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpOyghaXx8KFwiZ2V0XCJpbiBpPyFlLl9fZXNNb2R1bGU6aS53cml0YWJsZXx8aS5jb25maWd1cmFibGUpKSYmKGk9e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGVbdF19fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIscyxpKX06ZnVuY3Rpb24ocixlLHQscyl7cz09PXZvaWQgMCYmKHM9dCkscltzXT1lW3RdfSksV3I9eSYmeS5fX3NldE1vZHVsZURlZmF1bHR8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKHIsZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pfTpmdW5jdGlvbihyLGUpe3IuZGVmYXVsdD1lfSksc3Q9eSYmeS5fX2ltcG9ydFN0YXJ8fGZ1bmN0aW9uKHIpe2lmKHImJnIuX19lc01vZHVsZSlyZXR1cm4gcjt2YXIgZT17fTtpZihyIT1udWxsKWZvcih2YXIgdCBpbiByKXQhPT1cImRlZmF1bHRcIiYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsdCkmJnJ0KGUscix0KTtyZXR1cm4gV3IoZSxyKSxlfSxqcj15JiZ5Ll9fZXhwb3J0U3Rhcnx8ZnVuY3Rpb24ocixlKXtmb3IodmFyIHQgaW4gcil0IT09XCJkZWZhdWx0XCImJiFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KSYmcnQoZSxyLHQpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoeSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt5LnN5bmM9eS5pc2V4ZT15LnBvc2l4PXkud2luMzI9dm9pZCAwO3ZhciBpdD1zdChaZSgpKTt5LnBvc2l4PWl0O3ZhciBudD1zdChRZSgpKTt5LndpbjMyPW50O2pyKHR0KCkseSk7dmFyIHFyPXByb2Nlc3MuZW52Ll9JU0VYRV9URVNUX1BMQVRGT1JNX3x8cHJvY2Vzcy5wbGF0Zm9ybSxvdD1xcj09PVwid2luMzJcIj9udDppdDt5LmlzZXhlPW90LmlzZXhlO3kuc3luYz1vdC5zeW5jfSk7dmFyIGd0PVMoKG1pLG10KT0+e3Zhcntpc2V4ZTpKcixzeW5jOiRyfT1hdCgpLHtqb2luOkdyLGRlbGltaXRlcjpWcixzZXA6bHQscG9zaXg6Y3R9PXJlcXVpcmUoXCJwYXRoXCIpLHV0PXByb2Nlc3MucGxhdGZvcm09PT1cIndpbjMyXCIsaHQ9bmV3IFJlZ0V4cChgWyR7Y3Quc2VwfSR7bHQ9PT1jdC5zZXA/XCJcIjpsdH1dYC5yZXBsYWNlKC8oXFxcXCkvZyxcIlxcXFwkMVwiKSksenI9bmV3IFJlZ0V4cChgXlxcXFwuJHtodC5zb3VyY2V9YCksZnQ9cj0+T2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoYG5vdCBmb3VuZDogJHtyfWApLHtjb2RlOlwiRU5PRU5UXCJ9KSxkdD0ocix7cGF0aDplPXByb2Nlc3MuZW52LlBBVEgscGF0aEV4dDp0PXByb2Nlc3MuZW52LlBBVEhFWFQsZGVsaW1pdGVyOnM9VnJ9KT0+e2xldCBpPXIubWF0Y2goaHQpP1tcIlwiXTpbLi4udXQ/W3Byb2Nlc3MuY3dkKCldOltdLC4uLihlfHxcIlwiKS5zcGxpdChzKV07aWYodXQpe2xldCBuPXR8fFtcIi5FWEVcIixcIi5DTURcIixcIi5CQVRcIixcIi5DT01cIl0uam9pbihzKSxvPW4uc3BsaXQocykuZmxhdE1hcChsPT5bbCxsLnRvTG93ZXJDYXNlKCldKTtyZXR1cm4gci5pbmNsdWRlcyhcIi5cIikmJm9bMF0hPT1cIlwiJiZvLnVuc2hpZnQoXCJcIikse3BhdGhFbnY6aSxwYXRoRXh0Om8scGF0aEV4dEV4ZTpufX1yZXR1cm57cGF0aEVudjppLHBhdGhFeHQ6W1wiXCJdfX0scHQ9KHIsZSk9PntsZXQgdD0vXlwiLipcIiQvLnRlc3Qocik/ci5zbGljZSgxLC0xKTpyO3JldHVybighdCYmenIudGVzdChlKT9lLnNsaWNlKDAsMik6XCJcIikrR3IodCxlKX0sX3Q9YXN5bmMocixlPXt9KT0+e2xldHtwYXRoRW52OnQscGF0aEV4dDpzLHBhdGhFeHRFeGU6aX09ZHQocixlKSxuPVtdO2ZvcihsZXQgbyBvZiB0KXtsZXQgbD1wdChvLHIpO2ZvcihsZXQgYyBvZiBzKXtsZXQgYT1sK2M7aWYoYXdhaXQgSnIoYSx7cGF0aEV4dDppLGlnbm9yZUVycm9yczohMH0pKXtpZighZS5hbGwpcmV0dXJuIGE7bi5wdXNoKGEpfX19aWYoZS5hbGwmJm4ubGVuZ3RoKXJldHVybiBuO2lmKGUubm90aHJvdylyZXR1cm4gbnVsbDt0aHJvdyBmdChyKX0sSHI9KHIsZT17fSk9PntsZXR7cGF0aEVudjp0LHBhdGhFeHQ6cyxwYXRoRXh0RXhlOml9PWR0KHIsZSksbj1bXTtmb3IobGV0IG8gb2YgdCl7bGV0IGw9cHQobyxyKTtmb3IobGV0IGMgb2Ygcyl7bGV0IGE9bCtjO2lmKCRyKGEse3BhdGhFeHQ6aSxpZ25vcmVFcnJvcnM6ITB9KSl7aWYoIWUuYWxsKXJldHVybiBhO24ucHVzaChhKX19fWlmKGUuYWxsJiZuLmxlbmd0aClyZXR1cm4gbjtpZihlLm5vdGhyb3cpcmV0dXJuIG51bGw7dGhyb3cgZnQocil9O210LmV4cG9ydHM9X3Q7X3Quc3luYz1Icn0pO3ZhciBFdD1TKChiaSxUdCk9PntcInVzZSBzdHJpY3RcIjt2YXJ7RHVwbGV4OlhyfT1yZXF1aXJlKFwic3RyZWFtXCIpO2Z1bmN0aW9uIHh0KHIpe3IuZW1pdChcImNsb3NlXCIpfWZ1bmN0aW9uIFpyKCl7IXRoaXMuZGVzdHJveWVkJiZ0aGlzLl93cml0YWJsZVN0YXRlLmZpbmlzaGVkJiZ0aGlzLmRlc3Ryb3koKX1mdW5jdGlvbiB2dChyKXt0aGlzLnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIix2dCksdGhpcy5kZXN0cm95KCksdGhpcy5saXN0ZW5lckNvdW50KFwiZXJyb3JcIik9PT0wJiZ0aGlzLmVtaXQoXCJlcnJvclwiLHIpfWZ1bmN0aW9uIEtyKHIsZSl7bGV0IHQ9ITAscz1uZXcgWHIoey4uLmUsYXV0b0Rlc3Ryb3k6ITEsZW1pdENsb3NlOiExLG9iamVjdE1vZGU6ITEsd3JpdGFibGVPYmplY3RNb2RlOiExfSk7cmV0dXJuIHIub24oXCJtZXNzYWdlXCIsZnVuY3Rpb24obixvKXtsZXQgbD0hbyYmcy5fcmVhZGFibGVTdGF0ZS5vYmplY3RNb2RlP24udG9TdHJpbmcoKTpuO3MucHVzaChsKXx8ci5wYXVzZSgpfSksci5vbmNlKFwiZXJyb3JcIixmdW5jdGlvbihuKXtzLmRlc3Ryb3llZHx8KHQ9ITEscy5kZXN0cm95KG4pKX0pLHIub25jZShcImNsb3NlXCIsZnVuY3Rpb24oKXtzLmRlc3Ryb3llZHx8cy5wdXNoKG51bGwpfSkscy5fZGVzdHJveT1mdW5jdGlvbihpLG4pe2lmKHIucmVhZHlTdGF0ZT09PXIuQ0xPU0VEKXtuKGkpLHByb2Nlc3MubmV4dFRpY2soeHQscyk7cmV0dXJufWxldCBvPSExO3Iub25jZShcImVycm9yXCIsZnVuY3Rpb24oYyl7bz0hMCxuKGMpfSksci5vbmNlKFwiY2xvc2VcIixmdW5jdGlvbigpe298fG4oaSkscHJvY2Vzcy5uZXh0VGljayh4dCxzKX0pLHQmJnIudGVybWluYXRlKCl9LHMuX2ZpbmFsPWZ1bmN0aW9uKGkpe2lmKHIucmVhZHlTdGF0ZT09PXIuQ09OTkVDVElORyl7ci5vbmNlKFwib3BlblwiLGZ1bmN0aW9uKCl7cy5fZmluYWwoaSl9KTtyZXR1cm59ci5fc29ja2V0IT09bnVsbCYmKHIuX3NvY2tldC5fd3JpdGFibGVTdGF0ZS5maW5pc2hlZD8oaSgpLHMuX3JlYWRhYmxlU3RhdGUuZW5kRW1pdHRlZCYmcy5kZXN0cm95KCkpOihyLl9zb2NrZXQub25jZShcImZpbmlzaFwiLGZ1bmN0aW9uKCl7aSgpfSksci5jbG9zZSgpKSl9LHMuX3JlYWQ9ZnVuY3Rpb24oKXtyLmlzUGF1c2VkJiZyLnJlc3VtZSgpfSxzLl93cml0ZT1mdW5jdGlvbihpLG4sbyl7aWYoci5yZWFkeVN0YXRlPT09ci5DT05ORUNUSU5HKXtyLm9uY2UoXCJvcGVuXCIsZnVuY3Rpb24oKXtzLl93cml0ZShpLG4sbyl9KTtyZXR1cm59ci5zZW5kKGksbyl9LHMub24oXCJlbmRcIixacikscy5vbihcImVycm9yXCIsdnQpLHN9VHQuZXhwb3J0cz1Lcn0pO3ZhciBOPVMoKFBpLHd0KT0+e1widXNlIHN0cmljdFwiO3d0LmV4cG9ydHM9e0JJTkFSWV9UWVBFUzpbXCJub2RlYnVmZmVyXCIsXCJhcnJheWJ1ZmZlclwiLFwiZnJhZ21lbnRzXCJdLEVNUFRZX0JVRkZFUjpCdWZmZXIuYWxsb2MoMCksR1VJRDpcIjI1OEVBRkE1LUU5MTQtNDdEQS05NUNBLUM1QUIwREM4NUIxMVwiLGtGb3JPbkV2ZW50QXR0cmlidXRlOlN5bWJvbChcImtJc0Zvck9uRXZlbnRBdHRyaWJ1dGVcIiksa0xpc3RlbmVyOlN5bWJvbChcImtMaXN0ZW5lclwiKSxrU3RhdHVzQ29kZTpTeW1ib2woXCJzdGF0dXMtY29kZVwiKSxrV2ViU29ja2V0OlN5bWJvbChcIndlYnNvY2tldFwiKSxOT09QOigpPT57fX19KTt2YXIgWT1TKChPaSxhZSk9PntcInVzZSBzdHJpY3RcIjt2YXJ7RU1QVFlfQlVGRkVSOlFyfT1OKCksYmU9QnVmZmVyW1N5bWJvbC5zcGVjaWVzXTtmdW5jdGlvbiBlcyhyLGUpe2lmKHIubGVuZ3RoPT09MClyZXR1cm4gUXI7aWYoci5sZW5ndGg9PT0xKXJldHVybiByWzBdO2xldCB0PUJ1ZmZlci5hbGxvY1Vuc2FmZShlKSxzPTA7Zm9yKGxldCBpPTA7aTxyLmxlbmd0aDtpKyspe2xldCBuPXJbaV07dC5zZXQobixzKSxzKz1uLmxlbmd0aH1yZXR1cm4gczxlP25ldyBiZSh0LmJ1ZmZlcix0LmJ5dGVPZmZzZXQscyk6dH1mdW5jdGlvbiBidChyLGUsdCxzLGkpe2ZvcihsZXQgbj0wO248aTtuKyspdFtzK25dPXJbbl1eZVtuJjNdfWZ1bmN0aW9uIFB0KHIsZSl7Zm9yKGxldCB0PTA7dDxyLmxlbmd0aDt0Kyspclt0XV49ZVt0JjNdfWZ1bmN0aW9uIHRzKHIpe3JldHVybiByLmxlbmd0aD09PXIuYnVmZmVyLmJ5dGVMZW5ndGg/ci5idWZmZXI6ci5idWZmZXIuc2xpY2Uoci5ieXRlT2Zmc2V0LHIuYnl0ZU9mZnNldCtyLmxlbmd0aCl9ZnVuY3Rpb24gUGUocil7aWYoUGUucmVhZE9ubHk9ITAsQnVmZmVyLmlzQnVmZmVyKHIpKXJldHVybiByO2xldCBlO3JldHVybiByIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI/ZT1uZXcgYmUocik6QXJyYXlCdWZmZXIuaXNWaWV3KHIpP2U9bmV3IGJlKHIuYnVmZmVyLHIuYnl0ZU9mZnNldCxyLmJ5dGVMZW5ndGgpOihlPUJ1ZmZlci5mcm9tKHIpLFBlLnJlYWRPbmx5PSExKSxlfWFlLmV4cG9ydHM9e2NvbmNhdDplcyxtYXNrOmJ0LHRvQXJyYXlCdWZmZXI6dHMsdG9CdWZmZXI6UGUsdW5tYXNrOlB0fTtpZighcHJvY2Vzcy5lbnYuV1NfTk9fQlVGRkVSX1VUSUwpdHJ5e2xldCByPXJlcXVpcmUoXCJidWZmZXJ1dGlsXCIpO2FlLmV4cG9ydHMubWFzaz1mdW5jdGlvbihlLHQscyxpLG4pe248NDg/YnQoZSx0LHMsaSxuKTpyLm1hc2soZSx0LHMsaSxuKX0sYWUuZXhwb3J0cy51bm1hc2s9ZnVuY3Rpb24oZSx0KXtlLmxlbmd0aDwzMj9QdChlLHQpOnIudW5tYXNrKGUsdCl9fWNhdGNoe319KTt2YXIgUnQ9UygoQ2ksQ3QpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIE90PVN5bWJvbChcImtEb25lXCIpLE9lPVN5bWJvbChcImtSdW5cIiksQ2U9Y2xhc3N7Y29uc3RydWN0b3IoZSl7dGhpc1tPdF09KCk9Pnt0aGlzLnBlbmRpbmctLSx0aGlzW09lXSgpfSx0aGlzLmNvbmN1cnJlbmN5PWV8fDEvMCx0aGlzLmpvYnM9W10sdGhpcy5wZW5kaW5nPTB9YWRkKGUpe3RoaXMuam9icy5wdXNoKGUpLHRoaXNbT2VdKCl9W09lXSgpe2lmKHRoaXMucGVuZGluZyE9PXRoaXMuY29uY3VycmVuY3kmJnRoaXMuam9icy5sZW5ndGgpe2xldCBlPXRoaXMuam9icy5zaGlmdCgpO3RoaXMucGVuZGluZysrLGUodGhpc1tPdF0pfX19O0N0LmV4cG9ydHM9Q2V9KTt2YXIgSz1TKChSaSxOdCk9PntcInVzZSBzdHJpY3RcIjt2YXIgWD1yZXF1aXJlKFwiemxpYlwiKSxrdD1ZKCkscnM9UnQoKSx7a1N0YXR1c0NvZGU6THR9PU4oKSxzcz1CdWZmZXJbU3ltYm9sLnNwZWNpZXNdLGlzPUJ1ZmZlci5mcm9tKFswLDAsMjU1LDI1NV0pLHVlPVN5bWJvbChcInBlcm1lc3NhZ2UtZGVmbGF0ZVwiKSxDPVN5bWJvbChcInRvdGFsLWxlbmd0aFwiKSxaPVN5bWJvbChcImNhbGxiYWNrXCIpLEI9U3ltYm9sKFwiYnVmZmVyc1wiKSxjZT1TeW1ib2woXCJlcnJvclwiKSxsZSxSZT1jbGFzc3tjb25zdHJ1Y3RvcihlLHQscyl7aWYodGhpcy5fbWF4UGF5bG9hZD1zfDAsdGhpcy5fb3B0aW9ucz1lfHx7fSx0aGlzLl90aHJlc2hvbGQ9dGhpcy5fb3B0aW9ucy50aHJlc2hvbGQhPT12b2lkIDA/dGhpcy5fb3B0aW9ucy50aHJlc2hvbGQ6MTAyNCx0aGlzLl9pc1NlcnZlcj0hIXQsdGhpcy5fZGVmbGF0ZT1udWxsLHRoaXMuX2luZmxhdGU9bnVsbCx0aGlzLnBhcmFtcz1udWxsLCFsZSl7bGV0IGk9dGhpcy5fb3B0aW9ucy5jb25jdXJyZW5jeUxpbWl0IT09dm9pZCAwP3RoaXMuX29wdGlvbnMuY29uY3VycmVuY3lMaW1pdDoxMDtsZT1uZXcgcnMoaSl9fXN0YXRpYyBnZXQgZXh0ZW5zaW9uTmFtZSgpe3JldHVyblwicGVybWVzc2FnZS1kZWZsYXRlXCJ9b2ZmZXIoKXtsZXQgZT17fTtyZXR1cm4gdGhpcy5fb3B0aW9ucy5zZXJ2ZXJOb0NvbnRleHRUYWtlb3ZlciYmKGUuc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXI9ITApLHRoaXMuX29wdGlvbnMuY2xpZW50Tm9Db250ZXh0VGFrZW92ZXImJihlLmNsaWVudF9ub19jb250ZXh0X3Rha2VvdmVyPSEwKSx0aGlzLl9vcHRpb25zLnNlcnZlck1heFdpbmRvd0JpdHMmJihlLnNlcnZlcl9tYXhfd2luZG93X2JpdHM9dGhpcy5fb3B0aW9ucy5zZXJ2ZXJNYXhXaW5kb3dCaXRzKSx0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHM/ZS5jbGllbnRfbWF4X3dpbmRvd19iaXRzPXRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0czp0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHM9PW51bGwmJihlLmNsaWVudF9tYXhfd2luZG93X2JpdHM9ITApLGV9YWNjZXB0KGUpe3JldHVybiBlPXRoaXMubm9ybWFsaXplUGFyYW1zKGUpLHRoaXMucGFyYW1zPXRoaXMuX2lzU2VydmVyP3RoaXMuYWNjZXB0QXNTZXJ2ZXIoZSk6dGhpcy5hY2NlcHRBc0NsaWVudChlKSx0aGlzLnBhcmFtc31jbGVhbnVwKCl7aWYodGhpcy5faW5mbGF0ZSYmKHRoaXMuX2luZmxhdGUuY2xvc2UoKSx0aGlzLl9pbmZsYXRlPW51bGwpLHRoaXMuX2RlZmxhdGUpe2xldCBlPXRoaXMuX2RlZmxhdGVbWl07dGhpcy5fZGVmbGF0ZS5jbG9zZSgpLHRoaXMuX2RlZmxhdGU9bnVsbCxlJiZlKG5ldyBFcnJvcihcIlRoZSBkZWZsYXRlIHN0cmVhbSB3YXMgY2xvc2VkIHdoaWxlIGRhdGEgd2FzIGJlaW5nIHByb2Nlc3NlZFwiKSl9fWFjY2VwdEFzU2VydmVyKGUpe2xldCB0PXRoaXMuX29wdGlvbnMscz1lLmZpbmQoaT0+ISh0LnNlcnZlck5vQ29udGV4dFRha2VvdmVyPT09ITEmJmkuc2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXJ8fGkuc2VydmVyX21heF93aW5kb3dfYml0cyYmKHQuc2VydmVyTWF4V2luZG93Qml0cz09PSExfHx0eXBlb2YgdC5zZXJ2ZXJNYXhXaW5kb3dCaXRzPT1cIm51bWJlclwiJiZ0LnNlcnZlck1heFdpbmRvd0JpdHM+aS5zZXJ2ZXJfbWF4X3dpbmRvd19iaXRzKXx8dHlwZW9mIHQuY2xpZW50TWF4V2luZG93Qml0cz09XCJudW1iZXJcIiYmIWkuY2xpZW50X21heF93aW5kb3dfYml0cykpO2lmKCFzKXRocm93IG5ldyBFcnJvcihcIk5vbmUgb2YgdGhlIGV4dGVuc2lvbiBvZmZlcnMgY2FuIGJlIGFjY2VwdGVkXCIpO3JldHVybiB0LnNlcnZlck5vQ29udGV4dFRha2VvdmVyJiYocy5zZXJ2ZXJfbm9fY29udGV4dF90YWtlb3Zlcj0hMCksdC5jbGllbnROb0NvbnRleHRUYWtlb3ZlciYmKHMuY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXI9ITApLHR5cGVvZiB0LnNlcnZlck1heFdpbmRvd0JpdHM9PVwibnVtYmVyXCImJihzLnNlcnZlcl9tYXhfd2luZG93X2JpdHM9dC5zZXJ2ZXJNYXhXaW5kb3dCaXRzKSx0eXBlb2YgdC5jbGllbnRNYXhXaW5kb3dCaXRzPT1cIm51bWJlclwiP3MuY2xpZW50X21heF93aW5kb3dfYml0cz10LmNsaWVudE1heFdpbmRvd0JpdHM6KHMuY2xpZW50X21heF93aW5kb3dfYml0cz09PSEwfHx0LmNsaWVudE1heFdpbmRvd0JpdHM9PT0hMSkmJmRlbGV0ZSBzLmNsaWVudF9tYXhfd2luZG93X2JpdHMsc31hY2NlcHRBc0NsaWVudChlKXtsZXQgdD1lWzBdO2lmKHRoaXMuX29wdGlvbnMuY2xpZW50Tm9Db250ZXh0VGFrZW92ZXI9PT0hMSYmdC5jbGllbnRfbm9fY29udGV4dF90YWtlb3Zlcil0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgcGFyYW1ldGVyIFwiY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXJcIicpO2lmKCF0LmNsaWVudF9tYXhfd2luZG93X2JpdHMpdHlwZW9mIHRoaXMuX29wdGlvbnMuY2xpZW50TWF4V2luZG93Qml0cz09XCJudW1iZXJcIiYmKHQuY2xpZW50X21heF93aW5kb3dfYml0cz10aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMpO2Vsc2UgaWYodGhpcy5fb3B0aW9ucy5jbGllbnRNYXhXaW5kb3dCaXRzPT09ITF8fHR5cGVvZiB0aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHM9PVwibnVtYmVyXCImJnQuY2xpZW50X21heF93aW5kb3dfYml0cz50aGlzLl9vcHRpb25zLmNsaWVudE1heFdpbmRvd0JpdHMpdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIG9yIGludmFsaWQgcGFyYW1ldGVyIFwiY2xpZW50X21heF93aW5kb3dfYml0c1wiJyk7cmV0dXJuIHR9bm9ybWFsaXplUGFyYW1zKGUpe3JldHVybiBlLmZvckVhY2godD0+e09iamVjdC5rZXlzKHQpLmZvckVhY2gocz0+e2xldCBpPXRbc107aWYoaS5sZW5ndGg+MSl0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciBcIiR7c31cIiBtdXN0IGhhdmUgb25seSBhIHNpbmdsZSB2YWx1ZWApO2lmKGk9aVswXSxzPT09XCJjbGllbnRfbWF4X3dpbmRvd19iaXRzXCIpe2lmKGkhPT0hMCl7bGV0IG49K2k7aWYoIU51bWJlci5pc0ludGVnZXIobil8fG48OHx8bj4xNSl0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgXCIke3N9XCI6ICR7aX1gKTtpPW59ZWxzZSBpZighdGhpcy5faXNTZXJ2ZXIpdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyIFwiJHtzfVwiOiAke2l9YCl9ZWxzZSBpZihzPT09XCJzZXJ2ZXJfbWF4X3dpbmRvd19iaXRzXCIpe2xldCBuPStpO2lmKCFOdW1iZXIuaXNJbnRlZ2VyKG4pfHxuPDh8fG4+MTUpdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyIFwiJHtzfVwiOiAke2l9YCk7aT1ufWVsc2UgaWYocz09PVwiY2xpZW50X25vX2NvbnRleHRfdGFrZW92ZXJcInx8cz09PVwic2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXJcIil7aWYoaSE9PSEwKXRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciBcIiR7c31cIjogJHtpfWApfWVsc2UgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHBhcmFtZXRlciBcIiR7c31cImApO3Rbc109aX0pfSksZX1kZWNvbXByZXNzKGUsdCxzKXtsZS5hZGQoaT0+e3RoaXMuX2RlY29tcHJlc3MoZSx0LChuLG8pPT57aSgpLHMobixvKX0pfSl9Y29tcHJlc3MoZSx0LHMpe2xlLmFkZChpPT57dGhpcy5fY29tcHJlc3MoZSx0LChuLG8pPT57aSgpLHMobixvKX0pfSl9X2RlY29tcHJlc3MoZSx0LHMpe2xldCBpPXRoaXMuX2lzU2VydmVyP1wiY2xpZW50XCI6XCJzZXJ2ZXJcIjtpZighdGhpcy5faW5mbGF0ZSl7bGV0IG49YCR7aX1fbWF4X3dpbmRvd19iaXRzYCxvPXR5cGVvZiB0aGlzLnBhcmFtc1tuXSE9XCJudW1iZXJcIj9YLlpfREVGQVVMVF9XSU5ET1dCSVRTOnRoaXMucGFyYW1zW25dO3RoaXMuX2luZmxhdGU9WC5jcmVhdGVJbmZsYXRlUmF3KHsuLi50aGlzLl9vcHRpb25zLnpsaWJJbmZsYXRlT3B0aW9ucyx3aW5kb3dCaXRzOm99KSx0aGlzLl9pbmZsYXRlW3VlXT10aGlzLHRoaXMuX2luZmxhdGVbQ109MCx0aGlzLl9pbmZsYXRlW0JdPVtdLHRoaXMuX2luZmxhdGUub24oXCJlcnJvclwiLG9zKSx0aGlzLl9pbmZsYXRlLm9uKFwiZGF0YVwiLEl0KX10aGlzLl9pbmZsYXRlW1pdPXMsdGhpcy5faW5mbGF0ZS53cml0ZShlKSx0JiZ0aGlzLl9pbmZsYXRlLndyaXRlKGlzKSx0aGlzLl9pbmZsYXRlLmZsdXNoKCgpPT57bGV0IG49dGhpcy5faW5mbGF0ZVtjZV07aWYobil7dGhpcy5faW5mbGF0ZS5jbG9zZSgpLHRoaXMuX2luZmxhdGU9bnVsbCxzKG4pO3JldHVybn1sZXQgbz1rdC5jb25jYXQodGhpcy5faW5mbGF0ZVtCXSx0aGlzLl9pbmZsYXRlW0NdKTt0aGlzLl9pbmZsYXRlLl9yZWFkYWJsZVN0YXRlLmVuZEVtaXR0ZWQ/KHRoaXMuX2luZmxhdGUuY2xvc2UoKSx0aGlzLl9pbmZsYXRlPW51bGwpOih0aGlzLl9pbmZsYXRlW0NdPTAsdGhpcy5faW5mbGF0ZVtCXT1bXSx0JiZ0aGlzLnBhcmFtc1tgJHtpfV9ub19jb250ZXh0X3Rha2VvdmVyYF0mJnRoaXMuX2luZmxhdGUucmVzZXQoKSkscyhudWxsLG8pfSl9X2NvbXByZXNzKGUsdCxzKXtsZXQgaT10aGlzLl9pc1NlcnZlcj9cInNlcnZlclwiOlwiY2xpZW50XCI7aWYoIXRoaXMuX2RlZmxhdGUpe2xldCBuPWAke2l9X21heF93aW5kb3dfYml0c2Asbz10eXBlb2YgdGhpcy5wYXJhbXNbbl0hPVwibnVtYmVyXCI/WC5aX0RFRkFVTFRfV0lORE9XQklUUzp0aGlzLnBhcmFtc1tuXTt0aGlzLl9kZWZsYXRlPVguY3JlYXRlRGVmbGF0ZVJhdyh7Li4udGhpcy5fb3B0aW9ucy56bGliRGVmbGF0ZU9wdGlvbnMsd2luZG93Qml0czpvfSksdGhpcy5fZGVmbGF0ZVtDXT0wLHRoaXMuX2RlZmxhdGVbQl09W10sdGhpcy5fZGVmbGF0ZS5vbihcImRhdGFcIixucyl9dGhpcy5fZGVmbGF0ZVtaXT1zLHRoaXMuX2RlZmxhdGUud3JpdGUoZSksdGhpcy5fZGVmbGF0ZS5mbHVzaChYLlpfU1lOQ19GTFVTSCwoKT0+e2lmKCF0aGlzLl9kZWZsYXRlKXJldHVybjtsZXQgbj1rdC5jb25jYXQodGhpcy5fZGVmbGF0ZVtCXSx0aGlzLl9kZWZsYXRlW0NdKTt0JiYobj1uZXcgc3Mobi5idWZmZXIsbi5ieXRlT2Zmc2V0LG4ubGVuZ3RoLTQpKSx0aGlzLl9kZWZsYXRlW1pdPW51bGwsdGhpcy5fZGVmbGF0ZVtDXT0wLHRoaXMuX2RlZmxhdGVbQl09W10sdCYmdGhpcy5wYXJhbXNbYCR7aX1fbm9fY29udGV4dF90YWtlb3ZlcmBdJiZ0aGlzLl9kZWZsYXRlLnJlc2V0KCkscyhudWxsLG4pfSl9fTtOdC5leHBvcnRzPVJlO2Z1bmN0aW9uIG5zKHIpe3RoaXNbQl0ucHVzaChyKSx0aGlzW0NdKz1yLmxlbmd0aH1mdW5jdGlvbiBJdChyKXtpZih0aGlzW0NdKz1yLmxlbmd0aCx0aGlzW3VlXS5fbWF4UGF5bG9hZDwxfHx0aGlzW0NdPD10aGlzW3VlXS5fbWF4UGF5bG9hZCl7dGhpc1tCXS5wdXNoKHIpO3JldHVybn10aGlzW2NlXT1uZXcgUmFuZ2VFcnJvcihcIk1heCBwYXlsb2FkIHNpemUgZXhjZWVkZWRcIiksdGhpc1tjZV0uY29kZT1cIldTX0VSUl9VTlNVUFBPUlRFRF9NRVNTQUdFX0xFTkdUSFwiLHRoaXNbY2VdW0x0XT0xMDA5LHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJkYXRhXCIsSXQpLHRoaXMucmVzZXQoKX1mdW5jdGlvbiBvcyhyKXt0aGlzW3VlXS5faW5mbGF0ZT1udWxsLHJbTHRdPTEwMDcsdGhpc1taXShyKX19KTt2YXIgUT1TKChraSxoZSk9PntcInVzZSBzdHJpY3RcIjt2YXJ7aXNVdGY4OkJ0fT1yZXF1aXJlKFwiYnVmZmVyXCIpLGFzPVswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMSwxLDEsMSwxLDAsMCwxLDEsMCwxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMCwxLDBdO2Z1bmN0aW9uIGxzKHIpe3JldHVybiByPj0xZTMmJnI8PTEwMTQmJnIhPT0xMDA0JiZyIT09MTAwNSYmciE9PTEwMDZ8fHI+PTNlMyYmcjw9NDk5OX1mdW5jdGlvbiBrZShyKXtsZXQgZT1yLmxlbmd0aCx0PTA7Zm9yKDt0PGU7KWlmKCEoclt0XSYxMjgpKXQrKztlbHNlIGlmKChyW3RdJjIyNCk9PT0xOTIpe2lmKHQrMT09PWV8fChyW3QrMV0mMTkyKSE9PTEyOHx8KHJbdF0mMjU0KT09PTE5MilyZXR1cm4hMTt0Kz0yfWVsc2UgaWYoKHJbdF0mMjQwKT09PTIyNCl7aWYodCsyPj1lfHwoclt0KzFdJjE5MikhPT0xMjh8fChyW3QrMl0mMTkyKSE9PTEyOHx8clt0XT09PTIyNCYmKHJbdCsxXSYyMjQpPT09MTI4fHxyW3RdPT09MjM3JiYoclt0KzFdJjIyNCk9PT0xNjApcmV0dXJuITE7dCs9M31lbHNlIGlmKChyW3RdJjI0OCk9PT0yNDApe2lmKHQrMz49ZXx8KHJbdCsxXSYxOTIpIT09MTI4fHwoclt0KzJdJjE5MikhPT0xMjh8fChyW3QrM10mMTkyKSE9PTEyOHx8clt0XT09PTI0MCYmKHJbdCsxXSYyNDApPT09MTI4fHxyW3RdPT09MjQ0JiZyW3QrMV0+MTQzfHxyW3RdPjI0NClyZXR1cm4hMTt0Kz00fWVsc2UgcmV0dXJuITE7cmV0dXJuITB9aGUuZXhwb3J0cz17aXNWYWxpZFN0YXR1c0NvZGU6bHMsaXNWYWxpZFVURjg6a2UsdG9rZW5DaGFyczphc307aWYoQnQpaGUuZXhwb3J0cy5pc1ZhbGlkVVRGOD1mdW5jdGlvbihyKXtyZXR1cm4gci5sZW5ndGg8MjQ/a2Uocik6QnQocil9O2Vsc2UgaWYoIXByb2Nlc3MuZW52LldTX05PX1VURl84X1ZBTElEQVRFKXRyeXtsZXQgcj1yZXF1aXJlKFwidXRmLTgtdmFsaWRhdGVcIik7aGUuZXhwb3J0cy5pc1ZhbGlkVVRGOD1mdW5jdGlvbihlKXtyZXR1cm4gZS5sZW5ndGg8MzI/a2UoZSk6cihlKX19Y2F0Y2h7fX0pO3ZhciBNZT1TKChMaSxqdCk9PntcInVzZSBzdHJpY3RcIjt2YXJ7V3JpdGFibGU6Y3N9PXJlcXVpcmUoXCJzdHJlYW1cIiksTXQ9SygpLHtCSU5BUllfVFlQRVM6dXMsRU1QVFlfQlVGRkVSOkR0LGtTdGF0dXNDb2RlOmhzLGtXZWJTb2NrZXQ6ZnN9PU4oKSx7Y29uY2F0OkxlLHRvQXJyYXlCdWZmZXI6ZHMsdW5tYXNrOnBzfT1ZKCkse2lzVmFsaWRTdGF0dXNDb2RlOl9zLGlzVmFsaWRVVEY4OkF0fT1RKCksZmU9QnVmZmVyW1N5bWJvbC5zcGVjaWVzXSxUPTAsRnQ9MSxVdD0yLFd0PTMsSWU9NCxOZT01LGRlPTYsQmU9Y2xhc3MgZXh0ZW5kcyBjc3tjb25zdHJ1Y3RvcihlPXt9KXtzdXBlcigpLHRoaXMuX2FsbG93U3luY2hyb25vdXNFdmVudHM9ZS5hbGxvd1N5bmNocm9ub3VzRXZlbnRzIT09dm9pZCAwP2UuYWxsb3dTeW5jaHJvbm91c0V2ZW50czohMCx0aGlzLl9iaW5hcnlUeXBlPWUuYmluYXJ5VHlwZXx8dXNbMF0sdGhpcy5fZXh0ZW5zaW9ucz1lLmV4dGVuc2lvbnN8fHt9LHRoaXMuX2lzU2VydmVyPSEhZS5pc1NlcnZlcix0aGlzLl9tYXhQYXlsb2FkPWUubWF4UGF5bG9hZHwwLHRoaXMuX3NraXBVVEY4VmFsaWRhdGlvbj0hIWUuc2tpcFVURjhWYWxpZGF0aW9uLHRoaXNbZnNdPXZvaWQgMCx0aGlzLl9idWZmZXJlZEJ5dGVzPTAsdGhpcy5fYnVmZmVycz1bXSx0aGlzLl9jb21wcmVzc2VkPSExLHRoaXMuX3BheWxvYWRMZW5ndGg9MCx0aGlzLl9tYXNrPXZvaWQgMCx0aGlzLl9mcmFnbWVudGVkPTAsdGhpcy5fbWFza2VkPSExLHRoaXMuX2Zpbj0hMSx0aGlzLl9vcGNvZGU9MCx0aGlzLl90b3RhbFBheWxvYWRMZW5ndGg9MCx0aGlzLl9tZXNzYWdlTGVuZ3RoPTAsdGhpcy5fZnJhZ21lbnRzPVtdLHRoaXMuX2Vycm9yZWQ9ITEsdGhpcy5fbG9vcD0hMSx0aGlzLl9zdGF0ZT1UfV93cml0ZShlLHQscyl7aWYodGhpcy5fb3Bjb2RlPT09OCYmdGhpcy5fc3RhdGU9PVQpcmV0dXJuIHMoKTt0aGlzLl9idWZmZXJlZEJ5dGVzKz1lLmxlbmd0aCx0aGlzLl9idWZmZXJzLnB1c2goZSksdGhpcy5zdGFydExvb3Aocyl9Y29uc3VtZShlKXtpZih0aGlzLl9idWZmZXJlZEJ5dGVzLT1lLGU9PT10aGlzLl9idWZmZXJzWzBdLmxlbmd0aClyZXR1cm4gdGhpcy5fYnVmZmVycy5zaGlmdCgpO2lmKGU8dGhpcy5fYnVmZmVyc1swXS5sZW5ndGgpe2xldCBzPXRoaXMuX2J1ZmZlcnNbMF07cmV0dXJuIHRoaXMuX2J1ZmZlcnNbMF09bmV3IGZlKHMuYnVmZmVyLHMuYnl0ZU9mZnNldCtlLHMubGVuZ3RoLWUpLG5ldyBmZShzLmJ1ZmZlcixzLmJ5dGVPZmZzZXQsZSl9bGV0IHQ9QnVmZmVyLmFsbG9jVW5zYWZlKGUpO2Rve2xldCBzPXRoaXMuX2J1ZmZlcnNbMF0saT10Lmxlbmd0aC1lO2U+PXMubGVuZ3RoP3Quc2V0KHRoaXMuX2J1ZmZlcnMuc2hpZnQoKSxpKToodC5zZXQobmV3IFVpbnQ4QXJyYXkocy5idWZmZXIscy5ieXRlT2Zmc2V0LGUpLGkpLHRoaXMuX2J1ZmZlcnNbMF09bmV3IGZlKHMuYnVmZmVyLHMuYnl0ZU9mZnNldCtlLHMubGVuZ3RoLWUpKSxlLT1zLmxlbmd0aH13aGlsZShlPjApO3JldHVybiB0fXN0YXJ0TG9vcChlKXt0aGlzLl9sb29wPSEwO2RvIHN3aXRjaCh0aGlzLl9zdGF0ZSl7Y2FzZSBUOnRoaXMuZ2V0SW5mbyhlKTticmVhaztjYXNlIEZ0OnRoaXMuZ2V0UGF5bG9hZExlbmd0aDE2KGUpO2JyZWFrO2Nhc2UgVXQ6dGhpcy5nZXRQYXlsb2FkTGVuZ3RoNjQoZSk7YnJlYWs7Y2FzZSBXdDp0aGlzLmdldE1hc2soKTticmVhaztjYXNlIEllOnRoaXMuZ2V0RGF0YShlKTticmVhaztjYXNlIE5lOmNhc2UgZGU6dGhpcy5fbG9vcD0hMTtyZXR1cm59d2hpbGUodGhpcy5fbG9vcCk7dGhpcy5fZXJyb3JlZHx8ZSgpfWdldEluZm8oZSl7aWYodGhpcy5fYnVmZmVyZWRCeXRlczwyKXt0aGlzLl9sb29wPSExO3JldHVybn1sZXQgdD10aGlzLmNvbnN1bWUoMik7aWYodFswXSY0OCl7bGV0IGk9dGhpcy5jcmVhdGVFcnJvcihSYW5nZUVycm9yLFwiUlNWMiBhbmQgUlNWMyBtdXN0IGJlIGNsZWFyXCIsITAsMTAwMixcIldTX0VSUl9VTkVYUEVDVEVEX1JTVl8yXzNcIik7ZShpKTtyZXR1cm59bGV0IHM9KHRbMF0mNjQpPT09NjQ7aWYocyYmIXRoaXMuX2V4dGVuc2lvbnNbTXQuZXh0ZW5zaW9uTmFtZV0pe2xldCBpPXRoaXMuY3JlYXRlRXJyb3IoUmFuZ2VFcnJvcixcIlJTVjEgbXVzdCBiZSBjbGVhclwiLCEwLDEwMDIsXCJXU19FUlJfVU5FWFBFQ1RFRF9SU1ZfMVwiKTtlKGkpO3JldHVybn1pZih0aGlzLl9maW49KHRbMF0mMTI4KT09PTEyOCx0aGlzLl9vcGNvZGU9dFswXSYxNSx0aGlzLl9wYXlsb2FkTGVuZ3RoPXRbMV0mMTI3LHRoaXMuX29wY29kZT09PTApe2lmKHMpe2xldCBpPXRoaXMuY3JlYXRlRXJyb3IoUmFuZ2VFcnJvcixcIlJTVjEgbXVzdCBiZSBjbGVhclwiLCEwLDEwMDIsXCJXU19FUlJfVU5FWFBFQ1RFRF9SU1ZfMVwiKTtlKGkpO3JldHVybn1pZighdGhpcy5fZnJhZ21lbnRlZCl7bGV0IGk9dGhpcy5jcmVhdGVFcnJvcihSYW5nZUVycm9yLFwiaW52YWxpZCBvcGNvZGUgMFwiLCEwLDEwMDIsXCJXU19FUlJfSU5WQUxJRF9PUENPREVcIik7ZShpKTtyZXR1cm59dGhpcy5fb3Bjb2RlPXRoaXMuX2ZyYWdtZW50ZWR9ZWxzZSBpZih0aGlzLl9vcGNvZGU9PT0xfHx0aGlzLl9vcGNvZGU9PT0yKXtpZih0aGlzLl9mcmFnbWVudGVkKXtsZXQgaT10aGlzLmNyZWF0ZUVycm9yKFJhbmdlRXJyb3IsYGludmFsaWQgb3Bjb2RlICR7dGhpcy5fb3Bjb2RlfWAsITAsMTAwMixcIldTX0VSUl9JTlZBTElEX09QQ09ERVwiKTtlKGkpO3JldHVybn10aGlzLl9jb21wcmVzc2VkPXN9ZWxzZSBpZih0aGlzLl9vcGNvZGU+NyYmdGhpcy5fb3Bjb2RlPDExKXtpZighdGhpcy5fZmluKXtsZXQgaT10aGlzLmNyZWF0ZUVycm9yKFJhbmdlRXJyb3IsXCJGSU4gbXVzdCBiZSBzZXRcIiwhMCwxMDAyLFwiV1NfRVJSX0VYUEVDVEVEX0ZJTlwiKTtlKGkpO3JldHVybn1pZihzKXtsZXQgaT10aGlzLmNyZWF0ZUVycm9yKFJhbmdlRXJyb3IsXCJSU1YxIG11c3QgYmUgY2xlYXJcIiwhMCwxMDAyLFwiV1NfRVJSX1VORVhQRUNURURfUlNWXzFcIik7ZShpKTtyZXR1cm59aWYodGhpcy5fcGF5bG9hZExlbmd0aD4xMjV8fHRoaXMuX29wY29kZT09PTgmJnRoaXMuX3BheWxvYWRMZW5ndGg9PT0xKXtsZXQgaT10aGlzLmNyZWF0ZUVycm9yKFJhbmdlRXJyb3IsYGludmFsaWQgcGF5bG9hZCBsZW5ndGggJHt0aGlzLl9wYXlsb2FkTGVuZ3RofWAsITAsMTAwMixcIldTX0VSUl9JTlZBTElEX0NPTlRST0xfUEFZTE9BRF9MRU5HVEhcIik7ZShpKTtyZXR1cm59fWVsc2V7bGV0IGk9dGhpcy5jcmVhdGVFcnJvcihSYW5nZUVycm9yLGBpbnZhbGlkIG9wY29kZSAke3RoaXMuX29wY29kZX1gLCEwLDEwMDIsXCJXU19FUlJfSU5WQUxJRF9PUENPREVcIik7ZShpKTtyZXR1cm59aWYoIXRoaXMuX2ZpbiYmIXRoaXMuX2ZyYWdtZW50ZWQmJih0aGlzLl9mcmFnbWVudGVkPXRoaXMuX29wY29kZSksdGhpcy5fbWFza2VkPSh0WzFdJjEyOCk9PT0xMjgsdGhpcy5faXNTZXJ2ZXIpe2lmKCF0aGlzLl9tYXNrZWQpe2xldCBpPXRoaXMuY3JlYXRlRXJyb3IoUmFuZ2VFcnJvcixcIk1BU0sgbXVzdCBiZSBzZXRcIiwhMCwxMDAyLFwiV1NfRVJSX0VYUEVDVEVEX01BU0tcIik7ZShpKTtyZXR1cm59fWVsc2UgaWYodGhpcy5fbWFza2VkKXtsZXQgaT10aGlzLmNyZWF0ZUVycm9yKFJhbmdlRXJyb3IsXCJNQVNLIG11c3QgYmUgY2xlYXJcIiwhMCwxMDAyLFwiV1NfRVJSX1VORVhQRUNURURfTUFTS1wiKTtlKGkpO3JldHVybn10aGlzLl9wYXlsb2FkTGVuZ3RoPT09MTI2P3RoaXMuX3N0YXRlPUZ0OnRoaXMuX3BheWxvYWRMZW5ndGg9PT0xMjc/dGhpcy5fc3RhdGU9VXQ6dGhpcy5oYXZlTGVuZ3RoKGUpfWdldFBheWxvYWRMZW5ndGgxNihlKXtpZih0aGlzLl9idWZmZXJlZEJ5dGVzPDIpe3RoaXMuX2xvb3A9ITE7cmV0dXJufXRoaXMuX3BheWxvYWRMZW5ndGg9dGhpcy5jb25zdW1lKDIpLnJlYWRVSW50MTZCRSgwKSx0aGlzLmhhdmVMZW5ndGgoZSl9Z2V0UGF5bG9hZExlbmd0aDY0KGUpe2lmKHRoaXMuX2J1ZmZlcmVkQnl0ZXM8OCl7dGhpcy5fbG9vcD0hMTtyZXR1cm59bGV0IHQ9dGhpcy5jb25zdW1lKDgpLHM9dC5yZWFkVUludDMyQkUoMCk7aWYocz5NYXRoLnBvdygyLDIxKS0xKXtsZXQgaT10aGlzLmNyZWF0ZUVycm9yKFJhbmdlRXJyb3IsXCJVbnN1cHBvcnRlZCBXZWJTb2NrZXQgZnJhbWU6IHBheWxvYWQgbGVuZ3RoID4gMl41MyAtIDFcIiwhMSwxMDA5LFwiV1NfRVJSX1VOU1VQUE9SVEVEX0RBVEFfUEFZTE9BRF9MRU5HVEhcIik7ZShpKTtyZXR1cm59dGhpcy5fcGF5bG9hZExlbmd0aD1zKk1hdGgucG93KDIsMzIpK3QucmVhZFVJbnQzMkJFKDQpLHRoaXMuaGF2ZUxlbmd0aChlKX1oYXZlTGVuZ3RoKGUpe2lmKHRoaXMuX3BheWxvYWRMZW5ndGgmJnRoaXMuX29wY29kZTw4JiYodGhpcy5fdG90YWxQYXlsb2FkTGVuZ3RoKz10aGlzLl9wYXlsb2FkTGVuZ3RoLHRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aD50aGlzLl9tYXhQYXlsb2FkJiZ0aGlzLl9tYXhQYXlsb2FkPjApKXtsZXQgdD10aGlzLmNyZWF0ZUVycm9yKFJhbmdlRXJyb3IsXCJNYXggcGF5bG9hZCBzaXplIGV4Y2VlZGVkXCIsITEsMTAwOSxcIldTX0VSUl9VTlNVUFBPUlRFRF9NRVNTQUdFX0xFTkdUSFwiKTtlKHQpO3JldHVybn10aGlzLl9tYXNrZWQ/dGhpcy5fc3RhdGU9V3Q6dGhpcy5fc3RhdGU9SWV9Z2V0TWFzaygpe2lmKHRoaXMuX2J1ZmZlcmVkQnl0ZXM8NCl7dGhpcy5fbG9vcD0hMTtyZXR1cm59dGhpcy5fbWFzaz10aGlzLmNvbnN1bWUoNCksdGhpcy5fc3RhdGU9SWV9Z2V0RGF0YShlKXtsZXQgdD1EdDtpZih0aGlzLl9wYXlsb2FkTGVuZ3RoKXtpZih0aGlzLl9idWZmZXJlZEJ5dGVzPHRoaXMuX3BheWxvYWRMZW5ndGgpe3RoaXMuX2xvb3A9ITE7cmV0dXJufXQ9dGhpcy5jb25zdW1lKHRoaXMuX3BheWxvYWRMZW5ndGgpLHRoaXMuX21hc2tlZCYmdGhpcy5fbWFza1swXXx0aGlzLl9tYXNrWzFdfHRoaXMuX21hc2tbMl18dGhpcy5fbWFza1szXSYmcHModCx0aGlzLl9tYXNrKX1pZih0aGlzLl9vcGNvZGU+Nyl7dGhpcy5jb250cm9sTWVzc2FnZSh0LGUpO3JldHVybn1pZih0aGlzLl9jb21wcmVzc2VkKXt0aGlzLl9zdGF0ZT1OZSx0aGlzLmRlY29tcHJlc3ModCxlKTtyZXR1cm59dC5sZW5ndGgmJih0aGlzLl9tZXNzYWdlTGVuZ3RoPXRoaXMuX3RvdGFsUGF5bG9hZExlbmd0aCx0aGlzLl9mcmFnbWVudHMucHVzaCh0KSksdGhpcy5kYXRhTWVzc2FnZShlKX1kZWNvbXByZXNzKGUsdCl7dGhpcy5fZXh0ZW5zaW9uc1tNdC5leHRlbnNpb25OYW1lXS5kZWNvbXByZXNzKGUsdGhpcy5fZmluLChpLG4pPT57aWYoaSlyZXR1cm4gdChpKTtpZihuLmxlbmd0aCl7aWYodGhpcy5fbWVzc2FnZUxlbmd0aCs9bi5sZW5ndGgsdGhpcy5fbWVzc2FnZUxlbmd0aD50aGlzLl9tYXhQYXlsb2FkJiZ0aGlzLl9tYXhQYXlsb2FkPjApe2xldCBvPXRoaXMuY3JlYXRlRXJyb3IoUmFuZ2VFcnJvcixcIk1heCBwYXlsb2FkIHNpemUgZXhjZWVkZWRcIiwhMSwxMDA5LFwiV1NfRVJSX1VOU1VQUE9SVEVEX01FU1NBR0VfTEVOR1RIXCIpO3Qobyk7cmV0dXJufXRoaXMuX2ZyYWdtZW50cy5wdXNoKG4pfXRoaXMuZGF0YU1lc3NhZ2UodCksdGhpcy5fc3RhdGU9PT1UJiZ0aGlzLnN0YXJ0TG9vcCh0KX0pfWRhdGFNZXNzYWdlKGUpe2lmKCF0aGlzLl9maW4pe3RoaXMuX3N0YXRlPVQ7cmV0dXJufWxldCB0PXRoaXMuX21lc3NhZ2VMZW5ndGgscz10aGlzLl9mcmFnbWVudHM7aWYodGhpcy5fdG90YWxQYXlsb2FkTGVuZ3RoPTAsdGhpcy5fbWVzc2FnZUxlbmd0aD0wLHRoaXMuX2ZyYWdtZW50ZWQ9MCx0aGlzLl9mcmFnbWVudHM9W10sdGhpcy5fb3Bjb2RlPT09Mil7bGV0IGk7dGhpcy5fYmluYXJ5VHlwZT09PVwibm9kZWJ1ZmZlclwiP2k9TGUocyx0KTp0aGlzLl9iaW5hcnlUeXBlPT09XCJhcnJheWJ1ZmZlclwiP2k9ZHMoTGUocyx0KSk6aT1zLHRoaXMuX2FsbG93U3luY2hyb25vdXNFdmVudHM/KHRoaXMuZW1pdChcIm1lc3NhZ2VcIixpLCEwKSx0aGlzLl9zdGF0ZT1UKToodGhpcy5fc3RhdGU9ZGUsc2V0SW1tZWRpYXRlKCgpPT57dGhpcy5lbWl0KFwibWVzc2FnZVwiLGksITApLHRoaXMuX3N0YXRlPVQsdGhpcy5zdGFydExvb3AoZSl9KSl9ZWxzZXtsZXQgaT1MZShzLHQpO2lmKCF0aGlzLl9za2lwVVRGOFZhbGlkYXRpb24mJiFBdChpKSl7bGV0IG49dGhpcy5jcmVhdGVFcnJvcihFcnJvcixcImludmFsaWQgVVRGLTggc2VxdWVuY2VcIiwhMCwxMDA3LFwiV1NfRVJSX0lOVkFMSURfVVRGOFwiKTtlKG4pO3JldHVybn10aGlzLl9zdGF0ZT09PU5lfHx0aGlzLl9hbGxvd1N5bmNocm9ub3VzRXZlbnRzPyh0aGlzLmVtaXQoXCJtZXNzYWdlXCIsaSwhMSksdGhpcy5fc3RhdGU9VCk6KHRoaXMuX3N0YXRlPWRlLHNldEltbWVkaWF0ZSgoKT0+e3RoaXMuZW1pdChcIm1lc3NhZ2VcIixpLCExKSx0aGlzLl9zdGF0ZT1ULHRoaXMuc3RhcnRMb29wKGUpfSkpfX1jb250cm9sTWVzc2FnZShlLHQpe2lmKHRoaXMuX29wY29kZT09PTgpe2lmKGUubGVuZ3RoPT09MCl0aGlzLl9sb29wPSExLHRoaXMuZW1pdChcImNvbmNsdWRlXCIsMTAwNSxEdCksdGhpcy5lbmQoKTtlbHNle2xldCBzPWUucmVhZFVJbnQxNkJFKDApO2lmKCFfcyhzKSl7bGV0IG49dGhpcy5jcmVhdGVFcnJvcihSYW5nZUVycm9yLGBpbnZhbGlkIHN0YXR1cyBjb2RlICR7c31gLCEwLDEwMDIsXCJXU19FUlJfSU5WQUxJRF9DTE9TRV9DT0RFXCIpO3Qobik7cmV0dXJufWxldCBpPW5ldyBmZShlLmJ1ZmZlcixlLmJ5dGVPZmZzZXQrMixlLmxlbmd0aC0yKTtpZighdGhpcy5fc2tpcFVURjhWYWxpZGF0aW9uJiYhQXQoaSkpe2xldCBuPXRoaXMuY3JlYXRlRXJyb3IoRXJyb3IsXCJpbnZhbGlkIFVURi04IHNlcXVlbmNlXCIsITAsMTAwNyxcIldTX0VSUl9JTlZBTElEX1VURjhcIik7dChuKTtyZXR1cm59dGhpcy5fbG9vcD0hMSx0aGlzLmVtaXQoXCJjb25jbHVkZVwiLHMsaSksdGhpcy5lbmQoKX10aGlzLl9zdGF0ZT1UO3JldHVybn10aGlzLl9hbGxvd1N5bmNocm9ub3VzRXZlbnRzPyh0aGlzLmVtaXQodGhpcy5fb3Bjb2RlPT09OT9cInBpbmdcIjpcInBvbmdcIixlKSx0aGlzLl9zdGF0ZT1UKToodGhpcy5fc3RhdGU9ZGUsc2V0SW1tZWRpYXRlKCgpPT57dGhpcy5lbWl0KHRoaXMuX29wY29kZT09PTk/XCJwaW5nXCI6XCJwb25nXCIsZSksdGhpcy5fc3RhdGU9VCx0aGlzLnN0YXJ0TG9vcCh0KX0pKX1jcmVhdGVFcnJvcihlLHQscyxpLG4pe3RoaXMuX2xvb3A9ITEsdGhpcy5fZXJyb3JlZD0hMDtsZXQgbz1uZXcgZShzP2BJbnZhbGlkIFdlYlNvY2tldCBmcmFtZTogJHt0fWA6dCk7cmV0dXJuIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKG8sdGhpcy5jcmVhdGVFcnJvciksby5jb2RlPW4sb1toc109aSxvfX07anQuZXhwb3J0cz1CZX0pO3ZhciBBZT1TKChOaSwkdCk9PntcInVzZSBzdHJpY3RcIjt2YXJ7RHVwbGV4OklpfT1yZXF1aXJlKFwic3RyZWFtXCIpLHtyYW5kb21GaWxsU3luYzptc309cmVxdWlyZShcImNyeXB0b1wiKSxxdD1LKCkse0VNUFRZX0JVRkZFUjpnc309TigpLHtpc1ZhbGlkU3RhdHVzQ29kZTp5c309USgpLHttYXNrOkp0LHRvQnVmZmVyOnF9PVkoKSxFPVN5bWJvbChcImtCeXRlTGVuZ3RoXCIpLFNzPUJ1ZmZlci5hbGxvYyg0KSxwZT04KjEwMjQsRCxKPXBlLERlPWNsYXNzIHJ7Y29uc3RydWN0b3IoZSx0LHMpe3RoaXMuX2V4dGVuc2lvbnM9dHx8e30scyYmKHRoaXMuX2dlbmVyYXRlTWFzaz1zLHRoaXMuX21hc2tCdWZmZXI9QnVmZmVyLmFsbG9jKDQpKSx0aGlzLl9zb2NrZXQ9ZSx0aGlzLl9maXJzdEZyYWdtZW50PSEwLHRoaXMuX2NvbXByZXNzPSExLHRoaXMuX2J1ZmZlcmVkQnl0ZXM9MCx0aGlzLl9kZWZsYXRpbmc9ITEsdGhpcy5fcXVldWU9W119c3RhdGljIGZyYW1lKGUsdCl7bGV0IHMsaT0hMSxuPTIsbz0hMTt0Lm1hc2smJihzPXQubWFza0J1ZmZlcnx8U3MsdC5nZW5lcmF0ZU1hc2s/dC5nZW5lcmF0ZU1hc2socyk6KEo9PT1wZSYmKEQ9PT12b2lkIDAmJihEPUJ1ZmZlci5hbGxvYyhwZSkpLG1zKEQsMCxwZSksSj0wKSxzWzBdPURbSisrXSxzWzFdPURbSisrXSxzWzJdPURbSisrXSxzWzNdPURbSisrXSksbz0oc1swXXxzWzFdfHNbMl18c1szXSk9PT0wLG49Nik7bGV0IGw7dHlwZW9mIGU9PVwic3RyaW5nXCI/KCF0Lm1hc2t8fG8pJiZ0W0VdIT09dm9pZCAwP2w9dFtFXTooZT1CdWZmZXIuZnJvbShlKSxsPWUubGVuZ3RoKToobD1lLmxlbmd0aCxpPXQubWFzayYmdC5yZWFkT25seSYmIW8pO2xldCBjPWw7bD49NjU1MzY/KG4rPTgsYz0xMjcpOmw+MTI1JiYobis9MixjPTEyNik7bGV0IGE9QnVmZmVyLmFsbG9jVW5zYWZlKGk/bCtuOm4pO3JldHVybiBhWzBdPXQuZmluP3Qub3Bjb2RlfDEyODp0Lm9wY29kZSx0LnJzdjEmJihhWzBdfD02NCksYVsxXT1jLGM9PT0xMjY/YS53cml0ZVVJbnQxNkJFKGwsMik6Yz09PTEyNyYmKGFbMl09YVszXT0wLGEud3JpdGVVSW50QkUobCw0LDYpKSx0Lm1hc2s/KGFbMV18PTEyOCxhW24tNF09c1swXSxhW24tM109c1sxXSxhW24tMl09c1syXSxhW24tMV09c1szXSxvP1thLGVdOmk/KEp0KGUscyxhLG4sbCksW2FdKTooSnQoZSxzLGUsMCxsKSxbYSxlXSkpOlthLGVdfWNsb3NlKGUsdCxzLGkpe2xldCBuO2lmKGU9PT12b2lkIDApbj1ncztlbHNle2lmKHR5cGVvZiBlIT1cIm51bWJlclwifHwheXMoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSB2YWxpZCBlcnJvciBjb2RlIG51bWJlclwiKTtpZih0PT09dm9pZCAwfHwhdC5sZW5ndGgpbj1CdWZmZXIuYWxsb2NVbnNhZmUoMiksbi53cml0ZVVJbnQxNkJFKGUsMCk7ZWxzZXtsZXQgbD1CdWZmZXIuYnl0ZUxlbmd0aCh0KTtpZihsPjEyMyl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBtZXNzYWdlIG11c3Qgbm90IGJlIGdyZWF0ZXIgdGhhbiAxMjMgYnl0ZXNcIik7bj1CdWZmZXIuYWxsb2NVbnNhZmUoMitsKSxuLndyaXRlVUludDE2QkUoZSwwKSx0eXBlb2YgdD09XCJzdHJpbmdcIj9uLndyaXRlKHQsMik6bi5zZXQodCwyKX19bGV0IG89e1tFXTpuLmxlbmd0aCxmaW46ITAsZ2VuZXJhdGVNYXNrOnRoaXMuX2dlbmVyYXRlTWFzayxtYXNrOnMsbWFza0J1ZmZlcjp0aGlzLl9tYXNrQnVmZmVyLG9wY29kZTo4LHJlYWRPbmx5OiExLHJzdjE6ITF9O3RoaXMuX2RlZmxhdGluZz90aGlzLmVucXVldWUoW3RoaXMuZGlzcGF0Y2gsbiwhMSxvLGldKTp0aGlzLnNlbmRGcmFtZShyLmZyYW1lKG4sbyksaSl9cGluZyhlLHQscyl7bGV0IGksbjtpZih0eXBlb2YgZT09XCJzdHJpbmdcIj8oaT1CdWZmZXIuYnl0ZUxlbmd0aChlKSxuPSExKTooZT1xKGUpLGk9ZS5sZW5ndGgsbj1xLnJlYWRPbmx5KSxpPjEyNSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBkYXRhIHNpemUgbXVzdCBub3QgYmUgZ3JlYXRlciB0aGFuIDEyNSBieXRlc1wiKTtsZXQgbz17W0VdOmksZmluOiEwLGdlbmVyYXRlTWFzazp0aGlzLl9nZW5lcmF0ZU1hc2ssbWFzazp0LG1hc2tCdWZmZXI6dGhpcy5fbWFza0J1ZmZlcixvcGNvZGU6OSxyZWFkT25seTpuLHJzdjE6ITF9O3RoaXMuX2RlZmxhdGluZz90aGlzLmVucXVldWUoW3RoaXMuZGlzcGF0Y2gsZSwhMSxvLHNdKTp0aGlzLnNlbmRGcmFtZShyLmZyYW1lKGUsbykscyl9cG9uZyhlLHQscyl7bGV0IGksbjtpZih0eXBlb2YgZT09XCJzdHJpbmdcIj8oaT1CdWZmZXIuYnl0ZUxlbmd0aChlKSxuPSExKTooZT1xKGUpLGk9ZS5sZW5ndGgsbj1xLnJlYWRPbmx5KSxpPjEyNSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBkYXRhIHNpemUgbXVzdCBub3QgYmUgZ3JlYXRlciB0aGFuIDEyNSBieXRlc1wiKTtsZXQgbz17W0VdOmksZmluOiEwLGdlbmVyYXRlTWFzazp0aGlzLl9nZW5lcmF0ZU1hc2ssbWFzazp0LG1hc2tCdWZmZXI6dGhpcy5fbWFza0J1ZmZlcixvcGNvZGU6MTAscmVhZE9ubHk6bixyc3YxOiExfTt0aGlzLl9kZWZsYXRpbmc/dGhpcy5lbnF1ZXVlKFt0aGlzLmRpc3BhdGNoLGUsITEsbyxzXSk6dGhpcy5zZW5kRnJhbWUoci5mcmFtZShlLG8pLHMpfXNlbmQoZSx0LHMpe2xldCBpPXRoaXMuX2V4dGVuc2lvbnNbcXQuZXh0ZW5zaW9uTmFtZV0sbj10LmJpbmFyeT8yOjEsbz10LmNvbXByZXNzLGwsYztpZih0eXBlb2YgZT09XCJzdHJpbmdcIj8obD1CdWZmZXIuYnl0ZUxlbmd0aChlKSxjPSExKTooZT1xKGUpLGw9ZS5sZW5ndGgsYz1xLnJlYWRPbmx5KSx0aGlzLl9maXJzdEZyYWdtZW50Pyh0aGlzLl9maXJzdEZyYWdtZW50PSExLG8mJmkmJmkucGFyYW1zW2kuX2lzU2VydmVyP1wic2VydmVyX25vX2NvbnRleHRfdGFrZW92ZXJcIjpcImNsaWVudF9ub19jb250ZXh0X3Rha2VvdmVyXCJdJiYobz1sPj1pLl90aHJlc2hvbGQpLHRoaXMuX2NvbXByZXNzPW8pOihvPSExLG49MCksdC5maW4mJih0aGlzLl9maXJzdEZyYWdtZW50PSEwKSxpKXtsZXQgYT17W0VdOmwsZmluOnQuZmluLGdlbmVyYXRlTWFzazp0aGlzLl9nZW5lcmF0ZU1hc2ssbWFzazp0Lm1hc2ssbWFza0J1ZmZlcjp0aGlzLl9tYXNrQnVmZmVyLG9wY29kZTpuLHJlYWRPbmx5OmMscnN2MTpvfTt0aGlzLl9kZWZsYXRpbmc/dGhpcy5lbnF1ZXVlKFt0aGlzLmRpc3BhdGNoLGUsdGhpcy5fY29tcHJlc3MsYSxzXSk6dGhpcy5kaXNwYXRjaChlLHRoaXMuX2NvbXByZXNzLGEscyl9ZWxzZSB0aGlzLnNlbmRGcmFtZShyLmZyYW1lKGUse1tFXTpsLGZpbjp0LmZpbixnZW5lcmF0ZU1hc2s6dGhpcy5fZ2VuZXJhdGVNYXNrLG1hc2s6dC5tYXNrLG1hc2tCdWZmZXI6dGhpcy5fbWFza0J1ZmZlcixvcGNvZGU6bixyZWFkT25seTpjLHJzdjE6ITF9KSxzKX1kaXNwYXRjaChlLHQscyxpKXtpZighdCl7dGhpcy5zZW5kRnJhbWUoci5mcmFtZShlLHMpLGkpO3JldHVybn1sZXQgbj10aGlzLl9leHRlbnNpb25zW3F0LmV4dGVuc2lvbk5hbWVdO3RoaXMuX2J1ZmZlcmVkQnl0ZXMrPXNbRV0sdGhpcy5fZGVmbGF0aW5nPSEwLG4uY29tcHJlc3MoZSxzLmZpbiwobyxsKT0+e2lmKHRoaXMuX3NvY2tldC5kZXN0cm95ZWQpe2xldCBjPW5ldyBFcnJvcihcIlRoZSBzb2NrZXQgd2FzIGNsb3NlZCB3aGlsZSBkYXRhIHdhcyBiZWluZyBjb21wcmVzc2VkXCIpO3R5cGVvZiBpPT1cImZ1bmN0aW9uXCImJmkoYyk7Zm9yKGxldCBhPTA7YTx0aGlzLl9xdWV1ZS5sZW5ndGg7YSsrKXtsZXQgdT10aGlzLl9xdWV1ZVthXSxoPXVbdS5sZW5ndGgtMV07dHlwZW9mIGg9PVwiZnVuY3Rpb25cIiYmaChjKX1yZXR1cm59dGhpcy5fYnVmZmVyZWRCeXRlcy09c1tFXSx0aGlzLl9kZWZsYXRpbmc9ITEscy5yZWFkT25seT0hMSx0aGlzLnNlbmRGcmFtZShyLmZyYW1lKGwscyksaSksdGhpcy5kZXF1ZXVlKCl9KX1kZXF1ZXVlKCl7Zm9yKDshdGhpcy5fZGVmbGF0aW5nJiZ0aGlzLl9xdWV1ZS5sZW5ndGg7KXtsZXQgZT10aGlzLl9xdWV1ZS5zaGlmdCgpO3RoaXMuX2J1ZmZlcmVkQnl0ZXMtPWVbM11bRV0sUmVmbGVjdC5hcHBseShlWzBdLHRoaXMsZS5zbGljZSgxKSl9fWVucXVldWUoZSl7dGhpcy5fYnVmZmVyZWRCeXRlcys9ZVszXVtFXSx0aGlzLl9xdWV1ZS5wdXNoKGUpfXNlbmRGcmFtZShlLHQpe2UubGVuZ3RoPT09Mj8odGhpcy5fc29ja2V0LmNvcmsoKSx0aGlzLl9zb2NrZXQud3JpdGUoZVswXSksdGhpcy5fc29ja2V0LndyaXRlKGVbMV0sdCksdGhpcy5fc29ja2V0LnVuY29yaygpKTp0aGlzLl9zb2NrZXQud3JpdGUoZVswXSx0KX19OyR0LmV4cG9ydHM9RGV9KTt2YXIgUXQ9UygoQmksS3QpPT57XCJ1c2Ugc3RyaWN0XCI7dmFye2tGb3JPbkV2ZW50QXR0cmlidXRlOmVlLGtMaXN0ZW5lcjpGZX09TigpLEd0PVN5bWJvbChcImtDb2RlXCIpLFZ0PVN5bWJvbChcImtEYXRhXCIpLHp0PVN5bWJvbChcImtFcnJvclwiKSxIdD1TeW1ib2woXCJrTWVzc2FnZVwiKSxZdD1TeW1ib2woXCJrUmVhc29uXCIpLCQ9U3ltYm9sKFwia1RhcmdldFwiKSxYdD1TeW1ib2woXCJrVHlwZVwiKSxadD1TeW1ib2woXCJrV2FzQ2xlYW5cIiksUj1jbGFzc3tjb25zdHJ1Y3RvcihlKXt0aGlzWyRdPW51bGwsdGhpc1tYdF09ZX1nZXQgdGFyZ2V0KCl7cmV0dXJuIHRoaXNbJF19Z2V0IHR5cGUoKXtyZXR1cm4gdGhpc1tYdF19fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoUi5wcm90b3R5cGUsXCJ0YXJnZXRcIix7ZW51bWVyYWJsZTohMH0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShSLnByb3RvdHlwZSxcInR5cGVcIix7ZW51bWVyYWJsZTohMH0pO3ZhciBBPWNsYXNzIGV4dGVuZHMgUntjb25zdHJ1Y3RvcihlLHQ9e30pe3N1cGVyKGUpLHRoaXNbR3RdPXQuY29kZT09PXZvaWQgMD8wOnQuY29kZSx0aGlzW1l0XT10LnJlYXNvbj09PXZvaWQgMD9cIlwiOnQucmVhc29uLHRoaXNbWnRdPXQud2FzQ2xlYW49PT12b2lkIDA/ITE6dC53YXNDbGVhbn1nZXQgY29kZSgpe3JldHVybiB0aGlzW0d0XX1nZXQgcmVhc29uKCl7cmV0dXJuIHRoaXNbWXRdfWdldCB3YXNDbGVhbigpe3JldHVybiB0aGlzW1p0XX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShBLnByb3RvdHlwZSxcImNvZGVcIix7ZW51bWVyYWJsZTohMH0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShBLnByb3RvdHlwZSxcInJlYXNvblwiLHtlbnVtZXJhYmxlOiEwfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KEEucHJvdG90eXBlLFwid2FzQ2xlYW5cIix7ZW51bWVyYWJsZTohMH0pO3ZhciBHPWNsYXNzIGV4dGVuZHMgUntjb25zdHJ1Y3RvcihlLHQ9e30pe3N1cGVyKGUpLHRoaXNbenRdPXQuZXJyb3I9PT12b2lkIDA/bnVsbDp0LmVycm9yLHRoaXNbSHRdPXQubWVzc2FnZT09PXZvaWQgMD9cIlwiOnQubWVzc2FnZX1nZXQgZXJyb3IoKXtyZXR1cm4gdGhpc1t6dF19Z2V0IG1lc3NhZ2UoKXtyZXR1cm4gdGhpc1tIdF19fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoRy5wcm90b3R5cGUsXCJlcnJvclwiLHtlbnVtZXJhYmxlOiEwfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KEcucHJvdG90eXBlLFwibWVzc2FnZVwiLHtlbnVtZXJhYmxlOiEwfSk7dmFyIHRlPWNsYXNzIGV4dGVuZHMgUntjb25zdHJ1Y3RvcihlLHQ9e30pe3N1cGVyKGUpLHRoaXNbVnRdPXQuZGF0YT09PXZvaWQgMD9udWxsOnQuZGF0YX1nZXQgZGF0YSgpe3JldHVybiB0aGlzW1Z0XX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0ZS5wcm90b3R5cGUsXCJkYXRhXCIse2VudW1lcmFibGU6ITB9KTt2YXIgeHM9e2FkZEV2ZW50TGlzdGVuZXIocixlLHQ9e30pe2ZvcihsZXQgaSBvZiB0aGlzLmxpc3RlbmVycyhyKSlpZighdFtlZV0mJmlbRmVdPT09ZSYmIWlbZWVdKXJldHVybjtsZXQgcztpZihyPT09XCJtZXNzYWdlXCIpcz1mdW5jdGlvbihuLG8pe2xldCBsPW5ldyB0ZShcIm1lc3NhZ2VcIix7ZGF0YTpvP246bi50b1N0cmluZygpfSk7bFskXT10aGlzLF9lKGUsdGhpcyxsKX07ZWxzZSBpZihyPT09XCJjbG9zZVwiKXM9ZnVuY3Rpb24obixvKXtsZXQgbD1uZXcgQShcImNsb3NlXCIse2NvZGU6bixyZWFzb246by50b1N0cmluZygpLHdhc0NsZWFuOnRoaXMuX2Nsb3NlRnJhbWVSZWNlaXZlZCYmdGhpcy5fY2xvc2VGcmFtZVNlbnR9KTtsWyRdPXRoaXMsX2UoZSx0aGlzLGwpfTtlbHNlIGlmKHI9PT1cImVycm9yXCIpcz1mdW5jdGlvbihuKXtsZXQgbz1uZXcgRyhcImVycm9yXCIse2Vycm9yOm4sbWVzc2FnZTpuLm1lc3NhZ2V9KTtvWyRdPXRoaXMsX2UoZSx0aGlzLG8pfTtlbHNlIGlmKHI9PT1cIm9wZW5cIilzPWZ1bmN0aW9uKCl7bGV0IG49bmV3IFIoXCJvcGVuXCIpO25bJF09dGhpcyxfZShlLHRoaXMsbil9O2Vsc2UgcmV0dXJuO3NbZWVdPSEhdFtlZV0sc1tGZV09ZSx0Lm9uY2U/dGhpcy5vbmNlKHIscyk6dGhpcy5vbihyLHMpfSxyZW1vdmVFdmVudExpc3RlbmVyKHIsZSl7Zm9yKGxldCB0IG9mIHRoaXMubGlzdGVuZXJzKHIpKWlmKHRbRmVdPT09ZSYmIXRbZWVdKXt0aGlzLnJlbW92ZUxpc3RlbmVyKHIsdCk7YnJlYWt9fX07S3QuZXhwb3J0cz17Q2xvc2VFdmVudDpBLEVycm9yRXZlbnQ6RyxFdmVudDpSLEV2ZW50VGFyZ2V0OnhzLE1lc3NhZ2VFdmVudDp0ZX07ZnVuY3Rpb24gX2UocixlLHQpe3R5cGVvZiByPT1cIm9iamVjdFwiJiZyLmhhbmRsZUV2ZW50P3IuaGFuZGxlRXZlbnQuY2FsbChyLHQpOnIuY2FsbChlLHQpfX0pO3ZhciBVZT1TKChNaSxlcik9PntcInVzZSBzdHJpY3RcIjt2YXJ7dG9rZW5DaGFyczpyZX09USgpO2Z1bmN0aW9uIGIocixlLHQpe3JbZV09PT12b2lkIDA/cltlXT1bdF06cltlXS5wdXNoKHQpfWZ1bmN0aW9uIHZzKHIpe2xldCBlPU9iamVjdC5jcmVhdGUobnVsbCksdD1PYmplY3QuY3JlYXRlKG51bGwpLHM9ITEsaT0hMSxuPSExLG8sbCxjPS0xLGE9LTEsdT0tMSxoPTA7Zm9yKDtoPHIubGVuZ3RoO2grKylpZihhPXIuY2hhckNvZGVBdChoKSxvPT09dm9pZCAwKWlmKHU9PT0tMSYmcmVbYV09PT0xKWM9PT0tMSYmKGM9aCk7ZWxzZSBpZihoIT09MCYmKGE9PT0zMnx8YT09PTkpKXU9PT0tMSYmYyE9PS0xJiYodT1oKTtlbHNlIGlmKGE9PT01OXx8YT09PTQ0KXtpZihjPT09LTEpdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2h9YCk7dT09PS0xJiYodT1oKTtsZXQgXz1yLnNsaWNlKGMsdSk7YT09PTQ0PyhiKGUsXyx0KSx0PU9iamVjdC5jcmVhdGUobnVsbCkpOm89XyxjPXU9LTF9ZWxzZSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aH1gKTtlbHNlIGlmKGw9PT12b2lkIDApaWYodT09PS0xJiZyZVthXT09PTEpYz09PS0xJiYoYz1oKTtlbHNlIGlmKGE9PT0zMnx8YT09PTkpdT09PS0xJiZjIT09LTEmJih1PWgpO2Vsc2UgaWYoYT09PTU5fHxhPT09NDQpe2lmKGM9PT0tMSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aH1gKTt1PT09LTEmJih1PWgpLGIodCxyLnNsaWNlKGMsdSksITApLGE9PT00NCYmKGIoZSxvLHQpLHQ9T2JqZWN0LmNyZWF0ZShudWxsKSxvPXZvaWQgMCksYz11PS0xfWVsc2UgaWYoYT09PTYxJiZjIT09LTEmJnU9PT0tMSlsPXIuc2xpY2UoYyxoKSxjPXU9LTE7ZWxzZSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aH1gKTtlbHNlIGlmKGkpe2lmKHJlW2FdIT09MSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aH1gKTtjPT09LTE/Yz1oOnN8fChzPSEwKSxpPSExfWVsc2UgaWYobilpZihyZVthXT09PTEpYz09PS0xJiYoYz1oKTtlbHNlIGlmKGE9PT0zNCYmYyE9PS0xKW49ITEsdT1oO2Vsc2UgaWYoYT09PTkyKWk9ITA7ZWxzZSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIGF0IGluZGV4ICR7aH1gKTtlbHNlIGlmKGE9PT0zNCYmci5jaGFyQ29kZUF0KGgtMSk9PT02MSluPSEwO2Vsc2UgaWYodT09PS0xJiZyZVthXT09PTEpYz09PS0xJiYoYz1oKTtlbHNlIGlmKGMhPT0tMSYmKGE9PT0zMnx8YT09PTkpKXU9PT0tMSYmKHU9aCk7ZWxzZSBpZihhPT09NTl8fGE9PT00NCl7aWYoYz09PS0xKXRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtofWApO3U9PT0tMSYmKHU9aCk7bGV0IF89ci5zbGljZShjLHUpO3MmJihfPV8ucmVwbGFjZSgvXFxcXC9nLFwiXCIpLHM9ITEpLGIodCxsLF8pLGE9PT00NCYmKGIoZSxvLHQpLHQ9T2JqZWN0LmNyZWF0ZShudWxsKSxvPXZvaWQgMCksbD12b2lkIDAsYz11PS0xfWVsc2UgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2h9YCk7aWYoYz09PS0xfHxufHxhPT09MzJ8fGE9PT05KXRocm93IG5ldyBTeW50YXhFcnJvcihcIlVuZXhwZWN0ZWQgZW5kIG9mIGlucHV0XCIpO3U9PT0tMSYmKHU9aCk7bGV0IGQ9ci5zbGljZShjLHUpO3JldHVybiBvPT09dm9pZCAwP2IoZSxkLHQpOihsPT09dm9pZCAwP2IodCxkLCEwKTpzP2IodCxsLGQucmVwbGFjZSgvXFxcXC9nLFwiXCIpKTpiKHQsbCxkKSxiKGUsbyx0KSksZX1mdW5jdGlvbiBUcyhyKXtyZXR1cm4gT2JqZWN0LmtleXMocikubWFwKGU9PntsZXQgdD1yW2VdO3JldHVybiBBcnJheS5pc0FycmF5KHQpfHwodD1bdF0pLHQubWFwKHM9PltlXS5jb25jYXQoT2JqZWN0LmtleXMocykubWFwKGk9PntsZXQgbj1zW2ldO3JldHVybiBBcnJheS5pc0FycmF5KG4pfHwobj1bbl0pLG4ubWFwKG89Pm89PT0hMD9pOmAke2l9PSR7b31gKS5qb2luKFwiOyBcIil9KSkuam9pbihcIjsgXCIpKS5qb2luKFwiLCBcIil9KS5qb2luKFwiLCBcIil9ZXIuZXhwb3J0cz17Zm9ybWF0OlRzLHBhcnNlOnZzfX0pO3ZhciAkZT1TKChGaSxocik9PntcInVzZSBzdHJpY3RcIjt2YXIgRXM9cmVxdWlyZShcImV2ZW50c1wiKSx3cz1yZXF1aXJlKFwiaHR0cHNcIiksYnM9cmVxdWlyZShcImh0dHBcIiksc3I9cmVxdWlyZShcIm5ldFwiKSxQcz1yZXF1aXJlKFwidGxzXCIpLHtyYW5kb21CeXRlczpPcyxjcmVhdGVIYXNoOkNzfT1yZXF1aXJlKFwiY3J5cHRvXCIpLHtEdXBsZXg6RGksUmVhZGFibGU6QWl9PXJlcXVpcmUoXCJzdHJlYW1cIikse1VSTDpXZX09cmVxdWlyZShcInVybFwiKSxNPUsoKSxScz1NZSgpLGtzPUFlKCkse0JJTkFSWV9UWVBFUzp0cixFTVBUWV9CVUZGRVI6bWUsR1VJRDpMcyxrRm9yT25FdmVudEF0dHJpYnV0ZTpqZSxrTGlzdGVuZXI6SXMsa1N0YXR1c0NvZGU6TnMsa1dlYlNvY2tldDp4LE5PT1A6aXJ9PU4oKSx7RXZlbnRUYXJnZXQ6e2FkZEV2ZW50TGlzdGVuZXI6QnMscmVtb3ZlRXZlbnRMaXN0ZW5lcjpNc319PVF0KCkse2Zvcm1hdDpEcyxwYXJzZTpBc309VWUoKSx7dG9CdWZmZXI6RnN9PVkoKSxVcz0zMCoxZTMsbnI9U3ltYm9sKFwia0Fib3J0ZWRcIikscWU9WzgsMTNdLGs9W1wiQ09OTkVDVElOR1wiLFwiT1BFTlwiLFwiQ0xPU0lOR1wiLFwiQ0xPU0VEXCJdLFdzPS9eWyEjJCUmJyorXFwtLjAtOUEtWl5fYHxhLXp+XSskLyxtPWNsYXNzIHIgZXh0ZW5kcyBFc3tjb25zdHJ1Y3RvcihlLHQscyl7c3VwZXIoKSx0aGlzLl9iaW5hcnlUeXBlPXRyWzBdLHRoaXMuX2Nsb3NlQ29kZT0xMDA2LHRoaXMuX2Nsb3NlRnJhbWVSZWNlaXZlZD0hMSx0aGlzLl9jbG9zZUZyYW1lU2VudD0hMSx0aGlzLl9jbG9zZU1lc3NhZ2U9bWUsdGhpcy5fY2xvc2VUaW1lcj1udWxsLHRoaXMuX2V4dGVuc2lvbnM9e30sdGhpcy5fcGF1c2VkPSExLHRoaXMuX3Byb3RvY29sPVwiXCIsdGhpcy5fcmVhZHlTdGF0ZT1yLkNPTk5FQ1RJTkcsdGhpcy5fcmVjZWl2ZXI9bnVsbCx0aGlzLl9zZW5kZXI9bnVsbCx0aGlzLl9zb2NrZXQ9bnVsbCxlIT09bnVsbD8odGhpcy5fYnVmZmVyZWRBbW91bnQ9MCx0aGlzLl9pc1NlcnZlcj0hMSx0aGlzLl9yZWRpcmVjdHM9MCx0PT09dm9pZCAwP3Q9W106QXJyYXkuaXNBcnJheSh0KXx8KHR5cGVvZiB0PT1cIm9iamVjdFwiJiZ0IT09bnVsbD8ocz10LHQ9W10pOnQ9W3RdKSxvcih0aGlzLGUsdCxzKSk6KHRoaXMuX2F1dG9Qb25nPXMuYXV0b1BvbmcsdGhpcy5faXNTZXJ2ZXI9ITApfWdldCBiaW5hcnlUeXBlKCl7cmV0dXJuIHRoaXMuX2JpbmFyeVR5cGV9c2V0IGJpbmFyeVR5cGUoZSl7dHIuaW5jbHVkZXMoZSkmJih0aGlzLl9iaW5hcnlUeXBlPWUsdGhpcy5fcmVjZWl2ZXImJih0aGlzLl9yZWNlaXZlci5fYmluYXJ5VHlwZT1lKSl9Z2V0IGJ1ZmZlcmVkQW1vdW50KCl7cmV0dXJuIHRoaXMuX3NvY2tldD90aGlzLl9zb2NrZXQuX3dyaXRhYmxlU3RhdGUubGVuZ3RoK3RoaXMuX3NlbmRlci5fYnVmZmVyZWRCeXRlczp0aGlzLl9idWZmZXJlZEFtb3VudH1nZXQgZXh0ZW5zaW9ucygpe3JldHVybiBPYmplY3Qua2V5cyh0aGlzLl9leHRlbnNpb25zKS5qb2luKCl9Z2V0IGlzUGF1c2VkKCl7cmV0dXJuIHRoaXMuX3BhdXNlZH1nZXQgb25jbG9zZSgpe3JldHVybiBudWxsfWdldCBvbmVycm9yKCl7cmV0dXJuIG51bGx9Z2V0IG9ub3Blbigpe3JldHVybiBudWxsfWdldCBvbm1lc3NhZ2UoKXtyZXR1cm4gbnVsbH1nZXQgcHJvdG9jb2woKXtyZXR1cm4gdGhpcy5fcHJvdG9jb2x9Z2V0IHJlYWR5U3RhdGUoKXtyZXR1cm4gdGhpcy5fcmVhZHlTdGF0ZX1nZXQgdXJsKCl7cmV0dXJuIHRoaXMuX3VybH1zZXRTb2NrZXQoZSx0LHMpe2xldCBpPW5ldyBScyh7YWxsb3dTeW5jaHJvbm91c0V2ZW50czpzLmFsbG93U3luY2hyb25vdXNFdmVudHMsYmluYXJ5VHlwZTp0aGlzLmJpbmFyeVR5cGUsZXh0ZW5zaW9uczp0aGlzLl9leHRlbnNpb25zLGlzU2VydmVyOnRoaXMuX2lzU2VydmVyLG1heFBheWxvYWQ6cy5tYXhQYXlsb2FkLHNraXBVVEY4VmFsaWRhdGlvbjpzLnNraXBVVEY4VmFsaWRhdGlvbn0pO3RoaXMuX3NlbmRlcj1uZXcga3MoZSx0aGlzLl9leHRlbnNpb25zLHMuZ2VuZXJhdGVNYXNrKSx0aGlzLl9yZWNlaXZlcj1pLHRoaXMuX3NvY2tldD1lLGlbeF09dGhpcyxlW3hdPXRoaXMsaS5vbihcImNvbmNsdWRlXCIsSnMpLGkub24oXCJkcmFpblwiLCRzKSxpLm9uKFwiZXJyb3JcIixHcyksaS5vbihcIm1lc3NhZ2VcIixWcyksaS5vbihcInBpbmdcIix6cyksaS5vbihcInBvbmdcIixIcyksZS5zZXRUaW1lb3V0JiZlLnNldFRpbWVvdXQoMCksZS5zZXROb0RlbGF5JiZlLnNldE5vRGVsYXkoKSx0Lmxlbmd0aD4wJiZlLnVuc2hpZnQodCksZS5vbihcImNsb3NlXCIsbHIpLGUub24oXCJkYXRhXCIseWUpLGUub24oXCJlbmRcIixjciksZS5vbihcImVycm9yXCIsdXIpLHRoaXMuX3JlYWR5U3RhdGU9ci5PUEVOLHRoaXMuZW1pdChcIm9wZW5cIil9ZW1pdENsb3NlKCl7aWYoIXRoaXMuX3NvY2tldCl7dGhpcy5fcmVhZHlTdGF0ZT1yLkNMT1NFRCx0aGlzLmVtaXQoXCJjbG9zZVwiLHRoaXMuX2Nsb3NlQ29kZSx0aGlzLl9jbG9zZU1lc3NhZ2UpO3JldHVybn10aGlzLl9leHRlbnNpb25zW00uZXh0ZW5zaW9uTmFtZV0mJnRoaXMuX2V4dGVuc2lvbnNbTS5leHRlbnNpb25OYW1lXS5jbGVhbnVwKCksdGhpcy5fcmVjZWl2ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCksdGhpcy5fcmVhZHlTdGF0ZT1yLkNMT1NFRCx0aGlzLmVtaXQoXCJjbG9zZVwiLHRoaXMuX2Nsb3NlQ29kZSx0aGlzLl9jbG9zZU1lc3NhZ2UpfWNsb3NlKGUsdCl7aWYodGhpcy5yZWFkeVN0YXRlIT09ci5DTE9TRUQpe2lmKHRoaXMucmVhZHlTdGF0ZT09PXIuQ09OTkVDVElORyl7dih0aGlzLHRoaXMuX3JlcSxcIldlYlNvY2tldCB3YXMgY2xvc2VkIGJlZm9yZSB0aGUgY29ubmVjdGlvbiB3YXMgZXN0YWJsaXNoZWRcIik7cmV0dXJufWlmKHRoaXMucmVhZHlTdGF0ZT09PXIuQ0xPU0lORyl7dGhpcy5fY2xvc2VGcmFtZVNlbnQmJih0aGlzLl9jbG9zZUZyYW1lUmVjZWl2ZWR8fHRoaXMuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCkmJnRoaXMuX3NvY2tldC5lbmQoKTtyZXR1cm59dGhpcy5fcmVhZHlTdGF0ZT1yLkNMT1NJTkcsdGhpcy5fc2VuZGVyLmNsb3NlKGUsdCwhdGhpcy5faXNTZXJ2ZXIscz0+e3N8fCh0aGlzLl9jbG9zZUZyYW1lU2VudD0hMCwodGhpcy5fY2xvc2VGcmFtZVJlY2VpdmVkfHx0aGlzLl9yZWNlaXZlci5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQpJiZ0aGlzLl9zb2NrZXQuZW5kKCkpfSksdGhpcy5fY2xvc2VUaW1lcj1zZXRUaW1lb3V0KHRoaXMuX3NvY2tldC5kZXN0cm95LmJpbmQodGhpcy5fc29ja2V0KSxVcyl9fXBhdXNlKCl7dGhpcy5yZWFkeVN0YXRlPT09ci5DT05ORUNUSU5HfHx0aGlzLnJlYWR5U3RhdGU9PT1yLkNMT1NFRHx8KHRoaXMuX3BhdXNlZD0hMCx0aGlzLl9zb2NrZXQucGF1c2UoKSl9cGluZyhlLHQscyl7aWYodGhpcy5yZWFkeVN0YXRlPT09ci5DT05ORUNUSU5HKXRocm93IG5ldyBFcnJvcihcIldlYlNvY2tldCBpcyBub3Qgb3BlbjogcmVhZHlTdGF0ZSAwIChDT05ORUNUSU5HKVwiKTtpZih0eXBlb2YgZT09XCJmdW5jdGlvblwiPyhzPWUsZT10PXZvaWQgMCk6dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIiYmKHM9dCx0PXZvaWQgMCksdHlwZW9mIGU9PVwibnVtYmVyXCImJihlPWUudG9TdHJpbmcoKSksdGhpcy5yZWFkeVN0YXRlIT09ci5PUEVOKXtKZSh0aGlzLGUscyk7cmV0dXJufXQ9PT12b2lkIDAmJih0PSF0aGlzLl9pc1NlcnZlciksdGhpcy5fc2VuZGVyLnBpbmcoZXx8bWUsdCxzKX1wb25nKGUsdCxzKXtpZih0aGlzLnJlYWR5U3RhdGU9PT1yLkNPTk5FQ1RJTkcpdGhyb3cgbmV3IEVycm9yKFwiV2ViU29ja2V0IGlzIG5vdCBvcGVuOiByZWFkeVN0YXRlIDAgKENPTk5FQ1RJTkcpXCIpO2lmKHR5cGVvZiBlPT1cImZ1bmN0aW9uXCI/KHM9ZSxlPXQ9dm9pZCAwKTp0eXBlb2YgdD09XCJmdW5jdGlvblwiJiYocz10LHQ9dm9pZCAwKSx0eXBlb2YgZT09XCJudW1iZXJcIiYmKGU9ZS50b1N0cmluZygpKSx0aGlzLnJlYWR5U3RhdGUhPT1yLk9QRU4pe0plKHRoaXMsZSxzKTtyZXR1cm59dD09PXZvaWQgMCYmKHQ9IXRoaXMuX2lzU2VydmVyKSx0aGlzLl9zZW5kZXIucG9uZyhlfHxtZSx0LHMpfXJlc3VtZSgpe3RoaXMucmVhZHlTdGF0ZT09PXIuQ09OTkVDVElOR3x8dGhpcy5yZWFkeVN0YXRlPT09ci5DTE9TRUR8fCh0aGlzLl9wYXVzZWQ9ITEsdGhpcy5fcmVjZWl2ZXIuX3dyaXRhYmxlU3RhdGUubmVlZERyYWlufHx0aGlzLl9zb2NrZXQucmVzdW1lKCkpfXNlbmQoZSx0LHMpe2lmKHRoaXMucmVhZHlTdGF0ZT09PXIuQ09OTkVDVElORyl0aHJvdyBuZXcgRXJyb3IoXCJXZWJTb2NrZXQgaXMgbm90IG9wZW46IHJlYWR5U3RhdGUgMCAoQ09OTkVDVElORylcIik7aWYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cIiYmKHM9dCx0PXt9KSx0eXBlb2YgZT09XCJudW1iZXJcIiYmKGU9ZS50b1N0cmluZygpKSx0aGlzLnJlYWR5U3RhdGUhPT1yLk9QRU4pe0plKHRoaXMsZSxzKTtyZXR1cm59bGV0IGk9e2JpbmFyeTp0eXBlb2YgZSE9XCJzdHJpbmdcIixtYXNrOiF0aGlzLl9pc1NlcnZlcixjb21wcmVzczohMCxmaW46ITAsLi4udH07dGhpcy5fZXh0ZW5zaW9uc1tNLmV4dGVuc2lvbk5hbWVdfHwoaS5jb21wcmVzcz0hMSksdGhpcy5fc2VuZGVyLnNlbmQoZXx8bWUsaSxzKX10ZXJtaW5hdGUoKXtpZih0aGlzLnJlYWR5U3RhdGUhPT1yLkNMT1NFRCl7aWYodGhpcy5yZWFkeVN0YXRlPT09ci5DT05ORUNUSU5HKXt2KHRoaXMsdGhpcy5fcmVxLFwiV2ViU29ja2V0IHdhcyBjbG9zZWQgYmVmb3JlIHRoZSBjb25uZWN0aW9uIHdhcyBlc3RhYmxpc2hlZFwiKTtyZXR1cm59dGhpcy5fc29ja2V0JiYodGhpcy5fcmVhZHlTdGF0ZT1yLkNMT1NJTkcsdGhpcy5fc29ja2V0LmRlc3Ryb3koKSl9fX07T2JqZWN0LmRlZmluZVByb3BlcnR5KG0sXCJDT05ORUNUSU5HXCIse2VudW1lcmFibGU6ITAsdmFsdWU6ay5pbmRleE9mKFwiQ09OTkVDVElOR1wiKX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShtLnByb3RvdHlwZSxcIkNPTk5FQ1RJTkdcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTprLmluZGV4T2YoXCJDT05ORUNUSU5HXCIpfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KG0sXCJPUEVOXCIse2VudW1lcmFibGU6ITAsdmFsdWU6ay5pbmRleE9mKFwiT1BFTlwiKX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShtLnByb3RvdHlwZSxcIk9QRU5cIix7ZW51bWVyYWJsZTohMCx2YWx1ZTprLmluZGV4T2YoXCJPUEVOXCIpfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KG0sXCJDTE9TSU5HXCIse2VudW1lcmFibGU6ITAsdmFsdWU6ay5pbmRleE9mKFwiQ0xPU0lOR1wiKX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShtLnByb3RvdHlwZSxcIkNMT1NJTkdcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTprLmluZGV4T2YoXCJDTE9TSU5HXCIpfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KG0sXCJDTE9TRURcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTprLmluZGV4T2YoXCJDTE9TRURcIil9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkobS5wcm90b3R5cGUsXCJDTE9TRURcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTprLmluZGV4T2YoXCJDTE9TRURcIil9KTtbXCJiaW5hcnlUeXBlXCIsXCJidWZmZXJlZEFtb3VudFwiLFwiZXh0ZW5zaW9uc1wiLFwiaXNQYXVzZWRcIixcInByb3RvY29sXCIsXCJyZWFkeVN0YXRlXCIsXCJ1cmxcIl0uZm9yRWFjaChyPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KG0ucHJvdG90eXBlLHIse2VudW1lcmFibGU6ITB9KX0pO1tcIm9wZW5cIixcImVycm9yXCIsXCJjbG9zZVwiLFwibWVzc2FnZVwiXS5mb3JFYWNoKHI9PntPYmplY3QuZGVmaW5lUHJvcGVydHkobS5wcm90b3R5cGUsYG9uJHtyfWAse2VudW1lcmFibGU6ITAsZ2V0KCl7Zm9yKGxldCBlIG9mIHRoaXMubGlzdGVuZXJzKHIpKWlmKGVbamVdKXJldHVybiBlW0lzXTtyZXR1cm4gbnVsbH0sc2V0KGUpe2ZvcihsZXQgdCBvZiB0aGlzLmxpc3RlbmVycyhyKSlpZih0W2plXSl7dGhpcy5yZW1vdmVMaXN0ZW5lcihyLHQpO2JyZWFrfXR5cGVvZiBlPT1cImZ1bmN0aW9uXCImJnRoaXMuYWRkRXZlbnRMaXN0ZW5lcihyLGUse1tqZV06ITB9KX19KX0pO20ucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9QnM7bS5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcj1Ncztoci5leHBvcnRzPW07ZnVuY3Rpb24gb3IocixlLHQscyl7bGV0IGk9e2FsbG93U3luY2hyb25vdXNFdmVudHM6ITAsYXV0b1Bvbmc6ITAscHJvdG9jb2xWZXJzaW9uOnFlWzFdLG1heFBheWxvYWQ6MTA0ODU3NjAwLHNraXBVVEY4VmFsaWRhdGlvbjohMSxwZXJNZXNzYWdlRGVmbGF0ZTohMCxmb2xsb3dSZWRpcmVjdHM6ITEsbWF4UmVkaXJlY3RzOjEwLC4uLnMsc29ja2V0UGF0aDp2b2lkIDAsaG9zdG5hbWU6dm9pZCAwLHByb3RvY29sOnZvaWQgMCx0aW1lb3V0OnZvaWQgMCxtZXRob2Q6XCJHRVRcIixob3N0OnZvaWQgMCxwYXRoOnZvaWQgMCxwb3J0OnZvaWQgMH07aWYoci5fYXV0b1Bvbmc9aS5hdXRvUG9uZywhcWUuaW5jbHVkZXMoaS5wcm90b2NvbFZlcnNpb24pKXRocm93IG5ldyBSYW5nZUVycm9yKGBVbnN1cHBvcnRlZCBwcm90b2NvbCB2ZXJzaW9uOiAke2kucHJvdG9jb2xWZXJzaW9ufSAoc3VwcG9ydGVkIHZlcnNpb25zOiAke3FlLmpvaW4oXCIsIFwiKX0pYCk7bGV0IG47aWYoZSBpbnN0YW5jZW9mIFdlKW49ZTtlbHNlIHRyeXtuPW5ldyBXZShlKX1jYXRjaHt0aHJvdyBuZXcgU3ludGF4RXJyb3IoYEludmFsaWQgVVJMOiAke2V9YCl9bi5wcm90b2NvbD09PVwiaHR0cDpcIj9uLnByb3RvY29sPVwid3M6XCI6bi5wcm90b2NvbD09PVwiaHR0cHM6XCImJihuLnByb3RvY29sPVwid3NzOlwiKSxyLl91cmw9bi5ocmVmO2xldCBvPW4ucHJvdG9jb2w9PT1cIndzczpcIixsPW4ucHJvdG9jb2w9PT1cIndzK3VuaXg6XCIsYztpZihuLnByb3RvY29sIT09XCJ3czpcIiYmIW8mJiFsP2M9YFRoZSBVUkwncyBwcm90b2NvbCBtdXN0IGJlIG9uZSBvZiBcIndzOlwiLCBcIndzczpcIiwgXCJodHRwOlwiLCBcImh0dHBzXCIsIG9yIFwid3MrdW5peDpcImA6bCYmIW4ucGF0aG5hbWU/Yz1cIlRoZSBVUkwncyBwYXRobmFtZSBpcyBlbXB0eVwiOm4uaGFzaCYmKGM9XCJUaGUgVVJMIGNvbnRhaW5zIGEgZnJhZ21lbnQgaWRlbnRpZmllclwiKSxjKXtsZXQgZj1uZXcgU3ludGF4RXJyb3IoYyk7aWYoci5fcmVkaXJlY3RzPT09MCl0aHJvdyBmO2dlKHIsZik7cmV0dXJufWxldCBhPW8/NDQzOjgwLHU9T3MoMTYpLnRvU3RyaW5nKFwiYmFzZTY0XCIpLGg9bz93cy5yZXF1ZXN0OmJzLnJlcXVlc3QsZD1uZXcgU2V0LF87aWYoaS5jcmVhdGVDb25uZWN0aW9uPWkuY3JlYXRlQ29ubmVjdGlvbnx8KG8/cXM6anMpLGkuZGVmYXVsdFBvcnQ9aS5kZWZhdWx0UG9ydHx8YSxpLnBvcnQ9bi5wb3J0fHxhLGkuaG9zdD1uLmhvc3RuYW1lLnN0YXJ0c1dpdGgoXCJbXCIpP24uaG9zdG5hbWUuc2xpY2UoMSwtMSk6bi5ob3N0bmFtZSxpLmhlYWRlcnM9ey4uLmkuaGVhZGVycyxcIlNlYy1XZWJTb2NrZXQtVmVyc2lvblwiOmkucHJvdG9jb2xWZXJzaW9uLFwiU2VjLVdlYlNvY2tldC1LZXlcIjp1LENvbm5lY3Rpb246XCJVcGdyYWRlXCIsVXBncmFkZTpcIndlYnNvY2tldFwifSxpLnBhdGg9bi5wYXRobmFtZStuLnNlYXJjaCxpLnRpbWVvdXQ9aS5oYW5kc2hha2VUaW1lb3V0LGkucGVyTWVzc2FnZURlZmxhdGUmJihfPW5ldyBNKGkucGVyTWVzc2FnZURlZmxhdGUhPT0hMD9pLnBlck1lc3NhZ2VEZWZsYXRlOnt9LCExLGkubWF4UGF5bG9hZCksaS5oZWFkZXJzW1wiU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zXCJdPURzKHtbTS5leHRlbnNpb25OYW1lXTpfLm9mZmVyKCl9KSksdC5sZW5ndGgpe2ZvcihsZXQgZiBvZiB0KXtpZih0eXBlb2YgZiE9XCJzdHJpbmdcInx8IVdzLnRlc3QoZil8fGQuaGFzKGYpKXRocm93IG5ldyBTeW50YXhFcnJvcihcIkFuIGludmFsaWQgb3IgZHVwbGljYXRlZCBzdWJwcm90b2NvbCB3YXMgc3BlY2lmaWVkXCIpO2QuYWRkKGYpfWkuaGVhZGVyc1tcIlNlYy1XZWJTb2NrZXQtUHJvdG9jb2xcIl09dC5qb2luKFwiLFwiKX1pZihpLm9yaWdpbiYmKGkucHJvdG9jb2xWZXJzaW9uPDEzP2kuaGVhZGVyc1tcIlNlYy1XZWJTb2NrZXQtT3JpZ2luXCJdPWkub3JpZ2luOmkuaGVhZGVycy5PcmlnaW49aS5vcmlnaW4pLChuLnVzZXJuYW1lfHxuLnBhc3N3b3JkKSYmKGkuYXV0aD1gJHtuLnVzZXJuYW1lfToke24ucGFzc3dvcmR9YCksbCl7bGV0IGY9aS5wYXRoLnNwbGl0KFwiOlwiKTtpLnNvY2tldFBhdGg9ZlswXSxpLnBhdGg9ZlsxXX1sZXQgcDtpZihpLmZvbGxvd1JlZGlyZWN0cyl7aWYoci5fcmVkaXJlY3RzPT09MCl7ci5fb3JpZ2luYWxJcGM9bCxyLl9vcmlnaW5hbFNlY3VyZT1vLHIuX29yaWdpbmFsSG9zdE9yU29ja2V0UGF0aD1sP2kuc29ja2V0UGF0aDpuLmhvc3Q7bGV0IGY9cyYmcy5oZWFkZXJzO2lmKHM9ey4uLnMsaGVhZGVyczp7fX0sZilmb3IobGV0W2csUF1vZiBPYmplY3QuZW50cmllcyhmKSlzLmhlYWRlcnNbZy50b0xvd2VyQ2FzZSgpXT1QfWVsc2UgaWYoci5saXN0ZW5lckNvdW50KFwicmVkaXJlY3RcIik9PT0wKXtsZXQgZj1sP3IuX29yaWdpbmFsSXBjP2kuc29ja2V0UGF0aD09PXIuX29yaWdpbmFsSG9zdE9yU29ja2V0UGF0aDohMTpyLl9vcmlnaW5hbElwYz8hMTpuLmhvc3Q9PT1yLl9vcmlnaW5hbEhvc3RPclNvY2tldFBhdGg7KCFmfHxyLl9vcmlnaW5hbFNlY3VyZSYmIW8pJiYoZGVsZXRlIGkuaGVhZGVycy5hdXRob3JpemF0aW9uLGRlbGV0ZSBpLmhlYWRlcnMuY29va2llLGZ8fGRlbGV0ZSBpLmhlYWRlcnMuaG9zdCxpLmF1dGg9dm9pZCAwKX1pLmF1dGgmJiFzLmhlYWRlcnMuYXV0aG9yaXphdGlvbiYmKHMuaGVhZGVycy5hdXRob3JpemF0aW9uPVwiQmFzaWMgXCIrQnVmZmVyLmZyb20oaS5hdXRoKS50b1N0cmluZyhcImJhc2U2NFwiKSkscD1yLl9yZXE9aChpKSxyLl9yZWRpcmVjdHMmJnIuZW1pdChcInJlZGlyZWN0XCIsci51cmwscCl9ZWxzZSBwPXIuX3JlcT1oKGkpO2kudGltZW91dCYmcC5vbihcInRpbWVvdXRcIiwoKT0+e3YocixwLFwiT3BlbmluZyBoYW5kc2hha2UgaGFzIHRpbWVkIG91dFwiKX0pLHAub24oXCJlcnJvclwiLGY9PntwPT09bnVsbHx8cFtucl18fChwPXIuX3JlcT1udWxsLGdlKHIsZikpfSkscC5vbihcInJlc3BvbnNlXCIsZj0+e2xldCBnPWYuaGVhZGVycy5sb2NhdGlvbixQPWYuc3RhdHVzQ29kZTtpZihnJiZpLmZvbGxvd1JlZGlyZWN0cyYmUD49MzAwJiZQPDQwMCl7aWYoKytyLl9yZWRpcmVjdHM+aS5tYXhSZWRpcmVjdHMpe3YocixwLFwiTWF4aW11bSByZWRpcmVjdHMgZXhjZWVkZWRcIik7cmV0dXJufXAuYWJvcnQoKTtsZXQgTDt0cnl7TD1uZXcgV2UoZyxlKX1jYXRjaHtsZXQgTz1uZXcgU3ludGF4RXJyb3IoYEludmFsaWQgVVJMOiAke2d9YCk7Z2UocixPKTtyZXR1cm59b3IocixMLHQscyl9ZWxzZSByLmVtaXQoXCJ1bmV4cGVjdGVkLXJlc3BvbnNlXCIscCxmKXx8dihyLHAsYFVuZXhwZWN0ZWQgc2VydmVyIHJlc3BvbnNlOiAke2Yuc3RhdHVzQ29kZX1gKX0pLHAub24oXCJ1cGdyYWRlXCIsKGYsZyxQKT0+e2lmKHIuZW1pdChcInVwZ3JhZGVcIixmKSxyLnJlYWR5U3RhdGUhPT1tLkNPTk5FQ1RJTkcpcmV0dXJuO3A9ci5fcmVxPW51bGw7bGV0IEw9Zi5oZWFkZXJzLnVwZ3JhZGU7aWYoTD09PXZvaWQgMHx8TC50b0xvd2VyQ2FzZSgpIT09XCJ3ZWJzb2NrZXRcIil7dihyLGcsXCJJbnZhbGlkIFVwZ3JhZGUgaGVhZGVyXCIpO3JldHVybn1sZXQgVj1DcyhcInNoYTFcIikudXBkYXRlKHUrTHMpLmRpZ2VzdChcImJhc2U2NFwiKTtpZihmLmhlYWRlcnNbXCJzZWMtd2Vic29ja2V0LWFjY2VwdFwiXSE9PVYpe3YocixnLFwiSW52YWxpZCBTZWMtV2ViU29ja2V0LUFjY2VwdCBoZWFkZXJcIik7cmV0dXJufWxldCBPPWYuaGVhZGVyc1tcInNlYy13ZWJzb2NrZXQtcHJvdG9jb2xcIl0sejtpZihPIT09dm9pZCAwP2Quc2l6ZT9kLmhhcyhPKXx8KHo9XCJTZXJ2ZXIgc2VudCBhbiBpbnZhbGlkIHN1YnByb3RvY29sXCIpOno9XCJTZXJ2ZXIgc2VudCBhIHN1YnByb3RvY29sIGJ1dCBub25lIHdhcyByZXF1ZXN0ZWRcIjpkLnNpemUmJih6PVwiU2VydmVyIHNlbnQgbm8gc3VicHJvdG9jb2xcIikseil7dihyLGcseik7cmV0dXJufU8mJihyLl9wcm90b2NvbD1PKTtsZXQgemU9Zi5oZWFkZXJzW1wic2VjLXdlYnNvY2tldC1leHRlbnNpb25zXCJdO2lmKHplIT09dm9pZCAwKXtpZighXyl7dihyLGcsXCJTZXJ2ZXIgc2VudCBhIFNlYy1XZWJTb2NrZXQtRXh0ZW5zaW9ucyBoZWFkZXIgYnV0IG5vIGV4dGVuc2lvbiB3YXMgcmVxdWVzdGVkXCIpO3JldHVybn1sZXQgVGU7dHJ5e1RlPUFzKHplKX1jYXRjaHt2KHIsZyxcIkludmFsaWQgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zIGhlYWRlclwiKTtyZXR1cm59bGV0IEhlPU9iamVjdC5rZXlzKFRlKTtpZihIZS5sZW5ndGghPT0xfHxIZVswXSE9PU0uZXh0ZW5zaW9uTmFtZSl7dihyLGcsXCJTZXJ2ZXIgaW5kaWNhdGVkIGFuIGV4dGVuc2lvbiB0aGF0IHdhcyBub3QgcmVxdWVzdGVkXCIpO3JldHVybn10cnl7Xy5hY2NlcHQoVGVbTS5leHRlbnNpb25OYW1lXSl9Y2F0Y2h7dihyLGcsXCJJbnZhbGlkIFNlYy1XZWJTb2NrZXQtRXh0ZW5zaW9ucyBoZWFkZXJcIik7cmV0dXJufXIuX2V4dGVuc2lvbnNbTS5leHRlbnNpb25OYW1lXT1ffXIuc2V0U29ja2V0KGcsUCx7YWxsb3dTeW5jaHJvbm91c0V2ZW50czppLmFsbG93U3luY2hyb25vdXNFdmVudHMsZ2VuZXJhdGVNYXNrOmkuZ2VuZXJhdGVNYXNrLG1heFBheWxvYWQ6aS5tYXhQYXlsb2FkLHNraXBVVEY4VmFsaWRhdGlvbjppLnNraXBVVEY4VmFsaWRhdGlvbn0pfSksaS5maW5pc2hSZXF1ZXN0P2kuZmluaXNoUmVxdWVzdChwLHIpOnAuZW5kKCl9ZnVuY3Rpb24gZ2UocixlKXtyLl9yZWFkeVN0YXRlPW0uQ0xPU0lORyxyLmVtaXQoXCJlcnJvclwiLGUpLHIuZW1pdENsb3NlKCl9ZnVuY3Rpb24ganMocil7cmV0dXJuIHIucGF0aD1yLnNvY2tldFBhdGgsc3IuY29ubmVjdChyKX1mdW5jdGlvbiBxcyhyKXtyZXR1cm4gci5wYXRoPXZvaWQgMCwhci5zZXJ2ZXJuYW1lJiZyLnNlcnZlcm5hbWUhPT1cIlwiJiYoci5zZXJ2ZXJuYW1lPXNyLmlzSVAoci5ob3N0KT9cIlwiOnIuaG9zdCksUHMuY29ubmVjdChyKX1mdW5jdGlvbiB2KHIsZSx0KXtyLl9yZWFkeVN0YXRlPW0uQ0xPU0lORztsZXQgcz1uZXcgRXJyb3IodCk7RXJyb3IuY2FwdHVyZVN0YWNrVHJhY2Uocyx2KSxlLnNldEhlYWRlcj8oZVtucl09ITAsZS5hYm9ydCgpLGUuc29ja2V0JiYhZS5zb2NrZXQuZGVzdHJveWVkJiZlLnNvY2tldC5kZXN0cm95KCkscHJvY2Vzcy5uZXh0VGljayhnZSxyLHMpKTooZS5kZXN0cm95KHMpLGUub25jZShcImVycm9yXCIsci5lbWl0LmJpbmQocixcImVycm9yXCIpKSxlLm9uY2UoXCJjbG9zZVwiLHIuZW1pdENsb3NlLmJpbmQocikpKX1mdW5jdGlvbiBKZShyLGUsdCl7aWYoZSl7bGV0IHM9RnMoZSkubGVuZ3RoO3IuX3NvY2tldD9yLl9zZW5kZXIuX2J1ZmZlcmVkQnl0ZXMrPXM6ci5fYnVmZmVyZWRBbW91bnQrPXN9aWYodCl7bGV0IHM9bmV3IEVycm9yKGBXZWJTb2NrZXQgaXMgbm90IG9wZW46IHJlYWR5U3RhdGUgJHtyLnJlYWR5U3RhdGV9ICgke2tbci5yZWFkeVN0YXRlXX0pYCk7cHJvY2Vzcy5uZXh0VGljayh0LHMpfX1mdW5jdGlvbiBKcyhyLGUpe2xldCB0PXRoaXNbeF07dC5fY2xvc2VGcmFtZVJlY2VpdmVkPSEwLHQuX2Nsb3NlTWVzc2FnZT1lLHQuX2Nsb3NlQ29kZT1yLHQuX3NvY2tldFt4XSE9PXZvaWQgMCYmKHQuX3NvY2tldC5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIix5ZSkscHJvY2Vzcy5uZXh0VGljayhhcix0Ll9zb2NrZXQpLHI9PT0xMDA1P3QuY2xvc2UoKTp0LmNsb3NlKHIsZSkpfWZ1bmN0aW9uICRzKCl7bGV0IHI9dGhpc1t4XTtyLmlzUGF1c2VkfHxyLl9zb2NrZXQucmVzdW1lKCl9ZnVuY3Rpb24gR3Mocil7bGV0IGU9dGhpc1t4XTtlLl9zb2NrZXRbeF0hPT12b2lkIDAmJihlLl9zb2NrZXQucmVtb3ZlTGlzdGVuZXIoXCJkYXRhXCIseWUpLHByb2Nlc3MubmV4dFRpY2soYXIsZS5fc29ja2V0KSxlLmNsb3NlKHJbTnNdKSksZS5lbWl0KFwiZXJyb3JcIixyKX1mdW5jdGlvbiBycigpe3RoaXNbeF0uZW1pdENsb3NlKCl9ZnVuY3Rpb24gVnMocixlKXt0aGlzW3hdLmVtaXQoXCJtZXNzYWdlXCIscixlKX1mdW5jdGlvbiB6cyhyKXtsZXQgZT10aGlzW3hdO2UuX2F1dG9Qb25nJiZlLnBvbmcociwhdGhpcy5faXNTZXJ2ZXIsaXIpLGUuZW1pdChcInBpbmdcIixyKX1mdW5jdGlvbiBIcyhyKXt0aGlzW3hdLmVtaXQoXCJwb25nXCIscil9ZnVuY3Rpb24gYXIocil7ci5yZXN1bWUoKX1mdW5jdGlvbiBscigpe2xldCByPXRoaXNbeF07dGhpcy5yZW1vdmVMaXN0ZW5lcihcImNsb3NlXCIsbHIpLHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJkYXRhXCIseWUpLHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJlbmRcIixjciksci5fcmVhZHlTdGF0ZT1tLkNMT1NJTkc7bGV0IGU7IXRoaXMuX3JlYWRhYmxlU3RhdGUuZW5kRW1pdHRlZCYmIXIuX2Nsb3NlRnJhbWVSZWNlaXZlZCYmIXIuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCYmKGU9ci5fc29ja2V0LnJlYWQoKSkhPT1udWxsJiZyLl9yZWNlaXZlci53cml0ZShlKSxyLl9yZWNlaXZlci5lbmQoKSx0aGlzW3hdPXZvaWQgMCxjbGVhclRpbWVvdXQoci5fY2xvc2VUaW1lciksci5fcmVjZWl2ZXIuX3dyaXRhYmxlU3RhdGUuZmluaXNoZWR8fHIuX3JlY2VpdmVyLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZD9yLmVtaXRDbG9zZSgpOihyLl9yZWNlaXZlci5vbihcImVycm9yXCIscnIpLHIuX3JlY2VpdmVyLm9uKFwiZmluaXNoXCIscnIpKX1mdW5jdGlvbiB5ZShyKXt0aGlzW3hdLl9yZWNlaXZlci53cml0ZShyKXx8dGhpcy5wYXVzZSgpfWZ1bmN0aW9uIGNyKCl7bGV0IHI9dGhpc1t4XTtyLl9yZWFkeVN0YXRlPW0uQ0xPU0lORyxyLl9yZWNlaXZlci5lbmQoKSx0aGlzLmVuZCgpfWZ1bmN0aW9uIHVyKCl7bGV0IHI9dGhpc1t4XTt0aGlzLnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIix1ciksdGhpcy5vbihcImVycm9yXCIsaXIpLHImJihyLl9yZWFkeVN0YXRlPW0uQ0xPU0lORyx0aGlzLmRlc3Ryb3koKSl9fSk7dmFyIGRyPVMoKFVpLGZyKT0+e1widXNlIHN0cmljdFwiO3Zhcnt0b2tlbkNoYXJzOllzfT1RKCk7ZnVuY3Rpb24gWHMocil7bGV0IGU9bmV3IFNldCx0PS0xLHM9LTEsaT0wO2ZvcihpO2k8ci5sZW5ndGg7aSsrKXtsZXQgbz1yLmNoYXJDb2RlQXQoaSk7aWYocz09PS0xJiZZc1tvXT09PTEpdD09PS0xJiYodD1pKTtlbHNlIGlmKGkhPT0wJiYobz09PTMyfHxvPT09OSkpcz09PS0xJiZ0IT09LTEmJihzPWkpO2Vsc2UgaWYobz09PTQ0KXtpZih0PT09LTEpdGhyb3cgbmV3IFN5bnRheEVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBhdCBpbmRleCAke2l9YCk7cz09PS0xJiYocz1pKTtsZXQgbD1yLnNsaWNlKHQscyk7aWYoZS5oYXMobCkpdGhyb3cgbmV3IFN5bnRheEVycm9yKGBUaGUgXCIke2x9XCIgc3VicHJvdG9jb2wgaXMgZHVwbGljYXRlZGApO2UuYWRkKGwpLHQ9cz0tMX1lbHNlIHRocm93IG5ldyBTeW50YXhFcnJvcihgVW5leHBlY3RlZCBjaGFyYWN0ZXIgYXQgaW5kZXggJHtpfWApfWlmKHQ9PT0tMXx8cyE9PS0xKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlVuZXhwZWN0ZWQgZW5kIG9mIGlucHV0XCIpO2xldCBuPXIuc2xpY2UodCxpKTtpZihlLmhhcyhuKSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFRoZSBcIiR7bn1cIiBzdWJwcm90b2NvbCBpcyBkdXBsaWNhdGVkYCk7cmV0dXJuIGUuYWRkKG4pLGV9ZnIuZXhwb3J0cz17cGFyc2U6WHN9fSk7dmFyIHhyPVMoKGppLFNyKT0+e1widXNlIHN0cmljdFwiO3ZhciBacz1yZXF1aXJlKFwiZXZlbnRzXCIpLFNlPXJlcXVpcmUoXCJodHRwXCIpLHtEdXBsZXg6V2l9PXJlcXVpcmUoXCJzdHJlYW1cIikse2NyZWF0ZUhhc2g6S3N9PXJlcXVpcmUoXCJjcnlwdG9cIikscHI9VWUoKSxGPUsoKSxRcz1kcigpLGVpPSRlKCkse0dVSUQ6dGksa1dlYlNvY2tldDpyaX09TigpLHNpPS9eWysvMC05QS1aYS16XXsyMn09PSQvLF9yPTAsbXI9MSx5cj0yLEdlPWNsYXNzIGV4dGVuZHMgWnN7Y29uc3RydWN0b3IoZSx0KXtpZihzdXBlcigpLGU9e2FsbG93U3luY2hyb25vdXNFdmVudHM6ITAsYXV0b1Bvbmc6ITAsbWF4UGF5bG9hZDoxMDAqMTAyNCoxMDI0LHNraXBVVEY4VmFsaWRhdGlvbjohMSxwZXJNZXNzYWdlRGVmbGF0ZTohMSxoYW5kbGVQcm90b2NvbHM6bnVsbCxjbGllbnRUcmFja2luZzohMCx2ZXJpZnlDbGllbnQ6bnVsbCxub1NlcnZlcjohMSxiYWNrbG9nOm51bGwsc2VydmVyOm51bGwsaG9zdDpudWxsLHBhdGg6bnVsbCxwb3J0Om51bGwsV2ViU29ja2V0OmVpLC4uLmV9LGUucG9ydD09bnVsbCYmIWUuc2VydmVyJiYhZS5ub1NlcnZlcnx8ZS5wb3J0IT1udWxsJiYoZS5zZXJ2ZXJ8fGUubm9TZXJ2ZXIpfHxlLnNlcnZlciYmZS5ub1NlcnZlcil0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmUgYW5kIG9ubHkgb25lIG9mIHRoZSBcInBvcnRcIiwgXCJzZXJ2ZXJcIiwgb3IgXCJub1NlcnZlclwiIG9wdGlvbnMgbXVzdCBiZSBzcGVjaWZpZWQnKTtpZihlLnBvcnQhPW51bGw/KHRoaXMuX3NlcnZlcj1TZS5jcmVhdGVTZXJ2ZXIoKHMsaSk9PntsZXQgbj1TZS5TVEFUVVNfQ09ERVNbNDI2XTtpLndyaXRlSGVhZCg0MjYse1wiQ29udGVudC1MZW5ndGhcIjpuLmxlbmd0aCxcIkNvbnRlbnQtVHlwZVwiOlwidGV4dC9wbGFpblwifSksaS5lbmQobil9KSx0aGlzLl9zZXJ2ZXIubGlzdGVuKGUucG9ydCxlLmhvc3QsZS5iYWNrbG9nLHQpKTplLnNlcnZlciYmKHRoaXMuX3NlcnZlcj1lLnNlcnZlciksdGhpcy5fc2VydmVyKXtsZXQgcz10aGlzLmVtaXQuYmluZCh0aGlzLFwiY29ubmVjdGlvblwiKTt0aGlzLl9yZW1vdmVMaXN0ZW5lcnM9aWkodGhpcy5fc2VydmVyLHtsaXN0ZW5pbmc6dGhpcy5lbWl0LmJpbmQodGhpcyxcImxpc3RlbmluZ1wiKSxlcnJvcjp0aGlzLmVtaXQuYmluZCh0aGlzLFwiZXJyb3JcIiksdXBncmFkZTooaSxuLG8pPT57dGhpcy5oYW5kbGVVcGdyYWRlKGksbixvLHMpfX0pfWUucGVyTWVzc2FnZURlZmxhdGU9PT0hMCYmKGUucGVyTWVzc2FnZURlZmxhdGU9e30pLGUuY2xpZW50VHJhY2tpbmcmJih0aGlzLmNsaWVudHM9bmV3IFNldCx0aGlzLl9zaG91bGRFbWl0Q2xvc2U9ITEpLHRoaXMub3B0aW9ucz1lLHRoaXMuX3N0YXRlPV9yfWFkZHJlc3MoKXtpZih0aGlzLm9wdGlvbnMubm9TZXJ2ZXIpdGhyb3cgbmV3IEVycm9yKCdUaGUgc2VydmVyIGlzIG9wZXJhdGluZyBpbiBcIm5vU2VydmVyXCIgbW9kZScpO3JldHVybiB0aGlzLl9zZXJ2ZXI/dGhpcy5fc2VydmVyLmFkZHJlc3MoKTpudWxsfWNsb3NlKGUpe2lmKHRoaXMuX3N0YXRlPT09eXIpe2UmJnRoaXMub25jZShcImNsb3NlXCIsKCk9PntlKG5ldyBFcnJvcihcIlRoZSBzZXJ2ZXIgaXMgbm90IHJ1bm5pbmdcIikpfSkscHJvY2Vzcy5uZXh0VGljayhzZSx0aGlzKTtyZXR1cm59aWYoZSYmdGhpcy5vbmNlKFwiY2xvc2VcIixlKSx0aGlzLl9zdGF0ZSE9PW1yKWlmKHRoaXMuX3N0YXRlPW1yLHRoaXMub3B0aW9ucy5ub1NlcnZlcnx8dGhpcy5vcHRpb25zLnNlcnZlcil0aGlzLl9zZXJ2ZXImJih0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKSx0aGlzLl9yZW1vdmVMaXN0ZW5lcnM9dGhpcy5fc2VydmVyPW51bGwpLHRoaXMuY2xpZW50cz90aGlzLmNsaWVudHMuc2l6ZT90aGlzLl9zaG91bGRFbWl0Q2xvc2U9ITA6cHJvY2Vzcy5uZXh0VGljayhzZSx0aGlzKTpwcm9jZXNzLm5leHRUaWNrKHNlLHRoaXMpO2Vsc2V7bGV0IHQ9dGhpcy5fc2VydmVyO3RoaXMuX3JlbW92ZUxpc3RlbmVycygpLHRoaXMuX3JlbW92ZUxpc3RlbmVycz10aGlzLl9zZXJ2ZXI9bnVsbCx0LmNsb3NlKCgpPT57c2UodGhpcyl9KX19c2hvdWxkSGFuZGxlKGUpe2lmKHRoaXMub3B0aW9ucy5wYXRoKXtsZXQgdD1lLnVybC5pbmRleE9mKFwiP1wiKTtpZigodCE9PS0xP2UudXJsLnNsaWNlKDAsdCk6ZS51cmwpIT09dGhpcy5vcHRpb25zLnBhdGgpcmV0dXJuITF9cmV0dXJuITB9aGFuZGxlVXBncmFkZShlLHQscyxpKXt0Lm9uKFwiZXJyb3JcIixncik7bGV0IG49ZS5oZWFkZXJzW1wic2VjLXdlYnNvY2tldC1rZXlcIl0sbz1lLmhlYWRlcnMudXBncmFkZSxsPStlLmhlYWRlcnNbXCJzZWMtd2Vic29ja2V0LXZlcnNpb25cIl07aWYoZS5tZXRob2QhPT1cIkdFVFwiKXtVKHRoaXMsZSx0LDQwNSxcIkludmFsaWQgSFRUUCBtZXRob2RcIik7cmV0dXJufWlmKG89PT12b2lkIDB8fG8udG9Mb3dlckNhc2UoKSE9PVwid2Vic29ja2V0XCIpe1UodGhpcyxlLHQsNDAwLFwiSW52YWxpZCBVcGdyYWRlIGhlYWRlclwiKTtyZXR1cm59aWYobj09PXZvaWQgMHx8IXNpLnRlc3Qobikpe1UodGhpcyxlLHQsNDAwLFwiTWlzc2luZyBvciBpbnZhbGlkIFNlYy1XZWJTb2NrZXQtS2V5IGhlYWRlclwiKTtyZXR1cm59aWYobCE9PTgmJmwhPT0xMyl7VSh0aGlzLGUsdCw0MDAsXCJNaXNzaW5nIG9yIGludmFsaWQgU2VjLVdlYlNvY2tldC1WZXJzaW9uIGhlYWRlclwiKTtyZXR1cm59aWYoIXRoaXMuc2hvdWxkSGFuZGxlKGUpKXtpZSh0LDQwMCk7cmV0dXJufWxldCBjPWUuaGVhZGVyc1tcInNlYy13ZWJzb2NrZXQtcHJvdG9jb2xcIl0sYT1uZXcgU2V0O2lmKGMhPT12b2lkIDApdHJ5e2E9UXMucGFyc2UoYyl9Y2F0Y2h7VSh0aGlzLGUsdCw0MDAsXCJJbnZhbGlkIFNlYy1XZWJTb2NrZXQtUHJvdG9jb2wgaGVhZGVyXCIpO3JldHVybn1sZXQgdT1lLmhlYWRlcnNbXCJzZWMtd2Vic29ja2V0LWV4dGVuc2lvbnNcIl0saD17fTtpZih0aGlzLm9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGUmJnUhPT12b2lkIDApe2xldCBkPW5ldyBGKHRoaXMub3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSwhMCx0aGlzLm9wdGlvbnMubWF4UGF5bG9hZCk7dHJ5e2xldCBfPXByLnBhcnNlKHUpO19bRi5leHRlbnNpb25OYW1lXSYmKGQuYWNjZXB0KF9bRi5leHRlbnNpb25OYW1lXSksaFtGLmV4dGVuc2lvbk5hbWVdPWQpfWNhdGNoe1UodGhpcyxlLHQsNDAwLFwiSW52YWxpZCBvciB1bmFjY2VwdGFibGUgU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zIGhlYWRlclwiKTtyZXR1cm59fWlmKHRoaXMub3B0aW9ucy52ZXJpZnlDbGllbnQpe2xldCBkPXtvcmlnaW46ZS5oZWFkZXJzW2Ake2w9PT04P1wic2VjLXdlYnNvY2tldC1vcmlnaW5cIjpcIm9yaWdpblwifWBdLHNlY3VyZTohIShlLnNvY2tldC5hdXRob3JpemVkfHxlLnNvY2tldC5lbmNyeXB0ZWQpLHJlcTplfTtpZih0aGlzLm9wdGlvbnMudmVyaWZ5Q2xpZW50Lmxlbmd0aD09PTIpe3RoaXMub3B0aW9ucy52ZXJpZnlDbGllbnQoZCwoXyxwLGYsZyk9PntpZighXylyZXR1cm4gaWUodCxwfHw0MDEsZixnKTt0aGlzLmNvbXBsZXRlVXBncmFkZShoLG4sYSxlLHQscyxpKX0pO3JldHVybn1pZighdGhpcy5vcHRpb25zLnZlcmlmeUNsaWVudChkKSlyZXR1cm4gaWUodCw0MDEpfXRoaXMuY29tcGxldGVVcGdyYWRlKGgsbixhLGUsdCxzLGkpfWNvbXBsZXRlVXBncmFkZShlLHQscyxpLG4sbyxsKXtpZighbi5yZWFkYWJsZXx8IW4ud3JpdGFibGUpcmV0dXJuIG4uZGVzdHJveSgpO2lmKG5bcmldKXRocm93IG5ldyBFcnJvcihcInNlcnZlci5oYW5kbGVVcGdyYWRlKCkgd2FzIGNhbGxlZCBtb3JlIHRoYW4gb25jZSB3aXRoIHRoZSBzYW1lIHNvY2tldCwgcG9zc2libHkgZHVlIHRvIGEgbWlzY29uZmlndXJhdGlvblwiKTtpZih0aGlzLl9zdGF0ZT5fcilyZXR1cm4gaWUobiw1MDMpO2xldCBhPVtcIkhUVFAvMS4xIDEwMSBTd2l0Y2hpbmcgUHJvdG9jb2xzXCIsXCJVcGdyYWRlOiB3ZWJzb2NrZXRcIixcIkNvbm5lY3Rpb246IFVwZ3JhZGVcIixgU2VjLVdlYlNvY2tldC1BY2NlcHQ6ICR7S3MoXCJzaGExXCIpLnVwZGF0ZSh0K3RpKS5kaWdlc3QoXCJiYXNlNjRcIil9YF0sdT1uZXcgdGhpcy5vcHRpb25zLldlYlNvY2tldChudWxsLHZvaWQgMCx0aGlzLm9wdGlvbnMpO2lmKHMuc2l6ZSl7bGV0IGg9dGhpcy5vcHRpb25zLmhhbmRsZVByb3RvY29scz90aGlzLm9wdGlvbnMuaGFuZGxlUHJvdG9jb2xzKHMsaSk6cy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7aCYmKGEucHVzaChgU2VjLVdlYlNvY2tldC1Qcm90b2NvbDogJHtofWApLHUuX3Byb3RvY29sPWgpfWlmKGVbRi5leHRlbnNpb25OYW1lXSl7bGV0IGg9ZVtGLmV4dGVuc2lvbk5hbWVdLnBhcmFtcyxkPXByLmZvcm1hdCh7W0YuZXh0ZW5zaW9uTmFtZV06W2hdfSk7YS5wdXNoKGBTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnM6ICR7ZH1gKSx1Ll9leHRlbnNpb25zPWV9dGhpcy5lbWl0KFwiaGVhZGVyc1wiLGEsaSksbi53cml0ZShhLmNvbmNhdChgXFxyXG5gKS5qb2luKGBcXHJcbmApKSxuLnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIixnciksdS5zZXRTb2NrZXQobixvLHthbGxvd1N5bmNocm9ub3VzRXZlbnRzOnRoaXMub3B0aW9ucy5hbGxvd1N5bmNocm9ub3VzRXZlbnRzLG1heFBheWxvYWQ6dGhpcy5vcHRpb25zLm1heFBheWxvYWQsc2tpcFVURjhWYWxpZGF0aW9uOnRoaXMub3B0aW9ucy5za2lwVVRGOFZhbGlkYXRpb259KSx0aGlzLmNsaWVudHMmJih0aGlzLmNsaWVudHMuYWRkKHUpLHUub24oXCJjbG9zZVwiLCgpPT57dGhpcy5jbGllbnRzLmRlbGV0ZSh1KSx0aGlzLl9zaG91bGRFbWl0Q2xvc2UmJiF0aGlzLmNsaWVudHMuc2l6ZSYmcHJvY2Vzcy5uZXh0VGljayhzZSx0aGlzKX0pKSxsKHUsaSl9fTtTci5leHBvcnRzPUdlO2Z1bmN0aW9uIGlpKHIsZSl7Zm9yKGxldCB0IG9mIE9iamVjdC5rZXlzKGUpKXIub24odCxlW3RdKTtyZXR1cm4gZnVuY3Rpb24oKXtmb3IobGV0IHMgb2YgT2JqZWN0LmtleXMoZSkpci5yZW1vdmVMaXN0ZW5lcihzLGVbc10pfX1mdW5jdGlvbiBzZShyKXtyLl9zdGF0ZT15cixyLmVtaXQoXCJjbG9zZVwiKX1mdW5jdGlvbiBncigpe3RoaXMuZGVzdHJveSgpfWZ1bmN0aW9uIGllKHIsZSx0LHMpe3Q9dHx8U2UuU1RBVFVTX0NPREVTW2VdLHM9e0Nvbm5lY3Rpb246XCJjbG9zZVwiLFwiQ29udGVudC1UeXBlXCI6XCJ0ZXh0L2h0bWxcIixcIkNvbnRlbnQtTGVuZ3RoXCI6QnVmZmVyLmJ5dGVMZW5ndGgodCksLi4uc30sci5vbmNlKFwiZmluaXNoXCIsci5kZXN0cm95KSxyLmVuZChgSFRUUC8xLjEgJHtlfSAke1NlLlNUQVRVU19DT0RFU1tlXX1cXHJcbmArT2JqZWN0LmtleXMocykubWFwKGk9PmAke2l9OiAke3NbaV19YCkuam9pbihgXFxyXG5gKStgXFxyXG5cXHJcbmArdCl9ZnVuY3Rpb24gVShyLGUsdCxzLGkpe2lmKHIubGlzdGVuZXJDb3VudChcIndzQ2xpZW50RXJyb3JcIikpe2xldCBuPW5ldyBFcnJvcihpKTtFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShuLFUpLHIuZW1pdChcIndzQ2xpZW50RXJyb3JcIixuLHQsZSl9ZWxzZSBpZSh0LHMsaSl9fSk7dmFyIHVpPXt9O0NyKHVpLHtkZWZhdWx0OigpPT5jaX0pO21vZHVsZS5leHBvcnRzPVJyKHVpKTt2YXIgU3Q9SShyZXF1aXJlKFwicGF0aFwiKSk7dmFyIHl0PUkocmVxdWlyZShcImNyeXB0b1wiKSk7dmFyIFlyPUkoZ3QoKSk7ZnVuY3Rpb24gd2UoKXtyZXR1cm4geXQuZGVmYXVsdC5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoXCJoZXhcIil9dmFyIGdpPW5ldyBSZWdFeHAoXCIoW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/Oig/Oig/OlthLXpBLVpcXFxcZF0qKD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKikqKT9cXFxcdTAwMDcpfCg/Oig/OlxcXFxkezEsNH0oPzo7XFxcXGR7MCw0fSkqKT9bXFxcXGRBLVBSLVRaY2YtbnRxcnk9Pjx+XSkpKVwiLFwiZ1wiKTt2YXIgeWk9cHJvY2Vzcy5wbGF0Zm9ybT09PVwid2luMzJcIj9cIjtcIjpcIjpcIjt2YXIgeGk9e2ZvcmJpZE9ubHk6ITEsZnVsbHlQYXJhbGxlbDohMSxnbG9iYWxTZXR1cDpudWxsLGdsb2JhbFRlYXJkb3duOm51bGwsZ2xvYmFsVGltZW91dDowLGdyZXA6Ly4qLyxncmVwSW52ZXJ0Om51bGwsbWF4RmFpbHVyZXM6MCxtZXRhZGF0YTp7fSxwcmVzZXJ2ZU91dHB1dDpcImFsd2F5c1wiLHByb2plY3RzOltdLHJlcG9ydGVyOltbcHJvY2Vzcy5lbnYuQ0k/XCJkb3RcIjpcImxpc3RcIl1dLHJlcG9ydFNsb3dUZXN0czp7bWF4OjUsdGhyZXNob2xkOjE1ZTN9LGNvbmZpZ0ZpbGU6XCJcIixyb290RGlyOlwiXCIscXVpZXQ6ITEsc2hhcmQ6bnVsbCx1cGRhdGVTbmFwc2hvdHM6XCJtaXNzaW5nXCIsdmVyc2lvbjpcIlwiLHdvcmtlcnM6MCx3ZWJTZXJ2ZXI6bnVsbH07ZnVuY3Rpb24gSChyKXtyZXR1cm4gQXJyYXkuaXNBcnJheShyKXx8KHI9W3JdKSxyLm1hcChlPT50eXBlb2YgZT09XCJzdHJpbmdcIj97czplfTp7cjp7c291cmNlOmUuc291cmNlLGZsYWdzOmUuZmxhZ3N9fSl9dmFyIG9lPWNsYXNze2NvbnN0cnVjdG9yKGUsdD17fSl7dGhpcy5fbWVzc2FnZVNpbms9ZSx0aGlzLl9lbWl0dGVyT3B0aW9ucz10fXZlcnNpb24oKXtyZXR1cm5cInYyXCJ9b25Db25maWd1cmUoZSl7dGhpcy5fcm9vdERpcj1lLnJvb3REaXIsdGhpcy5fbWVzc2FnZVNpbmsoe21ldGhvZDpcIm9uQ29uZmlndXJlXCIscGFyYW1zOntjb25maWc6dGhpcy5fc2VyaWFsaXplQ29uZmlnKGUpfX0pfW9uQmVnaW4oZSl7bGV0IHQ9ZS5zdWl0ZXMubWFwKHM9PnRoaXMuX3NlcmlhbGl6ZVByb2plY3QocykpO2ZvcihsZXQgcyBvZiB0KXRoaXMuX21lc3NhZ2VTaW5rKHttZXRob2Q6XCJvblByb2plY3RcIixwYXJhbXM6e3Byb2plY3Q6c319KTt0aGlzLl9tZXNzYWdlU2luayh7bWV0aG9kOlwib25CZWdpblwiLHBhcmFtczp2b2lkIDB9KX1vblRlc3RCZWdpbihlLHQpe3Rbd109d2UoKSx0aGlzLl9tZXNzYWdlU2luayh7bWV0aG9kOlwib25UZXN0QmVnaW5cIixwYXJhbXM6e3Rlc3RJZDplLmlkLHJlc3VsdDp0aGlzLl9zZXJpYWxpemVSZXN1bHRTdGFydCh0KX19KX1vblRlc3RFbmQoZSx0KXtsZXQgcz17dGVzdElkOmUuaWQsZXhwZWN0ZWRTdGF0dXM6ZS5leHBlY3RlZFN0YXR1cyxhbm5vdGF0aW9uczplLmFubm90YXRpb25zLHRpbWVvdXQ6ZS50aW1lb3V0fTt0aGlzLl9tZXNzYWdlU2luayh7bWV0aG9kOlwib25UZXN0RW5kXCIscGFyYW1zOnt0ZXN0OnMscmVzdWx0OnRoaXMuX3NlcmlhbGl6ZVJlc3VsdEVuZCh0KX19KX1vblN0ZXBCZWdpbihlLHQscyl7c1t3XT13ZSgpLHRoaXMuX21lc3NhZ2VTaW5rKHttZXRob2Q6XCJvblN0ZXBCZWdpblwiLHBhcmFtczp7dGVzdElkOmUuaWQscmVzdWx0SWQ6dFt3XSxzdGVwOnRoaXMuX3NlcmlhbGl6ZVN0ZXBTdGFydChzKX19KX1vblN0ZXBFbmQoZSx0LHMpe3RoaXMuX21lc3NhZ2VTaW5rKHttZXRob2Q6XCJvblN0ZXBFbmRcIixwYXJhbXM6e3Rlc3RJZDplLmlkLHJlc3VsdElkOnRbd10sc3RlcDp0aGlzLl9zZXJpYWxpemVTdGVwRW5kKHMpfX0pfW9uRXJyb3IoZSl7dGhpcy5fbWVzc2FnZVNpbmsoe21ldGhvZDpcIm9uRXJyb3JcIixwYXJhbXM6e2Vycm9yOmV9fSl9b25TdGRPdXQoZSx0LHMpe3RoaXMuX29uU3RkSU8oXCJzdGRvdXRcIixlLHQscyl9b25TdGRFcnIoZSx0LHMpe3RoaXMuX29uU3RkSU8oXCJzdGRlcnJcIixlLHQscyl9X29uU3RkSU8oZSx0LHMsaSl7aWYodGhpcy5fZW1pdHRlck9wdGlvbnMub21pdE91dHB1dClyZXR1cm47bGV0IG49dHlwZW9mIHQhPVwic3RyaW5nXCIsbz1uP3QudG9TdHJpbmcoXCJiYXNlNjRcIik6dDt0aGlzLl9tZXNzYWdlU2luayh7bWV0aG9kOlwib25TdGRJT1wiLHBhcmFtczp7dGVzdElkOnM9PW51bGw/dm9pZCAwOnMuaWQscmVzdWx0SWQ6aT9pW3ddOnZvaWQgMCx0eXBlOmUsZGF0YTpvLGlzQmFzZTY0Om59fSl9YXN5bmMgb25FbmQoZSl7bGV0IHQ9e3N0YXR1czplLnN0YXR1cyxzdGFydFRpbWU6ZS5zdGFydFRpbWUuZ2V0VGltZSgpLGR1cmF0aW9uOmUuZHVyYXRpb259O3RoaXMuX21lc3NhZ2VTaW5rKHttZXRob2Q6XCJvbkVuZFwiLHBhcmFtczp7cmVzdWx0OnR9fSl9YXN5bmMgb25FeGl0KCl7fXByaW50c1RvU3RkaW8oKXtyZXR1cm4hMX1fc2VyaWFsaXplQ29uZmlnKGUpe3JldHVybntjb25maWdGaWxlOnRoaXMuX3JlbGF0aXZlUGF0aChlLmNvbmZpZ0ZpbGUpLGdsb2JhbFRpbWVvdXQ6ZS5nbG9iYWxUaW1lb3V0LG1heEZhaWx1cmVzOmUubWF4RmFpbHVyZXMsbWV0YWRhdGE6ZS5tZXRhZGF0YSxyb290RGlyOmUucm9vdERpcix2ZXJzaW9uOmUudmVyc2lvbix3b3JrZXJzOmUud29ya2Vyc319X3NlcmlhbGl6ZVByb2plY3QoZSl7bGV0IHQ9ZS5wcm9qZWN0KCk7cmV0dXJue21ldGFkYXRhOnQubWV0YWRhdGEsbmFtZTp0Lm5hbWUsb3V0cHV0RGlyOnRoaXMuX3JlbGF0aXZlUGF0aCh0Lm91dHB1dERpcikscmVwZWF0RWFjaDp0LnJlcGVhdEVhY2gscmV0cmllczp0LnJldHJpZXMsdGVzdERpcjp0aGlzLl9yZWxhdGl2ZVBhdGgodC50ZXN0RGlyKSx0ZXN0SWdub3JlOkgodC50ZXN0SWdub3JlKSx0ZXN0TWF0Y2g6SCh0LnRlc3RNYXRjaCksdGltZW91dDp0LnRpbWVvdXQsc3VpdGVzOmUuc3VpdGVzLm1hcChpPT50aGlzLl9zZXJpYWxpemVTdWl0ZShpKSksZ3JlcDpIKHQuZ3JlcCksZ3JlcEludmVydDpIKHQuZ3JlcEludmVydHx8W10pLGRlcGVuZGVuY2llczp0LmRlcGVuZGVuY2llcyxzbmFwc2hvdERpcjp0aGlzLl9yZWxhdGl2ZVBhdGgodC5zbmFwc2hvdERpciksdGVhcmRvd246dC50ZWFyZG93bn19X3NlcmlhbGl6ZVN1aXRlKGUpe3JldHVybnt0aXRsZTplLnRpdGxlLGxvY2F0aW9uOnRoaXMuX3JlbGF0aXZlTG9jYXRpb24oZS5sb2NhdGlvbiksc3VpdGVzOmUuc3VpdGVzLm1hcChzPT50aGlzLl9zZXJpYWxpemVTdWl0ZShzKSksdGVzdHM6ZS50ZXN0cy5tYXAocz0+dGhpcy5fc2VyaWFsaXplVGVzdChzKSl9fV9zZXJpYWxpemVUZXN0KGUpe3JldHVybnt0ZXN0SWQ6ZS5pZCx0aXRsZTplLnRpdGxlLGxvY2F0aW9uOnRoaXMuX3JlbGF0aXZlTG9jYXRpb24oZS5sb2NhdGlvbikscmV0cmllczplLnJldHJpZXMsdGFnczplLnRhZ3MscmVwZWF0RWFjaEluZGV4OmUucmVwZWF0RWFjaEluZGV4fX1fc2VyaWFsaXplUmVzdWx0U3RhcnQoZSl7cmV0dXJue2lkOmVbd10scmV0cnk6ZS5yZXRyeSx3b3JrZXJJbmRleDplLndvcmtlckluZGV4LHBhcmFsbGVsSW5kZXg6ZS5wYXJhbGxlbEluZGV4LHN0YXJ0VGltZTorZS5zdGFydFRpbWV9fV9zZXJpYWxpemVSZXN1bHRFbmQoZSl7cmV0dXJue2lkOmVbd10sZHVyYXRpb246ZS5kdXJhdGlvbixzdGF0dXM6ZS5zdGF0dXMsZXJyb3JzOmUuZXJyb3JzLGF0dGFjaG1lbnRzOnRoaXMuX3NlcmlhbGl6ZUF0dGFjaG1lbnRzKGUuYXR0YWNobWVudHMpfX1fc2VyaWFsaXplQXR0YWNobWVudHMoZSl7cmV0dXJuIGUubWFwKHQ9Pih7Li4udCxiYXNlNjQ6dC5ib2R5JiYhdGhpcy5fZW1pdHRlck9wdGlvbnMub21pdEJ1ZmZlcnM/dC5ib2R5LnRvU3RyaW5nKFwiYmFzZTY0XCIpOnZvaWQgMH0pKX1fc2VyaWFsaXplU3RlcFN0YXJ0KGUpe3ZhciB0O3JldHVybntpZDplW3ddLHBhcmVudFN0ZXBJZDoodD1lLnBhcmVudCk9PW51bGw/dm9pZCAwOnRbd10sdGl0bGU6ZS50aXRsZSxjYXRlZ29yeTplLmNhdGVnb3J5LHN0YXJ0VGltZTorZS5zdGFydFRpbWUsbG9jYXRpb246dGhpcy5fcmVsYXRpdmVMb2NhdGlvbihlLmxvY2F0aW9uKX19X3NlcmlhbGl6ZVN0ZXBFbmQoZSl7cmV0dXJue2lkOmVbd10sZHVyYXRpb246ZS5kdXJhdGlvbixlcnJvcjplLmVycm9yfX1fcmVsYXRpdmVMb2NhdGlvbihlKXtyZXR1cm4gZSYmey4uLmUsZmlsZTp0aGlzLl9yZWxhdGl2ZVBhdGgoZS5maWxlKX19X3JlbGF0aXZlUGF0aChlKXtyZXR1cm4gZSYmU3QuZGVmYXVsdC5yZWxhdGl2ZSh0aGlzLl9yb290RGlyLGUpfX0sdz1TeW1ib2woXCJpZFwiKTt2YXIgbmk9SShFdCgpLDEpLG9pPUkoTWUoKSwxKSxhaT1JKEFlKCksMSksdnI9SSgkZSgpLDEpLGxpPUkoeHIoKSwxKTt2YXIgeGU9dnIuZGVmYXVsdDt2YXIgdmU9Y2xhc3MgcntzdGF0aWMgYXN5bmMgY29ubmVjdChlLHQ9e30pe2xldCBzPW5ldyByKGUsdCk7cmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChpLG4pPT57cy5fd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIixhc3luYygpPT57aShzKX0pLHMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG89PntuKG5ldyBFcnJvcihcIldlYlNvY2tldCBlcnJvcjogXCIrby5tZXNzYWdlKSkscy5fd3MuY2xvc2UoKX0pfSksc31jb25zdHJ1Y3RvcihlLHQ9e30pe3RoaXMud3NFbmRwb2ludD1lLHRoaXMuX3dzPW5ldyB4ZShlLFtdLHtwZXJNZXNzYWdlRGVmbGF0ZTohMSxtYXhQYXlsb2FkOjI1NioxMDI0KjEwMjQsaGFuZHNoYWtlVGltZW91dDozZTQsaGVhZGVyczp0fSksdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixzPT57dHJ5e3RoaXMub25tZXNzYWdlJiZ0aGlzLm9ubWVzc2FnZS5jYWxsKG51bGwsSlNPTi5wYXJzZShzLmRhdGEudG9TdHJpbmcoKSkpfWNhdGNoe3RoaXMuX3dzLmNsb3NlKCl9fSksdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIscz0+e3RoaXMub25jbG9zZSYmdGhpcy5vbmNsb3NlLmNhbGwobnVsbCl9KSx0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+e30pfWlzQ2xvc2VkKCl7cmV0dXJuIHRoaXMuX3dzLnJlYWR5U3RhdGU9PT14ZS5DTE9TSU5HfHx0aGlzLl93cy5yZWFkeVN0YXRlPT09eGUuQ0xPU0VEfXNlbmQoZSl7dGhpcy5fd3Muc2VuZChKU09OLnN0cmluZ2lmeShlKSl9Y2xvc2UoKXt0aGlzLl93cy5jbG9zZSgpfWFzeW5jIGNsb3NlQW5kV2FpdCgpe2xldCBlPW5ldyBQcm9taXNlKHQ9PnRoaXMuX3dzLm9uY2UoXCJjbG9zZVwiLHQpKTt0aGlzLmNsb3NlKCksYXdhaXQgZX19O3ZhciBWZT1jbGFzcyBleHRlbmRzIG9le2NvbnN0cnVjdG9yKGUpe2xldCB0O2lmKGUhPW51bGwmJmUuX3NlbmQpdD1lLl9zZW5kO2Vsc2UgaWYocHJvY2Vzcy5lbnYuUFdfVEVTVF9SRVBPUlRFUl9XU19FTkRQT0lOVCl7bGV0IHM9dmUuY29ubmVjdChwcm9jZXNzLmVudi5QV19URVNUX1JFUE9SVEVSX1dTX0VORFBPSU5UKTtzLnRoZW4oaT0+e2kub25tZXNzYWdlPW49PntuLm1ldGhvZD09PVwic3RvcFwiJiZwcm9jZXNzLmVtaXQoXCJTSUdJTlRcIil9LGkub25jbG9zZT0oKT0+cHJvY2Vzcy5leGl0KDApfSksdD1pPT57cy50aGVuKG49Pm4uc2VuZChpKSl9fWVsc2UgdD1zPT57Y29uc29sZS5sb2cocyl9O3N1cGVyKHQse29taXRCdWZmZXJzOiEwLG9taXRPdXRwdXQ6ITB9KSx0aGlzLl9oYXNTZW5kZXI9ISEoZSE9bnVsbCYmZS5fc2VuZCl9YXN5bmMgb25FbmQoZSl7c3VwZXIub25FbmQoZSks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QyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7RUFBQyxTQUFTQyxFQUFFQSxDQUFDM1MsQ0FBQyxFQUFDO0lBQUMsT0FBT0EsQ0FBQyxJQUFFLEdBQUcsSUFBRUEsQ0FBQyxJQUFFLElBQUksSUFBRUEsQ0FBQyxLQUFHLElBQUksSUFBRUEsQ0FBQyxLQUFHLElBQUksSUFBRUEsQ0FBQyxLQUFHLElBQUksSUFBRUEsQ0FBQyxJQUFFLEdBQUcsSUFBRUEsQ0FBQyxJQUFFLElBQUk7RUFBQTtFQUFDLFNBQVM0UyxFQUFFQSxDQUFDNVMsQ0FBQyxFQUFDO0lBQUMsSUFBSUMsQ0FBQyxHQUFDRCxDQUFDLENBQUN3RSxNQUFNO01BQUNwRSxDQUFDLEdBQUMsQ0FBQztJQUFDLE9BQUtBLENBQUMsR0FBQ0gsQ0FBQyxHQUFFLElBQUcsRUFBRUQsQ0FBQyxDQUFDSSxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsRUFBQ0EsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFHLENBQUNKLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLEdBQUMsR0FBRyxNQUFJLEdBQUcsRUFBQztNQUFDLElBQUdBLENBQUMsR0FBQyxDQUFDLEtBQUdILENBQUMsSUFBRSxDQUFDRCxDQUFDLENBQUNJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLE1BQUksR0FBRyxJQUFFLENBQUNKLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLEdBQUMsR0FBRyxNQUFJLEdBQUcsRUFBQyxPQUFNLENBQUMsQ0FBQztNQUFDQSxDQUFDLElBQUUsQ0FBQztJQUFBLENBQUMsTUFBSyxJQUFHLENBQUNKLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLEdBQUMsR0FBRyxNQUFJLEdBQUcsRUFBQztNQUFDLElBQUdBLENBQUMsR0FBQyxDQUFDLElBQUVILENBQUMsSUFBRSxDQUFDRCxDQUFDLENBQUNJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLE1BQUksR0FBRyxJQUFFLENBQUNKLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsTUFBSSxHQUFHLElBQUVKLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLEtBQUcsR0FBRyxJQUFFLENBQUNKLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsTUFBSSxHQUFHLElBQUVKLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLEtBQUcsR0FBRyxJQUFFLENBQUNKLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsTUFBSSxHQUFHLEVBQUMsT0FBTSxDQUFDLENBQUM7TUFBQ0EsQ0FBQyxJQUFFLENBQUM7SUFBQSxDQUFDLE1BQUssSUFBRyxDQUFDSixDQUFDLENBQUNJLENBQUMsQ0FBQyxHQUFDLEdBQUcsTUFBSSxHQUFHLEVBQUM7TUFBQyxJQUFHQSxDQUFDLEdBQUMsQ0FBQyxJQUFFSCxDQUFDLElBQUUsQ0FBQ0QsQ0FBQyxDQUFDSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsR0FBRyxNQUFJLEdBQUcsSUFBRSxDQUFDSixDQUFDLENBQUNJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLE1BQUksR0FBRyxJQUFFLENBQUNKLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsTUFBSSxHQUFHLElBQUVKLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLEtBQUcsR0FBRyxJQUFFLENBQUNKLENBQUMsQ0FBQ0ksQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsTUFBSSxHQUFHLElBQUVKLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLEtBQUcsR0FBRyxJQUFFSixDQUFDLENBQUNJLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLElBQUVKLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDLEdBQUMsR0FBRyxFQUFDLE9BQU0sQ0FBQyxDQUFDO01BQUNBLENBQUMsSUFBRSxDQUFDO0lBQUEsQ0FBQyxNQUFLLE9BQU0sQ0FBQyxDQUFDO0lBQUMsT0FBTSxDQUFDLENBQUM7RUFBQTtFQUFDbVMsRUFBRSxDQUFDclMsT0FBTyxHQUFDO0lBQUMyUyxpQkFBaUIsRUFBQ0YsRUFBRTtJQUFDRyxXQUFXLEVBQUNGLEVBQUU7SUFBQ0csVUFBVSxFQUFDTDtFQUFFLENBQUM7RUFBQyxJQUFHRCxFQUFFLEVBQUNGLEVBQUUsQ0FBQ3JTLE9B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