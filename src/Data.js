let _data = [
    {
        product_name: "San Pham 1",
        product_descript: "San Pham 1",
        img: "images/noimage.png",
        type: [ "bestseller", "sony"]      
    },
    {
        product_name: "San Pham 2",
        product_descript: "San Pham 2",
        img: "images/jble55bt.jpg",
        type: ["new", "bestseller", "sony", "bluetooth"]
    },
    {
        product_name: "San Pham 3",
        product_descript: "San Pham 3",
        img: "images/0.u2751.d20170604.t233708.534726.jpg",
        type: ["new", "bestseller", "sony"]      
    },
    {
        product_name: "San Pham 4",
        product_descript: "San Pham 4",
        img: "images/0.u2751.d20170604.t233708.534726.jpg",
        type: ["bestseller", "bluetooth"]      
    }
];

module.exports = {
    getProductList: (type) =>{ 
        if(!type) {
            return _data;
        }
        let result = [];
        for(var i in _data) {
            if(type) {
                if(_data[i].type && _data[i].type.indexOf(type) != -1) {
                    result.push(_data[i]);
                }
            }
        }

        return result;
    }
}