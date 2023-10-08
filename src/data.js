import FacebookIcon from "./assets/facebook.svg"
import LinkedInIcon from "./assets/linkedin.png"
import MediumIcon from "./assets/medium.png"
import NBAIcon from "./assets/medium.png"
import InstagramIcon from "./assets/insta.svg"
import ZindaneImage from "./assets/zidane.jpg"
import TonyImage from "./assets/tonikroos.jpg"
import IkerImage from "./assets/ikercasillas.jpg"
import JamesImage from "./assets/james.jpg"
import ChristianoImage from "./assets/christiano.jpg"

const teamData = [
    {
        name: "Zindane",
        designation: "Leadership & Management",
        imageSource: ZindaneImage,
        links: [
            {
                name: "LinkedIn",
                socialUrl: "",
                imageSource: LinkedInIcon,
            },
            {
                name: "Medium",
                socialUrl: "",
                imageSource: MediumIcon,
            },
            {
                name: "Facebook",
                socialUrl: "",
                imageSource: FacebookIcon,
            }
        ]
    },
    {
        name: "Tony Kroos",
        designation: "Product Developer",
        imageSource: TonyImage,
        links: [
            {
                name: "LinkedIn",
                socialUrl: "",
                imageSource: LinkedInIcon,
            },
            {
                name: "Medium",
                socialUrl: "",
                imageSource: MediumIcon,
            },
        ]
    },
    {
        name: "Iker Casillas",
        designation: "Marketing Strategy",
        imageSource: IkerImage,
        links: [
            {
                name: "Medium",
                socialUrl: "",
                imageSource: MediumIcon,
            },
        ]
    },
    {
        name: "James",
        designation: "Product Designer",
        imageSource: JamesImage,
        links: [
            {
                name: "Medium",
                socialUrl: "",
                imageSource: MediumIcon,
            },
            {
                name: "Football",
                socialUrl: "",
                imageSource: NBAIcon,
            },
            {
                name: "Instagram",
                socialUrl: "",
                imageSource: InstagramIcon,
            }
        ]
    },
    {
        name: "Christiano",
        designation: "Financial Operations",
        imageSource: ChristianoImage,
        links: [
            {
                name: "LinkedIn",
                socialUrl: "",
                imageSource: LinkedInIcon,
            },
            {
                name: "Facebook",
                socialUrl: "",
                imageSource: FacebookIcon,
            }
        ]
    }
]

export {teamData}