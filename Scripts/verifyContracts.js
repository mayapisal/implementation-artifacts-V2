const hre = require("hardhat");
const addresses = require("../deployed-addresses.json");

async function main() {
    console.log("Verifying deployed contracts...\n");

    for (const [name, address] of Object.entries(addresses)) {
        const code =
            await hre.ethers.provider.getCode(address);

        if (code === "0x") {
            console.log(
                `${name}: NOT DEPLOYED`
            );
        } else {
            console.log(
                `${name}: DEPLOYED`
            );
            console.log(
                `Address: ${address}\n`
            );
        }
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
