import { SiteFooter } from "@/components/SiteFooter";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow p-6 pb-0 md:p-12 md:pb-0 md:pr-0 lg:p-20 lg:pb-0 lg:pr-0 xl:p-28 xl:pb-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile & Projects */}
            <div className="md:col-span-1">
              {/* Profile Picture & Name */}
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/headshot.jpg"
                  alt="Cyruss Amante Headshot"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <h1 className="text-2xl font-bold mt-2 text-green-400">
                  CYRUSS <span className="text-white">AMANTE</span>
                </h1>
                <p className="text-gray-400">
                  SE Student @ McMaster University
                </p>

                {/* Social Media */}
                <div className="flex space-x-3 mt-2">
                  <a href="#" className="text-gray-400 hover:text-white">
                    🔗
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    🐱
                  </a>
                </div>
              </div>

              {/* Projects */}
              <h2 className="text-lg font-semibold mt-6">PROJECTS</h2>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="h-24 bg-gray-800 rounded-lg"></div>
                <div className="h-24 bg-gray-800 rounded-lg"></div>
                <div className="h-24 bg-gray-800 rounded-lg"></div>
                <div className="h-24 bg-gray-800 rounded-lg"></div>
              </div>
            </div>

            {/* Experience */}
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold">EXPERIENCE</h2>
              <div className="bg-gray-800 rounded-lg p-6">
                <ExperienceTimeline />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
