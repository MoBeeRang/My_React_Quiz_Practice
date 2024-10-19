import React, { useState } from 'react'
import './App.css'

const Quiz03 = () => {
   const [pokemons, setPoke] = useState([
      { id: 1, name: '피카츄', img: '/images/피카츄.png' }, //알아서 public을 인지해서 가져온다고 함.
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
      var isDblName = false
      pokemons.forEach((pokemon) => {
         if (pokemon.name == pokeName) {
            isDblName = true
            return true
         }
      })
      if (isDblName) {
         return
      }

      const nextPokemons = pokemons.concat({
         id: nextId,
         name: pokeName,
         img: '/images/' + pokeName + '.png',
      })
      setPoke(nextPokemons)
      setPokeName('')
      setNextId(nextId + 1)
   }
   const onDoubleClick = (e) => {
      //console.log('onDoubleClick')
      const nextPokemons = pokemons.filter((pokemon) => {
         //주의)) id로 하지 않고 현재 이름으로 찾게 되어있는데, 중복 등록 시 두개 다 사라지는 불상사 발생
         //나는 중복등록 못하게 막아서 상관없긴 함.
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
      <li key={poke.id}>
         <div>
            <img onDoubleClick={onDoubleClick} src={poke.img} alt={poke.name} width="130" onError={onError} />
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
