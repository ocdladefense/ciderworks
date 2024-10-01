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


                {items}

            </ul>
        </nav>
    );
}
