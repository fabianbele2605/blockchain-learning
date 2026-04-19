# 04 Transacciones, gas y confirmaciones

## Objetivo

Entender qué es una transacción en blockchain, qué significa pagar gas y cómo funcionan las confirmaciones después de enviar una operación.

## ¿Qué es una transacción?

Una transacción es una instrucción enviada a la red blockchain para ejecutar una acción.

Esa acción puede ser, por ejemplo:
- transferir un activo
- interactuar con un smart contract
- aprobar una operación
- ejecutar una función en una dApp

En términos simples:
una transacción es una solicitud firmada que le dice a la red que quieres hacer algo.

## ¿Qué contiene una transacción?

Aunque depende de la red, normalmente una transacción incluye:
- quién la envía
- qué acción quiere ejecutar
- a quién va dirigida
- cuánto valor mueve, si aplica
- firma del usuario
- datos técnicos necesarios para procesarla

## Flujo simple de una transacción

Cuando una persona envía una transacción, normalmente ocurre esto:

1. la wallet construye la operación
2. el usuario revisa y firma
3. la transacción se envía a la red
4. un nodo la propaga
5. la red la valida
6. si todo sale bien, se incluye en un bloque
7. luego recibe confirmaciones

## Firma antes de enviar

Una transacción no debería aceptarse como válida solo porque alguien la escribió.

La firma digital demuestra que quien envía la operación tiene permiso para hacerlo.

Por eso:
- primero se firma
- luego se transmite
- después la red verifica la firma

## ¿Qué es gas?

Gas es el costo computacional de ejecutar una operación en muchas redes blockchain, especialmente en Ethereum y redes compatibles.

Sirve para:
- pagar por el uso de recursos de la red
- evitar abuso o spam
- compensar a quienes procesan operaciones

## Idea simple de gas

Puedes imaginar el gas como el costo de procesamiento de una solicitud.

No pagas solo por “mover dinero”.
También pagas por usar capacidad de cómputo de la red.

Por eso:
- una operación simple suele costar menos
- una interacción compleja con un smart contract puede costar más

## Importante: gas no siempre significa lo mismo en todas las redes

El concepto general existe en muchas blockchains, pero la forma exacta de cobrarlo cambia según la red.

Ejemplo:
- en Ethereum se habla mucho de `gas`
- en otras redes puede cambiar el modelo o la terminología

## ¿Qué es una confirmación?

Una confirmación significa que la transacción ya fue incluida en la cadena y que luego se agregaron más bloques encima o se consolidó su estado según las reglas de la red.

En términos simples:
- primero envías la transacción
- luego la red la procesa
- después esperas cierto nivel de seguridad de que ya quedó aceptada

## ¿Por qué no basta con “transacción enviada”?

Porque “enviada” no significa necesariamente “finalizada”.

Una transacción puede estar:
- creada pero no enviada
- enviada pero pendiente
- procesada pero no final
- confirmada o finalizada

## Pendiente

Una transacción pendiente es una transacción que ya fue enviada, pero todavía no se ha incluido definitivamente en la cadena.

Eso puede pasar por:
- congestión de red
- comisión insuficiente
- validación pendiente
- competencia con otras transacciones

## ¿Por qué importan las confirmaciones?

Porque en el mundo real no siempre basta con ver que la transacción “existe”.

Muchas veces se espera confirmación para:
- considerar un pago como válido
- continuar con otra acción
- mostrar estado final al usuario
- reducir riesgo de reorganizaciones o fallos temporales

## Ejemplo simple del mundo real

Supón que envías tokens desde una wallet.

El flujo visible podría ser este:
1. firmas la transacción
2. la wallet la envía
3. aparece como pendiente
4. luego aparece como confirmada
5. finalmente el balance actualizado se refleja en la app

## Relación entre gas, firma y confirmación

Estos conceptos trabajan juntos:

- la `firma` autoriza la operación
- la `red` valida la operación
- el `gas` cubre el costo de procesarla
- la `confirmación` indica que ya fue aceptada con cierto nivel de seguridad

## Errores comunes

### Error 1
Pensar que firmar y confirmar son lo mismo.

No.
Firmar significa autorizar.
Confirmar significa que la red ya aceptó la operación.

### Error 2
Pensar que toda transacción se ejecuta al instante.

No necesariamente.
Puede quedar pendiente un tiempo.

### Error 3
Pensar que gas solo aplica cuando envías criptomonedas.

No.
También aplica cuando interactúas con contratos y otras operaciones de red.

### Error 4
Creer que “transacción enviada” significa “éxito garantizado”.

Todavía puede faltar procesamiento, confirmación o incluso aparecer un fallo.

## Resumen corto

- una transacción es una instrucción firmada
- la firma autoriza
- el gas paga el procesamiento
- la red valida la operación
- la confirmación indica que la operación fue aceptada

## Siguiente paso

El siguiente tema recomendado es:

`smart contracts y dApps`

Porque después de entender transacciones, ya tiene sentido estudiar qué tipo de lógica puede ejecutarse sobre la blockchain.
