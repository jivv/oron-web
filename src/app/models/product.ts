export interface Product {
  id: number;
  name: string;
  description: string;
  specialNotes: string;
  piecesPerCase: number;
  minimumQuantityToOrder: number;
  availablePieces: number;
  availableCases: number;
  available: boolean;
}
