// tsc --watch
// 单元格点击
// 1.获取到所有的单元格列表
// 2.遍历单元格列表，给每一个单元格添加点击事件
// 3.给当前被点击的单元格添加类名 x
var cells = document.querySelectorAll('.cell');
// console.log(cells)
cells.forEach(function (item) {
    var cell_2 = item; // 类型断言
    cell_2.addEventListener('click', clickCell, { once: true }); // 防止重复点击
});
// 棋盘中单元格的click事件处理程序
//使用函数声明形式的事件处理程序（代码多了后，代码结构会更清晰）
function clickCell(event) {
    console.log(event);
    var target = event.target; // 类型断言
    target.classList.add('x');
}
