# 02 Wallets, claves y firmas

## Objetivo

Entender qué es una wallet, qué diferencia hay entre clave pública y clave privada, y cómo funcionan las firmas dentro de blockchain.

## ¿Qué es una wallet?

Una wallet es una herramienta que te permite interactuar con una blockchain.

Sirve para:
- guardar y gestionar claves
- ver direcciones y balances
- firmar transacciones
- conectarte con aplicaciones Web3

Importante:
una wallet no “guarda” tus monedas como una billetera física.
Lo que realmente guarda y protege son tus claves.

## Idea simple

Puedes imaginar una wallet como una app que administra tu identidad dentro de una blockchain.

Esa identidad te permite:
- demostrar que una cuenta es tuya
- autorizar operaciones
- interactuar con contratos y aplicaciones

## Clave privada

La clave privada es el dato más sensible.

Sirve para:
- firmar transacciones
- demostrar control sobre una cuenta
- autorizar acciones en la red

### Regla importante

Si alguien obtiene tu clave privada, puede actuar como si fuera tú.

Por eso:
- nunca se comparte
- nunca se publica
- nunca se pega en sitios sospechosos
- debe almacenarse de forma segura

## Clave pública

La clave pública se deriva de la clave privada.

Se puede compartir y se usa para:
- identificar una cuenta
- generar direcciones
- recibir fondos o interacciones

## Dirección

La dirección es el identificador visible de una cuenta en la red.

Es parecida a un número de cuenta o un alias técnico que otros pueden usar para enviarte activos o interactuar contigo.

Importante:
- la dirección se puede compartir
- la clave privada no

## Firma

Una firma digital prueba que una operación fue autorizada por quien controla la clave privada.

En otras palabras:
- la transacción se firma con la clave privada
- la red verifica esa firma
- si es válida, acepta que la operación fue autorizada correctamente

## Ejemplo simple

Piensa en esto:

- la `clave privada` es como tu firma real secreta
- la `clave pública` es como una forma de verificar tu identidad
- la `dirección` es como el número visible de tu cuenta
- la `wallet` es la herramienta que administra todo eso

## ¿Por qué importa este tema?

Porque casi todo en Web3 depende de esto:
- enviar activos
- firmar mensajes
- conectarte a una dApp
- aprobar una operación
- desplegar un contrato
- administrar una cuenta

Si no entiendes esto, después muchas cosas parecen magia.

## Diferencia entre wallet y cuenta

Aunque a veces se usan como si fueran lo mismo, no son exactamente iguales.

- `wallet`: herramienta o aplicación que administra claves e interacciones
- `cuenta`: identidad o dirección dentro de la red

Una wallet puede manejar una o varias cuentas.

## Frase importante para recordar

No controlas una cuenta porque recuerdes su dirección.

Controlas una cuenta porque posees la clave privada capaz de firmar en su nombre.

## Errores comunes

### Error 1
Pensar que la wallet guarda las monedas “dentro”.

En realidad, los activos están registrados en la blockchain.
La wallet solo te permite acceder y firmar.

### Error 2
Confundir dirección con clave privada.

La dirección se comparte.
La clave privada se protege.

### Error 3
Pensar que firmar es lo mismo que enviar dinero.

Firmar significa autorizar.
A veces firmas una transacción, otras veces firmas un mensaje o una conexión.

### Error 4
Creer que una wallet es solo para guardar tokens.

También sirve para identidad, autenticación e interacción con aplicaciones descentralizadas.

## Resumen corto

- la wallet administra claves e interacciones
- la clave privada autoriza
- la clave pública ayuda a verificar
- la dirección identifica una cuenta
- la firma demuestra autorización

## Siguiente paso

El siguiente tema recomendado es:

`redes, nodos, RPC, mainnet y testnet`

Porque eso explica cómo una wallet o una aplicación se conecta realmente a una blockchain.
