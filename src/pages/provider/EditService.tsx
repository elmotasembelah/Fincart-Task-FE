import { useParams } from "react-router-dom";
import EditServiceForm from "@/features/services/EditServiceForm";

export default function EditService() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className="p-4 text-red-500">Missing service ID</div>;
  }

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Edit Service</h1>
      <EditServiceForm serviceId={id} />
    </div>
  );
}
