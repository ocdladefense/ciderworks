/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import TwoColumnPanel from "../TwoColumnPanel";
import Cider from "../Cider";
import "../../css/ciders.css";



/*
Special releases by July 15


    - Blonde cider, and


        - QR - Flagship releases are what the four varietals


            - Future releases
*/


export default function Ciders() {
    return (
        <>



            {/*
            <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>

                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h2 class={`text-sunshine-light subpixel-antialiased phone:text-[1.5rem] tablet:text-[3.0rem] mb-0 content-heading font-marketing`}>slow cider.<br />made dry.</h2>

                    </div>


                </div>
            </section>
*/}

            <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>
                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto pb-8 pt-12 text-sunshine-dark">
                    <h2 class="text-center mx-auto subpixel-antialiased text-[4rem] mb-0 content-heading font-marketing tracking-wider leading-[35px] mb-4">waldbusser</h2>
                    <h3 class="text-center mx-auto subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing tracking-wider leading-[35px] mb-4">ciderworks</h3>

                </div>

                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto pb-8 text-center text-6xl mb-20" style="line-height:1.0rem;">
                    <span style="transform: rotate(-2.5deg);" class="font-smoothy-cursive inline-block text-sunshine-dark">Slow&nbsp;Cider&nbsp;Made&nbsp;Dry</span>
                </div>



            </section>

            <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>
                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto pb-8 pt-12 text-sunshine-dark">
                    <div class="vs-products" data-vs-list="16813" data-vs-available="false"></div>

                </div>
            </section>

            <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>

                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h2 class="text-sunshine-light subpixel-antialiased phone:text-[1.5rem] tablet:text-[3.0rem] mb-0 content-heading font-marketing">Inaugural Ciders</h2>
                        <p class={`text-sunshine-dark font-marketing`}>waldbusser ciderworks dry ciders<br />fermented right here in corvallis, oregon </p>
                    </div>
                </div>
            </section>


            {/* <!-- begin inaugural ciders --> */}

            <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>


                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h3 class={`text-sunshine-light subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing`}>imperial amber</h3>
                        <p class={`text-sunshine-dark font-marketing`}>a bold, dry heritage cider</p>
                    </div>

                    <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">


                        <div class="col-span-1 laptop:flex laptop:justify-self-start">
                            <img src="../images/labels/inaugural-amber.png" class="rounded pb-8 object-cover mx-auto" />
                        </div>
                        <div class="subpixel-antialiased col-span-2">

                            <p class="text-sunshine-dark font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                                Imperial Amber is a special release commemorating one of two first commercial batches we produced. It is a bold, round, and full-flavored cider featuring Brown Snout and Roxbury Russet apples from Wombat Flats Farm in Corvallis, OR. Employing French wine making techniques of Sur Lie  (extended aging on lees), and Bâtonnage (stirring the lees), the cider has a complex flavor and refined taste, while being fermented fully dry.
                            </p>
                        </div>

                    </div>
                </div>
            </section>




            <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>


                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h3 class={`text-sunshine-light subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing`}>inaugural blonde</h3>
                        <p class={`text-sunshine-dark font-marketing`}>a crisp, dry heritage cider</p>
                    </div>

                    <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">



                        <div class="subpixel-antialiased col-span-2">

                            <p class="text-sunshine-dark font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                                Inaugural Blonde is a special release commemorating one of two first commercial batches we produced. It is a dry, bright, crisp cider featuring Ellis Bitter and Ashmead’s Kernel apples from Wombat Flats Farm in Corvallis, OR. We also add a touch of pear to improve mouthfeel and flavor profile. Employing French wine making techniques of Sur Lie (extended aging on lees), and Bâtonnage (stirring the lees), the cider has a complex flavor and refined taste, while being fermented fully dry.
                            </p>
                        </div>

                        <div class="col-span-1 laptop:flex laptop:justify-self-start">
                            <img src="../images/labels/inaugural-blonde.png" class="rounded pb-8 object-cover mx-auto" />
                        </div>

                    </div>
                </div>
            </section>




            <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>


                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h3 class={`text-sunshine-light subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing`}>oregon grape</h3>
                        <p class={`text-sunshine-dark font-marketing`}>a beautiful, complex dry cider</p>
                    </div>

                    <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">


                        <div class="col-span-1 laptop:flex laptop:justify-self-start">
                            <img src="../images/labels/inaugural-grape.png" class="rounded pb-8 object-cover mx-auto" />
                        </div>
                        <div class="subpixel-antialiased col-span-2">

                            <p class="text-sunshine-dark font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                                Oregon Grape is a cider base infused with the berries of Oregon’s state flower, <i>Berberis aquifolium</i>, otherwise known as Oregon Grape. Related to the holly plants, and not grapes, these native plants are important ecologically and culturally to the people of the Pacific Northwest. Our berries come from a small patch of tall Oregon Grape we planted a few years prior to the licensing of the cidery for this explicit purpose, an Oregon Grape hard cider. The apple varieties in the cider base will vary among batches, but are still fermented slowly employing French wine making techniques of Sur Lie (extended aging on lees), and Bâtonnage (stirring the lees), with Oregon Grape providing a tart complement to the dry cider base. We hope you begin to notice this great native plant around more, as it is a common landscape choice in many public places, and it inspires you to support native plant restoration and conservation in the region.
                            </p>
                        </div>

                    </div>
                </div>
            </section>





            {/* <!-- end inaugural ciders --> */}



            {/* <!-- begin flagship --> */}


            <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>
                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h2 class="text-sunshine-light subpixel-antialiased phone:text-[1.5rem] tablet:text-[3.0rem] mb-0 content-heading font-marketing">Flagship Ciders</h2>
                        <p class={`text-sunshine-dark font-marketing`}>waldbusser ciderworks dry ciders<br />fermented right here in corvallis, oregon </p>
                    </div>

                    <div class="container-none tablet:container laptop:container mx-auto h-full gap-6 laptop:gap-8 row-span-4">
                        <div class="subpixel-antialiased col-span-1 p-8 pl-0 ml-[-10px]">
                            <img src="../images/bottles/bottles.png" class="rounded pb-8 object-cover" />
                        </div>
                    </div>
                </div>


            </section>



            <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>


                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h3 class={`text-sunshine-light subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing`}>sunshine</h3>
                        <p class={`text-sunshine-dark font-marketing`}>bright session cider</p>
                    </div>

                    <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">


                        <div class="subpixel-antialiased col-span-2">

                            <p class="text-sunshine-dark font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                                An early-morning, weekend-brunch, day-drinking, post-work- out, pre-dinner, just-put- the-kids-to-bed, ‘I’ll take one more’ kind of cider. Bright, citrusy and hibis- cus notes, tiny bubbles and a sessionable 6.5% ABV make this an instant must- have to your warm-weather beverage repertoire.
                            </p>
                        </div>



                        <div class="col-span-1 laptop:flex laptop:justify-self-start">
                            <img src="../images/bottles/sunshine.png" class="rounded pb-8 object-cover mx-auto" />
                        </div>


                    </div>
                </div>
            </section>





            <section class={`fullscreen bg-plush laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>
                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h3 class={`text-burst-light subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing`}>plush</h3>
                        <p class={`text-burst-dark font-marketing`}>bold, silky, smooth</p>
                    </div>

                    <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">


                        <div class="col-span-1 laptop:flex laptop:justify-self-start">
                            <img src="../images/bottles/plush.png" class="rounded pb-8 object-cover mx-auto" />
                        </div>
                        <div class="subpixel-antialiased col-span-2">
                            <p class={`text-burst-dark font-marketing`}>all heritage apples</p>
                            <p class="text-burst-light font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px] ">
                                An early-morning, weekend-brunch, day-drinking, post-work- out, pre-dinner, just-put- the-kids-to-bed, ‘I’ll take one more’ kind of cider. Bright, citrusy and hibis- cus notes, tiny bubbles and a sessionable 6.5% ABV make this an instant must- have to your warm-weather beverage repertoire.
                            </p>
                        </div>

                    </div>
                </div>
            </section>



            <section class={`fullscreen bg-bonfire laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>
                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h3 class={`text-burst-light subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing`}>bonfire</h3>
                        <p class={`text-burst-dark font-marketing`}>beautiful, aromatic, complex</p>
                    </div>

                    <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">


                        <div class="subpixel-antialiased col-span-2">

                            <p class={`text-burst-dark font-marketing`}>balanced heritage and dessert apples</p>
                            <p class="text-burst-light font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px] ">
                                An early-morning, weekend-brunch, day-drinking, post-work- out, pre-dinner, just-put- the-kids-to-bed, ‘I’ll take one more’ kind of cider. Bright, citrusy and hibis- cus notes, tiny bubbles and a sessionable 6.5% ABV make this an instant must- have to your warm-weather beverage repertoire.
                            </p>
                        </div>



                        <div class="col-span-1 laptop:flex laptop:justify-self-start">
                            <img src="../images/bottles/bonfire.png" class="rounded pb-8 object-cover mx-auto" />
                        </div>


                    </div>
                </div>
            </section>


            <section class={`fullscreen bg-burst laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>
                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h3 class={`text-burst-light subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing`}>burst</h3>
                        <p class={`text-burst-dark font-marketing`}>beautiful, aromatic, complex</p>
                    </div>

                    <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">


                        <div class="col-span-1 laptop:flex laptop:justify-self-start">
                            <img src="../images/bottles/burst.png" class="rounded pb-8 object-cover mx-auto" />
                        </div>
                        <div class="subpixel-antialiased col-span-2">
                            <p class={`text-burst-dark font-marketing`}>quince and apples</p>
                            <p class="text-burst-light font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px] ">
                                An early-morning, weekend-brunch, day-drinking, post-work-out, pre-dinner, just-put-the-kids-to-bed, ‘I’ll take one more’ kind of cider. Bright, citrusy and hibiscus notes, tiny bubbles and a sessionable 6.5% ABV make this an instant must-have to your warm-weather beverage repertoire.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/*}
            <section class={`fullscreen bg-burst laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>
                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h3 class={`text-burst-light subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing`}>estate</h3>
                        <p class={`text-burst-dark font-marketing`}>apples from our nano-orchard</p>
                    </div>

                    <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">


                        <div class="col-span-1 laptop:flex laptop:justify-self-start">
                            <img src="../images/bottles/burst.png" class="rounded pb-8 object-cover mx-auto" />
                        </div>
                        <div class="subpixel-antialiased col-span-2">
                            <p class={`text-burst-dark font-marketing`}>quince and apples</p>
                            <p class="text-burst-light font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px] ">
                                Using only apples from our nano-orchard this blend is as local as local can be!
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            */}
        </>
    );
}
