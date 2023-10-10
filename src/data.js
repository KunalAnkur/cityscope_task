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
import ProductImageOne from "./assets/shoe.jpg"
import ProductImageTwo from "./assets/shoe2.png"

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

const journeyData = [
    {
        title: "THE ROOTS",
        description: "Our entire life when we shop, we are limited by choices that are there in a store. We are often on the side where we buy our favourite coloured shoes made by someone else but what if we designed it? What if we could involve in the making of a shoe we want to buy? This little thought sprouted to become what we are today, KICKSUP! ;"
    },
    {
        title: "CHAPTER I",
        description: "Understanding the trends in the industry and what the users think when they buy were our top priorities before we moved further in the building. After weeks of fruitful research, we stepped into the user's shoes and look at what we plan to do. It's a great joy for the users if they are involved in the making. We're heading into an era of technology and people prefer online shopping to shopping in an outlet."
    },
    {
        title: "CHAPTER II",
        description: "Ever milestone begins with a single step and before KICKSUP sprouted, the team manufactured in small scale with two users a month. This experience was crucial to our brand as this is our first practical experience. Interacting with the users was the best thing ever. The positive reviews and support from people motivated us to push our limits further."
    },
    {
        title: "KICKSUP",
        description: "Here we are, made a perfect platform for vou to involve in the making of a shoe vou want to buv! We have evolved ever since we started out. We wish to help vou more and make KICKSUP a bigger team. Design your shoe and be a part of our journey!"
    },
]

