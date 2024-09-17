/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import TwoColumnPanel from "./TwoColumnPanel";

export default function Home() {
    return (
        <>
            <section class="pb-32 bg-wb-gray text-wb-black w-full h-screen snap-center">
                <p class="container mx-auto text-base">
                    Welcome to <strong>Waldbusser Ciderworks</strong>, where the art of
                    traditional cider making meets modern, transparent
                    practices. Nestled in the heart of Oregon, we specialize
                    in crafting exceptional ciders through a meticulous slow
                    fermentation process that captures the essence of the
                    apples we use.
                </p>
            </section>

            <section class="mb-8 py-16 h-screen snap-center">
                <h3 class="text-wb-cordovan text-4xl font-semibold container mx-auto mb-8">OUR PHILOSOPHY</h3>
                <TwoColumnPanel side="right" image="../images/mockup/Photo_Section_1.png">
                <p class="text-2xl">
                    At Waldbusser Ciderworks we believe that great cider
                    starts with great ingredients. Our commitment to quality
                    begins with sourcing the finest apples from local
                    orchards. By partnering with growers who share our
                    passion for sustainability and excellence, we ensure
                    that every sip of our cider is a reflection of the rich,
                    fertile Oregon landscape. <a href="/growers">Meet the Growers.</a>
                </p>
                </TwoColumnPanel>
            </section>

            <section class="mb-8 py-16 bg-wb-gray h-screen snap-center">
                
                <h3 class="text-wb-cordovan text-4xl font-semibold container mx-auto mb-8">SLOW CIDER</h3>
                <TwoColumnPanel side="left" image="../images/mockup/Photo_Section_2.png">
                <p class="text-2xl">
                    Patience is at the core of our cider-making process.
                    Unlike mass-produced ciders that rush through
                    fermentation, we embrace a slow fermentation method that
                    allows the natural flavors and aromas of the apples to
                    develop fully. This careful approach results in ciders
                    that are complex, well-balanced, and brimming with
                    character.
                </p>
                </TwoColumnPanel>
            </section>

            <section class="mb-8 py-16 h-screen snap-center">
                <h3 class="text-wb-cordovan text-4xl font-semibold container mx-auto my-auto mb-8">TRANSPARENCY</h3>
                <TwoColumnPanel side="right" image="../images/mockup/Photo_Section_3.png">
                
                <p class="text-2xl">
                    We take pride in our transparent production practices.
                    From apple to bottle, we invite you to see every step of
                    our process. Whether it's detailed information on our
                    apple varieties, or insights into our fermentation
                    techniques, we're dedicated to being open about how our
                    ciders are made. Transparency is not just a buzzword for
                    us; it's a commitment to our customers and a cornerstone
                    of our brand.
                </p>
                </TwoColumnPanel>
            </section>

            <section class="mb-16 bg-wb-gray py-8 h-screen snap-center">
                <div class="container mx-auto my-auto">
                    <h3 class="text-wb-cordovan text-8xl font-semibold my-8">OUR CIDERS</h3>
                    <p class="text-2xl w-2/3 text-wb-black">
                        Each cider we produce tells a story. From crisp,
                        refreshing styles to rich, robust blends, our range
                        caters to all palates. Every bottle is a testament to
                        our dedication to craft, quality, and tradition. Explore
                        our collection and discover your new favorite cider.
                    </p>
                    <img class="mx-auto w-full" src="../images/mockup/Waldbusser Ciderworks - Bottle Mockup 1.png" />
                </div>
            </section>
            <section class="mb-8 container mx-auto my-auto h-screen snap-center">
                <h3 class="text-wb-cordovan text-2xl font-semibold">JOIN OUR COMMUNITY</h3>
                <p class="text-base">
                    Stay connected with us through our social media
                    channels. Be the first to know about new releases,
                    special events, and exclusive offers. Join our community
                    of cider enthusiasts and share in the journey of
                    crafting exceptional ciders.
                </p>
            </section>
            <section class="mb-16 container mx-auto">
                <p class="text-base">
                    Thank you for choosing
                    Waldbusser Ciderworks. Cheers to slow cider!
                </p>
            </section>
        </>
    );
}
