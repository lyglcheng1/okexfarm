import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useOkf from '../../hooks/useOkf'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../okf/utils'
import { getFarms } from '../../okf/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const okf = useOkf()
  const { account } = useWallet()

  const farms = getFarms(okf)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
