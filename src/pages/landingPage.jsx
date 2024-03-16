

import { Header } from "../components/navbar"
import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Education } from "../components/education"
import { Foot } from "../components/footer"
import { H } from "../components/nav"


export const LandingPage = () => {

    return (
        <div className="bg-gray-800">
            <H />
            <Hero/>
            <About />
            <Education/> 
            <Foot />
        </div>

    )
}