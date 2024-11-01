## Getting Started

首先运行服务

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun d

## 项目目录结构
- app
 - (src) 应用层
 - domain 领域层
    - user 实体业务
        - components 用户相关的通用组件
        - schema 相关参数校验规则
        - constant 用户相关的常量
            - api.ts 用户相关的服务 url 常量
        - service.ts 用户相关的服务
        - utils.ts 用户相关的工具方法
 - base 基础层
    - components 通用组件
    - constant 通用变量
    - styles 通用样式
    - utils 通用方法
 - assets 静态资源
    - fonts 字体
    - images 图片

## 开发组件的流程
 ### 1. 明确组件定位

   想清楚当前要开发的组件属于什么类型，通用-业务、纯UI-带状态、表单-展示

   通用组件，最重要的就是通用，易用性可以适当让步，不应该耦合业务逻辑
   业务组件，易用性更加重要


 ### 2. 列举组件使用实例

   在开发组件是，要先假设这个组件已经开发好了，并给出怎么使用的实例，然后交给团队评审，看看是否符合要求
   不能等代码写完了才拿出来评审

 ### 3. 确定组件的接口

   组件的接口一般包含四部分： 属性 props、事件 events、方法 methods、插槽 slots
   可以像 antd 或者 ElementUI 一样，将每个组件的接口以图表的形式展示出来，同样的，接口应该在开发之前就确定并参与评审

 ### 4. 设计组件的内部数据

   组件的内部数据可以分为元数据（data）和派生数据（computed），开发一个组件之前，应该先把所有组件用到的数据列举出来，然后看看哪些是元数据，哪些可以根据元数据推算出来，进而确定组件的数据结构

   ···
      // 用代码或伪代码形式，展示组件的内部数据结构
      export default {
         data(){
            return {
                  loading: false, //是否展示loading
                  list: [] //列表数据
            }
         },
         computed:{
            vipList(){
                  //对list进行过滤，找出所有vip会员。
                  return this.list(item => item.isVip);
            },
            vipCount(){
                  //vipList的长度
                  return this.vipList.length;
            }
         }
      }
   ···

 ### 5. 梳理组件的交互逻辑

   可以用图或者文字的形式，描述下组件内部各个交互的具体流程是怎么样的
   ···

      组件挂载时：请求**接口，初始化**数据
      点击删除按钮时：校验**，然后二次确认，确认后将 loading 设为 true，调用 ** 接口，关闭 loading， toast 删除成功
      点击保存按钮时：表单校验，不通过则滚动到表单失败出；通过则将 loading 设置为 true， 调用 ** 接口，关闭 loading ， toast 添加成功

   ···

 ### 6. 编码
