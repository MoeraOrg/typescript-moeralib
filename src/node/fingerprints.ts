// This file is generated

import { FingerprintSchema } from "../crypto/fingerprint";
import { fingerprintBytes } from "../crypto/crypto";

const ATTACHMENT_FINGERPRINT0_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["digest", "bytes"],
];

export function createAttachmentFingerprint0(digest: Buffer | null): Buffer {
    return fingerprintBytes({"version": 0, "objectType": "ATTACHMENT", digest}, ATTACHMENT_FINGERPRINT0_SCHEMA);
}

const CARTE_FINGERPRINT2_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["ownerName", "string"],
    ["address", "string"],
    ["beginning", "number"],
    ["deadline", "number"],
    ["nodeName", "string"],
    ["clientScope", "number"],
    ["adminScope", "number"],
    ["salt", "bytes"],
];

export function createCarteFingerprint2(
    ownerName: string | null, address: string | null, beginning: number | null, deadline: number | null,
    nodeName: string | null, clientScope: number | null, adminScope: number | null, salt: Buffer | null
): Buffer {
    return fingerprintBytes(
        {"version": 2, "objectType": "CARTE", ownerName, address, beginning, deadline, nodeName, clientScope, adminScope,
        salt}, CARTE_FINGERPRINT2_SCHEMA
    );
}

const CARTE_FINGERPRINT1_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["ownerName", "string"],
    ["address", "string"],
    ["beginning", "number"],
    ["deadline", "number"],
    ["nodeName", "string"],
    ["authCategory", "number"],
    ["salt", "bytes"],
];

export function createCarteFingerprint1(
    ownerName: string | null, address: string | null, beginning: number | null, deadline: number | null,
    nodeName: string | null, authCategory: number | null, salt: Buffer | null
): Buffer {
    return fingerprintBytes(
        {"version": 1, "objectType": "CARTE", ownerName, address, beginning, deadline, nodeName, authCategory, salt},
        CARTE_FINGERPRINT1_SCHEMA
    );
}

const CARTE_FINGERPRINT0_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["ownerName", "string"],
    ["address", "string"],
    ["beginning", "number"],
    ["deadline", "number"],
    ["permissions", "number"],
    ["salt", "bytes"],
];

export function createCarteFingerprint0(
    ownerName: string | null, address: string | null, beginning: number | null, deadline: number | null,
    permissions: number | null, salt: Buffer | null
): Buffer {
    return fingerprintBytes(
        {"version": 0, "objectType": "CARTE", ownerName, address, beginning, deadline, permissions, salt},
        CARTE_FINGERPRINT0_SCHEMA
    );
}

const COMMENT_FINGERPRINT0_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["ownerName", "string"],
    ["postingFingerprint", "bytes"],
    ["repliedToFingerprint", "bytes"],
    ["bodySrcHash", "bytes"],
    ["bodySrcFormat", "string"],
    ["body", "string"],
    ["bodyFormat", "string"],
    ["createdAt", "number"],
    ["permissions", "number"],
    ["attachments", "bytes[]"],
];

export function createCommentFingerprint0(
    ownerName: string | null, postingFingerprint: Buffer | null, repliedToFingerprint: Buffer | null,
    bodySrcHash: Buffer | null, bodySrcFormat: string | null, body: string | null, bodyFormat: string | null,
    createdAt: number | null, permissions: number | null, attachments: Buffer[] | null
): Buffer {
    return fingerprintBytes(
        {"version": 0, "objectType": "COMMENT", ownerName, postingFingerprint, repliedToFingerprint, bodySrcHash,
        bodySrcFormat, body, bodyFormat, createdAt, permissions, attachments}, COMMENT_FINGERPRINT0_SCHEMA
    );
}

const NOTIFICATION_PACKET_FINGERPRINT1_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["id", "string"],
    ["nodeName", "string"],
    ["fullName", "string"],
    ["createdAt", "number"],
    ["type", "string"],
    ["notification", "string"],
];

export function createNotificationPacketFingerprint1(
    id: string | null, nodeName: string | null, fullName: string | null, createdAt: number | null, type: string | null,
    notification: string | null
): Buffer {
    return fingerprintBytes(
        {"version": 1, "objectType": "NOTIFICATION_PACKET", id, nodeName, fullName, createdAt, type, notification},
        NOTIFICATION_PACKET_FINGERPRINT1_SCHEMA
    );
}

const NOTIFICATION_PACKET_FINGERPRINT0_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["id", "string"],
    ["nodeName", "string"],
    ["createdAt", "number"],
    ["type", "string"],
    ["notification", "string"],
];

