# CSR / SSR with Next.js

# 1. CSR의 개념과 장단점

CSR은 클라이언트 사이드 렌더링(Client-Side Rendering)의 줄임말로, SSR(Server-Side Rendering)과 대비되는 개념이다. 웹 애플리케이션의 렌더링을 클라이언트 측에서 처리하는 방식을 의미한다. CSR에서는 초기 HTML, CSS, JavaScript 파일을 다운로드한 후, 클라이언트 측에서 JavaScript를 사용하여 동적으로 컨텐츠를 생성하고 렌더링한다.

### CSR의 장점

1. 사용자 경험: CSR은 빠른 초기 로딩 속도를 제공할 수 있다. 초기 페이지 요청 후 필요한 자원만 요청하여 보다 빠른 로딩이 가능하다.
2. 상호작용성: 클라이언트 측에서 렌더링이 이루어지므로, 사용자와의 상호작용이 빠르고 반응적이다.
3. 서버 부담 감소: 서버는 단순히 정적 파일을 제공하고 API 요청에 대한 응답만 처리하면 되므로 서버 부하가 줄어든다.
4. 재사용 가능한 로직: 클라이언트 측에서 모든 렌더링이 이루어지므로, 서버와 상관없이 독립적으로 프론트엔드 로직을 개발할 수 있다. 따라서 더 유연한 웹 페이지를 개발할 수 있다.

### CSR의 단점

1. 초기 로딩 속도: 페이지가 로드될 때 초기에 필요한 JavaScript 파일의 다운로드가 필요하므로 초기 로딩 속도가 상대적으로 느릴 수 있다. 즉, 페에지 로딩 시간, TTV(Time To View)가 길다
2. SEO 문제: CSR은 검색 엔진 최적화에 어려움을 겪을 수 있다. 초기 HTML에는 동적으로 생성되는 컨텐츠가 포함되지 않으므로 검색 엔진이 페이지를 색인하는 데 어려움이 있을 수 있다.
3. 사용자 경험의 의존성: CSR은 JavaScript가 비활성화된 상태에서는 동작하지 않을 수 있으므로 사용자가 JavaScript를 활성화해야 한다.
4. 보안에 취약: 클라이언트에 모든 파일을 다운로드하기 때문에 보안에 취약하다.

### 정리

CSR은 동적이고 인터랙티브한 사용자 경험을 제공하며, 서버 부하를 줄이고 개발자에게 유연성을 제공한다. 그러나 초기 로딩 속도와 SEO에 대한 고려가 필요하며, JavaScript 의존성에 의해 사용자 경험에 영향을 받을 수 있다는 단점도 있다.

# 2. SPA로 구성된 웹 앱에서 SSR의 필요성

SPA(Single Page Application)는 클라이언트 측에서 모든 렌더링을 처리하는 웹 애플리케이션이다. SPA는 초기 로딩 후에는 페이지 전체를 다시 렌더링하지 않고, 필요한 데이터만을 동적으로 로드하여 업데이트 한다. 이러한 SPA의 구조는 빠른 상호작용성과 부드러운 사용자 경험을 제공하는 장점을 가지고 있다.

### SPA에서 SSR을 도입하는 이유

1. 검색 엔진 최적화(SEO): 일반적으로 SPA는 초기 HTML에 동적으로 생성되는 컨텐츠를 포함시키지 않는다. 이는 검색 엔진이 페이지를 색인하는 데 어려움을 겪을 수 있다. SSR을 통해 초기 렌더링을 서버 측에서 처리하면 검색 엔진이 페이지의 컨텐츠를 쉽게 인식하고 색인할 수 있다.
2. 초기 로딩 속도 개선: SPA는 초기에 필요한 JavaScript 파일을 다운로드하고 실행하는 과정이 필요하다. 이로 인해 초기 로딩 속도가 느릴 수 있다. SSR을 사용하면 서버에서 미리 렌더링된 HTML을 제공하여 초기 로딩 속도를 개선할 수 있다. 사용자는 빠른 페이지 표시를 경험하고, JavaScript 파일이 로드되는 동안에도 컨텐츠를 볼 수 있다.
3. 소셜 미리보기: 일부 소셜 미디어 플랫폼은 웹 페이지를 미리보기할 때 서버에서 렌더링된 HTML을 사용한다. SSR을 적용하면 소셜 미디어에서 웹 앱의 미리보기를 정확하게 표시할 수 있다.
4. 장치 및 네트워크 호환성: SSR은 클라이언트 측 JavaScript의 의존도를 낮추기 때문에, 일부 장치나 네트워크 환경에서도 잘 작동할 수 있다.

