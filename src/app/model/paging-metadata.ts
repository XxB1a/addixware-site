export interface IPagingMetadata {
    prev_page?: string;
    next_page?: string;
    pages?: [{
        number: number;
        url: string;
    }];
    item_count?: number;
}
