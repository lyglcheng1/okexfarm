import {useCallback} from 'react'

import useOkf from './useOkf'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getOkfContract,
  getXOkfStakingContract
} from '../okf/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const okf = useOkf()
  const lpContract = getOkfContract(okf)
  const contract = getXOkfStakingContract(okf)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
