export var Attri;
(function (Attri) {
    Attri["image"] = "image";
    Attri["name"] = "name";
    Attri["description"] = "description";
})(Attri || (Attri = {}));
class sugesforyou extends HTMLElement {
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
                <link rel="stylesheet" href="./components/Side-profile/scard.css">
                <section>
               <img src="${this.image}">
               <section class = "nameandsec">
                <h2>${this.name}</h2>
                <p class = "desc"> ${this.description}</p>
                </section>
                </section>
                `;
        }
    }
}
customElements.define("suge-you", sugesforyou);
export default sugesforyou;
