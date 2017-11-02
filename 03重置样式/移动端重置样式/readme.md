### 移动端重置样式表

```
@charset "UTF-8";
/**
 * 
 * @authors suibichuanji (itclancode@163.com)
 * @version $Id$
 * @description app移动端重置样式表
 */
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section
{
    margin: 0;
    padding: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section
{
    display: block;
}
h1,
h2,
h3,
h4,
h5,
h6
{
    font-size: 100%;
    font-weight: normal;
}
ul,
ol
{
    list-style: none;
}
strong,
b
{
    font-weight: normal;
}
em,
i
{
    font-style: normal;
}
table
{
    border-spacing: 0;
    border-collapse: collapse;
}
img
{
    vertical-align: middle;

    border: 0;
}
input,
select
{
    font-family: arial,'\5FAE\8F6F\96C5\9ED1',sans-serif;
    font-size: 100%;
    line-height: 150%;

    vertical-align: middle;

    -webkit-appearance: none;
}
a
{
    text-decoration: none;

    outline: none;
    background-color: transparent;

    hide-focus: expression(this.hideFocus=true); /*兼容IE写法*/
    -webkit-tap-highlight-color: transparent; /* 在IOS下 点击链接通过js定义的可点击元素的时候，它就会出现一个半透明的灰色背景
如果不要，就transparent*/
}

body
{
    font: 14px/1.5 arial,'\5FAE\8F6F\96C5\9ED1',sans-serif,Tahoma,Microsoft YaHei,Apple LiGothic medium,Helvetica,Arial,PingFangSC-Regular,'\5b8b\4f53';

    -webkit-text-size-adjust: none; /* 想让网页字体小于12px而不等于12px的需求，那么就可以禁止浏览器文字大小调整功能 none
因为有些英文是需要小于12px的*/
        -ms-text-size-adjust: none;
    -webkit-overflow-scrolling: touch;/*允许独立的滚动区域和触摸回弹,使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比*/
}
::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar-track-piece {
  display: none;
}

::-webkit-scrollbar-thumb:vertical {
  display: none;
}

::-webkit-scrollbar-thumb:horizontal {
  display: none;
}
*
{
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}

/*
       文字大小/行高 文字类型
font:14px/1.5 arial
    14的1.5倍
*/
/*
    outline:none; 轮廓
    hide-focus:expression(this.hideFocus=true); 兼容 针对于IE的写法 效果跟上面一样
*/
/*
-webkit-text-size-adjust:none;
想让网页字体小于12px而不等于12px的需求，那么就可以禁止浏览器文字大小调整功能 none
因为有些英文是需要小于12px的
*/

/*
-webkit-tap-highlight-color:transparent;
在IOS下 点击链接通过js定义的可点击元素的时候，它就会出现一个半透明的灰色背景
如果不要，就transparent
如果要或想设置其他颜色，-webkit-tap-highlight-color: red | green
*/

```

