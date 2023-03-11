# 1. URI와 URL의 차이점

URI 그리고 URL을 혼용해서 사용하는 경우가 있다. 대부분의 경우 문제가 없지만 정확하게 이 둘의 차이점이 존재한다. 그러므로 각 용어의 정의와 용도에 대해서 알아본다.

## 1.1 URI

URI는 특정 리소스를 식별하는 **통합 자원 식별자(Uniform Resource Identifier)**를 의미한다. 웹 기술에서 사용하는 논리적 또는 물리적 리소스를 식별하는 고유한 문자열 시퀀스다.

## 1.2 URL

URL은 흔히 웹 **주소**라고도 하며, 컴퓨터 네트워크 상에서 리소스가 **어디 있는지 알려주기** 위한 규약이다. URI의 서브셋이다.

![https://www.charlezz.com/wordpress/wp-content/uploads/2021/02/www.charlezz.com-uri-url-uri-url-300x300.png](https://www.charlezz.com/wordpress/wp-content/uploads/2021/02/www.charlezz.com-uri-url-uri-url-300x300.png)

비록 URL은 URI의 서브셋이지만 URI와 URL의 가장 큰 차이점은 바로 아래와 같다

> URI는 식별하고, URL은 위치를 가르킨다.

실세계에 빗대어 예시를 들어보자면 다음과 같다.

**“Charles”** 는 내 이름이며 **식별자(Identifier)**다. 이는 URI와 비슷하지만 내 위치나 연락처에 대한 정보가 없으므로 URL은 될 수 없다.

**“경기도 성남시 분당구 정자동 불정로 6”**는 주소다. **주소는 특정 위치를 가르킨다**. URL 및 URI와 비슷하며 간접적으로 내가 있는 장소로 식별한다.

실제 네트워크상에서 URI와 URL을 예시는 다음과 같다.

두 주소는 모두 index.html을 가리키고 있다.

![https://www.charlezz.com/wordpress/wp-content/uploads/2021/03/www.charlezz.com-uri-url-uri-vs-url-1024x320.png](https://www.charlezz.com/wordpress/wp-content/uploads/2021/03/www.charlezz.com-uri-url-uri-vs-url-1024x320.png)

첫번째 주소는 웹서버의 실제 파일 위치를 나타내는 주소이므로 URI이면서 URL이다.두번째 주소는 실제로 index라는 파일이 웹서버에 존재하지 않으므로 URL은 아니다. 하지만 서버 내부에서 이를 처리하여 결국 index.html을 가리키기 때문에 URI라고 볼 수 있다.

# 2. **URI의 구조**

일반 URI는 다음과 같은 형태를 나타낸다.

```
scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]
```

1. scheme : 사용할 프로토콜을 뜻하며 웹에서는 http 또는 https를 사용
2. user와 password : (서버에 있는) 데이터에 접근하기 위한 사용자의 이름과 비밀번호
3. host와 port : 접근할 대상(서버)의 호스트명과 포트번호
4. path : 접근할 대상(서버)의 경로에 대한 상세 정보
5. query : 접근할 대상에 전달하는 추가적인 정보 (파라미터)
6. fragment : 메인 리소스 내에 존재하는 서브 리소스에 접근할 때 이를 식별하기 위한 정보

```
https://www.example.com:8080/path/to/resource?key=value#fragment
```

위의 예시를 분해하면 다음과 같습니다:

- scheme: "https"
- user: n/a (since the URI doesn't include a user)
- password: n/a (since the URI doesn't include a password)
- host: "**[www.example.com](http://www.example.com/)**"
- port: "8080"
- path: "/path/to/resource"
- query: "key=value"
- fragment: "fragment"

즉, 위의 URI는 "https" 스킴을 사용하며, "**[www.example.com](http://www.example.com/)**" 호스트에 "8080" 포트로 연결되며, "/path/to/resource" 경로에 위치하는 "key=value" 쿼리 문자열을 가지고 있으며, "fragment" 프래그먼트 식별자를 포함합니다.

scheme 부분은 http나 https만 있는 것이 아니라, ftp: , file: , mailto: 로 시작하는 것등 여러가지가 있다.

이는 브라우저가 웹 서버에 액세스하는 클라이언트로 사용하는 경우가 많지만 그 외의 경우도 있기 때문이다.

모든 URL에는 하나의 공통점이 잇다. URL의 맨 앞에 있는 문자열, 즉 http: , ftp: , file: , mailto: 부분이다.
이 부분에서 액세스하는 방법을 나타낸다. 액세스 대상이 웹 서버라면 HTTP라는 프로토콜을 사용하여 액세스하고, FTP 서버라면 FTP라는 프로토콜을 사용한다. 그러므로 여기에는 액세스할 때의 프로토콜 종류가 쓰여있다고 생각하면 된다.
