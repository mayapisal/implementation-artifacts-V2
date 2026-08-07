const hre = require("hardhat");
const fs = require("fs");

async function main() {
    const [owner] = await hre.ethers.getSigners();

    console.log("Deploying contracts...");
    console.log("Owner:", owner.address);

     const ResourceProvider =
        await hre.ethers.getContractFactory("ResourceProvider");

    const resourceProvider =
        await ResourceProvider.deploy();

    await resourceProvider.waitForDeployment();

    const resourceProviderAddress =
        await resourceProvider.getAddress();

    console.log(
        "ResourceProvider:",
        resourceProviderAddress
    );

        const DemandProvider =
        await hre.ethers.getContractFactory("DemandProvider");

    const demandProvider =
        await DemandProvider.deploy();

    await demandProvider.waitForDeployment();

    const demandProviderAddress =
        await demandProvider.getAddress();

    console.log(
        "DemandProvider:",
        demandProviderAddress
    );

        const Allocation =
        await hre.ethers.getContractFactory(
            "DemandSupplyAllocation"
        );

    const allocation =
        await Allocation.deploy(
            demandProviderAddress,
            resourceProviderAddress
        );

    await allocation.waitForDeployment();

    const allocationAddress =
        await allocation.getAddress();

    console.log(
        "DemandSupplyAllocation:",
        allocationAddress
    );

        const CrossPhase =
        await hre.ethers.getContractFactory(
            "CrossPhaseUtilities"
        );

    const crossPhase =
        await CrossPhase.deploy(
            demandProviderAddress,
            resourceProviderAddress
        );

    await crossPhase.waitForDeployment();

    const crossPhaseAddress =
        await crossPhase.getAddress();

    console.log(
        "CrossPhaseUtilities:",
        crossPhaseAddress
    );

        const addresses = {
        ResourceProvider: resourceProviderAddress,
        DemandProvider: demandProviderAddress,
        DemandSupplyAllocation: allocationAddress,
        CrossPhaseUtilities: crossPhaseAddress
    };

    fs.writeFileSync(
        "deployed-addresses.json",
        JSON.stringify(addresses, null, 2)
    );

    console.log("\nDeployment completed.");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
