// This file is generated

export type PrincipalValue = "none" | "private" | "admin" | "owner" | "secret" | "senior" | "enigma" | "major"
    | "signed" | "subscribed" | "public" | "unset" | string;

export type AskSubject = "subscribe" | "friend";

export type BlockedEntryOperation = "addComment" | "addReaction";

export type BlockedOperation = "reaction" | "comment" | "posting" | "visibility" | "instant";

export type BodyFormat = "message" | "application";

export type DraftType = "new-posting" | "posting-update" | "new-comment" | "comment-update";

export type OperationStatus = "waiting" | "added" | "started" | "succeeded" | "failed" | "unknown";

export type PrincipalFlag = "none" | "private" | "admin" | "owner" | "secret" | "senior" | "enigma" | "major"
    | "signed" | "subscribed" | "public" | "friends" | "unset";

export type PushContentType = "story-added" | "story-deleted" | "feed-updated";

export type PushRelayType = "fcm";

export type Scope = "none" | "identify" | "other" | "view-media" | "view-content" | "add-post" | "update-post"
    | "add-comment" | "update-comment" | "react" | "delete-own-content" | "delete-others-content" | "view-people"
    | "block" | "friend" | "remote-identify" | "drafts" | "view-feeds" | "update-feeds" | "name" | "plugins"
    | "view-profile" | "update-profile" | "sheriff" | "view-settings" | "update-settings" | "subscribe" | "tokens"
    | "user-lists" | "grant" | "upload-public-media" | "upload-private-media" | "view-all" | "all";

export const SCOPE_VALUES: Record<Scope, number> = {
    "none": 0x00000000,
    "identify": 0x00000000,
    "other": 0x00000001,
    "view-media": 0x00000002,
    "view-content": 0x00000004,
    "add-post": 0x00000008,
    "update-post": 0x00000010,
    "add-comment": 0x00000020,
    "update-comment": 0x00000040,
    "react": 0x00000080,
    "delete-own-content": 0x00000100,
    "delete-others-content": 0x00000200,
    "view-people": 0x00000400,
    "block": 0x00000800,
    "friend": 0x00001000,
    "remote-identify": 0x00002000,
    "drafts": 0x00004000,
    "view-feeds": 0x00008000,
    "update-feeds": 0x00010000,
    "name": 0x00020000,
    "plugins": 0x00040000,
    "view-profile": 0x00080000,
    "update-profile": 0x00100000,
    "sheriff": 0x00200000,
    "view-settings": 0x00400000,
    "update-settings": 0x00800000,
    "subscribe": 0x01000000,
    "tokens": 0x02000000,
    "user-lists": 0x04000000,
    "grant": 0x08000000,
    "upload-public-media": 0x10000000,
    "upload-private-media": 0x20000000,
    "view-all": 0x00088406,
    "all": 0x3fffffff,
};

export type SearchContentUpdateType = "block" | "friend" | "profile" | "subscribe" | "unblock" | "unfriend"
    | "unsubscribe";

export type SearchEngine = "google";

export type SettingType = "bool" | "int" | "string" | "json" | "Duration" | "PrivateKey" | "PublicKey" | "Timestamp"
    | "UUID" | "Principal";

export type SheriffComplaintStatus = "posted" | "prepared" | "prepare-failed" | "not-found" | "invalid-target"
    | "not-original" | "not-sheriff" | "approved" | "rejected";

export type SheriffOrderCategory = "visibility";

export type SheriffOrderReason = "unlawful" | "defamatory" | "threat" | "spam" | "scam" | "malware" | "copyright"
    | "impersonating" | "privacy" | "other";

export type SourceFormat = "plain-text" | "html" | "markdown" | "html/visual" | "application";

export type StoryType = "asked-to-friend" | "asked-to-subscribe" | "blocked-user" | "blocked-user-in-posting"
    | "comment-added" | "comment-media-reaction-added-negative" | "comment-media-reaction-added-positive"
    | "comment-media-reaction-failed" | "comment-post-task-failed" | "comment-reaction-added-negative"
    | "comment-reaction-added-positive" | "comment-reaction-task-failed" | "comment-update-task-failed" | "defrosting"
    | "friend-added" | "friend-deleted" | "friend-group-deleted" | "mention-comment" | "mention-posting"
    | "posting-added" | "posting-media-reaction-added-negative" | "posting-media-reaction-added-positive"
    | "posting-media-reaction-failed" | "posting-post-task-failed" | "posting-reaction-task-failed"
    | "posting-subscribe-task-failed" | "posting-update-task-failed" | "posting-updated" | "reaction-added-negative"
    | "reaction-added-positive" | "reminder-avatar" | "reminder-email" | "reminder-full-name" | "reminder-sheriff-allow"
    | "remote-comment-added" | "reply-comment" | "search-report" | "sheriff-complaint-added"
    | "sheriff-complaint-decided" | "sheriff-marked" | "sheriff-unmarked" | "subscriber-added" | "subscriber-deleted"
    | "unblocked-user" | "unblocked-user-in-posting";

export type SubscriptionReason = "user" | "mention" | "comment" | "auto";

export type SubscriptionType = "feed" | "posting" | "posting-comments" | "profile" | "search" | "user-list";

export type VerificationStatus = "running" | "correct" | "incorrect" | "error";

export interface CommentOperations {
    /**
     * view the comment
     */
    view?: PrincipalValue | null;
    /**
     * edit the comment
     */
    edit?: PrincipalValue | null;
    /**
     * delete the comment
     */
    delete?: PrincipalValue | null;
    /**
     * view the comment's reactions
     */
    viewReactions?: PrincipalValue | null;
    /**
     * view the comment's negative reactions
     */
    viewNegativeReactions?: PrincipalValue | null;
    /**
     * view the number of the comment's reactions
     */
    viewReactionTotals?: PrincipalValue | null;
    /**
     * view the number of the comment's negative reactions
     */
    viewNegativeReactionTotals?: PrincipalValue | null;
    /**
     * view the relative number of different types of the comment's reactions
     */
    viewReactionRatios?: PrincipalValue | null;
    /**
     * view the relative number of different types of the comment's negative reactions
     */
    viewNegativeReactionRatios?: PrincipalValue | null;
    /**
     * add a reaction to the comment
     */
    addReaction?: PrincipalValue | null;
    /**
     * add a negative reaction to the comment
     */
    addNegativeReaction?: PrincipalValue | null;
    /**
     * override the permissions of the comment's reactions
     */
    overrideReaction?: PrincipalValue | null;
}

export interface ContactOperations {
    /**
     * see the subscriber information
     */
    viewFeedSubscriber?: PrincipalValue | null;
    /**
     * see the subscription information
     */
    viewFeedSubscription?: PrincipalValue | null;
    /**
     * see the friend information
     */
    viewFriend?: PrincipalValue | null;
    /**
     * see the friend-of information (this operation can be modified by admin only)
     */
    viewFriendOf?: PrincipalValue | null;
    /**
     * see the blocking information (this operation can be modified by admin only)
     */
    viewBlock?: PrincipalValue | null;
    /**
     * see the blocked-by information (this operation can be modified by admin only)
     */
    viewBlockBy?: PrincipalValue | null;
}

export interface FeedOperations {
    /**
     * add stories to the feed
     */
    add?: PrincipalValue | null;
}

export interface FriendOperations {
    /**
     * view the membership of the node in the group of friends
     */
    view?: PrincipalValue | null;
}

export interface FriendGroupOperations {
    /**
     * view the group of friends
     */
    view?: PrincipalValue | null;
}

export interface NodeNameOperations {
    /**
     * any modification of the node name, prolonging it etc.
     */
    manage?: PrincipalValue | null;
}

export interface PeopleOperations {
    /**
     * view the list of subscribers
     */
    viewSubscribers?: PrincipalValue | null;
    /**
     * view the list of subscriptions
     */
    viewSubscriptions?: PrincipalValue | null;
    /**
     * view the list of friends
     */
    viewFriends?: PrincipalValue | null;
    /**
     * view the list of those who added this node to friends
     */
    viewFriendOfs?: PrincipalValue | null;
    /**
     * view the list of blocked nodes
     */
    viewBlocked?: PrincipalValue | null;
    /**
     * view the list of those who blocked this node
     */
    viewBlockedBy?: PrincipalValue | null;
    /**
     * view the number of subscribers
     */
    viewSubscribersTotal?: PrincipalValue | null;
    /**
     * view the number of subscriptions
     */
    viewSubscriptionsTotal?: PrincipalValue | null;
    /**
     * view the number of friends
     */
    viewFriendsTotal?: PrincipalValue | null;
    /**
     * view the number of those who added this node to friends
     */
    viewFriendOfsTotal?: PrincipalValue | null;
}

export interface PostingOperations {
    /**
     * view the posting
     */
    view?: PrincipalValue | null;
    /**
     * edit the posting
     */
    edit?: PrincipalValue | null;
    /**
     * delete the posting
     */
    delete?: PrincipalValue | null;
    /**
     * view the posting's comments
     */
    viewComments?: PrincipalValue | null;
    /**
     * add a comment to the posting
     */
    addComment?: PrincipalValue | null;
    /**
     * override the permissions of the posting's comments
     */
    overrideComment?: PrincipalValue | null;
    /**
     * view the posting's reactions
     */
    viewReactions?: PrincipalValue | null;
    /**
     * view the posting's negative reactions
     */
    viewNegativeReactions?: PrincipalValue | null;
    /**
     * view the number of the posting's reactions
     */
    viewReactionTotals?: PrincipalValue | null;
    /**
     * view the number of the posting's negative reactions
     */
    viewNegativeReactionTotals?: PrincipalValue | null;
    /**
     * view the relative number of different types of the posting's reactions
     */
    viewReactionRatios?: PrincipalValue | null;
    /**
     * view the relative number of different types of the posting's negative reactions
     */
    viewNegativeReactionRatios?: PrincipalValue | null;
    /**
     * add a reaction to the posting
     */
    addReaction?: PrincipalValue | null;
    /**
     * add a negative reaction to the posting
     */
    addNegativeReaction?: PrincipalValue | null;
    /**
     * override the permissions of the posting's reactions
     */
    overrideReaction?: PrincipalValue | null;
    /**
     * override the permissions of the posting's comment's reactions
     */
    overrideCommentReaction?: PrincipalValue | null;
}

export interface PrivateMediaFileOperations {
    /**
     * view the media file
     */
    view?: PrincipalValue | null;
}

export interface ProfileOperations {
    /**
     * change the profile
     */
    edit?: PrincipalValue | null;
    /**
     * view the e-mail address in the profile
     */
    viewEmail?: PrincipalValue | null;
}

export interface ReactionOperations {
    /**
     * view the reaction
     */
    view?: PrincipalValue | null;
    /**
     * delete the reaction
     */
    delete?: PrincipalValue | null;
}

export interface StoryOperations {
    /**
     * update the story
     */
    edit?: PrincipalValue | null;
    /**
     * delete the story
     */
    delete?: PrincipalValue | null;
}

export interface SubscriberOperations {
    /**
     * see the subscriber
     */
    view?: PrincipalValue | null;
    /**
     * delete the subscriber (this operation cannot be modified or overridden)
     */
    delete?: PrincipalValue | null;
}

export interface SubscriptionOperations {
    /**
     * see the subscription
     */
    view?: PrincipalValue | null;
    /**
     * delete the subscription (this operation cannot be modified or overridden)
     */
    delete?: PrincipalValue | null;
}

export interface AcceptedReactions {
    /**
     * comma-separated list of codes of the positive reactions that are accepted; a code may be prefixed by ``0x`` to
     * designate hexadecimal number and ``+`` to designate a recommended reaction
     */
    positive: string;
    /**
     * comma-separated list of codes of the negative reactions that are accepted (the format is the same as above)
     */
    negative: string;
}

export interface AskDescription {
    /**
     * request subject
     */
    subject: AskSubject;
    /**
     * if the request is to add this node to friends, this field contains ID of the corresponding group of friends on
     * the remote node
     */
    friendGroupId?: string | null;
    /**
     * message to the node admin
     */
    message?: string | null;
}

export interface AsyncOperationCreated {
    /**
     * ID of the asynchronous operation that was created
     */
    id: string;
}

export interface AvatarAttributes {
    /**
     * ID of the public media file used as a source image
     */
    mediaId: string;
    /**
     * x coordinate of the top-left corner of the clipping square
     */
    clipX: number;
    /**
     * y coordinate of the top-left corner of the clipping square
     */
    clipY: number;
    /**
     * size of the clipping square
     */
    clipSize: number;
    /**
     * size of the avatar to be created
     */
    avatarSize: number;
    /**
     * rotation angle of the source image
     */
    rotate: number;
    /**
     * shape of the avatar
     */
    shape?: string | null;
    /**
     * ordinal of the avatar
     */
    ordinal?: number | null;
}

export interface AvatarDescription {
    /**
     * ID of the public media file used as an avatar image
     */
    mediaId: string;
    /**
     * shape of the avatar
     */
    shape: string;
    /**
     * if set to ``true``, the node will ignore the absence of the media file referenced in ``mediaId`` field (empty
     * avatar will be used in this case); if set to ``false`` or absent, the node will return an error, if the media
     * file referenced in ``mediaId`` field is absent
     */
    optional?: boolean | null;
}