# 3. Next.js Github 레포지토리

## Next.js 프로젝트에서 yarn start(or npm run start) 스크립트를 실행했을 때 실행되는 코드를 Next.js Github 레포지토리에서 찾은 뒤, 해당 파일에 대한 간단한 설명을 첨부해주세요.

### packages/next/src/bin/next.ts 파일

```jsx
#!/usr/bin/env node
import * as log from '../build/output/log'
import arg from 'next/dist/compiled/arg/index.js'
import { NON_STANDARD_NODE_ENV } from '../lib/constants'
import { commands } from '../lib/commands'
;['react', 'react-dom'].forEach((dependency) => {
  try {
    // When 'npm link' is used it checks the clone location. Not the project.
    require.resolve(dependency)
  } catch (err) {
    console.warn(
      `The module '${dependency}' was not found. Next.js requires that you include it in 'dependencies' of your 'package.json'. To add it, run 'npm install ${dependency}'`
    )
  }
})

const defaultCommand = 'dev'
const args = arg(
  {
    // Types
    '--version': Boolean,
    '--help': Boolean,
    '--inspect': Boolean,

    // Aliases
    '-v': '--version',
    '-h': '--help',
  },
  {
    permissive: true,
  }
)

// Version is inlined into the file using taskr build pipeline
if (args['--version']) {
  console.log(`Next.js v${process.env.__NEXT_VERSION}`)
  process.exit(0)
}

// Check if we are running `next <subcommand>` or `next`
const foundCommand = Boolean(commands[args._[0]])

// Makes sure the `next --help` case is covered
// This help message is only showed for `next --help`
// `next <subcommand> --help` falls through to be handled later
if (!foundCommand && args['--help']) {
  console.log(`
    Usage
      $ next <command>

    Available commands
      ${Object.keys(commands).join(', ')}

    Options
      --version, -v   Version number
      --help, -h      Displays this message

    For more information run a command with the --help flag
      $ next build --help
  `)
  process.exit(0)
}

const command = foundCommand ? args._[0] : defaultCommand

if (['experimental-compile', 'experimental-generate'].includes(command)) {
  args._.push('--build-mode', command)
}

const forwardedArgs = foundCommand ? args._.slice(1) : args._

if (args['--inspect'])
  throw new Error(
    `--inspect flag is deprecated. Use env variable NODE_OPTIONS instead: NODE_OPTIONS='--inspect' next ${command}`
  )

// Make sure the `next <subcommand> --help` case is covered
if (args['--help']) {
  forwardedArgs.push('--help')
}

const defaultEnv = command === 'dev' ? 'development' : 'production'

const standardEnv = ['production', 'development', 'test']

if (process.env.NODE_ENV) {
  const isNotStandard = !standardEnv.includes(process.env.NODE_ENV)
  const shouldWarnCommands =
    process.env.NODE_ENV === 'development'
      ? ['start', 'build']
      : process.env.NODE_ENV === 'production'
      ? ['dev']
      : []

  if (isNotStandard || shouldWarnCommands.includes(command)) {
    log.warn(NON_STANDARD_NODE_ENV)
  }
}

;(process.env as any).NODE_ENV = process.env.NODE_ENV || defaultEnv
;(process.env as any).NEXT_RUNTIME = 'nodejs'

// x-ref: https://github.com/vercel/next.js/pull/34688#issuecomment-1047994505
if (process.versions.pnp === '3') {
  const nodeVersionParts = process.versions.node
    .split('.')
    .map((v) => Number(v))

  if (
    nodeVersionParts[0] < 16 ||
    (nodeVersionParts[0] === 16 && nodeVersionParts[1] < 14)
  ) {
    log.warn(
      'Node.js 16.14+ is required for Yarn PnP 3.20+. More info: https://github.com/vercel/next.js/pull/34688#issuecomment-1047994505'
    )
  }
}

// Make sure commands gracefully respect termination signals (e.g. from Docker)
// Allow the graceful termination to be manually configurable
if (!process.env.NEXT_MANUAL_SIG_HANDLE && command !== 'dev') {
  process.on('SIGTERM', () => process.exit(0))
  process.on('SIGINT', () => process.exit(0))
}

commands[command]()
  .then((exec) => exec(forwardedArgs))
  .then(() => {
    if (command === 'build') {
      // ensure process exits after build completes so open handles/connections
      // don't cause process to hang
      process.exit(0)
    }
  })
```

