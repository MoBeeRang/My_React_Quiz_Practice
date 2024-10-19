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
   const projectList = projects.map((project) => (
      <li onDoubleClick={onDoubleClick} id={project.id} key={project.id}>
         프로젝트명:{project.name}, 상태:{project.status}
      </li>
   ))
   const onChangeName = (e) => setProjectName(e.target.value)

   const onChangeStatus = (e) => {
      console.log(e.target.value)
      console.log(e.target.innnerText)
      return setProjectStatus(e.target.value)
   }

   const onClick = () => {
      const nextProjects = projects.concat({
         id: nextId,
         name: projectName,
         status: projectStatus,
      })
      setNextId(nextId + 1)
      setProjects(nextProjects)
      setProjectName('')
   }

   return (
      <>
         <input placeholder="프로젝트 이름" value={projectName} onChange={onChangeName} />
         {/* value에 값있있으면 그대로 value값이 되고,  없으면 select된 option의 innertext가 value가 됨*/}
         <select onChange={onChangeStatus}>
            <option value="미완료">미완료</option>
            <option value="완료">완료</option>
         </select>
         <button onClick={onClick}>추가</button>
         <ul>{projectList}</ul>
      </>
   )
}

export default Quiz02
