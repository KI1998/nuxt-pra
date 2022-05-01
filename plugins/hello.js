export default (context, inject) => {
  const hello = (msg) => console.log(`Hello ${msg}!`);

  // injectを利用してVueインスタンスとContextに追加する。inject()の第一引数はkey,　第二引数はvalue
  // injectした関数はクライアントサイドではinjectのkeyを利用してthis.$hello、サーバーサイドではcontext.$helloで実行することができる
  inject("hello", hello);
  console.log("context", context);
}
