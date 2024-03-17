
import { Header } from "../components/navbar"
import { About } from "../components/about"
import { Foot } from "../components/footer"
import { H } from "../components/nav"

export const AboutPage = () => {

    return (
        <div className="bg-gray-800">
            <H />
            <About />
            <Foot />
        </div>
    )
}