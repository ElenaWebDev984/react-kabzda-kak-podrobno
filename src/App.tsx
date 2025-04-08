
import './App.css'

function App() {
  return (
    <div className='App'>
        <Header />
        <Technologies />
    </div>
  )
}

const Header = () => {
    return (
        <div>
            <a href='#'>Home</a>
            <a href='#'>News Feed</a>
            <a href='#'>Messages</a>
        </div>
    )
}

const Technologies = () => {
    return (
        <ul>
            <li>css</li>
            <li>html</li>
            <li>js</li>
            <li>react</li>
        </ul>
    )
}

export default App
