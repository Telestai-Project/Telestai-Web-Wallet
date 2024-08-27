import { reactive } from 'vue';

// In most BTC-derived coins, the below parameters can be found in the 'src/chainparams.cpp' Mainnet configuration.
// These below params share the same names as the CPP params, so finding and editing these is easy-peasy!
// <[network_byte] [32_byte_payload] [0x01] [4_byte_checksum]>
export const PRIVKEY_BYTE_LENGTH = 38;

export const COIN_DECIMALS = 8;
export const COIN = 10 ** 8;

/** The maximum gap (absence of transactions within a range of derived addresses) before an account search ends */
export const MAX_ACCOUNT_GAP = 20;

/* Internal tweaking parameters */
// A new encryption password must be 'at least' this long.
export const MIN_PASS_LENGTH = 6;

/** BIP21 coin prefix */
export const BIP21_PREFIX = 'tls';

/* chainparams */
export const cChainParams = reactive({
    current: null,
    main: {
        name: 'mainnet',
        collateralInSats: 10000 * COIN,
        isTestnet: false,
        TICKER: 'TLS',
        PUBKEY_PREFIX: ['A'],
        STAKING_PREFIX: 'A',
        PUBKEY_ADDRESS: 23,
        STAKING_ADDRESS: 23,
        SECRET_KEY: 128,
        BIP44_TYPE: 2686,
        BIP44_TYPE_LEDGER: 77,
        PROTOCOL_VERSION: 70926,
        MASTERNODE_PORT: 8865,
        // A list of Labs-trusted explorers
        Explorers: [
            // Display name      Blockbook-compatible API base
            { name: 'TLS BlockBook', url: 'https://blockbook.aipowergrid.io' },
        ],
        Nodes: [
	    { name: 'TLS US', url: 'https://us-seed1.aipowergrid.io' },
	    { name: 'TLS Japan', url: 'https://jp-seed2.aipowergrid.io' },
	    { name: 'TLS Australia', url: 'https://au-seed3.aipowergrid.io' },
	    { name: 'TLS Europe', url: 'https://eu-seed4.aipowergrid.io' },
	    { name: 'TLS India', url: 'https://in-seed4.aipowergrid.io' },
	],
        Consensus: {
            // Network upgrades
            UPGRADE_V6_0: undefined,
        },
        coinbaseMaturity: 100,
        budgetCycleBlocks: 43200,
        proposalFee: 50 * COIN,
        proposalFeeConfirmRequirement: 6,
        maxPaymentCycles: 6,
        maxPayment: 10 * 43200 * COIN, // 43200 blocks of 10 TLS
        defaultColdStakingAddress: 'AdgQDpS8jDRJDX8yK8m9KnTMarsE84zdsy', // Labs Cold Pool
    },
    testnet: {
        name: 'testnet',
        collateralInSats: 10000 * COIN,
        isTestnet: true,
        TICKER: 'tTLS',
        PUBKEY_PREFIX: ['a', 'a'],
        STAKING_PREFIX: 'a',
        PUBKEY_ADDRESS: 23,
        STAKING_ADDRESS: 23,
        SECRET_KEY: 239,
        BIP44_TYPE: 1,
        BIP44_TYPE_LEDGER: 1,
        PROTOCOL_VERSION: 70926,
        MASTERNODE_PORT: 18865,
        // A list of Labs-trusted explorers
        Explorers: [
            // Display name      Blockbook-compatible API base
            { name: 'TLS Blockbook', url: 'https://blockbook.aipowergrid.io' },
        ],
        Nodes: [
	    { name: 'TLS TestNode1', url: 'seed1-testnet.aipowergrid.io' },
	    { name: 'TLS TestNode2', url: 'seed2-testnet.aipowergrid.io' },
	],
        Consensus: {
            // Network upgrades
            UPGRADE_V6_0: undefined,
        },
        coinbaseMaturity: 15,
        budgetCycleBlocks: 144,
        proposalFee: 50 * COIN,
        proposalFeeConfirmRequirement: 3,
        maxPaymentCycles: 20,
        maxPayment: 10 * 144 * COIN, // 144 blocks of 10 tTLS
        defaultColdStakingAddress: 'amNziUEPyhnUkiVdfsiNX93H6rSJnios44', // Sparrow's Testnet Cold Pool
    },
});
// Set default chain
cChainParams.current = cChainParams.main;
