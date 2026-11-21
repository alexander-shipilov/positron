[Home](./index.md) &gt; [@positron/foobar-smp](./foobar-smp.md) &gt; [ActiveXObject](./foobar-smp.activexobject.md)

## ActiveXObject class

The [ActiveXObject](./foobar-smp.activexobject.md) class creates a new `ActiveX` object.

**Signature:**

```typescript
export declare class ActiveXObject 
```

## Example


```ts
 const xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
```

## Constructors

<table><thead><tr><th>

Constructor


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[(constructor)(name)](./foobar-smp.activexobject._constructor_.md)


</td><td>


</td><td>

Constructs a new instance of the `ActiveXObject` class


</td></tr>
</tbody></table>

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[ActiveX\_CreateArray(array, elementVariantType)](./foobar-smp.activexobject.activex_createarray.md)


</td><td>

`static`


</td><td>

The [ActiveXObject.ActiveX\_CreateArray()](./foobar-smp.activexobject.activex_createarray.md) static method of the [ActiveXObject](./foobar-smp.activexobject.md) class creates an instance of [ActiveXObject](./foobar-smp.activexobject.md) that contains an object of type (VT\_ARRAY \| SOME\_TYPE).


</td></tr>
<tr><td>

[ActiveX\_Get(propName)](./foobar-smp.activexobject.activex_get.md)


</td><td>


</td><td>

The [ActiveXObject.ActiveX\_Get()](./foobar-smp.activexobject.activex_get.md) method emulates COM's weird behaviour of property accessors.


</td></tr>
<tr><td>

[ActiveX\_Set(propName, propValue)](./foobar-smp.activexobject.activex_set.md)


</td><td>


</td><td>

The [ActiveXObject.ActiveX\_Set()](./foobar-smp.activexobject.activex_set.md) emulates COM's weird behaviour of property accessors.


</td></tr>
</tbody></table>

