import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Videos from "./components/Videos"

export default function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden flex flex-col">
    <Nav />
    <Hero/>
   <div className="mt-[10px]"> <Features /> </div>
    <Videos/>
    <Footer/>
    </div>
  )
}