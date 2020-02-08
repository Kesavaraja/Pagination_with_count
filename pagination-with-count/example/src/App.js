import React from 'react'
import { useMyHook } from 'pagination-with-count'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App