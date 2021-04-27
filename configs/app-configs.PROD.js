export default {
    hostingPort: 5000,
    apiSettings: {
        enabledApi: true,
        apiUrl: "http://l2_game_api_prod:5000",
        authUrl: "http://l2_auth_api_prod:5000",
        client: {
            id: "game-server",
            secret: "gameserver@20luminet&",
        },
        useAuthenticate: true,
        placeBetTimeout: 4500,
        requestTimeout: 10000, // 10s
        enabledApiLogs: true,
    },
    mainServerApiSettings: {
        url: "http://l2_game_server_prod:5000/api",
        auth: {
            url: "http://l2_auth_api_prod:5000",
            id: "game-services",
            secret: "gameservices@20luminet&",
        },
        requestTimeout: 10000,
        placeBetTimeout: 4500,
        useAuthenticate: true,
    },
    socketOptions: {
        pingInterval: 60 * 1000,
        pingTimeout: 60 * 1000,
        transports: ["websocket"],
        allowUpgrades: false,
    },
    enabledLogs: true,
    database: {
        url: "",
        options: {
            dbName: "minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auto_reconnect: true,
        },
    },
    sentry: {
        sentryUrl: "http://2b5b82bf699543ddb296364568bc30be@10.99.99.187:803/52",
        logIdentifier: "vipsedie",
        env: "PROD",
    },
    authenticateSettings: {
        audiences: ["api", "admin-api"],
    },
    adminSecretKey: "asWDEer4yGdgsdqR4uqmKQZgh",
    enableCorsWs: true,
    corsUrls: [
        "https://sabagame.net",
        "https://www.sabagame.net",
        "http://sabagame.net",
        "http://www.sabagame.net",
        "https://gamesaba.net",
        "https://www.gamesaba.net",
        "http://gamesaba.net",
        "http://www.gamesaba.net",
        "http://admg.sabagame.net",
        "https://admg.sabagame.net",
        "http://adm.sabagame.net",
        "https://adm.sabagame.net",
    ],
};
