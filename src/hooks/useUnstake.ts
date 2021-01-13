import { useCallback } from 'react'

import useOkf from './useOkf'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../okf/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const okf = useOkf()
  const masterChefContract = getMasterChefContract(okf)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, okf],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
