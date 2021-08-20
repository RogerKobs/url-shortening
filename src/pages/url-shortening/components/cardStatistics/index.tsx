import style from './style.module.scss'

interface Props {
  icon: string,
  title: string,
  message: string
}

export default function CardStatistics({ icon, title, message }: Props) {
  return (
    <div className={style.container}>
      <div className={style.icon}>
        <img src={`./images/${icon}`} alt="" />
      </div>

      <div className={style.text}>
        <p className={style.title}>{title}</p>
        <p className={style.message}>{message}</p>
      </div>
    </div>
  )
}