yarn start(or npm run start) 했을 때 동작하는 파일은 위에 있는 파일일거라 추정하고 있습니다.

### import 구문 해석

```jsx
import * as log from '../build/output/log'
import arg from 'next/dist/compiled/arg/index.js'
import { NON_STANDARD_NODE_ENV } from '../lib/constants'
import { commands } from '../lib/commands'
```

- output/log.ts 파일
    
    여러가지 log 메세지를 출력하는 파일이라 생각한다. next.ts 파일에서는 주로 log.warn을 사용하고 있다. 경고메세지를 출력할 때 사용하는 것 같다.
    
    ```jsx
    import chalk from '../../lib/chalk'
    
    export const prefixes = {
      wait: '- ' + chalk.cyan('wait'),
      error: '- ' + chalk.red('error'),
      warn: '- ' + chalk.yellow('warn'),
      ready: '- ' + chalk.green('ready'),
      info: '- ' + chalk.cyan('info'),
      event: '- ' + chalk.magenta('event'),
      trace: '- ' + chalk.magenta('trace'),
    }
    
    export function wait(...message: any[]) {
      console.log(prefixes.wait, ...message)
    }
    
    export function error(...message: any[]) {
      console.error(prefixes.error, ...message)
    }
    
    export function warn(...message: any[]) {
      console.warn(prefixes.warn, ...message)
    }
    
    export function ready(...message: any[]) {
      console.log(prefixes.ready, ...message)
    }
    
    export function info(...message: any[]) {
      console.log(prefixes.info, ...message)
    }
    
    export function event(...message: any[]) {
      console.log(prefixes.event, ...message)
    }
    
    export function trace(...message: any[]) {
      console.log(prefixes.trace, ...message)
    }
    
    const warnOnceMessages = new Set()
    export function warnOnce(...message: any[]) {
      if (!warnOnceMessages.has(message[0])) {
        warnOnceMessages.add(message.join(' '))
        warn(...message)
      }
    }
    ```
    
