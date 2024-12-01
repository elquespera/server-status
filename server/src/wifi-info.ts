import { parseDump } from "./parseDump";
import { TermuxWifiInfo } from "./types";

export const mockWifiInfo = (): TermuxWifiInfo => ({
  ssid: "",
  frequency: 5180,
  speed: Math.random() * 300 + 200,
});

export const parseWifiInfo = (dump: string): TermuxWifiInfo => {
  const match = dump.match(/mConnectionEvents:\n(.*)/m);

  if (match) {
    const connection = parseDump(match[1].trim(), ", ", "=");
    console.log(connection);
    return {
      ssid: connection["SSID"]?.replace(/"/g, ""),
      speed: parseFloat(connection["mMaxSupportedTxLinkSpeedMbps"]),
      frequency: parseFloat(connection["mChannelInfo"]),
    };
  }

  return {
    ssid: "",
    frequency: 0,
    speed: 0,
  };
};

export const wifiDump = `Verbose logging is off
mVerboseLoggingLevel 0
Stay-awake conditions: 0
mInIdleMode false
mScanPending false
SupportedFeatures:20006fca9141d
SettingsStore:
WifiState 1
AirplaneModeOn false
ScanAlwaysAvailable false
WifiScoringState true
WifiPasspointState true
WifiMultiInternetMode 0
WifiStateApm false
WifiStateBt false
WifiStateUser 0
AirplaneModeEnhancementEnabled true
SatelliteModeOn false
Dump of WifiActiveModeWarden
Current wifi mode: EnabledState
Wi-Fi is enabled
NumActiveModeManagers: 1
mIsMultiplePrimaryBugreportTaken: false
WifiController:
 total records=6
 rec[0]: time=12-01 16:23:18.152 processed=DefaultState org=EnabledState dest=<null> what=CMD_UPDATE_AP_CAPABILITY 1 0 num ClientModeManagers:1 num SoftApManagers:0 SupportedFeatures=111 MaximumSupportedClientNumber=10 SupportedChannelListIn24g[] SupportedChannelListIn5g[] SupportedChannelListIn6g[] SupportedChannelListIn60g[] mCountryCodeFromDrivernull
 rec[1]: time=12-01 16:23:18.179 processed=DefaultState org=EnabledState dest=<null> what=CMD_UPDATE_AP_CAPABILITY 1 0 num ClientModeManagers:1 num SoftApManagers:0 SupportedFeatures=111 MaximumSupportedClientNumber=10 SupportedChannelListIn24g[] SupportedChannelListIn5g[] SupportedChannelListIn6g[] SupportedChannelListIn60g[] mCountryCodeFromDrivernull
 rec[2]: time=12-01 16:23:18.618 processed=DefaultState org=EnabledState dest=<null> what=CMD_UPDATE_AP_CAPABILITY 1 0 num ClientModeManagers:1 num SoftApManagers:0 SupportedFeatures=111 MaximumSupportedClientNumber=10 SupportedChannelListIn24g[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] SupportedChannelListIn5g[] SupportedChannelListIn6g[] SupportedChannelListIn60g[] mCountryCodeFromDriver00
 rec[3]: time=12-01 16:23:18.618 processed=DefaultState org=EnabledState dest=<null> what=CMD_UPDATE_AP_CAPABILITY 2 0 num ClientModeManagers:1 num SoftApManagers:0 SupportedFeatures=111 MaximumSupportedClientNumber=10 SupportedChannelListIn24g[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] SupportedChannelListIn5g[] SupportedChannelListIn6g[] SupportedChannelListIn60g[] mCountryCodeFromDriver00
 rec[4]: time=12-01 16:23:20.176 processed=DefaultState org=EnabledState dest=<null> what=CMD_UPDATE_AP_CAPABILITY 1 0 num ClientModeManagers:1 num SoftApManagers:0 SupportedFeatures=111 MaximumSupportedClientNumber=10 SupportedChannelListIn24g[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] SupportedChannelListIn5g[149, 153, 157, 161] SupportedChannelListIn6g[] SupportedChannelListIn60g[] mCountryCodeFromDriverCZ
 rec[5]: time=12-01 16:23:20.176 processed=DefaultState org=EnabledState dest=<null> what=CMD_UPDATE_AP_CAPABILITY 2 0 num ClientModeManagers:1 num SoftApManagers:0 SupportedFeatures=111 MaximumSupportedClientNumber=10 SupportedChannelListIn24g[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] SupportedChannelListIn5g[149, 153, 157, 161] SupportedChannelListIn6g[] SupportedChannelListIn60g[] mCountryCodeFromDriverCZ
curState=EnabledState
Dump of ClientModeManager id=15739
current StateMachine mode: ConnectModeState
mRole: ROLE_CLIENT_PRIMARY
mPreviousRole: null
mTargetRoleChangeInfo: Role: ROLE_CLIENT_PRIMARY, RequestorWs: WorkSource{1000 com.android.settings}, ModeListener: com.android.server.wifi.ActiveModeWarden$ClientListener@2a898df
mClientInterfaceName: wlan0
mIfaceIsUp: true
mSecondaryInternet: false
mIsDbs: false
WifiClientModeManager:
 total records=2
 rec[0]: time=12-01 16:23:13.140 processed=IdleState org=IdleState dest=StartedState what=CMD_START 0 0 Role: ROLE_CLIENT_PRIMARY, RequestorWs: WorkSource{1000 com.android.settings}, ModeListener: com.android.server.wifi.ActiveModeWarden$ClientListener@2a898df
 rec[1]: time=12-01 16:23:13.289 processed=StartedState org=StartedState dest=ConnectModeState what=CMD_SWITCH_TO_CONNECT_MODE 0 0 Role: ROLE_CLIENT_PRIMARY, RequestorWs: WorkSource{1000 com.android.settings}, ModeListener: com.android.server.wifi.ActiveModeWarden$ClientListener@2a898df
curState=ConnectModeState

Dump of ClientModeImpl id=15945
WifiClientModeImpl:
 total records=55
 rec[0]: time=12-01 16:23:15.386 processed=ConnectableState org=DisconnectedState dest=<null> what=CMD_IPCLIENT_CREATED screen=on 1 0
 rec[1]: time=12-01 16:23:15.400 processed=ConnectableState org=DisconnectedState dest=<null> what=CMD_ENABLE_RSSI_POLL screen=on 1 0
 rec[2]: time=12-01 16:23:15.400 processed=ConnectableState org=DisconnectedState dest=<null> what=CMD_SET_SUSPEND_OPT_ENABLED screen=on 0 0
 rec[3]: time=12-01 16:23:17.854 processed=ConnectableState org=DisconnectedState dest=<null> what=CMD_RESET_SIM_NETWORKS screen=on 0 0
 rec[4]: time=12-01 16:23:17.882 processed=ConnectableState org=DisconnectedState dest=<null> what=CMD_RESET_SIM_NETWORKS screen=on 0 0
 rec[5]: time=12-01 16:23:22.531 processed=ConnectableState org=DisconnectedState dest=L2ConnectingState what=CMD_START_CONNECT screen=on 0 1010 targetConfigKey="pg_star_5G"WPA_PSK BSSID=null targetBssid=any roam=false
 rec[6]: time=12-01 16:23:22.541 processed=ConnectingOrConnectedState org=L2ConnectingState dest=<null> what=SUPPLICANT_STATE_CHANGE_EVENT screen=on 0 0 ssid:  bssid: 00:00:00:00:00:00 nid: -1 frequencyMhz: 0 state: INTERFACE_DISABLED
 rec[7]: time=12-01 16:23:22.546 processed=ConnectingOrConnectedState org=L2ConnectingState dest=<null> what=SUPPLICANT_STATE_CHANGE_EVENT screen=on 0 0 ssid:  bssid: 00:00:00:00:00:00 nid: -1 frequencyMhz: 0 state: DISCONNECTED
 rec[8]: time=12-01 16:23:22.561 processed=ConnectingOrConnectedState org=L2ConnectingState dest=<null> what=SUPPLICANT_STATE_CHANGE_EVENT screen=on 0 0 ssid: "pg_star_5G" bssid: 50:88:11:a1:34:cd nid: 0 frequencyMhz: 0 state: ASSOCIATING
 rec[9]: time=12-01 16:23:22.612 processed=ConnectingOrConnectedState org=L2ConnectingState dest=<null> what=SUPPLICANT_STATE_CHANGE_EVENT screen=on 0 0 ssid: "pg_star_5G" bssid: 50:88:11:a1:34:cd nid: 0 frequencyMhz: 0 state: ASSOCIATED
 rec[10]: time=12-01 16:23:22.612 processed=ConnectableState org=L2ConnectingState dest=<null> what=ASSOCIATED_BSSID_EVENT screen=on 0 0 BSSID=50:88:11:a1:34:cd Target Bssid=any Last Bssid=50:88:11:a1:34:cd roam=false
 rec[11]: time=12-01 16:23:22.630 processed=ConnectingOrConnectedState org=L2ConnectingState dest=<null> what=SUPPLICANT_STATE_CHANGE_EVENT screen=on 0 0 ssid: "pg_star_5G" bssid: 50:88:11:a1:34:cd nid: 0 frequencyMhz: 0 state: FOUR_WAY_HANDSHAKE
 rec[12]: time=12-01 16:23:22.633 processed=ConnectingOrConnectedState org=L2ConnectingState dest=<null> what=SUPPLICANT_STATE_CHANGE_EVENT screen=on 0 0 ssid: "pg_star_5G" bssid: 50:88:11:a1:34:cd nid: 0 frequencyMhz: 0 state: GROUP_HANDSHAKE
 rec[13]: time=12-01 16:23:22.637 processed=ConnectingOrConnectedState org=L2ConnectingState dest=L3ProvisioningState what=NETWORK_CONNECTION_EVENT screen=on 0 false 50:88:11:a1:34:cd nid=0 "pg_star_5G"WPA_PSK last=
 rec[14]: time=12-01 16:23:22.681 processed=ConnectingOrConnectedState org=L3ProvisioningState dest=<null> what=SUPPLICANT_STATE_CHANGE_EVENT screen=on 0 0 ssid: "pg_star_5G" bssid: 50:88:11:a1:34:cd nid: 0 frequencyMhz: 0 state: COMPLETED
 rec[15]: time=12-01 16:23:22.725 processed=ConnectableState org=L3ProvisioningState dest=<null> what=CMD_CONFIG_ND_OFFLOAD screen=on 1 1
 rec[16]: time=12-01 16:23:22.729 processed=ConnectableState org=L3ProvisioningState dest=<null> what=CMD_INSTALL_PACKET_FILTER screen=on len=4096
 rec[17]: time=12-01 16:23:22.741 processed=ConnectableState org=L3ProvisioningState dest=<null> what=CMD_INSTALL_PACKET_FILTER screen=on len=277
 rec[18]: time=12-01 16:23:22.946 processed=ConnectableState org=L3ProvisioningState dest=<null> what=CMD_UPDATE_LINKPROPERTIES screen=on 1 0 
 rec[19]: time=12-01 16:23:22.947 processed=ConnectableState org=L3ProvisioningState dest=<null> what=CMD_SET_MAX_DTIM_MULTIPLIER screen=on maximum multiplier=1
 rec[20]: time=12-01 16:23:22.956 processed=L2ConnectedState org=L3ProvisioningState dest=<null> what=CMD_PRE_DHCP_ACTION screen=on 1 0 txpkts=4,0,1
 rec[21]: time=12-01 16:23:22.957 processed=L2ConnectedState org=L3ProvisioningState dest=<null> what=CMD_PRE_DHCP_ACTION_COMPLETE screen=on uid=1000 0 0
 rec[22]: time=12-01 16:23:23.026 processed=L2ConnectedState org=L3ProvisioningState dest=<null> what=CMD_POST_DHCP_ACTION screen=on 
 rec[23]: time=12-01 16:23:23.037 processed=L2ConnectedState org=L3ProvisioningState dest=<null> what=CMD_IPV4_PROVISIONING_SUCCESS screen=on com.android.wifi.x.android.net.DhcpResultsParcelable{baseConfiguration: IP address 192.168.31.143/24 Gateway 192.168.31.1  DNS servers: [ 192.168.31.1 ] Domains , leaseDuration: 43200, mtu: 0, serverAddress: 192.168.31.1, vendorInfo: miwifi-RD12-1.0.31-101, serverHostName: , captivePortalApiUrl: null}
 rec[24]: time=12-01 16:23:23.037 processed=ConnectableState org=L3ProvisioningState dest=<null> what=CMD_UPDATE_LINKPROPERTIES screen=on 1 0 v4r
 rec[25]: time=12-01 16:23:23.056 processed=ConnectableState org=L3ProvisioningState dest=<null> what=CMD_INSTALL_PACKET_FILTER screen=on len=292
 rec[26]: time=12-01 16:23:23.064 processed=ConnectableState org=L3ProvisioningState dest=<null> what=CMD_UPDATE_LINKPROPERTIES screen=on 1 0 v4 v4r v4dns
 rec[27]: time=12-01 16:23:23.074 processed=L2ConnectedState org=L3ProvisioningState dest=L3ConnectedState what=CMD_IP_CONFIGURATION_SUCCESSFUL screen=on 1 0
 rec[28]: time=12-01 16:23:23.123 processed=L2ConnectedState org=L3ConnectedState dest=<null> what=CMD_ONESHOT_RSSI_POLL screen=on 0 0 "pg_star_5G" 50:88:11:a1:34:cd rssi=-65 f=5180 sc=60 link=29 tx=1.2, 0.3, 0.0 rx=0.5 bcn=4 [on:3871 tx:29 rx:174 period:-2100184461] from screen [on:3871 period:7794] score=60
 rec[29]: time=12-01 16:23:23.730 processed=L3ConnectedState org=L3ConnectedState dest=<null> what=CMD_NETWORK_STATUS screen=on 1 0
 rec[30]: time=12-01 16:23:30.443 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SCREEN_STATE_CHANGED screen=off 0 0
 rec[31]: time=12-01 16:23:30.444 processed=L2ConnectedState org=L3ConnectedState dest=<null> what=CMD_ENABLE_RSSI_POLL screen=off 0 0
 rec[32]: time=12-01 16:23:30.465 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SET_SUSPEND_OPT_ENABLED screen=off 1 1
 rec[33]: time=12-01 16:23:40.695 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SET_MAX_DTIM_MULTIPLIER screen=off maximum multiplier=9
 rec[34]: time=12-01 19:28:11.992 processed=L2ConnectedState org=L3ConnectedState dest=<null> what=CMD_ONESHOT_RSSI_POLL screen=off 0 0 "pg_star_5G" 50:88:11:a1:34:cd rssi=-68 f=5180 sc=60 link=175 tx=21.6, 13.8, 0.0 rx=21.3 bcn=106691 [on:4391153 tx:29371 rx:18259 period:11088869] from screen [on:4388883 period:11081558] score=60
 rec[35]: time=12-01 19:29:34.159 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SCREEN_STATE_CHANGED screen=on 1 0
 rec[36]: time=12-01 19:29:34.186 processed=L2ConnectedState org=L3ConnectedState dest=<null> what=CMD_ENABLE_RSSI_POLL screen=on 1 0
 rec[37]: time=12-01 19:29:34.187 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SET_SUSPEND_OPT_ENABLED screen=on 0 0
 rec[38]: time=12-01 19:29:46.518 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SCREEN_STATE_CHANGED screen=off 0 0
 rec[39]: time=12-01 19:29:46.518 processed=L2ConnectedState org=L3ConnectedState dest=<null> what=CMD_ENABLE_RSSI_POLL screen=off 0 0
 rec[40]: time=12-01 19:29:46.519 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SET_SUSPEND_OPT_ENABLED screen=off 1 1
 rec[41]: time=12-01 19:39:41.576 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SCREEN_STATE_CHANGED screen=on 1 0
 rec[42]: time=12-01 19:39:41.583 processed=L2ConnectedState org=L3ConnectedState dest=<null> what=CMD_ENABLE_RSSI_POLL screen=on 1 0
 rec[43]: time=12-01 19:39:41.585 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SET_SUSPEND_OPT_ENABLED screen=on 0 0
 rec[44]: time=12-01 19:40:52.637 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SCREEN_STATE_CHANGED screen=off 0 0
 rec[45]: time=12-01 19:40:52.637 processed=L2ConnectedState org=L3ConnectedState dest=<null> what=CMD_ENABLE_RSSI_POLL screen=off 0 0
 rec[46]: time=12-01 19:40:52.639 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SET_SUSPEND_OPT_ENABLED screen=off 1 1
 rec[47]: time=12-01 19:43:38.577 processed=L2ConnectedState org=L3ConnectedState dest=<null> what=CMD_ONESHOT_RSSI_POLL screen=off 0 0 "pg_star_5G" 50:88:11:a1:34:cd rssi=-51 f=5180 sc=60 link=433 tx=20.1, 2.4, 0.0 rx=18.8 bcn=115526 [on:383252 tx:2786 rx:1584 period:926585] from screen [on:78809 period:165949] score=60
 rec[48]: time=12-01 19:44:04.554 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SCREEN_STATE_CHANGED screen=on 1 0
 rec[49]: time=12-01 19:44:04.564 processed=L2ConnectedState org=L3ConnectedState dest=<null> what=CMD_ENABLE_RSSI_POLL screen=on 1 0
 rec[50]: time=12-01 19:44:04.565 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SET_SUSPEND_OPT_ENABLED screen=on 0 0
 rec[51]: time=12-01 19:45:12.557 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SCREEN_STATE_CHANGED screen=off 0 0
 rec[52]: time=12-01 19:45:12.558 processed=L2ConnectedState org=L3ConnectedState dest=<null> what=CMD_ENABLE_RSSI_POLL screen=off 0 0
 rec[53]: time=12-01 19:45:12.559 processed=ConnectableState org=L3ConnectedState dest=<null> what=CMD_SET_SUSPEND_OPT_ENABLED screen=off 1 1
 rec[54]: time=12-01 19:46:26.516 processed=L2ConnectedState org=L3ConnectedState dest=<null> what=CMD_ONESHOT_RSSI_POLL screen=off 0 0 "pg_star_5G" 50:88:11:a1:34:cd rssi=-51 f=5180 sc=60 link=200 tx=38.1, 6.5, 0.0 rx=36.4 bcn=117144 [on:101175 tx:655 rx:393 period:167939] from screen [on:54064 period:73962] score=60
curState=L3ConnectedState
SupplicantStateTracker:
 total records=4
 rec[0]: time=12-01 16:23:15.347 processed=DefaultState org=UninitializedState dest=DisconnectedState what=147462(0x24006)
 rec[1]: time=12-01 16:23:22.545 processed=DefaultState org=DisconnectedState dest=DisconnectedState what=147462(0x24006)
 rec[2]: time=12-01 16:23:22.548 processed=DefaultState org=DisconnectedState dest=HandshakeState what=147462(0x24006)
 rec[3]: time=12-01 16:23:22.676 processed=DefaultState org=HandshakeState dest=CompletedState what=147462(0x24006)
curState=CompletedState
mAuthFailureInSupplicantBroadcast false
mAuthFailureReason 0

mLinkProperties {InterfaceName: wlan0 LinkAddresses: [ fe80::ecbb:12ff:fe2c:8dd6/64,192.168.31.143/24 ] DnsAddresses: [ /192.168.31.1 ] Domains: null MTU: 0 ServerAddress: /192.168.31.1 TcpBufferSizes: 524288,2097152,4194304,262144,524288,1048576 Routes: [ fe80::/64 -> :: wlan0 mtu 0,192.168.31.0/24 -> 0.0.0.0 wlan0 mtu 0,0.0.0.0/0 -> 192.168.31.1 wlan0 mtu 0 ]}
mWifiInfo SSID: "pg_star_5G", BSSID: 50:88:11:a1:34:cd, MAC: ee:bb:12:2c:8d:d6, IP: /192.168.31.143, Security type: 2, Supplicant state: COMPLETED, Wi-Fi standard: 5, RSSI: -51, Link speed: 200Mbps, Tx Link speed: 200Mbps, Max Supported Tx Link speed: 433Mbps, Rx Link speed: 433Mbps, Max Supported Rx Link speed: 433Mbps, Frequency: 5180MHz, Net ID: 0, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none>"pg_star_5G"wpa2-pskMLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>
mDhcpResultsParcelable baseConfiguration IP address 192.168.31.143/24 Gateway 192.168.31.1  DNS servers: [ 192.168.31.1 ] Domains leaseDuration 43200mtu 0serverAddress 192.168.31.1serverHostName vendorInfo miwifi-RD12-1.0.31-101
mLastSignalLevel 4
mLastTxKbps 12000
mLastRxKbps 88240
mLastBssid 50:88:11:a1:34:cd
mLastNetworkId 0
mLastSubId -1
mLastSimBasedConnectionCarrierName null
mSuspendOptimizationsEnabled true
mSuspendOptNeedsDisabled 0
mPowerSaveDisableRequests 0
IpClient logs have moved to dumpsys network_stack
WifiScoreReport:
time,session,netid,rssi,filtered_rssi,rssi_threshold,freq,txLinkSpeed,rxLinkSpeed,txTput,rxTput,bcnCnt,tx_good,tx_retry,tx_bad,rx_pps,nudrq,nuds,s1,s2,score,{linkId,linkRssi,linkFreq,txLinkSpeed,rxLinkSpeed,linkBcnCnt,linkTxGood,linkTxRetry,linkTxBad,linkRxGood,linkMloState,linkUsageState}
12-1 16:23:22.704,0,100,-65,-65.0,-80.0,5180,29,6,12,88,1,0.62,0.00,0.00,0.62,0,1,55,65,60
12-1 16:23:25.722,1,100,-65,-65.0,-80.0,5180,234,263,12,88,30,23.23,2.58,0.00,19.85,0,1,55,65,60
12-1 16:23:28.754,1,100,-64,-64.0,-80.0,5180,234,260,12,88,58,13.76,1.57,0.00,12.73,0,1,56,66,60
12-1 19:28:11.991,2,100,-68,-68.0,-80.0,5180,175,263,12,88,106691,21.67,13.81,0.00,21.35,0,1,52,62,60
12-1 19:29:37.200,3,100,-45,-45.0,-80.0,5180,390,433,12,88,107510,3.14,0.00,0.00,2.93,0,1,75,85,60
12-1 19:29:40.218,3,100,-52,-51.3,-80.0,5180,351,433,12,88,107540,5.77,1.68,0.00,5.06,0,1,68,79,60
12-1 19:29:43.239,3,100,-51,-51.1,-80.0,5180,390,433,12,88,107569,5.26,0.82,0.00,5.00,0,1,69,79,60
12-1 19:29:46.250,3,100,-51,-51.1,-80.0,5180,433,433,12,88,107599,5.49,1.14,0.00,5.40,0,1,69,79,60
12-1 19:39:44.593,5,100,-49,-49.0,-80.0,5180,433,433,12,88,113286,3.62,0.28,0.00,3.34,0,1,71,81,60
12-1 19:39:47.608,5,100,-51,-50.8,-80.0,5180,433,433,12,88,113315,5.53,0.94,0.00,5.01,0,1,69,79,60
12-1 19:39:50.627,5,100,-51,-50.8,-80.0,5180,433,433,12,88,113345,5.18,0.55,0.00,4.99,0,1,69,79,60
12-1 19:39:53.643,5,100,-52,-51.2,-80.0,5180,433,433,12,88,113372,6.30,0.83,0.00,5.39,0,1,68,79,60
12-1 19:39:56.674,5,100,-52,-51.4,-80.0,5180,433,433,12,88,113402,6.92,0.51,0.00,6.17,0,1,68,78,60
12-1 19:39:59.700,5,100,-53,-51.9,-80.0,5180,433,390,12,88,113430,8.81,1.44,0.00,7.70,0,1,67,77,60
12-1 19:40:2.722,5,100,-52,-52.0,-80.0,5180,433,433,12,88,113460,16.86,4.09,0.00,11.41,0,1,68,77,60
12-1 19:40:5.761,5,100,-53,-52.4,-80.0,5180,433,390,12,88,113489,10.98,2.96,0.00,8.99,0,1,67,77,60
12-1 19:40:8.781,5,100,-54,-53.0,-80.0,5180,433,390,12,88,113518,7.55,1.28,0.00,5.99,0,1,66,76,60
12-1 19:40:11.809,5,100,-52,-52.8,-80.0,5180,433,433,12,88,113547,6.54,0.47,0.00,5.76,0,1,68,76,60
12-1 19:40:14.836,5,100,-52,-52.6,-80.0,5180,433,390,12,88,113575,7.00,0.80,0.00,6.29,0,1,68,77,60
12-1 19:40:17.850,5,100,-52,-52.5,-80.0,5180,433,433,12,88,113604,6.96,0.71,0.00,6.49,0,1,68,77,60
12-1 19:40:20.863,5,100,-52,-52.3,-80.0,5180,433,433,12,88,113633,5.70,1.31,0.00,5.74,0,1,68,78,60
12-1 19:40:23.884,5,100,-52,-52.2,-80.0,5180,433,433,12,88,113662,5.87,0.48,0.00,5.46,0,1,68,78,60
12-1 19:40:26.904,5,100,-51,-51.7,-80.0,5180,433,433,12,88,113691,6.97,0.38,0.00,6.40,0,1,69,78,60
12-1 19:40:29.924,5,100,-52,-51.7,-80.0,5180,433,433,12,88,113720,8.01,0.77,0.00,7.38,0,1,68,78,60
12-1 19:40:32.950,5,100,-51,-51.4,-80.0,5180,433,433,12,88,113750,6.28,0.28,0.00,6.47,0,1,69,79,60
12-1 19:40:35.965,5,100,-52,-51.5,-80.0,5180,433,433,12,88,113777,6.91,0.52,0.00,6.35,0,1,68,78,60
12-1 19:40:38.986,5,100,-52,-51.6,-80.0,5180,390,433,12,88,113805,6.94,1.24,0.00,6.32,0,1,68,78,60
12-1 19:40:42.3,5,100,-52,-51.7,-80.0,5180,433,433,12,88,113834,7.37,0.66,0.00,7.14,0,1,68,78,60
12-1 19:40:45.19,5,100,-52,-51.8,-80.0,5180,433,433,12,88,113863,7.19,0.40,0.00,6.12,0,1,68,78,60
12-1 19:40:48.49,5,100,-52,-51.8,-80.0,5180,433,433,12,88,113891,6.83,0.57,0.00,5.39,0,1,68,78,60
12-1 19:40:51.62,5,100,-52,-51.9,-80.0,5180,433,433,12,88,113921,6.68,1.88,0.00,5.95,0,1,68,78,60
12-1 19:43:38.576,6,100,-51,-51.0,-80.0,5180,433,433,12,88,115526,20.17,2.41,0.00,18.85,0,1,69,79,60
12-1 19:44:7.577,7,100,-54,-54.0,-80.0,5180,433,390,12,88,115803,3.06,0.96,0.00,2.85,0,1,66,76,60
12-1 19:44:10.587,7,100,-55,-54.9,-80.0,5180,263,390,12,88,115832,5.11,3.08,0.00,4.41,0,1,65,75,60
12-1 19:44:13.595,7,100,-52,-53.5,-80.0,5180,234,390,12,88,115861,7.13,2.81,0.00,5.82,0,1,68,76,60
12-1 19:44:16.620,7,100,-51,-52.6,-80.0,5180,263,433,12,88,115889,6.19,2.29,0.00,5.92,0,1,69,77,60
12-1 19:44:19.637,7,100,-52,-52.4,-80.0,5180,325,433,12,88,115919,6.87,0.83,0.00,5.73,0,1,68,78,60
12-1 19:44:22.659,7,100,-51,-51.9,-80.0,5180,433,390,12,88,115947,13.44,0.30,0.00,12.60,0,1,69,78,60
12-1 19:44:25.680,7,100,-51,-51.5,-80.0,5180,433,433,12,88,115977,43.99,8.72,0.00,42.00,0,1,69,78,60
12-1 19:44:28.703,7,100,-51,-51.2,-80.0,5180,433,433,12,88,116006,52.39,12.21,0.00,51.46,0,1,69,79,60
12-1 19:44:31.715,7,100,-51,-51.0,-80.0,5180,433,433,12,88,116036,23.76,4.88,0.00,23.21,0,1,69,79,60
12-1 19:44:34.739,7,100,-51,-50.8,-80.0,5180,433,433,12,88,116065,12.07,2.63,0.00,11.87,0,1,69,79,60
12-1 19:44:37.759,7,100,-51,-50.7,-80.0,5180,433,433,12,88,116095,8.60,1.38,0.00,8.11,0,1,69,79,60
12-1 19:44:40.780,7,100,-50,-50.3,-80.0,5180,433,433,12,88,116122,7.97,1.34,0.00,6.95,0,1,70,80,60
12-1 19:44:43.801,7,100,-52,-50.7,-80.0,5180,433,433,12,88,116152,6.90,0.49,0.00,6.32,0,1,68,79,60
12-1 19:44:46.822,7,100,-51,-50.8,-80.0,5180,433,433,12,88,116181,6.51,1.02,0.00,5.67,0,1,69,79,60
12-1 19:44:49.849,7,100,-51,-50.8,-80.0,5180,433,433,12,88,116210,6.36,0.79,0.00,5.64,0,1,69,79,60
12-1 19:44:52.873,7,100,-51,-50.8,-80.0,5180,433,433,12,88,116239,7.15,1.12,0.00,6.25,0,1,69,79,60
12-1 19:44:55.889,7,100,-51,-50.8,-80.0,5180,433,433,12,88,116269,7.22,0.83,0.00,6.27,0,1,69,79,60
12-1 19:44:58.917,7,100,-51,-50.9,-80.0,5180,433,433,12,88,116297,6.00,0.93,0.00,5.02,0,1,69,79,60
12-1 19:45:1.945,7,100,-51,-50.9,-80.0,5180,433,433,12,88,116327,16.88,3.69,0.00,10.64,0,1,69,79,60
12-1 19:45:4.975,7,100,-51,-50.9,-80.0,5180,433,433,12,88,116355,10.14,1.55,0.00,7.87,0,1,69,79,60
12-1 19:45:8.4,7,100,-51,-50.9,-80.0,5180,433,433,12,88,116383,8.52,1.19,0.00,7.69,0,1,69,79,60
12-1 19:45:11.34,7,100,-52,-51.3,-80.0,5180,351,433,12,88,116413,7.09,1.69,0.00,5.94,0,1,68,78,60
12-1 19:46:26.516,8,100,-51,-51.0,-80.0,5180,200,433,12,88,117144,38.15,6.55,0.00,36.45,0,1,69,79,60
externalScorerActive=false
mShouldReduceNetworkScore=false
QosPolicyRequestHandler:
mQosRequestDialogToken: 0
mNumQosPoliciesInRequest: 0
mQosResourcesAvailable: false
mQosPolicyStatusList size: 0
mQosPolicyRequestQueue size: 0

Dump of ConcreteClientModeManager.Graveyard
Stopped ClientModeImpls: 0 total


Dump of ActiveModeWarden.Graveyard
Stopped ClientModeManagers: 0 total
Stopped SoftApManagers: 0 total

STA + STA Concurrency Supported: false
STA + AP Concurrency Supported: false
Dump of HalDeviceManager:
  mManagerStatusListeners: [com.android.server.wifi.HalDeviceManager$ManagerStatusListenerProxy@36550b1]
  mInterfaceInfoCache: {Pair{wlan0 0}={name=wlan0, type=0, destroyedListeners.size()=1, RequestorWs=WorkSource{1000 com.android.settings}, creationTime=15781}}
  mDebugChipsInfo: [{chipId=0, availableModes=[{id=0, availableCombinations=[{limits=[{maxIfaces=1, types=[0]}, {maxIfaces=1, types=[3]}]}]}, {id=1, availableCombinations=[{limits=[{maxIfaces=1, types=[1]}]}]}], currentModeIdValid=true, currentModeId=0, chipCapabilities=-1, radioCombinations=null, bandCombinations=null, ifaces[1].length=0, ifaces[0].length=1, ifaces[2].length=0, ifaces[3].length=0}]
Wifi handler thread overruns
2024-12-01T16:23:13.289706 - ConcreteClientModeManager.ConcreteClientModeManager$ClientModeStateMachine$StartedState.CMD_SWITCH_TO_CONNECT_MODE was running for 144 ms
2024-12-01T16:23:15.327135 - ClientModeImpl.ClientModeImpl$ConnectableState.Enter was running for 2023 ms
2024-12-01T16:23:22.530525 - ClientModeImpl.ClientModeImpl$ConnectableState.CMD_START_CONNECT was running for 197 ms
2024-12-01T16:23:23.730220 - ClientModeImpl.ClientModeImpl$L3ConnectedState.CMD_NETWORK_STATUS was running for 174 ms
2024-12-01T19:28:11.965030 - WifiServiceImpl#dump was running for 375
2024-12-01T19:43:38.562596 - WifiServiceImpl#dump was running for 303
2024-12-01T19:46:26.500718 - WifiServiceImpl#dump was running for 329
Dump of MakeBeforeBreakManager
mMakeBeforeBreakInfo=null
mInternalState MBB_STATE_NONE

dump of InterfaceConflictManager:
  mUserApprovalNeeded=false
  mUserApprovalNeededOverride=false
  mUserApprovalNeededOverrideValue=false
  mUserApprovalPending=false
  mUserApprovalPendingTag=null
  mUserJustApproved=false
  mUserApprovalNotRequireForDisconnectedP2p=false

mTxPkts 182387
mRxPkts 186150
mLastActivity 3
mRegisteredCallbacks 2

Locks held:
Locks acquired: 0 full high perf, 1 full low latency
Locks released: 0 full high perf, 0 full low latency

Locks held:
    WifiLock{termux type=4 uid=1000 workSource=WorkSource{10338 com.termux}}

mMulticastEnabled 0
mMulticastDisabled 0
Multicast Locks held:

WifiScoreCard:
GpoJGrYHCIiRybADIoABCA0QvCgaJwiBBxEAAAAAgKTnwBkAAAAA2gJEQSEAAAAAAMBQwCkAAAAA
AIBFwCInCIEHEQAAAACI2gdBGQAAAMhOh4VBIQAAAAAAAD1AKQAAAAAAUHRAKicIgQcRAAAAAMDO
H0EZAAAAYLP8u0EhAAAAAACAd0ApAAAAAAAGyUAijAIIBBC8KBqzAQg1EQAAAAAAvKbAGQAAAAAA
zANBIQAAAAAAwFDAKQAAAAAAgEXAQgUIhQEQAkIFCIMBEANCBQiBARABQgQIfxACQgQIfRACQgQI
exACQgQIeRACQgQIdxABQgQIdRABQgQIcxACQgQIcRABQgQIbxADQgQIbRADQgQIaxACQgQIaRAF
QgQIZxACQgQIZRAFQgQIYxADQgQIYRACQgQIXxABQgQIXRABQgQIWRAGQgQIVRABIiYINREAAAAA
AHKnQBkAAAAAnKIaQSEAAAAAAAA9QCkAAAAAAHBwQConCIEHEQAAAAC0pxNBGQAAAOIlxKBBIQAA
AAAA4GhAKQAAAAAARbJAIn0IAxC8KBomCEQRAAAAAADirMAZAAAAAPjWCEEhAAAAAADAUMApAAAA
AACARcAiJghEEQAAAAAAK8BAGQAAAADwr0JBIQAAAAAAAD1AKQAAAAAAEHtAKiYIRBEAAACIZgmU
QRnGXSWcYXE2QyEAAAAAACBhQCkAAACE4u+SQSKOAggBELwoGt0BCNEKEQAAAACAq/HAGQAAAABF
hE1BIQAAAAAAQFHAKQAAAAAAgETAQgUIiQEQAUIFCIcBEAFCBQiFARAHQgUIgwEQC0IFCIEBEAVC
BAh/EAdCBAh9EARCBAh7EAVCBAh5EA9CBAh3EBxCBAh1EB5CBAhzEDlCBAhxEDZCBAhvEFNCBAht
EFRCBAhrEG5CBQhpEKMBQgUIZxD5AUIFCGUQwQFCBAhjEHFCBAhhEDZCBAhfEBZCBAhdEBFCBAhb
EBlCBAhZEBFCBAhXEAJCBAhVEAFCBAhTEAJCBAhREAEiJwjRChEAAAAA1BAfQRkAAAByZ5+oQSEA
AAAAAAA9QCkAAAAAABB7QDACOokBCkAKHgoECAAQAAoECAAQAAoECAAQAAoECAAQAAoECAAQABIe
CgQIABAACgQIABAACgQIABAACgQIABAACgQIABAAEkUKIQoECAAQAAoECAAQAAoECAAQAAoGCNCA
BhADCgUIkF0QARIgCgQIABAACgQIABAACgQIABAACgQIABAACgYI0NklEAcgAChkMtoBCM/nrIwB
EhQIAhAAGAQgACgAMAA4AEAASARQABoXCNMGEAAY1McMIAAoADAAOABAB0gYUAAiFAgAEAAYACAA
KAAwADgAQABIAFAAKLwoMokBCkAKHgoECAAQAAoECAAQAAoECAAQAAoECAAQAAoECAAQABIeCgQI
ABAACgQIABAACgQIABAACgQIABAACgQIABAAEkUKIQoECAAQAAoECAAQAAoECAAQAAoGCNCABhAD
CgUIkF0QARIgCgQIABAACgQIABAACgQIABAACgQIABAACgYI0NklEAc=

WifiMetrics:
mConnectionEvents:
startTime=12-1 16:23:22.471, SSID="pg_star_5G", BSSID=50:88:11:a1:34:cd, durationMillis=604, roamType=ROAM_UNRELATED, connectionResult=1, level2FailureCode=NONE, connectivityLevelFailureCode=NONE, signalStrength=-64, wifiState=WIFI_DISCONNECTED, screenOn=true, mRouterFingerprint=mConnectionEvent.roamType=0, mChannelInfo=5180, mDtim=0, mAuthentication=2, mHidden=false, mRouterTechnology=5, mSupportsIpv6=false, mEapMethod=0, mAuthPhase2Method=0, mOcspType=0, mPmkCache=false, mMaxSupportedTxLinkSpeedMbps=433, mMaxSupportedRxLinkSpeedMbps=433, mIsFrameworkInitiatedRoaming=false, mIsIncorrectlyConfiguredAsHidden=false, mWifiStandard=5, mIs11bSupported=false, mIsMboSupported=false, mIsOceSupported=false, mIsFilsSupported=false, mIsIndividualTwtSupported=false, mIsBroadcastTwtSupported=false, mIsRestrictedTwtSupported=false, mIsTwtRequired=false, mIs11mcSupported=false, mIs11azSupported=false, mApType6Ghz=AP_TYPE_6GHZ_UNKNOWN, mIsEcpsPriorityAccessSupported=false, mHsRelease=null, useRandomizedMac=true, useAggressiveMac=false, connectionNominator=NOMINATOR_SAVED, networkSelectorExperimentId=42330058, numBssidInBlocklist=0, level2FailureReason=FAILURE_REASON_UNKNOWN, networkType=TYPE_WPA2, networkCreator=CREATOR_USER, numConsecutiveConnectionFailure=0, isOsuProvisioned=false interfaceName=wlan0 interfaceRole=ROLE_CLIENT_PRIMARY, isFirstConnectionAfterBoot=true, isCarrierWifi=false, isOobPseudonymEnabled=false
mWifiLogProto.numSavedNetworks=1
mWifiLogProto.numSavedNetworksWithMacRandomization=1
mWifiLogProto.numOpenNetworks=0
mWifiLogProto.numLegacyPersonalNetworks=1
mWifiLogProto.numLegacyEnterpriseNetworks=0
mWifiLogProto.numEnhancedOpenNetworks=0
mWifiLogProto.numWpa3PersonalNetworks=0
mWifiLogProto.numWpa3EnterpriseNetworks=0
mWifiLogProto.numWapiPersonalNetworks=0
mWifiLogProto.numWapiEnterpriseNetworks=0
mWifiLogProto.numHiddenNetworks=0
mWifiLogProto.numPasspointNetworks=0
mWifiLogProto.isLocationEnabled=false
mWifiLogProto.isScanningAlwaysEnabled=false
mWifiLogProto.isVerboseLoggingEnabled=false
mWifiLogProto.isEnhancedMacRandomizationForceEnabled=false
mWifiLogProto.isWifiWakeEnabled=true
mWifiLogProto.numNetworksAddedByUser=0
mWifiLogProto.numNetworksAddedByApps=1
mWifiLogProto.numNonEmptyScanResults=1
mWifiLogProto.numEmptyScanResults=0
mWifiLogProto.numConnecitvityOneshotScans=1
mWifiLogProto.numOneshotScans=1
mWifiLogProto.numOneshotHasDfsChannelScans=1
mWifiLogProto.numBackgroundScans=0
mWifiLogProto.numExternalAppOneshotScanRequests=0
mWifiLogProto.numExternalForegroundAppOneshotScanRequestsThrottled=0
mWifiLogProto.numExternalBackgroundAppOneshotScanRequestsThrottled=0
mWifiLogProto.meteredNetworkStatsSaved=
num_metered: 0
num_override_metered: 0
num_override_unmetered: 0
num_unmetered: 1

mWifiLogProto.meteredNetworkStatsSuggestion=
num_metered: 0
num_override_metered: 0
num_override_unmetered: 0
num_unmetered: 0

mScanReturnEntries:
  SCAN_UNKNOWN: 0
  SCAN_SUCCESS: 1
  SCAN_FAILURE_INTERRUPTED: 0
  SCAN_FAILURE_INVALID_CONFIGURATION: 0
  FAILURE_WIFI_DISABLED: 0
mSystemStateEntries: <state><screenOn> : <scansInitiated>
  WIFI_UNKNOWN       ON: 0
  WIFI_DISABLED      ON: 0
  WIFI_DISCONNECTED  ON: 1
  WIFI_ASSOCIATED    ON: 0
  WIFI_UNKNOWN      OFF: 0
  WIFI_DISABLED     OFF: 0
  WIFI_DISCONNECTED OFF: 0
  WIFI_ASSOCIATED   OFF: 0
mWifiLogProto.numConnectivityWatchdogPnoGood=0
mWifiLogProto.numConnectivityWatchdogPnoBad=0
mWifiLogProto.numConnectivityWatchdogBackgroundGood=0
mWifiLogProto.numConnectivityWatchdogBackgroundBad=0
mWifiLogProto.numLastResortWatchdogTriggers=0
mWifiLogProto.numLastResortWatchdogBadAssociationNetworksTotal=0
mWifiLogProto.numLastResortWatchdogBadAuthenticationNetworksTotal=0
mWifiLogProto.numLastResortWatchdogBadDhcpNetworksTotal=0
mWifiLogProto.numLastResortWatchdogBadOtherNetworksTotal=0
mWifiLogProto.numLastResortWatchdogAvailableNetworksTotal=0
mWifiLogProto.numLastResortWatchdogTriggersWithBadAssociation=0
mWifiLogProto.numLastResortWatchdogTriggersWithBadAuthentication=0
mWifiLogProto.numLastResortWatchdogTriggersWithBadDhcp=0
mWifiLogProto.numLastResortWatchdogTriggersWithBadOther=0
mWifiLogProto.numLastResortWatchdogSuccesses=0
mWifiLogProto.watchdogTotalConnectionFailureCountAfterTrigger=0
mWifiLogProto.watchdogTriggerToConnectionSuccessDurationMs=-1
mWifiLogProto.recordDurationSec=12361
mWifiLogProto.rssiPollCount: {"5180":[{"-68":1},{"-65":2},{"-64":1},{"-55":1},{"-54":2},{"-53":2},{"-52":21},{"-51":24},{"-50":1},{"-49":2},{"-45":1}]}
mWifiLogProto.rssiPollDeltaCount: Printing counts for [-127, 127]
  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
mWifiLogProto.linkSpeedCounts: 
29:{1, 65, 4225} 175:{1, 68, 4624} 200:{1, 51, 2601} 234:{3, 181, 11025} 263:{2, 106, 5626} 325:{2, 101, 5105} 351:{2, 104, 5408} 390:{4, 199, 9931} 433:{42, 2165, 111635} 
mWifiLogProto.alertReasonCounts=()
mWifiLogProto.numTotalScanResults=33
mWifiLogProto.numOpenNetworkScanResults=1
mWifiLogProto.numLegacyPersonalNetworkScanResults=31
mWifiLogProto.numLegacyEnterpriseNetworkScanResults=0
mWifiLogProto.numEnhancedOpenNetworkScanResults=0
mWifiLogProto.numWpa3PersonalNetworkScanResults=1
mWifiLogProto.numWpa3EnterpriseNetworkScanResults=0
mWifiLogProto.numWapiPersonalNetworkScanResults=0
mWifiLogProto.numWapiEnterpriseNetworkScanResults=0
mWifiLogProto.numHiddenNetworkScanResults=4
mWifiLogProto.numHotspot2R1NetworkScanResults=0
mWifiLogProto.numHotspot2R2NetworkScanResults=0
mWifiLogProto.numHotspot2R3NetworkScanResults=0
mWifiLogProto.numMboSupportedNetworkScanResults=2
mWifiLogProto.numMboCellularDataAwareNetworkScanResults=0
mWifiLogProto.numOceSupportedNetworkScanResults=0
mWifiLogProto.numFilsSupportedNetworkScanResults=0
mWifiLogProto.num11AxNetworkScanResults=9
mWifiLogProto.num6GNetworkScanResults0
mWifiLogProto.num6GPscNetworkScanResults0
mWifiLogProto.numBssidFilteredDueToMboAssocDisallowInd=0
mWifiLogProto.numConnectToNetworkSupportingMbo=0
mWifiLogProto.numConnectToNetworkSupportingOce=0
mWifiLogProto.numSteeringRequest=0
mWifiLogProto.numForceScanDueToSteeringRequest=0
mWifiLogProto.numMboCellularSwitchRequest=0
mWifiLogProto.numSteeringRequestIncludingMboAssocRetryDelay=0
mWifiLogProto.numConnectRequestWithFilsAkm=0
mWifiLogProto.numL2ConnectionThroughFilsAuthentication=0
mWifiLogProto.recentFailureAssociationStatus={}
mWifiLogProto.numScans=1
mWifiLogProto.WifiScoreCount: [0, 60]
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 55 
mWifiLogProto.WifiUsabilityScoreCount: [0, 100]
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
mWifiLogProto.SoftApManagerReturnCodeCounts:
  SUCCESS: 0
  FAILED_GENERAL_ERROR: 0
  FAILED_NO_CHANNEL: 0
  FAILED_UNSUPPORTED_CONFIGURATION: 0

mWifiLogProto.numHalCrashes=0
mWifiLogProto.numWificondCrashes=0
mWifiLogProto.numSupplicantCrashes=0
mWifiLogProto.numHostapdCrashes=0
mWifiLogProto.numSetupClientInterfaceFailureDueToHal=0
mWifiLogProto.numSetupClientInterfaceFailureDueToWificond=0
mWifiLogProto.numSetupClientInterfaceFailureDueToSupplicant=0
mWifiLogProto.numSetupSoftApInterfaceFailureDueToHal=0
mWifiLogProto.numSetupSoftApInterfaceFailureDueToWificond=0
mWifiLogProto.numSetupSoftApInterfaceFailureDueToHostapd=0
StaEventList:
12-01 16:23:15.385 WIFI_ENABLED screenOn=true cellularData=false adaptiveConnectivity=true totalTxBytes=730 totalRxBytes=472 interfaceName=wlan0 interfaceRole=ROLE_CLIENT_PRIMARY
12-01 16:23:22.399 MAC_CHANGE screenOn=true cellularData=false adaptiveConnectivity=true, ConfigInfo: allowed_key_management=2 allowed_protocols=3 allowed_auth_algorithms=0 allowed_pairwise_ciphers=6 allowed_group_ciphers=15 hidden_ssid=false is_passpoint=false is_ephemeral=false has_ever_connected=true scan_rssi=-64 scan_freq=5180 totalTxBytes=786 totalRxBytes=472 interfaceName=wlan0 interfaceRole=ROLE_CLIENT_PRIMARY
12-01 16:23:22.528 CMD_START_CONNECT screenOn=true cellularData=false adaptiveConnectivity=true, ConfigInfo: allowed_key_management=2 allowed_protocols=3 allowed_auth_algorithms=0 allowed_pairwise_ciphers=6 allowed_group_ciphers=15 hidden_ssid=false is_passpoint=false is_ephemeral=false has_ever_connected=true scan_rssi=-64 scan_freq=5180 totalTxBytes=786 totalRxBytes=472 interfaceName=wlan0 interfaceRole=ROLE_CLIENT_PRIMARY
12-01 16:23:22.612 CMD_ASSOCIATED_BSSID screenOn=true cellularData=false adaptiveConnectivity=true, supplicantStateChangeEvents: { DISCONNECTED INTERFACE_DISABLED ASSOCIATING ASSOCIATED } totalTxBytes=786 totalRxBytes=472 interfaceName=wlan0 interfaceRole=ROLE_CLIENT_PRIMARY
12-01 16:23:22.634 NETWORK_CONNECTION_EVENT screenOn=true cellularData=false adaptiveConnectivity=true, supplicantStateChangeEvents: { FOUR_WAY_HANDSHAKE GROUP_HANDSHAKE } totalTxBytes=786 totalRxBytes=472 interfaceName=wlan0 interfaceRole=ROLE_CLIENT_PRIMARY
12-01 16:23:23.063 CMD_IP_CONFIGURATION_SUCCESSFUL lastRssi=-65 lastFreq=5180 lastLinkSpeed=29 lastScore=60 screenOn=true cellularData=false adaptiveConnectivity=true, supplicantStateChangeEvents: { COMPLETED } totalTxBytes=934 totalRxBytes=1161 interfaceName=wlan0 interfaceRole=ROLE_CLIENT_PRIMARY
12-01 16:23:23.556 NETWORK_AGENT_VALID_NETWORK screenOn=true cellularData=false adaptiveConnectivity=true totalTxBytes=3602 totalRxBytes=7689 interfaceName=wlan0 interfaceRole=ROLE_CLIENT_PRIMARY
UserActionEvents:
mWifiLogProto.numPasspointProviders=0
mWifiLogProto.numPasspointProviderInstallation=0
mWifiLogProto.numPasspointProviderInstallSuccess=0
mWifiLogProto.numPasspointProviderUninstallation=0
mWifiLogProto.numPasspointProviderUninstallSuccess=0
mWifiLogProto.numPasspointProvidersSuccessfullyConnected=0
mWifiLogProto.installedPasspointProfileTypeForR1:{}
mWifiLogProto.installedPasspointProfileTypeForR2:{}
mWifiLogProto.passpointProvisionStats.numProvisionSuccess=0
mWifiLogProto.passpointProvisionStats.provisionFailureCount:{}
mWifiLogProto.totalNumberOfPasspointConnectionsWithVenueUrl=0
mWifiLogProto.totalNumberOfPasspointConnectionsWithTermsAndConditionsUrl=0
mWifiLogProto.totalNumberOfPasspointAcceptanceOfTermsAndConditions=0
mWifiLogProto.totalNumberOfPasspointProfilesWithDecoratedIdentity=0
mWifiLogProto.passpointDeauthImminentScope={}
mWifiLogProto.numRadioModeChangeToMcc=0
mWifiLogProto.numRadioModeChangeToScc=0
mWifiLogProto.numRadioModeChangeToSbs=0
mWifiLogProto.numRadioModeChangeToDbs=0
mWifiLogProto.numSoftApUserBandPreferenceUnsatisfied=0
mTotalSsidsInScanHistogram:{17=1}
mTotalBssidsInScanHistogram:{23=1}
mAvailableOpenSsidsInScanHistogram:{1=1}
mAvailableOpenBssidsInScanHistogram:{1=1}
mAvailableSavedSsidsInScanHistogram:{1=1}
mAvailableSavedBssidsInScanHistogram:{1=1}
mAvailableOpenOrSavedSsidsInScanHistogram:{2=1}
mAvailableOpenOrSavedBssidsInScanHistogram:{2=1}
mAvailableSavedPasspointProviderProfilesInScanHistogram:{0=1}
mAvailableSavedPasspointProviderBssidsInScanHistogram:{0=1}
mWifiLogProto.partialAllSingleScanListenerResults=0
mWifiLogProto.fullBandAllSingleScanListenerResults=1
mWifiAwareMetrics:
mLastEnableUsageMs:0
mLastEnableUsageInThisSampleWindowMs:0
mAvailableTimeMs:0
mHistogramAwareAvailableDurationMs:
mLastEnableAwareMs:0
mLastEnableAwareInThisSampleWindowMs:0
mEnabledTimeMs:0
mHistogramAwareEnabledDurationMs:
mAttachDataByUid:
mAttachStatusData:
mHistogramAttachDuration:
mMaxPublishInApp:0
mMaxSubscribeInApp:0
mMaxDiscoveryInApp:0
mMaxPublishInSystem:0
mMaxSubscribeInSystem:0
mMaxDiscoveryInSystem:0
mPublishStatusData:
mSubscribeStatusData:
mHistogramPublishDuration:
mHistogramSubscribeDuration:
mAppsWithDiscoverySessionResourceFailure:
mMaxPublishWithRangingInApp:0
mMaxSubscribeWithRangingInApp:0
mMaxPublishWithRangingInSystem:0
mMaxSubscribeWithRangingInSystem:0
mHistogramSubscribeGeofenceMin:
mHistogramSubscribeGeofenceMax:
mNumSubscribesWithRanging:0
mNumMatchesWithRanging:0
mNumMatchesWithoutRangingForRangingEnabledSubscribes:0
mMaxNdiInApp:0
mMaxNdpInApp:0
mMaxSecureNdpInApp:0
mMaxNdiInSystem:0
mMaxNdpInSystem:0
mMaxSecureNdpInSystem:0
mMaxNdpPerNdi:0
mInBandNdpStatusData:
mOutOfBandNdpStatusData:
mNdpCreationTimeDuration:
mNdpCreationTimeMin:-1
mNdpCreationTimeMax:0
mNdpCreationTimeSum:0
mNdpCreationTimeSumSq:0
mNdpCreationTimeNumSamples:0
mHistogramNdpDuration:
mNdpRequestType:
mRttMetrics:
RTT Metrics:
mNumStartRangingCalls:0
mOverallStatusHistogram:{}
mMeasurementDurationApOnlyHistogram{}
mMeasurementDurationWithAwareHistogram{}
AP:numCalls=0, numIndividualCalls=0, perUidInfo={}, numRequestsHistogram={}, requestGapHistogram={}, statusHistogram={}, measuredDistanceHistogram={}
AWARE:numCalls=0, numIndividualCalls=0, perUidInfo={}, numRequestsHistogram={}, requestGapHistogram={}, statusHistogram={}, measuredDistanceHistogram={}
mPnoScanMetrics.numPnoScanAttempts=0
mPnoScanMetrics.numPnoScanFailed=0
mPnoScanMetrics.numPnoScanStartedOverOffload=0
mPnoScanMetrics.numPnoScanFailedOverOffload=0
mPnoScanMetrics.numPnoFoundNetworkEvents=0
mWifiLinkLayerUsageStats.loggingDurationMs=12227664
mWifiLinkLayerUsageStats.radioOnTimeMs=4911752
mWifiLinkLayerUsageStats.radioTxTimeMs=33038
mWifiLinkLayerUsageStats.radioRxTimeMs=20527
mWifiLinkLayerUsageStats.radioScanTimeMs=17995
mWifiLinkLayerUsageStats.radioNanScanTimeMs=0
mWifiLinkLayerUsageStats.radioBackgroundScanTimeMs=0
mWifiLinkLayerUsageStats.radioRoamScanTimeMs=14597
mWifiLinkLayerUsageStats.radioPnoScanTimeMs=0
mWifiLinkLayerUsageStats.radioHs20ScanTimeMs=0
mWifiLinkLayerUsageStats per Radio Stats: 
mWifiLogProto.connectToNetworkNotificationCount={}
mWifiLogProto.connectToNetworkNotificationActionCount={}
mWifiLogProto.openNetworkRecommenderBlocklistSize=0
mWifiLogProto.isWifiNetworksAvailableNotificationOn=true
mWifiLogProto.numOpenNetworkRecommendationUpdates=0
mWifiLogProto.numOpenNetworkConnectMessageFailedToSend=0
mWifiLogProto.observedHotspotR1ApInScanHistogram={0=1}
mWifiLogProto.observedHotspotR2ApInScanHistogram={0=1}
mWifiLogProto.observedHotspotR3ApInScanHistogram={0=1}
mWifiLogProto.observedHotspotR1EssInScanHistogram={0=1}
mWifiLogProto.observedHotspotR2EssInScanHistogram={0=1}
mWifiLogProto.observedHotspotR3EssInScanHistogram={0=1}
mWifiLogProto.observedHotspotR1ApsPerEssInScanHistogram={}
mWifiLogProto.observedHotspotR2ApsPerEssInScanHistogram={}
mWifiLogProto.observedHotspotR3ApsPerEssInScanHistogram={}
mWifiLogProto.observed80211mcSupportingApsInScanHistogram{0=1}
mWifiLogProto.bssidBlocklistStats:
networkSelectionFilteredBssidCount={0=1}
mBlockedBssidPerReasonCount={}
mBlockedConfigurationPerReasonCount={}, highMovementMultipleScansFeatureEnabled=true, numHighMovementConnectionSkipped=0, numHighMovementConnectionStarted=0, mBlockedBssidPerReasonCount={}, mBlockedConfigurationPerReasonCount={}
mSoftApTetheredEvents:
mSoftApLocalOnlyEvents:
Wifi power metrics:
Logging duration (time on battery): 1180211
Energy consumed by wifi (mAh): 0.0
Amount of time wifi is in idle (ms): 443790
Amount of time wifi is in rx (ms): 1818
Amount of time wifi is in tx (ms): 2772
Amount of time kernel is active because of wifi data (ms): 1180211
Amount of time wifi is in sleep (ms): 731831
Amount of time wifi is scanning (ms): 0
Number of packets sent (tx): 17374
Number of bytes sent (tx): 3791671
Number of packets received (rx): 18251
Number of bytes sent (rx): 1530266
Energy consumed across measured wifi rails (mAh): 0
Wifi radio usage metrics:
Logging duration (time on battery): 1180212
Amount of time wifi is in scan mode while on battery (ms): 0
-------WifiWake metrics-------
mTotalSessions: 0
mTotalWakeups: 0
mIgnoredStarts: 0
mIsInSession: false
Stored Sessions: 0
----end of WifiWake metrics----
mWifiLogProto.isMacRandomizationOn=true
mWifiLogProto.scoreExperimentId=
mExperimentValues.wifiIsUnusableLoggingEnabled=true
mExperimentValues.wifiDataStallMinTxBad=1
mExperimentValues.wifiDataStallMinTxSuccessWithoutRx=50
mExperimentValues.linkSpeedCountsLoggingEnabled=true
mExperimentValues.dataStallDurationMs=1500
mExperimentValues.dataStallTxTputThrKbps=2000
mExperimentValues.dataStallRxTputThrKbps=2000
mExperimentValues.dataStallTxPerThr=90
mExperimentValues.dataStallCcaLevelThr=256
WifiIsUnusableEventList: 
Hardware Version: pvt
mWifiUsabilityStatsEntriesList:
timestamp_ms=11828395,rssi=-53,link_speed_mbps=433,total_tx_success=176953,total_tx_retries=44889,total_tx_bad=1,total_rx_success=181080,total_radio_on_time_ms=4684025,total_radio_tx_time_ms=31589,total_radio_rx_time_ms=19637,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=230089,total_radio_on_freq_time_ms=4665658,total_beacon_rx=113489,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=390,seq_num_inside_framework=15,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11831429,rssi=-54,link_speed_mbps=433,total_tx_success=176970,total_tx_retries=44890,total_tx_bad=1,total_rx_success=181093,total_radio_on_time_ms=4684821,total_radio_tx_time_ms=31594,total_radio_rx_time_ms=19640,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=230231,total_radio_on_freq_time_ms=4666454,total_beacon_rx=113518,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=390,seq_num_inside_framework=16,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11834455,rssi=-52,link_speed_mbps=433,total_tx_success=176988,total_tx_retries=44890,total_tx_bad=1,total_rx_success=181110,total_radio_on_time_ms=4685725,total_radio_tx_time_ms=31599,total_radio_rx_time_ms=19644,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=230292,total_radio_on_freq_time_ms=4667358,total_beacon_rx=113547,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=17,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11837482,rssi=-52,link_speed_mbps=433,total_tx_success=177010,total_tx_retries=44893,total_tx_bad=1,total_rx_success=181130,total_radio_on_time_ms=4686806,total_radio_tx_time_ms=31606,total_radio_rx_time_ms=19649,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=230440,total_radio_on_freq_time_ms=4668439,total_beacon_rx=113575,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=390,seq_num_inside_framework=18,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11840500,rssi=-52,link_speed_mbps=433,total_tx_success=177031,total_tx_retries=44895,total_tx_bad=1,total_rx_success=181150,total_radio_on_time_ms=4687926,total_radio_tx_time_ms=31613,total_radio_rx_time_ms=19654,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=230655,total_radio_on_freq_time_ms=4669559,total_beacon_rx=113604,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=19,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11843514,rssi=-52,link_speed_mbps=433,total_tx_success=177046,total_tx_retries=44900,total_tx_bad=1,total_rx_success=181166,total_radio_on_time_ms=4688869,total_radio_tx_time_ms=31619,total_radio_rx_time_ms=19658,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=230852,total_radio_on_freq_time_ms=4670502,total_beacon_rx=113633,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=20,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11846531,rssi=-52,link_speed_mbps=433,total_tx_success=177064,total_tx_retries=44900,total_tx_bad=1,total_rx_success=181182,total_radio_on_time_ms=4689942,total_radio_tx_time_ms=31625,total_radio_rx_time_ms=19662,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=231022,total_radio_on_freq_time_ms=4671575,total_beacon_rx=113662,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=21,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11849553,rssi=-51,link_speed_mbps=433,total_tx_success=177087,total_tx_retries=44901,total_tx_bad=1,total_rx_success=181203,total_radio_on_time_ms=4691147,total_radio_tx_time_ms=31630,total_radio_rx_time_ms=19667,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=231077,total_radio_on_freq_time_ms=4672780,total_beacon_rx=113691,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=22,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11852571,rssi=-52,link_speed_mbps=433,total_tx_success=177113,total_tx_retries=44904,total_tx_bad=1,total_rx_success=181227,total_radio_on_time_ms=4692266,total_radio_tx_time_ms=31638,total_radio_rx_time_ms=19672,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=231289,total_radio_on_freq_time_ms=4673899,total_beacon_rx=113720,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=23,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11855594,rssi=-51,link_speed_mbps=433,total_tx_success=177129,total_tx_retries=44904,total_tx_bad=1,total_rx_success=181245,total_radio_on_time_ms=4693131,total_radio_tx_time_ms=31643,total_radio_rx_time_ms=19676,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=231452,total_radio_on_freq_time_ms=4674764,total_beacon_rx=113750,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=24,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11858614,rssi=-52,link_speed_mbps=433,total_tx_success=177151,total_tx_retries=44906,total_tx_bad=1,total_rx_success=181264,total_radio_on_time_ms=4694185,total_radio_tx_time_ms=31649,total_radio_rx_time_ms=19680,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=231617,total_radio_on_freq_time_ms=4675818,total_beacon_rx=113777,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=25,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11861633,rssi=-52,link_speed_mbps=390,total_tx_success=177172,total_tx_retries=44911,total_tx_bad=1,total_rx_success=181283,total_radio_on_time_ms=4695260,total_radio_tx_time_ms=31656,total_radio_rx_time_ms=19685,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=231699,total_radio_on_freq_time_ms=4676893,total_beacon_rx=113805,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=26,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11864651,rssi=-52,link_speed_mbps=433,total_tx_success=177195,total_tx_retries=44912,total_tx_bad=1,total_rx_success=181306,total_radio_on_time_ms=4696535,total_radio_tx_time_ms=31663,total_radio_rx_time_ms=19691,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=231895,total_radio_on_freq_time_ms=4678168,total_beacon_rx=113834,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=27,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11867667,rssi=-52,link_speed_mbps=433,total_tx_success=177215,total_tx_retries=44913,total_tx_bad=1,total_rx_success=181322,total_radio_on_time_ms=4697403,total_radio_tx_time_ms=31669,total_radio_rx_time_ms=19695,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=232024,total_radio_on_freq_time_ms=4679036,total_beacon_rx=113863,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=28,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11870692,rssi=-52,link_speed_mbps=433,total_tx_success=177235,total_tx_retries=44915,total_tx_bad=1,total_rx_success=181337,total_radio_on_time_ms=4698160,total_radio_tx_time_ms=31674,total_radio_rx_time_ms=19697,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=232114,total_radio_on_freq_time_ms=4679793,total_beacon_rx=113891,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=29,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=11873713,rssi=-52,link_speed_mbps=433,total_tx_success=177255,total_tx_retries=44923,total_tx_bad=1,total_rx_success=181356,total_radio_on_time_ms=4698963,total_radio_tx_time_ms=31680,total_radio_rx_time_ms=19702,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=232209,total_radio_on_freq_time_ms=4680596,total_beacon_rx=113921,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=30,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12041223,rssi=-51,link_speed_mbps=433,total_tx_success=180613,total_tx_retries=45324,total_tx_bad=1,total_rx_success=184492,total_radio_on_time_ms=4778276,total_radio_tx_time_ms=32186,total_radio_rx_time_ms=20017,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=242679,total_radio_on_freq_time_ms=4759909,total_beacon_rx=115526,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=31,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12070227,rssi=-54,link_speed_mbps=433,total_tx_success=181563,total_tx_retries=45472,total_tx_bad=1,total_rx_success=185403,total_radio_on_time_ms=4797622,total_radio_tx_time_ms=32311,total_radio_rx_time_ms=20088,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=246517,total_radio_on_freq_time_ms=4779255,total_beacon_rx=115803,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=390,seq_num_inside_framework=32,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12073239,rssi=-55,link_speed_mbps=263,total_tx_success=181582,total_tx_retries=45485,total_tx_bad=1,total_rx_success=185419,total_radio_on_time_ms=4798515,total_radio_tx_time_ms=32316,total_radio_rx_time_ms=20092,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=246626,total_radio_on_freq_time_ms=4780148,total_beacon_rx=115832,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=390,seq_num_inside_framework=33,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12076247,rssi=-52,link_speed_mbps=234,total_tx_success=181607,total_tx_retries=45493,total_tx_bad=1,total_rx_success=185439,total_radio_on_time_ms=4799592,total_radio_tx_time_ms=32322,total_radio_rx_time_ms=20097,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=246816,total_radio_on_freq_time_ms=4781225,total_beacon_rx=115861,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=390,seq_num_inside_framework=34,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12079267,rssi=-51,link_speed_mbps=263,total_tx_success=181624,total_tx_retries=45499,total_tx_bad=1,total_rx_success=185457,total_radio_on_time_ms=4800901,total_radio_tx_time_ms=32329,total_radio_rx_time_ms=20103,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=247017,total_radio_on_freq_time_ms=4782534,total_beacon_rx=115889,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=35,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12082288,rssi=-52,link_speed_mbps=325,total_tx_success=181646,total_tx_retries=45499,total_tx_bad=1,total_rx_success=185474,total_radio_on_time_ms=4801957,total_radio_tx_time_ms=32337,total_radio_rx_time_ms=20108,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=247095,total_radio_on_freq_time_ms=4783590,total_beacon_rx=115919,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=36,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12085306,rssi=-51,link_speed_mbps=433,total_tx_success=181698,total_tx_retries=45499,total_tx_bad=1,total_rx_success=185524,total_radio_on_time_ms=4803270,total_radio_tx_time_ms=32345,total_radio_rx_time_ms=20114,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=247246,total_radio_on_freq_time_ms=4784903,total_beacon_rx=115947,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=390,seq_num_inside_framework=37,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12088326,rssi=-51,link_speed_mbps=433,total_tx_success=181884,total_tx_retries=45540,total_tx_bad=1,total_rx_success=185702,total_radio_on_time_ms=4806219,total_radio_tx_time_ms=32368,total_radio_rx_time_ms=20125,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=247754,total_radio_on_freq_time_ms=4787852,total_beacon_rx=115977,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=38,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12091350,rssi=-51,link_speed_mbps=433,total_tx_success=182057,total_tx_retries=45583,total_tx_bad=1,total_rx_success=185874,total_radio_on_time_ms=4809171,total_radio_tx_time_ms=32388,total_radio_rx_time_ms=20135,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=248325,total_radio_on_freq_time_ms=4790804,total_beacon_rx=116006,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=39,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12094367,rssi=-51,link_speed_mbps=433,total_tx_success=182079,total_tx_retries=45585,total_tx_bad=1,total_rx_success=185895,total_radio_on_time_ms=4810347,total_radio_tx_time_ms=32395,total_radio_rx_time_ms=20140,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=248367,total_radio_on_freq_time_ms=4791980,total_beacon_rx=116036,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=40,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12097386,rssi=-51,link_speed_mbps=433,total_tx_success=182095,total_tx_retries=45589,total_tx_bad=1,total_rx_success=185911,total_radio_on_time_ms=4811367,total_radio_tx_time_ms=32400,total_radio_rx_time_ms=20144,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=248543,total_radio_on_freq_time_ms=4793000,total_beacon_rx=116065,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=41,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12100408,rssi=-51,link_speed_mbps=433,total_tx_success=182115,total_tx_retries=45591,total_tx_bad=1,total_rx_success=185929,total_radio_on_time_ms=4812310,total_radio_tx_time_ms=32406,total_radio_rx_time_ms=20149,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=248686,total_radio_on_freq_time_ms=4793943,total_beacon_rx=116095,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=42,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12103427,rssi=-50,link_speed_mbps=433,total_tx_success=182138,total_tx_retries=45595,total_tx_bad=1,total_rx_success=185948,total_radio_on_time_ms=4813507,total_radio_tx_time_ms=32413,total_radio_rx_time_ms=20154,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=248920,total_radio_on_freq_time_ms=4795140,total_beacon_rx=116122,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=43,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12106448,rssi=-52,link_speed_mbps=433,total_tx_success=182157,total_tx_retries=45595,total_tx_bad=1,total_rx_success=185966,total_radio_on_time_ms=4814515,total_radio_tx_time_ms=32419,total_radio_rx_time_ms=20160,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=249002,total_radio_on_freq_time_ms=4796148,total_beacon_rx=116152,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=44,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12109469,rssi=-51,link_speed_mbps=433,total_tx_success=182176,total_tx_retries=45599,total_tx_bad=1,total_rx_success=185982,total_radio_on_time_ms=4815430,total_radio_tx_time_ms=32424,total_radio_rx_time_ms=20164,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=249103,total_radio_on_freq_time_ms=4797063,total_beacon_rx=116181,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=45,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12112495,rssi=-51,link_speed_mbps=433,total_tx_success=182195,total_tx_retries=45601,total_tx_bad=1,total_rx_success=185999,total_radio_on_time_ms=4816337,total_radio_tx_time_ms=32430,total_radio_rx_time_ms=20168,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=249217,total_radio_on_freq_time_ms=4797970,total_beacon_rx=116210,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=46,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12115519,rssi=-51,link_speed_mbps=433,total_tx_success=182218,total_tx_retries=45605,total_tx_bad=1,total_rx_success=186019,total_radio_on_time_ms=4817425,total_radio_tx_time_ms=32437,total_radio_rx_time_ms=20172,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=249380,total_radio_on_freq_time_ms=4799058,total_beacon_rx=116239,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=47,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12118539,rssi=-51,link_speed_mbps=433,total_tx_success=182240,total_tx_retries=45607,total_tx_bad=1,total_rx_success=186038,total_radio_on_time_ms=4818537,total_radio_tx_time_ms=32443,total_radio_rx_time_ms=20177,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=249468,total_radio_on_freq_time_ms=4800170,total_beacon_rx=116269,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=48,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12121563,rssi=-51,link_speed_mbps=433,total_tx_success=182256,total_tx_retries=45610,total_tx_bad=1,total_rx_success=186051,total_radio_on_time_ms=4819321,total_radio_tx_time_ms=32448,total_radio_rx_time_ms=20181,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=249519,total_radio_on_freq_time_ms=4800954,total_beacon_rx=116297,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=49,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12124589,rssi=-51,link_speed_mbps=433,total_tx_success=182326,total_tx_retries=45626,total_tx_bad=1,total_rx_success=186093,total_radio_on_time_ms=4820998,total_radio_tx_time_ms=32460,total_radio_rx_time_ms=20188,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=249774,total_radio_on_freq_time_ms=4802631,total_beacon_rx=116327,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=50,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12127615,rssi=-51,link_speed_mbps=433,total_tx_success=182345,total_tx_retries=45627,total_tx_bad=1,total_rx_success=186112,total_radio_on_time_ms=4822674,total_radio_tx_time_ms=32466,total_radio_rx_time_ms=20195,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=249984,total_radio_on_freq_time_ms=4804307,total_beacon_rx=116355,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=51,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12130652,rssi=-51,link_speed_mbps=433,total_tx_success=182368,total_tx_retries=45630,total_tx_bad=1,total_rx_success=186135,total_radio_on_time_ms=4823998,total_radio_tx_time_ms=32473,total_radio_rx_time_ms=20201,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=250118,total_radio_on_freq_time_ms=4805631,total_beacon_rx=116383,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=52,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12133678,rssi=-52,link_speed_mbps=351,total_tx_success=182387,total_tx_retries=45636,total_tx_bad=1,total_rx_success=186150,total_radio_on_time_ms=4824904,total_radio_tx_time_ms=32479,total_radio_rx_time_ms=20205,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=250211,total_radio_on_freq_time_ms=4806537,total_beacon_rx=116413,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=53,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
timestamp_ms=12209164,rssi=-51,link_speed_mbps=200,total_tx_success=185151,total_tx_retries=46112,total_tx_bad=1,total_rx_success=188792,total_radio_on_time_ms=4879451,total_radio_tx_time_ms=32841,total_radio_rx_time_ms=20410,total_scan_time_ms=17995,total_nan_scan_time_ms=0,total_background_scan_time_ms=0,total_roam_scan_time_ms=14597,total_pno_scan_time_ms=0,total_hotspot_2_scan_time_ms=0,wifi_score=60,wifi_usability_score=-1,seq_num_to_framework=-1,prediction_horizon_sec=-1,total_cca_busy_freq_time_ms=259150,total_radio_on_freq_time_ms=4861084,total_beacon_rx=117144,probe_status_since_last_update=1,probe_elapsed_time_ms_since_last_update=-1,probe_mcs_rate_since_last_update=-1,rx_link_speed_mbps=433,seq_num_inside_framework=54,is_same_bssid_and_freq=true,device_mobility_state=0,time_slice_duty_cycle_in_percent=-1,access_category=0,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=1,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=2,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,access_category=3,contention_time_min_micros=0,contention_time_max_micros=0,contention_time_avg_micros=0,contention_num_samples=0,channel_utilization_ratio=15,is_throughput_sufficient=true,is_wifi_scoring_enabled=true,is_cellular_data_available=false,sta_count=0,channel_utilization=0
mWifiUsabilityStatsList:
mMobilityStatePnoStatsMap:
device_mobility_state=0,num_times_entered_state=1,total_duration_ms=0,pno_duration_ms=0
WifiP2pMetrics:
mConnectionEvents:
mGroupEvents:
mWifiP2pStatsProto.numPersistentGroup=0
mWifiP2pStatsProto.numTotalPeerScans=0
mWifiP2pStatsProto.numTotalServiceScans=0
mDppMetrics:
---Easy Connect/DPP metrics---
mWifiDppLogProto.numDppConfiguratorInitiatorRequests=0
mWifiDppLogProto.numDppEnrolleeInitiatorRequests=0
mWifiDppLogProto.numDppEnrolleeResponderRequests=0
mWifiDppLogProto.numDppEnrolleeResponderSuccess=0
mWifiDppLogProto.numDppEnrolleeSuccess=0
mWifiDppLogProto.numDppR1CapableEnrolleeResponderDevices=0
mWifiDppLogProto.numDppR2CapableEnrolleeResponderDevices=0
mWifiDppLogProto.numDppR2EnrolleeResponderIncompatibleConfiguration=0
---End of Easy Connect/DPP metrics---
mWifiConfigStoreReadDurationHistogram:{0=2}
mWifiConfigStoreWriteDurationHistogram:{0=9, 1=1, 2=1}
mLinkProbeSuccessRssiCounts:{}
mLinkProbeFailureRssiCounts:{}
mLinkProbeSuccessLinkSpeedCounts:{}
mLinkProbeFailureLinkSpeedCounts:{}
mLinkProbeSuccessSecondsSinceLastTxSuccessHistogram:{}
mLinkProbeFailureSecondsSinceLastTxSuccessHistogram:{}
mLinkProbeSuccessElapsedTimeMsHistogram:{}
mLinkProbeFailureReasonCounts:{}
mLinkProbeExperimentProbeCounts:{}
mNetworkSelectionExperimentPairNumChoicesCounts:{Pair{42902385 42330058}=NetworkSelectionExperimentResults{sameSelectionNumChoicesCounter={1=1}, differentSelectionNumChoicesCounter={}}, Pair{42598152 42330058}=NetworkSelectionExperimentResults{sameSelectionNumChoicesCounter={1=1}, differentSelectionNumChoicesCounter={}}, Pair{42504592 42330058}=NetworkSelectionExperimentResults{sameSelectionNumChoicesCounter={1=1}, differentSelectionNumChoicesCounter={}}}
mLinkProbeStaEventCount:0
mWifiNetworkRequestApiLog:
num_apps: 0
num_concurrent_connection: 0
num_connect_on_primary_iface: 0
num_connect_on_secondary_iface: 0
num_connect_success_on_primary_iface: 0
num_connect_success_on_secondary_iface: 0
num_request: 0
num_user_approval_bypass: 0
num_user_reject: 0

mWifiNetworkRequestApiMatchSizeHistogram:
{}
mWifiNetworkRequestApiConnectionDurationSecOnPrimaryIfaceHistogram:
{}
mWifiNetworkRequestApiConnectionDurationSecOnSecondaryIfaceHistogram:
{}
mWifiNetworkRequestApiConcurrentConnectionDurationSecHistogram:
{}
mWifiNetworkSuggestionApiLog:
num_connect_failure: 0
num_connect_success: 0
num_modification: 0
num_multiple_suggestions: 0
num_priority_groups: 0
num_saved_networks_with_configured_suggestion: 0
user_revoke_app_suggestion_permission: 0

mWifiNetworkSuggestionApiMatchSizeHistogram:
{}
mWifiNetworkSuggestionApiAppTypeCounter:
{}
mWifiNetworkSuggestionPriorityGroups:
{}
mWifiNetworkSuggestionCoexistSavedNetworks:
{}
mUserApprovalSuggestionAppUiUserReaction:
mUserApprovalCarrierUiUserReaction:
mNetworkIdToNominatorId:
{0=2}
mWifiLockStats:
high_perf_active_time_ms: 0
low_latency_active_time_ms: 0

mWifiLockHighPerfAcqDurationSecHistogram:
{}
mWifiLockLowLatencyAcqDurationSecHistogram:
{}
mWifiLockHighPerfActiveSessionDurationSecHistogram:
{}
mWifiLockLowLatencyActiveSessionDurationSecHistogram:
{}
mWifiToggleStats:
num_toggle_off_normal: 0
num_toggle_off_privileged: 0
num_toggle_on_normal: 0
num_toggle_on_privileged: 0

mWifiLogProto.numAddOrUpdateNetworkCalls=0
mWifiLogProto.numEnableNetworkCalls=0
mWifiLogProto.txLinkSpeedCount2g={}
mWifiLogProto.txLinkSpeedCount5gLow={29=1, 175=1, 200=1, 234=3, 263=2, 325=2, 351=2, 390=4, 433=42}
mWifiLogProto.txLinkSpeedCount5gMid={}
mWifiLogProto.txLinkSpeedCount5gHigh={}
mWifiLogProto.txLinkSpeedCount6gLow={}
mWifiLogProto.txLinkSpeedCount6gMid={}
mWifiLogProto.txLinkSpeedCount6gHigh={}
mWifiLogProto.rxLinkSpeedCount2g={}
mWifiLogProto.rxLinkSpeedCount5gLow={6=1, 260=1, 263=2, 390=10, 433=44}
mWifiLogProto.rxLinkSpeedCount5gMid={}
mWifiLogProto.rxLinkSpeedCount5gHigh={}
mWifiLogProto.rxLinkSpeedCount6gLow={}
mWifiLogProto.rxLinkSpeedCount6gMid={}
mWifiLogProto.rxLinkSpeedCount6gHigh={}
mWifiLogProto.numIpRenewalFailure=0
mWifiLogProto.connectionDurationStats=connectionDurationSufficientThroughputMs=0, connectionDurationInSufficientThroughputMs=0, connectionDurationInSufficientThroughputDefaultWifiMs=0, connectionDurationCellularDataOffMs=145016
mWifiLogProto.isExternalWifiScorerOn=false
mWifiLogProto.wifiOffMetrics=numWifiOff=0, numWifiOffDeferring=0, numWifiOffDeferringTimeout=0, wifiOffDeferringTimeHistogram={}
mWifiLogProto.softApConfigLimitationMetrics=numSecurityTypeResetToDefault=0, numMaxClientSettingResetToDefault=0, numClientControlByUserResetToDefault=0, maxClientSettingWhenReachHistogram={}
mChannelUtilizationHistogram2G:
{}
mChannelUtilizationHistogramAbove2G:
{[Integer.MIN_VALUE,25)=55}
mTxThroughputMbpsHistogram2G:
{}
mRxThroughputMbpsHistogram2G:
{}
mTxThroughputMbpsHistogramAbove2G:
{[100,150)=2, [150,200)=5, [200,300)=4, [300,450)=44}
mRxThroughputMbpsHistogramAbove2G:
{[100,150)=1, [150,200)=1, [200,300)=2, [300,450)=51}
mCarrierWifiMetrics:
numConnectionSuccess=0, numConnectionAuthFailure=0, numConnectionNonAuthFailure0
FirstConnectAfterBootStats{wifiEnabledAtBoot=Attempt{timestampSinceBootMillis=15739,isSuccess=true},firstNetworkSelectionAttempt{timestampSinceBootMillis=24985,isSuccess=true},firstL2ConnectionAttempt{timestampSinceBootMillis=25305,isSuccess=true},firstL3ConnectionAttempt{timestampSinceBootMillis=25778,isSuccess=true}}
WifiToWifiSwitchStats{isMakeBeforeBreakSupported=false,wifiToWifiSwitchTriggerCount=0,makeBeforeBreakTriggerCount=0,makeBeforeBreakNoInternetCount=0,makeBeforeBreakRecoverPrimaryCount=0,makeBeforeBreakInternetValidatedCount=0,makeBeforeBreakSuccessCount=0,makeBeforeBreakLingerCompletedCount=0,makeBeforeBreakLingeringDurationSeconds={}}
mInitPartialScanTotalCount:
0
mInitPartialScanSuccessCount:
0
mInitPartialScanFailureCount:
0
mInitPartialScanSuccessHistogram:
{}
mInitPartialScanFailureHistogram:
{}

Dump of WifiNetworkSuggestionsManager
WifiNetworkSuggestionsManager - Networks Begin ----
WifiNetworkSuggestionsManager - Networks End ----

Dump of WifiBackupRestore

ScoringParams: rssi2=-83:-80:-73:-60,rssi5=-80:-77:-70:-57,rssi6=-80:-77:-70:-57,pps=0:16:100,horizon=15,nud=8,expid=0


Dump of WifiSettingsConfigStore
Settings:
wifi_native_supported_sta_bands=3
wifi_available_soft_ap_freqs_mhz=[2412,2417,2422,2427,2432,2437,2442,2447,2452,2457,2462,5745,5765,5785,5805]
wifi_p2p_pending_factory_reset=false
wifi_p2p_device_name=null
wifi_scan_always_enabled=false
wifi_sta_factory_mac_address=50:13:1d:bf:cf:d2
wifi_last_country_code=CZ
wifi_static_chip_info=[{"chipId":0,"chipCapabilities":-1,"availableModes":[{"id":0,"availableCombinations":[{"limits":[{"maxIfaces":1,"types":[0]},{"maxIfaces":1,"types":[3]}]}]},{"id":1,"availableCombinations":[{"limits":[{"maxIfaces":1,"types":[1]}]}]}]}]
wifi_scan_throttle_enabled=true
wifi_native_supported_features=562954192360861
wifi_verbose_logging_enabled=false

mRevertCountryCodeOnCellularLoss: true
DefaultCountryCode(system property): 00
DefaultCountryCode(config store): 00
mTelephonyCountryCode: CZ
mTelephonyCountryTimestamp: 12-01 16:23:20.143
mOverrideCountryCode: null
mAllCmmReadyTimestamp: 12-01 16:23:13.298
isAllCmmReady: false
mAmmToReadyForChangeMap: {ConcreteClientModeManager{id=15739 iface=wlan0 role=ROLE_CLIENT_PRIMARY}=false}
mDisconnectWifiToForceUpdateCount: 0
mDriverCountryCode: CZ
mDriverCountryCodeUpdatedTimestamp: 12-01 16:23:20.147
mFrameworkCountryCode: null
mFrameworkCountryCodeUpdatedTimestamp: N/A
isDriverSupportedRegChangedEvent: false
providerId=7, ScoreFilter=Score(Policies : 0), Filter=[ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&NOT_ROAMING&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED LinkUpBandwidth>=1048576Kbps LinkDnBandwidth>=1048576Kbps Specifier: <android.net.MatchAllNetworkSpecifier@0> UnderlyingNetworks: Null], requests=59
  {NetworkRequest [ REQUEST id=25, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10221 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=33, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10199 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=31, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10203 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=1, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&NOT_VCN_MANAGED RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=37, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=21, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10251 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=60, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.android.phone UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=35, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10112 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=62, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.android.phone UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=19, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10255 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=43, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=39, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1073 RequestorUid: 1073 RequestorPkg: com.google.android.networkstack UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=15, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10328 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=27, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10218 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=17, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10289 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=29, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=53, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10306 RequestorUid: 10306 RequestorPkg: com.android.systemui UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=23, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10242 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=64, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10306 RequestorUid: 10306 RequestorPkg: com.android.systemui UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=51, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10306 RequestorUid: 10306 RequestorPkg: com.android.systemui UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=46, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=57, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.android.phone UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=7, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=68, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=70, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10146 RequestorUid: 10146 RequestorPkg: com.qualcomm.qti.cne UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=78, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10151 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=80, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10183 RequestorUid: 10183 RequestorPkg: com.google.android.apps.messaging UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=82, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10183 RequestorUid: 10183 RequestorPkg: com.google.android.apps.messaging UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=84, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10183 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=86, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10256 RequestorUid: 10256 RequestorPkg: com.motorola.ccc.ota UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=88, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=90, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10242 RequestorUid: 10242 RequestorPkg: com.google.android.apps.photos UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=92, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10213 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=95, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=98, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 10212 RequestorPkg: com.android.vending UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=102, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10238 RequestorUid: 10238 RequestorPkg: com.motorola.timeweatherwidget UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=104, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 10212 RequestorPkg: com.android.vending UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=106, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10238 RequestorUid: 10238 RequestorPkg: com.motorola.timeweatherwidget UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=109, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.qti.dpmserviceapp UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=111, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10172 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=113, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10316 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=117, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10176 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=119, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10327 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=125, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10164 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=131, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10170 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=137, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10208 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=139, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10177 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=141, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=144, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=146, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10336 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=148, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10229 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=150, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=156, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 10212 RequestorPkg: com.android.vending UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=159, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=162, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=165, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10218 RequestorUid: 10218 RequestorPkg: com.google.android.calendar UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=167, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10155 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=169, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10172 RequestorUid: 10172 RequestorPkg: com.google.android.dialer UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=172, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10229 RequestorUid: 10229 RequestorPkg: com.google.android.inputmethod.latin UnderlyingNetworks: Null] ], requested=true}
WifiNetworkFactory: mGenericConnectionReqCount 59
WifiNetworkFactory: mActiveSpecificNetworkRequest null
WifiNetworkFactory: mUserApprovedAccessPointMap {}
providerId=8, ScoreFilter=Score(Policies : 0), Filter=[ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&NOT_ROAMING&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED LinkUpBandwidth>=1048576Kbps LinkDnBandwidth>=1048576Kbps Specifier: <android.net.MatchAllNetworkSpecifier@0> UnderlyingNetworks: Null], requests=59
  {NetworkRequest [ REQUEST id=25, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10221 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=33, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10199 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=31, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10203 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=1, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&NOT_VCN_MANAGED RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=37, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=21, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10251 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=60, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.android.phone UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=35, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10112 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=62, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.android.phone UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=19, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10255 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=43, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=39, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1073 RequestorUid: 1073 RequestorPkg: com.google.android.networkstack UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=15, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10328 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=27, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10218 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=17, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10289 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=29, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=53, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10306 RequestorUid: 10306 RequestorPkg: com.android.systemui UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=23, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10242 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=64, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10306 RequestorUid: 10306 RequestorPkg: com.android.systemui UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=51, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10306 RequestorUid: 10306 RequestorPkg: com.android.systemui UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=46, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=57, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.android.phone UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=7, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=68, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=70, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10146 RequestorUid: 10146 RequestorPkg: com.qualcomm.qti.cne UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=78, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10151 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=80, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10183 RequestorUid: 10183 RequestorPkg: com.google.android.apps.messaging UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=82, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10183 RequestorUid: 10183 RequestorPkg: com.google.android.apps.messaging UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=84, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10183 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=86, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10256 RequestorUid: 10256 RequestorPkg: com.motorola.ccc.ota UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=88, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=90, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10242 RequestorUid: 10242 RequestorPkg: com.google.android.apps.photos UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=92, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10213 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=95, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=98, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 10212 RequestorPkg: com.android.vending UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=102, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10238 RequestorUid: 10238 RequestorPkg: com.motorola.timeweatherwidget UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=104, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 10212 RequestorPkg: com.android.vending UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=106, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10238 RequestorUid: 10238 RequestorPkg: com.motorola.timeweatherwidget UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=109, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.qti.dpmserviceapp UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=111, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10172 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=113, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10316 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=117, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10176 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=119, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10327 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=125, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10164 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=131, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10170 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=137, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10208 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=139, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10177 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=141, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=144, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=146, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10336 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=148, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10229 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=150, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=156, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 10212 RequestorPkg: com.android.vending UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=159, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=162, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=165, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10218 RequestorUid: 10218 RequestorPkg: com.google.android.calendar UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=167, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10155 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=169, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10172 RequestorUid: 10172 RequestorPkg: com.google.android.dialer UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=172, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10229 RequestorUid: 10229 RequestorPkg: com.google.android.inputmethod.latin UnderlyingNetworks: Null] ], requested=true}
UntrustedWifiNetworkFactory: mConnectionReqCount 0
providerId=10, ScoreFilter=Score(Policies : 0), Filter=[ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&NOT_ROAMING&NOT_CONGESTED&NOT_SUSPENDED&OEM_PAID&OEM_PRIVATE&NOT_VCN_MANAGED LinkUpBandwidth>=1048576Kbps LinkDnBandwidth>=1048576Kbps Specifier: <android.net.MatchAllNetworkSpecifier@0> UnderlyingNetworks: Null], requests=59
  {NetworkRequest [ REQUEST id=25, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10221 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=33, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10199 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=31, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10203 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=1, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&NOT_VCN_MANAGED RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=37, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=21, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10251 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=60, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.android.phone UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=35, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10112 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=62, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.android.phone UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=19, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10255 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=43, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=39, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1073 RequestorUid: 1073 RequestorPkg: com.google.android.networkstack UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=15, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10328 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=27, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10218 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=17, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10289 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=29, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=53, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10306 RequestorUid: 10306 RequestorPkg: com.android.systemui UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=23, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10242 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=64, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10306 RequestorUid: 10306 RequestorPkg: com.android.systemui UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=51, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10306 RequestorUid: 10306 RequestorPkg: com.android.systemui UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=46, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=57, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.android.phone UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=7, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=68, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=70, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10146 RequestorUid: 10146 RequestorPkg: com.qualcomm.qti.cne UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=78, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10151 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=80, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10183 RequestorUid: 10183 RequestorPkg: com.google.android.apps.messaging UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=82, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10183 RequestorUid: 10183 RequestorPkg: com.google.android.apps.messaging UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=84, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10183 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=86, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10256 RequestorUid: 10256 RequestorPkg: com.motorola.ccc.ota UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=88, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=90, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10242 RequestorUid: 10242 RequestorPkg: com.google.android.apps.photos UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=92, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10213 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=95, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=98, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 10212 RequestorPkg: com.android.vending UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=102, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10238 RequestorUid: 10238 RequestorPkg: com.motorola.timeweatherwidget UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=104, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 10212 RequestorPkg: com.android.vending UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=106, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10238 RequestorUid: 10238 RequestorPkg: com.motorola.timeweatherwidget UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=109, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.qti.dpmserviceapp UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=111, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10172 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=113, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10316 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=117, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10176 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=119, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10327 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=125, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10164 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=131, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10170 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=137, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10208 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=139, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10177 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=141, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=144, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=146, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10336 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=148, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10229 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=150, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=156, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 10212 RequestorPkg: com.android.vending UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=159, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=162, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=165, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10218 RequestorUid: 10218 RequestorPkg: com.google.android.calendar UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=167, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10155 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=169, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10172 RequestorUid: 10172 RequestorPkg: com.google.android.dialer UnderlyingNetworks: Null] ], requested=true}
  {NetworkRequest [ REQUEST id=172, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10229 RequestorUid: 10229 RequestorPkg: com.google.android.inputmethod.latin UnderlyingNetworks: Null] ], requested=true}
OemPaidWifiNetworkFactory: mOemPaidConnectionReqCount 0
OemPaidWifiNetworkFactory: mOemPrivateConnectionReqCount 0
providerId=9, ScoreFilter=Score(Policies : 0), Filter=[ Transports: WIFI Capabilities: NOT_METERED&INTERNET&TRUSTED&NOT_VPN&NOT_ROAMING&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED LinkUpBandwidth>=1048576Kbps LinkDnBandwidth>=1048576Kbps Specifier: <android.net.MatchAllNetworkSpecifier@0> UnderlyingNetworks: Null], requests=0
RestrictedWifiNetworkFactory: mConnectionReqCount 0
providerId=11, ScoreFilter=Score(Policies : 0), Filter=[ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&NOT_ROAMING&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED LinkUpBandwidth>=1048576Kbps LinkDnBandwidth>=1048576Kbps Specifier: <android.net.MatchAllNetworkSpecifier@0> UnderlyingNetworks: Null], requests=59
  {NetworkRequest [ REQUEST id=25, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10221 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=33, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10199 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=31, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10203 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=1, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&NOT_VCN_MANAGED RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=37, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=21, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10251 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=60, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.android.phone UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=35, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10112 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=62, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.android.phone UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=19, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10255 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=43, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=39, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1073 RequestorUid: 1073 RequestorPkg: com.google.android.networkstack UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=15, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10328 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=27, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10218 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=17, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10289 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=29, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=53, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10306 RequestorUid: 10306 RequestorPkg: com.android.systemui UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=23, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10242 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=64, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10306 RequestorUid: 10306 RequestorPkg: com.android.systemui UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=51, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10306 RequestorUid: 10306 RequestorPkg: com.android.systemui UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=46, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=57, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.android.phone UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=7, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=68, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1000 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=70, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10146 RequestorUid: 10146 RequestorPkg: com.qualcomm.qti.cne UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=78, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10151 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=80, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10183 RequestorUid: 10183 RequestorPkg: com.google.android.apps.messaging UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=82, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10183 RequestorUid: 10183 RequestorPkg: com.google.android.apps.messaging UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=84, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10183 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=86, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10256 RequestorUid: 10256 RequestorPkg: com.motorola.ccc.ota UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=88, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=90, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10242 RequestorUid: 10242 RequestorPkg: com.google.android.apps.photos UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=92, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10213 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=95, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=98, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 10212 RequestorPkg: com.android.vending UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=102, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10238 RequestorUid: 10238 RequestorPkg: com.motorola.timeweatherwidget UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=104, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 10212 RequestorPkg: com.android.vending UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=106, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10238 RequestorUid: 10238 RequestorPkg: com.motorola.timeweatherwidget UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=109, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 1001 RequestorUid: 1001 RequestorPkg: com.qti.dpmserviceapp UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=111, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10172 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=113, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10316 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=117, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10176 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=119, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10327 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=125, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10164 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=131, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10170 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=137, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10208 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=139, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10177 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=141, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=144, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=146, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10336 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=148, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10229 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=150, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=156, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10212 RequestorUid: 10212 RequestorPkg: com.android.vending UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=159, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=162, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10181 RequestorUid: 10181 RequestorPkg: com.google.android.gms UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=165, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10218 RequestorUid: 10218 RequestorPkg: com.google.android.calendar UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=167, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10155 RequestorUid: 1000 RequestorPkg: android UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=169, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10172 RequestorUid: 10172 RequestorPkg: com.google.android.dialer UnderlyingNetworks: Null] ], requested=false}
  {NetworkRequest [ REQUEST id=172, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED Uid: 10229 RequestorUid: 10229 RequestorPkg: com.google.android.inputmethod.latin UnderlyingNetworks: Null] ], requested=false}
Dump of MultiInternetWifiNetworkFactory
2024-12-01T16:23:13.081170 - handleScreenStateChanged: screenOn=true
2024-12-01T16:23:13.081369 - startConnectivityScan: screenOn=true wifiState=unknown scanImmediately=false wifiEnabled=false mAutoJoinEnabled=false mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=false isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T16:23:13.300681 - Set WiFi enabled
2024-12-01T16:23:13.300704 - Stopping WifiConnectivityManager
2024-12-01T16:23:15.327408 - handleConnectionStateChanged: state=disconnected
2024-12-01T16:23:15.328186 - startConnectivityScan: screenOn=true wifiState=disconnected scanImmediately=true wifiEnabled=true mAutoJoinEnabled=false mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=false isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T16:23:18.599823 - setTrustedConnectionAllowed: allowed=true
2024-12-01T16:23:18.599856 - Starting up WifiConnectivityManager
2024-12-01T16:23:18.603798 - startConnectivityScan: screenOn=true wifiState=disconnected scanImmediately=true wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T16:23:18.604983 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T16:23:22.276178 - AllSingleScanListener onResults: start network selection
2024-12-01T16:23:22.280313 - Networks filtered out due to invalid SSID: 46:3f:8c:cb:72:f2 / 42:ed:00:a7:5a:25 / 42:ed:00:a7:5a:24 / 7a:c5:7d:57:a0:12 / 
2024-12-01T16:23:22.280380 - Networks filtered out due to low signal strength: KWeise:52:f4:ab:16:5a:c8(2.4GHz)-91 / Rehabilitace:5c:f4:ab:16:5a:cb(2.4GHz)-90 / STARNET_Kopecny:1c:3b:f3:13:85:39(2.4GHz)-84 / Bišonci:b4:b0:24:dc:02:03(2.4GHz)-86 / Kollros:40:3f:8c:a6:f5:1d(2.4GHz)-82 / SEC_LinkShare_917fdd:a0:0b:ba:f9:25:56(2.4GHz)-92 / luta_5G:40:3f:8c:cb:72:f1(5GHz)-79 / Vodafone-ED2E:ac:22:05:e0:c7:39(5GHz)-79 / T-787912:08:7b:12:98:46:43(5GHz)-84 / T-137453:08:7b:12:b7:f5:82(5GHz)-82 / 
2024-12-01T16:23:22.283251 - About to run SavedNetworkNominator :
2024-12-01T16:23:22.288714 - About to run NetworkSuggestionNominator :
2024-12-01T16:23:22.289927 - did not see any matching auto-join enabled network suggestions.
2024-12-01T16:23:22.293362 - removeAutoUpgradeSecurityParamsIfNecessary: SSID: "pg_star_5G" baseSecurityType: 2 upgradableSecurityType: 4 isLegacyNetworkInRange: true isUpgradableTypeOnlyInRange: false isAutoUpgradeEnabled: true
2024-12-01T16:23:22.293553 - Remove upgradable security type 4 for the network.
2024-12-01T16:23:22.294817 - removeAutoUpgradeSecurityParamsIfNecessary: SSID: "pg_star_5G" baseSecurityType: 0 upgradableSecurityType: 6 isLegacyNetworkInRange: false isUpgradableTypeOnlyInRange: false isAutoUpgradeEnabled: true
2024-12-01T16:23:22.297463 - removeAutoUpgradeSecurityParamsIfNecessary: SSID: "pg_star_5G" baseSecurityType: 3 upgradableSecurityType: 9 isLegacyNetworkInRange: false isUpgradableTypeOnlyInRange: false isAutoUpgradeEnabled: true
2024-12-01T16:23:22.298320 - Candidate { config = 0, bssid = 50:88:11:a1:34:cd, freq = 5180, channelWidth = 2, rssi = -64, Mbps = 209, nominator = 0, pInternet = 50, saved, trusted, secure }
2024-12-01T16:23:22.298460 - BubbleFunScorer_v2 would choose 0 score 76.69390576210597+/-4.901295584341469 expid 42598152
2024-12-01T16:23:22.298548 - CompatibilityScorer would choose 0 score 203.936+/-10.0 expid 42504592
2024-12-01T16:23:22.326892 - ScoreCardBasedScorer would choose 0 score 184.0+/-10.0 expid 42902385
2024-12-01T16:23:22.327450 - ThroughputScorer chooses 0 score 3656.936+/-10.0 expid 42330058
2024-12-01T16:23:22.328370 - AllSingleScanListener:  WNS candidate-"pg_star_5G"
2024-12-01T16:23:22.329756 - connectToNetwork(ConcreteClientModeManager{id=15739 iface=wlan0 role=ROLE_CLIENT_PRIMARY}): Connect to "pg_star_5G" : any from Disconnected
2024-12-01T16:23:22.329866 - noteConnectionAttempt: timeMillis=24985
2024-12-01T16:23:22.531189 - handleConnectionStateChanged: state=transitioning
2024-12-01T16:23:22.531604 - startConnectivityScan: screenOn=true wifiState=transitioning scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T16:23:22.531692 - cancelPeriodicScanTimer
2024-12-01T16:23:23.081730 - handleConnectionStateChanged: state=connected
2024-12-01T16:23:23.082691 - startConnectivityScan: screenOn=true wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T16:23:23.082803 - Last periodic single scan started 4478ms ago, defer this new scan request.
2024-12-01T16:23:23.082829 - schedulePeriodicScanTimer intervalMs 15522
2024-12-01T16:23:30.412915 - handleScreenStateChanged: screenOn=false
2024-12-01T16:23:30.413049 - startConnectivityScan: screenOn=false wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T16:23:30.413065 - cancelPeriodicScanTimer
2024-12-01T19:29:34.121216 - handleScreenStateChanged: screenOn=true
2024-12-01T19:29:34.121329 - startConnectivityScan: screenOn=true wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T19:29:34.121823 - Current connected network: 0
2024-12-01T19:29:34.121957 - No partial scan because firmware roaming is supported.
2024-12-01T19:29:34.121972 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:29:46.498512 - handleScreenStateChanged: screenOn=false
2024-12-01T19:29:46.498889 - startConnectivityScan: screenOn=false wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T19:29:46.498937 - cancelPeriodicScanTimer
2024-12-01T19:39:41.566285 - handleScreenStateChanged: screenOn=true
2024-12-01T19:39:41.566669 - startConnectivityScan: screenOn=true wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T19:39:41.566971 - Current connected network: 0
2024-12-01T19:39:41.567263 - No partial scan because firmware roaming is supported.
2024-12-01T19:39:41.567380 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:40:01.570187 - Current connected network: 0
2024-12-01T19:40:01.570811 - No partial scan because firmware roaming is supported.
2024-12-01T19:40:01.570870 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:40:21.573437 - Current connected network: 0
2024-12-01T19:40:21.573963 - No partial scan because firmware roaming is supported.
2024-12-01T19:40:21.574032 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:40:41.578074 - Current connected network: 0
2024-12-01T19:40:41.578786 - No partial scan because firmware roaming is supported.
2024-12-01T19:40:41.578892 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:40:52.618519 - handleScreenStateChanged: screenOn=false
2024-12-01T19:40:52.618864 - startConnectivityScan: screenOn=false wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T19:40:52.618917 - cancelPeriodicScanTimer
2024-12-01T19:44:04.543374 - handleScreenStateChanged: screenOn=true
2024-12-01T19:44:04.543662 - startConnectivityScan: screenOn=true wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T19:44:04.543881 - Current connected network: 0
2024-12-01T19:44:04.544110 - No partial scan because firmware roaming is supported.
2024-12-01T19:44:04.544135 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:44:24.547717 - Current connected network: 0
2024-12-01T19:44:24.548503 - No partial scan because firmware roaming is supported.
2024-12-01T19:44:24.548613 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:44:44.550902 - Current connected network: 0
2024-12-01T19:44:44.551593 - No partial scan because firmware roaming is supported.
2024-12-01T19:44:44.551691 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:45:04.555535 - Current connected network: 0
2024-12-01T19:45:04.556177 - No partial scan because firmware roaming is supported.
2024-12-01T19:45:04.556242 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:45:12.543290 - handleScreenStateChanged: screenOn=false
2024-12-01T19:45:12.543607 - startConnectivityScan: screenOn=false wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T19:45:12.543648 - cancelPeriodicScanTimer
Dump of MultiInternetManager
WifiMultiInternet: mStaConcurrencyMultiInternetMode 0
Dump of SsidTranslator
mCurrentLocaleCharset: null
mCharsetsPerLocaleLanguage Begin ---
zh: GBK
mCharsetsPerLocaleLanguage End ---
mTranslatedBssids Begin ---
mTranslatedBssids End ---
mUntranslatedBssids Begin ---
mUntranslatedBssids End ---
Wlan Wake Reasons: totalCmdEventWake 0 totalDriverFwLocalWake 0 totalRxDataWake 0 rxUnicast 0 rxMulticast 0 rxBroadcast 0 icmp 0 icmp6 0 icmp6Ra 0 icmp6Na 0 icmp6Ns 0 ipv4RxMulticast 0 ipv6Multicast 0 otherRxMulticast 0

Dump of WifiConfigManager
WifiConfigManager - Log Begin ----
2024-12-01T16:23:13.075851 - clearInternalData: Clearing all internal data
WifiConfigManager - Log End ----
WifiConfigManager - Configured networks Begin ----
* ID: 0 SSID: "pg_star_5G" PROVIDER-NAME: null BSSID: null FQDN: null HOME-PROVIDER-NETWORK: false PRIO: 0 HIDDEN: false PMF: false CarrierId: -1 SubscriptionId: -1 SubscriptionGroup: null Currently Connected: true User Selected: false
 NetworkSelectionStatus NETWORK_SELECTION_ENABLED
 hasEverConnected: true
 hasNeverDetectedCaptivePortal: true
 mCandidateSecurityParams: Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
 mLastUsedSecurityParams: Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
 numAssociation 1
 validatedInternetAccess shared trusted
 macRandomizationSetting: 3
 mRandomizedMacAddress: ee:bb:12:2c:8d:d6
 randomizedMacExpirationTimeMs: 12-02 04:23:23.027
 randomizedMacLastModifiedTimeMs: <none>
 deletionPriority: 0
 KeyMgmt: WPA_PSK Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 PSK/SAE: *
SecurityParams List:
Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
Security Parameters:
 Type: 4
 Enabled: true
 KeyMgmt: SAE
 Protocols: RSN
 AuthAlgorithms:
 PairwiseCiphers: CCMP GCMP_256 GCMP_128
 GroupCiphers: CCMP GCMP_256 GCMP_128
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: true
 IsAddedByAutoUpgrade: true
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false

Enterprise config:
 ocsp: 0
 trust_on_first_use: false
 user_approve_no_ca_cert: false
 selected_rcoi: 0
 minimum_tls_version: 0
 enable_conservative_peer_mode: false
IP config:
IP assignment: DHCP
Proxy settings: NONE
 cuid=10295 cname=com.google.android.setupwizard luid=10295 lname=com.google.android.setupwizard lcuid=10295 allowAutojoin=true noInternetAccessExpected=false mostRecentlyConnected=true 
lastConnected: 12-01 16:23:23.083 

numRebootsSinceLastUse: 0
recentFailure: Association Rejection code: 0, last update time: 0
bssidAllowlist unset
IsDppConfigurator: true
HasEncryptedPreSharedKey: false

WifiConfigManager - Configured networks End ----
WifiConfigManager - ConfigurationMap Begin ----
mPerId={0=* ID: 0 SSID: "pg_star_5G" PROVIDER-NAME: null BSSID: null FQDN: null HOME-PROVIDER-NETWORK: false PRIO: 0 HIDDEN: false PMF: false CarrierId: -1 SubscriptionId: -1 SubscriptionGroup: null Currently Connected: true User Selected: false
 NetworkSelectionStatus NETWORK_SELECTION_ENABLED
 hasEverConnected: true
 hasNeverDetectedCaptivePortal: true
 mCandidateSecurityParams: Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
 mLastUsedSecurityParams: Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
 numAssociation 1
 validatedInternetAccess shared trusted
 macRandomizationSetting: 3
 mRandomizedMacAddress: ee:bb:12:2c:8d:d6
 randomizedMacExpirationTimeMs: 12-02 04:23:23.027
 randomizedMacLastModifiedTimeMs: <none>
 deletionPriority: 0
 KeyMgmt: WPA_PSK Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 PSK/SAE: *
SecurityParams List:
Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
Security Parameters:
 Type: 4
 Enabled: true
 KeyMgmt: SAE
 Protocols: RSN
 AuthAlgorithms:
 PairwiseCiphers: CCMP GCMP_256 GCMP_128
 GroupCiphers: CCMP GCMP_256 GCMP_128
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: true
 IsAddedByAutoUpgrade: true
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false

Enterprise config:
 ocsp: 0
 trust_on_first_use: false
 user_approve_no_ca_cert: false
 selected_rcoi: 0
 minimum_tls_version: 0
 enable_conservative_peer_mode: false
IP config:
IP assignment: DHCP
Proxy settings: NONE
 cuid=10295 cname=com.google.android.setupwizard luid=10295 lname=com.google.android.setupwizard lcuid=10295 allowAutojoin=true noInternetAccessExpected=false mostRecentlyConnected=true 
lastConnected: 12-01 16:23:23.083 

numRebootsSinceLastUse: 0
recentFailure: Association Rejection code: 0, last update time: 0
bssidAllowlist unset
IsDppConfigurator: true
HasEncryptedPreSharedKey: false
}
mPerIDForCurrentUser={0=* ID: 0 SSID: "pg_star_5G" PROVIDER-NAME: null BSSID: null FQDN: null HOME-PROVIDER-NETWORK: false PRIO: 0 HIDDEN: false PMF: false CarrierId: -1 SubscriptionId: -1 SubscriptionGroup: null Currently Connected: true User Selected: false
 NetworkSelectionStatus NETWORK_SELECTION_ENABLED
 hasEverConnected: true
 hasNeverDetectedCaptivePortal: true
 mCandidateSecurityParams: Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
 mLastUsedSecurityParams: Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
 numAssociation 1
 validatedInternetAccess shared trusted
 macRandomizationSetting: 3
 mRandomizedMacAddress: ee:bb:12:2c:8d:d6
 randomizedMacExpirationTimeMs: 12-02 04:23:23.027
 randomizedMacLastModifiedTimeMs: <none>
 deletionPriority: 0
 KeyMgmt: WPA_PSK Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 PSK/SAE: *
SecurityParams List:
Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
Security Parameters:
 Type: 4
 Enabled: true
 KeyMgmt: SAE
 Protocols: RSN
 AuthAlgorithms:
 PairwiseCiphers: CCMP GCMP_256 GCMP_128
 GroupCiphers: CCMP GCMP_256 GCMP_128
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: true
 IsAddedByAutoUpgrade: true
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false

Enterprise config:
 ocsp: 0
 trust_on_first_use: false
 user_approve_no_ca_cert: false
 selected_rcoi: 0
 minimum_tls_version: 0
 enable_conservative_peer_mode: false
IP config:
IP assignment: DHCP
Proxy settings: NONE
 cuid=10295 cname=com.google.android.setupwizard luid=10295 lname=com.google.android.setupwizard lcuid=10295 allowAutojoin=true noInternetAccessExpected=false mostRecentlyConnected=true 
lastConnected: 12-01 16:23:23.083 

numRebootsSinceLastUse: 0
recentFailure: Association Rejection code: 0, last update time: 0
bssidAllowlist unset
IsDppConfigurator: true
HasEncryptedPreSharedKey: false
}
mScanResultMatchInfoMapForCurrentUser={ScanResultMatchInfo: SSID: "pg_star_5G", from scan result: false, SecurityParams List:Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
Security Parameters:
 Type: 4
 Enabled: true
 KeyMgmt: SAE
 Protocols: RSN
 AuthAlgorithms:
 PairwiseCiphers: CCMP GCMP_256 GCMP_128
 GroupCiphers: CCMP GCMP_256 GCMP_128
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: true
 IsAddedByAutoUpgrade: true
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
=* ID: 0 SSID: "pg_star_5G" PROVIDER-NAME: null BSSID: null FQDN: null HOME-PROVIDER-NETWORK: false PRIO: 0 HIDDEN: false PMF: false CarrierId: -1 SubscriptionId: -1 SubscriptionGroup: null Currently Connected: true User Selected: false
 NetworkSelectionStatus NETWORK_SELECTION_ENABLED
 hasEverConnected: true
 hasNeverDetectedCaptivePortal: true
 mCandidateSecurityParams: Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
 mLastUsedSecurityParams: Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
 numAssociation 1
 validatedInternetAccess shared trusted
 macRandomizationSetting: 3
 mRandomizedMacAddress: ee:bb:12:2c:8d:d6
 randomizedMacExpirationTimeMs: 12-02 04:23:23.027
 randomizedMacLastModifiedTimeMs: <none>
 deletionPriority: 0
 KeyMgmt: WPA_PSK Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 PSK/SAE: *
SecurityParams List:
Security Parameters:
 Type: 2
 Enabled: true
 KeyMgmt: WPA_PSK
 Protocols: WPA RSN
 AuthAlgorithms:
 PairwiseCiphers: TKIP CCMP
 GroupCiphers: WEP40 WEP104 TKIP CCMP
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: false
 IsAddedByAutoUpgrade: false
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false
Security Parameters:
 Type: 4
 Enabled: true
 KeyMgmt: SAE
 Protocols: RSN
 AuthAlgorithms:
 PairwiseCiphers: CCMP GCMP_256 GCMP_128
 GroupCiphers: CCMP GCMP_256 GCMP_128
 GroupMgmtCiphers:
 SuiteBCiphers:
 RequirePmf: true
 IsAddedByAutoUpgrade: true
 IsSaeH2eOnlyMode: false
 IsSaePkOnlyMode: false

Enterprise config:
 ocsp: 0
 trust_on_first_use: false
 user_approve_no_ca_cert: false
 selected_rcoi: 0
 minimum_tls_version: 0
 enable_conservative_peer_mode: false
IP config:
IP assignment: DHCP
Proxy settings: NONE
 cuid=10295 cname=com.google.android.setupwizard luid=10295 lname=com.google.android.setupwizard lcuid=10295 allowAutojoin=true noInternetAccessExpected=false mostRecentlyConnected=true 
lastConnected: 12-01 16:23:23.083 

numRebootsSinceLastUse: 0
recentFailure: Association Rejection code: 0, last update time: 0
bssidAllowlist unset
IsDppConfigurator: true
HasEncryptedPreSharedKey: false
}
mCurrentUserId=0
WifiConfigManager - ConfigurationMap End ----
WifiConfigManager - Next network ID to be allocated 1
WifiConfigManager - Last selected network ID -1
WifiConfigManager - PNO scan frequency culling enabled = true
WifiConfigManager - PNO scan recency sorting enabled = true
Dump of WifiConfigStore
WifiConfigStore - Store File Begin ----
Name: /data/misc/apexdata/com.android.wifi/WifiConfigStore.xml, File Id: 0, Credentials encrypted: false
Name: /data/misc/apexdata/com.android.wifi/WifiConfigStoreSoftAp.xml, File Id: 1, Credentials encrypted: false
Name: /data/misc_ce/0/apexdata/com.android.wifi/WifiConfigStore.xml, File Id: 2, Credentials encrypted: false
Name: /data/misc_ce/0/apexdata/com.android.wifi/WifiConfigStoreNetworkSuggestions.xml, File Id: 3, Credentials encrypted: false
WifiConfigStore - Store Data Begin ----
StoreData => Name: WifiCarrierInfoStoreManagerDataStores, File Id: 0, File Name: WifiConfigStore.xml
StoreData => Name: ImsiPrivacyProtectionExemptionMap, File Id: 2, File Name: WifiConfigStore.xml
StoreData => Name: NetworkList, File Id: 0, File Name: WifiConfigStore.xml
StoreData => Name: NetworkList, File Id: 2, File Name: WifiConfigStore.xml
StoreData => Name: MacAddressMap, File Id: 0, File Name: WifiConfigStore.xml
StoreData => Name: Settings, File Id: 0, File Name: WifiConfigStore.xml
StoreData => Name: NetworkSuggestionMap, File Id: 3, File Name: WifiConfigStoreNetworkSuggestions.xml
StoreData => Name: PasspointConfigData, File Id: 2, File Name: WifiConfigStore.xml
StoreData => Name: PasspointConfigData, File Id: 0, File Name: WifiConfigStore.xml
StoreData => Name: OpenNetworkNotifierBlacklistConfigData, File Id: 2, File Name: WifiConfigStore.xml
StoreData => Name: NetworkRequestMap, File Id: 2, File Name: WifiConfigStore.xml
StoreData => Name: SoftAp, File Id: 1, File Name: WifiConfigStoreSoftAp.xml
StoreData => Name: WakeupConfigStoreData, File Id: 2, File Name: WifiConfigStore.xml
WifiConfigStore - Store Data End ----
WifiCarrierInfoManager: 
mImsiEncryptionInfoAvailable={}
mImsiPrivacyProtectionExemptionMap={}
mMergedCarrierNetworkOffloadMap={}
mSubIdToSimInfoSparseArray={}
mActiveSubInfos=null
mCachedCarrierConfigPerSubId={}
mCarrierAutoJoinResetCheckedForOobPseudonym=false
mCarrierPrivilegedPackagesBySimSlot=[ 
]
NonCarrierMergedNetworksStatusTracker - Log Begin ----
mSubscriptionId=-1
dumpTimeMs=12376803
mDisableStartTimeMs=0
mMinDisableDurationMs=0
mMaxDisableDurationMs=0
mTemporarilyDisabledNonCarrierMergedListAtStart=
NonCarrierMergedNetworksStatusTracker - Log End ----

Dump of PasspointManager
mEnabled: true
PasspointManager - Providers Begin ---
PasspointManager - Providers End ---
PasspointManager - Next provider ID to be assigned 0
Last sweep 3:26:01.666 ago.
ANQPRequestManager - Begin ---
ANQPRequestManager - End ---

Chipset information :-----------------------------------------------
FW Version is: FW:3.3.2.0.32767.0 HW:HW_VERSION=400e0000.
Driver Version is: 2.0.8.33V
Supported Feature set: -1
--------------------------------------------------------------------
Bug dump 0
system time = 12-1 19:28:11.676
kernel time = 11114.331
reason = 7
kernel log: 

system log: 

ring-buffer = connectivity_events_rb

ring-buffer = power_events_rb

ring-buffer = firmware_prints_rb

ring-buffer = pkt_stats_rb

ring-buffer = driver_prints_rb

--------------------------------------------------------------------
--------------------------------------------------------------------
Bug dump 1
system time = 12-1 19:43:38.295
kernel time = 12040.950
reason = 7
kernel log: 

system log: 

ring-buffer = connectivity_events_rb

ring-buffer = power_events_rb

ring-buffer = firmware_prints_rb

ring-buffer = pkt_stats_rb

ring-buffer = driver_prints_rb

--------------------------------------------------------------------
--------------------------------------------------------------------
Bug dump 2
system time = 12-1 19:46:26.226
kernel time = 12208.881
reason = 7
kernel log: 

system log: 

ring-buffer = connectivity_events_rb

ring-buffer = power_events_rb

ring-buffer = firmware_prints_rb

ring-buffer = pkt_stats_rb

ring-buffer = driver_prints_rb

--------------------------------------------------------------------
--------------------------------------------------------------------
Bug dump 3
system time = 12-1 19:49:14.148
kernel time = 12376.803
reason = 7
kernel log: 

system log: 

ring-buffer = connectivity_events_rb

ring-buffer = power_events_rb

ring-buffer = firmware_prints_rb

ring-buffer = pkt_stats_rb

ring-buffer = driver_prints_rb

--------------------------------------------------------------------
Last Flush Time: {}
--------------------------------------------------------------------
No fates fetched for "Last failed connection fates"
HAL provided zero fates for "Latest fates"
No last mile log for "Last failed last-mile log"
No last mile log for "Latest last-mile log"
--------------------------------------------------------------------
Dump of WifiConnectivityManager
WifiConnectivityManager - Log Begin ----
mIsLocationModeEnabled: false
mPnoScanEnabledByFramework: true
mEnablePnoScanAfterWifiToggle: true
2024-12-01T16:23:13.081170 - handleScreenStateChanged: screenOn=true
2024-12-01T16:23:13.081369 - startConnectivityScan: screenOn=true wifiState=unknown scanImmediately=false wifiEnabled=false mAutoJoinEnabled=false mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=false isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T16:23:13.300681 - Set WiFi enabled
2024-12-01T16:23:13.300704 - Stopping WifiConnectivityManager
2024-12-01T16:23:15.327408 - handleConnectionStateChanged: state=disconnected
2024-12-01T16:23:15.328186 - startConnectivityScan: screenOn=true wifiState=disconnected scanImmediately=true wifiEnabled=true mAutoJoinEnabled=false mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=false isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T16:23:18.599823 - setTrustedConnectionAllowed: allowed=true
2024-12-01T16:23:18.599856 - Starting up WifiConnectivityManager
2024-12-01T16:23:18.603798 - startConnectivityScan: screenOn=true wifiState=disconnected scanImmediately=true wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T16:23:18.604983 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T16:23:22.276178 - AllSingleScanListener onResults: start network selection
2024-12-01T16:23:22.280313 - Networks filtered out due to invalid SSID: 46:3f:8c:cb:72:f2 / 42:ed:00:a7:5a:25 / 42:ed:00:a7:5a:24 / 7a:c5:7d:57:a0:12 / 
2024-12-01T16:23:22.280380 - Networks filtered out due to low signal strength: KWeise:52:f4:ab:16:5a:c8(2.4GHz)-91 / Rehabilitace:5c:f4:ab:16:5a:cb(2.4GHz)-90 / STARNET_Kopecny:1c:3b:f3:13:85:39(2.4GHz)-84 / Bišonci:b4:b0:24:dc:02:03(2.4GHz)-86 / Kollros:40:3f:8c:a6:f5:1d(2.4GHz)-82 / SEC_LinkShare_917fdd:a0:0b:ba:f9:25:56(2.4GHz)-92 / luta_5G:40:3f:8c:cb:72:f1(5GHz)-79 / Vodafone-ED2E:ac:22:05:e0:c7:39(5GHz)-79 / T-787912:08:7b:12:98:46:43(5GHz)-84 / T-137453:08:7b:12:b7:f5:82(5GHz)-82 / 
2024-12-01T16:23:22.283251 - About to run SavedNetworkNominator :
2024-12-01T16:23:22.288714 - About to run NetworkSuggestionNominator :
2024-12-01T16:23:22.289927 - did not see any matching auto-join enabled network suggestions.
2024-12-01T16:23:22.293362 - removeAutoUpgradeSecurityParamsIfNecessary: SSID: "pg_star_5G" baseSecurityType: 2 upgradableSecurityType: 4 isLegacyNetworkInRange: true isUpgradableTypeOnlyInRange: false isAutoUpgradeEnabled: true
2024-12-01T16:23:22.293553 - Remove upgradable security type 4 for the network.
2024-12-01T16:23:22.294817 - removeAutoUpgradeSecurityParamsIfNecessary: SSID: "pg_star_5G" baseSecurityType: 0 upgradableSecurityType: 6 isLegacyNetworkInRange: false isUpgradableTypeOnlyInRange: false isAutoUpgradeEnabled: true
2024-12-01T16:23:22.297463 - removeAutoUpgradeSecurityParamsIfNecessary: SSID: "pg_star_5G" baseSecurityType: 3 upgradableSecurityType: 9 isLegacyNetworkInRange: false isUpgradableTypeOnlyInRange: false isAutoUpgradeEnabled: true
2024-12-01T16:23:22.298320 - Candidate { config = 0, bssid = 50:88:11:a1:34:cd, freq = 5180, channelWidth = 2, rssi = -64, Mbps = 209, nominator = 0, pInternet = 50, saved, trusted, secure }
2024-12-01T16:23:22.298460 - BubbleFunScorer_v2 would choose 0 score 76.69390576210597+/-4.901295584341469 expid 42598152
2024-12-01T16:23:22.298548 - CompatibilityScorer would choose 0 score 203.936+/-10.0 expid 42504592
2024-12-01T16:23:22.326892 - ScoreCardBasedScorer would choose 0 score 184.0+/-10.0 expid 42902385
2024-12-01T16:23:22.327450 - ThroughputScorer chooses 0 score 3656.936+/-10.0 expid 42330058
2024-12-01T16:23:22.328370 - AllSingleScanListener:  WNS candidate-"pg_star_5G"
2024-12-01T16:23:22.329756 - connectToNetwork(ConcreteClientModeManager{id=15739 iface=wlan0 role=ROLE_CLIENT_PRIMARY}): Connect to "pg_star_5G" : any from Disconnected
2024-12-01T16:23:22.329866 - noteConnectionAttempt: timeMillis=24985
2024-12-01T16:23:22.531189 - handleConnectionStateChanged: state=transitioning
2024-12-01T16:23:22.531604 - startConnectivityScan: screenOn=true wifiState=transitioning scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T16:23:22.531692 - cancelPeriodicScanTimer
2024-12-01T16:23:23.081730 - handleConnectionStateChanged: state=connected
2024-12-01T16:23:23.082691 - startConnectivityScan: screenOn=true wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T16:23:23.082803 - Last periodic single scan started 4478ms ago, defer this new scan request.
2024-12-01T16:23:23.082829 - schedulePeriodicScanTimer intervalMs 15522
2024-12-01T16:23:30.412915 - handleScreenStateChanged: screenOn=false
2024-12-01T16:23:30.413049 - startConnectivityScan: screenOn=false wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T16:23:30.413065 - cancelPeriodicScanTimer
2024-12-01T19:29:34.121216 - handleScreenStateChanged: screenOn=true
2024-12-01T19:29:34.121329 - startConnectivityScan: screenOn=true wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T19:29:34.121823 - Current connected network: 0
2024-12-01T19:29:34.121957 - No partial scan because firmware roaming is supported.
2024-12-01T19:29:34.121972 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:29:46.498512 - handleScreenStateChanged: screenOn=false
2024-12-01T19:29:46.498889 - startConnectivityScan: screenOn=false wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T19:29:46.498937 - cancelPeriodicScanTimer
2024-12-01T19:39:41.566285 - handleScreenStateChanged: screenOn=true
2024-12-01T19:39:41.566669 - startConnectivityScan: screenOn=true wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T19:39:41.566971 - Current connected network: 0
2024-12-01T19:39:41.567263 - No partial scan because firmware roaming is supported.
2024-12-01T19:39:41.567380 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:40:01.570187 - Current connected network: 0
2024-12-01T19:40:01.570811 - No partial scan because firmware roaming is supported.
2024-12-01T19:40:01.570870 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:40:21.573437 - Current connected network: 0
2024-12-01T19:40:21.573963 - No partial scan because firmware roaming is supported.
2024-12-01T19:40:21.574032 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:40:41.578074 - Current connected network: 0
2024-12-01T19:40:41.578786 - No partial scan because firmware roaming is supported.
2024-12-01T19:40:41.578892 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:40:52.618519 - handleScreenStateChanged: screenOn=false
2024-12-01T19:40:52.618864 - startConnectivityScan: screenOn=false wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T19:40:52.618917 - cancelPeriodicScanTimer
2024-12-01T19:44:04.543374 - handleScreenStateChanged: screenOn=true
2024-12-01T19:44:04.543662 - startConnectivityScan: screenOn=true wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T19:44:04.543881 - Current connected network: 0
2024-12-01T19:44:04.544110 - No partial scan because firmware roaming is supported.
2024-12-01T19:44:04.544135 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:44:24.547717 - Current connected network: 0
2024-12-01T19:44:24.548503 - No partial scan because firmware roaming is supported.
2024-12-01T19:44:24.548613 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:44:44.550902 - Current connected network: 0
2024-12-01T19:44:44.551593 - No partial scan because firmware roaming is supported.
2024-12-01T19:44:44.551691 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:45:04.555535 - Current connected network: 0
2024-12-01T19:45:04.556177 - No partial scan because firmware roaming is supported.
2024-12-01T19:45:04.556242 - schedulePeriodicScanTimer intervalMs 20000
2024-12-01T19:45:12.543290 - handleScreenStateChanged: screenOn=false
2024-12-01T19:45:12.543607 - startConnectivityScan: screenOn=false wifiState=connected scanImmediately=false wifiEnabled=true mAutoJoinEnabled=true mAutoJoinEnabledExternal=true mAutoJoinEnabledExternalSetByDeviceAdmin=false mPnoScanEnabledByFramework=true mEnablePnoScanAfterWifiToggle=true mSpecificNetworkRequestInProgress=false mTrustedConnectionAllowed=true isSufficiencyCheckEnabled=true isAssociatedNetworkSelectionEnabled=true noPotentialNetworkAvailable=false
2024-12-01T19:45:12.543648 - cancelPeriodicScanTimer
WifiConnectivityManager - Log End ----
WifiConnectivityManager: mMultiInternetConnectionState 0
WifiOpenNetworkNotifier: 
mSettingEnabled true
currentTime: 1733078954419
mNotificationRepeatTime: 0
mState: 0
mBlocklistedSsids: {}
Dump of WifiBlocklistMonitor
2024-12-01T16:23:23.559132 - setNetworkSelectionStatus: configKey="pg_star_5G"WPA_PSK networkStatus=NETWORK_SELECTION_ENABLED disableReason=NETWORK_SELECTION_ENABLE
WifiBlocklistMonitor - Bssid blocklist begin ----
WifiBlocklistMonitor - Bssid blocklist end ----
Dump of BSSID to Affiliated BSSID mapping
WifiBlocklistMonitor - Bssid blocklist logs begin ----
logTime=12-1 16:23:22.335 Successfully set firmware roaming configurations. bssidBlocklist=<EMPTY>
List of SSIDs to never block:
WifiBlocklistMonitor - Bssid blocklist logs end ----
Dump of ExternalPnoScanRequestManager
ExternalPnoScanRequestManager - Log Begin ----
No external PNO scan request set.
mCurrentRequestOnPnoNetworkFoundCount: 0
ExternalPnoScanRequestManager - Log End ----
Dump of WifiHealthMonitor
WifiHealthMonitor - Log Begin ----
System Info Stats
current SW build: OS build version: U1TCS34.22-64-19-4-1 Wifi stack version: 341110060 Wifi driver version: 2.0.8.33V Wifi firmware version: FW:3.3.2.0.32767.0 HW:HW_VERSION=400e0000.
currScanStats: last scan time: 1733066602264 APs found at 2G: 20 APs found above 2g: 13
prevScanStats: last scan time: 1733050769104 APs found at 2G: 17 APs found above 2g: 15
configured network connection stats
SSID: "pg_star_5G"
 LastRssiPollTime: 12133690 LastRssiPoll: -52 LastTxSpeedPoll: 351
 StatsRecent:  ConnectAttempt: 2 ConnectFailure: 0 ConnectDurSec: 4 AssocRej: 0 AssocTimeout: 0 AuthFailure: 0 ShortDiscNonlocal: 0 DisconnectNonlocal: 0 Disconnect: 4 ConsecutiveConnectFailure: 0 ConnectFailureDiscon: 0 ConsecutiveWrongPassword: 0
 StatsCurr:  ConnectAttempt: 851 ConnectFailure: 0 ConnectDurSec: 205780 AssocRej: 0 AssocTimeout: 0 AuthFailure: 0 ShortDiscNonlocal: 0 DisconnectNonlocal: 7 Disconnect: 24 ConsecutiveConnectFailure: 0 ConnectFailureDiscon: 0 ConsecutiveWrongPassword: 0
 StatsPrev:  ConnectAttempt: 0 ConnectFailure: 0 ConnectDurSec: 0 AssocRej: 0 AssocTimeout: 0 AuthFailure: 0 ShortDiscNonlocal: 0 DisconnectNonlocal: 0 Disconnect: 0 ConsecutiveConnectFailure: 0 ConnectFailureDiscon: 0 ConsecutiveWrongPassword: 0 BandwidthStats:
 avgKbps:  0 0 0 0 0
 count:  0 0 0 0 0
 avgKbps:  0 0 0 0 0
 count:  0 0 0 0 0

 avgKbps:  0 0 0 32794 11920
 count:  0 0 0 3 1
 avgKbps:  0 0 0 0 88240
 count:  0 0 0 0 7


networks with failure increase: 

networks with failure drop: 

networks with high failure without previous stats: 

WifiHealthMonitor - Log End ----
Dump of WifiScoreCard
current SSID(s):{iface=wlan0,ssid="pg_star_5G"}
2024-12-01T19:29:37.200284 - invalid traffic count tx 30446079 last 33705319 rx 16761047 last 20021012
2024-12-01T19:29:40.217577 - invalid traffic count tx 30453010 last 30446079 rx 16763284 last 16761047
2024-12-01T19:39:44.593068 - invalid traffic count tx 31635087 last 35261411 rx 17353150 last 20981078
2024-12-01T19:39:47.607461 - invalid traffic count tx 31639985 last 31635087 rx 17355726 last 17353150
2024-12-01T19:44:07.576898 - invalid traffic count tx 32864649 last 36652658 rx 17793111 last 21581580
2024-12-01T19:44:10.587369 - invalid traffic count tx 32869099 last 32864649 rx 17794671 last 17793111
 BW Estimation Stats
2G
 Tx
 Count
 0 0 0 0 0
 AvgKbps
 0 0 0 0 0
 BwEst error
 0 0 0 0 0
 L2 error
 0 0 0 0 0
 Rx
 Count
 0 0 0 0 0
 AvgKbps
 0 0 0 0 0
 BwEst error
 0 0 0 0 0
 L2 error
 0 0 0 0 0
5G
 Tx
 Count
 0 0 0 0 0
 AvgKbps
 0 0 0 0 0
 BwEst error
 0 0 0 0 0
 L2 error
 0 0 0 0 0
 Rx
 Count
 0 0 0 0 0
 AvgKbps
 0 0 0 0 0
 BwEst error
 0 0 0 0 0
 L2 error
 0 0 0 0 0

Dump of WakeupController
USE_PLATFORM_WIFI_WAKE: true
mWifiWakeupEnabled: true
isOnboarded: false
configStore hasBeenRead: true
mIsActive: false
mNumScansHandled: 0
WakeupLock: 
mNumScans: 0
mIsInitialized: true
Locked networks: 0
Dump of WifiLastResortWatchdog
WifiLastResortWatchdog - Log Begin ----
2024-12-01T16:23:23.100639 - connectedStateTransition: isEntering = true
2024-12-01T16:23:23.100706 - connectedStateTransition: setWatchdogTriggerEnabled to true
WifiLastResortWatchdog - Log End ----
Dump of AdaptiveConnectivityEnabledSettingObserver
mAdaptiveConnectivityEnabled=true
Dump of WifiGlobals
mPollRssiIntervalMillis=3000
mIpReachabilityDisconnectEnabled=true
mIsBluetoothConnected=false
mIsWpa3SaeUpgradeEnabled=true
mIsWpa3SaeUpgradeOffloadEnabled=false
mIsOweUpgradeEnabled=true
mFlushAnqpCacheOnWifiToggleOffEvent=true
mIsWpa3SaeH2eSupported=true
mP2pDeviceNamePrefix=moto g84 5G_
mP2pDeviceNamePostfixNumDigits=-1
mClientModeImplNumLogRecs=100
mSaveFactoryMacToConfigStoreEnabled=true
mWifiLowConnectedScoreThresholdToTriggerScanForMbb=55
mWifiLowConnectedScoreScanPeriodSeconds=60
mIsUsingExternalScorer=false
mWifiAllowInsecureEnterpriseConfiguration=true
mIsP2pMacRandomizationSupportedtrue
mWifiInterfaceAddedSelfRecoveryEnabled=false
mDisableUnwantedNetworkOnLowRssi=false
mNetworkNotFoundEventThreshold=3
mIsWepDeprecated=false
mIsWpaPersonalDeprecated=false
Dump of SarManager
isSarSupported: false
isSarVoiceCallSupported: false
isSarSoftApSupported: false


Dump of LastCallerInfoManager
API key=1 API name=ScanningEnabled: tid=2567 uid=1000 pid=1951 packageName=android toggleState=true
API key=33 API name=API_WIFI_SCANNER_START_SCAN: tid=2567 uid=1000 pid=1951 packageName=null toggleState=true

Dump of LinkProbeManager
LinkProbeManager - link probing supported by device: false
LinkProbeManager - mLastLinkProbeTimestampMs: 0
LinkProbeManager - mLastTxSuccessIncreaseTimestampMs: 0
LinkProbeManager - mLastTxSuccessCount: 0
LinkProbeManager - mLastScreenOnTimestampMs: 0
LinkProbeManager - mTimedQuotaManager: TimedQuotaManager{mQuota=192, mPeriodMillis=86400000, mStartTimeMillis=15137, mLastPeriod=0, mConsumedQuota=0}

Dump of HostapdHal
AIDL service declared: false
HIDL service declared: true
Initialized: false
`;
