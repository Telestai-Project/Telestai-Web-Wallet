<script setup>
import { ref } from 'vue';
import bitjs from '../bitTrx.js';
import { useWallet } from '../composables/use_wallet.js';
import { generateOrEncodePrivkey } from '../encoding.js';

const message = ref('');
const signature = ref('');
const address = ref('');
const masterKey = ref('');
const wallet = useWallet();

const signMessage = async () => {
    const masterKey = await wallet.getMasterKey(); // Get the master key object

    // Get the current address and its corresponding derivation path
    const currentAddress = wallet.getCurrentAddress();
    const path = wallet.getCurrentDerivationPath();

    // Derive the specific private key using the updated derivation path
    const derivedPrivateKeyBytes = masterKey.getPrivateKeyBytes(path);

    // Optionally, encode the private key to WIF (not necessary for signing)
    const { strWIF } = generateOrEncodePrivkey(derivedPrivateKeyBytes);
    console.log(strWIF);

    const bitInstance = new bitjs(); // Create an instance of bitjs
    try {
        // Sign the message using the derived private key bytes
        signature.value = await bitInstance.signMessage(message.value, strWIF);
        address.value = currentAddress; // Update the address displayed
    } catch (error) {
        console.error('Error signing message:', error);
    }
};

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch(err => {
        console.error('Could not copy text: ', err);
    });
};
</script>

<template>
    <div class="modal fade" id="signMsgModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content exportKeysModalColor">
                <div class="modal-header">
                    <h5 class="modal-title">Sign Message</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <textarea v-model="message" placeholder="Enter your message here"></textarea>
                    <button class="btn btn-primary tls-button-big" @click="signMessage">Sign</button>
                    <div v-if="signature" class="copy-container">
                        <div class="title-with-icon">
                            <h6>Signature</h6>
                            <button @click="copyToClipboard(signature)" class="btn btn-link copy-icon">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <p class="signature-text">{{ signature }}</p>
                    </div>
                    <div v-if="address" class="copy-container">
                        <div class="title-with-icon">
                            <h6>Address Used</h6>
                            <button @click="copyToClipboard(address)" class="btn btn-link copy-icon">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <p>{{ address }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.copy-container {
    margin-top: 10px;
}

.title-with-icon {
    display: flex;
    align-items: center;
}

.copy-icon {
    color: white;
    margin-left: 10px;
    font-size: 0.8em; /* Adjust the size of the icon */
}

.signature-text {
    max-width: 100%;
    word-wrap: break-word;
    word-break: break-all;
    white-space: pre-wrap; /* Preserve whitespace and line breaks */
}

/* Custom styles for the Sign button */
.tls-button-big {
    border-color: #9c9876; /* Change this to your desired border color */
    outline: none; /* Remove the default focus outline */
}

.tls-button-big:focus {
    outline: none; /* Ensure no outline on focus */
    box-shadow: none; /* Remove any box-shadow on focus */
}
</style>
