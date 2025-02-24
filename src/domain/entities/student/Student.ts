// Types
import { GENDER } from "../../enums/Gender"
import { Email } from "../../value-objects/Email"
import { Phone } from "../../value-objects/Phone"

export class Student {
    id: string
    name: string
    phone: Phone
    email: Email
    gender: GENDER
}