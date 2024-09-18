/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Navigation from "./Navigation";
export default function Header() {
    return (
        <header class="w-full mb-0 pb-4 sticky top-0 bg-wb-black opacity-10 hover:opacity-100">
            <Navigation />


            {/* 
            <img src="..\images\mockup\Banner.png" class="size-fit"/> 
            <img class="object-scale-down" src="..\images\logos\Waldbusser Ciderworks - Logo White.png" />     */}
        </header>
    );
}
