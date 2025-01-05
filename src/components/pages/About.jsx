/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import ContentPanel from "../ContentPanel";

export default function About() {
    return (
        <>
            <ContentPanel heading="company philosophy">
                <p class="font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    WCW wants consumers to reimagine cider by connecting consumers with the growers who grow the apples we use, and to highlight the diversity of apples and their flavors. We believe in making artisanal ciders that are approachable and engage a wide diversity of consumers, from first time cider drinkers to afficionados. We take things slow, no cider before its time!
                </p>
            </ContentPanel>

            <ContentPanel heading="company vision" striped>
                <p class="font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    A sustainable cider company that acknowledges the food production systems supporting our hard cider production. As a company WCW wants to do more good and less harm by finding creative ways to reinvest in agricultural and conservation efforts for the responsible stewardship of our natural and cultivated lands. We will also leverage these efforts to connect with other food producers around slow-food movements, and farm to table ideals.
                </p>
            </ContentPanel>


            <ContentPanel heading="services">
                <p class="font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    Himenaeos sodales lectus vulputate est curabitur massa. Class lobortis inceptos, sagittis pharetra semper vel. Proin elementum netus condimentum enim cubilia dapibus nunc aptent. Netus tellus tortor metus aliquam platea quisque dictumst facilisi imperdiet. Primis primis congue faucibus velit; egestas neque maecenas. Sed conubia quis ex mi varius; id efficitur placerat non. Ligula maximus suscipit non morbi erat vitae pellentesque aenean.
                </p>
            </ContentPanel>



            <ContentPanel heading="testimonials">
                <p class="font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    Himenaeos sodales lectus vulputate est curabitur massa. Class lobortis inceptos, sagittis pharetra semper vel. Proin elementum netus condimentum enim cubilia dapibus nunc aptent. Netus tellus tortor metus aliquam platea quisque dictumst facilisi imperdiet. Primis primis congue faucibus velit; egestas neque maecenas. Sed conubia quis ex mi varius; id efficitur placerat non. Ligula maximus suscipit non morbi erat vitae pellentesque aenean.
                </p>
            </ContentPanel>


        </>
    );
}
