import type {
  CssNumericHelpers,
  CssUnitValue,
  CssUnitValueClass,
} from "@positron/css-numeric";
import type { CssNumericRegistryImpl } from "@positron/css-numeric-impl";
import { NUMBER_UNIT, PERCENT_UNIT } from "@positron/css-numeric-impl";
import { CssUnit } from "@positron/css-unit";

/**
 * @public
 */
export class NumericHelpers implements CssNumericHelpers {
  protected readonly CSSUnitValue: CssUnitValueClass;

  public constructor(impl: CssNumericRegistryImpl) {
    this.CSSUnitValue = impl.CSSUnitValue;
  }

  public cap(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cap);
  }

  public ch(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ch);
  }

  public cm(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cm);
  }

  public cqb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqb);
  }

  public cqh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqh);
  }

  public cqi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqi);
  }

  public cqmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqmax);
  }

  public cqmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqmin);
  }

  public cqw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqw);
  }

  public deg(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.deg);
  }

  public dpcm(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dpcm);
  }

  public dpi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dpi);
  }

  public dppx(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dppx);
  }

  public dvb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvb);
  }

  public dvh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvh);
  }

  public dvi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvi);
  }

  public dvmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvmax);
  }

  public dvmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvmin);
  }

  public dvw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvw);
  }

  public em(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.em);
  }

  public ex(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ex);
  }

  public fr(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.fr);
  }

  public grad(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.grad);
  }

  public Hz(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.hz);
  }

  public ic(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ic);
  }

  public in(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.in);
  }

  public kHz(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.khz);
  }

  public lh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lh);
  }

  public lvb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvb);
  }

  public lvh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvh);
  }

  public lvi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvi);
  }

  public lvmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvmax);
  }

  public lvmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvmin);
  }

  public lvw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvw);
  }

  public mm(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.mm);
  }

  public ms(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ms);
  }

  public number(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, NUMBER_UNIT);
  }

  public pc(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.pc);
  }

  public percent(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, PERCENT_UNIT);
  }

  public pt(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.pt);
  }

  public px(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.px);
  }

  public Q(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.q);
  }

  public rad(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rad);
  }

  public rcap(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rcap);
  }

  public rch(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rch);
  }

  public rem(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rem);
  }

  public rex(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rex);
  }

  public ric(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ric);
  }

  public rlh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rlh);
  }

  public s(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.s);
  }

  public svb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svb);
  }

  public svh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svh);
  }

  public svi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svi);
  }

  public svmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svmax);
  }

  public svmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svmin);
  }

  public svw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svw);
  }

  public turn(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.turn);
  }

  public vb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vb);
  }

  public vh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vh);
  }

  public vi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vi);
  }

  public vmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vmax);
  }

  public vmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vmin);
  }

  public vw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vw);
  }
}
