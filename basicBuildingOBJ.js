var cityBuildings = (function () {



    var cityBuildings = [{
            area: 'goverment',
            buildings: [{
                name: 'cityhall',
                showedName: 'City Hall',
                type: 'general',
                currentLevel: 0,
                basicCosts: {
                    lumber: 1000,
                    food: 1000,
                    iron: 1000,
                    stone: 2000
                },
                nextLevel: {
                    lumber: 4.5,
                    food: 2,
                    iron: 4.5,
                    stone: 4
                }
            }]
        },
        {
            area: 'fields',
            buildings: [{
                    name: 'farm',
                    showedName: 'Farm',
                    type: 'resource',
                    currentLevel: 0,
                    basicCosts: {
                        lumber: 100,
                        food: 0,
                        iron: 100,
                        stone: 20
                    },
                    nextLevel: {
                        lumber: 2.5,
                        food: 0,
                        iron: 1.5,
                        stone: 2
                    }
                },
                {
                    name: 'ironMine',
                    showedName: 'Iron Mine',
                    type: 'resource',
                    currentLevel: 0,
                    basicCosts: {
                        lumber: 400,
                        food: 100,
                        iron: 0,
                        stone: 200
                    },
                    nextLevel: {
                        lumber: 3.5,
                        food: 2,
                        iron: 1,
                        stone: 2
                    }
                },
                {
                    name: 'stoneMine',
                    showedName: 'Stone Mine',
                    type: 'resource',
                    currentLevel: 0,
                    basicCosts: {
                        lumber: 1000,
                        food: 300,
                        iron: 1000,
                        stone: 0
                    },
                    nextLevel: {
                        lumber: 2.5,
                        food: 2,
                        iron: 3.5,
                        stone: 1
                    }
                },
                {
                    name: 'lumberMill',
                    showedName: 'Lumber Mill',
                    type: 'resource',
                    currentLevel: 0,
                    basicCosts: {
                        lumber: 0,
                        food: 200,
                        iron: 400,
                        stone: 100
                    },
                    nextLevel: {
                        lumber: 1,
                        food: 2,
                        iron: 2.5,
                        stone: 2
                    }
                },
            ]
        },
        {
            area: 'wariors zone',
            buildings: [{
                    name: 'barracks',
                    showedName: 'Barracks',
                    type: 'war',
                    currentLevel: 0,
                    basicCosts: {
                        lumber: 400,
                        food: 600,
                        iron: 600,
                        stone: 250
                    },
                    nextLevel: {
                        lumber: 2.5,
                        food: 0,
                        iron: 1.5,
                        stone: 2
                    }
                },
                {
                    name: 'hospital',
                    showedName: 'Hospital',
                    type: 'war',
                    currentLevel: 0,
                    basicCosts: {
                        lumber: 300,
                        food: 600,
                        iron: 200,
                        stone: 200
                    },
                    nextLevel: {
                        lumber: 2.5,
                        food: 0,
                        iron: 1.5,
                        stone: 2
                    }
                },
                {
                    name: 'blacksmith',
                    showedName: 'Blacksmith',
                    type: 'war',
                    currentLevel: 0,
                    basicCosts: {
                        lumber: 300,
                        food: 100,
                        iron: 1000,
                        stone: 400
                    },
                    nextLevel: {
                        lumber: 2.5,
                        food: 0,
                        iron: 1.5,
                        stone: 2
                    }
                }

            ]
        }
    ];


    return cityBuildings;
})();

