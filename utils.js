var utils = {

    crtElm: function (params) {

        var elm = null;
    //    console.log(params);
            if ( !params.hasOwnProperty('type')) {params.type='div'}

            elm = document.createElement(params.type);
            if (params.hasOwnProperty('class')) {
                elm.className = params.class;
            }
            if (params.hasOwnProperty('id')) {
                elm.id = params.id;
            }
            if (params.hasOwnProperty('text')) {
                elm.innerText = params.text;
            }

        

        return elm;
    }
};