import './App.css'
function App() {
  return (
    <div className='container'>
      <div className='clock'>
        <p className='title'>当前时间</p>
        <p className='time'>{new Date().toLocaleString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        } as Intl.DateTimeFormatOptions)}</p>
      </div>
    </div>
  )
}

export default App
