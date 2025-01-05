/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import TwoColumnPanel from "../TwoColumnPanel";
import ContentPanel from "../ContentPanel";

export default function Growers() {
    return (
        <>
            <ContentPanel heading="meet our growers" color="bg-wb-black text-wb-white" headingColor="text-wb-gray">
                <p class=" text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Netus senectus leo leo tristique integer curabitur elementum ex. Erat sed inceptos sapien facilisi auctor eleifend senectus inceptos. Himenaeos potenti condimentum inceptos vulputate ultrices egestas posuere. Libero porta platea scelerisque taciti nostra duis quisque nulla. Posuere a ex fringilla eros nascetur pretium mi. Posuere potenti placerat auctor cras arcu ut facilisis sem at. Litora penatibus laoreet conubia fusce sapien habitasse.
                </p>
            </ContentPanel>


            <TwoColumnPanel heading="Crooked Row Orchards, Corvallis, OR" order="ltr">
                <img src="../images/sample.png" class="rounded pb-8 object-cover mx-auto" />
                <p class=" text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    Our own nanoscale orchard, with a couple hundred dwarf Herefordshire Redstreak Trees, and a number of other semi-dwarf varieties we are evaluating for single varietal runs and other unique options. Our Estate blend comes exclusively from our own orchards, blended from these trees.
                </p>
            </TwoColumnPanel>
            <TwoColumnPanel heading="grower b" order="rtl">
                <img src="../images/sample.png" class="rounded pb-8 object-cover mx-auto" />
                <p class=" text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    Nec sapien egestas mattis efficitur volutpat purus odio. Nulla lacus cras lacinia eget massa. Nisl potenti consequat laoreet vehicula fringilla lectus himenaeos erat. Per urna penatibus porttitor nisi imperdiet molestie euismod sociosqu praesent. Ipsum dignissim a donec nisl dis dignissim pulvinar at. Ullamcorper ultricies vestibulum fames; tristique mi molestie posuere netus. Tincidunt integer pulvinar ipsum erat luctus ut primis fusce.
                </p>
            </TwoColumnPanel>
            <TwoColumnPanel heading="grower c" order="ltr">
                <img src="../images/sample.png" class="rounded pb-8 object-cover mx-auto" />
                <p class="default-paragraph">
                    Conubia et dapibus auctor sagittis dignissim ipsum interdum. Et ut aliquet tortor rhoncus, augue eu sociosqu. Interdum aptent mattis posuere magnis massa varius. Sodales nunc libero nunc varius porta dolor. Vehicula tincidunt ex himenaeos scelerisque nascetur; libero vehicula ultrices. Pharetra mus dolor duis consequat a habitant vestibulum.
                </p>
            </TwoColumnPanel>


        </>
    );
}
