import { useState } from "react"
import { list, longList, shortList } from "./data"
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai"
import { FaQuoteRight } from "react-icons/fa"
const Carousel = () => {
  const [lista, setLista] = useState(longList)
  const [correImagen, setCorreimagen] = useState(0)

  const left = () => {
    setCorreimagen((oldPerson) => {
      console.log("oldPerson", oldPerson)
      oldPerson > 0
        ? (oldPerson = oldPerson - 1)
        : (oldPerson = lista.length - 1)

      return oldPerson
    })
  }

  const right = () => {
    setCorreimagen((oldPerson) => {
      const result = (oldPerson + 1) % lista.length
      return result
    })
  }

  return (
    <section className='slider'>
      {lista.map((item, index) => {
        const { name, id, image, quote, title } = item

        return (
          <article
            className='tarjeta'
            key={id}
            style={{
              transform: `translateX(${100 * (index - correImagen)}%)`,
              opacity: index === correImagen ? 1 : 0,
              visibility: index === correImagen ? "visible" : "hidden",
            }}
          >
            <img src={image} alt={name}></img>
            <p className='nombre'>{name}</p>
            <p className='titulo'>{title}</p>
            <p className='quote'>{quote}</p>
            <FaQuoteRight className='quoteIcono'></FaQuoteRight>
          </article>
        )
      })}

      <button type='button' className='prev' onClick={right}>
        <AiFillLeftSquare></AiFillLeftSquare>
      </button>
      <button type='button' className='next' onClick={left}>
        <AiFillRightSquare></AiFillRightSquare>
      </button>
    </section>
  )
}
export default Carousel
