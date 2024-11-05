import { RsaSize, HashAlg, CharSize, SymmKeyLength } from './types'

export const BASE58_DID_PREFIX = 'did:key:z'

// RSA
export const RSA_ALGORITHM = 'RSA-OAEP'
export const RSA_SIGN_ALGORITHM = 'RSASSA-PKCS1-v1_5'
export const RSA_HASHING_ALGORITHM = 'SHA-256'
export const RSA_DID_PREFIX = new Uint8Array([0x00, 0xf5, 0x02])
export const DEFAULT_RSA_SIZE = RsaSize.B2048
export const DEFAULT_HASH_ALGORITHM = HashAlg.SHA_256
export const DEFAULT_CHAR_SIZE = CharSize.B8

// AES
export const AES_GCM = 'AES-GCM' as const
export const DEFAULT_SYMM_ALGORITHM = AES_GCM
export const DEFAULT_SYMM_LENGTH = SymmKeyLength.B256

// Misc
export const SALT_LENGTH = 128
export const BLS_DID_PREFIX = new Uint8Array([0xea, 0x01])
export const EDWARDS_DID_PREFIX = new Uint8Array([0xed, 0x01])
export const KEY_TYPE = {
    RSA: 'rsa',
    Edwards: 'ed25519',
    BLS: 'bls12-381'
} as const
