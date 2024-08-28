import crypto from 'crypto';
import { promisify } from 'util';
import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';

import { Fingerprint, FingerprintSchema, FingerprintWriter } from "./fingerprint";

const EMPTY_KEY = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
const CURVE_FIELD = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");

/**
 * Generate a pair of cryptographic keys.
 *
 * @return {Promise<crypto.KeyPairKeyObjectResult>} the keys
 */
export async function generateKey(): Promise<crypto.KeyPairKeyObjectResult> {
    return promisify(crypto.generateKeyPair)("ec", {namedCurve: "secp256k1"});
}

/**
 * Generate a private cryptographic key with a mnemonic.
 *
 * @return {Promise<[string, crypto.KeyObject]>} the mnemonic and the key
 */
export async function generateMnemonicKey(): Promise<[string, crypto.KeyObject]> {
    const mnemonic = bip39.generateMnemonic(wordlist, 256);
    const privateKey = await mnemonicToPrivateKey(mnemonic);
    return [mnemonic, privateKey];
}

/**
 * Restore a private key from the given mnemonic.
 *
 * @param {string} mnemonic - the mnemonic
 * @return {Promise<crypto.KeyObject>} the private key
 */
export async function mnemonicToPrivateKey(mnemonic: string): Promise<crypto.KeyObject> {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    let seedValue = BigInt(0);
    for (let i = 0; i < seed.length; i++) {
        seedValue = (seedValue << BigInt(8)) + BigInt(seed[i]);
    }
    const dValue = (seedValue % CURVE_FIELD).toString(16).padStart(64, "0");
    const d = Buffer.alloc(32);
    for (let i = 0; i < 32; i++) {
        d.writeUint8(parseInt(dValue.substring(i * 2, 2), 16), i);
    }
    return crypto.createPrivateKey({
        format: "jwk",
        key: {
            kty: "EC",
            d: d.toString("base64url"),
            crv: "secp256k1"
        }
    });
}

/**
 * Convert a public key to the raw format used by the naming server.
 *
 * @param {crypto.KeyObject} publicKey - the public key
 * @return {Buffer} the raw public key
 */
export function rawPublicKey(publicKey: crypto.KeyObject): Buffer {
    const jwk = publicKey.export({format: "jwk"});
    return Buffer.concat([
        Buffer.from(jwk.x ?? EMPTY_KEY, "base64url"),
        Buffer.from(jwk.y ?? EMPTY_KEY, "base64url")
    ]);
}

/**
 * Restore a public key from the raw format.
 *
 * @param {Buffer} rawPublicKey - the raw public key
 * @return {crypto.KeyObject} the public key
 */
export function rawToPublicKey(rawPublicKey: Buffer): crypto.KeyObject {
    const x = rawPublicKey.subarray(0, 32).toString("base64url");
    const y = rawPublicKey.subarray(32, 64).toString("base64url");
    return crypto.createPublicKey({
        format: "jwk",
        key: {
            kty: "EC",
            x,
            y,
            crv: "secp256k1"
        }
    });
}

/**
 * Convert a private key to the raw format to pass to the client.
 *
 * @param {crypto.KeyObject} privateKey - the private key
 * @return {Buffer} the raw private key
 */
export function rawPrivateKey(privateKey: crypto.KeyObject): Buffer {
    const jwk = privateKey.export({format: "jwk"});
    return Buffer.from(jwk.d ?? EMPTY_KEY, "base64url");
}

/**
 * Restore a private key from the raw format.
 *
 * @param {Buffer} rawPrivateKey - the raw private key
 * @return {crypto.KeyObject} the private key
 */
export function rawToPrivateKey(rawPrivateKey: Buffer): crypto.KeyObject {
    const d = rawPrivateKey.toString("base64url");
    return crypto.createPrivateKey({
        format: "jwk",
        key: {
            kty: "EC",
            d,
            crv: "secp256k1"
        }
    });
}

/**
 * Encode a fingerprint in the binary form, using the given fingerprint data and schema.
 *
 * @param {Fingerprint} fingerprint - the fingerprint data
 * @param {FingerprintSchema} schema - the fingerprint schema
 * @return {Buffer} the fingerprint in the binary form
 */
export function fingerprintBytes(fingerprint: Fingerprint, schema: FingerprintSchema): Buffer {
    const fingerprintWriter = new FingerprintWriter();
    fingerprintWriter.append(fingerprint, schema);
    return fingerprintWriter.toBytes();
}

/**
 * Calculate a cryptographic digest of the fingerprint.
 *
 * @param {Buffer} fingerprint - the fingerprint
 * @return {Buffer} the digest
 */
export function digestFingerprint(fingerprint: Buffer): Buffer {
    const digest = crypto.createHash("sha3-256");
    digest.update(fingerprint);
    return digest.digest();
}

/**
 * Sign a fingerprint with a private key.
 *
 * @param {Buffer} fingerprint - the fingerprint to be signed
 * @param {crypto.KeyObject} privateKey - the private key
 * @return {Buffer} the signature
 */
export function signFingerprint(fingerprint: Buffer, privateKey: crypto.KeyObject): Buffer {
    const sign = crypto.createSign("SHA3-256");
    sign.update(fingerprint);
    return sign.sign(privateKey);
}

/**
 * Verify a fingerprint signature with the given public key.
 *
 * @param {Buffer} fingerprint - the original fingerprint
 * @param {Buffer} signature - the signature to be verified
 * @param {crypto.KeyObject} publicKey - the public key for verification
 * @return {boolean} `true`, if the signature is correct, `false` otherwise
 */
export function verifyFingerprintSignature(
    fingerprint: Buffer, signature: Buffer, publicKey: crypto.KeyObject
): boolean {
    const verify = crypto.createVerify("SHA3-256");
    verify.update(fingerprint);
    return verify.verify(publicKey, signature);
}
