import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewWords from 'src/pages/NewWords'
import Interactive from 'src/pages/Interactive'
import Result from 'src/pages/Result'
import AllResults from 'src/pages/AllResults'
import Home from 'src/pages/Home'
import PageNotFound from 'src/pages/PageNotFound'
import store from 'src/store/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-words" element={<NewWords />} />
          <Route path="/interactive" element={<Interactive />} />
          <Route path="/result" element={<Result />} />
          <Route path="/all-results" element={<AllResults />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
