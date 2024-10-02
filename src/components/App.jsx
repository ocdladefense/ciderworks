/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ciders from "./pages/Ciders";
import Growers from "./pages/Growers";
import HowItsMade from "./pages/HowItsMade";
import WhereToBuy from "./pages/WhereToBuy";
import OrderProgress from "./pages/OrderProgress"

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
        case "ciders":
            page = <Ciders />;
            break;
        case "how-its-made":
            page = <HowItsMade />;
            break;
        case "where-to-buy":
            page = <WhereToBuy />;
            break;
        case "order-progress":
            page = <OrderProgress />;
            break;
        case "whats-brewing":
            page = <OrderProgress />;
            break;
        default:
            page = <Home />;
            header = <img src="..\images\mockup\Banner.png" class="size-full" />;
            break;
    }

    return (
        <>
            <Header />
            {header}
            <main class="grow overflow-x-hidden pt-12 tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                {page}
            </main>
            <Footer />
        </>
    );
}
