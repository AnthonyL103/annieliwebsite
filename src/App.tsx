import { About } from './components/About'
import { CampusBand } from './components/CampusBand'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Life } from './components/Life'
import { Nav } from './components/Nav'
import { Pitches } from './components/Pitches'
import { Service } from './components/Service'
import { Skills } from './components/Skills'
import { Stats } from './components/Stats'
import { Strengths } from './components/Strengths'
import { Work } from './components/Work'
import { useLenis } from './hooks/useLenis'

function App() {
  useLenis()

  return (
    <>
      <Nav />
      {/* overflow-x-clip (not hidden) keeps sticky columns working while hiding off screen slide in offsets on phones */}
      <main className="overflow-x-clip">
        <Hero />
        <Stats />
        <About />
        <Work />
        <Pitches />
        <CampusBand />
        <Service />
        <Life />
        <Strengths />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
