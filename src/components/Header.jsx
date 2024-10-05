/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Navigation from "./Navigation";
export default function Header() {
    return (
        <header class="w-full mb-0 pb-1 sticky top-0 bg-wb-black z-50">
            <Navigation />
        </header>
    );
}