export interface AvatarImage {
    /**
     * ID of the media file
     */
    mediaId: string;
    /**
     * virtual location of the media file, relative to the ``/media`` virtual page
     */
    path: string;
    /**
     * width of the media in pixels (``null``, if the media file is not an image/video)
     */
    width?: number | null;
    /**
     * height of the media in pixels (``null``, if the media file is not an image/video)
     */
    height?: number | null;
    /**
     * shape of the avatar
     */
    shape?: string | null;
}

export interface AvatarInfo {
    /**
     * ID of the avatar
     */
    id: string;
    /**
     * ID of the media file
     */
    mediaId: string;
    /**
     * virtual location of the media file, relative to the ``/media`` virtual page
     */
    path: string;
    /**
     * width of the media in pixels (``null``, if the media file is not an image/video)
     */
    width?: number | null;
    /**
     * height of the media in pixels (``null``, if the media file is not an image/video)
     */
    height?: number | null;
    /**
     * shape of the avatar
     */
    shape?: string | null;
    /**
     * ordinal of the avatar
     */
    ordinal: number;
}

export interface AvatarOrdinal {
    /**
     * ID of the avatar
     */
    id: string;
    /**
     * ordinal of the avatar
     */
    ordinal: number;
}

export interface AvatarsOrdered {
    /**
     * IDs of avatars
     */
    ids: string[];
}

export interface BlockedInstantAttributes {
    /**
     * type of the story
     */
    storyType: StoryType;
    /**
     * ID of the local entry the blocked story should be related to
     */
    entryId?: string | null;
    /**
     * node name of the remote posting the blocked story should be related to
     */
    remoteNodeName?: string | null;
    /**
     * ID of the remote posting the blocked story should be related to
     */
    remotePostingId?: string | null;
    /**
     * owner name of the remote object the blocked story should be related to
     */
    remoteOwnerName?: string | null;
    /**
     * unblocking timestamp - the real time when the story will be unblocked; ``null`` or absent, if the story is
     * blocked permanently
     */
    deadline?: number | null;
}

export interface BlockedInstantFilter {
    /**
     * type of the story
     */
    storyType: StoryType;
    /**
     * ID of the local entry the blocked story should be related to
     */
    entryId?: string | null;
    /**
     * node name of the remote posting the blocked story should be related to
     */
    remoteNodeName?: string | null;
    /**
     * ID of the remote posting the blocked story should be related to
     */
    remotePostingId?: string | null;
    /**
     * owner name of the remote object the blocked story should be related to
     */
    remoteOwnerName?: string | null;
}

export interface BlockedInstantInfo {
    id: string;
    /**
     * type of the story
     */
    storyType: StoryType;
    /**
     * ID of the local entry the blocked story should be related to
     */
    entryId?: string | null;
    /**
     * node name of the remote posting the blocked story should be related to
     */
    remoteNodeName?: string | null;
    /**
     * ID of the remote posting the blocked story should be related to
     */
    remotePostingId?: string | null;
    /**
     * owner name of the remote object the blocked story should be related to
     */
    remoteOwnerName?: string | null;
    /**
     * blocking timestamp - the real time when the story was blocked
     */
    createdAt: number;
    /**
     * unblocking timestamp - the real time when the story will be unblocked; ``null`` or absent, if the story is
     * blocked permanently
     */
    deadline?: number | null;
}

export interface BlockedPostingInstantInfo {
    id: string;
    /**
     * type of the story
     */
    storyType: StoryType;
    /**
     * owner name of the remote object the blocked story should be related to
     */
    remoteOwnerName?: string | null;
    /**
     * unblocking timestamp - the real time when the story will be unblocked; ``null`` or absent, if the story is
     * blocked permanently
     */
    deadline?: number | null;
}

export interface BlockedUserAttributes {
    /**
     * operation that is to be blocked
     */
    blockedOperation: BlockedOperation;
    /**
     * name of the blocked node
     */
    nodeName: string;
    /**
     * ID of the local entry, where the node is blocked; ``null`` or absent, if the node is blocked globally
     */
    entryId?: string | null;
    /**
     * node name of the remote posting, where the node is blocked; ``null`` or absent, if the node is blocked globally
     */
    entryNodeName?: string | null;
    /**
     * ID of the remote posting, where the node is blocked; ``null`` or absent, if the node is blocked globally
     */
    entryPostingId?: string | null;
    /**
     * unblocking timestamp - the real time when the node will be unblocked; ``null`` or absent, if the node is blocked
     * permanently
     */
    deadline?: number | null;
    /**
     * source text of the reason of blocking
     */
    reasonSrc?: string | null;
    /**
     * format of the source text of the reason of blocking, the list of available formats is returned in
     * ``PostingFeatures``
     */
    reasonSrcFormat?: SourceFormat | null;
}

export interface BlockedUserFilter {
    /**
     * operations that are blocked
     */
    blockedOperations?: BlockedOperation[] | null;
    /**
     * name of the blocked node
     */
    nodeName?: string | null;
    /**
     * ID of the local entry, where the node is blocked; ``null`` or absent, if the node is blocked globally
     */
    entryId?: string | null;
    /**
     * node name of the remote posting, where the node is blocked; ``null`` or absent, if the node is blocked globally
     */
    entryNodeName?: string | null;
    /**
     * ID of the remote posting, where the node is blocked; ``null`` or absent, if the node is blocked globally
     */
    entryPostingId?: string | null;
    /**
     * if set to ``true``, only the blockings that strictly fit the criteria are returned; otherwise global blockings
     * are returned even if the search is limited to a particular posting
     */
    strict?: boolean | null;
}

export interface BlockedUsersChecksums {
    /**
     * checksum of the list of users that are hidden
     */
    visibility: number;
}

export interface CarteAttributes {
    /**
     * permissions to be granted to the carte; if not set, all permissions of the carte's owner are granted
     */
    clientScope?: Scope[] | null;
    /**
     * additional administrative permissions (of those granted to the carte's owner by the target node) to be granted
     * to the carte
     */
    adminScope?: Scope[] | null;
    /**
     * if set, the carte is valid for authentication on the specified node only
     */
    nodeName?: string | null;
    /**
     * maximum number of sequential cartes to be returned; the node may decide to return fewer cartes than the given
     * limit
     */
    limit?: number | null;
}

export interface CarteInfo {
    carte: string;
    /**
     * timestamp of the beginning of the carte's life
     */
    beginning: number;
    /**
     * timestamp of the end of the carte's life
     */
    deadline: number;
    /**
     * if set, the carte is valid for authentication on the specified node only
     */
    nodeName?: string | null;
    /**
     * the list of permissions granted to the carte
     */
    clientScope?: Scope[] | null;
    /**
     * the list of additional administrative permissions (of those granted to the carte's owner by the target node)
     * granted to the carte
     */
    adminScope?: Scope[] | null;
}

export interface CarteSet {
    /**
     * the client IP address the cartes are bound to
     */
    cartesIp?: string | null;
    /**
     * the cartes
     */
    cartes: CarteInfo[];
    /**
     * cartes creation timestamp
     */
    createdAt: number;
}

export interface CarteVerificationInfo {
    /**
     * ``true``, if the carte can be accepted for authentication, ``false`` otherwise
     */
    valid: boolean;
    /**
     * name of the node the carte authenticates
     */
    clientName?: string | null;
    /**
     * the list of permissions granted to the carte
     */
    clientScope?: Scope[] | null;
    /**
     * the list of additional administrative permissions (of those granted to the carte's owner by the target node)
     * granted to the carte
     */
    adminScope?: Scope[] | null;
    /**
     * error code
     */
    errorCode?: string | null;
    /**
     * human-readable error message
     */
    errorMessage?: string | null;
}

export interface ClientCarte {
    /**
     * the node name the client (carte owner) wants to authenticate under
     */
    clientName?: string | null;
    /**
     * the carte to verify
     */
    carte: string;
}

export interface ClientReactionInfo {
    /**
     * ``true``, if the reaction is negative, ``false``, if positive
     */
    negative: boolean;
    /**
     * reaction code, usually interpreted by clients as emoji code point
     */
    emoji: number;
    /**
     * reaction creation timestamp - the real time when the reaction was created
     */
    createdAt: number;
    /**
     * if present, the reaction will be erased at this time
     */
    deadline?: number | null;
}

export interface CommentMassAttributes {
    /**
     * the operations and the corresponding principals that are overridden by the comment's owner ("senior")
     */
    seniorOperations?: CommentOperations | null;
}

export interface CommentTotalInfo {
    /**
     * total number of comments in the posting after the operation
     */
    total: number;
}

export interface ContactInfo {
    nodeName: string;
    fullName?: string | null;
    gender?: string | null;
    avatar?: AvatarImage | null;
    /**
     * social distance between the contact and the node, which depends on subscription and friendship status and the
     * number recent reactions and comments
     */
    distance: number;
    /**
     * the contact is subscribed to at least one of the node's feeds
     */
    hasFeedSubscriber?: boolean | null;
    /**
     * the node is subscribed to at least one of the contact's feeds
     */
    hasFeedSubscription?: boolean | null;
    /**
     * the contact is a friend of the node
     */
    hasFriend?: boolean | null;
    /**
     * the node is a friend of the contact
     */
    hasFriendOf?: boolean | null;
    /**
     * the contact is blocked by the node
     */
    hasBlock?: boolean | null;
    /**
     * the node is blocked by the contact
     */
    hasBlockBy?: boolean | null;
    /**
     * the supported operations and the corresponding principals
     */
    operations?: ContactOperations | null;
    /**
     * the supported operations and the corresponding principals as defined by the contact's owner
     */
    ownerOperations?: ContactOperations | null;
    /**
     * the operations and the corresponding principals that are overridden by the node administrator
     */
    adminOperations?: ContactOperations | null;
}

export interface Credentials {
    login: string;
    password: string;
}

export interface CredentialsChange {
    /**
     * credentials reset token
     */
    token?: string | null;
    /**
     * the current password
     */
    oldPassword?: string | null;
    login: string;
    password: string;
}

export interface CredentialsCreated {
    /**
     * ``true`` if the credentials are initialized already, ``false`` otherwise
     */
    created: boolean;
}

export interface DeleteNodeStatus {
    /**
     * ``true`` if the request is sent, ``false`` otherwise
     */
    requested: boolean;
}

export interface DeleteNodeText {
    /**
     * text message for the provider
     */
    message?: string | null;
}

export interface DomainAttributes {
    /**
     * domain's hostname or ``_default_`` for the default domain
     */
    name?: string | null;
    /**
     * domain's node ID
     */
    nodeId?: string | null;
}

export interface DomainAvailable {
    /**
     * fully-qualified domain name
     */
    name: string;
}

export interface DomainInfo {
    /**
     * domain's hostname or ``_default_`` for the default domain
     */
    name: string;
    /**
     * domain's node ID
     */
    nodeId: string;
    /**
     * domain creation timestamp
     */
    createdAt: number;
}

export interface EmailHint {
    /**
     * a masked E-mail address that should help user to understand which E-mail address was used without revealing it
     */
    emailHint: string;
}

export interface FeedReference {
    /**
     * name of the feed
     */
    feedName: string;
    /**
     * story publication timestamp - the time the story is published under in the feed
     */
    publishedAt: number;
    /**
     * ``true``, if the story is pinned (should appear before any non-pinned story in the feed), ``false`` otherwise
     */
    pinned?: boolean | null;
    moment: number;
    /**
     * ID of the story
     */
    storyId: string;
    /**
     * the supported operations and the corresponding principals for the story in the feed
     */
    operations?: StoryOperations | null;
}

export interface FeedStatus {
    /**
     * total number of stories
     */
    total: number;
    /**
     * total number of pinned stories
     */
    totalPinned: number;
    /**
     * moment of the most recent story
     */
    lastMoment?: number | null;
    /**
     * number of stories that have not been viewed yet, admin only
     */
    notViewed?: number | null;
    /**
     * number of stories that have not been read yet, admin only
     */
    notRead?: number | null;
    /**
     * moment of the oldest non-viewed story, admin only
     */
    notViewedMoment?: number | null;
    /**
     * moment of the oldest non-read story, admin only
     */
    notReadMoment?: number | null;
}

export interface FeedStatusChange {
    /**
     * new value of the ``viewed`` flag (``null``, if the flag is not changed)
     */
    viewed?: boolean | null;
    /**
     * new value of the ``read`` flag (``null``, if the flag is not changed)
     */
    read?: boolean | null;
    /**
     * change flags for all stories before this moment, inclusive
     */
    before: number;
}

export interface FeedWithStatus {
    /**
     * name of the feed
     */
    feedName: string;
    /**
     * number of stories in the feed that have not been viewed yet
     */
    notViewed: number;
    /**
     * number of stories in the feed that have not been read yet
     */
    notRead: number;
    /**
     * moment of the oldest non-viewed story
     */
    notViewedMoment?: number | null;
    /**
     * moment of the oldest non-read story
     */
    notReadMoment?: number | null;
}

export interface FriendGroupAssignment {
    /**
     * ID of the group of friends
     */
    id: string;
    /**
     * the operations and the corresponding principals
     */
    operations?: FriendOperations | null;
}

export interface FriendGroupDescription {
    /**
     * title of the group of friends
     */
    title: string;
    /**
     * the operations and the corresponding principals
     */
    operations?: FriendGroupOperations | null;
}

