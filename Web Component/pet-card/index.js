const template = document.createElement('template');

template.innerHTML = `
    <div class="pet-card">
        <div class="avatar">
            <img />
        </div>
        <div class="details">
            <h2></h2>
            <div class="info">
                <p>Breed: <slot name="breed" /></p>
                <p>Age: <slot name="age" /></p>
            </div>
            <div class="actions">
                <button id="greet">Say Hi!</button>
                <button id="toggle">View Details</button>   
            </div>
        </div>
    </div>
    `;

class PetCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export default PetCard;