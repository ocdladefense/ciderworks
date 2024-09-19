/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function TwoColumnPanel({ heading, order, children }) {
    const backgroundColor = order == "ltr" ? "bg-wb-gray" : ""
    return (
        <section class={`py-8 tablet:py-16 h-screen min-w-[400px] min-h-[800px] laptop:min-w-[800px] laptop:min-h-[1080px] grid place-items-center tablet:place-items-start mb-32 tablet:my-16 laptop:my-8 ${backgroundColor}`}>
            <div class="container mx-auto pt-16 -mb-16 desktop:-mb-32">
                <h3 class="subpixel-antialiased text-wb-cordovan text-8xl font-semibold text-center laptop:text-left">{heading}</h3>
            </div>

            <div class="container-none px-8 laptop:container laptop:px-0 h-full mx-auto flex justify-between gap-0 laptop:gap-8 mb-32 laptop:mb-16 grid laptop:grid-cols-5 tablet:grid-flow-row">
                {order == "ltr" ? (
                    <>
                        <div class="subpixel-antialiased col-span-2 justify-self-start">
                            {children[0]}
                        </div>
                        <div class="col-span-3 justify-self-center laptop:justify-self-end order-first laptop:order-last">
                            {children[1]}
                        </div>
                    </>
                ) : (
                    <>
                        <div class="col-span-3 justify-self-center laptop:justify-self-start">
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
