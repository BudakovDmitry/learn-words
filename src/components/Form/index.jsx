import { useForm } from 'react-hook-form'
import 'src/components/Form/styles.css'

const Form = () => {
  const { register, handleSubmit } = useForm()

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label" for="englishWord">
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
        <label className="form-label" for="translateWord">
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
