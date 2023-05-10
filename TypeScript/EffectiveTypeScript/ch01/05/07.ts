interface ComponentProps {
  onSelectItem: (item: any) => void;
}
function renderSelector(props: ComponentProps) {
  /* ... */
}

let selectedId: number = 0;
function handleSelectItem(item: any) {
  selectedId = item.id;
}

renderSelector({ onSelectItem: handleSelectItem });

export default {};

/**
 * 요약
 *
 * item을 any타입으로 지정해서 any타입에 아무런 값이 와도 상관없게끔 해놓으면 정작 id값에는 number타입이
 * item에는 다른 타입이 온다면 당장은 타입체커가 오류를 피할 수 있지만 런타임에 오류를 발생시킬 수 있는 상황을
 * 만들게 된다. 따라서 any타입을 지양해야 한다.
 */