export interface FriendGroupDetails {
    /**
     * ID of the group of friends
     */
    id: string;
    /**
     * title of the group of friends
     */
    title?: string | null;
    /**
     * the friendship timestamp - the real time when the node was added to the group of friends
     */
    addedAt: number;
    /**
     * list of the supported operations and the corresponding principals
     */
    operations?: FriendOperations | null;
}

export interface FriendGroupInfo {
    id: string;
    /**
     * title of the group of friends
     */
    title?: string | null;
    /**
     * the group creation timestamp - the real time when the group of friends was created
     */
    createdAt: number;
    /**
     * list of the supported operations and the corresponding principals
     */
    operations?: FriendGroupOperations | null;
}

export interface FriendGroupsFeatures {
    /**
     * list of groups of friends existing on the node
     */
    available: FriendGroupInfo[];
    /**
     * list of groups of friends the client is member of
     */
    memberOf?: FriendGroupDetails[] | null;
}

export interface FriendInfo {
    /**
     * name of the node
     */
    nodeName: string;
    /**
     * information about the node
     */
    contact?: ContactInfo | null;
    /**
     * groups of friends the node belongs to
     */
    groups?: FriendGroupDetails[] | null;
}

export interface FriendOfInfo {
    /**
     * name of the remote node
     */
    remoteNodeName: string;
    /**
     * information about the remote node
     */
    contact?: ContactInfo | null;
    /**
     * groups of friends on the remote node this node was added to
     */
    groups?: FriendGroupDetails[] | null;
}

export interface FundraiserInfo {
    /**
     * fundraiser title
     */
    title: string;
    /**
     * text or URI to be encoded and displayed as QR-code
     */
    qrCode?: string | null;
    /**
     * arbitrary text to be displayed
     */
    text?: string | null;
    /**
     * link to the fundraiser
     */
    href?: string | null;
}

export interface GrantChange {
    /**
     * a set of permissions to be granted or revoked
     */
    scope: Scope[];
    /**
     * ``true`` if the permissions must be revoked, ``false`` if the permissions must be granted
     */
    revoke: boolean;
}

export interface GrantInfo {
    /**
     * name of the node the permissions are granted to
     */
    nodeName: string;
    /**
     * the set of administrative permissions granted to the node
     */
    scope: Scope[];
}

export interface KeyMnemonic {
    /**
     * the words
     */
    mnemonic: string[];
}

export interface LinkPreview {
    /**
     * name of the site
     */
    siteName?: string | null;
    /**
     * canonical URL of the page
     */
    url?: string | null;
    /**
     * title of the page
     */
    title?: string | null;
    /**
     * description of the page
     */
    description?: string | null;
    /**
     * hash of the image presenting the page
     */
    imageHash?: string | null;
}

export interface LinkPreviewInfo {
    /**
     * name of the site
     */
    siteName?: string | null;
    /**
     * canonical URL of the page
     */
    url?: string | null;
    /**
     * title of the page
     */
    title?: string | null;
    /**
     * description of the page
     */
    description?: string | null;
    /**
     * URL of the image presenting the page
     */
    imageUrl?: string | null;
}

export interface MediaFilePreviewInfo {
    /**
     * the width the preview was prepared for viewing at
     */
    targetWidth: number;
    /**
     * location of the media file, relative to the ``/media``; points to a static image served directly from a
     * filesystem; static images do not accept any query parameters including authentication parameters
     */
    directPath?: string | null;
    /**
     * actual width of the preview in pixels
     */
    width: number;
    /**
     * actual height of the preview in pixels
     */
    height: number;
    /**
     * ``true`` if the preview is identical to the original media, ``false`` otherwise
     */
    original?: boolean | null;
}

export interface MediaWithDigest {
    /**
     * ID of the media file
     */
    id: string;
    /**
     * cryptographic digest of the media file
     */
    digest?: string | null;
}

export interface NameToRegister {
    name: string;
}

export interface NotificationPacket {
    /**
     * ID of the notification packet on the sending node (used to filter out duplicates)
     */
    id: string;
    /**
     * name of the sending node
     */
    nodeName: string;
    /**
     * full name of the sending node
     */
    fullName?: string | null;
    /**
     * gender of the sending node
     */
    gender?: string | null;
    /**
     * avatar of the sending node
     */
    avatar?: AvatarImage | null;
    /**
     * notification packet creation timestamp
     */
    createdAt: number;
    /**
     * notification type
     */
    type: string;
    /**
     * the notification, a string representation of a JSON structure (see Notifications page for details)
     */
    notification: string;
    /**
     * the notification packet sender signature (use ``NotificationPacket`` fingerprint)
     */
    signature: string;
    /**
     * signature version (i.e. fingerprint version)
     */
    signatureVersion: number;
}

export interface NodeNameInfo {
    name?: string | null;
    /**
     * status of the latest operation with the node name
     */
    operationStatus?: OperationStatus | null;
    /**
     * the last time the operation status was updated
     */
    operationStatusUpdated?: number | null;
    /**
     * if the operation with the node name was failed, the code of the failure
     */
    operationErrorCode?: string | null;
    /**
     * if the operation with the node name was failed, the human-readable description of the failure
     */
    operationErrorMessage?: string | null;
    /**
     * ``true``, if updating key mnemonic is being stored on the node, ``false`` otherwise
     */
    storedMnemonic?: boolean | null;
    /**
     * the supported operations and the corresponding principals
     */
    operations?: NodeNameOperations | null;
}

export interface PeopleGeneralInfo {
    /**
     * total number of subscribers of the node
     */
    feedSubscribersTotal?: number | null;
    /**
     * total number of subscriptions of the node
     */
    feedSubscriptionsTotal?: number | null;
    /**
     * total number of friends in every group
     */
    friendsTotal?: Partial<Record<string, number>> | null;
    /**
     * total number of nodes that added this node to their friends
     */
    friendOfsTotal?: number | null;
    /**
     * total number of blocked nodes
     */
    blockedTotal?: number | null;
    /**
     * total number of nodes that blocked this node
     */
    blockedByTotal?: number | null;
    /**
     * the supported operations and the corresponding principals
     */
    operations?: PeopleOperations | null;
}

export interface PluginContext {
    /**
     * ``true``, if the client has authenticated as root admin, ``false`` otherwise
     */
    rootAdmin: boolean;
    /**
     * ``true``, if the client has authenticated as node admin, ``false`` otherwise
     */
    admin: boolean;
    /**
     * the list of permissions granted to the client, if it has authenticated as node admin; see
     * ``TokenInfo.permissions`` for the list of possible values
     */
    authCategories: string[];
    /**
     * node name of the client
     */
    clientName: string;
    /**
     * IP address of the client
     */
    remoteAddress: string;
    /**
     * user agent (browser) used by the client
     */
    userAgent: string;
    /**
     * operating system used by the client
     */
    userAgentOs: string;
    /**
     * ID of the current node
     */
    nodeId: string;
    /**
     * node name of the current node
     */
    nodeName: string;
    /**
     * domain name of the current node
     */
    domainName: string;
    /**
     * full URL of the request
     */
    originUrl: string;
}

export interface PostingFeatures {
    /**
     * ``true`` if the client is allowed to create postings, ``false`` otherwise
     */
    post?: boolean | null;
    /**
     * ``true`` if new postings are recommended to have a subject, ``false`` otherwise
     */
    subjectPresent: boolean;
    /**
     * list of source text formats the node understands
     */
    sourceFormats: SourceFormat[];
    /**
     * maximal size of a media attachment in a post
     */
    mediaMaxSize: number;
    /**
     * maximal size of a compressed image in a post
     */
    imageRecommendedSize: number;
    /**
     * maximal resolution of a compressed image in a post (in pixels)
     */
    imageRecommendedPixels: number;
    /**
     * list of image formats (in MIME type form) the node understands
     */
    imageFormats: string[];
}

export interface PostingSourceInfo {
    /**
     * name of the remote node
     */
    nodeName: string;
    /**
     * full name of the remote node
     */
    fullName?: string | null;
    /**
     * avatar of the remote node
     */
    avatar?: AvatarImage | null;
    /**
     * name of the feed on the remote node
     */
    feedName: string;
    /**
     * ID of the posting on the remote node
     */
    postingId: string;
    /**
     * timestamp when the posting was received from this source
     */
    createdAt: number;
}

export interface PrivateMediaFileInfo {
    /**
     * ID of the media file
     */
    id: string;
    /**
     * SHA-1 hash of the media file
     */
    hash: string;
    /**
     * virtual location of the media file, relative to the ``/media`` virtual page
     */
    path: string;
    /**
     * location of the media file, relative to the ``/media``; points to a static image served directly from a
     * filesystem; static images do not accept any query parameters including authentication parameters
     */
    directPath?: string | null;
    /**
     * MIME type of the media
     */
    mimeType: string;
    /**
     * width of the media in pixels (``null``, if the media file is not an image or video)
     */
    width: number;
    /**
     * height of the media in pixels (``null``, if the media file is not an image or video)
     */
    height: number;
    /**
     * media orientation, the value should be interpreted like the orientation value present in JPEG EXIF data
     * (``null``, if the media file is not an image or video)
     */
    orientation: number;
    /**
     * size of the media file in bytes
     */
    size: number;
    /**
     * ID of the posting linked to the media
     */
    postingId?: string | null;
    /**
     * list of media previews - downscaled versions of the media
     */
    previews?: MediaFilePreviewInfo[] | null;
    /**
     * the supported operations and the corresponding principals
     */
    operations?: PrivateMediaFileOperations | null;
}

export interface ProfileAttributes {
    /**
     * node owner's full name
     */
    fullName?: string | null;
    /**
     * node owner's gender
     */
    gender?: string | null;
    /**
     * node owner's E-mail address
     */
    email?: string | null;
    /**
     * node title
     */
    title?: string | null;
    /**
     * the source text of node owner's bio (arbitrary text)
     */
    bioSrc?: string | null;
    /**
     * format of the source text of node owner's bio, ``markdown`` by default; the list of available formats is
     * returned in ``PostingFeatures``
     */
    bioSrcFormat?: SourceFormat | null;
    /**
     * node owner's avatar ID
     */
    avatarId?: string | null;
    /**
     * list of fundraisers - methods of giving a donation to the node owner
     */
    fundraisers?: FundraiserInfo[] | null;
    /**
     * the operations and the corresponding principals
     */
    operations?: ProfileOperations | null;
}

export interface ProfileInfo {
    /**
     * node owner's full name
     */
    fullName?: string | null;
    /**
     * node owner's gender
     */
    gender?: string | null;
    /**
     * node owner's E-mail address
     */
    email?: string | null;
    /**
     * node title
     */
    title?: string | null;
    /**
     * the source text of node owner's bio (arbitrary text), may be absent if not requested
     */
    bioSrc?: string | null;
    /**
     * format of the source text of node owner's bio, ``markdown`` by default, may be absent if not requested; the list
     * of available formats is returned in ``PostingFeatures``
     */
    bioSrcFormat?: SourceFormat | null;
    /**
     * HTML representation of node owner's bio
     */
    bioHtml?: string | null;
    /**
     * node owner's avatar
     */
    avatar?: AvatarInfo | null;
    /**
     * list of fundraisers - methods of giving a donation to the node owner
     */
    fundraisers?: FundraiserInfo[] | null;
    /**
     * the supported operations and the corresponding principals
     */
    operations?: ProfileOperations | null;
}

export interface PublicMediaFileInfo {
    /**
     * ID of the media file
     */
    id: string;
    /**
     * virtual location of the media file, relative to the ``/media`` virtual page
     */
    path: string;
    /**
     * width of the media in pixels (``null``, if the media file is not an image or video)
     */
    width: number;
    /**
     * height of the media in pixels (``null``, if the media file is not an image or video)
     */
    height: number;
    /**
     * media orientation, the value should be interpreted like the orientation value present in JPEG EXIF data
     * (``null``, if the media file is not an image or video)
     */
    orientation: number;
    /**
     * size of the media file in bytes
     */
    size: number;
}

export interface PushRelayClientAttributes {
    /**
     * type of the relay
     */
    type: PushRelayType;
    /**
     * ID/token of the client
     */
    clientId: string;
    /**
     * language of the messages
     */
    lang?: string | null;
}

export interface ReactionAttributes {
    /**
     * ``true``, if the reaction is negative, ``false``, if positive
     */
    negative: boolean;
    /**
     * reaction code, usually interpreted by clients as emoji code point
     */
    emoji: number;
    /**
     * the operations and the corresponding principals
     */
    operations?: ReactionOperations | null;
}

export interface ReactionDescription {
    /**
     * reaction owner's node name
     */
    ownerName?: string | null;
    /**
     * reaction owner's full name
     */
    ownerFullName?: string | null;
    /**
     * reaction owner's gender
     */
    ownerGender?: string | null;
    /**
     * reaction owner's avatar
     */
    ownerAvatar?: AvatarDescription | null;
    /**
     * ``true``, if the reaction is negative, ``false``, if positive
     */
    negative: boolean;
    /**
     * reaction code, usually interpreted by clients as emoji code point
     */
    emoji: number;
    /**
     * the reaction owner signature (use ``Reaction`` fingerprint)
     */
    signature?: string | null;
    /**
     * signature version (i.e. fingerprint version)
     */
    signatureVersion?: number | null;
    /**
     * the operations and the corresponding principals
     */
    operations?: ReactionOperations | null;
}

