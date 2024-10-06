/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import TwoColumnPanel from "../TwoColumnPanel";
import ProgressBar from "../orders/ProgressBar";
import ProgressStep from "../orders/ProgressStep";

export default function OrderProgress() {
    return (
        <>

            <section class="font-default-heading container-none laptop:container h-full mx-auto flex justify-between gap-12 mb-32 laptop:mb-16 grid grid-cols-1 tablet:grid-cols-2 tablet:grid-flow-row my-8 bg-wb-gray gap-8 rounded-lg p-8">
                <div class="grid-span-1 tablet:border-r-2 tablet:pr-8 tablet:border-wb-cordovan">
                    <h3 class="subpixel-antialiased text-base font-semibold text-center laptop:text-left text-wb-black mb-8 container mx-auto">Order #1234</h3>
                    <div class="grid-cols-2 mb-4">
                        <strong>Working!</strong>
                    </div>
                    <div class="grid-cols-2 mb-4">
                        <strong>Date:</strong> 1/1/2020
                    </div>
                    <div class="grid-cols-2 mb-4">
                        <strong>Status:</strong> Fermenting
                    </div>
                    <div class="grid-cols-2 mb-4">
                        <strong>Quantity:</strong> 100 pcs
                    </div>
                    <div class="grid-cols-2 mb-4">
                        <strong>Total:</strong> $1,482.00
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


            <section class="font-default-heading container-none laptop:container h-full mx-auto flex justify-between gap-12 mb-32 laptop:mb-16 grid grid-cols-1 tablet:grid-cols-2 gap-8 tablet:grid-flow-row my-8 bg-wb-gray rounded-lg p-8">
                <div class="grid-span-1 tablet:pr-8 tablet:border-r-2 tablet:border-wb-cordovan">
                    <h3 class="subpixel-antialiased font-semibold text-center laptop:text-left text-wb-black mb-8 container mx-auto">Order #1235</h3>
                    <div class="grid-cols-2 mb-4">
                        <strong>Working!</strong>
                    </div>
                    <div class="grid-cols-2 mb-4">
                        <strong>Date:</strong> 1/1/2020
                    </div>
                    <div class="grid-cols-2 mb-4">
                        <strong>Status:</strong> Pressing
                    </div>
                    <div class="grid-cols-2 mb-4">
                        <strong>Quantity:</strong> 80 pcs
                    </div>
                    <div class="grid-cols-2 mb-4">
                        <strong>Total:</strong> $1,185.60
                    </div>
                </div>
                <div class="grid-span-2">
                    <ProgressStep name="Ordering" status="Complete" />
                    <ProgressStep name="Pressing" status="Pending" />
                    <ProgressStep name="Fermenting" status="Incomplete" />
                    <ProgressStep name="Bottling" status="Incomplete" />
                    <ProgressStep name="Racking" status="Incomplete" />
                    <ProgressStep name="Maturing" status="Incomplete" />
                </div>
            </section>
        </>
    );
}
