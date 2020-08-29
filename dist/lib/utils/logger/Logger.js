"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
require("./ILogger");
class Logger {
    constructor(level) {
        this.level = level;
    }
    trace(...values) {
        this.write(10 /* Trace */, ...values);
    }
    debug(...values) {
        this.write(20 /* Debug */, ...values);
    }
    info(...values) {
        this.write(30 /* Info */, ...values);
    }
    warn(...values) {
        this.write(40 /* Warn */, ...values);
    }
    error(...values) {
        this.write(50 /* Error */, ...values);
    }
    fatal(...values) {
        this.write(60 /* Fatal */, ...values);
    }
    write(level, ...values) {
        if (level < this.level)
            return;
        const method = Logger.levels.get(level);
        if (typeof method === 'string')
            console[method](...values);
    }
}
exports.Logger = Logger;
Logger.levels = new Map([
    [10 /* Trace */, 'trace'],
    [20 /* Debug */, 'debug'],
    [30 /* Info */, 'info'],
    [40 /* Warn */, 'warn'],
    [50 /* Error */, 'error'],
    [60 /* Fatal */, 'error']
]);
//# sourceMappingURL=Logger.js.map