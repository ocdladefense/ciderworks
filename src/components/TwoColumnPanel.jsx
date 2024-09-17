/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function TwoColumnPanel({heading, side, children, image, className}) {
    const backgroundColor = side == "left" ? "bg-wb-gray" : ""
    return (
        <section class={`mb-8 py-16 h-screen grid place-items-center ${backgroundColor}`}>
            <div class="container">
                <h3 class="text-wb-cordovan text-8xl font-semibold mb-8 justify-self-start">{heading}</h3>
            </div>
            
            <div class="container h-full mx-auto flex justify-between gap-8 mb-16 grid laptop:grid-cols-5 tablet:grid-flow-row">
            {side=="left" ? (
                <>
                    <div class="col-span-2 justify-self-start">
                        {children}
                    </div>
                    <div class="col-span-3 justify-self-end">
                        <img src={image} class="size-full" />
                    </div>
                </>
            ) : (
                <>
                    <div class="col-span-3 justify-self-start">
                        <img src={image} class="size-full" />
                    </div>
                    <div class="col-span-2">
                        {children}
                    </div>
                </>
            )}
        </div>
        </section>
        
    )
}
