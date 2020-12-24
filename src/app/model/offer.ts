import {ITechno} from './techno';
import {IGroup} from './group';

export interface IOffer {
    technos: [
        ITechno
    ];
    status: string;
    _id: string;
    title: string;
    salary: string;
    location: string;
    content: string;
    contract: string;
    group: IGroup;
    createdAt: string;
    updatedAt: string;
    publication_date: string;
}
