/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Social from "@ocdla/global-components/src/Social";
import Logo from "@ocdla/global-components/src/Logo";
import ContentPanel from "../ContentPanel";
import TwoColumnPanel from "../TwoColumnPanel";

export default function Contact() {
    return (
        <>
            <ContentPanel heading="contact us">
                <p class="text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Netus senectus leo leo tristique integer curabitur elementum ex. Erat sed inceptos sapien facilisi auctor eleifend senectus inceptos. Himenaeos potenti condimentum inceptos vulputate ultrices egestas posuere. Libero porta platea scelerisque taciti nostra duis quisque nulla. Posuere a ex fringilla eros nascetur pretium mi. Posuere potenti placerat auctor cras arcu ut facilisis sem at. Litora penatibus laoreet conubia fusce sapien habitasse.
                </p>
            </ContentPanel>

            <section class="mb-8 container mx-auto flex flex-row justify-between gap-8">
                <div class="flex-1">
                    <h3 class="subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-default-heading">send us a message</h3>
                    <form class="form flex flex-col w-full">
                        <label>Name:</label>
                        <input type="text" />
                        <label>Email:</label>
                        <input type="text" />
                        <label>Message:</label>
                        <textarea rows="10"></textarea>
                        <button type="submit" class="mt-8 border-2 border-wb-cordovan bg-wb-cordovan text-wb-white w-40 rounded p-2">Submit</button>
                    </form>
                </div>
                <div class="flex-1 hidden tablet:block">
                    <img src="../images/logos/Waldbusser Ciderworks - Logo Cordovan.png" />
                </div>

            </section>


            <section class="mb-8 container mx-auto">
                <h3 class="subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-default-heading">SOCIAL MEDIA</h3>
                <Social instagram-solid="/" />
            </section>



            <section class="mb-8 container mx-auto">
                <h3 class="subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-default-heading">OUR LOCATIONS</h3>
                <p class="text-base">
                    123 Main Street, Anytown, USA 12345
                    (123) 456-7890
                    <br />
                    456 Second Street, Anytown, USA 67890
                    (123) 456-7890
                </p>
            </section>
        </>
    );
}
