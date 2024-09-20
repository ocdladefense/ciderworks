/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function TwoColumnPanel({ heading, color, headingColor, children }) {

    return (
        <section class={`${color} py-8 tablet:py-16 h-screen max-h-[900px] min-w-[400px] min-h-[800px] laptop:min-w-[800px] min-h-[1220px] grid grid-rows-5 gap-0 tablet:place-items-start mb-32 tablet:mb-16 laptop:mb-8`}>
            <div class="container mx-auto -mb-16 tablet:mb-8 desktop:-mb-64 row-span-1">
                <h3 class={`subpixel-antialiased text-wb-cordovan ${headingColor} text-6xl tablet:text-7xl laptop:text-8xl font-semibold text-center laptop:text-left`}>{heading}</h3>
            </div>
            <div class="container-none laptop:container  mx-auto mb-32 laptop:mb-16  px-8 laptop:px-0  h-full  row-span-4">
                {children}
            </div>
        </section>
    )
}
