import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Category from './Category'
import NewsList2 from './NewsList2'
import NewsPage from './NewsPage'
import './NavLink.css'

function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <NavLink to="/">NewsPage</NavLink>
            </li>
            <li>
               <NavLink to="/category">Category</NavLink>
            </li>
            <li>
               <NavLink to="/newsList">NewsList</NavLink>
            </li>
         </ul>
         <Routes>
            <Route path="/" element={<NewsPage />} />
            <Route path="/category" element={<Category />} />
            {/* 여기에 코드 작성 */}
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

export default App
