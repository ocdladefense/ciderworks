/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Logo from "@ocdla/global-components/src/Logo";

export default function Navigation() {
    let items = [
        {
            url: "/",
            label: "home"
        },
        {
            url: "/ciders",
            label: "ciders"
        },
        {
            url: "/growers",
            label: "growers",
            hidden: true
        },
        {
            url: "/where-to-buy",
            label: "where to buy",
            hidden: false
        },
        {
            url: "/how-its-made",
            label: "how it's made",
            hidden: true
        },
        {
            url: "/about",
            label: "about",
            hidden: true
        },
        {
            url: "/contact",
            label: "contact us",
            hidden: true
        },
        {
            url: "/order-progress",
            label: "orders",
            hidden: true
        }
    ];


    items = items.map(item => {
        let phoneDisplay = !!item.hidden ? "hidden phone:hidden" : "phone:inline-block";
        return (
            <li class={`hidden ${phoneDisplay} p-2`}>
                <a href={item.url}>
                    <button class={`text-base subpixel-antialiased hover:text-wb-cordovan`}>{item.label}</button>
                </a>
            </li>
        );
    });

    return (
        <nav class="">


            <ul class="inline-block">

                <li style="vertical-align:middle;" class="inline-block p-2">
                    <a href="/">
                        <img style="vertical-align:middle;" width="30" height="30" src="../images/logos/logo.svg" />
                    </a>
                </li>


                {items}

            </ul>

            <div class="inline-block laptop:hidden" style="vertical-align:middle;">
                <button class="relative group">
                    <div class="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                        <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
                            <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
                            <div class="bg-white h-[1px] rounded"></div>
                            <div class="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
                        </div>
                    </div>
                </button>
            </div>

        </nav>
    );
}
