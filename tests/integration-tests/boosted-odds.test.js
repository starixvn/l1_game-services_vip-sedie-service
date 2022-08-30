import { GameClientDriver, normalUser } from "sc-game-service-integration-utils";
import { socketOptions } from "./stubs/test-data";
import { initUserSession } from "./init-user-session";

export const boostedOddsTest = () => {
    describe("boosted odds", () => {
        it("should return boosted odds then original odds", (done) => {
            // Arrange
            const normalUserClientDriver = new GameClientDriver(socketOptions, initUserSession(normalUser));
            const boostedOdds = 1.98;
            const originalOdds = 1.97;

            // Act
            normalUserClientDriver.handleSignedInEvent(() => {
                normalUserClientDriver.sendInGameEvent();
            });

            let hasboostedOdds = false;

            // Assert
            normalUserClientDriver.handleInGameEvent((inGameData) => {
                if (inGameData.gameConfigs && inGameData.gameConfigs.odds.even === boostedOdds) {
                    expect(inGameData.gameConfigs.boostedChoices).toEqual(["even", "odd"]);

                    if (!hasboostedOdds) {
                        setTimeout(() => {
                            normalUserClientDriver.sendInGameEvent();
                        }, 45000);
                    }

                    hasboostedOdds = true;
                }

                if (hasboostedOdds && inGameData.gameConfigs && inGameData.gameConfigs.odds.even === originalOdds) {
                    expect(inGameData.gameConfigs.boostedChoices).toEqual([]);
                    normalUserClientDriver.close();
                    done();
                }
            });
        });
    });
};
