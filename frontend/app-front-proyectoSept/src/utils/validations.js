export const validateCardInfo = (cardInfo) => {
    const { cardNumber, cardName, expiryDate, cvv } = cardInfo;
    const errors = {};

    // Validaciones
    const cardNumberRegex = /^(\d{4}\s?){3}\d{4}$/;
    if (!cardNumber || !cardNumberRegex.test(cardNumber)) {
        errors.cardNumber = 'Card number must be 16 digits.';
    }

    if (!cardName) {
        errors.cardName = 'Name on card is required.';
    }

    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDate || !expiryDateRegex.test(expiryDate) || !isValidExpiryDate(expiryDate)) {
        errors.expiryDate = 'Expiry date is invalid or has expired.';
    }

    const cvvRegex = /^[0-9]{3,4}$/;
    if (!cvv || !cvvRegex.test(cvv)) {
        errors.cvv = 'CVV must be 3 or 4 digits.';
    }

    return errors;
};

const isValidExpiryDate = (date) => {
    const [month, year] = date.split('/');
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear() % 100;

    return (
        parseInt(year) > currentYear || (parseInt(year) === currentYear && parseInt(month) >= currentMonth)
    );
};

export const formatCardNumber = (value) => {
    // Remover todos los espacios y caracteres no numéricos
    const onlyNumbers = value.replace(/\D/g, '');

    // Insertar un espacio cada 4 dígitos
    const formattedValue = onlyNumbers.replace(/(.{4})/g, '$1 ').trim();

    return formattedValue;
};

export const getCardType = (number) => {
    const firstDigit = number[0];
    if (firstDigit === '4') return 'Visa';
    if (firstDigit === '5') return 'Mastercard';
    return 'Unknown';
};

