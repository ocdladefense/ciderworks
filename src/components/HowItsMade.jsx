/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import TwoColumnPanel from "./TwoColumnPanel";
import ContentPanel from "./ContentPanel";

export default function HowItsMade() {
    return (
        <>
            <ContentPanel heading="PICKED LOCAL">
                <p class="subpixel-antialiased container mx-auto text-2xl px-8 pt-32">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Netus senectus leo leo tristique integer curabitur elementum ex. Erat sed inceptos sapien facilisi auctor eleifend senectus inceptos. Himenaeos potenti condimentum inceptos vulputate ultrices egestas posuere. Libero porta platea scelerisque taciti nostra duis quisque nulla. Posuere a ex fringilla eros nascetur pretium mi. Posuere potenti placerat auctor cras arcu ut facilisis sem at. Litora penatibus laoreet conubia fusce sapien habitasse.
                </p>
            </ContentPanel>
                
            <TwoColumnPanel heading="SIMPLE INGREDIENTS" side="left" image="../images/mockup/Photo_Section_1.png">
                <p class="subpixel-antialiased text-lg laptop:text-2xl">
                    Ad interdum congue arcu id taciti ipsum vulputate. Fermentum facilisis ipsum porttitor maecenas platea etiam. Lectus proin habitant commodo taciti primis hac. Quis metus sed commodo tellus cursus gravida dolor ornare. Litora fringilla pulvinar non ullamcorper consectetur. Dapibus quis tristique vehicula vel litora litora fringilla ultricies commodo. Dictum amet suscipit sit gravida id vel purus consequat.
                </p>
            </TwoColumnPanel>
            <TwoColumnPanel heading="FERMENTED WITH CARE" side="right" image="../images/mockup/Photo_Section_2.png">
                <p class="subpixel-antialiased text-lg laptop:text-2xl">
                    Proin lacinia duis curabitur eros condimentum. Senectus praesent tempor eros vestibulum est mattis. At efficitur ut turpis ac ex leo. Tortor sodales purus imperdiet dis mi lobortis commodo? Integer in elit nulla lacus tincidunt curabitur erat pulvinar. Hendrerit adipiscing himenaeos ullamcorper; sed interdum leo libero rutrum. Vulputate vehicula est mus lacus mollis.
                </p>
                <p class="subpixel-antialiased text-lg laptop:text-2xl">
                    Diam vel magna sagittis fames neque malesuada; dapibus per hendrerit. Interdum tellus cubilia libero varius phasellus. Senectus facilisi neque aliquet metus faucibus dui litora. Eleifend dictum aptent natoque porttitor hendrerit quis enim aenean sociosqu. Scelerisque amet cras arcu ante integer eros. Luctus maximus arcu magna, vitae per laoreet. Mauris bibendum ipsum ex, potenti eleifend congue.
                </p>
            </TwoColumnPanel>
            <TwoColumnPanel heading="BOTTLED DRY" side="left" image="../images/mockup/Photo_Section_3.png">
                <p class="subpixel-antialiased text-lg laptop:text-2xl">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Netus senectus leo leo tristique integer curabitur elementum ex. Erat sed inceptos sapien facilisi auctor eleifend senectus inceptos. Himenaeos potenti condimentum inceptos vulputate ultrices egestas posuere. Libero porta platea scelerisque taciti nostra duis quisque nulla. Posuere a ex fringilla eros nascetur pretium mi. Posuere potenti placerat auctor cras arcu ut facilisis sem at. Litora penatibus laoreet conubia fusce sapien habitasse.
                </p>
            </TwoColumnPanel>

            <ContentPanel heading="RACKED FOR CLARITY">
                <p class="subpixel-antialiased container mx-auto text-2xl px-8 pt-32">
                    Ornare fermentum nisl conubia nam feugiat commodo. Sagittis eleifend ipsum platea fringilla condimentum habitasse faucibus. Blandit enim porta felis taciti mauris molestie. Scelerisque ullamcorper euismod in tempus id; at cursus. Maecenas sed suscipit massa diam fusce donec elementum neque. Platea lectus luctus ipsum luctus, placerat porta. Iaculis maximus pharetra etiam odio euismod. Dapibus dui scelerisque ante suscipit amet ornare.
                </p>
            </ContentPanel>

            <ContentPanel heading="MATURED TO PERFECTION">
                <p class="subpixel-antialiased container mx-auto text-2xl px-8 pt-32">
                    Himenaeos sodales lectus vulputate est curabitur massa. Class lobortis inceptos, sagittis pharetra semper vel. Proin elementum netus condimentum enim cubilia dapibus nunc aptent. Netus tellus tortor metus aliquam platea quisque dictumst facilisi imperdiet. Primis primis congue faucibus velit; egestas neque maecenas. Sed conubia quis ex mi varius; id efficitur placerat non. Ligula maximus suscipit non morbi erat vitae pellentesque aenean.
                </p>
            </ContentPanel>
        </>
    );
}