- arg/index.js 파일
    
    해당 파일은 번들링 된 후에 생성되는 파일이라 생각된다. next 깃헙 레퍼지토리 말고 각자 로컬에서 next로 프로젝트 설치 후 생성되는 node_modules 안에 있는 dist 폴더 안에 해당 파일이 있다. arg와 arg.flag와 관련이 있는 것 같다.
    
    ```jsx
    (
      ()=>{var e={774:e=>{const r=Symbol("arg flag");
      
      function arg(e,{argv:t,permissive:n=false,stopAtPositional:o=false}={}){
        if(!e){throw new Error("Argument specification object is required")}
          const i={_:[]};
          t=t||process.argv.slice(2);const a={};
          const s={};
    
          for(const t of Object.keys(e)){
            if(!t){throw new TypeError("Argument key cannot be an empty string")}
              if(t[0]!=="-"){
                throw new TypeError(`Argument key must start with '-' but found: '${t}'`)
              }
              if(t.length===1){
                throw new TypeError(`Argument key must have a name; singular '-' keys are not allowed: ${t}`)
              }
              if(typeof e[t]==="string"){
                a[t]=e[t];continue
              }
              let n=e[t];
              let o=false;
              if(Array.isArray(n)&&n.length===1&&typeof n[0]==="function"){
                const[e]=n;n=(r,t,n=[])=>{n.push(e(r,t,n[n.length-1]));return n};o=e===Boolean||e[r]===true
              } else if(typeof n==="function"){
                o=n===Boolean||n[r]===true
              } else {
                throw new TypeError(`Type missing or not a function or valid array type: ${t}`)
              }
              if(t[1]!=="-"&&t.length>2){
                throw new TypeError(`Short argument keys (with a single hyphen) must have only one character: ${t}`)
              }
              s[t]=[n,o]
            }
            for(let e=0,r=t.length;e<r;e++){
              const r=t[e];
              if(o&&i._.length>0){
                i._=i._.concat(t.slice(e));
                break
              }
              if(r==="--")
              {i._=i._.concat(t.slice(e+1));
                break
              }if(r.length>1&&r[0]==="-"){
                const o=r[1]==="-"||r.length===2?[r]:r.slice(1).split("").map((e=>`-${e}`));
                for(let r=0;r<o.length;r++){
                  const l=o[r];const[f,u]=l[1]==="-"?l.split("=",2):[l,undefined];
                  let c=f;
                  while(c in a){c=a[c]}if(!(c in s)){
                    if(n){
                      i._.push(l);continue
                    } else {
                      const e=new Error(`Unknown or unexpected option: ${f}`);
                      e.code="ARG_UNKNOWN_OPTION";throw e
                    }
                  }
                  const[p,_]=s[c];
                  if(!_&&r+1<o.length){
                    throw new TypeError(`Option requires argument (but was followed by another short argument): ${f
                    }`)
                  }if(_){
                    i[c]=p(true,c,i[c])}else if(u===undefined){
                      if(t.length<e+2||t[e+1].length>1&&t[e+1][0]==="-"){
                        const e=f===c?"":` (alias for ${c})`;
                        throw new Error(`Option requires argument: ${f}${e}`)
                      }
                    i[c]=p(t[e+1],c,i[c]);++e
                  } else { 
                    i[c]=p(u,c,i[c])
                  }
                }
              } else { i._.push(r) }
            } return i
          } arg.flag=e=>{
            e[r]=true;return e
          };
          arg.COUNT=arg.flag(((e,r,t)=>(t||0)+1));
          e.exports=arg
        }
      };
      var r={};
      function __nccwpck_require__(t){var n=r[t];
        if(n!==undefined){
          return n.exports
        }
        var o=r[t]={
          exports:{}
        };
        var i=true;
        try { 
          e[t](o,o.exports,__nccwpck_require__);
          i=false
        } finally { 
          if(i)delete r[t]
        } return o.exports
      } if(typeof __nccwpck_require__!=="undefined")
      __nccwpck_require__.ab=__dirname+"/";
      var t=__nccwpck_require__(774);
      module.exports=t
    }
    )();
    ```
    
- lib/constants.ts 파일
    
    ```jsx
    const defaultEnv = command === 'dev' ? 'development' : 'production'
    
    const standardEnv = ['production', 'development', 'test']
    
    if (process.env.NODE_ENV) {
      const isNotStandard = !standardEnv.includes(process.env.NODE_ENV)
      const shouldWarnCommands =
        process.env.NODE_ENV === 'development'
          ? ['start', 'build']
          : process.env.NODE_ENV === 'production'
          ? ['dev']
          : []
    
      if (isNotStandard || shouldWarnCommands.includes(command)) {
        log.warn(NON_STANDARD_NODE_ENV)
      }
    }
    ```
    
    해당 코드에서 process.env.NODE_ENV가 'development'인 경우 shouldWarnCommands는 ['start', 'build']로 설정되며, 'production'인 경우 ['dev']로 설정한다. 그리고 표준 환경 값이 아니거나 실행되는 command가 경고가 필요한 명령이면 경고 메세지를 출력하는 것 같다. 이때 NON_STANDARD_NODE_ENV에 할당되어 있는 메세지를 출력한다.
    
    ```jsx
    // ../lib/constants.ts
    export const NON_STANDARD_NODE_ENV = `You are using a non-standard 
    "NODE_ENV" value in your environment. This creates inconsistencies in the 
    project and is strongly advised against. Read more: https://nextjs.org/docs
    /messages/non-standard-node-env`
    ```
    
