
import { Header } from "../components/navbar"
import { About } from "../components/about"
import { Foot } from "../components/footer"

export const AboutPage = () => {

    return (
        <div className="bg-gray-800">
            <Header />
            <About />
            <Foot />
        </div>
    )
}