module.exports = {
  description: "create a component",
  // 定义终端的询问方式
  prompts: [
    {
      type: "input",
      name: "componentName", // 作为接收用户输入结果的键
      message: "please enter component name :",
      default: "MyComponent"
    }
    // 组件自动引入不需要全局注册
    // {
    //   type: "confirm",
    //   name: "globalRegister",
    //   message: "do you want to globally register this component ?",
    //   default: "Y"
    // }
  ],
  // 定义生成器在收集完用户的回答后需要进行的任务
  // actions: function (data) {
  actions: function () {
    let actions = [];
    // const lowerComponentName = data.componentName.toLowerCase();
    actions.push({
      type: "add", // 代表添加文件
      path: `src/components/{{componentName}}/index.vue`, // 这里的name就是上面定义的键
      templateFile: "plop-templates/templates/component.hbs"
    });
    // if (data.globalRegister) {
    //   actions.push({
    //     type: "modify",
    //     path: "src/components/index.ts",
    //     pattern: /(\/\/ import new components)/gi,
    //     template:
    //       "import {{ componentName }} from './{{ componentName }}/index.vue'\r\n$1"
    //   });
    //   actions.push({
    //     type: "modify",
    //     path: "src/components/index.ts",
    //     pattern: /(\/\/ add new components)/gi,
    //     template: "{{ componentName }},\r\n$1"
    //   });
    // }
    return actions;
  }
};
