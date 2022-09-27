import { useForm } from 'react-hook-form'
import 'src/components/Form/styles.css'
import { useEffect } from 'react'

const Form = ({ addWord }) => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ defaultValues: { englishWord: '', translateWord: '' } })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ englishWord: '', translateWord: '' })
    }
  }, [formState])

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
        {errors.englishWord && (
          <p className="form-error-text">{errors.englishWord.message}</p>
        )}
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
        {errors.translateWord && (
          <p className="form-error-text">{errors.translateWord.message}</p>
        )}
        <button className="form-button" type="submit">
          Зберегти
        </button>
      </form>
    </div>
  )
}

export default Form
