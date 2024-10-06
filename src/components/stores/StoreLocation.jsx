/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function StoreLocation({ name, address, phone }) {
    return (
        <li>
            <div>
                <h4 class="text-wb-cordovan text-lg font-bold font-default-heading">{name}</h4>
                <p class="text-base pl-2">{address}<br />{phone}</p>
            </div>
        </li>
    )

}
