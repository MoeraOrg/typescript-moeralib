// This file is generated

import { Caller } from "./caller";
import * as API from "./types";
import { commaSeparatedFlags, ut } from "../util";

export class MoeraNode extends Caller {

    constructor(nodeUrl: string | null = null) {
        super();
        if (nodeUrl != null) {
            this.nodeUrl(nodeUrl);
        }
    }

    async searchActivityReactions(filter: API.ActivityReactionFilter): Promise<API.ActivityReactionInfo[]> {
        const location = "/activity/reactions/search";
        return await this.call("searchActivityReactions", location, {
            method: "POST", body: filter, schema: "ActivityReactionInfoArray"
        }) as API.ActivityReactionInfo[];
    }

    async getRemotePostingVerificationStatus(id: string): Promise<API.RemotePostingVerificationInfo> {
        const location = ut`/async-operations/remote-posting-verification/${id}`;
        return await this.call("getRemotePostingVerificationStatus", location, {
            method: "GET", schema: "RemotePostingVerificationInfo"
        }) as API.RemotePostingVerificationInfo;
    }

    async getRemoteReactionVerificationStatus(id: string): Promise<API.RemoteReactionVerificationInfo> {
        const location = ut`/async-operations/remote-reaction-verification/${id}`;
        return await this.call("getRemoteReactionVerificationStatus", location, {
            method: "GET", schema: "RemoteReactionVerificationInfo"
        }) as API.RemoteReactionVerificationInfo;
    }

    async getAvatars(): Promise<API.AvatarInfo[]> {
        const location = "/avatars";
        return await this.call("getAvatars", location, {
            method: "GET", schema: "AvatarInfoArray"
        }) as API.AvatarInfo[];
    }

    async createAvatar(avatar: API.AvatarAttributes): Promise<API.AvatarInfo> {
        const location = "/avatars";
        return await this.call("createAvatar", location, {
            method: "POST", body: avatar, schema: "AvatarInfo"
        }) as API.AvatarInfo;
    }

    async getAvatar(id: string): Promise<API.AvatarInfo> {
        const location = ut`/avatars/${id}`;
        return await this.call("getAvatar", location, {
            method: "GET", schema: "AvatarInfo"
        }) as API.AvatarInfo;
    }

