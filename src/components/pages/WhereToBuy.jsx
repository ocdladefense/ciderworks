/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import StoreHub from "../stores/StoreHub";
import StoreLocation from "../stores/StoreLocation";
import GoogleMaps from "@ocdla/global-components/src/GoogleMaps";


import ZipcodeSearch from "../stores/ZipcodeSearch";

export default function WhereToBuy() {
    return (
        <>

            <section class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>
                <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                    <div class="container row-span-1 laptop:mx-0">
                        <h3 class={`text-sunshine-light subpixel-antialiased text-[2rem] mb-0 content-heading font-marketing`}>enjoy in oregon</h3>
                        <p class={`text-sunshine-dark font-marketing`}>willamette valley, usa</p>
                    </div>

                    <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">

                        <div class="grid-span-1">

                            <ul class="subpixel-antialiased text-2xl laptop:text-3xl mt-8">
                                <StoreHub city="Corvallis" state="OR">
                                    <StoreLocation name="Albertsons" address="1234 NW Corvallis, OR 97330" phone="(123) 456-7890" />
                                    <StoreLocation name="Safeway" address="1234 NW Corvallis, OR 97330" phone="(123) 456-7890" />
                                    <StoreLocation name="Whole Foods" address="1234 NW Corvallis, OR 97330" phone="(123) 456-7890" />
                                    <StoreLocation name="Fred Meyer" address="1234 NW Corvallis, OR 97330" phone="(123) 456-7890" />
                                </StoreHub>
                                <StoreHub city="Portland" state="OR">
                                    <StoreLocation name="Albertsons" address="1234 NW Portland, OR 97330" phone="(123) 456-7890" />
                                    <StoreLocation name="Safeway" address="1234 NW Portland, OR 97330" phone="(123) 456-7890" />
                                    <StoreLocation name="Whole Foods" address="1234 NW Portland, OR 97330" phone="(123) 456-7890" />
                                    <StoreLocation name="Fred Meyer" address="1234 NW Portland, OR 97330" phone="(123) 456-7890" />
                                </StoreHub>
                                <StoreHub city="Eugene" state="OR">
                                    <StoreLocation name="Albertsons" address="1234 NW Eugene, OR 97330" phone="(123) 456-7890" />
                                    <StoreLocation name="Safeway" address="1234 NW Eugene, OR 97330" phone="(123) 456-7890" />
                                    <StoreLocation name="Whole Foods" address="1234 NW Eugene, OR 97330" phone="(123) 456-7890" />
                                    <StoreLocation name="Fred Meyer" address="1234 NW Eugene, OR 97330" phone="(123) 456-7890" />
                                </StoreHub>
                            </ul>
                        </div>
                        <div class="col-span-2 rounded order-first laptop:order-last">
                            <ZipcodeSearch />
                            <GoogleMaps
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d22737.693426878282!2d-123.28653674560843!3d44.57223732789533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCorvallis%20grocery%20stores!5e0!3m2!1sen!2sus!4v1726690419058!5m2!1sen!2sus" />
                        </div>
                    </div>
                </div>
            </section>
        </>);
}
