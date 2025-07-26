/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Sitemap from "./src/Sitemap";
import SitemapCategory from "./src/SitemapCategory";
import Social from "./src/Social";




export default function Footer() {


    return (
        <footer class="text-slate-200 bg-wb-black p-8 tablet:p-16 laptop:p-32 laptop:pt-32">




            <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto pb-8 text-base">
                <h2 class="text-center mx-auto subpixel-antialiased text-[4rem] mb-0 content-heading font-marketing tracking-wider leading-[35px] mb-4">waldbusser</h2>
                <h3 class="text-center mx-auto subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing tracking-wider leading-[35px] mb-4">ciderworks</h3>

            </div>

            <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto pb-8 text-center text-6xl mb-20" style="line-height:1.0rem;">
                <span style="transform: rotate(-2.5deg);color: rgba(255, 255, 255, 0.6)" class="font-smoothy-cursive inline-block">Slow&nbsp;Cider&nbsp;Made&nbsp;Dry</span>
            </div>

            <div class="container tablet:grid tablet:grid-cols-6">

                <div class="col-start-1 pb-8">
                    <a href='/'>
                        <img src="../images/logos/logo.svg" />
                    </a>
                </div>

                <div class="col-start-3 pb-8">
                    <h3 class="text-wb-red text-lg">Contact</h3>
                    <ul class="text-base">
                        <li>George Waldbusser</li>
                        <li><a href="http://ciderworks.ocdla.org/" class="hover:text-wb-lime">waldbusserciderworks.com</a></li>
                        <li><a href="tel:+14106101726" class="hover:text-wb-lime">(410) 610-1726</a></li>
                        <li><a href="mailto:info@waldbusserciderworks.com" class="hover:text-wb-lime">info@waldbusserciderworks.com</a></li>
                    </ul>
                    <Social instagram="waldbusserciderworks" />
                </div>

                <Sitemap className="col-start-5 text-nowrap text-base pb-8" style="font-weight:200;">
                    <SitemapCategory title="Waldbusser Ciderworks" path="/" className="text-base hover:text-stone-500"
                        Home="/"
                        About="/about"
                        How_Its_Made="/how-its-made"
                        Growers="/growers"
                        Where_To_Buy="/where-to-buy"
                        Order_Progress="/order-progress"
                        Contact_Us="/contact"
                    />
                </Sitemap>

            </div>

        </footer>
    );
}