    async deleteAvatar(id: string): Promise<API.Result> {
        const location = ut`/avatars/${id}`;
        return await this.call("deleteAvatar", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async reorderAvatars(order: API.AvatarsOrdered): Promise<API.AvatarOrdinal[]> {
        const location = "/avatars/reorder";
        return await this.call("reorderAvatars", location, {
            method: "POST", body: order, schema: "AvatarOrdinalArray"
        }) as API.AvatarOrdinal[];
    }

    async blockInstant(instant: API.BlockedInstantAttributes): Promise<API.BlockedInstantInfo> {
        const location = "/blocked-instants";
        return await this.call("blockInstant", location, {
            method: "POST", body: instant, schema: "BlockedInstantInfo"
        }) as API.BlockedInstantInfo;
    }

    async getBlockedInstant(id: string): Promise<API.BlockedInstantInfo> {
        const location = ut`/blocked-instants/${id}`;
        return await this.call("getBlockedInstant", location, {
            method: "GET", schema: "BlockedInstantInfo"
        }) as API.BlockedInstantInfo;
    }

    async unblockInstant(id: string): Promise<API.Result> {
        const location = ut`/blocked-instants/${id}`;
        return await this.call("unblockInstant", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async searchBlockedInstants(filter: API.BlockedInstantFilter): Promise<API.BlockedInstantInfo[]> {
        const location = "/blocked-instants/search";
        return await this.call("searchBlockedInstants", location, {
            method: "POST", body: filter, schema: "BlockedInstantInfoArray"
        }) as API.BlockedInstantInfo[];
    }

    async blockUser(user: API.BlockedUserAttributes): Promise<API.BlockedUserInfo> {
        const location = "/people/blocked-users";
        return await this.call("blockUser", location, {
            method: "POST", body: user, schema: "BlockedUserInfo"
        }) as API.BlockedUserInfo;
    }

    async getBlockedUser(id: string): Promise<API.BlockedUserInfo> {
        const location = ut`/people/blocked-users/${id}`;
        return await this.call("getBlockedUser", location, {
            method: "GET", schema: "BlockedUserInfo"
        }) as API.BlockedUserInfo;
    }

    async unblockUser(id: string): Promise<API.Result> {
        const location = ut`/people/blocked-users/${id}`;
        return await this.call("unblockUser", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async searchBlockedUsers(filter: API.BlockedUserFilter): Promise<API.BlockedUserInfo[]> {
        const location = "/people/blocked-users/search";
        return await this.call("searchBlockedUsers", location, {
            method: "POST", body: filter, schema: "BlockedUserInfoArray"
        }) as API.BlockedUserInfo[];
    }

    async getBlockedUsersChecksums(): Promise<API.BlockedUsersChecksums> {
        const location = "/people/blocked-users/checksums";
        return await this.call("getBlockedUsersChecksums", location, {
            method: "GET", schema: "BlockedUsersChecksums"
        }) as API.BlockedUsersChecksums;
    }

    async getBlockedByUser(id: string): Promise<API.BlockedByUserInfo> {
        const location = ut`/people/blocked-by-users/${id}`;
        return await this.call("getBlockedByUser", location, {
            method: "GET", schema: "BlockedByUserInfo"
        }) as API.BlockedByUserInfo;
    }

    async searchBlockedByUsers(filter: API.BlockedByUserFilter): Promise<API.BlockedByUserInfo[]> {
        const location = "/people/blocked-by-users/search";
        return await this.call("searchBlockedByUsers", location, {
            method: "POST", body: filter, schema: "BlockedByUserInfoArray"
        }) as API.BlockedByUserInfo[];
    }

    async getCartes(limit: number | null = null): Promise<API.CarteSet> {
        const location = ut`/cartes`;
        const params = {limit};
        return await this.call("getCartes", location, {
            method: "GET", params, schema: "CarteSet"
        }) as API.CarteSet;
    }

    async getCommentsSlice(
        postingId: string, after: number | null = null, before: number | null = null, limit: number | null = null
    ): Promise<API.CommentsSliceInfo> {
        const location = ut`/postings/${postingId}/comments`;
        const params = {after, before, limit};
        return await this.call("getCommentsSlice", location, {
            method: "GET", params, schema: "CommentsSliceInfo", bodies: true
        }) as API.CommentsSliceInfo;
    }

    async createComment(postingId: string, comment: API.CommentText): Promise<API.CommentCreated> {
        const location = ut`/postings/${postingId}/comments`;
        return await this.call("createComment", location, {
            method: "POST", body: comment, schema: "CommentCreated", bodies: true
        }) as API.CommentCreated;
    }

    async getComment(postingId: string, commentId: string, withSource: boolean = false): Promise<API.CommentInfo> {
        const include = commaSeparatedFlags({"source": withSource});
        const location = ut`/postings/${postingId}/comments/${commentId}`;
        const params = {include};
        return await this.call("getComment", location, {
            method: "GET", params, schema: "CommentInfo", bodies: true
        }) as API.CommentInfo;
    }

    async updateAllComments(postingId: string, attributes: API.CommentMassAttributes): Promise<API.Result> {
        const location = ut`/postings/${postingId}/comments`;
        return await this.call("updateAllComments", location, {
            method: "PUT", body: attributes, schema: "Result"
        }) as API.Result;
    }

    async updateComment(postingId: string, commentId: string, comment: API.CommentText): Promise<API.CommentInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}`;
        return await this.call("updateComment", location, {
            method: "PUT", body: comment, schema: "CommentInfo", bodies: true
        }) as API.CommentInfo;
    }

    async deleteComment(postingId: string, commentId: string): Promise<API.CommentTotalInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}`;
        return await this.call("deleteComment", location, {
            method: "DELETE", schema: "CommentTotalInfo"
        }) as API.CommentTotalInfo;
    }

    async getPostingsAttachedToComment(postingId: string, commentId: string): Promise<API.PostingInfo[]> {
        const location = ut`/postings/${postingId}/comments/${commentId}/attached`;
        return await this.call("getPostingsAttachedToComment", location, {
            method: "GET", schema: "PostingInfoArray", bodies: true
        }) as API.PostingInfo[];
    }

    async getCommentRevisions(postingId: string, commentId: string): Promise<API.CommentRevisionInfo[]> {
        const location = ut`/postings/${postingId}/comments/${commentId}/revisions`;
        return await this.call("getCommentRevisions", location, {
            method: "GET", schema: "CommentRevisionInfoArray", bodies: true
        }) as API.CommentRevisionInfo[];
    }

    async getCommentRevision(postingId: string, commentId: string, id: string): Promise<API.CommentRevisionInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}/revisions/${id}`;
        return await this.call("getCommentRevision", location, {
            method: "GET", schema: "CommentRevisionInfo", bodies: true
        }) as API.CommentRevisionInfo;
    }

    async createCommentReaction(
        postingId: string, commentId: string, reaction: API.ReactionDescription
    ): Promise<API.ReactionCreated> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reactions`;
        return await this.call("createCommentReaction", location, {
            method: "POST", body: reaction, schema: "ReactionCreated"
        }) as API.ReactionCreated;
    }

    async updateCommentReaction(
        postingId: string, commentId: string, ownerName: string, reaction: API.ReactionOverride
    ): Promise<API.ReactionInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reactions/${ownerName}`;
        return await this.call("updateCommentReaction", location, {
            method: "PUT", body: reaction, schema: "ReactionInfo"
        }) as API.ReactionInfo;
    }

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

    async getCommentReaction(postingId: string, commentId: string, ownerName: string): Promise<API.ReactionInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reactions/${ownerName}`;
        return await this.call("getCommentReaction", location, {
            method: "GET", schema: "ReactionInfo"
        }) as API.ReactionInfo;
    }

    async deleteAllCommentReactions(postingId: string, commentId: string): Promise<API.Result> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reactions`;
        return await this.call("deleteAllCommentReactions", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async deleteCommentReaction(
        postingId: string, commentId: string, ownerName: string
    ): Promise<API.ReactionTotalsInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reactions/${ownerName}`;
        return await this.call("deleteCommentReaction", location, {
            method: "DELETE", schema: "ReactionTotalsInfo"
        }) as API.ReactionTotalsInfo;
    }

    async getCommentReactionTotals(postingId: string, commentId: string): Promise<API.ReactionTotalsInfo> {
        const location = ut`/postings/${postingId}/comments/${commentId}/reaction-totals`;
        return await this.call("getCommentReactionTotals", location, {
            method: "GET", schema: "ReactionTotalsInfo"
        }) as API.ReactionTotalsInfo;
    }

    async getContacts(query: string | null = null, limit: number | null = null): Promise<API.ContactInfo[]> {
        const location = ut`/people/contacts`;
        const params = {query, limit};
        return await this.call("getContacts", location, {
            method: "GET", params, schema: "ContactInfoArray"
        }) as API.ContactInfo[];
    }

    async checkCredentials(): Promise<API.CredentialsCreated> {
        const location = "/credentials";
        return await this.call("checkCredentials", location, {
            method: "GET", schema: "CredentialsCreated"
        }) as API.CredentialsCreated;
    }

    async createCredentials(credentials: API.Credentials): Promise<API.Result> {
        const location = "/credentials";
        return await this.call("createCredentials", location, {
            method: "POST", body: credentials, schema: "Result"
        }) as API.Result;
    }

    async updateCredentials(credentials: API.CredentialsChange): Promise<API.Result> {
        const location = "/credentials";
        return await this.call("updateCredentials", location, {
            method: "PUT", body: credentials, schema: "Result"
        }) as API.Result;
    }

