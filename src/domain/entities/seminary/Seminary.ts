// Utils
import { generateId } from "../../../infrastructure/utils"

// Types
import { EntityName } from "../../../application/dtos/shared/entityName"


export class Seminary {
    private id: string
    private name: string
    private rate: number

    constructor(name: string, rate: number) {
        this.name = name
        this.rate = rate
        this.id = generateId(this.constructor.name.toLowerCase() as EntityName)
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }


    public getRate() {
        return this.rate
    }
}