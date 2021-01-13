import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../okf/utils'
import useOkf from './useOkf'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const okf = useOkf()
  const farms = getFarms(okf)
  const masterChefContract = getMasterChefContract(okf)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, okf])

  useEffect(() => {
    if (account && masterChefContract && okf) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, okf])

  return balances
}

export default useAllEarnings
