export type SomethingType = {
    commonThing: string;
}

export class Something implements SomethingType {
    commonThing: string = 'this is a common thing between the backend and the frontend';
}
