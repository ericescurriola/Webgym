/* 
    This Class is the model for an recipe item
*/
export class LibraryItem {
    
    id: number;                         //Id for the item
    image: string;                      //Image path or imbedded picture, not sure yet
    titel: string;                      //Name of the recipe
    description: string                 //Describes the recipe
    index: { conentPoint: string }[];   //Table of contents
    source: { link: string }[];         //sources of information
    

    constructor(id: number, image: string, titel: string, description: string, source: { link: string }[], index: { conentPoint: string }[]){
        this.id = id;
        this.image = image;
        this.titel = titel;
        this.description = description;
        this.index = index;
        this.source = source;
    }
}