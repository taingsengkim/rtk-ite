import FakeStoreProductDetailsComponent from "@/components/FakeStoreProductDetailsComponent";
import {
  FakeStoreProductType,
  useGetFakeStoreProductQuery,
} from "@/lib/features/productSlice/productSlice";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <FakeStoreProductDetailsComponent id={id} />;
}
