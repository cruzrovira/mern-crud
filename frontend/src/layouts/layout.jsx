import { NavBar } from "../components/navBar"
const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-gray-100">
      <div className="container bg-white  m-auto h-screen">
        <NavBar />
        {children}
      </div>
    </div>
  )
}

export { Layout }