export interface ReactionsFilter {
    /**
     * reaction owner's name
     */
    ownerName?: string | null;
    /**
     * list of IDs of postings
     */
    postings?: string[] | null;
}

export interface ReactionInfo {
    /**
     * reaction owner's node name
     */
    ownerName?: string | null;
    /**
     * reaction owner's full name
     */
    ownerFullName?: string | null;
    /**
     * reaction owner's gender
     */
    ownerGender?: string | null;
    /**
     * reaction owner's avatar
     */
    ownerAvatar?: AvatarImage | null;
    /**
     * ID of the posting
     */
    postingId?: string | null;
    /**
     * ID of the posting revision, if relevant
     */
    postingRevisionId?: string | null;
    /**
     * ID of the comment, if relevant
     */
    commentId?: string | null;
    /**
     * ID of the comment revision, if relevant
     */
    commentRevisionId?: string | null;
    /**
     * ``true``, if the reaction is negative, ``false``, if positive
     */
    negative?: boolean | null;
    /**
     * reaction code, usually interpreted by clients as emoji code point
     */
    emoji?: number | null;
    moment?: number | null;
    /**
     * reaction creation timestamp - the real time when the reaction was created
     */
    createdAt?: number | null;
    /**
     * if present, the reaction will be erased at this time
     */
    deadline?: number | null;
    /**
     * the reaction owner signature (use ``Reaction`` fingerprint)
     */
    signature?: string | null;
    /**
     * signature version (i.e. fingerprint version)
     */
    signatureVersion?: number | null;
    /**
     * the supported operations and the corresponding principals
     */
    operations?: ReactionOperations | null;
    /**
     * the supported operations and the corresponding principals as defined by the reaction's owner
     */
    ownerOperations?: ReactionOperations | null;
    /**
     * the operations and the corresponding principals that are overridden by the reaction's "senior": the posting's
     * owner in the case of reaction to a posting or the comment's owner in the case of reaction to a comment
     */
    seniorOperations?: ReactionOperations | null;
    /**
     * the operations and the corresponding principals that are overridden by the posting's owner ("major") in the case
     * of reaction to a comment; not set in the case of reaction to a posting
     */
    majorOperations?: ReactionOperations | null;
}

export interface ReactionsSliceInfo {
    /**
     * the slice contains all reactions before this moment, inclusive. May be the far future.
     */
    before: number;
    /**
     * the slice contains all reactions after this moment, exclusive. May be the far past.
     */
    after: number;
    /**
     * total number of reactions in the whole list
     */
    total: number;
    /**
     * the reactions
     */
    reactions: ReactionInfo[];
}

export interface ReactionTotalInfo {
    /**
     * reaction code, usually interpreted by clients as emoji code point
     */
    emoji: number;
    /**
     * total number of reactions with the given code
     */
    total?: number | null;
    /**
     * share the reactions with the given code stand from the total number of reactions (may be absent, if ``total`` is
     * present)
     */
    share?: number | null;
}

export interface ReactionTotalsFilter {
    /**
     * list of IDs of postings
     */
    postings: string[];
}

export interface ReactionTotalsInfo {
    /**
     * ID of the entry
     */
    entryId: string;
    /**
     * summary of positive reactions
     */
    positive: ReactionTotalInfo[];
    /**
     * summary of negative reactions
     */
    negative: ReactionTotalInfo[];
}

export interface ReactionOverride {
    /**
     * the supported operations and the corresponding principals
     */
    operations?: ReactionOperations | null;
    /**
     * the operations and the corresponding principals that are overridden by the reaction's "senior": the posting's
     * owner in the case of reaction to a posting or the comment's owner in the case of reaction to a comment
     */
    seniorOperations?: ReactionOperations | null;
    /**
     * the operations and the corresponding principals that are overridden by the posting's owner ("major") in the case
     * of reaction to a comment; not set in the case of reaction to a posting
     */
    majorOperations?: ReactionOperations | null;
}

export interface RegisteredNameSecret {
    name: string;
    /**
     * human-friendly mnemonic of the updating key
     */
    mnemonic?: string[] | null;
    /**
     * base64-encoded secret of the updating key
     */
    secret?: string | null;
}

export interface RemoteFeed {
    /**
     * name of the node
     */
    nodeName: string;
    /**
     * name of the feed on the node
     */
    feedName: string;
}

export interface RemoteMedia {
    /**
     * ID of the media file
     */
    id: string;
    /**
     * SHA-1 hash of the media file
     */
    hash?: string | null;
    /**
     * cryptographic digest of the media file
     */
    digest?: string | null;
}

export interface RemoteMediaInfo {
    /**
     * ID of the media file
     */
    id: string;
    /**
     * SHA-1 hash of the media file
     */
    hash?: string | null;
    /**
     * cryptographic digest of the media file
     */
    digest?: string | null;
}

export interface RemotePosting {
    /**
     * name of the node
     */
    nodeName: string;
    /**
     * ID of the posting on the node
     */
    postingId: string;
}

export interface RemotePostingOrNode {
    /**
     * name of the node
     */
    nodeName: string;
    /**
     * ID of the posting on the node
     */
    postingId?: string | null;
}

export interface RemotePostingVerificationInfo {
    /**
     * asynchronous operation ID
     */
    id: string;
    nodeName: string;
    postingId: string;
    revisionId?: string | null;
    /**
     * status of the operation
     */
    status?: VerificationStatus | null;
    /**
     * error code
     */
    errorCode?: string | null;
    /**
     * human-readable error message
     */
    errorMessage?: string | null;
}

export interface RemoteReactionVerificationInfo {
    /**
     * asynchronous operation ID
     */
    id: string;
    nodeName: string;
    postingId: string;
    /**
     * node name of the reaction's owner
     */
    reactionOwnerName: string;
    /**
     * status of the operation
     */
    status?: VerificationStatus | null;
    /**
     * error code
     */
    errorCode?: string | null;
    /**
     * human-readable error message
     */
    errorMessage?: string | null;
}

export interface RepliedTo {
    /**
     * ID of the comment
     */
    id: string;
    /**
     * ID of the comment revision
     */
    revisionId?: string | null;
    /**
     * node name of the comment's owner
     */
    name: string;
    /**
     * full name of the comment's owner
     */
    fullName?: string | null;
    /**
     * gender of the comment's owner
     */
    gender?: string | null;
    /**
     * avatar of the comment's owner
     */
    avatar?: AvatarImage | null;
    /**
     * heading of the comment
     */
    heading?: string | null;
    /**
     * cryptographic digest of the comment (use ``Comment`` fingerprint)
     */
    digest: string;
}

export interface Result {
    /**
     * error code
     */
    errorCode: string;
    /**
     * human-readable error message
     */
    message: string;
}

export interface SheriffMark {
    /**
     * name of the sheriff that added the mark
     */
    sheriffName: string;
}

export interface SearchNodeInfo {
    nodeName: string;
    /**
     * node owner's full name
     */
    fullName?: string | null;
    /**
     * node title
     */
    title?: string | null;
    /**
     * node owner's avatar
     */
    avatar?: AvatarImage | null;
    /**
     * social distance between the node and the client
     */
    distance: number;
}

export interface SearchBlockUpdate {
    nodeName: string;
    blockedOperation: BlockedOperation;
}

export interface SearchFriendUpdate {
    nodeName: string;
}

export interface SearchSubscriptionUpdate {
    nodeName: string;
    feedName: string;
}

export interface SettingInfo {
    /**
     * name of the setting
     */
    name: string;
    /**
     * value of the setting
     */
    value?: string | null;
}

export interface SettingMetaAttributes {
    /**
     * name of the setting
     */
    name: string;
    /**
     * default value of the setting (if absent or ``null``, the built-in default value will be used)
     */
    defaultValue?: string | null;
    /**
     * the setting should be privileged (if absent or ``null``, the built-in value of the flag will be used)
     */
    privileged?: boolean | null;
}

export interface SettingTypeModifiers {
    /**
     * preferred format of displaying the value\
     * (``int``)
     * 
     * * ``size`` - data size in bytes/kilobytes/megabytes etc.
     */
    format?: string | null;
    /**
     * (``int``, ``Duration``) minimal value
     */
    min?: string | null;
    /**
     * (``int``, ``Duration``) maximal value
     */
    max?: string | null;
    /**
     * (``string``) ``true``, if the value is a multiline text
     */
    multiline?: boolean | null;
    /**
     * (``Duration``) ``true``, if value ``never`` is allowed
     */
    never?: boolean | null;
    /**
     * (``Duration``) ``true``, if value ``always`` is allowed
     */
    always?: boolean | null;
    /**
     * (``Principal``) list of allowed principals
     */
    principals?: PrincipalFlag[] | null;
}

export interface SheriffComplaintDecisionText {
    /**
     * ``true``, if the complaints in the group are to be rejected, ``false`` otherwise
     */
    reject: boolean;
    /**
     * the decision
     */
    decisionCode?: SheriffOrderReason | null;
    /**
     * detailed explanation of the decision in user-readable form
     */
    decisionDetails?: string | null;
    /**
     * ``true``, if the complaints' owners' names are not to be published, ``false`` otherwise
     */
    anonymous?: boolean | null;
}

export interface SheriffComplaintGroupInfo {
    id: string;
    /**
     * name of the node the complaints are related to
     */
    remoteNodeName: string;
    /**
     * full name of the node the complaints are related to
     */
    remoteNodeFullName?: string | null;
    /**
     * name of the feed the complaints are related to
     */
    remoteFeedName: string;
    /**
     * ID of the posting the complaints are related to
     */
    remotePostingId?: string | null;
    /**
     * ID of the posting's revision the complaints are related to
     */
    remotePostingRevisionId?: string | null;
    /**
     * posting owner's node name
     */
    remotePostingOwnerName?: string | null;
    /**
     * posting owner's full name
     */
    remotePostingOwnerFullName?: string | null;
    /**
     * posting owner's gender
     */
    remotePostingOwnerGender?: string | null;
    /**
     * heading of the posting
     */
    remotePostingHeading?: string | null;
    /**
     * ID of the comment the complaints are related to
     */
    remoteCommentId?: string | null;
    /**
     * ID of the comment's revision the complaints are related to
     */
    remoteCommentRevisionId?: string | null;
    /**
     * comment owner's node name
     */
    remoteCommentOwnerName?: string | null;
    /**
     * comment owner's full name
     */
    remoteCommentOwnerFullName?: string | null;
    /**
     * comment owner's gender
     */
    remoteCommentOwnerGender?: string | null;
    /**
     * heading of the comment
     */
    remoteCommentHeading?: string | null;
    /**
     * the group of complaints creation timestamp - the real time when the group was created
     */
    createdAt: number;
    /**
     * moment of the group of complaints
     */
    moment: number;
    /**
     * status of the group of complaints
     */
    status: SheriffComplaintStatus;
    /**
     * sheriff's decision
     */
    decisionCode?: SheriffOrderReason | null;
    /**
     * detailed explanation of sheriff's decision in user-readable form
     */
    decisionDetails?: string | null;
    /**
     * sheriff's decision timestamp - the real time when the decision was made
     */
    decidedAt?: number | null;
    /**
     * ``true``, if the complaints' owners' names are not published, ``false`` otherwise
     */
    anonymous?: boolean | null;
}

export interface SheriffComplaintGroupsSliceInfo {
    /**
     * the slice contains all groups before this moment, inclusive. May be the far future.
     */
    before: number;
    /**
     * the slice contains all groups after this moment, exclusive. May be the far past.
     */
    after: number;
    /**
     * the groups
     */
    groups: SheriffComplaintGroupInfo[];
    /**
     * total number of groups
     */
    total: number;
    /**
     * number of groups before this slice till the far past
     */
    totalInPast: number;
    /**
     * number of groups after this slice till the far future
     */
    totalInFuture: number;
}

export interface SheriffComplaintInfo {
    id: string;
    /**
     * complaint owner's node name
     */
    ownerName: string;
    /**
     * complaint owner's full name
     */
    ownerFullName?: string | null;
    /**
     * complaint owner's gender
     */
    ownerGender?: string | null;
    /**
     * the group of complaints this complaint belongs to
     */
    group?: SheriffComplaintGroupInfo | null;
    /**
     * reason of the complaint
     */
    reasonCode: SheriffOrderReason;
    /**
     * detailed explanation of reason of the complaint in user-readable form
     */
    reasonDetails?: string | null;
    /**
     * ``true``, if the complaint's owner wants his name not to be published, ``false`` otherwise
     */
    anonymousRequested?: boolean | null;
    /**
     * complaint creation timestamp - the real time when the order was created
     */
    createdAt: number;
}

