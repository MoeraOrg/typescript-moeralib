import { CarteAttributes, CarteInfo, Scope } from "./types";
import { CarteSource } from "./caller";
import { MoeraNode } from "./node";

/**
 * Error obtaining valid cartes.
 */
export class MoeraCartesError extends Error {

    /**
     * @param {string} message - error message
     */
    constructor(message: string) {
        super(message);
    }

}

/**
 * Class that gets cartes from the given node, caches them and supplies them for authentication.
 */
export class MoeraCarteSource implements CarteSource {

    private readonly node: MoeraNode;
    private readonly clientScope: Scope[];
    private readonly adminScope: Scope[];
    private readonly targetNodeName: string | null;
    private cartes: CarteInfo[] = [];

    /**
     * @param {MoeraNode} node node to get cartes from
     * @param {Scope[] | null} clientScope permissions to be granted to the cartes; if not set, all permissions of
     * the cartes' owner are granted
     * @param {Scope[] | null} adminScope additional administrative permissions (of those granted to the cartes' owner
     * by the target node) to be granted to the cartes
     * @param {string | null} targetNodeName if set, the cartes are valid for authentication on the specified node only
     */
    constructor(
        node: MoeraNode, clientScope: Scope[] | null = null, adminScope: Scope[] | null = null,
        targetNodeName: string | null = null
    ) {
        this.node = node;
        this.clientScope = clientScope ?? ["all"];
        this.adminScope = adminScope ?? [];
        this.targetNodeName = targetNodeName
    }

    /**
     * Force renewing the cached list of cartes.
     */
    async renew(): Promise<void> {
        const attributes: CarteAttributes = {
            clientScope: this.clientScope,
            adminScope: this.adminScope,
            nodeName: this.targetNodeName
        };
        this.cartes = (await this.node.createCartes(attributes)).cartes;
    }

    /**
     * Get a valid carte. Use one of the cached ones, if possible.
     *
     * @return {Promise<string>} the carte
     */
    async getCarte(): Promise<string> {
        for (const renewed of [false, true]) {
            const now = Math.floor(Date.now() / 1000);
            this.cartes = this.cartes.filter(c => c.deadline > now);
            if (this.cartes.length === 0) {
                if (renewed) {
                    throw new MoeraCartesError("Could not obtain a valid carte from the node");
                }
                await this.renew();
                continue;
            }
            for (const c of this.cartes) {
                if (c.beginning <= now) {
                    return c.carte;
                }
            }
            throw new MoeraCartesError("Could not obtain a carte valid for now");
        }
         throw new MoeraCartesError("Could not obtain a carte valid for now");
    }

}
