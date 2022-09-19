import { Interface } from "ethers-contracts";
export declare type ContractMap = {
    [chainId: number]: {
        abi: Interface;
        address?: string;
    };
};
