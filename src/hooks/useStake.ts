import { useCallback } from 'react'

import useOkf from './useOkf'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../okf/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const okf = useOkf()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(okf),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, okf],
  )

  return { onStake: handleStake }
}

export default useStake
