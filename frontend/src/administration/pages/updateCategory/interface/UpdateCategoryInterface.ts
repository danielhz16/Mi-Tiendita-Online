export interface UpdateCategoryInterface {
    name: string;
    id?: number;
    originalName?: string;
    close?: () => void;
}