export var attribute;
(function (attribute) {
    attribute["image"] = "image";
})(attribute || (attribute = {}));
class bestsale extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            titulo: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./components/bestS/card.css">
                <section>
               <img src="${this.image}">
                <h2>${this.titulo}</h2>
                </section>
                <div><div>
                `;
        }
    }
}
customElements.define("best-sale", bestsale);
export default bestsale;
