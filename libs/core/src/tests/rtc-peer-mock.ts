export class RTCPeerMock {
  protected conn: RTCPeerConnection

  constructor() {
    this.conn = new RTCPeerConnection()
    this.conn.addEventListener = (evt: string) => this.addEventListener(evt)
    this.conn.onconnectionstatechange = (event: Event) =>
      this.onConnectionStateChange()
    this.conn.onicecandidate = (event: RTCPeerConnectionIceEvent) =>
      this.onIceCandidate(event)
  }

  private onConnectionStateChange() {
    console.log('onConnectionStateChange')
  }

  private onIceCandidate(event: RTCPeerConnectionIceEvent) {
    console.log('onIceCandidate')
  }

  private addEventListener(event: string) {
    console.log('addEventListener')
  }
}
