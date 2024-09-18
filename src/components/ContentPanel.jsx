/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function TwoColumnPanel({heading, color, children}) {

    return(
        <section class={`${color} py-8 tablet:py-16 h-screen min-w-[400px] min-h-[800px] laptop:min-w-[800px] laptop:min-h-[1080px] mb-32 tablet:my-16 laptop:my-8`}>
            <div class="container mx-auto mb-8 tablet:mb-16 laptop:mb-16">
                <h3 class="subpixel-antialiased text-wb-cordovan text-4xl tablet:text-6xl laptop:text-8xl font-semibold text-center laptop:text-left">{heading}</h3>
            </div>
            <div class="container-none px-8 laptop:container laptop:px-0 h-full mx-auto mb-32 desktop:mb-16">
                {children}
            </div>
        </section>
    ) 
}
