/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import TwoColumnPanel from "../TwoColumnPanel";
import Cider from "../Cider";
import "../../css/ciders.css";


export default function Ciders() {
    return (
        <>


            <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>

                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h2 class={`text-sunshine-light subpixel-antialiased phone:text-[1.5rem] tablet:text-[3.0rem] mb-0 content-heading font-marketing`}>slow cider.<br />made dry.</h2>
                        <p class={`text-sunshine-dark font-marketing`}>waldbusser ciderworks dry ciders<br />fermented right here in corvallis, oregon </p>
                    </div>

                    <div class="container-none tablet:container laptop:container mx-auto h-full gap-6 laptop:gap-8 row-span-4">
                        <div class="subpixel-antialiased col-span-1 p-8">
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


                        <div class="col-span-1 laptop:flex laptop:justify-self-start">
                            <img src="../images/bottles/sunshine.png" class="rounded pb-8 object-cover mx-auto" />
                        </div>
                        <div class="subpixel-antialiased col-span-2">

                            <p class="text-sunshine-dark font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
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


                        <div class="col-span-1 laptop:flex laptop:justify-self-start">
                            <img src="../images/bottles/bonfire.png" class="rounded pb-8 object-cover mx-auto" />
                        </div>
                        <div class="subpixel-antialiased col-span-2">

                            <p class={`text-burst-dark font-marketing`}>balanced heritage and dessert apples</p>
                            <p class="text-burst-light font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px] ">
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
