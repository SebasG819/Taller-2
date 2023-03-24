export var Attrib;
(function (Attrib) {
    Attrib["username"] = "username";
    Attrib["userimage"] = "userimage";
    Attrib["ptitle"] = "ptitle";
    Attrib["ptext"] = "ptext";
    Attrib["postimage"] = "postimage";
})(Attrib || (Attrib = {}));
class gpost extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            username: null,
            userimage: null,
            ptitle: null,
            ptext: null,
            postimage: null,
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
        if (this.shadowRoot)
            this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/postc/post.css">
        <div class="post">
        <section class="gpost-wrap">
          <div class="post-header">
            <div class="post-title">
            <section class="ptitle">
               <img class="uimage" src="${this.userimage}">
               <section class = "nameandsec">
                <h2>${this.username}</h2>
                </section>
                </section>
            </div>
          </div>
          <div>
                  <h3 href="#">${this.ptitle}</h3>
            </div>
          <div class="post-content">
            <p>${this.ptext}</p>
          </div>
          <div class="post-imag">
          <img class="gpost-image" src="${this.postimage}" alt="">
   </div>
          <button class="corazon" >
            <img class="corazon"src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="">
            <img class="corazon"src="https://icons.veryicon.com/png/o/hardware/jackdizhu_pc/comment-25.png" alt="">
            <img class="corazon"src="https://icons.veryicon.com/png/o/miscellaneous/evm-applet/send-message-2.png" alt="">

        </button>
       
          <div class="post-footer">
            <div class="post-comments">
              <a href="#">12 comentarios</a>
            </div>
          </div>
        </section>
        </div>
        `;
    }
}
customElements.define('gpost-1', gpost);
export default gpost;
