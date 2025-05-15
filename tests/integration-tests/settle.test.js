import { GameClientDriver, normalUser, eventTypes } from "sc-game-service-integration-utils";
import { socketOptions } from "./stubs/test-data";
import { initUserSession } from "./init-user-session";
import gameSettings from "../../src/game-settings";

export const settleTest = () => {
    describe("when settle", () => {
        let driver;
        beforeAll(async () => {
            driver = new GameClientDriver(socketOptions, initUserSession(normalUser));
            await driver.handleSignedInEvent();
        });

        afterAll(() => {
            driver.close();
        });

        const getTimeOutToBet = (remainingTime, durations) => {
            let timeout = 0;
            if (remainingTime <= durations.lockingBet) {
                timeout = durations.wholeRound - durations.placingBets + remainingTime + 4;
            } else if (remainingTime > durations.placingBets) {
                timeout = durations.wholeRound - durations.placingBets + 4;
            }

            return timeout;
        };

        // it("should return settled status data", async () => {
        //     // Arrange
        //     const amount = 100;
        //     console.log("Sending in-game event...");
        //     driver.sendInGameEvent();
        //     const { remainingTime } = await driver.handleGameEvent((inGameData) => inGameData.remainingTime);
        //     console.log("Received remaining time:", remainingTime);

        //     setTimeout(() => {
        //         console.log("Sending bet event...");
        //         driver.sendBetEvent("even", amount);
        //     }, getTimeOutToBet(remainingTime, gameSettings.durations) * 1000);

        //     // Act
        //     console.log("Handling game event for status...");
        //     const result = await driver.handleGameEvent((data) => data.status);
        //     console.log("Received result status:", result.status);

        //     // Assert
        //     expect(result.status.bet).toBeGreaterThan(0);
        // });

        it("should return settled finish data and hashResult with rawValue", async () => {
            // Arrange
            console.log("Sending in-game event...");
            driver.sendInGameEvent();
            await driver.handleGameEvent((inGameData) => inGameData.remainingTime);
            console.log("Received remaining time.");

            // Act
            console.log("Handling game event for resultHash...");
            const result = await driver.handleGameEvent((data) => data.resultHash);
            console.log("Received result hash:", result.resultHash);

            // Assert
            expect(result.resultHash.rawValue).not.toBeNull();
        });
    });
};
