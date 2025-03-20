// This file is generated

import { Caller } from "./caller";
import * as API from "./types";
import { commaSeparatedFlags, ut } from "../util";

/**
 * Node API interface.
 */
export class MoeraNode extends Caller {

    /**
     * @param {string | null} nodeUrl - the node URL
     */
    constructor(nodeUrl: string | null = null) {
        super();
        if (nodeUrl != null) {
            this.nodeUrl(nodeUrl);
        }
    }

    /**
     * Get the list of all reactions performed by the node, filtered by some criteria.
     *
     * @param {API.ActivityReactionFilter} filter
     * @return {Promise<API.ActivityReactionInfo[]>}
     */
    async searchActivityReactions(filter: API.ActivityReactionFilter): Promise<API.ActivityReactionInfo[]> {
        const location = "/activity/reactions/search";
        return await this.call("searchActivityReactions", location, {
            method: "POST", body: filter, schema: "ActivityReactionInfoArray"
        }) as API.ActivityReactionInfo[];
    }

    /**
     * Get the status of the asynchronous operation that performs verification of a remote posting signature.
     *
     * @param {string} id - asynchronous operation ID
     * @return {Promise<API.RemotePostingVerificationInfo>}
     */
    async getRemotePostingVerificationStatus(id: string): Promise<API.RemotePostingVerificationInfo> {
        const location = ut`/async-operations/remote-posting-verification/${id}`;
        return await this.call("getRemotePostingVerificationStatus", location, {
            method: "GET", schema: "RemotePostingVerificationInfo"
        }) as API.RemotePostingVerificationInfo;
    }

    /**
     * Get the status of the asynchronous operation that performs verification of the signature of a reaction to a
     * remote posting.
     *
     * @param {string} id - asynchronous operation ID
     * @return {Promise<API.RemoteReactionVerificationInfo>}
     */
    async getRemoteReactionVerificationStatus(id: string): Promise<API.RemoteReactionVerificationInfo> {
        const location = ut`/async-operations/remote-reaction-verification/${id}`;
        return await this.call("getRemoteReactionVerificationStatus", location, {
            method: "GET", schema: "RemoteReactionVerificationInfo"
        }) as API.RemoteReactionVerificationInfo;
    }

    /**
     * Get the list of avatars in the ascending order of their ordinals.
     *
     * @return {Promise<API.AvatarInfo[]>}
     */
    async getAvatars(): Promise<API.AvatarInfo[]> {
        const location = "/avatars";
        return await this.call("getAvatars", location, {
            method: "GET", schema: "AvatarInfoArray"
        }) as API.AvatarInfo[];
    }

    /**
     * Create a new avatar from a public media file that exists on the node. A new public media file is created for the
     * avatar. If the avatar's ordinal is not provided in the input, the avatar is assigned an ordinal that is greater
     * than ordinals of all existing avatars.
     *
     * @param {API.AvatarAttributes} avatar
     * @return {Promise<API.AvatarInfo>}
     */
    async createAvatar(avatar: API.AvatarAttributes): Promise<API.AvatarInfo> {
        const location = "/avatars";
        return await this.call("createAvatar", location, {
            method: "POST", body: avatar, schema: "AvatarInfo"
        }) as API.AvatarInfo;
    }

    /**
     * Get an individual avatar.
     *
     * @param {string} id - avatar ID
     * @return {Promise<API.AvatarInfo>}
     */
    async getAvatar(id: string): Promise<API.AvatarInfo> {
        const location = ut`/avatars/${id}`;
        return await this.call("getAvatar", location, {
            method: "GET", schema: "AvatarInfo"
        }) as API.AvatarInfo;
    }

