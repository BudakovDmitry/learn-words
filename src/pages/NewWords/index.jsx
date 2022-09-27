import Navigation from 'src/components/Navigation'
import Form from 'src/components/Form'
import { useNewWords } from 'src/pages/NewWords/useNewWords'
import { Link } from 'react-router-dom'

const NewWords = () => {
  const { addNewWord } = useNewWords()

  return (
    <div>
      <Navigation>
        <Link to="/">Домашня</Link>
      </Navigation>
      <Form addWord={addNewWord} />
    </div>
  )
}

export default NewWords
