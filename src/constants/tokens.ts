import { ChainId } from "@enums";
import { TokenMap } from "@types";


export const BSW: TokenMap = {
    [ChainId.BSC]: {
        address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
        symbol: 'BSW',
        name: 'Biswap token'
    },
}

export const EXOS: TokenMap = {
    [ChainId.BSC]: {
        address: '0x16b8dba442cc9faa40d0dd53f698087546ccf096',
        symbol: 'EXOS',
        name: 'Exobots'
    },
}

export const WBNB: TokenMap = {
    [ChainId.BSC]: {
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        symbol: 'WBNB',
        name: 'Wrapped BNB'
    },
}

