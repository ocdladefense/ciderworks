


/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Legal from "@ocdla/global-components/src/Legal";
import Sitemap from "@ocdla/global-components/src/Sitemap";
import SitemapCategory from "@ocdla/global-components/src/SitemapCategory";
import Social from "@ocdla/global-components/src/Social";
import Contacts from "@ocdla/global-components/src/Contacts";
import Logo from "@ocdla/global-components/src/Logo";

import GoogleMaps from "@ocdla/global-components/src/GoogleMaps";

export default function Footer() {


    return (
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
    );
}

