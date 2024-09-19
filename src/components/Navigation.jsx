/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Logo from "@ocdla/global-components/src/Logo";

export default function Navigation() {
    return (
        <nav class="grid grid-cols-7 gap-4">
            <div class="col-span-1 col-start-2">
                <a style='color: #FFF;' href="/"><button class="text-white font-bold text-lg hover:text-wb-cordovan pb-0 pt-1">home</button></a>
            </div>
            <div class="col-span-1">
                <a style='color: #FFF;' href="/wheretobuy"><button class="text-white font-bold text-lg hover:text-wb-cordovan pb-0 pt-1">where to buy</button></a>
            </div>
            <div class="col-span-1">
                <a style='color: #FFF;' href="/growers"><button class="text-white font-bold text-lg hover:text-wb-cordovan pb-0 pt-1">growers</button></a>
            </div>
            <div class="col-span-1">
                <a style='color: #FFF;' href="/howitsmade"><button class="text-white font-bold text-lg hover:text-wb-cordovan pb-0 pt-1">how it's made</button></a>
            </div>
            <div class="col-span-1">
                <a style='color: #FFF;' href="/about"><button class="text-white font-bold text-lg hover:text-wb-cordovan pb-0 pt-1">about</button></a>
            </div>
            <div class="col-span-1">
                <a style='color: #FFF;' href="/contact"><button class="text-white font-bold text-lg hover:text-wb-cordovan pb-0 pt-1">contact us</button></a>
            </div>

        </nav>
    )
}
