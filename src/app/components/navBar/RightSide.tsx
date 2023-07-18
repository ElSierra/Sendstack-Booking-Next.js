import Image from "next/image";

export default function RightSide() {
  return (
    <div className="flex items-center gap-2 rsm:hidden">
      <Image
        src={"/placeholder.png"}
        alt="profile pic"
        width={80}
        height={80}
        className="rounded-full w-8 h-8"
      />
      <p className="text-sm">Isaac</p>
    </div>
  );
}
