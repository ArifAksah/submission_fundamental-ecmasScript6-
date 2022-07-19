class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               width: 100%;
               background-color: brown;
               color: white;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h2 {
               padding: 16px;
           }
           h4,p{
               text-align:center;
               padding:10px;
           }
       </style>
       <h2>The CocktailDB</h2>
       <h4>Welcome To The CockTail DB</h4>
       <p>
       An open, crowd-sourced database of drinks and cocktails from around the world.
       We also offer a free JSON API for anyone wanting to use it.
       </p>
       
       `;
    }
}

customElements.define("app-bar", AppBar);