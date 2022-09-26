import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewWords from 'src/pages/NewWords'
import Interactive from 'src/pages/Interactive'
import Results from 'src/pages/Results'
import Home from 'src/pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-words" element={<NewWords />} />
        <Route path="/interactive" element={<Interactive />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
