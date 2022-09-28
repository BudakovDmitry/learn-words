import AllResultsItem from 'src/components/AllResultsItem'
import 'src/components/AllResultsList/styles.css'
import { useAllResultsList } from 'src/components/AllResultsList/useAllResultsList'

const AllResultsList = () => {
  const { allResults } = useAllResultsList()

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
