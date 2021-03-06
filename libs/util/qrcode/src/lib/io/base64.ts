import { ByteArrayInputStream } from './byte-array-input-stream'
import { ByteArrayOutputStream } from './byte-array-output-stream'
import { Base64DecodeInputStream } from './base64-decode-input-stream'
import { Base64EncodeOutputStream } from './base64-encode-output-stream'
;('use strict')
/**
 * Base64
 * @author Kazuhiko Arase
 */
export class Base64 {
  constructor() {
    throw 'error'
  }

  public static encode(data: number[]): number[] {
    var bout = new ByteArrayOutputStream()
    try {
      var ostream = new Base64EncodeOutputStream(bout)
      try {
        ostream.writeBytes(data)
      } finally {
        ostream.close()
      }
    } finally {
      bout.close()
    }
    return bout.toByteArray()
  }

  public static decode(data: number[]): number[] {
    var bout = new ByteArrayOutputStream()
    try {
      var istream = new Base64DecodeInputStream(new ByteArrayInputStream(data))
      try {
        var b: number
        while ((b = istream.readByte()) != -1) {
          bout.writeByte(b)
        }
      } finally {
        istream.close()
      }
    } finally {
      bout.close()
    }
    return bout.toByteArray()
  }
}