const productsData = [
    {
        id: "1",
        title: "KSL 01 loafers RGB - 2",
        offer: "As anoxcusio 20% of shopping win HDFC bank",
        description:"by KICKSUP and you",
        rating: 4,
        review: 80,
        price: 2000,
        type: "Loafers",
        colors: ["red", "green", "blue"],
        designTemplate: 2,
        mainImage: ProductImageOne,
        imageList: [ProductImageOne, ProductImageTwo, ProductImageOne],
        options: {
            Front: ["red", "green", "blue"],
            Middle: ["red", "green", "blue"], 
            Back: ["red", "green", "blue"],
            Sole: ["red", "green", "blue"],
            Size: [7, 8, 9, 10],
        },
    },
    {
        id: "2",
        title: "Nike sneakers RGB - 3",
        offer: "As anoxcusio 20% of shopping win HDFC bank",
        description: "by KICKSUP and you",
        rating: 4,
        review: 80,
        price: 4000,
        type: "Sneakers",
        colors: ["red", "green", "blue"],
        designTemplate: 3,
        mainImage: ProductImageTwo,
        imageList: [ProductImageTwo, ProductImageTwo, ProductImageOne],
        options: {
            Front: ["red", "green", "blue"],
            Middle: ["red", "green", "blue"],
            Back: ["red", "green", "blue"],
            Sole: ["red", "green", "blue"],
            Size: [7, 8, 9, 10],
        },
    },
    {
        id: "3",
        title: "KSL 01 loafer RGB - 3+",
        offer: "As anoxcusio 20% of shopping win HDFC bank",
        description: "by KICKSUP and you",
        rating: 4,
        review: 80,
        price: 1000,
        type: "Loafers",
        colors: ["red", "green", "blue"],
        designTemplate: 3,
        mainImage: ProductImageTwo,
        imageList: [ProductImageTwo, ProductImageTwo, ProductImageOne],
        options: {
            Front: ["red", "green", "blue"],
            Middle: ["red", "green", "blue"],
            Back: ["red", "green", "blue"],
            Sole: ["red", "green", "blue"],
            Size: [7, 8, 9, 10],
        },


    },
    {
        id: "4",
        title: "PUMA 01 loafer RGB - 2",
        offer: "As anoxcusio 20% of shopping win HDFC bank",
        description: "by KICKSUP and you",
        rating: 4,
        review: 80,
        price: 9000,
        type: "Loafers",
        colors: ["red", "green", "blue"],
        designTemplate: 2,
        mainImage: ProductImageOne,
        imageList: [ProductImageOne, ProductImageTwo, ProductImageOne],
        options: {
            Front: ["red", "green", "blue"],
            Middle: ["red", "green", "blue"],
            Back: ["red", "green", "blue"],
            Sole: ["red", "green", "blue"],
            Size: [7, 8, 9, 10],
        },


    },
    {
        id: "5",
        title: "KSW 01 loafer RB - 4",
        offer: "As anoxcusio 20% of shopping win HDFC bank",
        description: "by KICKSUP and you",
        rating: 4,
        review: 80,
        price: 1200,
        type: "Loafers",
        colors: ["red", "blue"],
        designTemplate: 4,
        mainImage: ProductImageTwo,
        imageList: [ProductImageTwo, ProductImageTwo, ProductImageOne],
        options: {
            Front: ["red", "green", "blue"],
            Middle: ["red", "green", "blue"],
            Back: ["red", "green", "blue"],
            Sole: ["red", "green", "blue"],
            Size: [7, 8, 9, 10],
        },


    },
    {
        id: "6",
        title: "Royal S 01 sneaker RGB - 6",
        offer: "As anoxcusio 20% of shopping win HDFC bank",
        description: "by KICKSUP and you",
        rating: 4,
        review: 80,
        price: 2250,
        type: "Sneakers",
        colors: ["red", "green", "blue"],
        designTemplate: 6,
        mainImage: ProductImageTwo,
        imageList: [ProductImageTwo, ProductImageTwo, ProductImageOne],
        options: {
            Front: ["red", "green", "blue"],
            Middle: ["red", "green", "blue"],
            Back: ["red", "green", "blue"],
            Sole: ["red", "green", "blue"],
            Size: [7, 8, 9, 10],
        },


    },
    {
        id: "7",
        title: "Royal S 01 loafer RO - 2",
        offer: "As anoxcusio 20% of shopping win HDFC bank",
        description: "by KICKSUP and you",
        rating: 4,
        review: 80,
        price: 5300,
        type: "Loafers",
        colors: ["red", "orange"],
        designTemplate: 2,
        mainImage: ProductImageOne,
        imageList: [ProductImageOne, ProductImageTwo, ProductImageOne],
        options: {
            Front: ["red", "green", "blue"],
            Middle: ["red", "green", "blue"],
            Back: ["red", "green", "blue"],
            Sole: ["red", "green", "blue"],
            Size: [7, 8, 9, 10],
        },
    },
    {
        id: "8",
        title: "Vana S 01 loafer RY - 2",
        offer: "As anoxcusio 20% of shopping win HDFC bank",
        description: "by KICKSUP and you",
        rating: 4,
        review: 80,
        price: 5300,
        type: "Loafers",
        colors: ["red", "yellow"],
        designTemplate: 2,
        mainImage: ProductImageOne,
        imageList: [ProductImageOne, ProductImageTwo, ProductImageOne],
        options: {
            Front: ["red", "green", "blue"],
            Middle: ["red", "green", "blue"],
            Back: ["red", "green", "blue"],
            Sole: ["red", "green", "blue"],
            Size: [7, 8, 9, 10],
        },
    },
    {
        id: "9",
        title: "Converse S 01 loafer RO - 2",
        offer: "As anoxcusio 20% of shopping win HDFC bank",
        description: "by KICKSUP and you",
        rating: 4,
        review: 80,
        price: 5300,
        type: "Loafers",
        colors: ["red", "orange"],
        designTemplate: 2,
        mainImage: ProductImageOne,
        imageList: [ProductImageOne, ProductImageTwo, ProductImageOne],
        options: {
            Front: ["red", "green", "blue"],
            Middle: ["red", "green", "blue"],
            Back: ["red", "green", "blue"],
            Sole: ["red", "green", "blue"],
            Size: [7, 8, 9, 10],
        },
    },
]
export { teamData, journeyData, productsData }