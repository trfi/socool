import css from './ButtonGradient.module.css'

const ButtonGradient = (props) => {
  const { children, ...data } = props
  return (
    <>
      <button {...data} className={`.btn text-white w-full whitespace-nowrap font-semibold px-8 py-2 ${css.gradient}`}>
        { children }
      </button>
    </>
  )
}

export default ButtonGradient