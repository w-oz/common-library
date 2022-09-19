import { Interface } from "ethers-contracts";
export declare type DoublePoolContractMap = {
    [chainId: number]: {
        abi: Interface;
        address: string;
        token: string;
    };
};
