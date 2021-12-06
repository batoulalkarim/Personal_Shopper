const outfit = {
    _pieces: {
        tops: [],
        bottoms: [],
        accessories: [],
    },
    get tops() {
        return this._pieces.tops;
    },
    get bottoms() {
        return this._pieces.bottoms;
    },
    get accessories() {
        return this._pieces.accessories;
    },
    set tops(tops) {
        this._pieces.tops = tops;
    },
    set bottoms(bottoms) {
        this._pieces.bottoms = bottoms;
    },
    set accessories(accessories) {
        this._pieces.accessories = accessories;
    },
    get pieces() {
        return {
            tops: this.tops,
            bottoms: this.bottoms,
            accessories: this.accessories,
        };
    },
    addItemToCart (pieceType, pieceName, piecePrice) {
        const piece = {
            name: pieceName,
            price: piecePrice
        };
        return this._pieces[pieceType].push(piece);
},

}