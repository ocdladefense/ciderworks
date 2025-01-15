/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";


export default function GridSection({ heading, children, cols = "grid-cols-3" }) {
    return (

        <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>


            <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">

                <div class="container row-span-1 laptop:mx-0">
                    <h3 class="subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-marketing">{heading}</h3>
                </div>

                <div class={`container-none tablet:grid laptop:container mx-auto h-full ${cols} gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4`}>
                    {children}
                </div>
            </div>
        </section>
    )
}
