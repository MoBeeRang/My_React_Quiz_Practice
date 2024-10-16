import React, { useState } from 'react'
import './App.css'

const Quiz03 = () => {
   const [pokemons, setPoke] = useState([
      { id: 1, name: '피카츄', img: '/images/피카츄.png' },
      { id: 2, name: '메타몽', img: '/images/메타몽.png' },
      { id: 3, name: '파이리', img: '/images/파이리.png' },
   ])

   const [pokeName, setPokeName] = useState('')
   const [nextId, setNextId] = useState(4)

   const onChange = (e) => {
     // console.log('onChange')
      setPokeName(e.target.value)
   }
   //포켓몬 추가
   const onClick = (e) => {
      //console.log('onClick')
      const nextPokemons = pokemons.concat({
         id: nextId,
         name: pokeName,
         img: '/images/'+pokeName+'.png'
      })
      setPoke(nextPokemons)
      setPokeName('')
      setNextId(nextId+1)
   }
   const onDoubleClick = (e) => {
      //console.log('onDoubleClick')
      const nextPokemons = pokemons.filter((pokemon) => {
         return e.target.alt != pokemon.name
      })
      setPoke(nextPokemons)
      setPokeName('')
   }
   //포멧몬이름 잘못입력했을때 처리
   const onError = (e) => {
      //console.log('onError')
      alert('올바른 이름을 입력해주세요')
      const nextPokemons = pokemons.filter((pokemon) => {
         return e.target.alt != pokemon.name
      })
      setPoke(nextPokemons)
      setPokeName('')
   }

   const pokesList = pokemons.map((poke) => (
      <li  key = {poke.id}>
         <div>
            <img onDoubleClick={onDoubleClick} src={poke.img} alt={poke.name} width="130" onError={onError}/>
            <p>{poke.name}</p>
         </div>
      </li>
   ))

   return (
      <>
         <h2>포켓몬 도감</h2>
         <input value={pokeName} onChange={onChange}></input>
         <button onClick={onClick}>등록</button>
         <ul>{pokesList}</ul>
      </>
   )
}

export default Quiz03
