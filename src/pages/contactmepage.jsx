
import { Header } from "../components/navbar"
import { ContactMe } from "../components/contactme"
import { Foot } from "../components/footer"
import { H } from "../components/nav"

export const ContactMePage = () => {

    return (
       <div className="bg-gray-800">
        <H/>
        <ContactMe/>
        <Foot/>
       </div>
    )
}