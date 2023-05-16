type FillPaint = unknown;
type LinePaint = unknown;
type PointPaint = unknown;
type FillLayout = unknown;
type LineLayout = unknown;
type PointLayout = unknown;
interface FillLayer {
  layout: FillLayout;
  paint: FillPaint;
}
interface LineLayer {
  layout: LineLayout;
  paint: LinePaint;
}
interface PointLayer {
  layout: PointLayout;
  paint: PointPaint;
}
type Layer = FillLayer | LineLayer | PointLayer;

export default {};

/**
 * 요약
 *
 * 인터페이스내에서 유니온을 활용하는 것은 문제가 있을 수 있다. 따라서 인터페이스로 각자 분리해서 유니온을 활용하자.
 */
