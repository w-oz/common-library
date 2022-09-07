import { ChainId } from "@enums";
import { BSW } from "@constants";
import { DoublePoolContractMap } from "@types";
import * as SmartChefV2ABI from '@abi/smart-chef.v2.json';


export const DOUBLE_POOL_BSW_DOT: DoublePoolContractMap = {
    [ChainId.BSC]: {
        abi: SmartChefV2ABI,
        address: '0xDB147Cffb1c902Ec8780C54aBD940f0f896B2338',
        token: BSW[ChainId.BSC].address
    }
}

export const DOUBLE_POOL_BSW_WBNB: DoublePoolContractMap = {
    [ChainId.BSC]: {
        abi: SmartChefV2ABI,
        address: '0x5FC96A28c4B6F2Ef46ba80f5F38C3CADD812caF4',
        token: BSW[ChainId.BSC].address
    }
}

export const DOUBLE_POOL_EXOS_BSW: DoublePoolContractMap = {
    [ChainId.BSC]: {
        abi: SmartChefV2ABI,
        address: '0xCA453932dbF4FC0E7f2D078F6509E1EFa0312395',
        token: BSW[ChainId.BSC].address
    }
}
