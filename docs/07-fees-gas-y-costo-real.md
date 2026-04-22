# 07 Fees: gasUsed * effectiveGasPrice

## Idea clave
En redes EVM, el costo real (fee) de una transaccion se calcula como:

`feeWei = gasUsed * effectiveGasPrice`

Luego se convierte a ETH con `formatEther`.

## Componentes
- `gasUsed`: gas realmente consumido (viene del receipt).
- `effectiveGasPrice`: precio efectivo pagado por gas (viene del receipt).
- `value`: valor transferido (viene de la transaccion).

## Total
`totalWei = valueWei + feeWei`

Nota: si te envias a ti mismo, el `value` no se pierde; lo que baja el balance es el `fee`.

## Ejemplo (Sepolia)
- `gasUsed = 21000`
- `effectiveGasPrice = 1.410085671 gwei`
- `fee = 0.000029611799091 ETH`

Script usado: `scripts/tx-info.js`
