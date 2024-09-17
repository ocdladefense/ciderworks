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
    return (
        <>
            <Header />
            <main class="snap-y">
                <Home />
            </main>
            <Footer />
        </>
    );
}
