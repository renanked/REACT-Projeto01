import { useState } from 'react'

function App() {
  const [value, setValue] = useState(0)

  return (
    <>
      <div>
        <h1>Contadora usando React</h1>
        <button className='btn' onClick={() => setValue(value + 1 )}>Acrescentar + 1</button>
        <button className='btn' onClick={() => setValue(value - 1 )}>Diminuir - 1</button>
        <button className='btn' onClick={() => setValue(value + 2 )}>+ 2</button>
        <button className='btn' onClick={() => setValue(0)}>Resetar</button>
        <p>{value}</p>
      </div>

    </>
  )
}

export default App
