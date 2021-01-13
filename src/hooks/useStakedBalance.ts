import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../okf/utils'
import useOkf from './useOkf'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const okf = useOkf()
  const masterChefContract = getMasterChefContract(okf)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, okf])

  useEffect(() => {
    if (account && okf) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, okf])

  return balance
}

export default useStakedBalance
