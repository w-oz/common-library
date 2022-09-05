import moment from "moment";
import { LogLevel } from "@enums";

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
    unknown: [ 'black', 'bgWhite' ]
});

type LoggerOptionsType = {
    /** Count of new lines between console.log */
    newline?: number;

    /** Count of break after console.log */
    break?: number;
    bold?: boolean;
    underline?: boolean;
}

class LogService {
    private readonly defaultOptions: LoggerOptionsType = {
        newline: 0,
        bold: false
    };

    log(level: string, message: any, options: LoggerOptionsType = {}) {
        const opts = { ...this.defaultOptions, ...options };

        switch (level.toLowerCase()) {
            case LogLevel.Notice:
                message = colors.notice(message);

                break;
            case LogLevel.Info:
                message = colors.info(message);

                break;

            case LogLevel.Success:
                message = colors.success(message);

                break;
            case LogLevel.Warn:
                message = colors.warn(message);

                break;
            case LogLevel.Error:
                message = colors.error(message);

                break;
            case LogLevel.Debug:
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

    notice(message: string, opt: LoggerOptionsType = {}) {
        this.log(LogLevel.Notice, message, opt);
    }

    success(message: any, opt: LoggerOptionsType = {}) {
        this.log(LogLevel.Success, message, opt);
    }

    info(message: string, opt: LoggerOptionsType = {}) {
        this.log(LogLevel.Info, message, opt);
    }

    warn(message: string, opt: LoggerOptionsType = {}) {
        this.log(LogLevel.Warn, message, opt);
    }

    error(message: string, opt: LoggerOptionsType = {}) {
        this.log(LogLevel.Error, message, opt);
    }

    debug(message: any, opt: LoggerOptionsType = {}) {
        this.log(LogLevel.Debug, message, opt);
    }

    get time(): string {
        return colors.datetime(`[ ${moment().format('YYYY.MM.DD HH:mm:ss')} ]`); // [ 2021.12.13  16:20:25 ]
    }
}

export default new LogService;