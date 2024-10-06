/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function ProgressStep({ name, status, children }) {

    return (
        <div class="grid grid-cols-4 mb-4 gap-4">
            <div class="col-span-1 content-center">
                <img src={`../images/statuses/${status}.png`} class="w-4 mx-auto" />
            </div>
            <div class="col-span-3">
                <h4 class="text-wb-black text-lg font-bold">{name}</h4>
                {children}
            </div>
        </div>
    )
}