export function createNotificationPacketFingerprint0(
    id: string | null, nodeName: string | null, createdAt: number | null, type: string | null,
    notification: string | null
): Buffer {
    return fingerprintBytes(
        {"version": 0, "objectType": "NOTIFICATION_PACKET", id, nodeName, createdAt, type, notification},
        NOTIFICATION_PACKET_FINGERPRINT0_SCHEMA
    );
}

const POSTING_FINGERPRINT1_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["receiverName", "string"],
    ["ownerName", "string"],
    ["bodySrcHash", "bytes"],
    ["bodySrcFormat", "string"],
    ["body", "string"],
    ["bodyFormat", "string"],
    ["createdAt", "number"],
    ["permissions", "number"],
    ["attachments", "bytes[]"],
];

export function createPostingFingerprint1(
    receiverName: string | null, ownerName: string | null, bodySrcHash: Buffer | null, bodySrcFormat: string | null,
    body: string | null, bodyFormat: string | null, createdAt: number | null, permissions: number | null,
    attachments: Buffer[] | null
): Buffer {
    return fingerprintBytes(
        {"version": 1, "objectType": "POSTING", receiverName, ownerName, bodySrcHash, bodySrcFormat, body, bodyFormat,
        createdAt, permissions, attachments}, POSTING_FINGERPRINT1_SCHEMA
    );
}

const POSTING_FINGERPRINT0_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["receiverName", "string"],
    ["ownerName", "string"],
    ["bodySrcHash", "bytes"],
    ["bodySrcFormat", "string"],
    ["body", "string"],
    ["bodyFormat", "string"],
    ["createdAt", "number"],
    ["permissions", "number"],
    ["attachments", "number"],
];

export function createPostingFingerprint0(
    receiverName: string | null, ownerName: string | null, bodySrcHash: Buffer | null, bodySrcFormat: string | null,
    body: string | null, bodyFormat: string | null, createdAt: number | null, permissions: number | null,
    attachments: number | null
): Buffer {
    return fingerprintBytes(
        {"version": 0, "objectType": "POSTING", receiverName, ownerName, bodySrcHash, bodySrcFormat, body, bodyFormat,
        createdAt, permissions, attachments}, POSTING_FINGERPRINT0_SCHEMA
    );
}

const PUSH_RELAY_MESSAGE_FINGERPRINT0_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["signedAt", "number"],
];

export function createPushRelayMessageFingerprint0(signedAt: number | null): Buffer {
    return fingerprintBytes(
        {"version": 0, "objectType": "PUSH_RELAY_MESSAGE", signedAt}, PUSH_RELAY_MESSAGE_FINGERPRINT0_SCHEMA
    );
}

const PUSH_RELAY_REGISTER_FINGERPRINT0_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["clientId", "string"],
    ["lang", "string"],
    ["signedAt", "number"],
];

export function createPushRelayRegisterFingerprint0(
    clientId: string | null, lang: string | null, signedAt: number | null
): Buffer {
    return fingerprintBytes(
        {"version": 0, "objectType": "PUSH_RELAY_REGISTER", clientId, lang, signedAt},
        PUSH_RELAY_REGISTER_FINGERPRINT0_SCHEMA
    );
}

const REACTION_FINGERPRINT0_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["ownerName", "string"],
    ["entryFingerprint", "bytes"],
    ["negative", "boolean"],
    ["emoji", "number"],
];

export function createReactionFingerprint0(
    ownerName: string | null, entryFingerprint: Buffer | null, negative: boolean | null, emoji: number | null
): Buffer {
    return fingerprintBytes(
        {"version": 0, "objectType": "REACTION", ownerName, entryFingerprint, negative, emoji},
        REACTION_FINGERPRINT0_SCHEMA
    );
}

const SHERIFF_ORDER_FINGERPRINT0_SCHEMA: FingerprintSchema = [
    ["version", "number"],
    ["objectType", "string"],
    ["sheriffName", "string"],
    ["nodeName", "string"],
    ["feedName", "string"],
    ["entryFingerprint", "bytes"],
    ["category", "string"],
    ["reasonCode", "string"],
    ["reasonDetails", "string"],
    ["createdAt", "number"],
];

export function createSheriffOrderFingerprint0(
    sheriffName: string | null, nodeName: string | null, feedName: string | null, entryFingerprint: Buffer | null,
    category: string | null, reasonCode: string | null, reasonDetails: string | null, createdAt: number | null
): Buffer {
    return fingerprintBytes(
        {"version": 0, "objectType": "SHERIFF_ORDER", sheriffName, nodeName, feedName, entryFingerprint, category,
        reasonCode, reasonDetails, createdAt}, SHERIFF_ORDER_FINGERPRINT0_SCHEMA
    );
}
