export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-4 bg-red-700 p-3 text-center text-sm font-bold uppercase text-white">
      {children}
    </p>
  );
}
