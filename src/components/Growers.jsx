/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import TwoColumnPanel from "./TwoColumnPanel";

export default function Growers() {
    return (
        <>
            <section class="pb-32 bg-wb-black text-wb-white w-full mb-16">
                <h3 class="container mx-auto text-2xl font-semibold">OUR FAMILY</h3>
                <p class="container mx-auto text-base">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Netus senectus leo leo tristique integer curabitur elementum ex. Erat sed inceptos sapien facilisi auctor eleifend senectus inceptos. Himenaeos potenti condimentum inceptos vulputate ultrices egestas posuere. Libero porta platea scelerisque taciti nostra duis quisque nulla. Posuere a ex fringilla eros nascetur pretium mi. Posuere potenti placerat auctor cras arcu ut facilisis sem at. Litora penatibus laoreet conubia fusce sapien habitasse.
                </p>
            </section>

            <TwoColumnPanel side="right" image="../images/sample.png">
                <h3 class="text-wb-cordovan text-2xl font-semibold">GROWER A</h3>
                <p class="container mx-auto text-base">
                    Ad interdum congue arcu id taciti ipsum vulputate. Fermentum facilisis ipsum porttitor maecenas platea etiam. Lectus proin habitant commodo taciti primis hac. Quis metus sed commodo tellus cursus gravida dolor ornare. Litora fringilla pulvinar non ullamcorper consectetur. Dapibus quis tristique vehicula vel litora litora fringilla ultricies commodo. Dictum amet suscipit sit gravida id vel purus consequat.
                </p>
            </TwoColumnPanel>
            <TwoColumnPanel side="right" image="../images/sample.png">
                <h3 class="text-wb-cordovan text-2xl font-semibold">GROWER B</h3>
                <p class="container mx-auto text-base">
                    Ad interdum congue arcu id taciti ipsum vulputate. Fermentum facilisis ipsum porttitor maecenas platea etiam. Lectus proin habitant commodo taciti primis hac. Quis metus sed commodo tellus cursus gravida dolor ornare. Litora fringilla pulvinar non ullamcorper consectetur. Dapibus quis tristique vehicula vel litora litora fringilla ultricies commodo. Dictum amet suscipit sit gravida id vel purus consequat.
                </p>
            </TwoColumnPanel>
            <TwoColumnPanel side="right" image="../images/sample.png">
                <h3 class="text-wb-cordovan text-2xl font-semibold">GROWER C</h3>
                <p class="container mx-auto text-base">
                    Ad interdum congue arcu id taciti ipsum vulputate. Fermentum facilisis ipsum porttitor maecenas platea etiam. Lectus proin habitant commodo taciti primis hac. Quis metus sed commodo tellus cursus gravida dolor ornare. Litora fringilla pulvinar non ullamcorper consectetur. Dapibus quis tristique vehicula vel litora litora fringilla ultricies commodo. Dictum amet suscipit sit gravida id vel purus consequat.
                </p>
            </TwoColumnPanel>
        </>
    );
}
