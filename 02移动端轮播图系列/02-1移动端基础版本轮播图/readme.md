### 移动端轮播图

* 普通方法

  * 跟pc端原理一样,改变left的值(移动端不会这么做)
  * 但有left会回流问题

* 标准方法(移动端方法常用)

  * 改变translateX的值
  * translateX不脱离文档流,不改变文档大小和位置
  * 虽然可以解决回流问题,但太单一了,没法进行拓展

* transform

  * transform:不脱离文档流,仍然占原有的位置


  * translate  水平或垂直方向偏移量
  * scale         等比缩放倍数
  * Rotate      水平或垂直方向旋转
  * transform-style 指定嵌套元素是怎么样在三维空间中呈现的
  * perspective  设置从何处查看一个元素的角度

* Transition属性过度

  * Transition-prooerty: 指定css属性的name
  * transition-duration: 执行属性的变化在多少货毫秒完成
  * transition-timing-function:属性比那话的运动形式
  * transition-delay:延迟多少秒或毫秒后执行属性的变化

* transition在webkit内核下的浏览下执行或闪烁

  * 给运动的元素开启3D加速transform3D
  * 给运动的元素提升层级
  * 给运动元素本身加上backface-visibility:hidden;
  * 给运动元素的父级加上transform-style:preserve-3d;



* 支持硬件加速的浏览器,在检测到页面中某个DOM元素应用了某些css规则就会开启,最显著的特征的元素的3D变换-webkit-transform:translate3d(250px,250px,250px) rotate3d(x,y,z,0deg) scale3d(0.5,0.5,0.5)
* 课时在一些情况下,我们并不需要对元素应用3D变换的效果,那么怎么办?这时候我们可以使用一个小技巧欺骗浏览器来开启硬件加速器,虽然我们可能不想对元素应用3D变换,可我们一样可以开启3D引擎,例如我们可以用translateZ(0);来开启硬件加速,-webkit-transform:translateZ(0)
* 在chrome and Safari中,当我们使用css transforms或者animations时可能会有页面闪烁的效果,下面的代码可以修复此情况,-webkit-backface-visibility:hidden,-webkit-perspecive:1000
* 在webkit内核的浏览器中,另一个有效的方法是-webkit-transform:translate3d(0,0,0)



### 总结

a. 只对我们需要实现动画效果的元素应用以上方法,如果仅仅为了开启硬件加速而随便乱用,那是不可取的

b. 使用GPU可能会导致严重的性能问题，因为它增加了内存的使用,而且它会减少移动端设备电池的寿命



