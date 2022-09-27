import 'src/components/AllResultsItem/styles.css'

const AllResultsItem = ({ result, date }) => {
  return <li className="all-results-item">{`${result}% - ${date}`}</li>
}

export default AllResultsItem
