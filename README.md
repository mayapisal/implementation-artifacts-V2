This repository contains the implementation artifacts supporting the study:

**Title:** *Blockchain Framework for Enhancing Supply Chain Resource Management in Humanitarian Crisis Response*

## Repository Contents

```
.
├── contracts/             # Solidity smart contracts
├── scripts/               # Deployment scripts
├── test/                  # Smart contract test cases
├── pseudocode/            # Framework pseudocode and algorithms
├── docs/                  # Supporting documentation
├── figures/               # Architecture diagrams (optional)
├── LICENSE
└── README.md
```

## Included Artifacts

- Smart contract source code
- Deployment scripts
- Test scripts
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

## Ethereum Sepolia Deployment

| Contract | Address |
|----------|----------|
| SupplierRegistry | `0x...` |
| ResourceManagement | `0x...` |
| DemandManagement | `0x...` |
| MappingAllocation | `0x...` |
| ComplianceManagement | `0x...` |



## Reproducibility

The repository provides the implementation artifacts necessary to reproduce the proposed framework, including smart contracts, deployment scripts, testing scripts, and framework pseudocode.

## Repository Status

This repository contains the baseline implementation artifacts used in the study. An enhanced version of the framework is currently under development and will be made publicly available upon completion.

## Citation

If you use this repository, please cite:

```
Author(s). Paper Title.
Journal/Conference, Year.
```
