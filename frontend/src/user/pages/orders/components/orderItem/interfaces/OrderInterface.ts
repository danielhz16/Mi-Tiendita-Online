export interface OrderInterface {
    id_order: number;
    user__id_users: number;
    total: number;
    date_at: string;
    status__status_id: number;
    full_name: string;
    delivery_date: string;
}