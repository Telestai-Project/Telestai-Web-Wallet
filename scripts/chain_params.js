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
        PUBKEY_PREFIX: ['T'],
        STAKING_PREFIX: 'T',
        PUBKEY_ADDRESS: 66,
        STAKING_ADDRESS: 66,
        SECRET_KEY: 128,
        BIP44_TYPE: 10117,
        BIP44_TYPE_LEDGER: 77,
        PROTOCOL_VERSION: 70926,
        MASTERNODE_PORT: 8767,
        // A list of Labs-trusted explorers
        Explorers: [
            // Display name      Blockbook-compatible API base
            { name: 'TLS BlockBook 1', url: 'https://blockbook.telestai.io' },
            { name: 'TLS BlockBook 2', url: 'https://blockbook2.telestai.io' },
        ],
        Nodes: [
	    { name: 'TLS 1', url: 'https://dnsseed.telestainodes.xyz' },
	    { name: 'TLS 2', url: 'https://telestai.seeds.multicoin.co' },
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
        defaultColdStakingAddress: 'TdgQDpS8jDRJDX8yK8m9KnTMarsE84zdsy', // Labs Cold Pool
    },
    testnet: {
        name: 'testnet',
        collateralInSats: 10000 * COIN,
        isTestnet: true,
        TICKER: 'tTLS',
        PUBKEY_PREFIX: ['t', 't'],
        STAKING_PREFIX: 't',
        PUBKEY_ADDRESS: 111,
        STAKING_ADDRESS: 111,
        SECRET_KEY: 239,
        BIP44_TYPE: 1,
        BIP44_TYPE_LEDGER: 1,
        PROTOCOL_VERSION: 70926,
        MASTERNODE_PORT: 18770,
        // A list of Labs-trusted explorers
        Explorers: [
            // Display name      Blockbook-compatible API base
            { name: 'TLS Blockbook 1', url: 'https://blockbook.telestai.io' },
            { name: 'TLS Blockbook 2', url: 'https://blockbook2.telestai.io' },
        ],
        Nodes: [
	    { name: 'TLS TestNode1', url: 'seed1-testnet.telestai.io' },
	    { name: 'TLS TestNode2', url: 'seed2-testnet.telestai.io' },
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
        defaultColdStakingAddress: 'tmNziUEPyhnUkiVdfsiNX93H6rSJnios44', // Sparrow's Testnet Cold Pool
    },
});
// Set default chain
cChainParams.current = cChainParams.main;
