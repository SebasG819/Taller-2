import "./components/export.js";

import dbsdata from "./dbs.js"
import psbdata from "./psb.js";
import PData from "./pdata.js";
import sgfydata from "./sgfydata.js";
import unphdata from "./unphdata.js";




import bestsale, { attribute } from "./components/bestS/index.js";
import profileside, { Attribut } from "./components/Side-profile/index.js";
import gpost, { Attrib } from "./components/postc/gpost.js";
import sugesforyou, { Attri } from "./components/sgfy/index.js";
import underph, {attr} from "./components/undercell/index.js";





class AppContainer extends HTMLElement {

    
    dbs:bestsale[]=[];
    psb:profileside[]=[];
    mypost :gpost[]=[];
    sgfy:sugesforyou [] = [];
    unph:underph[]=[];

   

    constructor() {
        super();
        this.attachShadow({ mode: "open" });   

            dbsdata.forEach((person) => {
                const cards = this.ownerDocument.createElement(
                    "best-sale"
                    ) as bestsale;
                    cards.setAttribute(attribute.titulo, person.title);
                    cards.setAttribute(attribute.image, person.image);
                    this.dbs.push(cards);
                 });     

                 psbdata.forEach((person) => {
                    const pside = this.ownerDocument.createElement(
                        "profile-side"
                        ) as profileside;
                        pside.setAttribute(Attribut.name, person.name);
                        pside.setAttribute(Attribut.image, person.image);
                        pside.setAttribute(Attribut.description, person.description);
                        this.psb.push(pside);
                     });     
                     PData.forEach((user) => {
                        const postg = this.ownerDocument.createElement(
                            "gpost-1"
                            ) as gpost;
                            postg.setAttribute(Attrib.username, user.username);
                            postg.setAttribute(Attrib.userimage, user.userimage);
                            postg.setAttribute(Attrib.ptext, user.ptext);
                            postg.setAttribute(Attrib.postimage, user.postimage);
                            postg.setAttribute(Attrib.ptitle, user.ptitle);
                            this.mypost.push(postg);
                         });  


                         sgfydata.forEach((person) => {
                            const pside2 = this.ownerDocument.createElement(
                                "suge-you"
                                ) as sugesforyou;
                                pside2.setAttribute(Attri.name, person.name);
                                pside2.setAttribute(Attri.image, person.image);
                                pside2.setAttribute(Attri.description, person.description);
                                this.sgfy.push(pside2);
                             });     
                             
                             unphdata.forEach((person) => {
                                const under = this.ownerDocument.createElement(
                                    "under-phone"
                                    ) as underph;
                                    under.setAttribute(attr.image, person.image);
                                    this.unph.push(under);
                                 });       
        }

        
        connectedCallback() {
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML += `<link rel="stylesheet" href="./index.css">`;

                

                const cards = this.ownerDocument.createElement("section")
                cards.className = `feat`
                const h1element = this.ownerDocument.createElement("h1")
                h1element.textContent = `GAMERS XP`
                cards.appendChild(h1element)
                this.dbs.forEach((featuredCards)   =>   {
                cards.appendChild(featuredCards)
                });
               

                const pside = this.ownerDocument.createElement("section")
                pside.className = `side`
                this.psb.forEach((Sidecards)   =>   {
                    pside.appendChild(Sidecards)
                    });


                    const under = this.ownerDocument.createElement("section" ) 
                    under.className = `under`
                    this.unph.forEach((undercello) => {
                        under.appendChild(undercello)
                    });
                        
                     
                    const h3element = this.ownerDocument.createElement("h3")
                    h3element.textContent = `Sugestions for you`
                    pside.appendChild(h3element)    
                    const h3elemen = this.ownerDocument.createElement("h3")
                    h3elemen.className = `See`
                    h3elemen.textContent = `See all`
                    pside.appendChild(h3elemen)    

                    this.sgfy.forEach((Sidecards)  => {
                        pside.appendChild(Sidecards)
                    });
                const GPost = this.ownerDocument.createElement("section")
                GPost.className = 'gpost'
                    const main = this.ownerDocument.createElement("section")
                main.className = `main`

                main.appendChild(cards)
                main.appendChild(GPost)
                main.appendChild(pside)
                


                this.shadowRoot?.appendChild(main)
                

                this.mypost.forEach((user) => {
                    GPost.appendChild(user);
                });
                ;

                
            }
        }
    }
    
customElements.define("app-container", AppContainer);