export interface SheriffComplaintText {
    /**
     * complaint owner's full name
     */
    ownerFullName?: string | null;
    /**
     * complaint owner's gender
     */
    ownerGender?: string | null;
    /**
     * name of the node the complaint is related to
     */
    nodeName: string;
    /**
     * full name of the node the complaint is related to
     */
    fullName?: string | null;
    /**
     * name of the feed the complaint is related to
     */
    feedName: string;
    /**
     * ID of the posting the complaint is related to
     */
    postingId?: string | null;
    /**
     * posting owner's node name
     */
    postingOwnerName?: string | null;
    /**
     * posting owner's full name
     */
    postingOwnerFullName?: string | null;
    /**
     * posting owner's gender
     */
    postingOwnerGender?: string | null;
    /**
     * heading of the posting
     */
    postingHeading?: string | null;
    /**
     * ID of the comment the complaint is related to
     */
    commentId?: string | null;
    /**
     * comment owner's node name
     */
    commentOwnerName?: string | null;
    /**
     * comment owner's full name
     */
    commentOwnerFullName?: string | null;
    /**
     * comment owner's gender
     */
    commentOwnerGender?: string | null;
    /**
     * heading of the comment
     */
    commentHeading?: string | null;
    /**
     * reason of the complaint
     */
    reasonCode?: SheriffOrderReason | null;
    /**
     * detailed explanation of reason of the complaint in user-readable form
     */
    reasonDetails?: string | null;
    /**
     * ``true``, if the complaint's owner wants his name not to be published, ``false`` otherwise
     */
    anonymous?: boolean | null;
}

export interface SheriffOrderAttributes {
    /**
     * ``true``, if the order is to cancel the previous order of this type, ``false`` otherwise
     */
    delete?: boolean | null;
    /**
     * name of the feed the order is related to
     */
    feedName: string;
    /**
     * ID of the posting the order is related to
     */
    postingId?: string | null;
    /**
     * ID of the comment the order is related to
     */
    commentId?: string | null;
    /**
     * category of the order
     */
    category: SheriffOrderCategory;
    /**
     * reason of the order
     */
    reasonCode?: SheriffOrderReason | null;
    /**
     * detailed explanation of reason of the order in user-readable form
     */
    reasonDetails?: string | null;
}

export interface SheriffOrderDetails {
    id: string;
    /**
     * ``true``, if the order is to cancel the previous order of this type, ``false`` otherwise
     */
    delete?: boolean | null;
    /**
     * node name of the sheriff
     */
    sheriffName: string;
    /**
     * sheriff's avatar
     */
    sheriffAvatar?: AvatarDescription | null;
    /**
     * name of the feed the order is related to
     */
    feedName: string;
    /**
     * ID of the posting the order is related to
     */
    postingId?: string | null;
    /**
     * ID of the comment the order is related to
     */
    commentId?: string | null;
    /**
     * category of the order
     */
    category: SheriffOrderCategory;
    /**
     * reason of the order
     */
    reasonCode?: SheriffOrderReason | null;
    /**
     * detailed explanation of reason of the order in user-readable form
     */
    reasonDetails?: string | null;
    /**
     * order creation timestamp - the real time when the order was created
     */
    createdAt: number;
    /**
     * the sheriff's signature (use ``SheriffOrder`` fingerprint)
     */
    signature: string;
    /**
     * signature version (i.e. fingerprint version)
     */
    signatureVersion: number;
}

export interface SheriffOrderInfo {
    id: string;
    /**
     * ``true``, if the order is to cancel the previous order of this type, ``false`` otherwise
     */
    delete?: boolean | null;
    /**
     * node name of the sheriff
     */
    sheriffName: string;
    /**
     * name of the node the order was sent to
     */
    nodeName: string;
    /**
     * full name of the node the order was sent to
     */
    nodeFullName?: string | null;
    /**
     * name of the feed the order is related to
     */
    feedName: string;
    /**
     * ID of the posting the order is related to
     */
    postingId?: string | null;
    /**
     * ID of the posting's revision the order is related to
     */
    postingRevisionId?: string | null;
    /**
     * posting owner's node name
     */
    postingOwnerName?: string | null;
    /**
     * posting owner's full name
     */
    postingOwnerFullName?: string | null;
    /**
     * posting owner's gender
     */
    postingOwnerGender?: string | null;
    /**
     * heading of the posting
     */
    postingHeading?: string | null;
    /**
     * ID of the comment the order is related to
     */
    commentId?: string | null;
    /**
     * ID of the comment's revision the order is related to
     */
    commentRevisionId?: string | null;
    /**
     * comment owner's node name
     */
    commentOwnerName?: string | null;
    /**
     * comment owner's full name
     */
    commentOwnerFullName?: string | null;
    /**
     * comment owner's gender
     */
    commentOwnerGender?: string | null;
    /**
     * heading of the comment
     */
    commentHeading?: string | null;
    /**
     * category of the order
     */
    category: SheriffOrderCategory;
    /**
     * reason of the order
     */
    reasonCode?: SheriffOrderReason | null;
    /**
     * detailed explanation of reason of the order in user-readable form
     */
    reasonDetails?: string | null;
    /**
     * order creation timestamp - the real time when the order was created
     */
    createdAt: number;
    /**
     * the sheriff's signature (use ``SheriffOrder`` fingerprint)
     */
    signature: string;
    /**
     * signature version (i.e. fingerprint version)
     */
    signatureVersion: number;
    /**
     * ID of the groups of complaints that were the cause of the order
     */
    complaintGroupId?: string | null;
}

export interface StoryAttributes {
    /**
     * name of the feed
     */
    feedName?: string | null;
    /**
     * story publication timestamp - the time the story must be published under in the feed
     */
    publishAt?: number | null;
    /**
     * ``true``, if the story is pinned (should appear before any non-pinned story in the feed), ``false`` otherwise
     */
    pinned?: boolean | null;
    /**
     * value of the ``viewed`` flag (``null``, if the flag is not changed)
     */
    viewed?: boolean | null;
    /**
     * value of the ``read`` flag (``null``, if the flag is not changed)
     */
    read?: boolean | null;
    /**
     * value of the ``satisfied`` flag (``null``, if the flag is not changed)
     */
    satisfied?: boolean | null;
}

export interface StorySummaryBlocked {
    /**
     * list of the operations blocked
     */
    operations: BlockedOperation[];
    /**
     * the period of blocking in seconds
     */
    period?: number | null;
}

export interface StorySummaryFriendGroup {
    /**
     * ID of the group of friends
     */
    id?: string | null;
    /**
     * title of the group of friends
     */
    title?: string | null;
}

export interface StorySummaryEntry {
    /**
     * entry owner's name
     */
    ownerName?: string | null;
    /**
     * entry owner's full name
     */
    ownerFullName?: string | null;
    /**
     * entry owner's gender
     */
    ownerGender?: string | null;
    /**
     * entry heading
     */
    heading?: string | null;
    /**
     * list of sheriffs supervising the entry
     */
    sheriffs?: string[] | null;
    /**
     * list of sheriff marks on the entry
     */
    sheriffMarks?: SheriffMark[] | null;
}

export interface StorySummaryNode {
    /**
     * node owner's name
     */
    ownerName?: string | null;
    /**
     * node owner's full name
     */
    ownerFullName?: string | null;
    /**
     * node owner's gender
     */
    ownerGender?: string | null;
}

export interface StorySummaryPageClicks {
    /**
     * page heading, ``null`` for the blog itself
     */
    heading?: string | null;
    /**
     * page URL
     */
    href: string;
    /**
     * number of clicks on the page
     */
    clicks: number;
}

export interface StorySummaryReaction {
    /**
     * reaction owner's name
     */
    ownerName?: string | null;
    /**
     * reaction owner's full name
     */
    ownerFullName?: string | null;
    /**
     * reaction owner's gender
     */
    ownerGender?: string | null;
    /**
     * reaction code
     */
    emoji?: number | null;
}

export interface StorySummarySheriff {
    /**
     * name of the sheriff
     */
    sheriffName: string;
    /**
     * ID of the sheriff's order
     */
    orderId?: string | null;
    /**
     * ID of the complaint, if any
     */
    complaintId?: string | null;
}

export interface SubscriberDescription {
    /**
     * subscription type
     */
    type: SubscriptionType;
    /**
     * feed name, if the subscription type requires one
     */
    feedName?: string | null;
    /**
     * posting ID, if the subscription type requires one
     */
    postingId?: string | null;
    /**
     * timestamp of the latest known state of the object
     */
    lastUpdatedAt?: number | null;
    /**
     * the operations and the corresponding principals
     */
    operations?: SubscriberOperations | null;
}

export interface SubscriberInfo {
    /**
     * subscriber ID
     */
    id: string;
    /**
     * subscription type
     */
    type: SubscriptionType;
    /**
     * feed name, if the subscription type requires one
     */
    feedName?: string | null;
    /**
     * posting ID, if the subscription type requires one
     */
    postingId?: string | null;
    /**
     * name of the subscribed node
     */
    nodeName: string;
    /**
     * information known about the subscribed node
     */
    contact?: ContactInfo | null;
    /**
     * subscription creation timestamp
     */
    createdAt: number;
    /**
     * the supported operations and the corresponding principals
     */
    operations?: SubscriberOperations | null;
    /**
     * the supported operations and the corresponding principals as defined by the subscriber
     */
    ownerOperations?: SubscriberOperations | null;
    /**
     * the operations and the corresponding principals that are overridden by the node administrator
     */
    adminOperations?: SubscriberOperations | null;
}

export interface SubscriberOverride {
    /**
     * the supported operations and the corresponding principals
     */
    operations?: SubscriberOperations | null;
    /**
     * the operations and the corresponding principals that are overridden by the node administrator
     */
    adminOperations?: SubscriberOperations | null;
}

export interface SubscriptionDescription {
    /**
     * subscription type
     */
    type: SubscriptionType;
    /**
     * the name of the feed on this node that receives notifications
     */
    feedName?: string | null;
    /**
     * the name of the node this node is subscribed to
     */
    remoteNodeName: string;
    /**
     * the name of the feed on the remote node, if the subscription type requires one
     */
    remoteFeedName?: string | null;
    /**
     * posting ID on the remote node, if the subscription type requires one
     */
    remotePostingId?: string | null;
    /**
     * subscription reason
     */
    reason?: SubscriptionReason | null;
    /**
     * the operations and the corresponding principals
     */
    operations?: SubscriptionOperations | null;
}

export interface SubscriptionFilter {
    /**
     * subscription type
     */
    type?: SubscriptionType | null;
    /**
     * list of feeds
     */
    feeds?: RemoteFeed[] | null;
    /**
     * list of postings
     */
    postings?: RemotePosting[] | null;
}

export interface SubscriptionInfo {
    /**
     * subscription ID
     */
    id: string;
    /**
     * subscription type
     */
    type: SubscriptionType;
    /**
     * feed name on this node that receives notifications
     */
    feedName?: string | null;
    /**
     * name of the node this node is subscribed to
     */
    remoteNodeName: string;
    /**
     * information known about the remote node
     */
    contact?: ContactInfo | null;
    /**
     * feed name on the remote node, if the subscription type requires one
     */
    remoteFeedName?: string | null;
    /**
     * posting ID on the remote node, if the subscription type requires one
     */
    remotePostingId?: string | null;
    /**
     * subscription creation timestamp
     */
    createdAt: number;
    /**
     * subscription reason
     */
    reason: SubscriptionReason;
    /**
     * the supported operations and the corresponding principals
     */
    operations?: SubscriptionOperations | null;
}

export interface SubscriptionOverride {
    /**
     * the supported operations and the corresponding principals
     */
    operations?: SubscriptionOperations | null;
}

export interface TokenAttributes {
    login: string;
    password: string;
    /**
     * a bit mask describing which permissions should be granted to the token; if not set, all permissions of the
     * administrator are granted.
     */
    permissions?: Scope[] | null;
    /**
     * a user-readable name of the token
     */
    name?: string | null;
}

export interface TokenInfo {
    /**
     * token ID (this is not the token, just an ID)
     */
    id: string;
    /**
     * the token
     */
    token: string;
    /**
     * a user-readable name of the token
     */
    name?: string | null;
    /**
     * the list of permissions granted to the token
     */
    permissions: Scope[];
    /**
     * a plugin the token belongs to; if set, only this plugin may use the token
     */
    pluginName?: string | null;
    /**
     * token creation timestamp
     */
    createdAt: number;
    /**
     * timestamp of the end of the token's life
     */
    deadline?: number | null;
    /**
     * timestamp of the last time the token was used
     */
    lastUsedAt?: number | null;
    /**
     * name of the browser used by the latest user of the token
     */
    lastUsedBrowser?: string | null;
    /**
     * IP address of the latest user of the token
     */
    lastUsedIp?: string | null;
}

export interface TokenUpdate {
    /**
     * a user-readable name of the token
     */
    name?: string | null;
    /**
     * a bit mask describing which permissions should be granted to the token; if not set, the token permissions are
     * left untouched
     */
    permissions?: Scope[] | null;
}

export interface UpdateInfo {
    /**
     * ``true``, if the update is important, ``false`` (the default) otherwise
     */
    important?: boolean | null;
    /**
     * description of the update
     */
    description?: string | null;
}

export interface UserListInfo {
    /**
     * name of the user list
     */
    name: string;
    /**
     * number of items in the user list
     */
    total: number;
}

export interface UserListItemAttributes {
    /**
     * the name of the node
     */
    nodeName: string;
}

export interface UserListItemInfo {
    /**
     * the name of the node
     */
    nodeName: string;
    /**
     * the node addition timestamp - the real time when the node was added to the list
     */
    createdAt: number;
    /**
     * moment of the node
     */
    moment: number;
}

