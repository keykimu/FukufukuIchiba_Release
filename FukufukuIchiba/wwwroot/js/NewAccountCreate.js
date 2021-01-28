/*******************************************************************
 * アカウント作成クラス
 ********************************************************************/

var NewAccountCreate = {};

function check() {
    if (accountcreate_form.mail.value == "" || accountcreate_form.nickname.value == ""
        || accountcreate_form.password.value == ""
        || accountcreate_form.password2.value == "") {
        //条件に一致する場合(メールアドレスとパスワードが空の場合)
        alert("ニックネームとメールアドレスとパスワードを入力してください");    //エラーメッセージを出力
        return false;    //送信ボタン本来の動作をキャンセルします
    } else {
        //条件に一致しない場合(メールアドレスが入力されている場合)
        return true;    //送信ボタン本来の動作を実行します
    }
}