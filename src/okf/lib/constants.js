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
    3: '0x9514799939f381e7D6B58DbE80C8D8Ea110EbCF5',
  },
  masterChef: {
    3: '0x14a5c39124d99E960d73DaBbdfd2704e7eD6C2aD',
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
    pid: 12,
    lpAddresses: {
      1: '0x795065dCc9f64b5614C407a6EFDC400DA6221FB0',
    },
    tokenAddresses: {
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    name: 'Sushi Party!',
    symbol: 'SUSHI-ETH SLP',
    tokenSymbol: 'SUSHI',
    icon: '🍣',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x397FF1542f962076d0BFE58eA045FfA2d347ACa0',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Circle Snail',
    symbol: 'USDC-ETH SLP',
    tokenSymbol: 'USDC',
    icon: '🐌',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Donald DAI',
    symbol: 'DAI-ETH SLP',
    tokenSymbol: 'DAI',
    icon: '🦆',
  },
  {
    pid: 21,
    lpAddresses: {
      1: '0xceff51756c56ceffca006cd410b03ffc46dd3a58',
    },
    tokenAddresses: {
      1: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    },
    name: "BitCorn",
    symbol: 'WBTC-ETH SLP',
    tokenSymbol: 'WBTC',
    icon: '🌽',
  },
  {
    pid: 0,
    lpAddresses: {
      1: '0x06da0fd433C1A5d7a4faa01111c044910A184553',
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Tether Turtle',
    symbol: 'USDT-ETH SLP',
    tokenSymbol: 'USDT',
    icon: '🐢',
  },
  {
    pid: 11,
    lpAddresses: {
      1: '0x088ee5007C98a9677165D78dD2109AE4a3D04d0C',
    },
    tokenAddresses: {
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'YFI Whale',
    symbol: 'YFI-ETH SLP',
    tokenSymbol: 'YFI',
    icon: '🐋',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xF1F85b2C54a2bD284B1cf4141D64fD171Bd85539',
    },
    tokenAddresses: {
      1: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    },
    name: 'Spartan Dollar',
    symbol: 'SUSD-ETH SLP',
    tokenSymbol: 'SUSD',
    icon: '🦍',
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0xC40D16476380e4037e6b1A2594cAF6a6cc8Da967',
    },
    tokenAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'Toadie Marine',
    symbol: 'LINK-ETH SLP',
    tokenSymbol: 'LINK',
    icon: '🐸',
  },
  {
    pid: 37,
    lpAddresses: {
      1: '0xD75EA151a61d06868E31F8988D28DFE5E9df57B4',
    },
    tokenAddresses: {
      1: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    },
    name: 'Aave Boar',
    symbol: 'AAVE-ETH SLP',
    tokenSymbol: 'AAVE',
    icon: '🐗',
  }
  ]
