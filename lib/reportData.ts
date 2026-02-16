// lib/reportData.ts

export type ReportCategorySlug =
  | "automated-test-reports"
  | "automated-test-robot"
  | "cellular-wifi"
  | "comparison-charts"
  | "dfs"
  | "interop-reports"
  | "iot-reports"
  | "mesh-reports"
  | "network-in-a-box-reports"
  | "test-house-reports"
  | "tr-398"
  | "wifi-7"
  | "wifi-ap-taas"
  | "wifi-station-testing"
  | "bluforge"
  | "rf-enclosures";

export type ReportFile = {
  name: string;
  path: string; // public URL path under /public
};

export const categoryTitles: Record<ReportCategorySlug, string> = {
  "automated-test-reports": "Automated Test Reports",
  "automated-test-robot": "Automated Test Robot",
  "cellular-wifi": "Cellular + Wi-Fi",
  "comparison-charts": "Comparison charts",
  dfs: "DFS",
  "interop-reports": "Interop Reports",
  "iot-reports": "IoT Reports",
  "mesh-reports": "Mesh Reports",
  "network-in-a-box-reports": "Network in a Box Reports",
  "test-house-reports": "Test House Reports",
  "tr-398": "TR-398",
  "wifi-7": "Wi-Fi 7",
  "wifi-ap-taas": "Wi-Fi AP TaaS",
  "wifi-station-testing": "Wi-Fi Station Testing",
  bluforge: "BluForge",
  "rf-enclosures": "RF Enclosures",
};

