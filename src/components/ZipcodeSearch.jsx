/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";

export default function ZipcodeSearch() {
    return (
        <>
            {/* <form class="w-full text-wb-black">
                <div class="relative">
                    <input type="search" id="zipcode" class="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg" placeholder="Zipcode" max="5" />
                    <button type="submit" class="z-10 absolute end-2.5 bottom-2.5 font-medium text-sm pl-6 pr-4 py-2 border-l">Search</button>
                </div>
            </form> */}
            <form class="w-full text-wb-black mx-auto laptop:mx-0 mb-8">
                <input type="search" id="zipcode" class="p-8 laptop:p-4 ps-10 border border-gray-300 rounded-l-lg w-5/6" placeholder="Zipcode" max="5" />
                <button type="submit" class="p-8 laptop:p-4 border border-gray-300 rounded-r-lg bg-wb-gray font-bold w-1/6">Search</button>
            </form>
        </>
    )
}
