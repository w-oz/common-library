declare class ApiService {
    post(path: string, body?: {}): Promise<any>;
    get(path: string, queryParams?: {}): Promise<any>;
    private checkResponseStatus;
}
declare const _default: ApiService;
export default _default;
