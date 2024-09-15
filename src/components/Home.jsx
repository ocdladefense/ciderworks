/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Navbar from "@ocdla/global-components/src/Navbar";
import ContentRegion from "@ocdla/global-components/src/ContentRegion";
import Legal from "@ocdla/global-components/src/Legal";
import Link from "@ocdla/global-components/src/Defaults";
import Sitemap from "@ocdla/global-components/src/Sitemap";
import SitemapCategory from "@ocdla/global-components/src/SitemapCategory";
import Social from "@ocdla/global-components/src/Social";
import Contacts from "@ocdla/global-components/src/Contacts";
import Logo from "@ocdla/global-components/src/Logo";
import Navlink from "@ocdla/global-components/src/Navlink";
import {DividerMobile, DividerDesktop} from "@ocdla/global-components/src/Dividers.jsx";
import Search from "@ocdla/global-components/src/Search";
import Profile from "@ocdla/global-components/src/Profile";
import Button from "@ocdla/global-components/src/Button";
import GoogleMaps from "@ocdla/global-components/src/GoogleMaps";

export default function App({ headerPinned = false }) {


    return (
        <>
            <section class="pb-32 bg-wb-black text-wb-white w-full">
                <p class="container mx-auto text-base">
                    Welcome to <strong>Waldbusser Ciderworks</strong>, where the art of
                    traditional cider making meets modern, transparent
                    practices. Nestled in the heart of Oregon, we specialize
                    in crafting exceptional ciders through a meticulous slow
                    fermentation process that captures the essence of the
                    apples we use.
                </p>
            </section>
            <section class="container mx-auto flex justify-between gap-16 mb-8 -mt-16">
                <img
                    src="../images/mockup/Photo_Section_1.png"
                />
                <img
                    src="../images/mockup/Photo_Section_2.png"
                />
                <img
                    src="../images/mockup/Photo_Section_3.png"
                />
            </section>

            <section class="mb-8 container mx-auto">
                <h3 class="text-wb-cordovan text-2xl font-semibold">OUR PHILOSOPHY</h3>
                <p class="text-base">
                    At Waldbusser Ciderworks we believe that great cider
                    starts with great ingredients. Our commitment to quality
                    begins with sourcing the finest apples from local
                    orchards. By partnering with growers who share our
                    passion for sustainability and excellence, we ensure
                    that every sip of our cider is a reflection of the rich,
                    fertile Oregon landscape.
                </p>
            </section>

            <section class="mb-8 container mx-auto">
                <h3 class="text-wb-cordovan text-2xl font-semibold">SLOW CIDER</h3>
                <p class="text-base">
                    Patience is at the core of our cider-making process.
                    Unlike mass-produced ciders that rush through
                    fermentation, we embrace a slow fermentation method that
                    allows the natural flavors and aromas of the apples to
                    develop fully. This careful approach results in ciders
                    that are complex, well-balanced, and brimming with
                    character.
                </p>
            </section>

            <section class="mb-24 container mx-auto">
                <h3 class="text-wb-cordovan text-2xl font-semibold">TRANSPARENCY</h3>
                <p class="text-base">
                    We take pride in our transparent production practices.
                    From apple to bottle, we invite you to see every step of
                    our process. Whether it's detailed information on our
                    apple varieties, or insights into our fermentation
                    techniques, we're dedicated to being open about how our
                    ciders are made. Transparency is not just a buzzword for
                    us; it's a commitment to our customers and a cornerstone
                    of our brand.
                </p>
            </section>

            <section class="mb-16 bg-wb-gray py-8">
                <div class="container mx-auto ">
                    <h3 class="text-wb-cordovan text-2xl font-semibold">OUR CIDERS</h3>
                    <p class="text-base">
                        Each cider we produce tells a story. From crisp,
                        refreshing styles to rich, robust blends, our range
                        caters to all palates. Every bottle is a testament to
                        our dedication to craft, quality, and tradition. Explore
                        our collection and discover your new favorite cider.
                    </p>
                    <img class="mx-auto" src="../images/mockup/Waldbusser Ciderworks - Bottle Mockup 1.png" />
                </div>
            </section>
            <section class="mb-8 container mx-auto">
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
