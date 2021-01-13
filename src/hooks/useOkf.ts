import { useContext } from 'react'
import { Context } from '../contexts/OkfProvider'

const useOkf = () => {
  const { okf } = useContext(Context)
  return okf
}

export default useOkf
