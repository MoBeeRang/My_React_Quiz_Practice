import React, { useState } from 'react'

function Quiz02() {
   const [projects, setProjects] = useState([
      { id: 1, name: '프로젝트 A', status: '미완료' },
      { id: 2, name: '프로젝트 B', status: '완료' },
   ])
   const [projectName, setProjectName] = useState('')
   const [projectStatus, setProjectStatus] = useState('미완료')
   const [nextId, setNextId] = useState(3)
   
   const onDoubleClick = (e) => {
      const nextProjects = projects.filter((proj) => {
         return proj.id != e.target.id
      })
      setProjects(nextProjects)
      setProjectName('')
   }
   const projectList = projects.map((project, idx) => <li onDoubleClick={onDoubleClick} id={ project.id} key={ idx}>프로젝트명:{project.name}, 상태:{project.status}</li>)
   const onChangeName = (e) => { setProjectName(e.target.value) }
   const onChangeStatus = (e) => { 
      setProjectStatus(e.target.value)
   }
   const onClick = () => {
      const nextProjects = projects.concat({
         id: nextId,
         name: projectName,
         status: projectStatus
      })
      setNextId(nextId + 1)
      setProjects(nextProjects)
      setProjectName('')
   }

   return <>
      <input value={projectName} onChange={onChangeName}/>
      <select onChange={onChangeStatus}>
         <option>미완료</option>
         <option>완료</option>
      </select>
      <button onClick={onClick}>추가</button>
      <ul>
         { projectList}
      </ul>      
   </>
}

export default Quiz02
