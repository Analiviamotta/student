// Types
import { EntityName } from "../../application/dtos/shared/entityName"

export function generateId(entityName: EntityName): string {
    const currentDate = new Date()

    return `${entityName}-${currentDate.toLocaleDateString().replace(' ', '-')}`
}