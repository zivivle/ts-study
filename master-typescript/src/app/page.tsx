import Image from "next/image";
import mainImage from "/public/images/main_image.png";
import mainButton from "/public/images/main_button.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[100dvh]">
      <Image src={mainImage} alt="mainImage" width={600} height={300} />
      <div>
        <Link href="/quiz-page">
          <button className="border-[2px] border-black rounded-2xl p-8 mt-10 hover:bg-amber-100">
            <Image
              src={mainButton}
              alt="mainButtonImage"
              width={400}
              height={300}
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
