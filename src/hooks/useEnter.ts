import {useCallback} from 'react'

import useOkf from './useOkf'
import {useWallet} from 'use-wallet'

import {enter, getXOkfStakingContract} from '../okf/utils'

const useEnter = () => {
  const {account} = useWallet()
  const okf = useOkf()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXOkfStakingContract(okf),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, okf],
  )

  return {onEnter: handle}
}

export default useEnter
