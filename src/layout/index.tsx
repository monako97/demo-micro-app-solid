import { For } from 'solid-js';
import { locales, setLang, t } from '@app/locales';
import routes, { RouteConfig } from '@app/routes';
import { Outlet, useNavigate } from '@moneko/solid';
import styles from './index.less';

type AllRoute = {
  path: string;
  meta?: RouteConfig['meta'];
};

// 纯演示用的无关代码: 将路由转换成按钮数据
function transformRoutes(inputRoutes: RouteConfig[], parentPath?: string, result: AllRoute[] = []) {
  for (const route of inputRoutes) {
    const { path, meta, children } = route;
    const fullPath = [parentPath, path].join('/').split('/').filter(Boolean).join('/');
    const transformedRoute: AllRoute = { path: fullPath, meta };

    if (children) {
      transformRoutes(children, fullPath, result);
    } else {
      result.push(transformedRoute);
    }
  }

  return result;
}

function App() {
  const all = transformRoutes(routes);
  const navigate = useNavigate();

  return (
    <div>
      <p>
        {t.go}:
        <For each={all}>
          {(item) => {
            return (
              <n-button
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {[item.path || '/', item.meta?.title].filter(Boolean)}
              </n-button>
            );
          }}
        </For>
      </p>
      <p>
        {t.lang}:
        <For each={locales}>
          {(item) => {
            return (
              <n-button
                onClick={() => {
                  setLang(item.language);
                }}
              >
                {item.title}
              </n-button>
            );
          }}
        </For>
      </p>
      <main class={styles.main}>
        {t.outlet}:
        <Outlet />
      </main>
    </div>
  );
}

export default App;
