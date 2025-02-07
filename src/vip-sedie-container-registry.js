import awilix from "awilix";
import { Table } from "sc-game-base";
import { SmartBotContainerRegistry } from "sc-smart-bot";

import PlaceBetConsumer from "./consumers/vip-sedie-place-bet-consumer";
import VipSeDieSettleGameRoundConsumer from "./consumers/vip-sedie-settle-game-round-consumer";
import { VipSeDieBot, VipSeDieGameCron, VipSeDieProcessBetQueue } from "./crons";
import {
    VipSeDieBets,
    VipSeDieRounds,
    VipSeDieSmartBotBetActions,
    VipSeDieSmartBotBetLogs,
    VipSeDieSmartBotPatterns,
    VipSeDieTmpBets,
    VipSeDieResults,
} from "./models";

import { ViewConsumer, BaseViewRouter, GameStatusPublisher, RoundResultPublisher } from "sc-game-base-view-module";

const { asClass, asValue } = awilix;

export default class VipSeDieContainerRegistry extends Table.TableContainerRegistry {
    registerModels() {
        super.registerModels();

        this.container.register({
            roundsRepository: asValue(VipSeDieRounds),
            betsRepository: asValue(VipSeDieBets),
            tempBetsRepository: asValue(VipSeDieTmpBets),
            betPatternRepository: asValue(VipSeDieSmartBotPatterns),
            betActionRepository: asValue(VipSeDieSmartBotBetActions),
            smartBotBetLogsRepository: asValue(VipSeDieSmartBotBetLogs),
            resultsRepository: asValue(VipSeDieResults),
        });

        this.container.register(new SmartBotContainerRegistry().register());
    }

    registerConsumers() {
        super.registerConsumers();

        this.container.register({
            placeBetConsumer: asClass(PlaceBetConsumer).singleton(),
            settleGameRoundConsumer: asClass(VipSeDieSettleGameRoundConsumer).singleton().proxy(),
            viewConsumer: asClass(ViewConsumer).singleton(),
        });
    }

    registerCrons() {
        super.registerCrons();

        this.container.register({
            bot: asClass(VipSeDieBot).singleton(),
            gameCron: asClass(VipSeDieGameCron).singleton().proxy(),
            processBetQueue: asClass(VipSeDieProcessBetQueue).singleton().proxy(),
        });
    }
    registerRouters() {
        super.registerRouters();

        this.container.register({
            baseViewRouter: asClass(BaseViewRouter).proxy(),
        });
    }

    registerPublishers() {
        super.registerPublishers();

        this.container.register({
            gameStatusPublisher: asClass(GameStatusPublisher).singleton(),
            roundResultPublisher: asClass(RoundResultPublisher).singleton(),
        });
    }
}
