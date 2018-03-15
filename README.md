# Vue Component library *prototype*

Basically one component or two, using **@vue/cli**.

1. [@vue/cli-plugin-unit-jest](https://www.npmjs.com/package/@vue/cli-plugin-unit-jest)
2. [configured to create a component library](https://github.com/vuejs/vue-cli/issues/965#issuecomment-373107215)


## Steps

```console
npm i -g
vue create datatable-component
yarn add --dev @vue/cli-plugin-unit-jest
vue invoke unit-jest
```

* Edit [vue.config.js](https://github.com/vuejs/vue-cli/blob/dev/docs/README.md#vueconfigjs)
* Adjust *packge.json*

```diff
diff --git a/package.json b/package.json
index 67efe44..097c3f1 100644
--- a/package.json
+++ b/package.json
@@ -7,0 +8,2 @@
+    "lib": "vue-cli-service build --dest lib --target lib src/main.js",
+    "test": "vue-cli-service test",
```
