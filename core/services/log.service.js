"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var _enums_1 = require("../enums");
var colors = require('colors');
colors.setTheme({
    notice: 'white',
    info: 'white',
    success: 'green',
    warn: 'yellow',
    error: 'red',
    debug: 'yellow',
    help: 'cyan',
    verbose: 'cyan',
    datetime: 'blue',
    unknown: ['black', 'bgWhite']
});
var LogService = /** @class */ (function () {
    function LogService() {
        this.defaultOptions = {
            newline: 0,
            bold: false
        };
    }
    LogService.prototype.log = function (level, message, options) {
        if (options === void 0) { options = {}; }
        var opts = __assign(__assign({}, this.defaultOptions), options);
        switch (level.toLowerCase()) {
            case _enums_1.LogLevel.Notice:
                message = colors.notice(message);
                break;
            case _enums_1.LogLevel.Info:
                message = colors.info(message);
                break;
            case _enums_1.LogLevel.Success:
                message = colors.success(message);
                break;
            case _enums_1.LogLevel.Warn:
                message = colors.warn(message);
                break;
            case _enums_1.LogLevel.Error:
                message = colors.error(message);
                break;
            case _enums_1.LogLevel.Debug:
                message = colors.debug('🪲 ' + message);
                break;
            default:
                message = colors.unknown(message);
        }
        if (opts.bold) {
            message = colors.bold(message);
        }
        if (opts.underline) {
            message = colors.underline(message);
        }
        if (opts.newline > 0) {
            console.log('\n'.repeat(opts.newline));
        }
        // output log
        console.log(this.time, message);
        if (opts.break > 0) {
            console.log('\n'.repeat(opts.break));
        }
    };
    LogService.prototype.notice = function (message, opt) {
        if (opt === void 0) { opt = {}; }
        this.log(_enums_1.LogLevel.Notice, message, opt);
    };
    LogService.prototype.success = function (message, opt) {
        if (opt === void 0) { opt = {}; }
        this.log(_enums_1.LogLevel.Success, message, opt);
    };
    LogService.prototype.info = function (message, opt) {
        if (opt === void 0) { opt = {}; }
        this.log(_enums_1.LogLevel.Info, message, opt);
    };
    LogService.prototype.warn = function (message, opt) {
        if (opt === void 0) { opt = {}; }
        this.log(_enums_1.LogLevel.Warn, message, opt);
    };
    LogService.prototype.error = function (message, opt) {
        if (opt === void 0) { opt = {}; }
        this.log(_enums_1.LogLevel.Error, message, opt);
    };
    LogService.prototype.debug = function (message, opt) {
        if (opt === void 0) { opt = {}; }
        this.log(_enums_1.LogLevel.Debug, message, opt);
    };
    Object.defineProperty(LogService.prototype, "time", {
        get: function () {
            return colors.datetime("[ ".concat((0, moment_1.default)().format('YYYY.MM.DD HH:mm:ss'), " ]")); // [ 2021.12.13  16:20:25 ]
        },
        enumerable: false,
        configurable: true
    });
    return LogService;
}());
exports.default = {
    logService: new LogService(),
    LogService: LogService
};
