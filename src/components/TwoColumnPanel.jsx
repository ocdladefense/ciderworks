/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function TwoColumnPanel({heading, side, children, image, className}) {
    const backgroundColor = side == "left" ? "bg-wb-gray" : ""
    return (
        <section class={`py-8 tablet:py-16 h-screen min-w-[400px] min-h-[800px] laptop:min-w-[800px] laptop:min-h-[1080px] grid place-items-center tablet:place-items-start mb-32 tablet:my-16 laptop:my-8 ${backgroundColor}`}>
            <div class="container mx-auto pt-16 mb-8 laptop:mb-0 desktop:-mb-32">
                <h3 class="subpixel-antialiased text-wb-cordovan text-4xl tablet:text-6xl laptop:text-8xl font-semibold text-center laptop:text-left">{heading}</h3>
            </div>
            
            <div class="container-none px-8 laptop:container laptop:px-0 h-full mx-auto flex justify-between gap-8 mb-32 laptop:mb-16 grid laptop:grid-cols-5 tablet:grid-flow-row">
            {side=="left" ? (
                <>
                    <div class="subpixel-antialiased col-span-2 justify-self-start">
                        {children}
                    </div>
                    <div class="col-span-3 justify-self-center laptop:justify-self-end order-first laptop:order-last">
                        <img src={image} class="size-full rounded" />
                    </div>
                </>
            ) : (
                <>
                    <div class="col-span-3 justify-self-center laptop:justify-self-start">
                        <img src={image} class="size-full rounded" />
                    </div>
                    <div class="subpixel-antialiased col-span-2">
                        {children}
                    </div>
                </>
            )}
        </div>
        </section>
        
    )
}
