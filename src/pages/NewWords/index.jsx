import Navigation from 'src/components/Navigation'
import Form from 'src/components/Form'
import { useNewWords } from 'src/pages/NewWords/useNewWords'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'
import Notification from 'src/components/Notification'
import { TEXT_NOTIFICATION_ADD_WORD } from 'src/constants'

const NewWords = () => {
  const {
    addNewWord,
    containerNotification,
    activeNotification,
    setActiveNotification,
  } = useNewWords()

  return (
    <div>
      <Navigation>
        <Link to="/">Головна</Link>
      </Navigation>
      <Form addWord={addNewWord} />
      {activeNotification &&
        createPortal(
          <Notification
            text={TEXT_NOTIFICATION_ADD_WORD}
            setActive={setActiveNotification}
          />,
          containerNotification,
        )}
    </div>
  )
}

export default NewWords
