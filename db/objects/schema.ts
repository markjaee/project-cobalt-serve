
export interface UserEntity extends Schema {
    _id: { $oid: string };
    userName: string;
    pw: string;
    lastName: string;
    firstName: string;
    birthDate: string;
}

export interface Schema { }