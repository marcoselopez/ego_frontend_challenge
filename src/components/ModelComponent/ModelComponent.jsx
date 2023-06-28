import { useContext, useEffect } from "react"
import AppContext from "../../AppContext"


const ModelComponent = () => {

  // CONTEXT
  const { modelId, setTabsValue } = useContext(AppContext);

  useEffect(() => {
    setTabsValue(1)
  }, [])

  return (
    <div>{modelId}</div>
  )
}

export default ModelComponent