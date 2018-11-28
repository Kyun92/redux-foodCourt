# Redux Food Court

## 🤝 intro

![Food Court](./gif/FoodCourt.gif)

Group-B에서 진행중인 CRUD를 어떤 걸로 연습할까 고민중에 [@velopert - mobx (3)](https://velog.io/@velopert/MobX-3-심화적인-사용-및-최적화-방법-tnjltay61n)의 예제가 상당히 저희 프로젝트인 `orderbook` 형태와 비슷하여 View 부분은 그대로 따오고 mobx부분을 Redux로 바꾸는 연습을 해보았습니다.
~~확실히 mobx가 코드양이 더 적은건 어쩔 수 없는 거 같습니다~~

## 👍 Immer JS

리액트의 핵심은 불변성 유지라고 생각합니다. 개인적으로는 이 부분이 러닝커브를 더 깊게 하는 요소 중 하나라고 생각하는데, 이를 조금이라도 쉽게 해주는 것이 `Immutable JS` 와 `Immer JS` 입니다.

이중에 한번 Immer를 직접 사용해봤고 이것은 상당히 신선했습니다. immer를 적용을 하면 불변성을 지키기위해 객체를 복사하고 붙여놓고 하던 행위를 무시하고 그냥 push해버려도 알아서 처리해주는 편리함을 경험하게 되었습니다.

```js
[INSERT]: (state, action) =>
      produce(state, draft => {
        draft.list.push({
          id: action.payload.name,
          name: action.payload.name,
          price: action.payload.price,
          count: 1
        });
      }),
```

> 불변성을 무시하고 그냥 push하면 알아서 처리해줍니다.

이 역시 [@velopert - Redux (4) Immutable.js 혹은 Immer.js 를 사용한 더 쉬운 불변성 관리](https://velog.io/@velopert/20180908-1909-작성됨-etjltaigd1)에서 잘 설명되어 있습니다.

## 🤔 Action, Container size..

리덕스를 익숙해지는 과정에서 가장 고민됐던 부분은 container의 크기(?)인 것 같습니다.

container에서 state와 action을 dispatch 후 이를 콜하는 방식에 대해 이해하는 중입니다. 하지만 코드를 짜다보면 예외처리라던가, 분기처리 등 많은 경우의 수가 생기고 이것을 어디에서 수행을 해야 할지 아직은 잘 모르겠습니다.

`container`에서 수행을 하자니 디스패치 후 prop으로 하위 컴포넌트에 전달해주는 순수한 형태가 깨지고 점점 container의 복잡도는 올라가는 모습을 보게 되었습니다.

그렇다고 해서 `Action`에 복잡도를 키우자니 왠지 Action은 복잡도가 없는 순수한 한가지 기능만을 초점에 두는 것이 나중에 모듈화 했을때 더 용의하다고 생각듭니다.

제 개인적으로는 _'Action은 순수 한 기능만을 구현하는 함수여야 한다.'_ 라는 생각이 들어 작성한 코드에서는 모든 분기처리를 `Container`에 작성 했습니다.

결국 어느 코드나 마찬가지로 이도 어느 정도의 타협이 필요할 것 같습니다.

## 🙌 마무리

혹시라도 저와 같은 연습을 하실 분이 계실까바 `onlyView` 브런치에 view만 구현해놓은 코드를 담아 놨습니다. 저도 리액트와 리덕스를 배워가는 중이라 제 코드가 상당부분 엉터리일 수도 있지만 참고하시면서 틀린 부분이 있다면 알려주시면 감사하겠습니다.🙏
