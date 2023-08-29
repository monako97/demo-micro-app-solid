import { t } from '@app/locales';
import { useParams } from '@moneko/solid';

function User() {
  const params = useParams();

  return (
    <div>
      {t['user/:id']}
      <pre>
        <code>{JSON.stringify(params, null, 2)}</code>
      </pre>
      <n-table
        columns={{
          order: t.order,
          name: t.username,
          age: t.age,
        }}
        data={[
          { name: '张三', age: 12 },
          { name: '李四', age: 13 },
        ]}
      />
    </div>
  );
}

export default User;
