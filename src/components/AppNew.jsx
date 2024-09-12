/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Navbar from "@ocdla/global-components/src/Navbar";
import Footer from "@ocdla/global-components/src/Footer";

export default function App({ headerPinned = false }) {
    // There is a component that can be used to render a nice 404 error.
    // return <NotFound />;

    return (
        <>
            <header
                class={`${headerPinned ? "sticky top-0" : ""}container mx-auto flex w-full flex-col bg-white lg:h-32`}>
                <Navbar />
            </header>

            <main>
                <section cols="1">
                    Some initial content and images here...
                </section>
                <section
                    cols="2"
                    width="25%,75%">
                    <div class="container mx-auto border-x">
                        <form>
                            <div class="space-y-12">
                                <div class="border-b border-gray-900/10 pb-12">
                                    <h2 class="text-base font-semibold leading-7 text-gray-900">
                                        Upload a file
                                    </h2>

                                    <p class="mt-1 text-sm leading-6 text-gray-600">
                                        This information will be displayed
                                        publicly so be careful what you share.
                                    </p>

                                    <input
                                        type="file"
                                        class="mt-6"
                                    />
                                </div>
                            </div>

                            <div class="mt-6 flex items-center justify-end gap-x-6">
                                <button
                                    type="button"
                                    class="text-sm font-semibold leading-6 text-gray-900">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <footer class="bg-wb-black text-wb-white container mx-auto border border-b-0 p-4 pb-16 lg:p-8 lg:pb-32">
                <Footer
                    showFacebook={true}
                    showTwitter={true}
                    showYouTube={true}
                    useGoogleMapsIFrame={true}
                />
            </footer>
        </>
    );
}
