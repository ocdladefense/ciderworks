/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function StoreHub({ city, state, children }) {
    return (
        <li class="mb-4">
            <h4 class="subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-default-heading">{city}, {state}</h4>
            <ul class="pl-2">
                {children}
            </ul>
        </li>
    );
}
