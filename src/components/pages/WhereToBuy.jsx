/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import StoreHub from "../StoreHub";
import StoreLocation from "../StoreLocation";
import GoogleMaps from "@ocdla/global-components/src/GoogleMaps";


import ZipcodeSearch from "../ZipcodeSearch";

export default function WhereToBuy() {
    return (
        <>

            <h3 class="subpixel-antialiased text-4xl laptop:text-6xl laptop:text-8xl font-semibold text-center laptop:text-left text-wb-cordovan mb-8 container mx-auto content-heading">where to buy</h3>

            <section class="w-[90%] mx-auto tablet:mx-0 min-w-[300px] tablet:min-w-[560px] laptop:w-screen laptop:px-0 h-full flex justify-between gap-8 mb-32 laptop:mb-16 grid grid-cols-1 laptop:grid-cols-4 laptop:grid-flow-row">

                <div class="grid-span-1">

                    <ul class="subpixel-antialiased text-2xl laptop:text-3xl mt-8">
                        <StoreHub city="Corvalis" state="OR">
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
            </section>
        </>);
}
