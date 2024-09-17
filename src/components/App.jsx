/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Growers from "./Growers";
import HowItsMade from "./HowItsMade";

export default function App() {
    const location = window.location.href.split("/").at(-1).toLowerCase();
    let page;

    switch (location) {
        case "about":
            page = <About />;
            break;
        case "contact":
            page = <Contact />;
            break;
        case "growers":
            page = <Growers />;
            break;
        case "howitsmade":
            page = <HowItsMade />;
            break;
        default:
            page = <Home />;
            break;
    }

    return (
        <>
            <Header />
            <main>
                {page}
            </main>
            <Footer />
        </>
    );
}
