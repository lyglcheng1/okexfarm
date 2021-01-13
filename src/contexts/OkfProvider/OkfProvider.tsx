import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Okf } from '../../okf'

export interface OkfContext {
  okf?: typeof Okf
}

export const Context = createContext<OkfContext>({
  okf: undefined,
})

declare global {
  interface Window {
    okfsauce: any
  }
}

const OkfProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [okf, setOkf] = useState<any>()

  // @ts-ignore
  window.okf = okf
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const okfLib = new Okf(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setOkf(okfLib)
      window.okfsauce = okfLib
    }
  }, [ethereum])

  return <Context.Provider value={{ okf }}>{children}</Context.Provider>
}

export default OkfProvider
