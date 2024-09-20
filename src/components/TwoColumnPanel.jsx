/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function TwoColumnPanel({ heading, order, children, image, className }) {
    const backgroundColor = order == "left" ? "bg-wb-gray" : ""
    return (
        <section class={`py-8 tablet:py-16 h-screen min-w-[400px] min-h-[800px] laptop:min-w-[800px] min-h-[1220px] grid grid-rows-5 gap-0 tablet:place-items-start mb-32 tablet:my-16 laptop:my-8 ${backgroundColor}`}>
            <div class="container mx-auto -mb-16 tablet:mb-8 desktop:-mb-64 row-span-1">
                <h3 class="subpixel-antialiased text-wb-cordovan text-6xl tablet:text-7xl laptop:text-8xl font-semibold text-center laptop:text-left">{heading}</h3>
            </div>

            <div class="container-none laptop:container  mx-auto mb-32 laptop:mb-16  px-8 laptop:px-0  h-full  grid laptop:grid-cols-5 gap-0 laptop:gap-8 tablet:grid-flow-row  row-span-4">
                {order == "rtl" ? (
                    <>
                        <div class="subpixel-antialiased col-span-2 justify-self-start">
                            {children[1]}
                        </div>
                        <div class="col-span-3 order-first laptop:order-last flex content-center">
                            {children[0]}
                        </div>
                    </>
                ) : (
                    <>
                        <div class="col-span-3 flex content-center">
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
