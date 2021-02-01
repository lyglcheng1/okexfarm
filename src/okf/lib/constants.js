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
    3: '0x9a6f7B14d612d1E8854e40D79EacC3E5A1989f42',
  },
  masterChef: {
    3: '0x40A1Cb6B9a19061E4cE312E92570159196E847c2',
  },
  weth: {
    3: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xOkf: {
    3: '0x490bc5127307DE120FBEb08527B9e050885f24b0'
  }
}

export const supportedPools = [
  // Perm Menu
 
  {
    pid: 2,
    lpAddresses: {
      3: '0x9a6f7B14d612d1E8854e40D79EacC3E5A1989f42', 
    },
    tokenAddresses: {
      3: '0x9a6f7B14d612d1E8854e40D79EacC3E5A1989f42', 
    },
    name: 'Circle Snail',
    symbol: 'LINK-HDP SLP',
    tokenSymbol: 'LINK',
    icon: '🍱', 
  },
  
   {
    pid: 3,
    lpAddresses: {
      3: '0x4b76151275fc32fc9c0d333bbdbeb5ebd7229aba', 
    },
    tokenAddresses: {
      3: '0x9a6f7B14d612d1E8854e40D79EacC3E5A1989f42', 
    },
    name: 'Circle Snail',
    symbol: 'UNISWAP-OKZ V2',
    tokenSymbol: 'OKZ',
    icon: '❤', 
  },
 
  ]
