/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function StoreLocation({ name, address, phone }) {
    return (
        <li>
            <div>
                <h4 class="text-wb-cordovan text-lg font-bold">{name}</h4>
                <p class="text-base pl-2 border-l border-wb-cordovan">{address}</p>
                <p class="text-base pl-2 border-l border-wb-cordovan">{phone}</p>
            </div>
        </li>
    )

}
