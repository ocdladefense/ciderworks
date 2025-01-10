/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import TwoColumnPanel from "../TwoColumnPanel";
import ContentPanel from "../ContentPanel";

export default function HowItsMade() {
    return (
        <>

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

            <ContentPanel heading="picked local">
                <p class="font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Netus senectus leo leo tristique integer curabitur elementum ex. Erat sed inceptos sapien facilisi auctor eleifend senectus inceptos. Himenaeos potenti condimentum inceptos vulputate ultrices egestas posuere. Libero porta platea scelerisque taciti nostra duis quisque nulla. Posuere a ex fringilla eros nascetur pretium mi. Posuere potenti placerat auctor cras arcu ut facilisis sem at. Litora penatibus laoreet conubia fusce sapien habitasse.
                </p>
            </ContentPanel>

            <TwoColumnPanel heading="simple ingredients" order="rtl">
                <img src="../images/mockup/stock-photo-3.png" class="rounded pb-8 object-cover mx-auto" />
                <p class="font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    Ad interdum congue arcu id taciti ipsum vulputate. Fermentum facilisis ipsum porttitor maecenas platea etiam. Lectus proin habitant commodo taciti primis hac. Quis metus sed commodo tellus cursus gravida dolor ornare. Litora fringilla pulvinar non ullamcorper consectetur. Dapibus quis tristique vehicula vel litora litora fringilla ultricies commodo. Dictum amet suscipit sit gravida id vel purus consequat.
                </p>
            </TwoColumnPanel>
            <TwoColumnPanel heading="fermented slowly" order="ltr">
                <img src="../images/mockup/stock-photo-2.png" class="rounded pb-8 object-cover mx-auto" />
                <p class="font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    Proin lacinia duis curabitur eros condimentum. Senectus praesent tempor eros vestibulum est mattis. At efficitur ut turpis ac ex leo. Tortor sodales purus imperdiet dis mi lobortis commodo? Integer in elit nulla lacus tincidunt curabitur erat pulvinar. Hendrerit adipiscing himenaeos ullamcorper; sed interdum leo libero rutrum. Vulputate vehicula est mus lacus mollis.

                    Diam vel magna sagittis fames neque malesuada; dapibus per hendrerit. Interdum tellus cubilia libero varius phasellus. Senectus facilisi neque aliquet metus faucibus dui litora. Eleifend dictum aptent natoque porttitor hendrerit quis enim aenean sociosqu. Scelerisque amet cras arcu ante integer eros. Luctus maximus arcu magna, vitae per laoreet. Mauris bibendum ipsum ex, potenti eleifend congue.
                </p>
            </TwoColumnPanel>
            <TwoColumnPanel heading="bottled with patience" order="rtl">
                <img src="../images/mockup/stock-photo-1.png" class="rounded pb-8 object-cover mx-auto" />
                <p class="font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Netus senectus leo leo tristique integer curabitur elementum ex. Erat sed inceptos sapien facilisi auctor eleifend senectus inceptos. Himenaeos potenti condimentum inceptos vulputate ultrices egestas posuere. Libero porta platea scelerisque taciti nostra duis quisque nulla. Posuere a ex fringilla eros nascetur pretium mi. Posuere potenti placerat auctor cras arcu ut facilisis sem at. Litora penatibus laoreet conubia fusce sapien habitasse.
                </p>
            </TwoColumnPanel>

            <ContentPanel heading="racked for clarity">
                <p class="font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    Ornare fermentum nisl conubia nam feugiat commodo. Sagittis eleifend ipsum platea fringilla condimentum habitasse faucibus. Blandit enim porta felis taciti mauris molestie. Scelerisque ullamcorper euismod in tempus id; at cursus. Maecenas sed suscipit massa diam fusce donec elementum neque. Platea lectus luctus ipsum luctus, placerat porta. Iaculis maximus pharetra etiam odio euismod. Dapibus dui scelerisque ante suscipit amet ornare.
                </p>
            </ContentPanel>

            <ContentPanel heading="matured to perfection" color="bg-wb-gray">
                <p class="font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    Himenaeos sodales lectus vulputate est curabitur massa. Class lobortis inceptos, sagittis pharetra semper vel. Proin elementum netus condimentum enim cubilia dapibus nunc aptent. Netus tellus tortor metus aliquam platea quisque dictumst facilisi imperdiet. Primis primis congue faucibus velit; egestas neque maecenas. Sed conubia quis ex mi varius; id efficitur placerat non. Ligula maximus suscipit non morbi erat vitae pellentesque aenean.
                </p>
            </ContentPanel>
        </>
    );
}
