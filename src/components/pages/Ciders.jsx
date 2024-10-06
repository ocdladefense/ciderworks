/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import TwoColumnPanel from "../TwoColumnPanel";
import Cider from "../Cider";
import "../../css/ciders.css";


export default function Ciders() {
    return (
        <>


            <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>
                <div class="custom-shape-divider-top-1728254966">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h3 class={`text-sunshine-light subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing`}>sunshine</h3>
                        <p class={`text-sunshine-dark font-marketing`}>bright session cider</p>
                    </div>

                    <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">


                        <div class="col-span-1 laptop:flex laptop:justify-self-start">
                            <img src="../images/bottles/sunshine.png" class="rounded pb-8 object-cover mx-auto" />
                        </div>
                        <div class="subpixel-antialiased col-span-2">

                            <p style="font-family:'Smoothy Cursive" class="text-sunshine-dark font-smoothy subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                                An early-morning, weekend-brunch, day-drinking, post-work- out, pre-dinner, just-put- the-kids-to-bed, ‘I’ll take one more’ kind of cider. Bright, citrusy and hibis- cus notes, tiny bubbles and a sessionable 6.5% ABV make this an instant must- have to your warm-weather beverage repertoire.
                            </p>
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
                            <p style="font-family:'Smoothy Cursive" class="text-burst-light font-smoothy subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
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


                        <div class="col-span-1 laptop:flex laptop:justify-self-start">
                            <img src="../images/bottles/bonfire.png" class="rounded pb-8 object-cover mx-auto" />
                        </div>
                        <div class="subpixel-antialiased col-span-2">

                            <p class={`text-burst-dark font-marketing`}>balanced heritage and dessert apples</p>
                            <p style="font-family:'Smoothy Cursive" class="text-burst-light font-smoothy subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                                An early-morning, weekend-brunch, day-drinking, post-work- out, pre-dinner, just-put- the-kids-to-bed, ‘I’ll take one more’ kind of cider. Bright, citrusy and hibis- cus notes, tiny bubbles and a sessionable 6.5% ABV make this an instant must- have to your warm-weather beverage repertoire.
                            </p>
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
                            <p style="font-family:'Smoothy Cursive" class="text-burst-light font-smoothy subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                                An early-morning, weekend-brunch, day-drinking, post-work-out, pre-dinner, just-put-the-kids-to-bed, ‘I’ll take one more’ kind of cider. Bright, citrusy and hibiscus notes, tiny bubbles and a sessionable 6.5% ABV make this an instant must-have to your warm-weather beverage repertoire.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
