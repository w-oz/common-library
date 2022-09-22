declare type LoggerOptionsType = {
    /** Count of new lines between console.log */
    newline?: number;
    /** Count of break after console.log */
    break?: number;
    bold?: boolean;
    underline?: boolean;
};
export declare class LogService {
    private readonly defaultOptions;
    log(level: string, message: any, options?: LoggerOptionsType): void;
    notice(message: string, opt?: LoggerOptionsType): void;
    success(message: any, opt?: LoggerOptionsType): void;
    info(message: string, opt?: LoggerOptionsType): void;
    warn(message: string, opt?: LoggerOptionsType): void;
    error(message: string, opt?: LoggerOptionsType): void;
    debug(message: any, opt?: LoggerOptionsType): void;
    get time(): string;
}
export declare const logService: LogService;
export {};
