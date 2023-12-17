export class Client {
    constructor() {}
    name: string= ""
    taxId: string = ""
    city: string = ""
    street: string = ""
    houseNumber: string = ""
    roomNumber: string = ""
    postalCode: string = ""
    comments: string = ""
    field: string = ""
    isActive: boolean = false

    getAddress() {
        return `${this.street} ${this.houseNumber}/${this.roomNumber}, ${this.city} ${this.postalCode}`
    }
    
    getData() {
        return `${this.name} \n${this.taxId} \n${this.getAddress()}`
    }
}
