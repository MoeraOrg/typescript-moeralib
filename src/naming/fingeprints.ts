import { FingerprintSchema } from "../crypto/fingerprint";
import { fingerprintBytes } from "../crypto/crypto";

const PUT_CALL_FINGERPRINT0_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["name", "string"],
    ["generation", "number"],
    ["updating_key", "bytes"],
    ["node_uri", "string"],
    ["signing_key", "bytes"],
    ["valid_from", "number"],
    ["previous_digest", "bytes"],
]

export function createPutCallFingerprint0(
    name: string, generation: number, updatingKey: Buffer, nodeUri: string, signingKey: Buffer, validFrom: number,
    previousDigest: Buffer | null
): Buffer {
    return fingerprintBytes(
        {"version": 0, name, generation, updatingKey, nodeUri, signingKey, validFrom, previousDigest},
        PUT_CALL_FINGERPRINT0_SCHEMA
    );
}
