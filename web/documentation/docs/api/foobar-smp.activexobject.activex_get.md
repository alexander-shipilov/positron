[Home](./index.md) &gt; [@positron/foobar-smp](./foobar-smp.md) &gt; [ActiveXObject](./foobar-smp.activexobject.md) &gt; [ActiveX\_Get](./foobar-smp.activexobject.activex_get.md)

## ActiveXObject.ActiveX\_Get() method

The [ActiveXObject.ActiveX\_Get()](./foobar-smp.activexobject.activex_get.md) method emulates COM's weird behaviour of property accessors.

**Signature:**

```typescript
ActiveX_Get(propName: number | string): unknown;
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

propName


</td><td>

number \| string


</td><td>

Name of the property, or it's numeric index


</td></tr>
</tbody></table>

**Returns:**

unknown

## Example


```ts
 someActiveX.ActiveX_Get('property_name', 'additional_info').DoSmth();
 // in COM:
 // someActiveX.Item('property_name', 'additional_info').DoSmth();
```

