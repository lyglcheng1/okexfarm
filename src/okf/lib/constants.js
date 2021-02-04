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
    3: '0x71B8A561dE89102Fd2e866c7598d5F958F262A88',
  },
  masterChef: {
    3: '0xB7fD921e15904645Bc7f5308f3e6a843080928B3',
  },
  weth: {
    3: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xOkf: {
    3: '0xaf7600DF103A2E1C2a707E233Bd2A51Ad63c12f6'
  }
}

export const supportedPools = [
  // Perm Menu
 
  {
    pid: 0,
    lpAddresses: {
      3: '0x4b76151275fc32fc9c0d333bbdbeb5ebd7229aba', 
    },
    tokenAddresses: {
      3: '0x71B8A561dE89102Fd2e866c7598d5F958F262A88', 
    },
    name: 'Circle Snail',
    symbol: 'HDP-link SLP',
    tokenSymbol: 'HDP',
    icon: '🍱', 
  },
  
  ]
