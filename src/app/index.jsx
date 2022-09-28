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
          <Route path="/learn-words" element={<Home />} />
          <Route path="/learn-words/new-words" element={<NewWords />} />
          <Route path="/learn-words/interactive" element={<Interactive />} />
          <Route path="/learn-words/result" element={<Result />} />
          <Route path="/learn-words/all-results" element={<AllResults />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
