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
                        Eleifend sociosqu sapien magna rhoncus, duis a vel dictum? Posuere volutpat mollis nullam id commodo blandit. Aenean quam interdum odio ut metus rhoncus torquent. Rhoncus curabitur nostra consectetur pharetra auctor pretium augue dui amet. Elementum vivamus sem sit etiam sit mus congue. Ullamcorper ridiculus class, sed phasellus commodo tempus hac. Volutpat vivamus placerat ridiculus vulputate mauris parturient fringilla augue! Mattis torquent cursus praesent a bibendum nam. Consequat ad dignissim elit cursus integer.
                    </p>
                    <p class="container mx-auto text-base">
                        Potenti turpis habitant aenean arcu imperdiet neque parturient nascetur. Mus vivamus imperdiet libero hendrerit eros scelerisque. Eu vivamus praesent volutpat; viverra dapibus dictum tempus. Quis class pulvinar eget etiam nullam cubilia cubilia aliquam ullamcorper. Posuere egestas etiam eu; dolor tincidunt vulputate consectetur. Ipsum amet habitant maximus accumsan turpis litora potenti sodales primis. Malesuada faucibus et nostra imperdiet quisque efficitur velit sit.
                    </p>
                </TwoColumnPanel>
                <section class="bg-wb-gray w-full mb-16 py-8">
                    <TwoColumnPanel side="right" image="../images/sample.png">
                        <h3 class="text-wb-cordovan text-2xl font-semibold">GROWER B</h3>
                        <p class="container mx-auto text-base">
                            Nec sapien egestas mattis efficitur volutpat purus odio. Nulla lacus cras lacinia eget massa. Nisl potenti consequat laoreet vehicula fringilla lectus himenaeos erat. Per urna penatibus porttitor nisi imperdiet molestie euismod sociosqu praesent. Ipsum dignissim a donec nisl dis dignissim pulvinar at. Ullamcorper ultricies vestibulum fames; tristique mi molestie posuere netus. Tincidunt integer pulvinar ipsum erat luctus ut primis fusce.
                        </p>
                    </TwoColumnPanel>
                </section>
                <TwoColumnPanel side="right" image="../images/sample.png">
                    <h3 class="text-wb-cordovan text-2xl font-semibold">GROWER C</h3>
                    <p class="container mx-auto text-base">
                        Conubia et dapibus auctor sagittis dignissim ipsum interdum. Et ut aliquet tortor rhoncus, augue eu sociosqu. Interdum aptent mattis posuere magnis massa varius. Sodales nunc libero nunc varius porta dolor. Vehicula tincidunt ex himenaeos scelerisque nascetur; libero vehicula ultrices. Pharetra mus dolor duis consequat a habitant vestibulum.
                    </p>
                </TwoColumnPanel>

            
        </>
    );
}
