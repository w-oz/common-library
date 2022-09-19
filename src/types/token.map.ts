export type TokenMap = {
    [chainId: number]: {
        address: string;
        symbol: string;
        name: string;
        core: boolean;
    }
};