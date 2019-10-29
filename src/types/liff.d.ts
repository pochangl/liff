type Message = any
type RequestDeviceOptions = any
type BluetoothDevice = any

interface IProfile {
  userId: string
  displayName: string
  pictureUrl: string
  statusMessage: string
}

interface IBluetooth {
  getAvailability(): Promise<Boolean>
  equestDevice(options?: RequestDeviceOptions): Promise<BluetoothDevice>
}

interface ILiff {
  init(
    config: { liffId: string },
    successCallback?: Function,
    errorCallback?: Function,
  )
  getOS (): string
  getLanguage (): string
  getVersion(): string
  isInClient(): boolean

  // plugins
  initPlugins(pluginList: Array<String>): Promise<void>

  // authentication
  isLoggedIn(): boolean
  login(
    loginConfig?: {
      redirectUri?: string
    }
  )
  logout()
  getAccessToken(): string

  // profile
  getProfile(): Promise<IProfile>
  sendMessages(messages: Message[])

  // utils
  openWindow(params: {
    url: string,
    external?: boolean
  })
  scanCode(): string
  closeWindow()
}

declare let liff: ILiff