export const reportData: Record<ReportCategorySlug, ReportFile[]> = {
  // -----------------------------
  // Automated Test Reports
  // -----------------------------
  "automated-test-reports": [
    {
      name: "AP Auto Test Report.pdf",
      path: "/reports/Automated Test Reports/AP Auto Test Report.pdf",
    },
    {
      name: "Basic Client Connectivity Test.pdf",
      path: "/reports/Automated Test Reports/Basic Client Connectivity Test.pdf",
    },
    {
      name: "Client Visualization.pdf",
      path: "/reports/Automated Test Reports/Client Visualization.pdf",
    },
    {
      name: "Dataplane Report.pdf",
      path: "/reports/Automated Test Reports/Dataplane Report.pdf",
    },
    {
      name: "Dual Band Throughput Test.pdf",
      path: "/reports/Automated Test Reports/Dual Band Throughput Test.pdf",
    },
    {
      name: "Mesh Automated Roaming Test Report.pdf",
      path: "/reports/Automated Test Reports/Mesh Automated Roaming Test Report.pdf",
    },
    {
      name: "Mesh Automated Throuhgout Test Report.pdf",
      path: "/reports/Automated Test Reports/Mesh Automated Throuhgout Test Report.pdf",
    },
    {
      name: "MU-MIMO_Enable_Wi-Fi_Capacity.pdf",
      path: "/reports/Automated Test Reports/MU-MIMO_Enable_Wi-Fi_Capacity.pdf",
    },
    {
      name: "Multi Station Throughput vs Packet Size 2.4GHz.pdf",
      path:
        "/reports/Automated Test Reports/Multi Station Throughput vs Packet Size 2.4GHz.pdf",
    },
    {
      name: "Multi Station Throughput vs Packet Size 5GHz.pdf",
      path:
        "/reports/Automated Test Reports/Multi Station Throughput vs Packet Size 5GHz.pdf",
    },
    {
      name: "Multi Station Throughput vs Packet Size Dual Band.pdf",
      path:
        "/reports/Automated Test Reports/Multi Station Throughput vs Packet Size Dual Band.pdf",
    },
    {
      name: "Reciever Sensitivity Test Report.pdf",
      path: "/reports/Automated Test Reports/Reciever Sensitivity Test Report.pdf",
    },
    {
      name: "Roam-mesh.pdf",
      path: "/reports/Automated Test Reports/Roam-mesh.pdf",
    },
    {
      name: "Roaming Test Report.pdf",
      path: "/reports/Automated Test Reports/Roaming Test Report.pdf",
    },
    {
      name: "RVO Report.pdf",
      path: "/reports/Automated Test Reports/RVO Report.pdf",
    },
    {
      name: "RVR Report.pdf",
      path: "/reports/Automated Test Reports/RVR Report.pdf",
    },
    {
      name: "Scale stability 7 days test report.pdf",
      path:
        "/reports/Automated Test Reports/Scale stability 7 days test report.pdf",
    },
    {
      name: "Throughput vs Packet Size.pdf",
      path: "/reports/Automated Test Reports/Throughput vs Packet Size.pdf",
    },
  ],

  // -----------------------------
  // Automated Test Robot (NEW)
  // -----------------------------
  "automated-test-robot": [
    {
      name: "Robot_Automated_Band_Steering_Test_Report.pdf",
      path: "/reports/Automated Test Robot/Robot_Automated_Band_Steering_Test_Report.pdf",
    },
    {
      name: "Robot_Ping_Test_Report.pdf",
      path: "/reports/Automated Test Robot/Robot_Ping_Test_Report.pdf",
    },
    {
      name: "Robot_Roam_Test_Report.pdf",
      path: "/reports/Automated Test Robot/Robot_Roam_Test_Report.pdf",
    },
    {
      name: "Robot_Standalone_QoS_Test_Report.pdf",
      path: "/reports/Automated Test Robot/Robot_Standalone_QoS_Test_Report.pdf",
    },
    {
      name: "Robot_Standalone_YouTube_Streaming_Test_Report.pdf",
      path: "/reports/Automated Test Robot/Robot_Standalone_YouTube_Streaming_Test_Report.pdf",
    },
    {
      name: "Robot_Throughput_Test_Report.pdf",
      path: "/reports/Automated Test Robot/Robot_Throughput_Test_Report.pdf",
    },
  ],

  "cellular-wifi": [
    {
      name: "Cell Emulator 1.pdf",
      path: "/reports/Cellular Wi-Fi/Cell Emulator 1.pdf",
    },
    {
      name: "Cell Emulator 2.pdf",
      path: "/reports/Cellular Wi-Fi/Cell Emulator 2.pdf",
    },
  ],

  // -----------------------------
  // Comparison charts
  // -----------------------------
  "comparison-charts": [
    {
      name: "Airtime Fairness Comparision charts.pdf",
      path:
        "/reports/Comparison charts/Airtime Fairness Comparision charts.pdf",
    },
    {
      name: "Rate vs Orientation Comparision charts.pdf",
      path:
        "/reports/Comparison charts/Rate vs Orientation Comparision charts.pdf",
    },
    {
      name: "Rate vs Range Comparision Charts.pdf",
      path:
        "/reports/Comparison charts/Rate vs Range Comparision Charts.pdf",
    },
  ],

  dfs: [
    {
      name: "Detection Bandwidth Test - FCC.pdf",
      path: "/reports/DFS/Detection Bandwidth Test - FCC.pdf",
    },
    {
      name: "Detection Probability Test - ETSI.pdf",
      path: "/reports/DFS/Detection Probability Test - ETSI.pdf",
    },
    {
      name: "Detection Probability Test - Japan W56 full report.pdf",
      path:
        "/reports/DFS/Detection Probability Test - Japan W56 full report.pdf",
    },
    {
      name: "Detection Probability Test - Japan-w53 full test.pdf",
      path:
        "/reports/DFS/Detection Probability Test - Japan-w53 full test.pdf",
    },
    {
      name: "Detection Probability Test - Korea.pdf",
      path: "/reports/DFS/Detection Probability Test - Korea.pdf",
    },
    {
      name: "ETSI full test.pdf",
      path: "/reports/DFS/ETSI full test.pdf",
    },
    {
      name: "FCC1_to_FCC6_30_trails.pdf",
      path: "/reports/DFS/FCC1_to_FCC6_30_trails.pdf",
    },
  ],

  // -----------------------------
  // Interop Reports
  // -----------------------------
  "interop-reports": [
    {
      name: "FTP Traffic Test.pdf",
      path: "/reports/Interop Reports/FTP Traffic Test.pdf",
    },
    {
      name: "Hotspot_TestReport_50 Iterations_2SAP's.pdf",
      path:
        "/reports/Interop Reports/Hotspot_TestReport_50 Iterations_2SAP's.pdf",
    },
    {
      name: "HTTP Traffic Test.pdf",
      path: "/reports/Interop Reports/HTTP Traffic Test.pdf",
    },
    {
      name: "Interoperability Test.pdf",
      path: "/reports/Interop Reports/Interoperability Test.pdf",
    },
    {
      name: "Mixed Traffic Test.pdf",
      path: "/reports/Interop Reports/Mixed Traffic Test.pdf",
    },
    {
      name: "Multicast_Test.pdf",
      path: "/reports/Interop Reports/Multicast_Test.pdf",
    },
    {
      name: "Ping Test.pdf",
      path: "/reports/Interop Reports/Ping Test.pdf",
    },
    {
      name: "Port Reset Test.pdf",
      path: "/reports/Interop Reports/Port Reset Test.pdf",
    },
    {
      name: "Qos_Test.pdf",
      path: "/reports/Interop Reports/Qos_Test.pdf",
    },
    {
      name: "Real_Browser_Report.pdf",
      path: "/reports/Interop Reports/Real_Browser_Report.pdf",
    },
    {
      name: "Roam Test (1).pdf",
      path: "/reports/Interop Reports/Roam Test (1).pdf",
    },
    {
      name: "Roam Test along with Roam Time.pdf",
      path:
        "/reports/Interop Reports/Roam Test along with Roam Time.pdf",
    },
    {
      name: "RVR Multi client Test.pdf",
      path: "/reports/Interop Reports/RVR Multi client Test.pdf",
    },
    {
      name: "speedtest.pdf",
      path: "/reports/Interop Reports/speedtest.pdf",
    },
    {
      name: "Teams_Call_Automation_Report.pdf",
      path: "/reports/Interop Reports/Teams_Call_Automation_Report.pdf",
    },
    {
      name: "Throughput Test.pdf",
      path: "/reports/Interop Reports/Throughput Test.pdf",
    },
    {
      name: "Throughput_20clients_Test_Download.pdf",
      path:
        "/reports/Interop Reports/Throughput_20clients_Test_Download.pdf",
    },
    {
      name: "Video Streaming Test.pdf",
      path: "/reports/Interop Reports/Video Streaming Test.pdf",
    },
    {
      name: "Vlc_Stremaing_Report.pdf",
      path: "/reports/Interop Reports/Vlc_Stremaing_Report.pdf",
    },
    {
      name: "youtube_streaming.pdf",
      path: "/reports/Interop Reports/youtube_streaming.pdf",
    },
    {
      name: "Zoom call Test.pdf",
      path: "/reports/Interop Reports/Zoom call Test.pdf",
    },
  ],

  // -----------------------------
  // IoT Reports
  // -----------------------------
  "iot-reports": [
    {
      name: "IoTDeviceTest_26 clients.pdf",
      path: "/reports/IoT Reports/IoTDeviceTest_26 clients.pdf",
    },
    {
      name: "IoTDeviceTest_28 clients.pdf",
      path: "/reports/IoT Reports/IoTDeviceTest_28 clients.pdf",
    },
    {
      name: "IoTDeviceTest_42 clients.pdf",
      path: "/reports/IoT Reports/IoTDeviceTest_42 clients.pdf",
    },
    {
      name: "IoTDeviceTest_61 clients.pdf",
      path: "/reports/IoT Reports/IoTDeviceTest_61 clients.pdf",
    },
  ],

  // -----------------------------
  // Mesh Reports
  // -----------------------------
  "mesh-reports": [
    {
      name: "2-Hop Backhaul RvR Report.pdf",
      path: "/reports/Mesh Reports/2-Hop Backhaul RvR Report.pdf",
    },
    {
      name: "band_steering.pdf",
      path: "/reports/Mesh Reports/band_steering.pdf",
    },
    {
      name: "Mesh Automated Roaming Test Report.pdf",
      path: "/reports/Mesh Reports/Mesh Automated Roaming Test Report.pdf",
    },
    {
      name: "Mesh Automated Throuhgout Test Report.pdf",
      path: "/reports/Mesh Reports/Mesh Automated Throuhgout Test Report.pdf",
    },
    {
      name: "Mesh Backhaul RvR Report.pdf",
      path: "/reports/Mesh Reports/Mesh Backhaul RvR Report.pdf",
    },
  ],

  // -----------------------------
  // Network in a Box Reports
  // -----------------------------
  "network-in-a-box-reports": [
    {
      name: "120Minutes Longrun.pdf",
      path: "/reports/Network in a Box Reports/120Minutes Longrun.pdf",
    },
    {
      name: "Duplex_home_scenario.pdf",
      path: "/reports/Network in a Box Reports/Duplex_home_scenario.pdf",
    },
    {
      name: "Kiosk Cafe.pdf",
      path: "/reports/Network in a Box Reports/Kiosk Cafe.pdf",
    },
    {
      name: "Modern Simple Home Scenario_crash report.pdf",
      path:
        "/reports/Network in a Box Reports/Modern Simple Home Scenario_crash report.pdf",
    },
    {
      name: "Quick Serve.pdf",
      path: "/reports/Network in a Box Reports/Quick Serve.pdf",
    },
    {
      name: "Single Storey Home Longrun_10hrs_Asus.pdf",
      path:
        "/reports/Network in a Box Reports/Single Storey Home Longrun_10hrs_Asus.pdf",
    },
    {
      name: "Single Storey Home.pdf",
      path: "/reports/Network in a Box Reports/Single Storey Home.pdf",
    },
    {
      name: "Small Home Scenario with Real Clients_5hrs_Longrun.pdf",
      path:
        "/reports/Network in a Box Reports/Small Home Scenario with Real Clients_5hrs_Longrun.pdf",
    },
    {
      name: "Small Office.pdf",
      path: "/reports/Network in a Box Reports/Small Office.pdf",
    },
    {
      name: "Small_home_scenario.pdf",
      path: "/reports/Network in a Box Reports/Small_home_scenario.pdf",
    },
  ],

  // -----------------------------
  // Test House Reports
  // -----------------------------
  "test-house-reports": [
    {
      name: "2025-09-05-18-01-52-mixed_traffic_test_all.pdf",
      path:
        "/reports/Test House Reports/2025-09-05-18-01-52-mixed_traffic_test_all.pdf",
    },
    {
      name: "2025-09-05-18-36-34-test_l3.pdf",
      path:
        "/reports/Test House Reports/2025-09-05-18-36-34-test_l3.pdf",
    },
    {
      name: "ftp_test.pdf",
      path: "/reports/Test House Reports/ftp_test.pdf",
    },
    {
      name: "Generic Test House Coverage & Capacity Presentation.pdf",
      path:
        "/reports/Test House Reports/Generic Test House Coverage & Capacity Presentation.pdf",
    },
    {
      name: "interopability.pdf",
      path: "/reports/Test House Reports/interopability.pdf",
    },
    {
      name: "interop_ping.pdf",
      path: "/reports/Test House Reports/interop_ping.pdf",
    },
    {
      name: "interop_qos.pdf",
      path: "/reports/Test House Reports/interop_qos.pdf",
    },
    {
      name: "throughput (3).pdf",
      path: "/reports/Test House Reports/throughput (3).pdf",
    },
    {
      name: "VideoStreaming_test.pdf",
      path: "/reports/Test House Reports/VideoStreaming_test.pdf",
    },
    {
      name: "Webpage.pdf",
      path: "/reports/Test House Reports/Webpage.pdf",
    },
  ],

  // -----------------------------
  // TR-398
  // -----------------------------
  "tr-398": [
    {
      name: "6.2.1 Maximum Connection Test.pdf",
      path: "/reports/TR-398/6.2.1 Maximum Connection Test.pdf",
    },
    {
      name: "6.2.2 Max TCP Throughput Test.pdf",
      path: "/reports/TR-398/6.2.2 Max TCP Throughput Test.pdf",
    },
    {
      name: "6.2.3 Airtime Fairness Test.pdf",
      path: "/reports/TR-398/6.2.3 Airtime Fairness Test.pdf",
    },
    {
      name: "6.2.4 Dual Band Throughput Test.pdf",
      path: "/reports/TR-398/6.2.4 Dual Band Throughput Test.pdf",
    },
    {
      name: "6.2.5 Bi-directional Throughput Test.pdf",
      path: "/reports/TR-398/6.2.5 Bi-directional Throughput Test.pdf",
    },
    {
      name: "6.2.6 Latency Test.pdf",
      path: "/reports/TR-398/6.2.6 Latency Test.pdf",
    },
    {
      name: "6.2.7 QoS Test.pdf",
      path: "/reports/TR-398/6.2.7 QoS Test.pdf",
    },
    {
      name: "6.2.8 Multiband Throughput Test.pdf",
      path: "/reports/TR-398/6.2.8 Multiband Throughput Test.pdf",
    },
    {
      name: "6.2.9 OFDMA Test.pdf",
      path: "/reports/TR-398/6.2.9 OFDMA Test.pdf",
    },
    {
      name: "6.3.1 Rate vs Range Test.pdf",
      path: "/reports/TR-398/6.3.1 Rate vs Range Test.pdf",
    },
    {
      name: "6.3.2 Spatial Consistency Test.pdf",
      path: "/reports/TR-398/6.3.2 Spatial Consistency Test.pdf",
    },
    {
      name: "6.3.3 Peak Performance Test.pdf",
      path: "/reports/TR-398/6.3.3 Peak Performance Test.pdf",
    },
    {
      name: "6.4.1 Multiple STA Performance Test.pdf",
      path: "/reports/TR-398/6.4.1 Multiple STA Performance Test.pdf",
    },
    {
      name: "6.4.2 Multiple Association-Disassociation Stability Test.pdf",
      path:
        "/reports/TR-398/6.4.2 Multiple Association-Disassociation Stability Test.pdf",
    },
    {
      name: "6.4.3 Downlink MU-MIMO Test.pdf",
      path: "/reports/TR-398/6.4.3 Downlink MU-MIMO Test.pdf",
    },
    {
      name: "6.4.4 Multicast Test.pdf",
      path: "/reports/TR-398/6.4.4 Multicast Test.pdf",
    },
    {
      name: "6.5.1 Long Term Stability Test.pdf",
      path: "/reports/TR-398/6.5.1 Long Term Stability Test.pdf",
    },
    {
      name: "6.5.2 AP Coexistence Test.pdf",
      path: "/reports/TR-398/6.5.2 AP Coexistence Test.pdf",
    },
    {
      name: "6.5.3 Automatic Channel Selection.pdf",
      path: "/reports/TR-398/6.5.3 Automatic Channel Selection.pdf",
    },
    {
      name: "6.5.6 MLO eMLSR Test.pdf",
      path: "/reports/TR-398/6.5.6 MLO eMLSR Test.pdf",
    },
    {
      name: "6.5.7 MLO STR Test.pdf",
      path: "/reports/TR-398/6.5.7 MLO STR Test.pdf",
    },
     
     {
       name: "TR-398v4 Full Report.pdf",
       path: "https://gtjxejklrforoglhstnm.supabase.co/storage/v1/object/public/reports/tr398/tr-398v4-full-report.pdf",
     },
  ],

  // -----------------------------
  // Wi-Fi 7
  // -----------------------------
  "wifi-7": [
    {
      name: "MLMR Peak Throughput.pdf",
      path: "/reports/Wi-Fi 7/MLMR Peak Throughput.pdf",
    },
    {
      name: "Multi-Band Sniffing using Lanforge.pdf",
      path: "/reports/Wi-Fi 7/Multi-Band Sniffing using Lanforge.pdf",
    },
    {
      name: "Peak Throughput 4x4_9.4Gbps.pdf",
      path: "/reports/Wi-Fi 7/Peak Throughput 4x4_9.4Gbps.pdf",
    },
    {
      name: "Rate vs Range test.pdf",
      path: "/reports/Wi-Fi 7/Rate vs Range test.pdf",
    },
    {
      name: "TR-398v4 MLO Report.pdf",
      path: "/reports/Wi-Fi 7/TR-398v4 MLO Report.pdf",
    },
    {
      name: "TR-398v4 MLO STR Test Report.pdf",
      path: "/reports/Wi-Fi 7/TR-398v4 MLO STR Test Report.pdf",
    },
    {
      name: "TR-398v4 OFDMA Test.pdf",
      path: "/reports/Wi-Fi 7/TR-398v4 OFDMA Test.pdf",
    },
    {
      name: "TR-398v4 Preamble Puncturing.pdf",
      path: "/reports/Wi-Fi 7/TR-398v4 Preamble Puncturing.pdf",
    },
  ],

  // -----------------------------
  // Wi-Fi AP TaaS
  // -----------------------------
  "wifi-ap-taas": [
    {
      name: "Candela TaaS Report - Wi-Fi 7 AP.pdf",
      path: "/reports/Wi-Fi AP TaaS/Candela TaaS Report - Wi-Fi 7 AP.pdf",
    },
    {
      name:
        "Advanced suite reports.pdf",
      path:
        "/reports/Wi-Fi AP TaaS/Advanced suite reports.pdf",
    },
  ],
  
  "wifi-station-testing": [
    {
      name: "Station Side Test Solution.pdf",
      path: "/reports/Wi-Fi Station Testing/Station Side Test Solution.pdf",
    },
  ],

  // -----------------------------
  // BluForge
  // -----------------------------
  bluforge: [
    {
      name: "Impact of 1 BLE Module Report.pdf",
      path: "/reports/Bluforge/Impact of 1 BLE Module Report.pdf",
    },
    {
      name: "Impact with 5 BLE Modules Report.pdf",
      path: "/reports/Bluforge/Impact with 5 BLE Modules Report.pdf",
    },
    {
      name: "Impact with BLE Advertisements Report.pdf",
      path: "/reports/Bluforge/Impact with BLE Advertisements Report.pdf",
    },
  ],

  // -----------------------------
  // RF Enclosures
  // -----------------------------
  "rf-enclosures": [
    {
      name: "Candela RF Enclosures.pdf",
      path: "/reports/RF Enclosures/Candela RF Enclosures.pdf",
    },
  ],
};
