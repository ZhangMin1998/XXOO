// tsc --watch xx.ts

// 单元格点击
// 1.获取到所有的单元格列表
// 2.遍历单元格列表，给每一个单元格添加点击事件
// 3.给当前被点击的单元格添加类名 x
// 遍历判赢数组，分别判断每种情况对应的 3 个单元格元素，是否同时包含当前玩家的类名。
// 数组的 some 方法：1 遍历数组时可终止 2 方法返回值为 true 或 false。

// 判赢数组
let winsArr = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], //横
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // 竖
  [0, 4, 8], [2, 4, 6] //斜
]

let cells = document.querySelectorAll('.cell')
enum Player { // 替换的内容是字符串，所以是字符串枚举
  X = 'x',
  O = 'o'
}
let currentPlayer = Player.X //创建一个存储当前玩家的变量（currentPlayer)
let gameBord = document.querySelector('#bord') // 拿到预下棋
let message = document.querySelector('#message') as HTMLDivElement //获胜信息面板
let winner = document.querySelector('#winner') as HTMLParagraphElement //获胜者
let restart = document.querySelector('#restart') as HTMLButtonElement //重新开始
// console.log(cells) // 伪数组
let steps = 0 //记录已下棋的次数


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
  steps++

  // 调用判赢函数，判断是否获胜
  // 只要把当前下棋玩家判断，也就判断了每一步
  let isWin = checkWin(currentPlayer)
  if (isWin) {
    winner.innerText = currentPlayer + '赢了'
    message.style.display = 'block'
    return
  }
  // 在判赢的代码后面，判断 steps 是否等于 9  等于9就平均
  if ( steps === 9) {
    winner.innerText = '平局'
    message.style.display = 'block'
    // 如果等于 9 说明是平局，游戏结束，就直接 return，不再执行后续代码。
    return 
 }

  // 根据当前玩家，得到另外一个玩家
  currentPlayer = currentPlayer === Player.X ? Player.O : Player.X
  // 处理下一步提示：移除游戏面板中的 x 和 o 类名，添加下一个玩家对应的类名
  gameBord.classList.remove(Player.X, Player.O)
  gameBord.classList.add(currentPlayer)
}

//封装判赢函数
function checkWin(player: Player) {
  // 使用 some 方法遍历数组，并将 some 方法的返回值作为判赢函数的返回结果。
  
  return winsArr.some(function (item){
    console.log(item) 
    // 在 some 方法的回调函数中，获取到每种获胜情况对应的 3 个单元格元素。
    // 判断这 3 个单元格元素是否同时包含当前玩家的类名。
    // 如果包含（玩家获胜），就在回调函数中返回 true 停止循环；否则，返回 false，继续下一次循环。
    let cellIndex1 = item[0]
    let cellIndex2 = item[1]
    let cellIndex3 = item[2]
    console.log(cellIndex1,cellIndex2,cellIndex3)
    // 通过这三个索引，从cells中获取到对应的单元格元素
    // 前面拿索引，这一步拿格子
    let cell1 = cells[cellIndex1]
    let cell2 = cells[cellIndex2]
    let cell3 = cells[cellIndex3]
    console.log(cell1, cell2, cell3)
    // 完成后干嘛？拿到了格子，要判断格子是否满足条件
    // 判断这 3 个单元格元素是否同时包含当前玩家的类名
    // 重点：
    // 元素是否包含类名 classList.contains();可以去文章1查
    // 同时包含（第一个包含 并且 第二个包含，第三个包含）
    // 逻辑运算符 && 逻辑与，表示并且
    if (
      cell1.classList.contains(player) &&
      cell2.classList.contains(player) &&
      cell3.classList.contains(player)
    ) {
      return true
    }
    return false
  })
}

//重新开始游戏
restart.addEventListener('click', function(){
  window.location.reload()
})
  // return isWin //在写return true后，会自动给checkWin(player: Player)分配类型注解
// }
// 重新开始
// 获取到重新开始按钮（#restart），并绑定点击事件。
// 在点击事件中，重置游戏数据。
// 隐藏获胜信息、清空棋盘、移除单元格点击事件、重新给单元格绑定点击事件。
// 重置下棋次数、重置默认玩家为 x、重置下棋提示为x