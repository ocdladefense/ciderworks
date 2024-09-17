


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
        <footer class="text-wb-white bg-wb-black p-4 pb-16 lg:p-8 lg:pb-32 w-full">
            <div class="container mx-auto grid grid-cols-6 gap-4 bg-wb-black pt-4 lg:pt-8">
                <Logo src="../images/logos/Waldbusser Ciderworks - Logo Color-05.svg" size="pl-4 lg:pl-8 size-full"/>
                <div class="col-span-4 pl-8">
                    <h3 class="text-wb-red text-lg">Contact</h3>
                    George Waldbusser, Owner<br />
                    541-xxx-xxxx
                    <Social instagram="waldbusserciderworks" fa-facebook="waldbusserciderworks"/>
                </div>
                <Sitemap className="flex flex-col gap-8 text-nowrap text-wb-white lg:flex-row lg:gap-16">
                    <SitemapCategory title="Temporary navigation" path="/" 
                        Home="/" 
                        About="/about" 
                        How_Its_Made="/howitsmade" 
                        Growers="/growers" 
                        Where_To_Buy="/wheretobuy" 
                        Contact_Us="/contact"
                    />
                </Sitemap>
            </div>
        </footer>
    );
}

