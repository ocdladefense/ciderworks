/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Navigation from "./Navigation";
export default function Header() {
    return (
        <header class="w-full m-0 p-0 bg-wb-black">   
            <Navigation />
            <img src="..\images\mockup\Banner.png" class="size-fit"/> 
            
            {/* 
            
            <img class="object-scale-down" src="..\images\logos\Waldbusser Ciderworks - Logo White.png" />     */}
        </header>
    );
}
