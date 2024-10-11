/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";

export default class Router {

    constructor() {

    }

    getLocation() {
        return window.location.href.split("/").at(-1).toLowerCase();
    }


    async getPage() {

        const location = window.location.href.split("/").at(-1).toLowerCase();
        let page;
        let header = <></>;
        
    
        switch (location) {
            case "about":
                page = "About";
                break;
            case "contact":
                page = "Contact";
                break;
            case "growers":
                page = "Growers";
                break;
            case "ciders":
                page = "Ciders";
                break;
            case "how-its-made":
                page = "HowItsMade";
                break;
            case "drink":
                page = "WhereToBuy";
                break;
            case "order-progress":
                page = "OrderProgress";
                break;
            case "whats-brewing":
                page = "OrderProgress";
                break;
            default:
                page = "Home";
                let h = await import("../components/HomeHeader");
                header = h.default;
                
                break;
        }

        
        console.log(header);
        let module = await import(`../components/pages/${page}`);


        return {Page: module.default, HeaderTwo: header};
    }
}
