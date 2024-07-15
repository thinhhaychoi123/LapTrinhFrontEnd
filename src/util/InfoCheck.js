export const isPhoneValid = (phone) => {
    return (phone.length == 10 || phone.length == 11) && phone.startsWith("0");
}

export const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};