- lib/commands 파일
    
    ```jsx
    // ../lib/commands.ts
    export type CliCommand = (argv?: string[]) => void
    
    export const commands: { [command: string]: () => Promise<CliCommand> } = {
      build: () => Promise.resolve(require('../cli/next-build').nextBuild),
      start: () => Promise.resolve(require('../cli/next-start').nextStart),
      export: () => Promise.resolve(require('../cli/next-export').nextExport),
      dev: () => Promise.resolve(require('../cli/next-dev').nextDev),
      lint: () => Promise.resolve(require('../cli/next-lint').nextLint),
      telemetry: () =>
        Promise.resolve(require('../cli/next-telemetry').nextTelemetry),
      info: () => Promise.resolve(require('../cli/next-info').nextInfo),
      'experimental-compile': () =>
        Promise.resolve(require('../cli/next-build').nextBuild),
      'experimental-generate': () =>
        Promise.resolve(require('../cli/next-build').nextBuild),
    }
    ```
    
    CommonJS 형식, 즉 require 구문을 이용해서 각 command를 Promise 객체로 리턴하는 함수다. cli 폴더에 가보면 해당 파일들이 각각 존재한다. next-build파일 하나만 체크해보자.
    
    - cli/next-build.ts
        
        점점 모르겠다;ㅋ 일단 확실한 한 가지는 여기서도 args라는 객체를 많이 이용하는 것 같다. 
        
        이제 next.ts 파일로 가서 다음 코드부터 하나씩 이해해보자.
        
        ```jsx
        #!/usr/bin/env node
        import { existsSync } from 'fs'
        import arg from 'next/dist/compiled/arg/index.js'
        import * as Log from '../build/output/log'
        import { CliCommand } from '../lib/commands'
        import build from '../build'
        import { printAndExit } from '../server/lib/utils'
        import isError from '../lib/is-error'
        import { getProjectDir } from '../lib/get-project-dir'
        
        const nextBuild: CliCommand = (argv) => {
          const validArgs: arg.Spec = {
            // Types
            '--help': Boolean,
            '--profile': Boolean,
            '--debug': Boolean,
            '--no-lint': Boolean,
            '--no-mangling': Boolean,
            '--experimental-app-only': Boolean,
            '--experimental-turbo': Boolean,
            '--experimental-turbo-root': String,
            '--build-mode': String,
            // Aliases
            '-h': '--help',
            '-d': '--debug',
          }
        
          let args: arg.Result<arg.Spec>
          try {
            args = arg(validArgs, { argv })
          } catch (error) {
            if (isError(error) && error.code === 'ARG_UNKNOWN_OPTION') {
              return printAndExit(error.message, 1)
            }
            throw error
          }
          if (args['--help']) {
            printAndExit(
              `
              Description
                Compiles the application for production deployment
        
              Usage
                $ next build <dir>
        
              <dir> represents the directory of the Next.js application.
              If no directory is provided, the current directory will be used.
        
              Options
              --profile                Can be used to enable React Production Profiling
              --no-lint                Disable linting
              --no-mangling            Disable mangling
              --experimental-app-only  Only build 'app' routes
              --experimental-turbo     Enable experimental turbo mode
              --help, -h               Displays this message
            `,
              0
            )
          }
          if (args['--profile']) {
            Log.warn('Profiling is enabled. Note: This may affect performance')
          }
          if (args['--no-lint']) {
            Log.warn('Linting is disabled')
          }
          if (args['--no-mangling']) {
            Log.warn(
              'Mangling is disabled. Note: This may affect performance and should only be used for debugging purposes'
            )
          }
          const dir = getProjectDir(args._[0])
        
          // Check if the provided directory exists
          if (!existsSync(dir)) {
            printAndExit(`> No such directory exists as the project root: ${dir}`)
          }
        
          if (args['--experimental-turbo']) {
            process.env.TURBOPACK = '1'
          }
        
          return build(
            dir,
            args['--profile'],
            args['--debug'] || process.env.NEXT_DEBUG_BUILD,
            !args['--no-lint'],
            args['--no-mangling'],
            args['--experimental-app-only'],
            !!process.env.TURBOPACK,
            args['--experimental-turbo-root'],
            args['--build-mode'] || 'default'
          ).catch((err) => {
            console.error('')
            if (
              isError(err) &&
              (err.code === 'INVALID_RESOLVE_ALIAS' ||
                err.code === 'WEBPACK_ERRORS' ||
                err.code === 'BUILD_OPTIMIZATION_FAILED' ||
                err.code === 'NEXT_EXPORT_ERROR' ||
                err.code === 'NEXT_STATIC_GEN_BAILOUT' ||
                err.code === 'EDGE_RUNTIME_UNSUPPORTED_API')
            ) {
              printAndExit(`> ${err.message}`)
            } else {
              console.error('> Build error occurred')
              printAndExit(err)
            }
          })
        }
        
        export { nextBuild }
        ```
        
    

### 본문 코드 해석

