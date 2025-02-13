import appConfigs from "./app-configs";
import gameSettings from "./game-settings";
import { startTrace } from "sc-instrument";
import { registerViewModule } from "sc-game-base-view-module";
import GameData from "./game-data";

startTrace(appConfigs.otel?.enabled, appConfigs.otel?.endpoint, appConfigs.otel?.system, appConfigs.sentry.env, gameSettings.name);

import { Core, Table } from "sc-game-base";

import constants from "./constants";
import { generateResult, getSettlementResult, generateRawResultForHash } from "./helpers/result-helper";
import VipSeDieContainerRegistry from "./vip-sedie-container-registry";

const run = async () => {
    const definition = new Table.TableGameDefinition(gameSettings, generateResult, getSettlementResult, generateRawResultForHash);
    const gameData = new GameData(gameSettings.durations.wholeRound, constants.resetTotalBets);
    gameData.viewPlayers = {};
    const container = new VipSeDieContainerRegistry().register(appConfigs, definition, gameData);
    const app = new Core.BaseGameApp("VIPSeDie", appConfigs);
    await app.run();
    await app.startGame(container);
    registerViewModule(app, container, definition);
};

run();
