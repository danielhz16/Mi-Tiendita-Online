export interface OptionsProps {
  id: number;
  funSuccess: () => void;
  name: string;
  status: string;
  code?: string;
  command? : () => void;
}