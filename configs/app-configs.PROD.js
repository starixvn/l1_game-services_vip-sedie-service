export default {
    hostingPort: 8501,
    apiSettings: {
        enabledApi: true,
        apiUrl: "http://10.99.99.51:8310",
        authUrl: "http://10.99.99.51:8313",
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
        url: "http://10.99.99.51:8210/api",
        auth: {
            url: "http://10.99.99.51:8313",
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
        url:
            "mongodb://lmn_backend:%21%23x97%25uYZv%2A%5E%25%3E%7C%2Aqg%40E7FHi%3F9l%7B9r%3CK@10.3.189.53:37101,10.3.189.54:37102,10.3.189.54:37103/?replicaSet=L2_SabaMain",
        options: {
            dbName: "minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auto_reconnect: true,
        },
    },
    sentry: {
        sentryUrl: "http://26db550e29da4d038d1bb78ce1b79330@10.99.99.187:803/108",
        logIdentifier: "sedie",
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
        "http://admg.sabagame.net",
        "https://admg.sabagame.net",
        "http://adm.sabagame.net",
        "https://adm.sabagame.net",
    ],
};
