import type {
  CssNumericHelpers,
  CssUnitValue,
  CssUnitValueClass,
} from "@positron/css-numeric";
import type { CssNumericRegistryImpl } from "@positron/css-numeric-impl";
import { NUMBER_UNIT, PERCENT_UNIT } from "@positron/css-numeric-impl";
import { CssUnit } from "@positron/css-unit";

/**
 * The {@link NumericHelpers} class implements unit factory helper methods
 * matching the global `CSS` namespace API.
 *
 * @public
 */
export class NumericHelpers implements CssNumericHelpers {
  /**
   * The {@link NumericHelpers.CSSUnitValue} read-only property stores the
   * bound `CssUnitValue` constructor.
   */
  protected readonly CSSUnitValue: CssUnitValueClass;

  /**
   * The {@link NumericHelpers} constructor creates a new
   * {@link NumericHelpers} instance.
   *
   * @param impl - The numeric registry providing `CSSUnitValue`.
   */
  public constructor(impl: CssNumericRegistryImpl) {
    this.CSSUnitValue = impl.CSSUnitValue;
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.cap}
   */
  public cap(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cap);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.ch}
   */
  public ch(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ch);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.cm}
   */
  public cm(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cm);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.cqb}
   */
  public cqb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqb);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.cqh}
   */
  public cqh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqh);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.cqi}
   */
  public cqi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqi);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.cqmax}
   */
  public cqmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqmax);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.cqmin}
   */
  public cqmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqmin);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.cqw}
   */
  public cqw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqw);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.deg}
   */
  public deg(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.deg);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.dpcm}
   */
  public dpcm(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dpcm);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.dpi}
   */
  public dpi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dpi);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.dppx}
   */
  public dppx(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dppx);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.dvb}
   */
  public dvb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvb);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.dvh}
   */
  public dvh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvh);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.dvi}
   */
  public dvi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvi);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.dvmax}
   */
  public dvmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvmax);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.dvmin}
   */
  public dvmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvmin);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.dvw}
   */
  public dvw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvw);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.em}
   */
  public em(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.em);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.ex}
   */
  public ex(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ex);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.fr}
   */
  public fr(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.fr);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.grad}
   */
  public grad(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.grad);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.Hz}
   */
  public Hz(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.hz);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.ic}
   */
  public ic(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ic);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.in}
   */
  public in(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.in);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.kHz}
   */
  public kHz(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.khz);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.lh}
   */
  public lh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lh);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.lvb}
   */
  public lvb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvb);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.lvh}
   */
  public lvh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvh);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.lvi}
   */
  public lvi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvi);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.lvmax}
   */
  public lvmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvmax);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.lvmin}
   */
  public lvmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvmin);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.lvw}
   */
  public lvw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvw);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.mm}
   */
  public mm(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.mm);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.ms}
   */
  public ms(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ms);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.number}
   */
  public number(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, NUMBER_UNIT);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.pc}
   */
  public pc(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.pc);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.percent}
   */
  public percent(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, PERCENT_UNIT);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.pt}
   */
  public pt(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.pt);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.px}
   */
  public px(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.px);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.Q}
   */
  public Q(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.q);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.rad}
   */
  public rad(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rad);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.rcap}
   */
  public rcap(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rcap);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.rch}
   */
  public rch(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rch);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.rem}
   */
  public rem(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rem);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.rex}
   */
  public rex(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rex);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.ric}
   */
  public ric(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ric);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.rlh}
   */
  public rlh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rlh);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.s}
   */
  public s(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.s);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.svb}
   */
  public svb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svb);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.svh}
   */
  public svh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svh);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.svi}
   */
  public svi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svi);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.svmax}
   */
  public svmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svmax);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.svmin}
   */
  public svmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svmin);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.svw}
   */
  public svw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svw);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.turn}
   */
  public turn(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.turn);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.vb}
   */
  public vb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vb);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.vh}
   */
  public vh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vh);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.vi}
   */
  public vi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vi);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.vmax}
   */
  public vmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vmax);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.vmin}
   */
  public vmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vmin);
  }

  /**
   * {@inheritDoc @positron/css-numeric#CssNumericHelpers.vw}
   */
  public vw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vw);
  }
}
