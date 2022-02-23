export default {
    id: 22,
    name: "VipSeDie",
    durations: {
        wholeRound: 39,
        placingBets: 30,
        lockingBet: 5,
        shakeThePlateDuration: 2,
    },
    choices: ["even", "odd", "red2", "red3", "red4", "white3", "white4"],
    choicesMapper: { even: 1, odd: 2, red2: 3, red3: 4, red4: 5, white3: 6, white4: 7 },
    defaultBetTracks: {},
    hedgeBetGroups: [["even", "odd"]],
};
