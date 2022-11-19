import React from 'react'

export default function Buscador() {

    const handleBar = (e) => {
        e.preventDefault()
        const search = e.target.search.value
        console.log(search)
    }

  return (
    <>
    <form onSubmit={handleBar} className='d-flex align-items-center'>
        <input className='mb-0 mx-2' type="search" name="search" placeholder="Buscar.."/>
        <button className='btn btn-success' type='submit'>Enviar</button>
    </form>
    </>
  )
}
