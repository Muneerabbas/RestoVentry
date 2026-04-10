import { DishProfitView } from "@/components/dish-profit/dish-profit-view";
import { dishProfitRows } from "@/lib/mock-data";

export default function DishProfitPage() {
  return <DishProfitView initialRows={dishProfitRows} />;
}
