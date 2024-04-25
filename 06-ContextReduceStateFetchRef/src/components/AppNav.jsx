import { NavLink } from 'react-router-dom'

export default function AppNav() {
  return (
    <>
        <nav> 
            <NavLink to='/' className="itemnav" end>Home</NavLink>
            <NavLink to='/body' className="itemnav" end>Body</NavLink>
            <NavLink to='/posts' className="itemnav" end>Posts</NavLink>
        </nav>
    </>
  )
}