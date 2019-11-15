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
  getAvailability(): Promise<boolean>
  equestDevice(options?: RequestDeviceOptions): Promise<BluetoothDevice>
}

export interface ILiff {
  init(
    config: { liffId: string },
    successCallback?: () => void,
    errorCallback?: () => void,
  )
  getOS (): string
  getLanguage (): string
  getVersion(): string
  isInClient(): boolean

  // plugins
  initPlugins(pluginList: string[]): Promise<void>

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

const promise = new Promise<ILiff>((resolve, reject) => {
  const script = document.createElement('script')
  script.onload = async () => {
    const liff = (window as any).liff

    resolve(liff)
  }
  script.src = 'https://static.line-scdn.net/liff/edge/2.1/sdk.js'

  document.head.appendChild(script)
})

export async function getLiff(liffId): Promise<ILiff> {
  const liff = await promise
  liff.init({ liffId })
  return liff
}
