import { cn } from "@/lib/utils";
import { Roboto_Slab } from "next/font/google";
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={cn("flex min-h-screen flex-col items-center", robotoSlab.className)}>
      <div className="pt-8 sm:text-2xl md:text-4xl font-light">By R.V. Import & Export Co.,Ltd.</div>
    </main>
  );
}
