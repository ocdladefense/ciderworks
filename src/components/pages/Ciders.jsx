/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import TwoColumnPanel from "../TwoColumnPanel";

export default function Ciders() {
    return (
        <>
            <TwoColumnPanel heading="MISSON" color="bg-wb-black text-wb-white" headingColor="text-wb-gray">
                <img src="../images/mockup/sunshine-bottle.png" class="rounded pb-8 object-cover mx-auto" />
                <p class="subpixel-antialiased text-lg tablet:text-2xl mx-auto w-4/5 laptop:mx-0 laptop:w-full">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Netus senectus leo leo tristique integer curabitur elementum ex. Erat sed inceptos sapien facilisi auctor eleifend senectus inceptos. Himenaeos potenti condimentum inceptos vulputate ultrices egestas posuere. Libero porta platea scelerisque taciti nostra duis quisque nulla. Posuere a ex fringilla eros nascetur pretium mi. Posuere potenti placerat auctor cras arcu ut facilisis sem at. Litora penatibus laoreet conubia fusce sapien habitasse.
                </p>
            </TwoColumnPanel>

            <TwoColumnPanel heading="MISSON" color="bg-wb-black text-wb-white" headingColor="text-wb-gray">
                <img src="../images/mockup/plush-bottle.png" class="rounded pb-8 object-cover mx-auto" />
                <p class="subpixel-antialiased text-lg tablet:text-2xl mx-auto w-4/5 laptop:mx-0 laptop:w-full">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Netus senectus leo leo tristique integer curabitur elementum ex. Erat sed inceptos sapien facilisi auctor eleifend senectus inceptos. Himenaeos potenti condimentum inceptos vulputate ultrices egestas posuere. Libero porta platea scelerisque taciti nostra duis quisque nulla. Posuere a ex fringilla eros nascetur pretium mi. Posuere potenti placerat auctor cras arcu ut facilisis sem at. Litora penatibus laoreet conubia fusce sapien habitasse.
                </p>
            </TwoColumnPanel>


        </>
    );
}
