import ProductModalComponent from "@/components/ProductModalComponent";

export default async function ProductModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <ProductModalComponent id={id} />
    </div>
  );
}
