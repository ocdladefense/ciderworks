/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Growers from "./Growers";
import HowItsMade from "./HowItsMade";
import WhereToBuy from "./WhereToBuy";
import OrderProgress from "./OrderProgress"

export default function App() {
    const location = window.location.href.split("/").at(-1).toLowerCase();
    let page;
    let header = <></>;

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
        case "wheretobuy":
            page = <WhereToBuy />;
            break;
        case "orderprogress":
            page = <OrderProgress />;
            break;
        default:
            page = <Home />;
            header = <img src="..\images\mockup\Banner.png" class="size-full" />;
            break;
    }

    return (
        <>
            {header}
            <Header />
            <main class="grow">
                {page}
            </main>
            <Footer />
        </>
    );
}