export interface UserListSliceInfo {
    /**
     * the name of the list
     */
    listName: string;
    /**
     * the slice contains all items before this moment, inclusive. May be the far future.
     */
    before: number;
    /**
     * the slice contains all items after this moment, exclusive. May be the far past.
     */
    after: number;
    /**
     * the items
     */
    items: UserListItemInfo[];
    /**
     * total number of items
     */
    total: number;
    /**
     * number of items before this slice till the far past
     */
    totalInPast: number;
    /**
     * number of items after this slice till the far future
     */
    totalInFuture: number;
}

export interface WhoAmI {
    nodeName?: string | null;
    /**
     * ``true`` if node name is about to be changed
     */
    nodeNameChanging?: boolean | null;
    /**
     * node owner's full name
     */
    fullName?: string | null;
    /**
     * node owner's gender
     */
    gender?: string | null;
    /**
     * node title
     */
    title?: string | null;
    /**
     * node owner's avatar
     */
    avatar?: AvatarImage | null;
    /**
     * ``true`` if the node is frozen due to inactivity, ``false`` (the default) otherwise
     */
    frozen?: boolean | null;
}

export interface ActivityReactionFilter {
    /**
     * include only reactions to remote postings from this list
     */
    postings?: RemotePosting[] | null;
}

export interface ActivityReactionInfo {
    /**
     * name of the remote node
     */
    remoteNodeName: string;
    /**
     * full name of the remote node
     */
    remoteFullName?: string | null;
    /**
     * avatar of the remote node
     */
    remoteAvatar?: AvatarImage | null;
    /**
     * ID of the posting on the remote node
     */
    remotePostingId: string;
    /**
     * ``true``, if the reaction is negative, ``false``, if positive
     */
    negative: boolean;
    /**
     * reaction code, usually interpreted by clients as emoji code point
     */
    emoji: number;
    /**
     * reaction creation timestamp - the real time when the reaction was created
     */
    createdAt: number;
}

export interface BlockedByUserFilter {
    /**
     * operations that are blocked
     */
    blockedOperations?: BlockedOperation[] | null;
    /**
     * the postings or whole nodes, where the node is blocked
     */
    postings?: RemotePostingOrNode[] | null;
    /**
     * if set to ``true``, only the blockings that strictly fit the criteria are returned; otherwise global blockings
     * are returned even if the search is limited to a particular posting
     */
    strict?: boolean | null;
}

export interface BlockedByUserInfo {
    id: string;
    /**
     * operation that is blocked
     */
    blockedOperation: BlockedOperation;
    /**
     * information known about the blocking node
     */
    contact?: ContactInfo | null;
    /**
     * name of the blocking node
     */
    nodeName: string;
    /**
     * ID of the posting, where the node is blocked; ``null`` or absent, if the node is blocked globally
     */
    postingId?: string | null;
    /**
     * blocking timestamp - the real time when the node was blocked
     */
    createdAt: number;
    /**
     * unblocking timestamp - the real time when the node will be unblocked; ``null`` or absent, if the node is blocked
     * permanently
     */
    deadline?: number | null;
    /**
     * reason of blocking
     */
    reason?: string | null;
}

export interface BlockedUserInfo {
    id: string;
    /**
     * operation that is blocked
     */
    blockedOperation: BlockedOperation;
    /**
     * name of the blocked node
     */
    nodeName: string;
    /**
     * information known about the blocked node
     */
    contact?: ContactInfo | null;
    /**
     * ID of the local entry, where the node is blocked; ``null`` or absent, if the node is blocked globally
     */
    entryId?: string | null;
    /**
     * node name of the remote posting, where the node is blocked; ``null`` or absent, if the node is blocked globally
     */
    entryNodeName?: string | null;
    /**
     * ID of the remote posting, where the node is blocked; ``null`` or absent, if the node is blocked globally
     */
    entryPostingId?: string | null;
    /**
     * blocking timestamp - the real time when the node was blocked
     */
    createdAt: number;
    /**
     * unblocking timestamp - the real time when the node will be unblocked; ``null`` or absent, if the node is blocked
     * permanently
     */
    deadline?: number | null;
    /**
     * source text of the reason of blocking
     */
    reasonSrc?: string | null;
    /**
     * format of the source text of the reason of blocking, the list of available formats is returned in
     * ``PostingFeatures``
     */
    reasonSrcFormat?: SourceFormat | null;
    /**
     * reason of blocking
     */
    reason?: string | null;
}

export interface Body {
    /**
     * the subject (plain text)
     */
    subject?: string | null;
    /**
     * the text (HTML)
     */
    text?: string | null;
    /**
     * link previews
     */
    linkPreviews?: LinkPreview[] | null;
}

export interface CommentRevisionInfoBase<B> {
    id: string;
    /**
     * ID of the posting revision that was actual at the moment of creation of this comment revision
     */
    postingRevisionId: string;
    /**
     * preview of the revision's body, a string representation of a JSON structure
     */
    bodyPreview?: B | null;
    /**
     * hash of the source text of the revision
     */
    bodySrcHash: string;
    /**
     * format of the source text of the revision, the list of available formats is returned in ``PostingFeatures``
     */
    bodySrcFormat?: SourceFormat | null;
    /**
     * body of the revision, a string representation of a JSON structure
     */
    body: B;
    /**
     * format of the body of the revision, may have any value meaningful for the client
     */
    bodyFormat?: BodyFormat | null;
    /**
     * heading of the revision
     */
    heading: string;
    /**
     * revision creation timestamp - the real time when the revision was created
     */
    createdAt: number;
    /**
     * revision deletion timestamp - the time when the revision was deleted
     */
    deletedAt?: number | null;
    /**
     * revision deletion timestamp - the time when the revision will be deleted and the previous revision will take its
     * place
     */
    deadline?: number | null;
    /**
     * cryptographic digest of the revision (use ``Comment`` fingerprint)
     */
    digest?: string | null;
    /**
     * the comment's owner signature (use ``Comment`` fingerprint)
     */
    signature?: string | null;
    /**
     * signature version (i.e. fingerprint version)
     */
    signatureVersion?: number | null;
    /**
     * details of the existing reaction (if any) of the client's owner
     */
    clientReaction?: ClientReactionInfo | null;
    /**
     * summary of reactions to the revision
     */
    reactions?: ReactionTotalsInfo | null;
}

export type EncodedCommentRevisionInfo = CommentRevisionInfoBase<string>;
export type CommentRevisionInfo = CommentRevisionInfoBase<Body>;

export interface CommentSourceText {
    /**
     * avatar of the comment's owner
     */
    ownerAvatar?: AvatarDescription | null;
    /**
     * the source text of the comment, a string representation of a JSON structure
     */
    bodySrc?: Body | string | null;
    /**
     * format of the source text of the comment, ``plain-text`` by default; the list of available formats is returned
     * in ``PostingFeatures``
     */
    bodySrcFormat?: SourceFormat | null;
    /**
     * array of IDs and digests of private media to be attached to the comment
     */
    media?: MediaWithDigest[] | null;
    /**
     * types of reactions that the comment accepts
     */
    acceptedReactions?: AcceptedReactions | null;
    /**
     * ID of the comment this comment is replying to
     */
    repliedToId?: string | null;
    /**
     * the operations and the corresponding principals
     */
    operations?: CommentOperations | null;
    /**
     * the operations and the corresponding principals that are overridden in reactions to the comment
     */
    reactionOperations?: ReactionOperations | null;
    /**
     * the operations and the corresponding principals that are overridden by the posting's owner ("senior"); only the
     * senior may set this
     */
    seniorOperations?: CommentOperations | null;
}

export interface CommentText {
    /**
     * node name of the comment's owner
     */
    ownerName?: string | null;
    /**
     * full name of the comment's owner
     */
    ownerFullName?: string | null;
    /**
     * gender of the comment's owner
     */
    ownerGender?: string | null;
    /**
     * avatar of the comment's owner
     */
    ownerAvatar?: AvatarDescription | null;
    /**
     * preview of the comment's body, a string representation of a JSON structure
     */
    bodyPreview?: Body | string | null;
    /**
     * the source text of the comment, a string representation of a JSON structure
     */
    bodySrc?: Body | string | null;
    /**
     * format of the source text of the comment, ``plain-text`` by default; the list of available formats is returned
     * in ``PostingFeatures``
     */
    bodySrcFormat?: SourceFormat | null;
    /**
     * body of the comment, a string representation of a JSON structure
     */
    body?: Body | string | null;
    /**
     * format of the body of the comment, may have any value meaningful for the client
     */
    bodyFormat?: BodyFormat | null;
    /**
     * array of IDs of private media to be attached to the comment
     */
    media?: string[] | null;
    /**
     * comment creation timestamp - the real time when the comment was created
     */
    createdAt?: number | null;
    /**
     * types of reactions that the comment accepts
     */
    acceptedReactions?: AcceptedReactions | null;
    /**
     * ID of the comment this comment is replying to
     */
    repliedToId?: string | null;
    /**
     * the comment's owner signature (use ``Comment`` fingerprint)
     */
    signature?: string | null;
    /**
     * signature version (i.e. fingerprint version)
     */
    signatureVersion?: number | null;
    /**
     * the operations and the corresponding principals
     */
    operations?: CommentOperations | null;
    /**
     * the operations and the corresponding principals that are overridden in reactions to the comment
     */
    reactionOperations?: ReactionOperations | null;
    /**
     * the operations and the corresponding principals that are overridden by the posting's owner ("senior"); only the
     * senior may set this
     */
    seniorOperations?: CommentOperations | null;
}

export interface DraftText {
    /**
     * type of the draft
     */
    draftType: DraftType;
    /**
     * name of the node the draft is related to
     */
    receiverName: string;
    /**
     * ID of the posting, mandatory for all types, except ``new-posting``
     */
    receiverPostingId?: string | null;
    /**
     * ID of the comment, mandatory for ``comment-update`` type
     */
    receiverCommentId?: string | null;
    /**
     * ID of the comment replied to
     */
    repliedToId?: string | null;
    /**
     * full name of the posting's/comment's owner
     */
    ownerFullName?: string | null;
    /**
     * avatar of the posting's/comment's owner
     */
    ownerAvatar?: AvatarDescription | null;
    /**
     * types of reactions that the posting accepts
     */
    acceptedReactions?: AcceptedReactions | null;
    /**
     * the source text of the draft, a string representation of a JSON structure
     */
    bodySrc?: Body | string | null;
    /**
     * format of the source text of the draft, ``plain-text`` by default; the list of available formats is returned in
     * ``PostingFeatures``
     */
    bodySrcFormat?: SourceFormat | null;
    /**
     * list of the media attached to the draft, the media may be located on another node
     */
    media?: RemoteMedia[] | null;
    /**
     * story publication timestamp - the time the story must be published under in the feed
     */
    publishAt?: number | null;
    /**
     * description of the update
     */
    updateInfo?: UpdateInfo | null;
    /**
     * draft of the list of operations and the corresponding principals
     */
    operations?: PostingOperations | null;
    /**
     * draft of the list of operations and the corresponding principals that are overridden in the posting's comments
     */
    commentOperations?: CommentOperations | null;
}

export interface Features {
    /**
     * features of a posting
     */
    posting: PostingFeatures;
    /**
     * list of names of plugins enabled for the node
     */
    plugins?: string[] | null;
    /**
     * width of the feed in pixels
     */
    feedWidth: number;
    /**
     * features of groups of friends
     */
    friendGroups?: FriendGroupsFeatures | null;
    /**
     * list of requests to the node owner that are accepted by the node
     */
    ask?: AskSubject[] | null;
    /**
     * ``true``, if the node is subscribed to the client, ``false`` otherwise
     */
    subscribed?: boolean | null;
}

export interface FeedInfo {
    /**
     * name of the feed
     */
    feedName: string;
    /**
     * title of the feed
     */
    title?: string | null;
    /**
     * total number of stories in the feed
     */
    total: number;
    /**
     * creation timestamp of the earliest story in the feed
     */
    firstCreatedAt?: number | null;
    /**
     * creation timestamp of the latest story in the feed
     */
    lastCreatedAt?: number | null;
    /**
     * the supported operations and the corresponding principals
     */
    operations?: FeedOperations | null;
    /**
     * list of sheriffs supervising the feed
     */
    sheriffs?: string[] | null;
    /**
     * list of sheriff marks on the feed
     */
    sheriffMarks?: SheriffMark[] | null;
}

export interface FriendDescription {
    /**
     * name of the node
     */
    nodeName: string;
    /**
     * groups of friends the node is to be included into
     */
    groups?: FriendGroupAssignment[] | null;
}

export interface MediaAttachment {
    /**
     * details of the attached media, may be absent if the media is not located on the node
     */
    media?: PrivateMediaFileInfo | null;
    /**
     * details of the media, if it is located on another node
     */
    remoteMedia?: RemoteMediaInfo | null;
    /**
     * ``true`` if the media is used in the body of the posting/comment, ``false`` otherwise
     */
    embedded: boolean;
}

