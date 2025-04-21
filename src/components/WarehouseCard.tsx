
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface Warehouse {
  id: string;
  title: string;
  location: string;
  area: string;
  price: string;
  type: string;
  image: string;
}

interface WarehouseCardProps {
  warehouse: Warehouse;
}

const WarehouseCard = ({ warehouse }: WarehouseCardProps) => {
  return (
    <Link to={`/warehouse/${warehouse.id}`}>
      <Card className="overflow-hidden card-hover">
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={warehouse.image} 
            alt={warehouse.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-warehouse-orange hover:bg-warehouse-darkOrange">
            {warehouse.type}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg truncate">{warehouse.title}</h3>
          <p className="text-gray-500 text-sm">{warehouse.location}</p>
          <div className="flex justify-between mt-2">
            <span className="font-medium text-warehouse-blue">{warehouse.area}</span>
            <span className="font-medium text-warehouse-orange">{warehouse.price}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-end">
          <Badge variant="outline" className="border-warehouse-blue text-warehouse-blue hover:bg-warehouse-blue hover:text-white">
            View Details
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default WarehouseCard;
