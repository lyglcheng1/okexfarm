import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../okf/utils'
import useOkf from './useOkf'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const okf = useOkf()
  const masterChefContract = getMasterChefContract(okf)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, okf])

  useEffect(() => {
    if (account && masterChefContract && okf) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, okf])

  return balance
}

export default useEarnings
