import { CarteInfo } from "./types";
import { CarteSource } from "./caller";
import { MoeraNode } from "./node";

export class MoeraCartesError extends Error {

    constructor(message: string) {
        super(message);
    }

}

function isAdminCarte(carte: CarteInfo): boolean {
    return carte.permissions == null || carte.permissions.includes("other");
}

export class MoeraCarteSource implements CarteSource {

    private node: MoeraNode;
    private cartes: CarteInfo[] = [];

    constructor(node: MoeraNode) {
        this.node = node;
    }

    async renew(): Promise<void> {
        this.cartes = (await this.node.getCartes()).cartes;
    }

    async getCarte(): Promise<string> {
        for (const renewed of [false, true]) {
            const now = Math.floor(Date.now() / 1000);
            this.cartes = this.cartes.filter(c => c.deadline > now && isAdminCarte(c));
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
