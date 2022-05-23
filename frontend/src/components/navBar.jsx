import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <nav className="bg-blue-800 flex justify-between p-4 text-white">
      <Link className="cursor-pointer font-bold text-2xl" to="/">
        Post
      </Link>
      <Link className="cursor-pointer" to="/new">
        new Post
      </Link>
    </nav>
  )
}

export { NavBar }