export interface PostingInfoBase<B> {
    id: string;
    /**
     * ID of the current revision of the posting
     */
    revisionId: string;
    /**
     * ID of the current revision of the original posting (for cached copies of remote postings only)
     */
    receiverRevisionId?: string | null;
    /**
     * total number of revisions the posting has
     */
    totalRevisions: number;
    /**
     * name of the node where the posting was published (for cached copies of remote postings only)
     */
    receiverName?: string | null;
    /**
     * full name of the node where the posting was published (for cached copies of remote postings only)
     */
    receiverFullName?: string | null;
    /**
     * gender of the node where the posting was published (for cached copies of remote postings only)
     */
    receiverGender?: string | null;
    /**
     * avatar of the node where the posting was published (for cached copies of remote postings only)
     */
    receiverAvatar?: AvatarImage | null;
    /**
     * ID of the original posting (for cached copies of remote postings only)
     */
    receiverPostingId?: string | null;
    /**
     * ID of the media the posting is linked to, if any
     */
    parentMediaId?: string | null;
    /**
     * node name of the posting's owner
     */
    ownerName: string;
    /**
     * full name of the posting's owner
     */
    ownerFullName?: string | null;
    /**
     * gender of the posting's owner
     */
    ownerGender?: string | null;
    /**
     * avatar of the posting's owner
     */
    ownerAvatar?: AvatarImage | null;
    /**
     * preview of the posting's body, a string representation of a JSON structure
     */
    bodyPreview?: B | null;
    /**
     * the source text of the posting, a string representation of a JSON structure, may be absent if not requested
     */
    bodySrc?: B | null;
    /**
     * hash of the source text of the posting
     */
    bodySrcHash: string;
    /**
     * format of the source text of the posting, the list of available formats is returned in ``PostingFeatures``
     */
    bodySrcFormat?: SourceFormat | null;
    /**
     * body of the posting, a string representation of a JSON structure
     */
    body: B;
    /**
     * format of the body of the posting, may have any value meaningful for the client
     */
    bodyFormat?: BodyFormat | null;
    /**
     * list of the media attached to the posting
     */
    media?: MediaAttachment[] | null;
    /**
     * heading of the posting
     */
    heading: string;
    /**
     * description of the latest update
     */
    updateInfo?: UpdateInfo | null;
    /**
     * posting creation timestamp - the real time when the posting was created
     */
    createdAt: number;
    /**
     * posting editing timestamp - the last time the posting was updated
     */
    editedAt?: number | null;
    /**
     * posting deletion timestamp - the time when the posting was deleted
     */
    deletedAt?: number | null;
    /**
     * original posting creation timestamp (for cached copies of remote postings only)
     */
    receiverCreatedAt?: number | null;
    /**
     * original posting editing timestamp (for cached copies of remote postings only)
     */
    receiverEditedAt?: number | null;
    /**
     * original posting deletion timestamp (for cached copies of remote postings only)
     */
    receiverDeletedAt?: number | null;
    /**
     * creation timestamp of the current revision of the posting
     */
    revisionCreatedAt: number;
    /**
     * creation timestamp of the current revision of the original posting (for cached copies of remote postings only)
     */
    receiverRevisionCreatedAt?: number | null;
    /**
     * posting purging timestamp - the time when the deleted posting will be purged from the database
     */
    deadline?: number | null;
    /**
     * cryptographic digest of the posting (use ``Posting`` fingerprint)
     */
    digest?: string | null;
    /**
     * the posting's owner signature (use ``Posting`` fingerprint)
     */
    signature?: string | null;
    /**
     * signature version (i.e. fingerprint version)
     */
    signatureVersion?: number | null;
    /**
     * array of references to the posting from stories in feeds
     */
    feedReferences?: FeedReference[] | null;
    /**
     * instants related to the posting that are blocked (for admin only)
     */
    blockedInstants?: BlockedPostingInstantInfo[] | null;
    /**
     * the supported operations and the corresponding principals
     */
    operations?: PostingOperations | null;
    /**
     * the supported operations for the original posting and the corresponding principals (for cached copies of remote
     * postings only)
     */
    receiverOperations?: PostingOperations | null;
    /**
     * the operations and the corresponding principals that are overridden in the posting's comments
     */
    commentOperations?: CommentOperations | null;
    /**
     * the operations and the corresponding principals that are overridden in reactions to the posting
     */
    reactionOperations?: ReactionOperations | null;
    /**
     * the operations and the corresponding principals that are overridden in reactions to the posting's comments
     */
    commentReactionOperations?: ReactionOperations | null;
    /**
     * operations on the posting that are blocked for the client
     */
    blockedOperations?: BlockedEntryOperation[] | null;
    /**
     * operations on the posting's comments that are blocked for the client
     */
    blockedCommentOperations?: BlockedEntryOperation[] | null;
    /**
     * list of sheriffs supervising the posting
     */
    sheriffs?: string[] | null;
    /**
     * list of sheriff marks on the posting
     */
    sheriffMarks?: SheriffMark[] | null;
    /**
     * types of reactions that the posting accepts
     */
    acceptedReactions?: AcceptedReactions | null;
    /**
     * details of the existing reaction (if any) of the client's owner
     */
    clientReaction?: ClientReactionInfo | null;
    /**
     * reactions summary of the posting
     */
    reactions?: ReactionTotalsInfo | null;
    /**
     * details of the sources the posting was received from (for cached copies of remote postings only)
     */
    sources?: PostingSourceInfo[] | null;
    /**
     * total number of comments to the posting
     */
    totalComments?: number | null;
}

export type EncodedPostingInfo = PostingInfoBase<string>;
export type PostingInfo = PostingInfoBase<Body>;

export interface PostingRevisionInfoBase<B> {
    id: string;
    /**
     * ID of the original revision (for cached copies of remote postings only)
     */
    receiverId?: string | null;
    /**
     * preview of the revision's body, a string representation of a JSON structure
     */
    bodyPreview?: B | null;
    /**
     * hash of the source text of the revision
     */
    bodySrcHash: string;
    /**
     * format of the source text of the revision, the list of available formats is returned in ``PostingFeatures``
     */
    bodySrcFormat?: SourceFormat | null;
    /**
     * body of the revision, a string representation of a JSON structure
     */
    body: B;
    /**
     * format of the body of the revision
     */
    bodyFormat?: BodyFormat | null;
    /**
     * list of the media attached to the revision
     */
    media?: MediaAttachment[] | null;
    /**
     * heading of the revision
     */
    heading: string;
    /**
     * description of the latest update
     */
    updateInfo?: UpdateInfo | null;
    /**
     * revision creation timestamp - the real time when the revision was created
     */
    createdAt: number;
    /**
     * revision deletion timestamp - the time when the revision was deleted
     */
    deletedAt?: number | null;
    /**
     * original revision creation timestamp (for cached copies of remote postings only)
     */
    receiverCreatedAt?: number | null;
    /**
     * original revision deletion timestamp (for cached copies of remote postings only)
     */
    receiverDeletedAt?: number | null;
    /**
     * cryptographic digest of the revision (use ``Posting`` fingerprint)
     */
    digest?: string | null;
    /**
     * the revision's owner signature (use ``Posting`` fingerprint)
     */
    signature?: string | null;
    /**
     * signature version (i.e. fingerprint version)
     */
    signatureVersion?: number | null;
    /**
     * details of the existing reaction (if any) of the client's owner
     */
    clientReaction?: ClientReactionInfo | null;
    /**
     * reactions summary of the posting revision
     */
    reactions?: ReactionTotalsInfo | null;
}

export type EncodedPostingRevisionInfo = PostingRevisionInfoBase<string>;
export type PostingRevisionInfo = PostingRevisionInfoBase<Body>;

export interface PostingSourceText {
    /**
     * avatar of the posting's owner
     */
    ownerAvatar?: AvatarDescription | null;
    /**
     * the source text of the posting, a string representation of a JSON structure
     */
    bodySrc?: Body | string | null;
    /**
     * format of the source text of the posting, ``plain-text`` by default; the list of available formats is returned
     * in ``PostingFeatures``
     */
    bodySrcFormat?: SourceFormat | null;
    /**
     * array of IDs and digests of private media to be attached to the posting
     */
    media?: MediaWithDigest[] | null;
    /**
     * types of reactions that the posting accepts
     */
    acceptedReactions?: AcceptedReactions | null;
    /**
     * the operations and the corresponding principals
     */
    operations?: PostingOperations | null;
    /**
     * the operations and the corresponding principals that are overridden in the posting's comments
     */
    commentOperations?: CommentOperations | null;
    /**
     * the operations and the corresponding principals that are overridden in reactions to the posting
     */
    reactionOperations?: ReactionOperations | null;
    /**
     * the operations and the corresponding principals that are overridden in reactions to the posting's comments
     */
    commentReactionOperations?: ReactionOperations | null;
}

export interface PostingText {
    /**
     * node name of the posting's owner
     */
    ownerName?: string | null;
    /**
     * full name of the posting's owner
     */
    ownerFullName?: string | null;
    /**
     * gender of the posting's owner
     */
    ownerGender?: string | null;
    /**
     * avatar of the posting's owner
     */
    ownerAvatar?: AvatarDescription | null;
    /**
     * preview of the posting's body, a string representation of a JSON structure
     */
    bodyPreview?: Body | string | null;
    /**
     * the source text of the posting, a string representation of a JSON structure
     */
    bodySrc?: Body | string | null;
    /**
     * format of the source text of the posting, ``plain-text`` by default; the list of available formats is returned
     * in ``PostingFeatures``
     */
    bodySrcFormat?: SourceFormat | null;
    /**
     * body of the posting, a string representation of a JSON structure
     */
    body?: Body | string | null;
    /**
     * format of the body of the posting, may have any value meaningful for the client
     */
    bodyFormat?: BodyFormat | null;
    /**
     * array of IDs of private media to be attached to the posting
     */
    media?: string[] | null;
    /**
     * posting creation timestamp - the real time when the posting was created
     */
    createdAt?: number | null;
    /**
     * types of reactions that the posting accepts
     */
    acceptedReactions?: AcceptedReactions | null;
    /**
     * list of publications in feeds that must be made after creating the posting (for new postings only)
     */
    publications?: StoryAttributes[] | null;
    /**
     * description of the update
     */
    updateInfo?: UpdateInfo | null;
    /**
     * the posting's owner signature (use ``Posting`` fingerprint)
     */
    signature?: string | null;
    /**
     * signature version (i.e. fingerprint version)
     */
    signatureVersion?: number | null;
    /**
     * the operations and the corresponding principals
     */
    operations?: PostingOperations | null;
    /**
     * the operations and the corresponding principals that are overridden in the posting's comments
     */
    commentOperations?: CommentOperations | null;
    /**
     * the operations and the corresponding principals that are overridden in reactions to the posting
     */
    reactionOperations?: ReactionOperations | null;
    /**
     * the operations and the corresponding principals that are overridden in reactions to the posting's comments
     */
    commentReactionOperations?: ReactionOperations | null;
}

export interface ReactionCreated {
    /**
     * details of the reaction created
     */
    reaction?: ReactionInfo | null;
    /**
     * summary of reactions after the creation
     */
    totals: ReactionTotalsInfo;
}

export interface SettingDescriptor {
    /**
     * name of the setting
     */
    name: string;
    /**
     * type of the setting
     */
    type: SettingType;
    /**
     * default value of the setting
     */
    defaultValue?: string | null;
    /**
     * the setting is internal - not displayed to the user
     */
    internal?: boolean | null;
    /**
     * the setting is privileged - may be changed by server owner only
     */
    privileged?: boolean | null;
    /**
     * the setting is stored in the database in encrypted form
     */
    encrypted?: boolean | null;
    /**
     * human-friendly description of the setting
     */
    title?: string | null;
    /**
     * additional modifiers that may help to choose a proper UI component for the setting value and to validate the
     * input; the meaning of the modifiers depends on the setting type
     */
    modifiers?: SettingTypeModifiers | null;
}

export interface SettingMetaInfo {
    /**
     * name of the setting
     */
    name: string;
    /**
     * type of the setting
     */
    type: SettingType;
    /**
     * default value of the setting
     */
    defaultValue?: string | null;
    /**
     * the setting is privileged - may be changed by server owner only
     */
    privileged?: boolean | null;
    /**
     * human-friendly description of the setting
     */
    title: string;
    /**
     * additional modifiers that may help to choose a proper UI component for the setting value and to validate the
     * input; the meaning of the modifiers depends on the setting type
     */
    modifiers?: SettingTypeModifiers | null;
}

export interface StorySummaryData {
    /**
     * a node
     */
    node?: StorySummaryNode | null;
    /**
     * a posting
     */
    posting?: StorySummaryEntry | null;
    /**
     * a comment
     */
    comment?: StorySummaryEntry | null;
    /**
     * list of comments
     */
    comments?: StorySummaryEntry[] | null;
    /**
     * total number of comments
     */
    totalComments?: number | null;
    /**
     * the comment replied to
     */
    repliedTo?: StorySummaryEntry | null;
    /**
     * the parent posting of the media
     */
    parentPosting?: StorySummaryEntry | null;
    /**
     * a reaction
     */
    reaction?: StorySummaryReaction | null;
    /**
     * list of reactions
     */
    reactions?: StorySummaryReaction[] | null;
    /**
     * total number of reactions
     */
    totalReactions?: number | null;
    /**
     * name of a feed
     */
    feedName?: string | null;
    /**
     * subscription reason
     */
    subscriptionReason?: SubscriptionReason | null;
    /**
     * a group of friends
     */
    friendGroup?: StorySummaryFriendGroup | null;
    /**
     * summary of blocking a user
     */
    blocked?: StorySummaryBlocked | null;
    /**
     * summary of an action of a sheriff
     */
    sheriff?: StorySummarySheriff | null;
    /**
     * additional descriptive text
     */
    description?: string | null;
    /**
     * list of pages with number of clicks on each of them
     */
    clicks?: StorySummaryPageClicks[] | null;
}

