/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function Cider({ flavor, tastesLike, children, order = "ltr" }) {
    return (
        <section class={`bg-burst laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>
            <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                <div class="container row-span-1 laptop:mx-0">
                    <h3 class={`text-${flavor}-light subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing`}>{flavor}</h3>
                    <p class={`text-${flavor}-dark font-marketing`}>beautiful, aromatic, complex</p>
                </div>

                <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">


                    <div class="col-span-1 laptop:flex laptop:justify-self-start">
                        {children[0]}
                    </div>
                    <div class="subpixel-antialiased col-span-2">
                        {children[1]}
                    </div>

                </div>
            </div>
        </section>
    )
}
