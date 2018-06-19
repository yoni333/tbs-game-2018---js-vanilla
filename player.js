var player = {

    resources: {},

    init: function () {

        //TODO ajax server to get real current resources
        this.setResource({

            lumber: 5000,
            food: 5000,
            iron: 5000,
            stone: 5000,
           


        });
    },

    setResource: function (obj) {
        //TODO ajax server to set current resources
       // console.log('setResource',obj);
        for ( key in obj){
            if ( obj.hasOwnProperty(key)){
                this.resources[key] = obj[key];
            }
        }
       
    },

    minusResource: function (paramsArr) {


        //TODO ajax here to validate with the server
        var that = this;
        var tmpResources = {};

        paramsArr.forEach(function (element) {
            for (key in element) {
                if (element.hasOwnProperty(key)) {

                    tmpResources[key] = that.resources[key];
            //        console.log(element[key], key)
                    tmpResources[key] -= element[key];

                }
            }

        });

        console.log('after minus', tmpResources);
        return tmpResources;

        if (noMinus) {

            this.setResource(tmpResources);

        }



    },

    checkMinus: function (tmpResources) {
        //TODO ajax server to validate or make this validate only in server
        var noMinus = true;

        for (key in tmpResources) {
            if (tmpResources.hasOwnProperty(key)) {

                if (tmpResources[key] < 0) {
                    noMinus = false;
                }
            }
        }

        return noMinus;

    },

    tryUpgrade: function (paramsArr) {

        var tmpResources = this.minusResource(paramsArr);
        if (this.checkMinus(tmpResources)) {
            this.setResource(tmpResources)
            return true
        } else {
            return false
        }

    }


}