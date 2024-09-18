/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import TwoColumnPanel from "./TwoColumnPanel";
import ProgressBar from "./ProgressBar";
import ProgressStep from "./ProgressStep";

export default function OrderProgress() {
    return (
        <>
            <h3 class="subpixel-antialiased text-4xl tablet:text-6xl laptop:text-8xl font-semibold text-center laptop:text-left text-wb-black mb-8 container mx-auto">Order #1234</h3>
            <section class="container-none laptop:container h-full mx-auto flex justify-between gap-8 mb-32 laptop:mb-16 grid grid-cols-1 tablet:grid-cols-3 tablet:grid-flow-row my-8 bg-wb-gray rounded-lg p-8">
                <div class="grid-span-1 tablet:border-r-2 tablet:border-wb-cordovan">
                    <div class="grid grid-cols-2 mb-4">
                        <strong>Name:</strong> Pending
                    </div>
                    <div class="grid grid-cols-2 mb-4">
                        <strong>Order Date:</strong> 1/1/2020
                    </div>
                    <div class="grid grid-cols-2 mb-4">
                        <strong>Order Status:</strong> Fermenting
                    </div>
                    <div class="grid grid-cols-2 mb-4">
                        <strong>Order Quantity:</strong> 100 pcs
                    </div>
                    <div class="grid grid-cols-2 mb-4">
                        <strong>Order Total:</strong> $1482.00
                    </div>
                </div>
                <div class="grid-span-2">
                    <ProgressStep name="Ordering" status="Complete" />
                    <ProgressStep name="Pressing" status="Complete" />
                    <ProgressStep name="Fermenting" status="Pending">
                        <ProgressBar percentage="70" />
                    </ProgressStep>
                    <ProgressStep name="Bottling" status="Incomplete" />
                    <ProgressStep name="Racking" status="Incomplete" />
                    <ProgressStep name="Maturing" status="Incomplete" />
                </div>
            </section>
        </>
    );
}
