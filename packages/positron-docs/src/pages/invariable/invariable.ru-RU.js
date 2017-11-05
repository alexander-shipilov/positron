import React from "react";
import { Markdown } from "../../ui/Markdown";

module.exports = {
    title: "invariable",

    content: (
        <Markdown>
            { `
Модуль предоставляет неизменяемые объекты
## InvariableObject

Неизменяемая версия Object.

\`\`\`javascript
const invariable = new InvariableObject({ foo: 1 });
\`\`\`

### #set

Устанавливает свойства и возвращает новый экземпляр **InvariableObject**.

\`\`\`javascript
const invariable = new InvariableObject({ foo: 1 });

invariable.set({ foo: 2 }); // InvariableObject({ foo: 2 })
invariable.set({ foo: 2 }) === invariable; // false
\`\`\`

Если в ходе вызова значения свойств не изменились, то возвращается текущий объект

\`\`\`javascript
const invariable = new InvariableObject({ foo: 1 });

invariable.set({ foo: 1 }) === invariable; // true
invariable.set({ foo: 2 }).set({ foo: 1 }) === invariable; // true
invariable.set({ foo: 2, bar: 2 }).set({ foo: 1 }) === invariable; // true
\`\`\`

### #assign

\`\`\`javascript
const invariable = new InvariableObject({ foo: 1 });

invariable.assign({ foo: 2 });
// returns InvariableObject({ foo: 2 })

invariable.assign({ bar: 1 });
// returns InvariableObject({ foo: 1, bar: 1 })
\`\`\`

### #valueOf

\`\`\`javascript
const invariable = new InvariableObject({ foo: 1 });

Object.keys(invariable.assign({ bar: 2 }));
// returns [ "bar" ]

invariable.assign({ bar: 2 }).valueOf();
// returns Object({ foo: 1, bar: 2 })
\`\`\`

## InvariableArray

## TypedInvariableObject

## TypedInvariableArray
            ` }
        </Markdown>
    )
};
