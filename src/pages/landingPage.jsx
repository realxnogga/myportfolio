

import { Header } from "../components/navbar"
import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Education } from "../components/education"
import { Foot } from "../components/footer"

export const LandingPage = () => {

    return (
        <div className="bg-gray-800">
            <Header />
            <Hero/>
            <About />
            <Education/> 
            <Foot />
        </div>

    )
}