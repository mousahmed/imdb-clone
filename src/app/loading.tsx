import Image from "next/image";

function Loading() {
  return (
    <div className="flex justify-center">
      <Image
        priority={true}
        width={384}
        height={384}
        src="spinner.svg"
        alt="loading..."
      />
    </div>
  );
}

export default Loading;
