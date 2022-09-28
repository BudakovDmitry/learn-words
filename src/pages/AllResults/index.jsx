import Navigation from 'src/components/Navigation'
import { Link } from 'react-router-dom'
import 'src/pages/AllResults/styles.css'
import AllResultsList from 'src/components/AllResultsList'
import { useAllResults } from 'src/pages/AllResults/useAllResults'
import { TEXT_FOR_NO_RESULTS } from 'src/constants'
import { averagePercentResult } from 'src/utils/helpers'

const AllResults = () => {
  const { allResults } = useAllResults()

  return (
    <div className="all-results">
      <Navigation>
        <Link to="/">Головна</Link>
      </Navigation>
      {allResults.length ? (
        <>
          <h2 className="all-results_header">Ваші результати:</h2>
          <div className="all-results_results">
            <AllResultsList />
            <h2 className="all-results_middle">{`Середній відсоток: ${averagePercentResult(
              allResults,
              allResults.length,
            )}%`}</h2>
          </div>
        </>
      ) : (
        <h2 className="all-results-no-results">{TEXT_FOR_NO_RESULTS}</h2>
      )}
    </div>
  )
}

export default AllResults