    /**
     * Delete an avatar.
     *
     * @param {string} id - avatar ID
     * @return {Promise<API.Result>}
     */
    async deleteAvatar(id: string): Promise<API.Result> {
        const location = ut`/avatars/${id}`;
        return await this.call("deleteAvatar", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Reorder avatars. Every avatar mentioned in the input is assigned an ordinal in ascending order as they appear in
     * the input. Ordinals of avatars not mentioned in the input are not touched.
     *
     * @param {API.AvatarsOrdered} order
     * @return {Promise<API.AvatarOrdinal[]>}
     */
    async reorderAvatars(order: API.AvatarsOrdered): Promise<API.AvatarOrdinal[]> {
        const location = "/avatars/reorder";
        return await this.call("reorderAvatars", location, {
            method: "POST", body: order, schema: "AvatarOrdinalArray"
        }) as API.AvatarOrdinal[];
    }

    /**
     * Blocks creation of instants of the given story type, related to the given entry, optionally unblocking at the
     * given time in the future.
     *
     * @param {API.BlockedInstantAttributes} instant
     * @return {Promise<API.BlockedInstantInfo>}
     */
    async blockInstant(instant: API.BlockedInstantAttributes): Promise<API.BlockedInstantInfo> {
        const location = "/blocked-instants";
        return await this.call("blockInstant", location, {
            method: "POST", body: instant, schema: "BlockedInstantInfo"
        }) as API.BlockedInstantInfo;
    }

    /**
     * Get details about the given blocked instant.
     *
     * @param {string} id - ID of the blocked instant
     * @return {Promise<API.BlockedInstantInfo>}
     */
    async getBlockedInstant(id: string): Promise<API.BlockedInstantInfo> {
        const location = ut`/blocked-instants/${id}`;
        return await this.call("getBlockedInstant", location, {
            method: "GET", schema: "BlockedInstantInfo"
        }) as API.BlockedInstantInfo;
    }

    /**
     * Unblock the given instant.
     *
     * @param {string} id - ID of the blocked instant
     * @return {Promise<API.Result>}
     */
    async unblockInstant(id: string): Promise<API.Result> {
        const location = ut`/blocked-instants/${id}`;
        return await this.call("unblockInstant", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Search blocked instants by the given criteria.
     *
     * @param {API.BlockedInstantFilter} filter
     * @return {Promise<API.BlockedInstantInfo[]>}
     */
    async searchBlockedInstants(filter: API.BlockedInstantFilter): Promise<API.BlockedInstantInfo[]> {
        const location = "/blocked-instants/search";
        return await this.call("searchBlockedInstants", location, {
            method: "POST", body: filter, schema: "BlockedInstantInfoArray"
        }) as API.BlockedInstantInfo[];
    }

    /**
     * Blocks the given node from performing the given operations, in a particular posting or globally, optionally
     * unblocking at the given time in the future.
     *
     * @param {API.BlockedUserAttributes} user
     * @return {Promise<API.BlockedUserInfo>}
     */
    async blockUser(user: API.BlockedUserAttributes): Promise<API.BlockedUserInfo> {
        const location = "/people/blocked-users";
        return await this.call("blockUser", location, {
            method: "POST", body: user, schema: "BlockedUserInfo"
        }) as API.BlockedUserInfo;
    }

    /**
     * Get details about the given blocked user.
     *
     * @param {string} id - ID of the blocked user
     * @return {Promise<API.BlockedUserInfo>}
     */
    async getBlockedUser(id: string): Promise<API.BlockedUserInfo> {
        const location = ut`/people/blocked-users/${id}`;
        return await this.call("getBlockedUser", location, {
            method: "GET", schema: "BlockedUserInfo"
        }) as API.BlockedUserInfo;
    }

    /**
     * Unblock the given user.
     *
     * @param {string} id - ID of the blocked user
     * @return {Promise<API.Result>}
     */
    async unblockUser(id: string): Promise<API.Result> {
        const location = ut`/people/blocked-users/${id}`;
        return await this.call("unblockUser", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Search blocked users by the given criteria.
     *
     * @param {API.BlockedUserFilter} filter
     * @return {Promise<API.BlockedUserInfo[]>}
     */
    async searchBlockedUsers(filter: API.BlockedUserFilter): Promise<API.BlockedUserInfo[]> {
        const location = "/people/blocked-users/search";
        return await this.call("searchBlockedUsers", location, {
            method: "POST", body: filter, schema: "BlockedUserInfoArray"
        }) as API.BlockedUserInfo[];
    }

    /**
     * Get checksums of the information about the blocked users. This request may be used to quickly detect the changes
     * in the blocked users list to update the cache on the client side.
     *
     * @return {Promise<API.BlockedUsersChecksums>}
     */
    async getBlockedUsersChecksums(): Promise<API.BlockedUsersChecksums> {
        const location = "/people/blocked-users/checksums";
        return await this.call("getBlockedUsersChecksums", location, {
            method: "GET", schema: "BlockedUsersChecksums"
        }) as API.BlockedUsersChecksums;
    }

    /**
     * Get details about the given node that blocked this node.
     *
     * @param {string} id - ID of the blocked-by user
     * @return {Promise<API.BlockedByUserInfo>}
     */
    async getBlockedByUser(id: string): Promise<API.BlockedByUserInfo> {
        const location = ut`/people/blocked-by-users/${id}`;
        return await this.call("getBlockedByUser", location, {
            method: "GET", schema: "BlockedByUserInfo"
        }) as API.BlockedByUserInfo;
    }

    /**
     * Search nodes that blocked this node, by the given criteria.
     *
     * @param {API.BlockedByUserFilter} filter
     * @return {Promise<API.BlockedByUserInfo[]>}
     */
    async searchBlockedByUsers(filter: API.BlockedByUserFilter): Promise<API.BlockedByUserInfo[]> {
        const location = "/people/blocked-by-users/search";
        return await this.call("searchBlockedByUsers", location, {
            method: "POST", body: filter, schema: "BlockedByUserInfoArray"
        }) as API.BlockedByUserInfo[];
    }

    /**
     * Create a set of cartes with the given attributes. Cartes in the sequence correspond to successive periods of
     * time.
     *
     * @param {API.CarteAttributes} attributes
     * @return {Promise<API.CarteSet>}
     */
    async createCartes(attributes: API.CarteAttributes): Promise<API.CarteSet> {
        const location = "/cartes";
        return await this.call("createCartes", location, {
            method: "POST", body: attributes, schema: "CarteSet"
        }) as API.CarteSet;
    }

    /**
     * Verify if the given carte may be used for authentication on this node. Additionally, if ``clientName`` is
     * provided, it is compared to the carte owner's name.
     *
     * @param {API.ClientCarte} clientCarte
     * @return {Promise<API.CarteVerificationInfo>}
     */
    async verifyCarte(clientCarte: API.ClientCarte): Promise<API.CarteVerificationInfo> {
        const location = "/cartes/verify";
        return await this.call("verifyCarte", location, {
            method: "POST", body: clientCarte, schema: "CarteVerificationInfo"
        }) as API.CarteVerificationInfo;
    }

    /**
     * Get a slice of the list of comments, delimited by ``before`` or ``after`` moments (but not both) and the given
     * ``limit``. If neither ``before`` nor ``after`` are provided, the latest comments are returned. The node may
     * decide to return fewer comments than the given ``limit``. The stories are always sorted by moment, ascending.
     *
     * @param {string} postingId - ID of the posting
     * @param {number | null} after - filter comments posted strongly after this moment
     * @param {number | null} before - filter comments posted at or before this moment
     * @param {number | null} limit - maximum number of comments returned
     * @return {Promise<API.CommentsSliceInfo>}
     */
    async getCommentsSlice(
        postingId: string, after: number | null = null, before: number | null = null, limit: number | null = null
    ): Promise<API.CommentsSliceInfo> {
        const location = ut`/postings/${postingId}/comments`;
        const params = {after, before, limit};
        return await this.call("getCommentsSlice", location, {
            method: "GET", params, schema: "CommentsSliceInfo", bodies: true
        }) as API.CommentsSliceInfo;
    }

    /**
     * Create a comment from the given text and add it to the given posting. The comment owner must authenticate in
     * some way. If the comment is not signed, it will be kept for a limited period of time and then erased. If
     * authenticated as admin, the node signs the comment.
     *
     * @param {string} postingId - ID of the posting
     * @param {API.CommentText} comment
     * @return {Promise<API.CommentCreated>}
     */
    async createComment(postingId: string, comment: API.CommentText): Promise<API.CommentCreated> {
        const location = ut`/postings/${postingId}/comments`;
        return await this.call("createComment", location, {
            method: "POST", body: comment, schema: "CommentCreated", bodies: true, srcBodies: true
        }) as API.CommentCreated;
    }

    /**
     * Get an individual comment.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @param {boolean} withSource - include source text of the comment
     * @return {Promise<API.CommentInfo>}
     */
    async getComment(postingId: string, commentId: string, withSource: boolean = false): Promise<API.CommentInfo> {
        const include = commaSeparatedFlags({"source": withSource});
        const location = ut`/postings/${postingId}/comments/${commentId}`;
        const params = {include};
        return await this.call("getComment", location, {
            method: "GET", params, schema: "CommentInfo", bodies: true
        }) as API.CommentInfo;
    }

    /**
     * Update operation overrides for all comments in the posting.
     *
     * @param {string} postingId - ID of the posting
     * @param {API.CommentMassAttributes} attributes
     * @return {Promise<API.Result>}
     */
    async updateAllComments(postingId: string, attributes: API.CommentMassAttributes): Promise<API.Result> {
        const location = ut`/postings/${postingId}/comments`;
        return await this.call("updateAllComments", location, {
            method: "PUT", body: attributes, schema: "Result"
        }) as API.Result;
    }

    /**
     * Update the comment, creating a new revision of it. The text is processed just like in the ``POST`` request.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @param {API.CommentText} comment
     * @return {Promise<API.CommentInfo>}
     */
    async updateComment(postingId: string, commentId: string, comment: API.CommentText): Promise<API.CommentInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}`;
        return await this.call("updateComment", location, {
            method: "PUT", body: comment, schema: "CommentInfo", bodies: true, srcBodies: true
        }) as API.CommentInfo;
    }

    /**
     * Delete the comment. The comment may not be purged from the database immediately, but preserved for some period
     * of time to give a chance to restore it.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @return {Promise<API.CommentTotalInfo>}
     */
    async deleteComment(postingId: string, commentId: string): Promise<API.CommentTotalInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}`;
        return await this.call("deleteComment", location, {
            method: "DELETE", schema: "CommentTotalInfo"
        }) as API.CommentTotalInfo;
    }

    /**
     * Get all postings linked to media attached to the given comment.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @return {Promise<API.PostingInfo[]>}
     */
    async getPostingsAttachedToComment(postingId: string, commentId: string): Promise<API.PostingInfo[]> {
        const location = ut`/postings/${postingId}/comments/${commentId}/attached`;
        return await this.call("getPostingsAttachedToComment", location, {
            method: "GET", schema: "PostingInfoArray", bodies: true
        }) as API.PostingInfo[];
    }

    /**
     * Get all revisions of the comment.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @return {Promise<API.CommentRevisionInfo[]>}
     */
    async getCommentRevisions(postingId: string, commentId: string): Promise<API.CommentRevisionInfo[]> {
        const location = ut`/postings/${postingId}/comments/${commentId}/revisions`;
        return await this.call("getCommentRevisions", location, {
            method: "GET", schema: "CommentRevisionInfoArray", bodies: true
        }) as API.CommentRevisionInfo[];
    }

    /**
     * Get an individual revision of the comment.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @param {string} id - ID of the revision
     * @return {Promise<API.CommentRevisionInfo>}
     */
    async getCommentRevision(postingId: string, commentId: string, id: string): Promise<API.CommentRevisionInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}/revisions/${id}`;
        return await this.call("getCommentRevision", location, {
            method: "GET", schema: "CommentRevisionInfo", bodies: true
        }) as API.CommentRevisionInfo;
    }

    /**
     * Add a reaction to the given comment. The reaction owner must authenticate in some way. Only one reaction is
     * allowed from each owner to a particular comment. If a reaction from the same owner to this comment already
     * exists, it is overwritten. If the reaction is not signed, the reaction will be kept for a limited period of time
     * and then erased (the previous reaction of the same owner will be restored, if any).
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @param {API.ReactionDescription} reaction
     * @return {Promise<API.ReactionCreated>}
     */
    async createCommentReaction(
        postingId: string, commentId: string, reaction: API.ReactionDescription
    ): Promise<API.ReactionCreated> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reactions`;
        return await this.call("createCommentReaction", location, {
            method: "POST", body: reaction, schema: "ReactionCreated"
        }) as API.ReactionCreated;
    }

    /**
     * Update the reaction's operations or set operations' overrides.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @param {string} ownerName - reaction owner node name
     * @param {API.ReactionOverride} reaction
     * @return {Promise<API.ReactionInfo>}
     */
    async updateCommentReaction(
        postingId: string, commentId: string, ownerName: string, reaction: API.ReactionOverride
    ): Promise<API.ReactionInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reactions/${ownerName}`;
        return await this.call("updateCommentReaction", location, {
            method: "PUT", body: reaction, schema: "ReactionInfo"
        }) as API.ReactionInfo;
    }

    /**
     * Get a slice of the list of reactions to the given comment, optionally filtered by reaction type, delimited by
     * ``before`` moment and the given ``limit``. If ``before`` is not provided, the latest reactions are returned. The
     * node may decide to return fewer reactions than the given ``limit``. The reactions are always sorted by moment,
     * descending.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @param {boolean | null} negative - ``true``, to filter negative reactions, ``false``, to filter positive ones
     * @param {number | null} emoji - filter by reaction code, usually interpreted by clients as emoji code point
     * @param {number | null} before - filter reactions created at or before this moment
     * @param {number | null} limit - maximum number of reactions returned
     * @return {Promise<API.ReactionsSliceInfo>}
     */
    async getCommentReactionsSlice(
        postingId: string, commentId: string, negative: boolean | null = null, emoji: number | null = null,
        before: number | null = null, limit: number | null = null
    ): Promise<API.ReactionsSliceInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reactions`;
        const params = {negative, emoji, before, limit};
        return await this.call("getCommentReactionsSlice", location, {
            method: "GET", params, schema: "ReactionsSliceInfo"
        }) as API.ReactionsSliceInfo;
    }

    /**
     * Get the detailed information about the reaction of the given owner to the given comment. If no reaction with
     * such an owner exists, an empty structure with just ``commentId`` is returned.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @param {string} ownerName - reaction owner node name
     * @return {Promise<API.ReactionInfo>}
     */
    async getCommentReaction(postingId: string, commentId: string, ownerName: string): Promise<API.ReactionInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reactions/${ownerName}`;
        return await this.call("getCommentReaction", location, {
            method: "GET", schema: "ReactionInfo"
        }) as API.ReactionInfo;
    }

    /**
     * Delete all reactions to the given comment.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @return {Promise<API.Result>}
     */
    async deleteAllCommentReactions(postingId: string, commentId: string): Promise<API.Result> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reactions`;
        return await this.call("deleteAllCommentReactions", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Delete the reaction of the given owner to the given comment.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @param {string} ownerName - reaction owner node name
     * @return {Promise<API.ReactionTotalsInfo>}
     */
    async deleteCommentReaction(
        postingId: string, commentId: string, ownerName: string
    ): Promise<API.ReactionTotalsInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reactions/${ownerName}`;
        return await this.call("deleteCommentReaction", location, {
            method: "DELETE", schema: "ReactionTotalsInfo"
        }) as API.ReactionTotalsInfo;
    }

    /**
     * Get a summary of reactions to the comment given.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} commentId - ID of the comment
     * @return {Promise<API.ReactionTotalsInfo>}
     */
    async getCommentReactionTotals(postingId: string, commentId: string): Promise<API.ReactionTotalsInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reaction-totals`;
        return await this.call("getCommentReactionTotals", location, {
            method: "GET", schema: "ReactionTotalsInfo"
        }) as API.ReactionTotalsInfo;
    }

    /**
     * Search for contacts matching the search ``query``. Every space-delimited word in the query must match
     * case-insensitively a beginning of the contact's node name or a beginning of any space-delimited word in the
     * contact's full name. The order of words is not significant. \
     * \
     * The node may decide to return fewer contacts than the given ``limit``. \
     * \
     * The contacts are sorted by their *closeness* to the node, which is calculated from the number of reactions and
     * comments and their age.
     *
     * @param {string | null} query - the search query
     * @param {number | null} limit - maximum number of contacts returned
     * @return {Promise<API.ContactInfo[]>}
     */
    async getContacts(query: string | null = null, limit: number | null = null): Promise<API.ContactInfo[]> {
        const location = ut`/people/contacts`;
        const params = {query, limit};
        return await this.call("getContacts", location, {
            method: "GET", params, schema: "ContactInfoArray"
        }) as API.ContactInfo[];
    }

    /**
     * Check whether the credentials are initialized already.
     *
     * @return {Promise<API.CredentialsCreated>}
     */
    async checkCredentials(): Promise<API.CredentialsCreated> {
        const location = "/credentials";
        return await this.call("checkCredentials", location, {
            method: "GET", schema: "CredentialsCreated"
        }) as API.CredentialsCreated;
    }

    /**
     * Initialize credentials if they are not set yet. Note that this operation can be executed without authentication,
     * so this should be done as soon as possible after the node installation. Sign in is not allowed until the
     * credentials are set.
     *
     * @param {API.Credentials} credentials
     * @return {Promise<API.Result>}
     */
    async createCredentials(credentials: API.Credentials): Promise<API.Result> {
        const location = "/credentials";
        return await this.call("createCredentials", location, {
            method: "POST", body: credentials, schema: "Result"
        }) as API.Result;
    }

    /**
     * Update credentials. Either old password or credentials reset token should be set in the input for the operation
     * to succeed. Credentials reset token is not related to the authentication token and usually is sent to the user
     * by E-mail.
     *
     * @param {API.CredentialsChange} credentials
     * @return {Promise<API.Result>}
     */
    async updateCredentials(credentials: API.CredentialsChange): Promise<API.Result> {
        const location = "/credentials";
        return await this.call("updateCredentials", location, {
            method: "PUT", body: credentials, schema: "Result"
        }) as API.Result;
    }

    /**
     * Delete credentials.
     *
     * @return {Promise<API.Result>}
     */
    async deleteCredentials(): Promise<API.Result> {
        const location = "/credentials";
        return await this.call("deleteCredentials", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * The node generates credentials reset token that is sent to the node admin by E-mail or using any other way that
     * is defined for recovery of credentials. This token then may be used to change the credentials without knowing
     * the password.
     *
     * @return {Promise<API.EmailHint>}
     */
    async resetCredentials(): Promise<API.EmailHint> {
        const location = "/credentials/reset";
        return await this.call("resetCredentials", location, {
            method: "POST", schema: "EmailHint"
        }) as API.EmailHint;
    }

    /**
     * Get the list of deleted postings, page by page. The node may decide to use a smaller page size than the given
     * ``limit``. The postings are always sorted by the deletion timestamp, descending.
     *
     * @param {number | null} page - page number, 0 by default
     * @param {number | null} limit - page size (maximum number of postings returned), the default is defined by the
     * node
     * @return {Promise<API.PostingInfo[]>}
     */
    async getDeletedPostings(page: number | null = null, limit: number | null = null): Promise<API.PostingInfo[]> {
        const location = ut`/deleted-postings`;
        const params = {page, limit};
        return await this.call("getDeletedPostings", location, {
            method: "GET", params, schema: "PostingInfoArray", bodies: true
        }) as API.PostingInfo[];
    }

    /**
     * Get an individual deleted posting.
     *
     * @param {string} id - ID of the posting
     * @return {Promise<API.PostingInfo>}
     */
    async getDeletedPosting(id: string): Promise<API.PostingInfo> {
        const location = ut`/deleted-postings/${id}`;
        return await this.call("getDeletedPosting", location, {
            method: "GET", schema: "PostingInfo", bodies: true
        }) as API.PostingInfo;
    }

    /**
     * Restore a posting. A new revision is created with the same content as in the latest revision.
     *
     * @param {string} id - ID of the posting
     * @return {Promise<API.PostingInfo>}
     */
    async restoreDeletedPosting(id: string): Promise<API.PostingInfo> {
        const location = ut`/deleted-postings/${id}/restore`;
        return await this.call("restoreDeletedPosting", location, {
            method: "POST", schema: "PostingInfo", bodies: true
        }) as API.PostingInfo;
    }

    /**
     * Get all revisions of the deleted posting, but not more than ``limit``. The node may decide to return fewer
     * revisions than the given ``limit``.
     *
     * @param {string} postingId - ID of the posting
     * @param {number | null} limit - maximum number of revisions returned
     * @return {Promise<API.PostingRevisionInfo[]>}
     */
    async getDeletePostingRevisions(
        postingId: string, limit: number | null = null
    ): Promise<API.PostingRevisionInfo[]> {
        const location = ut`/deleted-postings/${postingId}/revisions`;
        const params = {limit};
        return await this.call("getDeletePostingRevisions", location, {
            method: "GET", params, schema: "PostingRevisionInfoArray", bodies: true
        }) as API.PostingRevisionInfo[];
    }

    /**
     * Get an individual revision of the deleted posting.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} id - ID of the revision
     * @return {Promise<API.PostingRevisionInfo>}
     */
    async getDeletedPostingRevision(postingId: string, id: string): Promise<API.PostingRevisionInfo> {
        const location = ut`/deleted-postings/${postingId}/revisions/${id}`;
        return await this.call("getDeletedPostingRevision", location, {
            method: "GET", schema: "PostingRevisionInfo", bodies: true
        }) as API.PostingRevisionInfo;
    }

    /**
     * Restore a posting at a particular revision. A new revision is created with the same content as in the given
     * revision.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} id - ID of the revision
     * @return {Promise<API.PostingRevisionInfo>}
     */
    async restoreDeletedPostingRevision(postingId: string, id: string): Promise<API.PostingRevisionInfo> {
        const location = ut`/postings/${postingId}/revisions/${id}/restore`;
        return await this.call("restoreDeletedPostingRevision", location, {
            method: "POST", schema: "PostingRevisionInfo", bodies: true
        }) as API.PostingRevisionInfo;
    }

    /**
     * Get the list of registered domains.
     *
     * @return {Promise<API.DomainInfo[]>}
     */
    async getDomains(): Promise<API.DomainInfo[]> {
        const location = "/domains";
        return await this.call("getDomains", location, {
            method: "GET", schema: "DomainInfoArray"
        }) as API.DomainInfo[];
    }

    /**
     * Get information about the domain with the given hostname. If domain registration for this server is public, this
     * request does not require authentication.
     *
     * @param {string} name - domain name
     * @return {Promise<API.DomainInfo>}
     */
    async getDomain(name: string): Promise<API.DomainInfo> {
        const location = ut`/domains/${name}`;
        return await this.call("getDomain", location, {
            method: "GET", schema: "DomainInfo"
        }) as API.DomainInfo;
    }

    /**
     * Create a new domain with the given hostname. If ``nodeId`` is not passed, it is generated automatically. If
     * domain registration for this server is public, this request does not require authentication.
     *
     * @param {API.DomainAttributes} domain
     * @return {Promise<API.DomainInfo>}
     */
    async createDomain(domain: API.DomainAttributes): Promise<API.DomainInfo> {
        const location = "/domains";
        return await this.call("createDomain", location, {
            method: "POST", body: domain, schema: "DomainInfo"
        }) as API.DomainInfo;
    }

    /**
     * Update the domain with the given hostname. If the new hostname is not passed, the old hostname is preserved.
     * (Note that you cannot pass a new name for the default hostname, because it cannot be renamed and ``_default_``
     * is not a valid hostname. Skip this field if you want to update the default hostname.) If ``nodeId`` is not
     * passed, it is generated automatically.
     *
     * @param {string} name - domain's hostname
     * @param {API.DomainAttributes} domain
     * @return {Promise<API.DomainInfo>}
     */
    async updateDomain(name: string, domain: API.DomainAttributes): Promise<API.DomainInfo> {
        const location = ut`/domains/${name}`;
        return await this.call("updateDomain", location, {
            method: "PUT", body: domain, schema: "DomainInfo"
        }) as API.DomainInfo;
    }

    /**
     * Delete the domain with the given hostname. This operation deletes the domain record only, the user's data
     * related to the domain is preserved.
     *
     * @param {string} name - domain name
     * @return {Promise<API.Result>}
     */
    async deleteDomain(name: string): Promise<API.Result> {
        const location = ut`/domains/${name}`;
        return await this.call("deleteDomain", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Get an available domain name recommended for the given node name. The domain name is usually chosen to be close
     * to the node name in English transcription. If domain registration for this server is not public, this request is
     * not accessible.
     *
     * @param {string} remoteNodeName - node name
     * @return {Promise<API.DomainAvailable>}
     */
    async isDomainAvailable(remoteNodeName: string): Promise<API.DomainAvailable> {
        const location = ut`/domains/available`;
        const params = {nodeName: remoteNodeName};
        return await this.call("isDomainAvailable", location, {
            method: "GET", params, schema: "DomainAvailable"
        }) as API.DomainAvailable;
    }

    /**
     * Get the list of drafts, page by page, filtered by the given criteria. The node may decide to use a smaller page
     * size than the given ``limit``. The drafts are always sorted by the creation timestamp, descending.
     *
     * @param {API.DraftType} draftType - type of the drafts
     * @param {string} remoteNodeName - name of the node the drafts are related to
     * @param {string | null} postingId - ID of the posting, mandatory for all types, except ``new-posting``
     * @param {string | null} commentId - ID of the comment, mandatory for ``comment-update`` type
     * @param {number | null} page - page number, 0 by default
     * @param {number | null} limit - page size (maximum number of postings returned), the default is defined by the
     * node
     * @return {Promise<API.DraftInfo[]>}
     */
    async getDrafts(
        draftType: API.DraftType, remoteNodeName: string, postingId: string | null = null,
        commentId: string | null = null, page: number | null = null, limit: number | null = null
    ): Promise<API.DraftInfo[]> {
        const location = ut`/drafts`;
        const params = {draftType, nodeName: remoteNodeName, postingId, commentId, page, limit};
        return await this.call("getDrafts", location, {
            method: "GET", params, schema: "DraftInfoArray", bodies: true
        }) as API.DraftInfo[];
    }

    /**
     * Create a new draft from the text given.
     *
     * @param {API.DraftText} draft
     * @return {Promise<API.DraftInfo>}
     */
    async createDraft(draft: API.DraftText): Promise<API.DraftInfo> {
        const location = "/drafts";
        return await this.call("createDraft", location, {
            method: "POST", body: draft, schema: "DraftInfo", bodies: true, srcBodies: true
        }) as API.DraftInfo;
    }

    /**
     * Get an individual draft.
     *
     * @param {string} id - ID of the draft
     * @return {Promise<API.DraftInfo>}
     */
    async getDraft(id: string): Promise<API.DraftInfo> {
        const location = ut`/drafts/${id}`;
        return await this.call("getDraft", location, {
            method: "GET", schema: "DraftInfo", bodies: true
        }) as API.DraftInfo;
    }

    /**
     * Update the draft.
     *
     * @param {string} id - ID of the draft
     * @param {API.DraftText} draft
     * @return {Promise<API.DraftInfo>}
     */
    async updateDraft(id: string, draft: API.DraftText): Promise<API.DraftInfo> {
        const location = ut`/drafts/${id}`;
        return await this.call("updateDraft", location, {
            method: "PUT", body: draft, schema: "DraftInfo", bodies: true, srcBodies: true
        }) as API.DraftInfo;
    }

    /**
     * Delete the draft.
     *
     * @param {string} id - ID of the draft
     * @return {Promise<API.Result>}
     */
    async deleteDraft(id: string): Promise<API.Result> {
        const location = ut`/drafts/${id}`;
        return await this.call("deleteDraft", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Get information about features supported by the node.
     *
     * @return {Promise<API.Features>}
     */
    async getFeatures(): Promise<API.Features> {
        const location = "/features";
        return await this.call("getFeatures", location, {
            method: "GET", schema: "Features"
        }) as API.Features;
    }

    /**
     * Get general information about all feeds accessible by client.
     *
     * @return {Promise<API.FeedInfo[]>}
     */
    async getFeeds(): Promise<API.FeedInfo[]> {
        const location = "/feeds";
        return await this.call("getFeeds", location, {
            method: "GET", schema: "FeedInfoArray"
        }) as API.FeedInfo[];
    }

    /**
     * Get general information about the feed.
     *
     * @param {string} feedName - name of the feed
     * @return {Promise<API.FeedInfo>}
     */
    async getFeedGeneral(feedName: string): Promise<API.FeedInfo> {
        const location = ut`/feeds/${feedName}`;
        return await this.call("getFeedGeneral", location, {
            method: "GET", schema: "FeedInfo"
        }) as API.FeedInfo;
    }

    /**
     * Get information about the total number and number of non-read and non-viewed stories in the feed.
     *
     * @param {string} feedName - name of the feed
     * @return {Promise<API.FeedStatus>}
     */
    async getFeedStatus(feedName: string): Promise<API.FeedStatus> {
        const location = ut`/feeds/${feedName}/status`;
        return await this.call("getFeedStatus", location, {
            method: "GET", schema: "FeedStatus"
        }) as API.FeedStatus;
    }

    /**
     * Update information about non-read and non-viewed stories in the feed.
     *
     * @param {string} feedName - name of the feed
     * @param {API.FeedStatusChange} change
     * @return {Promise<API.FeedStatus>}
     */
    async updateFeedStatus(feedName: string, change: API.FeedStatusChange): Promise<API.FeedStatus> {
        const location = ut`/feeds/${feedName}/status`;
        return await this.call("updateFeedStatus", location, {
            method: "PUT", body: change, schema: "FeedStatus"
        }) as API.FeedStatus;
    }

    /**
     * Get a slice of the feed, delimited by ``before`` or ``after`` moments (but not both) and the given ``limit``. If
     * neither ``before`` nor ``after`` are provided, the latest stories are returned. The node may decide to return
     * fewer stories than the given ``limit``. The stories are always sorted by moment, descending.
     *
     * @param {string} feedName - name of the feed
     * @param {number | null} after - filter stories posted strongly after this moment
     * @param {number | null} before - filter stories posted at or before this moment
     * @param {number | null} limit - maximum number of stories returned
     * @return {Promise<API.FeedSliceInfo>}
     */
    async getFeedSlice(
        feedName: string, after: number | null = null, before: number | null = null, limit: number | null = null
    ): Promise<API.FeedSliceInfo> {
        const location = ut`/feeds/${feedName}/stories`;
        const params = {after, before, limit};
        return await this.call("getFeedSlice", location, {
            method: "GET", params, schema: "FeedSliceInfo", bodies: true
        }) as API.FeedSliceInfo;
    }

    /**
     * Get the list of all groups of friends that exist on the node.
     *
     * @return {Promise<API.FriendGroupInfo[]>}
     */
    async getFriendGroups(): Promise<API.FriendGroupInfo[]> {
        const location = "/people/friends/groups";
        return await this.call("getFriendGroups", location, {
            method: "GET", schema: "FriendGroupInfoArray"
        }) as API.FriendGroupInfo[];
    }

    /**
     * Get the information about the group of friends.
     *
     * @param {string} id - ID of the group of friends
     * @return {Promise<API.FriendGroupInfo>}
     */
    async getFriendGroup(id: string): Promise<API.FriendGroupInfo> {
        const location = ut`/people/friends/groups/${id}`;
        return await this.call("getFriendGroup", location, {
            method: "GET", schema: "FriendGroupInfo"
        }) as API.FriendGroupInfo;
    }

    /**
     * Create a group of friends.
     *
     * @param {API.FriendGroupDescription} friendGroup
     * @return {Promise<API.FriendGroupInfo>}
     */
    async createFriendGroup(friendGroup: API.FriendGroupDescription): Promise<API.FriendGroupInfo> {
        const location = "/people/friends/groups";
        return await this.call("createFriendGroup", location, {
            method: "POST", body: friendGroup, schema: "FriendGroupInfo"
        }) as API.FriendGroupInfo;
    }

    /**
     * Update the details of the group of friends.
     *
     * @param {string} id - ID of the group of friends
     * @param {API.FriendGroupDescription} friendGroup
     * @return {Promise<API.FriendGroupInfo>}
     */
    async updateFriendGroup(id: string, friendGroup: API.FriendGroupDescription): Promise<API.FriendGroupInfo> {
        const location = ut`/people/friends/groups/${id}`;
        return await this.call("updateFriendGroup", location, {
            method: "PUT", body: friendGroup, schema: "FriendGroupInfo"
        }) as API.FriendGroupInfo;
    }

    /**
     * Delete the group of friends.
     *
     * @param {string} id - ID of the group of friends
     * @return {Promise<API.Result>}
     */
    async deleteFriendGroup(id: string): Promise<API.Result> {
        const location = ut`/people/friends/groups/${id}`;
        return await this.call("deleteFriendGroup", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Get the list of all friends of the node or friends belonging to a particular group.
     *
     * @param {string | null} groupId - ID of a group of friends
     * @return {Promise<API.FriendInfo[]>}
     */
    async getFriends(groupId: string | null = null): Promise<API.FriendInfo[]> {
        const location = ut`/people/friends`;
        const params = {groupId};
        return await this.call("getFriends", location, {
            method: "GET", params, schema: "FriendInfoArray"
        }) as API.FriendInfo[];
    }

    /**
     * Get the friendship information for the node given.
     *
     * @param {string} name - name of the node
     * @return {Promise<API.FriendInfo>}
     */
    async getFriend(name: string): Promise<API.FriendInfo> {
        const location = ut`/people/friends/${name}`;
        return await this.call("getFriend", location, {
            method: "GET", schema: "FriendInfo"
        }) as API.FriendInfo;
    }

    /**
     * Update the friendship status of the nodes passed in the input. If some node passed in the input is not a member
     * of some of the groups of friends listed for it, the node is added to them. If it is a member of some groups of
     * friends that are not listed for it, the node is removed from them.
     *
     * @param {API.FriendDescription[]} friends
     * @return {Promise<API.FriendInfo[]>}
     */
    async updateFriends(friends: API.FriendDescription[]): Promise<API.FriendInfo[]> {
        const location = "/people/friends";
        return await this.call("updateFriends", location, {
            method: "PUT", body: friends, schema: "FriendInfoArray"
        }) as API.FriendInfo[];
    }

    /**
     * Get the list of all nodes that added this node to their friends.
     *
     * @return {Promise<API.FriendOfInfo[]>}
     */
    async getFriendOfs(): Promise<API.FriendOfInfo[]> {
        const location = "/people/friend-ofs";
        return await this.call("getFriendOfs", location, {
            method: "GET", schema: "FriendOfInfoArray"
        }) as API.FriendOfInfo[];
    }

    /**
     * Get the information for the node given, whether it has added this node to its friends.
     *
     * @param {string} name - name of the node
     * @return {Promise<API.FriendOfInfo>}
     */
    async getFriendOf(name: string): Promise<API.FriendOfInfo> {
        const location = ut`/people/friend-ofs/${name}`;
        return await this.call("getFriendOf", location, {
            method: "GET", schema: "FriendOfInfo"
        }) as API.FriendOfInfo;
    }

    /**
     * Get the list of all nodes having administrative permissions on this node.
     *
     * @return {Promise<API.GrantInfo[]>}
     */
    async getAllGrants(): Promise<API.GrantInfo[]> {
        const location = "/grants";
        return await this.call("getAllGrants", location, {
            method: "GET", schema: "GrantInfoArray"
        }) as API.GrantInfo[];
    }

    /**
     * Get information about the administrative permissions granted to the node.
     *
     * @param {string} remoteNodeName - name of the node
     * @return {Promise<API.GrantInfo>}
     */
    async getGrant(remoteNodeName: string): Promise<API.GrantInfo> {
        const location = ut`/grants/${remoteNodeName}`;
        return await this.call("getGrant", location, {
            method: "GET", schema: "GrantInfo"
        }) as API.GrantInfo;
    }

    /**
     * Grant a set of administrative permissions to the node or revoke them.
     *
     * @param {string} remoteNodeName - name of the node
     * @param {API.GrantChange} change
     * @return {Promise<API.GrantInfo>}
     */
    async grantOrRevoke(remoteNodeName: string, change: API.GrantChange): Promise<API.GrantInfo> {
        const location = ut`/grants/${remoteNodeName}`;
        return await this.call("grantOrRevoke", location, {
            method: "PUT", body: change, schema: "GrantInfo"
        }) as API.GrantInfo;
    }

    /**
     * Revoke all administrative permissions granted to the node.
     *
     * @param {string} remoteNodeName - name of the node
     * @return {Promise<API.Result>}
     */
    async revokeAll(remoteNodeName: string): Promise<API.Result> {
        const location = ut`/grants/${remoteNodeName}`;
        return await this.call("revokeAll", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Upload a new media file owned by the node admin. The content of the file is passed in the request body.
     *
     * @param {Buffer} body
     * @param {string} contentType - content-type of ``body``
     * @return {Promise<API.PrivateMediaFileInfo>}
     */
    async uploadAdminMedia(body: Buffer, contentType: string): Promise<API.PrivateMediaFileInfo> {
        const location = "/media/private";
        return await this.call("uploadAdminMedia", location, {
            method: "POST", body, contentType, schema: "PrivateMediaFileInfo"
        }) as API.PrivateMediaFileInfo;
    }

    /**
     * Upload a new media file owned by the given node. The content of the file is passed in the request body.
     *
     * @param {string} clientName - name of the node owning the media file
     * @param {Buffer} body
     * @param {string} contentType - content-type of ``body``
     * @return {Promise<API.PrivateMediaFileInfo>}
     */
    async uploadPrivateMedia(
        clientName: string, body: Buffer, contentType: string
    ): Promise<API.PrivateMediaFileInfo> {
        const location = ut`/media/private/${clientName}`;
        return await this.call("uploadPrivateMedia", location, {
            method: "POST", body, contentType, schema: "PrivateMediaFileInfo"
        }) as API.PrivateMediaFileInfo;
    }

    /**
     * Get media file content (returned in the response body).
     *
     * @param {string} id - media file ID
     * @param {number | null} width - preferred width of the media in pixels; if present, the node will try to return
     * the smallest in size, but the best in quality variant of the media, according to the width provided
     * @param {boolean | null} download - if ``true``, the node will add ``Content-Disposition: attachment`` header to
     * the output
     * @return {Promise<Blob>}
     */
    async getPrivateMedia(id: string, width: number | null = null, download: boolean | null = null): Promise<Blob> {
        const location = ut`/media/private/${id}/data`;
        const params = {width, download};
        return await this.call("getPrivateMedia", location, {
            method: "GET", params, schema: "blob"
        }) as Blob;
    }

    /**
     * Get media file details.
     *
     * @param {string} id - media file ID
     * @return {Promise<API.PrivateMediaFileInfo>}
     */
    async getPrivateMediaInfo(id: string): Promise<API.PrivateMediaFileInfo> {
        const location = ut`/media/private/${id}/info`;
        return await this.call("getPrivateMediaInfo", location, {
            method: "GET", schema: "PrivateMediaFileInfo"
        }) as API.PrivateMediaFileInfo;
    }

    /**
     * Get the list of all postings and comments the media file is attached to.
     *
     * @param {string} id - media file ID
     * @return {Promise<API.EntryInfo[]>}
     */
    async getPrivateMediaParentEntry(id: string): Promise<API.EntryInfo[]> {
        const location = ut`/media/private/${id}/parent`;
        return await this.call("getPrivateMediaParentEntry", location, {
            method: "GET", schema: "EntryInfoArray", bodies: true
        }) as API.EntryInfo[];
    }

    /**
     * Upload a new media file. The content of the file is passed in the request body
     *
     * @param {Buffer} body
     * @param {string} contentType - content-type of ``body``
     * @return {Promise<API.PublicMediaFileInfo>}
     */
    async uploadPublicMedia(body: Buffer, contentType: string): Promise<API.PublicMediaFileInfo> {
        const location = "/media/public";
        return await this.call("uploadPublicMedia", location, {
            method: "POST", body, contentType, schema: "PublicMediaFileInfo"
        }) as API.PublicMediaFileInfo;
    }

    /**
     * Get media file content (returned in the response body).
     *
     * @param {string} id - media file ID
     * @param {number | null} width - preferred width of the media in pixels; if present, the node will try to return
     * the smallest in size, but the best in quality variant of the media, according to the width provided
     * @param {boolean | null} download - if ``true``, the node will add ``Content-Disposition: attachment`` header to
     * the output
     * @return {Promise<Blob>}
     */
    async getPublicMedia(id: string, width: number | null = null, download: boolean | null = null): Promise<Blob> {
        const location = ut`/media/public/${id}/data`;
        const params = {width, download};
        return await this.call("getPublicMedia", location, {
            method: "GET", params, schema: "blob"
        }) as Blob;
    }

    /**
     * Get media file details.
     *
     * @param {string} id - media file ID
     * @return {Promise<API.PublicMediaFileInfo>}
     */
    async getPublicMediaInfo(id: string): Promise<API.PublicMediaFileInfo> {
        const location = ut`/media/public/${id}/info`;
        return await this.call("getPublicMediaInfo", location, {
            method: "GET", schema: "PublicMediaFileInfo"
        }) as API.PublicMediaFileInfo;
    }

    /**
     * Get the name of the node. Admin user receives the current status of the latest operation with the node name.
     *
     * @return {Promise<API.NodeNameInfo>}
     */
    async getNodeName(): Promise<API.NodeNameInfo> {
        const location = "/node-name";
        return await this.call("getNodeName", location, {
            method: "GET", schema: "NodeNameInfo"
        }) as API.NodeNameInfo;
    }

    /**
     * Register a new name for the node. The corresponding signing key is generated automatically and stored at the
     * node. The updating key is generated and returned in the encoded form and in the form of mnemonic (a sequence of
     * English words). The words need to be written down and stored securely to be able to perform further operations
     * with the name.
     *
     * @param {API.NameToRegister} nameToRegister
     * @return {Promise<API.RegisteredNameSecret>}
     */
    async createNodeName(nameToRegister: API.NameToRegister): Promise<API.RegisteredNameSecret> {
        const location = "/node-name";
        return await this.call("createNodeName", location, {
            method: "POST", body: nameToRegister, schema: "RegisteredNameSecret"
        }) as API.RegisteredNameSecret;
    }

    /**
     * Update the name of the node. May be used to assign an already-registered name to the node (the corresponding
     * signing key is generated automatically and stored at the node), or to prolong the name. The secret or mnemonic
     * of the updating key must be provided for this operation.
     *
     * @param {API.RegisteredNameSecret} secret
     * @return {Promise<API.Result>}
     */
    async updateNodeName(secret: API.RegisteredNameSecret): Promise<API.Result> {
        const location = "/node-name";
        return await this.call("updateNodeName", location, {
            method: "PUT", body: secret, schema: "Result"
        }) as API.Result;
    }

    /**
     * Delete all the information related to the node name (including the signing key) from the node. The name record
     * on the naming server is not touched.
     *
     * @return {Promise<API.Result>}
     */
    async deleteNodeName(): Promise<API.Result> {
        const location = "/node-name";
        return await this.call("deleteNodeName", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Get the updating key mnemonic stored on the node.
     *
     * @return {Promise<API.KeyMnemonic>}
     */
    async getStoredMnemonic(): Promise<API.KeyMnemonic> {
        const location = "/node-name/mnemonic";
        return await this.call("getStoredMnemonic", location, {
            method: "GET", schema: "KeyMnemonic"
        }) as API.KeyMnemonic;
    }

    /**
     * Store the updating key mnemonic on the node.
     *
     * @param {API.KeyMnemonic} mnemonic
     * @return {Promise<API.Result>}
     */
    async storeMnemonic(mnemonic: API.KeyMnemonic): Promise<API.Result> {
        const location = "/node-name/mnemonic";
        return await this.call("storeMnemonic", location, {
            method: "POST", body: mnemonic, schema: "Result"
        }) as API.Result;
    }

    /**
     * Delete the updating key mnemonic stored on the node.
     *
     * @return {Promise<API.Result>}
     */
    async deleteStoredMnemonic(): Promise<API.Result> {
        const location = "/node-name/mnemonic";
        return await this.call("deleteStoredMnemonic", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Accept a notification packet from another node. Notification packets older than 10 minutes are ignored. The
     * sending node should update the packet timestamp and the signature and send the packet again. This mechanism
     * prevents attackers from recording and resending old signed packets.
     *
     * @param {API.NotificationPacket} packet
     * @return {Promise<API.Result>}
     */
    async sendNotification(packet: API.NotificationPacket): Promise<API.Result> {
        const location = "/notifications";
        return await this.call("sendNotification", location, {
            method: "POST", body: packet, schema: "Result"
        }) as API.Result;
    }

    /**
     * Get general information about other nodes.
     *
     * @return {Promise<API.PeopleGeneralInfo>}
     */
    async getPeopleGeneral(): Promise<API.PeopleGeneralInfo> {
        const location = "/people";
        return await this.call("getPeopleGeneral", location, {
            method: "GET", schema: "PeopleGeneralInfo"
        }) as API.PeopleGeneralInfo;
    }

    /**
     * Register the plugin. If the plugin authenticates as root admin, the plugin is registered at the server level. If
     * the plugin authenticates as node admin, the plugin is registered at the node level.
     *
     * @param {API.PluginDescription} plugin
     * @return {Promise<API.PluginInfo>}
     */
    async registerPlugin(plugin: API.PluginDescription): Promise<API.PluginInfo> {
        const location = "/plugins";
        return await this.call("registerPlugin", location, {
            method: "POST", body: plugin, schema: "PluginInfo"
        }) as API.PluginInfo;
    }

    /**
     * Get information about all plugins registered for the node and server.
     *
     * @return {Promise<API.PluginInfo[]>}
     */
    async getPlugins(): Promise<API.PluginInfo[]> {
        const location = "/plugins";
        return await this.call("getPlugins", location, {
            method: "GET", schema: "PluginInfoArray"
        }) as API.PluginInfo[];
    }

    /**
     * Get information about the plugin.
     *
     * @param {string} pluginName - name of the plugin
     * @return {Promise<API.PluginInfo>}
     */
    async getPlugin(pluginName: string): Promise<API.PluginInfo> {
        const location = ut`/plugins/${pluginName}`;
        return await this.call("getPlugin", location, {
            method: "GET", schema: "PluginInfo"
        }) as API.PluginInfo;
    }

    /**
     * Unregister the plugin.
     *
     * @param {string} pluginName - name of the plugin
     * @return {Promise<API.Result>}
     */
    async unregisterPlugin(pluginName: string): Promise<API.Result> {
        const location = ut`/plugins/${pluginName}`;
        return await this.call("unregisterPlugin", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Create a new posting from the text given and publish it in the given feeds (if any). The heading and the preview
     * of the posting are created automatically, if needed. The posting owner must authenticate in some way. If the
     * posting is not signed, it will be kept for a limited period of time and then erased. If authenticated as admin,
     * the node signs the posting.
     *
     * @param {API.PostingText} posting
     * @return {Promise<API.PostingInfo>}
     */
    async createPosting(posting: API.PostingText): Promise<API.PostingInfo> {
        const location = "/postings";
        return await this.call("createPosting", location, {
            method: "POST", body: posting, schema: "PostingInfo", bodies: true, srcBodies: true
        }) as API.PostingInfo;
    }

    /**
     * Update the posting, creating a new revision of it. The text is processed just like in the ``POST`` request.
     *
     * @param {string} id - ID of the posting
     * @param {API.PostingText} posting
     * @return {Promise<API.PostingInfo>}
     */
    async updatePosting(id: string, posting: API.PostingText): Promise<API.PostingInfo> {
        const location = ut`/postings/${id}`;
        return await this.call("updatePosting", location, {
            method: "PUT", body: posting, schema: "PostingInfo", bodies: true, srcBodies: true
        }) as API.PostingInfo;
    }

    /**
     * Get an individual posting.
     *
     * @param {string} id - ID of the posting
     * @param {boolean} withSource - include source text of the posting
     * @return {Promise<API.PostingInfo>}
     */
    async getPosting(id: string, withSource: boolean = false): Promise<API.PostingInfo> {
        const include = commaSeparatedFlags({"source": withSource});
        const location = ut`/postings/${id}`;
        const params = {include};
        return await this.call("getPosting", location, {
            method: "GET", params, schema: "PostingInfo", bodies: true
        }) as API.PostingInfo;
    }

    /**
     * Delete the posting. The posting may not be purged from the database immediately, but preserved for some period
     * of time to give a chance to restore it.
     *
     * @param {string} id - ID of the posting
     * @return {Promise<API.Result>}
     */
    async deletePosting(id: string): Promise<API.Result> {
        const location = ut`/postings/${id}`;
        return await this.call("deletePosting", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Get all postings linked to media attached to the given posting.
     *
     * @param {string} id - ID of the posting
     * @return {Promise<API.PostingInfo[]>}
     */
    async getPostingsAttachedToPosting(id: string): Promise<API.PostingInfo[]> {
        const location = ut`/postings/${id}/attached`;
        return await this.call("getPostingsAttachedToPosting", location, {
            method: "GET", schema: "PostingInfoArray", bodies: true
        }) as API.PostingInfo[];
    }

    /**
     * Get all revisions of the posting, but not more than ``limit``. The node may decide to return fewer revisions
     * than the given ``limit``.
     *
     * @param {string} postingId - ID of the posting
     * @param {number | null} limit - maximum number of revisions returned
     * @return {Promise<API.PostingRevisionInfo[]>}
     */
    async getPostingRevisions(postingId: string, limit: number | null = null): Promise<API.PostingRevisionInfo[]> {
        const location = ut`/postings/${postingId}/revisions`;
        const params = {limit};
        return await this.call("getPostingRevisions", location, {
            method: "GET", params, schema: "PostingRevisionInfoArray", bodies: true
        }) as API.PostingRevisionInfo[];
    }

    /**
     * Get an individual revision of the posting.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} id - ID of the revision
     * @return {Promise<API.PostingRevisionInfo>}
     */
    async getPostingRevision(postingId: string, id: string): Promise<API.PostingRevisionInfo> {
        const location = ut`/postings/${postingId}/revisions/${id}`;
        return await this.call("getPostingRevision", location, {
            method: "GET", schema: "PostingRevisionInfo", bodies: true
        }) as API.PostingRevisionInfo;
    }

    /**
     * Restore a revision of the posting. A new revision is created with the same content as in the given revision.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} id - ID of the revision
     * @return {Promise<API.PostingRevisionInfo>}
     */
    async restorePostingRevision(postingId: string, id: string): Promise<API.PostingRevisionInfo> {
        const location = ut`/postings/${postingId}/revisions/${id}/restore`;
        return await this.call("restorePostingRevision", location, {
            method: "POST", schema: "PostingRevisionInfo", bodies: true
        }) as API.PostingRevisionInfo;
    }

    /**
     * Add a reaction to the given posting. The reaction owner must authenticate in some way. Only one reaction is
     * allowed from each owner to a particular posting. If a reaction from the same owner to this posting already
     * exists, it is overwritten. If the reaction is not signed, the reaction will be kept for a limited period of time
     * and then erased (the previous reaction of the same owner will be restored, if any).
     *
     * @param {string} postingId - ID of the posting
     * @param {API.ReactionDescription} reaction
     * @return {Promise<API.ReactionCreated>}
     */
    async createPostingReaction(postingId: string, reaction: API.ReactionDescription): Promise<API.ReactionCreated> {
        const location = ut`/postings/${postingId}/reactions`;
        return await this.call("createPostingReaction", location, {
            method: "POST", body: reaction, schema: "ReactionCreated"
        }) as API.ReactionCreated;
    }

    /**
     * Get a slice of the list of reactions to the given posting, optionally filtered by reaction type, delimited by
     * ``before`` moment and the given ``limit``. If ``before`` is not provided, the latest reactions are returned. The
     * node may decide to return fewer reactions than the given ``limit``. The reactions are always sorted by moment,
     * descending.
     *
     * @param {string} postingId - ID of the posting
     * @param {boolean | null} negative - ``true``, to filter negative reactions, ``false``, to filter positive ones
     * @param {number | null} emoji - filter by reaction code, usually interpreted by clients as emoji code point
     * @param {number | null} before - filter reactions created at or before this moment
     * @param {number | null} limit - maximum number of reactions returned
     * @return {Promise<API.ReactionsSliceInfo>}
     */
    async getPostingReactionsSlice(
        postingId: string, negative: boolean | null = null, emoji: number | null = null, before: number | null = null,
        limit: number | null = null
    ): Promise<API.ReactionsSliceInfo> {
        const location = ut`/postings/${postingId}/reactions`;
        const params = {negative, emoji, before, limit};
        return await this.call("getPostingReactionsSlice", location, {
            method: "GET", params, schema: "ReactionsSliceInfo"
        }) as API.ReactionsSliceInfo;
    }

    /**
     * Update the reaction's operations or set operations' overrides.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} ownerName - reaction owner node name
     * @param {API.ReactionOverride} reaction
     * @return {Promise<API.ReactionInfo>}
     */
    async updatePostingReaction(
        postingId: string, ownerName: string, reaction: API.ReactionOverride
    ): Promise<API.ReactionInfo> {
        const location = ut`/postings/${postingId}/reactions/${ownerName}`;
        return await this.call("updatePostingReaction", location, {
            method: "PUT", body: reaction, schema: "ReactionInfo"
        }) as API.ReactionInfo;
    }

    /**
     * Get the detailed information about the reaction of the given owner to the given posting. If no reaction with
     * such an owner exists, an empty structure with just ``postingId`` is returned.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} ownerName - reaction owner node name
     * @return {Promise<API.ReactionInfo>}
     */
    async getPostingReaction(postingId: string, ownerName: string): Promise<API.ReactionInfo> {
        const location = ut`/postings/${postingId}/reactions/${ownerName}`;
        return await this.call("getPostingReaction", location, {
            method: "GET", schema: "ReactionInfo"
        }) as API.ReactionInfo;
    }

    /**
     * Delete all reactions to the given posting.
     *
     * @param {string} postingId - ID of the posting
     * @return {Promise<API.Result>}
     */
    async deleteAllPostingReactions(postingId: string): Promise<API.Result> {
        const location = ut`/postings/${postingId}/reactions`;
        return await this.call("deleteAllPostingReactions", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Delete the reaction of the given owner to the given posting.
     *
     * @param {string} postingId - ID of the posting
     * @param {string} ownerName - reaction owner node name
     * @return {Promise<API.ReactionTotalsInfo>}
     */
    async deletePostingReaction(postingId: string, ownerName: string): Promise<API.ReactionTotalsInfo> {
        const location = ut`/postings/${postingId}/reactions/${ownerName}`;
        return await this.call("deletePostingReaction", location, {
            method: "DELETE", schema: "ReactionTotalsInfo"
        }) as API.ReactionTotalsInfo;
    }

    /**
     * Search reactions by criteria provided. Both reaction owner and at least one posting ID should be provided to
     * search, otherwise an empty list is returned.
     *
     * @param {API.ReactionsFilter} filter
     * @return {Promise<API.ReactionInfo[]>}
     */
    async searchPostingReactions(filter: API.ReactionsFilter): Promise<API.ReactionInfo[]> {
        const location = "/postings/reactions/search";
        return await this.call("searchPostingReactions", location, {
            method: "POST", body: filter, schema: "ReactionInfoArray"
        }) as API.ReactionInfo[];
    }

    /**
     * Get a summary of reactions to the posting given.
     *
     * @param {string} postingId - ID of the posting
     * @return {Promise<API.ReactionTotalsInfo>}
     */
    async getPostingReactionTotals(postingId: string): Promise<API.ReactionTotalsInfo> {
        const location = ut`/postings/${postingId}/reaction-totals`;
        return await this.call("getPostingReactionTotals", location, {
            method: "GET", schema: "ReactionTotalsInfo"
        }) as API.ReactionTotalsInfo;
    }

    /**
     * Search summaries of reactions by criteria provided. At least one posting ID should be provided to search,
     * otherwise an empty list is returned.
     *
     * @param {API.ReactionTotalsFilter} filter
     * @return {Promise<API.ReactionTotalsInfo[]>}
     */
    async searchPostingReactionTotals(filter: API.ReactionTotalsFilter): Promise<API.ReactionTotalsInfo[]> {
        const location = "/postings/reaction-totals/search";
        return await this.call("searchPostingReactionTotals", location, {
            method: "POST", body: filter, schema: "ReactionTotalsInfoArray"
        }) as API.ReactionTotalsInfo[];
    }

    /**
     * Get the profile.
     *
     * @param {boolean} withSource - include source text of the bio
     * @return {Promise<API.ProfileInfo>}
     */
    async getProfile(withSource: boolean = false): Promise<API.ProfileInfo> {
        const include = commaSeparatedFlags({"source": withSource});
        const location = ut`/profile`;
        const params = {include};
        return await this.call("getProfile", location, {
            method: "GET", params, schema: "ProfileInfo"
        }) as API.ProfileInfo;
    }

    /**
     * Update the profile. Fields that are not set in the request body are left intact. Fields that are set to an empty
     * value are reset to their defaults.
     *
     * @param {API.ProfileAttributes} profile
     * @return {Promise<API.ProfileInfo>}
     */
    async updateProfile(profile: API.ProfileAttributes): Promise<API.ProfileInfo> {
        const location = "/profile";
        return await this.call("updateProfile", location, {
            method: "PUT", body: profile, schema: "ProfileInfo"
        }) as API.ProfileInfo;
    }

    /**
     * Get the current status of the request to delete the node.
     *
     * @return {Promise<API.DeleteNodeStatus>}
     */
    async getDeleteNodeRequestStatus(): Promise<API.DeleteNodeStatus> {
        const location = "/provider/delete-node";
        return await this.call("getDeleteNodeRequestStatus", location, {
            method: "GET", schema: "DeleteNodeStatus"
        }) as API.DeleteNodeStatus;
    }

    /**
     * Send a request to the provider to delete the node.
     *
     * @param {API.DeleteNodeText} deleteNodeText
     * @return {Promise<API.DeleteNodeStatus>}
     */
    async sendDeleteNodeRequest(deleteNodeText: API.DeleteNodeText): Promise<API.DeleteNodeStatus> {
        const location = "/provider/delete-node";
        return await this.call("sendDeleteNodeRequest", location, {
            method: "POST", body: deleteNodeText, schema: "DeleteNodeStatus"
        }) as API.DeleteNodeStatus;
    }

    /**
     * Cancel the request to delete the node.
     *
     * @return {Promise<API.DeleteNodeStatus>}
     */
    async cancelDeleteNodeRequest(): Promise<API.DeleteNodeStatus> {
        const location = "/provider/delete-node";
        return await this.call("cancelDeleteNodeRequest", location, {
            method: "DELETE", schema: "DeleteNodeStatus"
        }) as API.DeleteNodeStatus;
    }

    /**
     * Open the URL passed in the parameters and pass to the client the media file returned by the server.
     *
     * @param {string} url
     * @return {Promise<Blob>}
     */
    async proxyMedia(url: string): Promise<Blob> {
        const location = ut`/proxy/media`;
        const params = {url};
        return await this.call("proxyMedia", location, {
            method: "GET", params, schema: "blob"
        }) as Blob;
    }

    /**
     * Parse the page located at the URL and return the title, the description and the picture that may be used to
     * build a preview of the page.
     *
     * @param {string} url
     * @return {Promise<API.LinkPreviewInfo>}
     */
    async proxyLinkPreview(url: string): Promise<API.LinkPreviewInfo> {
        const location = ut`/proxy/link-preview`;
        const params = {url};
        return await this.call("proxyLinkPreview", location, {
            method: "GET", params, schema: "LinkPreviewInfo"
        }) as API.LinkPreviewInfo;
    }

    /**
     * Register a client at the push relay server to receive messages from this node. The operation is synchronous.
     *
     * @param {API.PushRelayClientAttributes} attributes
     * @return {Promise<API.Result>}
     */
    async registerAtPushRelay(attributes: API.PushRelayClientAttributes): Promise<API.Result> {
        const location = "/push-relay";
        return await this.call("registerAtPushRelay", location, {
            method: "POST", body: attributes, schema: "Result"
        }) as API.Result;
    }

    /**
     * Send a request to the remote node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {API.AskDescription} details
     * @return {Promise<API.Result>}
     */
    async askRemoteNode(remoteNodeName: string, details: API.AskDescription): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/ask`;
        return await this.call("askRemoteNode", location, {
            method: "POST", body: details, schema: "Result"
        }) as API.Result;
    }

    /**
     * Add a comment to the posting on the remote node and register it in the registry at the local node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} postingId - ID of the posting on the remote node
     * @param {API.CommentSourceText} comment
     * @return {Promise<API.Result>}
     */
    async createRemoteComment(
        remoteNodeName: string, postingId: string, comment: API.CommentSourceText
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments`;
        return await this.call("createRemoteComment", location, {
            method: "POST", body: comment, schema: "Result", srcBodies: true
        }) as API.Result;
    }

    /**
     * Update a comment to the posting on the remote node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} postingId - ID of the posting on the remote node
     * @param {string} commentId - ID of the comment on the remote node
     * @param {API.CommentSourceText} comment
     * @return {Promise<API.Result>}
     */
    async updateRemoteComment(
        remoteNodeName: string, postingId: string, commentId: string, comment: API.CommentSourceText
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments/${commentId}`;
        return await this.call("updateRemoteComment", location, {
            method: "PUT", body: comment, schema: "Result", srcBodies: true
        }) as API.Result;
    }

    /**
     * Delete a comment from the registry of all comments at the local node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} postingId - ID of the posting on the remote node
     * @param {string} commentId - ID of the comment on the remote node
     * @return {Promise<API.Result>}
     */
    async deleteRemoteComment(remoteNodeName: string, postingId: string, commentId: string): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments/${commentId}`;
        return await this.call("deleteRemoteComment", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Verify the signature of the given comment to the posting on the remote node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} postingId - ID of the posting on the remote node
     * @param {string} commentId - ID of the comment on the remote node
     * @return {Promise<API.AsyncOperationCreated>}
     */
    async verifyRemoteComment(
        remoteNodeName: string, postingId: string, commentId: string
    ): Promise<API.AsyncOperationCreated> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments/${commentId}/verify`;
        return await this.call("verifyRemoteComment", location, {
            method: "POST", schema: "AsyncOperationCreated"
        }) as API.AsyncOperationCreated;
    }

    /**
     * Add a reaction to the comment on the remote node and register it in the registry at the local node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} postingId - ID of the posting on the remote node
     * @param {string} commentId - ID of the comment on the remote node
     * @param {API.ReactionAttributes} reaction
     * @return {Promise<API.Result>}
     */
    async createRemoteCommentReaction(
        remoteNodeName: string, postingId: string, commentId: string, reaction: API.ReactionAttributes
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments/${commentId}/reactions`;
        return await this.call("createRemoteCommentReaction", location, {
            method: "POST", body: reaction, schema: "Result"
        }) as API.Result;
    }

    /**
     * Delete a reaction from the registry of all reactions at the local node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} postingId - ID of the posting on the remote node
     * @param {string} commentId - ID of the comment on the remote node
     * @return {Promise<API.Result>}
     */
    async deleteRemoteCommentReaction(
        remoteNodeName: string, postingId: string, commentId: string
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments/${commentId}/reactions`;
        return await this.call("deleteRemoteCommentReaction", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Verify the signature of the reaction of the given owner to the comment on the remote node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} postingId - ID of the posting on the remote node
     * @param {string} commentId - ID of the comment on the remote node
     * @param {string} ownerName - reaction owner node name
     * @return {Promise<API.AsyncOperationCreated>}
     */
    async verifyRemoteCommentReaction(
        remoteNodeName: string, postingId: string, commentId: string, ownerName: string
    ): Promise<API.AsyncOperationCreated> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments/${commentId}/reactions/${ownerName}/verify`;
        return await this.call("verifyRemoteCommentReaction", location, {
            method: "POST", schema: "AsyncOperationCreated"
        }) as API.AsyncOperationCreated;
    }

    /**
     * Add a posting to the remote node and register it in the registry at the local node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {API.PostingSourceText} posting
     * @return {Promise<API.Result>}
     */
    async createRemotePosting(remoteNodeName: string, posting: API.PostingSourceText): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings`;
        return await this.call("createRemotePosting", location, {
            method: "POST", body: posting, schema: "Result", srcBodies: true
        }) as API.Result;
    }

    /**
     * Update a posting on the remote node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} postingId - ID of the posting on the remote node
     * @param {API.PostingSourceText} posting
     * @return {Promise<API.Result>}
     */
    async updateRemotePosting(
        remoteNodeName: string, postingId: string, posting: API.PostingSourceText
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}`;
        return await this.call("updateRemotePosting", location, {
            method: "PUT", body: posting, schema: "Result", srcBodies: true
        }) as API.Result;
    }

    /**
     * Delete a posting from the registry of all remote postings at the local node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} postingId - ID of the posting on the remote node
     * @return {Promise<API.Result>}
     */
    async deleteRemotePosting(remoteNodeName: string, postingId: string): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}`;
        return await this.call("deleteRemotePosting", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Verify the signature of the given posting.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} id - ID of the posting on the remote node
     * @return {Promise<API.AsyncOperationCreated>}
     */
    async verifyRemotePosting(remoteNodeName: string, id: string): Promise<API.AsyncOperationCreated> {
        const location = ut`/nodes/${remoteNodeName}/postings/${id}/verify`;
        return await this.call("verifyRemotePosting", location, {
            method: "POST", schema: "AsyncOperationCreated"
        }) as API.AsyncOperationCreated;
    }

    /**
     * Verify the signature of the given revision of a posting.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} id - ID of the posting on the remote node
     * @param {string} revisionId - ID of the posting revision
     * @return {Promise<API.AsyncOperationCreated>}
     */
    async verifyRemotePostingRevision(
        remoteNodeName: string, id: string, revisionId: string
    ): Promise<API.AsyncOperationCreated> {
        const location = ut`/nodes/${remoteNodeName}/postings/${id}/revisions/${revisionId}/verify`;
        return await this.call("verifyRemotePostingRevision", location, {
            method: "POST", schema: "AsyncOperationCreated"
        }) as API.AsyncOperationCreated;
    }

    /**
     * Add a reaction to the posting on the remote node and register it in the registry at the local node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} postingId - ID of the posting on the remote node
     * @param {API.ReactionAttributes} reaction
     * @return {Promise<API.Result>}
     */
    async createRemotePostingReaction(
        remoteNodeName: string, postingId: string, reaction: API.ReactionAttributes
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/reactions`;
        return await this.call("createRemotePostingReaction", location, {
            method: "POST", body: reaction, schema: "Result"
        }) as API.Result;
    }

    /**
     * Delete a reaction from the registry of all reactions at the local node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} postingId - ID of the posting on the remote node
     * @return {Promise<API.Result>}
     */
    async deleteRemotePostingReaction(remoteNodeName: string, postingId: string): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/reactions`;
        return await this.call("deleteRemotePostingReaction", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Verify the signature of the reaction of the given owner to the posting on the remote node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} postingId - ID of the posting on the remote node
     * @param {string} ownerName - reaction owner node name
     * @return {Promise<API.AsyncOperationCreated>}
     */
    async verifyRemotePostingReaction(
        remoteNodeName: string, postingId: string, ownerName: string
    ): Promise<API.AsyncOperationCreated> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/reactions/${ownerName}/verify`;
        return await this.call("verifyRemotePostingReaction", location, {
            method: "POST", schema: "AsyncOperationCreated"
        }) as API.AsyncOperationCreated;
    }

    /**
     * Sign and send the order to the remote node and store it in the registry at the local node.
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {API.SheriffOrderAttributes} sheriffOrder
     * @return {Promise<API.Result>}
     */
    async createRemoteSheriffOrder(
        remoteNodeName: string, sheriffOrder: API.SheriffOrderAttributes
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/sheriff/orders`;
        return await this.call("createRemoteSheriffOrder", location, {
            method: "POST", body: sheriffOrder, schema: "Result"
        }) as API.Result;
    }

    /**
     * Get the details of the given sheriff's order
     *
     * @param {string} remoteNodeName - name of the remote node
     * @param {string} id - ID of the order
     * @return {Promise<API.SheriffOrderInfo>}
     */
    async getRemoteSheriffOrder(remoteNodeName: string, id: string): Promise<API.SheriffOrderInfo> {
        const location = ut`/nodes/${remoteNodeName}/sheriff/orders/${id}`;
        return await this.call("getRemoteSheriffOrder", location, {
            method: "GET", schema: "SheriffOrderInfo"
        }) as API.SheriffOrderInfo;
    }

    /**
     * Update the given settings. If the input contains node settings, they are validated and the first validation
     * error is returned, if any. The update is always performed as a whole - if there is an error saving any one of
     * the settings in the input, none of them are updated. \
     * \
     * If one of the settings to be updated is privileged, *root secret* authentication is required. If one of the
     * settings to be updated is non-privileged, *admin* authentication is required.
     *
     * @param {API.SettingInfo[]} settings
     * @return {Promise<API.Result>}
     */
    async updateSettings(settings: API.SettingInfo[]): Promise<API.Result> {
        const location = "/settings";
        return await this.call("updateSettings", location, {
            method: "PUT", body: settings, schema: "Result"
        }) as API.Result;
    }

    /**
     * Get all client settings, sorted by name.
     *
     * @param {string | null} prefix - filter settings whose names start with the given prefix, case-sensitive
     * (``client.`` prefix must be included)
     * @return {Promise<API.SettingInfo[]>}
     */
    async getClientSettings(prefix: string | null = null): Promise<API.SettingInfo[]> {
        const location = ut`/settings/client`;
        const params = {prefix};
        return await this.call("getClientSettings", location, {
            method: "GET", params, schema: "SettingInfoArray"
        }) as API.SettingInfo[];
    }

    /**
     * Get all node settings, sorted by name. If a setting has not changed its value from the default, it is omitted.
     *
     * @param {string | null} prefix - filter settings whose names start with the given prefix, case-sensitive
     * @return {Promise<API.SettingInfo[]>}
     */
    async getNodeSettings(prefix: string | null = null): Promise<API.SettingInfo[]> {
        const location = ut`/settings/node`;
        const params = {prefix};
        return await this.call("getNodeSettings", location, {
            method: "GET", params, schema: "SettingInfoArray"
        }) as API.SettingInfo[];
    }

    /**
     * Get all node settings metadata, sorted by name.
     *
     * @param {string | null} prefix - filter settings whose names start with the given prefix, case-sensitive
     * @return {Promise<API.SettingMetaInfo[]>}
     */
    async getNodeSettingsMetadata(prefix: string | null = null): Promise<API.SettingMetaInfo[]> {
        const location = ut`/settings/node/metadata`;
        const params = {prefix};
        return await this.call("getNodeSettingsMetadata", location, {
            method: "GET", params, schema: "SettingMetaInfoArray"
        }) as API.SettingMetaInfo[];
    }

    /**
     * Update node settings metadata, overriding built-in defaults.
     *
     * @param {API.SettingMetaAttributes[]} metadata
     * @return {Promise<API.Result>}
     */
    async updateNodeSettingsMetadata(metadata: API.SettingMetaAttributes[]): Promise<API.Result> {
        const location = "/settings/node/metadata";
        return await this.call("updateNodeSettingsMetadata", location, {
            method: "PUT", body: metadata, schema: "Result"
        }) as API.Result;
    }

    /**
     * Get a slice of the list of groups of complaints, optionally filtered by status, delimited by the ``before`` or
     * ``after`` moment and the given ``limit``. If neither ``before`` nor ``after`` are provided, the latest groups
     * are returned. The node may decide to return fewer groups than the given ``limit``. The groups are always sorted
     * by moment, descending.
     *
     * @param {number | null} after - filter groups created strongly after this moment
     * @param {number | null} before - filter groups created at or before this moment
     * @param {number | null} limit - maximum number of groups returned
     * @param {API.SheriffComplaintStatus | null} status - filter groups by status
     * @return {Promise<API.SheriffComplaintGroupsSliceInfo>}
     */
    async getSheriffComplaintGroupsSlice(
        after: number | null = null, before: number | null = null, limit: number | null = null,
        status: API.SheriffComplaintStatus | null = null
    ): Promise<API.SheriffComplaintGroupsSliceInfo> {
        const location = ut`/sheriff/complaints/groups`;
        const params = {after, before, limit, status};
        return await this.call("getSheriffComplaintGroupsSlice", location, {
            method: "GET", params, schema: "SheriffComplaintGroupsSliceInfo"
        }) as API.SheriffComplaintGroupsSliceInfo;
    }

    /**
     * Get details of the given group of complaints.
     *
     * @param {string} id - ID of the group of complaints
     * @return {Promise<API.SheriffComplaintGroupInfo>}
     */
    async getSheriffComplaintGroup(id: string): Promise<API.SheriffComplaintGroupInfo> {
        const location = ut`/sheriff/complaints/groups/${id}`;
        return await this.call("getSheriffComplaintGroup", location, {
            method: "GET", schema: "SheriffComplaintGroupInfo"
        }) as API.SheriffComplaintGroupInfo;
    }

    /**
     * Get complaints included in the given group of complaints.
     *
     * @param {string} id - ID of the group of complaints
     * @return {Promise<API.SheriffComplaintInfo[]>}
     */
    async getSheriffComplaintsByGroup(id: string): Promise<API.SheriffComplaintInfo[]> {
        const location = ut`/sheriff/complaints/groups/${id}/complaints`;
        return await this.call("getSheriffComplaintsByGroup", location, {
            method: "GET", schema: "SheriffComplaintInfoArray"
        }) as API.SheriffComplaintInfo[];
    }

    /**
     * Make a decision on the given group of complaints.
     *
     * @param {string} id - ID of the group of complaints
     * @param {API.SheriffComplaintDecisionText} decision
     * @return {Promise<API.SheriffComplaintGroupInfo>}
     */
    async updateSheriffComplaintGroup(
        id: string, decision: API.SheriffComplaintDecisionText
    ): Promise<API.SheriffComplaintGroupInfo> {
        const location = ut`/sheriff/complaints/groups/${id}`;
        return await this.call("updateSheriffComplaintGroup", location, {
            method: "PUT", body: decision, schema: "SheriffComplaintGroupInfo"
        }) as API.SheriffComplaintGroupInfo;
    }

    /**
     * Send a complaint to the sheriff.
     *
     * @param {API.SheriffComplaintText} complaint
     * @return {Promise<API.SheriffComplaintInfo>}
     */
    async createSheriffComplaint(complaint: API.SheriffComplaintText): Promise<API.SheriffComplaintInfo> {
        const location = "/sheriff/complaints";
        return await this.call("createSheriffComplaint", location, {
            method: "POST", body: complaint, schema: "SheriffComplaintInfo"
        }) as API.SheriffComplaintInfo;
    }

    /**
     * Receive and execute the sheriff's order.
     *
     * @param {API.SheriffOrderDetails} sheriffOrder
     * @return {Promise<API.Result>}
     */
    async createSheriffOrder(sheriffOrder: API.SheriffOrderDetails): Promise<API.Result> {
        const location = "/sheriff/orders";
        return await this.call("createSheriffOrder", location, {
            method: "POST", body: sheriffOrder, schema: "Result"
        }) as API.Result;
    }

    /**
     * Get an individual story.
     *
     * @param {string} id - ID of the story
     * @return {Promise<API.StoryInfo>}
     */
    async getStory(id: string): Promise<API.StoryInfo> {
        const location = ut`/stories/${id}`;
        return await this.call("getStory", location, {
            method: "GET", schema: "StoryInfo", bodies: true
        }) as API.StoryInfo;
    }

    /**
     * Update the story.
     *
     * @param {string} id - ID of the story
     * @param {API.StoryAttributes} story
     * @return {Promise<API.StoryInfo>}
     */
    async updateStory(id: string, story: API.StoryAttributes): Promise<API.StoryInfo> {
        const location = ut`/stories/${id}`;
        return await this.call("updateStory", location, {
            method: "PUT", body: story, schema: "StoryInfo", bodies: true
        }) as API.StoryInfo;
    }

    /**
     * Delete the story.
     *
     * @param {string} id - ID of the story
     * @return {Promise<API.Result>}
     */
    async deleteStory(id: string): Promise<API.Result> {
        const location = ut`/stories/${id}`;
        return await this.call("deleteStory", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Get the list of all subscribers, optionally filtered by some criteria.
     *
     * @param {string | null} remoteNodeName - filter by subscribed node name
     * @param {API.SubscriptionType | null} type - filter by subscription type
     * @param {string | null} feedName - filter by name of the feed subscribed to
     * @param {string | null} entryId - filter by ID of the entry subscribed to
     * @return {Promise<API.SubscriberInfo[]>}
     */
    async getSubscribers(
        remoteNodeName: string | null = null, type: API.SubscriptionType | null = null, feedName: string | null = null,
        entryId: string | null = null
    ): Promise<API.SubscriberInfo[]> {
        const location = ut`/people/subscribers`;
        const params = {nodeName: remoteNodeName, type, feedName, entryId};
        return await this.call("getSubscribers", location, {
            method: "GET", params, schema: "SubscriberInfoArray"
        }) as API.SubscriberInfo[];
    }

    /**
     * Subscribe to a particular group of notifications.
     *
     * @param {API.SubscriberDescription} subscriber
     * @return {Promise<API.SubscriberInfo>}
     */
    async createSubscriber(subscriber: API.SubscriberDescription): Promise<API.SubscriberInfo> {
        const location = "/people/subscribers";
        return await this.call("createSubscriber", location, {
            method: "POST", body: subscriber, schema: "SubscriberInfo"
        }) as API.SubscriberInfo;
    }

    /**
     * Get an individual subscriber.
     *
     * @param {string} id - ID of the subscriber
     * @return {Promise<API.SubscriberInfo>}
     */
    async getSubscriber(id: string): Promise<API.SubscriberInfo> {
        const location = ut`/people/subscribers/${id}`;
        return await this.call("getSubscriber", location, {
            method: "GET", schema: "SubscriberInfo"
        }) as API.SubscriberInfo;
    }

    /**
     * Update the subscriber's operations or set operations' overrides.
     *
     * @param {string} id - ID of the subscriber
     * @param {API.SubscriberOverride} subscriber
     * @return {Promise<API.SubscriberInfo>}
     */
    async updateSubscriber(id: string, subscriber: API.SubscriberOverride): Promise<API.SubscriberInfo> {
        const location = ut`/people/subscribers/${id}`;
        return await this.call("updateSubscriber", location, {
            method: "PUT", body: subscriber, schema: "SubscriberInfo"
        }) as API.SubscriberInfo;
    }

    /**
     * Delete the subscriber and return the updated information about the node that was subscribed.
     *
     * @param {string} id - ID of the subscriber
     * @return {Promise<API.ContactInfo>}
     */
    async deleteSubscriber(id: string): Promise<API.ContactInfo> {
        const location = ut`/people/subscribers/${id}`;
        return await this.call("deleteSubscriber", location, {
            method: "DELETE", schema: "ContactInfo"
        }) as API.ContactInfo;
    }

    /**
     * Get the list of all subscriptions, optionally filtered by some criteria.
     *
     * @param {string | null} remoteNodeName - filter by node name
     * @param {API.SubscriptionType | null} type - filter by subscription type
     * @return {Promise<API.SubscriptionInfo[]>}
     */
    async getSubscriptions(
        remoteNodeName: string | null = null, type: API.SubscriptionType | null = null
    ): Promise<API.SubscriptionInfo[]> {
        const location = ut`/people/subscriptions`;
        const params = {nodeName: remoteNodeName, type};
        return await this.call("getSubscriptions", location, {
            method: "GET", params, schema: "SubscriptionInfoArray"
        }) as API.SubscriptionInfo[];
    }

    /**
     * Register a subscription to notifications from a particular node.
     *
     * @param {API.SubscriptionDescription} subscription
     * @return {Promise<API.SubscriptionInfo>}
     */
    async createSubscription(subscription: API.SubscriptionDescription): Promise<API.SubscriptionInfo> {
        const location = "/people/subscriptions";
        return await this.call("createSubscription", location, {
            method: "POST", body: subscription, schema: "SubscriptionInfo"
        }) as API.SubscriptionInfo;
    }

    /**
     * Update the subscription's operations or set operations' overrides.
     *
     * @param {string} id - ID of the subscription
     * @param {API.SubscriptionOverride} subscription
     * @return {Promise<API.SubscriptionInfo>}
     */
    async updateSubscription(id: string, subscription: API.SubscriptionOverride): Promise<API.SubscriptionInfo> {
        const location = ut`/people/subscriptions/${id}`;
        return await this.call("updateSubscription", location, {
            method: "PUT", body: subscription, schema: "SubscriptionInfo"
        }) as API.SubscriptionInfo;
    }

    /**
     * Delete the subscription and return the updated information about the node that was subscribed to.
     *
     * @param {string} id - ID of the subscription
     * @return {Promise<API.ContactInfo>}
     */
    async deleteSubscription(id: string): Promise<API.ContactInfo> {
        const location = ut`/people/subscriptions/${id}`;
        return await this.call("deleteSubscription", location, {
            method: "DELETE", schema: "ContactInfo"
        }) as API.ContactInfo;
    }

    /**
     * Search for subscriptions by the given criteria.
     *
     * @param {API.SubscriptionFilter} filter
     * @return {Promise<API.SubscriptionInfo[]>}
     */
    async searchSubscriptions(filter: API.SubscriptionFilter): Promise<API.SubscriptionInfo[]> {
        const location = "/people/subscriptions/search";
        return await this.call("searchSubscriptions", location, {
            method: "POST", body: filter, schema: "SubscriptionInfoArray"
        }) as API.SubscriptionInfo[];
    }

    /**
     * Get the list of all existing tokens.
     *
     * @return {Promise<API.TokenInfo[]>}
     */
    async getTokens(): Promise<API.TokenInfo[]> {
        const location = "/tokens";
        return await this.call("getTokens", location, {
            method: "GET", schema: "TokenInfoArray"
        }) as API.TokenInfo[];
    }

    /**
     * Sign in and create a token.
     *
     * @param {API.TokenAttributes} token
     * @return {Promise<API.TokenInfo>}
     */
    async createToken(token: API.TokenAttributes): Promise<API.TokenInfo> {
        const location = "/tokens";
        return await this.call("createToken", location, {
            method: "POST", body: token, schema: "TokenInfo"
        }) as API.TokenInfo;
    }

    /**
     * Get information about the token.
     *
     * @param {string} id - ID of the token
     * @return {Promise<API.TokenInfo>}
     */
    async getTokenInfo(id: string): Promise<API.TokenInfo> {
        const location = ut`/tokens/${id}`;
        return await this.call("getTokenInfo", location, {
            method: "GET", schema: "TokenInfo"
        }) as API.TokenInfo;
    }

    /**
     * Update the name or permissions of the token. It is not possible to grant token additional permissions with this
     * request, but the granted permissions can be revoked.
     *
     * @param {string} id - ID of the token
     * @param {API.TokenUpdate} update
     * @return {Promise<API.TokenInfo>}
     */
    async updateToken(id: string, update: API.TokenUpdate): Promise<API.TokenInfo> {
        const location = ut`/tokens/${id}`;
        return await this.call("updateToken", location, {
            method: "PUT", body: update, schema: "TokenInfo"
        }) as API.TokenInfo;
    }

    /**
     * Delete the token.
     *
     * @param {string} id - ID of the token
     * @return {Promise<API.Result>}
     */
    async deleteToken(id: string): Promise<API.Result> {
        const location = ut`/tokens/${id}`;
        return await this.call("deleteToken", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Get the general information about the user list given.
     *
     * @param {string} name - the name of the list
     * @return {Promise<API.UserListInfo>}
     */
    async getUserListGeneral(name: string): Promise<API.UserListInfo> {
        const location = ut`/user-lists/${name}`;
        return await this.call("getUserListGeneral", location, {
            method: "GET", schema: "UserListInfo"
        }) as API.UserListInfo;
    }

    /**
     * Get a slice of the user list, delimited by the ``before`` or ``after`` moment and the given ``limit``. If
     * neither ``before`` nor ``after`` are provided, the latest items are returned. The node may decide to return
     * fewer items than the given ``limit``. The items are always sorted by moment, descending.
     *
     * @param {string} name - the name of the list
     * @param {number | null} after - filter items created strongly after this moment
     * @param {number | null} before - filter items created at or before this moment
     * @param {number | null} limit - maximum number of items returned
     * @return {Promise<API.UserListSliceInfo>}
     */
    async getUserListSlice(
        name: string, after: number | null = null, before: number | null = null, limit: number | null = null
    ): Promise<API.UserListSliceInfo> {
        const location = ut`/user-lists/${name}/items`;
        const params = {after, before, limit};
        return await this.call("getUserListSlice", location, {
            method: "GET", params, schema: "UserListSliceInfo"
        }) as API.UserListSliceInfo;
    }

    /**
     * Get the information from the user list about the node given.
     *
     * @param {string} name - the name of the list
     * @param {string} remoteNodeName - the node name to get information about
     * @return {Promise<API.UserListItemInfo>}
     */
    async getUserListItem(name: string, remoteNodeName: string): Promise<API.UserListItemInfo> {
        const location = ut`/user-lists/${name}/items/${remoteNodeName}`;
        return await this.call("getUserListItem", location, {
            method: "GET", schema: "UserListItemInfo"
        }) as API.UserListItemInfo;
    }

    /**
     * Add a node to the user list.
     *
     * @param {string} name - the name of the list
     * @param {API.UserListItemAttributes} item
     * @return {Promise<API.UserListItemInfo>}
     */
    async createUserListItem(name: string, item: API.UserListItemAttributes): Promise<API.UserListItemInfo> {
        const location = ut`/user-lists/${name}/items`;
        return await this.call("createUserListItem", location, {
            method: "POST", body: item, schema: "UserListItemInfo"
        }) as API.UserListItemInfo;
    }

    /**
     * Delete a node from the user list
     *
     * @param {string} name - the name of the list
     * @param {string} remoteNodeName - the node name to delete
     * @return {Promise<API.Result>}
     */
    async deleteUserListItem(name: string, remoteNodeName: string): Promise<API.Result> {
        const location = ut`/user-lists/${name}/items/${remoteNodeName}`;
        return await this.call("deleteUserListItem", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    /**
     * Get brief information about the node.
     *
     * @return {Promise<API.WhoAmI>}
     */
    async whoAmI(): Promise<API.WhoAmI> {
        const location = "/whoami";
        return await this.call("whoAmI", location, {
            method: "GET", schema: "WhoAmI"
        }) as API.WhoAmI;
    }

}