    async deleteCredentials(): Promise<API.Result> {
        const location = "/credentials";
        return await this.call("deleteCredentials", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async resetCredentials(): Promise<API.EmailHint> {
        const location = "/credentials/reset";
        return await this.call("resetCredentials", location, {
            method: "POST", schema: "EmailHint"
        }) as API.EmailHint;
    }

    async getDeletedPostings(page: number | null = null, limit: number | null = null): Promise<API.PostingInfo[]> {
        const location = ut`/deleted-postings`;
        const params = {page, limit};
        return await this.call("getDeletedPostings", location, {
            method: "GET", params, schema: "PostingInfoArray", bodies: true
        }) as API.PostingInfo[];
    }

    async getDeletedPosting(id: string): Promise<API.PostingInfo> {
        const location = ut`/deleted-postings/${id}`;
        return await this.call("getDeletedPosting", location, {
            method: "GET", schema: "PostingInfo", bodies: true
        }) as API.PostingInfo;
    }

    async restoreDeletedPosting(id: string): Promise<API.PostingInfo> {
        const location = ut`/deleted-postings/${id}/restore`;
        return await this.call("restoreDeletedPosting", location, {
            method: "POST", schema: "PostingInfo", bodies: true
        }) as API.PostingInfo;
    }

    async getDeletePostingRevisions(
        postingId: string, limit: number | null = null
    ): Promise<API.PostingRevisionInfo[]> {
        const location = ut`/deleted-postings/${postingId}/revisions`;
        const params = {limit};
        return await this.call("getDeletePostingRevisions", location, {
            method: "GET", params, schema: "PostingRevisionInfoArray", bodies: true
        }) as API.PostingRevisionInfo[];
    }

    async getDeletedPostingRevision(postingId: string, id: string): Promise<API.PostingRevisionInfo> {
        const location = ut`/deleted-postings/${postingId}/revisions/${id}`;
        return await this.call("getDeletedPostingRevision", location, {
            method: "GET", schema: "PostingRevisionInfo", bodies: true
        }) as API.PostingRevisionInfo;
    }

    async restoreDeletedPostingRevision(postingId: string, id: string): Promise<API.PostingRevisionInfo> {
        const location = ut`/postings/${postingId}/revisions/${id}/restore`;
        return await this.call("restoreDeletedPostingRevision", location, {
            method: "POST", schema: "PostingRevisionInfo", bodies: true
        }) as API.PostingRevisionInfo;
    }

    async getDomains(): Promise<API.DomainInfo[]> {
        const location = "/domains";
        return await this.call("getDomains", location, {
            method: "GET", schema: "DomainInfoArray"
        }) as API.DomainInfo[];
    }

    async getDomain(name: string): Promise<API.DomainInfo> {
        const location = ut`/domains/${name}`;
        return await this.call("getDomain", location, {
            method: "GET", schema: "DomainInfo"
        }) as API.DomainInfo;
    }

    async createDomain(domain: API.DomainAttributes): Promise<API.DomainInfo> {
        const location = "/domains";
        return await this.call("createDomain", location, {
            method: "POST", body: domain, schema: "DomainInfo"
        }) as API.DomainInfo;
    }

    async updateDomain(name: string, domain: API.DomainAttributes): Promise<API.DomainInfo> {
        const location = ut`/domains/${name}`;
        return await this.call("updateDomain", location, {
            method: "PUT", body: domain, schema: "DomainInfo"
        }) as API.DomainInfo;
    }

    async deleteDomain(name: string): Promise<API.Result> {
        const location = ut`/domains/${name}`;
        return await this.call("deleteDomain", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async isDomainAvailable(remoteNodeName: string): Promise<API.DomainAvailable> {
        const location = ut`/domains/available`;
        const params = {nodeName: remoteNodeName};
        return await this.call("isDomainAvailable", location, {
            method: "GET", params, schema: "DomainAvailable"
        }) as API.DomainAvailable;
    }

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

    async createDraft(draft: API.DraftText): Promise<API.DraftInfo> {
        const location = "/drafts";
        return await this.call("createDraft", location, {
            method: "POST", body: draft, schema: "DraftInfo", bodies: true
        }) as API.DraftInfo;
    }

    async getDraft(id: string): Promise<API.DraftInfo> {
        const location = ut`/drafts/${id}`;
        return await this.call("getDraft", location, {
            method: "GET", schema: "DraftInfo", bodies: true
        }) as API.DraftInfo;
    }

    async updateDraft(id: string, draft: API.DraftText): Promise<API.DraftInfo> {
        const location = ut`/drafts/${id}`;
        return await this.call("updateDraft", location, {
            method: "PUT", body: draft, schema: "DraftInfo", bodies: true
        }) as API.DraftInfo;
    }

    async deleteDraft(id: string): Promise<API.Result> {
        const location = ut`/drafts/${id}`;
        return await this.call("deleteDraft", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async getFeatures(): Promise<API.Features> {
        const location = "/features";
        return await this.call("getFeatures", location, {
            method: "GET", schema: "Features"
        }) as API.Features;
    }

    async getFeeds(): Promise<API.FeedInfo[]> {
        const location = "/feeds";
        return await this.call("getFeeds", location, {
            method: "GET", schema: "FeedInfoArray"
        }) as API.FeedInfo[];
    }

    async getFeedGeneral(feedName: string): Promise<API.FeedInfo> {
        const location = ut`/feeds/${feedName}`;
        return await this.call("getFeedGeneral", location, {
            method: "GET", schema: "FeedInfo"
        }) as API.FeedInfo;
    }

    async getFeedStatus(feedName: string): Promise<API.FeedStatus> {
        const location = ut`/feeds/${feedName}/status`;
        return await this.call("getFeedStatus", location, {
            method: "GET", schema: "FeedStatus"
        }) as API.FeedStatus;
    }

    async updateFeedStatus(feedName: string, change: API.FeedStatusChange): Promise<API.FeedStatus> {
        const location = ut`/feeds/${feedName}/status`;
        return await this.call("updateFeedStatus", location, {
            method: "PUT", body: change, schema: "FeedStatus"
        }) as API.FeedStatus;
    }

    async getFeedSlice(
        feedName: string, after: number | null = null, before: number | null = null, limit: number | null = null
    ): Promise<API.FeedSliceInfo> {
        const location = ut`/feeds/${feedName}/stories`;
        const params = {after, before, limit};
        return await this.call("getFeedSlice", location, {
            method: "GET", params, schema: "FeedSliceInfo", bodies: true
        }) as API.FeedSliceInfo;
    }

    async getFriendGroups(): Promise<API.FriendGroupInfo[]> {
        const location = "/people/friends/groups";
        return await this.call("getFriendGroups", location, {
            method: "GET", schema: "FriendGroupInfoArray"
        }) as API.FriendGroupInfo[];
    }

    async getFriendGroup(id: string): Promise<API.FriendGroupInfo> {
        const location = ut`/people/friends/groups/${id}`;
        return await this.call("getFriendGroup", location, {
            method: "GET", schema: "FriendGroupInfo"
        }) as API.FriendGroupInfo;
    }

    async createFriendGroup(friendGroup: API.FriendGroupDescription): Promise<API.FriendGroupInfo> {
        const location = "/people/friends/groups";
        return await this.call("createFriendGroup", location, {
            method: "POST", body: friendGroup, schema: "FriendGroupInfo"
        }) as API.FriendGroupInfo;
    }

    async updateFriendGroup(id: string, friendGroup: API.FriendGroupDescription): Promise<API.FriendGroupInfo> {
        const location = ut`/people/friends/groups/${id}`;
        return await this.call("updateFriendGroup", location, {
            method: "PUT", body: friendGroup, schema: "FriendGroupInfo"
        }) as API.FriendGroupInfo;
    }

    async deleteFriendGroup(id: string): Promise<API.Result> {
        const location = ut`/people/friends/groups/${id}`;
        return await this.call("deleteFriendGroup", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async getFriends(groupId: string | null = null): Promise<API.FriendInfo[]> {
        const location = ut`/people/friends`;
        const params = {groupId};
        return await this.call("getFriends", location, {
            method: "GET", params, schema: "FriendInfoArray"
        }) as API.FriendInfo[];
    }

    async getFriend(name: string): Promise<API.FriendInfo> {
        const location = ut`/people/friends/${name}`;
        return await this.call("getFriend", location, {
            method: "GET", schema: "FriendInfo"
        }) as API.FriendInfo;
    }

    async updateFriends(friends: API.FriendDescription[]): Promise<API.FriendInfo[]> {
        const location = "/people/friends";
        return await this.call("updateFriends", location, {
            method: "PUT", body: friends, schema: "FriendInfoArray"
        }) as API.FriendInfo[];
    }

    async getFriendOfs(): Promise<API.FriendOfInfo[]> {
        const location = "/people/friend-ofs";
        return await this.call("getFriendOfs", location, {
            method: "GET", schema: "FriendOfInfoArray"
        }) as API.FriendOfInfo[];
    }

    async getFriendOf(name: string): Promise<API.FriendOfInfo> {
        const location = ut`/people/friend-ofs/${name}`;
        return await this.call("getFriendOf", location, {
            method: "GET", schema: "FriendOfInfo"
        }) as API.FriendOfInfo;
    }

    async uploadPrivateMedia(body: Buffer): Promise<API.PrivateMediaFileInfo> {
        const location = "/media/private";
        return await this.call("uploadPrivateMedia", location, {
            method: "POST", body, schema: "PrivateMediaFileInfo"
        }) as API.PrivateMediaFileInfo;
    }

    async getPrivateMedia(id: string, width: number | null = null, download: boolean | null = null): Promise<Blob> {
        const location = ut`/media/private/${id}/data`;
        const params = {width, download};
        return await this.call("getPrivateMedia", location, {
            method: "GET", params, schema: "blob"
        }) as Blob;
    }

    async getPrivateMediaInfo(id: string): Promise<API.PrivateMediaFileInfo> {
        const location = ut`/media/private/${id}/info`;
        return await this.call("getPrivateMediaInfo", location, {
            method: "GET", schema: "PrivateMediaFileInfo"
        }) as API.PrivateMediaFileInfo;
    }

    async getPrivateMediaParentEntry(id: string): Promise<API.EntryInfo[]> {
        const location = ut`/media/private/${id}/parent`;
        return await this.call("getPrivateMediaParentEntry", location, {
            method: "GET", schema: "EntryInfoArray", bodies: true
        }) as API.EntryInfo[];
    }

    async uploadPublicMedia(body: Buffer): Promise<API.PublicMediaFileInfo> {
        const location = "/media/public";
        return await this.call("uploadPublicMedia", location, {
            method: "POST", body, schema: "PublicMediaFileInfo"
        }) as API.PublicMediaFileInfo;
    }

    async getPublicMedia(id: string, width: number | null = null, download: boolean | null = null): Promise<Blob> {
        const location = ut`/media/public/${id}/data`;
        const params = {width, download};
        return await this.call("getPublicMedia", location, {
            method: "GET", params, schema: "blob"
        }) as Blob;
    }

    async getPublicMediaInfo(id: string): Promise<API.PublicMediaFileInfo> {
        const location = ut`/media/public/${id}/info`;
        return await this.call("getPublicMediaInfo", location, {
            method: "GET", schema: "PublicMediaFileInfo"
        }) as API.PublicMediaFileInfo;
    }

    async getNodeName(): Promise<API.NodeNameInfo> {
        const location = "/node-name";
        return await this.call("getNodeName", location, {
            method: "GET", schema: "NodeNameInfo"
        }) as API.NodeNameInfo;
    }

    async createNodeName(nameToRegister: API.NameToRegister): Promise<API.RegisteredNameSecret> {
        const location = "/node-name";
        return await this.call("createNodeName", location, {
            method: "POST", body: nameToRegister, schema: "RegisteredNameSecret"
        }) as API.RegisteredNameSecret;
    }

    async updateNodeName(secret: API.RegisteredNameSecret): Promise<API.Result> {
        const location = "/node-name";
        return await this.call("updateNodeName", location, {
            method: "PUT", body: secret, schema: "Result"
        }) as API.Result;
    }

    async deleteNodeName(): Promise<API.Result> {
        const location = "/node-name";
        return await this.call("deleteNodeName", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async sendNotification(packet: API.NotificationPacket): Promise<API.Result> {
        const location = "/notifications";
        return await this.call("sendNotification", location, {
            method: "POST", body: packet, schema: "Result"
        }) as API.Result;
    }

    async getPeopleGeneral(): Promise<API.PeopleGeneralInfo> {
        const location = "/people";
        return await this.call("getPeopleGeneral", location, {
            method: "GET", schema: "PeopleGeneralInfo"
        }) as API.PeopleGeneralInfo;
    }

    async registerPlugin(plugin: API.PluginDescription): Promise<API.PluginInfo> {
        const location = "/plugins";
        return await this.call("registerPlugin", location, {
            method: "POST", body: plugin, schema: "PluginInfo"
        }) as API.PluginInfo;
    }

    async getPlugins(): Promise<API.PluginInfo[]> {
        const location = "/plugins";
        return await this.call("getPlugins", location, {
            method: "GET", schema: "PluginInfoArray"
        }) as API.PluginInfo[];
    }

    async getPlugin(pluginName: string): Promise<API.PluginInfo> {
        const location = ut`/plugins/${pluginName}`;
        return await this.call("getPlugin", location, {
            method: "GET", schema: "PluginInfo"
        }) as API.PluginInfo;
    }

    async unregisterPlugin(pluginName: string): Promise<API.Result> {
        const location = ut`/plugins/${pluginName}`;
        return await this.call("unregisterPlugin", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async createPosting(posting: API.PostingText): Promise<API.PostingInfo> {
        const location = "/postings";
        return await this.call("createPosting", location, {
            method: "POST", body: posting, schema: "PostingInfo", bodies: true
        }) as API.PostingInfo;
    }

    async updatePosting(id: string, posting: API.PostingText): Promise<API.PostingInfo> {
        const location = ut`/postings/${id}`;
        return await this.call("updatePosting", location, {
            method: "PUT", body: posting, schema: "PostingInfo", bodies: true
        }) as API.PostingInfo;
    }

    async getPosting(id: string, withSource: boolean = false): Promise<API.PostingInfo> {
        const include = commaSeparatedFlags({"source": withSource});
        const location = ut`/postings/${id}`;
        const params = {include};
        return await this.call("getPosting", location, {
            method: "GET", params, schema: "PostingInfo", bodies: true
        }) as API.PostingInfo;
    }

    async deletePosting(id: string): Promise<API.Result> {
        const location = ut`/postings/${id}`;
        return await this.call("deletePosting", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async getPostingsAttachedToPosting(id: string): Promise<API.PostingInfo[]> {
        const location = ut`/postings/${id}/attached`;
        return await this.call("getPostingsAttachedToPosting", location, {
            method: "GET", schema: "PostingInfoArray", bodies: true
        }) as API.PostingInfo[];
    }

    async getPostingRevisions(postingId: string, limit: number | null = null): Promise<API.PostingRevisionInfo[]> {
        const location = ut`/postings/${postingId}/revisions`;
        const params = {limit};
        return await this.call("getPostingRevisions", location, {
            method: "GET", params, schema: "PostingRevisionInfoArray", bodies: true
        }) as API.PostingRevisionInfo[];
    }

    async getPostingRevision(postingId: string, id: string): Promise<API.PostingRevisionInfo> {
        const location = ut`/postings/${postingId}/revisions/${id}`;
        return await this.call("getPostingRevision", location, {
            method: "GET", schema: "PostingRevisionInfo", bodies: true
        }) as API.PostingRevisionInfo;
    }

    async restorePostingRevision(postingId: string, id: string): Promise<API.PostingRevisionInfo> {
        const location = ut`/postings/${postingId}/revisions/${id}/restore`;
        return await this.call("restorePostingRevision", location, {
            method: "POST", schema: "PostingRevisionInfo", bodies: true
        }) as API.PostingRevisionInfo;
    }

    async createPostingReaction(postingId: string, reaction: API.ReactionDescription): Promise<API.ReactionCreated> {
        const location = ut`/postings/${postingId}/reactions`;
        return await this.call("createPostingReaction", location, {
            method: "POST", body: reaction, schema: "ReactionCreated"
        }) as API.ReactionCreated;
    }

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

    async updatePostingReaction(
        postingId: string, ownerName: string, reaction: API.ReactionOverride
    ): Promise<API.ReactionInfo> {
        const location = ut`/postings/${postingId}/reactions/${ownerName}`;
        return await this.call("updatePostingReaction", location, {
            method: "PUT", body: reaction, schema: "ReactionInfo"
        }) as API.ReactionInfo;
    }

    async getPostingReaction(postingId: string, ownerName: string): Promise<API.ReactionInfo> {
        const location = ut`/postings/${postingId}/reactions/${ownerName}`;
        return await this.call("getPostingReaction", location, {
            method: "GET", schema: "ReactionInfo"
        }) as API.ReactionInfo;
    }

    async deleteAllPostingReactions(postingId: string): Promise<API.Result> {
        const location = ut`/postings/${postingId}/reactions`;
        return await this.call("deleteAllPostingReactions", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async deletePostingReaction(postingId: string, ownerName: string): Promise<API.ReactionTotalsInfo> {
        const location = ut`/postings/${postingId}/reactions/${ownerName}`;
        return await this.call("deletePostingReaction", location, {
            method: "DELETE", schema: "ReactionTotalsInfo"
        }) as API.ReactionTotalsInfo;
    }

    async searchPostingReactions(filter: API.ReactionsFilter): Promise<API.ReactionInfo[]> {
        const location = "/postings/reactions/search";
        return await this.call("searchPostingReactions", location, {
            method: "POST", body: filter, schema: "ReactionInfoArray"
        }) as API.ReactionInfo[];
    }

    async getPostingReactionTotals(postingId: string): Promise<API.ReactionTotalsInfo> {
        const location = ut`/postings/${postingId}/reaction-totals`;
        return await this.call("getPostingReactionTotals", location, {
            method: "GET", schema: "ReactionTotalsInfo"
        }) as API.ReactionTotalsInfo;
    }

    async searchPostingReactionTotals(filter: API.ReactionTotalsFilter): Promise<API.ReactionTotalsInfo[]> {
        const location = "/postings/reaction-totals/search";
        return await this.call("searchPostingReactionTotals", location, {
            method: "POST", body: filter, schema: "ReactionTotalsInfoArray"
        }) as API.ReactionTotalsInfo[];
    }

    async getProfile(withSource: boolean = false): Promise<API.ProfileInfo> {
        const include = commaSeparatedFlags({"source": withSource});
        const location = ut`/profile`;
        const params = {include};
        return await this.call("getProfile", location, {
            method: "GET", params, schema: "ProfileInfo"
        }) as API.ProfileInfo;
    }

    async updateProfile(profile: API.ProfileAttributes): Promise<API.ProfileInfo> {
        const location = "/profile";
        return await this.call("updateProfile", location, {
            method: "PUT", body: profile, schema: "ProfileInfo"
        }) as API.ProfileInfo;
    }

    async getDeleteNodeRequestStatus(): Promise<API.DeleteNodeStatus> {
        const location = "/provider/delete-node";
        return await this.call("getDeleteNodeRequestStatus", location, {
            method: "GET", schema: "DeleteNodeStatus"
        }) as API.DeleteNodeStatus;
    }

    async sendDeleteNodeRequest(deleteNodeText: API.DeleteNodeText): Promise<API.DeleteNodeStatus> {
        const location = "/provider/delete-node";
        return await this.call("sendDeleteNodeRequest", location, {
            method: "POST", body: deleteNodeText, schema: "DeleteNodeStatus"
        }) as API.DeleteNodeStatus;
    }

    async cancelDeleteNodeRequest(): Promise<API.DeleteNodeStatus> {
        const location = "/provider/delete-node";
        return await this.call("cancelDeleteNodeRequest", location, {
            method: "DELETE", schema: "DeleteNodeStatus"
        }) as API.DeleteNodeStatus;
    }

    async proxyMedia(url: string): Promise<Blob> {
        const location = ut`/proxy/media`;
        const params = {url};
        return await this.call("proxyMedia", location, {
            method: "GET", params, schema: "blob"
        }) as Blob;
    }

    async proxyLinkPreview(url: string): Promise<API.LinkPreviewInfo> {
        const location = ut`/proxy/link-preview`;
        const params = {url};
        return await this.call("proxyLinkPreview", location, {
            method: "GET", params, schema: "LinkPreviewInfo"
        }) as API.LinkPreviewInfo;
    }

    async registerAtPushRelay(attributes: API.PushRelayClientAttributes): Promise<API.Result> {
        const location = "/push-relay";
        return await this.call("registerAtPushRelay", location, {
            method: "POST", body: attributes, schema: "Result"
        }) as API.Result;
    }

    async askRemoteNode(remoteNodeName: string, details: API.AskDescription): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/ask`;
        return await this.call("askRemoteNode", location, {
            method: "POST", body: details, schema: "Result"
        }) as API.Result;
    }

    async createRemoteComment(
        remoteNodeName: string, postingId: string, comment: API.CommentSourceText
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments`;
        return await this.call("createRemoteComment", location, {
            method: "POST", body: comment, schema: "Result"
        }) as API.Result;
    }

    async updateRemoteComment(
        remoteNodeName: string, postingId: string, commentId: string, comment: API.CommentSourceText
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments/${commentId}`;
        return await this.call("updateRemoteComment", location, {
            method: "PUT", body: comment, schema: "Result"
        }) as API.Result;
    }

    async deleteRemoteComment(remoteNodeName: string, postingId: string, commentId: string): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments/${commentId}`;
        return await this.call("deleteRemoteComment", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async verifyRemoteComment(
        remoteNodeName: string, postingId: string, commentId: string
    ): Promise<API.AsyncOperationCreated> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments/${commentId}/verify`;
        return await this.call("verifyRemoteComment", location, {
            method: "POST", schema: "AsyncOperationCreated"
        }) as API.AsyncOperationCreated;
    }

    async createRemoteCommentReaction(
        remoteNodeName: string, postingId: string, commentId: string, reaction: API.ReactionAttributes
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments/${commentId}/reactions`;
        return await this.call("createRemoteCommentReaction", location, {
            method: "POST", body: reaction, schema: "Result"
        }) as API.Result;
    }

    async deleteRemoteCommentReaction(
        remoteNodeName: string, postingId: string, commentId: string
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments/${commentId}/reactions`;
        return await this.call("deleteRemoteCommentReaction", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async verifyRemoteCommentReaction(
        remoteNodeName: string, postingId: string, commentId: string, ownerName: string
    ): Promise<API.AsyncOperationCreated> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/comments/${commentId}/reactions/${ownerName}/verify`;
        return await this.call("verifyRemoteCommentReaction", location, {
            method: "POST", schema: "AsyncOperationCreated"
        }) as API.AsyncOperationCreated;
    }

    async createRemotePosting(remoteNodeName: string, posting: API.PostingSourceText): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings`;
        return await this.call("createRemotePosting", location, {
            method: "POST", body: posting, schema: "Result"
        }) as API.Result;
    }

    async updateRemotePosting(
        remoteNodeName: string, postingId: string, posting: API.PostingSourceText
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}`;
        return await this.call("updateRemotePosting", location, {
            method: "PUT", body: posting, schema: "Result"
        }) as API.Result;
    }

    async deleteRemotePosting(remoteNodeName: string, postingId: string): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}`;
        return await this.call("deleteRemotePosting", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async verifyRemotePosting(remoteNodeName: string, id: string): Promise<API.AsyncOperationCreated> {
        const location = ut`/nodes/${remoteNodeName}/postings/${id}/verify`;
        return await this.call("verifyRemotePosting", location, {
            method: "POST", schema: "AsyncOperationCreated"
        }) as API.AsyncOperationCreated;
    }

    async verifyRemotePostingRevision(
        remoteNodeName: string, id: string, revisionId: string
    ): Promise<API.AsyncOperationCreated> {
        const location = ut`/nodes/${remoteNodeName}/postings/${id}/revisions/${revisionId}/verify`;
        return await this.call("verifyRemotePostingRevision", location, {
            method: "POST", schema: "AsyncOperationCreated"
        }) as API.AsyncOperationCreated;
    }

    async createRemotePostingReaction(
        remoteNodeName: string, postingId: string, reaction: API.ReactionAttributes
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/reactions`;
        return await this.call("createRemotePostingReaction", location, {
            method: "POST", body: reaction, schema: "Result"
        }) as API.Result;
    }

    async deleteRemotePostingReaction(remoteNodeName: string, postingId: string): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/reactions`;
        return await this.call("deleteRemotePostingReaction", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async verifyRemotePostingReaction(
        remoteNodeName: string, postingId: string, ownerName: string
    ): Promise<API.AsyncOperationCreated> {
        const location = ut`/nodes/${remoteNodeName}/postings/${postingId}/reactions/${ownerName}/verify`;
        return await this.call("verifyRemotePostingReaction", location, {
            method: "POST", schema: "AsyncOperationCreated"
        }) as API.AsyncOperationCreated;
    }

    async createRemoteSheriffOrder(
        remoteNodeName: string, sheriffOrder: API.SheriffOrderAttributes
    ): Promise<API.Result> {
        const location = ut`/nodes/${remoteNodeName}/sheriff/orders`;
        return await this.call("createRemoteSheriffOrder", location, {
            method: "POST", body: sheriffOrder, schema: "Result"
        }) as API.Result;
    }

    async getRemoteSheriffOrder(remoteNodeName: string, id: string): Promise<API.SheriffOrderInfo> {
        const location = ut`/nodes/${remoteNodeName}/sheriff/orders/${id}`;
        return await this.call("getRemoteSheriffOrder", location, {
            method: "GET", schema: "SheriffOrderInfo"
        }) as API.SheriffOrderInfo;
    }

    async updateSettings(settings: API.SettingInfo[]): Promise<API.Result> {
        const location = "/settings";
        return await this.call("updateSettings", location, {
            method: "PUT", body: settings, schema: "Result"
        }) as API.Result;
    }

    async getClientSettings(prefix: string | null = null): Promise<API.SettingInfo[]> {
        const location = ut`/settings/client`;
        const params = {prefix};
        return await this.call("getClientSettings", location, {
            method: "GET", params, schema: "SettingInfoArray"
        }) as API.SettingInfo[];
    }

    async getNodeSettings(prefix: string | null = null): Promise<API.SettingInfo[]> {
        const location = ut`/settings/node`;
        const params = {prefix};
        return await this.call("getNodeSettings", location, {
            method: "GET", params, schema: "SettingInfoArray"
        }) as API.SettingInfo[];
    }

    async getNodeSettingsMetadata(prefix: string | null = null): Promise<API.SettingMetaInfo[]> {
        const location = ut`/settings/node/metadata`;
        const params = {prefix};
        return await this.call("getNodeSettingsMetadata", location, {
            method: "GET", params, schema: "SettingMetaInfoArray"
        }) as API.SettingMetaInfo[];
    }

    async updateNodeSettingsMetadata(metadata: API.SettingMetaAttributes[]): Promise<API.Result> {
        const location = "/settings/node/metadata";
        return await this.call("updateNodeSettingsMetadata", location, {
            method: "PUT", body: metadata, schema: "Result"
        }) as API.Result;
    }

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

    async getSheriffComplaintGroup(id: string): Promise<API.SheriffComplaintGroupInfo> {
        const location = ut`/sheriff/complaints/groups/${id}`;
        return await this.call("getSheriffComplaintGroup", location, {
            method: "GET", schema: "SheriffComplaintGroupInfo"
        }) as API.SheriffComplaintGroupInfo;
    }

    async getSheriffComplaintsByGroup(id: string): Promise<API.SheriffComplaintInfo[]> {
        const location = ut`/sheriff/complaints/groups/${id}/complaints`;
        return await this.call("getSheriffComplaintsByGroup", location, {
            method: "GET", schema: "SheriffComplaintInfoArray"
        }) as API.SheriffComplaintInfo[];
    }

    async updateSheriffComplaintGroup(
        id: string, decision: API.SheriffComplaintDecisionText
    ): Promise<API.SheriffComplaintGroupInfo> {
        const location = ut`/sheriff/complaints/groups/${id}`;
        return await this.call("updateSheriffComplaintGroup", location, {
            method: "PUT", body: decision, schema: "SheriffComplaintGroupInfo"
        }) as API.SheriffComplaintGroupInfo;
    }

    async createSheriffComplaint(complaint: API.SheriffComplaintText): Promise<API.SheriffComplaintInfo> {
        const location = "/sheriff/complaints";
        return await this.call("createSheriffComplaint", location, {
            method: "POST", body: complaint, schema: "SheriffComplaintInfo"
        }) as API.SheriffComplaintInfo;
    }

    async createSheriffOrder(sheriffOrder: API.SheriffOrderDetails): Promise<API.Result> {
        const location = "/sheriff/orders";
        return await this.call("createSheriffOrder", location, {
            method: "POST", body: sheriffOrder, schema: "Result"
        }) as API.Result;
    }

    async getStory(id: string): Promise<API.StoryInfo> {
        const location = ut`/stories/${id}`;
        return await this.call("getStory", location, {
            method: "GET", schema: "StoryInfo", bodies: true
        }) as API.StoryInfo;
    }

    async updateStory(id: string, story: API.StoryAttributes): Promise<API.StoryInfo> {
        const location = ut`/stories/${id}`;
        return await this.call("updateStory", location, {
            method: "PUT", body: story, schema: "StoryInfo", bodies: true
        }) as API.StoryInfo;
    }

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

    async createSubscriber(subscriber: API.SubscriberDescription): Promise<API.SubscriberInfo> {
        const location = "/people/subscribers";
        return await this.call("createSubscriber", location, {
            method: "POST", body: subscriber, schema: "SubscriberInfo"
        }) as API.SubscriberInfo;
    }

    async getSubscriber(id: string): Promise<API.SubscriberInfo> {
        const location = ut`/people/subscribers/${id}`;
        return await this.call("getSubscriber", location, {
            method: "GET", schema: "SubscriberInfo"
        }) as API.SubscriberInfo;
    }

    async updateSubscriber(id: string, subscriber: API.SubscriberOverride): Promise<API.SubscriberInfo> {
        const location = ut`/people/subscribers/${id}`;
        return await this.call("updateSubscriber", location, {
            method: "PUT", body: subscriber, schema: "SubscriberInfo"
        }) as API.SubscriberInfo;
    }

    async deleteSubscriber(id: string): Promise<API.ContactInfo> {
        const location = ut`/people/subscribers/${id}`;
        return await this.call("deleteSubscriber", location, {
            method: "DELETE", schema: "ContactInfo"
        }) as API.ContactInfo;
    }

    async getSubscriptions(
        remoteNodeName: string | null = null, type: API.SubscriptionType | null = null
    ): Promise<API.SubscriptionInfo[]> {
        const location = ut`/people/subscriptions`;
        const params = {nodeName: remoteNodeName, type};
        return await this.call("getSubscriptions", location, {
            method: "GET", params, schema: "SubscriptionInfoArray"
        }) as API.SubscriptionInfo[];
    }

    async createSubscription(subscription: API.SubscriptionDescription): Promise<API.SubscriptionInfo> {
        const location = "/people/subscriptions";
        return await this.call("createSubscription", location, {
            method: "POST", body: subscription, schema: "SubscriptionInfo"
        }) as API.SubscriptionInfo;
    }

    async updateSubscription(id: string, subscription: API.SubscriptionOverride): Promise<API.SubscriptionInfo> {
        const location = ut`/people/subscriptions/${id}`;
        return await this.call("updateSubscription", location, {
            method: "PUT", body: subscription, schema: "SubscriptionInfo"
        }) as API.SubscriptionInfo;
    }

    async deleteSubscription(id: string): Promise<API.ContactInfo> {
        const location = ut`/people/subscriptions/${id}`;
        return await this.call("deleteSubscription", location, {
            method: "DELETE", schema: "ContactInfo"
        }) as API.ContactInfo;
    }

    async searchSubscriptions(filter: API.SubscriptionFilter): Promise<API.SubscriptionInfo[]> {
        const location = "/people/subscriptions/search";
        return await this.call("searchSubscriptions", location, {
            method: "POST", body: filter, schema: "SubscriptionInfoArray"
        }) as API.SubscriptionInfo[];
    }

    async getTokens(): Promise<API.TokenInfo[]> {
        const location = "/tokens";
        return await this.call("getTokens", location, {
            method: "GET", schema: "TokenInfoArray"
        }) as API.TokenInfo[];
    }

    async createToken(token: API.TokenAttributes): Promise<API.TokenInfo> {
        const location = "/tokens";
        return await this.call("createToken", location, {
            method: "POST", body: token, schema: "TokenInfo"
        }) as API.TokenInfo;
    }

    async getTokenInfo(id: string): Promise<API.TokenInfo> {
        const location = ut`/tokens/${id}`;
        return await this.call("getTokenInfo", location, {
            method: "GET", schema: "TokenInfo"
        }) as API.TokenInfo;
    }

    async updateToken(id: string, token: API.TokenName): Promise<API.TokenInfo> {
        const location = ut`/tokens/${id}`;
        return await this.call("updateToken", location, {
            method: "PUT", body: token, schema: "TokenInfo"
        }) as API.TokenInfo;
    }

    async deleteToken(id: string): Promise<API.Result> {
        const location = ut`/tokens/${id}`;
        return await this.call("deleteToken", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async getUserListGeneral(name: string): Promise<API.UserListInfo> {
        const location = ut`/user-lists/${name}`;
        return await this.call("getUserListGeneral", location, {
            method: "GET", schema: "UserListInfo"
        }) as API.UserListInfo;
    }

    async getUserListSlice(
        name: string, after: number | null = null, before: number | null = null, limit: number | null = null
    ): Promise<API.UserListSliceInfo> {
        const location = ut`/user-lists/${name}/items`;
        const params = {after, before, limit};
        return await this.call("getUserListSlice", location, {
            method: "GET", params, schema: "UserListSliceInfo"
        }) as API.UserListSliceInfo;
    }

    async getUserListItem(name: string, remoteNodeName: string): Promise<API.UserListItemInfo> {
        const location = ut`/user-lists/${name}/items/${remoteNodeName}`;
        return await this.call("getUserListItem", location, {
            method: "GET", schema: "UserListItemInfo"
        }) as API.UserListItemInfo;
    }

    async createUserListItem(name: string, item: API.UserListItemAttributes): Promise<API.UserListItemInfo> {
        const location = ut`/user-lists/${name}/items`;
        return await this.call("createUserListItem", location, {
            method: "POST", body: item, schema: "UserListItemInfo"
        }) as API.UserListItemInfo;
    }

    async deleteUserListItem(name: string, remoteNodeName: string): Promise<API.Result> {
        const location = ut`/user-lists/${name}/items/${remoteNodeName}`;
        return await this.call("deleteUserListItem", location, {
            method: "DELETE", schema: "Result"
        }) as API.Result;
    }

    async whoAmI(): Promise<API.WhoAmI> {
        const location = "/whoami";
        return await this.call("whoAmI", location, {
            method: "GET", schema: "WhoAmI"
        }) as API.WhoAmI;
    }

}
