// // 10.3.5-1判赢数组
// let winsArr = [
//   [0, 1, 2], [3, 4, 5], [6, 7, 8], //横
//   [0, 3, 6], [1, 4, 7], [2, 5, 8], // 竖
//   [0, 4, 8], [2, 4, 6] //斜
// ]

// // 3-1. 创建字符串枚举（Player），提供 X 和 O 两个成员
// enum Player {
//   X = 'x',
//   O = 'o'
// }

// // 1. 获取到所有的单元格列表
// let cells = document.querySelectorAll('.cell')
// // console.log(cells)

// // 游戏面板
// let gameBord = document.querySelector('#bord')

// // 10.3.8-1. 获胜信息面板
// let message = document.querySelector('#message') as HTMLDivElement
// // 10.3.8-1.2 获胜者
// let winner = document.querySelector('#winner') as HTMLParagraphElement
// // 10.4-1.
// let restart = document.querySelector('#restart') as HTMLButtonElement

// // 3-2. 将所有用到 x 和 o 的地方全部使用枚举成员代替。
// // let currentPlayer = 'x'

// // 10.4.2-3.2 移除变量urrentPlayer 的默认值，并添加明确的类型注解。
// // let currentPlayer = Player.X
// let currentPlayer: Player

// // 10.3.7-1. 记录已下棋的次数
// // 10.4.2-3.1 移除变量 steps的默认值，并添加明确的类型注解
// // let steps = 0
// let steps: number

// // 10.4-1.2 绑定点击事件
// // 10.4.2-1. 将原来的回调函数弄出来，声明新函数startGame
// restart.addEventListener('click', startGame)
// // 10.4.2-2. 直接调用函数（startGame）初始化游戏数据，来开始游戏。
// startGame ()
// function startGame (){
// console.log('click')
// // 10.4-3 隐藏获胜信息
// message.style.display= 'none'
// // 10.4-4. 重置下棋次数
// steps = 0
// // 10.4-4.2 重置默认玩家为x
// currentPlayer = Player.X
// // 10.4-4.3 重置下棋提示为x
// gameBord.classList.remove(Player.X, Player.O)
// gameBord.classList.add(Player.X)
  
// // 10.4-3.2 清空棋盘
// // 棋盘的内容添加，是通过添加类名而成的：target_3.classList.add(currentPlayer)
// // 遍历每个单元格，清空
// cells.forEach(function (item){
// let cell = item as HTMLDivElement
// // 10.4-3.2 清空棋盘
// cell.classList.remove(Player.X, Player.O)
// // 这个时候，虽然清楚了棋盘上的XO，但是没法，再点，因为{ once: true }
// // 10.4-3.3 移除单元格点击事件、重新给单元格绑定点击事件。
// cell.removeEventListener('click', clickCell)
// // 10.4-3.3.2 重新给单元格绑定点击事件。
// cell.addEventListener('click', clickCell, { once: true })
// })
// }

// // forEach_1 > clickCell > checkWin > some_isWin
// // 10.4.2-4.1 移除给单元格绑定事件的代码。
// // function forEach_1(item: HTMLDivElement) {

// //     // console.log(item)
// //     // 2.1 给每一个单元格添加点击事件
// //     // let cell_2 = item as HTMLDivElement
// //     item.addEventListener('click', clickCell, { once: true })
// //     // console.log('click') // 打印出点击事件本身
// // }

// function clickCell(event: MouseEvent) {
//   // 3. 给当前被点击的单元格添加类名 x
//   let target_3 = event.target as HTMLDivElement
//   target_3.classList.add(currentPlayer)

//   // 在点击事件后面
//   // 10.3.7-2. 在玩家下棋后，让 steps 加 1。
//   steps++

//   // 10.3.4-2. 调用判赢函数，判断是否获胜;因为是在玩家下棋时判断，所以在点击事件函数里面
//   let isWin = checkWin(currentPlayer)

//   if (isWin) {
//     winner.innerText=currentPlayer + '赢了'
//     message.style.display= 'block'
//     return
//   }

//   // 10.3.7-3在判赢的代码后面，判断 steps 是否等于 9。

//   if ( steps === 9) {
//     // 10.3.7-4.如果等于 9 说明是平局，游戏结束，就直接 return，不再执行后续代码。
//     // 因为游戏已经结束，所以，此处直接return
//     // 来可以阻止后续代码执行
//     winner.innerText= '平局'
//     message.style.display= 'block'
//     return 
//   }
//   console.log('平局之后')

//   // 根据当前玩家，得到另一个玩家
//   currentPlayer = currentPlayer === Player.X ? Player.O : Player.X

//   // 改变下一步提示；
//   gameBord.classList.remove(Player.X, Player.O)
//   gameBord.classList.add(currentPlayer)
// }

// // 10.3.4-1. 封装判赢函数
// function checkWin( player: Player ) {

// // 10.3.5-2. 取消写死的 判赢返回值
// // return true
// // 10.3.5-3. 使用 some 方法遍历数组，并将 some 方法的返回值作为判赢函数的返回结果。
// return winsArr.some(function (item){

//   // 10.3.5-4. 在 some 方法的回调函数中，获取到每种获胜情况对应的 3 个单元格元素。
//   // 4.1 先拿到每种获胜情况的三个索引
//   // 看一下item拿到winsArr的元素没
//   // 要注意，checkWin在函数 clickCell 里面，是一个点击事件，点击才有效果
//   // console.log(item) 
//   let cellIndex1 = item[0]
//   let cellIndex2 = item[1]
//   let cellIndex3 = item[2]

//   // 4.1.1 打印实验：每种获胜情况的三个索引
//   // console.log(cellIndex1,cellIndex2,cellIndex3)
//   // 4.2 通过这三个索引，从cells中获取到对应的单元格元素
//   // 从 4.1.3 过来后
//   // 前面拿索引，这一步拿格子
//   let cell1 = cells[cellIndex1]
//   let cell2 = cells[cellIndex2]
//   let cell3 = cells[cellIndex3]
//   // console.log(cell1, cell2, cell3)

//   // 4.2 完成后干嘛？拿到了格子，要判断格子是否满足条件；
//   // 我们看我们的函数，是some_isWin,它被let isWin = winsArr.some(some_isWin)用着
//   // 被一个some用着，那必须要返回布尔值；
//   // 那么这个判断依然在这里面写；

//   // 10.3.5-5 
//   // 判断这 3 个单元格元素是否同时包含当前玩家的类名。
//   // 重点：
//   // 5.1. 元素是否包含类名 classList.contains();可以去文章1查
//   // 5.2. 同时包含（第一个包含 并且 第二个包含，第三个包含）
//   // 5.3. 逻辑运算符 && 逻辑与，表示并且
//   if (
//     cell1.classList.contains(player) &&
//     cell2.classList.contains(player) &&
//     cell3.classList.contains(player)
//   ) {
//     return true
//   }
//   return false
// })


// }

// // 伪数组cells的遍历；
// function forEach_cells(item) {
//   console.log(item)
// }

// // 2. 遍历单元格列表
// // cells.forEach(forEach_cells)

// // 启动单元格绑定事件
// // 10.4.2-4.1 移除给单元格绑定事件的代码。
// // cells.forEach(forEach_1)