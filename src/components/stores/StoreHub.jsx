/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function StoreHub({ city, state, children }) {
    return (
        <li class="mb-4">
            <h4 class="pt-8 subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-marketing">{city}</h4>
            <ul>
                {children}
            </ul>
        </li>
    );
}
