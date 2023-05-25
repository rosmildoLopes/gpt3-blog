import './App.css'
import { Footer, Features, Blog, Possibility, WhatGPT3, Header} from './containers'
import { CTA, Brand,  Navbar} from './components'

function App() {
  

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App