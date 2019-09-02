## vue-element-admin
    是一个后台前端解决方案，基于vue和element实现的。提炼了典型的业务模，提供了丰富的功能组件，快速搭建企业级中后台产品原型。

## 目录结构
build                   构建相关

config                  配置相关

src                     源代码

 |—— api                所有请求

 |—— assets             主题、字体等静态资源

 |—— components         全局公用组件
 
 |—— directive          全局指令

 |—— filtres            全局filter(vue过滤器 自定义过滤器，用于一些常见的文本格式化，如时间戳格式化，过滤器应该被添加到js表达式的                         尾部，由‘‘管道’’符号表示用在双括号或者动态绑定里。可链式使用(如：{{ message | filterA | filterB }} 意                          思为 filterA被定义为接受单个参数的过滤器函数，表达式message的值将作为参数传入到函数中。然后继续调用同样被                         定义为接受单个参数的过滤器函数filterB，将filterA的结果传递给filterB作参数)，也可接受参数(如{{ message |                         filterA('arg1',arg2) }} 意思为 filterA被定义为接受三个参数的过滤器函数，message的值作为第一个参数，字                          符串'arg1'作为第二个参数，arg2的值作为第三个参数))

 |—— icons              项目所有的svg,icons

 |—— lang               国际化language

 |—— mock               项目mock 模拟数据

 |—— router             路由

 |—— store              全局 store管理

 |—— styles             全局样式

 |—— utils              全局公用方法

 |—— vendor             全局vendor(这是个啥？)

 |—— views              view

 |—— App.vue            入口页面

 |—— main.js            入口 加载组件 初始化vue实例等

 |—— permission.js      权限管理

static                  第三方不打包资源

 |—— Tinymce            富文本

.babelrc                babel-loader 配置(Babel是一个js编译器，是一个工具链，主要用于将es6+版本的代码转换为向下兼容的js语法)

eslintrc.js             eslint的配置项

.gitignore              git 忽略项

favicon.ico             favicon图标

index.html              html模板

package.json            (每个项目的根目录下，一般都有一个package.json文件，定义了这个项目所需要的各种模块，以及项目的配置信息。                            npm install命令根据这个配置文件，自动下载所需要的模块，也就是配置项目所需的运行和开发环境)

## axios
    Axios是一个基于promise的HTTP请求库，简单来说就是可以发送get,post请求。
- 特性：
    1. 可以在浏览器中创建XMLHttpRequest(XMLHttpRequest对象用于在后台与服务器交换数据，可以做到在不重新加载页面的情况下更新网页，在页面已加载后从服务器请求数据或接受数据，在后台向服务器发送数据)
    2. 可以在node.js发送http请求
    3. 支持Promise的API
    4. 拦截请求和响应(在请求前或响应后进行的处理，如请求之前增加统一的token标识，响应之后对公用的错误进行处理等)
    5. 转换请求数据和响应数据
    6. 取消请求
    7. 自动转换json数据
    8. 客户端支持防御CSRF(防止CSRF:就是让你的每个请求都带一个从cookie中拿到的key, 根据浏览器同源策略，假冒的网站是拿不到你cookie中得key的，这样，后台就可以轻松辨别出这个请求是否是用户在假冒网站上的误导输入，从而采取正确的策略。 )
- token:
    - 引入：token是在客户端频繁向服务端请求数据，服务端频繁的去数据库查询用户名和密码进行比对，判断用户名和密码正确与否，并作出相应提示，在这样的背景下，token应运而生。
    - 概念：token是在服务器端产生的一串字符串。如果前端使用用户名/密码向服务器端认证成功，那么在服务器端会返回token给前端。前端可以在每次请求的时候带上token证明自己的合法地位。如果这个token在服务器端持久化(比如存入数据库)，那它就是一个永久的身份令牌。下次请求，客户端只需要在响应头上带上token,无需再次带上用户名和密码。
    - 目的：减轻服务器的压力，减少频繁的查询数据库，是服务器更加健壮。
    - token需要设置时效吗？ 无论是从安全的角度还是从吊销的角度考虑，token都需要设置有效期。(比如用户的密码会定期改变，SSL安全证书有有效期)
