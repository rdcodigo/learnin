class Item {
    
    constructor(text){
        this.id = Math.floor(Date.now() * Math.random()).toString(36)
        this.text = text
        this.done = false

    }
}

export default Item