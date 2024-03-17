
import { Header } from "../components/navbar"
import { Education } from "../components/education"
import { Foot } from "../components/footer"

export const EducationPage = () => {

    return (
        <div className="bg-gray-800">
            <Header/>
            <Education />
            <Foot />
        </div>
    )
}