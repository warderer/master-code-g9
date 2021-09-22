import axios from 'axios';

class Pokedex {
    constructor(pokemons) {
        this._pokemons = pokemons; //Mi lista de pokemons de la API
        this._pokedexContent = ""; //HTML a generar
    }

    //Método que me ayuda a colocar hasta 3 ceros en un id del pokémon
    addZerostoId(id){
        if(id < 10) {
            //agrego 2 ceros al ID
            return '00' + id;
        } else if (id >=10 && id <= 99) {
            //agregar 1 cero al ID
            return '0' + id;
        } else {
            return id; //dejo el ID como esta
        }
    }

    //Construya un Card de Bootstrap con la información de un pokémon
    //Esta parte es meramente visual
    cardTemplate(pokemon) {
        const pokeIconBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; //.png
        const pokePicBaseUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'; //.png
        console.log(pokemon);
        // Añadimos ceros al ID para llamar la imagen correcta más adelante y listar en el pokemon
        let idExt = this.addZerosToId(pokemon.id);
        let hp = typeof pokemon.stats[0].base_stat !== 'undefined' ? pokemon.stats[0].base_stat : 0;
        let atk = typeof pokemon.stats[1].base_stat !== 'undefined' ? pokemon.stats[1].base_stat : 0;
        let def = typeof pokemon.stats[2].base_stat !== 'undefined' ? pokemon.stats[2].base_stat : 0;
        let spAtk = typeof pokemon.stats[3].base_stat !== 'undefined' ? pokemon.stats[3].base_stat : 0;
        let spDef = typeof pokemon.stats[4].base_stat !== 'undefined' ? pokemon.stats[4].base_stat : 0;
        let spd = typeof pokemon.stats[5].base_stat !== 'undefined' ? pokemon.stats[5].base_stat : 0;
        // Generamos una etiqueta por cada tipo del pokemon
        let type = "";
        pokemon.types.forEach(types =>{
            type = `<span class='badge tag-${types.type.name} float-right p-2 mx-1'>${types.type.name}</span>` + type;
        });

        var html = `
        <div class='col-md-1-12'>
            <div class='card bg-light poke-card m-3'>
                <div class='card-header p-0'>
                    <div class='row m-0'>
                        <div class='col-8 my-auto'>
                            <span class='pokemon-name'>${pokemon.id}. ${pokemon.name}</span>
                        </div>
                        <div class='col-4 cropped'>
                            <img src='${pokeIconBaseUrl}${pokemon.id}.png' alt='${pokemon.name}'>
                        </div>
                    </div>
                </div>
                <div class='card-body'>
                    <div class='row'>
                        <div class='col-12'>
                        ${type}
                        </div>
                    </div>
                    <img class='pokepicture' src='${pokePicBaseUrl}${idExt}.png' alt='${pokemon.name}'>
                </div>
                <div class='card-footer text-muted p-0'>
                    <div class='row m-0'>
                        <div class='col-4 border-right text-center'>
                            <span class='hp-tag-title'>HP:</span>
                            <span class='hp-tag-value'>${hp}</span>
                        </div>
                        <div class='col-4 border-right text-center'>
                            <span class='atk-tag-title'>ATK:</span>
                            <span class='atk-tag-value'>${atk}</span>
                        </div>
                        <div class='col-4 border-right text-center'>
                            <span class='def-tag-title'>DEF:</span>
                            <span class='def-tag-value'>${def}</span>
                        </div>
                        <div class='col-4 border-right border-top text-center'>
                            <span class='spd-tag-title'>SPD:</span>
                            <span class='spd-tag-value'>${spd}</span>
                        </div>
                        <div class='col-4 border-right border-top text-center'>
                            <span class='spatk-tag-title'>SP ATK:</span>
                            <span class='spatk-tag-value'>${spAtk}</span>
                        </div>
                        <div class='col-4 border-right border-top text-center'>
                            <span class='spdef-tag-title'>SP DEF:</span>
                            <span class='spdef-tag-value'>${spDef}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    return html;
    }


}

export default Pokedex;