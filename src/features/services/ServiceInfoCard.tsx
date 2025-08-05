import type { Service } from "@/types/service.types";
import { Card } from "@/components/ui/card";

interface Props {
  service: Service;
}

export const ServiceInfoCard = ({ service }: Props) => {
  return (
    <Card>
      <div className="flex flex-col gap-6 p-4 md:flex-row md:items-center">
        <div className="mx-auto aspect-[4/3] w-full max-w-sm flex-shrink-0 overflow-hidden rounded-lg shadow md:mx-0">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col justify-center space-y-2 text-center md:text-left">
          <h2 className="text-2xl font-bold capitalize">{service.title}</h2>
          <p className="text-muted-foreground text-sm">{service.category}</p>
          <p className="text-lg font-semibold text-gray-900">
            Price: EGP {service.price}
          </p>
          <p className="text-sm text-gray-500">
            Provided by: {service.provider.fullName}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <h3 className="text-md mb-1 font-semibold text-gray-800">
          Description
        </h3>
        <p className="text-gray-700">{service.description}</p>
      </div>
    </Card>
  );
};
