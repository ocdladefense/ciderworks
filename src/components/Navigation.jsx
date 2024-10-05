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
            label: "growers"
        },
        {
            url: "/where-to-buy",
            label: "where to buy"
        },
        {
            url: "/how-its-made",
            label: "how it's made"
        },
        {
            url: "/about",
            label: "about"
        },
        {
            url: "/contact",
            label: "contact us"
        },
        {
            url: "/order-progress",
            label: "orders"
        }
    ];


    items = items.map(item => {
        return (
            <div class="col-span-1">
                <a style='color: #FFF;' href={item.url}>
                    <button class="text-white text-base subpixel-antialiased hover:text-wb-cordovan pb-0 pt-1">{item.label}</button>
                </a>
            </div>
        );
    });

    return (
        <nav class="">


            <ul class="main-nav">

                <li class="col-span-1 col-start-2">
                    <a class="flex px-4" href="/">
                        <img style="vertical-align:middle;" width="30" height="30" src="../images/logos/Waldbusser Ciderworks - Logo Color-05.svg" />
                    </a>
                </li>


                {/*items*/}

            </ul>

            <div style="display:inline-block;">
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
