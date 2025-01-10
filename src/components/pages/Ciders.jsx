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
                        <h3 class={`text-sunshine-light subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing`}>dry cider. delicious.</h3>
                        <p class={`text-sunshine-dark font-marketing`}>introducing the family of dry ciders, fermented right here in corvallis, oregon </p>
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
                    <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-2 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">


                        <div class="col-span-1 laptop:flex laptop:justify-self-start">

                            <p class="text-sunshine-dark font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px] font-semibold">WCW produces dry ciders with subtle tasting notes relying on slow fermentation techniques that celebrate the unique apples at the core of our ciders. We mix old school cider making principles with modern approaches to ensure precision in flavor, while ensuring subtleties and depth of character in our ciders. Some see hard cider more akin to beer, others see it more akin to wine, we see hard cider as unique in its own right, highlighting some of the best qualities of both. Our ciders are fermented slowly at colder temperatures to help retain aromatics, character, and the subtleties associated with truly wonderful apples.</p>

                        </div>

                        <div class="col-span-1 laptop:flex laptop:justify-self-start">

                            <p class="text-sunshine-dark font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px] font-semibold">Our flagship offerings capture the flavor and moods of the Pacific Northwest with Sunshine (a light and drinkable cider, with notes from a small percentage of heritage apples), Bonfire (a blend of heritage apples to highlight the best of the best, balanced against dessert apples), Plush (a hearty, silky cider with strong tannins, made almost entirely of heritage apples and a touch of pear to balance the heritage apples), and Burst (an aromatic blend of quince with dessert apples, be sure to savor the aroma). Estate (using only apples from our nano-orchard this blend is as local as local can be!) Each cider is designed to invoke varying tastes and styles. Celebrating the annual harvest and seasonal cycles of our food production systems we will have additional releases targeting the solstices and equinoxes, based on single varietal or unique blends.</p>
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

                            <p class="text-sunshine-dark font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px] font-semibold">
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
                            <p class="text-burst-light font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px] font-semibold">
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
                            <p class="text-burst-light font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px] font-semibold">
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
                            <p class="text-burst-light font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px] font-semibold">
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
                            <p class="text-burst-light font-default-paragraph subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px] font-semibold">
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
