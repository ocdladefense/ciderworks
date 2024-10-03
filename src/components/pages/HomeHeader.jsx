/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";

export default function HomeHeader() {

    return (
        <>
            <img src="..\images\mockup\Banner.png" class="size-full" />

            <section class="callout bg-wb-black tablet:mb-16">
                <p class="subpixel-antialiased container mx-auto text-2xl">
                    <span class="text-stone-400">Welcome to <strong>Waldbusser Ciderworks</strong>, where the art of traditional cider making meets modern, transparent practices. Nestled in the heart of Oregon, we specialize in crafting exceptional ciders through a meticulous slow fermentation process that captures the essence of the apples we use.</span>
                </p>
            </section>
        </>
    );

}
