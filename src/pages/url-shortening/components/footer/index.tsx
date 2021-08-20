import style from './style.module.scss'

export default function Footer() {
  return (
    <div className={style.container}>
      <div >
        <img className={style.logo} src="./images/logo.svg" alt="Logo" />
      </div>

      <div>
        <p>Features</p>

        <a href="">Link Shortening</a>
        <a href="">Branded Links</a>
        <a href="">Analytics</a>
      </div>

      <div>
        <p>Resources</p>

        <a href="">Blog</a>
        <a href="">Developers</a>
        <a href="">Support</a>
      </div>

      <div>
        <p>Company</p>

        <a href="">About</a>
        <a href="">Out Team</a>
        <a href="">Careers</a>
        <a href="">Contact</a>
      </div>

      <div className={style.contact}>
        <a href="https://www.facebook.com/rogerkobs.1/" target="_blank">
          <img src="./images/icon-facebook.svg" alt="Icon Facebook" />
        </a>
        <a href="https://twitter.com/RogerKobs" target="_blank">
          <img src="./images/icon-twitter.svg" alt="Icon Twitter" />
        </a>
        <a href="" target="_blank">
          <img src="./images/icon-pinterest.svg" alt="Icon Pinterest" />
        </a>
        <a href="https://www.instagram.com/rogerkobs/?hl=pt-br" target="_blank">
          <img src="./images/icon-instagram.svg" alt="Icon Instagram" />
        </a>
      </div>
    </div>
  )
}
