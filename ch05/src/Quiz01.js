import React, { useState } from 'react'

function Quiz01() {
   const [employees, setEmployees] = useState([
      { id: 1, name: '김도도', dept: '개발부' },
      { id: 2, name: '이레레', dept: '개발부' },
      { id: 3, name: '박미미', dept: '인사부' },
      { id: 4, name: '강파파', dept: '마케팅부' },
   ])

   const [inputName, setInputName] = useState('')
   const [inputDept, setInputDept] = useState('')
   const [removeDept, setRemoveDept] = useState('')
   const [nextId, setNextId] = useState(5)

   const onChangeName = (e) => setInputName(e.target.value)
   const onChangeDept = (e) => setInputDept(e.target.value)
   const onChangeRemoveDept = (e) => setRemoveDept(e.target.value)

   const onClickAdd = () => {
      const nextEmployees = employees.concat({
         id: nextId,
         name: inputName,
         dept: inputDept,
      })
      setNextId(nextId + 1)
      setEmployees(nextEmployees)
      setInputName('')
      setInputDept('')
   }
   const onClickRemove = (e) => {
      const nextEmployees = employees.filter((employee) => employee.dept !== removeDept)
      setEmployees(nextEmployees)
      setRemoveDept('')
   }
   const employeeList = employees.map((employee) => (
      <li key={employee.id}>
         사원명: {employee.name}, 부서: {employee.dept}
      </li>
   ))

   return (
      <>
         <input placeholder="사원 이름" value={inputName} onChange={onChangeName} />
         <input placeholder="부서" value={inputDept} onChange={onChangeDept} />
         <button onClick={onClickAdd}>추가</button>
         <br />
         <input placeholder="부서" value={removeDept} onChange={onChangeRemoveDept} />
         <button onClick={onClickRemove}>부서별 삭제</button>
         <ul>{employeeList}</ul>
      </>
   )
}

export default Quiz01
