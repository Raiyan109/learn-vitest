import { expect, it, describe } from "vitest";
import { validateEmail } from "./validation";


describe('validateEmail()', () => {
    it('should validate a correct email', () => {
        const email = 'example@gmail.com';
        const result = () => validateEmail(email);
        expect(result).not.toThrow();
    })

    it('should throw an error if an invalid email is passed', () => {
        const email = 'example@gmail';
        const result = () => validateEmail(email);
        expect(result).toThrow();
    })

    it('should throw an error if an empty string is passed', () => {
        const email = '';
        const result = () => validateEmail(email);
        expect(result).toThrow()
    })

    it('should throw an error for a null email address', () => {
        expect(() => validateEmail(null)).toThrow('Invalid email');
    })

    it('should throw an error for an undefined email address', () => {
        expect(() => validateEmail(undefined)).toThrow('Invalid email');
    })
})
