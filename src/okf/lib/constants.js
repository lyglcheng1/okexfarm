import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}



export const contractAddresses = {
  okf: {
    1: '0xB7fD921e15904645Bc7f5308f3e6a843080928B3',
  },
  masterChef: {
    1: '0xaf7600DF103A2E1C2a707E233Bd2A51Ad63c12f6',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xOkf: {
    1: '0xcf6cCC6a81138069a36C3A604595e8cFA617fd2c'
  }
}

export const supportedPools = [
  // Perm Menu
 
  {
    pid: 0,
    lpAddresses: {
      1: '0xcC0DED3dfA28f4D1D0D3ED5c9AE878ea2C8F3Fc0', 
    },
    tokenAddresses: {
      1: '0xB7fD921e15904645Bc7f5308f3e6a843080928B3', 
    },
    name: 'OKF FOOD',
    symbol: 'OKF-OKB V2 LP',
    tokenSymbol: 'OKF',
    icon: '🍜', 
  },
  
  {
    pid: 0,
    lpAddresses: {
      1: '0x17782D58c715aa2A4458D5FB1C1d8e52a69a62Fc', 
    },
    tokenAddresses: {
      1: '0xB7fD921e15904645Bc7f5308f3e6a843080928B3', 
    },
    name: 'OKEx FOOD',
    symbol: 'OKB-ETH V2 LP',
    tokenSymbol: 'OKB',
    icon: '🍱', 
  },
 {
    pid: 1,
    lpAddresses: {
      1: '0x66C26362767F424c0ffA987598C63d1B10d4198b',
    },
    tokenAddresses: {
      1: '0xB7fD921e15904645Bc7f5308f3e6a843080928B3',
    },
    name: 'Circle Snail',
    symbol: 'BYFI-ETH V2 LP',
    tokenSymbol: 'BYFI',
    icon: '🐌',
  },
  
  {
    pid: 2,
    lpAddresses: {
      1: '0x1281b6f77C38ede5856550525Ff18708469999d7',
    },
    tokenAddresses: {
      1: '0xB7fD921e15904645Bc7f5308f3e6a843080928B3',
    },
    name: "BitCorn",
    symbol: 'BFCORE-BYFI V2 LP',
    tokenSymbol: 'BFCORE',
    icon: '🌽',
  },
  ]
