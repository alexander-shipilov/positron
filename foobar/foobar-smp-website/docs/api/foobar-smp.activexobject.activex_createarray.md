[Home](./index.md) &gt; [@positron/foobar-smp](./foobar-smp.md) &gt; [ActiveXObject](./foobar-smp.activexobject.md) &gt; [ActiveX\_CreateArray](./foobar-smp.activexobject.activex_createarray.md)

## ActiveXObject.ActiveX\_CreateArray() method

The [ActiveXObject.ActiveX\_CreateArray()](./foobar-smp.activexobject.activex_createarray.md) static method of the [ActiveXObject](./foobar-smp.activexobject.md) class creates an instance of [ActiveXObject](./foobar-smp.activexobject.md) that contains an object of type (VT\_ARRAY \| SOME\_TYPE).

**Signature:**

```typescript
static ActiveX_CreateArray(array: unknown[], elementVariantType: number): ActiveXObject;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

array


</td><td>

unknown\[\]


</td><td>

An array that contains elements of primitive type.


</td></tr>
<tr><td>

elementVariantType


</td><td>

number


</td><td>

A variant type of array elements.


</td></tr>
</tbody></table>

**Returns:**

[ActiveXObject](./foobar-smp.activexobject.md)

## Example


```ts
 const filename = 'x:\\file.bin';
 const binData = [0x01, 0x00, 0x00, 0x02];
 const comBinData = ActiveXObject.ActiveX_CreateArray(binData, 0x11);
 // VT_UI1

 const stm = new ActiveXObject('ADODB.Stream');

 stm.Open();
 stm.Type = 1; //adTypeBinary
 stm.Write(comBinData);
 stm.SaveToFile(filename, 2);
 stm.Close();
```

