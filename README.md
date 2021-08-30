# patch-package example

patch-package를 이용하면 npm package 내 수정이 필요한 부분을 수정하고 저장할 수 있습니다.

### How to use

**install**

```
yarn add patch-package postinstall-postinstall
```

**add postinstall script**

```
"scripts" : {
  "postinstall": "patch-package"
}
```

**Fix a bug in one of your packages**  
node_modules/rc-slider/lib/Range.d.ts

```ts
pushable?: boolean | number;
```

**Run patch-package to create a .patch**

```
yarn patch-package rc-slider
```

다음과 같이 patch를 만들어 줍니다.

```patch
diff --git a/node_modules/rc-slider/lib/Range.d.ts b/node_modules/rc-slider/lib/Range.d.ts
index 225634f..e85f262 100644
--- a/node_modules/rc-slider/lib/Range.d.ts
+++ b/node_modules/rc-slider/lib/Range.d.ts
@@ -8,7 +8,7 @@ export interface RangeProps extends GenericSliderProps {
     min?: number;
     max?: number;
     allowCross?: boolean;
-    pushable?: boolean;
+    pushable?: boolean | number;
     onChange?: (value: number[]) => void;
     onBeforeChange?: (value: number[]) => void;
     onAfterChange?: (value: number[]) => void;

```

**update**

```
git add .
git commit "fix(rc-slider): fix Range.d.ts"
git push origin fix/rc-slider
```

### Reference

- [patch-package](https://www.npmjs.com/package/patch-package)
- [postinstall-postinstall을 사용하는 이유](https://www.npmjs.com/package/patch-package#why-use-postinstall-postinstall-with-yarn)
