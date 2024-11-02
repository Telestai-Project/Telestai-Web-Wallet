import { getEventEmitter } from '../event_bus.js';
import { hasEncryptedWallet, wallet } from '../wallet.js';
import { ref } from 'vue';
import { strCurrency } from '../settings.js';
import { mempool } from '../global.js';
import { cMarket } from '../settings.js';

/**
 * This is the middle ground between vue and the wallet class
 * It makes sure that everything is up to date and provides
 * a reactive interface to it
 */
export function useWallet() {
    // Eventually we want to create a new wallet
    // For now we'll just import the existing one
    // const wallet = new Wallet();

    const isImported = ref(wallet.isLoaded());
    const isViewOnly = ref(wallet.isViewOnly());
    const getKeyToBackup = async () => await wallet.getKeyToBackup();
    const isEncrypted = ref(true);

    const setMasterKey = async (mk) => {
        wallet.setMasterKey(mk);
        
        const isLoaded = wallet.isLoaded();
        const isHardware = wallet.isHardwareWallet();
        const isHDWallet = wallet.isHD();
        const isViewOnlyMode = wallet.isViewOnly();
        const encrypted = await hasEncryptedWallet();

        isImported.value = isLoaded;
        isHardwareWallet.value = isHardware;
        isHD.value = isHDWallet;
        isViewOnly.value = isViewOnlyMode;
        isEncrypted.value = encrypted;
    };
    const getAddress = () => wallet.getAddress();
    const getCurrentAddress = () => wallet.getCurrentAddress();
    const getCurrentDerivationPath = () => wallet.getCurrentDerivationPath();
    const getMasterKey = () => wallet.getMasterKey();
    const isHardwareWallet = ref(wallet.isHardwareWallet());
    const isHD = ref(wallet.isHD());
    const checkDecryptPassword = async (passwd) =>
        await wallet.checkDecryptPassword(passwd);

    hasEncryptedWallet().then((r) => {
        isEncrypted.value = r;
    });

    const encrypt = async (passwd) => {
        await wallet.encrypt(passwd);
        isEncrypted.value = await hasEncryptedWallet();
    };
    const balance = ref(0);
    const immatureBalance = ref(0);
    const currency = ref('USD');
    const price = ref(0.0);

    getEventEmitter().on('balance-update', async () => {
        balance.value = mempool.balance;
        immatureBalance.value = mempool.immatureBalance;
        currency.value = strCurrency.toUpperCase();
        price.value = await cMarket.getPrice(strCurrency);
    });

    return {
        isImported,
        isViewOnly,
        isEncrypted,
        getKeyToBackup,
        setMasterKey,
        isHardwareWallet,
        checkDecryptPassword,
        encrypt,
        getAddress,
        getCurrentAddress,
        getCurrentDerivationPath,
        getMasterKey,
        wipePrivateData: () => {
            wallet.wipePrivateData();
            isViewOnly.value = wallet.isViewOnly();
        },
        isHD,
        balance,
        immatureBalance,
        currency,
        price,
    };
}
