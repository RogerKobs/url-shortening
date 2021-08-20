import React, { useState } from 'react'
import style from './style.module.scss'

interface ShortenLink {
  code: string,
  original_link: string,
  short_link: string
}

export default function Shortening() {
  const [link, setLink] = useState(null)
  const [cutting, setCutting] = useState(false)

  const [listShortenLink, setListShortenLink] = useState<ShortenLink[]>([])

  const handleChange = (e: any) => {
    setLink(e.target.value)
  }

  const shortenLink = () => {
    let copyListShortenLink : ShortenLink[] = Object.assign([], listShortenLink)

    setCutting(true)
    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then((resp) => {
        copyListShortenLink.push(resp.result)
        console.log(copyListShortenLink, resp)

        localStorage.setItem('_listShortenLink', JSON.stringify(copyListShortenLink))

        setListShortenLink(copyListShortenLink)
        setCutting(false)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <div className={style.container}>
        <input
          type='text'
          placeholder="Shorten a link here..."
          onChange={(e) => handleChange(e)}
        />

        <button
          onClick={shortenLink}
          disabled={cutting}
        >{cutting ? 'Cutting' : 'Shorten it!'}</button>
      </div>

      {listShortenLink.length > 0 &&
        listShortenLink.map(shortenLink => (
          <div key={shortenLink.code} className={style.containerShortenLink}>
            <p>{shortenLink.original_link}</p>

            <div className={style.copyShotLink}>
              <p>{shortenLink.short_link}</p>

              <button
                onClick={() => navigator.clipboard.writeText(shortenLink.short_link)}
              >Copy</button>
            </div>
          </div>
        ))}
      <div>

      </div>
    </div>
  )
}
