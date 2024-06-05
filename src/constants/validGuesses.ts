import { CONFIG } from './config'

export const VALIDGUESSES = [
 'cehia', 
'mistol',
'hasan ',
'judum', 
'sikol',
  'nawoj',
  'kawyu',
  'masad',
  'tatal',
  'sepid',
  'koson',
 
 
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
