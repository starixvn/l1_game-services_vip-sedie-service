import awilix from "awilix";
import { Table } from "sc-game-base";

import PlaceBetConsumer from "./consumers/vip-sedie-place-bet-consumer";
import { VipSeDieBot, VipSeDieGameCron } from "./crons";
import { VipSeDieBets, VipSeDieRounds, VipSeDieTmpBets } from "./models";

const { asClass, asValue } = awilix;

export default class VipSeDieContainerRegistry extends Table.TableContainerRegistry {
    registerModels() {
        super.registerModels();

        this.container.register({
            roundRepository: asValue(VipSeDieRounds),
            betRepository: asValue(VipSeDieBets),
            tempBetRepository: asValue(VipSeDieTmpBets),
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
            bot: asClass(VipSeDieBot).singleton(),
            gameCron: asClass(VipSeDieGameCron).singleton().proxy(),
        });
    }
}
