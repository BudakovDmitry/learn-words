import Navigation from 'src/components/Navigation'
import Form from 'src/components/Form'
import { useNewWords } from 'src/pages/NewWords/useNewWords'

const NewWords = () => {
  const { addNewWord } = useNewWords()

  return (
    <div>
      <Navigation />
      <Form addWord={addNewWord} />
    </div>
  )
}

export default NewWords
