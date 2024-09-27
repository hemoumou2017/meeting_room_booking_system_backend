<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-09-26 09:39:49
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-09-27 15:06:07
 * @FilePath: /nest学习/meeting_room_booking_system_backend/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## first step

```
创建 nest 项目，并引入了 typeorm 和 redis。

创建了 User、Role、Permission 的 entity，通过 typeorm 的自动建表功能，在数据库创建了对应的 3 个表和 2 个中间表。

引入了 nodemailer 来发邮件，如果是线上可以买阿里云或者其他平台的邮件推送服务。

实现了 /user/register 和 /user/register-captcha 两个接口。

/user/register-captcha 会向邮箱地址发送一个包含验证码的邮件，并在 redis 里存一份。

/user/register 会根据邮箱地址查询 redis 中的验证码，验证通过会把用户信息保存到表中。

```

## second step

```
配置抽离、基于 jwt 登录、鉴权功能。

配置抽离使用 @nestjs/config 包，把配置放在 src 下的 .env 文件里，然后代码里从 configService 读取配置。

这样可以配置 nest-cli.json 的 assets 和 watchAssets 来自动把 env 文件复制到 dist 目录下。

我们使用代码做的数据初始化，线上要删掉这个接口，用导出的 sql 文件来初始化。

登录成功之后，返回 access_token、refresh_token 还有用户信息、roles、permissions 等。

并支持使用 refreshToken 来刷新 token。

之后使用 LoginGuard、PermissionGuard 来做登录和权限的鉴权，根据 handler 上的 metadata 来确定要不要做鉴权、需要什么权限。

封装了几个自定义装饰器，用于方便的设置 metadata，从 request 取数据注入 handler。

```

## third step

```
添加了 interceptor 用来对响应格式做转换，改成 {code、message、data} 的格式，用到了 map 操作符。

并且还用 interceptor 实现了接口访问的日志记录，用到 tap 操作符。

然后实现了修改信息、修改密码的接口。

这些流程都差不多，首先实现一个查询的接口用来回显数据，通过 vo 封装返回的数据。

然后提交数据进行更新，用到的 userId 通过之前封装的 @UserInfo 装饰器从 request.user 来取。
```

## 第四步

```
自定义 exception filter，catch 了 HTTPException，返回了自定义格式的响应，统一了响应格式。

冻结用户接口比较简单，就是修改 users 表的一个字段。

用户列表支持了分页查询和模糊搜索：

分页查询就是根据 (pageNo -1) * pageSize 计算出从哪里开始，然后取 pageSize 条。

模糊搜索就是通过 like 来匹配。

此外，ParseIntPipe 我们自定义了错误格式，还使用了 DefaultValuePipe 设置了默认值。
```

## 第五步

```
swagger 生成了接口文档。

在 main.ts 里调用 SwaggerModule.setup 来生成接口文档。

然后用 @ApiQuery、@ApiBody、@ApiResponse、@ApiProperty 等来标识每个接口的参数和响应。

并且通过 @ApiBearerAuth 标识需要 jwt 认证的接口。

返回对象的接口需要把它封装成 vo，然后再添加 @ApiProperty。


```
