/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function TwoColumnPanel({side, children, image, className}) {
    return (
        <section class="container mx-auto flex justify-between gap-4 mb-16 grid laptop:grid-cols-2 tablet:grid-flow-row">
            {side=="left" ? (
                <>
                    <div class="col-span-1 justify-self-start">
                        {children}
                    </div>
                    <div class="col-span-1 px-0 justify-self-end">
                        <img src={image} class="size-full" />
                    </div>
                </>
            ) : (
                <>
                    <div class="col-span-1 justify-self-start">
                        <img src={image} class="size-full" />
                    </div>
                    <div class="col-span-1 justify-self-end">
                        {children}
                    </div>
                </>
            )}
        </section>
    )
}
