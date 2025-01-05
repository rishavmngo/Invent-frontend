export type InventoryItem = {
  id: number;
  name: string;
  sell_price: number;
  purchase_price: number;
  total_quantity: number;
};
export type InventoryItems = InventoryItem[];
