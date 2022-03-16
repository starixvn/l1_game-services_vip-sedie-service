import { Core, Table } from "sc-game-base";

import appConfigs from "./app-configs";
import constants from "./constants";
import gameSettings from "./game-settings";
import { generateResult, getSettlementResult, generateRawResultForMd5 } from "./helpers/result-helper";
import VipSeDieContainerRegistry from "./vip-sedie-container-registry";

const run = async () => {
    const definition = new Table.TableGameDefinition(gameSettings, generateResult, getSettlementResult, generateRawResultForMd5);
    const gameData = new Table.TableGameData(gameSettings.durations.wholeRound, constants.resetTotalBets);
    const container = new VipSeDieContainerRegistry().register(appConfigs, definition, gameData);
    const app = new Core.BaseGameApp("VIPSeDie", appConfigs);
    await app.run();
    await app.startGame(container);
};

run();
