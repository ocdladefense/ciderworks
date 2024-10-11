/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";

export default class Router {

    #routes;

    constructor(routes) {
        this.#routes = routes;
    }

    getLocation() {
        return window.location.href.split("/").at(-1).toLowerCase();
    }


    async getPage() {

        const location = window.location.href.split("/").at(-1).toLowerCase();
        
        // Module providing the component.
        let module;

        // Component that should be imported and then injected into the page.
        let page = this.#routes[location] || "Home";
        
        // Default header value.
        let header = <></>;

        if (page === "Home") {
            let h = await import("../components/HomeHeader");
            header = h.default;
        }

        
        console.log(header);
        module = await import(`../components/pages/${page}`);


        return {Page: module.default, HeaderTwo: header};
    }
}
