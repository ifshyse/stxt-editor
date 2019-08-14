var fonts = []
  fonts.push("PingFang SC");
  fonts.push("Hiragino Sans GB");
  fonts.push("microsoft yahei");
  fonts.push("simsun");
  fonts.push("cursive");
  fonts.push("monospace");
  fonts.push("serif");
  fonts.push("sans-serif");
  fonts.push("fantasy");
  fonts.push("default");
  fonts.push("Arial");
  fonts.push("Arial Black");
  fonts.push("Arial Rounded MT Bold");
  fonts.push("Bookman Old Style");
  fonts.push("Bradley Hand ITC");
  fonts.push("Century");
  fonts.push("Century Gothic");
  fonts.push("Comic Sans MS");
  fonts.push("Courier");
  fonts.push("Courier New");
  fonts.push("Georgia");
  fonts.push("Gentium");
  fonts.push("Impact");
  fonts.push("King");
  fonts.push("Lucida Console");
  fonts.push("Lalit");
  fonts.push("Modena");
  fonts.push("Monotype Corsiva");
  fonts.push("Papyrus");
  fonts.push("Tahoma");
  fonts.push("TeX");
  fonts.push("Times");
  fonts.push("Times New Roman");
  fonts.push("Trebuchet MS");
  fonts.push("Verdana");
  fonts.push("Verona");

var font_arr = []
var d = new Detector();
  for (i = 0; i < fonts.length; i++) {
      var result = d.detect(fonts[i]);
      if (result == true) {
          font_arr.push(fonts[i]);
      }
  }
  
var f = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];  
var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': f }],
  ['link'],
  ['video'],
  [{ 'align': [] }],
  ['clean']                                         // remove formatting button
];

var Font = Quill.import('attributors/class/font'); 
Font.whitelist = f; //将字体加入到白名单 
Quill.register(Font, true);

var quill = new Quill('#editor-container', {
  modules: {
    syntax: true,
    toolbar: toolbarOptions
  },
  placeholder: '请输入内容...',
  theme: 'snow'  // or 'bubble'
});

hljs.configure({   // optionally configure hljs
  languages: ['javascript', 'ruby', 'python']
});

// 提交表单
function sub_post() {
  var html = document.querySelector('#editor-container').children[0].innerHTML;
  html = '<div class="ql-container ql-snow"><div class="ql-editor">'+html+"</div></div>";
  $('[name=content]').val(html);

  $("#submitForm").submit();
}
