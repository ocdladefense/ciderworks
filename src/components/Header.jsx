/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";

export default function Header() {
    return (
        <header class="w-full m-0 p-0 bg-wb-black">   
            <img src="..\images\mockup\Banner.png" /> 
            {/* <img class="object-scale-down" src="..\images\logos\Waldbusser Ciderworks - Logo White.png" />     */}
        </header>
    );
}
