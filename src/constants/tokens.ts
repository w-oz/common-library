import { ChainId } from "@enums";
import { TokenMap } from "@types";

export const BSW: TokenMap = {
    [ChainId.BSC]: {
        address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
        symbol: 'BSW',
        name: 'Biswap token',
        core: true
    },
}

export const BTCB: TokenMap = {
    [ChainId.BSC]: {
        address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
        symbol: 'BTCB',
        name: 'Bitcoin BEP2',
        core: true
    },
}

export const BUSD: TokenMap = {
    [ChainId.BSC]: {
        address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        symbol: 'BUSD',
        name: 'Binance USD',
        core: true
    },
}

export const DAI: TokenMap = {
    [ChainId.BSC]: {
        address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        symbol: 'DAI',
        name: 'Dai',
        core: true
    },
}

export const ETH: TokenMap = {
    [ChainId.BSC]: {
        address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
        symbol: 'ETH',
        name: 'Ethereum',
        core: true
    },
}

export const EXOS: TokenMap = {
    [ChainId.BSC]: {
        address: '0x16b8dBa442cc9fAa40d0Dd53f698087546CCF096',
        symbol: 'EXOS',
        name: 'Exobots',
        core: false
    },
}

export const USDT: TokenMap = {
    [ChainId.BSC]: {
        address: '0x55d398326f99059fF775485246999027B3197955',
        symbol: 'USDT',
        name: 'Tether USD',
        core: true
    }
}

export const LTC: TokenMap = {
    [ChainId.BSC]: {
        address: '0x412b607f4cBE9CaE77C6F720A701CD60fa0EBD3f',
        symbol: 'LTC',
        name: 'BiswapPair',
        core: true
    }
}

export const USDC: TokenMap = {
    [ChainId.BSC]: {
        address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
        symbol: 'USDC',
        name: 'USD Coin',
        core: true
    }
}

export const WBNB: TokenMap = {
    [ChainId.BSC]: {
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        symbol: 'WBNB',
        name: 'Wrapped BNB',
        core: true
    },
    [ChainId.AVALANCHE]: {
        address: '0x442F7f22b1EE2c842bEAFf52880d4573E9201158',
        symbol: 'WBNB',
        name: 'Wrapped BNB',
        core: true
    },
    [ChainId.POLYGON]: {
        address: '0xecdcb5b88f8e3c15f95c720c51c71c9e2080525d',
        symbol: 'WBNB',
        name: 'Wrapped BNB',
        core: true
    },
}
