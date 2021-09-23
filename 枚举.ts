// 枚举是组织有关联数据的一种方式（比如，x 和 o 就是有关联的数据）。
// 使用场景：当变量的值， 只能是几个固定值中的一个，应该使用枚举来实现。
// 注意：JS 中没有枚举，这是TS为了弥补 JS 自身不足而新增的。
// enum 枚举名称 { 成员1, 成员2, ... }
// enum是关键字，只有使用它创建；
// 约定枚举名称、成员名称以大写字母开头

enum Gender {
  Female,
  Male
}
// 枚举是一种类型，因此，可以其作为变量的类型注解
let userGender: Gender
userGender = Gender.Female  //使用枚举可以避免不小心写错的问题
// 注意：枚举成员是只读的，也就是说枚举中的成员可以访问，但是不能赋值！
// Gender.Female = '男' // 错误！
console.log(userGender) // 0


// 枚举成员是有值的，默认为：从 0 开始自增的数值。
// 我们把枚举成员的值为数字的枚举，称为：数字枚举
// 当然，也可以给枚举中的成员初始化值。

// enum Gender { Female = 1, Male }  // Female => 1 Male => 2
// enum Gender { Female = 1, Male = 100 } // Female => 1 Male => 100
// 没有设置，就自增长；设置了Female = 1，Male默认为1+1；




// 字符串枚举：枚举成员的值是字符串。
// 注意：字符串枚举没有自增长行为，因此，每个成员必须有初始值
// enum Gender { Female = '女', Male = '男' }
// console.log(Gender.Female) // 女
// console.log(Gender.Male) // 男

// 总结
// 两种常用的枚举总结：
// 数字枚举：枚举成员的值为数字，默认情况下就是数字枚举。
// enum Gender { Female, Male }
// enum Gender { Female = 100, Male } // 初始化成员的值
// 特点：成员的值是从 0 开始自增的数值。

// 字符串枚举：枚举成员的值为字符串。
// enum Gender { Female = '女', Male = '男' }
// 特点：没有自增行为，需要为每一个成员赋值！
// 枚举是一组有名字的常量（只读）的集合。
