/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function ProgressBar({ percentage }) {
    return (
        <div class="flex flex-col w-full gap-4 mb-4">
            <div
                class="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium border">
                <div
                    class="flex items-center justify-center h-full overflow-hidden text-white break-all bg-wb-cordovan rounded-full" style={`width: ${percentage}%;`}>

                </div>

            </div>
        </div>
    )
}
