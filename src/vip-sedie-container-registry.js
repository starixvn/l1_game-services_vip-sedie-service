import awilix from "awilix";
import { Table } from "sc-game-base";

import PlaceBetConsumer from "./consumers/place-bet-consumer";
import { SedieBot, SedieGameCron } from "./crons";
import { SedieBets, SedieTmpBets } from "./models/sedie-bets";
import SedieRounds from "./models/sedie-rounds";

const { asClass, asValue } = awilix;

export default class VipSeDieContainerRegistry extends Table.TableContainerRegistry {
    registerModels() {
        super.registerModels();

        this.container.register({
            roundsRepository: asValue(SedieRounds),
            betsRepository: asValue(SedieBets),
            tempBetsRepository: asValue(SedieTmpBets),
        });
    }

    registerConsumers() {
        super.registerConsumers();

        this.container.register({
            placeBetConsumer: asClass(PlaceBetConsumer).singleton(),
        });
    }

    registerCrons() {
        super.registerCrons();

        this.container.register({
            bot: asClass(SedieBot).singleton(),
            gameCron: asClass(SedieGameCron).singleton().proxy(),
        });
    }
}
