export var attr;
(function (attr) {
    attr["image"] = "image";
})(attr || (attr = {}));
class underph extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
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
                <link rel="stylesheet" href="./components/bestS/under.css">
                <section>
               <img src="${this.image}">
                </section>
                <div><div>
                `;
        }
    }
}
customElements.define("under-phone", underph);
export default underph;
