import ThreatSidebar from "@/components/ThreatSidebar";
import Header from "@/components/Header";
import MapView from "@/components/MapView";

export default function HomePage() {
    return (
        <main className="relative h-screen w-screen overflow-hidden bg-black text-white font-mono">
            <Header />
            {/* Map in the background */}
            <MapView />
            <ThreatSidebar />

            {/* Floating Controls */}
            <div className="absolute bottom-4 left-4 z-10 space-y-2">
                <button className="px-4 py-2 bg-white text-black rounded-md shadow">
                    Filter
                </button>
                <button className="px-4 py-2 bg-white text-black rounded-md shadow">
                    Refresh
                </button>
            </div>
        </main>
    );
}

