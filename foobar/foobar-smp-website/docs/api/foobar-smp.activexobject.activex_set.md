[Home](./index.md) &gt; [@positron/foobar-smp](./foobar-smp.md) &gt; [ActiveXObject](./foobar-smp.activexobject.md) &gt; [ActiveX\_Set](./foobar-smp.activexobject.activex_set.md)

## ActiveXObject.ActiveX\_Set() method

The [ActiveXObject.ActiveX\_Set()](./foobar-smp.activexobject.activex_set.md) emulates COM's weird behaviour of property accessors.

**Signature:**

```typescript
ActiveX_Set(propName: number | string, propValue: string): unknown;
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
<tr><td>

propValue


</td><td>

string


</td><td>

Property value


</td></tr>
</tbody></table>

**Returns:**

unknown

## Example


```ts
 someActiveX.ActiveX_Set('property_name', 'new_value', 'additional_info');
 // in COM:
 // someActiveX.Item('property_name', 'additional_info') = "new_value";
```

