// tsc --watch xx.ts

// 单元格点击
// 1.获取到所有的单元格列表
// 2.遍历单元格列表，给每一个单元格添加点击事件
// 3.给当前被点击的单元格添加类名 x

let cells = document.querySelectorAll('.cell')
enum Player { // 替换的内容是字符串，所以是字符串枚举
  X = 'x',
  O = 'o'
}
let currentPlayer = Player.X //创建一个存储当前玩家的变量（currentPlayer)
let gameBord = document.querySelector('#bord') // 拿到预下棋
// console.log(cells)

cells.forEach(function(item){
  let cell = item as HTMLDivElement // 类型断言
  cell.addEventListener('click', clickCell, { once: true }) // 防止重复点击
})
// 棋盘中单元格的click事件处理程序
//使用函数声明形式的事件处理程序（代码多了后，代码结构会更清晰）
function clickCell(event: MouseEvent){
  // console.log(event)
  let target = event.target as HTMLDivElement // 类型断言
  target.classList.add(currentPlayer)

  // 根据当前玩家，得到另外一个玩家
  currentPlayer = currentPlayer === Player.X ? Player.O : Player.X
  // 处理下一步提示：移除游戏面板中的 x 和 o 类名，添加下一个玩家对应的类名
  gameBord.classList.remove(Player.X, Player.O)
  gameBord.classList.add(currentPlayer)
}