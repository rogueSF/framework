"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _listener;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const BasePiece_1 = require("./base/BasePiece");
class Event extends BasePiece_1.BasePiece {
    constructor(context, options = {}) {
        var _a, _b;
        super(context, options);
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        _listener.set(this, void 0);
        this.emitter = (_a = (typeof options.emitter === 'string' ? this.client[options.emitter] : options.emitter)) !== null && _a !== void 0 ? _a : null;
        this.event = (_b = options.event) !== null && _b !== void 0 ? _b : '';
        __classPrivateFieldSet(this, _listener, this.emitter && this.event ? this.run.bind(this) : null);
    }
    onLoad() {
        if (__classPrivateFieldGet(this, _listener))
            this.emitter.on(this.event, __classPrivateFieldGet(this, _listener));
    }
    onUnload() {
        if (__classPrivateFieldGet(this, _listener))
            this.emitter.off(this.event, __classPrivateFieldGet(this, _listener));
    }
    toJSON() {
        return {
            ...super.toJSON(),
            event: this.event
        };
    }
}
exports.Event = Event;
_listener = new WeakMap();
//# sourceMappingURL=Event.js.map