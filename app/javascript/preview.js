document.addEventListener('DOMContentLoaded', function(){
  // 新規投稿・編集ページのフォームを取得
  const all_imageForm = document.getElementById('all_image');
   // プレビューを表示するためのスペースを取得
   const previewList = document.getElementById('previews');
  // 新規投稿・編集ページのフォームがないならここで終了。「!」は論理否定演算子。
  if (!all_imageForm) return null;
  console.log("preview.jsが読み込まれました");
  // input要素を取得
  const filebustField = document.querySelector('input[type="file"][name="bustup[image]"]');
  // input要素で値の変化が起きた際に呼び出される関数
  filebustField.addEventListener('change', function(e){
  // 古いプレビューが存在する場合は削除
  const alreadyPreview = document.querySelector('.preview');
  if (alreadyPreview) {
    alreadyPreview.remove();
  };
  console.log("input要素で値の変化が起きました");
  console.log(e.target.files[0]);
  const file = e.target.files[0];
  const blob = window.URL.createObjectURL(file);
  console.log(blob);
  // 画像を表示するためのdiv要素を生成
  const previewWrapper = document.createElement('div');
  previewWrapper.setAttribute('class', 'preview');
  // 表示する画像を生成
  const previewImage = document.createElement('img');
  previewImage.setAttribute('class', 'preview-image');
  previewImage.setAttribute('src', blob);
  // 生成したHTMLの要素をブラウザに表示させる
  previewWrapper.appendChild(previewImage);
  previewList.appendChild(previewWrapper);
  });
});

document.addEventListener('DOMContentLoaded', function(){
  // 新規投稿・編集ページのフォームを取得
  const all_imageForm = document.getElementById('all_image');
   // プレビューを表示するためのスペースを取得
   const previewList = document.getElementById('previews');
  // 新規投稿・編集ページのフォームがないならここで終了。「!」は論理否定演算子。
  if (!all_imageForm) return null;
  console.log("preview.jsが読み込まれました");
  // input要素を取得
  const filechibiField = document.querySelector('input[type="file"][name="chibi[image]"]');
  // input要素で値の変化が起きた際に呼び出される関数
  filechibiField.addEventListener('change', function(e){
  // 古いプレビューが存在する場合は削除
  const alreadyPreview = document.querySelector('.preview');
  if (alreadyPreview) {
    alreadyPreview.remove();
  };
  console.log("input要素で値の変化が起きました");
  console.log(e.target.files[0]);
  const file = e.target.files[0];
  const blob = window.URL.createObjectURL(file);
  console.log(blob);
  // 画像を表示するためのdiv要素を生成
  const previewWrapper = document.createElement('div');
  previewWrapper.setAttribute('class', 'preview');
  // 表示する画像を生成
  const previewImage = document.createElement('img');
  previewImage.setAttribute('class', 'preview-image');
  previewImage.setAttribute('src', blob);
  // 生成したHTMLの要素をブラウザに表示させる
  previewWrapper.appendChild(previewImage);
  previewList.appendChild(previewWrapper);
  });
});

document.addEventListener('DOMContentLoaded', function(){
  // 新規投稿・編集ページのフォームを取得
  const all_imageForm = document.getElementById('all_image');
   // プレビューを表示するためのスペースを取得
   const previewList = document.getElementById('previews');
  // 新規投稿・編集ページのフォームがないならここで終了。「!」は論理否定演算子。
  if (!all_imageForm) return null;
  console.log("preview.jsが読み込まれました");
  // input要素を取得
  const filefullField = document.querySelector('input[type="file"][name="fullbody[image]"]');
  // input要素で値の変化が起きた際に呼び出される関数
  filefullField.addEventListener('change', function(e){
  // 古いプレビューが存在する場合は削除
  const alreadyPreview = document.querySelector('.preview');
  if (alreadyPreview) {
    alreadyPreview.remove();
  };
  console.log("input要素で値の変化が起きました");
  console.log(e.target.files[0]);
  const file = e.target.files[0];
  const blob = window.URL.createObjectURL(file);
  console.log(blob);
  // 画像を表示するためのdiv要素を生成
  const previewWrapper = document.createElement('div');
  previewWrapper.setAttribute('class', 'preview');
  // 表示する画像を生成
  const previewImage = document.createElement('img');
  previewImage.setAttribute('class', 'preview-image');
  previewImage.setAttribute('src', blob);
  // 生成したHTMLの要素をブラウザに表示させる
  previewWrapper.appendChild(previewImage);
  previewList.appendChild(previewWrapper);
  });
});

document.addEventListener('DOMContentLoaded', function(){
  // 新規投稿・編集ページのフォームを取得
  const all_imageForm = document.getElementById('all_image');
   // プレビューを表示するためのスペースを取得
   const previewList = document.getElementById('previews');
  // 新規投稿・編集ページのフォームがないならここで終了。「!」は論理否定演算子。
  if (!all_imageForm) return null;
  console.log("preview.jsが読み込まれました");
  // input要素を取得
  const filehalfField = document.querySelector('input[type="file"][name="halfbody[image]"]');
  // input要素で値の変化が起きた際に呼び出される関数
  filehalfField.addEventListener('change', function(e){
  // 古いプレビューが存在する場合は削除
  const alreadyPreview = document.querySelector('.preview');
  if (alreadyPreview) {
    alreadyPreview.remove();
  };
  console.log("input要素で値の変化が起きました");
  console.log(e.target.files[0]);
  const file = e.target.files[0];
  const blob = window.URL.createObjectURL(file);
  console.log(blob);
  // 画像を表示するためのdiv要素を生成
  const previewWrapper = document.createElement('div');
  previewWrapper.setAttribute('class', 'preview');
  // 表示する画像を生成
  const previewImage = document.createElement('img');
  previewImage.setAttribute('class', 'preview-image');
  previewImage.setAttribute('src', blob);
  // 生成したHTMLの要素をブラウザに表示させる
  previewWrapper.appendChild(previewImage);
  previewList.appendChild(previewWrapper);
  });
});