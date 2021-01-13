import {useCallback} from 'react'

import useOkf from './useOkf'
import {useWallet} from 'use-wallet'

import {leave, getXOkfStakingContract} from '../okf/utils'

const useLeave = () => {
  const {account} = useWallet()
  const okf = useOkf()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXOkfStakingContract(okf),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, okf],
  )

  return {onLeave: handle}
}

export default useLeave
