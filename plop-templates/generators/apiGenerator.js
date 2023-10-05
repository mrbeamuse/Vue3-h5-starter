module.exports = {
  description: "create an api file",
  prompts: [
    {
      type: "input",
      name: "apiName",
      message: "please enter api name :",
      default: "news"
    }
  ],
  actions: function () {
    let actions = [];
    actions.push({
      type: "add",
      path: "src/api/{{ apiName }}.ts",
      templateFile: "plop-templates/templates/api.hbs"
    });
    // 修改已存在文件的内容
    actions.push({
      type: "modify",
      path: "src/api/index.ts",
      pattern: /(\/\/ append export)/gi,
      // camelCase 用来将输入的名称转化为驼峰
      template: `export * from "./{{ apiName }}";\r\n$1`
    });
    actions.push({
      type: "modify",
      path: "src/router/index.ts",
      pattern: /(\/\/ append new router)/gi,
      // camelCase 用来将输入的名称转化为驼峰
      // $1 用于在结束的时候添加匹配的占位，用于下次使用
      template: "...{{ camelCase name }}Router,\r\n$1"
    });
    return actions;
  }
};
