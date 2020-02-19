//import:导入
//import:后面的大阔号的变量名必须与导出的接口的变量名相同
//import:变量名是只读的，不能修改，但是新增可以的
//as:可以重新命名
//default:默认的
import {a } from './2.es6的模块管理'



export default function(){

}
import yy from './2.es6的模块管理'


//导出一组用    * as 名字 from " "
export const A=1
export const B=2
export const C=3
//另一个页面中
import *as xy from "./2.es6的模块管理"
xy.A