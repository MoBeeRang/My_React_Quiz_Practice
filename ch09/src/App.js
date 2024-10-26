import './App.css'
import './NavLink.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import NewsList3 from './NewsList3'
import Category from './Category'
import NewsPage from './NewsPage'
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
            <Route path="/newsList/*" element={<NewsList3 />} />
         </Routes>
      </div>
   )
}

export default App
