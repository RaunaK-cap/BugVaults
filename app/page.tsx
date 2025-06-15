"use client"
import { Badge } from "@/components/ui/badge";
import { IoMdCode } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGripfire } from "react-icons/fa";
import Navbar from "./components/Navbar/Navbar";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="min-h-screen w-full bg-[#020617] relative font-[family-name:var(--font-geist-sans)">
      {/* Emerald Radial Glow Background */}
      <div
        className="fixed inset-0 z-0 ]"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(150,185,30,0.35), transparent)`,
        }}
      />
      <Navbar/>
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[20%]  mt-36">
        <div className="pl-52">
          <Badge
            variant="secondary"
            className="mb-8 bg-gray-200/20 text-white from-primary/60 to-primary/40 border-primary/30 hover:border-primary/40 transition-all duration-300 group cursor-default"
          >
            {<IoMdCode size={20} />} By developers, for developers
          </Badge>
        </div>
        <h1 className="text-white text-7xl font-bold  pl-24"> Never Lose a </h1>
        <h1 className="text-white font-bold text-7xl"> Bug Solution Again</h1>
        <div className="text-gray-400 pl-20 mt-4 ">
          <p>
            Your personal vault for debugging sessions. Log, search, and learn
          </p>
          <p className="pl-5">
            from every bug you've conquered. Turn debugging into your
          </p>
          <p className="pl-48"> superpower.</p>
        </div>
        <div className="pl-62 mt-8">
          <Badge
            variant="secondary"
            className=" bg-gray-200/20 text-white from-primary/60 to-primary/40 border-primary/30 hover:scale-125 transition-all duration-300 group cursor-default flex gap-2"
          >
            {<IoMdCode size={20} />} learn from errors
          </Badge>
        </div>
        <div className="pl-20 mt-10 flex gap-5">
          <button className="p-3 rounded-lg flex  items-center gap-5 px-15 bg-yellow-500 text-black cursor-pointer" onClick={()=> router.push("/trackingpage")}>
            Start your Vault {<FaArrowRightLong size={10} />}
          </button>
          <button className="p-3 rounded-lg flex  items-center gap-4 px-10 bg-black text-white border border-gray-700 cursor-pointer">
    
            {<FaGripfire size={20} />} View Demo
          </button>
        </div>
        <div className="w-full  mt-16">
          <div className="">
            <div className="absolute bg-red-400 rounded-2xl  transition-all duration-700" />
            <div className="relative rounded-2xl border border-border/50  p-8  transition-all duration-500 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div
                    className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="h-3 w-3 rounded-full bg-green-500 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <Badge
                variant={"default"}
                className="bg-gray-700 "
                >
                <span className="text-xs text-orange-300 font-mono  px-2 py-1 rounded">
                  bugvaults.dev/dashboard
                </span>
                </Badge>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm text-muted-foreground font-mono">
                    Latest debugging session
                  </span>
                </div>

                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div className="font-mono text-sm">
                    <span className="text-red-500 font-semibold">Error:</span>{" "}
                    <span className="text-foreground">
                      Cannot read property 'map' of undefined
                    </span>
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-green-500 font-semibold">
                      Solution:
                    </span>{" "}
                    <span className="text-foreground">
                      Added optional chaining and null check
                    </span>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">
                    <span className="text-blue-500">#React</span>{" "}
                    <span className="text-purple-500">#JavaScript</span>{" "}
                    <span className="text-orange-500">#Arrays</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-primary/70 font-mono">
                    ✓ Saved to vault
                  </span>
                  <span className="text-muted-foreground">2 minutes ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  mt-16">
          <div className="">
            <div className="absolute bg-red-400 rounded-2xl  transition-all duration-700" />
            <div className="relative rounded-2xl border border-border/50  p-8  transition-all duration-500 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div
                    className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="h-3 w-3 rounded-full bg-green-500 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <Badge
                variant={"default"}
                className="bg-gray-700 "
                >
                <span className="text-xs text-orange-300 font-mono  px-2 py-1 rounded">
                  bugvaults.dev/dashboard
                </span>
                </Badge>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm text-muted-foreground font-mono">
                    Latest debugging session
                  </span>
                </div>

                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div className="font-mono text-sm">
                    <span className="text-red-500 font-semibold">Error:</span>{" "}
                    <span className="text-foreground">
                      Cannot read property 'map' of undefined
                    </span>
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-green-500 font-semibold">
                      Solution:
                    </span>{" "}
                    <span className="text-foreground">
                      Added optional chaining and null check
                    </span>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">
                    <span className="text-blue-500">#React</span>{" "}
                    <span className="text-purple-500">#JavaScript</span>{" "}
                    <span className="text-orange-500">#Arrays</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-primary/70 font-mono">
                    ✓ Saved to vault
                  </span>
                  <span className="text-muted-foreground">2 minutes ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  mt-16">
          <div className="">
            <div className="absolute bg-red-400 rounded-2xl  transition-all duration-700" />
            <div className="relative rounded-2xl border border-border/50  p-8  transition-all duration-500 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div
                    className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="h-3 w-3 rounded-full bg-green-500 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <Badge
                variant={"default"}
                className="bg-gray-700 "
                >
                <span className="text-xs text-orange-300 font-mono  px-2 py-1 rounded">
                  bugvaults.dev/dashboard
                </span>
                </Badge>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm text-muted-foreground font-mono">
                    Latest debugging session
                  </span>
                </div>

                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div className="font-mono text-sm">
                    <span className="text-red-500 font-semibold">Error:</span>{" "}
                    <span className="text-foreground">
                      Cannot read property 'map' of undefined
                    </span>
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-green-500 font-semibold">
                      Solution:
                    </span>{" "}
                    <span className="text-foreground">
                      Added optional chaining and null check
                    </span>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">
                    <span className="text-blue-500">#React</span>{" "}
                    <span className="text-purple-500">#JavaScript</span>{" "}
                    <span className="text-orange-500">#Arrays</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-primary/70 font-mono">
                    ✓ Saved to vault
                  </span>
                  <span className="text-muted-foreground">2 minutes ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div>
            <Badge className="bg-gray-200/40 p-2 "> Features </Badge>
            <div>
              <div>
                <h1>  this is card components </h1>
                <h2> features that you will get here </h2>


                <div>
                  <div>
                    <h2> feature 01 ...</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
