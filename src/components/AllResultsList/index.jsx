import AllResultsItem from 'src/components/AllResultsItem'
import 'src/components/AllResultsList/styles.css'
import { useSelector } from 'react-redux'

const AllResultsList = () => {
  const results = useSelector(state => state.results)

  return (
    <ul className="all-results-list">
      {results.map(result => (
        <AllResultsItem
          key={result.id}
          result={result.result}
          date={result.date}
        />
      ))}
    </ul>
  )
}

export default AllResultsList
