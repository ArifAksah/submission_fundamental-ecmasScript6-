class DrinkItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set drink(drink) {
        this._drink = drink;
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
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .thumbnail {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .drink-info {
                   padding: 24px;
               }
              
               .drink-info > h2 {
                   font-weight: lighter;
               }
              
               .drink-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }
               .drink-info >.important-info{
                   display:flex;
                   margin:5px;
                   
               }
               .drink-info >.important-info >.important-info-item{
                   flex-basis:50%
               }
               .drink-info >.important-info >.important-info-item >.category{
                   padding:5px;
                   background-color:brown;
                   border-radius:5px;
                   color:white;                
               }
               .drink-info >.important-info >.important-info-item >.alcholic{
                padding:5px;
                background-color:darkgreen;
                border-radius:5px;
                color:white;                
            }
            .drink-info >.important-info >.important-info-item >.Alcoholic{
                padding:5px;
                background-color:red;
                border-radius:5px;
                color:white;                 
            }
            .drink-info>ul>li{
                display:inline;
                background-color:black;
                color:white;
                padding:5px;
                border-radius:5px;
                margin-top:10px;
            }
            @media screen and (max-width: 550px){
                .drink-info >.important-info{
                    display:flex;
                    flex-direction:column;
                    margin:10px; 
                }
                .drink-info >.important-info >.important-info-item{
                    flex-basis:50%;
                    margin:10px;
                }
            }
           </style>
           <img class="thumbnail" src="${this._drink.strDrinkThumb}" alt="thumbnail">
           <div class="drink-info">
               <h2>${this._drink.strDrink}</h2>
               <div class="important-info">
                    <div class="important-info-item ">Category :<span class="category ">${this._drink.strCategory}</span> </div>
                    <div class="important-info-item ">Alcoholic:<span class="alcholic ${this._drink.strAlcoholic}">${this._drink.strAlcoholic}</span></div>
               </div>
               <p>${this._drink.strInstructions}</p>
                <br>
               <ul>
               Ingredient:
                    <li>${this._drink.strIngredient1}</li>
                    <li>${this._drink.strIngredient2}</li>
                    <li>${this._drink.strIngredient3}</li>
                    <li>${this._drink.strIngredient4}</li>
                    <li>${this._drink.strIngredient5}</li>
                    <li>${this._drink.strIngredient6}</li>
                    <li>${this._drink.strIngredient7}</li>
               </ul>
           </div>`;
    }
}

customElements.define("drink-item", DrinkItem);