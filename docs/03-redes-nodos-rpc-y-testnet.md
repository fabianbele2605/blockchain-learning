# 03 Redes, nodos, RPC, mainnet y testnet

## Objetivo

Entender cómo se conectan las aplicaciones y wallets a una blockchain, qué papel cumplen los nodos y qué diferencia hay entre mainnet y testnet.

## ¿Qué es una red blockchain?

Una red blockchain es el conjunto de computadoras, reglas y datos compartidos que permiten que una blockchain funcione.

Cuando hablamos de una red, hablamos de:
- nodos conectados entre sí
- reglas de validación
- estado compartido
- comunicación entre participantes

## Nodo

Un nodo es una computadora que participa en una red blockchain.

Dependiendo del tipo, un nodo puede:
- guardar una copia de la blockchain
- validar bloques o transacciones
- retransmitir información
- responder consultas de aplicaciones o wallets

## Idea simple

Puedes imaginar una red blockchain como una ciudad conectada por muchas oficinas.

Cada oficina sería un nodo.

Algunas oficinas:
- solo reciben y comparten información
- otras validan operaciones
- otras permiten consultar datos de la red

## ¿Qué es RPC?

RPC significa `Remote Procedure Call`.

En blockchain, normalmente se usa para describir el punto de acceso que permite que una app, script o wallet hable con un nodo.

Gracias al RPC, una aplicación puede:
- consultar balances
- enviar transacciones
- leer bloques
- interactuar con smart contracts
- pedir información de una cuenta

## Idea simple de RPC

Si la blockchain fuera una gran oficina técnica, el RPC sería la ventanilla por la que haces solicitudes.

Por ejemplo:
- "dame el balance de esta cuenta"
- "envía esta transacción"
- "muéstrame este bloque"
- "lee este contrato"

## ¿Por qué no hablamos directamente con toda la red?

Porque una app normalmente no se conecta a todos los nodos al mismo tiempo.

Lo más común es conectarse a:
- un nodo propio
- un proveedor RPC
- un servicio de infraestructura como intermediario técnico

Eso simplifica el acceso a la red.

## Mainnet

`Mainnet` es la red principal real.

En una mainnet:
- las transacciones son reales
- los activos tienen valor real
- los errores pueden costar dinero
- las operaciones afectan un entorno productivo

Ejemplos:
- Ethereum mainnet
- Solana mainnet
- Base mainnet

## Testnet

`Testnet` es una red de prueba.

Se usa para:
- hacer experimentos
- probar contratos
- validar integraciones
- practicar sin usar fondos reales

En una testnet:
- los tokens suelen no tener valor real
- los errores son menos costosos
- el objetivo principal es aprender o probar

## ¿Por qué importa esta diferencia?

Porque no es lo mismo practicar que desplegar en producción.

En el mundo profesional:
- primero se prueba en entornos de desarrollo o testnet
- luego se valida comportamiento
- después se considera pasar a mainnet

## Relación entre wallet, app y RPC

Cuando una wallet o aplicación quiere interactuar con la blockchain, normalmente el flujo es este:

1. la app genera una solicitud
2. esa solicitud se envía a través de un RPC
3. el nodo responde con información o procesa la transacción
4. la red valida y actualiza el estado si corresponde

## Ejemplo simple del mundo real

Supón que una wallet quiere mostrar tu balance.

No “adivina” el saldo.

Lo que hace es:
- conectarse a una red
- consultar un nodo por RPC
- recibir la información
- mostrar el resultado en pantalla

## Error común importante

Muchas personas creen que MetaMask, Phantom u otra wallet “contienen” toda la blockchain.

No.
La wallet es la interfaz del usuario.
La información real llega desde la red a través de nodos y RPCs.

## Diferencia rápida

- `wallet`: administra claves y firma
- `RPC`: canal de comunicación con la red
- `nodo`: computadora que participa en la red
- `mainnet`: red real
- `testnet`: red de prueba

## Errores comunes

### Error 1
Pensar que una app Web3 funciona sin conectarse a un RPC.

No.
Necesita alguna forma de hablar con la red.

### Error 2
Pensar que testnet y mainnet son lo mismo.

Se parecen en estructura, pero no en impacto.
Mainnet implica consecuencias reales.

### Error 3
Pensar que todos los nodos hacen exactamente lo mismo.

No necesariamente.
Hay distintos roles y niveles de participación.

### Error 4
Creer que usar un proveedor RPC significa controlar la blockchain.

Un proveedor RPC facilita acceso.
No significa que posea toda la red ni que sea la red completa.

## Resumen corto

- una blockchain funciona sobre una red
- los nodos participan en esa red
- el RPC permite consultar o enviar operaciones
- mainnet es la red real
- testnet es la red de prueba

## Siguiente paso

El siguiente tema recomendado es:

`transacciones, gas y confirmaciones`

Porque eso explica qué ocurre cuando realmente envías una operación a la red.
