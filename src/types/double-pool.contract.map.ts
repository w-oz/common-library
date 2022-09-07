import { Interface } from "ethers-contracts";


export type DoublePoolContractMap = {
    [chainId: number]: {
        abi: Interface;
        address: string;
        token: string; // адрес токена, який стейкається
    }
};