# 06 Primera transaccion en Sepolia (prepare -> sign -> send)

## Objetivo
Enviar una primera transaccion real en testnet (Sepolia) desde codigo con `ethers`, usando una wallet de practica y variables de entorno.

## Lo que hicimos
1. Preparar wallet desde `.env` y leer balance.
2. Preparar una transaccion (sin enviarla).
3. Firmar la transaccion (sin enviarla).
4. Enviar la transaccion y esperar confirmacion.
5. Verificar el balance final.

## Scripts usados
- `scripts/preparar-wallet.js`
- `scripts/preparar-tx.js`
- `scripts/firmar-tx.js`
- `scripts/enviar-tx.js`
- `scripts/leer-balance.js`

## Variables de entorno (ejemplo)
- `ETHEREUM_RPC_URL=...` (RPC de Sepolia)
- `WALLET_RECEIVE_ETHEREUM_ADDRESS=0x...` (direccion publica)
- `SEPOLIA_PRIVATE_KEY=...` (clave privada SOLO de practica; no se sube a Git)

Nota: `.env` debe estar en `.gitignore`.

## Resultado (evidencia)
Transaccion enviada y confirmada en Sepolia:
- `TxHash`: `0xaab92209ec9921f84e2d9d1cb8c36cb65530f2eb9be9e12a3d5559510c44812d`
- `Status`: 1 (exitosa)
- `Gas usado`: 21000

Balance despues de la transaccion:
- `0.000070388200909 SepoliaETH`

## Aprendizajes clave
- `provider` sirve para leer; `wallet + provider` sirve para firmar/enviar.
- El `gas` es lo que realmente “se pierde” (enviarte a ti mismo no pierde el valor, pero si consume gas).
- Separar secretos en `.env` y nunca subirlos a Git.

## Siguiente paso
Hacer una transaccion a otra direccion de practica (con un monto minimo) y luego leer `transaction + receipt` con el resumen.
