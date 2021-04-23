import "./../assets/scss/App.scss"
import cn from "classnames"

const App = () => {
  const headingCN = cn("mt-8", "text-center", "text-3xl")
  return (
    <div className="App">
      <h2 className={headingCN}>Welcome to React</h2>
    </div>
  )
}

export default App