일단 react와 react-dom이라는 두 개의 dependency가 프로젝트에서 사용가능한지 확인하고 에러가 발생하면 console.warn으로 경고 메세지를 출력한다.

```jsx
['react', 'react-dom'].forEach((dependency) => {
  try {
    // When 'npm link' is used it checks the clone location. Not the project.
    require.resolve(dependency)
  } catch (err) {
    console.warn(
      `The module '${dependency}' was not found. Next.js requires that you include it in 'dependencies' of your 'package.json'. To add it, run 'npm install ${dependency}'`
    )
  }
})
```

그리고 기본 명령값은 dev로 되어 있고, 다양한 실행 명령어를 정해놓은 것 같다. 가령 next -v 라고 터미널에 입력하면 버전 정보를 보여주는 식이다. 당연히 next —version을 alias로 정해놓았기 때문에 가능할 것이다. 

```jsx
const defaultCommand = 'dev'
const args = arg(
  {
    // Types
    '--version': Boolean,
    '--help': Boolean,
    '--inspect': Boolean,

    // Aliases
    '-v': '--version',
    '-h': '--help',
  },
  {
    permissive: true,
  }
)
```

그리고 버전정보를 확인하고 프로세스를 종료하는 코드..

```jsx
if (args['--version']) {
  console.log(`Next.js v${process.env.__NEXT_VERSION}`)
  process.exit(0)
}
```

—help 옵션일 때 어떤 메세지를 출력하는지 보여주는 코드다. 

```jsx
const foundCommand = Boolean(commands[args._[0]])

// Makes sure the `next --help` case is covered
// This help message is only showed for `next --help`
// `next <subcommand> --help` falls through to be handled later
if (!foundCommand && args['--help']) {
  console.log(`
    Usage
      $ next <command>

    Available commands
      ${Object.keys(commands).join(', ')}

    Options
      --version, -v   Version number
      --help, -h      Displays this message

    For more information run a command with the --help flag
      $ next build --help
  `)
  process.exit(0)
}
```

'experimental-compile', 'experimental-generate' 이 경우에는 명령에 —build-mode를 추가해주는 것 같고, —inspect는 사장되는 것 같다.

```jsx
const command = foundCommand ? args._[0] : defaultCommand

if (['experimental-compile', 'experimental-generate'].includes(command)) {
  args._.push('--build-mode', command)
}

const forwardedArgs = foundCommand ? args._.slice(1) : args._

if (args['--inspect'])
  throw new Error(
    `--inspect flag is deprecated. Use env variable NODE_OPTIONS instead: NODE_OPTIONS='--inspect' next ${command}`
  )

// Make sure the `next <subcommand> --help` case is covered
if (args['--help']) {
  forwardedArgs.push('--help')
}
```

Yarn Plug'n'Play (PnP) 버전 3의 환경에서 Node.js 버전이 충족되지 않을 경우 경고를 출력한다.

```jsx
// x-ref: https://github.com/vercel/next.js/pull/34688#issuecomment-1047994505
if (process.versions.pnp === '3') {
  const nodeVersionParts = process.versions.node
    .split('.')
    .map((v) => Number(v))

  if (
    nodeVersionParts[0] < 16 ||
    (nodeVersionParts[0] === 16 && nodeVersionParts[1] < 14)
  ) {
    log.warn(
      'Node.js 16.14+ is required for Yarn PnP 3.20+. More info: https://github.com/vercel/next.js/pull/34688#issuecomment-1047994505'
    )
  }
}
```

그 다음 코드는 잘 모르겠다..

```jsx
// Make sure commands gracefully respect termination signals (e.g. from Docker)
// Allow the graceful termination to be manually configurable
if (!process.env.NEXT_MANUAL_SIG_HANDLE && command !== 'dev') {
  process.on('SIGTERM', () => process.exit(0))
  process.on('SIGINT', () => process.exit(0))
}

commands[command]()
  .then((exec) => exec(forwardedArgs))
  .then(() => {
    if (command === 'build') {
      // ensure process exits after build completes so open handles/connections
      // don't cause process to hang
      process.exit(0)
    }
  })
```

### 정리

나름 해석해보자면, 명령어를 확인해서 args라는 변수에 저장하고 해당 명령어와 옵션에 따른 동작을 수행하고 실행 결과에 따라 프로세스의 동작을 제어하는 파일인 것 같다.