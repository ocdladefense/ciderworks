/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Router from "./Router";

let router = new Router();
let { Page, HeaderTwo } = await router.getPage();
console.log(Page, HeaderTwo);
let location = router.getLocation();

export default function App() {


    return (
        <>
            <Header />
            {typeof HeaderTwo === "function" ? <HeaderTwo /> : HeaderTwo}
            <main class={`grow overflow-x-hidden font-default-paragraph ${location}`}>
                <Page />
            </main>
            <Footer />
        </>
    );
}
