/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function TwoColumnPanel({ heading, children, striped = false }) {

    return (
        <section class={`tablet:grid px-8 grid-rows-5 gap-0 tablet:place-items-start tablet:mb-16 ${striped && "panel-striped"}`}>
            <div class="container tablet:mb-8 row-span-1 text-center mx-auto laptop:text-left laptop:mx-0">
                <h3 class="subpixel-antialiased mb-8 text-wb-cordovan text-4xl tablet:text-7xl laptop:text-6xl font-semibold">{heading}</h3>
            </div>
            <div class="laptop:container mb-32 laptop:mb-16 row-span-4">
                {children}
            </div>
        </section>
    )
}
