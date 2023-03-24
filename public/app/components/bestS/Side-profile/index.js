export var Attribute;
(function (Attribute) {
    Attribute["image"] = "image";
    Attribute["name"] = "name";
    Attribute["description"] = "description";
})(Attribute || (Attribute = {}));
class profileside extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            name: null,
            description: null
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
                <h2>${this.name}</h2>
                <p> ${this.description}</p>
                </section>

                `;
        }
    }
}
customElements.define("profile-side", profileside);
export default profileside;
