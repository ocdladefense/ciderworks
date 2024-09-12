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
    // There is a component that can be used to render a nice 404 error.
    // return <NotFound />;

    return (
        <>
            <header class="container bg-white mx-auto flex w-full flex-col lg:h-32">
                <nav class='flex flex-col border border-0 border-b lg:h-16 lg:flex-row lg:border lg:border-t-0'>
                    <ul class='flex size-full flex-col items-start lg:flex-row lg:items-center'>
                        <li class='size-full lg:size-max'>
                            <ul class='flex flex-col items-center lg:flex-row'>
                                <Logo typeNavbar={true} src="../images/sample.png"/>
                                <Navlink href='https://oregon.public.law/rules'>
                                    Oregon Administrative Rules
                                </Navlink>
                                <Navlink
                                    // href='https://oregon.public.law/statutes'
                                    href='/toc'>
                                    Oregon Revised Statutes
                                </Navlink>
                            </ul>
                        </li>
                        <DividerMobile />
                        <li class='size-full lg:ms-auto lg:size-max'>
                            <form
                                class='m-4 flex flex-col items-start lg:m-0 lg:flex-row lg:items-center'
                                onsubmit={e => {
                                    e.preventDefault();

                                    window.location.pathname = '/';
                                }}>
                                <Search
                                    typeNavbar={true}
                                    placeholder='Search'
                                />
                                <DividerDesktop />
                                <li class='size-full'>
                                    <ul class='flex flex-row-reverse items-center lg:flex-row'>
                                        <Profile
                                            bg='bg-[#516490]'
                                            label='G'
                                            loginUrl='/'
                                        />
                                        <DividerDesktop />
                                        <Button
                                            href='/'
                                            label='GIVE FEEDBACK'
                                        />
                                    </ul>
                                </li>
                            </form>
                        </li>
                    </ul>
                </nav>
            </header>

            <main class="container mx-auto p-4 pb-16 lg:p-8 lg:pb-32">
                <section class="mb-8">
                    <p>
                        Welcome to Waldbusser Ciderworks, where the art of
                        traditional cider making meets modern, transparent
                        practices. Nestled in the heart of Oregon, we specialize
                        in crafting exceptional ciders through a meticulous slow
                        fermentation process that captures the essence of the
                        apples we use.
                    </p>
                </section>
                <section class="columns-3 gap-0 mb-8">
                    <img
                        src="../images/sample.png"
                        width="406"
                        height="281"
                    />
                    <img
                        src="../images/sample.png"
                        width="406"
                        height="281"
                    />
                    <img
                        src="../images/sample.png"
                        width="406"
                        height="281"
                    />
                </section>

                <section class="mb-8">
                    <h3 class="text-wb-red text-lg">OUR PHILOSOPHY</h3>
                    <p>
                        At Waldbusser Ciderworks we believe that great cider
                        starts with great ingredients. Our commitment to quality
                        begins with sourcing the finest apples from local
                        orchards. By partnering with growers who share our
                        passion for sustainability and excellence, we ensure
                        that every sip of our cider is a reflection of the rich,
                        fertile Oregon landscape.
                    </p>
                </section>

                <section class="mb-8">
                    <h3 class="text-wb-red text-lg">SLOW CIDER</h3>
                    <p>
                        Patience is at the core of our cider-making process.
                        Unlike mass-produced ciders that rush through
                        fermentation, we embrace a slow fermentation method that
                        allows the natural flavors and aromas of the apples to
                        develop fully. This careful approach results in ciders
                        that are complex, well-balanced, and brimming with
                        character.
                    </p>
                </section>

                <section class="mb-8">
                    <h3 class="text-wb-red text-lg">TRANSPARENCY</h3>
                    <p>
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

                <section class="mb-8">
                    <h3 class="text-wb-red text-lg">OUR CIDERS</h3>
                    <p>
                        Each cider we produce tells a story. From crisp,
                        refreshing styles to rich, robust blends, our range
                        caters to all palates. Every bottle is a testament to
                        our dedication to craft, quality, and tradition. Explore
                        our collection and discover your new favorite cider.
                    </p>
                </section>
                <section class="mb-8">
                    <h3 class="text-wb-red text-lg">JOIN OUR COMMUNITY</h3>
                    <p>
                        Stay connected with us through our social media
                        channels. Be the first to know about new releases,
                        special events, and exclusive offers. Join our community
                        of cider enthusiasts and share in the journey of
                        crafting exceptional ciders. Thank you for choosing
                        Waldbusser Ciderworks. Cheers to slow cider!
                    </p>
                </section>
            </main>
            <footer class="text-wb-white container mx-auto border border-b-0 bg-wb-black p-4 pb-16 lg:p-8 lg:pb-32">
                {/* Resources */}
                <ul class="flex flex-col gap-4">
                    <li>
                        {/* Organization */}
                        <ul class="flex flex-col gap-4 lg:flex-row lg:gap-8">
                            <li>
                                <ul class="flex flex-col gap-1">
                                    {/* Social */}
                                    <li>
                                        <Social
                                            facebook="OregonCriminalDefenseLawyersAssociation" twitter="oregondefense" youtube="oregoncriminaldefenselawye4822"
                                        />
                                    </li>
                                    {/* Copyright */}
                                    <li>
                                        <Legal
                                            year="2024"
                                            association="Oregon Criminal Defense
                                                Lawyers Association">
                                            Oregon Criminal Defense Lawyers
                                            Association is a 501(c)(3) nonprofit
                                            educational association.
                                            Contributions to OCDLA may be tax
                                            deductible - check with your tax
                                            advisor. Electronic downloads are
                                            for the sole use of the purchasing
                                            member. Files may not be distributed
                                            to others.
                                        </Legal>
                                    </li>
                                </ul>
                            </li>
                            {/* Contact */}
                            <li>
                                <Contacts
                                    ocdla="https://ocdla.org"
                                    maps="https://maps.app.goo.gl/7dCYKBEyJbmo8tzS7"
                                    mail="mailto:info@ocdla.org"
                                    phone="+15416868716"
                                />
                            </li>
                        </ul>
                    </li>
                    <li class="size-full">
                        <Sitemap>
                            <SitemapCategory
                                title="SERVICES"
                                path="./services/"
                                Membership_Directory="/membership"
                                Expert_Directory="/experts"
                                Online_Store="/store"
                            />
                            <SitemapCategory
                                title="RESEARCH"
                                path="./research/"
                                Criminal_Appellate_Review="/appellate"
                                Criminal_Legal_Appellate_Review="/app"
                            />
                            <SitemapCategory
                                title="RESOURCES"
                                path="./resources/"
                                CLEs="/cles"
                            />
                        </Sitemap>
                    </li>
                    <li>
                        <GoogleMaps src="https://google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.8775315978623!2d-123.09091950000001!3d44.0445852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11e41b2e3f7ad%3A0xa7600cd512aa10ed!2s101%20E%2014th%20Ave%2C%20Eugene%2C%20OR%2097401!5e0!3m2!1sen!2sus!4v1722628072318!5m2!1sen!2sus" />
                    </li>
                </ul>
            </footer>
        </>
    );
}
