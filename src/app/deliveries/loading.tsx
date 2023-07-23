import DeliveryCardSkeleton from "./components/DeliveryCardSkeleton";

export default function Loading() {
  return (
    <main className=" min-h-screen w-full pt-[6rem] rsm:pt-[2rem] pb-[6rem]  dp:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100  px-12 rsm:px-2">
      {[0, 1, 2, 3, 4, 5].map((idx) => (
        <DeliveryCardSkeleton key={idx} />
      ))}
    </main>
  );
}
