/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function TwoColumnPanel({side, children, image, className}) {
    return (
        <section class="container mx-auto flex justify-between gap-4 mb-16 grid grid-cols-4">
            {side=="left" ? (
                <>
                    <div class="col-span-2 justify-self-start">
                        {children}
                    </div>
                    <div class="col-span-2 px-0 justify-self-end">
                        <img src={image} class="w-full" />
                    </div>
                </>
            ) : (
                <>
                    <div class="col-span-2 justify-self-start">
                        <img src={image} class="w-full" />
                    </div>
                    <div class="col-span-2 justify-self-end">
                        {children}
                    </div>
                </>
            )}
        </section>
    )
}
