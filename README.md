This repository contains the implementation artifacts supporting the study:

**Title:** *Blockchain Framework for Enhancing Supply Chain Resource Management in Humanitarian Crisis Response*

## Repository Contents

```
.
├── scripts/               # Deployment scripts
├── test/                  # Smart contract test cases
├── pseudocode/            # Framework algorithms and Pseudocode
├── docs/                  # Supporting documentation
├── Figures/               # Diagrams and screenshots
├── LICENSE
└── README.md
```

## Included Artifacts

- Deployment scripts
- Test cases
- Framework pseudocode
- Supporting implementation documentation

 ## Requirements

- Node.js (v18 or later)
- Hardhat
- npm

## Installation

```bash
git clone https://github.com/mayapisal/implementation-artifacts-V2.git
cd implementation-artifacts-V2
npm install
```

## Compile Contracts

```bash
npx hardhat compile
```

## Execute Tests

```bash
npx hardhat test
```

## Deploy Contracts

Example:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

Configure the network settings and private key in your Hardhat configuration before deployment.

## Deploy Using Remix IDE

1. Create `ResourceAllocation.sol` in [Remix IDE](https://remix.ethereum.org/).
2. Open **Solidity Compiler**, select the required compiler version (e.g., `0.8.26`), and compile the contract.
3. Open **Deploy & Run Transactions**.
4. Select **Injected Provider** for network deployment.
5. Select the contract, enter the required constructor parameters, and click **Deploy**.
6. Verify the deployed contract under **Deployed Contracts**.

## Repository Status

This repository contains the baseline implementation artifacts used in the study. An enhanced version of the framework is currently under development and will be made publicly available upon completion.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
