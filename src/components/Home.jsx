/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import TwoColumnPanel from "./TwoColumnPanel";
import ContentPanel from "./ContentPanel";

export default function Home() {
    return (
        <>
                <section class="pb-32 bg-wb-gray text-wb-black h-screen">
                    <img src="..\images\mockup\Banner.png" class="size-fit"/> 
                </section>
                

                <TwoColumnPanel heading="OUR PHILOSOPHY" side="right" image="../images/mockup/Photo_Section_1.png">
                    <p class="text-lg laptop:text-2xl">
                        At Waldbusser Ciderworks we believe that great cider
                        starts with great ingredients. Our commitment to quality
                        begins with sourcing the finest apples from local
                        orchards. By partnering with growers who share our
                        passion for sustainability and excellence, we ensure
                        that every sip of our cider is a reflection of the rich,
                        fertile Oregon landscape. <a href="/growers">Meet the Growers.</a>
                    </p>
                </TwoColumnPanel>

                <TwoColumnPanel heading="SLOW CIDER" side="left" image="../images/mockup/Photo_Section_2.png">
                    <p class="text-lg laptop:text-2xl">
                        Patience is at the core of our cider-making process.
                        Unlike mass-produced ciders that rush through
                        fermentation, we embrace a slow fermentation method that
                        allows the natural flavors and aromas of the apples to
                        develop fully. This careful approach results in ciders
                        that are complex, well-balanced, and brimming with
                        character.
                    </p>
                </TwoColumnPanel>

                <TwoColumnPanel heading="TRANSPARENCY" side="right" image="../images/mockup/Photo_Section_3.png">
                    <p class="text-lg laptop:text-2xl self-justify-end">
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

                <ContentPanel heading="OUR CIDERS" color="bg-wb-gray">
                    <p class="subpixel-antialiased text-lg laptop:text-2xl w-2/3 text-wb-black mb-8">
                            Each cider we produce tells a story. From crisp,
                            refreshing styles to rich, robust blends, our range
                            caters to all palates. Every bottle is a testament to
                            our dedication to craft, quality, and tradition. Explore
                            our collection and discover your new favorite cider.
                    </p>
                    <img class="mx-auto size-auto p-0" src="../images/mockup/Waldbusser Ciderworks - Bottle Mockup 1.png" />
                </ContentPanel>

                <ContentPanel heading="JOIN OUR COMMUNITY">
                    <p class="subpixel-antialiased text-lg laptop:text-2xl text-wb-black mb-8">
                        Stay connected with us through our social media
                        channels. Be the first to know about new releases,
                        special events, and exclusive offers. Join our community
                        of cider enthusiasts and share in the journey of
                        crafting exceptional ciders.
                    </p>
                    <p class="subpixel-antialiased text-lg laptop:text-2xl text-wb-black mb-8">
                        Thank you for choosing
                        Waldbusser Ciderworks. Cheers to slow cider!
                    </p>
                </ContentPanel>
            
        </>
    );
}
