
        cityResourceBar = {
            barID: 'city-resources',
            bar: null,
            classPrefix: 'resource-bar-',
            barResource: {},
            createSingleResource: function (key, value) {
                var single = utils.crtElm({
                    type: 'span',
                    class: this.classPrefix + key,
                    text: key + ":" + value
                })

                return single;
            },
            createBar: function () {

                var bar = document.getElementById(this.barID);
              //  console.log( player.resources);
                for (key in player.resources) {
                    if (player.resources.hasOwnProperty(key)) {

                        this.barResource[key] = this.createSingleResource(key, player.resources[key]);

                        bar.appendChild(this.barResource[key]);
                    }
                }


            },
            updateBar: function () {

                for (key in player.resources) {
                    if (player.resources.hasOwnProperty(key)) {

                        this.barResource[key].innerText = key + ":" + player.resources[key];
                    }
                }

            },



        }
