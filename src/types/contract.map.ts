import { Interface } from "ethers-contracts";

export type ContractMap = {
    [chainId: number]: {
        abi: Interface;
        address?: string;
    }
};