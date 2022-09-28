import CloseIcon from 'src/images/close-icon.svg'
import 'src/components/Notification/styles.css'

const Notification = ({ text = '', setActive }) => {
  return (
    <div className="notification-container" onClick={e => e.stopPropagation()}>
      <p className="notification-text">{text}</p>
      <button
        className="notification-button"
        onClick={e => {
          e.stopPropagation()
          setActive(false)
        }}
      >
        <img src={CloseIcon} />
      </button>
    </div>
  )
}

export default Notification
