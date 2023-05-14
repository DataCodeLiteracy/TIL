interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}
type TopNavState = {
  userId: State["userId"];
  pageTitle: State["pageTitle"];
  recentFiles: State["recentFiles"];
};

export default {};

/**
 * 요약
 *
 * 인덱싱을 이용해서 타입에서 중복을 제거한다.
 */
