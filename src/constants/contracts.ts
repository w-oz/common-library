import { ChainId } from "@enums";
import { ContractMap } from "@types";
import * as MulticallABI from '@abi/multicall.abi.json';
import * as FactoryABI from '@abi/pancake-factory.abi.json';
import * as ERC20ABI from '@abi/erc20.abi.json';


export const ERC20: ContractMap = {
    [ChainId.BSC]: {
        abi: ERC20ABI,
        address: '0x858E3312ed3A876947EA49d572A7C42DE08af7EE',
    }
}

export const MULTI_CALL: ContractMap = {
    [ChainId.BSC]: {
        abi: MulticallABI,
        address: '0x1ee38d535d541c55c9dae27b12edf090c608e6fb',
    }
}

export const FACTORY: ContractMap = {
    [ChainId.BSC]: {
        abi: FactoryABI,
        address: '0x858E3312ed3A876947EA49d572A7C42DE08af7EE',
    }
}
