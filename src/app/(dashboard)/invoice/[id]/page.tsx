import ProductForm from '@/components/ProductForm';

export default function Page() {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full bg-white p-6 rounded-lg shadow-md">
        <ProductForm />
      </div>
    </div>
  );
}
