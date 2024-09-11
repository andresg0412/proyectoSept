import CryptoJS from 'crypto-js';

const secretKey = 'DkRYBtGCPWQrv/fK8MEmqzuwHF3JhpaUT5d2V6j9';

export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

export const decryptData = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
