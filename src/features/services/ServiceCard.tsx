import type { Service } from "@/types/service.types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Props {
  service: Service;
  to?: string;
}

export const ServiceCard = ({ service, to }: Props) => {
  const detailLink = to ?? `/services/${service.id}`;

  return (
    <div className="h-full overflow-hidden shadow-md">
      <Card className="flex h-full flex-col">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-t-xl">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="h-full w-full object-cover"
          />
        </div>

        <CardHeader className="flex-0">
          <h2 className="text-xl font-semibold capitalize">{service.title}</h2>
          <p className="text-sm text-gray-500">{service.category}</p>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <span className="font-medium text-gray-700">By</span>
            <span className="truncate">{service.provider.fullName}</span>
          </div>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col justify-between space-y-2">
          <p className="line-clamp-3 text-gray-700">
            {service.description.length > 150
              ? service.description.slice(0, 147) + "..."
              : service.description}
          </p>

          <div>
            <p className="text-lg font-bold">EGP{service.price}</p>
            <Button asChild className="mt-2 w-full">
              <Link to={detailLink}>View Details</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
