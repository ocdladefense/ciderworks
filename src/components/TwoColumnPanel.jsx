/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function TwoColumnPanel({ heading, children, order = "ltr", striped = false }) {
    return (
        <section class={`laptop:min-w-[800px] p-8 tablet:grid tablet:grid-rows-5 gap-0 tablet:place-items-start mb-16 tablet:my-22 ${striped && "panel-striped"}`}>
            <div class="container row-span-1 text-center mx-auto laptop:text-left laptop:mx-0">
                <h3 class="subpixel-antialiased mb-8 text-wb-cordovan text-4xl tablet:text-7xl laptop:text-6xl font-semibold">{heading}</h3>
            </div>

            <div class="container-none tablet:grid laptop:container mx-auto h-full laptop:grid-cols-5 gap-0 laptop:gap-8 tablet:grid-flow-row row-span-4">
                {order == "rtl" ? (
                    <>
                        <div class="subpixel-antialiased col-span-2 justify-self-start">
                            {children[1]}
                        </div>
                        <div class="col-span-3 order-first laptop:order-last laptop:flex laptop:justify-self-end">
                            {children[0]}
                        </div>
                    </>
                ) : (
                    <>
                        <div class="col-span-3 laptop:flex laptop:justify-self-start">
                            {children[0]}
                        </div>
                        <div class="subpixel-antialiased col-span-2">
                            {children[1]}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}
