export function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        throw new Error('Invalid email');
    }
}