export interface CommentInfoBase<B> {
    id: string;
    /**
     * node name of the comment's owner
     */
    ownerName: string;
    /**
     * full name of the comment's owner
     */
    ownerFullName?: string | null;
    /**
     * gender of the comment's owner
     */
    ownerGender?: string | null;
    /**
     * avatar of the comment's owner
     */
    ownerAvatar?: AvatarImage | null;
    /**
     * ID of the parent posting of the comment
     */
    postingId: string;
    /**
     * ID of the revision of parent posting that was current when the comment was created
     */
    postingRevisionId: string;
    /**
     * ID of the current revision of the comment
     */
    revisionId: string;
    /**
     * total number of revisions the comment has
     */
    totalRevisions: number;
    /**
     * preview of the comment's body, a string representation of a JSON structure
     */
    bodyPreview?: B | null;
    /**
     * the source text of the comment, a string representation of a JSON structure, may be absent if not requested
     */
    bodySrc?: B | null;
    /**
     * hash of the source text of the comment
     */
    bodySrcHash: string;
    /**
     * format of the source text of the comment, the list of available formats is returned in ``PostingFeatures``
     */
    bodySrcFormat?: SourceFormat | null;
    /**
     * body of the comment, a string representation of a JSON structure
     */
    body: B;
    /**
     * format of the body of the comment, may have any value meaningful for the client
     */
    bodyFormat?: BodyFormat | null;
    /**
     * list of the media attached to the comment
     */
    media?: MediaAttachment[] | null;
    /**
     * heading of the comment
     */
    heading: string;
    /**
     * information about the comment this comment is replying to
     */
    repliedTo?: RepliedTo | null;
    moment: number;
    /**
     * comment creation timestamp - the real time when the comment was created
     */
    createdAt: number;
    /**
     * comment editing timestamp - the last time the comment was updated
     */
    editedAt?: number | null;
    /**
     * comment deletion timestamp - the time when the comment was deleted
     */
    deletedAt?: number | null;
    /**
     * creation timestamp of the current revision of the comment
     */
    revisionCreatedAt: number;
    /**
     * comment purging timestamp - the time when the deleted comment will be purged from the database
     */
    deadline?: number | null;
    /**
     * cryptographic digest of the comment (use ``Comment`` fingerprint)
     */
    digest?: string | null;
    /**
     * the comment's owner signature (use ``Comment`` fingerprint)
     */
    signature?: string | null;
    /**
     * signature version (i.e. fingerprint version)
     */
    signatureVersion?: number | null;
    /**
     * the supported operations and the corresponding principals
     */
    operations?: CommentOperations | null;
    /**
     * the operations and the corresponding principals that are overridden in reactions to the comment
     */
    reactionOperations?: ReactionOperations | null;
    /**
     * the supported operations and the corresponding principals as defined by the comment's owner
     */
    ownerOperations?: CommentOperations | null;
    /**
     * the operations and the corresponding principals that are overridden by the posting's owner ("senior")
     */
    seniorOperations?: CommentOperations | null;
    /**
     * operations on the comment that are blocked for the client
     */
    blockedOperations?: BlockedEntryOperation[] | null;
    /**
     * list of sheriff marks on the comment
     */
    sheriffMarks?: SheriffMark[] | null;
    /**
     * types of reactions that the comment accepts
     */
    acceptedReactions?: AcceptedReactions | null;
    /**
     * details of the existing reaction (if any) of the client's owner
     */
    clientReaction?: ClientReactionInfo | null;
    /**
     * details of the existing reaction (if any) of the posting's owner ("senior") to the comment
     */
    seniorReaction?: ClientReactionInfo | null;
    /**
     * summary of reactions to the comment
     */
    reactions?: ReactionTotalsInfo | null;
}

export type EncodedCommentInfo = CommentInfoBase<string>;
export type CommentInfo = CommentInfoBase<Body>;

export interface CommentsSliceInfoBase<B> {
    /**
     * the slice contains all comments before this moment, inclusive. May be the far future.
     */
    before: number;
    /**
     * the slice contains all comments after this moment, exclusive. May be the far past.
     */
    after: number;
    /**
     * the comments
     */
    comments: CommentInfoBase<B>[];
    /**
     * total number of comments
     */
    total: number;
    /**
     * number of comments before this slice till the far past
     */
    totalInPast: number;
    /**
     * number of comments after this slice till the far future
     */
    totalInFuture: number;
}

export type EncodedCommentsSliceInfo = CommentsSliceInfoBase<string>;
export type CommentsSliceInfo = CommentsSliceInfoBase<Body>;

export interface DraftInfoBase<B> {
    id: string;
    /**
     * type of the draft
     */
    draftType: DraftType;
    /**
     * name of the node the draft is related to
     */
    receiverName: string;
    /**
     * ID of the posting, set for all types, except ``new-posting``
     */
    receiverPostingId?: string | null;
    /**
     * ID of the comment, set for ``comment-update`` type
     */
    receiverCommentId?: string | null;
    /**
     * ID of the comment replied to, set for comment drafts, if needed
     */
    repliedToId?: string | null;
    /**
     * draft creation timestamp - the real time when the draft was created
     */
    createdAt: number;
    /**
     * draft editing timestamp - the last time the draft was updated
     */
    editedAt?: number | null;
    /**
     * draft purging timestamp - the time when the draft will be purged from the database, if not updated
     */
    deadline?: number | null;
    /**
     * full name of the posting's/comment's owner
     */
    ownerFullName?: string | null;
    /**
     * avatar of the posting's/comment's owner
     */
    ownerAvatar?: AvatarImage | null;
    /**
     * types of reactions that the posting accepts
     */
    acceptedReactions?: AcceptedReactions | null;
    /**
     * the source text of the draft, a string representation of a JSON structure
     */
    bodySrc?: B | null;
    /**
     * format of the source text of the draft, ``plain-text`` by default; the list of available formats is returned in
     * ``PostingFeatures``
     */
    bodySrcFormat?: SourceFormat | null;
    /**
     * body of the draft, a string representation of a JSON structure
     */
    body: B;
    /**
     * format of the body of the draft
     */
    bodyFormat?: BodyFormat | null;
    /**
     * list of the media attached to the draft
     */
    media?: MediaAttachment[] | null;
    /**
     * heading of the draft
     */
    heading: string;
    /**
     * story publication timestamp - the time the story must be published under in the feed
     */
    publishAt?: number | null;
    /**
     * description of the update
     */
    updateInfo?: UpdateInfo | null;
    /**
     * draft of the list of operations and the corresponding principals
     */
    operations?: PostingOperations | null;
    /**
     * draft of the list of operations and the corresponding principals that are overridden in the posting's comments,
     * set for posting drafts, if needed
     */
    commentOperations?: CommentOperations | null;
}

export type EncodedDraftInfo = DraftInfoBase<string>;
export type DraftInfo = DraftInfoBase<Body>;

export interface EntryInfoBase<B> {
    /**
     * posting details, set if the entry is a posting
     */
    posting?: PostingInfoBase<B> | null;
    /**
     * comment details, set if the entry is a comment
     */
    comment?: CommentInfoBase<B> | null;
}

export type EncodedEntryInfo = EntryInfoBase<string>;
export type EntryInfo = EntryInfoBase<Body>;

export interface PluginDescription {
    /**
     * a unique plugin name; can contain only small latin letters, digits or hyphen
     */
    name: string;
    /**
     * user-readable title of the plugin
     */
    title?: string | null;
    /**
     * user-readable description of the purpose of the plugin
     */
    description?: string | null;
    /**
     * URL of the plugin; used by the node to call the plugin API
     */
    location?: string | null;
    /**
     * list of types of internal events the plugin wants to receive; Read more about internal events.
     */
    acceptedEvents?: string[] | null;
    /**
     * plugin settings to be added to the list of node settings, the settings appear in the list with a prefix
     * ``plugin.&lt;plugin name>.``
     */
    options?: SettingDescriptor[] | null;
}

export interface PluginInfo {
    /**
     * ID of the node this plugin is connected to
     */
    nodeId: string;
    /**
     * ``true`` if the plugin is enabled for a particular node only, ``false``, if it is enabled for the whole server
     */
    local: boolean;
    /**
     * a unique plugin name
     */
    name: string;
    /**
     * user-readable title of the plugin
     */
    title?: string | null;
    /**
     * user-readable description of the purpose of the plugin
     */
    description?: string | null;
    /**
     * URL of the plugin; used by the node to call the plugin API
     */
    location?: string | null;
    /**
     * list of types of internal events the plugin wants to receive; Read more about internal events.
     */
    acceptedEvents?: string[] | null;
    /**
     * plugin settings to be added to the list of node settings
     */
    settings?: SettingMetaInfo[] | null;
    /**
     * ID of the token used to authenticate the plugin
     */
    tokenId?: string | null;
}

export interface StoryInfoBase<B> {
    id: string;
    /**
     * name of the feed
     */
    feedName: string;
    /**
     * type of the story
     */
    storyType: StoryType;
    /**
     * story creation timestamp - the real time when the story was created
     */
    createdAt: number;
    /**
     * story publication timestamp - the time the story is published under in the feed
     */
    publishedAt: number;
    /**
     * ``true``, if the story is pinned (should appear before any non-pinned story in the feed), ``false`` otherwise
     */
    pinned?: boolean | null;
    moment: number;
    /**
     * ``true``, if the story has been viewed by node owner, ``false`` otherwise
     */
    viewed?: boolean | null;
    /**
     * ``true``, if the story has been read by node owner, ``false`` otherwise
     */
    read?: boolean | null;
    /**
     * if the story is associated with a user action (for example, it contains a form that should be submitted), this
     * flag is set to ``true`` if the action is done already, and ``false`` otherwise
     */
    satisfied?: boolean | null;
    /**
     * name of the node related to the summary of the story
     */
    summaryNodeName?: string | null;
    /**
     * full name of the node related to the summary of the story
     */
    summaryFullName?: string | null;
    /**
     * avatar of the summary of the story
     */
    summaryAvatar?: AvatarImage | null;
    /**
     * user-readable summary of the story - this field is **deprecated** in favor of ``summaryData``
     */
    summary?: string | null;
    /**
     * details of the story; they are used by the client to build a user-readable summary of the story
     */
    summaryData?: StorySummaryData | null;
    /**
     * the posting this story is about
     */
    posting?: PostingInfoBase<B> | null;
    /**
     * ID of the posting this story is about, used if the whole posting is not returned
     */
    postingId?: string | null;
    /**
     * the comment this story is about
     */
    comment?: CommentInfoBase<B> | null;
    /**
     * ID of the comment this story is about, used if the whole posting is not returned
     */
    commentId?: string | null;
    /**
     * name of the node this story is about
     */
    remoteNodeName?: string | null;
    /**
     * full name of the node this story is about
     */
    remoteFullName?: string | null;
    /**
     * ID of the posting at remote node this story is about
     */
    remotePostingId?: string | null;
    /**
     * ID of the comment at remote node this story is about
     */
    remoteCommentId?: string | null;
    /**
     * ID of the media at remote node this story is about
     */
    remoteMediaId?: string | null;
    /**
     * the supported operations and the corresponding principals
     */
    operations?: StoryOperations | null;
}

export type EncodedStoryInfo = StoryInfoBase<string>;
export type StoryInfo = StoryInfoBase<Body>;

export interface CommentCreatedBase<B> {
    /**
     * details of the comment created
     */
    comment: CommentInfoBase<B>;
    /**
     * total number of comments in the posting after the creation
     */
    total: number;
}

export type EncodedCommentCreated = CommentCreatedBase<string>;
export type CommentCreated = CommentCreatedBase<Body>;

export interface FeedSliceInfoBase<B> {
    /**
     * the slice contains all stories before this moment, inclusive. May be the far future.
     */
    before: number;
    /**
     * the slice contains all stories after this moment, exclusive. May be the far past.
     */
    after: number;
    /**
     * the stories
     */
    stories: StoryInfoBase<B>[];
    /**
     * total number of stories in the feed before this slice
     */
    totalInPast: number;
    /**
     * total number of stories in the feed after this slice
     */
    totalInFuture: number;
}

export type EncodedFeedSliceInfo = FeedSliceInfoBase<string>;
export type FeedSliceInfo = FeedSliceInfoBase<Body>;

export interface PushContentBase<B> {
    /**
     * type of the notification
     */
    type: PushContentType;
    /**
     * ID of the story (``story-deleted`` notifications only)
     */
    id?: string | null;
    /**
     * the story (``story-added`` notifications only)
     */
    story?: StoryInfoBase<B> | null;
    /**
     * status of the feed (``feed-updated`` notifications only)
     */
    feedStatus?: FeedWithStatus | null;
}

export type EncodedPushContent = PushContentBase<string>;
export type PushContent = PushContentBase<Body>;
