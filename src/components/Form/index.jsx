import { useForm } from 'react-hook-form'
import 'src/components/Form/styles.css'

const Form = ({ addWord }) => {
  const { register, handleSubmit, reset } = useForm()

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(addWord)}>
        <label className="form-label" htmlFor="englishWord">
          Напишіть слово Англійською
        </label>
        <input
          className="form-input"
          id="englishWord"
          type="text"
          {...register('englishWord', {
            required: "Це поле обов'язково до заповнення",
          })}
        />
        <label className="form-label" htmlFor="translateWord">
          Напишіть переклад Українською
        </label>
        <input
          className="form-input"
          id="translateWord"
          type="text"
          {...register('translateWord', {
            required: "Це поле обов'язково до заповнення",
          })}
        />
        <button className="form-button" type="submit">
          Зберегти
        </button>
      </form>
    </div>
  )
}

export default Form
