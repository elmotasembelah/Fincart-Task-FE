import CreateServiceForm from "@/features/services/CreateServiceForm";

export default function NewService() {
  return (
    <div className="mx-auto max-w-2xl space-y-4 p-4">
      <h1 className="text-2xl font-bold">Create New Service</h1>
      <CreateServiceForm />
    </div>
  );
}
