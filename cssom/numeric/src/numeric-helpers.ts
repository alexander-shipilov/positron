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
   * {@inheritDoc CssNumericHelpers.cap}
   */
  public cap(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cap);
  }

  /**
   * {@inheritDoc CssNumericHelpers.ch}
   */
  public ch(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ch);
  }

  /**
   * {@inheritDoc CssNumericHelpers.cm}
   */
  public cm(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cm);
  }

  /**
   * {@inheritDoc CssNumericHelpers.cqb}
   */
  public cqb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqb);
  }

  /**
   * {@inheritDoc CssNumericHelpers.cqh}
   */
  public cqh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqh);
  }

  /**
   * {@inheritDoc CssNumericHelpers.cqi}
   */
  public cqi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqi);
  }

  /**
   * {@inheritDoc CssNumericHelpers.cqmax}
   */
  public cqmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqmax);
  }

  /**
   * {@inheritDoc CssNumericHelpers.cqmin}
   */
  public cqmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqmin);
  }

  /**
   * {@inheritDoc CssNumericHelpers.cqw}
   */
  public cqw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.cqw);
  }

  /**
   * {@inheritDoc CssNumericHelpers.deg}
   */
  public deg(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.deg);
  }

  /**
   * {@inheritDoc CssNumericHelpers.dpcm}
   */
  public dpcm(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dpcm);
  }

  /**
   * {@inheritDoc CssNumericHelpers.dpi}
   */
  public dpi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dpi);
  }

  /**
   * {@inheritDoc CssNumericHelpers.dppx}
   */
  public dppx(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dppx);
  }

  /**
   * {@inheritDoc CssNumericHelpers.dvb}
   */
  public dvb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvb);
  }

  /**
   * {@inheritDoc CssNumericHelpers.dvh}
   */
  public dvh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvh);
  }

  /**
   * {@inheritDoc CssNumericHelpers.dvi}
   */
  public dvi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvi);
  }

  /**
   * {@inheritDoc CssNumericHelpers.dvmax}
   */
  public dvmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvmax);
  }

  /**
   * {@inheritDoc CssNumericHelpers.dvmin}
   */
  public dvmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvmin);
  }

  /**
   * {@inheritDoc CssNumericHelpers.dvw}
   */
  public dvw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.dvw);
  }

  /**
   * {@inheritDoc CssNumericHelpers.em}
   */
  public em(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.em);
  }

  /**
   * {@inheritDoc CssNumericHelpers.ex}
   */
  public ex(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ex);
  }

  /**
   * {@inheritDoc CssNumericHelpers.fr}
   */
  public fr(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.fr);
  }

  /**
   * {@inheritDoc CssNumericHelpers.grad}
   */
  public grad(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.grad);
  }

  /**
   * {@inheritDoc CssNumericHelpers.Hz}
   */
  public Hz(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.hz);
  }

  /**
   * {@inheritDoc CssNumericHelpers.ic}
   */
  public ic(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ic);
  }

  /**
   * {@inheritDoc CssNumericHelpers.in}
   */
  public in(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.in);
  }

  /**
   * {@inheritDoc CssNumericHelpers.kHz}
   */
  public kHz(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.khz);
  }

  /**
   * {@inheritDoc CssNumericHelpers.lh}
   */
  public lh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lh);
  }

  /**
   * {@inheritDoc CssNumericHelpers.lvb}
   */
  public lvb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvb);
  }

  /**
   * {@inheritDoc CssNumericHelpers.lvh}
   */
  public lvh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvh);
  }

  /**
   * {@inheritDoc CssNumericHelpers.lvi}
   */
  public lvi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvi);
  }

  /**
   * {@inheritDoc CssNumericHelpers.lvmax}
   */
  public lvmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvmax);
  }

  /**
   * {@inheritDoc CssNumericHelpers.lvmin}
   */
  public lvmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvmin);
  }

  /**
   * {@inheritDoc CssNumericHelpers.lvw}
   */
  public lvw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.lvw);
  }

  /**
   * {@inheritDoc CssNumericHelpers.mm}
   */
  public mm(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.mm);
  }

  /**
   * {@inheritDoc CssNumericHelpers.ms}
   */
  public ms(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ms);
  }

  /**
   * {@inheritDoc CssNumericHelpers.number}
   */
  public number(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, NUMBER_UNIT);
  }

  /**
   * {@inheritDoc CssNumericHelpers.pc}
   */
  public pc(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.pc);
  }

  /**
   * {@inheritDoc CssNumericHelpers.percent}
   */
  public percent(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, PERCENT_UNIT);
  }

  /**
   * {@inheritDoc CssNumericHelpers.pt}
   */
  public pt(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.pt);
  }

  /**
   * {@inheritDoc CssNumericHelpers.px}
   */
  public px(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.px);
  }

  /**
   * {@inheritDoc CssNumericHelpers.Q}
   */
  public Q(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.q);
  }

  /**
   * {@inheritDoc CssNumericHelpers.rad}
   */
  public rad(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rad);
  }

  /**
   * {@inheritDoc CssNumericHelpers.rcap}
   */
  public rcap(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rcap);
  }

  /**
   * {@inheritDoc CssNumericHelpers.rch}
   */
  public rch(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rch);
  }

  /**
   * {@inheritDoc CssNumericHelpers.rem}
   */
  public rem(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rem);
  }

  /**
   * {@inheritDoc CssNumericHelpers.rex}
   */
  public rex(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rex);
  }

  /**
   * {@inheritDoc CssNumericHelpers.ric}
   */
  public ric(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.ric);
  }

  /**
   * {@inheritDoc CssNumericHelpers.rlh}
   */
  public rlh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.rlh);
  }

  /**
   * {@inheritDoc CssNumericHelpers.s}
   */
  public s(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.s);
  }

  /**
   * {@inheritDoc CssNumericHelpers.svb}
   */
  public svb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svb);
  }

  /**
   * {@inheritDoc CssNumericHelpers.svh}
   */
  public svh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svh);
  }

  /**
   * {@inheritDoc CssNumericHelpers.svi}
   */
  public svi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svi);
  }

  /**
   * {@inheritDoc CssNumericHelpers.svmax}
   */
  public svmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svmax);
  }

  /**
   * {@inheritDoc CssNumericHelpers.svmin}
   */
  public svmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svmin);
  }

  /**
   * {@inheritDoc CssNumericHelpers.svw}
   */
  public svw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.svw);
  }

  /**
   * {@inheritDoc CssNumericHelpers.turn}
   */
  public turn(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.turn);
  }

  /**
   * {@inheritDoc CssNumericHelpers.vb}
   */
  public vb(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vb);
  }

  /**
   * {@inheritDoc CssNumericHelpers.vh}
   */
  public vh(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vh);
  }

  /**
   * {@inheritDoc CssNumericHelpers.vi}
   */
  public vi(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vi);
  }

  /**
   * {@inheritDoc CssNumericHelpers.vmax}
   */
  public vmax(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vmax);
  }

  /**
   * {@inheritDoc CssNumericHelpers.vmin}
   */
  public vmin(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vmin);
  }

  /**
   * {@inheritDoc CssNumericHelpers.vw}
   */
  public vw(value: number): CssUnitValue {
    return new this.CSSUnitValue(value, CssUnit.vw);
  }
}
