import { useCallback } from 'react'

import useOkf from './useOkf'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../okf/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const okf = useOkf()
  const masterChefContract = getMasterChefContract(okf)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, okf])

  return { onReward: handleReward }
}

export default useReward
