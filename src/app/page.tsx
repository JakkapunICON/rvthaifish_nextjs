import { Icons } from "@/components/icons/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Roboto_Slab } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import profilePic from "/public/20210323_162507.jpg";
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={cn("flex min-h-screen flex-col items-center", robotoSlab.className)}>
      <div className="pt-8 sm:text-2xl md:text-4xl font-light mb-10">By R.V. Import & Export Co.,Ltd.</div>
      <div className="flex space-x-4 justify-center">
        <Link href={siteConfig.links.tel} target="_blank" rel="noreferrer" className="flex items-center space-x-2">
          <div
            className={cn(
              buttonVariants({
                variant: "link"
              }),
              "w-9 px-0"
            )}
          >
            <Icons.tel className="h-4 w-4" />
            <span className="sr-only">Tel</span>
          </div>
          <div>{siteConfig.links.tel}</div>
        </Link>
        <Link href={siteConfig.links.facebook} target="_blank" rel="noreferrer" className="flex items-center space-x-2">
          <div
            className={cn(
              buttonVariants({
                variant: "link"
              }),
              "w-9 px-0"
            )}
          >
            <Icons.tel className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </div>
          <div>{siteConfig.links.facebook}</div>
        </Link>
        <Link href={siteConfig.links.facebook} target="_blank" rel="noreferrer" className="flex items-center space-x-2">
          <div
            className={cn(
              buttonVariants({
                variant: "link"
              }),
              "w-9 px-0"
            )}
          >
            <Icons.tel className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </div>
          <div>{siteConfig.links.facebook}</div>
        </Link>
        <Link href={siteConfig.links.facebook} target="_blank" rel="noreferrer" className="flex items-center space-x-2">
          <div
            className={cn(
              buttonVariants({
                variant: "link"
              }),
              "w-9 px-0"
            )}
          >
            <Icons.tel className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </div>
          <div>{siteConfig.links.facebook}</div>
        </Link>
      </div>
      <div className=" relative h-[400px] w-full">
        {/* <img id="content" src="http://upload.wikimedia.org/wikipedia/en/7/78/Small_scream.png" /> */}
        <Image src={profilePic} alt="" className=" absolute top-[50%] left-[50%] h-auto w-full" />
      </div>
    </main>
  );
}
