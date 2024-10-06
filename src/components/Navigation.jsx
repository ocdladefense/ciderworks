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
            label: "drink",
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
        let phoneDisplay = !!item.hidden ? "hidden phone:hidden tablet:inline-block" : "phone:inline-block";
        return (
            <li class={`hidden ${phoneDisplay} p-2`}>
                <a href={item.url}>
                    <button class={`font-marketing text-base subpixel-antialiased hover:text-wb-cordovan`}>{item.label}</button>
                </a>
            </li>
        );
    });

    return (
        <nav class="tablet:px-8">


            <ul class="inline-block">

                <li style="vertical-align:middle;" class="inline-block p-2">
                    <a href="/">
                        <img style="inline-block vertical-align:middle;" width="30" height="30" src="../images/logos/logo.svg" />
                    </a>
                </li>


                {items}


            </ul>


            <div
                style="float:right; margin-right:15px;" id="toggleMenu"
                class="tablet:hidden grid place-content-center w-20 h-10 p-6 mx-auto"
            >
                <div
                    class="hamburgler inline-block w-6 h-1 bg-menu rounded-full transition-all duration-150 before:content-[''] before:absolute before:w-8 before:h-1 before:bg-menu before:rounded-full before:-translate-y-3 before:transition-all before:duration-150 after:content-[''] after:absolute after:w-8 after:h-1 after:bg-menu after:rounded-full after:translate-y-3 after:transition-all after:duration-150"
                ></div>
            </div>



        </nav>
    );
}
