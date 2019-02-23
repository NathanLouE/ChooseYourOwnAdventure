// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "",
    background_image: "",
    levels: {

        start: {
            message: "You wake up on a fine morning at home on summer break. You feel refreshed.",
            choices: [
                {
                    text: "Get Up",
                    nextLevel: "room",
                },

                {
                    text: "Reach for your nearby Nintendo Switch and play a game",
                    nextLevel: "switch",
                },
            ]
        },

        room: {
            background_image: "",
            music: "",
            message: "You look around for something to do",
            choices: [
                {
                    text: "Go on computer",
                    nextLevel: "comp",
                },
                {
                    text: "Take your Switch and play something",
                    nextLevel: "switch"
                }
            ]
        },
        
        comp: {
            background_image: "",
            music: "",
            message:"You head onto your computer.",
            choices: [
                {
                    text: "Head online",
                    nextLevel: "online"
                },
                {
                    text: "Play Minecraft",
                    nextLevel: "mc"
                },
            ]
        },
        
        online: {
            background_image: "",
            music: "",
            message: "You talk with your friends online and watch some videos for the entire day. As it gets late, you head to bed. This was a pretty average but fun day.",
            choices: [
                {
                    text: "Normal Day Ending",
                    nextLevel: "start"
                }
                ]
        },
        
        switch: {
            background_image: "",
            music: "",
            message: "You sit up and see what you have to play",
            choices: [
                {
                    text: "Breath of the Wild",
                    nextLevel: "botw",
                },
                {
                    text: "Let's Go Eevee",
                    nextLevel: "pokemon"
                }
            ]
        },
        botw: 
            {
            background_image: "",
            music: "",
            message: "You select your save file, and...suddenly get sucked into your save file! You're now in place of Link, and luckily have lots of gear, stamina, and hearts from the save file. However, you appeared right in front of an enemy hideout!",
            choices:[{
                text: "Fight them all off",
                nextLevel: "fight"
            },
            {
                text: "Run!",
                nextLevel: "run"
            }
            ]
        },
    }
};
