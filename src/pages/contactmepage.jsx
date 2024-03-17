
import { Header } from "../components/navbar"
import { ContactMe } from "../components/contactme"
import { Foot } from "../components/footer"

export const ContactMePage = () => {

    return (
       <div className="bg-gray-800">
        <Header/>
        <ContactMe/>
        <Foot/>
       </div>
    )
}