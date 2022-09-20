export interface ItemDetail {
    name: string;
    description: any;
}

export interface Item {
    [key: string | number]: ItemDetail
}

export interface ItemType {
    data: Item
}