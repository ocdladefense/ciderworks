/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Logo from "@ocdla/global-components/src/Logo";

export default function Navigation() {
    return (
        <nav class="grid grid-cols-7 gap-4">
            <div class="col-span-1">
                <a href="/"><img src="..\images\logos\Waldbusser Ciderworks - Logo White.png" class="max-w-[44px] mx-8 mt-4" /></a>
            </div>
            <div class="col-span-1">
                <a style='color: #FFF;' href="/"><button class="text-white font-bold text-2xl hover:text-wb-cordovan p-4">Home</button></a>
            </div>
            <div class="col-span-1">
                <a style='color: #FFF;' href="/wheretobuy"><button class="text-white font-bold text-2xl hover:text-wb-cordovan p-4">Where to Buy</button></a>
            </div>
            <div class="col-span-1">
                <a style='color: #FFF;' href="/growers"><button class="text-white font-bold text-2xl hover:text-wb-cordovan p-4">Growers</button></a>
            </div>
            <div class="col-span-1">
                <a style='color: #FFF;' href="/howitsmade"><button class="text-white font-bold text-2xl hover:text-wb-cordovan p-4">How it's Made</button></a>
            </div>
            <div class="col-span-1">
                <a style='color: #FFF;' href="/about"><button class="text-white font-bold text-2xl hover:text-wb-cordovan p-4">About</button></a>
            </div>
            <div class="col-span-1">
                <a style='color: #FFF;' href="/contact"><button class="text-white font-bold text-2xl hover:text-wb-cordovan p-4">Contact Us</button></a>
            </div>

        </nav>
    )
}
