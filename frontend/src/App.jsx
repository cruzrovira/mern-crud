import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./index.css"
import { HomePage, FormPage, NotFoundPage } from "./pages"
import { Layout } from "./layouts"
import { PostContextProvider } from "./context/providers/postContextProvider"
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <PostContextProvider>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<FormPage />} path="/new" />
            <Route element={<FormPage />} path="/update/:id" />
            <Route element={<NotFoundPage />} path="*" />
          </Routes>
        </PostContextProvider>
      </Layout>
    </BrowserRouter>
  )
}

export default App
