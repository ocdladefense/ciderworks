/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function TwoColumnPanel({ heading, children, striped = false }) {

    return (
        <section class={`tablet:grid p-8 gap-0 tablet:place-items-start tablet:mb-16 ${striped && "panel-striped"}`}>
            <div class="container row-span-1 laptop:mx-0">
                <h3 class="subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-default-heading">{heading}</h3>
            </div>
            <div class="laptop:container mb-32 laptop:mb-16 row-span-4">
                {children}
            </div>
        </section>
    )
}
