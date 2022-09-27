import AllResultsItem from 'src/components/AllResultsItem'
import 'src/components/AllResultsList/styles.css'
import { useSelector } from 'react-redux'

const AllResultsList = () => {
  const allResults = useSelector(state => state.allResults)

  return (
    <ul className="all-results-list">
      {allResults.map(result => (
        <AllResultsItem
          key={result.id}
          result={result.percent}
          date={result.date}
        />
      ))}
    </ul>
  )
}

export default AllResultsList
