import { DeviceInfoProvider } from "@/components/contexts/device-info/device-info-provider";
import { CPUInfo } from "@/components/cpu-info";

export default function Home() {
  return (
    <DeviceInfoProvider>
      <main className="min-h-[100vh] flex items-center flex-col gap-2 justify-center p-4">
        <h3>CPU Info</h3>
        <CPUInfo />
      </main>
    </DeviceInfoProvider>
  );
}
