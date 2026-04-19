# Guia de trabajo y aprendizaje

## Objetivo
Esta guia define como vamos a trabajar en este proyecto para aprender blockchain, Rust y Web3 de forma ordenada, practica y profesional.

La idea no es solo escribir codigo, sino entender:
- que estamos haciendo
- por que lo hacemos
- donde se usa en proyectos reales

## Perfil del estudiante
- Principiante en blockchain y Rust
- Usa VS Code
- Quiere aprender paso a paso
- Quiere entender antes de copiar codigo
- Busca llegar a nivel profesional

## Como trabajaremos
Usaremos `agents/agent.txt` como prompt base de mentoria.

Eso significa que en cada sesion se priorizara:
- explicacion breve antes del codigo
- pasos pequenos y concretos
- comandos exactos y seguros
- ejemplos funcionales
- relacion con el mundo profesional
- cierre con siguiente paso util

## Reglas de la tutoria
1. Antes de escribir codigo, primero se explica:
   - que vamos a hacer
   - por que importa
   - para que sirve en un proyecto real

2. Los conceptos tecnicos se explican con lenguaje simple.
   Ejemplos:
   - `ownership`: quien es el dueno de un dato
   - `borrowing`: prestar acceso a un dato sin transferir su propiedad
   - `wallet`: billetera para firmar y gestionar activos
   - `RPC`: punto de acceso para hablar con una blockchain

3. Cada tarea se divide en pasos pequenos.
   - Un paso debe representar una accion concreta.
   - No se mezclaran demasiados conceptos al mismo tiempo.

4. Cuando haya que ejecutar algo, se debe indicar:
   - comando
   - ruta
   - archivo
   - resultado esperado

5. Si se modifica codigo:
   - se explicara que cambio
   - por que se cambio
   - que impacto tiene

6. Se evitara complejidad innecesaria.
   - Primero claridad
   - despues buenas practicas
   - despues optimizacion

7. Si aparece un error:
   - se explicara la causa raiz
   - como leer el mensaje
   - como evitarlo la proxima vez

## Formato recomendado para cada tema
Cuando aplique, cada explicacion seguira esta estructura:

1. Objetivo
2. Por que importa
3. Paso a paso
4. Codigo
5. Explicacion
6. Errores comunes
7. Siguiente paso

## Forma recomendada de aprender
Para avanzar sin perder tiempo, seguiremos este orden:

1. JavaScript
2. Node.js
3. Solidity
4. ethers.js
5. Rust
6. Cargo
7. Solana CLI
8. Anchor

Este orden no es obligatorio en todos los casos, pero sirve como ruta base.

## Reglas para mantener claridad
- No hacer cambios grandes en muchos archivos sin explicarlos primero.
- No usar codigo "magico" sin explicar que libreria se usa y por que.
- No responder solo con teoria cuando se puede ensenar con practica.
- No asumir conocimiento avanzado si todavia no lo hemos construido.

## Como se vera un buen avance
Un buen avance en este proyecto deberia verse asi:
- entiendes que hace cada archivo importante
- puedes correr comandos y reconocer el resultado esperado
- puedes leer errores sin entrar en panico
- puedes modificar ejemplos pequenos con confianza
- empiezas a conectar lo aprendido con casos reales de trabajo

## Errores comunes que queremos evitar
- Copiar codigo sin entenderlo
- Querer aprender demasiadas cosas a la vez
- Saltarse setup, pruebas o estructura base
- Meter optimizacion antes de tener claridad
- Usar herramientas avanzadas sin entender el problema que resuelven

## Siguiente paso recomendado
El siguiente paso util para este proyecto es convertir esta guia en una guia viva.

Propuesta de orden inmediato:
1. Definir que vamos a construir primero
2. Crear la estructura minima del proyecto
3. Documentar el primer objetivo practico
4. Implementar paso a paso
5. Registrar errores y aprendizajes dentro de `docs/`

## Nota final
Esta guia no reemplaza la practica.
Su funcion es mantener el enfoque, ahorrar tiempo y asegurar que cada paso sume aprendizaje real.
