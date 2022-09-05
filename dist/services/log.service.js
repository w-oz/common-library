"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const log_level_enum_1 = __importDefault(require("../enums/log-level.enum"));
const colors = require('colors');
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
class LogService {
    constructor() {
        this.defaultOptions = {
            newline: 0,
            bold: false
        };
    }
    log(level, message, options = {}) {
        const opts = { ...this.defaultOptions, ...options };
        switch (level.toLowerCase()) {
            case log_level_enum_1.default.Notice:
                message = colors.notice(message);
                break;
            case log_level_enum_1.default.Info:
                message = colors.info(message);
                break;
            case log_level_enum_1.default.Success:
                message = colors.success(message);
                break;
            case log_level_enum_1.default.Warn:
                message = colors.warn(message);
                break;
            case log_level_enum_1.default.Error:
                message = colors.error(message);
                break;
            case log_level_enum_1.default.Debug:
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
    }
    notice(message, opt = {}) {
        this.log(log_level_enum_1.default.Notice, message, opt);
    }
    success(message, opt = {}) {
        this.log(log_level_enum_1.default.Success, message, opt);
    }
    info(message, opt = {}) {
        this.log(log_level_enum_1.default.Info, message, opt);
    }
    warn(message, opt = {}) {
        this.log(log_level_enum_1.default.Warn, message, opt);
    }
    error(message, opt = {}) {
        this.log(log_level_enum_1.default.Error, message, opt);
    }
    debug(message, opt = {}) {
        this.log(log_level_enum_1.default.Debug, message, opt);
    }
    get time() {
        return colors.datetime(`[ ${(0, moment_1.default)().format('YYYY.MM.DD HH:mm:ss')} ]`); // [ 2021.12.13  16:20:25 ]
    }
}
exports.default = new LogService;
